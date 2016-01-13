// Compiled by ClojureScript 1.7.170 {}

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn pr core-async tpred]
*/
goog.provide('quantum.core.log');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.core.rrb_vector');
goog.require('quantum.core.print');
goog.require('quantum.core.type.predicates');
goog.require('cljs.core');
goog.require('quantum.core.function$');
goog.require('quantum.core.ns');
goog.require('com.stuartsierra.component');

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
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
quantum.core.log.LoggingLevels = (function (warn,user,macro_expand,debug,trace,env,__meta,__extmap,__hash){
this.warn = warn;
this.user = user;
this.macro_expand = macro_expand;
this.debug = debug;
this.trace = trace;
this.env = env;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
quantum.core.log.LoggingLevels.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18139__auto__,k__18140__auto__){
var self__ = this;
var this__18139__auto____$1 = this;
return cljs.core._lookup.call(null,this__18139__auto____$1,k__18140__auto__,null);
});

quantum.core.log.LoggingLevels.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18141__auto__,k43487,else__18142__auto__){
var self__ = this;
var this__18141__auto____$1 = this;
var G__43489 = (((k43487 instanceof cljs.core.Keyword))?k43487.fqn:null);
switch (G__43489) {
case "warn":
return self__.warn;

break;
case "user":
return self__.user;

break;
case "macro-expand":
return self__.macro_expand;

break;
case "debug":
return self__.debug;

break;
case "trace":
return self__.trace;

break;
case "env":
return self__.env;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k43487,else__18142__auto__);

}
});

quantum.core.log.LoggingLevels.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18153__auto__,writer__18154__auto__,opts__18155__auto__){
var self__ = this;
var this__18153__auto____$1 = this;
var pr_pair__18156__auto__ = ((function (this__18153__auto____$1){
return (function (keyval__18157__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,cljs.core.pr_writer,""," ","",opts__18155__auto__,keyval__18157__auto__);
});})(this__18153__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,pr_pair__18156__auto__,"#quantum.core.log.LoggingLevels{",", ","}",opts__18155__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"warn","warn",-436710552),self__.warn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"user","user",1532431356),self__.user],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"macro-expand","macro-expand",2107494014),self__.macro_expand],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"debug","debug",-1608172596),self__.debug],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trace","trace",-1082747415),self__.trace],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"env","env",-1815813235),self__.env],null))], null),self__.__extmap));
});

quantum.core.log.LoggingLevels.prototype.cljs$core$IIterable$ = true;

quantum.core.log.LoggingLevels.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43486){
var self__ = this;
var G__43486__$1 = this;
return (new cljs.core.RecordIter((0),G__43486__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"macro-expand","macro-expand",2107494014),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"trace","trace",-1082747415),new cljs.core.Keyword(null,"env","env",-1815813235)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

quantum.core.log.LoggingLevels.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18137__auto__){
var self__ = this;
var this__18137__auto____$1 = this;
return self__.__meta;
});

quantum.core.log.LoggingLevels.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18133__auto__){
var self__ = this;
var this__18133__auto____$1 = this;
return (new quantum.core.log.LoggingLevels(self__.warn,self__.user,self__.macro_expand,self__.debug,self__.trace,self__.env,self__.__meta,self__.__extmap,self__.__hash));
});

quantum.core.log.LoggingLevels.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18143__auto__){
var self__ = this;
var this__18143__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

quantum.core.log.LoggingLevels.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18134__auto__){
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

quantum.core.log.LoggingLevels.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18135__auto__,other__18136__auto__){
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

quantum.core.log.LoggingLevels.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18148__auto__,k__18149__auto__){
var self__ = this;
var this__18148__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"warn","warn",-436710552),null,new cljs.core.Keyword(null,"trace","trace",-1082747415),null,new cljs.core.Keyword(null,"debug","debug",-1608172596),null,new cljs.core.Keyword(null,"env","env",-1815813235),null,new cljs.core.Keyword(null,"user","user",1532431356),null,new cljs.core.Keyword(null,"macro-expand","macro-expand",2107494014),null], null), null),k__18149__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18148__auto____$1),self__.__meta),k__18149__auto__);
} else {
return (new quantum.core.log.LoggingLevels(self__.warn,self__.user,self__.macro_expand,self__.debug,self__.trace,self__.env,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18149__auto__)),null));
}
});

