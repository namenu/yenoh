(ns yenoh.ui
  (:require [reagent.core :as r]
            [reagent.dom :as rd]
            [yenoh :as yenoh]
            [cljs.pprint :refer [pprint]]
            [cljs.reader :refer [read-string]]))

(defonce text (r/atom "SELECT name, address FROM users AS U"))

(defn app []
  (let [honey (r/atom "")
        debug (r/atom "")]
    (fn []
      [:form
       [:div
        [:textarea {:rows      10
                    :cols      80
                    :value     @text
                    :on-change #(reset! text (-> % .-target .-value))}]]
       [:div
        [:input {:type     "button"
                 :value    "Convert to HoneySQL"
                 :on-click (fn []
                             (let [s (with-out-str
                                       (-> (yenoh/parse-select @text)
                                           yenoh/ast->honey
                                           pprint))]
                               (reset! honey s)))}]
        " "
        [:input {:type     "button"
                 :value    "Convert from HoneySQL"
                 :on-click (fn []
                             (let [hs (read-string @honey)
                                   s  (yenoh/honey->sql hs)]
                               (reset! text s)))}]
        " "
        [:input {:type     "button"
                 :value    "debug"
                 :on-click (fn []
                             (let [s (with-out-str
                                       (pprint (yenoh/parse-select @text)))]
                               (reset! debug s)))}]]

       [:div
        [:textarea {:rows      10
                    :cols      80
                    :value     @honey
                    :on-change #(reset! honey (-> % .-target .-value))}]]

       [:pre @debug]])))

(rd/render [app]
           (.getElementById js/document "app"))

(defn init []
  )