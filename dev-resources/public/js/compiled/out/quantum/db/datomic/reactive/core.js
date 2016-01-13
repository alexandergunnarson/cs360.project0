// Compiled by ClojureScript 1.7.170 {}

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns async log core-async]
*/
goog.provide('quantum.db.datomic.reactive.core');
goog.require('cljs.core');
goog.require('quantum.core.collections');
goog.require('cljs.core.async');
goog.require('clojure.core.rrb_vector');
goog.require('quantum.core.log');
goog.require('quantum.core.thread.async');
goog.require('reagent.core');
goog.require('cljs.core');
goog.require('datascript.core');
goog.require('quantum.db.datomic.core');
goog.require('quantum.core.ns');
goog.require('com.stuartsierra.component');
goog.require('quantum.db.datomic.reactive.pattern_gen');
goog.require('quantum.db.datomic.reactive.datom_match');
quantum.db.datomic.reactive.core.rx_conns = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
quantum.db.datomic.reactive.core.try_after_tx;
if(typeof quantum.db.datomic.reactive.core.listeners !== 'undefined'){
} else {
quantum.db.datomic.reactive.core.listeners = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof quantum.db.datomic.reactive.core.txn_listener_running_QMARK_ !== 'undefined'){
} else {
/**
 * Global variable to ensure that no more than one TransactionListener runs
 *               at any given time.
 * 
 *               This is because Datomic's transaction report queue is mutable and consumable
 *               and should only be consumed by one thread if data is not to be lost.
 */
quantum.db.datomic.reactive.core.txn_listener_running_QMARK_ = cljs.core.atom.call(null,false);
}
/**
 * Makes a Datomic or DataScript connection @conn reactive.
 */
quantum.db.datomic.reactive.core.react_BANG_ = (function quantum$db$datomic$reactive$core$react_BANG_(conn){
cljs.core.swap_BANG_.call(null,quantum.db.datomic.reactive.core.rx_conns,cljs.core.merge,cljs.core.PersistentArrayMap.fromArray([conn,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"last-tx-report","last-tx-report",-157775541),reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"conn","conn",278309663),cljs.core.atom.call(null,conn),new cljs.core.Keyword(null,"after-tx","after-tx",2050070599),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"before-tx","before-tx",1079605614),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY)], null)], true, false));

if(cljs.core.truth_(quantum.db.datomic.core.mconn_QMARK_.call(null,conn))){
datascript.core.listen_BANG_.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quantum.db.datomic.reactive.core.rx_conns).call(null,conn))),new cljs.core.Keyword(null,"history","history",-247395220),(function (tx_report){
cljs.core.doall.call(null,(function (){var iter__18297__auto__ = (function quantum$db$datomic$reactive$core$react_BANG__$_iter__47192(s__47193){
return (new cljs.core.LazySeq(null,(function (){
var s__47193__$1 = s__47193;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__47193__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var tx_datom = cljs.core.first.call(null,xs__4977__auto__);
var iterys__18293__auto__ = ((function (s__47193__$1,tx_datom,xs__4977__auto__,temp__4425__auto__){
return (function quantum$db$datomic$reactive$core$react_BANG__$_iter__47192_$_iter__47194(s__47195){
return (new cljs.core.LazySeq(null,((function (s__47193__$1,tx_datom,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__47195__$1 = s__47195;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__47195__$1);
if(temp__4425__auto____$1){
var s__47195__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__47195__$2)){
var c__18295__auto__ = cljs.core.chunk_first.call(null,s__47195__$2);
var size__18296__auto__ = cljs.core.count.call(null,c__18295__auto__);
var b__47197 = cljs.core.chunk_buffer.call(null,size__18296__auto__);
if((function (){var i__47196 = (0);
while(true){
if((i__47196 < size__18296__auto__)){
var after_tx = cljs.core._nth.call(null,c__18295__auto__,i__47196);
cljs.core.chunk_append.call(null,b__47197,quantum.db.datomic.reactive.core.try_after_tx.call(null,new cljs.core.Keyword(null,"db-before","db-before",-553691536).cljs$core$IFn$_invoke$arity$1(tx_report),new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(tx_report),tx_datom,after_tx));

var G__47198 = (i__47196 + (1));
i__47196 = G__47198;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47197),quantum$db$datomic$reactive$core$react_BANG__$_iter__47192_$_iter__47194.call(null,cljs.core.chunk_rest.call(null,s__47195__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47197),null);
}
} else {
var after_tx = cljs.core.first.call(null,s__47195__$2);
return cljs.core.cons.call(null,quantum.db.datomic.reactive.core.try_after_tx.call(null,new cljs.core.Keyword(null,"db-before","db-before",-553691536).cljs$core$IFn$_invoke$arity$1(tx_report),new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(tx_report),tx_datom,after_tx),quantum$db$datomic$reactive$core$react_BANG__$_iter__47192_$_iter__47194.call(null,cljs.core.rest.call(null,s__47195__$2)));
}
} else {
return null;
}
break;
}
});})(s__47193__$1,tx_datom,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__47193__$1,tx_datom,xs__4977__auto__,temp__4425__auto__))
;
var fs__18294__auto__ = cljs.core.seq.call(null,iterys__18293__auto__.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"after-tx","after-tx",2050070599).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quantum.db.datomic.reactive.core.rx_conns).call(null,conn)))));
if(fs__18294__auto__){
return cljs.core.concat.call(null,fs__18294__auto__,quantum$db$datomic$reactive$core$react_BANG__$_iter__47192.call(null,cljs.core.rest.call(null,s__47193__$1)));
} else {
var G__47199 = cljs.core.rest.call(null,s__47193__$1);
s__47193__$1 = G__47199;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__18297__auto__.call(null,new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(tx_report));
})());

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"last-tx-report","last-tx-report",-157775541).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quantum.db.datomic.reactive.core.rx_conns).call(null,conn)),tx_report);
}));
} else {
}

