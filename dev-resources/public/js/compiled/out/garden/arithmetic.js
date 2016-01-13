// Compiled by ClojureScript 1.7.170 {}
goog.provide('garden.arithmetic');
goog.require('cljs.core');
goog.require('garden.units');
goog.require('garden.color');
/**
 * Generic addition operator. Transparently computes the sum of
 *   `CSSUnit`s,`CSSColor`s, and numbers.
 */
garden.arithmetic._PLUS_ = (function garden$arithmetic$_PLUS_(var_args){
var args39329 = [];
var len__18583__auto___39335 = arguments.length;
var i__18584__auto___39336 = (0);
while(true){
if((i__18584__auto___39336 < len__18583__auto___39335)){
args39329.push((arguments[i__18584__auto___39336]));

var G__39337 = (i__18584__auto___39336 + (1));
i__18584__auto___39336 = G__39337;
continue;
} else {
}
break;
}

var G__39334 = args39329.length;
switch (G__39334) {
case 0:
return garden.arithmetic._PLUS_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return garden.arithmetic._PLUS_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return garden.arithmetic._PLUS_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__18602__auto__ = (new cljs.core.IndexedSeq(args39329.slice((2)),(0)));
return garden.arithmetic._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18602__auto__);

}
});

garden.arithmetic._PLUS_.cljs$core$IFn$_invoke$arity$0 = (function (){
return (0);
});

garden.arithmetic._PLUS_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
});

garden.arithmetic._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if(cljs.core.truth_(garden.units.unit_QMARK_.call(null,x))){
return garden.units.make_unit_adder.call(null,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x)).call(null,x,y);
} else {
if(cljs.core.truth_(garden.color.color_QMARK_.call(null,x))){
return garden.color.color_PLUS_.call(null,x,y);
} else {
if(cljs.core.truth_((function (){var or__17525__auto__ = garden.units.unit_QMARK_.call(null,y);
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return garden.color.color_QMARK_.call(null,y);
}
})())){
return garden.arithmetic._PLUS_.call(null,y,x);
} else {
return (x + y);
}

}
}
});

garden.arithmetic._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return cljs.core.reduce.call(null,garden.arithmetic._PLUS_,garden.arithmetic._PLUS_.call(null,x,y),more);
});

garden.arithmetic._PLUS_.cljs$lang$applyTo = (function (seq39330){
var G__39331 = cljs.core.first.call(null,seq39330);
var seq39330__$1 = cljs.core.next.call(null,seq39330);
var G__39332 = cljs.core.first.call(null,seq39330__$1);
var seq39330__$2 = cljs.core.next.call(null,seq39330__$1);
return garden.arithmetic._PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__39331,G__39332,seq39330__$2);
});

garden.arithmetic._PLUS_.cljs$lang$maxFixedArity = (2);
/**
 * Generic subtraction operator. Transparently computes the difference
 *   between `CSSUnit`s, `CSSColor`s, and numbers.
 */
garden.arithmetic._ = (function garden$arithmetic$_(var_args){
var args39339 = [];
var len__18583__auto___39347 = arguments.length;
var i__18584__auto___39348 = (0);
while(true){
if((i__18584__auto___39348 < len__18583__auto___39347)){
args39339.push((arguments[i__18584__auto___39348]));

var G__39349 = (i__18584__auto___39348 + (1));
i__18584__auto___39348 = G__39349;
continue;
} else {
}
break;
}

var G__39344 = args39339.length;
switch (G__39344) {
case 1:
return garden.arithmetic._.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return garden.arithmetic._.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__18602__auto__ = (new cljs.core.IndexedSeq(args39339.slice((2)),(0)));
return garden.arithmetic._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18602__auto__);

}
});

garden.arithmetic._.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(cljs.core.truth_(garden.units.unit_QMARK_.call(null,x))){
return cljs.core.update_in.call(null,x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"magnitude","magnitude",1924274222)], null),cljs.core._);
} else {
if(cljs.core.truth_(garden.color.color_QMARK_.call(null,x))){
return x;
} else {
return (- x);

}
}
});

garden.arithmetic._.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if(cljs.core.truth_(garden.units.unit_QMARK_.call(null,x))){
return garden.units.make_unit_subtractor.call(null,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x)).call(null,x,y);
} else {
if(cljs.core.truth_(garden.color.color_QMARK_.call(null,x))){
return garden.color.color_.call(null,x,y);
} else {
if(cljs.core.truth_(garden.units.unit_QMARK_.call(null,y))){
var map__39345 = y;
var map__39345__$1 = ((((!((map__39345 == null)))?((((map__39345.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39345.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39345):map__39345);
var m = cljs.core.get.call(null,map__39345__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
return cljs.core.assoc.call(null,y,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),(x - m));
} else {
if(cljs.core.truth_(garden.color.color_QMARK_.call(null,y))){
return garden.color.color_.call(null,x,y);
} else {
return (x - y);

}
}

}
}
});

garden.arithmetic._.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return cljs.core.reduce.call(null,garden.arithmetic._,garden.arithmetic._.call(null,x,y),more);
});

garden.arithmetic._.cljs$lang$applyTo = (function (seq39340){
var G__39341 = cljs.core.first.call(null,seq39340);
var seq39340__$1 = cljs.core.next.call(null,seq39340);
var G__39342 = cljs.core.first.call(null,seq39340__$1);
var seq39340__$2 = cljs.core.next.call(null,seq39340__$1);
return garden.arithmetic._.cljs$core$IFn$_invoke$arity$variadic(G__39341,G__39342,seq39340__$2);
});

garden.arithmetic._.cljs$lang$maxFixedArity = (2);
/**
 * Generic multiplication operation. Transparently computes the product
 *   between `CSSUnit`s, `CSSColor`s, and numbers.
 */
garden.arithmetic._STAR_ = (function garden$arithmetic$_STAR_(var_args){
var args39351 = [];
var len__18583__auto___39357 = arguments.length;
var i__18584__auto___39358 = (0);
while(true){
if((i__18584__auto___39358 < len__18583__auto___39357)){
args39351.push((arguments[i__18584__auto___39358]));

var G__39359 = (i__18584__auto___39358 + (1));
i__18584__auto___39358 = G__39359;
continue;
} else {
}
break;
}

var G__39356 = args39351.length;
switch (G__39356) {
case 0:
return garden.arithmetic._STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return garden.arithmetic._STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return garden.arithmetic._STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__18602__auto__ = (new cljs.core.IndexedSeq(args39351.slice((2)),(0)));
return garden.arithmetic._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18602__auto__);

}
});

