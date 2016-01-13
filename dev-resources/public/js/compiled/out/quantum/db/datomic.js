// Compiled by ClojureScript 1.7.170 {}

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns err core-async pr log logic fn cbase tpred async]
*/
goog.provide('quantum.db.datomic');
goog.require('cljs.core');
goog.require('quantum.core.collections');
goog.require('quantum.core.resources');
goog.require('cljs_uuid_utils.core');
goog.require('cljs.core.async');
goog.require('clojure.core.rrb_vector');
goog.require('quantum.core.logic');
goog.require('quantum.core.print');
goog.require('quantum.core.log');
goog.require('quantum.core.type.predicates');
goog.require('quantum.core.thread.async');
goog.require('cljs.core');
goog.require('quantum.core.function$');
goog.require('fast_zip.core');
goog.require('datascript.core');
goog.require('quantum.db.datomic.core');
goog.require('quantum.core.ns');
goog.require('quantum.core.collections.base');
goog.require('quantum.core.error');
goog.require('com.stuartsierra.component');
goog.require('quantum.db.datomic.reactive.core');
goog.require('datomic_cljs.api');
/**
 * Reactive |q|. Must be called within a Reagent component and will only
 * update the component whenever the data it is querying has changed.
 */
quantum.db.datomic.rx_q = (function quantum$db$datomic$rx_q(var_args){
var args47247 = [];
var len__18583__auto___47253 = arguments.length;
var i__18584__auto___47254 = (0);
while(true){
if((i__18584__auto___47254 < len__18583__auto___47253)){
args47247.push((arguments[i__18584__auto___47254]));

var G__47255 = (i__18584__auto___47254 + (1));
i__18584__auto___47254 = G__47255;
continue;
} else {
}
break;
}

var G__47252 = args47247.length;
switch (G__47252) {
case 1:
return quantum.db.datomic.rx_q.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__18602__auto__ = (new cljs.core.IndexedSeq(args47247.slice((2)),(0)));
return quantum.db.datomic.rx_q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18602__auto__);

}
});

quantum.db.datomic.rx_q.cljs$core$IFn$_invoke$arity$1 = (function (query){
return quantum.db.datomic.rx_q.call(null,query,cljs.core.deref.call(null,quantum.db.datomic.core.conn_STAR_));
});

quantum.db.datomic.rx_q.cljs$core$IFn$_invoke$arity$variadic = (function (query,conn,args){
return cljs.core.apply.call(null,quantum.db.datomic.reactive.core.q,conn,query,args);
});

quantum.db.datomic.rx_q.cljs$lang$applyTo = (function (seq47248){
var G__47249 = cljs.core.first.call(null,seq47248);
var seq47248__$1 = cljs.core.next.call(null,seq47248);
var G__47250 = cljs.core.first.call(null,seq47248__$1);
var seq47248__$2 = cljs.core.next.call(null,seq47248__$1);
return quantum.db.datomic.rx_q.cljs$core$IFn$_invoke$arity$variadic(G__47249,G__47250,seq47248__$2);
});

quantum.db.datomic.rx_q.cljs$lang$maxFixedArity = (2);
/**
 * Reactive |pull|. Only attempts to pull any new data if there has been a
 * transaction of any datoms that might have changed the data it is looking at.
 */
quantum.db.datomic.rx_pull = (function quantum$db$datomic$rx_pull(var_args){
var args47257 = [];
var len__18583__auto___47260 = arguments.length;
var i__18584__auto___47261 = (0);
while(true){
if((i__18584__auto___47261 < len__18583__auto___47260)){
args47257.push((arguments[i__18584__auto___47261]));

var G__47262 = (i__18584__auto___47261 + (1));
i__18584__auto___47261 = G__47262;
continue;
} else {
}
break;
}

var G__47259 = args47257.length;
switch (G__47259) {
case 2:
return quantum.db.datomic.rx_pull.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quantum.db.datomic.rx_pull.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47257.length)].join('')));

}
});

quantum.db.datomic.rx_pull.cljs$core$IFn$_invoke$arity$2 = (function (selector,eid){
return quantum.db.datomic.rx_pull.call(null,cljs.core.deref.call(null,quantum.db.datomic.core.conn_STAR_),selector,eid);
});

quantum.db.datomic.rx_pull.cljs$core$IFn$_invoke$arity$3 = (function (conn,selector,eid){
return quantum.db.datomic.reactive.core.pull.call(null,conn,selector,eid);
});

quantum.db.datomic.rx_pull.cljs$lang$maxFixedArity = 3;
/**
 * Buffers its transactions in 1/60 second intervals, passes them through
 * any handlers set up in |rx-db/before-tx!|, then batch transacts them to the database.
 */
quantum.db.datomic.rx_transact_BANG_ = (function quantum$db$datomic$rx_transact_BANG_(var_args){
var args47264 = [];
var len__18583__auto___47267 = arguments.length;
var i__18584__auto___47268 = (0);
while(true){
if((i__18584__auto___47268 < len__18583__auto___47267)){
args47264.push((arguments[i__18584__auto___47268]));

var G__47269 = (i__18584__auto___47268 + (1));
i__18584__auto___47268 = G__47269;
continue;
} else {
}
break;
}

var G__47266 = args47264.length;
switch (G__47266) {
case 1:
return quantum.db.datomic.rx_transact_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quantum.db.datomic.rx_transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47264.length)].join('')));

}
});

quantum.db.datomic.rx_transact_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (tx_data){
return quantum.db.datomic.rx_transact_BANG_.call(null,cljs.core.deref.call(null,quantum.db.datomic.core.conn_STAR_),tx_data);
});

quantum.db.datomic.rx_transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return quantum.db.datomic.reactive.core.transact_BANG_.call(null,conn,tx_data);
});

quantum.db.datomic.rx_transact_BANG_.cljs$lang$maxFixedArity = 2;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {com.stuartsierra.component.Lifecycle}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
quantum.db.datomic.EphemeralDatabase = (function (conn,history,history_limit,reactive_QMARK_,__meta,__extmap,__hash){
this.conn = conn;
this.history = history;
this.history_limit = history_limit;
this.reactive_QMARK_ = reactive_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
quantum.db.datomic.EphemeralDatabase.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18139__auto__,k__18140__auto__){
var self__ = this;
var this__18139__auto____$1 = this;
return cljs.core._lookup.call(null,this__18139__auto____$1,k__18140__auto__,null);
});

quantum.db.datomic.EphemeralDatabase.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18141__auto__,k47273,else__18142__auto__){
var self__ = this;
var this__18141__auto____$1 = this;
var G__47275 = (((k47273 instanceof cljs.core.Keyword))?k47273.fqn:null);
switch (G__47275) {
case "conn":
return self__.conn;

break;
case "history":
return self__.history;

break;
case "history-limit":
return self__.history_limit;

break;
case "reactive?":
return self__.reactive_QMARK_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k47273,else__18142__auto__);

}
});

quantum.db.datomic.EphemeralDatabase.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18153__auto__,writer__18154__auto__,opts__18155__auto__){
var self__ = this;
var this__18153__auto____$1 = this;
var pr_pair__18156__auto__ = ((function (this__18153__auto____$1){
return (function (keyval__18157__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,cljs.core.pr_writer,""," ","",opts__18155__auto__,keyval__18157__auto__);
});})(this__18153__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,pr_pair__18156__auto__,"#quantum.db.datomic.EphemeralDatabase{",", ","}",opts__18155__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"conn","conn",278309663),self__.conn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"history","history",-247395220),self__.history],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"history-limit","history-limit",-1938739786),self__.history_limit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reactive?","reactive?",-426643537),self__.reactive_QMARK_],null))], null),self__.__extmap));
});

quantum.db.datomic.EphemeralDatabase.prototype.cljs$core$IIterable$ = true;

quantum.db.datomic.EphemeralDatabase.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47272){
var self__ = this;
var G__47272__$1 = this;
return (new cljs.core.RecordIter((0),G__47272__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conn","conn",278309663),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"history-limit","history-limit",-1938739786),new cljs.core.Keyword(null,"reactive?","reactive?",-426643537)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

quantum.db.datomic.EphemeralDatabase.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18137__auto__){
var self__ = this;
var this__18137__auto____$1 = this;
return self__.__meta;
});

quantum.db.datomic.EphemeralDatabase.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18133__auto__){
var self__ = this;
var this__18133__auto____$1 = this;
return (new quantum.db.datomic.EphemeralDatabase(self__.conn,self__.history,self__.history_limit,self__.reactive_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
});

quantum.db.datomic.EphemeralDatabase.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18143__auto__){
var self__ = this;
var this__18143__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

quantum.db.datomic.EphemeralDatabase.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18134__auto__){
var self__ = this;
var this__18134__auto____$1 = this;
var h__17960__auto__ = self__.__hash;
if(!((h__17960__auto__ == null))){
return h__17960__auto__;
} else {
var h__17960__auto____$1 = cljs.core.hash_imap.call(null,this__18134__auto____$1);
self__.__hash = h__17960__auto____$1;

return h__17960__auto____$1;
}
});

quantum.db.datomic.EphemeralDatabase.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18135__auto__,other__18136__auto__){
var self__ = this;
var this__18135__auto____$1 = this;
if(cljs.core.truth_((function (){var and__17513__auto__ = other__18136__auto__;
if(cljs.core.truth_(and__17513__auto__)){
var and__17513__auto____$1 = (this__18135__auto____$1.constructor === other__18136__auto__.constructor);
if(and__17513__auto____$1){
return cljs.core.equiv_map.call(null,this__18135__auto____$1,other__18136__auto__);
} else {
return and__17513__auto____$1;
}
} else {
return and__17513__auto__;
}
})())){
return true;
} else {
return false;
}
});

quantum.db.datomic.EphemeralDatabase.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18148__auto__,k__18149__auto__){
var self__ = this;
var this__18148__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"history","history",-247395220),null,new cljs.core.Keyword(null,"reactive?","reactive?",-426643537),null,new cljs.core.Keyword(null,"history-limit","history-limit",-1938739786),null,new cljs.core.Keyword(null,"conn","conn",278309663),null], null), null),k__18149__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18148__auto____$1),self__.__meta),k__18149__auto__);
} else {
return (new quantum.db.datomic.EphemeralDatabase(self__.conn,self__.history,self__.history_limit,self__.reactive_QMARK_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18149__auto__)),null));
}
});

quantum.db.datomic.EphemeralDatabase.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18146__auto__,k__18147__auto__,G__47272){
var self__ = this;
var this__18146__auto____$1 = this;
var pred__47276 = cljs.core.keyword_identical_QMARK_;
var expr__47277 = k__18147__auto__;
if(cljs.core.truth_(pred__47276.call(null,new cljs.core.Keyword(null,"conn","conn",278309663),expr__47277))){
return (new quantum.db.datomic.EphemeralDatabase(G__47272,self__.history,self__.history_limit,self__.reactive_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__47276.call(null,new cljs.core.Keyword(null,"history","history",-247395220),expr__47277))){
return (new quantum.db.datomic.EphemeralDatabase(self__.conn,G__47272,self__.history_limit,self__.reactive_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__47276.call(null,new cljs.core.Keyword(null,"history-limit","history-limit",-1938739786),expr__47277))){
return (new quantum.db.datomic.EphemeralDatabase(self__.conn,self__.history,G__47272,self__.reactive_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__47276.call(null,new cljs.core.Keyword(null,"reactive?","reactive?",-426643537),expr__47277))){
return (new quantum.db.datomic.EphemeralDatabase(self__.conn,self__.history,self__.history_limit,G__47272,self__.__meta,self__.__extmap,null));
} else {
return (new quantum.db.datomic.EphemeralDatabase(self__.conn,self__.history,self__.history_limit,self__.reactive_QMARK_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18147__auto__,G__47272),null));
}
}
}
}
});