return quantum.db.datomic.core.conn_QMARK_.call(null);
});
quantum.db.datomic.reactive.core.transactions_buffer = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
quantum.db.datomic.reactive.core.split_tx_map = (function quantum$db$datomic$reactive$core$split_tx_map(tx_map){
if(cljs.core.map_QMARK_.call(null,tx_map)){
var id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(tx_map);
return cljs.core.map.call(null,((function (id){
return (function (p__47202){
var vec__47203 = p__47202;
var k = cljs.core.nth.call(null,vec__47203,(0),null);
var v = cljs.core.nth.call(null,vec__47203,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),id,k,v], null);
});})(id))
,cljs.core.dissoc.call(null,tx_map,new cljs.core.Keyword("db","id","db/id",-1388397098)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx_map], null);
}
});
quantum.db.datomic.reactive.core.clean_tx = (function quantum$db$datomic$reactive$core$clean_tx(tx){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,quantum.db.datomic.reactive.core.split_tx_map,tx));
});
quantum.db.datomic.reactive.core.transact_BANG_ = (function quantum$db$datomic$reactive$core$transact_BANG_(conn,tx){
cljs.core.swap_BANG_.call(null,quantum.db.datomic.reactive.core.transactions_buffer,(function (p1__47204_SHARP_){
return cljs.core.update.call(null,p1__47204_SHARP_,conn,cljs.core.comp.call(null,cljs.core.vec,cljs.core.partial.call(null,cljs.core.concat,quantum.db.datomic.reactive.core.clean_tx.call(null,tx))));
}));

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null);
});
quantum.db.datomic.reactive.core.try_all_before_tx_BANG_;
quantum.db.datomic.reactive.core.do_transaction_BANG_ = (function quantum$db$datomic$reactive$core$do_transaction_BANG_(conn){
var tx = cljs.core.deref.call(null,quantum.db.datomic.reactive.core.transactions_buffer).call(null,conn);
if(cljs.core.truth_(tx)){
var _ = quantum.db.datomic.reactive.core.try_all_before_tx_BANG_.call(null,conn,tx);
var tx__$1 = cljs.core.deref.call(null,quantum.db.datomic.reactive.core.transactions_buffer).call(null,conn);
cljs.core.swap_BANG_.call(null,quantum.db.datomic.reactive.core.transactions_buffer,((function (_,tx__$1,tx){
return (function (p1__47205_SHARP_){
return cljs.core.dissoc.call(null,p1__47205_SHARP_,conn);
});})(_,tx__$1,tx))
);

return quantum.db.datomic.core.transact_BANG_.call(null,conn,tx__$1);
} else {
return null;
}
});
quantum.db.datomic.reactive.core.update_transactions_BANG_ = (function quantum$db$datomic$reactive$core$update_transactions_BANG_(){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p__47208){
var vec__47209 = p__47208;
var conn = cljs.core.nth.call(null,vec__47209,(0),null);
return quantum.db.datomic.reactive.core.do_transaction_BANG_.call(null,conn);
}),cljs.core.deref.call(null,quantum.db.datomic.reactive.core.transactions_buffer)));
});
quantum.db.datomic.reactive.core.established_reactions = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
quantum.db.datomic.reactive.core.db_tx = (function quantum$db$datomic$reactive$core$db_tx(conn,patterns){
var temp__4423__auto__ = cljs.core.deref.call(null,quantum.db.datomic.reactive.core.established_reactions).call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-tx","db-tx",1357898393),conn,patterns], null));
if(cljs.core.truth_(temp__4423__auto__)){
var r = temp__4423__auto__;
return r;
} else {
var new_reaction = (function (){var saved_db = cljs.core.atom.call(null,quantum.db.datomic.core.__GT_db.call(null,conn));
return reagent.ratom.make_reaction.call(null,((function (saved_db,temp__4423__auto__){
return (function (){
if(cljs.core.truth_(quantum.db.datomic.reactive.datom_match.any_datoms_match_QMARK_.call(null,new cljs.core.Keyword(null,"db-before","db-before",-553691536).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"last-tx-report","last-tx-report",-157775541).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quantum.db.datomic.reactive.core.rx_conns).call(null,conn)))),patterns,new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"last-tx-report","last-tx-report",-157775541).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quantum.db.datomic.reactive.core.rx_conns).call(null,conn))))))){
return cljs.core.reset_BANG_.call(null,saved_db,new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"last-tx-report","last-tx-report",-157775541).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quantum.db.datomic.reactive.core.rx_conns).call(null,conn)))));
} else {
return cljs.core.deref.call(null,saved_db);
}
});})(saved_db,temp__4423__auto__))
);
})();
cljs.core.swap_BANG_.call(null,quantum.db.datomic.reactive.core.established_reactions,cljs.core.merge,cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-tx","db-tx",1357898393),conn,patterns], null),new_reaction], true, false));

return new_reaction;
}
});
quantum.db.datomic.reactive.core.build_pull = (function quantum$db$datomic$reactive$core$build_pull(db,pull_syntax,entity,vars){
return quantum.db.datomic.core.pull.call(null,db,((cljs.core.empty_QMARK_.call(null,vars))?pull_syntax:quantum.core.collections.deep_map.call(null,(function (p1__47210_SHARP_){
var or__17525__auto__ = vars.call(null,p1__47210_SHARP_);
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return p1__47210_SHARP_;
}
}),pull_syntax)),(function (){var or__17525__auto__ = vars.call(null,entity);
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return entity;
}
})());
});
quantum.db.datomic.reactive.core.pull_tx = (function quantum$db$datomic$reactive$core$pull_tx(conn,patterns,pull_pattern,entity_id){
var temp__4423__auto__ = cljs.core.deref.call(null,quantum.db.datomic.reactive.core.established_reactions).call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pull-tx","pull-tx",1879853490),conn,patterns,pull_pattern,entity_id], null));
if(cljs.core.truth_(temp__4423__auto__)){
var r = temp__4423__auto__;
return r;
} else {
var patterns__$1 = (function (){var or__17525__auto__ = patterns;
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return quantum.db.datomic.reactive.pattern_gen.pull_pattern_gen.call(null,pull_pattern,entity_id);
}
})();
var new_reaction = (function (){var saved_pull = cljs.core.atom.call(null,((cljs.core.not.call(null,(function (){var or__17525__auto__ = quantum.db.datomic.reactive.datom_match.query_symbol_QMARK_.call(null,entity_id);
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return quantum.core.collections.deep_find.call(null,quantum.db.datomic.reactive.datom_match.query_symbol_QMARK_,pull_pattern);
}
})()))?quantum.db.datomic.core.pull.call(null,quantum.db.datomic.core.__GT_db.call(null,conn),pull_pattern,entity_id):null));
return reagent.ratom.make_reaction.call(null,((function (saved_pull,patterns__$1,temp__4423__auto__){
return (function (){
var temp__4423__auto____$1 = quantum.db.datomic.reactive.datom_match.any_datoms_match_QMARK_.call(null,new cljs.core.Keyword(null,"db-before","db-before",-553691536).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"last-tx-report","last-tx-report",-157775541).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quantum.db.datomic.reactive.core.rx_conns).call(null,conn)))),patterns__$1,new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"last-tx-report","last-tx-report",-157775541).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quantum.db.datomic.reactive.core.rx_conns).call(null,conn)))));
if(cljs.core.truth_(temp__4423__auto____$1)){
var vars = temp__4423__auto____$1;
var new_pull = quantum.db.datomic.reactive.core.build_pull.call(null,new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"last-tx-report","last-tx-report",-157775541).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quantum.db.datomic.reactive.core.rx_conns).call(null,conn)))),pull_pattern,entity_id,vars);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,saved_pull),new_pull)){
return cljs.core.reset_BANG_.call(null,saved_pull,new_pull);
} else {
return cljs.core.deref.call(null,saved_pull);
}
} else {
return cljs.core.deref.call(null,saved_pull);
}
});})(saved_pull,patterns__$1,temp__4423__auto__))
);
})();
cljs.core.swap_BANG_.call(null,quantum.db.datomic.reactive.core.established_reactions,cljs.core.merge,cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pull-tx","pull-tx",1879853490),conn,patterns__$1,pull_pattern,entity_id], null),new_reaction], true, false));

return new_reaction;
}
});
quantum.db.datomic.reactive.core.pull = (function quantum$db$datomic$reactive$core$pull(conn,pull_pattern,entity_id){
return quantum.db.datomic.reactive.core.pull_tx.call(null,conn,quantum.db.datomic.reactive.pattern_gen.pull_pattern_gen.call(null,pull_pattern,entity_id),pull_pattern,entity_id);
});
quantum.db.datomic.reactive.core.build_query = (function quantum$db$datomic$reactive$core$build_query(db,q,args){
return cljs.core.apply.call(null,cljs.core.partial.call(null,quantum.db.datomic.core.q,q),cljs.core.cons.call(null,db,(function (){var or__17525__auto__ = args;
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})()));
});
quantum.db.datomic.reactive.core.q_tx = (function quantum$db$datomic$reactive$core$q_tx(var_args){
var args__18590__auto__ = [];
var len__18583__auto___47216 = arguments.length;
var i__18584__auto___47217 = (0);
while(true){
if((i__18584__auto___47217 < len__18583__auto___47216)){
args__18590__auto__.push((arguments[i__18584__auto___47217]));

var G__47218 = (i__18584__auto___47217 + (1));
i__18584__auto___47217 = G__47218;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((3) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((3)),(0))):null);
return quantum.db.datomic.reactive.core.q_tx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__18591__auto__);
});

