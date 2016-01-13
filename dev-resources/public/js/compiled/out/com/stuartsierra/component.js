// Compiled by ClojureScript 1.7.170 {}
goog.provide('com.stuartsierra.component');
goog.require('cljs.core');
goog.require('com.stuartsierra.dependency');
goog.require('com.stuartsierra.component.platform');

/**
 * @interface
 */
com.stuartsierra.component.Lifecycle = function(){};

/**
 * Begins operation of this component. Synchronous, does not return
 *   until the component is started. Returns an updated version of this
 *   component.
 */
com.stuartsierra.component.start = (function com$stuartsierra$component$start(component){
if((!((component == null))) && (!((component.com$stuartsierra$component$Lifecycle$start$arity$1 == null)))){
return component.com$stuartsierra$component$Lifecycle$start$arity$1(component);
} else {
var x__18180__auto__ = (((component == null))?null:component);
var m__18181__auto__ = (com.stuartsierra.component.start[goog.typeOf(x__18180__auto__)]);
if(!((m__18181__auto__ == null))){
return m__18181__auto__.call(null,component);
} else {
var m__18181__auto____$1 = (com.stuartsierra.component.start["_"]);
if(!((m__18181__auto____$1 == null))){
return m__18181__auto____$1.call(null,component);
} else {
throw cljs.core.missing_protocol.call(null,"Lifecycle.start",component);
}
}
}
});

/**
 * Ceases operation of this component. Synchronous, does not return
 *   until the component is stopped. Returns an updated version of this
 *   component.
 */
com.stuartsierra.component.stop = (function com$stuartsierra$component$stop(component){
if((!((component == null))) && (!((component.com$stuartsierra$component$Lifecycle$stop$arity$1 == null)))){
return component.com$stuartsierra$component$Lifecycle$stop$arity$1(component);
} else {
var x__18180__auto__ = (((component == null))?null:component);
var m__18181__auto__ = (com.stuartsierra.component.stop[goog.typeOf(x__18180__auto__)]);
if(!((m__18181__auto__ == null))){
return m__18181__auto__.call(null,component);
} else {
var m__18181__auto____$1 = (com.stuartsierra.component.stop["_"]);
if(!((m__18181__auto____$1 == null))){
return m__18181__auto____$1.call(null,component);
} else {
throw cljs.core.missing_protocol.call(null,"Lifecycle.stop",component);
}
}
}
});

(com.stuartsierra.component.Lifecycle["object"] = true);

(com.stuartsierra.component.start["object"] = (function (this$){
return this$;
}));

(com.stuartsierra.component.stop["object"] = (function (this$){
return this$;
}));
/**
 * Returns the map of other components on which this component depends.
 */
com.stuartsierra.component.dependencies = (function com$stuartsierra$component$dependencies(component){
return new cljs.core.Keyword("com.stuartsierra.component","dependencies","com.stuartsierra.component/dependencies",-1213797470).cljs$core$IFn$_invoke$arity$2(cljs.core.meta.call(null,component),cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Associates metadata with component describing the other components
 *   on which it depends. Component dependencies are specified as a map.
 *   Keys in the map correspond to keys in this component which must be
 *   provided by its containing system. Values in the map are the keys in
 *   the system at which those components may be found. Alternatively, if
 *   the keys are the same in both the component and its enclosing
 *   system, they may be specified as a vector of keys.
 */
com.stuartsierra.component.using = (function com$stuartsierra$component$using(component,dependencies){
return cljs.core.vary_meta.call(null,component,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.stuartsierra.component","dependencies","com.stuartsierra.component/dependencies",-1213797470)], null),cljs.core.fnil.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY),((cljs.core.map_QMARK_.call(null,dependencies))?dependencies:((cljs.core.vector_QMARK_.call(null,dependencies))?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null);
}),dependencies)):(function(){throw cljs.core.ex_info.call(null,"Dependencies must be a map or vector",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("com.stuartsierra.component","invalid-dependencies","com.stuartsierra.component/invalid-dependencies",-1050144080),new cljs.core.Keyword(null,"component","component",1555936782),component,new cljs.core.Keyword(null,"dependencies","dependencies",1108064605),dependencies], null))})()
)));
});
com.stuartsierra.component.nil_component = (function com$stuartsierra$component$nil_component(system,key){
return cljs.core.ex_info.call(null,[cljs.core.str("Component "),cljs.core.str(key),cljs.core.str(" was nil in system; maybe it returned nil from start or stop")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("com.stuartsierra.component","nil-component","com.stuartsierra.component/nil-component",-1755174116),new cljs.core.Keyword(null,"system-key","system-key",-334147604),key,new cljs.core.Keyword(null,"system","system",-29381724),system], null));
});
com.stuartsierra.component.get_component = (function com$stuartsierra$component$get_component(system,key){
var component = cljs.core.get.call(null,system,key,new cljs.core.Keyword("com.stuartsierra.component","not-found","com.stuartsierra.component/not-found",1697924753));
if((component == null)){
throw com.stuartsierra.component.nil_component.call(null,system,key);
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword("com.stuartsierra.component","not-found","com.stuartsierra.component/not-found",1697924753),component)){
throw cljs.core.ex_info.call(null,[cljs.core.str("Missing component "),cljs.core.str(key),cljs.core.str(" from system")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("com.stuartsierra.component","missing-component","com.stuartsierra.component/missing-component",-1719526915),new cljs.core.Keyword(null,"system-key","system-key",-334147604),key,new cljs.core.Keyword(null,"system","system",-29381724),system], null));
} else {
}

