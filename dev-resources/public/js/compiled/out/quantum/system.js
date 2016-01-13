// Compiled by ClojureScript 1.7.170 {}

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns async log err logic fn res debug]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns err core-async pr log logic fn cbase tpred async]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns err core-async pr log logic fn cbase tpred]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns async log core-async]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns err core-async pr log logic fn cbase tpred async]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns err core-async pr log logic fn cbase tpred async]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns err core-async pr log logic fn cbase tpred async]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns err core-async pr log logic fn cbase tpred async]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns err core-async pr log logic fn cbase tpred async]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns err core-async pr log logic fn cbase tpred async]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn set]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn set]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn set]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn set]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn set]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn set]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns async log core-async]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns async log core-async]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns async log core-async]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns async log core-async]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns async log core-async]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns async log core-async]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns err core-async pr log logic fn cbase tpred]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns err core-async pr log logic fn cbase tpred]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns err core-async pr log logic fn cbase tpred]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns err core-async pr log logic fn cbase tpred]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns err core-async pr log logic fn cbase tpred]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns err core-async pr log logic fn cbase tpred]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns err core-async pr log logic fn cbase tpred]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns err core-async pr log logic fn cbase tpred]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns async log core-async]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns async log core-async]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns err core-async pr log logic fn cbase tpred]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns err core-async pr log logic fn cbase tpred]
*/
goog.provide('quantum.system');
goog.require('cljs.core');
goog.require('quantum.core.core');
goog.require('quantum.core.resources');
goog.require('clojure.core.rrb_vector');
goog.require('quantum.core.logic');
goog.require('quantum.core.log');
goog.require('quantum.net.websocket');
goog.require('quantum.core.thread.async');
goog.require('reagent.core');
goog.require('cljs.core');
goog.require('quantum.core.function$');
goog.require('quantum.db.datomic');
goog.require('quantum.core.ns');
goog.require('quantum.core.error');
goog.require('com.stuartsierra.component');
goog.require('quantum.core.util.debug');
goog.require('quantum.net.http');
goog.require('quantum.db.datomic.core');
goog.require('quantum.db.datomic.reactive.core');
/**
 * A decent default configuration for a web app.
 * TODO More default configs to follow.
 * 
 * @frontend-init : a frontend init function
 */
