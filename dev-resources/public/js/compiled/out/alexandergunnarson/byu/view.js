// Compiled by ClojureScript 1.7.170 {}

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn logic err log pr res]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn map logic]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn map logic]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn map logic]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn map logic]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn map logic]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn map logic]
*/

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn map logic]
*/

/* WARNING: Runtime eval with |mfn| via quantum.core.ns/ns-exclude
*/

/* WARNING: Runtime eval with |mfn| via quantum.core.ns/ns-exclude
*/

/* WARNING: Runtime eval with |mfn| via import
*/

/* WARNING: Runtime eval with |mfn| via import
*/

/* WARNING: Runtime eval with |mfn| via quantum.core.ns/ns-exclude
*/

/* WARNING: Runtime eval with |mfn| via import
*/

/* WARNING: Runtime eval with |mfn| via quantum.core.ns/ns-exclude
*/

/* WARNING: Runtime eval with |mfn| via import
*/

/* WARNING: Runtime eval with |mfn| via quantum.core.ns/ns-exclude
*/

/* WARNING: Runtime eval with |mfn| via import
*/

/* WARNING: Runtime eval with |mfn| via quantum.core.ns/ns-exclude
*/

/* WARNING: Runtime eval with |mfn| via import
*/

/* WARNING: Runtime eval with |mfn| via quantum.core.ns/ns-exclude
*/

/* WARNING: Runtime eval with |mfn| via import
*/

/* WARNING: Runtime eval with |mfn| via quantum.core.ns/ns-exclude
*/

/* WARNING: Runtime eval with |mfn| via import
*/

/* WARNING: Runtime eval with |mfn| via quantum.core.ns/ns-exclude
*/

/* WARNING: Runtime eval with |mfn| via import
*/

/* WARNING: Runtime eval with |mfn| via quantum.core.ns/ns-exclude
*/

/* WARNING: Runtime eval with |mfn| via import
*/

/* WARNING: Runtime eval with |mfn| via quantum.core.ns/ns-exclude
*/

/* WARNING: Runtime eval with |mfn| via import
*/

/* WARNING: Runtime eval with |mfn| via quantum.core.ns/ns-exclude
*/

