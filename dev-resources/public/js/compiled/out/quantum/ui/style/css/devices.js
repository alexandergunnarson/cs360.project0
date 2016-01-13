// Compiled by ClojureScript 1.7.170 {}
goog.provide('quantum.ui.style.css.devices');
goog.require('cljs.core');
goog.require('garden.core');
goog.require('garden.units');
goog.require('garden.color');
goog.require('garden.arithmetic');
goog.require('garden.stylesheet');
quantum.ui.style.css.devices.breakpoints = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mobile","mobile",1403078170),garden.units.px.call(null,(320)),new cljs.core.Keyword(null,"phablet","phablet",1658317821),garden.units.px.call(null,(481)),new cljs.core.Keyword(null,"tablet","tablet",-318585919),garden.units.px.call(null,(768)),new cljs.core.Keyword(null,"laptop","laptop",-2139696236),garden.units.px.call(null,(1024)),new cljs.core.Keyword(null,"desktop","desktop",1494219798),garden.units.px.call(null,(1440))], null);
quantum.ui.style.css.devices.mobile = (function quantum$ui$style$css$devices$mobile(var_args){
var args__18590__auto__ = [];
var len__18583__auto___41086 = arguments.length;
var i__18584__auto___41087 = (0);
while(true){
if((i__18584__auto___41087 < len__18583__auto___41086)){
args__18590__auto__.push((arguments[i__18584__auto___41087]));

var G__41088 = (i__18584__auto___41087 + (1));
i__18584__auto___41087 = G__41088;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.ui.style.css.devices.mobile.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.ui.style.css.devices.mobile.cljs$core$IFn$_invoke$arity$variadic = (function (rules__41032__auto__){
return garden.stylesheet.at_media.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"screen","screen",1990059748),true,new cljs.core.Keyword(null,"min-width","min-width",1926193728),new cljs.core.Keyword(null,"mobile","mobile",1403078170).cljs$core$IFn$_invoke$arity$1(quantum.ui.style.css.devices.breakpoints)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),rules__41032__auto__], null));
});

quantum.ui.style.css.devices.mobile.cljs$lang$maxFixedArity = (0);

quantum.ui.style.css.devices.mobile.cljs$lang$applyTo = (function (seq41085){
return quantum.ui.style.css.devices.mobile.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41085));
});
quantum.ui.style.css.devices.phablet = (function quantum$ui$style$css$devices$phablet(var_args){
var args__18590__auto__ = [];
var len__18583__auto___41090 = arguments.length;
var i__18584__auto___41091 = (0);
while(true){
if((i__18584__auto___41091 < len__18583__auto___41090)){
args__18590__auto__.push((arguments[i__18584__auto___41091]));

var G__41092 = (i__18584__auto___41091 + (1));
i__18584__auto___41091 = G__41092;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.ui.style.css.devices.phablet.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.ui.style.css.devices.phablet.cljs$core$IFn$_invoke$arity$variadic = (function (rules__41032__auto__){
return garden.stylesheet.at_media.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"screen","screen",1990059748),true,new cljs.core.Keyword(null,"min-width","min-width",1926193728),new cljs.core.Keyword(null,"phablet","phablet",1658317821).cljs$core$IFn$_invoke$arity$1(quantum.ui.style.css.devices.breakpoints)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),rules__41032__auto__], null));
});

quantum.ui.style.css.devices.phablet.cljs$lang$maxFixedArity = (0);

quantum.ui.style.css.devices.phablet.cljs$lang$applyTo = (function (seq41089){
return quantum.ui.style.css.devices.phablet.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41089));
});
quantum.ui.style.css.devices.tablet = (function quantum$ui$style$css$devices$tablet(var_args){
var args__18590__auto__ = [];
var len__18583__auto___41094 = arguments.length;
var i__18584__auto___41095 = (0);
while(true){
if((i__18584__auto___41095 < len__18583__auto___41094)){
args__18590__auto__.push((arguments[i__18584__auto___41095]));

var G__41096 = (i__18584__auto___41095 + (1));
i__18584__auto___41095 = G__41096;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.ui.style.css.devices.tablet.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.ui.style.css.devices.tablet.cljs$core$IFn$_invoke$arity$variadic = (function (rules__41032__auto__){
return garden.stylesheet.at_media.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"screen","screen",1990059748),true,new cljs.core.Keyword(null,"min-width","min-width",1926193728),new cljs.core.Keyword(null,"tablet","tablet",-318585919).cljs$core$IFn$_invoke$arity$1(quantum.ui.style.css.devices.breakpoints),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),(new cljs.core.Keyword(null,"laptop","laptop",-2139696236).cljs$core$IFn$_invoke$arity$1(quantum.ui.style.css.devices.breakpoints) - (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),rules__41032__auto__], null));
});

quantum.ui.style.css.devices.tablet.cljs$lang$maxFixedArity = (0);

quantum.ui.style.css.devices.tablet.cljs$lang$applyTo = (function (seq41093){
return quantum.ui.style.css.devices.tablet.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41093));
});
quantum.ui.style.css.devices.laptop = (function quantum$ui$style$css$devices$laptop(var_args){
var args__18590__auto__ = [];
var len__18583__auto___41098 = arguments.length;
var i__18584__auto___41099 = (0);
while(true){
if((i__18584__auto___41099 < len__18583__auto___41098)){
args__18590__auto__.push((arguments[i__18584__auto___41099]));

var G__41100 = (i__18584__auto___41099 + (1));
i__18584__auto___41099 = G__41100;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.ui.style.css.devices.laptop.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.ui.style.css.devices.laptop.cljs$core$IFn$_invoke$arity$variadic = (function (rules__41032__auto__){
return garden.stylesheet.at_media.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"screen","screen",1990059748),true,new cljs.core.Keyword(null,"min-width","min-width",1926193728),new cljs.core.Keyword(null,"laptop","laptop",-2139696236).cljs$core$IFn$_invoke$arity$1(quantum.ui.style.css.devices.breakpoints),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),(new cljs.core.Keyword(null,"desktop","desktop",1494219798).cljs$core$IFn$_invoke$arity$1(quantum.ui.style.css.devices.breakpoints) - (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),rules__41032__auto__], null));
});

quantum.ui.style.css.devices.laptop.cljs$lang$maxFixedArity = (0);

quantum.ui.style.css.devices.laptop.cljs$lang$applyTo = (function (seq41097){
return quantum.ui.style.css.devices.laptop.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41097));
});
quantum.ui.style.css.devices.desktop = (function quantum$ui$style$css$devices$desktop(var_args){
var args__18590__auto__ = [];
var len__18583__auto___41102 = arguments.length;
var i__18584__auto___41103 = (0);
while(true){
if((i__18584__auto___41103 < len__18583__auto___41102)){
args__18590__auto__.push((arguments[i__18584__auto___41103]));

var G__41104 = (i__18584__auto___41103 + (1));
i__18584__auto___41103 = G__41104;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.ui.style.css.devices.desktop.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.ui.style.css.devices.desktop.cljs$core$IFn$_invoke$arity$variadic = (function (rules__41032__auto__){
return garden.stylesheet.at_media.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"screen","screen",1990059748),true,new cljs.core.Keyword(null,"min-width","min-width",1926193728),new cljs.core.Keyword(null,"desktop","desktop",1494219798).cljs$core$IFn$_invoke$arity$1(quantum.ui.style.css.devices.breakpoints)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),rules__41032__auto__], null));
});

quantum.ui.style.css.devices.desktop.cljs$lang$maxFixedArity = (0);

