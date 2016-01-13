// Compiled by ClojureScript 1.7.170 {}

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns err core-async pr log logic fn cbase tpred]
*/
goog.provide('quantum.db.datomic.core');
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
goog.require('cljs.core');
goog.require('quantum.core.function$');
goog.require('fast_zip.core');
goog.require('datascript.core');
goog.require('datomic_cljs.api');
goog.require('quantum.core.ns');
goog.require('quantum.core.collections.base');
goog.require('quantum.core.error');
goog.require('com.stuartsierra.component');
if(typeof quantum.db.datomic.core.db_STAR_ !== 'undefined'){
} else {
quantum.db.datomic.core.db_STAR_ = cljs.core.atom.call(null,null);
}
if(typeof quantum.db.datomic.core.conn_STAR_ !== 'undefined'){
} else {
quantum.db.datomic.core.conn_STAR_ = cljs.core.atom.call(null,null);
}
if(typeof quantum.db.datomic.core.part_STAR_ !== 'undefined'){
} else {
quantum.db.datomic.core.part_STAR_ = cljs.core.atom.call(null,null);
}
quantum.db.datomic.core.unhandled_type = (function quantum$db$datomic$core$unhandled_type(type,obj){
var pred__46926 = cljs.core._EQ_;
var expr__46927 = type;
if(cljs.core.truth_(pred__46926.call(null,new cljs.core.Keyword(null,"conn","conn",278309663),expr__46927))){
return quantum.core.error.__GT_ex.call(null,new cljs.core.Keyword(null,"unhandled-predicate","unhandled-predicate",1649012890),"Object is not mconn, conn, or db",obj);
} else {
if(cljs.core.truth_(pred__46926.call(null,new cljs.core.Keyword(null,"db","db",993250759),expr__46927))){
return quantum.core.error.__GT_ex.call(null,new cljs.core.Keyword(null,"unhandled-predicate","unhandled-predicate",1649012890),"Object is not mdb or db",obj);
} else {
if(cljs.core.truth_(pred__46926.call(null,new cljs.core.Keyword(null,"entity","entity",-450970276),expr__46927))){
return quantum.core.error.__GT_ex.call(null,new cljs.core.Keyword(null,"unhandled-predicate","unhandled-predicate",1649012890),"Object is not mentity or entity",obj);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__46927)].join('')));
}
}
}
});
var orig_var__2273__auto___46929 = new cljs.core.Var(function(){return datascript.impl.entity.entity_QMARK_;},new cljs.core.Symbol("datascript.impl.entity","entity?","datascript.impl.entity/entity?",1686472137,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"datascript.impl.entity","datascript.impl.entity",1561405407,null),new cljs.core.Symbol(null,"entity?","entity?",555338193,null),"dev-resources/public/js/compiled/out/datascript/impl/entity.cljc",14,1,145,145,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),null,(cljs.core.truth_(datascript.impl.entity.entity_QMARK_)?datascript.impl.entity.entity_QMARK_.cljs$lang$test:null)]));
quantum.db.datomic.core.mentity_QMARK_ = cljs.core.with_meta.call(null,cljs.core.deref.call(null,new cljs.core.Var(function(){return datascript.impl.entity.entity_QMARK_;},new cljs.core.Symbol("datascript.impl.entity","entity?","datascript.impl.entity/entity?",1686472137,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"datascript.impl.entity","datascript.impl.entity",1561405407,null),new cljs.core.Symbol(null,"entity?","entity?",555338193,null),"dev-resources/public/js/compiled/out/datascript/impl/entity.cljc",14,1,145,145,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),null,(cljs.core.truth_(datascript.impl.entity.entity_QMARK_)?datascript.impl.entity.entity_QMARK_.cljs$lang$test:null)]))),cljs.core.meta.call(null,new cljs.core.Var(function(){return datascript.impl.entity.entity_QMARK_;},new cljs.core.Symbol("datascript.impl.entity","entity?","datascript.impl.entity/entity?",1686472137,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"datascript.impl.entity","datascript.impl.entity",1561405407,null),new cljs.core.Symbol(null,"entity?","entity?",555338193,null),"dev-resources/public/js/compiled/out/datascript/impl/entity.cljc",14,1,145,145,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),null,(cljs.core.truth_(datascript.impl.entity.entity_QMARK_)?datascript.impl.entity.entity_QMARK_.cljs$lang$test:null)]))));

if(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,orig_var__2273__auto___46929)) === true){
cljs.core.alter_meta_BANG_.call(null,new cljs.core.Var(function(){return quantum.db.datomic.core.mentity_QMARK_;},new cljs.core.Symbol("quantum.db.datomic.core","mentity?","quantum.db.datomic.core/mentity?",-1384831470,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"quantum.db.datomic.core","quantum.db.datomic.core",-115342979,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"The core Datomic (and friends, e.g. DataScript) namespace"], null)),new cljs.core.Symbol(null,"mentity?","mentity?",-263298775,null),"src/cljc/quantum/db/datomic/core.cljc",19,1,54,54,cljs.core.List.EMPTY,null,(cljs.core.truth_(quantum.db.datomic.core.mentity_QMARK_)?quantum.db.datomic.core.mentity_QMARK_.cljs$lang$test:null)])),cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
} else {
}


new cljs.core.Var(function(){return quantum.db.datomic.core.mentity_QMARK_;},new cljs.core.Symbol("quantum.db.datomic.core","mentity?","quantum.db.datomic.core/mentity?",-1384831470,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"quantum.db.datomic.core","quantum.db.datomic.core",-115342979,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"The core Datomic (and friends, e.g. DataScript) namespace"], null)),new cljs.core.Symbol(null,"mentity?","mentity?",-263298775,null),"src/cljc/quantum/db/datomic/core.cljc",19,1,54,54,cljs.core.List.EMPTY,null,(cljs.core.truth_(quantum.db.datomic.core.mentity_QMARK_)?quantum.db.datomic.core.mentity_QMARK_.cljs$lang$test:null)]));
quantum.db.datomic.core.db_QMARK_ = cljs.core.partial.call(null,cljs.core.instance_QMARK_,datomic_cljs.api.DatomicDB);
/**
 * 'mdb' because checks if it is an in-*mem*ory database.
 */
quantum.db.datomic.core.mdb_QMARK_ = cljs.core.partial.call(null,cljs.core.instance_QMARK_,datascript.db.DB);
quantum.db.datomic.core.conn_QMARK_ = cljs.core.partial.call(null,cljs.core.instance_QMARK_,datomic_cljs.api.DatomicConnection);
quantum.db.datomic.core.mconn_QMARK_ = (function quantum$db$datomic$core$mconn_QMARK_(x){
var and__17513__auto__ = quantum.core.type.predicates.atom_QMARK_.call(null,x);
if(cljs.core.truth_(and__17513__auto__)){
return quantum.db.datomic.core.mdb_QMARK_.call(null,cljs.core.deref.call(null,x));
} else {
return and__17513__auto__;
}
});
quantum.db.datomic.core.db__GT_seq = (function quantum$db$datomic$core$db__GT_seq(db){
if(cljs.core.truth_(quantum.db.datomic.core.mdb_QMARK_.call(null,db))){
return cljs.core.map.call(null,(function (d){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Keyword(null,"tx","tx",466630418).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"added","added",2057651688),new cljs.core.Keyword(null,"added","added",2057651688).cljs$core$IFn$_invoke$arity$1(d)], null);
}),db);
} else {
throw quantum.core.error.__GT_ex.call(null,null,"Not supported for",db);
}
});
/**
 * Assumes @history is a seq of DataScript DBs.
 */
quantum.db.datomic.core.history__GT_seq = (function quantum$db$datomic$core$history__GT_seq(history){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,quantum.db.datomic.core.db__GT_seq,history));
});
/**
 * Arity 0: Tries to find a database object in the global variables.
 * Arity 1: Tries to coerce @arg to a database-like object
 */