quantum.db.datomic.EphemeralDatabase.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18151__auto__){
var self__ = this;
var this__18151__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"conn","conn",278309663),self__.conn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"history","history",-247395220),self__.history],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"history-limit","history-limit",-1938739786),self__.history_limit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reactive?","reactive?",-426643537),self__.reactive_QMARK_],null))], null),self__.__extmap));
});

quantum.db.datomic.EphemeralDatabase.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18138__auto__,G__47272){
var self__ = this;
var this__18138__auto____$1 = this;
return (new quantum.db.datomic.EphemeralDatabase(self__.conn,self__.history,self__.history_limit,self__.reactive_QMARK_,G__47272,self__.__extmap,self__.__hash));
});

quantum.db.datomic.EphemeralDatabase.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18144__auto__,entry__18145__auto__){
var self__ = this;
var this__18144__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18145__auto__)){
return cljs.core._assoc.call(null,this__18144__auto____$1,cljs.core._nth.call(null,entry__18145__auto__,(0)),cljs.core._nth.call(null,entry__18145__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18144__auto____$1,entry__18145__auto__);
}
});

quantum.db.datomic.EphemeralDatabase.prototype.com$stuartsierra$component$Lifecycle$ = true;

quantum.db.datomic.EphemeralDatabase.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
quantum.core.log.pr_STAR_.call(null,true,false,cljs.core.println,new cljs.core.Keyword(null,"user","user",1532431356),(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"Starting Ephemeral database...");
});})(this$__$1))
,null)),null);

var history__$1 = (((self__.history_limit > (0)))?cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY):null);
var conn_f = datascript.core.create_conn.call(null);
var _ = (((self__.history_limit > (0)))?(function (){
quantum.core.log.pr_STAR_.call(null,true,false,cljs.core.println,new cljs.core.Keyword(null,"user","user",1532431356),(new cljs.core.Delay(((function (history__$1,conn_f,this$__$1){
return (function (){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"Ephemeral database history set up.");
});})(history__$1,conn_f,this$__$1))
,null)),null);

return datascript.core.listen_BANG_.call(null,conn_f,new cljs.core.Keyword(null,"history1","history1",627042400),((function (history__$1,conn_f,this$__$1){
return (function (tx_report){
quantum.core.log.pr_STAR_.call(null,true,false,cljs.core.println,new cljs.core.Keyword(null,"user","user",1532431356),(new cljs.core.Delay(((function (history__$1,conn_f,this$__$1){
return (function (){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"Adding to history");
});})(history__$1,conn_f,this$__$1))
,null)),null);

var map__47279 = tx_report;
var map__47279__$1 = ((((!((map__47279 == null)))?((((map__47279.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47279.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47279):map__47279);
var db_before = cljs.core.get.call(null,map__47279__$1,new cljs.core.Keyword(null,"db-before","db-before",-553691536));
var db_after = cljs.core.get.call(null,map__47279__$1,new cljs.core.Keyword(null,"db-after","db-after",-571884666));
if(cljs.core.truth_((function (){var and__17513__auto__ = db_before;
if(cljs.core.truth_(and__17513__auto__)){
return db_after;
} else {
return and__17513__auto__;
}
})())){
return cljs.core.swap_BANG_.call(null,history__$1,((function (map__47279,map__47279__$1,db_before,db_after,history__$1,conn_f,this$__$1){
return (function (h){
return quantum.core.collections.trim_head.call(null,cljs.core.conj.call(null,quantum.core.collections.drop_tail.call(null,h,((function (map__47279,map__47279__$1,db_before,db_after,history__$1,conn_f,this$__$1){
return (function (p1__47271_SHARP_){
return (p1__47271_SHARP_ === db_before);
});})(map__47279,map__47279__$1,db_before,db_after,history__$1,conn_f,this$__$1))
),db_after),self__.history_limit);
});})(map__47279,map__47279__$1,db_before,db_after,history__$1,conn_f,this$__$1))
);
} else {
return null;
}
});})(history__$1,conn_f,this$__$1))
);
})()
:null);
var ___$1 = (cljs.core.truth_(self__.reactive_QMARK_)?quantum.db.datomic.reactive.core.react_BANG_.call(null,conn_f):null);
var ___$2 = quantum.core.log.pr_STAR_.call(null,true,false,cljs.core.println,new cljs.core.Keyword(null,"user","user",1532431356),(new cljs.core.Delay(((function (history__$1,conn_f,_,___$1,this$__$1){
return (function (){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"Ephemeral database reactivity set up.");
});})(history__$1,conn_f,_,___$1,this$__$1))
,null)),null);
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"conn","conn",278309663),conn_f,new cljs.core.Keyword(null,"history","history",-247395220),history__$1);
});

quantum.db.datomic.EphemeralDatabase.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
cljs.core.reset_BANG_.call(null,self__.conn,null);

return this$__$1;
});

quantum.db.datomic.EphemeralDatabase.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"conn","conn",1918841190,null),new cljs.core.Symbol(null,"history","history",1393136307,null),new cljs.core.Symbol(null,"history-limit","history-limit",-298208259,null),new cljs.core.Symbol(null,"reactive?","reactive?",1213887990,null)], null);
});

quantum.db.datomic.EphemeralDatabase.cljs$lang$type = true;

quantum.db.datomic.EphemeralDatabase.cljs$lang$ctorPrSeq = (function (this__18173__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"quantum.db.datomic/EphemeralDatabase");
});

quantum.db.datomic.EphemeralDatabase.cljs$lang$ctorPrWriter = (function (this__18173__auto__,writer__18174__auto__){
return cljs.core._write.call(null,writer__18174__auto__,"quantum.db.datomic/EphemeralDatabase");
});

/**
 * Ephemeral (in-memory) database. Currently implemented as
 *        DataScript database. Once the reference to @conn is lost,
 *        the database is garbage-collected.
 * 
 *        @conn, while also a 'connection', is really an atom with the current DataScript DB value.
 */
quantum.db.datomic.__GT_EphemeralDatabase = (function quantum$db$datomic$__GT_EphemeralDatabase(conn,history,history_limit,reactive_QMARK_){
return (new quantum.db.datomic.EphemeralDatabase(conn,history,history_limit,reactive_QMARK_,null,null,null));
});

/**
 * Ephemeral (in-memory) database. Currently implemented as
 *        DataScript database. Once the reference to @conn is lost,
 *        the database is garbage-collected.
 * 
 *        @conn, while also a 'connection', is really an atom with the current DataScript DB value.
 */
quantum.db.datomic.map__GT_EphemeralDatabase = (function quantum$db$datomic$map__GT_EphemeralDatabase(G__47274){
return (new quantum.db.datomic.EphemeralDatabase(new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(G__47274),new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(G__47274),new cljs.core.Keyword(null,"history-limit","history-limit",-1938739786).cljs$core$IFn$_invoke$arity$1(G__47274),new cljs.core.Keyword(null,"reactive?","reactive?",-426643537).cljs$core$IFn$_invoke$arity$1(G__47274),null,cljs.core.dissoc.call(null,G__47274,new cljs.core.Keyword(null,"conn","conn",278309663),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"history-limit","history-limit",-1938739786),new cljs.core.Keyword(null,"reactive?","reactive?",-426643537)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {com.stuartsierra.component.Lifecycle}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
quantum.db.datomic.BackendDatabase = (function (type,name,db_name,table_name,instance_name,host,port,rest_port,uri,conn,create_if_not_present_QMARK_,start_txr_QMARK_,txr_bin_path,txr_props_path,txr_dir,txr_process,txr_alias,init_partitions_QMARK_,partitions,default_partition,init_schemas_QMARK_,schemas,__meta,__extmap,__hash){
this.type = type;
this.name = name;
this.db_name = db_name;
this.table_name = table_name;
this.instance_name = instance_name;
this.host = host;
this.port = port;
this.rest_port = rest_port;
this.uri = uri;
this.conn = conn;
this.create_if_not_present_QMARK_ = create_if_not_present_QMARK_;
this.start_txr_QMARK_ = start_txr_QMARK_;
this.txr_bin_path = txr_bin_path;
this.txr_props_path = txr_props_path;
this.txr_dir = txr_dir;
this.txr_process = txr_process;
this.txr_alias = txr_alias;
this.init_partitions_QMARK_ = init_partitions_QMARK_;
this.partitions = partitions;
this.default_partition = default_partition;
this.init_schemas_QMARK_ = init_schemas_QMARK_;
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
quantum.db.datomic.BackendDatabase.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18139__auto__,k__18140__auto__){
var self__ = this;
var this__18139__auto____$1 = this;
return cljs.core._lookup.call(null,this__18139__auto____$1,k__18140__auto__,null);
});

quantum.db.datomic.BackendDatabase.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18141__auto__,k47283,else__18142__auto__){
var self__ = this;
var this__18141__auto____$1 = this;
var G__47285 = (((k47283 instanceof cljs.core.Keyword))?k47283.fqn:null);
switch (G__47285) {
case "txr-alias":
return self__.txr_alias;

break;
case "txr-dir":
return self__.txr_dir;

break;
case "instance-name":
return self__.instance_name;

break;
case "txr-props-path":
return self__.txr_props_path;

break;
case "default-partition":
return self__.default_partition;

break;
case "name":
return self__.name;

break;
case "db-name":
return self__.db_name;

break;
case "type":
return self__.type;

break;
case "init-schemas?":
return self__.init_schemas_QMARK_;

break;
case "rest-port":
return self__.rest_port;

break;
case "port":
return self__.port;

break;
case "host":
return self__.host;

break;
case "init-partitions?":
return self__.init_partitions_QMARK_;

break;
case "schemas":
return self__.schemas;

break;
case "txr-bin-path":
return self__.txr_bin_path;

break;
case "start-txr?":
return self__.start_txr_QMARK_;

break;
case "txr-process":
return self__.txr_process;

break;
case "uri":
return self__.uri;

break;
case "create-if-not-present?":
return self__.create_if_not_present_QMARK_;

break;
case "partitions":
return self__.partitions;

break;
case "table-name":
return self__.table_name;

break;
case "conn":
return self__.conn;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k47283,else__18142__auto__);

}
});

quantum.db.datomic.BackendDatabase.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18153__auto__,writer__18154__auto__,opts__18155__auto__){
var self__ = this;
var this__18153__auto____$1 = this;
var pr_pair__18156__auto__ = ((function (this__18153__auto____$1){
return (function (keyval__18157__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,cljs.core.pr_writer,""," ","",opts__18155__auto__,keyval__18157__auto__);
});})(this__18153__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,pr_pair__18156__auto__,"#quantum.db.datomic.BackendDatabase{",", ","}",opts__18155__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-name","db-name",1157928745),self__.db_name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"table-name","table-name",-2117866341),self__.table_name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-name","instance-name",-2046274941),self__.instance_name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"host","host",-1558485167),self__.host],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"port","port",1534937262),self__.port],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rest-port","rest-port",-1941871091),self__.rest_port],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"uri","uri",-774711847),self__.uri],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"conn","conn",278309663),self__.conn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"create-if-not-present?","create-if-not-present?",910389370),self__.create_if_not_present_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-txr?","start-txr?",-1145996585),self__.start_txr_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txr-bin-path","txr-bin-path",1991241494),self__.txr_bin_path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txr-props-path","txr-props-path",-1653817146),self__.txr_props_path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txr-dir","txr-dir",604888066),self__.txr_dir],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txr-process","txr-process",106210648),self__.txr_process],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txr-alias","txr-alias",1209439520),self__.txr_alias],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"init-partitions?","init-partitions?",-1378170509),self__.init_partitions_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"partitions","partitions",602979514),self__.partitions],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"default-partition","default-partition",-2076808985),self__.default_partition],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"init-schemas?","init-schemas?",-2021402163),self__.init_schemas_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});

