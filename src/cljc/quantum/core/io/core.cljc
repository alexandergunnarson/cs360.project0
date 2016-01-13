(ns quantum.core.io.core
  (:require-quantum [ns core-async log err res])
  (:require [com.stuartsierra.component  :as component]
            [datascript.core             :as mdb      ]
            [quantum.core.convert        :as conv
              :refer [->name ->str]                   ]
            [quantum.db.datomic          :as db      
              #?@(:cljs [:refer [EphemeralDatabase]]) ])
  #?(:clj
  (:import (quantum.db.datomic EphemeralDatabase))))

#_(defn reset-conn! [db]
  (reset! conn db)
  (render db)
  (persist! db))

#?(:cljs
(defn persist!
  "Persists @x between page reloads.
   Saves to js/localStorage as key @k."
  [k x]
  (js/localStorage.setItem (->name k) (->str x))))

#?(:cljs
(defrecord
  ^{:doc "Persists @persist-data"}
  Persister
  [persist-key persist-class persist-data opts]
  component/Lifecycle
    (start [this]
      ; TODO multimethod
      (condp = persist-class
        EphemeralDatabase
          (let [{:keys [schema]} opts
                {:keys [db history]} persist-data]
            #?(:cljs
            (when (-> db meta :listeners (get persist-key))
              (throw (->ex :duplicate-persisters
                           "Cannot have multiple ClojureScript Persisters for DataScript database"))))
            ; restoring once persisted DB on page load
            (or (when-let [stored (js/localStorage.getItem (->name persist-key))]
                  (let [stored-db (conv/->mdb stored)]
                    (when (= (:schema stored-db) schema) ; check for code update
                      (reset! db stored-db)
                      (swap! history conj @db)
                      true)))
                ; (mdb/transact! conn schema)
                )
            (mdb/listen! db :persister
              (fn [tx-report] ; TODO do not notify with nil as db-report
                              ; TODO do not notify if tx-data is empty
                (when-let [db (:db-after tx-report)]
                  (go (persist! persist-key db))))))
        (throw (->ex :unhandled-class
                       "Class not handled for persistence."
                       persist-class))))
    (stop [this]
      (mdb/unlisten! (:db persist-data) :persister))))