quantum.db.datomic.core.__GT_db = (function quantum$db$datomic$core$__GT_db(var_args){
var args46930 = [];
var len__18583__auto___46933 = arguments.length;
var i__18584__auto___46934 = (0);
while(true){
if((i__18584__auto___46934 < len__18583__auto___46933)){
args46930.push((arguments[i__18584__auto___46934]));

var G__46935 = (i__18584__auto___46934 + (1));
i__18584__auto___46934 = G__46935;
continue;
} else {
}
break;
}

var G__46932 = args46930.length;
switch (G__46932) {
case 0:
return quantum.db.datomic.core.__GT_db.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return quantum.db.datomic.core.__GT_db.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46930.length)].join('')));

}
});

quantum.db.datomic.core.__GT_db.cljs$core$IFn$_invoke$arity$0 = (function (){
var db_STAR__f = cljs.core.deref.call(null,quantum.db.datomic.core.db_STAR_);
var conn_STAR__f = cljs.core.deref.call(null,quantum.db.datomic.core.conn_STAR_);
var or__17525__auto__ = db_STAR__f;
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return quantum.db.datomic.core.__GT_db.call(null,conn_STAR__f);
}
});

quantum.db.datomic.core.__GT_db.cljs$core$IFn$_invoke$arity$1 = (function (arg){
if(cljs.core.truth_(quantum.db.datomic.core.mconn_QMARK_.call(null,arg))){
return cljs.core.deref.call(null,arg);
} else {
if(cljs.core.truth_(quantum.db.datomic.core.conn_QMARK_.call(null,arg))){
return datomic_cljs.api.db.call(null,arg);
} else {
throw quantum.core.error.__GT_ex.call(null,null,"Object cannot be transformed into database",arg);

}
}
});

quantum.db.datomic.core.__GT_db.cljs$lang$maxFixedArity = 1;
quantum.db.datomic.core.touch = (function quantum$db$datomic$core$touch(entity){
if(cljs.core.truth_(quantum.db.datomic.core.mentity_QMARK_.call(null,entity))){
return datascript.core.touch.call(null,entity);
} else {
throw quantum.db.datomic.core.unhandled_type.call(null,new cljs.core.Keyword(null,"entity","entity",-450970276),entity);

}
});
quantum.db.datomic.core.q = (function quantum$db$datomic$core$q(var_args){
var args46937 = [];
var len__18583__auto___46943 = arguments.length;
var i__18584__auto___46944 = (0);
while(true){
if((i__18584__auto___46944 < len__18583__auto___46943)){
args46937.push((arguments[i__18584__auto___46944]));

var G__46945 = (i__18584__auto___46944 + (1));
i__18584__auto___46944 = G__46945;
continue;
} else {
}
break;
}

var G__46942 = args46937.length;
switch (G__46942) {
case 1:
return quantum.db.datomic.core.q.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__18602__auto__ = (new cljs.core.IndexedSeq(args46937.slice((2)),(0)));
return quantum.db.datomic.core.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18602__auto__);

}
});

quantum.db.datomic.core.q.cljs$core$IFn$_invoke$arity$1 = (function (query){
return quantum.db.datomic.core.q.call(null,query,quantum.db.datomic.core.__GT_db.call(null));
});

quantum.db.datomic.core.q.cljs$core$IFn$_invoke$arity$variadic = (function (query,db,args){
if(cljs.core.truth_(quantum.db.datomic.core.mdb_QMARK_.call(null,db))){
return cljs.core.apply.call(null,datascript.core.q,query,db,args);
} else {
if(cljs.core.truth_(quantum.db.datomic.core.db_QMARK_.call(null,db))){
return cljs.core.apply.call(null,datomic_cljs.api.q,query,db,args);
} else {
throw quantum.db.datomic.core.unhandled_type.call(null,new cljs.core.Keyword(null,"db","db",993250759),db);

}
}
});

quantum.db.datomic.core.q.cljs$lang$applyTo = (function (seq46938){
var G__46939 = cljs.core.first.call(null,seq46938);
var seq46938__$1 = cljs.core.next.call(null,seq46938);
var G__46940 = cljs.core.first.call(null,seq46938__$1);
var seq46938__$2 = cljs.core.next.call(null,seq46938__$1);
return quantum.db.datomic.core.q.cljs$core$IFn$_invoke$arity$variadic(G__46939,G__46940,seq46938__$2);
});

quantum.db.datomic.core.q.cljs$lang$maxFixedArity = (2);
quantum.db.datomic.core.entity = (function quantum$db$datomic$core$entity(var_args){
var args46947 = [];
var len__18583__auto___46950 = arguments.length;
var i__18584__auto___46951 = (0);
while(true){
if((i__18584__auto___46951 < len__18583__auto___46950)){
args46947.push((arguments[i__18584__auto___46951]));

var G__46952 = (i__18584__auto___46951 + (1));
i__18584__auto___46951 = G__46952;
continue;
} else {
}
break;
}

var G__46949 = args46947.length;
switch (G__46949) {
case 1:
return quantum.db.datomic.core.entity.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quantum.db.datomic.core.entity.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46947.length)].join('')));

}
});

quantum.db.datomic.core.entity.cljs$core$IFn$_invoke$arity$1 = (function (eid){
return quantum.db.datomic.core.entity.call(null,quantum.db.datomic.core.__GT_db.call(null),eid);
});

quantum.db.datomic.core.entity.cljs$core$IFn$_invoke$arity$2 = (function (db,eid){
if(cljs.core.truth_(quantum.db.datomic.core.mdb_QMARK_.call(null,db))){
return datascript.core.entity.call(null,db,eid);
} else {
if(cljs.core.truth_(quantum.db.datomic.core.db_QMARK_.call(null,db))){
return datomic_cljs.api.entity.call(null,db,eid);
} else {
throw quantum.db.datomic.core.unhandled_type.call(null,new cljs.core.Keyword(null,"db","db",993250759),db);

}
}
});

quantum.db.datomic.core.entity.cljs$lang$maxFixedArity = 2;
quantum.db.datomic.core.entity_db = (function quantum$db$datomic$core$entity_db(entity){
if(cljs.core.truth_(quantum.db.datomic.core.mentity_QMARK_.call(null,entity))){
return datascript.core.entity_db.call(null,entity);
} else {
throw quantum.db.datomic.core.unhandled_type.call(null,new cljs.core.Keyword(null,"entity","entity",-450970276),entity);

}
});
quantum.db.datomic.core.tempid = (function quantum$db$datomic$core$tempid(var_args){
var args46954 = [];
var len__18583__auto___46957 = arguments.length;
var i__18584__auto___46958 = (0);
while(true){
if((i__18584__auto___46958 < len__18583__auto___46957)){
args46954.push((arguments[i__18584__auto___46958]));

var G__46959 = (i__18584__auto___46958 + (1));
i__18584__auto___46958 = G__46959;
continue;
} else {
}
break;
}

var G__46956 = args46954.length;
switch (G__46956) {
case 1:
return quantum.db.datomic.core.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quantum.db.datomic.core.tempid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46954.length)].join('')));

}
});

quantum.db.datomic.core.tempid.cljs$core$IFn$_invoke$arity$1 = (function (part){
return quantum.db.datomic.core.tempid.call(null,cljs.core.deref.call(null,quantum.db.datomic.core.conn_STAR_),part);
});

quantum.db.datomic.core.tempid.cljs$core$IFn$_invoke$arity$2 = (function (conn,part){
if(cljs.core.truth_(quantum.db.datomic.core.mconn_QMARK_.call(null,conn))){
return datascript.core.tempid.call(null,part);
} else {
if(cljs.core.truth_(quantum.db.datomic.core.db_QMARK_.call(null,conn))){
return datomic_cljs.api.tempid.call(null,part);
} else {
throw quantum.db.datomic.core.unhandled_type.call(null,new cljs.core.Keyword(null,"conn","conn",278309663),conn);

}
}
});

quantum.db.datomic.core.tempid.cljs$lang$maxFixedArity = 2;
quantum.db.datomic.core.pull = (function quantum$db$datomic$core$pull(var_args){
var args46961 = [];
var len__18583__auto___46964 = arguments.length;
var i__18584__auto___46965 = (0);
while(true){
if((i__18584__auto___46965 < len__18583__auto___46964)){
args46961.push((arguments[i__18584__auto___46965]));

var G__46966 = (i__18584__auto___46965 + (1));
i__18584__auto___46965 = G__46966;
continue;
} else {
}
break;
}

var G__46963 = args46961.length;
switch (G__46963) {
case 2:
return quantum.db.datomic.core.pull.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quantum.db.datomic.core.pull.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46961.length)].join('')));

}
});

