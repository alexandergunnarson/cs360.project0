// Compiled by ClojureScript 1.7.170 {}

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns core-async log err res]
*/
goog.provide('quantum.core.io.core');
goog.require('cljs.core');
goog.require('quantum.core.resources');
goog.require('cljs.core.async');
goog.require('clojure.core.rrb_vector');
goog.require('quantum.core.log');
goog.require('cljs.core');
goog.require('datascript.core');
goog.require('quantum.db.datomic');
goog.require('quantum.core.convert');
goog.require('quantum.core.ns');
goog.require('quantum.core.error');
goog.require('com.stuartsierra.component');
/**
 * Persists @x between page reloads.
 * Saves to js/localStorage as key @k.
 */
quantum.core.io.core.persist_BANG_ = (function quantum$core$io$core$persist_BANG_(k,x){
return localStorage.setItem(quantum.core.convert.__GT_name.call(null,k),quantum.core.convert.__GT_str.call(null,x));
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
quantum.core.io.core.Persister = (function (persist_key,persist_class,persist_data,opts,__meta,__extmap,__hash){
this.persist_key = persist_key;
this.persist_class = persist_class;
this.persist_data = persist_data;
this.opts = opts;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
quantum.core.io.core.Persister.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18139__auto__,k__18140__auto__){
var self__ = this;
var this__18139__auto____$1 = this;
return cljs.core._lookup.call(null,this__18139__auto____$1,k__18140__auto__,null);
});

quantum.core.io.core.Persister.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18141__auto__,k47370,else__18142__auto__){
var self__ = this;
var this__18141__auto____$1 = this;
var G__47372 = (((k47370 instanceof cljs.core.Keyword))?k47370.fqn:null);
switch (G__47372) {
case "persist-key":
return self__.persist_key;

break;
case "persist-class":
return self__.persist_class;

break;
case "persist-data":
return self__.persist_data;

break;
case "opts":
return self__.opts;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k47370,else__18142__auto__);

}
});

quantum.core.io.core.Persister.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18153__auto__,writer__18154__auto__,opts__18155__auto__){
var self__ = this;
var this__18153__auto____$1 = this;
var pr_pair__18156__auto__ = ((function (this__18153__auto____$1){
return (function (keyval__18157__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,cljs.core.pr_writer,""," ","",opts__18155__auto__,keyval__18157__auto__);
});})(this__18153__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,pr_pair__18156__auto__,"#quantum.core.io.core.Persister{",", ","}",opts__18155__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"persist-key","persist-key",892698184),self__.persist_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"persist-class","persist-class",-2147151604),self__.persist_class],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"persist-data","persist-data",1193574573),self__.persist_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts],null))], null),self__.__extmap));
});

quantum.core.io.core.Persister.prototype.cljs$core$IIterable$ = true;

quantum.core.io.core.Persister.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47369){
var self__ = this;
var G__47369__$1 = this;
return (new cljs.core.RecordIter((0),G__47369__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"persist-key","persist-key",892698184),new cljs.core.Keyword(null,"persist-class","persist-class",-2147151604),new cljs.core.Keyword(null,"persist-data","persist-data",1193574573),new cljs.core.Keyword(null,"opts","opts",155075701)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

quantum.core.io.core.Persister.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18137__auto__){
var self__ = this;
var this__18137__auto____$1 = this;
return self__.__meta;
});

quantum.core.io.core.Persister.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18133__auto__){
var self__ = this;
var this__18133__auto____$1 = this;
return (new quantum.core.io.core.Persister(self__.persist_key,self__.persist_class,self__.persist_data,self__.opts,self__.__meta,self__.__extmap,self__.__hash));
});

quantum.core.io.core.Persister.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18143__auto__){
var self__ = this;
var this__18143__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

quantum.core.io.core.Persister.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18134__auto__){
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

quantum.core.io.core.Persister.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18135__auto__,other__18136__auto__){
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

quantum.core.io.core.Persister.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18148__auto__,k__18149__auto__){
var self__ = this;
var this__18148__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"persist-key","persist-key",892698184),null,new cljs.core.Keyword(null,"persist-class","persist-class",-2147151604),null,new cljs.core.Keyword(null,"persist-data","persist-data",1193574573),null,new cljs.core.Keyword(null,"opts","opts",155075701),null], null), null),k__18149__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18148__auto____$1),self__.__meta),k__18149__auto__);
} else {
return (new quantum.core.io.core.Persister(self__.persist_key,self__.persist_class,self__.persist_data,self__.opts,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18149__auto__)),null));
}
});