quantum.core.log.LoggingLevels.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18146__auto__,k__18147__auto__,G__43486){
var self__ = this;
var this__18146__auto____$1 = this;
var pred__43490 = cljs.core.keyword_identical_QMARK_;
var expr__43491 = k__18147__auto__;
if(cljs.core.truth_(pred__43490.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),expr__43491))){
return (new quantum.core.log.LoggingLevels(G__43486,self__.user,self__.macro_expand,self__.debug,self__.trace,self__.env,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43490.call(null,new cljs.core.Keyword(null,"user","user",1532431356),expr__43491))){
return (new quantum.core.log.LoggingLevels(self__.warn,G__43486,self__.macro_expand,self__.debug,self__.trace,self__.env,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43490.call(null,new cljs.core.Keyword(null,"macro-expand","macro-expand",2107494014),expr__43491))){
return (new quantum.core.log.LoggingLevels(self__.warn,self__.user,G__43486,self__.debug,self__.trace,self__.env,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43490.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),expr__43491))){
return (new quantum.core.log.LoggingLevels(self__.warn,self__.user,self__.macro_expand,G__43486,self__.trace,self__.env,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43490.call(null,new cljs.core.Keyword(null,"trace","trace",-1082747415),expr__43491))){
return (new quantum.core.log.LoggingLevels(self__.warn,self__.user,self__.macro_expand,self__.debug,G__43486,self__.env,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43490.call(null,new cljs.core.Keyword(null,"env","env",-1815813235),expr__43491))){
return (new quantum.core.log.LoggingLevels(self__.warn,self__.user,self__.macro_expand,self__.debug,self__.trace,G__43486,self__.__meta,self__.__extmap,null));
} else {
return (new quantum.core.log.LoggingLevels(self__.warn,self__.user,self__.macro_expand,self__.debug,self__.trace,self__.env,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18147__auto__,G__43486),null));
}
}
}
}
}
}
});

quantum.core.log.LoggingLevels.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18151__auto__){
var self__ = this;
var this__18151__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"warn","warn",-436710552),self__.warn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"user","user",1532431356),self__.user],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"macro-expand","macro-expand",2107494014),self__.macro_expand],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"debug","debug",-1608172596),self__.debug],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trace","trace",-1082747415),self__.trace],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"env","env",-1815813235),self__.env],null))], null),self__.__extmap));
});

quantum.core.log.LoggingLevels.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18138__auto__,G__43486){
var self__ = this;
var this__18138__auto____$1 = this;
return (new quantum.core.log.LoggingLevels(self__.warn,self__.user,self__.macro_expand,self__.debug,self__.trace,self__.env,G__43486,self__.__extmap,self__.__hash));
});

quantum.core.log.LoggingLevels.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18144__auto__,entry__18145__auto__){
var self__ = this;
var this__18144__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18145__auto__)){
return cljs.core._assoc.call(null,this__18144__auto____$1,cljs.core._nth.call(null,entry__18145__auto__,(0)),cljs.core._nth.call(null,entry__18145__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18144__auto____$1,entry__18145__auto__);
}
});

quantum.core.log.LoggingLevels.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"warn","warn",1203820975,null),new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Symbol(null,"macro-expand","macro-expand",-546941755,null),new cljs.core.Symbol(null,"debug","debug",32358931,null),new cljs.core.Symbol(null,"trace","trace",557784112,null),new cljs.core.Symbol(null,"env","env",-175281708,null)], null);
});

quantum.core.log.LoggingLevels.cljs$lang$type = true;

quantum.core.log.LoggingLevels.cljs$lang$ctorPrSeq = (function (this__18173__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"quantum.core.log/LoggingLevels");
});

quantum.core.log.LoggingLevels.cljs$lang$ctorPrWriter = (function (this__18173__auto__,writer__18174__auto__){
return cljs.core._write.call(null,writer__18174__auto__,"quantum.core.log/LoggingLevels");
});

quantum.core.log.__GT_LoggingLevels = (function quantum$core$log$__GT_LoggingLevels(warn,user,macro_expand,debug,trace,env){
return (new quantum.core.log.LoggingLevels(warn,user,macro_expand,debug,trace,env,null,null,null));
});