return component;
});
com.stuartsierra.component.get_dependency = (function com$stuartsierra$component$get_dependency(system,system_key,component,dependency_key){
var dependency = cljs.core.get.call(null,system,system_key,new cljs.core.Keyword("com.stuartsierra.component","not-found","com.stuartsierra.component/not-found",1697924753));
if((dependency == null)){
throw com.stuartsierra.component.nil_component.call(null,system,system_key);
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword("com.stuartsierra.component","not-found","com.stuartsierra.component/not-found",1697924753),dependency)){
throw cljs.core.ex_info.call(null,[cljs.core.str("Missing dependency "),cljs.core.str(dependency_key),cljs.core.str(" of "),cljs.core.str(com.stuartsierra.component.platform.type_name.call(null,component)),cljs.core.str(" expected in system at "),cljs.core.str(system_key)].join(''),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("com.stuartsierra.component","missing-dependency","com.stuartsierra.component/missing-dependency",-1159089756),new cljs.core.Keyword(null,"system-key","system-key",-334147604),system_key,new cljs.core.Keyword(null,"dependency-key","dependency-key",684780755),dependency_key,new cljs.core.Keyword(null,"component","component",1555936782),component,new cljs.core.Keyword(null,"system","system",-29381724),system], null));
} else {
}

return dependency;
});
/**
 * Associates dependency metadata with multiple components in the
 *   system. dependency-map is a map of keys in the system to maps or
 *   vectors specifying the dependencies of the component at that key in
 *   the system, as per 'using'.
 */
com.stuartsierra.component.system_using = (function com$stuartsierra$component$system_using(system,dependency_map){
return cljs.core.reduce_kv.call(null,(function (system__$1,key,dependencies){
var component = com.stuartsierra.component.get_component.call(null,system__$1,key);
return cljs.core.assoc.call(null,system__$1,key,com.stuartsierra.component.using.call(null,component,dependencies));
}),system,dependency_map);
});
/**
 * Returns a dependency graph, using the data structures defined in
 *   com.stuartsierra.dependency, for the components found by
 *   (select-keys system component-keys)
 */
