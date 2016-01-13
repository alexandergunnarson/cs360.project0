// Compiled by ClojureScript 1.7.170 {}

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns]
*/
goog.provide('quantum.core.data.map');
goog.require('cljs.core');
goog.require('clojure.data.avl');
goog.require('clojure.core.rrb_vector');
goog.require('quantum.core.ns');
goog.require('cljs.core');
var orig_var__2273__auto___36931 = new cljs.core.Var(function(){return cljs.core.array_map;},new cljs.core.Symbol("cljs.core","array-map","cljs.core/array-map",-1519210683,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"array-map","array-map",1555038968,null),"cljs/core.cljs",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(0),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"keyvals","keyvals",-2067234787,null))], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"keyvals","keyvals",-2067234787,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),(1),(7740),(7740),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"keyvals","keyvals",-2067234787,null)], null)),"keyval => key val\n  Returns a new array map with supplied mappings.",(cljs.core.truth_(cljs.core.array_map)?cljs.core.array_map.cljs$lang$test:null)]));
quantum.core.data.map.ordered_map = cljs.core.with_meta.call(null,cljs.core.deref.call(null,new cljs.core.Var(function(){return cljs.core.array_map;},new cljs.core.Symbol("cljs.core","array-map","cljs.core/array-map",-1519210683,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"array-map","array-map",1555038968,null),"cljs/core.cljs",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(0),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"keyvals","keyvals",-2067234787,null))], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"keyvals","keyvals",-2067234787,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),(1),(7740),(7740),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"keyvals","keyvals",-2067234787,null)], null)),"keyval => key val\n  Returns a new array map with supplied mappings.",(cljs.core.truth_(cljs.core.array_map)?cljs.core.array_map.cljs$lang$test:null)]))),cljs.core.meta.call(null,new cljs.core.Var(function(){return cljs.core.array_map;},new cljs.core.Symbol("cljs.core","array-map","cljs.core/array-map",-1519210683,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"array-map","array-map",1555038968,null),"cljs/core.cljs",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(0),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"keyvals","keyvals",-2067234787,null))], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"keyvals","keyvals",-2067234787,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),(1),(7740),(7740),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"keyvals","keyvals",-2067234787,null)], null)),"keyval => key val\n  Returns a new array map with supplied mappings.",(cljs.core.truth_(cljs.core.array_map)?cljs.core.array_map.cljs$lang$test:null)]))));

