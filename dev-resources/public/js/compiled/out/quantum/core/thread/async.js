// Compiled by ClojureScript 1.7.170 {}

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn err logic vec err log cmacros]
*/
goog.provide('quantum.core.thread.async');
goog.require('cljs.core');
goog.require('clojure.core.rrb_vector');
goog.require('quantum.core.logic');
goog.require('quantum.core.log');
goog.require('quantum.core.macros.core');
goog.require('cljs.core.async');
goog.require('servant.core');
goog.require('cljs.core');
goog.require('quantum.core.function$');
goog.require('quantum.core.data.vector');
goog.require('quantum.core.ns');
goog.require('quantum.core.error');
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
quantum.core.thread.async.QueueCloseRequest = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
quantum.core.thread.async.QueueCloseRequest.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18139__auto__,k__18140__auto__){
var self__ = this;
var this__18139__auto____$1 = this;
return cljs.core._lookup.call(null,this__18139__auto____$1,k__18140__auto__,null);
});

quantum.core.thread.async.QueueCloseRequest.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18141__auto__,k44043,else__18142__auto__){
var self__ = this;
var this__18141__auto____$1 = this;
var G__44045 = k44043;
switch (G__44045) {
default:
return cljs.core.get.call(null,self__.__extmap,k44043,else__18142__auto__);

}
});

quantum.core.thread.async.QueueCloseRequest.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18153__auto__,writer__18154__auto__,opts__18155__auto__){
var self__ = this;
var this__18153__auto____$1 = this;
var pr_pair__18156__auto__ = ((function (this__18153__auto____$1){
return (function (keyval__18157__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,cljs.core.pr_writer,""," ","",opts__18155__auto__,keyval__18157__auto__);
});})(this__18153__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,pr_pair__18156__auto__,"#quantum.core.thread.async.QueueCloseRequest{",", ","}",opts__18155__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

quantum.core.thread.async.QueueCloseRequest.prototype.cljs$core$IIterable$ = true;

quantum.core.thread.async.QueueCloseRequest.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44042){
var self__ = this;
var G__44042__$1 = this;
return (new cljs.core.RecordIter((0),G__44042__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

quantum.core.thread.async.QueueCloseRequest.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18137__auto__){
var self__ = this;
var this__18137__auto____$1 = this;
return self__.__meta;
});

quantum.core.thread.async.QueueCloseRequest.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18133__auto__){
var self__ = this;
var this__18133__auto____$1 = this;
return (new quantum.core.thread.async.QueueCloseRequest(self__.__meta,self__.__extmap,self__.__hash));
});

quantum.core.thread.async.QueueCloseRequest.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18143__auto__){
var self__ = this;
var this__18143__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

quantum.core.thread.async.QueueCloseRequest.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18134__auto__){
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

quantum.core.thread.async.QueueCloseRequest.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18135__auto__,other__18136__auto__){
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

quantum.core.thread.async.QueueCloseRequest.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18148__auto__,k__18149__auto__){
var self__ = this;
var this__18148__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__18149__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18148__auto____$1),self__.__meta),k__18149__auto__);
} else {
return (new quantum.core.thread.async.QueueCloseRequest(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18149__auto__)),null));
}
});

quantum.core.thread.async.QueueCloseRequest.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18146__auto__,k__18147__auto__,G__44042){
var self__ = this;
var this__18146__auto____$1 = this;
var pred__44046 = cljs.core.keyword_identical_QMARK_;
var expr__44047 = k__18147__auto__;
return (new quantum.core.thread.async.QueueCloseRequest(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18147__auto__,G__44042),null));
});

quantum.core.thread.async.QueueCloseRequest.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18151__auto__){
var self__ = this;
var this__18151__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

quantum.core.thread.async.QueueCloseRequest.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18138__auto__,G__44042){
var self__ = this;
var this__18138__auto____$1 = this;
return (new quantum.core.thread.async.QueueCloseRequest(G__44042,self__.__extmap,self__.__hash));
});

quantum.core.thread.async.QueueCloseRequest.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18144__auto__,entry__18145__auto__){
var self__ = this;
var this__18144__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18145__auto__)){
return cljs.core._assoc.call(null,this__18144__auto____$1,cljs.core._nth.call(null,entry__18145__auto__,(0)),cljs.core._nth.call(null,entry__18145__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18144__auto____$1,entry__18145__auto__);
}
});

quantum.core.thread.async.QueueCloseRequest.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

quantum.core.thread.async.QueueCloseRequest.cljs$lang$type = true;

quantum.core.thread.async.QueueCloseRequest.cljs$lang$ctorPrSeq = (function (this__18173__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"quantum.core.thread.async/QueueCloseRequest");
});

quantum.core.thread.async.QueueCloseRequest.cljs$lang$ctorPrWriter = (function (this__18173__auto__,writer__18174__auto__){
return cljs.core._write.call(null,writer__18174__auto__,"quantum.core.thread.async/QueueCloseRequest");
});

quantum.core.thread.async.__GT_QueueCloseRequest = (function quantum$core$thread$async$__GT_QueueCloseRequest(){
return (new quantum.core.thread.async.QueueCloseRequest(null,null,null));
});

quantum.core.thread.async.map__GT_QueueCloseRequest = (function quantum$core$thread$async$map__GT_QueueCloseRequest(G__44044){
return (new quantum.core.thread.async.QueueCloseRequest(null,cljs.core.dissoc.call(null,G__44044),null));
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
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
quantum.core.thread.async.TerminationRequest = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
quantum.core.thread.async.TerminationRequest.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18139__auto__,k__18140__auto__){
var self__ = this;
var this__18139__auto____$1 = this;
return cljs.core._lookup.call(null,this__18139__auto____$1,k__18140__auto__,null);
});

