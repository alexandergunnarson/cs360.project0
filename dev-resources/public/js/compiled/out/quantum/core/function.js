// Compiled by ClojureScript 1.7.170 {}

/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns map]
*/
goog.provide('quantum.core.function$');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.core.rrb_vector');
goog.require('quantum.core.data.map');
goog.require('quantum.core.ns');
goog.require('cljs.core');

/**
* @constructor
*/
quantum.core.function$.MultiRet = (function (val){
this.val = val;
})

quantum.core.function$.MultiRet.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
});

quantum.core.function$.MultiRet.cljs$lang$type = true;

quantum.core.function$.MultiRet.cljs$lang$ctorStr = "quantum.core.function/MultiRet";

quantum.core.function$.MultiRet.cljs$lang$ctorPrWriter = (function (this__18123__auto__,writer__18124__auto__,opt__18125__auto__){
return cljs.core._write.call(null,writer__18124__auto__,"quantum.core.function/MultiRet");
});

quantum.core.function$.__GT_MultiRet = (function quantum$core$function$__GT_MultiRet(val){
return (new quantum.core.function$.MultiRet(val));
});

quantum.core.function$.fn_nil = cljs.core.constantly.call(null,null);
/**
 * Call function `f` with additional arguments.
 */
quantum.core.function$.call = (function quantum$core$function$call(var_args){
var args36957 = [];
var len__18583__auto___36965 = arguments.length;
var i__18584__auto___36966 = (0);
while(true){
if((i__18584__auto___36966 < len__18583__auto___36965)){
args36957.push((arguments[i__18584__auto___36966]));

var G__36967 = (i__18584__auto___36966 + (1));
i__18584__auto___36966 = G__36967;
continue;
} else {
}
break;
}

var G__36964 = args36957.length;
switch (G__36964) {
case 1:
return quantum.core.function$.call.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quantum.core.function$.call.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quantum.core.function$.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return quantum.core.function$.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__18602__auto__ = (new cljs.core.IndexedSeq(args36957.slice((4)),(0)));
return quantum.core.function$.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__18602__auto__);

}
});

quantum.core.function$.call.cljs$core$IFn$_invoke$arity$1 = (function (f){
return f.call(null);
});

quantum.core.function$.call.cljs$core$IFn$_invoke$arity$2 = (function (f,x){
return f.call(null,x);
});

quantum.core.function$.call.cljs$core$IFn$_invoke$arity$3 = (function (f,x,y){
return f.call(null,x,y);
});

quantum.core.function$.call.cljs$core$IFn$_invoke$arity$4 = (function (f,x,y,z){
return f.call(null,x,y,z);
});

quantum.core.function$.call.cljs$core$IFn$_invoke$arity$variadic = (function (f,x,y,z,more){
return cljs.core.apply.call(null,f,x,y,z,more);
});

quantum.core.function$.call.cljs$lang$applyTo = (function (seq36958){
var G__36959 = cljs.core.first.call(null,seq36958);
var seq36958__$1 = cljs.core.next.call(null,seq36958);
var G__36960 = cljs.core.first.call(null,seq36958__$1);
var seq36958__$2 = cljs.core.next.call(null,seq36958__$1);
var G__36961 = cljs.core.first.call(null,seq36958__$2);
var seq36958__$3 = cljs.core.next.call(null,seq36958__$2);
var G__36962 = cljs.core.first.call(null,seq36958__$3);
var seq36958__$4 = cljs.core.next.call(null,seq36958__$3);
return quantum.core.function$.call.cljs$core$IFn$_invoke$arity$variadic(G__36959,G__36960,G__36961,G__36962,seq36958__$4);
});

quantum.core.function$.call.cljs$lang$maxFixedArity = (4);
/**
 * Accepts any number of arguments and returns the first.
 */
quantum.core.function$.firsta = (function quantum$core$function$firsta(var_args){
var args36969 = [];
var len__18583__auto___36976 = arguments.length;
var i__18584__auto___36977 = (0);
while(true){
if((i__18584__auto___36977 < len__18583__auto___36976)){
args36969.push((arguments[i__18584__auto___36977]));

var G__36978 = (i__18584__auto___36977 + (1));
i__18584__auto___36977 = G__36978;
continue;
} else {
}
break;
}

var G__36975 = args36969.length;
switch (G__36975) {
case 1:
return quantum.core.function$.firsta.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quantum.core.function$.firsta.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quantum.core.function$.firsta.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__18602__auto__ = (new cljs.core.IndexedSeq(args36969.slice((3)),(0)));
return quantum.core.function$.firsta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__18602__auto__);

}
});