com.stuartsierra.component.dependency_graph = (function com$stuartsierra$component$dependency_graph(system,component_keys){
return cljs.core.reduce_kv.call(null,(function (graph,key,component){
return cljs.core.reduce.call(null,(function (p1__42316_SHARP_,p2__42317_SHARP_){
return com.stuartsierra.dependency.depend.call(null,p1__42316_SHARP_,key,p2__42317_SHARP_);
}),graph,cljs.core.vals.call(null,com.stuartsierra.component.dependencies.call(null,component)));
}),com.stuartsierra.dependency.graph.call(null),cljs.core.select_keys.call(null,system,component_keys));
});
com.stuartsierra.component.assoc_dependency = (function com$stuartsierra$component$assoc_dependency(system,component,dependency_key,system_key){
var dependency = com.stuartsierra.component.get_dependency.call(null,system,system_key,component,dependency_key);
return cljs.core.assoc.call(null,component,dependency_key,dependency);
});
com.stuartsierra.component.assoc_dependencies = (function com$stuartsierra$component$assoc_dependencies(component,system){
return cljs.core.reduce_kv.call(null,(function (p1__42318_SHARP_,p2__42319_SHARP_,p3__42320_SHARP_){
return com.stuartsierra.component.assoc_dependency.call(null,system,p1__42318_SHARP_,p2__42319_SHARP_,p3__42320_SHARP_);
}),component,com.stuartsierra.component.dependencies.call(null,component));
});
com.stuartsierra.component.try_action = (function com$stuartsierra$component$try_action(component,system,key,f,args){
try{return cljs.core.apply.call(null,f,component,args);
}catch (e42322){var t = e42322;
throw cljs.core.ex_info.call(null,[cljs.core.str("Error in component "),cljs.core.str(key),cljs.core.str(" in system "),cljs.core.str(com.stuartsierra.component.platform.type_name.call(null,system)),cljs.core.str(" calling "),cljs.core.str(f)].join(''),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("com.stuartsierra.component","component-function-threw-exception","com.stuartsierra.component/component-function-threw-exception",1285478818),new cljs.core.Keyword(null,"function","function",-2127255473),f,new cljs.core.Keyword(null,"system-key","system-key",-334147604),key,new cljs.core.Keyword(null,"component","component",1555936782),component,new cljs.core.Keyword(null,"system","system",-29381724),system], null),t);
}});
/**
 * Invokes (apply f component args) on each of the components at
 *   component-keys in the system, in dependency order. Before invoking
 *   f, assoc's updated dependencies of the component.
 */
com.stuartsierra.component.update_system = (function com$stuartsierra$component$update_system(var_args){
var args__18590__auto__ = [];
var len__18583__auto___42327 = arguments.length;
var i__18584__auto___42328 = (0);
while(true){
if((i__18584__auto___42328 < len__18583__auto___42327)){
args__18590__auto__.push((arguments[i__18584__auto___42328]));

var G__42329 = (i__18584__auto___42328 + (1));
i__18584__auto___42328 = G__42329;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((3) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((3)),(0))):null);
return com.stuartsierra.component.update_system.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__18591__auto__);
});

com.stuartsierra.component.update_system.cljs$core$IFn$_invoke$arity$variadic = (function (system,component_keys,f,args){
var graph = com.stuartsierra.component.dependency_graph.call(null,system,component_keys);
return cljs.core.reduce.call(null,((function (graph){
return (function (system__$1,key){
return cljs.core.assoc.call(null,system__$1,key,com.stuartsierra.component.try_action.call(null,com.stuartsierra.component.assoc_dependencies.call(null,com.stuartsierra.component.get_component.call(null,system__$1,key),system__$1),system__$1,key,f,args));
});})(graph))
,system,cljs.core.sort.call(null,com.stuartsierra.dependency.topo_comparator.call(null,graph),component_keys));
});

com.stuartsierra.component.update_system.cljs$lang$maxFixedArity = (3);

com.stuartsierra.component.update_system.cljs$lang$applyTo = (function (seq42323){
var G__42324 = cljs.core.first.call(null,seq42323);
var seq42323__$1 = cljs.core.next.call(null,seq42323);
var G__42325 = cljs.core.first.call(null,seq42323__$1);
var seq42323__$2 = cljs.core.next.call(null,seq42323__$1);
var G__42326 = cljs.core.first.call(null,seq42323__$2);
var seq42323__$3 = cljs.core.next.call(null,seq42323__$2);
return com.stuartsierra.component.update_system.cljs$core$IFn$_invoke$arity$variadic(G__42324,G__42325,G__42326,seq42323__$3);
});
/**
 * Like update-system but operates in reverse dependency order.
 */
com.stuartsierra.component.update_system_reverse = (function com$stuartsierra$component$update_system_reverse(var_args){
var args__18590__auto__ = [];
var len__18583__auto___42334 = arguments.length;
var i__18584__auto___42335 = (0);
while(true){
if((i__18584__auto___42335 < len__18583__auto___42334)){
args__18590__auto__.push((arguments[i__18584__auto___42335]));

var G__42336 = (i__18584__auto___42335 + (1));
i__18584__auto___42335 = G__42336;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((3) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((3)),(0))):null);
return com.stuartsierra.component.update_system_reverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__18591__auto__);
});