quantum.core.log.map__GT_LoggingLevels = (function quantum$core$log$map__GT_LoggingLevels(G__43488){
return (new quantum.core.log.LoggingLevels(new cljs.core.Keyword(null,"warn","warn",-436710552).cljs$core$IFn$_invoke$arity$1(G__43488),new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(G__43488),new cljs.core.Keyword(null,"macro-expand","macro-expand",2107494014).cljs$core$IFn$_invoke$arity$1(G__43488),new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(G__43488),new cljs.core.Keyword(null,"trace","trace",-1082747415).cljs$core$IFn$_invoke$arity$1(G__43488),new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(G__43488),null,cljs.core.dissoc.call(null,G__43488,new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"macro-expand","macro-expand",2107494014),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"trace","trace",-1082747415),new cljs.core.Keyword(null,"env","env",-1815813235)),null));
});

if(typeof quantum.core.log.levels !== 'undefined'){
} else {
quantum.core.log.levels = cljs.core.atom.call(null,quantum.core.log.map__GT_LoggingLevels.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warn","warn",-436710552),true,new cljs.core.Keyword(null,"user","user",1532431356),true], null)));
}
if(typeof quantum.core.log.log !== 'undefined'){
} else {
quantum.core.log.log = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}

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
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
quantum.core.log.LogEntry = (function (time_stamp,type,ns_source,message,__meta,__extmap,__hash){
this.time_stamp = time_stamp;
this.type = type;
this.ns_source = ns_source;
this.message = message;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
quantum.core.log.LogEntry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18139__auto__,k__18140__auto__){
var self__ = this;
var this__18139__auto____$1 = this;
return cljs.core._lookup.call(null,this__18139__auto____$1,k__18140__auto__,null);
});

quantum.core.log.LogEntry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18141__auto__,k43495,else__18142__auto__){
var self__ = this;
var this__18141__auto____$1 = this;
var G__43497 = (((k43495 instanceof cljs.core.Keyword))?k43495.fqn:null);
switch (G__43497) {
case "time-stamp":
return self__.time_stamp;

break;
case "type":
return self__.type;

break;
case "ns-source":
return self__.ns_source;

break;
case "message":
return self__.message;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k43495,else__18142__auto__);

}
});

quantum.core.log.LogEntry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18153__auto__,writer__18154__auto__,opts__18155__auto__){
var self__ = this;
var this__18153__auto____$1 = this;
var pr_pair__18156__auto__ = ((function (this__18153__auto____$1){
return (function (keyval__18157__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,cljs.core.pr_writer,""," ","",opts__18155__auto__,keyval__18157__auto__);
});})(this__18153__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,pr_pair__18156__auto__,"#quantum.core.log.LogEntry{",", ","}",opts__18155__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"time-stamp","time-stamp",-1161230692),self__.time_stamp],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ns-source","ns-source",692633294),self__.ns_source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"message","message",-406056002),self__.message],null))], null),self__.__extmap));
});

quantum.core.log.LogEntry.prototype.cljs$core$IIterable$ = true;

quantum.core.log.LogEntry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43494){
var self__ = this;
var G__43494__$1 = this;
return (new cljs.core.RecordIter((0),G__43494__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-stamp","time-stamp",-1161230692),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ns-source","ns-source",692633294),new cljs.core.Keyword(null,"message","message",-406056002)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

quantum.core.log.LogEntry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18137__auto__){
var self__ = this;
var this__18137__auto____$1 = this;
return self__.__meta;
});

quantum.core.log.LogEntry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18133__auto__){
var self__ = this;
var this__18133__auto____$1 = this;
return (new quantum.core.log.LogEntry(self__.time_stamp,self__.type,self__.ns_source,self__.message,self__.__meta,self__.__extmap,self__.__hash));
});

quantum.core.log.LogEntry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18143__auto__){
var self__ = this;
var this__18143__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

quantum.core.log.LogEntry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18134__auto__){
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

quantum.core.log.LogEntry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18135__auto__,other__18136__auto__){
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

quantum.core.log.LogEntry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18148__auto__,k__18149__auto__){
var self__ = this;
var this__18148__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"ns-source","ns-source",692633294),null,new cljs.core.Keyword(null,"time-stamp","time-stamp",-1161230692),null,new cljs.core.Keyword(null,"message","message",-406056002),null], null), null),k__18149__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18148__auto____$1),self__.__meta),k__18149__auto__);
} else {
return (new quantum.core.log.LogEntry(self__.time_stamp,self__.type,self__.ns_source,self__.message,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18149__auto__)),null));
}
});

