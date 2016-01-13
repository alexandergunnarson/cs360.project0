// Compiled by ClojureScript 1.7.170 {}

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns]
*/
goog.provide('quantum.db.datomic.reactive.datom_match');
goog.require('cljs.core');
goog.require('quantum.db.datomic.core');
goog.require('clojure.core.rrb_vector');
goog.require('quantum.core.ns');
goog.require('cljs.core');
quantum.db.datomic.reactive.datom_match.query_symbol_QMARK_ = (function quantum$db$datomic$reactive$datom_match$query_symbol_QMARK_(s){
return ((s instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,[cljs.core.str(s)].join('')),"?"));
});
quantum.db.datomic.reactive.datom_match.tx_item_match_q_QMARK_ = (function quantum$db$datomic$reactive$datom_match$tx_item_match_q_QMARK_(pattern_item,tx_datom_item){
if(cljs.core._EQ_.call(null,pattern_item,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return true;
} else {
if(cljs.core.truth_(quantum.db.datomic.reactive.datom_match.query_symbol_QMARK_.call(null,pattern_item))){
return cljs.core.PersistentArrayMap.fromArray([pattern_item,tx_datom_item], true, false);
} else {
if(cljs.core.coll_QMARK_.call(null,pattern_item)){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([tx_datom_item], true),pattern_item);
} else {
if(cljs.core.fn_QMARK_.call(null,pattern_item)){
return pattern_item.call(null,tx_datom_item);
} else {
return cljs.core._EQ_.call(null,pattern_item,tx_datom_item);

}
}
}
}
});
quantum.db.datomic.reactive.datom_match.tx_pattern_match_q_QMARK_ = (function quantum$db$datomic$reactive$datom_match$tx_pattern_match_q_QMARK_(pattern,tx_datom){
var pattern__$1 = pattern;
var tx_datom__$1 = tx_datom;
var vars = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,pattern__$1)){
return vars;
} else {
var temp__4425__auto__ = quantum.db.datomic.reactive.datom_match.tx_item_match_q_QMARK_.call(null,cljs.core.first.call(null,pattern__$1),cljs.core.first.call(null,tx_datom__$1));
if(cljs.core.truth_(temp__4425__auto__)){
var v = temp__4425__auto__;
var G__47157 = cljs.core.rest.call(null,pattern__$1);
var G__47158 = cljs.core.rest.call(null,tx_datom__$1);
var G__47159 = ((cljs.core.map_QMARK_.call(null,v))?cljs.core.merge.call(null,v,vars):vars);
pattern__$1 = G__47157;
tx_datom__$1 = G__47158;
vars = G__47159;
continue;
} else {
return null;
}
}
break;
}
});
quantum.db.datomic.reactive.datom_match.build_query = (function quantum$db$datomic$reactive$datom_match$build_query(vars,query){
var ks = cljs.core.keys.call(null,vars);
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.vec.call(null,ks)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null)], null),ks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"where","where",-2044795965)], null),query));
});
quantum.db.datomic.reactive.datom_match.query_unifies_QMARK_ = (function quantum$db$datomic$reactive$datom_match$query_unifies_QMARK_(db,vars,query){
return !(cljs.core.empty_QMARK_.call(null,cljs.core.apply.call(null,quantum.db.datomic.core.q,quantum.db.datomic.reactive.datom_match.build_query.call(null,vars,query),cljs.core.cons.call(null,db,cljs.core.vals.call(null,vars)))));
});
quantum.db.datomic.reactive.datom_match.datom_pattern_match = (function quantum$db$datomic$reactive$datom_match$datom_pattern_match(db,pattern,datom,vars,queries){
var temp__4425__auto__ = quantum.db.datomic.reactive.datom_match.tx_pattern_match_q_QMARK_.call(null,pattern,datom);
if(cljs.core.truth_(temp__4425__auto__)){
var ret_vars = temp__4425__auto__;
var all_vars = cljs.core.merge.call(null,vars,ret_vars);
if(cljs.core.empty_QMARK_.call(null,ret_vars)){
return vars;
} else {
if(cljs.core.empty_QMARK_.call(null,queries)){
return all_vars;
} else {
if(cljs.core.truth_(quantum.db.datomic.reactive.datom_match.query_unifies_QMARK_.call(null,db,all_vars,queries))){
return all_vars;
} else {
return null;
}

}
}
} else {
return null;
}
});
quantum.db.datomic.reactive.datom_match.datom_match_QMARK_ = (function quantum$db$datomic$reactive$datom_match$datom_match_QMARK_(var_args){
var args47160 = [];
var len__18583__auto___47167 = arguments.length;
var i__18584__auto___47168 = (0);
while(true){
if((i__18584__auto___47168 < len__18583__auto___47167)){
args47160.push((arguments[i__18584__auto___47168]));

var G__47169 = (i__18584__auto___47168 + (1));
i__18584__auto___47168 = G__47169;
continue;
} else {
}
break;
}

var G__47162 = args47160.length;
switch (G__47162) {
case 3:
return quantum.db.datomic.reactive.datom_match.datom_match_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return quantum.db.datomic.reactive.datom_match.datom_match_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return quantum.db.datomic.reactive.datom_match.datom_match_QMARK_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47160.length)].join('')));

}
});

