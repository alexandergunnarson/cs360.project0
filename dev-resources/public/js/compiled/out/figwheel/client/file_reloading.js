// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__17525__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__17525__auto__){
return or__17525__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__17525__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__32486_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__32486_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__32491 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__32492 = null;
var count__32493 = (0);
var i__32494 = (0);
while(true){
if((i__32494 < count__32493)){
var n = cljs.core._nth.call(null,chunk__32492,i__32494);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__32495 = seq__32491;
var G__32496 = chunk__32492;
var G__32497 = count__32493;
var G__32498 = (i__32494 + (1));
seq__32491 = G__32495;
chunk__32492 = G__32496;
count__32493 = G__32497;
i__32494 = G__32498;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__32491);
if(temp__4425__auto__){
var seq__32491__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32491__$1)){
var c__18328__auto__ = cljs.core.chunk_first.call(null,seq__32491__$1);
var G__32499 = cljs.core.chunk_rest.call(null,seq__32491__$1);
var G__32500 = c__18328__auto__;
var G__32501 = cljs.core.count.call(null,c__18328__auto__);
var G__32502 = (0);
seq__32491 = G__32499;
chunk__32492 = G__32500;
count__32493 = G__32501;
i__32494 = G__32502;
continue;
} else {
var n = cljs.core.first.call(null,seq__32491__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__32503 = cljs.core.next.call(null,seq__32491__$1);
var G__32504 = null;
var G__32505 = (0);
var G__32506 = (0);
seq__32491 = G__32503;
chunk__32492 = G__32504;
count__32493 = G__32505;
i__32494 = G__32506;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__32545_32552 = cljs.core.seq.call(null,deps);
var chunk__32546_32553 = null;
var count__32547_32554 = (0);
var i__32548_32555 = (0);
while(true){
if((i__32548_32555 < count__32547_32554)){
var dep_32556 = cljs.core._nth.call(null,chunk__32546_32553,i__32548_32555);
topo_sort_helper_STAR_.call(null,dep_32556,(depth + (1)),state);

var G__32557 = seq__32545_32552;
var G__32558 = chunk__32546_32553;
var G__32559 = count__32547_32554;
var G__32560 = (i__32548_32555 + (1));
seq__32545_32552 = G__32557;
chunk__32546_32553 = G__32558;
count__32547_32554 = G__32559;
i__32548_32555 = G__32560;
continue;
} else {
var temp__4425__auto___32561 = cljs.core.seq.call(null,seq__32545_32552);
if(temp__4425__auto___32561){
var seq__32545_32562__$1 = temp__4425__auto___32561;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32545_32562__$1)){
var c__18328__auto___32563 = cljs.core.chunk_first.call(null,seq__32545_32562__$1);
var G__32564 = cljs.core.chunk_rest.call(null,seq__32545_32562__$1);
var G__32565 = c__18328__auto___32563;
var G__32566 = cljs.core.count.call(null,c__18328__auto___32563);
var G__32567 = (0);
seq__32545_32552 = G__32564;
chunk__32546_32553 = G__32565;
count__32547_32554 = G__32566;
i__32548_32555 = G__32567;
continue;
} else {
var dep_32568 = cljs.core.first.call(null,seq__32545_32562__$1);
topo_sort_helper_STAR_.call(null,dep_32568,(depth + (1)),state);

var G__32569 = cljs.core.next.call(null,seq__32545_32562__$1);
var G__32570 = null;
var G__32571 = (0);
var G__32572 = (0);
seq__32545_32552 = G__32569;
chunk__32546_32553 = G__32570;
count__32547_32554 = G__32571;
i__32548_32555 = G__32572;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__32549){
var vec__32551 = p__32549;
var x = cljs.core.nth.call(null,vec__32551,(0),null);
var xs = cljs.core.nthnext.call(null,vec__32551,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__32551,x,xs,get_deps__$1){
return (function (p1__32507_SHARP_){
return clojure.set.difference.call(null,p1__32507_SHARP_,x);
});})(vec__32551,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__32585 = cljs.core.seq.call(null,provides);
var chunk__32586 = null;
var count__32587 = (0);
var i__32588 = (0);
while(true){
if((i__32588 < count__32587)){
var prov = cljs.core._nth.call(null,chunk__32586,i__32588);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32589_32597 = cljs.core.seq.call(null,requires);
var chunk__32590_32598 = null;
var count__32591_32599 = (0);
var i__32592_32600 = (0);
while(true){
if((i__32592_32600 < count__32591_32599)){
var req_32601 = cljs.core._nth.call(null,chunk__32590_32598,i__32592_32600);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32601,prov);

var G__32602 = seq__32589_32597;
var G__32603 = chunk__32590_32598;
var G__32604 = count__32591_32599;
var G__32605 = (i__32592_32600 + (1));
seq__32589_32597 = G__32602;
chunk__32590_32598 = G__32603;
count__32591_32599 = G__32604;
i__32592_32600 = G__32605;
continue;
} else {
var temp__4425__auto___32606 = cljs.core.seq.call(null,seq__32589_32597);
if(temp__4425__auto___32606){
var seq__32589_32607__$1 = temp__4425__auto___32606;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32589_32607__$1)){
var c__18328__auto___32608 = cljs.core.chunk_first.call(null,seq__32589_32607__$1);
var G__32609 = cljs.core.chunk_rest.call(null,seq__32589_32607__$1);
var G__32610 = c__18328__auto___32608;
var G__32611 = cljs.core.count.call(null,c__18328__auto___32608);
var G__32612 = (0);
seq__32589_32597 = G__32609;
chunk__32590_32598 = G__32610;
count__32591_32599 = G__32611;
i__32592_32600 = G__32612;
continue;
} else {
var req_32613 = cljs.core.first.call(null,seq__32589_32607__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32613,prov);

var G__32614 = cljs.core.next.call(null,seq__32589_32607__$1);
var G__32615 = null;
var G__32616 = (0);
var G__32617 = (0);
seq__32589_32597 = G__32614;
chunk__32590_32598 = G__32615;
count__32591_32599 = G__32616;
i__32592_32600 = G__32617;
continue;
}
} else {
}
}
break;
}

var G__32618 = seq__32585;
var G__32619 = chunk__32586;
var G__32620 = count__32587;
var G__32621 = (i__32588 + (1));
seq__32585 = G__32618;
chunk__32586 = G__32619;
count__32587 = G__32620;
i__32588 = G__32621;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__32585);
if(temp__4425__auto__){
var seq__32585__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32585__$1)){
var c__18328__auto__ = cljs.core.chunk_first.call(null,seq__32585__$1);
var G__32622 = cljs.core.chunk_rest.call(null,seq__32585__$1);
var G__32623 = c__18328__auto__;
var G__32624 = cljs.core.count.call(null,c__18328__auto__);
var G__32625 = (0);
seq__32585 = G__32622;
chunk__32586 = G__32623;
count__32587 = G__32624;
i__32588 = G__32625;
continue;
} else {
var prov = cljs.core.first.call(null,seq__32585__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32593_32626 = cljs.core.seq.call(null,requires);
var chunk__32594_32627 = null;
var count__32595_32628 = (0);
var i__32596_32629 = (0);
while(true){
if((i__32596_32629 < count__32595_32628)){
var req_32630 = cljs.core._nth.call(null,chunk__32594_32627,i__32596_32629);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32630,prov);

var G__32631 = seq__32593_32626;
var G__32632 = chunk__32594_32627;
var G__32633 = count__32595_32628;
var G__32634 = (i__32596_32629 + (1));
seq__32593_32626 = G__32631;
chunk__32594_32627 = G__32632;
count__32595_32628 = G__32633;
i__32596_32629 = G__32634;
continue;
} else {
var temp__4425__auto___32635__$1 = cljs.core.seq.call(null,seq__32593_32626);
if(temp__4425__auto___32635__$1){
var seq__32593_32636__$1 = temp__4425__auto___32635__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32593_32636__$1)){
var c__18328__auto___32637 = cljs.core.chunk_first.call(null,seq__32593_32636__$1);
var G__32638 = cljs.core.chunk_rest.call(null,seq__32593_32636__$1);
var G__32639 = c__18328__auto___32637;
var G__32640 = cljs.core.count.call(null,c__18328__auto___32637);
var G__32641 = (0);
seq__32593_32626 = G__32638;
chunk__32594_32627 = G__32639;
count__32595_32628 = G__32640;
i__32596_32629 = G__32641;
continue;
} else {
var req_32642 = cljs.core.first.call(null,seq__32593_32636__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32642,prov);

var G__32643 = cljs.core.next.call(null,seq__32593_32636__$1);
var G__32644 = null;
var G__32645 = (0);
var G__32646 = (0);
seq__32593_32626 = G__32643;
chunk__32594_32627 = G__32644;
count__32595_32628 = G__32645;
i__32596_32629 = G__32646;
continue;
}
} else {
}
}
break;
}

