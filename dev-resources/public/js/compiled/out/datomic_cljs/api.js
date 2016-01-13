// Compiled by ClojureScript 1.7.170 {}
goog.provide('datomic_cljs.api');
goog.require('cljs.core');
goog.require('datomic_cljs.http');
goog.require('datomic_cljs.util');
goog.require('cljs.core.async');
goog.require('cljs.reader');

/**
* @constructor
 * @implements {datomic_cljs.api.Object}
 * @implements {cljs.core.IPrintWithWriter}
*/
datomic_cljs.api.DbId = (function (spec){
this.spec = spec;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
datomic_cljs.api.DbId.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [cljs.core.str("#db/id"),cljs.core.str(self__.spec)].join('');
});

datomic_cljs.api.DbId.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,_){
var self__ = this;
var this$__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str(this$__$1)].join(''));
});

datomic_cljs.api.DbId.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spec","spec",1988051928,null)], null);
});

datomic_cljs.api.DbId.cljs$lang$type = true;

datomic_cljs.api.DbId.cljs$lang$ctorStr = "datomic-cljs.api/DbId";

datomic_cljs.api.DbId.cljs$lang$ctorPrWriter = (function (this__18123__auto__,writer__18124__auto__,opt__18125__auto__){
return cljs.core._write.call(null,writer__18124__auto__,"datomic-cljs.api/DbId");
});

datomic_cljs.api.__GT_DbId = (function datomic_cljs$api$__GT_DbId(spec){
return (new datomic_cljs.api.DbId(spec));
});

datomic_cljs.api.read_dbid = (function datomic_cljs$api$read_dbid(spec){
if(cljs.core.vector_QMARK_.call(null,spec)){
return (new datomic_cljs.api.DbId(spec));
} else {
return cljs.reader.reader_error.call(null,null,"db/id literal expects a vector as its representation.");
}
});
cljs.reader.register_tag_parser_BANG_.call(null,"db/id",datomic_cljs.api.read_dbid);
var _BANG_next_id_46385 = cljs.core.atom.call(null,(-1000001));
/**
 * Generate a tempid in the specified partition. Values of n from -1
 *   to -1000000, inclusive, are reserved for user-created tempids.
 */
datomic_cljs.api.tempid = ((function (_BANG_next_id_46385){
return (function datomic_cljs$api$tempid(var_args){
var args46382 = [];
var len__18583__auto___46386 = arguments.length;
var i__18584__auto___46387 = (0);
while(true){
if((i__18584__auto___46387 < len__18583__auto___46386)){
args46382.push((arguments[i__18584__auto___46387]));

var G__46388 = (i__18584__auto___46387 + (1));
i__18584__auto___46387 = G__46388;
continue;
} else {
}
break;
}

var G__46384 = args46382.length;
switch (G__46384) {
case 1:
return datomic_cljs.api.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datomic_cljs.api.tempid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46382.length)].join('')));

}
});})(_BANG_next_id_46385))
;

datomic_cljs.api.tempid.cljs$core$IFn$_invoke$arity$1 = ((function (_BANG_next_id_46385){
return (function (partition){
var id = (new datomic_cljs.api.DbId(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [partition,cljs.core.deref.call(null,_BANG_next_id_46385)], null)));
cljs.core.swap_BANG_.call(null,_BANG_next_id_46385,cljs.core.dec);

return id;
});})(_BANG_next_id_46385))
;

datomic_cljs.api.tempid.cljs$core$IFn$_invoke$arity$2 = ((function (_BANG_next_id_46385){
return (function (partition,n){
return (new datomic_cljs.api.DbId(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [partition,n], null)));
});})(_BANG_next_id_46385))
;

datomic_cljs.api.tempid.cljs$lang$maxFixedArity = 2;

/**
 * @interface
 */
datomic_cljs.api.IDatomicDB = function(){};

datomic_cljs.api._q = (function datomic_cljs$api$_q(db,query,inputs){
if((!((db == null))) && (!((db.datomic_cljs$api$IDatomicDB$_q$arity$3 == null)))){
return db.datomic_cljs$api$IDatomicDB$_q$arity$3(db,query,inputs);
} else {
var x__18180__auto__ = (((db == null))?null:db);
var m__18181__auto__ = (datomic_cljs.api._q[goog.typeOf(x__18180__auto__)]);
if(!((m__18181__auto__ == null))){
return m__18181__auto__.call(null,db,query,inputs);
} else {
var m__18181__auto____$1 = (datomic_cljs.api._q["_"]);
if(!((m__18181__auto____$1 == null))){
return m__18181__auto____$1.call(null,db,query,inputs);
} else {
throw cljs.core.missing_protocol.call(null,"IDatomicDB.-q",db);
}
}
}
});

datomic_cljs.api._entity = (function datomic_cljs$api$_entity(db,eid){
if((!((db == null))) && (!((db.datomic_cljs$api$IDatomicDB$_entity$arity$2 == null)))){
return db.datomic_cljs$api$IDatomicDB$_entity$arity$2(db,eid);
} else {
var x__18180__auto__ = (((db == null))?null:db);
var m__18181__auto__ = (datomic_cljs.api._entity[goog.typeOf(x__18180__auto__)]);
if(!((m__18181__auto__ == null))){
return m__18181__auto__.call(null,db,eid);
} else {
var m__18181__auto____$1 = (datomic_cljs.api._entity["_"]);
if(!((m__18181__auto____$1 == null))){
return m__18181__auto____$1.call(null,db,eid);
} else {
throw cljs.core.missing_protocol.call(null,"IDatomicDB.-entity",db);
}
}
}
});

datomic_cljs.api._datoms = (function datomic_cljs$api$_datoms(db,index,components){
if((!((db == null))) && (!((db.datomic_cljs$api$IDatomicDB$_datoms$arity$3 == null)))){
return db.datomic_cljs$api$IDatomicDB$_datoms$arity$3(db,index,components);
} else {
var x__18180__auto__ = (((db == null))?null:db);
var m__18181__auto__ = (datomic_cljs.api._datoms[goog.typeOf(x__18180__auto__)]);
if(!((m__18181__auto__ == null))){
return m__18181__auto__.call(null,db,index,components);
} else {
var m__18181__auto____$1 = (datomic_cljs.api._datoms["_"]);
if(!((m__18181__auto____$1 == null))){
return m__18181__auto____$1.call(null,db,index,components);
} else {
throw cljs.core.missing_protocol.call(null,"IDatomicDB.-datoms",db);
}
}
}
});

datomic_cljs.api._basis_t = (function datomic_cljs$api$_basis_t(db){
if((!((db == null))) && (!((db.datomic_cljs$api$IDatomicDB$_basis_t$arity$1 == null)))){
return db.datomic_cljs$api$IDatomicDB$_basis_t$arity$1(db);
} else {
var x__18180__auto__ = (((db == null))?null:db);
var m__18181__auto__ = (datomic_cljs.api._basis_t[goog.typeOf(x__18180__auto__)]);
if(!((m__18181__auto__ == null))){
return m__18181__auto__.call(null,db);
} else {
var m__18181__auto____$1 = (datomic_cljs.api._basis_t["_"]);
if(!((m__18181__auto____$1 == null))){
return m__18181__auto____$1.call(null,db);
} else {
throw cljs.core.missing_protocol.call(null,"IDatomicDB.-basis-t",db);
}
}
}
});


/**
 * @interface
 */
datomic_cljs.api.IDatomicConnection = function(){};

datomic_cljs.api._conn_url_root = (function datomic_cljs$api$_conn_url_root(conn){
if((!((conn == null))) && (!((conn.datomic_cljs$api$IDatomicConnection$_conn_url_root$arity$1 == null)))){
return conn.datomic_cljs$api$IDatomicConnection$_conn_url_root$arity$1(conn);
} else {
var x__18180__auto__ = (((conn == null))?null:conn);
var m__18181__auto__ = (datomic_cljs.api._conn_url_root[goog.typeOf(x__18180__auto__)]);
if(!((m__18181__auto__ == null))){
return m__18181__auto__.call(null,conn);
} else {
var m__18181__auto____$1 = (datomic_cljs.api._conn_url_root["_"]);
if(!((m__18181__auto____$1 == null))){
return m__18181__auto____$1.call(null,conn);
} else {
throw cljs.core.missing_protocol.call(null,"IDatomicConnection.-conn-url-root",conn);
}
}
}
});

