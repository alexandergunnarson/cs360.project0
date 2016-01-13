// Compiled by ClojureScript 1.7.170 {}

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns map set logic fn]
*/
goog.provide('quantum.core.type.bootstrap');
goog.require('cljs.core');
goog.require('quantum.core.data.set');
goog.require('clojure.core.rrb_vector');
goog.require('quantum.core.logic');
goog.require('quantum.core.data.map');
goog.require('cljs.core');
goog.require('quantum.core.function$');
goog.require('quantum.core.ns');
/**
 * Could do <Class>/MAX_VALUE for the maxes vin Java but JS doesn't like it of course
 *           In JavaScript, all numbers are 64-bit floating point numbers.
 *           This means you can't represent in JavaScript all the Java longs
 *           Max 'safe' int: (dec (Math/pow 2 53))
 */
quantum.core.type.bootstrap.type_meta = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bits","bits",-1206785969),(1),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(1)], null),new cljs.core.Symbol(null,"short","short",-725675253,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bits","bits",-1206785969),(16),new cljs.core.Keyword(null,"min","min",444991522),(-32768),new cljs.core.Keyword(null,"max","max",61366548),(32767)], null),new cljs.core.Symbol(null,"byte","byte",-1970660549,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bits","bits",-1206785969),(8),new cljs.core.Keyword(null,"min","min",444991522),(-128),new cljs.core.Keyword(null,"max","max",61366548),(127)], null),new cljs.core.Symbol(null,"char","char",998943941,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bits","bits",-1206785969),(16),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(65535)], null),new cljs.core.Symbol(null,"int","int",-100885395,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bits","bits",-1206785969),(32),new cljs.core.Keyword(null,"min","min",444991522),(-2147483648),new cljs.core.Keyword(null,"max","max",61366548),(2147483647)], null),new cljs.core.Symbol(null,"long","long",1469079434,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bits","bits",-1206785969),(64),new cljs.core.Keyword(null,"min","min",444991522),(-9223372036854775808),new cljs.core.Keyword(null,"max","max",61366548),(9223372036854775807)], null),new cljs.core.Symbol(null,"float","float",-91857841,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bits","bits",-1206785969),(32),new cljs.core.Keyword(null,"min","min",444991522),1.4E-45,new cljs.core.Keyword(null,"max","max",61366548),3.4028235E38], null),new cljs.core.Symbol(null,"double","double",-1769548886,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bits","bits",-1206785969),(64),new cljs.core.Keyword(null,"min","min",444991522),Number.MIN_VALUE,new cljs.core.Keyword(null,"max","max",61366548),1.7976931348623157E308], null)], null);
quantum.core.type.bootstrap.max_values = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__33496){
var vec__33497 = p__33496;
var k = cljs.core.nth.call(null,vec__33497,(0),null);
var v = cljs.core.nth.call(null,vec__33497,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(v)], null);
}),quantum.core.type.bootstrap.type_meta));
quantum.core.type.bootstrap.max_type = (function quantum$core$type$bootstrap$max_type(types){
return cljs.core.val.call(null,cljs.core.first.call(null,cljs.core.into.call(null,cljs.core.sorted_map_by.call(null,cljs.core._GT_),cljs.core.remove.call(null,(function (x__25385__auto__){
return (cljs.core.first.call(null,x__25385__auto__) == null);
}),cljs.core.map.call(null,(function (type){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,quantum.core.type.bootstrap.max_values,type),type], null);
}),types)))));
});
quantum.core.type.bootstrap.inner_type = (function quantum$core$type$bootstrap$inner_type(type){
var or__17525__auto__ = new cljs.core.Symbol(null,"object","object",-1179821820,null);
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return new cljs.core.Symbol(null,"Object","Object",61210754,null);
}
});

//# sourceMappingURL=bootstrap.js.map?rel=1452702631075
/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns map set logic fn]
*/
