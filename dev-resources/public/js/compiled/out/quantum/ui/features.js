// Compiled by ClojureScript 1.7.170 {}

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn map logic]
*/
goog.provide('quantum.ui.features');
goog.require('cljs.core');
goog.require('clojure.core.rrb_vector');
goog.require('quantum.core.logic');
goog.require('quantum.core.data.map');
goog.require('cljs.core');
goog.require('quantum.core.function$');
goog.require('quantum.core.ns');
quantum.ui.features.flex_test = (function quantum$ui$features$flex_test(elem,flex_name){
elem.style.display = "";

elem.style.display = flex_name;

return cljs.core.not_EQ_.call(null,elem.style.display,"");
});
quantum.ui.features.feature_test = (function quantum$ui$features$feature_test(){
var div = document.createElement("div");
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (div){
return (function (browser,s){
return quantum.core.data.map.map_entry.call(null,(function (){var obj_f__22375__auto__ = browser;
if(((function (obj_f__22375__auto__,div){
return (function (x__21928__auto__){
return cljs.core._EQ_.call(null,x__21928__auto__,new cljs.core.Keyword(null,"safari-","safari-",1782690687));
});})(obj_f__22375__auto__,div))
.call(null,obj_f__22375__auto__)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
return obj_f__22375__auto__;
}
})(),quantum.ui.features.flex_test.call(null,div,s));
});})(div))
,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chrome","chrome",1718738387),"flex",new cljs.core.Keyword(null,"safari","safari",497115653),"-webkit-flex",new cljs.core.Keyword(null,"safari-","safari-",1782690687),"-webkit-box",new cljs.core.Keyword(null,"ie","ie",2038473780),"-ms-flexbox"], null)));
});
quantum.ui.features.determine_browser = (function quantum$ui$features$determine_browser(){
var opera_QMARK_ = (function (){var or__17525__auto__ = window.opera;
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return (navigator.userAgent.indexOf(" OPR/") >= (0));
}
})();
if(cljs.core.truth_(opera_QMARK_)){
return new cljs.core.Keyword(null,"opera","opera",658572996);
} else {
if(cljs.core.truth_((function (){var and__17513__auto__ = window.chrome;
if(cljs.core.truth_(and__17513__auto__)){
return cljs.core.not.call(null,opera_QMARK_);
} else {
return and__17513__auto__;
}
})())){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_((function (){try{if(cljs.core.truth_(InstallTrigger)){
return true;
} else {
return null;
}
}catch (e37118){if((e37118 instanceof Error)){
var e = e37118;
return false;
} else {
throw e37118;

}
}})())){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if((Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > (0))){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(document.documentMode)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
quantum.ui.features.browser = (new cljs.core.Delay((function (){
return quantum.ui.features.determine_browser.call(null);
}),null));

//# sourceMappingURL=features.js.map?rel=1452702557006
/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn map logic]
*/