quantum.db.datomic.reactive.core.q_tx.cljs$core$IFn$_invoke$arity$variadic = (function (conn,patterns,query,args){
var temp__4423__auto__ = cljs.core.deref.call(null,quantum.db.datomic.reactive.core.established_reactions).call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q-tx","q-tx",1250959568),conn,patterns,query,args], null));
if(cljs.core.truth_(temp__4423__auto__)){
var r = temp__4423__auto__;
return r;
} else {
var patterns__$1 = (function (){var or__17525__auto__ = patterns;
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return quantum.db.datomic.reactive.pattern_gen.q_pattern_gen.call(null,query,args);
}
})();
var new_reaction = (function (){var saved_q = cljs.core.atom.call(null,((cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,quantum.db.datomic.reactive.datom_match.query_symbol_QMARK_,args)))?quantum.db.datomic.reactive.core.build_query.call(null,quantum.db.datomic.core.__GT_db.call(null,conn),query,args):cljs.core.PersistentHashSet.EMPTY));
return reagent.ratom.make_reaction.call(null,((function (saved_q,patterns__$1,temp__4423__auto__){
return (function (){
var temp__4423__auto____$1 = quantum.db.datomic.reactive.datom_match.any_datoms_match_QMARK_.call(null,new cljs.core.Keyword(null,"db-before","db-before",-553691536).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"last-tx-report","last-tx-report",-157775541).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quantum.db.datomic.reactive.core.rx_conns).call(null,conn)))),patterns__$1,new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"last-tx-report","last-tx-report",-157775541).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quantum.db.datomic.reactive.core.rx_conns).call(null,conn)))));
if(cljs.core.truth_(temp__4423__auto____$1)){
var vars = temp__4423__auto____$1;
var new_q = quantum.db.datomic.reactive.core.build_query.call(null,new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"last-tx-report","last-tx-report",-157775541).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quantum.db.datomic.reactive.core.rx_conns).call(null,conn)))),query,cljs.core.map.call(null,((function (vars,temp__4423__auto____$1,saved_q,patterns__$1,temp__4423__auto__){
return (function (p1__47211_SHARP_){
var or__17525__auto__ = vars.call(null,p1__47211_SHARP_);
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return p1__47211_SHARP_;
}
});})(vars,temp__4423__auto____$1,saved_q,patterns__$1,temp__4423__auto__))
,args));
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,saved_q),new_q)){
return cljs.core.reset_BANG_.call(null,saved_q,new_q);
} else {
return cljs.core.deref.call(null,saved_q);
}
} else {
return cljs.core.deref.call(null,saved_q);
}
});})(saved_q,patterns__$1,temp__4423__auto__))
);
})();
cljs.core.swap_BANG_.call(null,quantum.db.datomic.reactive.core.established_reactions,cljs.core.merge,cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q-tx","q-tx",1250959568),conn,patterns__$1,query,args], null),new_reaction], true, false));

return new_reaction;
}
});

