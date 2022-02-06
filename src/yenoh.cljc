(ns yenoh
  (:require [honey.sql :as sql]
            [clojure.walk :refer [postwalk]]
            #?(:clj  [instaparse.core :as insta :refer [defparser]]
               :cljs [instaparse.core :as insta :refer-macros [defparser]])))


;;; https://ronsavage.github.io/SQL/sql-92.bnf.html#query%20specification
(def parse-select
  (insta/parser
    "
    query_spec            := <'SELECT'> set_quantifier? select_list table_expr
    set_quantifier        := 'ALL' | 'DISTINCT'

    select_list           := '*' | ( select_sublist (<comma> select_sublist)* )
    select_sublist        := derived_column | qualifier '.' '*'
    derived_column        := column_ref as_clause?

    <as_clause>           := 'AS'? column_name

    column_ref            := (qualifier '.')? column_name
    column_name           := identifier


    table_expr            := from_clause where_clause?
    from_clause           := 'FROM' table_ref (comma table_ref)*
    table_ref             := table_name correlation_spec? | joined_table

    correlation_spec      := 'AS'? identifier

    (* qualified join only *)
    joined_table          := table_ref join_type? <'JOIN'> table_ref join_spec?
    join_type             := 'INNER' | ('LEFT' | 'RIGHT' | 'FULL') 'OUTER'?

    (* 'USING' is not supported' *)
    <join_spec>           := <'ON'> search_condition

    table_name            := identifier

    where_clause          := 'WHERE' search_condition

    (* search condition *)
    <search_condition>    := boolean_term | search_condition 'OR' boolean_term
    boolean_term          := boolean_factor | boolean_term 'AND' boolean_factor
    <boolean_factor>      := 'NOT'? boolean_primary
    boolean_primary       := predicate | '(' search_condition ')'

    <predicate>           := comparison_pred
    (*                     | between_pred
                           | in_pred
                           | like_pred
                           | null_pred
                           | exists_pred
    *)
    comparison_pred       := value_expr comp_op value_expr

    value_expr            := numeric_value_expr | string_value_expr

    <numeric_value_expr>  := numeric_primary
    <numeric_primary>     := value_expr_primary

    <value_expr_primary>  := unsigned_value_spec | column_ref

    unsigned_value_spec   := unsigned_literal
    <unsigned_literal>    := unsigned_numeric_literal | char_string_literal

    unsigned_numeric_literal := unsigned_int ( '.' unsigned_int? )?

    (* literals *)
    <quote>               := \"'\"
    <backtick>            := '`'

    char_string_literal   := <quote> '1' <quote>
    <char_representation> := #\"[^']\"

    <unsigned_int>        := '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'

    (* query expr components *)
    <string_value_expr>   := char_value_expr
    <char_value_expr>     := char_primary

    <char_primary>        := value_expr_primary

    <qualifier>           := table_name
    <identifier>          := #\"[_a-zA-Z][_a-zA-Z0-9]*\" | <backtick> #\"[_a-zA-Z][_a-zA-Z0-9]*\"<backtick>

    <comp_op>             := '=' | '<>' | '<' | '>' | '<=' | '>='

    <comma>               := ','
    "

    ;:output-format :enlive
    :string-ci true
    :auto-whitespace :standard))


(defn honey->sql [honey]
  (let [sql (sql/format honey {:inline true :pretty true})]
    (-> sql first clojure.string/trim)))

(defn honey->ast [q]
  ((comp parse-select honey->sql) q))

;;; emit

(defmulti emit first)

(defmethod emit :query_spec [[_ select-list tables]]
  (apply merge select-list tables))

(defmethod emit :select_list [[_ & args]]
  {:select (if (= (first args) "*")
             [:*]
             (vec args))})

(defmethod emit :select_sublist [[_ & args]]
  (case (count args)
    1
    (first args)

    ;; `tn.*` form
    3
    (let [[tn p1 p2] args]
      (assert (= p1 "."))
      (assert (= p2 "*"))
      (keyword (str (name tn) ".*")))))

(defmethod emit :derived_column [[_ & args]]
  (case (count args)
    ;; without alias
    1
    (first args)

    ;; with alias
    3
    (let [[cn _as alias] args]
      [cn alias])))

(defmethod emit :column_name [[_ cn]]
  (keyword cn))

(defmethod emit :column_ref [[_ & args]]
  (case (count args)
    ;; unqualified
    1
    (first args)

    ;; qualified
    3
    (let [[tn _ cn] args]
      (keyword (str (name tn) "." (name cn))))))

(defmethod emit :join_type [[_ & args]]
  (let [join_type (first args)]
    (case join_type
      "INNER" :join
      "LEFT" :left-join
      "RIGHT" :right-join
      "FULL" :full)))

(defmethod emit :joined_table [[_ t1 join-type t2 spec]]
  [join-type t1 t2 spec])

(defmethod emit :correlation_spec [[_ & args]]
  (case (count args)
    ;; without as
    1 (keyword (first args))
    ;; with as
    2 (keyword (second args))))

(defmethod emit :table_name [[_ tn]]
  (keyword tn))

(defmethod emit :table_ref [[_ & args]]
  (vec args))

(defn flatten-joins [node]
  (cond
    ;; table without alias
    (keyword? node)
    {:from [node]}

    (vector? node)
    (case (count node)
      ;; nested join
      1
      (recur (first node))

      ;; table with alias
      2
      {:from [node]}

      ;; flatten
      4
      (let [[join-type t1 t2 join-spec] node]
        (update (flatten-joins t1) join-type (fnil conj []) t2 join-spec)))))

(defmethod emit :from_clause [[_ _from tables]]
  (flatten-joins tables))

(defmethod emit :table_expr [[_ & args]]
  args)

(defmethod emit :boolean_term [[_ & args]]
  (case (count args)
    1
    (first args)

    ;; term 'AND' factor
    3
    (let [[term AND factor] args]
      (assert (= AND "AND"))
      [:and term factor])))

(defmethod emit :boolean_primary [[_ & args]]
  (case (count args)
    1
    (first args)

    3
    (let [[p0 p1 p2] args]
      (if (and (= p0 "(") (= p2 ")"))
        p1
        args))))

(defmethod emit :comparison_pred [[_ & args]]
  (let [[[lhs] op [rhs]] args]
    [(case op
       "=" :=) lhs rhs]))

;; emit literally
(defmethod emit :default [node]
  (let [[tag & args] node]
    (assert (#{:value_expr :unsigned_numeric_literal :unsigned_value_spec} tag)
            (str "no method for tag: " node))
    args
    ))


(defn ast->honey [ast]
  (postwalk (fn [v]
              (if (vector? v)
                (emit v)
                v))
            ast))



(comment
  (let [q   {:select    [:bsa.id
                         [:fmc.code_name :offline_market_name]]
             :from      [[:bulk_sale_applications :bsa]]
             :left-join [[:bulk_sale_market_sales_info :bsmsi] [:= :bsmsi.bulk_sale_application_id :bsa.id]
                         [:farm_market_codes :fmc] [:= :fmc.id :bsmsi.farm_market_code_id]]}
        ast (honey->ast q)]
    (postwalk (fn [v]
                ;(println "VISIT" v)
                (let [e (if (vector? v)
                          (emit v)
                          v)]
                  ;(println "EMIT" e)
                  e)
                ) ast))

  )