quantum.core.log.LogEntry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18146__auto__,k__18147__auto__,G__43494){
var self__ = this;
var this__18146__auto____$1 = this;
var pred__43498 = cljs.core.keyword_identical_QMARK_;
var expr__43499 = k__18147__auto__;
if(cljs.core.truth_(pred__43498.call(null,new cljs.core.Keyword(null,"time-stamp","time-stamp",-1161230692),expr__43499))){
return (new quantum.core.log.LogEntry(G__43494,self__.type,self__.ns_source,self__.message,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43498.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__43499))){
return (new quantum.core.log.LogEntry(self__.time_stamp,G__43494,self__.ns_source,self__.message,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43498.call(null,new cljs.core.Keyword(null,"ns-source","ns-source",692633294),expr__43499))){
return (new quantum.core.log.LogEntry(self__.time_stamp,self__.type,G__43494,self__.message,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43498.call(null,new cljs.core.Keyword(null,"message","message",-406056002),expr__43499))){
return (new quantum.core.log.LogEntry(self__.time_stamp,self__.type,self__.ns_source,G__43494,self__.__meta,self__.__extmap,null));
} else {
return (new quantum.core.log.LogEntry(self__.time_stamp,self__.type,self__.ns_source,self__.message,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18147__auto__,G__43494),null));
}
}
}
}
});

quantum.core.log.LogEntry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18151__auto__){
var self__ = this;
var this__18151__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"time-stamp","time-stamp",-1161230692),self__.time_stamp],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ns-source","ns-source",692633294),self__.ns_source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"message","message",-406056002),self__.message],null))], null),self__.__extmap));
});

quantum.core.log.LogEntry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18138__auto__,G__43494){
var self__ = this;
var this__18138__auto____$1 = this;
return (new quantum.core.log.LogEntry(self__.time_stamp,self__.type,self__.ns_source,self__.message,G__43494,self__.__extmap,self__.__hash));
});

quantum.core.log.LogEntry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18144__auto__,entry__18145__auto__){
var self__ = this;
var this__18144__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18145__auto__)){
return cljs.core._assoc.call(null,this__18144__auto____$1,cljs.core._nth.call(null,entry__18145__auto__,(0)),cljs.core._nth.call(null,entry__18145__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18144__auto____$1,entry__18145__auto__);
}
});

quantum.core.log.LogEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"time-stamp","time-stamp",479300835,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"ns-source","ns-source",-1961802475,null),new cljs.core.Symbol(null,"message","message",1234475525,null)], null);
});

quantum.core.log.LogEntry.cljs$lang$type = true;

quantum.core.log.LogEntry.cljs$lang$ctorPrSeq = (function (this__18173__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"quantum.core.log/LogEntry");
});

quantum.core.log.LogEntry.cljs$lang$ctorPrWriter = (function (this__18173__auto__,writer__18174__auto__){
return cljs.core._write.call(null,writer__18174__auto__,"quantum.core.log/LogEntry");
});

quantum.core.log.__GT_LogEntry = (function quantum$core$log$__GT_LogEntry(time_stamp,type,ns_source,message){
return (new quantum.core.log.LogEntry(time_stamp,type,ns_source,message,null,null,null));
});

