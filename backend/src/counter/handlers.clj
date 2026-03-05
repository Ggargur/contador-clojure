(ns counter.handlers
  (:require
   [counter.state :as state]
   [clojure.data.json :as json]))

(defn json-response [data]
  {:status 200
   :headers {"Content-Type" "application/json"}
   :body (json/write-str data)})

(defn increment [_]
  (json-response {:value (swap! state/counter inc)}))

(defn value [_]
  (json-response {:value @state/counter}))

(defn reset [_]
  (reset! state/counter 0)
  (json-response {:value 0}))