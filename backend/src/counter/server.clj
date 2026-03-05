(ns counter.server
  (:require
   [io.pedestal.http :as http]
   [counter.routes :as routes]))

(def service
  {::http/routes routes/routes
   ::http/type   :jetty
   ::http/port   8080
   ::http/join?  false})

(defn create-server []
  (-> service
      http/default-interceptors
      http/create-server))

(defn start []
  (http/start (create-server)))

(defn -main [& _]
  (start))
