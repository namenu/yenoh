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
      [:div {:class "flex items-center mt-6"}
       [:div {:class "mx-auto"}
        [:h1 {:class "text-lg font-semibold underline decoration-2 decoration-sky-500"}
         "Online HoneySQL <-> MySQL converter "]
        [:form
         [:div {:class "mt-6"}
          [:textarea {:class     "form-textarea rounded w-full h-32"
                      :value     @text
                      :on-change #(reset! text (-> % .-target .-value))}]]
         [:div {:class "mt-4"}
          [:button {:type     "button"
                    :class    "btn-primary"
                    :on-click (fn []
                                (let [s (with-out-str
                                          (-> (yenoh/parse-select @text)
                                              yenoh/ast->honey
                                              pprint))]
                                  (reset! honey s)))}
           "Convert to HoneySQL"]
          [:button {:type     "button"
                    :class    "btn-primary ml-2"
                    :on-click (fn []
                                (let [hs (read-string @honey)
                                      s  (yenoh/honey->sql hs)]
                                  (reset! text s)))}
           "Convert from HoneySQL"]
          [:button {:type     "button"
                    :class    "btn-primary ml-2"
                    :on-click (fn []
                                (let [s (with-out-str
                                          (pprint (yenoh/parse-select @text)))]
                                  (reset! debug s)))}
           "debug"]]

         [:div {:class "mt-6"}
          [:textarea {:class     "form-textarea rounded w-full h-32"
                      :value     @honey
                      :on-change #(reset! honey (-> % .-target .-value))}]]]

        [:pre {:class "mt-4 text-xs border text-sm overflow-auto"}
         @debug]]])))

(rd/render [app]
           (.getElementById js/document "app"))

(defn init []
  )