quantum.db.datomic.BackendDatabase.prototype.cljs$core$IIterable$ = true;

quantum.db.datomic.BackendDatabase.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47282){
var self__ = this;
var G__47282__$1 = this;
return (new cljs.core.RecordIter((0),G__47282__$1,22,new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"db-name","db-name",1157928745),new cljs.core.Keyword(null,"table-name","table-name",-2117866341),new cljs.core.Keyword(null,"instance-name","instance-name",-2046274941),new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"port","port",1534937262),new cljs.core.Keyword(null,"rest-port","rest-port",-1941871091),new cljs.core.Keyword(null,"uri","uri",-774711847),new cljs.core.Keyword(null,"conn","conn",278309663),new cljs.core.Keyword(null,"create-if-not-present?","create-if-not-present?",910389370),new cljs.core.Keyword(null,"start-txr?","start-txr?",-1145996585),new cljs.core.Keyword(null,"txr-bin-path","txr-bin-path",1991241494),new cljs.core.Keyword(null,"txr-props-path","txr-props-path",-1653817146),new cljs.core.Keyword(null,"txr-dir","txr-dir",604888066),new cljs.core.Keyword(null,"txr-process","txr-process",106210648),new cljs.core.Keyword(null,"txr-alias","txr-alias",1209439520),new cljs.core.Keyword(null,"init-partitions?","init-partitions?",-1378170509),new cljs.core.Keyword(null,"partitions","partitions",602979514),new cljs.core.Keyword(null,"default-partition","default-partition",-2076808985),new cljs.core.Keyword(null,"init-schemas?","init-schemas?",-2021402163),new cljs.core.Keyword(null,"schemas","schemas",575070579)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

quantum.db.datomic.BackendDatabase.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18137__auto__){
var self__ = this;
var this__18137__auto____$1 = this;
return self__.__meta;
});

quantum.db.datomic.BackendDatabase.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18133__auto__){
var self__ = this;
var this__18133__auto____$1 = this;
return (new quantum.db.datomic.BackendDatabase(self__.type,self__.name,self__.db_name,self__.table_name,self__.instance_name,self__.host,self__.port,self__.rest_port,self__.uri,self__.conn,self__.create_if_not_present_QMARK_,self__.start_txr_QMARK_,self__.txr_bin_path,self__.txr_props_path,self__.txr_dir,self__.txr_process,self__.txr_alias,self__.init_partitions_QMARK_,self__.partitions,self__.default_partition,self__.init_schemas_QMARK_,self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

quantum.db.datomic.BackendDatabase.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18143__auto__){
var self__ = this;
var this__18143__auto____$1 = this;
return (22 + cljs.core.count.call(null,self__.__extmap));
});

quantum.db.datomic.BackendDatabase.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18134__auto__){
var self__ = this;
var this__18134__auto____$1 = this;
var h__17960__auto__ = self__.__hash;
if(!((h__17960__auto__ == null))){
return h__17960__auto__;
} else {
var h__17960__auto____$1 = cljs.core.hash_imap.call(null,this__18134__auto____$1);
self__.__hash = h__17960__auto____$1;

return h__17960__auto____$1;
}
});

quantum.db.datomic.BackendDatabase.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18135__auto__,other__18136__auto__){
var self__ = this;
var this__18135__auto____$1 = this;
if(cljs.core.truth_((function (){var and__17513__auto__ = other__18136__auto__;
if(cljs.core.truth_(and__17513__auto__)){
var and__17513__auto____$1 = (this__18135__auto____$1.constructor === other__18136__auto__.constructor);
if(and__17513__auto____$1){
return cljs.core.equiv_map.call(null,this__18135__auto____$1,other__18136__auto__);
} else {
return and__17513__auto____$1;
}
} else {
return and__17513__auto__;
}
})())){
return true;
} else {
return false;
}
});

quantum.db.datomic.BackendDatabase.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18148__auto__,k__18149__auto__){
var self__ = this;
var this__18148__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 22, [new cljs.core.Keyword(null,"txr-alias","txr-alias",1209439520),null,new cljs.core.Keyword(null,"txr-dir","txr-dir",604888066),null,new cljs.core.Keyword(null,"instance-name","instance-name",-2046274941),null,new cljs.core.Keyword(null,"txr-props-path","txr-props-path",-1653817146),null,new cljs.core.Keyword(null,"default-partition","default-partition",-2076808985),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"db-name","db-name",1157928745),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"init-schemas?","init-schemas?",-2021402163),null,new cljs.core.Keyword(null,"rest-port","rest-port",-1941871091),null,new cljs.core.Keyword(null,"port","port",1534937262),null,new cljs.core.Keyword(null,"host","host",-1558485167),null,new cljs.core.Keyword(null,"init-partitions?","init-partitions?",-1378170509),null,new cljs.core.Keyword(null,"schemas","schemas",575070579),null,new cljs.core.Keyword(null,"txr-bin-path","txr-bin-path",1991241494),null,new cljs.core.Keyword(null,"start-txr?","start-txr?",-1145996585),null,new cljs.core.Keyword(null,"txr-process","txr-process",106210648),null,new cljs.core.Keyword(null,"uri","uri",-774711847),null,new cljs.core.Keyword(null,"create-if-not-present?","create-if-not-present?",910389370),null,new cljs.core.Keyword(null,"partitions","partitions",602979514),null,new cljs.core.Keyword(null,"table-name","table-name",-2117866341),null,new cljs.core.Keyword(null,"conn","conn",278309663),null], null), null),k__18149__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18148__auto____$1),self__.__meta),k__18149__auto__);
} else {
return (new quantum.db.datomic.BackendDatabase(self__.type,self__.name,self__.db_name,self__.table_name,self__.instance_name,self__.host,self__.port,self__.rest_port,self__.uri,self__.conn,self__.create_if_not_present_QMARK_,self__.start_txr_QMARK_,self__.txr_bin_path,self__.txr_props_path,self__.txr_dir,self__.txr_process,self__.txr_alias,self__.init_partitions_QMARK_,self__.partitions,self__.default_partition,self__.init_schemas_QMARK_,self__.schemas,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18149__auto__)),null));
}
});