quantum.core.thread.async.TerminationRequest.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18141__auto__,k44051,else__18142__auto__){
var self__ = this;
var this__18141__auto____$1 = this;
var G__44053 = k44051;
switch (G__44053) {
default:
return cljs.core.get.call(null,self__.__extmap,k44051,else__18142__auto__);

}
});

quantum.core.thread.async.TerminationRequest.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18153__auto__,writer__18154__auto__,opts__18155__auto__){
var self__ = this;
var this__18153__auto____$1 = this;
var pr_pair__18156__auto__ = ((function (this__18153__auto____$1){
return (function (keyval__18157__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,cljs.core.pr_writer,""," ","",opts__18155__auto__,keyval__18157__auto__);
});})(this__18153__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,pr_pair__18156__auto__,"#quantum.core.thread.async.TerminationRequest{",", ","}",opts__18155__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

quantum.core.thread.async.TerminationRequest.prototype.cljs$core$IIterable$ = true;

quantum.core.thread.async.TerminationRequest.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44050){
var self__ = this;
var G__44050__$1 = this;
return (new cljs.core.RecordIter((0),G__44050__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

quantum.core.thread.async.TerminationRequest.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18137__auto__){
var self__ = this;
var this__18137__auto____$1 = this;
return self__.__meta;
});

quantum.core.thread.async.TerminationRequest.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18133__auto__){
var self__ = this;
var this__18133__auto____$1 = this;
return (new quantum.core.thread.async.TerminationRequest(self__.__meta,self__.__extmap,self__.__hash));
});

quantum.core.thread.async.TerminationRequest.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18143__auto__){
var self__ = this;
var this__18143__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

quantum.core.thread.async.TerminationRequest.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18134__auto__){
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

quantum.core.thread.async.TerminationRequest.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18135__auto__,other__18136__auto__){
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

quantum.core.thread.async.TerminationRequest.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18148__auto__,k__18149__auto__){
var self__ = this;
var this__18148__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__18149__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18148__auto____$1),self__.__meta),k__18149__auto__);
} else {
return (new quantum.core.thread.async.TerminationRequest(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18149__auto__)),null));
}
});

quantum.core.thread.async.TerminationRequest.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18146__auto__,k__18147__auto__,G__44050){
var self__ = this;
var this__18146__auto____$1 = this;
var pred__44054 = cljs.core.keyword_identical_QMARK_;
var expr__44055 = k__18147__auto__;
return (new quantum.core.thread.async.TerminationRequest(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18147__auto__,G__44050),null));
});

quantum.core.thread.async.TerminationRequest.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18151__auto__){
var self__ = this;
var this__18151__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

quantum.core.thread.async.TerminationRequest.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18138__auto__,G__44050){
var self__ = this;
var this__18138__auto____$1 = this;
return (new quantum.core.thread.async.TerminationRequest(G__44050,self__.__extmap,self__.__hash));
});

quantum.core.thread.async.TerminationRequest.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18144__auto__,entry__18145__auto__){
var self__ = this;
var this__18144__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18145__auto__)){
return cljs.core._assoc.call(null,this__18144__auto____$1,cljs.core._nth.call(null,entry__18145__auto__,(0)),cljs.core._nth.call(null,entry__18145__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18144__auto____$1,entry__18145__auto__);
}
});

quantum.core.thread.async.TerminationRequest.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

quantum.core.thread.async.TerminationRequest.cljs$lang$type = true;

quantum.core.thread.async.TerminationRequest.cljs$lang$ctorPrSeq = (function (this__18173__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"quantum.core.thread.async/TerminationRequest");
});

quantum.core.thread.async.TerminationRequest.cljs$lang$ctorPrWriter = (function (this__18173__auto__,writer__18174__auto__){
return cljs.core._write.call(null,writer__18174__auto__,"quantum.core.thread.async/TerminationRequest");
});

quantum.core.thread.async.__GT_TerminationRequest = (function quantum$core$thread$async$__GT_TerminationRequest(){
return (new quantum.core.thread.async.TerminationRequest(null,null,null));
});

quantum.core.thread.async.map__GT_TerminationRequest = (function quantum$core$thread$async$map__GT_TerminationRequest(G__44052){
return (new quantum.core.thread.async.TerminationRequest(null,cljs.core.dissoc.call(null,G__44052),null));
});

quantum.core.thread.async.chan;
quantum.core.thread.async.take_BANG__BANG_;
quantum.core.thread.async._LT__BANG__BANG_;
var orig_var__2273__auto___44058 = new cljs.core.Var(function(){return cljs.core.async._LT__BANG_;},new cljs.core.Symbol("cljs.core.async","<!","cljs.core.async/<!",1278951036,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",-159169011,null),new cljs.core.Symbol(null,"<!","<!",-1961915773,null),"dev-resources/public/js/compiled/out/cljs/core/async.cljs",9,1,83,83,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"port","port",-1119498507,null)], null)),"takes a val from port. Must be called inside a (go ...) block. Will\n  return nil if closed. Will park if nothing is available.\n  Returns true unless port is already closed",(cljs.core.truth_(cljs.core.async._LT__BANG_)?cljs.core.async._LT__BANG_.cljs$lang$test:null)]));
quantum.core.thread.async._LT__BANG_ = cljs.core.with_meta.call(null,cljs.core.deref.call(null,new cljs.core.Var(function(){return cljs.core.async._LT__BANG_;},new cljs.core.Symbol("cljs.core.async","<!","cljs.core.async/<!",1278951036,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",-159169011,null),new cljs.core.Symbol(null,"<!","<!",-1961915773,null),"dev-resources/public/js/compiled/out/cljs/core/async.cljs",9,1,83,83,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"port","port",-1119498507,null)], null)),"takes a val from port. Must be called inside a (go ...) block. Will\n  return nil if closed. Will park if nothing is available.\n  Returns true unless port is already closed",(cljs.core.truth_(cljs.core.async._LT__BANG_)?cljs.core.async._LT__BANG_.cljs$lang$test:null)]))),cljs.core.meta.call(null,new cljs.core.Var(function(){return cljs.core.async._LT__BANG_;},new cljs.core.Symbol("cljs.core.async","<!","cljs.core.async/<!",1278951036,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",-159169011,null),new cljs.core.Symbol(null,"<!","<!",-1961915773,null),"dev-resources/public/js/compiled/out/cljs/core/async.cljs",9,1,83,83,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"port","port",-1119498507,null)], null)),"takes a val from port. Must be called inside a (go ...) block. Will\n  return nil if closed. Will park if nothing is available.\n  Returns true unless port is already closed",(cljs.core.truth_(cljs.core.async._LT__BANG_)?cljs.core.async._LT__BANG_.cljs$lang$test:null)]))));

