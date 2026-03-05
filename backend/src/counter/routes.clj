(ns counter.routes
  (:require
   [io.pedestal.http.route :as route]
   [counter.handlers :as handlers]))

(def routes
  (route/expand-routes
   #{["/api/increment" :post handlers/increment :route-name :increment]
     ["/api/value"     :get  handlers/value     :route-name :value]
     ["/api/reset"     :post handlers/reset     :route-name :reset]}))
