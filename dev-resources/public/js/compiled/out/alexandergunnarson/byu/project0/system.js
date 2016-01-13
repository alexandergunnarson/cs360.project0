// Compiled by ClojureScript 1.7.170 {}

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn logic err log pr res]
*/
goog.provide('alexandergunnarson.byu.project0.system');
goog.require('cljs.core');
goog.require('quantum.core.resources');
goog.require('clojure.core.rrb_vector');
goog.require('quantum.core.logic');
goog.require('quantum.system');
goog.require('quantum.core.print');
goog.require('quantum.core.log');
goog.require('alexandergunnarson.byu.project0.view');
goog.require('quantum.net.websocket');
goog.require('quantum.ui.style.fonts');
goog.require('reagent.core');
goog.require('cljs.core');
goog.require('alexandergunnarson.byu.project0.style');
goog.require('quantum.core.function$');
goog.require('garden.selectors');
goog.require('quantum.ui.style.css.dom');
goog.require('quantum.core.ns');
goog.require('quantum.core.error');
goog.require('quantum.ui.style.css.core');
goog.require('clojure.walk');
goog.require('garden.core');
goog.require('quantum.ui.features');
goog.require('quantum.core.type.predicates');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Something to the console!");
alexandergunnarson.byu.project0.system.style_compatibilized = clojure.walk.postwalk.call(null,(function (arg__22387__auto__){
var obj_f__22369__auto__ = arg__22387__auto__;
if(cljs.core.map_QMARK_.call(null,obj_f__22369__auto__)){
return ((function (obj_f__22369__auto__){
return (function (m){
return cljs.core.reduce.call(null,((function (obj_f__22369__auto__){
return (function (ret,p__36330){
var vec__36331 = p__36330;
var k = cljs.core.nth.call(null,vec__36331,(0),null);
var v = cljs.core.nth.call(null,vec__36331,(1),null);
var any_compat_36332 = cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.first,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,quantum.ui.style.css.core.compatibility_chart,k),quantum.ui.style.css.core.ANY),cljs.core.deref.call(null,quantum.ui.features.browser))),cljs.core.repeat.call(null,v));
var this_compat_36333 = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,quantum.ui.style.css.core.compatibility_chart,k),v),cljs.core.deref.call(null,quantum.ui.features.browser)));
var compat_36334 = cljs.core.merge.call(null,any_compat_36332,this_compat_36333);
if(cljs.core.truth_(quantum.core.logic.nempty_QMARK_.call(null,compat_36334))){
cljs.core.println.call(null,"K FOUND!",k);

cljs.core.merge.call(null,ret,compat_36334);
} else {
}

return m;
});})(obj_f__22369__auto__))
,m);
});})(obj_f__22369__auto__))
.call(null,obj_f__22369__auto__);
} else {
return obj_f__22369__auto__;
}
}),alexandergunnarson.byu.project0.style.style);
alexandergunnarson.byu.project0.system.css_string = (new cljs.core.Delay((function (){
return garden.core.css.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vendors","vendors",-153040496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["moz","webkit"], null)], null),alexandergunnarson.byu.project0.system.style_compatibilized);
}),null));
alexandergunnarson.byu.project0.system.init_ui_BANG_ = (function alexandergunnarson$byu$project0$system$init_ui_BANG_(){
quantum.ui.style.css.dom.add_link_BANG_.call(null,quantum.ui.style.fonts.link.call(null,new cljs.core.Keyword(null,"montserrat","montserrat",1306439686)));

quantum.ui.style.css.dom.add_link_BANG_.call(null,quantum.ui.style.fonts.link.call(null,new cljs.core.Keyword(null,"lato","lato",728966811)));

quantum.ui.style.css.dom.replace_css_at_BANG_.call(null,"dynamic",cljs.core.deref.call(null,alexandergunnarson.byu.project0.system.css_string));

cljs.core.println.call(null,"CSS-STRING:",cljs.core.deref.call(null,alexandergunnarson.byu.project0.system.css_string));

return quantum.core.log.pr_STAR_.call(null,true,false,cljs.core.println,new cljs.core.Keyword(null,"debug","debug",-1608172596),(new cljs.core.Delay((function (){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"UI inited.");
}),null)),null);
});
alexandergunnarson.byu.project0.system.system = quantum.core.core.lens.call(null,quantum.core.resources.systems,new cljs.core.Keyword("alexandergunnarson.byu.project0.system","system","alexandergunnarson.byu.project0.system/system",-104337489));