quantum.core.log.map__GT_LogEntry = (function quantum$core$log$map__GT_LogEntry(G__43496){
return (new quantum.core.log.LogEntry(new cljs.core.Keyword(null,"time-stamp","time-stamp",-1161230692).cljs$core$IFn$_invoke$arity$1(G__43496),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__43496),new cljs.core.Keyword(null,"ns-source","ns-source",692633294).cljs$core$IFn$_invoke$arity$1(G__43496),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(G__43496),null,cljs.core.dissoc.call(null,G__43496,new cljs.core.Keyword(null,"time-stamp","time-stamp",-1161230692),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ns-source","ns-source",692633294),new cljs.core.Keyword(null,"message","message",-406056002)),null));
});

quantum.core.log.disable_BANG_ = (function quantum$core$log$disable_BANG_(var_args){
var args43502 = [];
var len__18583__auto___43511 = arguments.length;
var i__18584__auto___43512 = (0);
while(true){
if((i__18584__auto___43512 < len__18583__auto___43511)){
args43502.push((arguments[i__18584__auto___43512]));

var G__43513 = (i__18584__auto___43512 + (1));
i__18584__auto___43512 = G__43513;
continue;
} else {
}
break;
}

var G__43506 = args43502.length;
switch (G__43506) {
case 1:
return quantum.core.log.disable_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__18602__auto__ = (new cljs.core.IndexedSeq(args43502.slice((1)),(0)));
return quantum.core.log.disable_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18602__auto__);

}
});

quantum.core.log.disable_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (pr_type){
return cljs.core.swap_BANG_.call(null,quantum.core.log.levels,cljs.core.assoc,pr_type,false);
});

quantum.core.log.disable_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (pr_type,pr_types){
var seq__43507 = cljs.core.seq.call(null,cljs.core.conj.call(null,pr_types,pr_type));
var chunk__43508 = null;
var count__43509 = (0);
var i__43510 = (0);
while(true){
if((i__43510 < count__43509)){
var pr_type_n = cljs.core._nth.call(null,chunk__43508,i__43510);
quantum.core.log.disable_BANG_.call(null,pr_type_n);

var G__43515 = seq__43507;
var G__43516 = chunk__43508;
var G__43517 = count__43509;
var G__43518 = (i__43510 + (1));
seq__43507 = G__43515;
chunk__43508 = G__43516;
count__43509 = G__43517;
i__43510 = G__43518;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__43507);
if(temp__4425__auto__){
var seq__43507__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43507__$1)){
var c__18328__auto__ = cljs.core.chunk_first.call(null,seq__43507__$1);
var G__43519 = cljs.core.chunk_rest.call(null,seq__43507__$1);
var G__43520 = c__18328__auto__;
var G__43521 = cljs.core.count.call(null,c__18328__auto__);
var G__43522 = (0);
seq__43507 = G__43519;
chunk__43508 = G__43520;
count__43509 = G__43521;
i__43510 = G__43522;
continue;
} else {
var pr_type_n = cljs.core.first.call(null,seq__43507__$1);
quantum.core.log.disable_BANG_.call(null,pr_type_n);

var G__43523 = cljs.core.next.call(null,seq__43507__$1);
var G__43524 = null;
var G__43525 = (0);
var G__43526 = (0);
seq__43507 = G__43523;
chunk__43508 = G__43524;
count__43509 = G__43525;
i__43510 = G__43526;
continue;
}
} else {
return null;
}
}
break;
}
});

quantum.core.log.disable_BANG_.cljs$lang$applyTo = (function (seq43503){
var G__43504 = cljs.core.first.call(null,seq43503);
var seq43503__$1 = cljs.core.next.call(null,seq43503);
return quantum.core.log.disable_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43504,seq43503__$1);
});

quantum.core.log.disable_BANG_.cljs$lang$maxFixedArity = (1);
quantum.core.log.enable_BANG_ = (function quantum$core$log$enable_BANG_(var_args){
var args43527 = [];
var len__18583__auto___43536 = arguments.length;
var i__18584__auto___43537 = (0);
while(true){
if((i__18584__auto___43537 < len__18583__auto___43536)){
args43527.push((arguments[i__18584__auto___43537]));

var G__43538 = (i__18584__auto___43537 + (1));
i__18584__auto___43537 = G__43538;
continue;
} else {
}
break;
}

var G__43531 = args43527.length;
switch (G__43531) {
case 1:
return quantum.core.log.enable_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__18602__auto__ = (new cljs.core.IndexedSeq(args43527.slice((1)),(0)));
return quantum.core.log.enable_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18602__auto__);

}
});

quantum.core.log.enable_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (pr_type){
return cljs.core.swap_BANG_.call(null,quantum.core.log.levels,cljs.core.assoc,pr_type,true);
});

