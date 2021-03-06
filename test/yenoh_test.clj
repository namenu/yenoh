(ns yenoh-test
  (:require [clojure.test :refer :all]
            [yenoh :refer :all]))

(defn test-inverse [f f-inv]
  (fn [x]
    (is (= x (-> x f f-inv)))))

(def roundtrip (test-inverse honey->ast ast->honey))
(def roundtrip-raw (comp (test-inverse ast->honey honey->ast) parse-select))

(deftest select
  #_(testing "select"
      (let [q {:select [:id]}]
        (roundtrip q)
        ))

  (testing "select unqualified"
    (roundtrip {:select [:id :item_id :item :kind :item_kind]
                :from   [[:categories :c]]}))

  (testing "select qualified and alias"
    (roundtrip {:select [:bsa.id
                         [:fmc.code_name :offline_market_name]]
                :from   [[:bulk_sale_applications :bsa]]}))

  (testing "select qualified all"
    (roundtrip {:select [:*]
                :from   [:t]})
    (roundtrip {:select [:abs.*]
                :from   [[:atc_business_support :abs]]})))
(deftest join
  (testing "implicit inner"
    (let [sql "SELECT *
FROM user AS U
INNER JOIN user_role AS UR ON U.id = UR.uid"]
      (roundtrip-raw sql)))

  (testing "left-join"
    (let [q {:select    [:bsa.id
                         [:fmc.code_name :offline_market_name]]
             :from      [[:bulk_sale_applications :bsa]]
             :left-join [[:bulk_sale_market_sales_info :bsmsi] [:= :bsmsi.bulk_sale_application_id :bsa.id]
                         [:farm_market_codes :fmc] [:= :fmc.id :bsmsi.farm_market_code_id]]}]
      (roundtrip q)))

  (testing "on multiple terms"
    (roundtrip {:select [:abs.*]
                :from   [[:atc_business_support :abs]]
                :join   [[:atc_business_support_to_display :abstd] [:and
                                                                    [:= :abstd.subsidy_id :abs.id]
                                                                    [:= :abstd.is_deleted :undeleted]]]}))

  (testing "select-from-join-left-join"
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
      (roundtrip q))))

(deftest table-joins
  (testing "one join"
    (is (= (flatten-joins [[[:left-join
                             [[:left-join
                               [:bulk_sale_applications :bsa]
                               [:bulk_sale_market_sales_info :bsmsi]
                               [:= :bsmsi.bulk_sale_application_id :bsa.id]]]
                             [:farm_market_codes :fmc]
                             [:= :fmc.id :bsmsi.farm_market_code_id]]]])
           {:from      [[:bulk_sale_applications :bsa]],
            :left-join [[:bulk_sale_market_sales_info :bsmsi]
                        [:= :bsmsi.bulk_sale_application_id :bsa.id]
                        [:farm_market_codes :fmc]
                        [:= :fmc.id :bsmsi.farm_market_code_id]]}
           )))

  (testing "nested joins"
    (is (= (flatten-joins [[:left-join
                            [:bulk_sale_applications :bsa]
                            [:bulk_sale_market_sales_info :bsmsi]
                            [:= :bsmsi.bulk_sale_application_id :bsa.id]]])
           {:from      [[:bulk_sale_applications :bsa]],
            :left-join [[:bulk_sale_market_sales_info :bsmsi]
                        [:= :bsmsi.bulk_sale_application_id :bsa.id]]}))))

(comment
  (run-tests))
