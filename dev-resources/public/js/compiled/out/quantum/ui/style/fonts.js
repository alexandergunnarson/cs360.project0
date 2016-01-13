// Compiled by ClojureScript 1.7.170 {}

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns]
*/
goog.provide('quantum.ui.style.fonts');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('quantum.core.ns');
goog.require('clojure.core.rrb_vector');
quantum.ui.style.fonts.families = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"garamond","garamond",-72525262),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pref","pref",-307301052),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["'EB Garamond'","Baskerville","Georgia","Times","serif"], null)], null),new cljs.core.Keyword(null,"optima","optima",-2025462575),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pref","pref",-307301052),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["'Optima'","Segoe","Calibri","Arial","sans-serif"], null)], null),new cljs.core.Keyword(null,"firasans","firasans",684064197),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pref","pref",-307301052),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["'Fira Sans'","Calibri","Arial","sans-serif"], null)], null),new cljs.core.Keyword(null,"sourcecode-pro","sourcecode-pro",2064015699),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pref","pref",-307301052),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["'Source Code Pro'","monospace"], null)], null),new cljs.core.Keyword(null,"helvetica-neue","helvetica-neue",-1001057934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pref","pref",-307301052),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["'Helvetica Neue'","Helvetica","Arial","sans-serif"], null)], null),new cljs.core.Keyword(null,"lato","lato",728966811),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"link","link",-1769163468),"https://fonts.googleapis.com/css?family=Lato:100",new cljs.core.Keyword(null,"pref","pref",-307301052),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["'Lato'","Helvetica","Arial","sans-serif"], null)], null),new cljs.core.Keyword(null,"open-sans","open-sans",-1372741594),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"link","link",-1769163468),"https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic",new cljs.core.Keyword(null,"pref","pref",-307301052),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["'Open Sans'","Helvetica","Arial","sans-serif"], null)], null),new cljs.core.Keyword(null,"montserrat","montserrat",1306439686),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"link","link",-1769163468),"https://fonts.googleapis.com/css?family=Montserrat:400,700",new cljs.core.Keyword(null,"pref","pref",-307301052),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["'Montserrat'","Gotham","Helvetica","Arial","sans-serif"], null)], null)], null);
quantum.ui.style.fonts.family = (function quantum$ui$style$fonts$family(k){
return cljs.core.get_in.call(null,quantum.ui.style.fonts.families,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"pref","pref",-307301052)], null));
});
quantum.ui.style.fonts.link = (function quantum$ui$style$fonts$link(k){
return cljs.core.get_in.call(null,quantum.ui.style.fonts.families,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"link","link",-1769163468)], null));
});
quantum.ui.style.fonts.fonts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"std","std",2037001211),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"std","std",2037001211),"Gotham Book",new cljs.core.Keyword(null,"semibold","semibold",322210290),"Gotham Medium",new cljs.core.Keyword(null,"light","light",1918998747),"Gotham Thin"], null),new cljs.core.Keyword(null,"google","google",578454873),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["Raleway",null,"Pathway Gothic One",null,"Fjalla One",null,"Open Sans Condensed",null], null), null)], null);
quantum.ui.style.fonts.font = (function quantum$ui$style$fonts$font(var_args){
var args18667 = [];
var len__18583__auto___18672 = arguments.length;
var i__18584__auto___18673 = (0);
while(true){
if((i__18584__auto___18673 < len__18583__auto___18672)){
args18667.push((arguments[i__18584__auto___18673]));

var G__18674 = (i__18584__auto___18673 + (1));
i__18584__auto___18673 = G__18674;
continue;
} else {
}
break;
}

var G__18671 = args18667.length;
switch (G__18671) {
case 1:
return quantum.ui.style.fonts.font.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__18602__auto__ = (new cljs.core.IndexedSeq(args18667.slice((1)),(0)));
return quantum.ui.style.fonts.font.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18602__auto__);

}
});

quantum.ui.style.fonts.font.cljs$core$IFn$_invoke$arity$1 = (function (k){
return cljs.core.get_in.call(null,quantum.ui.style.fonts.fonts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"std","std",2037001211)], null));
});

quantum.ui.style.fonts.font.cljs$core$IFn$_invoke$arity$variadic = (function (k,ks){
return cljs.core.get_in.call(null,quantum.ui.style.fonts.fonts,cljs.core.apply.call(null,cljs.core.vector,k,ks));
});

quantum.ui.style.fonts.font.cljs$lang$applyTo = (function (seq18668){
var G__18669 = cljs.core.first.call(null,seq18668);
var seq18668__$1 = cljs.core.next.call(null,seq18668);
return quantum.ui.style.fonts.font.cljs$core$IFn$_invoke$arity$variadic(G__18669,seq18668__$1);
});

quantum.ui.style.fonts.font.cljs$lang$maxFixedArity = (1);

//# sourceMappingURL=fonts.js.map?rel=1452702613002
/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns]
*/