quantum.core.function$.firsta.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
});

quantum.core.function$.firsta.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return x;
});

quantum.core.function$.firsta.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return x;
});

quantum.core.function$.firsta.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,z,more){
return x;
});

quantum.core.function$.firsta.cljs$lang$applyTo = (function (seq36970){
var G__36971 = cljs.core.first.call(null,seq36970);
var seq36970__$1 = cljs.core.next.call(null,seq36970);
var G__36972 = cljs.core.first.call(null,seq36970__$1);
var seq36970__$2 = cljs.core.next.call(null,seq36970__$1);
var G__36973 = cljs.core.first.call(null,seq36970__$2);
var seq36970__$3 = cljs.core.next.call(null,seq36970__$2);
return quantum.core.function$.firsta.cljs$core$IFn$_invoke$arity$variadic(G__36971,G__36972,G__36973,seq36970__$3);
});

quantum.core.function$.firsta.cljs$lang$maxFixedArity = (3);
/**
 * Accepts any number of arguments and returns the second.
 */
quantum.core.function$.seconda = (function quantum$core$function$seconda(var_args){
var args36980 = [];
var len__18583__auto___36987 = arguments.length;
var i__18584__auto___36988 = (0);
while(true){
if((i__18584__auto___36988 < len__18583__auto___36987)){
args36980.push((arguments[i__18584__auto___36988]));

var G__36989 = (i__18584__auto___36988 + (1));
i__18584__auto___36988 = G__36989;
continue;
} else {
}
break;
}

var G__36986 = args36980.length;
switch (G__36986) {
case 2:
return quantum.core.function$.seconda.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quantum.core.function$.seconda.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__18602__auto__ = (new cljs.core.IndexedSeq(args36980.slice((3)),(0)));
return quantum.core.function$.seconda.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__18602__auto__);

}
});

quantum.core.function$.seconda.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return y;
});

quantum.core.function$.seconda.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return y;
});

quantum.core.function$.seconda.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,z,more){
return y;
});

quantum.core.function$.seconda.cljs$lang$applyTo = (function (seq36981){
var G__36982 = cljs.core.first.call(null,seq36981);
var seq36981__$1 = cljs.core.next.call(null,seq36981);
var G__36983 = cljs.core.first.call(null,seq36981__$1);
var seq36981__$2 = cljs.core.next.call(null,seq36981__$1);
var G__36984 = cljs.core.first.call(null,seq36981__$2);
var seq36981__$3 = cljs.core.next.call(null,seq36981__$2);
return quantum.core.function$.seconda.cljs$core$IFn$_invoke$arity$variadic(G__36982,G__36983,G__36984,seq36981__$3);
});