garden.arithmetic._STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return (1);
});

garden.arithmetic._STAR_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
});

garden.arithmetic._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if(cljs.core.truth_(garden.units.unit_QMARK_.call(null,x))){
return garden.units.make_unit_multiplier.call(null,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x)).call(null,x,y);
} else {
if(cljs.core.truth_(garden.color.color_QMARK_.call(null,x))){
return garden.color.color_STAR_.call(null,x,y);
} else {
if(cljs.core.truth_((function (){var or__17525__auto__ = garden.units.unit_QMARK_.call(null,y);
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return garden.color.color_QMARK_.call(null,y);
}
})())){
return garden.arithmetic._STAR_.call(null,y,x);
} else {
return (x * y);
}

}
}
});

garden.arithmetic._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return cljs.core.reduce.call(null,garden.arithmetic._STAR_,garden.arithmetic._STAR_.call(null,x,y),more);
});

garden.arithmetic._STAR_.cljs$lang$applyTo = (function (seq39352){
var G__39353 = cljs.core.first.call(null,seq39352);
var seq39352__$1 = cljs.core.next.call(null,seq39352);
var G__39354 = cljs.core.first.call(null,seq39352__$1);
var seq39352__$2 = cljs.core.next.call(null,seq39352__$1);
return garden.arithmetic._STAR_.cljs$core$IFn$_invoke$arity$variadic(G__39353,G__39354,seq39352__$2);
});

garden.arithmetic._STAR_.cljs$lang$maxFixedArity = (2);
/**
 * Generic division operation. Transparently computes the quotient
 *   between `CSSUnit`s, `CSSColor`s, and numbers.
 */
garden.arithmetic._SLASH_ = (function garden$arithmetic$_SLASH_(var_args){
var args39361 = [];
var len__18583__auto___39369 = arguments.length;
var i__18584__auto___39370 = (0);
while(true){
if((i__18584__auto___39370 < len__18583__auto___39369)){
args39361.push((arguments[i__18584__auto___39370]));

var G__39371 = (i__18584__auto___39370 + (1));
i__18584__auto___39370 = G__39371;
continue;
} else {
}
break;
}

var G__39366 = args39361.length;
switch (G__39366) {
case 1:
return garden.arithmetic._SLASH_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return garden.arithmetic._SLASH_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__18602__auto__ = (new cljs.core.IndexedSeq(args39361.slice((2)),(0)));
return garden.arithmetic._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__18602__auto__);

}
});

garden.arithmetic._SLASH_.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(cljs.core.truth_(garden.units.unit_QMARK_.call(null,x))){
return cljs.core.update_in.call(null,x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"magnitude","magnitude",1924274222)], null),cljs.core._SLASH_);
} else {
if(cljs.core.truth_(garden.color.color_QMARK_.call(null,x))){
return garden.color.color_div.call(null,x);
} else {
return ((1) / x);

}
}
});

garden.arithmetic._SLASH_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if(cljs.core.truth_(garden.units.unit_QMARK_.call(null,x))){
return garden.units.make_unit_divider.call(null,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x)).call(null,x,y);
} else {
if(cljs.core.truth_(garden.color.color_QMARK_.call(null,x))){
return garden.color.color_div.call(null,x,y);
} else {
if(cljs.core.truth_(garden.units.unit_QMARK_.call(null,y))){
var map__39367 = y;
var map__39367__$1 = ((((!((map__39367 == null)))?((((map__39367.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39367.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39367):map__39367);
var m = cljs.core.get.call(null,map__39367__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
return cljs.core.assoc.call(null,y,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),(x / m));
} else {
if(cljs.core.truth_(garden.color.color_QMARK_.call(null,y))){
return garden.color.color_div.call(null,x,y);
} else {
return (x / y);

}
}

}
}
});

garden.arithmetic._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return cljs.core.reduce.call(null,garden.arithmetic._SLASH_,garden.arithmetic._SLASH_.call(null,x,y),more);
});

garden.arithmetic._SLASH_.cljs$lang$applyTo = (function (seq39362){
var G__39363 = cljs.core.first.call(null,seq39362);
var seq39362__$1 = cljs.core.next.call(null,seq39362);
var G__39364 = cljs.core.first.call(null,seq39362__$1);
var seq39362__$2 = cljs.core.next.call(null,seq39362__$1);
return garden.arithmetic._SLASH_.cljs$core$IFn$_invoke$arity$variadic(G__39363,G__39364,seq39362__$2);
});

garden.arithmetic._SLASH_.cljs$lang$maxFixedArity = (2);

//# sourceMappingURL=arithmetic.js.map?rel=1452702564869