quantum.db.datomic.core.pull.cljs$core$IFn$_invoke$arity$2 = (function (selector,eid){
return quantum.db.datomic.core.pull.call(null,quantum.db.datomic.core.__GT_db.call(null),selector,eid);
});

quantum.db.datomic.core.pull.cljs$core$IFn$_invoke$arity$3 = (function (db,selector,eid){
if(cljs.core.truth_(quantum.db.datomic.core.mdb_QMARK_.call(null,db))){
return datascript.core.pull.call(null,db,selector,eid);
} else {
throw quantum.db.datomic.core.unhandled_type.call(null,new cljs.core.Keyword(null,"db","db",993250759),db);

}
});

quantum.db.datomic.core.pull.cljs$lang$maxFixedArity = 3;
quantum.db.datomic.core.pull_many = (function quantum$db$datomic$core$pull_many(var_args){
var args46968 = [];
var len__18583__auto___46971 = arguments.length;
var i__18584__auto___46972 = (0);
while(true){
if((i__18584__auto___46972 < len__18583__auto___46971)){
args46968.push((arguments[i__18584__auto___46972]));

var G__46973 = (i__18584__auto___46972 + (1));
i__18584__auto___46972 = G__46973;
continue;
} else {
}
break;
}

var G__46970 = args46968.length;
switch (G__46970) {
case 2:
return quantum.db.datomic.core.pull_many.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quantum.db.datomic.core.pull_many.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46968.length)].join('')));

}
});

quantum.db.datomic.core.pull_many.cljs$core$IFn$_invoke$arity$2 = (function (selector,eids){
return quantum.db.datomic.core.pull_many.call(null,quantum.db.datomic.core.db_STAR_.call(null),selector,eids);
});

quantum.db.datomic.core.pull_many.cljs$core$IFn$_invoke$arity$3 = (function (db,selector,eids){
if(cljs.core.truth_(quantum.db.datomic.core.mdb_QMARK_.call(null,db))){
return datascript.core.pull_many.call(null,db,selector,eids);
} else {
throw quantum.db.datomic.core.unhandled_type.call(null,new cljs.core.Keyword(null,"db","db",993250759),db);

}
});

quantum.db.datomic.core.pull_many.cljs$lang$maxFixedArity = 3;
quantum.db.datomic.core.is_filtered = (function quantum$db$datomic$core$is_filtered(var_args){
var args46975 = [];
var len__18583__auto___46978 = arguments.length;
var i__18584__auto___46979 = (0);
while(true){
if((i__18584__auto___46979 < len__18583__auto___46978)){
args46975.push((arguments[i__18584__auto___46979]));

var G__46980 = (i__18584__auto___46979 + (1));
i__18584__auto___46979 = G__46980;
continue;
} else {
}
break;
}

var G__46977 = args46975.length;
switch (G__46977) {
case 0:
return quantum.db.datomic.core.is_filtered.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return quantum.db.datomic.core.is_filtered.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46975.length)].join('')));

}
});

quantum.db.datomic.core.is_filtered.cljs$core$IFn$_invoke$arity$0 = (function (){
return quantum.db.datomic.core.is_filtered.call(null,quantum.db.datomic.core.__GT_db.call(null));
});

quantum.db.datomic.core.is_filtered.cljs$core$IFn$_invoke$arity$1 = (function (db){
return (db instanceof datascript.db.FilteredDB);
});

quantum.db.datomic.core.is_filtered.cljs$lang$maxFixedArity = 1;
var orig_var__2273__auto___46982 = new cljs.core.Var(function(){return quantum.db.datomic.core.is_filtered;},new cljs.core.Symbol("quantum.db.datomic.core","is-filtered","quantum.db.datomic.core/is-filtered",-389130920,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"quantum.db.datomic.core","quantum.db.datomic.core",-115342979,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"The core Datomic (and friends, e.g. DataScript) namespace"], null)),new cljs.core.Symbol(null,"is-filtered","is-filtered",230239847,null),"src/cljc/quantum/db/datomic/core.cljc",18,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),1,new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,154,154,cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)),null,(cljs.core.truth_(quantum.db.datomic.core.is_filtered)?quantum.db.datomic.core.is_filtered.cljs$lang$test:null)]));
quantum.db.datomic.core.filtered_QMARK_ = cljs.core.with_meta.call(null,cljs.core.deref.call(null,new cljs.core.Var(function(){return quantum.db.datomic.core.is_filtered;},new cljs.core.Symbol("quantum.db.datomic.core","is-filtered","quantum.db.datomic.core/is-filtered",-389130920,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"quantum.db.datomic.core","quantum.db.datomic.core",-115342979,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"The core Datomic (and friends, e.g. DataScript) namespace"], null)),new cljs.core.Symbol(null,"is-filtered","is-filtered",230239847,null),"src/cljc/quantum/db/datomic/core.cljc",18,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),1,new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,154,154,cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)),null,(cljs.core.truth_(quantum.db.datomic.core.is_filtered)?quantum.db.datomic.core.is_filtered.cljs$lang$test:null)]))),cljs.core.meta.call(null,new cljs.core.Var(function(){return quantum.db.datomic.core.is_filtered;},new cljs.core.Symbol("quantum.db.datomic.core","is-filtered","quantum.db.datomic.core/is-filtered",-389130920,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"quantum.db.datomic.core","quantum.db.datomic.core",-115342979,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"The core Datomic (and friends, e.g. DataScript) namespace"], null)),new cljs.core.Symbol(null,"is-filtered","is-filtered",230239847,null),"src/cljc/quantum/db/datomic/core.cljc",18,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),1,new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,154,154,cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)),null,(cljs.core.truth_(quantum.db.datomic.core.is_filtered)?quantum.db.datomic.core.is_filtered.cljs$lang$test:null)]))));

if(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,orig_var__2273__auto___46982)) === true){
cljs.core.alter_meta_BANG_.call(null,new cljs.core.Var(function(){return quantum.db.datomic.core.filtered_QMARK_;},new cljs.core.Symbol("quantum.db.datomic.core","filtered?","quantum.db.datomic.core/filtered?",968868890,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"quantum.db.datomic.core","quantum.db.datomic.core",-115342979,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"The core Datomic (and friends, e.g. DataScript) namespace"], null)),new cljs.core.Symbol(null,"filtered?","filtered?",79104351,null),"src/cljc/quantum/db/datomic/core.cljc",20,1,161,161,cljs.core.List.EMPTY,null,(cljs.core.truth_(quantum.db.datomic.core.filtered_QMARK_)?quantum.db.datomic.core.filtered_QMARK_.cljs$lang$test:null)])),cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
} else {
}


new cljs.core.Var(function(){return quantum.db.datomic.core.filtered_QMARK_;},new cljs.core.Symbol("quantum.db.datomic.core","filtered?","quantum.db.datomic.core/filtered?",968868890,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"quantum.db.datomic.core","quantum.db.datomic.core",-115342979,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"The core Datomic (and friends, e.g. DataScript) namespace"], null)),new cljs.core.Symbol(null,"filtered?","filtered?",79104351,null),"src/cljc/quantum/db/datomic/core.cljc",20,1,161,161,cljs.core.List.EMPTY,null,(cljs.core.truth_(quantum.db.datomic.core.filtered_QMARK_)?quantum.db.datomic.core.filtered_QMARK_.cljs$lang$test:null)]));
quantum.db.datomic.core.with$ = (function quantum$db$datomic$core$with(var_args){
var args46983 = [];
var len__18583__auto___46986 = arguments.length;
var i__18584__auto___46987 = (0);
while(true){
if((i__18584__auto___46987 < len__18583__auto___46986)){
args46983.push((arguments[i__18584__auto___46987]));

var G__46988 = (i__18584__auto___46987 + (1));
i__18584__auto___46987 = G__46988;
continue;
} else {
}
break;
}

var G__46985 = args46983.length;
switch (G__46985) {
case 1:
return quantum.db.datomic.core.with$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quantum.db.datomic.core.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quantum.db.datomic.core.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46983.length)].join('')));

}
});