quantum.core.io.core.Persister.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18146__auto__,k__18147__auto__,G__47369){
var self__ = this;
var this__18146__auto____$1 = this;
var pred__47373 = cljs.core.keyword_identical_QMARK_;
var expr__47374 = k__18147__auto__;
if(cljs.core.truth_(pred__47373.call(null,new cljs.core.Keyword(null,"persist-key","persist-key",892698184),expr__47374))){
return (new quantum.core.io.core.Persister(G__47369,self__.persist_class,self__.persist_data,self__.opts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__47373.call(null,new cljs.core.Keyword(null,"persist-class","persist-class",-2147151604),expr__47374))){
return (new quantum.core.io.core.Persister(self__.persist_key,G__47369,self__.persist_data,self__.opts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__47373.call(null,new cljs.core.Keyword(null,"persist-data","persist-data",1193574573),expr__47374))){
return (new quantum.core.io.core.Persister(self__.persist_key,self__.persist_class,G__47369,self__.opts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__47373.call(null,new cljs.core.Keyword(null,"opts","opts",155075701),expr__47374))){
return (new quantum.core.io.core.Persister(self__.persist_key,self__.persist_class,self__.persist_data,G__47369,self__.__meta,self__.__extmap,null));
} else {
return (new quantum.core.io.core.Persister(self__.persist_key,self__.persist_class,self__.persist_data,self__.opts,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18147__auto__,G__47369),null));
}
}
}
}
});

quantum.core.io.core.Persister.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18151__auto__){
var self__ = this;
var this__18151__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"persist-key","persist-key",892698184),self__.persist_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"persist-class","persist-class",-2147151604),self__.persist_class],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"persist-data","persist-data",1193574573),self__.persist_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts],null))], null),self__.__extmap));
});

quantum.core.io.core.Persister.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18138__auto__,G__47369){
var self__ = this;
var this__18138__auto____$1 = this;
return (new quantum.core.io.core.Persister(self__.persist_key,self__.persist_class,self__.persist_data,self__.opts,G__47369,self__.__extmap,self__.__hash));
});

quantum.core.io.core.Persister.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18144__auto__,entry__18145__auto__){
var self__ = this;
var this__18144__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18145__auto__)){
return cljs.core._assoc.call(null,this__18144__auto____$1,cljs.core._nth.call(null,entry__18145__auto__,(0)),cljs.core._nth.call(null,entry__18145__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18144__auto____$1,entry__18145__auto__);
}
});

quantum.core.io.core.Persister.prototype.com$stuartsierra$component$Lifecycle$ = true;