if(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,orig_var__2273__auto___36931)) === true){
cljs.core.alter_meta_BANG_.call(null,new cljs.core.Var(function(){return quantum.core.data.map.ordered_map;},new cljs.core.Symbol("quantum.core.data.map","ordered-map","quantum.core.data.map/ordered-map",937445302,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"quantum.core.data.map","quantum.core.data.map",172374462,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Useful map functions. |map-entry|, a better merge, sorted-maps, etc.",new cljs.core.Keyword(null,"attribution","attribution",1937239286),"Alex Gunnarson"], null)),new cljs.core.Symbol(null,"ordered-map","ordered-map",-706459974,null),"/Users/alexandergunnarson/Development/Source Code Projects/byu/CS 360/Project0/src/cljc/quantum/core/data/map.cljc",22,1,13,13,cljs.core.List.EMPTY,null,(cljs.core.truth_(quantum.core.data.map.ordered_map)?quantum.core.data.map.ordered_map.cljs$lang$test:null)])),cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
} else {
}


new cljs.core.Var(function(){return quantum.core.data.map.ordered_map;},new cljs.core.Symbol("quantum.core.data.map","ordered-map","quantum.core.data.map/ordered-map",937445302,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"quantum.core.data.map","quantum.core.data.map",172374462,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Useful map functions. |map-entry|, a better merge, sorted-maps, etc.",new cljs.core.Keyword(null,"attribution","attribution",1937239286),"Alex Gunnarson"], null)),new cljs.core.Symbol(null,"ordered-map","ordered-map",-706459974,null),"/Users/alexandergunnarson/Development/Source Code Projects/byu/CS 360/Project0/src/cljc/quantum/core/data/map.cljc",22,1,13,13,cljs.core.List.EMPTY,null,(cljs.core.truth_(quantum.core.data.map.ordered_map)?quantum.core.data.map.ordered_map.cljs$lang$test:null)]));
var orig_var__2273__auto___36932 = new cljs.core.Var(function(){return cljs.core.array_map;},new cljs.core.Symbol("cljs.core","array-map","cljs.core/array-map",-1519210683,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"array-map","array-map",1555038968,null),"cljs/core.cljs",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(0),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"keyvals","keyvals",-2067234787,null))], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"keyvals","keyvals",-2067234787,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),(1),(7740),(7740),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"keyvals","keyvals",-2067234787,null)], null)),"keyval => key val\n  Returns a new array map with supplied mappings.",(cljs.core.truth_(cljs.core.array_map)?cljs.core.array_map.cljs$lang$test:null)]));
quantum.core.data.map.om = cljs.core.with_meta.call(null,cljs.core.deref.call(null,new cljs.core.Var(function(){return cljs.core.array_map;},new cljs.core.Symbol("cljs.core","array-map","cljs.core/array-map",-1519210683,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"array-map","array-map",1555038968,null),"cljs/core.cljs",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(0),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"keyvals","keyvals",-2067234787,null))], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"keyvals","keyvals",-2067234787,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),(1),(7740),(7740),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"keyvals","keyvals",-2067234787,null)], null)),"keyval => key val\n  Returns a new array map with supplied mappings.",(cljs.core.truth_(cljs.core.array_map)?cljs.core.array_map.cljs$lang$test:null)]))),cljs.core.meta.call(null,new cljs.core.Var(function(){return cljs.core.array_map;},new cljs.core.Symbol("cljs.core","array-map","cljs.core/array-map",-1519210683,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"array-map","array-map",1555038968,null),"cljs/core.cljs",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(0),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"keyvals","keyvals",-2067234787,null))], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"keyvals","keyvals",-2067234787,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),(1),(7740),(7740),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"keyvals","keyvals",-2067234787,null)], null)),"keyval => key val\n  Returns a new array map with supplied mappings.",(cljs.core.truth_(cljs.core.array_map)?cljs.core.array_map.cljs$lang$test:null)]))));