if(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,orig_var__2273__auto___44058)) === true){
cljs.core.alter_meta_BANG_.call(null,new cljs.core.Var(function(){return quantum.core.thread.async._LT__BANG_;},new cljs.core.Symbol("quantum.core.thread.async","<!","quantum.core.thread.async/<!",161194615,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"quantum.core.thread.async","quantum.core.thread.async",1125192763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Asynchronous things.",new cljs.core.Keyword(null,"attribution","attribution",1937239286),"Alex Gunnarson"], null)),new cljs.core.Symbol(null,"<!","<!",-1961915773,null),"/Users/alexandergunnarson/Development/Source Code Projects/byu/CS 360/Project0/src/cljc/quantum/core/thread/async.cljc",13,1,103,103,cljs.core.List.EMPTY,null,(cljs.core.truth_(quantum.core.thread.async._LT__BANG_)?quantum.core.thread.async._LT__BANG_.cljs$lang$test:null)])),cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
} else {
}


new cljs.core.Var(function(){return quantum.core.thread.async._LT__BANG_;},new cljs.core.Symbol("quantum.core.thread.async","<!","quantum.core.thread.async/<!",161194615,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"quantum.core.thread.async","quantum.core.thread.async",1125192763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Asynchronous things.",new cljs.core.Keyword(null,"attribution","attribution",1937239286),"Alex Gunnarson"], null)),new cljs.core.Symbol(null,"<!","<!",-1961915773,null),"/Users/alexandergunnarson/Development/Source Code Projects/byu/CS 360/Project0/src/cljc/quantum/core/thread/async.cljc",13,1,103,103,cljs.core.List.EMPTY,null,(cljs.core.truth_(quantum.core.thread.async._LT__BANG_)?quantum.core.thread.async._LT__BANG_.cljs$lang$test:null)]));
quantum.core.thread.async.empty_BANG_;
quantum.core.thread.async.put_BANG__BANG_;
quantum.core.thread.async._GT__BANG__BANG_;
var orig_var__2273__auto___44059 = new cljs.core.Var(function(){return cljs.core.async._GT__BANG_;},new cljs.core.Symbol("cljs.core.async",">!","cljs.core.async/>!",-950205298,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",-159169011,null),new cljs.core.Symbol(null,">!",">!",-1080922249,null),"dev-resources/public/js/compiled/out/cljs/core/async.cljs",9,1,108,108,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"port","port",-1119498507,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null)),"puts a val into port. nil values are not allowed. Must be called\n  inside a (go ...) block. Will park if no buffer space is available.\n  Returns true unless port is already closed.",(cljs.core.truth_(cljs.core.async._GT__BANG_)?cljs.core.async._GT__BANG_.cljs$lang$test:null)]));
quantum.core.thread.async._GT__BANG_ = cljs.core.with_meta.call(null,cljs.core.deref.call(null,new cljs.core.Var(function(){return cljs.core.async._GT__BANG_;},new cljs.core.Symbol("cljs.core.async",">!","cljs.core.async/>!",-950205298,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",-159169011,null),new cljs.core.Symbol(null,">!",">!",-1080922249,null),"dev-resources/public/js/compiled/out/cljs/core/async.cljs",9,1,108,108,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"port","port",-1119498507,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null)),"puts a val into port. nil values are not allowed. Must be called\n  inside a (go ...) block. Will park if no buffer space is available.\n  Returns true unless port is already closed.",(cljs.core.truth_(cljs.core.async._GT__BANG_)?cljs.core.async._GT__BANG_.cljs$lang$test:null)]))),cljs.core.meta.call(null,new cljs.core.Var(function(){return cljs.core.async._GT__BANG_;},new cljs.core.Symbol("cljs.core.async",">!","cljs.core.async/>!",-950205298,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",-159169011,null),new cljs.core.Symbol(null,">!",">!",-1080922249,null),"dev-resources/public/js/compiled/out/cljs/core/async.cljs",9,1,108,108,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"port","port",-1119498507,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null)),"puts a val into port. nil values are not allowed. Must be called\n  inside a (go ...) block. Will park if no buffer space is available.\n  Returns true unless port is already closed.",(cljs.core.truth_(cljs.core.async._GT__BANG_)?cljs.core.async._GT__BANG_.cljs$lang$test:null)]))));

if(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,orig_var__2273__auto___44059)) === true){
cljs.core.alter_meta_BANG_.call(null,new cljs.core.Var(function(){return quantum.core.thread.async._GT__BANG_;},new cljs.core.Symbol("quantum.core.thread.async",">!","quantum.core.thread.async/>!",956203139,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"quantum.core.thread.async","quantum.core.thread.async",1125192763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Asynchronous things.",new cljs.core.Keyword(null,"attribution","attribution",1937239286),"Alex Gunnarson"], null)),new cljs.core.Symbol(null,">!",">!",-1080922249,null),"/Users/alexandergunnarson/Development/Source Code Projects/byu/CS 360/Project0/src/cljc/quantum/core/thread/async.cljc",13,1,124,124,cljs.core.List.EMPTY,null,(cljs.core.truth_(quantum.core.thread.async._GT__BANG_)?quantum.core.thread.async._GT__BANG_.cljs$lang$test:null)])),cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
} else {
}


new cljs.core.Var(function(){return quantum.core.thread.async._GT__BANG_;},new cljs.core.Symbol("quantum.core.thread.async",">!","quantum.core.thread.async/>!",956203139,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"quantum.core.thread.async","quantum.core.thread.async",1125192763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Asynchronous things.",new cljs.core.Keyword(null,"attribution","attribution",1937239286),"Alex Gunnarson"], null)),new cljs.core.Symbol(null,">!",">!",-1080922249,null),"/Users/alexandergunnarson/Development/Source Code Projects/byu/CS 360/Project0/src/cljc/quantum/core/thread/async.cljc",13,1,124,124,cljs.core.List.EMPTY,null,(cljs.core.truth_(quantum.core.thread.async._GT__BANG_)?quantum.core.thread.async._GT__BANG_.cljs$lang$test:null)]));
quantum.core.thread.async.message_QMARK_;
quantum.core.thread.async.close_req_QMARK_ = cljs.core.partial.call(null,cljs.core.instance_QMARK_,quantum.core.thread.async.QueueCloseRequest);
quantum.core.thread.async.peek_BANG__BANG_;
quantum.core.thread.async.interrupt_BANG_;
quantum.core.thread.async.close_BANG_;
quantum.core.thread.async.closed_QMARK_;
quantum.core.thread.async.alts_BANG__BANG_;
var orig_var__2273__auto___44060 = new cljs.core.Var(function(){return cljs.core.async.timeout;},new cljs.core.Symbol("cljs.core.async","timeout","cljs.core.async/timeout",-2129255094,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",-159169011,null),new cljs.core.Symbol(null,"timeout","timeout",1321906209,null),"dev-resources/public/js/compiled/out/cljs/core/async.cljs",14,1,78,78,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"msecs","msecs",-942455216,null)], null)),"Returns a channel that will close after msecs",(cljs.core.truth_(cljs.core.async.timeout)?cljs.core.async.timeout.cljs$lang$test:null)]));
quantum.core.thread.async.timeout = cljs.core.with_meta.call(null,cljs.core.deref.call(null,new cljs.core.Var(function(){return cljs.core.async.timeout;},new cljs.core.Symbol("cljs.core.async","timeout","cljs.core.async/timeout",-2129255094,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",-159169011,null),new cljs.core.Symbol(null,"timeout","timeout",1321906209,null),"dev-resources/public/js/compiled/out/cljs/core/async.cljs",14,1,78,78,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"msecs","msecs",-942455216,null)], null)),"Returns a channel that will close after msecs",(cljs.core.truth_(cljs.core.async.timeout)?cljs.core.async.timeout.cljs$lang$test:null)]))),cljs.core.meta.call(null,new cljs.core.Var(function(){return cljs.core.async.timeout;},new cljs.core.Symbol("cljs.core.async","timeout","cljs.core.async/timeout",-2129255094,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core.async","cljs.core.async",-159169011,null),new cljs.core.Symbol(null,"timeout","timeout",1321906209,null),"dev-resources/public/js/compiled/out/cljs/core/async.cljs",14,1,78,78,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"msecs","msecs",-942455216,null)], null)),"Returns a channel that will close after msecs",(cljs.core.truth_(cljs.core.async.timeout)?cljs.core.async.timeout.cljs$lang$test:null)]))));

if(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,orig_var__2273__auto___44060)) === true){
cljs.core.alter_meta_BANG_.call(null,new cljs.core.Var(function(){return quantum.core.thread.async.timeout;},new cljs.core.Symbol("quantum.core.thread.async","timeout","quantum.core.thread.async/timeout",-864638635,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"quantum.core.thread.async","quantum.core.thread.async",1125192763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Asynchronous things.",new cljs.core.Keyword(null,"attribution","attribution",1937239286),"Alex Gunnarson"], null)),new cljs.core.Symbol(null,"timeout","timeout",1321906209,null),"/Users/alexandergunnarson/Development/Source Code Projects/byu/CS 360/Project0/src/cljc/quantum/core/thread/async.cljc",18,1,260,260,cljs.core.List.EMPTY,null,(cljs.core.truth_(quantum.core.thread.async.timeout)?quantum.core.thread.async.timeout.cljs$lang$test:null)])),cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
} else {
}


new cljs.core.Var(function(){return quantum.core.thread.async.timeout;},new cljs.core.Symbol("quantum.core.thread.async","timeout","quantum.core.thread.async/timeout",-864638635,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"quantum.core.thread.async","quantum.core.thread.async",1125192763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Asynchronous things.",new cljs.core.Keyword(null,"attribution","attribution",1937239286),"Alex Gunnarson"], null)),new cljs.core.Symbol(null,"timeout","timeout",1321906209,null),"/Users/alexandergunnarson/Development/Source Code Projects/byu/CS 360/Project0/src/cljc/quantum/core/thread/async.cljc",18,1,260,260,cljs.core.List.EMPTY,null,(cljs.core.truth_(quantum.core.thread.async.timeout)?quantum.core.thread.async.timeout.cljs$lang$test:null)]));
/**
 * Executes functions @fs concurrently, waiting on the slowest one to finish.
 * Returns a vector of the results.
 * 
 * Note: The example should only take 2 seconds, not 3.
 */
quantum.core.thread.async.concur = (function quantum$core$thread$async$concur(var_args){
var args__18590__auto__ = [];
var len__18583__auto___44075 = arguments.length;
var i__18584__auto___44076 = (0);
while(true){
if((i__18584__auto___44076 < len__18583__auto___44075)){
args__18590__auto__.push((arguments[i__18584__auto___44076]));

var G__44077 = (i__18584__auto___44076 + (1));
i__18584__auto___44076 = G__44077;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.core.thread.async.concur.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.core.thread.async.concur.cljs$core$IFn$_invoke$arity$variadic = (function (fs){
return cljs.core.mapv.call(null,(function (p1__44062_SHARP_){
return cljs.core.async._LT__BANG_.call(null,p1__44062_SHARP_);
}),cljs.core.mapv.call(null,(function (f){
var c__19849__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19849__auto__){
return (function (){
var f__19850__auto__ = (function (){var switch__19828__auto__ = ((function (c__19849__auto__){
return (function (state_44066){
var state_val_44067 = (state_44066[(1)]);
if((state_val_44067 === (1))){
var inst_44064 = f.call(null);
var state_44066__$1 = state_44066;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44066__$1,inst_44064);
} else {
return null;
}
});})(c__19849__auto__))
;
return ((function (switch__19828__auto__,c__19849__auto__){
return (function() {
var quantum$core$thread$async$state_machine__19829__auto__ = null;
var quantum$core$thread$async$state_machine__19829__auto____0 = (function (){
var statearr_44071 = [null,null,null,null,null,null,null];
(statearr_44071[(0)] = quantum$core$thread$async$state_machine__19829__auto__);

(statearr_44071[(1)] = (1));

return statearr_44071;
});
var quantum$core$thread$async$state_machine__19829__auto____1 = (function (state_44066){
while(true){
var ret_value__19830__auto__ = (function (){try{while(true){
var result__19831__auto__ = switch__19828__auto__.call(null,state_44066);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19831__auto__;
}
break;
}
}catch (e44072){if((e44072 instanceof Object)){
var ex__19832__auto__ = e44072;
var statearr_44073_44078 = state_44066;
(statearr_44073_44078[(5)] = ex__19832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44066);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44072;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44079 = state_44066;
state_44066 = G__44079;
continue;
} else {
return ret_value__19830__auto__;
}
break;
}
});
quantum$core$thread$async$state_machine__19829__auto__ = function(state_44066){
switch(arguments.length){
case 0:
return quantum$core$thread$async$state_machine__19829__auto____0.call(this);
case 1:
return quantum$core$thread$async$state_machine__19829__auto____1.call(this,state_44066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
quantum$core$thread$async$state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$0 = quantum$core$thread$async$state_machine__19829__auto____0;
quantum$core$thread$async$state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$1 = quantum$core$thread$async$state_machine__19829__auto____1;
return quantum$core$thread$async$state_machine__19829__auto__;
})()
;})(switch__19828__auto__,c__19849__auto__))
})();
var state__19851__auto__ = (function (){var statearr_44074 = f__19850__auto__.call(null);
(statearr_44074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19849__auto__);

return statearr_44074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19851__auto__);
});})(c__19849__auto__))
);

return c__19849__auto__;
}),fs));
});

quantum.core.thread.async.concur.cljs$lang$maxFixedArity = (0);

quantum.core.thread.async.concur.cljs$lang$applyTo = (function (seq44063){
return quantum.core.thread.async.concur.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44063));
});
quantum.core.thread.async.web_workers_set_up_QMARK_ = cljs.core.atom.call(null,false);
var orig_var__2273__auto___44080 = new cljs.core.Var(function(){return servant.core.webworker_QMARK_;},new cljs.core.Symbol("servant.core","webworker?","servant.core/webworker?",-2076643450,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"servant.core","servant.core",709595250,null),new cljs.core.Symbol(null,"webworker?","webworker?",-150417670,null),"dev-resources/public/js/compiled/out/servant/core.cljs",17,1,8,8,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(servant.core.webworker_QMARK_)?servant.core.webworker_QMARK_.cljs$lang$test:null)]));
quantum.core.thread.async.web_worker_QMARK_ = cljs.core.with_meta.call(null,cljs.core.deref.call(null,new cljs.core.Var(function(){return servant.core.webworker_QMARK_;},new cljs.core.Symbol("servant.core","webworker?","servant.core/webworker?",-2076643450,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"servant.core","servant.core",709595250,null),new cljs.core.Symbol(null,"webworker?","webworker?",-150417670,null),"dev-resources/public/js/compiled/out/servant/core.cljs",17,1,8,8,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(servant.core.webworker_QMARK_)?servant.core.webworker_QMARK_.cljs$lang$test:null)]))),cljs.core.meta.call(null,new cljs.core.Var(function(){return servant.core.webworker_QMARK_;},new cljs.core.Symbol("servant.core","webworker?","servant.core/webworker?",-2076643450,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"servant.core","servant.core",709595250,null),new cljs.core.Symbol(null,"webworker?","webworker?",-150417670,null),"dev-resources/public/js/compiled/out/servant/core.cljs",17,1,8,8,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(servant.core.webworker_QMARK_)?servant.core.webworker_QMARK_.cljs$lang$test:null)]))));