quantum.db.datomic.reactive.datom_match.datom_match_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (db,patterns,datom){
return quantum.db.datomic.reactive.datom_match.datom_match_QMARK_.call(null,db,patterns,datom,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY);
});

quantum.db.datomic.reactive.datom_match.datom_match_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (db,patterns,datom,vars){
return quantum.db.datomic.reactive.datom_match.datom_match_QMARK_.call(null,db,patterns,datom,vars,cljs.core.PersistentVector.EMPTY);
});

quantum.db.datomic.reactive.datom_match.datom_match_QMARK_.cljs$core$IFn$_invoke$arity$5 = (function (db,patterns,datom,vars,queries){
if(cljs.core.map_QMARK_.call(null,patterns)){
return quantum.db.datomic.reactive.datom_match.datom_match_QMARK_.call(null,db,cljs.core.first.call(null,cljs.core.keys.call(null,patterns)),datom,vars,cljs.core.vec.call(null,cljs.core.concat.call(null,queries,cljs.core.first.call(null,cljs.core.vals.call(null,patterns)))));
} else {
return cljs.core.first.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,(function (){var iter__18297__auto__ = (function quantum$db$datomic$reactive$datom_match$iter__47163(s__47164){
return (new cljs.core.LazySeq(null,(function (){
var s__47164__$1 = s__47164;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__47164__$1);
if(temp__4425__auto__){
var s__47164__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__47164__$2)){
var c__18295__auto__ = cljs.core.chunk_first.call(null,s__47164__$2);
var size__18296__auto__ = cljs.core.count.call(null,c__18295__auto__);
var b__47166 = cljs.core.chunk_buffer.call(null,size__18296__auto__);
if((function (){var i__47165 = (0);
while(true){
if((i__47165 < size__18296__auto__)){
var p = cljs.core._nth.call(null,c__18295__auto__,i__47165);
cljs.core.chunk_append.call(null,b__47166,((cljs.core.map_QMARK_.call(null,p))?quantum.db.datomic.reactive.datom_match.datom_match_QMARK_.call(null,db,p,datom,vars,queries):quantum.db.datomic.reactive.datom_match.datom_pattern_match.call(null,db,p,datom,vars,queries)));

var G__47171 = (i__47165 + (1));
i__47165 = G__47171;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47166),quantum$db$datomic$reactive$datom_match$iter__47163.call(null,cljs.core.chunk_rest.call(null,s__47164__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47166),null);
}
} else {
var p = cljs.core.first.call(null,s__47164__$2);
return cljs.core.cons.call(null,((cljs.core.map_QMARK_.call(null,p))?quantum.db.datomic.reactive.datom_match.datom_match_QMARK_.call(null,db,p,datom,vars,queries):quantum.db.datomic.reactive.datom_match.datom_pattern_match.call(null,db,p,datom,vars,queries)),quantum$db$datomic$reactive$datom_match$iter__47163.call(null,cljs.core.rest.call(null,s__47164__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__18297__auto__.call(null,patterns);
})()));
}
});

quantum.db.datomic.reactive.datom_match.datom_match_QMARK_.cljs$lang$maxFixedArity = 5;
quantum.db.datomic.reactive.datom_match.any_datoms_match_QMARK_ = (function quantum$db$datomic$reactive$datom_match$any_datoms_match_QMARK_(var_args){
var args47172 = [];
var len__18583__auto___47179 = arguments.length;
var i__18584__auto___47180 = (0);
while(true){
if((i__18584__auto___47180 < len__18583__auto___47179)){
args47172.push((arguments[i__18584__auto___47180]));

var G__47181 = (i__18584__auto___47180 + (1));
i__18584__auto___47180 = G__47181;
continue;
} else {
}
break;
}

var G__47174 = args47172.length;
switch (G__47174) {
case 3:
return quantum.db.datomic.reactive.datom_match.any_datoms_match_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return quantum.db.datomic.reactive.datom_match.any_datoms_match_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return quantum.db.datomic.reactive.datom_match.any_datoms_match_QMARK_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47172.length)].join('')));

}
});

quantum.db.datomic.reactive.datom_match.any_datoms_match_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (db,patterns,datoms){
return quantum.db.datomic.reactive.datom_match.any_datoms_match_QMARK_.call(null,db,patterns,datoms,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY);
});

quantum.db.datomic.reactive.datom_match.any_datoms_match_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (db,patterns,datoms,vars){
return quantum.db.datomic.reactive.datom_match.any_datoms_match_QMARK_.call(null,db,patterns,datoms,vars,cljs.core.PersistentVector.EMPTY);
});

quantum.db.datomic.reactive.datom_match.any_datoms_match_QMARK_.cljs$core$IFn$_invoke$arity$5 = (function (db,patterns,datoms,vars,queries){
return cljs.core.first.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,(function (){var iter__18297__auto__ = (function quantum$db$datomic$reactive$datom_match$iter__47175(s__47176){
return (new cljs.core.LazySeq(null,(function (){
var s__47176__$1 = s__47176;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__47176__$1);
if(temp__4425__auto__){
var s__47176__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__47176__$2)){
var c__18295__auto__ = cljs.core.chunk_first.call(null,s__47176__$2);
var size__18296__auto__ = cljs.core.count.call(null,c__18295__auto__);
var b__47178 = cljs.core.chunk_buffer.call(null,size__18296__auto__);
if((function (){var i__47177 = (0);
while(true){
if((i__47177 < size__18296__auto__)){
var d = cljs.core._nth.call(null,c__18295__auto__,i__47177);
cljs.core.chunk_append.call(null,b__47178,quantum.db.datomic.reactive.datom_match.datom_match_QMARK_.call(null,db,patterns,d,vars,queries));

var G__47183 = (i__47177 + (1));
i__47177 = G__47183;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47178),quantum$db$datomic$reactive$datom_match$iter__47175.call(null,cljs.core.chunk_rest.call(null,s__47176__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47178),null);
}
} else {
var d = cljs.core.first.call(null,s__47176__$2);
return cljs.core.cons.call(null,quantum.db.datomic.reactive.datom_match.datom_match_QMARK_.call(null,db,patterns,d,vars,queries),quantum$db$datomic$reactive$datom_match$iter__47175.call(null,cljs.core.rest.call(null,s__47176__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__18297__auto__.call(null,datoms);
})()));
});

quantum.db.datomic.reactive.datom_match.any_datoms_match_QMARK_.cljs$lang$maxFixedArity = 5;

//# sourceMappingURL=datom_match.js.map?rel=1452702582583
/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns]
*/
