// Compiled by ClojureScript 1.7.170 {}

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns map set vec logic fn]
*/
goog.provide('quantum.core.collections.base');
goog.require('cljs.core');
goog.require('quantum.core.data.set');
goog.require('clojure.core.rrb_vector');
goog.require('quantum.core.logic');
goog.require('quantum.core.data.map');
goog.require('cljs.core');
goog.require('quantum.core.function$');
goog.require('quantum.core.data.vector');
goog.require('fast_zip.core');
goog.require('quantum.core.ns');
goog.require('clojure.string');
goog.require('clojure.walk');
quantum.core.collections.base.name = (function quantum$core$collections$base$name(x){
if((x == null)){
return "";
} else {
return cljs.core.name.call(null,x);
}
});
quantum.core.collections.base.default_zipper = (function quantum$core$collections$base$default_zipper(coll){
return fast_zip.core.zipper.call(null,cljs.core.coll_QMARK_,cljs.core.seq,(function (_,c){
return c;
}),coll);
});
quantum.core.collections.base.ensure_set = (function quantum$core$collections$base$ensure_set(obj__22318__auto__){
var obj__37346 = obj__22318__auto__;
if((false) || ((obj__37346 == null))){
return cljs.core.constantly.call(null,cljs.core.PersistentHashSet.EMPTY).call(null,obj__37346);
} else {
if((false) || (((function (obj__37346){
return (function (G__37348){
return !(cljs.core.set_QMARK_.call(null,G__37348));
});})(obj__37346))
.call(null,obj__37346))){
return cljs.core.PersistentHashSet.fromArray([obj__37346],true);
} else {
if(cljs.core.truth_((function (){var or__17525__auto__ = true;
if(or__17525__auto__){
return or__17525__auto__;
} else {
return new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(obj__37346);
}
})())){
return cljs.core.identity.call(null,obj__37346);
} else {
throw Error([cljs.core.str("No matching clause for "),cljs.core.str(obj__37346)].join(''));
}
}
}
});
quantum.core.collections.base.zip_reduce = (function quantum$core$collections$base$zip_reduce(f,init,z){
var z__$1 = fast_zip.core.down.call(null,z);
var ret_n = init;
while(true){
if((z__$1 == null)){
return ret_n;
} else {
var G__37349 = fast_zip.core.right.call(null,z__$1);
var G__37350 = f.call(null,ret_n,z__$1);
z__$1 = G__37349;
ret_n = G__37350;
continue;
}
break;
}
});
/**
 * In the macro namespace because it is used with protocol creation.
 */
quantum.core.collections.base.camelcase = (function quantum$core$collections$base$camelcase(var_args){
var args__18590__auto__ = [];
var len__18583__auto___37356 = arguments.length;
var i__18584__auto___37357 = (0);
while(true){
if((i__18584__auto___37357 < len__18583__auto___37356)){
args__18590__auto__.push((arguments[i__18584__auto___37357]));

var G__37358 = (i__18584__auto___37357 + (1));
i__18584__auto___37357 = G__37358;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((1) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((1)),(0))):null);
return quantum.core.collections.base.camelcase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18591__auto__);
});

quantum.core.collections.base.camelcase.cljs$core$IFn$_invoke$arity$variadic = (function (str_0,p__37354){
var vec__37355 = p__37354;
var method_QMARK_ = cljs.core.nth.call(null,vec__37355,(0),null);
return ((function (vec__37355,method_QMARK_){
return (function (p1__37351_SHARP_){
if(cljs.core.not.call(null,method_QMARK_)){
return cljs.core.apply.call(null,cljs.core.str,clojure.string.upper_case.call(null,cljs.core.first.call(null,p1__37351_SHARP_)),cljs.core.rest.call(null,p1__37351_SHARP_));
} else {
return p1__37351_SHARP_;
}
});})(vec__37355,method_QMARK_))
.call(null,clojure.string.replace.call(null,str_0,/[-_](\w)/,quantum.core.function$.compr.call(null,cljs.core.second,clojure.string.upper_case)));
});