quantum.ui.style.css.devices.desktop.cljs$lang$applyTo = (function (seq41101){
return quantum.ui.style.css.devices.desktop.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41101));
});
quantum.ui.style.css.devices.hd = (function quantum$ui$style$css$devices$hd(var_args){
var args__18590__auto__ = [];
var len__18583__auto___41106 = arguments.length;
var i__18584__auto___41107 = (0);
while(true){
if((i__18584__auto___41107 < len__18583__auto___41106)){
args__18590__auto__.push((arguments[i__18584__auto___41107]));

var G__41108 = (i__18584__auto___41107 + (1));
i__18584__auto___41107 = G__41108;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.ui.style.css.devices.hd.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.ui.style.css.devices.hd.cljs$core$IFn$_invoke$arity$variadic = (function (rules__41032__auto__){
return garden.stylesheet.at_media.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"screen","screen",1990059748),true,new cljs.core.Keyword(null,"min-width","min-width",1926193728),new cljs.core.Keyword(null,"hd","hd",242175935).cljs$core$IFn$_invoke$arity$1(quantum.ui.style.css.devices.breakpoints)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),rules__41032__auto__], null));
});

quantum.ui.style.css.devices.hd.cljs$lang$maxFixedArity = (0);

quantum.ui.style.css.devices.hd.cljs$lang$applyTo = (function (seq41105){
return quantum.ui.style.css.devices.hd.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41105));
});
quantum.ui.style.css.devices.iphone_3_4_media_params = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"screen","screen",1990059748),true,new cljs.core.Keyword(null,"min-device-width","min-device-width",870791724),garden.units.px.call(null,(320)),new cljs.core.Keyword(null,"max-device-width","max-device-width",187209294),garden.units.px.call(null,(480)),new cljs.core.Keyword(null,"-webkit-min-device-pixel-ratio","-webkit-min-device-pixel-ratio",1880183241),(2)], null);
quantum.ui.style.css.devices.iphone_3_4 = (function quantum$ui$style$css$devices$iphone_3_4(var_args){
var args__18590__auto__ = [];
var len__18583__auto___41110 = arguments.length;
var i__18584__auto___41111 = (0);
while(true){
if((i__18584__auto___41111 < len__18583__auto___41110)){
args__18590__auto__.push((arguments[i__18584__auto___41111]));

var G__41112 = (i__18584__auto___41111 + (1));
i__18584__auto___41111 = G__41112;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.ui.style.css.devices.iphone_3_4.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.ui.style.css.devices.iphone_3_4.cljs$core$IFn$_invoke$arity$variadic = (function (rules__41032__auto__){
return garden.stylesheet.at_media.call(null,quantum.ui.style.css.devices.iphone_3_4_media_params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),rules__41032__auto__], null));
});

quantum.ui.style.css.devices.iphone_3_4.cljs$lang$maxFixedArity = (0);

quantum.ui.style.css.devices.iphone_3_4.cljs$lang$applyTo = (function (seq41109){
return quantum.ui.style.css.devices.iphone_3_4.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41109));
});
quantum.ui.style.css.devices.iphone_3_4_landscape = (function quantum$ui$style$css$devices$iphone_3_4_landscape(var_args){
var args__18590__auto__ = [];
var len__18583__auto___41114 = arguments.length;
var i__18584__auto___41115 = (0);
while(true){
if((i__18584__auto___41115 < len__18583__auto___41114)){
args__18590__auto__.push((arguments[i__18584__auto___41115]));

var G__41116 = (i__18584__auto___41115 + (1));
i__18584__auto___41115 = G__41116;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.ui.style.css.devices.iphone_3_4_landscape.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.ui.style.css.devices.iphone_3_4_landscape.cljs$core$IFn$_invoke$arity$variadic = (function (rules__41032__auto__){
return garden.stylesheet.at_media.call(null,cljs.core.assoc.call(null,quantum.ui.style.css.devices.iphone_3_4_media_params,new cljs.core.Keyword(null,"orientation","orientation",623557579),new cljs.core.Keyword(null,"landscape","landscape",1519839253)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),rules__41032__auto__], null));
});

quantum.ui.style.css.devices.iphone_3_4_landscape.cljs$lang$maxFixedArity = (0);

quantum.ui.style.css.devices.iphone_3_4_landscape.cljs$lang$applyTo = (function (seq41113){
return quantum.ui.style.css.devices.iphone_3_4_landscape.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41113));
});
quantum.ui.style.css.devices.iphone_3_4_portrait = (function quantum$ui$style$css$devices$iphone_3_4_portrait(var_args){
var args__18590__auto__ = [];
var len__18583__auto___41118 = arguments.length;
var i__18584__auto___41119 = (0);
while(true){
if((i__18584__auto___41119 < len__18583__auto___41118)){
args__18590__auto__.push((arguments[i__18584__auto___41119]));

var G__41120 = (i__18584__auto___41119 + (1));
i__18584__auto___41119 = G__41120;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.ui.style.css.devices.iphone_3_4_portrait.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.ui.style.css.devices.iphone_3_4_portrait.cljs$core$IFn$_invoke$arity$variadic = (function (rules__41032__auto__){
return garden.stylesheet.at_media.call(null,cljs.core.assoc.call(null,quantum.ui.style.css.devices.iphone_3_4_media_params,new cljs.core.Keyword(null,"orientation","orientation",623557579),new cljs.core.Keyword(null,"portrait","portrait",-9810007)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),rules__41032__auto__], null));
});

quantum.ui.style.css.devices.iphone_3_4_portrait.cljs$lang$maxFixedArity = (0);

quantum.ui.style.css.devices.iphone_3_4_portrait.cljs$lang$applyTo = (function (seq41117){
return quantum.ui.style.css.devices.iphone_3_4_portrait.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41117));
});
quantum.ui.style.css.devices.iphone_5_media_params = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"screen","screen",1990059748),true,new cljs.core.Keyword(null,"min-device-width","min-device-width",870791724),garden.units.px.call(null,(320)),new cljs.core.Keyword(null,"max-device-width","max-device-width",187209294),garden.units.px.call(null,(568)),new cljs.core.Keyword(null,"-webkit-min-device-pixel-ratio","-webkit-min-device-pixel-ratio",1880183241),(2)], null);
quantum.ui.style.css.devices.iphone_5 = (function quantum$ui$style$css$devices$iphone_5(var_args){
var args__18590__auto__ = [];
var len__18583__auto___41122 = arguments.length;
var i__18584__auto___41123 = (0);
while(true){
if((i__18584__auto___41123 < len__18583__auto___41122)){
args__18590__auto__.push((arguments[i__18584__auto___41123]));

var G__41124 = (i__18584__auto___41123 + (1));
i__18584__auto___41123 = G__41124;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.ui.style.css.devices.iphone_5.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.ui.style.css.devices.iphone_5.cljs$core$IFn$_invoke$arity$variadic = (function (rules__41032__auto__){
return garden.stylesheet.at_media.call(null,quantum.ui.style.css.devices.iphone_5_media_params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),rules__41032__auto__], null));
});

quantum.ui.style.css.devices.iphone_5.cljs$lang$maxFixedArity = (0);

quantum.ui.style.css.devices.iphone_5.cljs$lang$applyTo = (function (seq41121){
return quantum.ui.style.css.devices.iphone_5.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41121));
});
quantum.ui.style.css.devices.iphone_5_landscape = (function quantum$ui$style$css$devices$iphone_5_landscape(var_args){
var args__18590__auto__ = [];
var len__18583__auto___41126 = arguments.length;
var i__18584__auto___41127 = (0);
while(true){
if((i__18584__auto___41127 < len__18583__auto___41126)){
args__18590__auto__.push((arguments[i__18584__auto___41127]));

var G__41128 = (i__18584__auto___41127 + (1));
i__18584__auto___41127 = G__41128;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.ui.style.css.devices.iphone_5_landscape.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.ui.style.css.devices.iphone_5_landscape.cljs$core$IFn$_invoke$arity$variadic = (function (rules__41032__auto__){
return garden.stylesheet.at_media.call(null,cljs.core.assoc.call(null,quantum.ui.style.css.devices.iphone_5_media_params,new cljs.core.Keyword(null,"orientation","orientation",623557579),new cljs.core.Keyword(null,"landscape","landscape",1519839253)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),rules__41032__auto__], null));
});

quantum.ui.style.css.devices.iphone_5_landscape.cljs$lang$maxFixedArity = (0);

quantum.ui.style.css.devices.iphone_5_landscape.cljs$lang$applyTo = (function (seq41125){
return quantum.ui.style.css.devices.iphone_5_landscape.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41125));
});
quantum.ui.style.css.devices.iphone_5_portrait = (function quantum$ui$style$css$devices$iphone_5_portrait(var_args){
var args__18590__auto__ = [];
var len__18583__auto___41130 = arguments.length;
var i__18584__auto___41131 = (0);
while(true){
if((i__18584__auto___41131 < len__18583__auto___41130)){
args__18590__auto__.push((arguments[i__18584__auto___41131]));

var G__41132 = (i__18584__auto___41131 + (1));
i__18584__auto___41131 = G__41132;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.ui.style.css.devices.iphone_5_portrait.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.ui.style.css.devices.iphone_5_portrait.cljs$core$IFn$_invoke$arity$variadic = (function (rules__41032__auto__){
return garden.stylesheet.at_media.call(null,cljs.core.assoc.call(null,quantum.ui.style.css.devices.iphone_5_media_params,new cljs.core.Keyword(null,"orientation","orientation",623557579),new cljs.core.Keyword(null,"portrait","portrait",-9810007)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),rules__41032__auto__], null));
});

quantum.ui.style.css.devices.iphone_5_portrait.cljs$lang$maxFixedArity = (0);

quantum.ui.style.css.devices.iphone_5_portrait.cljs$lang$applyTo = (function (seq41129){
return quantum.ui.style.css.devices.iphone_5_portrait.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41129));
});
quantum.ui.style.css.devices.iphone_6_media_params = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"screen","screen",1990059748),true,new cljs.core.Keyword(null,"min-device-width","min-device-width",870791724),garden.units.px.call(null,(375)),new cljs.core.Keyword(null,"max-device-width","max-device-width",187209294),garden.units.px.call(null,(667)),new cljs.core.Keyword(null,"-webkit-min-device-pixel-ratio","-webkit-min-device-pixel-ratio",1880183241),(2)], null);
quantum.ui.style.css.devices.iphone_6 = (function quantum$ui$style$css$devices$iphone_6(var_args){
var args__18590__auto__ = [];
var len__18583__auto___41134 = arguments.length;
var i__18584__auto___41135 = (0);
while(true){
if((i__18584__auto___41135 < len__18583__auto___41134)){
args__18590__auto__.push((arguments[i__18584__auto___41135]));

var G__41136 = (i__18584__auto___41135 + (1));
i__18584__auto___41135 = G__41136;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.ui.style.css.devices.iphone_6.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.ui.style.css.devices.iphone_6.cljs$core$IFn$_invoke$arity$variadic = (function (rules__41032__auto__){
return garden.stylesheet.at_media.call(null,quantum.ui.style.css.devices.iphone_6_media_params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),rules__41032__auto__], null));
});

quantum.ui.style.css.devices.iphone_6.cljs$lang$maxFixedArity = (0);

quantum.ui.style.css.devices.iphone_6.cljs$lang$applyTo = (function (seq41133){
return quantum.ui.style.css.devices.iphone_6.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41133));
});
quantum.ui.style.css.devices.iphone_6_landscape = (function quantum$ui$style$css$devices$iphone_6_landscape(var_args){
var args__18590__auto__ = [];
var len__18583__auto___41138 = arguments.length;
var i__18584__auto___41139 = (0);
while(true){
if((i__18584__auto___41139 < len__18583__auto___41138)){
args__18590__auto__.push((arguments[i__18584__auto___41139]));

var G__41140 = (i__18584__auto___41139 + (1));
i__18584__auto___41139 = G__41140;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.ui.style.css.devices.iphone_6_landscape.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.ui.style.css.devices.iphone_6_landscape.cljs$core$IFn$_invoke$arity$variadic = (function (rules__41032__auto__){
return garden.stylesheet.at_media.call(null,cljs.core.assoc.call(null,quantum.ui.style.css.devices.iphone_6_media_params,new cljs.core.Keyword(null,"orientation","orientation",623557579),new cljs.core.Keyword(null,"landscape","landscape",1519839253)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),rules__41032__auto__], null));
});

quantum.ui.style.css.devices.iphone_6_landscape.cljs$lang$maxFixedArity = (0);

quantum.ui.style.css.devices.iphone_6_landscape.cljs$lang$applyTo = (function (seq41137){
return quantum.ui.style.css.devices.iphone_6_landscape.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41137));
});
quantum.ui.style.css.devices.iphone_6_portrait = (function quantum$ui$style$css$devices$iphone_6_portrait(var_args){
var args__18590__auto__ = [];
var len__18583__auto___41142 = arguments.length;
var i__18584__auto___41143 = (0);
while(true){
if((i__18584__auto___41143 < len__18583__auto___41142)){
args__18590__auto__.push((arguments[i__18584__auto___41143]));

var G__41144 = (i__18584__auto___41143 + (1));
i__18584__auto___41143 = G__41144;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.ui.style.css.devices.iphone_6_portrait.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.ui.style.css.devices.iphone_6_portrait.cljs$core$IFn$_invoke$arity$variadic = (function (rules__41032__auto__){
return garden.stylesheet.at_media.call(null,cljs.core.assoc.call(null,quantum.ui.style.css.devices.iphone_6_media_params,new cljs.core.Keyword(null,"orientation","orientation",623557579),new cljs.core.Keyword(null,"portrait","portrait",-9810007)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),rules__41032__auto__], null));
});

quantum.ui.style.css.devices.iphone_6_portrait.cljs$lang$maxFixedArity = (0);

quantum.ui.style.css.devices.iphone_6_portrait.cljs$lang$applyTo = (function (seq41141){
return quantum.ui.style.css.devices.iphone_6_portrait.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41141));
});
quantum.ui.style.css.devices.galaxy_s3_media_params = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"screen","screen",1990059748),true,new cljs.core.Keyword(null,"min-device-width","min-device-width",870791724),garden.units.px.call(null,(320)),new cljs.core.Keyword(null,"max-device-width","max-device-width",187209294),garden.units.px.call(null,(640)),new cljs.core.Keyword(null,"-webkit-min-device-pixel-ratio","-webkit-min-device-pixel-ratio",1880183241),(2)], null);
quantum.ui.style.css.devices.galaxy_s3 = (function quantum$ui$style$css$devices$galaxy_s3(var_args){
var args__18590__auto__ = [];
var len__18583__auto___41146 = arguments.length;
var i__18584__auto___41147 = (0);
while(true){
if((i__18584__auto___41147 < len__18583__auto___41146)){
args__18590__auto__.push((arguments[i__18584__auto___41147]));

var G__41148 = (i__18584__auto___41147 + (1));
i__18584__auto___41147 = G__41148;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.ui.style.css.devices.galaxy_s3.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.ui.style.css.devices.galaxy_s3.cljs$core$IFn$_invoke$arity$variadic = (function (rules__41032__auto__){
return garden.stylesheet.at_media.call(null,quantum.ui.style.css.devices.galaxy_s3_media_params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),rules__41032__auto__], null));
});

quantum.ui.style.css.devices.galaxy_s3.cljs$lang$maxFixedArity = (0);

quantum.ui.style.css.devices.galaxy_s3.cljs$lang$applyTo = (function (seq41145){
return quantum.ui.style.css.devices.galaxy_s3.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41145));
});
quantum.ui.style.css.devices.galaxy_s3_landscape = (function quantum$ui$style$css$devices$galaxy_s3_landscape(var_args){
var args__18590__auto__ = [];
var len__18583__auto___41150 = arguments.length;
var i__18584__auto___41151 = (0);
while(true){
if((i__18584__auto___41151 < len__18583__auto___41150)){
args__18590__auto__.push((arguments[i__18584__auto___41151]));

var G__41152 = (i__18584__auto___41151 + (1));
i__18584__auto___41151 = G__41152;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.ui.style.css.devices.galaxy_s3_landscape.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.ui.style.css.devices.galaxy_s3_landscape.cljs$core$IFn$_invoke$arity$variadic = (function (rules__41032__auto__){
return garden.stylesheet.at_media.call(null,cljs.core.assoc.call(null,quantum.ui.style.css.devices.galaxy_s3_media_params,new cljs.core.Keyword(null,"orientation","orientation",623557579),new cljs.core.Keyword(null,"landscape","landscape",1519839253)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),rules__41032__auto__], null));
});

quantum.ui.style.css.devices.galaxy_s3_landscape.cljs$lang$maxFixedArity = (0);

quantum.ui.style.css.devices.galaxy_s3_landscape.cljs$lang$applyTo = (function (seq41149){
return quantum.ui.style.css.devices.galaxy_s3_landscape.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41149));
});
quantum.ui.style.css.devices.galaxy_s3_portrait = (function quantum$ui$style$css$devices$galaxy_s3_portrait(var_args){
var args__18590__auto__ = [];
var len__18583__auto___41154 = arguments.length;
var i__18584__auto___41155 = (0);
while(true){
if((i__18584__auto___41155 < len__18583__auto___41154)){
args__18590__auto__.push((arguments[i__18584__auto___41155]));

var G__41156 = (i__18584__auto___41155 + (1));
i__18584__auto___41155 = G__41156;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.ui.style.css.devices.galaxy_s3_portrait.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.ui.style.css.devices.galaxy_s3_portrait.cljs$core$IFn$_invoke$arity$variadic = (function (rules__41032__auto__){
return garden.stylesheet.at_media.call(null,cljs.core.assoc.call(null,quantum.ui.style.css.devices.galaxy_s3_media_params,new cljs.core.Keyword(null,"orientation","orientation",623557579),new cljs.core.Keyword(null,"portrait","portrait",-9810007)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),rules__41032__auto__], null));
});

quantum.ui.style.css.devices.galaxy_s3_portrait.cljs$lang$maxFixedArity = (0);

quantum.ui.style.css.devices.galaxy_s3_portrait.cljs$lang$applyTo = (function (seq41153){
return quantum.ui.style.css.devices.galaxy_s3_portrait.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41153));
});
quantum.ui.style.css.devices.galaxy_s4_media_params = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"screen","screen",1990059748),true,new cljs.core.Keyword(null,"min-device-width","min-device-width",870791724),garden.units.px.call(null,(320)),new cljs.core.Keyword(null,"max-device-width","max-device-width",187209294),garden.units.px.call(null,(640)),new cljs.core.Keyword(null,"-webkit-min-device-pixel-ratio","-webkit-min-device-pixel-ratio",1880183241),(3)], null);
quantum.ui.style.css.devices.galaxy_s4 = (function quantum$ui$style$css$devices$galaxy_s4(var_args){
var args__18590__auto__ = [];
var len__18583__auto___41158 = arguments.length;
var i__18584__auto___41159 = (0);
while(true){
if((i__18584__auto___41159 < len__18583__auto___41158)){
args__18590__auto__.push((arguments[i__18584__auto___41159]));

var G__41160 = (i__18584__auto___41159 + (1));
i__18584__auto___41159 = G__41160;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.ui.style.css.devices.galaxy_s4.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.ui.style.css.devices.galaxy_s4.cljs$core$IFn$_invoke$arity$variadic = (function (rules__41032__auto__){
return garden.stylesheet.at_media.call(null,quantum.ui.style.css.devices.galaxy_s4_media_params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),rules__41032__auto__], null));
});

quantum.ui.style.css.devices.galaxy_s4.cljs$lang$maxFixedArity = (0);

quantum.ui.style.css.devices.galaxy_s4.cljs$lang$applyTo = (function (seq41157){
return quantum.ui.style.css.devices.galaxy_s4.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41157));
});
quantum.ui.style.css.devices.galaxy_s4_landscape = (function quantum$ui$style$css$devices$galaxy_s4_landscape(var_args){
var args__18590__auto__ = [];
var len__18583__auto___41162 = arguments.length;
var i__18584__auto___41163 = (0);
while(true){
if((i__18584__auto___41163 < len__18583__auto___41162)){
args__18590__auto__.push((arguments[i__18584__auto___41163]));

var G__41164 = (i__18584__auto___41163 + (1));
i__18584__auto___41163 = G__41164;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.ui.style.css.devices.galaxy_s4_landscape.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.ui.style.css.devices.galaxy_s4_landscape.cljs$core$IFn$_invoke$arity$variadic = (function (rules__41032__auto__){
return garden.stylesheet.at_media.call(null,cljs.core.assoc.call(null,quantum.ui.style.css.devices.galaxy_s4_media_params,new cljs.core.Keyword(null,"orientation","orientation",623557579),new cljs.core.Keyword(null,"landscape","landscape",1519839253)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),rules__41032__auto__], null));
});

quantum.ui.style.css.devices.galaxy_s4_landscape.cljs$lang$maxFixedArity = (0);

quantum.ui.style.css.devices.galaxy_s4_landscape.cljs$lang$applyTo = (function (seq41161){
return quantum.ui.style.css.devices.galaxy_s4_landscape.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41161));
});
quantum.ui.style.css.devices.galaxy_s4_portrait = (function quantum$ui$style$css$devices$galaxy_s4_portrait(var_args){
var args__18590__auto__ = [];
var len__18583__auto___41166 = arguments.length;
var i__18584__auto___41167 = (0);
while(true){
if((i__18584__auto___41167 < len__18583__auto___41166)){
args__18590__auto__.push((arguments[i__18584__auto___41167]));

var G__41168 = (i__18584__auto___41167 + (1));
i__18584__auto___41167 = G__41168;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.ui.style.css.devices.galaxy_s4_portrait.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.ui.style.css.devices.galaxy_s4_portrait.cljs$core$IFn$_invoke$arity$variadic = (function (rules__41032__auto__){
return garden.stylesheet.at_media.call(null,cljs.core.assoc.call(null,quantum.ui.style.css.devices.galaxy_s4_media_params,new cljs.core.Keyword(null,"orientation","orientation",623557579),new cljs.core.Keyword(null,"portrait","portrait",-9810007)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),rules__41032__auto__], null));
});

quantum.ui.style.css.devices.galaxy_s4_portrait.cljs$lang$maxFixedArity = (0);

quantum.ui.style.css.devices.galaxy_s4_portrait.cljs$lang$applyTo = (function (seq41165){
return quantum.ui.style.css.devices.galaxy_s4_portrait.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41165));
});
quantum.ui.style.css.devices.galaxy_s5_media_params = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"screen","screen",1990059748),true,new cljs.core.Keyword(null,"min-device-width","min-device-width",870791724),garden.units.px.call(null,(360)),new cljs.core.Keyword(null,"max-device-width","max-device-width",187209294),garden.units.px.call(null,(640)),new cljs.core.Keyword(null,"-webkit-min-device-pixel-ratio","-webkit-min-device-pixel-ratio",1880183241),(3)], null);
quantum.ui.style.css.devices.galaxy_s5 = (function quantum$ui$style$css$devices$galaxy_s5(var_args){
var args__18590__auto__ = [];
var len__18583__auto___41170 = arguments.length;
var i__18584__auto___41171 = (0);
while(true){
if((i__18584__auto___41171 < len__18583__auto___41170)){
args__18590__auto__.push((arguments[i__18584__auto___41171]));

var G__41172 = (i__18584__auto___41171 + (1));
i__18584__auto___41171 = G__41172;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.ui.style.css.devices.galaxy_s5.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.ui.style.css.devices.galaxy_s5.cljs$core$IFn$_invoke$arity$variadic = (function (rules__41032__auto__){
return garden.stylesheet.at_media.call(null,quantum.ui.style.css.devices.galaxy_s5_media_params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),rules__41032__auto__], null));
});

quantum.ui.style.css.devices.galaxy_s5.cljs$lang$maxFixedArity = (0);

quantum.ui.style.css.devices.galaxy_s5.cljs$lang$applyTo = (function (seq41169){
return quantum.ui.style.css.devices.galaxy_s5.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41169));
});
quantum.ui.style.css.devices.galaxy_s5_landscape = (function quantum$ui$style$css$devices$galaxy_s5_landscape(var_args){
var args__18590__auto__ = [];
var len__18583__auto___41174 = arguments.length;
var i__18584__auto___41175 = (0);
while(true){
if((i__18584__auto___41175 < len__18583__auto___41174)){
args__18590__auto__.push((arguments[i__18584__auto___41175]));

var G__41176 = (i__18584__auto___41175 + (1));
i__18584__auto___41175 = G__41176;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.ui.style.css.devices.galaxy_s5_landscape.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.ui.style.css.devices.galaxy_s5_landscape.cljs$core$IFn$_invoke$arity$variadic = (function (rules__41032__auto__){
return garden.stylesheet.at_media.call(null,cljs.core.assoc.call(null,quantum.ui.style.css.devices.galaxy_s5_media_params,new cljs.core.Keyword(null,"orientation","orientation",623557579),new cljs.core.Keyword(null,"landscape","landscape",1519839253)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),rules__41032__auto__], null));
});

quantum.ui.style.css.devices.galaxy_s5_landscape.cljs$lang$maxFixedArity = (0);

quantum.ui.style.css.devices.galaxy_s5_landscape.cljs$lang$applyTo = (function (seq41173){
return quantum.ui.style.css.devices.galaxy_s5_landscape.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41173));
});
quantum.ui.style.css.devices.galaxy_s5_portrait = (function quantum$ui$style$css$devices$galaxy_s5_portrait(var_args){
var args__18590__auto__ = [];
var len__18583__auto___41178 = arguments.length;
var i__18584__auto___41179 = (0);
while(true){
if((i__18584__auto___41179 < len__18583__auto___41178)){
args__18590__auto__.push((arguments[i__18584__auto___41179]));

var G__41180 = (i__18584__auto___41179 + (1));
i__18584__auto___41179 = G__41180;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.ui.style.css.devices.galaxy_s5_portrait.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.ui.style.css.devices.galaxy_s5_portrait.cljs$core$IFn$_invoke$arity$variadic = (function (rules__41032__auto__){
return garden.stylesheet.at_media.call(null,cljs.core.assoc.call(null,quantum.ui.style.css.devices.galaxy_s5_media_params,new cljs.core.Keyword(null,"orientation","orientation",623557579),new cljs.core.Keyword(null,"portrait","portrait",-9810007)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),rules__41032__auto__], null));
});

quantum.ui.style.css.devices.galaxy_s5_portrait.cljs$lang$maxFixedArity = (0);

quantum.ui.style.css.devices.galaxy_s5_portrait.cljs$lang$applyTo = (function (seq41177){
return quantum.ui.style.css.devices.galaxy_s5_portrait.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41177));
});
quantum.ui.style.css.devices.htc_one = quantum.ui.style.css.devices.galaxy_s5;
quantum.ui.style.css.devices.htc_one_landscape = quantum.ui.style.css.devices.galaxy_s5_landscape;
quantum.ui.style.css.devices.htc_one_portrait = quantum.ui.style.css.devices.galaxy_s5_portrait;
quantum.ui.style.css.devices.ipad_1_2_media_params = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"screen","screen",1990059748),true,new cljs.core.Keyword(null,"min-device-width","min-device-width",870791724),garden.units.px.call(null,(768)),new cljs.core.Keyword(null,"max-device-width","max-device-width",187209294),garden.units.px.call(null,(1024)),new cljs.core.Keyword(null,"-webkit-min-device-pixel-ratio","-webkit-min-device-pixel-ratio",1880183241),(1)], null);
quantum.ui.style.css.devices.ipad_1_2 = (function quantum$ui$style$css$devices$ipad_1_2(var_args){
var args__18590__auto__ = [];
var len__18583__auto___41182 = arguments.length;
var i__18584__auto___41183 = (0);
while(true){
if((i__18584__auto___41183 < len__18583__auto___41182)){
args__18590__auto__.push((arguments[i__18584__auto___41183]));

var G__41184 = (i__18584__auto___41183 + (1));
i__18584__auto___41183 = G__41184;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.ui.style.css.devices.ipad_1_2.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.ui.style.css.devices.ipad_1_2.cljs$core$IFn$_invoke$arity$variadic = (function (rules__41032__auto__){
return garden.stylesheet.at_media.call(null,quantum.ui.style.css.devices.ipad_1_2_media_params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),rules__41032__auto__], null));
});

quantum.ui.style.css.devices.ipad_1_2.cljs$lang$maxFixedArity = (0);

quantum.ui.style.css.devices.ipad_1_2.cljs$lang$applyTo = (function (seq41181){
return quantum.ui.style.css.devices.ipad_1_2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41181));
});
quantum.ui.style.css.devices.ipad_1_2_landscape = (function quantum$ui$style$css$devices$ipad_1_2_landscape(var_args){
var args__18590__auto__ = [];
var len__18583__auto___41186 = arguments.length;
var i__18584__auto___41187 = (0);
while(true){
if((i__18584__auto___41187 < len__18583__auto___41186)){
args__18590__auto__.push((arguments[i__18584__auto___41187]));

var G__41188 = (i__18584__auto___41187 + (1));
i__18584__auto___41187 = G__41188;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.ui.style.css.devices.ipad_1_2_landscape.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.ui.style.css.devices.ipad_1_2_landscape.cljs$core$IFn$_invoke$arity$variadic = (function (rules__41032__auto__){
return garden.stylesheet.at_media.call(null,cljs.core.assoc.call(null,quantum.ui.style.css.devices.ipad_1_2_media_params,new cljs.core.Keyword(null,"orientation","orientation",623557579),new cljs.core.Keyword(null,"landscape","landscape",1519839253)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),rules__41032__auto__], null));
});

quantum.ui.style.css.devices.ipad_1_2_landscape.cljs$lang$maxFixedArity = (0);

quantum.ui.style.css.devices.ipad_1_2_landscape.cljs$lang$applyTo = (function (seq41185){
return quantum.ui.style.css.devices.ipad_1_2_landscape.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41185));
});
quantum.ui.style.css.devices.ipad_1_2_portrait = (function quantum$ui$style$css$devices$ipad_1_2_portrait(var_args){
var args__18590__auto__ = [];
var len__18583__auto___41190 = arguments.length;
var i__18584__auto___41191 = (0);
while(true){
if((i__18584__auto___41191 < len__18583__auto___41190)){
args__18590__auto__.push((arguments[i__18584__auto___41191]));

var G__41192 = (i__18584__auto___41191 + (1));
i__18584__auto___41191 = G__41192;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.ui.style.css.devices.ipad_1_2_portrait.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.ui.style.css.devices.ipad_1_2_portrait.cljs$core$IFn$_invoke$arity$variadic = (function (rules__41032__auto__){
return garden.stylesheet.at_media.call(null,cljs.core.assoc.call(null,quantum.ui.style.css.devices.ipad_1_2_media_params,new cljs.core.Keyword(null,"orientation","orientation",623557579),new cljs.core.Keyword(null,"portrait","portrait",-9810007)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),rules__41032__auto__], null));
});

quantum.ui.style.css.devices.ipad_1_2_portrait.cljs$lang$maxFixedArity = (0);

quantum.ui.style.css.devices.ipad_1_2_portrait.cljs$lang$applyTo = (function (seq41189){
return quantum.ui.style.css.devices.ipad_1_2_portrait.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41189));
});
quantum.ui.style.css.devices.ipad_mini = quantum.ui.style.css.devices.ipad_1_2;
quantum.ui.style.css.devices.ipad_mini_landscape = quantum.ui.style.css.devices.ipad_1_2_landscape;
quantum.ui.style.css.devices.ipad_mini_portrait = quantum.ui.style.css.devices.ipad_1_2_portrait;
quantum.ui.style.css.devices.ipad_3_4_media_params = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"screen","screen",1990059748),true,new cljs.core.Keyword(null,"min-device-width","min-device-width",870791724),garden.units.px.call(null,(768)),new cljs.core.Keyword(null,"max-device-width","max-device-width",187209294),garden.units.px.call(null,(1024)),new cljs.core.Keyword(null,"-webkit-min-device-pixel-ratio","-webkit-min-device-pixel-ratio",1880183241),(2)], null);
quantum.ui.style.css.devices.ipad_3_4 = (function quantum$ui$style$css$devices$ipad_3_4(var_args){
var args__18590__auto__ = [];
var len__18583__auto___41194 = arguments.length;
var i__18584__auto___41195 = (0);
while(true){
if((i__18584__auto___41195 < len__18583__auto___41194)){
args__18590__auto__.push((arguments[i__18584__auto___41195]));

var G__41196 = (i__18584__auto___41195 + (1));
i__18584__auto___41195 = G__41196;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.ui.style.css.devices.ipad_3_4.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.ui.style.css.devices.ipad_3_4.cljs$core$IFn$_invoke$arity$variadic = (function (rules__41032__auto__){
return garden.stylesheet.at_media.call(null,quantum.ui.style.css.devices.ipad_3_4_media_params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),rules__41032__auto__], null));
});

quantum.ui.style.css.devices.ipad_3_4.cljs$lang$maxFixedArity = (0);

quantum.ui.style.css.devices.ipad_3_4.cljs$lang$applyTo = (function (seq41193){
return quantum.ui.style.css.devices.ipad_3_4.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41193));
});
quantum.ui.style.css.devices.ipad_3_4_landscape = (function quantum$ui$style$css$devices$ipad_3_4_landscape(var_args){
var args__18590__auto__ = [];
var len__18583__auto___41198 = arguments.length;
var i__18584__auto___41199 = (0);
while(true){
if((i__18584__auto___41199 < len__18583__auto___41198)){
args__18590__auto__.push((arguments[i__18584__auto___41199]));

var G__41200 = (i__18584__auto___41199 + (1));
i__18584__auto___41199 = G__41200;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.ui.style.css.devices.ipad_3_4_landscape.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.ui.style.css.devices.ipad_3_4_landscape.cljs$core$IFn$_invoke$arity$variadic = (function (rules__41032__auto__){
return garden.stylesheet.at_media.call(null,cljs.core.assoc.call(null,quantum.ui.style.css.devices.ipad_3_4_media_params,new cljs.core.Keyword(null,"orientation","orientation",623557579),new cljs.core.Keyword(null,"landscape","landscape",1519839253)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),rules__41032__auto__], null));
});

quantum.ui.style.css.devices.ipad_3_4_landscape.cljs$lang$maxFixedArity = (0);

quantum.ui.style.css.devices.ipad_3_4_landscape.cljs$lang$applyTo = (function (seq41197){
return quantum.ui.style.css.devices.ipad_3_4_landscape.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41197));
});
quantum.ui.style.css.devices.ipad_3_4_portrait = (function quantum$ui$style$css$devices$ipad_3_4_portrait(var_args){
var args__18590__auto__ = [];
var len__18583__auto___41202 = arguments.length;
var i__18584__auto___41203 = (0);
while(true){
if((i__18584__auto___41203 < len__18583__auto___41202)){
args__18590__auto__.push((arguments[i__18584__auto___41203]));

var G__41204 = (i__18584__auto___41203 + (1));
i__18584__auto___41203 = G__41204;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.ui.style.css.devices.ipad_3_4_portrait.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.ui.style.css.devices.ipad_3_4_portrait.cljs$core$IFn$_invoke$arity$variadic = (function (rules__41032__auto__){
return garden.stylesheet.at_media.call(null,cljs.core.assoc.call(null,quantum.ui.style.css.devices.ipad_3_4_media_params,new cljs.core.Keyword(null,"orientation","orientation",623557579),new cljs.core.Keyword(null,"portrait","portrait",-9810007)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),rules__41032__auto__], null));
});

quantum.ui.style.css.devices.ipad_3_4_portrait.cljs$lang$maxFixedArity = (0);

quantum.ui.style.css.devices.ipad_3_4_portrait.cljs$lang$applyTo = (function (seq41201){
return quantum.ui.style.css.devices.ipad_3_4_portrait.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41201));
});
quantum.ui.style.css.devices.galaxy_tab_media_params = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-device-width","min-device-width",870791724),garden.units.px.call(null,(800)),new cljs.core.Keyword(null,"max-device-width","max-device-width",187209294),garden.units.px.call(null,(1280))], null);
quantum.ui.style.css.devices.galaxy_tab = (function quantum$ui$style$css$devices$galaxy_tab(var_args){
var args__18590__auto__ = [];
var len__18583__auto___41206 = arguments.length;
var i__18584__auto___41207 = (0);
while(true){
if((i__18584__auto___41207 < len__18583__auto___41206)){
args__18590__auto__.push((arguments[i__18584__auto___41207]));

var G__41208 = (i__18584__auto___41207 + (1));
i__18584__auto___41207 = G__41208;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.ui.style.css.devices.galaxy_tab.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.ui.style.css.devices.galaxy_tab.cljs$core$IFn$_invoke$arity$variadic = (function (rules__41032__auto__){
return garden.stylesheet.at_media.call(null,quantum.ui.style.css.devices.galaxy_tab_media_params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),rules__41032__auto__], null));
});

quantum.ui.style.css.devices.galaxy_tab.cljs$lang$maxFixedArity = (0);

quantum.ui.style.css.devices.galaxy_tab.cljs$lang$applyTo = (function (seq41205){
return quantum.ui.style.css.devices.galaxy_tab.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41205));
});
quantum.ui.style.css.devices.galaxy_tab_landscape = (function quantum$ui$style$css$devices$galaxy_tab_landscape(var_args){
var args__18590__auto__ = [];
var len__18583__auto___41210 = arguments.length;
var i__18584__auto___41211 = (0);
while(true){
if((i__18584__auto___41211 < len__18583__auto___41210)){
args__18590__auto__.push((arguments[i__18584__auto___41211]));

var G__41212 = (i__18584__auto___41211 + (1));
i__18584__auto___41211 = G__41212;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.ui.style.css.devices.galaxy_tab_landscape.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.ui.style.css.devices.galaxy_tab_landscape.cljs$core$IFn$_invoke$arity$variadic = (function (rules__41032__auto__){
return garden.stylesheet.at_media.call(null,cljs.core.assoc.call(null,quantum.ui.style.css.devices.galaxy_tab_media_params,new cljs.core.Keyword(null,"orientation","orientation",623557579),new cljs.core.Keyword(null,"landscape","landscape",1519839253)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),rules__41032__auto__], null));
});

quantum.ui.style.css.devices.galaxy_tab_landscape.cljs$lang$maxFixedArity = (0);

quantum.ui.style.css.devices.galaxy_tab_landscape.cljs$lang$applyTo = (function (seq41209){
return quantum.ui.style.css.devices.galaxy_tab_landscape.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41209));
});
quantum.ui.style.css.devices.galaxy_tab_portrait = (function quantum$ui$style$css$devices$galaxy_tab_portrait(var_args){
var args__18590__auto__ = [];
var len__18583__auto___41214 = arguments.length;
var i__18584__auto___41215 = (0);
while(true){
if((i__18584__auto___41215 < len__18583__auto___41214)){
args__18590__auto__.push((arguments[i__18584__auto___41215]));

var G__41216 = (i__18584__auto___41215 + (1));
i__18584__auto___41215 = G__41216;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.ui.style.css.devices.galaxy_tab_portrait.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.ui.style.css.devices.galaxy_tab_portrait.cljs$core$IFn$_invoke$arity$variadic = (function (rules__41032__auto__){
return garden.stylesheet.at_media.call(null,cljs.core.assoc.call(null,quantum.ui.style.css.devices.galaxy_tab_media_params,new cljs.core.Keyword(null,"orientation","orientation",623557579),new cljs.core.Keyword(null,"portrait","portrait",-9810007)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),rules__41032__auto__], null));
});

quantum.ui.style.css.devices.galaxy_tab_portrait.cljs$lang$maxFixedArity = (0);

quantum.ui.style.css.devices.galaxy_tab_portrait.cljs$lang$applyTo = (function (seq41213){
return quantum.ui.style.css.devices.galaxy_tab_portrait.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41213));
});
quantum.ui.style.css.devices.nexus_tab_media_params = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"screen","screen",1990059748),true,new cljs.core.Keyword(null,"min-device-width","min-device-width",870791724),garden.units.px.call(null,(601)),new cljs.core.Keyword(null,"max-device-width","max-device-width",187209294),garden.units.px.call(null,(906)),new cljs.core.Keyword(null,"-webkit-min-device-pixel-ratio","-webkit-min-device-pixel-ratio",1880183241),1.331,new cljs.core.Keyword(null,"-webkit-max-device-pixel-ratio","-webkit-max-device-pixel-ratio",1176780814),1.332], null);
quantum.ui.style.css.devices.nexus_tab = (function quantum$ui$style$css$devices$nexus_tab(var_args){
var args__18590__auto__ = [];
var len__18583__auto___41218 = arguments.length;
var i__18584__auto___41219 = (0);
while(true){
if((i__18584__auto___41219 < len__18583__auto___41218)){
args__18590__auto__.push((arguments[i__18584__auto___41219]));

var G__41220 = (i__18584__auto___41219 + (1));
i__18584__auto___41219 = G__41220;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.ui.style.css.devices.nexus_tab.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.ui.style.css.devices.nexus_tab.cljs$core$IFn$_invoke$arity$variadic = (function (rules__41032__auto__){
return garden.stylesheet.at_media.call(null,quantum.ui.style.css.devices.nexus_tab_media_params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),rules__41032__auto__], null));
});

quantum.ui.style.css.devices.nexus_tab.cljs$lang$maxFixedArity = (0);

quantum.ui.style.css.devices.nexus_tab.cljs$lang$applyTo = (function (seq41217){
return quantum.ui.style.css.devices.nexus_tab.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41217));
});
quantum.ui.style.css.devices.nexus_tab_landscape = (function quantum$ui$style$css$devices$nexus_tab_landscape(var_args){
var args__18590__auto__ = [];
var len__18583__auto___41222 = arguments.length;
var i__18584__auto___41223 = (0);
while(true){
if((i__18584__auto___41223 < len__18583__auto___41222)){
args__18590__auto__.push((arguments[i__18584__auto___41223]));

var G__41224 = (i__18584__auto___41223 + (1));
i__18584__auto___41223 = G__41224;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.ui.style.css.devices.nexus_tab_landscape.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.ui.style.css.devices.nexus_tab_landscape.cljs$core$IFn$_invoke$arity$variadic = (function (rules__41032__auto__){
return garden.stylesheet.at_media.call(null,cljs.core.assoc.call(null,quantum.ui.style.css.devices.nexus_tab_media_params,new cljs.core.Keyword(null,"orientation","orientation",623557579),new cljs.core.Keyword(null,"landscape","landscape",1519839253)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),rules__41032__auto__], null));
});

quantum.ui.style.css.devices.nexus_tab_landscape.cljs$lang$maxFixedArity = (0);

quantum.ui.style.css.devices.nexus_tab_landscape.cljs$lang$applyTo = (function (seq41221){
return quantum.ui.style.css.devices.nexus_tab_landscape.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41221));
});
quantum.ui.style.css.devices.nexus_tab_portrait = (function quantum$ui$style$css$devices$nexus_tab_portrait(var_args){
var args__18590__auto__ = [];
var len__18583__auto___41226 = arguments.length;
var i__18584__auto___41227 = (0);
while(true){
if((i__18584__auto___41227 < len__18583__auto___41226)){
args__18590__auto__.push((arguments[i__18584__auto___41227]));

var G__41228 = (i__18584__auto___41227 + (1));
i__18584__auto___41227 = G__41228;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.ui.style.css.devices.nexus_tab_portrait.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.ui.style.css.devices.nexus_tab_portrait.cljs$core$IFn$_invoke$arity$variadic = (function (rules__41032__auto__){
return garden.stylesheet.at_media.call(null,cljs.core.assoc.call(null,quantum.ui.style.css.devices.nexus_tab_media_params,new cljs.core.Keyword(null,"orientation","orientation",623557579),new cljs.core.Keyword(null,"portrait","portrait",-9810007)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),rules__41032__auto__], null));
});

quantum.ui.style.css.devices.nexus_tab_portrait.cljs$lang$maxFixedArity = (0);

quantum.ui.style.css.devices.nexus_tab_portrait.cljs$lang$applyTo = (function (seq41225){
return quantum.ui.style.css.devices.nexus_tab_portrait.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41225));
});
quantum.ui.style.css.devices.kindle_fire_media_params = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"screen","screen",1990059748),true,new cljs.core.Keyword(null,"min-device-width","min-device-width",870791724),garden.units.px.call(null,(800)),new cljs.core.Keyword(null,"max-device-width","max-device-width",187209294),garden.units.px.call(null,(1280)),new cljs.core.Keyword(null,"-webkit-min-device-pixel-ratio","-webkit-min-device-pixel-ratio",1880183241),1.5], null);
quantum.ui.style.css.devices.kindle_fire = (function quantum$ui$style$css$devices$kindle_fire(var_args){
var args__18590__auto__ = [];
var len__18583__auto___41230 = arguments.length;
var i__18584__auto___41231 = (0);
while(true){
if((i__18584__auto___41231 < len__18583__auto___41230)){
args__18590__auto__.push((arguments[i__18584__auto___41231]));

var G__41232 = (i__18584__auto___41231 + (1));
i__18584__auto___41231 = G__41232;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.ui.style.css.devices.kindle_fire.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.ui.style.css.devices.kindle_fire.cljs$core$IFn$_invoke$arity$variadic = (function (rules__41032__auto__){
return garden.stylesheet.at_media.call(null,quantum.ui.style.css.devices.kindle_fire_media_params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),rules__41032__auto__], null));
});

quantum.ui.style.css.devices.kindle_fire.cljs$lang$maxFixedArity = (0);

quantum.ui.style.css.devices.kindle_fire.cljs$lang$applyTo = (function (seq41229){
return quantum.ui.style.css.devices.kindle_fire.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41229));
});
quantum.ui.style.css.devices.kindle_fire_landscape = (function quantum$ui$style$css$devices$kindle_fire_landscape(var_args){
var args__18590__auto__ = [];
var len__18583__auto___41234 = arguments.length;
var i__18584__auto___41235 = (0);
while(true){
if((i__18584__auto___41235 < len__18583__auto___41234)){
args__18590__auto__.push((arguments[i__18584__auto___41235]));

var G__41236 = (i__18584__auto___41235 + (1));
i__18584__auto___41235 = G__41236;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.ui.style.css.devices.kindle_fire_landscape.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.ui.style.css.devices.kindle_fire_landscape.cljs$core$IFn$_invoke$arity$variadic = (function (rules__41032__auto__){
return garden.stylesheet.at_media.call(null,cljs.core.assoc.call(null,quantum.ui.style.css.devices.kindle_fire_media_params,new cljs.core.Keyword(null,"orientation","orientation",623557579),new cljs.core.Keyword(null,"landscape","landscape",1519839253)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),rules__41032__auto__], null));
});

quantum.ui.style.css.devices.kindle_fire_landscape.cljs$lang$maxFixedArity = (0);

quantum.ui.style.css.devices.kindle_fire_landscape.cljs$lang$applyTo = (function (seq41233){
return quantum.ui.style.css.devices.kindle_fire_landscape.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41233));
});
quantum.ui.style.css.devices.kindle_fire_portrait = (function quantum$ui$style$css$devices$kindle_fire_portrait(var_args){
var args__18590__auto__ = [];
var len__18583__auto___41238 = arguments.length;
var i__18584__auto___41239 = (0);
while(true){
if((i__18584__auto___41239 < len__18583__auto___41238)){
args__18590__auto__.push((arguments[i__18584__auto___41239]));

var G__41240 = (i__18584__auto___41239 + (1));
i__18584__auto___41239 = G__41240;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.ui.style.css.devices.kindle_fire_portrait.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.ui.style.css.devices.kindle_fire_portrait.cljs$core$IFn$_invoke$arity$variadic = (function (rules__41032__auto__){
return garden.stylesheet.at_media.call(null,cljs.core.assoc.call(null,quantum.ui.style.css.devices.kindle_fire_media_params,new cljs.core.Keyword(null,"orientation","orientation",623557579),new cljs.core.Keyword(null,"portrait","portrait",-9810007)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),rules__41032__auto__], null));
});

quantum.ui.style.css.devices.kindle_fire_portrait.cljs$lang$maxFixedArity = (0);

quantum.ui.style.css.devices.kindle_fire_portrait.cljs$lang$applyTo = (function (seq41237){
return quantum.ui.style.css.devices.kindle_fire_portrait.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41237));
});
quantum.ui.style.css.devices.kindle_fire_hd_media_params = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"screen","screen",1990059748),true,new cljs.core.Keyword(null,"min-device-width","min-device-width",870791724),garden.units.px.call(null,(1200)),new cljs.core.Keyword(null,"max-device-width","max-device-width",187209294),garden.units.px.call(null,(1600)),new cljs.core.Keyword(null,"-webkit-min-device-pixel-ratio","-webkit-min-device-pixel-ratio",1880183241),1.5], null);
quantum.ui.style.css.devices.kindle_fire_hd = (function quantum$ui$style$css$devices$kindle_fire_hd(var_args){
var args__18590__auto__ = [];
var len__18583__auto___41242 = arguments.length;
var i__18584__auto___41243 = (0);
while(true){
if((i__18584__auto___41243 < len__18583__auto___41242)){
args__18590__auto__.push((arguments[i__18584__auto___41243]));

var G__41244 = (i__18584__auto___41243 + (1));
i__18584__auto___41243 = G__41244;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.ui.style.css.devices.kindle_fire_hd.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.ui.style.css.devices.kindle_fire_hd.cljs$core$IFn$_invoke$arity$variadic = (function (rules__41032__auto__){
return garden.stylesheet.at_media.call(null,quantum.ui.style.css.devices.kindle_fire_hd_media_params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),rules__41032__auto__], null));
});

quantum.ui.style.css.devices.kindle_fire_hd.cljs$lang$maxFixedArity = (0);

quantum.ui.style.css.devices.kindle_fire_hd.cljs$lang$applyTo = (function (seq41241){
return quantum.ui.style.css.devices.kindle_fire_hd.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41241));
});
quantum.ui.style.css.devices.kindle_fire_hd_landscape = (function quantum$ui$style$css$devices$kindle_fire_hd_landscape(var_args){
var args__18590__auto__ = [];
var len__18583__auto___41246 = arguments.length;
var i__18584__auto___41247 = (0);
while(true){
if((i__18584__auto___41247 < len__18583__auto___41246)){
args__18590__auto__.push((arguments[i__18584__auto___41247]));

var G__41248 = (i__18584__auto___41247 + (1));
i__18584__auto___41247 = G__41248;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.ui.style.css.devices.kindle_fire_hd_landscape.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.ui.style.css.devices.kindle_fire_hd_landscape.cljs$core$IFn$_invoke$arity$variadic = (function (rules__41032__auto__){
return garden.stylesheet.at_media.call(null,cljs.core.assoc.call(null,quantum.ui.style.css.devices.kindle_fire_hd_media_params,new cljs.core.Keyword(null,"orientation","orientation",623557579),new cljs.core.Keyword(null,"landscape","landscape",1519839253)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),rules__41032__auto__], null));
});

quantum.ui.style.css.devices.kindle_fire_hd_landscape.cljs$lang$maxFixedArity = (0);

quantum.ui.style.css.devices.kindle_fire_hd_landscape.cljs$lang$applyTo = (function (seq41245){
return quantum.ui.style.css.devices.kindle_fire_hd_landscape.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41245));
});
quantum.ui.style.css.devices.kindle_fire_hd_portrait = (function quantum$ui$style$css$devices$kindle_fire_hd_portrait(var_args){
var args__18590__auto__ = [];
var len__18583__auto___41250 = arguments.length;
var i__18584__auto___41251 = (0);
while(true){
if((i__18584__auto___41251 < len__18583__auto___41250)){
args__18590__auto__.push((arguments[i__18584__auto___41251]));

var G__41252 = (i__18584__auto___41251 + (1));
i__18584__auto___41251 = G__41252;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.ui.style.css.devices.kindle_fire_hd_portrait.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.ui.style.css.devices.kindle_fire_hd_portrait.cljs$core$IFn$_invoke$arity$variadic = (function (rules__41032__auto__){
return garden.stylesheet.at_media.call(null,cljs.core.assoc.call(null,quantum.ui.style.css.devices.kindle_fire_hd_media_params,new cljs.core.Keyword(null,"orientation","orientation",623557579),new cljs.core.Keyword(null,"portrait","portrait",-9810007)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),rules__41032__auto__], null));
});

quantum.ui.style.css.devices.kindle_fire_hd_portrait.cljs$lang$maxFixedArity = (0);

quantum.ui.style.css.devices.kindle_fire_hd_portrait.cljs$lang$applyTo = (function (seq41249){
return quantum.ui.style.css.devices.kindle_fire_hd_portrait.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41249));
});
quantum.ui.style.css.devices.non_retina_laptops = (function quantum$ui$style$css$devices$non_retina_laptops(var_args){
var args__18590__auto__ = [];
var len__18583__auto___41254 = arguments.length;
var i__18584__auto___41255 = (0);
while(true){
if((i__18584__auto___41255 < len__18583__auto___41254)){
args__18590__auto__.push((arguments[i__18584__auto___41255]));

var G__41256 = (i__18584__auto___41255 + (1));
i__18584__auto___41255 = G__41256;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.ui.style.css.devices.non_retina_laptops.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.ui.style.css.devices.non_retina_laptops.cljs$core$IFn$_invoke$arity$variadic = (function (rules__41032__auto__){
return garden.stylesheet.at_media.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"screen","screen",1990059748),true,new cljs.core.Keyword(null,"min-device-width","min-device-width",870791724),garden.units.px.call(null,(1200)),new cljs.core.Keyword(null,"max-device-width","max-device-width",187209294),garden.units.px.call(null,(1600)),new cljs.core.Keyword(null,"-webkit-min-device-pixel-ratio","-webkit-min-device-pixel-ratio",1880183241),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),rules__41032__auto__], null));
});