quantum.db.datomic.core.with$.cljs$core$IFn$_invoke$arity$1 = (function (tx_data){
return quantum.db.datomic.core.with$.call(null,quantum.db.datomic.core.__GT_db.call(null),tx_data);
});

quantum.db.datomic.core.with$.cljs$core$IFn$_invoke$arity$2 = (function (db,tx_data){
return quantum.db.datomic.core.with$.call(null,db,tx_data,null);
});

quantum.db.datomic.core.with$.cljs$core$IFn$_invoke$arity$3 = (function (db,tx_data,tx_meta){
if(cljs.core.truth_(quantum.db.datomic.core.mdb_QMARK_.call(null,db))){
return datascript.core.with$.call(null,db,tx_data,tx_meta);
} else {
throw quantum.db.datomic.core.unhandled_type.call(null,new cljs.core.Keyword(null,"db","db",993250759),db);

}
});

quantum.db.datomic.core.with$.cljs$lang$maxFixedArity = 3;
quantum.db.datomic.core.datoms = (function quantum$db$datomic$core$datoms(var_args){
var args__18590__auto__ = [];
var len__18583__auto___46993 = arguments.length;
var i__18584__auto___46994 = (0);
while(true){
if((i__18584__auto___46994 < len__18583__auto___46993)){
args__18590__auto__.push((arguments[i__18584__auto___46994]));

var G__46995 = (i__18584__auto___46994 + (1));
i__18584__auto___46994 = G__46995;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((2) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((2)),(0))):null);
return quantum.db.datomic.core.datoms.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18591__auto__);
});

quantum.db.datomic.core.datoms.cljs$core$IFn$_invoke$arity$variadic = (function (db,index,args){
if(cljs.core.truth_(quantum.db.datomic.core.mdb_QMARK_.call(null,db))){
return cljs.core.apply.call(null,datascript.core.datoms,db,index,args);
} else {
if(cljs.core.truth_(quantum.db.datomic.core.db_QMARK_.call(null,db))){
return cljs.core.apply.call(null,datomic_cljs.api.datoms,db,index,args);
} else {
throw quantum.db.datomic.core.unhandled_type.call(null,new cljs.core.Keyword(null,"db","db",993250759),db);

}
}
});

quantum.db.datomic.core.datoms.cljs$lang$maxFixedArity = (2);

quantum.db.datomic.core.datoms.cljs$lang$applyTo = (function (seq46990){
var G__46991 = cljs.core.first.call(null,seq46990);
var seq46990__$1 = cljs.core.next.call(null,seq46990);
var G__46992 = cljs.core.first.call(null,seq46990__$1);
var seq46990__$2 = cljs.core.next.call(null,seq46990__$1);
return quantum.db.datomic.core.datoms.cljs$core$IFn$_invoke$arity$variadic(G__46991,G__46992,seq46990__$2);
});
quantum.db.datomic.core.seek_datoms = (function quantum$db$datomic$core$seek_datoms(var_args){
var args__18590__auto__ = [];
var len__18583__auto___46999 = arguments.length;
var i__18584__auto___47000 = (0);
while(true){
if((i__18584__auto___47000 < len__18583__auto___46999)){
args__18590__auto__.push((arguments[i__18584__auto___47000]));

var G__47001 = (i__18584__auto___47000 + (1));
i__18584__auto___47000 = G__47001;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((2) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((2)),(0))):null);
return quantum.db.datomic.core.seek_datoms.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18591__auto__);
});

quantum.db.datomic.core.seek_datoms.cljs$core$IFn$_invoke$arity$variadic = (function (db,index,args){
if(cljs.core.truth_(quantum.db.datomic.core.mdb_QMARK_.call(null,db))){
return cljs.core.apply.call(null,datascript.core.seek_datoms,db,index,args);
} else {
throw quantum.db.datomic.core.unhandled_type.call(null,new cljs.core.Keyword(null,"db","db",993250759),db);

}
});

quantum.db.datomic.core.seek_datoms.cljs$lang$maxFixedArity = (2);

quantum.db.datomic.core.seek_datoms.cljs$lang$applyTo = (function (seq46996){
var G__46997 = cljs.core.first.call(null,seq46996);
var seq46996__$1 = cljs.core.next.call(null,seq46996);
var G__46998 = cljs.core.first.call(null,seq46996__$1);
var seq46996__$2 = cljs.core.next.call(null,seq46996__$1);
return quantum.db.datomic.core.seek_datoms.cljs$core$IFn$_invoke$arity$variadic(G__46997,G__46998,seq46996__$2);
});
quantum.db.datomic.core.index_range = (function quantum$db$datomic$core$index_range(var_args){
var args47002 = [];
var len__18583__auto___47005 = arguments.length;
var i__18584__auto___47006 = (0);
while(true){
if((i__18584__auto___47006 < len__18583__auto___47005)){
args47002.push((arguments[i__18584__auto___47006]));

var G__47007 = (i__18584__auto___47006 + (1));
i__18584__auto___47006 = G__47007;
continue;
} else {
}
break;
}

var G__47004 = args47002.length;
switch (G__47004) {
case 3:
return quantum.db.datomic.core.index_range.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return quantum.db.datomic.core.index_range.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47002.length)].join('')));

}
});

quantum.db.datomic.core.index_range.cljs$core$IFn$_invoke$arity$3 = (function (attr,start,end){
return quantum.db.datomic.core.index_range.call(null,quantum.db.datomic.core.__GT_db.call(null),attr,start,end);
});

quantum.db.datomic.core.index_range.cljs$core$IFn$_invoke$arity$4 = (function (db,attr,start,end){
if(cljs.core.truth_(quantum.db.datomic.core.mdb_QMARK_.call(null,db))){
return datascript.core.index_range.call(null,db,attr,start,end);
} else {
if(cljs.core.truth_(quantum.db.datomic.core.db_QMARK_.call(null,db))){
return datomic_cljs.api.index_range.call(null,db,attr,start,end);
} else {
throw quantum.db.datomic.core.unhandled_type.call(null,new cljs.core.Keyword(null,"db","db",993250759),db);

}
}
});

quantum.db.datomic.core.index_range.cljs$lang$maxFixedArity = 4;
quantum.db.datomic.core.transact_BANG_ = (function quantum$db$datomic$core$transact_BANG_(var_args){
var args47009 = [];
var len__18583__auto___47012 = arguments.length;
var i__18584__auto___47013 = (0);
while(true){
if((i__18584__auto___47013 < len__18583__auto___47012)){
args47009.push((arguments[i__18584__auto___47013]));

var G__47014 = (i__18584__auto___47013 + (1));
i__18584__auto___47013 = G__47014;
continue;
} else {
}
break;
}

var G__47011 = args47009.length;
switch (G__47011) {
case 1:
return quantum.db.datomic.core.transact_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quantum.db.datomic.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quantum.db.datomic.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47009.length)].join('')));

}
});

quantum.db.datomic.core.transact_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (tx_data){
return quantum.db.datomic.core.transact_BANG_.call(null,cljs.core.deref.call(null,quantum.db.datomic.core.conn_STAR_),tx_data);
});

quantum.db.datomic.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return quantum.db.datomic.core.transact_BANG_.call(null,conn,tx_data,null);
});

quantum.db.datomic.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
var txn = (cljs.core.truth_(quantum.db.datomic.core.mconn_QMARK_.call(null,conn))?datascript.core.transact_BANG_.call(null,conn,tx_data,tx_meta):(cljs.core.truth_(quantum.db.datomic.core.conn_QMARK_.call(null,conn))?cljs.core.deref.call(null,datomic_cljs.api.transact.call(null,conn,tx_data)):(function(){throw quantum.db.datomic.core.unhandled_type.call(null,new cljs.core.Keyword(null,"conn","conn",278309663),conn)})()
));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,(new cljs.core.Delay(((function (txn){
return (function (){
return txn;
});})(txn))
,null))], null);
});

