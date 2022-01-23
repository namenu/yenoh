(ns yenoh
  (:require [honey.sql :as sql]
            #?(:clj  [instaparse.core :as insta :refer [defparser]]
               :cljs [instaparse.core :as insta :refer-macros [defparser]])
            #?(:cljs [cljs.reader :refer [read-string]])))


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
      <derived_column>      := column_ref as_clause?

      <as_clause>           := 'AS'? column_name

      column_ref            := (qualifier '.')? column_name
      column_name           := identifier


    table_expr            := from_clause
      from_clause           := 'FROM' table_ref (comma table_ref)*
      <table_ref>           := table_name correlation_spec? | joined_table

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


(defn ast->honey [ast]
  (let [[_ select-list table-expr] ast
        [_ & columns] select-list

        [_ _ [_ table-name] [_ _ table-alias]] (second table-expr)
        ]
    {:select (mapv #(-> % second second keyword) columns)
     :from   [[(keyword table-name) (keyword table-alias)]]}))

(defn honey->sql [honey]
  (let [honey (read-string honey)
        sql   (sql/format honey {:pretty true})]
    (-> sql first clojure.string/trim)))


;;; test



(comment
  (require '[honey.sql :as sql])
  (require '[meander.epsilon :as m])
  (require '[net.cgrand.enlive-html :as enlive])

  (defn honey->ast [q]
    (let [sql (first (sql/format q))]
      (println sql)
      (parse-select sql)))

  ;; test select-from

  (comment
    (def ast *1)



    (defn assert-isomorph [q]
      (assert q (-> q honey->ast ast->honey)))

    (let [q {:select [:id :item_id :item :kind :item_kind]
             :from   [[:categories :c]]}]
      (honey->ast q)
      #_(assert-isomorph q))

    (parse-select "select 1")
    (ast->honey ast)

    )


  ;; test select-from-join-left-join
  (let [q {:select    [:bsa.id
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
                       [:farm_market_codes :fmc] [:= :fmc.id :bsmsi.farm_market_code_id]]}]
    (sql/format q)))