var G__32647 = cljs.core.next.call(null,seq__32585__$1);
var G__32648 = null;
var G__32649 = (0);
var G__32650 = (0);
seq__32585 = G__32647;
chunk__32586 = G__32648;
count__32587 = G__32649;
i__32588 = G__32650;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__32655_32659 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__32656_32660 = null;
var count__32657_32661 = (0);
var i__32658_32662 = (0);
while(true){
if((i__32658_32662 < count__32657_32661)){
var ns_32663 = cljs.core._nth.call(null,chunk__32656_32660,i__32658_32662);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32663);

var G__32664 = seq__32655_32659;
var G__32665 = chunk__32656_32660;
var G__32666 = count__32657_32661;
var G__32667 = (i__32658_32662 + (1));
seq__32655_32659 = G__32664;
chunk__32656_32660 = G__32665;
count__32657_32661 = G__32666;
i__32658_32662 = G__32667;
continue;
} else {
var temp__4425__auto___32668 = cljs.core.seq.call(null,seq__32655_32659);
if(temp__4425__auto___32668){
var seq__32655_32669__$1 = temp__4425__auto___32668;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32655_32669__$1)){
var c__18328__auto___32670 = cljs.core.chunk_first.call(null,seq__32655_32669__$1);
var G__32671 = cljs.core.chunk_rest.call(null,seq__32655_32669__$1);
var G__32672 = c__18328__auto___32670;
var G__32673 = cljs.core.count.call(null,c__18328__auto___32670);
var G__32674 = (0);
seq__32655_32659 = G__32671;
chunk__32656_32660 = G__32672;
count__32657_32661 = G__32673;
i__32658_32662 = G__32674;
continue;
} else {
var ns_32675 = cljs.core.first.call(null,seq__32655_32669__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32675);

var G__32676 = cljs.core.next.call(null,seq__32655_32669__$1);
var G__32677 = null;
var G__32678 = (0);
var G__32679 = (0);
seq__32655_32659 = G__32676;
chunk__32656_32660 = G__32677;
count__32657_32661 = G__32678;
i__32658_32662 = G__32679;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__17525__auto__ = goog.require__;
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__32680__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__32680 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32681__i = 0, G__32681__a = new Array(arguments.length -  0);
while (G__32681__i < G__32681__a.length) {G__32681__a[G__32681__i] = arguments[G__32681__i + 0]; ++G__32681__i;}
  args = new cljs.core.IndexedSeq(G__32681__a,0);
} 
return G__32680__delegate.call(this,args);};
G__32680.cljs$lang$maxFixedArity = 0;
G__32680.cljs$lang$applyTo = (function (arglist__32682){
var args = cljs.core.seq(arglist__32682);
return G__32680__delegate(args);
});
G__32680.cljs$core$IFn$_invoke$arity$variadic = G__32680__delegate;
return G__32680;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__32684 = cljs.core._EQ_;
var expr__32685 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__32684.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__32685))){
var path_parts = ((function (pred__32684,expr__32685){
return (function (p1__32683_SHARP_){
return clojure.string.split.call(null,p1__32683_SHARP_,/[\/\\]/);
});})(pred__32684,expr__32685))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__32684,expr__32685){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e32687){if((e32687 instanceof Error)){
var e = e32687;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32687;

}
}})());
});
;})(path_parts,sep,root,pred__32684,expr__32685))
} else {
if(cljs.core.truth_(pred__32684.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__32685))){
return ((function (pred__32684,expr__32685){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__32684,expr__32685){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__32684,expr__32685))
);

return deferred.addErrback(((function (deferred,pred__32684,expr__32685){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__32684,expr__32685))
);
});
;})(pred__32684,expr__32685))
} else {
return ((function (pred__32684,expr__32685){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__32684,expr__32685))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__32688,callback){
var map__32691 = p__32688;
var map__32691__$1 = ((((!((map__32691 == null)))?((((map__32691.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32691.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32691):map__32691);
var file_msg = map__32691__$1;
var request_url = cljs.core.get.call(null,map__32691__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__32691,map__32691__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__32691,map__32691__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__22863__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22863__auto__){
return (function (){
var f__22864__auto__ = (function (){var switch__22842__auto__ = ((function (c__22863__auto__){
return (function (state_32715){
var state_val_32716 = (state_32715[(1)]);
if((state_val_32716 === (7))){
var inst_32711 = (state_32715[(2)]);
var state_32715__$1 = state_32715;
var statearr_32717_32737 = state_32715__$1;
(statearr_32717_32737[(2)] = inst_32711);

(statearr_32717_32737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (1))){
var state_32715__$1 = state_32715;
var statearr_32718_32738 = state_32715__$1;
(statearr_32718_32738[(2)] = null);

(statearr_32718_32738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (4))){
var inst_32695 = (state_32715[(7)]);
var inst_32695__$1 = (state_32715[(2)]);
var state_32715__$1 = (function (){var statearr_32719 = state_32715;
(statearr_32719[(7)] = inst_32695__$1);

return statearr_32719;
})();
if(cljs.core.truth_(inst_32695__$1)){
var statearr_32720_32739 = state_32715__$1;
(statearr_32720_32739[(1)] = (5));

} else {
var statearr_32721_32740 = state_32715__$1;
(statearr_32721_32740[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (6))){
var state_32715__$1 = state_32715;
var statearr_32722_32741 = state_32715__$1;
(statearr_32722_32741[(2)] = null);

(statearr_32722_32741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (3))){
var inst_32713 = (state_32715[(2)]);
var state_32715__$1 = state_32715;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32715__$1,inst_32713);
} else {
if((state_val_32716 === (2))){
var state_32715__$1 = state_32715;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32715__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_32716 === (11))){
var inst_32707 = (state_32715[(2)]);
var state_32715__$1 = (function (){var statearr_32723 = state_32715;
(statearr_32723[(8)] = inst_32707);

return statearr_32723;
})();
var statearr_32724_32742 = state_32715__$1;
(statearr_32724_32742[(2)] = null);

(statearr_32724_32742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (9))){
var inst_32701 = (state_32715[(9)]);
var inst_32699 = (state_32715[(10)]);
var inst_32703 = inst_32701.call(null,inst_32699);
var state_32715__$1 = state_32715;
var statearr_32725_32743 = state_32715__$1;
(statearr_32725_32743[(2)] = inst_32703);

(statearr_32725_32743[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (5))){
var inst_32695 = (state_32715[(7)]);
var inst_32697 = figwheel.client.file_reloading.blocking_load.call(null,inst_32695);
var state_32715__$1 = state_32715;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32715__$1,(8),inst_32697);
} else {
if((state_val_32716 === (10))){
var inst_32699 = (state_32715[(10)]);
var inst_32705 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_32699);
var state_32715__$1 = state_32715;
var statearr_32726_32744 = state_32715__$1;
(statearr_32726_32744[(2)] = inst_32705);

(statearr_32726_32744[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32716 === (8))){
var inst_32701 = (state_32715[(9)]);
var inst_32695 = (state_32715[(7)]);
var inst_32699 = (state_32715[(2)]);
var inst_32700 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_32701__$1 = cljs.core.get.call(null,inst_32700,inst_32695);
var state_32715__$1 = (function (){var statearr_32727 = state_32715;
(statearr_32727[(9)] = inst_32701__$1);

(statearr_32727[(10)] = inst_32699);

return statearr_32727;
})();
if(cljs.core.truth_(inst_32701__$1)){
var statearr_32728_32745 = state_32715__$1;
(statearr_32728_32745[(1)] = (9));

} else {
var statearr_32729_32746 = state_32715__$1;
(statearr_32729_32746[(1)] = (10));

}

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
});})(c__22863__auto__))
;
return ((function (switch__22842__auto__,c__22863__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22843__auto__ = null;
var figwheel$client$file_reloading$state_machine__22843__auto____0 = (function (){
var statearr_32733 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32733[(0)] = figwheel$client$file_reloading$state_machine__22843__auto__);

(statearr_32733[(1)] = (1));

return statearr_32733;
});
var figwheel$client$file_reloading$state_machine__22843__auto____1 = (function (state_32715){
while(true){
var ret_value__22844__auto__ = (function (){try{while(true){
var result__22845__auto__ = switch__22842__auto__.call(null,state_32715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22845__auto__;
}
break;
}
}catch (e32734){if((e32734 instanceof Object)){
var ex__22846__auto__ = e32734;
var statearr_32735_32747 = state_32715;
(statearr_32735_32747[(5)] = ex__22846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32734;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32748 = state_32715;
state_32715 = G__32748;
continue;
} else {
return ret_value__22844__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22843__auto__ = function(state_32715){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22843__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22843__auto____1.call(this,state_32715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22843__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22843__auto____0;
figwheel$client$file_reloading$state_machine__22843__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22843__auto____1;
return figwheel$client$file_reloading$state_machine__22843__auto__;
})()
;})(switch__22842__auto__,c__22863__auto__))
})();
var state__22865__auto__ = (function (){var statearr_32736 = f__22864__auto__.call(null);
(statearr_32736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22863__auto__);

return statearr_32736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22865__auto__);
});})(c__22863__auto__))
);

return c__22863__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__32749,callback){
var map__32752 = p__32749;
var map__32752__$1 = ((((!((map__32752 == null)))?((((map__32752.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32752.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32752):map__32752);
var file_msg = map__32752__$1;
var namespace = cljs.core.get.call(null,map__32752__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__32752,map__32752__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__32752,map__32752__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__32754){
var map__32757 = p__32754;
var map__32757__$1 = ((((!((map__32757 == null)))?((((map__32757.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32757.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32757):map__32757);
var file_msg = map__32757__$1;
var namespace = cljs.core.get.call(null,map__32757__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__17513__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__17513__auto__){
var or__17525__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
var or__17525__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__17525__auto____$1)){
return or__17525__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__17513__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__32759,callback){
var map__32762 = p__32759;
var map__32762__$1 = ((((!((map__32762 == null)))?((((map__32762.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32762.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32762):map__32762);
var file_msg = map__32762__$1;
var request_url = cljs.core.get.call(null,map__32762__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__32762__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__22863__auto___32850 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22863__auto___32850,out){
return (function (){
var f__22864__auto__ = (function (){var switch__22842__auto__ = ((function (c__22863__auto___32850,out){
return (function (state_32832){
var state_val_32833 = (state_32832[(1)]);
if((state_val_32833 === (1))){
var inst_32810 = cljs.core.nth.call(null,files,(0),null);
var inst_32811 = cljs.core.nthnext.call(null,files,(1));
var inst_32812 = files;
var state_32832__$1 = (function (){var statearr_32834 = state_32832;
(statearr_32834[(7)] = inst_32812);

(statearr_32834[(9)] = inst_32811);

(statearr_32834[(10)] = inst_32810);

return statearr_32834;
})();
var statearr_32835_32851 = state_32832__$1;
(statearr_32835_32851[(2)] = null);

(statearr_32835_32851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32833 === (2))){
var inst_32812 = (state_32832[(7)]);
var inst_32815 = (state_32832[(8)]);
var inst_32815__$1 = cljs.core.nth.call(null,inst_32812,(0),null);
var inst_32816 = cljs.core.nthnext.call(null,inst_32812,(1));
var inst_32817 = (inst_32815__$1 == null);
var inst_32818 = cljs.core.not.call(null,inst_32817);
var state_32832__$1 = (function (){var statearr_32836 = state_32832;
(statearr_32836[(8)] = inst_32815__$1);

(statearr_32836[(11)] = inst_32816);

return statearr_32836;
})();
if(inst_32818){
var statearr_32837_32852 = state_32832__$1;
(statearr_32837_32852[(1)] = (4));

} else {
var statearr_32838_32853 = state_32832__$1;
(statearr_32838_32853[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32833 === (3))){
var inst_32830 = (state_32832[(2)]);
var state_32832__$1 = state_32832;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32832__$1,inst_32830);
} else {
if((state_val_32833 === (4))){
var inst_32815 = (state_32832[(8)]);
var inst_32820 = figwheel.client.file_reloading.reload_js_file.call(null,inst_32815);
var state_32832__$1 = state_32832;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32832__$1,(7),inst_32820);
} else {
if((state_val_32833 === (5))){
var inst_32826 = cljs.core.async.close_BANG_.call(null,out);
var state_32832__$1 = state_32832;
var statearr_32839_32854 = state_32832__$1;
(statearr_32839_32854[(2)] = inst_32826);

(statearr_32839_32854[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32833 === (6))){
var inst_32828 = (state_32832[(2)]);
var state_32832__$1 = state_32832;
var statearr_32840_32855 = state_32832__$1;
(statearr_32840_32855[(2)] = inst_32828);

(statearr_32840_32855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32833 === (7))){
var inst_32816 = (state_32832[(11)]);
var inst_32822 = (state_32832[(2)]);
var inst_32823 = cljs.core.async.put_BANG_.call(null,out,inst_32822);
var inst_32812 = inst_32816;
var state_32832__$1 = (function (){var statearr_32841 = state_32832;
(statearr_32841[(7)] = inst_32812);

(statearr_32841[(12)] = inst_32823);

return statearr_32841;
})();
var statearr_32842_32856 = state_32832__$1;
(statearr_32842_32856[(2)] = null);

(statearr_32842_32856[(1)] = (2));


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
});})(c__22863__auto___32850,out))
;
return ((function (switch__22842__auto__,c__22863__auto___32850,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22843__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22843__auto____0 = (function (){
var statearr_32846 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32846[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22843__auto__);

(statearr_32846[(1)] = (1));

return statearr_32846;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22843__auto____1 = (function (state_32832){
while(true){
var ret_value__22844__auto__ = (function (){try{while(true){
var result__22845__auto__ = switch__22842__auto__.call(null,state_32832);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22845__auto__;
}
break;
}
}catch (e32847){if((e32847 instanceof Object)){
var ex__22846__auto__ = e32847;
var statearr_32848_32857 = state_32832;
(statearr_32848_32857[(5)] = ex__22846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32832);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32858 = state_32832;
state_32832 = G__32858;
continue;
} else {
return ret_value__22844__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22843__auto__ = function(state_32832){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22843__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22843__auto____1.call(this,state_32832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22843__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22843__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22843__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22843__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22843__auto__;
})()
;})(switch__22842__auto__,c__22863__auto___32850,out))
})();
var state__22865__auto__ = (function (){var statearr_32849 = f__22864__auto__.call(null);
(statearr_32849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22863__auto___32850);

return statearr_32849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22865__auto__);
});})(c__22863__auto___32850,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__32859,opts){
var map__32863 = p__32859;
var map__32863__$1 = ((((!((map__32863 == null)))?((((map__32863.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32863.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32863):map__32863);
var eval_body__$1 = cljs.core.get.call(null,map__32863__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__32863__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__17513__auto__ = eval_body__$1;
if(cljs.core.truth_(and__17513__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__17513__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e32865){var e = e32865;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__32866_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32866_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__32871){
var vec__32872 = p__32871;
var k = cljs.core.nth.call(null,vec__32872,(0),null);
var v = cljs.core.nth.call(null,vec__32872,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__32873){
var vec__32874 = p__32873;
var k = cljs.core.nth.call(null,vec__32874,(0),null);
var v = cljs.core.nth.call(null,vec__32874,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__32878,p__32879){
var map__33126 = p__32878;
var map__33126__$1 = ((((!((map__33126 == null)))?((((map__33126.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33126.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33126):map__33126);
var opts = map__33126__$1;
var before_jsload = cljs.core.get.call(null,map__33126__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__33126__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__33126__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__33127 = p__32879;
var map__33127__$1 = ((((!((map__33127 == null)))?((((map__33127.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33127.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33127):map__33127);
var msg = map__33127__$1;
var files = cljs.core.get.call(null,map__33127__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__33127__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__33127__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22863__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22863__auto__,map__33126,map__33126__$1,opts,before_jsload,on_jsload,reload_dependents,map__33127,map__33127__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22864__auto__ = (function (){var switch__22842__auto__ = ((function (c__22863__auto__,map__33126,map__33126__$1,opts,before_jsload,on_jsload,reload_dependents,map__33127,map__33127__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_33280){
var state_val_33281 = (state_33280[(1)]);
if((state_val_33281 === (7))){
var inst_33144 = (state_33280[(7)]);
var inst_33141 = (state_33280[(8)]);
var inst_33142 = (state_33280[(9)]);
var inst_33143 = (state_33280[(10)]);
var inst_33149 = cljs.core._nth.call(null,inst_33142,inst_33144);
var inst_33150 = figwheel.client.file_reloading.eval_body.call(null,inst_33149,opts);
var inst_33151 = (inst_33144 + (1));
var tmp33282 = inst_33141;
var tmp33283 = inst_33142;
var tmp33284 = inst_33143;
var inst_33141__$1 = tmp33282;
var inst_33142__$1 = tmp33283;
var inst_33143__$1 = tmp33284;
var inst_33144__$1 = inst_33151;
var state_33280__$1 = (function (){var statearr_33285 = state_33280;
(statearr_33285[(7)] = inst_33144__$1);

(statearr_33285[(8)] = inst_33141__$1);

(statearr_33285[(13)] = inst_33150);

(statearr_33285[(9)] = inst_33142__$1);

(statearr_33285[(10)] = inst_33143__$1);

return statearr_33285;
})();
var statearr_33286_33372 = state_33280__$1;
(statearr_33286_33372[(2)] = null);

(statearr_33286_33372[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (20))){
var inst_33184 = (state_33280[(11)]);
var inst_33192 = figwheel.client.file_reloading.sort_files.call(null,inst_33184);
var state_33280__$1 = state_33280;
var statearr_33287_33373 = state_33280__$1;
(statearr_33287_33373[(2)] = inst_33192);

(statearr_33287_33373[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (27))){
var state_33280__$1 = state_33280;
var statearr_33288_33374 = state_33280__$1;
(statearr_33288_33374[(2)] = null);

(statearr_33288_33374[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (1))){
var inst_33133 = (state_33280[(12)]);
var inst_33130 = before_jsload.call(null,files);
var inst_33131 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_33132 = (function (){return ((function (inst_33133,inst_33130,inst_33131,state_val_33281,c__22863__auto__,map__33126,map__33126__$1,opts,before_jsload,on_jsload,reload_dependents,map__33127,map__33127__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32875_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32875_SHARP_);
});
;})(inst_33133,inst_33130,inst_33131,state_val_33281,c__22863__auto__,map__33126,map__33126__$1,opts,before_jsload,on_jsload,reload_dependents,map__33127,map__33127__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33133__$1 = cljs.core.filter.call(null,inst_33132,files);
var inst_33134 = cljs.core.not_empty.call(null,inst_33133__$1);
var state_33280__$1 = (function (){var statearr_33289 = state_33280;
(statearr_33289[(12)] = inst_33133__$1);

(statearr_33289[(15)] = inst_33131);

(statearr_33289[(16)] = inst_33130);

return statearr_33289;
})();
if(cljs.core.truth_(inst_33134)){
var statearr_33290_33375 = state_33280__$1;
(statearr_33290_33375[(1)] = (2));

} else {
var statearr_33291_33376 = state_33280__$1;
(statearr_33291_33376[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (24))){
var state_33280__$1 = state_33280;
var statearr_33292_33377 = state_33280__$1;
(statearr_33292_33377[(2)] = null);

(statearr_33292_33377[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (39))){
var inst_33234 = (state_33280[(14)]);
var state_33280__$1 = state_33280;
var statearr_33293_33378 = state_33280__$1;
(statearr_33293_33378[(2)] = inst_33234);

(statearr_33293_33378[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (46))){
var inst_33275 = (state_33280[(2)]);
var state_33280__$1 = state_33280;
var statearr_33294_33379 = state_33280__$1;
(statearr_33294_33379[(2)] = inst_33275);

(statearr_33294_33379[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (4))){
var inst_33178 = (state_33280[(2)]);
var inst_33179 = cljs.core.List.EMPTY;
var inst_33180 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_33179);
var inst_33181 = (function (){return ((function (inst_33178,inst_33179,inst_33180,state_val_33281,c__22863__auto__,map__33126,map__33126__$1,opts,before_jsload,on_jsload,reload_dependents,map__33127,map__33127__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32876_SHARP_){
var and__17513__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32876_SHARP_);
if(cljs.core.truth_(and__17513__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32876_SHARP_));
} else {
return and__17513__auto__;
}
});
;})(inst_33178,inst_33179,inst_33180,state_val_33281,c__22863__auto__,map__33126,map__33126__$1,opts,before_jsload,on_jsload,reload_dependents,map__33127,map__33127__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33182 = cljs.core.filter.call(null,inst_33181,files);
var inst_33183 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_33184 = cljs.core.concat.call(null,inst_33182,inst_33183);
var state_33280__$1 = (function (){var statearr_33295 = state_33280;
(statearr_33295[(17)] = inst_33178);

(statearr_33295[(11)] = inst_33184);

(statearr_33295[(19)] = inst_33180);

return statearr_33295;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_33296_33380 = state_33280__$1;
(statearr_33296_33380[(1)] = (16));

} else {
var statearr_33297_33381 = state_33280__$1;
(statearr_33297_33381[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (15))){
var inst_33168 = (state_33280[(2)]);
var state_33280__$1 = state_33280;
var statearr_33298_33382 = state_33280__$1;
(statearr_33298_33382[(2)] = inst_33168);

(statearr_33298_33382[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (21))){
var inst_33194 = (state_33280[(18)]);
var inst_33194__$1 = (state_33280[(2)]);
var inst_33195 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_33194__$1);
var state_33280__$1 = (function (){var statearr_33299 = state_33280;
(statearr_33299[(18)] = inst_33194__$1);

return statearr_33299;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33280__$1,(22),inst_33195);
} else {
if((state_val_33281 === (31))){
var inst_33278 = (state_33280[(2)]);
var state_33280__$1 = state_33280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33280__$1,inst_33278);
} else {
if((state_val_33281 === (32))){
var inst_33234 = (state_33280[(14)]);
var inst_33239 = inst_33234.cljs$lang$protocol_mask$partition0$;
var inst_33240 = (inst_33239 & (64));
var inst_33241 = inst_33234.cljs$core$ISeq$;
var inst_33242 = (inst_33240) || (inst_33241);
var state_33280__$1 = state_33280;
if(cljs.core.truth_(inst_33242)){
var statearr_33300_33383 = state_33280__$1;
(statearr_33300_33383[(1)] = (35));

} else {
var statearr_33301_33384 = state_33280__$1;
(statearr_33301_33384[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (40))){
var inst_33255 = (state_33280[(20)]);
var inst_33254 = (state_33280[(2)]);
var inst_33255__$1 = cljs.core.get.call(null,inst_33254,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_33256 = cljs.core.get.call(null,inst_33254,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_33257 = cljs.core.not_empty.call(null,inst_33255__$1);
var state_33280__$1 = (function (){var statearr_33302 = state_33280;
(statearr_33302[(20)] = inst_33255__$1);

(statearr_33302[(22)] = inst_33256);

return statearr_33302;
})();
if(cljs.core.truth_(inst_33257)){
var statearr_33303_33385 = state_33280__$1;
(statearr_33303_33385[(1)] = (41));

} else {
var statearr_33304_33386 = state_33280__$1;
(statearr_33304_33386[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (33))){
var state_33280__$1 = state_33280;
var statearr_33305_33387 = state_33280__$1;
(statearr_33305_33387[(2)] = false);

(statearr_33305_33387[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (13))){
var inst_33154 = (state_33280[(21)]);
var inst_33158 = cljs.core.chunk_first.call(null,inst_33154);
var inst_33159 = cljs.core.chunk_rest.call(null,inst_33154);
var inst_33160 = cljs.core.count.call(null,inst_33158);
var inst_33141 = inst_33159;
var inst_33142 = inst_33158;
var inst_33143 = inst_33160;
var inst_33144 = (0);
var state_33280__$1 = (function (){var statearr_33306 = state_33280;
(statearr_33306[(7)] = inst_33144);

(statearr_33306[(8)] = inst_33141);

(statearr_33306[(9)] = inst_33142);

(statearr_33306[(10)] = inst_33143);

return statearr_33306;
})();
var statearr_33307_33388 = state_33280__$1;
(statearr_33307_33388[(2)] = null);

(statearr_33307_33388[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (22))){
var inst_33197 = (state_33280[(23)]);
var inst_33198 = (state_33280[(24)]);
var inst_33202 = (state_33280[(25)]);
var inst_33194 = (state_33280[(18)]);
var inst_33197__$1 = (state_33280[(2)]);
var inst_33198__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33197__$1);
var inst_33199 = (function (){var all_files = inst_33194;
var res_SINGLEQUOTE_ = inst_33197__$1;
var res = inst_33198__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_33197,inst_33198,inst_33202,inst_33194,inst_33197__$1,inst_33198__$1,state_val_33281,c__22863__auto__,map__33126,map__33126__$1,opts,before_jsload,on_jsload,reload_dependents,map__33127,map__33127__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32877_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__32877_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_33197,inst_33198,inst_33202,inst_33194,inst_33197__$1,inst_33198__$1,state_val_33281,c__22863__auto__,map__33126,map__33126__$1,opts,before_jsload,on_jsload,reload_dependents,map__33127,map__33127__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33200 = cljs.core.filter.call(null,inst_33199,inst_33197__$1);
var inst_33201 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_33202__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33201);
var inst_33203 = cljs.core.not_empty.call(null,inst_33202__$1);
var state_33280__$1 = (function (){var statearr_33308 = state_33280;
(statearr_33308[(23)] = inst_33197__$1);

(statearr_33308[(24)] = inst_33198__$1);

(statearr_33308[(25)] = inst_33202__$1);

(statearr_33308[(26)] = inst_33200);

return statearr_33308;
})();
if(cljs.core.truth_(inst_33203)){
var statearr_33309_33389 = state_33280__$1;
(statearr_33309_33389[(1)] = (23));

} else {
var statearr_33310_33390 = state_33280__$1;
(statearr_33310_33390[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (36))){
var state_33280__$1 = state_33280;
var statearr_33311_33391 = state_33280__$1;
(statearr_33311_33391[(2)] = false);

(statearr_33311_33391[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (41))){
var inst_33255 = (state_33280[(20)]);
var inst_33259 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_33260 = cljs.core.map.call(null,inst_33259,inst_33255);
var inst_33261 = cljs.core.pr_str.call(null,inst_33260);
var inst_33262 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_33261)].join('');
var inst_33263 = figwheel.client.utils.log.call(null,inst_33262);
var state_33280__$1 = state_33280;
var statearr_33312_33392 = state_33280__$1;
(statearr_33312_33392[(2)] = inst_33263);

(statearr_33312_33392[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (43))){
var inst_33256 = (state_33280[(22)]);
var inst_33266 = (state_33280[(2)]);
var inst_33267 = cljs.core.not_empty.call(null,inst_33256);
var state_33280__$1 = (function (){var statearr_33313 = state_33280;
(statearr_33313[(27)] = inst_33266);

return statearr_33313;
})();
if(cljs.core.truth_(inst_33267)){
var statearr_33314_33393 = state_33280__$1;
(statearr_33314_33393[(1)] = (44));

} else {
var statearr_33315_33394 = state_33280__$1;
(statearr_33315_33394[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (29))){
var inst_33197 = (state_33280[(23)]);
var inst_33198 = (state_33280[(24)]);
var inst_33202 = (state_33280[(25)]);
var inst_33234 = (state_33280[(14)]);
var inst_33200 = (state_33280[(26)]);
var inst_33194 = (state_33280[(18)]);
var inst_33230 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_33233 = (function (){var all_files = inst_33194;
var res_SINGLEQUOTE_ = inst_33197;
var res = inst_33198;
var files_not_loaded = inst_33200;
var dependencies_that_loaded = inst_33202;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33197,inst_33198,inst_33202,inst_33234,inst_33200,inst_33194,inst_33230,state_val_33281,c__22863__auto__,map__33126,map__33126__$1,opts,before_jsload,on_jsload,reload_dependents,map__33127,map__33127__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33232){
var map__33316 = p__33232;
var map__33316__$1 = ((((!((map__33316 == null)))?((((map__33316.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33316.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33316):map__33316);
var namespace = cljs.core.get.call(null,map__33316__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33197,inst_33198,inst_33202,inst_33234,inst_33200,inst_33194,inst_33230,state_val_33281,c__22863__auto__,map__33126,map__33126__$1,opts,before_jsload,on_jsload,reload_dependents,map__33127,map__33127__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33234__$1 = cljs.core.group_by.call(null,inst_33233,inst_33200);
var inst_33236 = (inst_33234__$1 == null);
var inst_33237 = cljs.core.not.call(null,inst_33236);
var state_33280__$1 = (function (){var statearr_33318 = state_33280;
(statearr_33318[(28)] = inst_33230);

(statearr_33318[(14)] = inst_33234__$1);

return statearr_33318;
})();
if(inst_33237){
var statearr_33319_33395 = state_33280__$1;
(statearr_33319_33395[(1)] = (32));

} else {
var statearr_33320_33396 = state_33280__$1;
(statearr_33320_33396[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (44))){
var inst_33256 = (state_33280[(22)]);
var inst_33269 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33256);
var inst_33270 = cljs.core.pr_str.call(null,inst_33269);
var inst_33271 = [cljs.core.str("not required: "),cljs.core.str(inst_33270)].join('');
var inst_33272 = figwheel.client.utils.log.call(null,inst_33271);
var state_33280__$1 = state_33280;
var statearr_33321_33397 = state_33280__$1;
(statearr_33321_33397[(2)] = inst_33272);

(statearr_33321_33397[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (6))){
var inst_33175 = (state_33280[(2)]);
var state_33280__$1 = state_33280;
var statearr_33322_33398 = state_33280__$1;
(statearr_33322_33398[(2)] = inst_33175);

(statearr_33322_33398[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (28))){
var inst_33200 = (state_33280[(26)]);
var inst_33227 = (state_33280[(2)]);
var inst_33228 = cljs.core.not_empty.call(null,inst_33200);
var state_33280__$1 = (function (){var statearr_33323 = state_33280;
(statearr_33323[(29)] = inst_33227);

return statearr_33323;
})();
if(cljs.core.truth_(inst_33228)){
var statearr_33324_33399 = state_33280__$1;
(statearr_33324_33399[(1)] = (29));

} else {
var statearr_33325_33400 = state_33280__$1;
(statearr_33325_33400[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (25))){
var inst_33198 = (state_33280[(24)]);
var inst_33214 = (state_33280[(2)]);
var inst_33215 = cljs.core.not_empty.call(null,inst_33198);
var state_33280__$1 = (function (){var statearr_33326 = state_33280;
(statearr_33326[(30)] = inst_33214);

return statearr_33326;
})();
if(cljs.core.truth_(inst_33215)){
var statearr_33327_33401 = state_33280__$1;
(statearr_33327_33401[(1)] = (26));

} else {
var statearr_33328_33402 = state_33280__$1;
(statearr_33328_33402[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (34))){
var inst_33249 = (state_33280[(2)]);
var state_33280__$1 = state_33280;
if(cljs.core.truth_(inst_33249)){
var statearr_33329_33403 = state_33280__$1;
(statearr_33329_33403[(1)] = (38));

} else {
var statearr_33330_33404 = state_33280__$1;
(statearr_33330_33404[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (17))){
var state_33280__$1 = state_33280;
var statearr_33331_33405 = state_33280__$1;
(statearr_33331_33405[(2)] = recompile_dependents);

(statearr_33331_33405[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (3))){
var state_33280__$1 = state_33280;
var statearr_33332_33406 = state_33280__$1;
(statearr_33332_33406[(2)] = null);

(statearr_33332_33406[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (12))){
var inst_33171 = (state_33280[(2)]);
var state_33280__$1 = state_33280;
var statearr_33333_33407 = state_33280__$1;
(statearr_33333_33407[(2)] = inst_33171);

(statearr_33333_33407[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (2))){
var inst_33133 = (state_33280[(12)]);
var inst_33140 = cljs.core.seq.call(null,inst_33133);
var inst_33141 = inst_33140;
var inst_33142 = null;
var inst_33143 = (0);
var inst_33144 = (0);
var state_33280__$1 = (function (){var statearr_33334 = state_33280;
(statearr_33334[(7)] = inst_33144);

(statearr_33334[(8)] = inst_33141);

(statearr_33334[(9)] = inst_33142);

(statearr_33334[(10)] = inst_33143);

return statearr_33334;
})();
var statearr_33335_33408 = state_33280__$1;
(statearr_33335_33408[(2)] = null);

(statearr_33335_33408[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (23))){
var inst_33197 = (state_33280[(23)]);
var inst_33198 = (state_33280[(24)]);
var inst_33202 = (state_33280[(25)]);
var inst_33200 = (state_33280[(26)]);
var inst_33194 = (state_33280[(18)]);
var inst_33205 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_33207 = (function (){var all_files = inst_33194;
var res_SINGLEQUOTE_ = inst_33197;
var res = inst_33198;
var files_not_loaded = inst_33200;
var dependencies_that_loaded = inst_33202;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33197,inst_33198,inst_33202,inst_33200,inst_33194,inst_33205,state_val_33281,c__22863__auto__,map__33126,map__33126__$1,opts,before_jsload,on_jsload,reload_dependents,map__33127,map__33127__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33206){
var map__33336 = p__33206;
var map__33336__$1 = ((((!((map__33336 == null)))?((((map__33336.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33336.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33336):map__33336);
var request_url = cljs.core.get.call(null,map__33336__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33197,inst_33198,inst_33202,inst_33200,inst_33194,inst_33205,state_val_33281,c__22863__auto__,map__33126,map__33126__$1,opts,before_jsload,on_jsload,reload_dependents,map__33127,map__33127__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33208 = cljs.core.reverse.call(null,inst_33202);
var inst_33209 = cljs.core.map.call(null,inst_33207,inst_33208);
var inst_33210 = cljs.core.pr_str.call(null,inst_33209);
var inst_33211 = figwheel.client.utils.log.call(null,inst_33210);
var state_33280__$1 = (function (){var statearr_33338 = state_33280;
(statearr_33338[(31)] = inst_33205);

return statearr_33338;
})();
var statearr_33339_33409 = state_33280__$1;
(statearr_33339_33409[(2)] = inst_33211);

(statearr_33339_33409[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (35))){
var state_33280__$1 = state_33280;
var statearr_33340_33410 = state_33280__$1;
(statearr_33340_33410[(2)] = true);

(statearr_33340_33410[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (19))){
var inst_33184 = (state_33280[(11)]);
var inst_33190 = figwheel.client.file_reloading.expand_files.call(null,inst_33184);
var state_33280__$1 = state_33280;
var statearr_33341_33411 = state_33280__$1;
(statearr_33341_33411[(2)] = inst_33190);

(statearr_33341_33411[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (11))){
var state_33280__$1 = state_33280;
var statearr_33342_33412 = state_33280__$1;
(statearr_33342_33412[(2)] = null);

(statearr_33342_33412[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (9))){
var inst_33173 = (state_33280[(2)]);
var state_33280__$1 = state_33280;
var statearr_33343_33413 = state_33280__$1;
(statearr_33343_33413[(2)] = inst_33173);

(statearr_33343_33413[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (5))){
var inst_33144 = (state_33280[(7)]);
var inst_33143 = (state_33280[(10)]);
var inst_33146 = (inst_33144 < inst_33143);
var inst_33147 = inst_33146;
var state_33280__$1 = state_33280;
if(cljs.core.truth_(inst_33147)){
var statearr_33344_33414 = state_33280__$1;
(statearr_33344_33414[(1)] = (7));

} else {
var statearr_33345_33415 = state_33280__$1;
(statearr_33345_33415[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (14))){
var inst_33154 = (state_33280[(21)]);
var inst_33163 = cljs.core.first.call(null,inst_33154);
var inst_33164 = figwheel.client.file_reloading.eval_body.call(null,inst_33163,opts);
var inst_33165 = cljs.core.next.call(null,inst_33154);
var inst_33141 = inst_33165;
var inst_33142 = null;
var inst_33143 = (0);
var inst_33144 = (0);
var state_33280__$1 = (function (){var statearr_33346 = state_33280;
(statearr_33346[(7)] = inst_33144);

(statearr_33346[(8)] = inst_33141);

(statearr_33346[(33)] = inst_33164);

(statearr_33346[(9)] = inst_33142);

(statearr_33346[(10)] = inst_33143);

return statearr_33346;
})();
var statearr_33347_33416 = state_33280__$1;
(statearr_33347_33416[(2)] = null);

(statearr_33347_33416[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (45))){
var state_33280__$1 = state_33280;
var statearr_33348_33417 = state_33280__$1;
(statearr_33348_33417[(2)] = null);

(statearr_33348_33417[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (26))){
var inst_33197 = (state_33280[(23)]);
var inst_33198 = (state_33280[(24)]);
var inst_33202 = (state_33280[(25)]);
var inst_33200 = (state_33280[(26)]);
var inst_33194 = (state_33280[(18)]);
var inst_33217 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_33219 = (function (){var all_files = inst_33194;
var res_SINGLEQUOTE_ = inst_33197;
var res = inst_33198;
var files_not_loaded = inst_33200;
var dependencies_that_loaded = inst_33202;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33197,inst_33198,inst_33202,inst_33200,inst_33194,inst_33217,state_val_33281,c__22863__auto__,map__33126,map__33126__$1,opts,before_jsload,on_jsload,reload_dependents,map__33127,map__33127__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33218){
var map__33349 = p__33218;
var map__33349__$1 = ((((!((map__33349 == null)))?((((map__33349.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33349.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33349):map__33349);
var namespace = cljs.core.get.call(null,map__33349__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__33349__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33197,inst_33198,inst_33202,inst_33200,inst_33194,inst_33217,state_val_33281,c__22863__auto__,map__33126,map__33126__$1,opts,before_jsload,on_jsload,reload_dependents,map__33127,map__33127__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33220 = cljs.core.map.call(null,inst_33219,inst_33198);
var inst_33221 = cljs.core.pr_str.call(null,inst_33220);
var inst_33222 = figwheel.client.utils.log.call(null,inst_33221);
var inst_33223 = (function (){var all_files = inst_33194;
var res_SINGLEQUOTE_ = inst_33197;
var res = inst_33198;
var files_not_loaded = inst_33200;
var dependencies_that_loaded = inst_33202;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33197,inst_33198,inst_33202,inst_33200,inst_33194,inst_33217,inst_33219,inst_33220,inst_33221,inst_33222,state_val_33281,c__22863__auto__,map__33126,map__33126__$1,opts,before_jsload,on_jsload,reload_dependents,map__33127,map__33127__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33197,inst_33198,inst_33202,inst_33200,inst_33194,inst_33217,inst_33219,inst_33220,inst_33221,inst_33222,state_val_33281,c__22863__auto__,map__33126,map__33126__$1,opts,before_jsload,on_jsload,reload_dependents,map__33127,map__33127__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33224 = setTimeout(inst_33223,(10));
var state_33280__$1 = (function (){var statearr_33351 = state_33280;
(statearr_33351[(32)] = inst_33217);

(statearr_33351[(34)] = inst_33222);

return statearr_33351;
})();
var statearr_33352_33418 = state_33280__$1;
(statearr_33352_33418[(2)] = inst_33224);

(statearr_33352_33418[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (16))){
var state_33280__$1 = state_33280;
var statearr_33353_33419 = state_33280__$1;
(statearr_33353_33419[(2)] = reload_dependents);

(statearr_33353_33419[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (38))){
var inst_33234 = (state_33280[(14)]);
var inst_33251 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33234);
var state_33280__$1 = state_33280;
var statearr_33354_33420 = state_33280__$1;
(statearr_33354_33420[(2)] = inst_33251);

(statearr_33354_33420[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (30))){
var state_33280__$1 = state_33280;
var statearr_33355_33421 = state_33280__$1;
(statearr_33355_33421[(2)] = null);

(statearr_33355_33421[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (10))){
var inst_33154 = (state_33280[(21)]);
var inst_33156 = cljs.core.chunked_seq_QMARK_.call(null,inst_33154);
var state_33280__$1 = state_33280;
if(inst_33156){
var statearr_33356_33422 = state_33280__$1;
(statearr_33356_33422[(1)] = (13));

} else {
var statearr_33357_33423 = state_33280__$1;
(statearr_33357_33423[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (18))){
var inst_33188 = (state_33280[(2)]);
var state_33280__$1 = state_33280;
if(cljs.core.truth_(inst_33188)){
var statearr_33358_33424 = state_33280__$1;
(statearr_33358_33424[(1)] = (19));

} else {
var statearr_33359_33425 = state_33280__$1;
(statearr_33359_33425[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (42))){
var state_33280__$1 = state_33280;
var statearr_33360_33426 = state_33280__$1;
(statearr_33360_33426[(2)] = null);

(statearr_33360_33426[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (37))){
var inst_33246 = (state_33280[(2)]);
var state_33280__$1 = state_33280;
var statearr_33361_33427 = state_33280__$1;
(statearr_33361_33427[(2)] = inst_33246);

(statearr_33361_33427[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (8))){
var inst_33141 = (state_33280[(8)]);
var inst_33154 = (state_33280[(21)]);
var inst_33154__$1 = cljs.core.seq.call(null,inst_33141);
var state_33280__$1 = (function (){var statearr_33362 = state_33280;
(statearr_33362[(21)] = inst_33154__$1);

return statearr_33362;
})();
if(inst_33154__$1){
var statearr_33363_33428 = state_33280__$1;
(statearr_33363_33428[(1)] = (10));

} else {
var statearr_33364_33429 = state_33280__$1;
(statearr_33364_33429[(1)] = (11));

}

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
});})(c__22863__auto__,map__33126,map__33126__$1,opts,before_jsload,on_jsload,reload_dependents,map__33127,map__33127__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22842__auto__,c__22863__auto__,map__33126,map__33126__$1,opts,before_jsload,on_jsload,reload_dependents,map__33127,map__33127__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22843__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22843__auto____0 = (function (){
var statearr_33368 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33368[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22843__auto__);

(statearr_33368[(1)] = (1));

return statearr_33368;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22843__auto____1 = (function (state_33280){
while(true){
var ret_value__22844__auto__ = (function (){try{while(true){
var result__22845__auto__ = switch__22842__auto__.call(null,state_33280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22845__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22845__auto__;
}
break;
}
}catch (e33369){if((e33369 instanceof Object)){
var ex__22846__auto__ = e33369;
var statearr_33370_33430 = state_33280;
(statearr_33370_33430[(5)] = ex__22846__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33431 = state_33280;
state_33280 = G__33431;
continue;
} else {
return ret_value__22844__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22843__auto__ = function(state_33280){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22843__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22843__auto____1.call(this,state_33280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22843__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22843__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22843__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22843__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22843__auto__;
})()
;})(switch__22842__auto__,c__22863__auto__,map__33126,map__33126__$1,opts,before_jsload,on_jsload,reload_dependents,map__33127,map__33127__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22865__auto__ = (function (){var statearr_33371 = f__22864__auto__.call(null);
(statearr_33371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22863__auto__);

return statearr_33371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22865__auto__);
});})(c__22863__auto__,map__33126,map__33126__$1,opts,before_jsload,on_jsload,reload_dependents,map__33127,map__33127__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22863__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__33434,link){
var map__33437 = p__33434;
var map__33437__$1 = ((((!((map__33437 == null)))?((((map__33437.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33437.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33437):map__33437);
var file = cljs.core.get.call(null,map__33437__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__33437,map__33437__$1,file){
return (function (p1__33432_SHARP_,p2__33433_SHARP_){
if(cljs.core._EQ_.call(null,p1__33432_SHARP_,p2__33433_SHARP_)){
return p1__33432_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__33437,map__33437__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__33443){
var map__33444 = p__33443;
var map__33444__$1 = ((((!((map__33444 == null)))?((((map__33444.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33444.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33444):map__33444);
var match_length = cljs.core.get.call(null,map__33444__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__33444__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__33439_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__33439_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args33446 = [];
var len__18583__auto___33449 = arguments.length;
var i__18584__auto___33450 = (0);
while(true){
if((i__18584__auto___33450 < len__18583__auto___33449)){
args33446.push((arguments[i__18584__auto___33450]));

var G__33451 = (i__18584__auto___33450 + (1));
i__18584__auto___33450 = G__33451;
continue;
} else {
}
break;
}

var G__33448 = args33446.length;
switch (G__33448) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33446.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__33453_SHARP_,p2__33454_SHARP_){
return cljs.core.assoc.call(null,p1__33453_SHARP_,cljs.core.get.call(null,p2__33454_SHARP_,key),p2__33454_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__33455){
var map__33458 = p__33455;
var map__33458__$1 = ((((!((map__33458 == null)))?((((map__33458.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33458.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33458):map__33458);
var f_data = map__33458__$1;
var file = cljs.core.get.call(null,map__33458__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__33460,files_msg){
var map__33467 = p__33460;
var map__33467__$1 = ((((!((map__33467 == null)))?((((map__33467.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33467.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33467):map__33467);
var opts = map__33467__$1;
var on_cssload = cljs.core.get.call(null,map__33467__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__33469_33473 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__33470_33474 = null;
var count__33471_33475 = (0);
var i__33472_33476 = (0);
while(true){
if((i__33472_33476 < count__33471_33475)){
var f_33477 = cljs.core._nth.call(null,chunk__33470_33474,i__33472_33476);
figwheel.client.file_reloading.reload_css_file.call(null,f_33477);

var G__33478 = seq__33469_33473;
var G__33479 = chunk__33470_33474;
var G__33480 = count__33471_33475;
var G__33481 = (i__33472_33476 + (1));
seq__33469_33473 = G__33478;
chunk__33470_33474 = G__33479;
count__33471_33475 = G__33480;
i__33472_33476 = G__33481;
continue;
} else {
var temp__4425__auto___33482 = cljs.core.seq.call(null,seq__33469_33473);
if(temp__4425__auto___33482){
var seq__33469_33483__$1 = temp__4425__auto___33482;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33469_33483__$1)){
var c__18328__auto___33484 = cljs.core.chunk_first.call(null,seq__33469_33483__$1);
var G__33485 = cljs.core.chunk_rest.call(null,seq__33469_33483__$1);
var G__33486 = c__18328__auto___33484;
var G__33487 = cljs.core.count.call(null,c__18328__auto___33484);
var G__33488 = (0);
seq__33469_33473 = G__33485;
chunk__33470_33474 = G__33486;
count__33471_33475 = G__33487;
i__33472_33476 = G__33488;
continue;
} else {
var f_33489 = cljs.core.first.call(null,seq__33469_33483__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_33489);

var G__33490 = cljs.core.next.call(null,seq__33469_33483__$1);
var G__33491 = null;
var G__33492 = (0);
var G__33493 = (0);
seq__33469_33473 = G__33490;
chunk__33470_33474 = G__33491;
count__33471_33475 = G__33492;
i__33472_33476 = G__33493;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__33467,map__33467__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__33467,map__33467__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1452702631007