quantum.db.datomic.core.transact_BANG_.cljs$lang$maxFixedArity = 3;
quantum.db.datomic.core.allowed_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [new cljs.core.Keyword(null,"long","long",-171452093),null,new cljs.core.Keyword(null,"double","double",884886883),null,new cljs.core.Keyword(null,"instant","instant",655498374),null,new cljs.core.Keyword(null,"ref","ref",1289896967),null,new cljs.core.Keyword(null,"bigint","bigint",-1710937017),null,new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"string","string",-1989541586),null,new cljs.core.Keyword(null,"keyword","keyword",811389747),null,new cljs.core.Keyword(null,"bigdec","bigdec",1019443956),null,new cljs.core.Keyword(null,"bytes","bytes",1175866680),null,new cljs.core.Keyword(null,"uri","uri",-774711847),null,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),null,new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null);
quantum.db.datomic.core.schemas = (function quantum$db$datomic$core$schemas(var_args){
var args47016 = [];
var len__18583__auto___47019 = arguments.length;
var i__18584__auto___47020 = (0);
while(true){
if((i__18584__auto___47020 < len__18583__auto___47019)){
args47016.push((arguments[i__18584__auto___47020]));

var G__47021 = (i__18584__auto___47020 + (1));
i__18584__auto___47020 = G__47021;
continue;
} else {
}
break;
}

var G__47018 = args47016.length;
switch (G__47018) {
case 0:
return quantum.db.datomic.core.schemas.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return quantum.db.datomic.core.schemas.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47016.length)].join('')));

}
});

quantum.db.datomic.core.schemas.cljs$core$IFn$_invoke$arity$0 = (function (){
return quantum.db.datomic.core.schemas.call(null,quantum.db.datomic.core.__GT_db.call(null));
});

quantum.db.datomic.core.schemas.cljs$core$IFn$_invoke$arity$1 = (function (db){
return quantum.db.datomic.core.q.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ident","?ident",1230589912,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Symbol(null,"?ident","?ident",1230589912,null)], null)], null),db);
});

quantum.db.datomic.core.schemas.cljs$lang$maxFixedArity = 1;
quantum.db.datomic.core.attributes = (function quantum$db$datomic$core$attributes(var_args){
var args47023 = [];
var len__18583__auto___47026 = arguments.length;
var i__18584__auto___47027 = (0);
while(true){
if((i__18584__auto___47027 < len__18583__auto___47026)){
args47023.push((arguments[i__18584__auto___47027]));

var G__47028 = (i__18584__auto___47027 + (1));
i__18584__auto___47027 = G__47028;
continue;
} else {
}
break;
}

var G__47025 = args47023.length;
switch (G__47025) {
case 0:
return quantum.db.datomic.core.attributes.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return quantum.db.datomic.core.attributes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47023.length)].join('')));

}
});

quantum.db.datomic.core.attributes.cljs$core$IFn$_invoke$arity$0 = (function (){
return quantum.db.datomic.core.attributes.call(null,quantum.db.datomic.core.__GT_db.call(null));
});

quantum.db.datomic.core.attributes.cljs$core$IFn$_invoke$arity$1 = (function (db){
return quantum.db.datomic.core.q.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ident","?ident",1230589912,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Symbol(null,"?ident","?ident",1230589912,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Keyword("db.install","attribute","db.install/attribute",-225839074),new cljs.core.Symbol(null,"?e","?e",-1194391683,null)], null)], null),db);
});

quantum.db.datomic.core.attributes.cljs$lang$maxFixedArity = 1;
quantum.db.datomic.core.partitions_ex = (function quantum$db$datomic$core$partitions_ex(){
return quantum.core.error.__GT_ex.call(null,new cljs.core.Keyword(null,"not-supported","not-supported",1913569354),[cljs.core.str("|partitions| not supported for DataScript. "),cljs.core.str("DataScript does not have partitions.")].join(''));
});
quantum.db.datomic.core.partitions = (function quantum$db$datomic$core$partitions(var_args){
var args47030 = [];
var len__18583__auto___47033 = arguments.length;
var i__18584__auto___47034 = (0);
while(true){
if((i__18584__auto___47034 < len__18583__auto___47033)){
args47030.push((arguments[i__18584__auto___47034]));

var G__47035 = (i__18584__auto___47034 + (1));
i__18584__auto___47034 = G__47035;
continue;
} else {
}
break;
}

var G__47032 = args47030.length;
switch (G__47032) {
case 0:
return quantum.db.datomic.core.partitions.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return quantum.db.datomic.core.partitions.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47030.length)].join('')));

}
});

quantum.db.datomic.core.partitions.cljs$core$IFn$_invoke$arity$0 = (function (){
return quantum.db.datomic.core.partitions.call(null,quantum.db.datomic.core.__GT_db.call(null));
});

quantum.db.datomic.core.partitions.cljs$core$IFn$_invoke$arity$1 = (function (db){
if(cljs.core.truth_(quantum.db.datomic.core.mdb_QMARK_.call(null,db))){
throw quantum.db.datomic.core.partitions_ex.call(null);
} else {
return quantum.db.datomic.core.q.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ident","?ident",1230589912,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Symbol(null,"?ident","?ident",1230589912,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Keyword("db.install","partition","db.install/partition",-1744031140),new cljs.core.Symbol(null,"?e","?e",-1194391683,null)], null)], null),db);
}
});

quantum.db.datomic.core.partitions.cljs$lang$maxFixedArity = 1;
/**
 * Defines a database partition.
 */
quantum.db.datomic.core.__GT_partition = (function quantum$db$datomic$core$__GT_partition(var_args){
var args47037 = [];
var len__18583__auto___47040 = arguments.length;
var i__18584__auto___47041 = (0);
while(true){
if((i__18584__auto___47041 < len__18583__auto___47040)){
args47037.push((arguments[i__18584__auto___47041]));

var G__47042 = (i__18584__auto___47041 + (1));
i__18584__auto___47041 = G__47042;
continue;
} else {
}
break;
}

var G__47039 = args47037.length;
switch (G__47039) {
case 1:
return quantum.db.datomic.core.__GT_partition.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quantum.db.datomic.core.__GT_partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47037.length)].join('')));

}
});

quantum.db.datomic.core.__GT_partition.cljs$core$IFn$_invoke$arity$1 = (function (part){
return quantum.db.datomic.core.__GT_partition.call(null,cljs.core.deref.call(null,quantum.db.datomic.core.conn_STAR_),part);
});

quantum.db.datomic.core.__GT_partition.cljs$core$IFn$_invoke$arity$2 = (function (conn,part){
if(cljs.core.truth_(quantum.db.datomic.core.mconn_QMARK_.call(null,conn))){
throw quantum.db.datomic.core.partitions_ex.call(null);
} else {
var id = quantum.db.datomic.core.tempid.call(null,conn,new cljs.core.Keyword("db.part","db","db.part/db",-2028116570));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword("db","ident","db/ident",-737096),part], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Keyword("db.part","db","db.part/db",-2028116570),new cljs.core.Keyword("db.install","partition","db.install/partition",-1744031140),id], null)], null);
}
});