quantum.db.datomic.BackendDatabase.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18146__auto__,k__18147__auto__,G__47282){
var self__ = this;
var this__18146__auto____$1 = this;
var pred__47286 = cljs.core.keyword_identical_QMARK_;
var expr__47287 = k__18147__auto__;
if(cljs.core.truth_(pred__47286.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__47287))){
return (new quantum.db.datomic.BackendDatabase(G__47282,self__.name,self__.db_name,self__.table_name,self__.instance_name,self__.host,self__.port,self__.rest_port,self__.uri,self__.conn,self__.create_if_not_present_QMARK_,self__.start_txr_QMARK_,self__.txr_bin_path,self__.txr_props_path,self__.txr_dir,self__.txr_process,self__.txr_alias,self__.init_partitions_QMARK_,self__.partitions,self__.default_partition,self__.init_schemas_QMARK_,self__.schemas,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__47286.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__47287))){
return (new quantum.db.datomic.BackendDatabase(self__.type,G__47282,self__.db_name,self__.table_name,self__.instance_name,self__.host,self__.port,self__.rest_port,self__.uri,self__.conn,self__.create_if_not_present_QMARK_,self__.start_txr_QMARK_,self__.txr_bin_path,self__.txr_props_path,self__.txr_dir,self__.txr_process,self__.txr_alias,self__.init_partitions_QMARK_,self__.partitions,self__.default_partition,self__.init_schemas_QMARK_,self__.schemas,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__47286.call(null,new cljs.core.Keyword(null,"db-name","db-name",1157928745),expr__47287))){
return (new quantum.db.datomic.BackendDatabase(self__.type,self__.name,G__47282,self__.table_name,self__.instance_name,self__.host,self__.port,self__.rest_port,self__.uri,self__.conn,self__.create_if_not_present_QMARK_,self__.start_txr_QMARK_,self__.txr_bin_path,self__.txr_props_path,self__.txr_dir,self__.txr_process,self__.txr_alias,self__.init_partitions_QMARK_,self__.partitions,self__.default_partition,self__.init_schemas_QMARK_,self__.schemas,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__47286.call(null,new cljs.core.Keyword(null,"table-name","table-name",-2117866341),expr__47287))){
return (new quantum.db.datomic.BackendDatabase(self__.type,self__.name,self__.db_name,G__47282,self__.instance_name,self__.host,self__.port,self__.rest_port,self__.uri,self__.conn,self__.create_if_not_present_QMARK_,self__.start_txr_QMARK_,self__.txr_bin_path,self__.txr_props_path,self__.txr_dir,self__.txr_process,self__.txr_alias,self__.init_partitions_QMARK_,self__.partitions,self__.default_partition,self__.init_schemas_QMARK_,self__.schemas,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__47286.call(null,new cljs.core.Keyword(null,"instance-name","instance-name",-2046274941),expr__47287))){
return (new quantum.db.datomic.BackendDatabase(self__.type,self__.name,self__.db_name,self__.table_name,G__47282,self__.host,self__.port,self__.rest_port,self__.uri,self__.conn,self__.create_if_not_present_QMARK_,self__.start_txr_QMARK_,self__.txr_bin_path,self__.txr_props_path,self__.txr_dir,self__.txr_process,self__.txr_alias,self__.init_partitions_QMARK_,self__.partitions,self__.default_partition,self__.init_schemas_QMARK_,self__.schemas,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__47286.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),expr__47287))){
return (new quantum.db.datomic.BackendDatabase(self__.type,self__.name,self__.db_name,self__.table_name,self__.instance_name,G__47282,self__.port,self__.rest_port,self__.uri,self__.conn,self__.create_if_not_present_QMARK_,self__.start_txr_QMARK_,self__.txr_bin_path,self__.txr_props_path,self__.txr_dir,self__.txr_process,self__.txr_alias,self__.init_partitions_QMARK_,self__.partitions,self__.default_partition,self__.init_schemas_QMARK_,self__.schemas,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__47286.call(null,new cljs.core.Keyword(null,"port","port",1534937262),expr__47287))){
return (new quantum.db.datomic.BackendDatabase(self__.type,self__.name,self__.db_name,self__.table_name,self__.instance_name,self__.host,G__47282,self__.rest_port,self__.uri,self__.conn,self__.create_if_not_present_QMARK_,self__.start_txr_QMARK_,self__.txr_bin_path,self__.txr_props_path,self__.txr_dir,self__.txr_process,self__.txr_alias,self__.init_partitions_QMARK_,self__.partitions,self__.default_partition,self__.init_schemas_QMARK_,self__.schemas,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__47286.call(null,new cljs.core.Keyword(null,"rest-port","rest-port",-1941871091),expr__47287))){
return (new quantum.db.datomic.BackendDatabase(self__.type,self__.name,self__.db_name,self__.table_name,self__.instance_name,self__.host,self__.port,G__47282,self__.uri,self__.conn,self__.create_if_not_present_QMARK_,self__.start_txr_QMARK_,self__.txr_bin_path,self__.txr_props_path,self__.txr_dir,self__.txr_process,self__.txr_alias,self__.init_partitions_QMARK_,self__.partitions,self__.default_partition,self__.init_schemas_QMARK_,self__.schemas,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__47286.call(null,new cljs.core.Keyword(null,"uri","uri",-774711847),expr__47287))){
return (new quantum.db.datomic.BackendDatabase(self__.type,self__.name,self__.db_name,self__.table_name,self__.instance_name,self__.host,self__.port,self__.rest_port,G__47282,self__.conn,self__.create_if_not_present_QMARK_,self__.start_txr_QMARK_,self__.txr_bin_path,self__.txr_props_path,self__.txr_dir,self__.txr_process,self__.txr_alias,self__.init_partitions_QMARK_,self__.partitions,self__.default_partition,self__.init_schemas_QMARK_,self__.schemas,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__47286.call(null,new cljs.core.Keyword(null,"conn","conn",278309663),expr__47287))){
return (new quantum.db.datomic.BackendDatabase(self__.type,self__.name,self__.db_name,self__.table_name,self__.instance_name,self__.host,self__.port,self__.rest_port,self__.uri,G__47282,self__.create_if_not_present_QMARK_,self__.start_txr_QMARK_,self__.txr_bin_path,self__.txr_props_path,self__.txr_dir,self__.txr_process,self__.txr_alias,self__.init_partitions_QMARK_,self__.partitions,self__.default_partition,self__.init_schemas_QMARK_,self__.schemas,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__47286.call(null,new cljs.core.Keyword(null,"create-if-not-present?","create-if-not-present?",910389370),expr__47287))){
return (new quantum.db.datomic.BackendDatabase(self__.type,self__.name,self__.db_name,self__.table_name,self__.instance_name,self__.host,self__.port,self__.rest_port,self__.uri,self__.conn,G__47282,self__.start_txr_QMARK_,self__.txr_bin_path,self__.txr_props_path,self__.txr_dir,self__.txr_process,self__.txr_alias,self__.init_partitions_QMARK_,self__.partitions,self__.default_partition,self__.init_schemas_QMARK_,self__.schemas,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__47286.call(null,new cljs.core.Keyword(null,"start-txr?","start-txr?",-1145996585),expr__47287))){
return (new quantum.db.datomic.BackendDatabase(self__.type,self__.name,self__.db_name,self__.table_name,self__.instance_name,self__.host,self__.port,self__.rest_port,self__.uri,self__.conn,self__.create_if_not_present_QMARK_,G__47282,self__.txr_bin_path,self__.txr_props_path,self__.txr_dir,self__.txr_process,self__.txr_alias,self__.init_partitions_QMARK_,self__.partitions,self__.default_partition,self__.init_schemas_QMARK_,self__.schemas,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__47286.call(null,new cljs.core.Keyword(null,"txr-bin-path","txr-bin-path",1991241494),expr__47287))){
return (new quantum.db.datomic.BackendDatabase(self__.type,self__.name,self__.db_name,self__.table_name,self__.instance_name,self__.host,self__.port,self__.rest_port,self__.uri,self__.conn,self__.create_if_not_present_QMARK_,self__.start_txr_QMARK_,G__47282,self__.txr_props_path,self__.txr_dir,self__.txr_process,self__.txr_alias,self__.init_partitions_QMARK_,self__.partitions,self__.default_partition,self__.init_schemas_QMARK_,self__.schemas,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__47286.call(null,new cljs.core.Keyword(null,"txr-props-path","txr-props-path",-1653817146),expr__47287))){
return (new quantum.db.datomic.BackendDatabase(self__.type,self__.name,self__.db_name,self__.table_name,self__.instance_name,self__.host,self__.port,self__.rest_port,self__.uri,self__.conn,self__.create_if_not_present_QMARK_,self__.start_txr_QMARK_,self__.txr_bin_path,G__47282,self__.txr_dir,self__.txr_process,self__.txr_alias,self__.init_partitions_QMARK_,self__.partitions,self__.default_partition,self__.init_schemas_QMARK_,self__.schemas,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__47286.call(null,new cljs.core.Keyword(null,"txr-dir","txr-dir",604888066),expr__47287))){
return (new quantum.db.datomic.BackendDatabase(self__.type,self__.name,self__.db_name,self__.table_name,self__.instance_name,self__.host,self__.port,self__.rest_port,self__.uri,self__.conn,self__.create_if_not_present_QMARK_,self__.start_txr_QMARK_,self__.txr_bin_path,self__.txr_props_path,G__47282,self__.txr_process,self__.txr_alias,self__.init_partitions_QMARK_,self__.partitions,self__.default_partition,self__.init_schemas_QMARK_,self__.schemas,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__47286.call(null,new cljs.core.Keyword(null,"txr-process","txr-process",106210648),expr__47287))){
return (new quantum.db.datomic.BackendDatabase(self__.type,self__.name,self__.db_name,self__.table_name,self__.instance_name,self__.host,self__.port,self__.rest_port,self__.uri,self__.conn,self__.create_if_not_present_QMARK_,self__.start_txr_QMARK_,self__.txr_bin_path,self__.txr_props_path,self__.txr_dir,G__47282,self__.txr_alias,self__.init_partitions_QMARK_,self__.partitions,self__.default_partition,self__.init_schemas_QMARK_,self__.schemas,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__47286.call(null,new cljs.core.Keyword(null,"txr-alias","txr-alias",1209439520),expr__47287))){
return (new quantum.db.datomic.BackendDatabase(self__.type,self__.name,self__.db_name,self__.table_name,self__.instance_name,self__.host,self__.port,self__.rest_port,self__.uri,self__.conn,self__.create_if_not_present_QMARK_,self__.start_txr_QMARK_,self__.txr_bin_path,self__.txr_props_path,self__.txr_dir,self__.txr_process,G__47282,self__.init_partitions_QMARK_,self__.partitions,self__.default_partition,self__.init_schemas_QMARK_,self__.schemas,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__47286.call(null,new cljs.core.Keyword(null,"init-partitions?","init-partitions?",-1378170509),expr__47287))){
return (new quantum.db.datomic.BackendDatabase(self__.type,self__.name,self__.db_name,self__.table_name,self__.instance_name,self__.host,self__.port,self__.rest_port,self__.uri,self__.conn,self__.create_if_not_present_QMARK_,self__.start_txr_QMARK_,self__.txr_bin_path,self__.txr_props_path,self__.txr_dir,self__.txr_process,self__.txr_alias,G__47282,self__.partitions,self__.default_partition,self__.init_schemas_QMARK_,self__.schemas,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__47286.call(null,new cljs.core.Keyword(null,"partitions","partitions",602979514),expr__47287))){
return (new quantum.db.datomic.BackendDatabase(self__.type,self__.name,self__.db_name,self__.table_name,self__.instance_name,self__.host,self__.port,self__.rest_port,self__.uri,self__.conn,self__.create_if_not_present_QMARK_,self__.start_txr_QMARK_,self__.txr_bin_path,self__.txr_props_path,self__.txr_dir,self__.txr_process,self__.txr_alias,self__.init_partitions_QMARK_,G__47282,self__.default_partition,self__.init_schemas_QMARK_,self__.schemas,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__47286.call(null,new cljs.core.Keyword(null,"default-partition","default-partition",-2076808985),expr__47287))){
return (new quantum.db.datomic.BackendDatabase(self__.type,self__.name,self__.db_name,self__.table_name,self__.instance_name,self__.host,self__.port,self__.rest_port,self__.uri,self__.conn,self__.create_if_not_present_QMARK_,self__.start_txr_QMARK_,self__.txr_bin_path,self__.txr_props_path,self__.txr_dir,self__.txr_process,self__.txr_alias,self__.init_partitions_QMARK_,self__.partitions,G__47282,self__.init_schemas_QMARK_,self__.schemas,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__47286.call(null,new cljs.core.Keyword(null,"init-schemas?","init-schemas?",-2021402163),expr__47287))){
return (new quantum.db.datomic.BackendDatabase(self__.type,self__.name,self__.db_name,self__.table_name,self__.instance_name,self__.host,self__.port,self__.rest_port,self__.uri,self__.conn,self__.create_if_not_present_QMARK_,self__.start_txr_QMARK_,self__.txr_bin_path,self__.txr_props_path,self__.txr_dir,self__.txr_process,self__.txr_alias,self__.init_partitions_QMARK_,self__.partitions,self__.default_partition,G__47282,self__.schemas,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__47286.call(null,new cljs.core.Keyword(null,"schemas","schemas",575070579),expr__47287))){
return (new quantum.db.datomic.BackendDatabase(self__.type,self__.name,self__.db_name,self__.table_name,self__.instance_name,self__.host,self__.port,self__.rest_port,self__.uri,self__.conn,self__.create_if_not_present_QMARK_,self__.start_txr_QMARK_,self__.txr_bin_path,self__.txr_props_path,self__.txr_dir,self__.txr_process,self__.txr_alias,self__.init_partitions_QMARK_,self__.partitions,self__.default_partition,self__.init_schemas_QMARK_,G__47282,self__.__meta,self__.__extmap,null));
} else {
return (new quantum.db.datomic.BackendDatabase(self__.type,self__.name,self__.db_name,self__.table_name,self__.instance_name,self__.host,self__.port,self__.rest_port,self__.uri,self__.conn,self__.create_if_not_present_QMARK_,self__.start_txr_QMARK_,self__.txr_bin_path,self__.txr_props_path,self__.txr_dir,self__.txr_process,self__.txr_alias,self__.init_partitions_QMARK_,self__.partitions,self__.default_partition,self__.init_schemas_QMARK_,self__.schemas,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18147__auto__,G__47282),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});

quantum.db.datomic.BackendDatabase.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18151__auto__){
var self__ = this;
var this__18151__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-name","db-name",1157928745),self__.db_name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"table-name","table-name",-2117866341),self__.table_name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-name","instance-name",-2046274941),self__.instance_name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"host","host",-1558485167),self__.host],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"port","port",1534937262),self__.port],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rest-port","rest-port",-1941871091),self__.rest_port],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"uri","uri",-774711847),self__.uri],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"conn","conn",278309663),self__.conn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"create-if-not-present?","create-if-not-present?",910389370),self__.create_if_not_present_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-txr?","start-txr?",-1145996585),self__.start_txr_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txr-bin-path","txr-bin-path",1991241494),self__.txr_bin_path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txr-props-path","txr-props-path",-1653817146),self__.txr_props_path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txr-dir","txr-dir",604888066),self__.txr_dir],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txr-process","txr-process",106210648),self__.txr_process],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"txr-alias","txr-alias",1209439520),self__.txr_alias],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"init-partitions?","init-partitions?",-1378170509),self__.init_partitions_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"partitions","partitions",602979514),self__.partitions],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"default-partition","default-partition",-2076808985),self__.default_partition],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"init-schemas?","init-schemas?",-2021402163),self__.init_schemas_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});

