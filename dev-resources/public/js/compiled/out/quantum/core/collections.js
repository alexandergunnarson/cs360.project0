// Compiled by ClojureScript 1.7.170 {}

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn set]
*/
goog.provide('quantum.core.collections');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('quantum.core.data.set');
goog.require('quantum.core.function$');
goog.require('quantum.core.ns');
goog.require('clojure.core.rrb_vector');
quantum.core.collections.drop_tail = (function quantum$core$collections$drop_tail(xs,pred){
var acc = cljs.core.PersistentVector.EMPTY;
var xs__$1 = xs;
while(true){
var x = cljs.core.first.call(null,xs__$1);
if((x == null)){
return acc;
} else {
if(cljs.core.truth_(pred.call(null,x))){
return cljs.core.conj.call(null,acc,x);
} else {
var G__37145 = cljs.core.conj.call(null,acc,x);
var G__37146 = cljs.core.next.call(null,xs__$1);
acc = G__37145;
xs__$1 = G__37146;
continue;

}
}
break;
}
});
quantum.core.collections.trim_head = (function quantum$core$collections$trim_head(xs,n){
return cljs.core.vec.call(null,cljs.core.drop.call(null,(cljs.core.count.call(null,xs) - n),xs));
});
quantum.core.collections.take_until = (function quantum$core$collections$take_until(stop_at_QMARK_,ls){
if(cljs.core.truth_((function (){var or__17525__auto__ = cljs.core.empty_QMARK_.call(null,ls);
if(or__17525__auto__){
return or__17525__auto__;
} else {
return stop_at_QMARK_.call(null,cljs.core.first.call(null,ls));
}
})())){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons.call(null,cljs.core.first.call(null,ls),quantum$core$collections$take_until.call(null,stop_at_QMARK_,cljs.core.rest.call(null,ls)));
}
});
quantum.core.collections.rest_at = (function quantum$core$collections$rest_at(rest_at_QMARK_,ls){
while(true){
if(cljs.core.truth_((function (){var or__17525__auto__ = cljs.core.empty_QMARK_.call(null,ls);
if(or__17525__auto__){
return or__17525__auto__;
} else {
return rest_at_QMARK_.call(null,cljs.core.first.call(null,ls));
}
})())){
return ls;
} else {
var G__37147 = rest_at_QMARK_;
var G__37148 = cljs.core.rest.call(null,ls);
rest_at_QMARK_ = G__37147;
ls = G__37148;
continue;
}
break;
}
});
quantum.core.collections.split_list_at = (function quantum$core$collections$split_list_at(split_at_QMARK_,ls){
if(cljs.core.empty_QMARK_.call(null,ls)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.call(null,cljs.core.PersistentArrayMap.fromArray([cljs.core.first.call(null,ls),quantum.core.collections.take_until.call(null,split_at_QMARK_,quantum.core.collections.take_until.call(null,split_at_QMARK_,cljs.core.rest.call(null,ls)))], true, false),quantum$core$collections$split_list_at.call(null,split_at_QMARK_,quantum.core.collections.rest_at.call(null,split_at_QMARK_,cljs.core.rest.call(null,ls))));
}
});
quantum.core.collections.deep_list_QMARK_ = (function quantum$core$collections$deep_list_QMARK_(x){
if(cljs.core.list_QMARK_.call(null,x)){
return true;
} else {
if(cljs.core.coll_QMARK_.call(null,x)){
if(cljs.core.empty_QMARK_.call(null,x)){
return false;
} else {
var or__17525__auto__ = quantum$core$collections$deep_list_QMARK_.call(null,cljs.core.first.call(null,x));
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return quantum$core$collections$deep_list_QMARK_.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,x)));
}
}
} else {
return null;
}
}
});
quantum.core.collections.deep_find = (function quantum$core$collections$deep_find(f,x){
if(cljs.core.coll_QMARK_.call(null,x)){
if(cljs.core.empty_QMARK_.call(null,x)){
return false;
} else {
var or__17525__auto__ = quantum$core$collections$deep_find.call(null,f,cljs.core.first.call(null,x));
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return quantum$core$collections$deep_find.call(null,f,cljs.core.rest.call(null,x));
}
}
} else {
return f.call(null,x);
}
});
quantum.core.collections.deep_map = (function quantum$core$collections$deep_map(f,x){
if(cljs.core.map_QMARK_.call(null,x)){
var r = cljs.core.map.call(null,cljs.core.partial.call(null,quantum$core$collections$deep_map,f),x);
return cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.first,r),cljs.core.map.call(null,cljs.core.second,r));
} else {
if(cljs.core.coll_QMARK_.call(null,x)){
return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,quantum$core$collections$deep_map,f),x));
} else {
return f.call(null,x);

}
}
});
quantum.core.collections.wrap_delay = (function quantum$core$collections$wrap_delay(f){
if(cljs.core.delay_QMARK_.call(null,f)){
return f;
} else {
return (new cljs.core.Delay((function (){
return (function (){var or__17525__auto__ = f;
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return quantum.core.function$.fn_nil;
}
})().call(null);
}),null));
}
});
quantum.core.collections.merge_with_set = (function quantum$core$collections$merge_with_set(m1,m2){
return cljs.core.merge_with.call(null,(function (v1,v2){
if(cljs.core.set_QMARK_.call(null,v1)){
if(cljs.core.set_QMARK_.call(null,v2)){
return quantum.core.data.set.union.call(null,v1,v2);
} else {
return cljs.core.conj.call(null,v1,v2);
}
} else {
if(cljs.core.set_QMARK_.call(null,v2)){
return cljs.core.conj.call(null,v2,v1);
} else {
return cljs.core.PersistentHashSet.fromArray([v2,v1], true);
}
}
}),m1,m2);
});

//# sourceMappingURL=collections.js.map?rel=1452702557245
/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn set]
*/