if(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,orig_var__2273__auto___44080)) === true){
cljs.core.alter_meta_BANG_.call(null,new cljs.core.Var(function(){return quantum.core.thread.async.web_worker_QMARK_;},new cljs.core.Symbol("quantum.core.thread.async","web-worker?","quantum.core.thread.async/web-worker?",-1873667899,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"quantum.core.thread.async","quantum.core.thread.async",1125192763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Asynchronous things.",new cljs.core.Keyword(null,"attribution","attribution",1937239286),"Alex Gunnarson"], null)),new cljs.core.Symbol(null,"web-worker?","web-worker?",315490385,null),"/Users/alexandergunnarson/Development/Source Code Projects/byu/CS 360/Project0/src/cljc/quantum/core/thread/async.cljc",31,10,293,293,cljs.core.List.EMPTY,null,(cljs.core.truth_(quantum.core.thread.async.web_worker_QMARK_)?quantum.core.thread.async.web_worker_QMARK_.cljs$lang$test:null)])),cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
} else {
}


new cljs.core.Var(function(){return quantum.core.thread.async.web_worker_QMARK_;},new cljs.core.Symbol("quantum.core.thread.async","web-worker?","quantum.core.thread.async/web-worker?",-1873667899,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"quantum.core.thread.async","quantum.core.thread.async",1125192763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Asynchronous things.",new cljs.core.Keyword(null,"attribution","attribution",1937239286),"Alex Gunnarson"], null)),new cljs.core.Symbol(null,"web-worker?","web-worker?",315490385,null),"/Users/alexandergunnarson/Development/Source Code Projects/byu/CS 360/Project0/src/cljc/quantum/core/thread/async.cljc",31,10,293,293,cljs.core.List.EMPTY,null,(cljs.core.truth_(quantum.core.thread.async.web_worker_QMARK_)?quantum.core.thread.async.web_worker_QMARK_.cljs$lang$test:null)]));
var orig_var__2273__auto___44081 = new cljs.core.Var(function(){return servant.worker.bootstrap;},new cljs.core.Symbol("servant.worker","bootstrap","servant.worker/bootstrap",491793044,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"servant.worker","servant.worker",1013225929,null),new cljs.core.Symbol(null,"bootstrap","bootstrap",1177952399,null),"dev-resources/public/js/compiled/out/servant/worker.cljs",16,1,30,30,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(servant.worker.bootstrap)?servant.worker.bootstrap.cljs$lang$test:null)]));
quantum.core.thread.async.bootstrap_worker = cljs.core.with_meta.call(null,cljs.core.deref.call(null,new cljs.core.Var(function(){return servant.worker.bootstrap;},new cljs.core.Symbol("servant.worker","bootstrap","servant.worker/bootstrap",491793044,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"servant.worker","servant.worker",1013225929,null),new cljs.core.Symbol(null,"bootstrap","bootstrap",1177952399,null),"dev-resources/public/js/compiled/out/servant/worker.cljs",16,1,30,30,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(servant.worker.bootstrap)?servant.worker.bootstrap.cljs$lang$test:null)]))),cljs.core.meta.call(null,new cljs.core.Var(function(){return servant.worker.bootstrap;},new cljs.core.Symbol("servant.worker","bootstrap","servant.worker/bootstrap",491793044,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"servant.worker","servant.worker",1013225929,null),new cljs.core.Symbol(null,"bootstrap","bootstrap",1177952399,null),"dev-resources/public/js/compiled/out/servant/worker.cljs",16,1,30,30,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(servant.worker.bootstrap)?servant.worker.bootstrap.cljs$lang$test:null)]))));

