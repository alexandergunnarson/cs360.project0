(ns quantum.core.data.list
  (:require-quantum [ns])
  (:require [quantum.core.data.finger-tree :as ftree]))

(defalias dlist ftree/counted-double-list)