// Compiled by ClojureScript 1.7.170 {}

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn logic err]
*/
goog.provide('quantum.ui.style.css.dom');
goog.require('cljs.core');
goog.require('clojure.core.rrb_vector');
goog.require('quantum.core.logic');
goog.require('cljs.core');
goog.require('quantum.core.function$');
goog.require('quantum.core.ns');
goog.require('quantum.core.error');
goog.require('clojure.string');
quantum.ui.style.css.dom.add_link_BANG_ = (function quantum$ui$style$css$dom$add_link_BANG_(link){
var elem = document.createElement("link");
elem.href = link;

elem.rel = "stylesheet";

elem.type = "text/css";

document.head.appendChild(elem);

return elem;
});
quantum.ui.style.css.dom.append_css_BANG_ = (function quantum$ui$style$css$dom$append_css_BANG_(css_str){

new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),"https://github.com/facjure/gardener/dom"], null);

var elem = document.createElement("style");
var text = document.createTextNode(css_str);
elem.appendChild(text);

document.head.appendChild(elem);

return elem;
});
quantum.ui.style.css.dom.replace_css_at_BANG_ = (function quantum$ui$style$css$dom$replace_css_at_BANG_(id,css_str){

var elem = document.getElementById(id);
var _ = (cljs.core.truth_(((function (elem){
return (function (G__31858){
var and__17513__auto__ = quantum.core.logic.nnil_QMARK_.call(null,G__31858);
if(cljs.core.truth_(and__17513__auto__)){
return ((function (and__17513__auto__,elem){
return (function (x__25385__auto__){
return cljs.core._EQ_.call(null,clojure.string.lower_case.call(null,x__25385__auto__.tagName),"style");
});})(and__17513__auto__,elem))
.call(null,G__31858);
} else {
return and__17513__auto__;
}
});})(elem))
.call(null,elem))?null:(function(){throw quantum.core.error.__GT_ex.call(null,new cljs.core.Keyword(null,"assertion-error","assertion-error",1846873368),"Assertion not satisfied: ((fn-and nnil? (fn-> .-tagName str/lower-case (= \"style\"))) elem)",cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.keyword,cljs.core.list(new cljs.core.Symbol(null,"elem","elem",-2035804713,null))),cljs.core._conj.call(null,cljs.core.List.EMPTY,elem)))})());
var text = document.createTextNode(css_str);
while(true){
if(cljs.core.truth_(elem.firstChild)){
elem.removeChild(elem.firstChild);

continue;
} else {
}
break;
}

elem.appendChild(text);

return elem;
});
quantum.ui.style.css.dom.viewport_w = (function quantum$ui$style$css$dom$viewport_w(){
return document.documentElement.clientWidth;
});
quantum.ui.style.css.dom.viewport_h = (function quantum$ui$style$css$dom$viewport_h(){
return document.documentElement.clientHeight;
});

//# sourceMappingURL=dom.js.map?rel=1452702628537
/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn logic err]
*/