if(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,orig_var__2273__auto___44081)) === true){
cljs.core.alter_meta_BANG_.call(null,new cljs.core.Var(function(){return quantum.core.thread.async.bootstrap_worker;},new cljs.core.Symbol("quantum.core.thread.async","bootstrap-worker","quantum.core.thread.async/bootstrap-worker",2017886338,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"quantum.core.thread.async","quantum.core.thread.async",1125192763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Asynchronous things.",new cljs.core.Keyword(null,"attribution","attribution",1937239286),"Alex Gunnarson"], null)),new cljs.core.Symbol(null,"bootstrap-worker","bootstrap-worker",-168126090,null),"/Users/alexandergunnarson/Development/Source Code Projects/byu/CS 360/Project0/src/cljc/quantum/core/thread/async.cljc",36,10,294,294,cljs.core.List.EMPTY,null,(cljs.core.truth_(quantum.core.thread.async.bootstrap_worker)?quantum.core.thread.async.bootstrap_worker.cljs$lang$test:null)])),cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
} else {
}


new cljs.core.Var(function(){return quantum.core.thread.async.bootstrap_worker;},new cljs.core.Symbol("quantum.core.thread.async","bootstrap-worker","quantum.core.thread.async/bootstrap-worker",2017886338,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"quantum.core.thread.async","quantum.core.thread.async",1125192763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Asynchronous things.",new cljs.core.Keyword(null,"attribution","attribution",1937239286),"Alex Gunnarson"], null)),new cljs.core.Symbol(null,"bootstrap-worker","bootstrap-worker",-168126090,null),"/Users/alexandergunnarson/Development/Source Code Projects/byu/CS 360/Project0/src/cljc/quantum/core/thread/async.cljc",36,10,294,294,cljs.core.List.EMPTY,null,(cljs.core.truth_(quantum.core.thread.async.bootstrap_worker)?quantum.core.thread.async.bootstrap_worker.cljs$lang$test:null)]));

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
quantum.core.thread.async.Threadpool = (function (thread_ct,threads,script_src,__meta,__extmap,__hash){
this.thread_ct = thread_ct;
this.threads = threads;
this.script_src = script_src;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
quantum.core.thread.async.Threadpool.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18139__auto__,k__18140__auto__){
var self__ = this;
var this__18139__auto____$1 = this;
return cljs.core._lookup.call(null,this__18139__auto____$1,k__18140__auto__,null);
});

quantum.core.thread.async.Threadpool.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18141__auto__,k44083,else__18142__auto__){
var self__ = this;
var this__18141__auto____$1 = this;
var G__44085 = (((k44083 instanceof cljs.core.Keyword))?k44083.fqn:null);
switch (G__44085) {
case "thread-ct":
return self__.thread_ct;

break;
case "threads":
return self__.threads;

break;
case "script-src":
return self__.script_src;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k44083,else__18142__auto__);

}
});

quantum.core.thread.async.Threadpool.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18153__auto__,writer__18154__auto__,opts__18155__auto__){
var self__ = this;
var this__18153__auto____$1 = this;
var pr_pair__18156__auto__ = ((function (this__18153__auto____$1){
return (function (keyval__18157__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,cljs.core.pr_writer,""," ","",opts__18155__auto__,keyval__18157__auto__);
});})(this__18153__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,pr_pair__18156__auto__,"#quantum.core.thread.async.Threadpool{",", ","}",opts__18155__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"thread-ct","thread-ct",-1887172122),self__.thread_ct],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"threads","threads",-1717798734),self__.threads],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"script-src","script-src",349131362),self__.script_src],null))], null),self__.__extmap));
});