quantum.db.datomic.BackendDatabase.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18138__auto__,G__47282){
var self__ = this;
var this__18138__auto____$1 = this;
return (new quantum.db.datomic.BackendDatabase(self__.type,self__.name,self__.db_name,self__.table_name,self__.instance_name,self__.host,self__.port,self__.rest_port,self__.uri,self__.conn,self__.create_if_not_present_QMARK_,self__.start_txr_QMARK_,self__.txr_bin_path,self__.txr_props_path,self__.txr_dir,self__.txr_process,self__.txr_alias,self__.init_partitions_QMARK_,self__.partitions,self__.default_partition,self__.init_schemas_QMARK_,self__.schemas,G__47282,self__.__extmap,self__.__hash));
});

quantum.db.datomic.BackendDatabase.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18144__auto__,entry__18145__auto__){
var self__ = this;
var this__18144__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18145__auto__)){
return cljs.core._assoc.call(null,this__18144__auto____$1,cljs.core._nth.call(null,entry__18145__auto__,(0)),cljs.core._nth.call(null,entry__18145__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18144__auto____$1,entry__18145__auto__);
}
});

quantum.db.datomic.BackendDatabase.prototype.com$stuartsierra$component$Lifecycle$ = true;

quantum.db.datomic.BackendDatabase.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var uri_f = (function (){var pred__47289 = cljs.core._EQ_;
var expr__47290 = self__.type;
if(cljs.core.truth_(pred__47289.call(null,new cljs.core.Keyword(null,"free","free",801364328),expr__47290))){
return [cljs.core.str("datomic:"),cljs.core.str(cljs.core.name.call(null,self__.type)),cljs.core.str("://"),cljs.core.str(self__.host),cljs.core.str(":"),cljs.core.str(self__.port),cljs.core.str("/"),cljs.core.str(self__.name)].join('');
} else {
if(cljs.core.truth_(pred__47289.call(null,new cljs.core.Keyword(null,"mem","mem",-1804286459),expr__47290))){
return [cljs.core.str("datomic:"),cljs.core.str(cljs.core.name.call(null,self__.type)),cljs.core.str("://"),cljs.core.str(self__.name)].join('');
} else {
if(cljs.core.truth_(pred__47289.call(null,new cljs.core.Keyword(null,"http","http",382524695),expr__47290))){
return [cljs.core.str("http://"),cljs.core.str(self__.host),cljs.core.str(":"),cljs.core.str(self__.rest_port),cljs.core.str("/"),cljs.core.str(self__.txr_alias),cljs.core.str("/"),cljs.core.str(self__.name)].join('');
} else {
if(cljs.core.truth_(pred__47289.call(null,new cljs.core.Keyword(null,"dynamo","dynamo",-1383622723),expr__47290))){
return null;
} else {
throw quantum.core.error.__GT_ex.call(null,new cljs.core.Keyword(null,"illegal-argument","illegal-argument",-1845493170),"Database type not supported",self__.type);
}
}
}
}
})();
var txr_process_f = (cljs.core.truth_(self__.start_txr_QMARK_)?null:null);
var connect = ((function (uri_f,txr_process_f,this$__$1){
return (function (){
quantum.core.log.pr_STAR_.call(null,true,false,cljs.core.println,new cljs.core.Keyword(null,"debug","debug",-1608172596),(new cljs.core.Delay(((function (uri_f,txr_process_f,this$__$1){
return (function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,uri_f),"Trying to connect with");
});})(uri_f,txr_process_f,this$__$1))
,null)),null);

var conn_f = datomic_cljs.api.connect.call(null,self__.host,self__.rest_port,self__.txr_alias,self__.name);
quantum.core.log.pr_STAR_.call(null,true,false,cljs.core.println,new cljs.core.Keyword(null,"debug","debug",-1608172596),(new cljs.core.Delay(((function (conn_f,uri_f,txr_process_f,this$__$1){
return (function (){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"Connection successful.");
});})(conn_f,uri_f,txr_process_f,this$__$1))
,null)),null);

return conn_f;
});})(uri_f,txr_process_f,this$__$1))
;
var conn_f = (function (){try{var max_n__24967__auto__ = (5);
var sleep_millis__24968__auto__ = (1000);
var n__24969__auto__ = (0);
var error_n__24970__auto__ = null;
while(true){
if((n__24969__auto__ > max_n__24967__auto__)){
throw quantum.core.error.__GT_ex.call(null,new cljs.core.Keyword(null,"max-tries-exceeded","max-tries-exceeded",917262637),null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tries","tries",425666016),n__24969__auto__,new cljs.core.Keyword(null,"last-error","last-error",1848699973),error_n__24970__auto__], null));
} else {
var vec__47293 = (function (){try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(function (){try{return connect.call(null);
}catch (e47295){if((e47295 instanceof Error)){
var e = e47295;
quantum.core.log.pr_STAR_.call(null,true,false,cljs.core.println,new cljs.core.Keyword(null,"warn","warn",-436710552),(new cljs.core.Delay(((function (n__24969__auto__,error_n__24970__auto__,e,max_n__24967__auto__,sleep_millis__24968__auto__,uri_f,txr_process_f,connect,this$__$1){
return (function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,e),"RuntimeException while trying to connect:");
});})(n__24969__auto__,error_n__24970__auto__,e,max_n__24967__auto__,sleep_millis__24968__auto__,uri_f,txr_process_f,connect,this$__$1))
,null)),null);

if(cljs.core.truth_((function (){var and__17513__auto__ = "TODO";
if(cljs.core.truth_(and__17513__auto__)){
return self__.create_if_not_present_QMARK_;
} else {
return and__17513__auto__;
}
})())){
quantum.core.log.pr_STAR_.call(null,true,false,cljs.core.println,new cljs.core.Keyword(null,"warn","warn",-436710552),(new cljs.core.Delay(((function (n__24969__auto__,error_n__24970__auto__,e,max_n__24967__auto__,sleep_millis__24968__auto__,uri_f,txr_process_f,connect,this$__$1){
return (function (){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"Creating database...");
});})(n__24969__auto__,error_n__24970__auto__,e,max_n__24967__auto__,sleep_millis__24968__auto__,uri_f,txr_process_f,connect,this$__$1))
,null)),null);

var c__19849__auto___47321 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (n__24969__auto__,error_n__24970__auto__,c__19849__auto___47321,e,max_n__24967__auto__,sleep_millis__24968__auto__,uri_f,txr_process_f,connect,this$__$1){
return (function (){
var f__19850__auto__ = (function (){var switch__19828__auto__ = ((function (n__24969__auto__,error_n__24970__auto__,c__19849__auto___47321,e,max_n__24967__auto__,sleep_millis__24968__auto__,uri_f,txr_process_f,connect,this$__$1){
return (function (state_47306){
var state_val_47307 = (state_47306[(1)]);
if((state_val_47307 === (1))){
var inst_47296 = datomic_cljs.api.create_database.call(null,self__.host,self__.rest_port,self__.txr_alias,self__.name);
var state_47306__$1 = state_47306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47306__$1,(2),inst_47296);
} else {
if((state_val_47307 === (2))){
var inst_47298 = (state_47306[(7)]);
var inst_47298__$1 = (state_47306[(2)]);
var inst_47299 = (inst_47298__$1 instanceof Error);
var state_47306__$1 = (function (){var statearr_47308 = state_47306;
(statearr_47308[(7)] = inst_47298__$1);

return statearr_47308;
})();
if(cljs.core.truth_(inst_47299)){
var statearr_47309_47322 = state_47306__$1;
(statearr_47309_47322[(1)] = (3));

} else {
var statearr_47310_47323 = state_47306__$1;
(statearr_47310_47323[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47307 === (3))){
var inst_47298 = (state_47306[(7)]);
var inst_47301 = (function(){throw inst_47298})();
var state_47306__$1 = state_47306;
var statearr_47311_47324 = state_47306__$1;
(statearr_47311_47324[(2)] = inst_47301);

(statearr_47311_47324[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47307 === (4))){
var inst_47298 = (state_47306[(7)]);
var state_47306__$1 = state_47306;
var statearr_47312_47325 = state_47306__$1;
(statearr_47312_47325[(2)] = inst_47298);

(statearr_47312_47325[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47307 === (5))){
var inst_47304 = (state_47306[(2)]);
var state_47306__$1 = state_47306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47306__$1,inst_47304);
} else {
return null;
}
}
}
}
}
});})(n__24969__auto__,error_n__24970__auto__,c__19849__auto___47321,e,max_n__24967__auto__,sleep_millis__24968__auto__,uri_f,txr_process_f,connect,this$__$1))
;
return ((function (n__24969__auto__,error_n__24970__auto__,switch__19828__auto__,c__19849__auto___47321,e,max_n__24967__auto__,sleep_millis__24968__auto__,uri_f,txr_process_f,connect,this$__$1){
return (function() {
var quantum$db$datomic$state_machine__19829__auto__ = null;
var quantum$db$datomic$state_machine__19829__auto____0 = (function (){
var statearr_47316 = [null,null,null,null,null,null,null,null];
(statearr_47316[(0)] = quantum$db$datomic$state_machine__19829__auto__);

(statearr_47316[(1)] = (1));

return statearr_47316;
});
var quantum$db$datomic$state_machine__19829__auto____1 = (function (state_47306){
while(true){
var ret_value__19830__auto__ = (function (){try{while(true){
var result__19831__auto__ = switch__19828__auto__.call(null,state_47306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19831__auto__;
}
break;
}
}catch (e47317){if((e47317 instanceof Object)){
var ex__19832__auto__ = e47317;
var statearr_47318_47326 = state_47306;
(statearr_47318_47326[(5)] = ex__19832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47327 = state_47306;
state_47306 = G__47327;
continue;
} else {
return ret_value__19830__auto__;
}
break;
}
});
quantum$db$datomic$state_machine__19829__auto__ = function(state_47306){
switch(arguments.length){
case 0:
return quantum$db$datomic$state_machine__19829__auto____0.call(this);
case 1:
return quantum$db$datomic$state_machine__19829__auto____1.call(this,state_47306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
quantum$db$datomic$state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$0 = quantum$db$datomic$state_machine__19829__auto____0;
quantum$db$datomic$state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$1 = quantum$db$datomic$state_machine__19829__auto____1;
return quantum$db$datomic$state_machine__19829__auto__;
})()
;})(n__24969__auto__,error_n__24970__auto__,switch__19828__auto__,c__19849__auto___47321,e,max_n__24967__auto__,sleep_millis__24968__auto__,uri_f,txr_process_f,connect,this$__$1))
})();
var state__19851__auto__ = (function (){var statearr_47319 = f__19850__auto__.call(null);
(statearr_47319[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19849__auto___47321);

return statearr_47319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19851__auto__);
});})(n__24969__auto__,error_n__24970__auto__,c__19849__auto___47321,e,max_n__24967__auto__,sleep_millis__24968__auto__,uri_f,txr_process_f,connect,this$__$1))
);

} else {
}

throw e;
} else {
if((e47295 instanceof Error)){
var e = e47295;
quantum.core.log.pr_STAR_.call(null,true,false,cljs.core.println,new cljs.core.Keyword(null,"warn","warn",-436710552),(new cljs.core.Delay(((function (n__24969__auto__,error_n__24970__auto__,e,max_n__24967__auto__,sleep_millis__24968__auto__,uri_f,txr_process_f,connect,this$__$1){
return (function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,e),"Error while trying to connect:");
});})(n__24969__auto__,error_n__24970__auto__,e,max_n__24967__auto__,sleep_millis__24968__auto__,uri_f,txr_process_f,connect,this$__$1))
,null)),null);

throw e;
} else {
throw e47295;

}
}
}})()], null);
}catch (e47294){if((e47294 instanceof Error)){
var e__24973__auto__ = e47294;
quantum.core.thread.async._LT__BANG_.call(null,quantum.core.thread.async.timeout.call(null,sleep_millis__24968__auto__));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__24973__auto__,null], null);
} else {
throw e47294;

}
}})();
var error__24971__auto__ = cljs.core.nth.call(null,vec__47293,(0),null);
var result__24972__auto__ = cljs.core.nth.call(null,vec__47293,(1),null);
if(cljs.core.truth_(error__24971__auto__)){
var G__47328 = (n__24969__auto__ + (1));
var G__47329 = error__24971__auto__;
n__24969__auto__ = G__47328;
error_n__24970__auto__ = G__47329;
continue;
} else {
return result__24972__auto__;
}
}
break;
}
}catch (e47292){if((e47292 instanceof Error)){
var e = e47292;
quantum.core.log.pr_STAR_.call(null,true,false,cljs.core.println,new cljs.core.Keyword(null,"warn","warn",-436710552),(new cljs.core.Delay(((function (e,uri_f,txr_process_f,connect,this$__$1){
return (function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,e),"Failed to connect:");
});})(e,uri_f,txr_process_f,connect,this$__$1))
,null)),null);