quantum.core.function$.seconda.cljs$lang$maxFixedArity = (3);
quantum.core.function$.do_curried = (function quantum$core$function$do_curried(name,doc,meta,args,body){
var cargs = cljs.core.vec.call(null,cljs.core.butlast.call(null,args));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,name),cljs.core._conj.call(null,cljs.core.List.EMPTY,doc),cljs.core._conj.call(null,cljs.core.List.EMPTY,meta),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cargs),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__36991__auto__","x__36991__auto__",1693293321,null))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,name),cargs,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__36991__auto__","x__36991__auto__",1693293321,null)))))))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,args),body)))))));
});
quantum.core.function$.zeroid = (function quantum$core$function$zeroid(func,base){
return (function() {
var G__36992 = null;
var G__36992__0 = (function (){
return base;
});
var G__36992__2 = (function (arg1,arg2){
return func.call(null,arg1,arg2);
});
var G__36992__3 = (function (arg1,arg2,arg3){
return func.call(null,func.call(null,arg1,arg2),arg3);
});
var G__36992__4 = (function() { 
var G__36993__delegate = function (arg1,arg2,arg3,args){
return cljs.core.apply.call(null,func,func.call(null,func.call(null,arg1,arg2),arg3),args);
};
var G__36993 = function (arg1,arg2,arg3,var_args){
var args = null;
if (arguments.length > 3) {
var G__36994__i = 0, G__36994__a = new Array(arguments.length -  3);
while (G__36994__i < G__36994__a.length) {G__36994__a[G__36994__i] = arguments[G__36994__i + 3]; ++G__36994__i;}
  args = new cljs.core.IndexedSeq(G__36994__a,0);
} 
return G__36993__delegate.call(this,arg1,arg2,arg3,args);};
G__36993.cljs$lang$maxFixedArity = 3;
G__36993.cljs$lang$applyTo = (function (arglist__36995){
var arg1 = cljs.core.first(arglist__36995);
arglist__36995 = cljs.core.next(arglist__36995);
var arg2 = cljs.core.first(arglist__36995);
arglist__36995 = cljs.core.next(arglist__36995);
var arg3 = cljs.core.first(arglist__36995);
var args = cljs.core.rest(arglist__36995);
return G__36993__delegate(arg1,arg2,arg3,args);
});
G__36993.cljs$core$IFn$_invoke$arity$variadic = G__36993__delegate;
return G__36993;
})()
;
G__36992 = function(arg1,arg2,arg3,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__36992__0.call(this);
case 2:
return G__36992__2.call(this,arg1,arg2);
case 3:
return G__36992__3.call(this,arg1,arg2,arg3);
default:
var G__36996 = null;
if (arguments.length > 3) {
var G__36997__i = 0, G__36997__a = new Array(arguments.length -  3);
while (G__36997__i < G__36997__a.length) {G__36997__a[G__36997__i] = arguments[G__36997__i + 3]; ++G__36997__i;}
G__36996 = new cljs.core.IndexedSeq(G__36997__a,0);
}
return G__36992__4.cljs$core$IFn$_invoke$arity$variadic(arg1,arg2,arg3, G__36996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36992.cljs$lang$maxFixedArity = 3;
G__36992.cljs$lang$applyTo = G__36992__4.cljs$lang$applyTo;
G__36992.cljs$core$IFn$_invoke$arity$0 = G__36992__0;
G__36992.cljs$core$IFn$_invoke$arity$2 = G__36992__2;
G__36992.cljs$core$IFn$_invoke$arity$3 = G__36992__3;
G__36992.cljs$core$IFn$_invoke$arity$variadic = G__36992__4.cljs$core$IFn$_invoke$arity$variadic;
return G__36992;
})()
});
/**
 * Builds a combining fn out of the supplied operator and identity
 *   constructor. op must be associative and ctor called with no args
 *   must return an identity value for it.
 */
quantum.core.function$.monoid = (function quantum$core$function$monoid(op,ctor){
return (function() {
var quantum$core$function$monoid_$_mon = null;
var quantum$core$function$monoid_$_mon__0 = (function (){
return ctor.call(null);
});
var quantum$core$function$monoid_$_mon__2 = (function (a,b){
return op.call(null,a,b);
});
quantum$core$function$monoid_$_mon = function(a,b){
switch(arguments.length){
case 0:
return quantum$core$function$monoid_$_mon__0.call(this);
case 2:
return quantum$core$function$monoid_$_mon__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
quantum$core$function$monoid_$_mon.cljs$core$IFn$_invoke$arity$0 = quantum$core$function$monoid_$_mon__0;
quantum$core$function$monoid_$_mon.cljs$core$IFn$_invoke$arity$2 = quantum$core$function$monoid_$_mon__2;
return quantum$core$function$monoid_$_mon;
})()
});
quantum.core.function$.compr = (function quantum$core$function$compr(var_args){
var args__18590__auto__ = [];
var len__18583__auto___36999 = arguments.length;
var i__18584__auto___37000 = (0);
while(true){
if((i__18584__auto___37000 < len__18583__auto___36999)){
args__18590__auto__.push((arguments[i__18584__auto___37000]));

var G__37001 = (i__18584__auto___37000 + (1));
i__18584__auto___37000 = G__37001;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.core.function$.compr.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.core.function$.compr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.comp,cljs.core.reverse.call(null,args));
});

quantum.core.function$.compr.cljs$lang$maxFixedArity = (0);

quantum.core.function$.compr.cljs$lang$applyTo = (function (seq36998){
return quantum.core.function$.compr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36998));
});
quantum.core.function$.f_STAR__STAR_n = (function quantum$core$function$f_STAR__STAR_n(var_args){
var args__18590__auto__ = [];
var len__18583__auto___37005 = arguments.length;
var i__18584__auto___37006 = (0);
while(true){
if((i__18584__auto___37006 < len__18583__auto___37005)){
args__18590__auto__.push((arguments[i__18584__auto___37006]));

var G__37007 = (i__18584__auto___37006 + (1));
i__18584__auto___37006 = G__37007;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((1) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((1)),(0))):null);
return quantum.core.function$.f_STAR__STAR_n.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18591__auto__);
});

quantum.core.function$.f_STAR__STAR_n.cljs$core$IFn$_invoke$arity$variadic = (function (func,args){
return (function() { 
var G__37008__delegate = function (args_inner){
return cljs.core.apply.call(null,func,cljs.core.concat.call(null,args_inner,args));
};
var G__37008 = function (var_args){
var args_inner = null;
if (arguments.length > 0) {
var G__37009__i = 0, G__37009__a = new Array(arguments.length -  0);
while (G__37009__i < G__37009__a.length) {G__37009__a[G__37009__i] = arguments[G__37009__i + 0]; ++G__37009__i;}
  args_inner = new cljs.core.IndexedSeq(G__37009__a,0);
} 
return G__37008__delegate.call(this,args_inner);};
G__37008.cljs$lang$maxFixedArity = 0;
G__37008.cljs$lang$applyTo = (function (arglist__37010){
var args_inner = cljs.core.seq(arglist__37010);
return G__37008__delegate(args_inner);
});
G__37008.cljs$core$IFn$_invoke$arity$variadic = G__37008__delegate;
return G__37008;
})()
;
});

quantum.core.function$.f_STAR__STAR_n.cljs$lang$maxFixedArity = (1);

quantum.core.function$.f_STAR__STAR_n.cljs$lang$applyTo = (function (seq37003){
var G__37004 = cljs.core.first.call(null,seq37003);
var seq37003__$1 = cljs.core.next.call(null,seq37003);
return quantum.core.function$.f_STAR__STAR_n.cljs$core$IFn$_invoke$arity$variadic(G__37004,seq37003__$1);
});
quantum.core.function$._STAR_fn = (function quantum$core$function$_STAR_fn(var_args){
var args__18590__auto__ = [];
var len__18583__auto___37012 = arguments.length;
var i__18584__auto___37013 = (0);
while(true){
if((i__18584__auto___37013 < len__18583__auto___37012)){
args__18590__auto__.push((arguments[i__18584__auto___37013]));

var G__37014 = (i__18584__auto___37013 + (1));
i__18584__auto___37013 = G__37014;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.core.function$._STAR_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.core.function$._STAR_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (function (arg_inner__21897__auto__){
return cljs.core.apply.call(null,arg_inner__21897__auto__,args);
});
});

quantum.core.function$._STAR_fn.cljs$lang$maxFixedArity = (0);

quantum.core.function$._STAR_fn.cljs$lang$applyTo = (function (seq37011){
return quantum.core.function$._STAR_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37011));
});
quantum.core.function$.fn_bi = (function quantum$core$function$fn_bi(arg){
return (function (p1__37015_SHARP_,p2__37016_SHARP_){
return arg.call(null,p1__37015_SHARP_,p2__37016_SHARP_);
});
});
quantum.core.function$.unary = (function quantum$core$function$unary(pred){
return (function() {
var G__37017 = null;
var G__37017__1 = (function (a){
return (function (arg_inner__21897__auto__){
return pred.call(null,arg_inner__21897__auto__,a);
});
});
var G__37017__2 = (function (a,b){
return (function (arg_inner__21897__auto__){
return pred.call(null,arg_inner__21897__auto__,a,b);
});
});
var G__37017__3 = (function (a,b,c){
return (function (arg_inner__21897__auto__){
return pred.call(null,arg_inner__21897__auto__,a,b,c);
});
});
G__37017 = function(a,b,c){
switch(arguments.length){
case 1:
return G__37017__1.call(this,a);
case 2:
return G__37017__2.call(this,a,b);
case 3:
return G__37017__3.call(this,a,b,c);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37017.cljs$core$IFn$_invoke$arity$1 = G__37017__1;
G__37017.cljs$core$IFn$_invoke$arity$2 = G__37017__2;
G__37017.cljs$core$IFn$_invoke$arity$3 = G__37017__3;
return G__37017;
})()
});
quantum.core.function$.call__GT_ = (function quantum$core$function$call__GT_(var_args){
var args__18590__auto__ = [];
var len__18583__auto___37025 = arguments.length;
var i__18584__auto___37026 = (0);
while(true){
if((i__18584__auto___37026 < len__18583__auto___37025)){
args__18590__auto__.push((arguments[i__18584__auto___37026]));

var G__37027 = (i__18584__auto___37026 + (1));
i__18584__auto___37026 = G__37027;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((1) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((1)),(0))):null);
return quantum.core.function$.call__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18591__auto__);
});

quantum.core.function$.call__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (arg,p__37023){
var vec__37024 = p__37023;
var func = cljs.core.nth.call(null,vec__37024,(0),null);
var args = cljs.core.nthnext.call(null,vec__37024,(1));
return cljs.core.apply.call(null,func,args).call(null,arg);
});

quantum.core.function$.call__GT_.cljs$lang$maxFixedArity = (1);

quantum.core.function$.call__GT_.cljs$lang$applyTo = (function (seq37021){
var G__37022 = cljs.core.first.call(null,seq37021);
var seq37021__$1 = cljs.core.next.call(null,seq37021);
return quantum.core.function$.call__GT_.cljs$core$IFn$_invoke$arity$variadic(G__37022,seq37021__$1);
});
quantum.core.function$.call__GT__GT_ = (function quantum$core$function$call__GT__GT_(var_args){
var args__18590__auto__ = [];
var len__18583__auto___37031 = arguments.length;
var i__18584__auto___37032 = (0);
while(true){
if((i__18584__auto___37032 < len__18583__auto___37031)){
args__18590__auto__.push((arguments[i__18584__auto___37032]));

var G__37033 = (i__18584__auto___37032 + (1));
i__18584__auto___37032 = G__37033;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.core.function$.call__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.core.function$.call__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (p__37029){
var vec__37030 = p__37029;
var func = cljs.core.nth.call(null,vec__37030,(0),null);
var args = cljs.core.nthnext.call(null,vec__37030,(1));
return cljs.core.apply.call(null,func,cljs.core.butlast.call(null,args)).call(null,cljs.core.last.call(null,args));
});

quantum.core.function$.call__GT__GT_.cljs$lang$maxFixedArity = (0);

quantum.core.function$.call__GT__GT_.cljs$lang$applyTo = (function (seq37028){
return quantum.core.function$.call__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37028));
});
quantum.core.function$.juxtm_STAR_ = (function quantum$core$function$juxtm_STAR_(map_type,args){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,args))){
return (function (arg){
return cljs.core.apply.call(null,map_type,cljs.core.apply.call(null,cljs.core.juxt,args).call(null,arg));
});
} else {
throw (new quantum.core.ns.IllegalArgumentException("juxtm requires an even number of arguments",null,null,null));
}
});
quantum.core.function$.juxtk_STAR_ = (function quantum$core$function$juxtk_STAR_(map_type,args){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,args))){
} else {
throw (new quantum.core.ns.IllegalArgumentException("juxtk requires an even number of arguments",null,null,null));
}