quantum.core.io.core.Persister.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var pred__47376 = cljs.core._EQ_;
var expr__47377 = self__.persist_class;
if(cljs.core.truth_(pred__47376.call(null,quantum.db.datomic.EphemeralDatabase,expr__47377))){
var map__47379 = self__.opts;
var map__47379__$1 = ((((!((map__47379 == null)))?((((map__47379.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47379.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47379):map__47379);
var schema = cljs.core.get.call(null,map__47379__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var map__47380 = self__.persist_data;
var map__47380__$1 = ((((!((map__47380 == null)))?((((map__47380.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47380.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47380):map__47380);
var db = cljs.core.get.call(null,map__47380__$1,new cljs.core.Keyword(null,"db","db",993250759));
var history = cljs.core.get.call(null,map__47380__$1,new cljs.core.Keyword(null,"history","history",-247395220));
if(cljs.core.truth_(cljs.core.get.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,db)),self__.persist_key))){
throw quantum.core.error.__GT_ex.call(null,new cljs.core.Keyword(null,"duplicate-persisters","duplicate-persisters",2063651961),"Cannot have multiple ClojureScript Persisters for DataScript database");
} else {
}

var temp__4425__auto___47395 = localStorage.getItem(quantum.core.convert.__GT_name.call(null,self__.persist_key));
if(cljs.core.truth_(temp__4425__auto___47395)){
var stored_47396 = temp__4425__auto___47395;
var stored_db_47397 = quantum.core.convert.__GT_mdb.call(null,stored_47396);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(stored_db_47397),schema)){
cljs.core.reset_BANG_.call(null,db,stored_db_47397);

cljs.core.swap_BANG_.call(null,history,cljs.core.conj,cljs.core.deref.call(null,db));

} else {
}
} else {
}

return datascript.core.listen_BANG_.call(null,db,new cljs.core.Keyword(null,"persister","persister",-963695309),((function (map__47379,map__47379__$1,schema,map__47380,map__47380__$1,db,history,pred__47376,expr__47377,this$__$1){
return (function (tx_report){
var temp__4425__auto__ = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(tx_report);
if(cljs.core.truth_(temp__4425__auto__)){
var db__$1 = temp__4425__auto__;
var c__19849__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19849__auto__,db__$1,temp__4425__auto__,map__47379,map__47379__$1,schema,map__47380,map__47380__$1,db,history,pred__47376,expr__47377,this$__$1){
return (function (){
var f__19850__auto__ = (function (){var switch__19828__auto__ = ((function (c__19849__auto__,db__$1,temp__4425__auto__,map__47379,map__47379__$1,schema,map__47380,map__47380__$1,db,history,pred__47376,expr__47377,this$__$1){
return (function (state_47385){
var state_val_47386 = (state_47385[(1)]);
if((state_val_47386 === (1))){
var inst_47383 = quantum.core.io.core.persist_BANG_.call(null,self__.persist_key,db__$1);
var state_47385__$1 = state_47385;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47385__$1,inst_47383);
} else {
return null;
}
});})(c__19849__auto__,db__$1,temp__4425__auto__,map__47379,map__47379__$1,schema,map__47380,map__47380__$1,db,history,pred__47376,expr__47377,this$__$1))
;
return ((function (switch__19828__auto__,c__19849__auto__,db__$1,temp__4425__auto__,map__47379,map__47379__$1,schema,map__47380,map__47380__$1,db,history,pred__47376,expr__47377,this$__$1){
return (function() {
var quantum$core$io$core$state_machine__19829__auto__ = null;
var quantum$core$io$core$state_machine__19829__auto____0 = (function (){
var statearr_47390 = [null,null,null,null,null,null,null];
(statearr_47390[(0)] = quantum$core$io$core$state_machine__19829__auto__);

(statearr_47390[(1)] = (1));

return statearr_47390;
});
var quantum$core$io$core$state_machine__19829__auto____1 = (function (state_47385){
while(true){
var ret_value__19830__auto__ = (function (){try{while(true){
var result__19831__auto__ = switch__19828__auto__.call(null,state_47385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19831__auto__;
}
break;
}
}catch (e47391){if((e47391 instanceof Object)){
var ex__19832__auto__ = e47391;
var statearr_47392_47398 = state_47385;
(statearr_47392_47398[(5)] = ex__19832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47399 = state_47385;
state_47385 = G__47399;
continue;
} else {
return ret_value__19830__auto__;
}
break;
}
});
quantum$core$io$core$state_machine__19829__auto__ = function(state_47385){
switch(arguments.length){
case 0:
return quantum$core$io$core$state_machine__19829__auto____0.call(this);
case 1:
return quantum$core$io$core$state_machine__19829__auto____1.call(this,state_47385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
quantum$core$io$core$state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$0 = quantum$core$io$core$state_machine__19829__auto____0;
quantum$core$io$core$state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$1 = quantum$core$io$core$state_machine__19829__auto____1;
return quantum$core$io$core$state_machine__19829__auto__;
})()
;})(switch__19828__auto__,c__19849__auto__,db__$1,temp__4425__auto__,map__47379,map__47379__$1,schema,map__47380,map__47380__$1,db,history,pred__47376,expr__47377,this$__$1))
})();
var state__19851__auto__ = (function (){var statearr_47393 = f__19850__auto__.call(null);
(statearr_47393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19849__auto__);

return statearr_47393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19851__auto__);
});})(c__19849__auto__,db__$1,temp__4425__auto__,map__47379,map__47379__$1,schema,map__47380,map__47380__$1,db,history,pred__47376,expr__47377,this$__$1))
);

return c__19849__auto__;
} else {
return null;
}
});})(map__47379,map__47379__$1,schema,map__47380,map__47380__$1,db,history,pred__47376,expr__47377,this$__$1))
);
} else {
throw quantum.core.error.__GT_ex.call(null,new cljs.core.Keyword(null,"unhandled-class","unhandled-class",-1044752390),"Class not handled for persistence.",self__.persist_class);
}
});

quantum.core.io.core.Persister.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return datascript.core.unlisten_BANG_.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(self__.persist_data),new cljs.core.Keyword(null,"persister","persister",-963695309));
});

quantum.core.io.core.Persister.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"persist-key","persist-key",-1761737585,null),new cljs.core.Symbol(null,"persist-class","persist-class",-506620077,null),new cljs.core.Symbol(null,"persist-data","persist-data",-1460861196,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null);
});

quantum.core.io.core.Persister.cljs$lang$type = true;

quantum.core.io.core.Persister.cljs$lang$ctorPrSeq = (function (this__18173__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"quantum.core.io.core/Persister");
});

quantum.core.io.core.Persister.cljs$lang$ctorPrWriter = (function (this__18173__auto__,writer__18174__auto__){
return cljs.core._write.call(null,writer__18174__auto__,"quantum.core.io.core/Persister");
});

/**
 * Persists @persist-data
 */
quantum.core.io.core.__GT_Persister = (function quantum$core$io$core$__GT_Persister(persist_key,persist_class,persist_data,opts){
return (new quantum.core.io.core.Persister(persist_key,persist_class,persist_data,opts,null,null,null));
});

/**
 * Persists @persist-data
 */
quantum.core.io.core.map__GT_Persister = (function quantum$core$io$core$map__GT_Persister(G__47371){
return (new quantum.core.io.core.Persister(new cljs.core.Keyword(null,"persist-key","persist-key",892698184).cljs$core$IFn$_invoke$arity$1(G__47371),new cljs.core.Keyword(null,"persist-class","persist-class",-2147151604).cljs$core$IFn$_invoke$arity$1(G__47371),new cljs.core.Keyword(null,"persist-data","persist-data",1193574573).cljs$core$IFn$_invoke$arity$1(G__47371),new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(G__47371),null,cljs.core.dissoc.call(null,G__47371,new cljs.core.Keyword(null,"persist-key","persist-key",892698184),new cljs.core.Keyword(null,"persist-class","persist-class",-2147151604),new cljs.core.Keyword(null,"persist-data","persist-data",1193574573),new cljs.core.Keyword(null,"opts","opts",155075701)),null));
});


//# sourceMappingURL=core.js.map?rel=1452702583455
/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns core-async log err res]
*/