throw e;
} else {
throw e47292;

}
}})();
var _ = cljs.core.reset_BANG_.call(null,self__.conn,conn_f);
var ___$1 = (cljs.core.truth_(self__.init_schemas_QMARK_)?(function (){
if(cljs.core.truth_(quantum.core.logic.nempty_QMARK_.call(null,self__.schemas))){
} else {
throw quantum.core.error.__GT_ex.call(null,new cljs.core.Keyword(null,"assertion-error","assertion-error",1846873368),"Assertion not satisfied: (nempty? schemas)",cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.keyword,cljs.core.list(new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null))),cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.schemas)));
}

quantum.core.log.pr_STAR_.call(null,true,false,cljs.core.println,new cljs.core.Keyword(null,"debug","debug",-1608172596),(new cljs.core.Delay(((function (uri_f,txr_process_f,connect,conn_f,_,this$__$1){
return (function (){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"Initializing database with schemas...");
});})(uri_f,txr_process_f,connect,conn_f,_,this$__$1))
,null)),null);

quantum.db.datomic.core.transact_BANG_.call(null,conn_f,quantum.db.datomic.core.__GT_partition.call(null,new cljs.core.Keyword("db.part","test","db.part/test",375536096)));

quantum.db.datomic.core.add_schemas_BANG_.call(null,conn_f,quantum.db.datomic.core.block__GT_schemas.call(null,self__.schemas));

return quantum.core.log.pr_STAR_.call(null,true,false,cljs.core.println,new cljs.core.Keyword(null,"debug","debug",-1608172596),(new cljs.core.Delay(((function (uri_f,txr_process_f,connect,conn_f,_,this$__$1){
return (function (){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"Schema initialization complete.");
});})(uri_f,txr_process_f,connect,conn_f,_,this$__$1))
,null)),null);
})()
:null);
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"uri","uri",-774711847),uri_f,new cljs.core.Keyword(null,"txr-process","txr-process",106210648),txr_process_f);
});

quantum.db.datomic.BackendDatabase.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
cljs.core.reset_BANG_.call(null,self__.conn,null);

return this$__$1;
});

quantum.db.datomic.BackendDatabase.getBasis = (function (){
return new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"db-name","db-name",-1496507024,null),new cljs.core.Symbol(null,"table-name","table-name",-477334814,null),new cljs.core.Symbol(null,"instance-name","instance-name",-405743414,null),new cljs.core.Symbol(null,"host","host",82046360,null),new cljs.core.Symbol(null,"port","port",-1119498507,null),new cljs.core.Symbol(null,"rest-port","rest-port",-301339564,null),new cljs.core.Symbol(null,"uri","uri",865819680,null),new cljs.core.Symbol(null,"conn","conn",1918841190,null),new cljs.core.Symbol(null,"create-if-not-present?","create-if-not-present?",-1744046399,null),new cljs.core.Symbol(null,"start-txr?","start-txr?",494534942,null),new cljs.core.Symbol(null,"txr-bin-path","txr-bin-path",-663194275,null),new cljs.core.Symbol(null,"txr-props-path","txr-props-path",-13285619,null),new cljs.core.Symbol(null,"txr-dir","txr-dir",-2049547703,null),new cljs.core.Symbol(null,"txr-process","txr-process",1746742175,null),new cljs.core.Symbol(null,"txr-alias","txr-alias",-1444996249,null),new cljs.core.Symbol(null,"init-partitions?","init-partitions?",262361018,null),new cljs.core.Symbol(null,"partitions","partitions",-2051456255,null),new cljs.core.Symbol(null,"default-partition","default-partition",-436277458,null),new cljs.core.Symbol(null,"init-schemas?","init-schemas?",-380870636,null),new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null)], null);
});

quantum.db.datomic.BackendDatabase.cljs$lang$type = true;

quantum.db.datomic.BackendDatabase.cljs$lang$ctorPrSeq = (function (this__18173__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"quantum.db.datomic/BackendDatabase");
});

quantum.db.datomic.BackendDatabase.cljs$lang$ctorPrWriter = (function (this__18173__auto__,writer__18174__auto__){
return cljs.core._write.call(null,writer__18174__auto__,"quantum.db.datomic/BackendDatabase");
});

/**
 * Datomic database.
 * 
 *        @start-txr? is a boolean which defines whether the transactor should be started.
 *        @partitions is a seq (preferably set) of keywords identifying partitions
 */
quantum.db.datomic.__GT_BackendDatabase = (function quantum$db$datomic$__GT_BackendDatabase(type,name,db_name,table_name,instance_name,host,port,rest_port,uri,conn,create_if_not_present_QMARK_,start_txr_QMARK_,txr_bin_path,txr_props_path,txr_dir,txr_process,txr_alias,init_partitions_QMARK_,partitions,default_partition,init_schemas_QMARK_,schemas){
return (new quantum.db.datomic.BackendDatabase(type,name,db_name,table_name,instance_name,host,port,rest_port,uri,conn,create_if_not_present_QMARK_,start_txr_QMARK_,txr_bin_path,txr_props_path,txr_dir,txr_process,txr_alias,init_partitions_QMARK_,partitions,default_partition,init_schemas_QMARK_,schemas,null,null,null));
});

/**
 * Datomic database.
 * 
 *        @start-txr? is a boolean which defines whether the transactor should be started.
 *        @partitions is a seq (preferably set) of keywords identifying partitions
 */
quantum.db.datomic.map__GT_BackendDatabase = (function quantum$db$datomic$map__GT_BackendDatabase(G__47284){
return (new quantum.db.datomic.BackendDatabase(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__47284),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__47284),new cljs.core.Keyword(null,"db-name","db-name",1157928745).cljs$core$IFn$_invoke$arity$1(G__47284),new cljs.core.Keyword(null,"table-name","table-name",-2117866341).cljs$core$IFn$_invoke$arity$1(G__47284),new cljs.core.Keyword(null,"instance-name","instance-name",-2046274941).cljs$core$IFn$_invoke$arity$1(G__47284),new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(G__47284),new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(G__47284),new cljs.core.Keyword(null,"rest-port","rest-port",-1941871091).cljs$core$IFn$_invoke$arity$1(G__47284),new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(G__47284),new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(G__47284),new cljs.core.Keyword(null,"create-if-not-present?","create-if-not-present?",910389370).cljs$core$IFn$_invoke$arity$1(G__47284),new cljs.core.Keyword(null,"start-txr?","start-txr?",-1145996585).cljs$core$IFn$_invoke$arity$1(G__47284),new cljs.core.Keyword(null,"txr-bin-path","txr-bin-path",1991241494).cljs$core$IFn$_invoke$arity$1(G__47284),new cljs.core.Keyword(null,"txr-props-path","txr-props-path",-1653817146).cljs$core$IFn$_invoke$arity$1(G__47284),new cljs.core.Keyword(null,"txr-dir","txr-dir",604888066).cljs$core$IFn$_invoke$arity$1(G__47284),new cljs.core.Keyword(null,"txr-process","txr-process",106210648).cljs$core$IFn$_invoke$arity$1(G__47284),new cljs.core.Keyword(null,"txr-alias","txr-alias",1209439520).cljs$core$IFn$_invoke$arity$1(G__47284),new cljs.core.Keyword(null,"init-partitions?","init-partitions?",-1378170509).cljs$core$IFn$_invoke$arity$1(G__47284),new cljs.core.Keyword(null,"partitions","partitions",602979514).cljs$core$IFn$_invoke$arity$1(G__47284),new cljs.core.Keyword(null,"default-partition","default-partition",-2076808985).cljs$core$IFn$_invoke$arity$1(G__47284),new cljs.core.Keyword(null,"init-schemas?","init-schemas?",-2021402163).cljs$core$IFn$_invoke$arity$1(G__47284),new cljs.core.Keyword(null,"schemas","schemas",575070579).cljs$core$IFn$_invoke$arity$1(G__47284),null,cljs.core.dissoc.call(null,G__47284,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"db-name","db-name",1157928745),new cljs.core.Keyword(null,"table-name","table-name",-2117866341),new cljs.core.Keyword(null,"instance-name","instance-name",-2046274941),new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"port","port",1534937262),new cljs.core.Keyword(null,"rest-port","rest-port",-1941871091),new cljs.core.Keyword(null,"uri","uri",-774711847),new cljs.core.Keyword(null,"conn","conn",278309663),new cljs.core.Keyword(null,"create-if-not-present?","create-if-not-present?",910389370),new cljs.core.Keyword(null,"start-txr?","start-txr?",-1145996585),new cljs.core.Keyword(null,"txr-bin-path","txr-bin-path",1991241494),new cljs.core.Keyword(null,"txr-props-path","txr-props-path",-1653817146),new cljs.core.Keyword(null,"txr-dir","txr-dir",604888066),new cljs.core.Keyword(null,"txr-process","txr-process",106210648),new cljs.core.Keyword(null,"txr-alias","txr-alias",1209439520),new cljs.core.Keyword(null,"init-partitions?","init-partitions?",-1378170509),new cljs.core.Keyword(null,"partitions","partitions",602979514),new cljs.core.Keyword(null,"default-partition","default-partition",-2076808985),new cljs.core.Keyword(null,"init-schemas?","init-schemas?",-2021402163),new cljs.core.Keyword(null,"schemas","schemas",575070579)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {com.stuartsierra.component.Lifecycle}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
quantum.db.datomic.Database = (function (ephemeral,reconciler,backend,__meta,__extmap,__hash){
this.ephemeral = ephemeral;
this.reconciler = reconciler;
this.backend = backend;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
quantum.db.datomic.Database.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18139__auto__,k__18140__auto__){
var self__ = this;
var this__18139__auto____$1 = this;
return cljs.core._lookup.call(null,this__18139__auto____$1,k__18140__auto__,null);
});

quantum.db.datomic.Database.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18141__auto__,k47331,else__18142__auto__){
var self__ = this;
var this__18141__auto____$1 = this;
var G__47333 = (((k47331 instanceof cljs.core.Keyword))?k47331.fqn:null);
switch (G__47333) {
case "ephemeral":
return self__.ephemeral;

break;
case "reconciler":
return self__.reconciler;

break;
case "backend":
return self__.backend;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k47331,else__18142__auto__);

}
});