var m = cljs.core.apply.call(null,map_type,args);
return ((function (m){
return (function (arg){
return cljs.core.reduce_kv.call(null,((function (m){
return (function (ret,k,f){
return cljs.core.assoc.call(null,ret,k,f.call(null,arg));
});})(m))
,m,m);
});
;})(m))
});
/**
 * Like /juxt/, but applies a hash-map instead of a vector.
 * Requires an even number of arguments.
 */
quantum.core.function$.juxtm = (function quantum$core$function$juxtm(var_args){
var args__18590__auto__ = [];
var len__18583__auto___37035 = arguments.length;
var i__18584__auto___37036 = (0);
while(true){
if((i__18584__auto___37036 < len__18583__auto___37035)){
args__18590__auto__.push((arguments[i__18584__auto___37036]));

var G__37037 = (i__18584__auto___37036 + (1));
i__18584__auto___37036 = G__37037;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.core.function$.juxtm.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.core.function$.juxtm.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return quantum.core.function$.juxtm_STAR_.call(null,cljs.core.hash_map,args);
});

quantum.core.function$.juxtm.cljs$lang$maxFixedArity = (0);

quantum.core.function$.juxtm.cljs$lang$applyTo = (function (seq37034){
return quantum.core.function$.juxtm.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37034));
});
/**
 * Like /juxt/, but applies a sorted-map+ instead of a vector.
 * Requires an even number of arguments.
 */