if(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,orig_var__2273__auto___36932)) === true){
cljs.core.alter_meta_BANG_.call(null,new cljs.core.Var(function(){return quantum.core.data.map.om;},new cljs.core.Symbol("quantum.core.data.map","om","quantum.core.data.map/om",192537483,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"quantum.core.data.map","quantum.core.data.map",172374462,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Useful map functions. |map-entry|, a better merge, sorted-maps, etc.",new cljs.core.Keyword(null,"attribution","attribution",1937239286),"Alex Gunnarson"], null)),new cljs.core.Symbol(null,"om","om",-379198729,null),"/Users/alexandergunnarson/Development/Source Code Projects/byu/CS 360/Project0/src/cljc/quantum/core/data/map.cljc",13,1,14,14,cljs.core.List.EMPTY,null,(cljs.core.truth_(quantum.core.data.map.om)?quantum.core.data.map.om.cljs$lang$test:null)])),cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
} else {
}


new cljs.core.Var(function(){return quantum.core.data.map.om;},new cljs.core.Symbol("quantum.core.data.map","om","quantum.core.data.map/om",192537483,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"quantum.core.data.map","quantum.core.data.map",172374462,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Useful map functions. |map-entry|, a better merge, sorted-maps, etc.",new cljs.core.Keyword(null,"attribution","attribution",1937239286),"Alex Gunnarson"], null)),new cljs.core.Symbol(null,"om","om",-379198729,null),"/Users/alexandergunnarson/Development/Source Code Projects/byu/CS 360/Project0/src/cljc/quantum/core/data/map.cljc",13,1,14,14,cljs.core.List.EMPTY,null,(cljs.core.truth_(quantum.core.data.map.om)?quantum.core.data.map.om.cljs$lang$test:null)]));
quantum.core.data.map.sorted_map = clojure.data.avl.sorted_map;
quantum.core.data.map.sorted_map_by = clojure.data.avl.sorted_map_by;
/**
 * A performant replacement for creating 2-tuples (vectors), e.g., as return values
 * in a |kv-reduce| function.
 * 
 * Now overshadowed by ztellman's unrolled vectors in 1.8.0.
 * 
 * Time to create 100000000 2-tuples:
 * new tuple-vector 55.816415 ms
 * map-entry        37.542442 ms
 * 
 * However, insertion into maps is faster with map-entry:
 * 
 * (def vs [[1 2] [3 4]])
 * (def ms [(map-entry 1 2) (map-entry 3 4)])
 * (def m0 {})
 * 508.122831 ms (dotimes [n 1000000] (into m0 vs))
 * 310.335998 ms (dotimes [n 1000000] (into m0 ms))
 */
quantum.core.data.map.map_entry = (function quantum$core$data$map$map_entry(k,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
});
quantum.core.data.map.map_entry_seq = (function quantum$core$data$map$map_entry_seq(args){
var G__36938 = args;
var vec__36939 = G__36938;
var k = cljs.core.nth.call(null,vec__36939,(0),null);
var v = cljs.core.nth.call(null,vec__36939,(1),null);
var args_n = vec__36939;
var accum = cljs.core.PersistentVector.EMPTY;
var G__36938__$1 = G__36938;
var accum__$1 = accum;
while(true){
var vec__36940 = G__36938__$1;
var k__$1 = cljs.core.nth.call(null,vec__36940,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__36940,(1),null);
var args_n__$1 = vec__36940;
var accum__$2 = accum__$1;
if(cljs.core.empty_QMARK_.call(null,args_n__$1)){
return accum__$2;
} else {
var G__36941 = cljs.core.rest.call(null,cljs.core.rest.call(null,args_n__$1));
var G__36942 = cljs.core.conj.call(null,accum__$2,quantum.core.data.map.map_entry.call(null,k__$1,v__$1));
G__36938__$1 = G__36941;
accum__$1 = G__36942;
continue;
}
break;
}
});
/**
 * A performant drop-in replacement for |clojure.core/merge|.
 * 
 *   398.815137 msecs (core/merge m1 m2)
 *   188.270844 msecs (seqspert.hash-map/sequential-splice-hash-maps m1 m2)
 *   25.401196  msecs (seqspert.hash-map/parallel-splice-hash-maps   m1 m2)))
 */
quantum.core.data.map.merge = (function quantum$core$data$map$merge(var_args){
var args36943 = [];
var len__18583__auto___36950 = arguments.length;
var i__18584__auto___36951 = (0);
while(true){
if((i__18584__auto___36951 < len__18583__auto___36950)){
args36943.push((arguments[i__18584__auto___36951]));

var G__36952 = (i__18584__auto___36951 + (1));
i__18584__auto___36951 = G__36952;
continue;
} else {
}
break;
}

var G__36948 = args36943.length;
switch (G__36948) {
case 0:
return quantum.core.data.map.merge.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return quantum.core.data.map.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quantum.core.data.map.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__18602__auto__ = (new cljs.core.IndexedSeq(args36943.slice((2)),(0)));
return quantum.core.data.map.merge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18602__auto__);

}
});

quantum.core.data.map.merge.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

quantum.core.data.map.merge.cljs$core$IFn$_invoke$arity$1 = (function (m0){
return m0;
});

quantum.core.data.map.merge.cljs$core$IFn$_invoke$arity$2 = (function (m0,m1){
return cljs.core.merge.call(null,m0,m1);
});

quantum.core.data.map.merge.cljs$core$IFn$_invoke$arity$variadic = (function (m0,m1,ms){
if(((!((m0 == null)))?(((false) || (m0.quantum$core$ns$AEditable$))?true:(((!m0.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,quantum.core.ns.AEditable,m0):false)):cljs.core.native_satisfies_QMARK_.call(null,quantum.core.ns.AEditable,m0))){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core.conj_BANG_,cljs.core.transient$.call(null,m0),ms));
} else {
return cljs.core.apply.call(null,cljs.core.merge,m0,ms);
}
});

quantum.core.data.map.merge.cljs$lang$applyTo = (function (seq36944){
var G__36945 = cljs.core.first.call(null,seq36944);
var seq36944__$1 = cljs.core.next.call(null,seq36944);
var G__36946 = cljs.core.first.call(null,seq36944__$1);
var seq36944__$2 = cljs.core.next.call(null,seq36944__$1);
return quantum.core.data.map.merge.cljs$core$IFn$_invoke$arity$variadic(G__36945,G__36946,seq36944__$2);
});

quantum.core.data.map.merge.cljs$lang$maxFixedArity = (2);
var orig_var__2273__auto___36954 = new cljs.core.Var(function(){return clojure.data.avl.split_at;},new cljs.core.Symbol("clojure.data.avl","split-at","clojure.data.avl/split-at",-1801845353,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"clojure.data.avl","clojure.data.avl",756451163,null),new cljs.core.Symbol(null,"split-at","split-at",-60953742,null),"dev-resources/public/js/compiled/out/clojure/data/avl.cljs",15,1,1193,1193,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null)),"(alpha)\n\n  Equivalent to, but more efficient than,\n  [(into (empty coll) (take n coll))\n   (into (empty coll) (drop n coll))].",(cljs.core.truth_(clojure.data.avl.split_at)?clojure.data.avl.split_at.cljs$lang$test:null)]));
quantum.core.data.map.split_at = cljs.core.with_meta.call(null,cljs.core.deref.call(null,new cljs.core.Var(function(){return clojure.data.avl.split_at;},new cljs.core.Symbol("clojure.data.avl","split-at","clojure.data.avl/split-at",-1801845353,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"clojure.data.avl","clojure.data.avl",756451163,null),new cljs.core.Symbol(null,"split-at","split-at",-60953742,null),"dev-resources/public/js/compiled/out/clojure/data/avl.cljs",15,1,1193,1193,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null)),"(alpha)\n\n  Equivalent to, but more efficient than,\n  [(into (empty coll) (take n coll))\n   (into (empty coll) (drop n coll))].",(cljs.core.truth_(clojure.data.avl.split_at)?clojure.data.avl.split_at.cljs$lang$test:null)]))),cljs.core.meta.call(null,new cljs.core.Var(function(){return clojure.data.avl.split_at;},new cljs.core.Symbol("clojure.data.avl","split-at","clojure.data.avl/split-at",-1801845353,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"clojure.data.avl","clojure.data.avl",756451163,null),new cljs.core.Symbol(null,"split-at","split-at",-60953742,null),"dev-resources/public/js/compiled/out/clojure/data/avl.cljs",15,1,1193,1193,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null)),"(alpha)\n\n  Equivalent to, but more efficient than,\n  [(into (empty coll) (take n coll))\n   (into (empty coll) (drop n coll))].",(cljs.core.truth_(clojure.data.avl.split_at)?clojure.data.avl.split_at.cljs$lang$test:null)]))));