quantum.db.datomic.Database.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18153__auto__,writer__18154__auto__,opts__18155__auto__){
var self__ = this;
var this__18153__auto____$1 = this;
var pr_pair__18156__auto__ = ((function (this__18153__auto____$1){
return (function (keyval__18157__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,cljs.core.pr_writer,""," ","",opts__18155__auto__,keyval__18157__auto__);
});})(this__18153__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,pr_pair__18156__auto__,"#quantum.db.datomic.Database{",", ","}",opts__18155__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ephemeral","ephemeral",1438878628),self__.ephemeral],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backend","backend",-847489124),self__.backend],null))], null),self__.__extmap));
});

quantum.db.datomic.Database.prototype.cljs$core$IIterable$ = true;

quantum.db.datomic.Database.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47330){
var self__ = this;
var G__47330__$1 = this;
return (new cljs.core.RecordIter((0),G__47330__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ephemeral","ephemeral",1438878628),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"backend","backend",-847489124)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

quantum.db.datomic.Database.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18137__auto__){
var self__ = this;
var this__18137__auto____$1 = this;
return self__.__meta;
});

quantum.db.datomic.Database.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18133__auto__){
var self__ = this;
var this__18133__auto____$1 = this;
return (new quantum.db.datomic.Database(self__.ephemeral,self__.reconciler,self__.backend,self__.__meta,self__.__extmap,self__.__hash));
});

quantum.db.datomic.Database.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18143__auto__){
var self__ = this;
var this__18143__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

quantum.db.datomic.Database.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18134__auto__){
var self__ = this;
var this__18134__auto____$1 = this;
var h__17960__auto__ = self__.__hash;
if(!((h__17960__auto__ == null))){
return h__17960__auto__;
} else {
var h__17960__auto____$1 = cljs.core.hash_imap.call(null,this__18134__auto____$1);
self__.__hash = h__17960__auto____$1;

return h__17960__auto____$1;
}
});

quantum.db.datomic.Database.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18135__auto__,other__18136__auto__){
var self__ = this;
var this__18135__auto____$1 = this;
if(cljs.core.truth_((function (){var and__17513__auto__ = other__18136__auto__;
if(cljs.core.truth_(and__17513__auto__)){
var and__17513__auto____$1 = (this__18135__auto____$1.constructor === other__18136__auto__.constructor);
if(and__17513__auto____$1){
return cljs.core.equiv_map.call(null,this__18135__auto____$1,other__18136__auto__);
} else {
return and__17513__auto____$1;
}
} else {
return and__17513__auto__;
}
})())){
return true;
} else {
return false;
}
});

quantum.db.datomic.Database.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18148__auto__,k__18149__auto__){
var self__ = this;
var this__18148__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ephemeral","ephemeral",1438878628),null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),null,new cljs.core.Keyword(null,"backend","backend",-847489124),null], null), null),k__18149__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18148__auto____$1),self__.__meta),k__18149__auto__);
} else {
return (new quantum.db.datomic.Database(self__.ephemeral,self__.reconciler,self__.backend,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18149__auto__)),null));
}
});

quantum.db.datomic.Database.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18146__auto__,k__18147__auto__,G__47330){
var self__ = this;
var this__18146__auto____$1 = this;
var pred__47334 = cljs.core.keyword_identical_QMARK_;
var expr__47335 = k__18147__auto__;
if(cljs.core.truth_(pred__47334.call(null,new cljs.core.Keyword(null,"ephemeral","ephemeral",1438878628),expr__47335))){
return (new quantum.db.datomic.Database(G__47330,self__.reconciler,self__.backend,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__47334.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),expr__47335))){
return (new quantum.db.datomic.Database(self__.ephemeral,G__47330,self__.backend,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__47334.call(null,new cljs.core.Keyword(null,"backend","backend",-847489124),expr__47335))){
return (new quantum.db.datomic.Database(self__.ephemeral,self__.reconciler,G__47330,self__.__meta,self__.__extmap,null));
} else {
return (new quantum.db.datomic.Database(self__.ephemeral,self__.reconciler,self__.backend,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18147__auto__,G__47330),null));
}
}
}
});

quantum.db.datomic.Database.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18151__auto__){
var self__ = this;
var this__18151__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ephemeral","ephemeral",1438878628),self__.ephemeral],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backend","backend",-847489124),self__.backend],null))], null),self__.__extmap));
});

quantum.db.datomic.Database.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18138__auto__,G__47330){
var self__ = this;
var this__18138__auto____$1 = this;
return (new quantum.db.datomic.Database(self__.ephemeral,self__.reconciler,self__.backend,G__47330,self__.__extmap,self__.__hash));
});

quantum.db.datomic.Database.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18144__auto__,entry__18145__auto__){
var self__ = this;
var this__18144__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18145__auto__)){
return cljs.core._assoc.call(null,this__18144__auto____$1,cljs.core._nth.call(null,entry__18145__auto__,(0)),cljs.core._nth.call(null,entry__18145__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18144__auto____$1,entry__18145__auto__);
}
});

quantum.db.datomic.Database.prototype.com$stuartsierra$component$Lifecycle$ = true;

quantum.db.datomic.Database.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var ephemeral_f = (cljs.core.truth_(self__.ephemeral)?com.stuartsierra.component.start.call(null,self__.ephemeral):null);
var backend_f = (cljs.core.truth_(self__.backend)?com.stuartsierra.component.start.call(null,self__.backend):null);
var reconciler_f = (cljs.core.truth_(self__.reconciler)?com.stuartsierra.component.start.call(null,self__.reconciler):null);
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"ephemeral","ephemeral",1438878628),ephemeral_f,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),reconciler_f,new cljs.core.Keyword(null,"backend","backend",-847489124),backend_f);
});

quantum.db.datomic.Database.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var reconciler_f = (cljs.core.truth_(self__.reconciler)?com.stuartsierra.component.stop.call(null,self__.reconciler):null);
var ephemeral_f = (cljs.core.truth_(self__.ephemeral)?com.stuartsierra.component.stop.call(null,self__.ephemeral):null);
var backend_f = (cljs.core.truth_(self__.backend)?com.stuartsierra.component.stop.call(null,self__.backend):null);
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"ephemeral","ephemeral",1438878628),ephemeral_f,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),reconciler_f,new cljs.core.Keyword(null,"backend","backend",-847489124),backend_f);
});

quantum.db.datomic.Database.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ephemeral","ephemeral",-1215557141,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null),new cljs.core.Symbol(null,"backend","backend",793042403,null)], null);
});

quantum.db.datomic.Database.cljs$lang$type = true;

quantum.db.datomic.Database.cljs$lang$ctorPrSeq = (function (this__18173__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"quantum.db.datomic/Database");
});

quantum.db.datomic.Database.cljs$lang$ctorPrWriter = (function (this__18173__auto__,writer__18174__auto__){
return cljs.core._write.call(null,writer__18174__auto__,"quantum.db.datomic/Database");
});

/**
 * Database-system consisting of an EphemeralDatabase (e.g. DataScript),
 *        BackendDatabase (e.g. Datomic), and a reconciler which constantly
 *        pushes diffs from the EphemeralDatabase to the BackendDatabase
 *        and pulls new data from the BackendDatabase.
 * 
 *        A Datomic subscription model would be really nice for performance
 *        (ostensibly) to avoid the constant backend polling of the reconciler,
 *        but unfortunately Datomic does not have this.
 * 
 *        @backend
 *          Can be one of three things:
 *            1) A direct connection to a Datomic database using the Datomic Peer API
 *               - This option is for Clojure (e.g. server) only, not ClojureScript
 *            2) A direct connection to a Datomic database using the Datomic HTTP API
 *               - This option is currently not proven to be secure and is awaiting
 *                 further developments by the Cognitect team.
 *            3) A REST endpoint pair:
 *               - One for pushing, e.g. 'POST /db'
 *               - One for pulling, e.g. 'GET  /db'
 *               - This way the Datomic database is not directly exposed to the client,
 *                 but rather the server is able to use access control and other
 *                 security measures when handling queries from the client.
 *                 This is the (currently) recommended option.
 *        @reconciler
 *          is
 */
quantum.db.datomic.__GT_Database = (function quantum$db$datomic$__GT_Database(ephemeral,reconciler,backend){
return (new quantum.db.datomic.Database(ephemeral,reconciler,backend,null,null,null));
});

/**
 * Database-system consisting of an EphemeralDatabase (e.g. DataScript),
 *        BackendDatabase (e.g. Datomic), and a reconciler which constantly
 *        pushes diffs from the EphemeralDatabase to the BackendDatabase
 *        and pulls new data from the BackendDatabase.
 * 
 *        A Datomic subscription model would be really nice for performance
 *        (ostensibly) to avoid the constant backend polling of the reconciler,
 *        but unfortunately Datomic does not have this.
 * 
 *        @backend
 *          Can be one of three things:
 *            1) A direct connection to a Datomic database using the Datomic Peer API
 *               - This option is for Clojure (e.g. server) only, not ClojureScript
 *            2) A direct connection to a Datomic database using the Datomic HTTP API
 *               - This option is currently not proven to be secure and is awaiting
 *                 further developments by the Cognitect team.
 *            3) A REST endpoint pair:
 *               - One for pushing, e.g. 'POST /db'
 *               - One for pulling, e.g. 'GET  /db'
 *               - This way the Datomic database is not directly exposed to the client,
 *                 but rather the server is able to use access control and other
 *                 security measures when handling queries from the client.
 *                 This is the (currently) recommended option.
 *        @reconciler
 *          is
 */