quantum.core.function$.juxt_sm = (function quantum$core$function$juxt_sm(var_args){
var args__18590__auto__ = [];
var len__18583__auto___37039 = arguments.length;
var i__18584__auto___37040 = (0);
while(true){
if((i__18584__auto___37040 < len__18583__auto___37039)){
args__18590__auto__.push((arguments[i__18584__auto___37040]));

var G__37041 = (i__18584__auto___37040 + (1));
i__18584__auto___37040 = G__37041;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.core.function$.juxt_sm.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.core.function$.juxt_sm.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return quantum.core.function$.juxtm_STAR_.call(null,quantum.core.data.map.sorted_map,args);
});

quantum.core.function$.juxt_sm.cljs$lang$maxFixedArity = (0);

quantum.core.function$.juxt_sm.cljs$lang$applyTo = (function (seq37038){
return quantum.core.function$.juxt_sm.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37038));
});
/**
 * Like /juxtm/, but each key is constant.
 * Basically like /select-keys/.
 */
quantum.core.function$.juxtk = (function quantum$core$function$juxtk(var_args){
var args__18590__auto__ = [];
var len__18583__auto___37043 = arguments.length;
var i__18584__auto___37044 = (0);
while(true){
if((i__18584__auto___37044 < len__18583__auto___37043)){
args__18590__auto__.push((arguments[i__18584__auto___37044]));

var G__37045 = (i__18584__auto___37044 + (1));
i__18584__auto___37044 = G__37045;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((0) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((0)),(0))):null);
return quantum.core.function$.juxtk.cljs$core$IFn$_invoke$arity$variadic(argseq__18591__auto__);
});