quantum.core.thread.async.Threadpool.prototype.cljs$core$IIterable$ = true;

quantum.core.thread.async.Threadpool.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44082){
var self__ = this;
var G__44082__$1 = this;
return (new cljs.core.RecordIter((0),G__44082__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thread-ct","thread-ct",-1887172122),new cljs.core.Keyword(null,"threads","threads",-1717798734),new cljs.core.Keyword(null,"script-src","script-src",349131362)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

quantum.core.thread.async.Threadpool.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18137__auto__){
var self__ = this;
var this__18137__auto____$1 = this;
return self__.__meta;
});

quantum.core.thread.async.Threadpool.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18133__auto__){
var self__ = this;
var this__18133__auto____$1 = this;
return (new quantum.core.thread.async.Threadpool(self__.thread_ct,self__.threads,self__.script_src,self__.__meta,self__.__extmap,self__.__hash));
});

quantum.core.thread.async.Threadpool.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18143__auto__){
var self__ = this;
var this__18143__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

quantum.core.thread.async.Threadpool.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18134__auto__){
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

quantum.core.thread.async.Threadpool.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18135__auto__,other__18136__auto__){
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

quantum.core.thread.async.Threadpool.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18148__auto__,k__18149__auto__){
var self__ = this;
var this__18148__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"script-src","script-src",349131362),null,new cljs.core.Keyword(null,"thread-ct","thread-ct",-1887172122),null,new cljs.core.Keyword(null,"threads","threads",-1717798734),null], null), null),k__18149__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18148__auto____$1),self__.__meta),k__18149__auto__);
} else {
return (new quantum.core.thread.async.Threadpool(self__.thread_ct,self__.threads,self__.script_src,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18149__auto__)),null));
}
});