quantum.core.log.enable_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (pr_type,pr_types){
var seq__43532 = cljs.core.seq.call(null,cljs.core.conj.call(null,pr_types,pr_type));
var chunk__43533 = null;
var count__43534 = (0);
var i__43535 = (0);
while(true){
if((i__43535 < count__43534)){
var pr_type_n = cljs.core._nth.call(null,chunk__43533,i__43535);
quantum.core.log.enable_BANG_.call(null,pr_type_n);

var G__43540 = seq__43532;
var G__43541 = chunk__43533;
var G__43542 = count__43534;
var G__43543 = (i__43535 + (1));
seq__43532 = G__43540;
chunk__43533 = G__43541;
count__43534 = G__43542;
i__43535 = G__43543;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__43532);
if(temp__4425__auto__){
var seq__43532__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43532__$1)){
var c__18328__auto__ = cljs.core.chunk_first.call(null,seq__43532__$1);
var G__43544 = cljs.core.chunk_rest.call(null,seq__43532__$1);
var G__43545 = c__18328__auto__;
var G__43546 = cljs.core.count.call(null,c__18328__auto__);
var G__43547 = (0);
seq__43532 = G__43544;
chunk__43533 = G__43545;
count__43534 = G__43546;
i__43535 = G__43547;
continue;
} else {
var pr_type_n = cljs.core.first.call(null,seq__43532__$1);
quantum.core.log.enable_BANG_.call(null,pr_type_n);

var G__43548 = cljs.core.next.call(null,seq__43532__$1);
var G__43549 = null;
var G__43550 = (0);
var G__43551 = (0);
seq__43532 = G__43548;
chunk__43533 = G__43549;
count__43534 = G__43550;
i__43535 = G__43551;
continue;
}
} else {
return null;
}
}
break;
}
});

quantum.core.log.enable_BANG_.cljs$lang$applyTo = (function (seq43528){
var G__43529 = cljs.core.first.call(null,seq43528);
var seq43528__$1 = cljs.core.next.call(null,seq43528);
return quantum.core.log.enable_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43529,seq43528__$1);
});

quantum.core.log.enable_BANG_.cljs$lang$maxFixedArity = (1);

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
quantum.core.log.LogInitializer = (function (levels,__meta,__extmap,__hash){
this.levels = levels;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
quantum.core.log.LogInitializer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18139__auto__,k__18140__auto__){
var self__ = this;
var this__18139__auto____$1 = this;
return cljs.core._lookup.call(null,this__18139__auto____$1,k__18140__auto__,null);
});

quantum.core.log.LogInitializer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18141__auto__,k43553,else__18142__auto__){
var self__ = this;
var this__18141__auto____$1 = this;
var G__43555 = (((k43553 instanceof cljs.core.Keyword))?k43553.fqn:null);
switch (G__43555) {
case "levels":
return self__.levels;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k43553,else__18142__auto__);

}
});

quantum.core.log.LogInitializer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18153__auto__,writer__18154__auto__,opts__18155__auto__){
var self__ = this;
var this__18153__auto____$1 = this;
var pr_pair__18156__auto__ = ((function (this__18153__auto____$1){
return (function (keyval__18157__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,cljs.core.pr_writer,""," ","",opts__18155__auto__,keyval__18157__auto__);
});})(this__18153__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,pr_pair__18156__auto__,"#quantum.core.log.LogInitializer{",", ","}",opts__18155__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"levels","levels",-950747887),self__.levels],null))], null),self__.__extmap));
});

quantum.core.log.LogInitializer.prototype.cljs$core$IIterable$ = true;

quantum.core.log.LogInitializer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43552){
var self__ = this;
var G__43552__$1 = this;
return (new cljs.core.RecordIter((0),G__43552__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"levels","levels",-950747887)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

quantum.core.log.LogInitializer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18137__auto__){
var self__ = this;
var this__18137__auto____$1 = this;
return self__.__meta;
});

quantum.core.log.LogInitializer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18133__auto__){
var self__ = this;
var this__18133__auto____$1 = this;
return (new quantum.core.log.LogInitializer(self__.levels,self__.__meta,self__.__extmap,self__.__hash));
});