com.stuartsierra.component.update_system_reverse.cljs$core$IFn$_invoke$arity$variadic = (function (system,component_keys,f,args){
var graph = com.stuartsierra.component.dependency_graph.call(null,system,component_keys);
return cljs.core.reduce.call(null,((function (graph){
return (function (system__$1,key){
return cljs.core.assoc.call(null,system__$1,key,com.stuartsierra.component.try_action.call(null,com.stuartsierra.component.assoc_dependencies.call(null,com.stuartsierra.component.get_component.call(null,system__$1,key),system__$1),system__$1,key,f,args));
});})(graph))
,system,cljs.core.reverse.call(null,cljs.core.sort.call(null,com.stuartsierra.dependency.topo_comparator.call(null,graph),component_keys)));
});

com.stuartsierra.component.update_system_reverse.cljs$lang$maxFixedArity = (3);

com.stuartsierra.component.update_system_reverse.cljs$lang$applyTo = (function (seq42330){
var G__42331 = cljs.core.first.call(null,seq42330);
var seq42330__$1 = cljs.core.next.call(null,seq42330);
var G__42332 = cljs.core.first.call(null,seq42330__$1);
var seq42330__$2 = cljs.core.next.call(null,seq42330__$1);
var G__42333 = cljs.core.first.call(null,seq42330__$2);
var seq42330__$3 = cljs.core.next.call(null,seq42330__$2);
return com.stuartsierra.component.update_system_reverse.cljs$core$IFn$_invoke$arity$variadic(G__42331,G__42332,G__42333,seq42330__$3);
});
/**
 * Recursively starts components in the system, in dependency order,
 *   assoc'ing in their dependencies along the way. component-keys is a
 *   collection of keys (order doesn't matter) in the system specifying
 *   the components to start, defaults to all keys in the system.
 */
com.stuartsierra.component.start_system = (function com$stuartsierra$component$start_system(var_args){
var args42337 = [];
var len__18583__auto___42340 = arguments.length;
var i__18584__auto___42341 = (0);
while(true){
if((i__18584__auto___42341 < len__18583__auto___42340)){
args42337.push((arguments[i__18584__auto___42341]));

var G__42342 = (i__18584__auto___42341 + (1));
i__18584__auto___42341 = G__42342;
continue;
} else {
}
break;
}

var G__42339 = args42337.length;
switch (G__42339) {
case 1:
return com.stuartsierra.component.start_system.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.stuartsierra.component.start_system.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42337.length)].join('')));

}
});

com.stuartsierra.component.start_system.cljs$core$IFn$_invoke$arity$1 = (function (system){
return com.stuartsierra.component.start_system.call(null,system,cljs.core.keys.call(null,system));
});

com.stuartsierra.component.start_system.cljs$core$IFn$_invoke$arity$2 = (function (system,component_keys){
return com.stuartsierra.component.update_system.call(null,system,component_keys,new cljs.core.Var(function(){return com.stuartsierra.component.start;},new cljs.core.Symbol("com.stuartsierra.component","start","com.stuartsierra.component/start",-1511960847,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",652470118),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol("com.stuartsierra.component","Lifecycle","com.stuartsierra.component/Lifecycle",-1776107234,null),new cljs.core.Symbol(null,"com.stuartsierra.component","com.stuartsierra.component",881800690,null),new cljs.core.Symbol(null,"start","start",1285322546,null),"dev-resources/public/js/compiled/out/com/stuartsierra/component.cljc",9,1,5,6,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",-1098498987,null)], null)),"Begins operation of this component. Synchronous, does not return\n  until the component is started. Returns an updated version of this\n  component.",(cljs.core.truth_(com.stuartsierra.component.start)?com.stuartsierra.component.start.cljs$lang$test:null)])));
});

com.stuartsierra.component.start_system.cljs$lang$maxFixedArity = 2;
/**
 * Recursively stops components in the system, in reverse dependency
 *   order. component-keys is a collection of keys (order doesn't matter)
 *   in the system specifying the components to stop, defaults to all
 *   keys in the system.
 */
com.stuartsierra.component.stop_system = (function com$stuartsierra$component$stop_system(var_args){
var args42344 = [];
var len__18583__auto___42347 = arguments.length;
var i__18584__auto___42348 = (0);
while(true){
if((i__18584__auto___42348 < len__18583__auto___42347)){
args42344.push((arguments[i__18584__auto___42348]));

var G__42349 = (i__18584__auto___42348 + (1));
i__18584__auto___42348 = G__42349;
continue;
} else {
}
break;
}

var G__42346 = args42344.length;
switch (G__42346) {
case 1:
return com.stuartsierra.component.stop_system.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.stuartsierra.component.stop_system.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42344.length)].join('')));

}
});