quantum.core.thread.async.Threadpool.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18146__auto__,k__18147__auto__,G__44082){
var self__ = this;
var this__18146__auto____$1 = this;
var pred__44086 = cljs.core.keyword_identical_QMARK_;
var expr__44087 = k__18147__auto__;
if(cljs.core.truth_(pred__44086.call(null,new cljs.core.Keyword(null,"thread-ct","thread-ct",-1887172122),expr__44087))){
return (new quantum.core.thread.async.Threadpool(G__44082,self__.threads,self__.script_src,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44086.call(null,new cljs.core.Keyword(null,"threads","threads",-1717798734),expr__44087))){
return (new quantum.core.thread.async.Threadpool(self__.thread_ct,G__44082,self__.script_src,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44086.call(null,new cljs.core.Keyword(null,"script-src","script-src",349131362),expr__44087))){
return (new quantum.core.thread.async.Threadpool(self__.thread_ct,self__.threads,G__44082,self__.__meta,self__.__extmap,null));
} else {
return (new quantum.core.thread.async.Threadpool(self__.thread_ct,self__.threads,self__.script_src,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18147__auto__,G__44082),null));
}
}
}
});

quantum.core.thread.async.Threadpool.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18151__auto__){
var self__ = this;
var this__18151__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"thread-ct","thread-ct",-1887172122),self__.thread_ct],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"threads","threads",-1717798734),self__.threads],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"script-src","script-src",349131362),self__.script_src],null))], null),self__.__extmap));
});

quantum.core.thread.async.Threadpool.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18138__auto__,G__44082){
var self__ = this;
var this__18138__auto____$1 = this;
return (new quantum.core.thread.async.Threadpool(self__.thread_ct,self__.threads,self__.script_src,G__44082,self__.__extmap,self__.__hash));
});

quantum.core.thread.async.Threadpool.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18144__auto__,entry__18145__auto__){
var self__ = this;
var this__18144__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18145__auto__)){
return cljs.core._assoc.call(null,this__18144__auto____$1,cljs.core._nth.call(null,entry__18145__auto__,(0)),cljs.core._nth.call(null,entry__18145__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18144__auto____$1,entry__18145__auto__);
}
});

quantum.core.thread.async.Threadpool.prototype.com$stuartsierra$component$Lifecycle$ = true;

quantum.core.thread.async.Threadpool.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__17513__auto__ = quantum.core.thread.async.web_worker_QMARK_.call(null);
if(cljs.core.truth_(and__17513__auto__)){
return (((function (and__17513__auto__,this$__$1){
return (function (G__44090){
return (typeof G__44090 === 'number') && ((G__44090 > (0)));
});})(and__17513__auto__,this$__$1))
.call(null,self__.thread_ct)) && (cljs.core.not.call(null,cljs.core.deref.call(null,quantum.core.thread.async.web_workers_set_up_QMARK_)));
} else {
return and__17513__auto__;
}
})())){
quantum.core.log.pr_STAR_.call(null,true,false,cljs.core.println,new cljs.core.Keyword(null,"user","user",1532431356),(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"Bootstrapping web workers");
});})(this$__$1))
,null)),null);