quantum.db.datomic.core.__GT_partition.cljs$lang$maxFixedArity = 2;
quantum.db.datomic.core.rename_schemas = (function quantum$db$datomic$core$rename_schemas(mapping){
var iter__18297__auto__ = (function quantum$db$datomic$core$rename_schemas_$_iter__47052(s__47053){
return (new cljs.core.LazySeq(null,(function (){
var s__47053__$1 = s__47053;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__47053__$1);
if(temp__4425__auto__){
var s__47053__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__47053__$2)){
var c__18295__auto__ = cljs.core.chunk_first.call(null,s__47053__$2);
var size__18296__auto__ = cljs.core.count.call(null,c__18295__auto__);
var b__47055 = cljs.core.chunk_buffer.call(null,size__18296__auto__);
if((function (){var i__47054 = (0);
while(true){
if((i__47054 < size__18296__auto__)){
var vec__47058 = cljs.core._nth.call(null,c__18295__auto__,i__47054);
var oldv = cljs.core.nth.call(null,vec__47058,(0),null);
var newv = cljs.core.nth.call(null,vec__47058,(1),null);
cljs.core.chunk_append.call(null,b__47055,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),oldv,new cljs.core.Keyword("db","ident","db/ident",-737096),newv], null));

var G__47060 = (i__47054 + (1));
i__47054 = G__47060;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47055),quantum$db$datomic$core$rename_schemas_$_iter__47052.call(null,cljs.core.chunk_rest.call(null,s__47053__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47055),null);
}
} else {
var vec__47059 = cljs.core.first.call(null,s__47053__$2);
var oldv = cljs.core.nth.call(null,vec__47059,(0),null);
var newv = cljs.core.nth.call(null,vec__47059,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),oldv,new cljs.core.Keyword("db","ident","db/ident",-737096),newv], null),quantum$db$datomic$core$rename_schemas_$_iter__47052.call(null,cljs.core.rest.call(null,s__47053__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__18297__auto__.call(null,mapping);
});
/**
 * Defines, but does not transact, a new database schema.
 * Takes the pain out of schema creation.
 */
quantum.db.datomic.core.__GT_schema = (function quantum$db$datomic$core$__GT_schema(var_args){
var args47061 = [];
var len__18583__auto___47072 = arguments.length;
var i__18584__auto___47073 = (0);
while(true){
if((i__18584__auto___47073 < len__18583__auto___47072)){
args47061.push((arguments[i__18584__auto___47073]));

var G__47074 = (i__18584__auto___47073 + (1));
i__18584__auto___47073 = G__47074;
continue;
} else {
}
break;
}

var G__47063 = args47061.length;
switch (G__47063) {
case 3:
return quantum.db.datomic.core.__GT_schema.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return quantum.db.datomic.core.__GT_schema.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47061.length)].join('')));

}
});

quantum.db.datomic.core.__GT_schema.cljs$core$IFn$_invoke$arity$3 = (function (ident,val_type,cardinality){
return quantum.db.datomic.core.__GT_schema.call(null,ident,val_type,cardinality,null);
});

quantum.db.datomic.core.__GT_schema.cljs$core$IFn$_invoke$arity$4 = (function (ident,val_type,cardinality,p__47064){
var map__47065 = p__47064;
var map__47065__$1 = ((((!((map__47065 == null)))?((((map__47065.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47065.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47065):map__47065);
var opts = map__47065__$1;
var conn = cljs.core.get.call(null,map__47065__$1,new cljs.core.Keyword(null,"conn","conn",278309663));
var part = cljs.core.get.call(null,map__47065__$1,new cljs.core.Keyword(null,"part","part",77757738));
if(cljs.core.contains_QMARK_.call(null,quantum.db.datomic.core.allowed_types,val_type)){
} else {
throw quantum.core.error.__GT_ex.call(null,new cljs.core.Keyword(null,"assertion-error","assertion-error",1846873368),"Assertion not satisfied: (contains? allowed-types val-type)",cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.keyword,cljs.core.list(new cljs.core.Symbol(null,"val-type","val-type",1360681433,null))),cljs.core._conj.call(null,cljs.core.List.EMPTY,val_type)));
}

var conn_f = (function (){var or__17525__auto__ = conn;
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return cljs.core.deref.call(null,quantum.db.datomic.core.conn_STAR_);
}
})();
var part_f = (cljs.core.truth_(quantum.db.datomic.core.mconn_QMARK_.call(null,conn_f))?null:(function (){var or__17525__auto__ = part;
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return new cljs.core.Keyword("db.part","db","db.part/db",-2028116570);
}
})());
if(cljs.core.truth_(quantum.db.datomic.core.mconn_QMARK_.call(null,conn_f))){
} else {
if(cljs.core.truth_(quantum.core.logic.nnil_QMARK_.call(null,part_f))){
} else {
throw quantum.core.error.__GT_ex.call(null,new cljs.core.Keyword(null,"assertion-error","assertion-error",1846873368),"Assertion not satisfied: (nnil? part-f)",cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.keyword,cljs.core.list(new cljs.core.Symbol(null,"conn-f","conn-f",197791878,null),new cljs.core.Symbol(null,"part-f","part-f",-1748854420,null))),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,part_f),conn_f)));
}
}

var cardinality_f = (function (){var pred__47067 = cljs.core._EQ_;
var expr__47068 = cardinality;
if(cljs.core.truth_(pred__47067.call(null,new cljs.core.Keyword(null,"one","one",935007904),expr__47068))){
return new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190);
} else {
if(cljs.core.truth_(pred__47067.call(null,new cljs.core.Keyword(null,"many","many",1092119164),expr__47068))){
return new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234);
} else {
throw quantum.core.error.__GT_ex.call(null,new cljs.core.Keyword(null,"unrecognized-cardinality","unrecognized-cardinality",-1773594215),"Cardinality not recognized:",cardinality);
}
}
})();
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (cardinality_f,conn_f,part_f,map__47065,map__47065__$1,opts,conn,part){
return (function (p__47070){
var vec__47071 = p__47070;
var k = cljs.core.nth.call(null,vec__47071,(0),null);
var v = cljs.core.nth.call(null,vec__47071,(1),null);
return quantum.core.logic.nnil_QMARK_.call(null,v);
});})(cardinality_f,conn_f,part_f,map__47065,map__47065__$1,opts,conn,part))
,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("db","index","db/index",-1531680669),new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.install","_attribute","db.install/_attribute",1853441294),new cljs.core.Keyword("db","fulltext","db/fulltext",-1432910705),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db","doc","db/doc",1913350069),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("db","ident","db/ident",-737096)],[new cljs.core.Keyword(null,"index?","index?",-901121090).cljs$core$IFn$_invoke$arity$1(opts),(cljs.core.truth_(new cljs.core.Keyword(null,"unique","unique",329397282).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.keyword.call(null,[cljs.core.str("db.unique/"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"unique","unique",329397282).cljs$core$IFn$_invoke$arity$1(opts)))].join('')):null),cljs.core.keyword.call(null,"db.type",cljs.core.name.call(null,val_type)),part_f,new cljs.core.Keyword(null,"full-text?","full-text?",1097945586).cljs$core$IFn$_invoke$arity$1(opts),cardinality_f,new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(opts),(cljs.core.truth_(quantum.db.datomic.core.mconn_QMARK_.call(null,conn))?null:quantum.db.datomic.core.tempid.call(null,part_f)),ident])));
});

quantum.db.datomic.core.__GT_schema.cljs$lang$maxFixedArity = 4;
/**
 * Transforms a schema-block @block into a vector of individual schemas.
 */
quantum.db.datomic.core.block__GT_schemas = (function quantum$db$datomic$core$block__GT_schemas(block){
return cljs.core.mapv.call(null,(function (p__47078){
var vec__47079 = p__47078;
var ident = cljs.core.nth.call(null,vec__47079,(0),null);
var args = cljs.core.nth.call(null,vec__47079,(1),null);
return cljs.core.apply.call(null,quantum.db.datomic.core.__GT_schema,ident,args);
}),block);
});
/**
 * This function exists mainly because schema implementation differs from Datomic
 * to DataScript.
 * 
 * @schemas should be a vector of schema.
 */
quantum.db.datomic.core.add_schemas_BANG_ = (function quantum$db$datomic$core$add_schemas_BANG_(var_args){
var args47080 = [];
var len__18583__auto___47083 = arguments.length;
var i__18584__auto___47084 = (0);
while(true){
if((i__18584__auto___47084 < len__18583__auto___47083)){
args47080.push((arguments[i__18584__auto___47084]));

var G__47085 = (i__18584__auto___47084 + (1));
i__18584__auto___47084 = G__47085;
continue;
} else {
}
break;
}

var G__47082 = args47080.length;
switch (G__47082) {
case 1:
return quantum.db.datomic.core.add_schemas_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quantum.db.datomic.core.add_schemas_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47080.length)].join('')));

}
});

quantum.db.datomic.core.add_schemas_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (schemas){
return quantum.db.datomic.core.add_schemas_BANG_.call(null,cljs.core.deref.call(null,quantum.db.datomic.core.conn_STAR_),schemas);
});