quantum.core.log.LogInitializer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18143__auto__){
var self__ = this;
var this__18143__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

quantum.core.log.LogInitializer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18134__auto__){
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

quantum.core.log.LogInitializer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18135__auto__,other__18136__auto__){
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

quantum.core.log.LogInitializer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18148__auto__,k__18149__auto__){
var self__ = this;
var this__18148__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"levels","levels",-950747887),null], null), null),k__18149__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18148__auto____$1),self__.__meta),k__18149__auto__);
} else {
return (new quantum.core.log.LogInitializer(self__.levels,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18149__auto__)),null));
}
});

quantum.core.log.LogInitializer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18146__auto__,k__18147__auto__,G__43552){
var self__ = this;
var this__18146__auto____$1 = this;
var pred__43556 = cljs.core.keyword_identical_QMARK_;
var expr__43557 = k__18147__auto__;
if(cljs.core.truth_(pred__43556.call(null,new cljs.core.Keyword(null,"levels","levels",-950747887),expr__43557))){
return (new quantum.core.log.LogInitializer(G__43552,self__.__meta,self__.__extmap,null));
} else {
return (new quantum.core.log.LogInitializer(self__.levels,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18147__auto__,G__43552),null));
}
});

quantum.core.log.LogInitializer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18151__auto__){
var self__ = this;
var this__18151__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"levels","levels",-950747887),self__.levels],null))], null),self__.__extmap));
});

quantum.core.log.LogInitializer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18138__auto__,G__43552){
var self__ = this;
var this__18138__auto____$1 = this;
return (new quantum.core.log.LogInitializer(self__.levels,G__43552,self__.__extmap,self__.__hash));
});

quantum.core.log.LogInitializer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18144__auto__,entry__18145__auto__){
var self__ = this;
var this__18144__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18145__auto__)){
return cljs.core._assoc.call(null,this__18144__auto____$1,cljs.core._nth.call(null,entry__18145__auto__,(0)),cljs.core._nth.call(null,entry__18145__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18144__auto____$1,entry__18145__auto__);
}
});

quantum.core.log.LogInitializer.prototype.com$stuartsierra$component$Lifecycle$ = true;

quantum.core.log.LogInitializer.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
cljs.core.apply.call(null,quantum.core.log.enable_BANG_,self__.levels);

return this$__$1;
});

quantum.core.log.LogInitializer.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
cljs.core.apply.call(null,quantum.core.log.disable_BANG_,self__.levels);

return this$__$1;
});

quantum.core.log.LogInitializer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"levels","levels",689783640,null)], null);
});

quantum.core.log.LogInitializer.cljs$lang$type = true;

quantum.core.log.LogInitializer.cljs$lang$ctorPrSeq = (function (this__18173__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"quantum.core.log/LogInitializer");
});

quantum.core.log.LogInitializer.cljs$lang$ctorPrWriter = (function (this__18173__auto__,writer__18174__auto__){
return cljs.core._write.call(null,writer__18174__auto__,"quantum.core.log/LogInitializer");
});

quantum.core.log.__GT_LogInitializer = (function quantum$core$log$__GT_LogInitializer(levels){
return (new quantum.core.log.LogInitializer(levels,null,null,null));
});

quantum.core.log.map__GT_LogInitializer = (function quantum$core$log$map__GT_LogInitializer(G__43554){
return (new quantum.core.log.LogInitializer(new cljs.core.Keyword(null,"levels","levels",-950747887).cljs$core$IFn$_invoke$arity$1(G__43554),null,cljs.core.dissoc.call(null,G__43554,new cljs.core.Keyword(null,"levels","levels",-950747887)),null));
});

