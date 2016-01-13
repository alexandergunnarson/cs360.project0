// Compiled by ClojureScript 1.7.170 {}

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn logic log map err]
*/
goog.provide('quantum.core.loops');
goog.require('cljs.core');
goog.require('quantum.core.core');
goog.require('clojure.core.rrb_vector');
goog.require('quantum.core.logic');
goog.require('quantum.core.log');
goog.require('quantum.core.data.map');
goog.require('cljs.core');
goog.require('quantum.core.function$');
goog.require('quantum.core.ns');
goog.require('quantum.core.error');
quantum.core.loops.temp_arr = cljs.core.atom.call(null,null);
/**
 * |reduce|s over 2 values in a collection with each pass.
 * 
 * Doesn't use CollReduce... so not as fast as |reduce|.
 */
quantum.core.loops.reduce_2 = (function quantum$core$loops$reduce_2(func,init,coll){
var ret = init;
var coll_n = coll;
while(true){
if(cljs.core.empty_QMARK_.call(null,coll_n)){
return ret;
} else {
var G__40965 = func.call(null,ret,cljs.core.first.call(null,coll_n),cljs.core.second.call(null,coll_n));
var G__40966 = cljs.core.rest.call(null,cljs.core.rest.call(null,coll_n));
ret = G__40965;
coll_n = G__40966;
continue;
}
break;
}
});
quantum.core.loops.while_recur = (function quantum$core$loops$while_recur(obj_0,pred,func){
var obj = obj_0;
while(true){
if(cljs.core.not.call(null,pred.call(null,obj))){
return obj;
} else {
var G__40967 = func.call(null,obj);
obj = G__40967;
continue;
}
break;
}
});

//# sourceMappingURL=loops.js.map?rel=1452702639488
/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn logic log map err]
*/