quantum.core.thread.async.bootstrap_worker.call(null);

cljs.core.reset_BANG_.call(null,quantum.core.thread.async.web_workers_set_up_QMARK_,true);
} else {
}

if(cljs.core.truth_(servant.core.webworker_QMARK_.call(null))){
return this$__$1;
} else {
quantum.core.log.pr_STAR_.call(null,true,false,cljs.core.println,new cljs.core.Keyword(null,"debug","debug",-1608172596),(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"-thread web-worker threadpool"),self__.thread_ct),"Spawning");
});})(this$__$1))
,null)),null);

return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"threads","threads",-1717798734),servant.core.spawn_servants.call(null,self__.thread_ct,self__.script_src));
}
});

quantum.core.thread.async.Threadpool.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.threads)){
quantum.core.log.pr_STAR_.call(null,true,false,cljs.core.println,new cljs.core.Keyword(null,"debug","debug",-1608172596),(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"-thread web-worker threadpool"),self__.thread_ct),"Destroying");
});})(this$__$1))
,null)),null);

servant.core.kill_servants.call(null,self__.threads,self__.thread_ct);
} else {
}

return this$__$1;
});

quantum.core.thread.async.Threadpool.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"thread-ct","thread-ct",-246640595,null),new cljs.core.Symbol(null,"threads","threads",-77267207,null),new cljs.core.Symbol(null,"script-src","script-src",1989662889,null)], null);
});

quantum.core.thread.async.Threadpool.cljs$lang$type = true;

quantum.core.thread.async.Threadpool.cljs$lang$ctorPrSeq = (function (this__18173__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"quantum.core.thread.async/Threadpool");
});

quantum.core.thread.async.Threadpool.cljs$lang$ctorPrWriter = (function (this__18173__auto__,writer__18174__auto__){
return cljs.core._write.call(null,writer__18174__auto__,"quantum.core.thread.async/Threadpool");
});

quantum.core.thread.async.__GT_Threadpool = (function quantum$core$thread$async$__GT_Threadpool(thread_ct,threads,script_src){
return (new quantum.core.thread.async.Threadpool(thread_ct,threads,script_src,null,null,null));
});

quantum.core.thread.async.map__GT_Threadpool = (function quantum$core$thread$async$map__GT_Threadpool(G__44084){
return (new quantum.core.thread.async.Threadpool(new cljs.core.Keyword(null,"thread-ct","thread-ct",-1887172122).cljs$core$IFn$_invoke$arity$1(G__44084),new cljs.core.Keyword(null,"threads","threads",-1717798734).cljs$core$IFn$_invoke$arity$1(G__44084),new cljs.core.Keyword(null,"script-src","script-src",349131362).cljs$core$IFn$_invoke$arity$1(G__44084),null,cljs.core.dissoc.call(null,G__44084,new cljs.core.Keyword(null,"thread-ct","thread-ct",-1887172122),new cljs.core.Keyword(null,"threads","threads",-1717798734),new cljs.core.Keyword(null,"script-src","script-src",349131362)),null));
});

quantum.core.thread.async.__GT_threadpool = (function quantum$core$thread$async$__GT_threadpool(p__44092){
var map__44096 = p__44092;
var map__44096__$1 = ((((!((map__44096 == null)))?((((map__44096.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44096.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44096):map__44096);
var opts = map__44096__$1;
var thread_ct = cljs.core.get.call(null,map__44096__$1,new cljs.core.Keyword(null,"thread-ct","thread-ct",-1887172122));
var script_src = cljs.core.get.call(null,map__44096__$1,new cljs.core.Keyword(null,"script-src","script-src",349131362));
if(((function (map__44096,map__44096__$1,opts,thread_ct,script_src){
return (function (G__44098){
return ((G__44098 == null)) || (cljs.core.integer_QMARK_.call(null,G__44098));
});})(map__44096,map__44096__$1,opts,thread_ct,script_src))
.call(null,thread_ct)){
} else {
throw quantum.core.error.__GT_ex.call(null,new cljs.core.Keyword(null,"assertion-error","assertion-error",1846873368),"Assertion not satisfied: ((fn-or nil? integer?) thread-ct)",cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.keyword,cljs.core.list(new cljs.core.Symbol(null,"thread-ct","thread-ct",-246640595,null))),cljs.core._conj.call(null,cljs.core.List.EMPTY,thread_ct)));
}

if(typeof script_src === 'string'){
} else {
throw quantum.core.error.__GT_ex.call(null,new cljs.core.Keyword(null,"assertion-error","assertion-error",1846873368),"Assertion not satisfied: (string? script-src)",cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.keyword,cljs.core.list(new cljs.core.Symbol(null,"script-src","script-src",1989662889,null))),cljs.core._conj.call(null,cljs.core.List.EMPTY,script_src)));
}

if((thread_ct > (0))){
return quantum.core.thread.async.map__GT_Threadpool.call(null,opts);
} else {
return null;
}
});
/**
 * The global web worker dispatch fn
 */
quantum.core.thread.async.dispatch = (function quantum$core$thread$async$dispatch(f){
return f.call(null);
});

servant.worker.register_servant_fn.call(null,"dispatch",quantum.core.thread.async.dispatch);

//# sourceMappingURL=async.js.map?rel=1452702572936
/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn err logic vec err log cmacros]
*/