if(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,orig_var__2273__auto___36954)) === true){
cljs.core.alter_meta_BANG_.call(null,new cljs.core.Var(function(){return quantum.core.data.map.split_at;},new cljs.core.Symbol("quantum.core.data.map","split-at","quantum.core.data.map/split-at",509208590,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"quantum.core.data.map","quantum.core.data.map",172374462,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Useful map functions. |map-entry|, a better merge, sorted-maps, etc.",new cljs.core.Keyword(null,"attribution","attribution",1937239286),"Alex Gunnarson"], null)),new cljs.core.Symbol(null,"split-at","split-at",-60953742,null),"/Users/alexandergunnarson/Development/Source Code Projects/byu/CS 360/Project0/src/cljc/quantum/core/data/map.cljc",19,1,90,90,cljs.core.List.EMPTY,null,(cljs.core.truth_(quantum.core.data.map.split_at)?quantum.core.data.map.split_at.cljs$lang$test:null)])),cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
} else {
}


new cljs.core.Var(function(){return quantum.core.data.map.split_at;},new cljs.core.Symbol("quantum.core.data.map","split-at","quantum.core.data.map/split-at",509208590,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"quantum.core.data.map","quantum.core.data.map",172374462,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Useful map functions. |map-entry|, a better merge, sorted-maps, etc.",new cljs.core.Keyword(null,"attribution","attribution",1937239286),"Alex Gunnarson"], null)),new cljs.core.Symbol(null,"split-at","split-at",-60953742,null),"/Users/alexandergunnarson/Development/Source Code Projects/byu/CS 360/Project0/src/cljc/quantum/core/data/map.cljc",19,1,90,90,cljs.core.List.EMPTY,null,(cljs.core.truth_(quantum.core.data.map.split_at)?quantum.core.data.map.split_at.cljs$lang$test:null)]));

//# sourceMappingURL=map.js.map?rel=1452702556488
/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns]
*/