quantum.core.collections.base.camelcase.cljs$lang$maxFixedArity = (1);

quantum.core.collections.base.camelcase.cljs$lang$applyTo = (function (seq37352){
var G__37353 = cljs.core.first.call(null,seq37352);
var seq37352__$1 = cljs.core.next.call(null,seq37352);
return quantum.core.collections.base.camelcase.cljs$core$IFn$_invoke$arity$variadic(G__37353,seq37352__$1);
});
quantum.core.collections.base.ns_qualify = (function quantum$core$collections$base$ns_qualify(sym,ns_){
return cljs.core.symbol.call(null,[cljs.core.str(quantum.core.collections.base.name.call(null,ns_)),cljs.core.str("."),cljs.core.str(quantum.core.collections.base.name.call(null,sym))].join(''));
});
/**
 * Like |frequencies| crossed with |group-by|.
 */
quantum.core.collections.base.frequencies_by = (function quantum$core$collections$base$frequencies_by(f,coll){
var frequencies_0 = cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (counts,x){
var gotten = f.call(null,x);
var freq = (cljs.core.get.call(null,counts,gotten,(0)) + (1));
return cljs.core.assoc_BANG_.call(null,counts,gotten,freq);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
var frequencies_f = cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (frequencies_0){
return (function (ret,elem){
return cljs.core.assoc_BANG_.call(null,ret,elem,cljs.core.get.call(null,frequencies_0,f.call(null,elem)));
});})(frequencies_0))
,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
return frequencies_f;
});
quantum.core.collections.base.comparators = cljs.core.PersistentArrayMap.EMPTY;
quantum.core.collections.base.update_first = (function quantum$core$collections$base$update_first(x,f){
return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,x)),cljs.core.rest.call(null,x));
});
quantum.core.collections.base.update_val = (function quantum$core$collections$base$update_val(p__37359,f){
var vec__37361 = p__37359;
var k = cljs.core.nth.call(null,vec__37361,(0),null);
var v = cljs.core.nth.call(null,vec__37361,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null);
});
/**
 * Returns true if x appears within coll at any nesting depth..
 */
quantum.core.collections.base.appears_within_QMARK_ = (function quantum$core$collections$base$appears_within_QMARK_(x,coll){
var result = cljs.core.atom.call(null,false);
try{clojure.walk.postwalk.call(null,((function (result){
return (function (t){
if(cljs.core._EQ_.call(null,x,t)){
cljs.core.reset_BANG_.call(null,result,true);

throw (new Error());
} else {
return null;
}
});})(result))
,coll);

return cljs.core.deref.call(null,result);
}catch (e37363){if((e37363 instanceof Error)){
var _ = e37363;
return cljs.core.deref.call(null,result);
} else {
throw e37363;

}
}});
/**
 * Dissociate a value in a nested assocative structure, identified by a sequence
 *   of keys. Any collections left empty by the operation will be dissociated from
 *   their containing structures.
 *   This implementation was adapted from clojure.core.contrib
 */
quantum.core.collections.base.dissoc_in = (function quantum$core$collections$base$dissoc_in(m,ks){
var temp__4423__auto__ = cljs.core.seq.call(null,ks);
if(temp__4423__auto__){
var vec__37365 = temp__4423__auto__;
var k = cljs.core.nth.call(null,vec__37365,(0),null);
var ks__$1 = cljs.core.nthnext.call(null,vec__37365,(1));
if(cljs.core.empty_QMARK_.call(null,ks__$1)){
return cljs.core.dissoc.call(null,m,k);
} else {
var new_n = quantum$core$collections$base$dissoc_in.call(null,cljs.core.get.call(null,m,k),ks__$1);
if(cljs.core.empty_QMARK_.call(null,new_n)){
return cljs.core.dissoc.call(null,m,k);
} else {
return cljs.core.assoc.call(null,m,k,new_n);
}
}
} else {
return m;
}
});

//# sourceMappingURL=base.js.map?rel=1452702558512
/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns map set vec logic fn]
*/
