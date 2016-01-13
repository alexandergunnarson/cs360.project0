(ns quantum.core.convert
  (:require [datascript.transit :as dt]
            [datascript.core    :as mdb]))

; TODO type dispatch would be faster with protocols

(defn ->name [x]
  (cond (string?  x) (name x)
        (symbol?  x) (name x)
        (keyword? x) (name x)
        :else (str x)))

(defn ->symbol [x]
  (cond (string? x) (symbol x)
        :else (-> x ->name ->symbol)))

(defn ->str [x]
  (cond (instance? datascript.db.DB x)
          (dt/write-transit-str x)
        :else
          (str x)))
  
(defn ->mdb [x]
  (cond (string? x)
        (dt/read-transit-str x)))