quantum.db.datomic.reactive.core.q_tx.cljs$lang$maxFixedArity = (3);

quantum.db.datomic.reactive.core.q_tx.cljs$lang$applyTo = (function (seq47212){
var G__47213 = cljs.core.first.call(null,seq47212);
var seq47212__$1 = cljs.core.next.call(null,seq47212);
var G__47214 = cljs.core.first.call(null,seq47212__$1);
var seq47212__$2 = cljs.core.next.call(null,seq47212__$1);
var G__47215 = cljs.core.first.call(null,seq47212__$2);
var seq47212__$3 = cljs.core.next.call(null,seq47212__$2);
return quantum.db.datomic.reactive.core.q_tx.cljs$core$IFn$_invoke$arity$variadic(G__47213,G__47214,G__47215,seq47212__$3);
});
quantum.db.datomic.reactive.core.q;
quantum.db.datomic.reactive.core.try_after_tx = (function quantum$db$datomic$reactive$core$try_after_tx(db_before,db_after,tx_datom,p__47219){
var vec__47221 = p__47219;
var patterns = cljs.core.nth.call(null,vec__47221,(0),null);
var handler_fn = cljs.core.nth.call(null,vec__47221,(1),null);
if(cljs.core.truth_(quantum.db.datomic.reactive.datom_match.datom_match_QMARK_.call(null,db_before,patterns,tx_datom))){
return handler_fn.call(null,tx_datom,db_after);
} else {
return null;
}
});
quantum.db.datomic.reactive.core.try_before_tx = (function quantum$db$datomic$reactive$core$try_before_tx(conn,tx_datom,p__47222){
var vec__47224 = p__47222;
var patterns = cljs.core.nth.call(null,vec__47224,(0),null);
var handler_fn = cljs.core.nth.call(null,vec__47224,(1),null);
if(cljs.core.truth_(quantum.db.datomic.reactive.datom_match.datom_match_QMARK_.call(null,quantum.db.datomic.core.__GT_db.call(null,conn),patterns,tx_datom))){
return handler_fn.call(null,tx_datom,quantum.db.datomic.core.__GT_db.call(null,conn));
} else {
return null;
}
});
quantum.db.datomic.reactive.core.try_all_before_tx_BANG_ = (function quantum$db$datomic$reactive$core$try_all_before_tx_BANG_(conn,txs){
return cljs.core.concat.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.doall.call(null,(function (){var iter__18297__auto__ = (function quantum$db$datomic$reactive$core$try_all_before_tx_BANG__$_iter__47231(s__47232){
return (new cljs.core.LazySeq(null,(function (){
var s__47232__$1 = s__47232;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__47232__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var tx_datom = cljs.core.first.call(null,xs__4977__auto__);
var iterys__18293__auto__ = ((function (s__47232__$1,tx_datom,xs__4977__auto__,temp__4425__auto__){
return (function quantum$db$datomic$reactive$core$try_all_before_tx_BANG__$_iter__47231_$_iter__47233(s__47234){
return (new cljs.core.LazySeq(null,((function (s__47232__$1,tx_datom,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__47234__$1 = s__47234;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__47234__$1);
if(temp__4425__auto____$1){
var s__47234__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__47234__$2)){
var c__18295__auto__ = cljs.core.chunk_first.call(null,s__47234__$2);
var size__18296__auto__ = cljs.core.count.call(null,c__18295__auto__);
var b__47236 = cljs.core.chunk_buffer.call(null,size__18296__auto__);
if((function (){var i__47235 = (0);
while(true){
if((i__47235 < size__18296__auto__)){
var before_tx = cljs.core._nth.call(null,c__18295__auto__,i__47235);
cljs.core.chunk_append.call(null,b__47236,quantum.db.datomic.reactive.core.try_before_tx.call(null,conn,tx_datom,before_tx));

var G__47237 = (i__47235 + (1));
i__47235 = G__47237;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47236),quantum$db$datomic$reactive$core$try_all_before_tx_BANG__$_iter__47231_$_iter__47233.call(null,cljs.core.chunk_rest.call(null,s__47234__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47236),null);
}
} else {
var before_tx = cljs.core.first.call(null,s__47234__$2);
return cljs.core.cons.call(null,quantum.db.datomic.reactive.core.try_before_tx.call(null,conn,tx_datom,before_tx),quantum$db$datomic$reactive$core$try_all_before_tx_BANG__$_iter__47231_$_iter__47233.call(null,cljs.core.rest.call(null,s__47234__$2)));
}
} else {
return null;
}
break;
}
});})(s__47232__$1,tx_datom,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__47232__$1,tx_datom,xs__4977__auto__,temp__4425__auto__))
;
var fs__18294__auto__ = cljs.core.seq.call(null,iterys__18293__auto__.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"before-tx","before-tx",1079605614).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quantum.db.datomic.reactive.core.rx_conns).call(null,conn)))));
if(fs__18294__auto__){
return cljs.core.concat.call(null,fs__18294__auto__,quantum$db$datomic$reactive$core$try_all_before_tx_BANG__$_iter__47231.call(null,cljs.core.rest.call(null,s__47232__$1)));
} else {
var G__47238 = cljs.core.rest.call(null,s__47232__$1);
s__47232__$1 = G__47238;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__18297__auto__.call(null,txs);
})())),txs);
});
quantum.db.datomic.reactive.core.after_tx_BANG_ = (function quantum$db$datomic$reactive$core$after_tx_BANG_(conn,patterns,handler_fn){
return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"after-tx","after-tx",2050070599).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quantum.db.datomic.reactive.core.rx_conns).call(null,conn)),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [patterns,handler_fn], null));
});
quantum.db.datomic.reactive.core.before_tx_BANG_ = (function quantum$db$datomic$reactive$core$before_tx_BANG_(conn,patterns,handler_fn){
return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"before-tx","before-tx",1079605614).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quantum.db.datomic.reactive.core.rx_conns).call(null,conn)),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [patterns,handler_fn], null));
});
quantum.db.datomic.reactive.core.q = (function quantum$db$datomic$reactive$core$q(var_args){
var args__18590__auto__ = [];
var len__18583__auto___47242 = arguments.length;
var i__18584__auto___47243 = (0);
while(true){
if((i__18584__auto___47243 < len__18583__auto___47242)){
args__18590__auto__.push((arguments[i__18584__auto___47243]));

var G__47244 = (i__18584__auto___47243 + (1));
i__18584__auto___47243 = G__47244;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((2) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((2)),(0))):null);
return quantum.db.datomic.reactive.core.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18591__auto__);
});

quantum.db.datomic.reactive.core.q.cljs$core$IFn$_invoke$arity$variadic = (function (conn,query,args){
return cljs.core.apply.call(null,quantum.db.datomic.reactive.core.q_tx,conn,null,query,args);
});

quantum.db.datomic.reactive.core.q.cljs$lang$maxFixedArity = (2);

quantum.db.datomic.reactive.core.q.cljs$lang$applyTo = (function (seq47239){
var G__47240 = cljs.core.first.call(null,seq47239);
var seq47239__$1 = cljs.core.next.call(null,seq47239);
var G__47241 = cljs.core.first.call(null,seq47239__$1);
var seq47239__$2 = cljs.core.next.call(null,seq47239__$1);
return quantum.db.datomic.reactive.core.q.cljs$core$IFn$_invoke$arity$variadic(G__47240,G__47241,seq47239__$2);
});
setInterval(quantum.db.datomic.reactive.core.update_transactions_BANG_,(17));

//# sourceMappingURL=core.js.map?rel=1452702582778
/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns async log core-async]
*/
