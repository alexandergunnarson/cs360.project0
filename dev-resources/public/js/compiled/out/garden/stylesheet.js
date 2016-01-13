// Compiled by ClojureScript 1.7.170 {}
goog.provide('garden.stylesheet');
goog.require('cljs.core');
goog.require('garden.util');
goog.require('garden.color');
goog.require('garden.types');
/**
 * Create a rule function for the given selector. The `selector`
 *   argument must be valid selector (ie. a keyword, string, or symbol).
 *   Additional arguments may consist of extra selectors or
 *   declarations.
 * 
 *   The returned function accepts any number of arguments which represent
 *   the rule's children.
 * 
 *   Ex.
 *    (let [text-field (rule "[type="text"])]
 *     (text-field {:border ["1px" :solid "black"]}))
 *    ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
 */
garden.stylesheet.rule = (function garden$stylesheet$rule(var_args){
var args__18590__auto__ = [];
var len__18583__auto___31242 = arguments.length;
var i__18584__auto___31243 = (0);
while(true){
if((i__18584__auto___31243 < len__18583__auto___31242)){
args__18590__auto__.push((arguments[i__18584__auto___31243]));

var G__31244 = (i__18584__auto___31243 + (1));
i__18584__auto___31243 = G__31244;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((1) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((1)),(0))):null);
return garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18591__auto__);
});

garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if(!(((selector instanceof cljs.core.Keyword)) || (typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))){
throw cljs.core.ex_info.call(null,"Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__31245__delegate = function (children){
return cljs.core.into.call(null,cljs.core.apply.call(null,cljs.core.vector,selector,more),children);
};
var G__31245 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__31246__i = 0, G__31246__a = new Array(arguments.length -  0);
while (G__31246__i < G__31246__a.length) {G__31246__a[G__31246__i] = arguments[G__31246__i + 0]; ++G__31246__i;}
  children = new cljs.core.IndexedSeq(G__31246__a,0);
} 
return G__31245__delegate.call(this,children);};
G__31245.cljs$lang$maxFixedArity = 0;
G__31245.cljs$lang$applyTo = (function (arglist__31247){
var children = cljs.core.seq(arglist__31247);
return G__31245__delegate(children);
});
G__31245.cljs$core$IFn$_invoke$arity$variadic = G__31245__delegate;
return G__31245;
})()
;
}
});

garden.stylesheet.rule.cljs$lang$maxFixedArity = (1);

garden.stylesheet.rule.cljs$lang$applyTo = (function (seq31240){
var G__31241 = cljs.core.first.call(null,seq31240);
var seq31240__$1 = cljs.core.next.call(null,seq31240);
return garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic(G__31241,seq31240__$1);
});
garden.stylesheet.cssfn = (function garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__31248__delegate = function (args){
return (new garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__31248 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31249__i = 0, G__31249__a = new Array(arguments.length -  0);
while (G__31249__i < G__31249__a.length) {G__31249__a[G__31249__i] = arguments[G__31249__i + 0]; ++G__31249__i;}
  args = new cljs.core.IndexedSeq(G__31249__a,0);
} 
return G__31248__delegate.call(this,args);};
G__31248.cljs$lang$maxFixedArity = 0;
G__31248.cljs$lang$applyTo = (function (arglist__31250){
var args = cljs.core.seq(arglist__31250);
return G__31248__delegate(args);
});
G__31248.cljs$core$IFn$_invoke$arity$variadic = G__31248__delegate;
return G__31248;
})()
;
});
garden.stylesheet.at_rule = (function garden$stylesheet$at_rule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
garden.stylesheet.at_font_face = (function garden$stylesheet$at_font_face(var_args){
var args__18590__auto__ = [];
var len__18583__auto___31252 = arguments.length;
var i__18584__auto___31253 = (0);
while(true){
if((i__18584__auto___31253 < len__18583__auto___31252)){
args__18590__auto__.push((arguments[i__18584__auto___31253]));

var G__31254 = (i__18584__auto___31253 + (1));
i__18584__auto___31253 = G__31254;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
});

garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0);

garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq31251){
return garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31251));
});
/**
 * Create a CSS @import rule.
 */
garden.stylesheet.at_import = (function garden$stylesheet$at_import(var_args){
var args31255 = [];
var len__18583__auto___31260 = arguments.length;
var i__18584__auto___31261 = (0);
while(true){
if((i__18584__auto___31261 < len__18583__auto___31260)){
args31255.push((arguments[i__18584__auto___31261]));

var G__31262 = (i__18584__auto___31261 + (1));
i__18584__auto___31261 = G__31262;
continue;
} else {
}
break;
}

var G__31259 = args31255.length;
switch (G__31259) {
case 1:
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__18602__auto__ = (new cljs.core.IndexedSeq(args31255.slice((1)),(0)));
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18602__auto__);

}
});

garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
});

garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
});

garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq31256){
var G__31257 = cljs.core.first.call(null,seq31256);
var seq31256__$1 = cljs.core.next.call(null,seq31256);
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic(G__31257,seq31256__$1);
});

garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1);
/**
 * Create a CSS @media rule.
 */
garden.stylesheet.at_media = (function garden$stylesheet$at_media(var_args){
var args__18590__auto__ = [];
var len__18583__auto___31266 = arguments.length;
var i__18584__auto___31267 = (0);
while(true){
if((i__18584__auto___31267 < len__18583__auto___31266)){
args__18590__auto__.push((arguments[i__18584__auto___31267]));

var G__31268 = (i__18584__auto___31267 + (1));
i__18584__auto___31267 = G__31268;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((1) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((1)),(0))):null);
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18591__auto__);
});

garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
});

garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1);

garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq31264){
var G__31265 = cljs.core.first.call(null,seq31264);
var seq31264__$1 = cljs.core.next.call(null,seq31264);
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic(G__31265,seq31264__$1);
});
/**
 * Create a CSS @keyframes rule.
 */
garden.stylesheet.at_keyframes = (function garden$stylesheet$at_keyframes(var_args){
var args__18590__auto__ = [];
var len__18583__auto___31271 = arguments.length;
var i__18584__auto___31272 = (0);
while(true){
if((i__18584__auto___31272 < len__18583__auto___31271)){
args__18590__auto__.push((arguments[i__18584__auto___31272]));

var G__31273 = (i__18584__auto___31272 + (1));
i__18584__auto___31272 = G__31273;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((1) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((1)),(0))):null);
return garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18591__auto__);
});

garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
});

garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1);

garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq31269){
var G__31270 = cljs.core.first.call(null,seq31269);
var seq31269__$1 = cljs.core.next.call(null,seq31269);
return garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic(G__31270,seq31269__$1);
});
/**
 * Create a color from RGB values.
 */
garden.stylesheet.rgb = (function garden$stylesheet$rgb(r,g,b){
return garden.color.rgb.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
garden.stylesheet.hsl = (function garden$stylesheet$hsl(h,s,l){
return garden.color.hsl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

//# sourceMappingURL=stylesheet.js.map?rel=1452702627458