quantum.ui.style.css.devices.non_retina_laptops.cljs$lang$maxFixedArity = (0);

quantum.ui.style.css.devices.non_retina_laptops.cljs$lang$applyTo = (function (seq41253){
return quantum.ui.style.css.devices.non_retina_laptops.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41253));
});
quantum.ui.style.css.devices.retina_laptops = (function quantum$ui$style$css$devices$retina_laptops(var_args){
var args__18590__auto__ = [];
var len__18583__auto___41258 = arguments.length;
var i__18584__auto___41259 = (0);
while(true){
if((i__18584__auto___41259 < len__18583__auto___41258)){
args__18590__auto__.push((arguments[i__18584__auto___41259]));

var G__41260 = (i__18584__auto___41259 + (1));
i__18584__auto___41259 = G__41260;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.ui.style.css.devices.retina_laptops.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.ui.style.css.devices.retina_laptops.cljs$core$IFn$_invoke$arity$variadic = (function (rules__41032__auto__){
return garden.stylesheet.at_media.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"screen","screen",1990059748),true,new cljs.core.Keyword(null,"min-device-width","min-device-width",870791724),garden.units.px.call(null,(1200)),new cljs.core.Keyword(null,"max-device-width","max-device-width",187209294),garden.units.px.call(null,(1600)),new cljs.core.Keyword(null,"-webkit-min-device-pixel-ratio","-webkit-min-device-pixel-ratio",1880183241),(2),new cljs.core.Keyword(null,"min-resolution","min-resolution",289067806),garden.units.dpi.call(null,(192))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),rules__41032__auto__], null));
});

quantum.ui.style.css.devices.retina_laptops.cljs$lang$maxFixedArity = (0);

quantum.ui.style.css.devices.retina_laptops.cljs$lang$applyTo = (function (seq41257){
return quantum.ui.style.css.devices.retina_laptops.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41257));
});

//# sourceMappingURL=devices.js.map?rel=1452702640112