quantum.db.datomic.core.add_schemas_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,schemas){
if(cljs.core.truth_(quantum.db.datomic.core.mconn_QMARK_.call(null,conn))){
var schemas_f = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (schema){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(schema),cljs.core.dissoc.call(null,schema,new cljs.core.Keyword("db","ident","db/ident",-737096))], null);
}),schemas));
return cljs.core.swap_BANG_.call(null,conn,cljs.core.update,new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.merge,schemas_f);
} else {
return quantum.db.datomic.core.transact_BANG_.call(null,schemas);
}
});

quantum.db.datomic.core.add_schemas_BANG_.cljs$lang$maxFixedArity = 2;
quantum.db.datomic.core.rename = (function quantum$db$datomic$core$rename(old,new_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),old,new cljs.core.Keyword("db","ident","db/ident",-737096),new_], null);
});
/**
 * Transaction function which asserts the attributes (@kvs)
 * associated with entity id @id.
 */
quantum.db.datomic.core.assoc = (function quantum$db$datomic$core$assoc(var_args){
var args__18590__auto__ = [];
var len__18583__auto___47089 = arguments.length;
var i__18584__auto___47090 = (0);
while(true){
if((i__18584__auto___47090 < len__18583__auto___47089)){
args__18590__auto__.push((arguments[i__18584__auto___47090]));

var G__47091 = (i__18584__auto___47090 + (1));
i__18584__auto___47090 = G__47091;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((1) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((1)),(0))):null);
return quantum.db.datomic.core.assoc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18591__auto__);
});

quantum.db.datomic.core.assoc.cljs$core$IFn$_invoke$arity$variadic = (function (eid,kvs){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid], null),kvs);
});

quantum.db.datomic.core.assoc.cljs$lang$maxFixedArity = (1);

quantum.db.datomic.core.assoc.cljs$lang$applyTo = (function (seq47087){
var G__47088 = cljs.core.first.call(null,seq47087);
var seq47087__$1 = cljs.core.next.call(null,seq47087);
return quantum.db.datomic.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__47088,seq47087__$1);
});
/**
 * Transaction function which retracts the attributes (@kvs)
 * associated with entity id @id.
 * 
 * Unfortunately requires that one knows the values associated with keys.
 * 
 * '|Retract| with no value supplied is on our list of possible future
 *  enhancements.' — Rich Hickey
 */
quantum.db.datomic.core.dissoc = (function quantum$db$datomic$core$dissoc(var_args){
var args__18590__auto__ = [];
var len__18583__auto___47096 = arguments.length;
var i__18584__auto___47097 = (0);
while(true){
if((i__18584__auto___47097 < len__18583__auto___47096)){
args__18590__auto__.push((arguments[i__18584__auto___47097]));

var G__47098 = (i__18584__auto___47097 + (1));
i__18584__auto___47097 = G__47098;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((1) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((1)),(0))):null);
return quantum.db.datomic.core.dissoc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18591__auto__);
});

quantum.db.datomic.core.dissoc.cljs$core$IFn$_invoke$arity$variadic = (function (arg,args){
var db_like_QMARK_ = (function (G__47095){
var or__17525__auto__ = quantum.db.datomic.core.mdb_QMARK_.call(null,G__47095);
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
var or__17525__auto____$1 = quantum.db.datomic.core.db_QMARK_.call(null,G__47095);
if(cljs.core.truth_(or__17525__auto____$1)){
return or__17525__auto____$1;
} else {
var or__17525__auto____$2 = quantum.db.datomic.core.mconn_QMARK_.call(null,G__47095);
if(cljs.core.truth_(or__17525__auto____$2)){
return or__17525__auto____$2;
} else {
return quantum.db.datomic.core.conn_QMARK_.call(null,G__47095);
}
}
}
});
var vec__47094 = (cljs.core.truth_(db_like_QMARK_.call(null,arg))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quantum.db.datomic.core.__GT_db.call(null,arg),cljs.core.first.call(null,args),cljs.core.rest.call(null,args)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [quantum.db.datomic.core.__GT_db.call(null),arg,args], null));
var db = cljs.core.nth.call(null,vec__47094,(0),null);
var eid = cljs.core.nth.call(null,vec__47094,(1),null);
var kvs = cljs.core.nth.call(null,vec__47094,(2),null);
var _ = quantum.core.log.pr_STAR_.call(null,true,false,cljs.core.println,new cljs.core.Keyword(null,"debug","debug",-1608172596),(new cljs.core.Delay(((function (db_like_QMARK_,vec__47094,db,eid,kvs){
return (function (){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.type.call(null,db));
});})(db_like_QMARK_,vec__47094,db,eid,kvs))
,null)),null);
var retract_fn = (cljs.core.truth_(quantum.db.datomic.core.mdb_QMARK_.call(null,db))?new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441):new cljs.core.Keyword("db","retract","db/retract",-1549825231));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [retract_fn,eid], null),kvs);
});

quantum.db.datomic.core.dissoc.cljs$lang$maxFixedArity = (1);

quantum.db.datomic.core.dissoc.cljs$lang$applyTo = (function (seq47092){
var G__47093 = cljs.core.first.call(null,seq47092);
var seq47092__$1 = cljs.core.next.call(null,seq47092);
return quantum.db.datomic.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47093,seq47092__$1);
});
quantum.db.datomic.core.excise = (function quantum$db$datomic$core$excise(var_args){
var args47099 = [];
var len__18583__auto___47102 = arguments.length;
var i__18584__auto___47103 = (0);
while(true){
if((i__18584__auto___47103 < len__18583__auto___47102)){
args47099.push((arguments[i__18584__auto___47103]));

var G__47104 = (i__18584__auto___47103 + (1));
i__18584__auto___47103 = G__47104;
continue;
} else {
}
break;
}

var G__47101 = args47099.length;
switch (G__47101) {
case 2:
return quantum.db.datomic.core.excise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quantum.db.datomic.core.excise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return quantum.db.datomic.core.excise.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47099.length)].join('')));

}
});

quantum.db.datomic.core.excise.cljs$core$IFn$_invoke$arity$2 = (function (eid,attrs){
return quantum.db.datomic.core.excise.call(null,eid,cljs.core.deref.call(null,quantum.db.datomic.core.part_STAR_),attrs);
});

quantum.db.datomic.core.excise.cljs$core$IFn$_invoke$arity$3 = (function (eid,part,attrs){
return quantum.db.datomic.core.excise.call(null,cljs.core.deref.call(null,quantum.db.datomic.core.conn_STAR_),eid,part,attrs);
});

quantum.db.datomic.core.excise.cljs$core$IFn$_invoke$arity$4 = (function (conn,eid,part,attrs){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),quantum.db.datomic.core.tempid.call(null,conn,part),new cljs.core.Keyword("db","excise","db/excise",-21733279),eid,new cljs.core.Keyword("db.excise","attrs","db.excise/attrs",646723838),attrs], null);
});

quantum.db.datomic.core.excise.cljs$lang$maxFixedArity = 4;
/**
 * Creates an entity from the supplied attribute-map.
 */
quantum.db.datomic.core.conj = (function quantum$db$datomic$core$conj(var_args){
var args47106 = [];
var len__18583__auto___47109 = arguments.length;
var i__18584__auto___47110 = (0);
while(true){
if((i__18584__auto___47110 < len__18583__auto___47109)){
args47106.push((arguments[i__18584__auto___47110]));

var G__47111 = (i__18584__auto___47110 + (1));
i__18584__auto___47110 = G__47111;
continue;
} else {
}
break;
}

var G__47108 = args47106.length;
switch (G__47108) {
case 1:
return quantum.db.datomic.core.conj.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quantum.db.datomic.core.conj.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quantum.db.datomic.core.conj.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47106.length)].join('')));

}
});

quantum.db.datomic.core.conj.cljs$core$IFn$_invoke$arity$1 = (function (m){
return quantum.db.datomic.core.conj.call(null,cljs.core.deref.call(null,quantum.db.datomic.core.conn_STAR_),cljs.core.deref.call(null,quantum.db.datomic.core.part_STAR_),m);
});

quantum.db.datomic.core.conj.cljs$core$IFn$_invoke$arity$2 = (function (part,m){
return quantum.db.datomic.core.conj.call(null,cljs.core.deref.call(null,quantum.db.datomic.core.conn_STAR_),part,m);
});