alexandergunnarson.byu.project0.system.sys_map = quantum.core.core.lens.call(null,alexandergunnarson.byu.project0.system.system,(function (x__21928__auto__){
return quantum.core.core.deref_STAR_.call(null,new cljs.core.Keyword(null,"sys-map","sys-map",-1178077595).cljs$core$IFn$_invoke$arity$1(x__21928__auto__));
}));

if(cljs.core.truth_(quantum.core.core.deref_STAR_.call(null,quantum.core.core.lens.call(null,quantum.core.resources.systems,new cljs.core.Keyword("alexandergunnarson.byu.project0.system","system","alexandergunnarson.byu.project0.system/system",-104337489))))){
quantum.core.resources.stop_BANG_.call(null,cljs.core.deref.call(null,quantum.core.core.lens.call(null,quantum.core.resources.systems,new cljs.core.Keyword("alexandergunnarson.byu.project0.system","system","alexandergunnarson.byu.project0.system/system",-104337489))));

var temp__4425__auto___36336 = cljs.core.deref.call(null,new cljs.core.Keyword(null,"sys-map","sys-map",-1178077595).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("alexandergunnarson.byu.project0.system","system","alexandergunnarson.byu.project0.system/system",-104337489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,quantum.core.resources.systems))));
if(cljs.core.truth_(temp__4425__auto___36336)){
var sys_map__36275__auto___36337 = temp__4425__auto___36336;
com.stuartsierra.component.stop.call(null,sys_map__36275__auto___36337);
} else {
}
} else {
}

alexandergunnarson.byu.project0.system._main = (function alexandergunnarson$byu$project0$system$_main(var_args){
var args__18590__auto__ = [];
var len__18583__auto___36338 = arguments.length;
var i__18584__auto___36339 = (0);
while(true){
if((i__18584__auto___36339 < len__18583__auto___36338)){
args__18590__auto__.push((arguments[i__18584__auto___36339]));

var G__36340 = (i__18584__auto___36339 + (1));
i__18584__auto___36339 = G__36340;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return alexandergunnarson.byu.project0.system._main.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});
goog.exportSymbol('alexandergunnarson.byu.project0.system._main', alexandergunnarson.byu.project0.system._main);

alexandergunnarson.byu.project0.system._main.cljs$core$IFn$_invoke$arity$variadic = (function (args__36276__auto__){
var system_kw__36277__auto__ = new cljs.core.Keyword("alexandergunnarson.byu.project0.system","system","alexandergunnarson.byu.project0.system/system",-104337489);
var system__36278__auto__ = quantum.core.core.lens.call(null,quantum.core.resources.systems,system_kw__36277__auto__);
var sys_map__36275__auto__ = quantum.core.core.lens.call(null,system__36278__auto__,((function (system_kw__36277__auto__,system__36278__auto__){
return (function (x__21928__auto__){
return quantum.core.core.deref_STAR_.call(null,new cljs.core.Keyword(null,"sys-map","sys-map",-1178077595).cljs$core$IFn$_invoke$arity$1(x__21928__auto__));
});})(system_kw__36277__auto__,system__36278__auto__))
);
var config__36279__auto__ = quantum.system.default_config.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"backend","backend",-847489124),false,new cljs.core.Keyword(null,"schemas","schemas",575070579),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("my","schema","my/schema",-1582005459),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"one","one",935007904),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unique?","unique?",-392536907),true], null)], null)], null)], null),new cljs.core.Keyword(null,"connection","connection",-123599300),false,new cljs.core.Keyword(null,"frontend","frontend",873240352),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init","init",-1875481434),alexandergunnarson.byu.project0.system.init_ui_BANG_,new cljs.core.Keyword(null,"render","render",-1408033454),alexandergunnarson.byu.project0.view.ui_render_fn], null)], null));
return cljs.core.apply.call(null,quantum.system.gen_main.call(null,config__36279__auto__,quantum.system.gen_system_creator.call(null,system_kw__36277__auto__,config__36279__auto__),system__36278__auto__,sys_map__36275__auto__),args__36276__auto__);
});

alexandergunnarson.byu.project0.system._main.cljs$lang$maxFixedArity = (0);

alexandergunnarson.byu.project0.system._main.cljs$lang$applyTo = (function (seq36335){
return alexandergunnarson.byu.project0.system._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36335));
});
alexandergunnarson.byu.project0.system._main.call(null);

//# sourceMappingURL=system.js.map?rel=1452703947868
/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn logic err log pr res]
*/