quantum.core.function$.juxtk.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return quantum.core.function$.juxtk_STAR_.call(null,cljs.core.hash_map,args);
});

quantum.core.function$.juxtk.cljs$lang$maxFixedArity = (0);

quantum.core.function$.juxtk.cljs$lang$applyTo = (function (seq37042){
return quantum.core.function$.juxtk.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37042));
});
quantum.core.function$.juxt_kv = (function quantum$core$function$juxt_kv(kf,vf){
return (function() {
var G__37050 = null;
var G__37050__1 = (function (p__37048){
var vec__37049 = p__37048;
var k = cljs.core.nth.call(null,vec__37049,(0),null);
var v = cljs.core.nth.call(null,vec__37049,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kf.call(null,k),vf.call(null,v)], null);
});
var G__37050__2 = (function (k,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kf.call(null,k),vf.call(null,v)], null);
});
G__37050 = function(k,v){
switch(arguments.length){
case 1:
return G__37050__1.call(this,k);
case 2:
return G__37050__2.call(this,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37050.cljs$core$IFn$_invoke$arity$1 = G__37050__1;
G__37050.cljs$core$IFn$_invoke$arity$2 = G__37050__2;
return G__37050;
})()
});
quantum.core.function$.with_pr__GT__GT_ = (function quantum$core$function$with_pr__GT__GT_(obj){
cljs.core.println.call(null,obj);

return obj;
});
quantum.core.function$.with_msg__GT__GT_ = (function quantum$core$function$with_msg__GT__GT_(msg,obj){
cljs.core.println.call(null,msg);

return obj;
});
quantum.core.function$.with__GT__GT_ = (function quantum$core$function$with__GT__GT_(expr,obj){

return obj;
});
quantum.core.function$.withf__GT__GT_ = (function quantum$core$function$withf__GT__GT_(f,obj){
f.call(null,obj);

return obj;
});
quantum.core.function$.withf = (function quantum$core$function$withf(obj,f){
f.call(null,obj);

return obj;
});
quantum.core.function$.withfs = (function quantum$core$function$withfs(var_args){
var args__18590__auto__ = [];
var len__18583__auto___37057 = arguments.length;
var i__18584__auto___37058 = (0);
while(true){
if((i__18584__auto___37058 < len__18583__auto___37057)){
args__18590__auto__.push((arguments[i__18584__auto___37058]));

var G__37059 = (i__18584__auto___37058 + (1));
i__18584__auto___37058 = G__37059;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((1) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((1)),(0))):null);
return quantum.core.function$.withfs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18591__auto__);
});

