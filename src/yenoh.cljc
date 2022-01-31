(ns yenoh
  (:require [honey.sql :as sql]
            [clojure.walk :refer [postwalk]]
            #?(:clj  [instaparse.core :as insta :refer [defparser]]
               :cljs [instaparse.core :as insta :refer-macros [defparser]])))


"" "
;; mysql 8.0 select spec

SELECT
    [ALL | DISTINCT | DISTINCTROW ]
    [HIGH_PRIORITY]
    [STRAIGHT_JOIN]
    [SQL_SMALL_RESULT] [SQL_BIG_RESULT] [SQL_BUFFER_RESULT]
    [SQL_NO_CACHE] [SQL_CALC_FOUND_ROWS]
    select_expr [, select_expr] ...
    [into_option]
    [FROM table_references
      [PARTITION partition_list]]
    [WHERE where_condition]
    [GROUP BY {col_name | expr | position}, ... [WITH ROLLUP]]
    [HAVING where_condition]
    [WINDOW window_name AS (window_spec)
        [, window_name AS (window_spec)] ...]
    [ORDER BY {col_name | expr | position}
      [ASC | DESC], ... [WITH ROLLUP]]
    [LIMIT {[offset,] row_count | row_count OFFSET offset}]
    [into_option]
    [FOR {UPDATE | SHARE}
        [OF tbl_name [, tbl_name] ...]
        [NOWAIT | SKIP LOCKED]
      | LOCK IN SHARE MODE]
    [into_option]

into_option: {
    INTO OUTFILE 'file_name'
        [CHARACTER SET charset_name]
        export_options
  | INTO DUMPFILE 'file_name'
  | INTO var_name [, var_name] ...
}
" ""

;;; https://ronsavage.github.io/SQL/sql-92.bnf.html#query%20specification
(def parse-select
  (insta/parser
    "
    select                := <'SELECT'> set_quantifier? select_list table_expr
    set_quantifier        := 'ALL' | 'DISTINCT'

    select_list           := '*' | ( select_sublist (<comma> select_sublist)* )
      <select_sublist>      := derived_column | qualifier '.' '*'
      derived_column        := column_ref as_clause?

      <as_clause>           := 'AS'? column_name

      column_ref            := (qualifier '.')? column_name
      column_name           := identifier


    table_expr            := from_clause
      from_clause           := 'FROM' table_ref (comma table_ref)*
      table_ref             := table_name correlation_spec? | joined_table

      correlation_spec      := 'AS'? identifier

      (* qualified join only *)
      joined_table          := table_ref join_type? <'JOIN'> table_ref join_spec?
      join_type           := 'INNER' | ('LEFT' | 'RIGHT' | 'FULL') 'OUTER'?

      (* 'USING' is not supported' *)
      join_spec             := <'ON'> boolean_term

      table_name            := identifier

    <boolean_term>        := boolean_factor
      <boolean_factor>        := 'NOT'? predicate

      <predicate>           := comparison_pred
      (*                     | between_pred
                             | in_pred
                             | like_pred
                             | null_pred
                             | exists_pred
      *)
      <comparison_pred>     := value_expr comp_op value_expr
      <comp_op>             := '=' | '<>' | '<' | '>' | '<=' | '>='

    (* 개미지옥이다... *)
    value_expr           := numeric_value_expr  | string_value_expr

      <numeric_value_expr>    := #\"\\d+\"
      <string_value_expr>     := character_value_expr

      <character_value_expr>  := value_expr_primary

      <value_expr_primary>    := column_ref


    <qualifier>           := table_name
    (* regular identifier *)
    <identifier>          := #\"[a-zA-Z_]+\"

    <comma>               := ','
    "

    ;:output-format :enlive
    :string-ci true
    :auto-whitespace :standard))


(defn honey->ast [q]
  (let [sql (first (sql/format q))]
    (parse-select sql)))

(defn honey->sql [honey]
  (let [sql (sql/format honey {:pretty true})]
    (-> sql first clojure.string/trim)))


;;; emit

(defmulti emit first)

(defmethod emit :select [[_ select-list tables]]
  (apply merge select-list tables))

(defmethod emit :select_list [[_ & args]]
  {:select (vec args)})

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

(defmethod emit :join_spec [[_ & args]]
  (let [[[_ lhs] op [_ rhs]] args]
    [(case op
       "=" :=) lhs rhs]))

(defmethod emit :joined_table [[_ t1 type t2 spec]]
  (let [join-type (case (second type)
                    "INNER" :join
                    "LEFT" :left-join)]
    [join-type t1 t2 spec]))

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
        (update (flatten-joins t1) join-type (fnil conj []) t2 join-spec)))
    ))

(defmethod emit :from_clause [[_ _from tables]]
  (flatten-joins tables))

(defmethod emit :table_expr [[_ & args]]
  args)

(defmethod emit :default [node]
  (let [[tag & args] node]
    ;(println "skipping " tag)
    (if (#{} tag)
      args
      node)))


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

  (let [q   {:select    [:bsa.id
                         :bsa.created_at
                         :bsa.progress
                         :pcc.gl_crop_name
                         :pcc.code_name_new
                         :bsc.estimated_purchase_price_min
                         :bsc.estimated_purchase_price_max
                         :bsc.preferred_grade
                         :bsc.preferred_quantity
                         :bsc.estimated_seller_earning_rate
                         :u.name
                         :u.phone_num
                         :u.region
                         :ubri.number
                         :ubri.type
                         :ubsi.experience_year_type
                         [:fmc.code_name :offline_market_name]
                         :ubsi.lastyear_income
                         [:bsosi.market :online_market_name]
                         :bsosi.url
                         [:dc.name :delivery_company_name]]
             :from      [[:bulk_sale_applications :bsa]]
             :join      [[:bulk_sale_campaigns :bsc] [:= :bsa.bulk_sale_campaign_id :bsc.id]
                         [:product_category_code :pcc] [:= :bsc.product_category_code_id :pcc.id]
                         [:user_business_support_info :ubsi] [:= :bsa.user_business_support_info_id :ubsi.id]
                         [:user_business_registration_info :ubri] [:= :ubsi.user_id :ubri.user_id]
                         [:users :u] [:= :ubsi.user_id :u.id]]
             :left-join [[:bulk_sale_online_sales_info :bsosi] [:= :bsosi.bulk_sale_application_id :bsa.id]
                         [:delivery_companies :dc] [:= :dc.id :bsosi.delivery_company_id]
                         [:bulk_sale_market_sales_info :bsmsi] [:= :bsmsi.bulk_sale_application_id :bsa.id]
                         [:farm_market_codes :fmc] [:= :fmc.id :bsmsi.farm_market_code_id]]}

        ast (honey->ast q)]
    #_(ast->honey ast)
    ;ast

    ))