// Compiled by ClojureScript 1.7.170 {}

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns]
*/
goog.provide('quantum.db.datomic.reactive.pattern_gen');
goog.require('cljs.core');
goog.require('quantum.core.collections');
goog.require('clojure.core.rrb_vector');
goog.require('quantum.core.ns');
goog.require('cljs.core');
quantum.db.datomic.reactive.pattern_gen.query__GT_map = (function quantum$db$datomic$reactive$pattern_gen$query__GT_map(query){
return quantum.core.collections.split_list_at.call(null,cljs.core.keyword_QMARK_,query);
});
quantum.db.datomic.reactive.pattern_gen.clause_item = (function quantum$db$datomic$reactive$pattern_gen$clause_item(varmap,item){
if((item instanceof cljs.core.Symbol)){
var or__17525__auto__ = varmap.call(null,item);
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
}
} else {
return item;
}
});
quantum.db.datomic.reactive.pattern_gen.clause__GT_pattern = (function quantum$db$datomic$reactive$pattern_gen$clause__GT_pattern(varmap,clause){
return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,quantum.db.datomic.reactive.pattern_gen.clause_item,varmap),clause));
});
quantum.db.datomic.reactive.pattern_gen.where__GT_patterns = (function quantum$db$datomic$reactive$pattern_gen$where__GT_patterns(varmap,where){
return cljs.core.map.call(null,cljs.core.partial.call(null,quantum.db.datomic.reactive.pattern_gen.clause__GT_pattern,varmap),where);
});
quantum.db.datomic.reactive.pattern_gen.q_pattern_gen = (function quantum$db$datomic$reactive$pattern_gen$q_pattern_gen(query,vars){
var qm = quantum.db.datomic.reactive.pattern_gen.query__GT_map.call(null,query);
var simple_query_QMARK_ = cljs.core.not.call(null,quantum.core.collections.deep_list_QMARK_.call(null,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(qm)));
var varmap = (cljs.core.truth_((function (){var and__17513__auto__ = new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm);
if(cljs.core.truth_(and__17513__auto__)){
return (cljs.core.count.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm)) > (1));
} else {
return and__17513__auto__;
}
})())?cljs.core.zipmap.call(null,cljs.core.rest.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm)),vars):cljs.core.PersistentArrayMap.EMPTY);
if(simple_query_QMARK_){
return quantum.db.datomic.reactive.pattern_gen.where__GT_patterns.call(null,varmap,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(qm));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
}
});
quantum.db.datomic.reactive.pattern_gen.reverse_lookup_QMARK_ = (function quantum$db$datomic$reactive$pattern_gen$reverse_lookup_QMARK_(attr){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.name.call(null,attr)),"_")){
return cljs.core.keyword.call(null,[cljs.core.str(cljs.core.namespace.call(null,attr)),cljs.core.str("/"),cljs.core.str(cljs.core.reduce.call(null,cljs.core.str,cljs.core.rest.call(null,cljs.core.name.call(null,attr))))].join(''));
} else {
return null;
}
});
quantum.db.datomic.reactive.pattern_gen.pull_list;
quantum.db.datomic.reactive.pattern_gen.pull_datom = (function quantum$db$datomic$reactive$pattern_gen$pull_datom(k,ent_id){
var temp__4423__auto__ = quantum.db.datomic.reactive.pattern_gen.reverse_lookup_QMARK_.call(null,k);
if(cljs.core.truth_(temp__4423__auto__)){
var rk = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),rk,ent_id], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ent_id,k], null);
}
});
quantum.db.datomic.reactive.pattern_gen.pull_map = (function quantum$db$datomic$reactive$pattern_gen$pull_map(m,ent_id){
if(cljs.core.empty_QMARK_.call(null,m)){
return cljs.core.PersistentVector.EMPTY;
} else {
var vec__46920 = cljs.core.first.call(null,m);
var k = cljs.core.nth.call(null,vec__46920,(0),null);
var v = cljs.core.nth.call(null,vec__46920,(1),null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quantum.db.datomic.reactive.pattern_gen.pull_datom.call(null,k,ent_id)], null),quantum.db.datomic.reactive.pattern_gen.pull_list.call(null,v,new cljs.core.Symbol(null,"_","_",-1201019570,null)),quantum$db$datomic$reactive$pattern_gen$pull_map.call(null,cljs.core.rest.call(null,m),ent_id));
}
});
quantum.db.datomic.reactive.pattern_gen.pull_list = (function quantum$db$datomic$reactive$pattern_gen$pull_list(ls,ent_id){
if(cljs.core.empty_QMARK_.call(null,ls)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,ls),new cljs.core.Symbol(null,"*","*",345799209,null))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ent_id], null),quantum$db$datomic$reactive$pattern_gen$pull_list.call(null,cljs.core.rest.call(null,ls),ent_id));
} else {
if(((cljs.core.first.call(null,ls) instanceof cljs.core.Keyword)) && (cljs.core.not_EQ_.call(null,cljs.core.first.call(null,ls),new cljs.core.Keyword("db","id","db/id",-1388397098)))){
return cljs.core.cons.call(null,quantum.db.datomic.reactive.pattern_gen.pull_datom.call(null,cljs.core.first.call(null,ls),ent_id),quantum$db$datomic$reactive$pattern_gen$pull_list.call(null,cljs.core.rest.call(null,ls),ent_id));
} else {
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,ls))){
return cljs.core.concat.call(null,quantum.db.datomic.reactive.pattern_gen.pull_map.call(null,cljs.core.first.call(null,ls),ent_id),quantum$db$datomic$reactive$pattern_gen$pull_list.call(null,cljs.core.rest.call(null,ls),ent_id));
} else {
return quantum$db$datomic$reactive$pattern_gen$pull_list.call(null,cljs.core.rest.call(null,ls),ent_id);

}
}
}
}
});
quantum.db.datomic.reactive.pattern_gen.pull_pattern_gen = (function quantum$db$datomic$reactive$pattern_gen$pull_pattern_gen(ls,ent_id){
var p = quantum.db.datomic.reactive.pattern_gen.pull_list.call(null,ls,ent_id);
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"_","_",-1201019570,null),null], null), null),p))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null);
} else {
return p;
}
});

//# sourceMappingURL=pattern_gen.js.map?rel=1452702581844
/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns]
*/