quantum.db.datomic.core.conj.cljs$core$IFn$_invoke$arity$3 = (function (conn,part,m){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword("db","id","db/id",-1388397098),quantum.db.datomic.core.tempid.call(null,conn,part));
});

quantum.db.datomic.core.conj.cljs$lang$maxFixedArity = 3;
quantum.db.datomic.core.disj = (function quantum$db$datomic$core$disj(var_args){
var args47113 = [];
var len__18583__auto___47116 = arguments.length;
var i__18584__auto___47117 = (0);
while(true){
if((i__18584__auto___47117 < len__18583__auto___47116)){
args47113.push((arguments[i__18584__auto___47117]));

var G__47118 = (i__18584__auto___47117 + (1));
i__18584__auto___47117 = G__47118;
continue;
} else {
}
break;
}

var G__47115 = args47113.length;
switch (G__47115) {
case 1:
return quantum.db.datomic.core.disj.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quantum.db.datomic.core.disj.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47113.length)].join('')));

}
});

quantum.db.datomic.core.disj.cljs$core$IFn$_invoke$arity$1 = (function (eid){
return quantum.db.datomic.core.disj.call(null,cljs.core.deref.call(null,quantum.db.datomic.core.conn_STAR_),eid);
});

quantum.db.datomic.core.disj.cljs$core$IFn$_invoke$arity$2 = (function (conn,eid){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),eid], null);
});

quantum.db.datomic.core.disj.cljs$lang$maxFixedArity = 2;
/**
 * TODO currently not an atomic operation.
 * Use database functions to achieve atomicity.
 */
quantum.db.datomic.core.update = (function quantum$db$datomic$core$update(var_args){
var args47120 = [];
var len__18583__auto___47123 = arguments.length;
var i__18584__auto___47124 = (0);
while(true){
if((i__18584__auto___47124 < len__18583__auto___47123)){
args47120.push((arguments[i__18584__auto___47124]));

var G__47125 = (i__18584__auto___47124 + (1));
i__18584__auto___47124 = G__47125;
continue;
} else {
}
break;
}

var G__47122 = args47120.length;
switch (G__47122) {
case 3:
return quantum.db.datomic.core.update.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return quantum.db.datomic.core.update.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47120.length)].join('')));

}
});

quantum.db.datomic.core.update.cljs$core$IFn$_invoke$arity$3 = (function (eid,k,f){
return quantum.db.datomic.core.update.call(null,cljs.core.deref.call(null,quantum.db.datomic.core.conn_STAR_),eid,k,f);
});

quantum.db.datomic.core.update.cljs$core$IFn$_invoke$arity$4 = (function (conn,eid,k,f){
var v_f = cljs.core.get.call(null,quantum.db.datomic.core.entity.call(null,cljs.core.deref.call(null,conn),eid),k);
return quantum.db.datomic.core.assoc.call(null,eid,k,f.call(null,v_f));
});

quantum.db.datomic.core.update.cljs$lang$maxFixedArity = 4;
quantum.db.datomic.core.recommended_txn_ct = (100);
/**
 * Performs undo on a DataScript database which has history.
 */
quantum.db.datomic.core.undo_BANG_ = (function quantum$db$datomic$core$undo_BANG_(var_args){
var args47127 = [];
var len__18583__auto___47139 = arguments.length;
var i__18584__auto___47140 = (0);
while(true){
if((i__18584__auto___47140 < len__18583__auto___47139)){
args47127.push((arguments[i__18584__auto___47140]));

var G__47141 = (i__18584__auto___47140 + (1));
i__18584__auto___47140 = G__47141;
continue;
} else {
}
break;
}

var G__47129 = args47127.length;
switch (G__47129) {
case 0:
return quantum.db.datomic.core.undo_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return quantum.db.datomic.core.undo_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47127.length)].join('')));

}
});

quantum.db.datomic.core.undo_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return quantum.db.datomic.core.undo_BANG_.call(null,quantum.db.datomic.core.__GT_db.call(null));
});

quantum.db.datomic.core.undo_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (db){
var history = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ephemeral","ephemeral",1438878628).cljs$core$IFn$_invoke$arity$1(db));
var conn = new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ephemeral","ephemeral",1438878628).cljs$core$IFn$_invoke$arity$1(db));
if(cljs.core.truth_(quantum.core.type.predicates.atom_QMARK_.call(null,history))){
} else {
throw quantum.core.error.__GT_ex.call(null,new cljs.core.Keyword(null,"assertion-error","assertion-error",1846873368),"Assertion not satisfied: (atom? history)",cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.keyword,cljs.core.list(new cljs.core.Symbol(null,"history","history",1393136307,null))),cljs.core._conj.call(null,cljs.core.List.EMPTY,history)));
}

if(cljs.core.truth_(quantum.core.logic.nempty_QMARK_.call(null,cljs.core.deref.call(null,history)))){
var prev = cljs.core.peek.call(null,cljs.core.deref.call(null,history));
var before = new cljs.core.Keyword(null,"db-before","db-before",-553691536).cljs$core$IFn$_invoke$arity$1(prev);
var after = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(prev);
var tx_data = cljs.core.map.call(null,new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(prev),((function (prev,before,after,history,conn){
return (function (p__47130){
var map__47131 = p__47130;
var map__47131__$1 = ((((!((map__47131 == null)))?((((map__47131.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47131.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47131):map__47131);
var e = cljs.core.get.call(null,map__47131__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var a = cljs.core.get.call(null,map__47131__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var v = cljs.core.get.call(null,map__47131__$1,new cljs.core.Keyword(null,"v","v",21465059));
var t = cljs.core.get.call(null,map__47131__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var added = cljs.core.get.call(null,map__47131__$1,new cljs.core.Keyword(null,"added","added",2057651688));
return (new datascript.core.Datom(e,a,v,t,cljs.core.not.call(null,added)));
});})(prev,before,after,history,conn))
);
cljs.core.reset_BANG_.call(null,conn,before);

cljs.core.swap_BANG_.call(null,history,cljs.core.pop);

var seq__47133 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn))));
var chunk__47134 = null;
var count__47135 = (0);
var i__47136 = (0);
while(true){
if((i__47136 < count__47135)){
var vec__47137 = cljs.core._nth.call(null,chunk__47134,i__47136);
var k = cljs.core.nth.call(null,vec__47137,(0),null);
var l = cljs.core.nth.call(null,vec__47137,(1),null);
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"history","history",-247395220))){
} else {
l.call(null,(new datascript.core.TxReport(after,before,tx_data)));
}

var G__47143 = seq__47133;
var G__47144 = chunk__47134;
var G__47145 = count__47135;
var G__47146 = (i__47136 + (1));
seq__47133 = G__47143;
chunk__47134 = G__47144;
count__47135 = G__47145;
i__47136 = G__47146;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__47133);
if(temp__4425__auto__){
var seq__47133__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47133__$1)){
var c__18328__auto__ = cljs.core.chunk_first.call(null,seq__47133__$1);
var G__47147 = cljs.core.chunk_rest.call(null,seq__47133__$1);
var G__47148 = c__18328__auto__;
var G__47149 = cljs.core.count.call(null,c__18328__auto__);
var G__47150 = (0);
seq__47133 = G__47147;
chunk__47134 = G__47148;
count__47135 = G__47149;
i__47136 = G__47150;
continue;
} else {
var vec__47138 = cljs.core.first.call(null,seq__47133__$1);
var k = cljs.core.nth.call(null,vec__47138,(0),null);
var l = cljs.core.nth.call(null,vec__47138,(1),null);
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"history","history",-247395220))){
} else {
l.call(null,(new datascript.core.TxReport(after,before,tx_data)));
}

var G__47151 = cljs.core.next.call(null,seq__47133__$1);
var G__47152 = null;
var G__47153 = (0);
var G__47154 = (0);
seq__47133 = G__47151;
chunk__47134 = G__47152;
count__47135 = G__47153;
i__47136 = G__47154;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});

quantum.db.datomic.core.undo_BANG_.cljs$lang$maxFixedArity = 1;

//# sourceMappingURL=core.js.map?rel=1452702582463
/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns err core-async pr log logic fn cbase tpred]
*/