com.stuartsierra.component.stop_system.cljs$core$IFn$_invoke$arity$1 = (function (system){
return com.stuartsierra.component.stop_system.call(null,system,cljs.core.keys.call(null,system));
});

com.stuartsierra.component.stop_system.cljs$core$IFn$_invoke$arity$2 = (function (system,component_keys){
return com.stuartsierra.component.update_system_reverse.call(null,system,component_keys,new cljs.core.Var(function(){return com.stuartsierra.component.stop;},new cljs.core.Symbol("com.stuartsierra.component","stop","com.stuartsierra.component/stop",1533540630,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",652470118),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol("com.stuartsierra.component","Lifecycle","com.stuartsierra.component/Lifecycle",-1776107234,null),new cljs.core.Symbol(null,"com.stuartsierra.component","com.stuartsierra.component",881800690,null),new cljs.core.Symbol(null,"stop","stop",-500379815,null),"dev-resources/public/js/compiled/out/com/stuartsierra/component.cljc",8,1,5,10,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",-1098498987,null)], null)),"Ceases operation of this component. Synchronous, does not return\n  until the component is stopped. Returns an updated version of this\n  component.",(cljs.core.truth_(com.stuartsierra.component.stop)?com.stuartsierra.component.stop.cljs$lang$test:null)])));
});

com.stuartsierra.component.stop_system.cljs$lang$maxFixedArity = 2;

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
com.stuartsierra.component.SystemMap = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.stuartsierra.component.SystemMap.prototype.com$stuartsierra$component$Lifecycle$ = true;

com.stuartsierra.component.SystemMap.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (system){
var self__ = this;
var system__$1 = this;
return com.stuartsierra.component.start_system.call(null,system__$1);
});

com.stuartsierra.component.SystemMap.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (system){
var self__ = this;
var system__$1 = this;
return com.stuartsierra.component.stop_system.call(null,system__$1);
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18139__auto__,k__18140__auto__){
var self__ = this;
var this__18139__auto____$1 = this;
return cljs.core._lookup.call(null,this__18139__auto____$1,k__18140__auto__,null);
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18141__auto__,k42352,else__18142__auto__){
var self__ = this;
var this__18141__auto____$1 = this;
var G__42354 = k42352;
switch (G__42354) {
default:
return cljs.core.get.call(null,self__.__extmap,k42352,else__18142__auto__);

}
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18153__auto__,writer__18154__auto__,opts__18155__auto__){
var self__ = this;
var this__18153__auto____$1 = this;
var pr_pair__18156__auto__ = ((function (this__18153__auto____$1){
return (function (keyval__18157__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,cljs.core.pr_writer,""," ","",opts__18155__auto__,keyval__18157__auto__);
});})(this__18153__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18154__auto__,pr_pair__18156__auto__,"#com.stuartsierra.component.SystemMap{",", ","}",opts__18155__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$IIterable$ = true;

com.stuartsierra.component.SystemMap.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42351){
var self__ = this;
var G__42351__$1 = this;
return (new cljs.core.RecordIter((0),G__42351__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18137__auto__){
var self__ = this;
var this__18137__auto____$1 = this;
return self__.__meta;
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18133__auto__){
var self__ = this;
var this__18133__auto____$1 = this;
return (new com.stuartsierra.component.SystemMap(self__.__meta,self__.__extmap,self__.__hash));
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18143__auto__){
var self__ = this;
var this__18143__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18134__auto__){
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

com.stuartsierra.component.SystemMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18135__auto__,other__18136__auto__){
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

com.stuartsierra.component.SystemMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18148__auto__,k__18149__auto__){
var self__ = this;
var this__18148__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__18149__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18148__auto____$1),self__.__meta),k__18149__auto__);
} else {
return (new com.stuartsierra.component.SystemMap(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18149__auto__)),null));
}
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18146__auto__,k__18147__auto__,G__42351){
var self__ = this;
var this__18146__auto____$1 = this;
var pred__42355 = cljs.core.keyword_identical_QMARK_;
var expr__42356 = k__18147__auto__;
return (new com.stuartsierra.component.SystemMap(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18147__auto__,G__42351),null));
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18151__auto__){
var self__ = this;
var this__18151__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18138__auto__,G__42351){
var self__ = this;
var this__18138__auto____$1 = this;
return (new com.stuartsierra.component.SystemMap(G__42351,self__.__extmap,self__.__hash));
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18144__auto__,entry__18145__auto__){
var self__ = this;
var this__18144__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18145__auto__)){
return cljs.core._assoc.call(null,this__18144__auto____$1,cljs.core._nth.call(null,entry__18145__auto__,(0)),cljs.core._nth.call(null,entry__18145__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18144__auto____$1,entry__18145__auto__);
}
});

