(ns figwheel.connect (:require [alexandergunnarson.byu.project0.system] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