quantum.core.function$.withfs.cljs$core$IFn$_invoke$arity$variadic = (function (obj,fs){
var seq__37053_37060 = cljs.core.seq.call(null,fs);
var chunk__37054_37061 = null;
var count__37055_37062 = (0);
var i__37056_37063 = (0);
while(true){
if((i__37056_37063 < count__37055_37062)){
var f_37064 = cljs.core._nth.call(null,chunk__37054_37061,i__37056_37063);
f_37064.call(null,obj);

var G__37065 = seq__37053_37060;
var G__37066 = chunk__37054_37061;
var G__37067 = count__37055_37062;
var G__37068 = (i__37056_37063 + (1));
seq__37053_37060 = G__37065;
chunk__37054_37061 = G__37066;
count__37055_37062 = G__37067;
i__37056_37063 = G__37068;
continue;
} else {
var temp__4425__auto___37069 = cljs.core.seq.call(null,seq__37053_37060);
if(temp__4425__auto___37069){
var seq__37053_37070__$1 = temp__4425__auto___37069;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37053_37070__$1)){
var c__18328__auto___37071 = cljs.core.chunk_first.call(null,seq__37053_37070__$1);
var G__37072 = cljs.core.chunk_rest.call(null,seq__37053_37070__$1);
var G__37073 = c__18328__auto___37071;
var G__37074 = cljs.core.count.call(null,c__18328__auto___37071);
var G__37075 = (0);
seq__37053_37060 = G__37072;
chunk__37054_37061 = G__37073;
count__37055_37062 = G__37074;
i__37056_37063 = G__37075;
continue;
} else {
var f_37076 = cljs.core.first.call(null,seq__37053_37070__$1);
f_37076.call(null,obj);

var G__37077 = cljs.core.next.call(null,seq__37053_37070__$1);
var G__37078 = null;
var G__37079 = (0);
var G__37080 = (0);
seq__37053_37060 = G__37077;
chunk__37054_37061 = G__37078;
count__37055_37062 = G__37079;
i__37056_37063 = G__37080;
continue;
}
} else {
}
}
break;
}

return obj;
});

quantum.core.function$.withfs.cljs$lang$maxFixedArity = (1);

quantum.core.function$.withfs.cljs$lang$applyTo = (function (seq37051){
var G__37052 = cljs.core.first.call(null,seq37051);
var seq37051__$1 = cljs.core.next.call(null,seq37051);
return quantum.core.function$.withfs.cljs$core$IFn$_invoke$arity$variadic(G__37052,seq37051__$1);
});
quantum.core.function$.do_rfn = (function quantum$core$function$do_rfn(f1,k,fkv){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,f1))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,clojure.walk.postwalk.call(null,(function (p1__37081_SHARP_){
if(cljs.core.sequential_QMARK_.call(null,p1__37081_SHARP_)){
return ((cljs.core.vector_QMARK_.call(null,p1__37081_SHARP_))?cljs.core.vec:cljs.core.identity).call(null,cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([k], true),p1__37081_SHARP_));
} else {
return p1__37081_SHARP_;
}
}),fkv)),cljs.core._conj.call(null,cljs.core.List.EMPTY,fkv))));
});

//# sourceMappingURL=function.js.map?rel=1452702556828
/* TRANSFORMING CLJS REQUIRE-QUANTUM STATEMENT: [ns map]
*/