datomic_cljs.api._transact = (function datomic_cljs$api$_transact(conn,tx_data_str){
if((!((conn == null))) && (!((conn.datomic_cljs$api$IDatomicConnection$_transact$arity$2 == null)))){
return conn.datomic_cljs$api$IDatomicConnection$_transact$arity$2(conn,tx_data_str);
} else {
var x__18180__auto__ = (((conn == null))?null:conn);
var m__18181__auto__ = (datomic_cljs.api._transact[goog.typeOf(x__18180__auto__)]);
if(!((m__18181__auto__ == null))){
return m__18181__auto__.call(null,conn,tx_data_str);
} else {
var m__18181__auto____$1 = (datomic_cljs.api._transact["_"]);
if(!((m__18181__auto____$1 == null))){
return m__18181__auto____$1.call(null,conn,tx_data_str);
} else {
throw cljs.core.missing_protocol.call(null,"IDatomicConnection.-transact",conn);
}
}
}
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
 * @implements {datomic_cljs.api.IDatomicConnection}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datomic_cljs.api.DatomicConnection = (function (hostname,port,db_alias,__meta,__extmap,__hash){
this.hostname = hostname;
this.port = port;
this.db_alias = db_alias;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datomic_cljs.api.DatomicConnection.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18139__auto__,k__18140__auto__){
var self__ = this;
var this__18139__auto____$1 = this;
return cljs.core._lookup.call(null,this__18139__auto____$1,k__18140__auto__,null);
});

datomic_cljs.api.DatomicConnection.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18141__auto__,k46391,else__18142__auto__){
var self__ = this;
var this__18141__auto____$1 = this;
var G__46393 = (((k46391 instanceof cljs.core.Keyword))?k46391.fqn:null);
switch (G__46393) {
case "hostname":
return self__.hostname;

break;
case "port":
return self__.port;

break;
case "db-alias":
return self__.db_alias;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k46391,else__18142__auto__);

}
});

datomic_cljs.api.DatomicConnection.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18153__auto__,writer__18154__auto__,opts__18155__auto__){
var self__ = this;
var this__18153__auto____$1 = this;
var pr_pair__18156__auto__ = ((function (this__18153__auto____$1){
return (function (keyval__18157__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,cljs.core.pr_writer,""," ","",opts__18155__auto__,keyval__18157__auto__);
});})(this__18153__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,pr_pair__18156__auto__,"#datomic-cljs.api.DatomicConnection{",", ","}",opts__18155__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hostname","hostname",2105669933),self__.hostname],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"port","port",1534937262),self__.port],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-alias","db-alias",-506132914),self__.db_alias],null))], null),self__.__extmap));
});

datomic_cljs.api.DatomicConnection.prototype.cljs$core$IIterable$ = true;

datomic_cljs.api.DatomicConnection.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46390){
var self__ = this;
var G__46390__$1 = this;
return (new cljs.core.RecordIter((0),G__46390__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hostname","hostname",2105669933),new cljs.core.Keyword(null,"port","port",1534937262),new cljs.core.Keyword(null,"db-alias","db-alias",-506132914)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datomic_cljs.api.DatomicConnection.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18137__auto__){
var self__ = this;
var this__18137__auto____$1 = this;
return self__.__meta;
});

datomic_cljs.api.DatomicConnection.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18133__auto__){
var self__ = this;
var this__18133__auto____$1 = this;
return (new datomic_cljs.api.DatomicConnection(self__.hostname,self__.port,self__.db_alias,self__.__meta,self__.__extmap,self__.__hash));
});

datomic_cljs.api.DatomicConnection.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18143__auto__){
var self__ = this;
var this__18143__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datomic_cljs.api.DatomicConnection.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18134__auto__){
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

datomic_cljs.api.DatomicConnection.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18135__auto__,other__18136__auto__){
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

datomic_cljs.api.DatomicConnection.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18148__auto__,k__18149__auto__){
var self__ = this;
var this__18148__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hostname","hostname",2105669933),null,new cljs.core.Keyword(null,"port","port",1534937262),null,new cljs.core.Keyword(null,"db-alias","db-alias",-506132914),null], null), null),k__18149__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18148__auto____$1),self__.__meta),k__18149__auto__);
} else {
return (new datomic_cljs.api.DatomicConnection(self__.hostname,self__.port,self__.db_alias,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18149__auto__)),null));
}
});

datomic_cljs.api.DatomicConnection.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18146__auto__,k__18147__auto__,G__46390){
var self__ = this;
var this__18146__auto____$1 = this;
var pred__46394 = cljs.core.keyword_identical_QMARK_;
var expr__46395 = k__18147__auto__;
if(cljs.core.truth_(pred__46394.call(null,new cljs.core.Keyword(null,"hostname","hostname",2105669933),expr__46395))){
return (new datomic_cljs.api.DatomicConnection(G__46390,self__.port,self__.db_alias,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__46394.call(null,new cljs.core.Keyword(null,"port","port",1534937262),expr__46395))){
return (new datomic_cljs.api.DatomicConnection(self__.hostname,G__46390,self__.db_alias,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__46394.call(null,new cljs.core.Keyword(null,"db-alias","db-alias",-506132914),expr__46395))){
return (new datomic_cljs.api.DatomicConnection(self__.hostname,self__.port,G__46390,self__.__meta,self__.__extmap,null));
} else {
return (new datomic_cljs.api.DatomicConnection(self__.hostname,self__.port,self__.db_alias,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18147__auto__,G__46390),null));
}
}
}
});

datomic_cljs.api.DatomicConnection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18151__auto__){
var self__ = this;
var this__18151__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hostname","hostname",2105669933),self__.hostname],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"port","port",1534937262),self__.port],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-alias","db-alias",-506132914),self__.db_alias],null))], null),self__.__extmap));
});

datomic_cljs.api.DatomicConnection.prototype.datomic_cljs$api$IDatomicConnection$ = true;

datomic_cljs.api.DatomicConnection.prototype.datomic_cljs$api$IDatomicConnection$_conn_url_root$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return [cljs.core.str("http://"),cljs.core.str(self__.hostname),cljs.core.str(":"),cljs.core.str(self__.port)].join('');
});

datomic_cljs.api.DatomicConnection.prototype.datomic_cljs$api$IDatomicConnection$_transact$arity$2 = (function (conn,tx_data_str){
var self__ = this;
var conn__$1 = this;
var path = [cljs.core.str(datomic_cljs.api._conn_url_root.call(null,conn__$1)),cljs.core.str("/data/"),cljs.core.str(self__.db_alias),cljs.core.str("/")].join('');
return datomic_cljs.http.body.call(null,datomic_cljs.http.request.call(null,new cljs.core.Keyword(null,"post","post",269697687),path,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"edn","edn",1317840885),true,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761),tx_data_str], null)], null)));
});

datomic_cljs.api.DatomicConnection.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18138__auto__,G__46390){
var self__ = this;
var this__18138__auto____$1 = this;
return (new datomic_cljs.api.DatomicConnection(self__.hostname,self__.port,self__.db_alias,G__46390,self__.__extmap,self__.__hash));
});

datomic_cljs.api.DatomicConnection.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18144__auto__,entry__18145__auto__){
var self__ = this;
var this__18144__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18145__auto__)){
return cljs.core._assoc.call(null,this__18144__auto____$1,cljs.core._nth.call(null,entry__18145__auto__,(0)),cljs.core._nth.call(null,entry__18145__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18144__auto____$1,entry__18145__auto__);
}
});

datomic_cljs.api.DatomicConnection.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hostname","hostname",-548765836,null),new cljs.core.Symbol(null,"port","port",-1119498507,null),new cljs.core.Symbol(null,"db-alias","db-alias",1134398613,null)], null);
});

datomic_cljs.api.DatomicConnection.cljs$lang$type = true;

datomic_cljs.api.DatomicConnection.cljs$lang$ctorPrSeq = (function (this__18173__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datomic-cljs.api/DatomicConnection");
});

datomic_cljs.api.DatomicConnection.cljs$lang$ctorPrWriter = (function (this__18173__auto__,writer__18174__auto__){
return cljs.core._write.call(null,writer__18174__auto__,"datomic-cljs.api/DatomicConnection");
});