/* WARNING: Runtime eval with |mfn| via import
*/
goog.provide('alexandergunnarson.byu.view');
goog.require('cljs.core');
goog.require('quantum.core.resources');
goog.require('clojure.core.rrb_vector');
goog.require('quantum.core.logic');
goog.require('quantum.system');
goog.require('quantum.core.print');
goog.require('quantum.core.log');
goog.require('quantum.net.websocket');
goog.require('quantum.ui.style.fonts');
goog.require('reagent.core');
goog.require('alexandergunnarson.byu.style');
goog.require('cljs.core');
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
if(typeof alexandergunnarson.byu.view.state !== 'undefined'){
} else {
alexandergunnarson.byu.view.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"weather","weather",1320452344),new cljs.core.Keyword(null,"width","width",-384071477),quantum.ui.style.css.dom.viewport_w.call(null),new cljs.core.Keyword(null,"height","height",1025178622),quantum.ui.style.css.dom.viewport_h.call(null),new cljs.core.Keyword(null,"weather-item","weather-item",256587055),new cljs.core.Keyword(null,"current","current",-1088038603)], null));
}
alexandergunnarson.byu.view.top_bar = (function alexandergunnarson$byu$view$top_bar(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#top-bar","div#top-bar",1226064137),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return cljs.core.swap_BANG_.call(null,alexandergunnarson.byu.view.state,cljs.core.assoc,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"weather","weather",1320452344));
})], null),"Weather"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return cljs.core.swap_BANG_.call(null,alexandergunnarson.byu.view.state,cljs.core.assoc,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"about","about",1423892543));
})], null),"About the Maker"], null)], null);
});
});
alexandergunnarson.byu.view.about = (function alexandergunnarson$byu$view$about(){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#resume","div#resume",-551313775),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.name","h1.name",1551166597),"Alex Gunnarson"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.cutout","img.cutout",254387900),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"./me.jpg",new cljs.core.Keyword(null,"height","height",1025178622),(200),new cljs.core.Keyword(null,"width","width",-384071477),(200)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.resume","h2.resume",223125266),"My ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),"(abbreviated)"], null)," r\u00E9sum\u00E9"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Used Clojure + ClojureScript, plus Datomic + DataScript"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Used reactive expressions, cursors, and lenses"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Created isomorphic client-and-server side database syncing"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Wrote large shared client/server library called ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://www.github.com/alexandergunnarson/quantum"], null),"quantum"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Created several reactive, data-driven web apps"], null)], null)], null);
});
});
alexandergunnarson.byu.view.weather = (function alexandergunnarson$byu$view$weather(){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#weather","div#weather",-734174009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#weather-bar","div#weather-bar",521995121),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.weather-item","div.weather-item",1258252686),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"weather-item","weather-item",256587055).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,alexandergunnarson.byu.view.state)),new cljs.core.Keyword(null,"current","current",-1088038603)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return cljs.core.swap_BANG_.call(null,alexandergunnarson.byu.view.state,cljs.core.assoc,new cljs.core.Keyword(null,"weather-item","weather-item",256587055),new cljs.core.Keyword(null,"current","current",-1088038603));
})], null),"Current"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.weather-item","div.weather-item",1258252686),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"weather-item","weather-item",256587055).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,alexandergunnarson.byu.view.state)),new cljs.core.Keyword(null,"forecast","forecast",-1289862359)))?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return cljs.core.swap_BANG_.call(null,alexandergunnarson.byu.view.state,cljs.core.assoc,new cljs.core.Keyword(null,"weather-item","weather-item",256587055),new cljs.core.Keyword(null,"forecast","forecast",-1289862359));
})], null),"Forecast"], null)], null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"weather-item","weather-item",256587055).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,alexandergunnarson.byu.view.state)),new cljs.core.Keyword(null,"current","current",-1088038603)))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#current-weather","div#current-weather",-1410904279),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#status","div#status",-628680706),"sunny"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#status-span","div#status-span",-1047097293),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.caption1","div.caption1",1675578359),"20\u00B0 F"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),(100),new cljs.core.Keyword(null,"width","width",-384071477),(100)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle#sun","circle#sun",1862724948)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle#sun1","circle#sun1",1302195482)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle#sun2","circle#sun2",437983838)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.caption1","div.caption1",1675578359),"10% H"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p#footer","p#footer",-732703463),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p5"], null),"Sponsored by ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.p5","a.p5",1718959459),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"http://www.weather.com"], null),"weather.com"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036)], null)], null):null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"weather-item","weather-item",256587055).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,alexandergunnarson.byu.view.state)),new cljs.core.Keyword(null,"forecast","forecast",-1289862359)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#forecast","div#forecast",-376646737),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Date"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Precipitation"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Chance"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"1/13"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Rain"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"10%"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"1/14"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Snow"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"50%"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"1/15"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Sleet"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"40%"], null)], null)], null)], null):null)], null);
});
});
window.onresize = (function (e){
return cljs.core.swap_BANG_.call(null,alexandergunnarson.byu.view.state,cljs.core.assoc,new cljs.core.Keyword(null,"width","width",-384071477),quantum.ui.style.css.dom.viewport_w.call(null),new cljs.core.Keyword(null,"height","height",1025178622),quantum.ui.style.css.dom.viewport_h.call(null));
});
alexandergunnarson.byu.view.ui_render_fn = (function alexandergunnarson$byu$view$ui_render_fn(props){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#div-root","div#div-root",297870530),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,alexandergunnarson.byu.view.state)),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,alexandergunnarson.byu.view.state))], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [alexandergunnarson.byu.view.top_bar], null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,alexandergunnarson.byu.view.state)),new cljs.core.Keyword(null,"about","about",1423892543)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [alexandergunnarson.byu.view.about], null):null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,alexandergunnarson.byu.view.state)),new cljs.core.Keyword(null,"weather","weather",1320452344)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [alexandergunnarson.byu.view.weather], null):null)], null);
});
});

//# sourceMappingURL=view.js.map?rel=1452702638285
/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns fn logic err log pr res]
*/