com.stuartsierra.component.SystemMap.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

com.stuartsierra.component.SystemMap.cljs$lang$type = true;

com.stuartsierra.component.SystemMap.cljs$lang$ctorPrSeq = (function (this__18173__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.stuartsierra.component/SystemMap");
});

com.stuartsierra.component.SystemMap.cljs$lang$ctorPrWriter = (function (this__18173__auto__,writer__18174__auto__){
return cljs.core._write.call(null,writer__18174__auto__,"com.stuartsierra.component/SystemMap");
});

com.stuartsierra.component.__GT_SystemMap = (function com$stuartsierra$component$__GT_SystemMap(){
return (new com.stuartsierra.component.SystemMap(null,null,null));
});

com.stuartsierra.component.map__GT_SystemMap = (function com$stuartsierra$component$map__GT_SystemMap(G__42353){
return (new com.stuartsierra.component.SystemMap(null,cljs.core.dissoc.call(null,G__42353),null));
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$IPrintWithWriter$ = true;

com.stuartsierra.component.SystemMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core._write.call(null,writer,"#<SystemMap>");
});
/**
 * Returns a system constructed of key/value pairs. The system has
 *   default implementations of the Lifecycle 'start' and 'stop' methods
 *   which recursively start/stop all components in the system.
 * 
 *   System maps print as #<SystemMap> to avoid overwhelming the printer
 *   with large objects. As a consequence, printed system maps cannot be
 *   'read'. To disable this behavior and print system maps like normal
 *   records, call
 *   (remove-method clojure.core/print-method com.stuartsierra.component.SystemMap)
 */
com.stuartsierra.component.system_map = (function com$stuartsierra$component$system_map(var_args){
var args__18590__auto__ = [];
var len__18583__auto___42360 = arguments.length;
var i__18584__auto___42361 = (0);
while(true){
if((i__18584__auto___42361 < len__18583__auto___42360)){
args__18590__auto__.push((arguments[i__18584__auto___42361]));

var G__42362 = (i__18584__auto___42361 + (1));
i__18584__auto___42361 = G__42362;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return com.stuartsierra.component.system_map.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

com.stuartsierra.component.system_map.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,keyvals))){
} else {
throw com.stuartsierra.component.platform.argument_error.call(null,"system-map requires an even number of arguments");
}

return com.stuartsierra.component.map__GT_SystemMap.call(null,cljs.core.apply.call(null,cljs.core.array_map,keyvals));
});

com.stuartsierra.component.system_map.cljs$lang$maxFixedArity = (0);

com.stuartsierra.component.system_map.cljs$lang$applyTo = (function (seq42359){
return com.stuartsierra.component.system_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42359));
});
/**
 * True if the error has ex-data indicating it was thrown by something
 *   in the com.stuartsierra.component namespace.
 */
com.stuartsierra.component.ex_component_QMARK_ = (function com$stuartsierra$component$ex_component_QMARK_(error){
var map__42365 = cljs.core.ex_data.call(null,error);
var map__42365__$1 = ((((!((map__42365 == null)))?((((map__42365.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42365.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42365):map__42365);
var reason = cljs.core.get.call(null,map__42365__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
return ((reason instanceof cljs.core.Keyword)) && (cljs.core._EQ_.call(null,"com.stuartsierra.component",cljs.core.namespace.call(null,reason)));
});
/**
 * If the error has ex-data provided by the com.stuartsierra.component
 *   namespace, returns a new exception instance with the :component
 *   and :system removed from its ex-data. Preserves the other details of
 *   the original error. If the error was not created by this namespace,
 *   returns it unchanged. Use this when you want to catch and rethrow
 *   exceptions without including the full component or system.
 */
com.stuartsierra.component.ex_without_components = (function com$stuartsierra$component$ex_without_components(error){
if(cljs.core.truth_(com.stuartsierra.component.ex_component_QMARK_.call(null,error))){
return com.stuartsierra.component.platform.alter_ex_data.call(null,error,cljs.core.dissoc,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"system","system",-29381724));
} else {
return error;
}
});

//# sourceMappingURL=component.js.map?rel=1452702568492