datomic_cljs.api.__GT_DatomicConnection = (function datomic_cljs$api$__GT_DatomicConnection(hostname,port,db_alias){
return (new datomic_cljs.api.DatomicConnection(hostname,port,db_alias,null,null,null));
});

datomic_cljs.api.map__GT_DatomicConnection = (function datomic_cljs$api$map__GT_DatomicConnection(G__46392){
return (new datomic_cljs.api.DatomicConnection(new cljs.core.Keyword(null,"hostname","hostname",2105669933).cljs$core$IFn$_invoke$arity$1(G__46392),new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(G__46392),new cljs.core.Keyword(null,"db-alias","db-alias",-506132914).cljs$core$IFn$_invoke$arity$1(G__46392),null,cljs.core.dissoc.call(null,G__46392,new cljs.core.Keyword(null,"hostname","hostname",2105669933),new cljs.core.Keyword(null,"port","port",1534937262),new cljs.core.Keyword(null,"db-alias","db-alias",-506132914)),null));
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
 * @implements {datomic_cljs.api.IDatomicDB}
*/
datomic_cljs.api.DatomicDB = (function (conn,implicit_args,implicit_qs,__meta,__extmap,__hash){
this.conn = conn;
this.implicit_args = implicit_args;
this.implicit_qs = implicit_qs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datomic_cljs.api.DatomicDB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18139__auto__,k__18140__auto__){
var self__ = this;
var this__18139__auto____$1 = this;
return cljs.core._lookup.call(null,this__18139__auto____$1,k__18140__auto__,null);
});

datomic_cljs.api.DatomicDB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18141__auto__,k46399,else__18142__auto__){
var self__ = this;
var this__18141__auto____$1 = this;
var G__46401 = (((k46399 instanceof cljs.core.Keyword))?k46399.fqn:null);
switch (G__46401) {
case "conn":
return self__.conn;

break;
case "implicit-args":
return self__.implicit_args;

break;
case "implicit-qs":
return self__.implicit_qs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k46399,else__18142__auto__);

}
});

datomic_cljs.api.DatomicDB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18153__auto__,writer__18154__auto__,opts__18155__auto__){
var self__ = this;
var this__18153__auto____$1 = this;
var pr_pair__18156__auto__ = ((function (this__18153__auto____$1){
return (function (keyval__18157__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,cljs.core.pr_writer,""," ","",opts__18155__auto__,keyval__18157__auto__);
});})(this__18153__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,pr_pair__18156__auto__,"#datomic-cljs.api.DatomicDB{",", ","}",opts__18155__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"conn","conn",278309663),self__.conn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"implicit-args","implicit-args",-1513797387),self__.implicit_args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"implicit-qs","implicit-qs",-1615226550),self__.implicit_qs],null))], null),self__.__extmap));
});

datomic_cljs.api.DatomicDB.prototype.cljs$core$IIterable$ = true;

datomic_cljs.api.DatomicDB.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46398){
var self__ = this;
var G__46398__$1 = this;
return (new cljs.core.RecordIter((0),G__46398__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conn","conn",278309663),new cljs.core.Keyword(null,"implicit-args","implicit-args",-1513797387),new cljs.core.Keyword(null,"implicit-qs","implicit-qs",-1615226550)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datomic_cljs.api.DatomicDB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18137__auto__){
var self__ = this;
var this__18137__auto____$1 = this;
return self__.__meta;
});

datomic_cljs.api.DatomicDB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18133__auto__){
var self__ = this;
var this__18133__auto____$1 = this;
return (new datomic_cljs.api.DatomicDB(self__.conn,self__.implicit_args,self__.implicit_qs,self__.__meta,self__.__extmap,self__.__hash));
});

datomic_cljs.api.DatomicDB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18143__auto__){
var self__ = this;
var this__18143__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datomic_cljs.api.DatomicDB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18134__auto__){
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

datomic_cljs.api.DatomicDB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18135__auto__,other__18136__auto__){
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

datomic_cljs.api.DatomicDB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18148__auto__,k__18149__auto__){
var self__ = this;
var this__18148__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"implicit-qs","implicit-qs",-1615226550),null,new cljs.core.Keyword(null,"implicit-args","implicit-args",-1513797387),null,new cljs.core.Keyword(null,"conn","conn",278309663),null], null), null),k__18149__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18148__auto____$1),self__.__meta),k__18149__auto__);
} else {
return (new datomic_cljs.api.DatomicDB(self__.conn,self__.implicit_args,self__.implicit_qs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18149__auto__)),null));
}
});

datomic_cljs.api.DatomicDB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18146__auto__,k__18147__auto__,G__46398){
var self__ = this;
var this__18146__auto____$1 = this;
var pred__46402 = cljs.core.keyword_identical_QMARK_;
var expr__46403 = k__18147__auto__;
if(cljs.core.truth_(pred__46402.call(null,new cljs.core.Keyword(null,"conn","conn",278309663),expr__46403))){
return (new datomic_cljs.api.DatomicDB(G__46398,self__.implicit_args,self__.implicit_qs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__46402.call(null,new cljs.core.Keyword(null,"implicit-args","implicit-args",-1513797387),expr__46403))){
return (new datomic_cljs.api.DatomicDB(self__.conn,G__46398,self__.implicit_qs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__46402.call(null,new cljs.core.Keyword(null,"implicit-qs","implicit-qs",-1615226550),expr__46403))){
return (new datomic_cljs.api.DatomicDB(self__.conn,self__.implicit_args,G__46398,self__.__meta,self__.__extmap,null));
} else {
return (new datomic_cljs.api.DatomicDB(self__.conn,self__.implicit_args,self__.implicit_qs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18147__auto__,G__46398),null));
}
}
}
});

datomic_cljs.api.DatomicDB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18151__auto__){
var self__ = this;
var this__18151__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"conn","conn",278309663),self__.conn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"implicit-args","implicit-args",-1513797387),self__.implicit_args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"implicit-qs","implicit-qs",-1615226550),self__.implicit_qs],null))], null),self__.__extmap));
});

datomic_cljs.api.DatomicDB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18138__auto__,G__46398){
var self__ = this;
var this__18138__auto____$1 = this;
return (new datomic_cljs.api.DatomicDB(self__.conn,self__.implicit_args,self__.implicit_qs,G__46398,self__.__extmap,self__.__hash));
});

datomic_cljs.api.DatomicDB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18144__auto__,entry__18145__auto__){
var self__ = this;
var this__18144__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18145__auto__)){
return cljs.core._assoc.call(null,this__18144__auto____$1,cljs.core._nth.call(null,entry__18145__auto__,(0)),cljs.core._nth.call(null,entry__18145__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18144__auto____$1,entry__18145__auto__);
}
});

datomic_cljs.api.DatomicDB.prototype.datomic_cljs$api$IDatomicDB$ = true;

datomic_cljs.api.DatomicDB.prototype.datomic_cljs$api$IDatomicDB$_q$arity$3 = (function (_,query,inputs){
var self__ = this;
var ___$1 = this;
var args = cljs.core.vec.call(null,cljs.core.cons.call(null,self__.implicit_args,inputs));
var path = [cljs.core.str(datomic_cljs.api._conn_url_root.call(null,self__.conn)),cljs.core.str("/api/query")].join('');
return datomic_cljs.http.body.call(null,datomic_cljs.http.request.call(null,new cljs.core.Keyword(null,"get","get",1683182755),path,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"edn","edn",1317840885),true,new cljs.core.Keyword(null,"qs","qs",-1900687691),cljs.core.assoc.call(null,self__.implicit_qs,new cljs.core.Keyword(null,"q","q",689001697),cljs.core.prn_str.call(null,query),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.prn_str.call(null,args))], null)));
});

datomic_cljs.api.DatomicDB.prototype.datomic_cljs$api$IDatomicDB$_datoms$arity$3 = (function (_,index,components){
var self__ = this;
var ___$1 = this;
var path = [cljs.core.str(datomic_cljs.api._conn_url_root.call(null,self__.conn)),cljs.core.str("/data/"),cljs.core.str(new cljs.core.Keyword("db","alias","db/alias",-2039754316).cljs$core$IFn$_invoke$arity$1(self__.implicit_args)),cljs.core.str("/-/datoms")].join('');
return datomic_cljs.http.body.call(null,datomic_cljs.http.request.call(null,new cljs.core.Keyword(null,"get","get",1683182755),path,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"edn","edn",1317840885),true,new cljs.core.Keyword(null,"qs","qs",-1900687691),cljs.core.assoc.call(null,cljs.core.merge.call(null,self__.implicit_qs,components),new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.name.call(null,index))], null)));
});