quantum.core.log.__GT_log_initializer = (function quantum$core$log$__GT_log_initializer(p__43560){
var map__43563 = p__43560;
var map__43563__$1 = ((((!((map__43563 == null)))?((((map__43563.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43563.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43563):map__43563);
var opts = map__43563__$1;
var levels = cljs.core.get.call(null,map__43563__$1,new cljs.core.Keyword(null,"levels","levels",-950747887));
if(cljs.core.truth_(quantum.core.type.predicates.seqable_QMARK_.call(null,levels))){
} else {
throw (new Error());
}

return (new quantum.core.log.LogInitializer(levels,null,null,null));
});
/**
 * Prints to |System/out| if the print alert type @pr-type
 * is in the set of enabled print alert types, |levels|.
 * 
 * Logs the printed result to the global log |log|.
 */
quantum.core.log.pr_STAR_ = (function quantum$core$log$pr_STAR_(trace_QMARK_,pretty_QMARK_,print_fn,pr_type,args,opts){
if(cljs.core.truth_((function (){var or__17525__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,quantum.core.log.levels),pr_type);
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return cljs.core._EQ_.call(null,pr_type,new cljs.core.Keyword(null,"macro-expand","macro-expand",2107494014));
}
})())){
var trace_QMARK___$1 = (function (){var or__17525__auto__ = new cljs.core.Keyword(null,"trace?","trace?",1730690679).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return trace_QMARK_;
}
})();
var pretty_QMARK___$1 = (function (){var or__17525__auto__ = new cljs.core.Keyword(null,"pretty?","pretty?",-1481161944).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return pretty_QMARK_;
}
})();
var timestamp_QMARK_ = new cljs.core.Keyword(null,"timestamp?","timestamp?",-996651043).cljs$core$IFn$_invoke$arity$1(opts);
var curr_fn = (cljs.core.truth_(trace_QMARK___$1)?quantum.core.ns.this_fn_name.call(null,new cljs.core.Keyword(null,"prev","prev",-1597069226)):null);
var args_f = cljs.core.deref.call(null,args);
var env_type_str = (cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,quantum.core.log.levels),new cljs.core.Keyword(null,"env","env",-1815813235)))?[cljs.core.str(cljs.core.name.call(null,quantum.core.ns.lang)),cljs.core.str(" \u00BB")].join(''):null);
var out_str = (function (){var sb__18499__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_43567_43569 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_43568_43570 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_43567_43569,_STAR_print_fn_STAR_43568_43570,sb__18499__auto__,trace_QMARK___$1,pretty_QMARK___$1,timestamp_QMARK_,curr_fn,args_f,env_type_str){
return (function (x__18500__auto__){
return sb__18499__auto__.append(x__18500__auto__);
});})(_STAR_print_newline_STAR_43567_43569,_STAR_print_fn_STAR_43568_43570,sb__18499__auto__,trace_QMARK___$1,pretty_QMARK___$1,timestamp_QMARK_,curr_fn,args_f,env_type_str))
;

try{if(cljs.core._EQ_.call(null,pr_type,new cljs.core.Keyword(null,"macro-expand","macro-expand",2107494014))){
cljs.core.print.call(null,"\n/* ");
} else {
}

if(cljs.core.truth_(trace_QMARK___$1)){
cljs.core.print.call(null,"[");

cljs.core.print.call(null,":",curr_fn,"\u00BB",[cljs.core.str(cljs.core.name.call(null,pr_type)),cljs.core.str("] ")].join(''));
} else {
}

if(cljs.core.truth_((function (){var and__17513__auto__ = pretty_QMARK___$1;
if(cljs.core.truth_(and__17513__auto__)){
return typeof cljs.core.first.call(null,args_f) === 'string';
} else {
return and__17513__auto__;
}
})())){
cljs.core.print.call(null,cljs.core.first.call(null,args_f)," ");

cljs.core.println.call(null);

cljs.core.apply.call(null,print_fn,cljs.core.rest.call(null,args_f));
} else {
if(cljs.core.truth_(pretty_QMARK___$1)){
cljs.core.println.call(null);
} else {
}

cljs.core.apply.call(null,print_fn,args_f);
}

if(cljs.core._EQ_.call(null,pr_type,new cljs.core.Keyword(null,"macro-expand","macro-expand",2107494014))){
cljs.core.print.call(null," */\n");
} else {
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_43568_43570;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_43567_43569;
}
return [cljs.core.str(sb__18499__auto__)].join('');
})();
cljs.core.print.call(null,out_str);

if(cljs.core.truth_(new cljs.core.Keyword(null,"log?","log?",-366002723).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.core.swap_BANG_.call(null,quantum.core.log.log,cljs.core.conj,(new quantum.core.log.LogEntry("TIMESTAMP",pr_type,curr_fn,out_str,null,null,null)));
} else {
}

return null;
} else {
return null;
}
});

//# sourceMappingURL=log.js.map?rel=1452702572225
/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn pr core-async tpred]
*/