quantum.db.datomic.map__GT_Database = (function quantum$db$datomic$map__GT_Database(G__47332){
return (new quantum.db.datomic.Database(new cljs.core.Keyword(null,"ephemeral","ephemeral",1438878628).cljs$core$IFn$_invoke$arity$1(G__47332),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__47332),new cljs.core.Keyword(null,"backend","backend",-847489124).cljs$core$IFn$_invoke$arity$1(G__47332),null,cljs.core.dissoc.call(null,G__47332,new cljs.core.Keyword(null,"ephemeral","ephemeral",1438878628),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"backend","backend",-847489124)),null));
});

/**
 * Constructor for |Database|.
 */
quantum.db.datomic.__GT_db = (function quantum$db$datomic$__GT_db(p__47338){
var map__47353 = p__47338;
var map__47353__$1 = ((((!((map__47353 == null)))?((((map__47353.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47353.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47353):map__47353);
var config = map__47353__$1;
var map__47354 = cljs.core.get.call(null,map__47353__$1,new cljs.core.Keyword(null,"backend","backend",-847489124));
var map__47354__$1 = ((((!((map__47354 == null)))?((((map__47354.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47354.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47354):map__47354);
var backend = map__47354__$1;
var type = cljs.core.get.call(null,map__47354__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__47354__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var host = cljs.core.get.call(null,map__47354__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var port = cljs.core.get.call(null,map__47354__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var rest_port = cljs.core.get.call(null,map__47354__$1,new cljs.core.Keyword(null,"rest-port","rest-port",-1941871091));
var txr_alias = cljs.core.get.call(null,map__47354__$1,new cljs.core.Keyword(null,"txr-alias","txr-alias",1209439520));
var create_if_not_present_QMARK_ = cljs.core.get.call(null,map__47354__$1,new cljs.core.Keyword(null,"create-if-not-present?","create-if-not-present?",910389370));
var map__47355 = cljs.core.get.call(null,map__47353__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var map__47355__$1 = ((((!((map__47355 == null)))?((((map__47355.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47355.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47355):map__47355);
var reconciler = map__47355__$1;
var map__47356 = cljs.core.get.call(null,map__47353__$1,new cljs.core.Keyword(null,"ephemeral","ephemeral",1438878628));
var map__47356__$1 = ((((!((map__47356 == null)))?((((map__47356.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47356.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47356):map__47356);
var ephemeral = map__47356__$1;
var history_limit = cljs.core.get.call(null,map__47356__$1,new cljs.core.Keyword(null,"history-limit","history-limit",-1938739786));
quantum.core.log.pr_STAR_.call(null,true,false,cljs.core.println,new cljs.core.Keyword(null,"user","user",1532431356),(new cljs.core.Delay(((function (map__47353,map__47353__$1,config,map__47354,map__47354__$1,backend,type,name,host,port,rest_port,txr_alias,create_if_not_present_QMARK_,map__47355,map__47355__$1,reconciler,map__47356,map__47356__$1,ephemeral,history_limit){
return (function (){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.keyword,cljs.core.list(new cljs.core.Symbol(null,"config","config",-1659574354,null))),cljs.core._conj.call(null,cljs.core.List.EMPTY,config)));
});})(map__47353,map__47353__$1,config,map__47354,map__47354__$1,backend,type,name,host,port,rest_port,txr_alias,create_if_not_present_QMARK_,map__47355,map__47355__$1,reconciler,map__47356,map__47356__$1,ephemeral,history_limit))
,null)),null);

if(cljs.core.truth_(backend)){
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"free","free",801364328),null,new cljs.core.Keyword(null,"http","http",382524695),null], null), null),type)){
} else {
throw quantum.core.error.__GT_ex.call(null,new cljs.core.Keyword(null,"assertion-error","assertion-error",1846873368),"Assertion not satisfied: (contains? #{:free :http} type)",cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.keyword,null),cljs.core.List.EMPTY));
}

if(cljs.core.truth_(((function (map__47353,map__47353__$1,config,map__47354,map__47354__$1,backend,type,name,host,port,rest_port,txr_alias,create_if_not_present_QMARK_,map__47355,map__47355__$1,reconciler,map__47356,map__47356__$1,ephemeral,history_limit){
return (function (G__47362){
var and__17513__auto__ = typeof G__47362 === 'string';
if(and__17513__auto__){
return quantum.core.logic.nempty_QMARK_.call(null,G__47362);
} else {
return and__17513__auto__;
}
});})(map__47353,map__47353__$1,config,map__47354,map__47354__$1,backend,type,name,host,port,rest_port,txr_alias,create_if_not_present_QMARK_,map__47355,map__47355__$1,reconciler,map__47356,map__47356__$1,ephemeral,history_limit))
.call(null,name))){
} else {
throw quantum.core.error.__GT_ex.call(null,new cljs.core.Keyword(null,"assertion-error","assertion-error",1846873368),"Assertion not satisfied: ((fn-and string? nempty?) name)",cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.keyword,null),cljs.core.List.EMPTY));
}

if(cljs.core.truth_(((function (map__47353,map__47353__$1,config,map__47354,map__47354__$1,backend,type,name,host,port,rest_port,txr_alias,create_if_not_present_QMARK_,map__47355,map__47355__$1,reconciler,map__47356,map__47356__$1,ephemeral,history_limit){
return (function (G__47363){
var and__17513__auto__ = typeof G__47363 === 'string';
if(and__17513__auto__){
return quantum.core.logic.nempty_QMARK_.call(null,G__47363);
} else {
return and__17513__auto__;
}
});})(map__47353,map__47353__$1,config,map__47354,map__47354__$1,backend,type,name,host,port,rest_port,txr_alias,create_if_not_present_QMARK_,map__47355,map__47355__$1,reconciler,map__47356,map__47356__$1,ephemeral,history_limit))
.call(null,host))){
} else {
throw quantum.core.error.__GT_ex.call(null,new cljs.core.Keyword(null,"assertion-error","assertion-error",1846873368),"Assertion not satisfied: ((fn-and string? nempty?) host)",cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.keyword,null),cljs.core.List.EMPTY));
}

if(cljs.core.integer_QMARK_.call(null,port)){
} else {
throw quantum.core.error.__GT_ex.call(null,new cljs.core.Keyword(null,"assertion-error","assertion-error",1846873368),"Assertion not satisfied: (integer? port)",cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.keyword,null),cljs.core.List.EMPTY));
}

if(((function (map__47353,map__47353__$1,config,map__47354,map__47354__$1,backend,type,name,host,port,rest_port,txr_alias,create_if_not_present_QMARK_,map__47355,map__47355__$1,reconciler,map__47356,map__47356__$1,ephemeral,history_limit){
return (function (G__47364){
return ((G__47364 == null)) || (cljs.core.integer_QMARK_.call(null,G__47364));
});})(map__47353,map__47353__$1,config,map__47354,map__47354__$1,backend,type,name,host,port,rest_port,txr_alias,create_if_not_present_QMARK_,map__47355,map__47355__$1,reconciler,map__47356,map__47356__$1,ephemeral,history_limit))
.call(null,port)){
} else {
throw quantum.core.error.__GT_ex.call(null,new cljs.core.Keyword(null,"assertion-error","assertion-error",1846873368),"Assertion not satisfied: ((fn-or nil? integer?) port)",cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.keyword,null),cljs.core.List.EMPTY));
}

if(((function (map__47353,map__47353__$1,config,map__47354,map__47354__$1,backend,type,name,host,port,rest_port,txr_alias,create_if_not_present_QMARK_,map__47355,map__47355__$1,reconciler,map__47356,map__47356__$1,ephemeral,history_limit){
return (function (G__47365){
return ((G__47365 == null)) || (typeof G__47365 === 'string');
});})(map__47353,map__47353__$1,config,map__47354,map__47354__$1,backend,type,name,host,port,rest_port,txr_alias,create_if_not_present_QMARK_,map__47355,map__47355__$1,reconciler,map__47356,map__47356__$1,ephemeral,history_limit))
.call(null,txr_alias)){
} else {
throw quantum.core.error.__GT_ex.call(null,new cljs.core.Keyword(null,"assertion-error","assertion-error",1846873368),"Assertion not satisfied: ((fn-or nil? string?) txr-alias)",cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.keyword,null),cljs.core.List.EMPTY));
}

if(cljs.core.truth_(((function (map__47353,map__47353__$1,config,map__47354,map__47354__$1,backend,type,name,host,port,rest_port,txr_alias,create_if_not_present_QMARK_,map__47355,map__47355__$1,reconciler,map__47356,map__47356__$1,ephemeral,history_limit){
return (function (G__47361){
var or__17525__auto__ = (G__47361 == null);
if(or__17525__auto__){
return or__17525__auto__;
} else {
return quantum.core.type.predicates.boolean_QMARK_.call(null,G__47361);
}
});})(map__47353,map__47353__$1,config,map__47354,map__47354__$1,backend,type,name,host,port,rest_port,txr_alias,create_if_not_present_QMARK_,map__47355,map__47355__$1,reconciler,map__47356,map__47356__$1,ephemeral,history_limit))
.call(null,create_if_not_present_QMARK_))){
} else {
throw quantum.core.error.__GT_ex.call(null,new cljs.core.Keyword(null,"assertion-error","assertion-error",1846873368),"Assertion not satisfied: ((fn-or nil? boolean?) create-if-not-present?)",cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.keyword,null),cljs.core.List.EMPTY));
}
} else {
}

if(cljs.core.truth_(ephemeral)){
if(((function (map__47353,map__47353__$1,config,map__47354,map__47354__$1,backend,type,name,host,port,rest_port,txr_alias,create_if_not_present_QMARK_,map__47355,map__47355__$1,reconciler,map__47356,map__47356__$1,ephemeral,history_limit){
return (function (G__47366){
return ((G__47366 == null)) || (cljs.core.integer_QMARK_.call(null,G__47366));
});})(map__47353,map__47353__$1,config,map__47354,map__47354__$1,backend,type,name,host,port,rest_port,txr_alias,create_if_not_present_QMARK_,map__47355,map__47355__$1,reconciler,map__47356,map__47356__$1,ephemeral,history_limit))
.call(null,history_limit)){
} else {
throw quantum.core.error.__GT_ex.call(null,new cljs.core.Keyword(null,"assertion-error","assertion-error",1846873368),"Assertion not satisfied: ((fn-or nil? integer?) history-limit)",cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.keyword,null),cljs.core.List.EMPTY));
}
} else {
}

return (new quantum.db.datomic.Database((cljs.core.truth_(ephemeral)?quantum.db.datomic.map__GT_EphemeralDatabase.call(null,cljs.core.assoc.call(null,ephemeral,new cljs.core.Keyword(null,"history-limit","history-limit",-1938739786),(function (){var or__17525__auto__ = history_limit;
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return (0);
}
})())):null),reconciler,(cljs.core.truth_(backend)?quantum.db.datomic.map__GT_BackendDatabase.call(null,cljs.core.assoc.call(null,backend,new cljs.core.Keyword(null,"uri","uri",-774711847),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"conn","conn",278309663),cljs.core.atom.call(null,null))):null),null,null,null));
});

//# sourceMappingURL=datomic.js.map?rel=1452702583310
/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns err core-async pr log logic fn cbase tpred async]
*/