datomic_cljs.api.DatomicDB.prototype.datomic_cljs$api$IDatomicDB$_entity$arity$2 = (function (_,eid){
var self__ = this;
var ___$1 = this;
var path = [cljs.core.str(datomic_cljs.api._conn_url_root.call(null,self__.conn)),cljs.core.str("/data/"),cljs.core.str(new cljs.core.Keyword("db","alias","db/alias",-2039754316).cljs$core$IFn$_invoke$arity$1(self__.implicit_args)),cljs.core.str("/-/entity")].join('');
return datomic_cljs.http.body.call(null,datomic_cljs.http.request.call(null,new cljs.core.Keyword(null,"get","get",1683182755),path,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"edn","edn",1317840885),true,new cljs.core.Keyword(null,"qs","qs",-1900687691),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"e","e",1381269198),eid,new cljs.core.Keyword(null,"as-of","as-of",-1841962382),new cljs.core.Keyword(null,"as-of","as-of",-1841962382).cljs$core$IFn$_invoke$arity$1(self__.implicit_args),new cljs.core.Keyword(null,"since","since",315379842),new cljs.core.Keyword(null,"since","since",315379842).cljs$core$IFn$_invoke$arity$1(self__.implicit_args)], null)], null)));
});

datomic_cljs.api.DatomicDB.prototype.datomic_cljs$api$IDatomicDB$_basis_t$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c_basis = cljs.core.async.chan.call(null,(1));
var c__19849__auto___46469 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19849__auto___46469,c_basis,___$1){
return (function (){
var f__19850__auto__ = (function (){var switch__19828__auto__ = ((function (c__19849__auto___46469,c_basis,___$1){
return (function (state_46442){
var state_val_46443 = (state_46442[(1)]);
if((state_val_46443 === (7))){
var state_46442__$1 = state_46442;
var statearr_46444_46470 = state_46442__$1;
(statearr_46444_46470[(2)] = "-");

(statearr_46444_46470[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46443 === (1))){
var inst_46405 = new cljs.core.Keyword(null,"as-of","as-of",-1841962382).cljs$core$IFn$_invoke$arity$1(self__.implicit_args);
var state_46442__$1 = state_46442;
if(cljs.core.truth_(inst_46405)){
var statearr_46445_46471 = state_46442__$1;
(statearr_46445_46471[(1)] = (2));

} else {
var statearr_46446_46472 = state_46442__$1;
(statearr_46446_46472[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46443 === (4))){
var inst_46440 = (state_46442[(2)]);
var state_46442__$1 = state_46442;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46442__$1,inst_46440);
} else {
if((state_val_46443 === (13))){
var inst_46429 = (state_46442[(2)]);
var inst_46430 = cljs.core.async.close_BANG_.call(null,c_basis);
var state_46442__$1 = (function (){var statearr_46447 = state_46442;
(statearr_46447[(7)] = inst_46429);

return statearr_46447;
})();
var statearr_46448_46473 = state_46442__$1;
(statearr_46448_46473[(2)] = inst_46430);

(statearr_46448_46473[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46443 === (6))){
var inst_46414 = (state_46442[(8)]);
var state_46442__$1 = state_46442;
var statearr_46449_46474 = state_46442__$1;
(statearr_46449_46474[(2)] = inst_46414);

(statearr_46449_46474[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46443 === (3))){
var inst_46414 = (state_46442[(8)]);
var inst_46412 = datomic_cljs.api._conn_url_root.call(null,self__.conn);
var inst_46413 = new cljs.core.Keyword(null,"db-alias","db-alias",-506132914).cljs$core$IFn$_invoke$arity$1(self__.conn);
var inst_46414__$1 = new cljs.core.Keyword(null,"as-of","as-of",-1841962382).cljs$core$IFn$_invoke$arity$1(self__.implicit_args);
var state_46442__$1 = (function (){var statearr_46450 = state_46442;
(statearr_46450[(9)] = inst_46413);

(statearr_46450[(8)] = inst_46414__$1);

(statearr_46450[(10)] = inst_46412);

return statearr_46450;
})();
if(cljs.core.truth_(inst_46414__$1)){
var statearr_46451_46475 = state_46442__$1;
(statearr_46451_46475[(1)] = (6));

} else {
var statearr_46452_46476 = state_46442__$1;
(statearr_46452_46476[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46443 === (12))){
var inst_46438 = (state_46442[(2)]);
var state_46442__$1 = state_46442;
var statearr_46453_46477 = state_46442__$1;
(statearr_46453_46477[(2)] = inst_46438);

(statearr_46453_46477[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46443 === (2))){
var inst_46407 = new cljs.core.Keyword(null,"as-of","as-of",-1841962382).cljs$core$IFn$_invoke$arity$1(self__.implicit_args);
var state_46442__$1 = state_46442;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46442__$1,(5),c_basis,inst_46407);
} else {
if((state_val_46443 === (11))){
var inst_46425 = (state_46442[(11)]);
var inst_46432 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_46425);
var inst_46433 = new cljs.core.Keyword(null,"basis-t","basis-t",-1424075730).cljs$core$IFn$_invoke$arity$1(inst_46432);
var state_46442__$1 = state_46442;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46442__$1,(14),c_basis,inst_46433);
} else {
if((state_val_46443 === (9))){
var inst_46425 = (state_46442[(11)]);
var inst_46425__$1 = (state_46442[(2)]);
var inst_46426 = (inst_46425__$1 instanceof Error);
var state_46442__$1 = (function (){var statearr_46454 = state_46442;
(statearr_46454[(11)] = inst_46425__$1);

return statearr_46454;
})();
if(cljs.core.truth_(inst_46426)){
var statearr_46455_46478 = state_46442__$1;
(statearr_46455_46478[(1)] = (10));

} else {
var statearr_46456_46479 = state_46442__$1;
(statearr_46456_46479[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46443 === (5))){
var inst_46409 = (state_46442[(2)]);
var inst_46410 = cljs.core.async.close_BANG_.call(null,c_basis);
var state_46442__$1 = (function (){var statearr_46457 = state_46442;
(statearr_46457[(12)] = inst_46409);

return statearr_46457;
})();
var statearr_46458_46480 = state_46442__$1;
(statearr_46458_46480[(2)] = inst_46410);

(statearr_46458_46480[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46443 === (14))){
var inst_46435 = (state_46442[(2)]);
var inst_46436 = cljs.core.async.close_BANG_.call(null,c_basis);
var state_46442__$1 = (function (){var statearr_46459 = state_46442;
(statearr_46459[(13)] = inst_46435);

return statearr_46459;
})();
var statearr_46460_46481 = state_46442__$1;
(statearr_46460_46481[(2)] = inst_46436);

(statearr_46460_46481[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46443 === (10))){
var inst_46425 = (state_46442[(11)]);
var state_46442__$1 = state_46442;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46442__$1,(13),c_basis,inst_46425);
} else {
if((state_val_46443 === (8))){
var inst_46413 = (state_46442[(9)]);
var inst_46412 = (state_46442[(10)]);
var inst_46418 = (state_46442[(2)]);
var inst_46419 = [cljs.core.str(inst_46412),cljs.core.str("/data/"),cljs.core.str(inst_46413),cljs.core.str("/"),cljs.core.str(inst_46418),cljs.core.str("/")].join('');
var inst_46420 = [new cljs.core.Keyword(null,"edn","edn",1317840885)];
var inst_46421 = [true];
var inst_46422 = cljs.core.PersistentHashMap.fromArrays(inst_46420,inst_46421);
var inst_46423 = datomic_cljs.http.request.call(null,new cljs.core.Keyword(null,"get","get",1683182755),inst_46419,inst_46422);
var state_46442__$1 = state_46442;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46442__$1,(9),inst_46423);
} else {
return null;
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
});})(c__19849__auto___46469,c_basis,___$1))
;
return ((function (switch__19828__auto__,c__19849__auto___46469,c_basis,___$1){
return (function() {
var datomic_cljs$api$state_machine__19829__auto__ = null;
var datomic_cljs$api$state_machine__19829__auto____0 = (function (){
var statearr_46464 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46464[(0)] = datomic_cljs$api$state_machine__19829__auto__);

(statearr_46464[(1)] = (1));

return statearr_46464;
});
var datomic_cljs$api$state_machine__19829__auto____1 = (function (state_46442){
while(true){
var ret_value__19830__auto__ = (function (){try{while(true){
var result__19831__auto__ = switch__19828__auto__.call(null,state_46442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19831__auto__;
}
break;
}
}catch (e46465){if((e46465 instanceof Object)){
var ex__19832__auto__ = e46465;
var statearr_46466_46482 = state_46442;
(statearr_46466_46482[(5)] = ex__19832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46465;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46483 = state_46442;
state_46442 = G__46483;
continue;
} else {
return ret_value__19830__auto__;
}
break;
}
});
datomic_cljs$api$state_machine__19829__auto__ = function(state_46442){
switch(arguments.length){
case 0:
return datomic_cljs$api$state_machine__19829__auto____0.call(this);
case 1:
return datomic_cljs$api$state_machine__19829__auto____1.call(this,state_46442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datomic_cljs$api$state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$0 = datomic_cljs$api$state_machine__19829__auto____0;
datomic_cljs$api$state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$1 = datomic_cljs$api$state_machine__19829__auto____1;
return datomic_cljs$api$state_machine__19829__auto__;
})()
;})(switch__19828__auto__,c__19849__auto___46469,c_basis,___$1))
})();
var state__19851__auto__ = (function (){var statearr_46467 = f__19850__auto__.call(null);
(statearr_46467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19849__auto___46469);

return statearr_46467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19851__auto__);
});})(c__19849__auto___46469,c_basis,___$1))
);


return c_basis;
});

datomic_cljs.api.DatomicDB.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"conn","conn",1918841190,null),new cljs.core.Symbol(null,"implicit-args","implicit-args",126734140,null),new cljs.core.Symbol(null,"implicit-qs","implicit-qs",25304977,null)], null);
});

datomic_cljs.api.DatomicDB.cljs$lang$type = true;

datomic_cljs.api.DatomicDB.cljs$lang$ctorPrSeq = (function (this__18173__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datomic-cljs.api/DatomicDB");
});

datomic_cljs.api.DatomicDB.cljs$lang$ctorPrWriter = (function (this__18173__auto__,writer__18174__auto__){
return cljs.core._write.call(null,writer__18174__auto__,"datomic-cljs.api/DatomicDB");
});

datomic_cljs.api.__GT_DatomicDB = (function datomic_cljs$api$__GT_DatomicDB(conn,implicit_args,implicit_qs){
return (new datomic_cljs.api.DatomicDB(conn,implicit_args,implicit_qs,null,null,null));
});

datomic_cljs.api.map__GT_DatomicDB = (function datomic_cljs$api$map__GT_DatomicDB(G__46400){
return (new datomic_cljs.api.DatomicDB(new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(G__46400),new cljs.core.Keyword(null,"implicit-args","implicit-args",-1513797387).cljs$core$IFn$_invoke$arity$1(G__46400),new cljs.core.Keyword(null,"implicit-qs","implicit-qs",-1615226550).cljs$core$IFn$_invoke$arity$1(G__46400),null,cljs.core.dissoc.call(null,G__46400,new cljs.core.Keyword(null,"conn","conn",278309663),new cljs.core.Keyword(null,"implicit-args","implicit-args",-1513797387),new cljs.core.Keyword(null,"implicit-qs","implicit-qs",-1615226550)),null));
});

/**
 * Create an abstract connection to a Datomic REST service by passing
 * the following arguments:
 * 
 *   hostname, e.g. localhost;
 *   port, the port on which the REST service is listening;
 *   alias, the transactor alias;
 *   dbname, the name of the database being connected to.
 */
datomic_cljs.api.connect = (function datomic_cljs$api$connect(hostname,port,alias,db_name){
return datomic_cljs.api.__GT_DatomicConnection.call(null,hostname,port,[cljs.core.str(alias),cljs.core.str("/"),cljs.core.str(db_name)].join(''));
});
/**
 * Create or connect to a Datomic database via a Datomic REST service
 * by passing the following arguments:
 * 
 *   hostname, e.g. localhost;
 *   port, the port on which the REST service is listening;
 *   alias, the transactor alias;
 *   db-name, the name of the database being created.
 * 
 * Returns a core.async channel eventually containing a database
 * connection (as if using datomic-cljs.api/connect), or an error.
 */
datomic_cljs.api.create_database = (function datomic_cljs$api$create_database(hostname,port,alias,db_name){
var c_conn = cljs.core.async.chan.call(null,(1));
var conn = datomic_cljs.api.connect.call(null,hostname,port,alias,db_name);
var c__19849__auto___46682 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19849__auto___46682,c_conn,conn){
return (function (){
var f__19850__auto__ = (function (){var switch__19828__auto__ = ((function (c__19849__auto___46682,c_conn,conn){
return (function (state_46644){
var state_val_46645 = (state_46644[(1)]);
if((state_val_46645 === (7))){
var state_46644__$1 = state_46644;
var statearr_46646_46683 = state_46644__$1;
(statearr_46646_46683[(2)] = false);

(statearr_46646_46683[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46645 === (20))){
var inst_46615 = (state_46644[(7)]);
var inst_46631 = [cljs.core.str("Could not create or connect to db: "),cljs.core.str(inst_46615)].join('');
var inst_46632 = (new Error(inst_46631));
var state_46644__$1 = state_46644;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46644__$1,(23),c_conn,inst_46632);
} else {
if((state_val_46645 === (1))){
var inst_46584 = datomic_cljs.api._conn_url_root.call(null,conn);
var inst_46585 = [cljs.core.str(inst_46584),cljs.core.str("/data/"),cljs.core.str(alias),cljs.core.str("/")].join('');
var inst_46586 = [new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"form","form",-1624062471)];
var inst_46587 = [new cljs.core.Keyword(null,"db-name","db-name",1157928745)];
var inst_46588 = [db_name];
var inst_46589 = cljs.core.PersistentHashMap.fromArrays(inst_46587,inst_46588);
var inst_46590 = [true,inst_46589];
var inst_46591 = cljs.core.PersistentHashMap.fromArrays(inst_46586,inst_46590);
var inst_46592 = datomic_cljs.http.request.call(null,new cljs.core.Keyword(null,"post","post",269697687),inst_46585,inst_46591);
var state_46644__$1 = state_46644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46644__$1,(2),inst_46592);
} else {
if((state_val_46645 === (4))){
var state_46644__$1 = state_46644;
var statearr_46647_46684 = state_46644__$1;
(statearr_46647_46684[(2)] = false);

(statearr_46647_46684[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46645 === (15))){
var inst_46619 = (state_46644[(2)]);
var inst_46620 = cljs.core.async.close_BANG_.call(null,c_conn);
var state_46644__$1 = (function (){var statearr_46648 = state_46644;
(statearr_46648[(8)] = inst_46619);

return statearr_46648;
})();
var statearr_46649_46685 = state_46644__$1;
(statearr_46649_46685[(2)] = inst_46620);

(statearr_46649_46685[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46645 === (21))){
var state_46644__$1 = state_46644;
var statearr_46650_46686 = state_46644__$1;
(statearr_46650_46686[(2)] = null);

(statearr_46650_46686[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46645 === (13))){
var inst_46615 = (state_46644[(7)]);
var inst_46622 = cljs.core._EQ_.call(null,inst_46615,(200));
var inst_46623 = cljs.core._EQ_.call(null,inst_46615,(201));
var inst_46624 = (inst_46622) || (inst_46623);
var state_46644__$1 = state_46644;
if(cljs.core.truth_(inst_46624)){
var statearr_46651_46687 = state_46644__$1;
(statearr_46651_46687[(1)] = (16));

} else {
var statearr_46652_46688 = state_46644__$1;
(statearr_46652_46688[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46645 === (22))){
var inst_46638 = (state_46644[(2)]);
var state_46644__$1 = state_46644;
var statearr_46653_46689 = state_46644__$1;
(statearr_46653_46689[(2)] = inst_46638);

(statearr_46653_46689[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46645 === (6))){
var state_46644__$1 = state_46644;
var statearr_46654_46690 = state_46644__$1;
(statearr_46654_46690[(2)] = true);

(statearr_46654_46690[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46645 === (17))){
var state_46644__$1 = state_46644;
var statearr_46655_46691 = state_46644__$1;
(statearr_46655_46691[(1)] = (20));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46645 === (3))){
var inst_46594 = (state_46644[(9)]);
var inst_46599 = inst_46594.cljs$lang$protocol_mask$partition0$;
var inst_46600 = (inst_46599 & (64));
var inst_46601 = inst_46594.cljs$core$ISeq$;
var inst_46602 = (inst_46600) || (inst_46601);
var state_46644__$1 = state_46644;
if(cljs.core.truth_(inst_46602)){
var statearr_46657_46692 = state_46644__$1;
(statearr_46657_46692[(1)] = (6));

} else {
var statearr_46658_46693 = state_46644__$1;
(statearr_46658_46693[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46645 === (12))){
var inst_46614 = (state_46644[(10)]);
var state_46644__$1 = state_46644;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46644__$1,(15),c_conn,inst_46614);
} else {
if((state_val_46645 === (2))){
var inst_46594 = (state_46644[(9)]);
var inst_46594__$1 = (state_46644[(2)]);
var inst_46596 = (inst_46594__$1 == null);
var inst_46597 = cljs.core.not.call(null,inst_46596);
var state_46644__$1 = (function (){var statearr_46659 = state_46644;
(statearr_46659[(9)] = inst_46594__$1);

return statearr_46659;
})();
if(inst_46597){
var statearr_46660_46694 = state_46644__$1;
(statearr_46660_46694[(1)] = (3));

} else {
var statearr_46661_46695 = state_46644__$1;
(statearr_46661_46695[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46645 === (23))){
var inst_46634 = (state_46644[(2)]);
var inst_46635 = cljs.core.async.close_BANG_.call(null,c_conn);
var state_46644__$1 = (function (){var statearr_46662 = state_46644;
(statearr_46662[(11)] = inst_46634);

return statearr_46662;
})();
var statearr_46663_46696 = state_46644__$1;
(statearr_46663_46696[(2)] = inst_46635);

(statearr_46663_46696[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46645 === (19))){
var inst_46627 = (state_46644[(2)]);
var inst_46628 = cljs.core.async.close_BANG_.call(null,c_conn);
var state_46644__$1 = (function (){var statearr_46664 = state_46644;
(statearr_46664[(12)] = inst_46627);

return statearr_46664;
})();
var statearr_46665_46697 = state_46644__$1;
(statearr_46665_46697[(2)] = inst_46628);

(statearr_46665_46697[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46645 === (11))){
var inst_46614 = (state_46644[(10)]);
var inst_46614__$1 = (state_46644[(2)]);
var inst_46615 = cljs.core.get.call(null,inst_46614__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_46616 = (inst_46614__$1 instanceof Error);
var state_46644__$1 = (function (){var statearr_46666 = state_46644;
(statearr_46666[(10)] = inst_46614__$1);

(statearr_46666[(7)] = inst_46615);

return statearr_46666;
})();
if(cljs.core.truth_(inst_46616)){
var statearr_46667_46698 = state_46644__$1;
(statearr_46667_46698[(1)] = (12));

} else {
var statearr_46668_46699 = state_46644__$1;
(statearr_46668_46699[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46645 === (9))){
var inst_46594 = (state_46644[(9)]);
var inst_46611 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46594);
var state_46644__$1 = state_46644;
var statearr_46669_46700 = state_46644__$1;
(statearr_46669_46700[(2)] = inst_46611);

(statearr_46669_46700[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46645 === (5))){
var inst_46609 = (state_46644[(2)]);
var state_46644__$1 = state_46644;
if(cljs.core.truth_(inst_46609)){
var statearr_46670_46701 = state_46644__$1;
(statearr_46670_46701[(1)] = (9));

} else {
var statearr_46671_46702 = state_46644__$1;
(statearr_46671_46702[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46645 === (14))){
var inst_46642 = (state_46644[(2)]);
var state_46644__$1 = state_46644;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46644__$1,inst_46642);
} else {
if((state_val_46645 === (16))){
var state_46644__$1 = state_46644;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46644__$1,(19),c_conn,conn);
} else {
if((state_val_46645 === (10))){
var inst_46594 = (state_46644[(9)]);
var state_46644__$1 = state_46644;
var statearr_46672_46703 = state_46644__$1;
(statearr_46672_46703[(2)] = inst_46594);

(statearr_46672_46703[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46645 === (18))){
var inst_46640 = (state_46644[(2)]);
var state_46644__$1 = state_46644;
var statearr_46673_46704 = state_46644__$1;
(statearr_46673_46704[(2)] = inst_46640);

(statearr_46673_46704[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46645 === (8))){
var inst_46606 = (state_46644[(2)]);
var state_46644__$1 = state_46644;
var statearr_46674_46705 = state_46644__$1;
(statearr_46674_46705[(2)] = inst_46606);

(statearr_46674_46705[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
});})(c__19849__auto___46682,c_conn,conn))
;
return ((function (switch__19828__auto__,c__19849__auto___46682,c_conn,conn){
return (function() {
var datomic_cljs$api$create_database_$_state_machine__19829__auto__ = null;
var datomic_cljs$api$create_database_$_state_machine__19829__auto____0 = (function (){
var statearr_46678 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46678[(0)] = datomic_cljs$api$create_database_$_state_machine__19829__auto__);

(statearr_46678[(1)] = (1));

return statearr_46678;
});
var datomic_cljs$api$create_database_$_state_machine__19829__auto____1 = (function (state_46644){
while(true){
var ret_value__19830__auto__ = (function (){try{while(true){
var result__19831__auto__ = switch__19828__auto__.call(null,state_46644);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19831__auto__;
}
break;
}
}catch (e46679){if((e46679 instanceof Object)){
var ex__19832__auto__ = e46679;
var statearr_46680_46706 = state_46644;
(statearr_46680_46706[(5)] = ex__19832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46679;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46707 = state_46644;
state_46644 = G__46707;
continue;
} else {
return ret_value__19830__auto__;
}
break;
}
});
datomic_cljs$api$create_database_$_state_machine__19829__auto__ = function(state_46644){
switch(arguments.length){
case 0:
return datomic_cljs$api$create_database_$_state_machine__19829__auto____0.call(this);
case 1:
return datomic_cljs$api$create_database_$_state_machine__19829__auto____1.call(this,state_46644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datomic_cljs$api$create_database_$_state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$0 = datomic_cljs$api$create_database_$_state_machine__19829__auto____0;
datomic_cljs$api$create_database_$_state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$1 = datomic_cljs$api$create_database_$_state_machine__19829__auto____1;
return datomic_cljs$api$create_database_$_state_machine__19829__auto__;
})()
;})(switch__19828__auto__,c__19849__auto___46682,c_conn,conn))
})();
var state__19851__auto__ = (function (){var statearr_46681 = f__19850__auto__.call(null);
(statearr_46681[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19849__auto___46682);

return statearr_46681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19851__auto__);
});})(c__19849__auto___46682,c_conn,conn))
);


return c_conn;
});
/**
 * Creates an abstract Datomic value that can be queried.
 */
datomic_cljs.api.db = (function datomic_cljs$api$db(p__46708){
var map__46711 = p__46708;
var map__46711__$1 = ((((!((map__46711 == null)))?((((map__46711.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46711.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46711):map__46711);
var conn = map__46711__$1;
var db_alias = cljs.core.get.call(null,map__46711__$1,new cljs.core.Keyword(null,"db-alias","db-alias",-506132914));
return datomic_cljs.api.__GT_DatomicDB.call(null,conn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","alias","db/alias",-2039754316),db_alias], null),cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Returns the value of the database as of some point t, inclusive.
 * t can be a transaction number, transaction ID, or inst.
 */
datomic_cljs.api.as_of = (function datomic_cljs$api$as_of(db,t){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"implicit-args","implicit-args",-1513797387)], null),cljs.core.assoc,new cljs.core.Keyword(null,"as-of","as-of",-1841962382),t);
});
/**
 * Returns the value of the database since some point t, exclusive.
 * t can be a transaction number, transaction ID, or inst.
 */
datomic_cljs.api.since = (function datomic_cljs$api$since(db,t){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"implicit-args","implicit-args",-1513797387)], null),cljs.core.assoc,new cljs.core.Keyword(null,"since","since",315379842),t);
});
/**
 * Returns a special database value containing all assertions and
 * retractions across time. This database value can be used with
 * datoms and index-range calls.
 */
datomic_cljs.api.history = (function datomic_cljs$api$history(db){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"implicit-qs","implicit-qs",-1615226550)], null),cljs.core.assoc,new cljs.core.Keyword(null,"history","history",-247395220),true);
});
/**
 * Returns a value of the database that limits the number of results
 * from query and datoms to given number n.
 */
datomic_cljs.api.limit = (function datomic_cljs$api$limit(db,n){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"implicit-qs","implicit-qs",-1615226550)], null),cljs.core.assoc,new cljs.core.Keyword(null,"limit","limit",-1355822363),n);
});
/**
 * Returns a value of the database that offsets the results of query
 * and datoms by given number n.
 */
datomic_cljs.api.offset = (function datomic_cljs$api$offset(db,n){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"implicit-qs","implicit-qs",-1615226550)], null),cljs.core.assoc,new cljs.core.Keyword(null,"offset","offset",296498311),n);
});
/**
 * Returns the as-of point, or nil if none.
 */
datomic_cljs.api.as_of_t = (function datomic_cljs$api$as_of_t(p__46713){
var map__46718 = p__46713;
var map__46718__$1 = ((((!((map__46718 == null)))?((((map__46718.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46718.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46718):map__46718);
var map__46719 = cljs.core.get.call(null,map__46718__$1,new cljs.core.Keyword(null,"implicit-args","implicit-args",-1513797387));
var map__46719__$1 = ((((!((map__46719 == null)))?((((map__46719.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46719.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46719):map__46719);
var as_of = cljs.core.get.call(null,map__46719__$1,new cljs.core.Keyword(null,"as-of","as-of",-1841962382));
return as_of;
});
/**
 * Returns the since point, or nil if none.
 */
datomic_cljs.api.since_t = (function datomic_cljs$api$since_t(p__46722){
var map__46727 = p__46722;
var map__46727__$1 = ((((!((map__46727 == null)))?((((map__46727.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46727.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46727):map__46727);
var map__46728 = cljs.core.get.call(null,map__46727__$1,new cljs.core.Keyword(null,"implicit-args","implicit-args",-1513797387));
var map__46728__$1 = ((((!((map__46728 == null)))?((((map__46728.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46728.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46728):map__46728);
var since = cljs.core.get.call(null,map__46728__$1,new cljs.core.Keyword(null,"since","since",315379842));
return since;
});
/**
 * Returns a core.async channel eventually containing the t of the
 * the most recent transaction available via this db value.
 */
datomic_cljs.api.basis_t = (function datomic_cljs$api$basis_t(db){
return datomic_cljs.api._basis_t.call(null,db);
});
/**
 * Submits a transaction to the database for writing. The transaction
 * data is sent to the Transactor and, if transactAsync, processed
 * asynchronously.
 * 
 * tx-data is a list of lists, each of which specifies a write
 * operation, either an assertion, a retraction or the invocation of
 * a data function. Each nested list starts with a keyword identifying
 * the operation followed by the arguments for the operation.
 * 
 * Returns a core.async channel that will contain a map with the
 * following keys:
 * 
 *   :db-before, the database value before the transaction;
 *   :db-after, the database value after the transaction;
 *   :tx-data, the collection of Datums produced by the transaction;
 *   :tempids, an argument to resolve-tempids.
 */
datomic_cljs.api.transact = (function datomic_cljs$api$transact(conn,tx_data){
var f = (function (body){
if(cljs.core.map_QMARK_.call(null,body)){
return cljs.core.assoc.call(null,body,new cljs.core.Keyword(null,"db-before","db-before",-553691536),datomic_cljs.api.as_of.call(null,datomic_cljs.api.db.call(null,conn),cljs.core.get_in.call(null,body,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),new cljs.core.Keyword(null,"basis-t","basis-t",-1424075730)], null))),new cljs.core.Keyword(null,"db-after","db-after",-571884666),datomic_cljs.api.as_of.call(null,datomic_cljs.api.db.call(null,conn),cljs.core.get_in.call(null,body,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-after","db-after",-571884666),new cljs.core.Keyword(null,"basis-t","basis-t",-1424075730)], null))));
} else {
return body;
}
});
return cljs.core.async.map.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [datomic_cljs.api._transact.call(null,conn,((typeof tx_data === 'string')?tx_data:cljs.core.prn_str.call(null,tx_data)))], null),(1));
});
/**
 * Execute a query against a database value with inputs. Returns a
 * core.async channel that will contain the result of the query, and
 * will be closed when the query is complete.
 */
datomic_cljs.api.q = (function datomic_cljs$api$q(var_args){
var args__18590__auto__ = [];
var len__18583__auto___46734 = arguments.length;
var i__18584__auto___46735 = (0);
while(true){
if((i__18584__auto___46735 < len__18583__auto___46734)){
args__18590__auto__.push((arguments[i__18584__auto___46735]));

var G__46736 = (i__18584__auto___46735 + (1));
i__18584__auto___46735 = G__46736;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((2) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((2)),(0))):null);
return datomic_cljs.api.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18591__auto__);
});

datomic_cljs.api.q.cljs$core$IFn$_invoke$arity$variadic = (function (query,db,inputs){
return datomic_cljs.api._q.call(null,db,query,inputs);
});

datomic_cljs.api.q.cljs$lang$maxFixedArity = (2);

datomic_cljs.api.q.cljs$lang$applyTo = (function (seq46731){
var G__46732 = cljs.core.first.call(null,seq46731);
var seq46731__$1 = cljs.core.next.call(null,seq46731);
var G__46733 = cljs.core.first.call(null,seq46731__$1);
var seq46731__$2 = cljs.core.next.call(null,seq46731__$1);
return datomic_cljs.api.q.cljs$core$IFn$_invoke$arity$variadic(G__46732,G__46733,seq46731__$2);
});
datomic_cljs.api.q_ffirst = (function datomic_cljs$api$q_ffirst(var_args){
var args__18590__auto__ = [];
var len__18583__auto___46772 = arguments.length;
var i__18584__auto___46773 = (0);
while(true){
if((i__18584__auto___46773 < len__18583__auto___46772)){
args__18590__auto__.push((arguments[i__18584__auto___46773]));

var G__46774 = (i__18584__auto___46773 + (1));
i__18584__auto___46773 = G__46774;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((2) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((2)),(0))):null);
return datomic_cljs.api.q_ffirst.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18591__auto__);
});

datomic_cljs.api.q_ffirst.cljs$core$IFn$_invoke$arity$variadic = (function (query,db,inputs){
var c_res = cljs.core.async.chan.call(null,(1));
var c__19849__auto___46775 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19849__auto___46775,c_res){
return (function (){
var f__19850__auto__ = (function (){var switch__19828__auto__ = ((function (c__19849__auto___46775,c_res){
return (function (state_46756){
var state_val_46757 = (state_46756[(1)]);
if((state_val_46757 === (1))){
var inst_46740 = cljs.core.apply.call(null,datomic_cljs.api.q,query,db,inputs);
var state_46756__$1 = state_46756;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46756__$1,(2),inst_46740);
} else {
if((state_val_46757 === (2))){
var inst_46742 = (state_46756[(7)]);
var inst_46742__$1 = (state_46756[(2)]);
var inst_46743 = (inst_46742__$1 instanceof Error);
var state_46756__$1 = (function (){var statearr_46758 = state_46756;
(statearr_46758[(7)] = inst_46742__$1);

return statearr_46758;
})();
if(cljs.core.truth_(inst_46743)){
var statearr_46759_46776 = state_46756__$1;
(statearr_46759_46776[(1)] = (3));

} else {
var statearr_46760_46777 = state_46756__$1;
(statearr_46760_46777[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46757 === (3))){
var inst_46742 = (state_46756[(7)]);
var state_46756__$1 = state_46756;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46756__$1,(6),c_res,inst_46742);
} else {
if((state_val_46757 === (4))){
var inst_46742 = (state_46756[(7)]);
var inst_46749 = cljs.core.ffirst.call(null,inst_46742);
var state_46756__$1 = state_46756;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46756__$1,(7),c_res,inst_46749);
} else {
if((state_val_46757 === (5))){
var inst_46754 = (state_46756[(2)]);
var state_46756__$1 = state_46756;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46756__$1,inst_46754);
} else {
if((state_val_46757 === (6))){
var inst_46746 = (state_46756[(2)]);
var inst_46747 = cljs.core.async.close_BANG_.call(null,c_res);
var state_46756__$1 = (function (){var statearr_46761 = state_46756;
(statearr_46761[(8)] = inst_46746);

return statearr_46761;
})();
var statearr_46762_46778 = state_46756__$1;
(statearr_46762_46778[(2)] = inst_46747);

(statearr_46762_46778[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46757 === (7))){
var inst_46751 = (state_46756[(2)]);
var inst_46752 = cljs.core.async.close_BANG_.call(null,c_res);
var state_46756__$1 = (function (){var statearr_46763 = state_46756;
(statearr_46763[(9)] = inst_46751);

return statearr_46763;
})();
var statearr_46764_46779 = state_46756__$1;
(statearr_46764_46779[(2)] = inst_46752);

(statearr_46764_46779[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__19849__auto___46775,c_res))
;
return ((function (switch__19828__auto__,c__19849__auto___46775,c_res){
return (function() {
var datomic_cljs$api$state_machine__19829__auto__ = null;
var datomic_cljs$api$state_machine__19829__auto____0 = (function (){
var statearr_46768 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46768[(0)] = datomic_cljs$api$state_machine__19829__auto__);

(statearr_46768[(1)] = (1));

return statearr_46768;
});
var datomic_cljs$api$state_machine__19829__auto____1 = (function (state_46756){
while(true){
var ret_value__19830__auto__ = (function (){try{while(true){
var result__19831__auto__ = switch__19828__auto__.call(null,state_46756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19831__auto__;
}
break;
}
}catch (e46769){if((e46769 instanceof Object)){
var ex__19832__auto__ = e46769;
var statearr_46770_46780 = state_46756;
(statearr_46770_46780[(5)] = ex__19832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46781 = state_46756;
state_46756 = G__46781;
continue;
} else {
return ret_value__19830__auto__;
}
break;
}
});
datomic_cljs$api$state_machine__19829__auto__ = function(state_46756){
switch(arguments.length){
case 0:
return datomic_cljs$api$state_machine__19829__auto____0.call(this);
case 1:
return datomic_cljs$api$state_machine__19829__auto____1.call(this,state_46756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datomic_cljs$api$state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$0 = datomic_cljs$api$state_machine__19829__auto____0;
datomic_cljs$api$state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$1 = datomic_cljs$api$state_machine__19829__auto____1;
return datomic_cljs$api$state_machine__19829__auto__;
})()
;})(switch__19828__auto__,c__19849__auto___46775,c_res))
})();
var state__19851__auto__ = (function (){var statearr_46771 = f__19850__auto__.call(null);
(statearr_46771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19849__auto___46775);

return statearr_46771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19851__auto__);
});})(c__19849__auto___46775,c_res))
);


return c_res;
});

datomic_cljs.api.q_ffirst.cljs$lang$maxFixedArity = (2);

datomic_cljs.api.q_ffirst.cljs$lang$applyTo = (function (seq46737){
var G__46738 = cljs.core.first.call(null,seq46737);
var seq46737__$1 = cljs.core.next.call(null,seq46737);
var G__46739 = cljs.core.first.call(null,seq46737__$1);
var seq46737__$2 = cljs.core.next.call(null,seq46737__$1);
return datomic_cljs.api.q_ffirst.cljs$core$IFn$_invoke$arity$variadic(G__46738,G__46739,seq46737__$2);
});
/**
 * Returns a map of the entity's attributes for the given id.
 */
datomic_cljs.api.entity = (function datomic_cljs$api$entity(db,eid){
return datomic_cljs.api._entity.call(null,db,eid);
});
/**
 * Returns a core.async channel that will contain the entity id
 * associated with a symbolic keyword, or the id itself if passed.
 */
datomic_cljs.api.entid = (function datomic_cljs$api$entid(db,ident){
if(typeof ident === 'number'){
return datomic_cljs.util.singleton_chan.call(null,ident);
} else {
return datomic_cljs.api.q_ffirst.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?ident","?ident",1230589912,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Symbol(null,"?ident","?ident",1230589912,null)], null)], null),db,ident);
}
});
/**
 * Returns a core.async channel that will contain the ident
 * associated with an entity id, or the ident itself if passed.
 */
datomic_cljs.api.ident = (function datomic_cljs$api$ident(db,eid){
if((eid instanceof cljs.core.Keyword)){
return datomic_cljs.util.singleton_chan.call(null,eid);
} else {
return datomic_cljs.api.q_ffirst.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?ident","?ident",1230589912,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Symbol(null,"?ident","?ident",1230589912,null)], null)], null),db,eid);
}
});
/**
 * Raw access to the index data, by index. The index must be
 * supplied, along with optional leading components.
 */
datomic_cljs.api.datoms = (function datomic_cljs$api$datoms(var_args){
var args__18590__auto__ = [];
var len__18583__auto___46788 = arguments.length;
var i__18584__auto___46789 = (0);
while(true){
if((i__18584__auto___46789 < len__18583__auto___46788)){
args__18590__auto__.push((arguments[i__18584__auto___46789]));

var G__46790 = (i__18584__auto___46789 + (1));
i__18584__auto___46789 = G__46790;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((2) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((2)),(0))):null);
return datomic_cljs.api.datoms.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18591__auto__);
});

datomic_cljs.api.datoms.cljs$core$IFn$_invoke$arity$variadic = (function (db,index,p__46785){
var map__46786 = p__46785;
var map__46786__$1 = ((((!((map__46786 == null)))?((((map__46786.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46786.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46786):map__46786);
var components = map__46786__$1;
return datomic_cljs.api._datoms.call(null,db,index,components);
});

datomic_cljs.api.datoms.cljs$lang$maxFixedArity = (2);

datomic_cljs.api.datoms.cljs$lang$applyTo = (function (seq46782){
var G__46783 = cljs.core.first.call(null,seq46782);
var seq46782__$1 = cljs.core.next.call(null,seq46782);
var G__46784 = cljs.core.first.call(null,seq46782__$1);
var seq46782__$2 = cljs.core.next.call(null,seq46782__$1);
return datomic_cljs.api.datoms.cljs$core$IFn$_invoke$arity$variadic(G__46783,G__46784,seq46782__$2);
});
/**
 * Returns a range of datoms in the given index, starting from start,
 * or the beginning if start is nil, and going to end, or through the
 * end if end is nil.
 */
datomic_cljs.api.index_range = (function datomic_cljs$api$index_range(db,index,start,end){
return datomic_cljs.api._datoms.call(null,db,index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"end","end",-268185958),end], null));
});
/**
 * Returns the current time rounded to the nearest second.
 */
datomic_cljs.api.squuid_seconds_component = (function datomic_cljs$api$squuid_seconds_component(){
return Math.round((Date.now() / (1000)));
});
/**
 * Constructs a semi-sequential UUID. Useful for creating UUIDs that
 * don't fragment indexes. Returns a UUID whose most significant 32
 * bits are the current time in milliseconds, rounded to the nearest
 * second.
 */
datomic_cljs.api.squuid = (function datomic_cljs$api$squuid(){
var seconds_hex = datomic_cljs.api.squuid_seconds_component.call(null).toString((16));
var trailing = "-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace((new RegExp("[xy]","g")),((function (seconds_hex){
return (function (c){
var r = (((16) * Math.random()) | (0));
var v = ((cljs.core._EQ_.call(null,c,"x"))?r:((r & (3)) | (8)));
return v.toString((16));
});})(seconds_hex))
);
return (new cljs.core.UUID([cljs.core.str(seconds_hex),cljs.core.str(trailing)].join('')));
});
/**
 * Get the time part of a squuid.
 */
datomic_cljs.api.squuid_time_millis = (function datomic_cljs$api$squuid_time_millis(squuid){
return (parseInt(squuid.uuid.slice((0),(8)),(16)) * (1000));
});

//# sourceMappingURL=api.js.map?rel=1452702581034