quantum.system.default_config = (function quantum$system$default_config(var_args){
var args__18590__auto__ = [];
var len__18583__auto___31215 = arguments.length;
var i__18584__auto___31216 = (0);
while(true){
if((i__18584__auto___31216 < len__18583__auto___31215)){
args__18590__auto__.push((arguments[i__18584__auto___31216]));

var G__31217 = (i__18584__auto___31216 + (1));
i__18584__auto___31216 = G__31217;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.system.default_config.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.system.default_config.cljs$core$IFn$_invoke$arity$variadic = (function (p__31199){
var vec__31200 = p__31199;
var map__31201 = cljs.core.nth.call(null,vec__31200,(0),null);
var map__31201__$1 = ((((!((map__31201 == null)))?((((map__31201.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31201.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31201):map__31201);
var config = map__31201__$1;
var map__31202 = cljs.core.get.call(null,map__31201__$1,new cljs.core.Keyword(null,"server","server",1499190120));
var map__31202__$1 = ((((!((map__31202 == null)))?((((map__31202.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31202.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31202):map__31202);
var routes = cljs.core.get.call(null,map__31202__$1,new cljs.core.Keyword(null,"routes","routes",457900162));
var key_password = cljs.core.get.call(null,map__31202__$1,new cljs.core.Keyword(null,"key-password","key-password",-82681226));
var trust_password = cljs.core.get.call(null,map__31202__$1,new cljs.core.Keyword(null,"trust-password","trust-password",552839925));
var map__31203 = cljs.core.get.call(null,map__31201__$1,new cljs.core.Keyword(null,"connection","connection",-123599300));
var map__31203__$1 = ((((!((map__31203 == null)))?((((map__31203.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31203.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31203):map__31203);
var connection = map__31203__$1;
var uri = cljs.core.get.call(null,map__31203__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var msg_handler = cljs.core.get.call(null,map__31203__$1,new cljs.core.Keyword(null,"msg-handler","msg-handler",-1179961489));
var map__31204 = cljs.core.get.call(null,map__31201__$1,new cljs.core.Keyword(null,"deployment","deployment",1985479158));
var map__31204__$1 = ((((!((map__31204 == null)))?((((map__31204.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31204.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31204):map__31204);
var js_source_file = cljs.core.get.call(null,map__31204__$1,new cljs.core.Keyword(null,"js-source-file","js-source-file",738108623));
var map__31205 = cljs.core.get.call(null,map__31201__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__31205__$1 = ((((!((map__31205 == null)))?((((map__31205.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31205.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31205):map__31205);
var schemas = cljs.core.get.call(null,map__31205__$1,new cljs.core.Keyword(null,"schemas","schemas",575070579));
var map__31206 = cljs.core.get.call(null,map__31201__$1,new cljs.core.Keyword(null,"frontend","frontend",873240352));
var map__31206__$1 = ((((!((map__31206 == null)))?((((map__31206.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31206.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31206):map__31206);
var render = cljs.core.get.call(null,map__31206__$1,new cljs.core.Keyword(null,"render","render",-1408033454));
var root_id = cljs.core.get.call(null,map__31206__$1,new cljs.core.Keyword(null,"root-id","root-id",1294683809));
var map__31207 = cljs.core.get.call(null,map__31201__$1,new cljs.core.Keyword(null,"backend","backend",-847489124));
var map__31207__$1 = ((((!((map__31207 == null)))?((((map__31207.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31207.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31207):map__31207);
var backend = map__31207__$1;
var host = "0.0.0.0";
var server_port = (8080);
var server_type = new cljs.core.Keyword(null,"immutant","immutant",1771609184);
var js_source_file_f = (function (){var or__17525__auto__ = js_source_file;
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return "system";
}
})();
var frontend_init = new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"frontend","frontend",873240352).cljs$core$IFn$_invoke$arity$1(config));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"levels","levels",-950747887),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warn","warn",-436710552),null,new cljs.core.Keyword(null,"debug","debug",-1608172596),null], null), null)], null),new cljs.core.Keyword(null,"connection","connection",-123599300),(cljs.core.truth_(connection)?new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uri","uri",-774711847),(function (){var or__17525__auto__ = uri;
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return "/chan";
}
})(),new cljs.core.Keyword(null,"host","host",-1558485167),[cljs.core.str(host),cljs.core.str(":"),cljs.core.str(server_port)].join(''),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"msg-handler","msg-handler",-1179961489),msg_handler], null):null),new cljs.core.Keyword(null,"frontend","frontend",873240352),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),frontend_init,new cljs.core.Keyword(null,"render","render",-1408033454),render,new cljs.core.Keyword(null,"root-id","root-id",1294683809),(function (){var or__17525__auto__ = root_id;
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return "root";
}
})()], null),new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"backend","backend",-847489124),(cljs.core.truth_(backend)?cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"txr-alias","txr-alias",1209439520),new cljs.core.Keyword(null,"default-partition","default-partition",-2076808985),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"init-schemas?","init-schemas?",-2021402163),new cljs.core.Keyword(null,"port","port",1534937262),new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"schemas","schemas",575070579),new cljs.core.Keyword(null,"create-if-not-present?","create-if-not-present?",910389370)],["local",new cljs.core.Keyword("db.part","test","db.part/test",375536096),"test",new cljs.core.Keyword(null,"free","free",801364328),true,(4334),"localhost",schemas,true]):null),new cljs.core.Keyword(null,"ephemeral","ephemeral",1438878628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"history-limit","history-limit",-1938739786),Number.MAX_SAFE_INTEGER,new cljs.core.Keyword(null,"reactive?","reactive?",-426643537),true,new cljs.core.Keyword(null,"schemas","schemas",575070579),schemas], null)], null),new cljs.core.Keyword(null,"threadpool","threadpool",-1760002601),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"thread-ct","thread-ct",-1887172122),(2),new cljs.core.Keyword(null,"script-src","script-src",349131362),[cljs.core.str("./js/compiled/"),cljs.core.str(js_source_file_f),cljs.core.str(".js")].join('')], null)], null);
});

quantum.system.default_config.cljs$lang$maxFixedArity = (0);

quantum.system.default_config.cljs$lang$applyTo = (function (seq31198){
return quantum.system.default_config.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31198));
});
quantum.system.gen_system_creator = (function quantum$system$gen_system_creator(system_kw,config){
return (new cljs.core.Delay((function (){
return quantum.core.resources.register_system_BANG_.call(null,system_kw,config,(function (p__31221){
var map__31222 = p__31221;
var map__31222__$1 = ((((!((map__31222 == null)))?((((map__31222.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31222.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31222):map__31222);
var config_0 = map__31222__$1;
var connection = cljs.core.get.call(null,map__31222__$1,new cljs.core.Keyword(null,"connection","connection",-123599300));
return cljs.core.apply.call(null,com.stuartsierra.component.system_map,new cljs.core.Keyword(null,"log","log",-1595516004),quantum.core.log.__GT_log_initializer.call(null,new cljs.core.Keyword(null,"log","log",-1595516004).cljs$core$IFn$_invoke$arity$1(config_0)),new cljs.core.Keyword(null,"threadpool","threadpool",-1760002601),com.stuartsierra.component.using.call(null,quantum.core.thread.async.__GT_threadpool.call(null,new cljs.core.Keyword(null,"threadpool","threadpool",-1760002601).cljs$core$IFn$_invoke$arity$1(config_0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"log","log",-1595516004)], null)),new cljs.core.Keyword(null,"db","db",993250759),com.stuartsierra.component.using.call(null,quantum.db.datomic.__GT_db.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(config_0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.Keyword(null,"threadpool","threadpool",-1760002601)], null)),(cljs.core.truth_(connection)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"connection","connection",-123599300),com.stuartsierra.component.using.call(null,quantum.net.http.map__GT_ChannelSocket.call(null,new cljs.core.Keyword(null,"connection","connection",-123599300).cljs$core$IFn$_invoke$arity$1(config_0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"log","log",-1595516004)], null))], null):null));
}));
}),null));
});
/**
 * Creates a standard |-main| function.
 * For Clojure, this is for JAR packaging.
 * For ClojureScript, this can be used e.g. with Figwheel's :main.
 */
quantum.system.gen_main = (function quantum$system$gen_main(config,system_creator,system,sys_map){
return (function() { 
var G__31228__delegate = function (p__31226){
var vec__31227 = p__31226;
var port = cljs.core.nth.call(null,vec__31227,(0),null);
cljs.core.deref.call(null,system_creator);

if(cljs.core.truth_(quantum.core.thread.async.web_worker_QMARK_.call(null))){
return null;
} else {
quantum.core.resources.reload_BANG_.call(null,cljs.core.deref.call(null,system));

cljs.core.reset_BANG_.call(null,quantum.db.datomic.core.conn_STAR_,cljs.core.deref.call(null,new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ephemeral","ephemeral",1438878628).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sys_map))))));

if(cljs.core.truth_(new cljs.core.Keyword(null,"reactive?","reactive?",-426643537).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ephemeral","ephemeral",1438878628).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sys_map)))))){
quantum.db.datomic.reactive.core.react_BANG_.call(null,cljs.core.deref.call(null,quantum.db.datomic.core.conn_STAR_));
} else {
}

var temp__4425__auto___31229 = new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"frontend","frontend",873240352).cljs$core$IFn$_invoke$arity$1(config));
if(cljs.core.truth_(temp__4425__auto___31229)){
var frontend_init_31230 = temp__4425__auto___31229;
if(cljs.core.fn_QMARK_.call(null,frontend_init_31230)){
} else {
throw quantum.core.error.__GT_ex.call(null,new cljs.core.Keyword(null,"assertion-error","assertion-error",1846873368),"Assertion not satisfied: (fn? frontend-init)",cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.keyword,cljs.core.list(new cljs.core.Symbol(null,"frontend-init","frontend-init",-1216478172,null))),cljs.core._conj.call(null,cljs.core.List.EMPTY,frontend_init_31230)));
}

frontend_init_31230.call(null);
} else {
}

var render_fn = new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"frontend","frontend",873240352).cljs$core$IFn$_invoke$arity$1(config));
var root_id = new cljs.core.Keyword(null,"root-id","root-id",1294683809).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"frontend","frontend",873240352).cljs$core$IFn$_invoke$arity$1(config));
if(cljs.core.fn_QMARK_.call(null,render_fn)){
} else {
throw quantum.core.error.__GT_ex.call(null,new cljs.core.Keyword(null,"assertion-error","assertion-error",1846873368),"Assertion not satisfied: (fn? render-fn)",cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.keyword,cljs.core.list(new cljs.core.Symbol(null,"render-fn","render-fn",2039328045,null))),cljs.core._conj.call(null,cljs.core.List.EMPTY,render_fn)));
}

if(typeof root_id === 'string'){
} else {
throw quantum.core.error.__GT_ex.call(null,new cljs.core.Keyword(null,"assertion-error","assertion-error",1846873368),"Assertion not satisfied: (string? root-id)",cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.keyword,cljs.core.list(new cljs.core.Symbol(null,"root-id","root-id",-1359751960,null))),cljs.core._conj.call(null,cljs.core.List.EMPTY,root_id)));
}

quantum.core.log.pr_STAR_.call(null,true,false,cljs.core.println,new cljs.core.Keyword(null,"debug","debug",-1608172596),(new cljs.core.Delay(((function (render_fn,root_id,vec__31227,port){
return (function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,root_id),"Now rendering on root node, id");
});})(render_fn,root_id,vec__31227,port))
,null)),null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_fn], null),document.getElementById(root_id));
}
};
var G__31228 = function (var_args){
var p__31226 = null;
if (arguments.length > 0) {
var G__31231__i = 0, G__31231__a = new Array(arguments.length -  0);
while (G__31231__i < G__31231__a.length) {G__31231__a[G__31231__i] = arguments[G__31231__i + 0]; ++G__31231__i;}
  p__31226 = new cljs.core.IndexedSeq(G__31231__a,0);
} 
return G__31228__delegate.call(this,p__31226);};
G__31228.cljs$lang$maxFixedArity = 0;
G__31228.cljs$lang$applyTo = (function (arglist__31232){
var p__31226 = cljs.core.seq(arglist__31232);
return G__31228__delegate(p__31226);
});
G__31228.cljs$core$IFn$_invoke$arity$variadic = G__31228__delegate;
return G__31228;
})()
;
});

//# sourceMappingURL=system.js.map?rel=1452702627361
/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns async log err logic fn res debug]
*/
