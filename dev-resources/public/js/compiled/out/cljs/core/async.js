// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args39545 = [];
var len__18583__auto___39551 = arguments.length;
var i__18584__auto___39552 = (0);
while(true){
if((i__18584__auto___39552 < len__18583__auto___39551)){
args39545.push((arguments[i__18584__auto___39552]));

var G__39553 = (i__18584__auto___39552 + (1));
i__18584__auto___39552 = G__39553;
continue;
} else {
}
break;
}

var G__39547 = args39545.length;
switch (G__39547) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39545.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async39548 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39548 = (function (f,blockable,meta39549){
this.f = f;
this.blockable = blockable;
this.meta39549 = meta39549;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39548.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39550,meta39549__$1){
var self__ = this;
var _39550__$1 = this;
return (new cljs.core.async.t_cljs$core$async39548(self__.f,self__.blockable,meta39549__$1));
});

cljs.core.async.t_cljs$core$async39548.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39550){
var self__ = this;
var _39550__$1 = this;
return self__.meta39549;
});

cljs.core.async.t_cljs$core$async39548.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async39548.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39548.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async39548.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async39548.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta39549","meta39549",-947146275,null)], null);
});

cljs.core.async.t_cljs$core$async39548.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39548.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39548";

cljs.core.async.t_cljs$core$async39548.cljs$lang$ctorPrWriter = (function (this__18123__auto__,writer__18124__auto__,opt__18125__auto__){
return cljs.core._write.call(null,writer__18124__auto__,"cljs.core.async/t_cljs$core$async39548");
});

cljs.core.async.__GT_t_cljs$core$async39548 = (function cljs$core$async$__GT_t_cljs$core$async39548(f__$1,blockable__$1,meta39549){
return (new cljs.core.async.t_cljs$core$async39548(f__$1,blockable__$1,meta39549));
});

}

return (new cljs.core.async.t_cljs$core$async39548(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args39557 = [];
var len__18583__auto___39560 = arguments.length;
var i__18584__auto___39561 = (0);
while(true){
if((i__18584__auto___39561 < len__18583__auto___39560)){
args39557.push((arguments[i__18584__auto___39561]));

var G__39562 = (i__18584__auto___39561 + (1));
i__18584__auto___39561 = G__39562;
continue;
} else {
}
break;
}

var G__39559 = args39557.length;
switch (G__39559) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39557.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args39564 = [];
var len__18583__auto___39567 = arguments.length;
var i__18584__auto___39568 = (0);
while(true){
if((i__18584__auto___39568 < len__18583__auto___39567)){
args39564.push((arguments[i__18584__auto___39568]));

var G__39569 = (i__18584__auto___39568 + (1));
i__18584__auto___39568 = G__39569;
continue;
} else {
}
break;
}

var G__39566 = args39564.length;
switch (G__39566) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39564.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args39571 = [];
var len__18583__auto___39574 = arguments.length;
var i__18584__auto___39575 = (0);
while(true){
if((i__18584__auto___39575 < len__18583__auto___39574)){
args39571.push((arguments[i__18584__auto___39575]));

var G__39576 = (i__18584__auto___39575 + (1));
i__18584__auto___39575 = G__39576;
continue;
} else {
}
break;
}

var G__39573 = args39571.length;
switch (G__39573) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39571.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_39578 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_39578);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_39578,ret){
return (function (){
return fn1.call(null,val_39578);
});})(val_39578,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args39579 = [];
var len__18583__auto___39582 = arguments.length;
var i__18584__auto___39583 = (0);
while(true){
if((i__18584__auto___39583 < len__18583__auto___39582)){
args39579.push((arguments[i__18584__auto___39583]));

var G__39584 = (i__18584__auto___39583 + (1));
i__18584__auto___39583 = G__39584;
continue;
} else {
}
break;
}

var G__39581 = args39579.length;
switch (G__39581) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39579.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__18428__auto___39586 = n;
var x_39587 = (0);
while(true){
if((x_39587 < n__18428__auto___39586)){
(a[x_39587] = (0));

var G__39588 = (x_39587 + (1));
x_39587 = G__39588;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__39589 = (i + (1));
i = G__39589;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async39593 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39593 = (function (alt_flag,flag,meta39594){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta39594 = meta39594;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_39595,meta39594__$1){
var self__ = this;
var _39595__$1 = this;
return (new cljs.core.async.t_cljs$core$async39593(self__.alt_flag,self__.flag,meta39594__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async39593.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_39595){
var self__ = this;
var _39595__$1 = this;
return self__.meta39594;
});})(flag))
;

cljs.core.async.t_cljs$core$async39593.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async39593.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async39593.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39593.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39593.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta39594","meta39594",1619395966,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async39593.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39593.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39593";

cljs.core.async.t_cljs$core$async39593.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18123__auto__,writer__18124__auto__,opt__18125__auto__){
return cljs.core._write.call(null,writer__18124__auto__,"cljs.core.async/t_cljs$core$async39593");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async39593 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async39593(alt_flag__$1,flag__$1,meta39594){
return (new cljs.core.async.t_cljs$core$async39593(alt_flag__$1,flag__$1,meta39594));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async39593(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async39599 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39599 = (function (alt_handler,flag,cb,meta39600){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta39600 = meta39600;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39601,meta39600__$1){
var self__ = this;
var _39601__$1 = this;
return (new cljs.core.async.t_cljs$core$async39599(self__.alt_handler,self__.flag,self__.cb,meta39600__$1));
});

cljs.core.async.t_cljs$core$async39599.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39601){
var self__ = this;
var _39601__$1 = this;
return self__.meta39600;
});

cljs.core.async.t_cljs$core$async39599.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async39599.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async39599.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39599.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async39599.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta39600","meta39600",917379637,null)], null);
});

cljs.core.async.t_cljs$core$async39599.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39599.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39599";

cljs.core.async.t_cljs$core$async39599.cljs$lang$ctorPrWriter = (function (this__18123__auto__,writer__18124__auto__,opt__18125__auto__){
return cljs.core._write.call(null,writer__18124__auto__,"cljs.core.async/t_cljs$core$async39599");
});

cljs.core.async.__GT_t_cljs$core$async39599 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async39599(alt_handler__$1,flag__$1,cb__$1,meta39600){
return (new cljs.core.async.t_cljs$core$async39599(alt_handler__$1,flag__$1,cb__$1,meta39600));
});

}

return (new cljs.core.async.t_cljs$core$async39599(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39602_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39602_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39603_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39603_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__17525__auto__ = wport;
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return port;
}
})()], null));
} else {
var G__39604 = (i + (1));
i = G__39604;
continue;
}
} else {
return null;
}
break;
}
})();
var or__17525__auto__ = ret;
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__17513__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__17513__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__17513__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__18590__auto__ = [];
var len__18583__auto___39610 = arguments.length;
var i__18584__auto___39611 = (0);
while(true){
if((i__18584__auto___39611 < len__18583__auto___39610)){
args__18590__auto__.push((arguments[i__18584__auto___39611]));

var G__39612 = (i__18584__auto___39611 + (1));
i__18584__auto___39611 = G__39612;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((1) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18591__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__39607){
var map__39608 = p__39607;
var map__39608__$1 = ((((!((map__39608 == null)))?((((map__39608.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39608.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39608):map__39608);
var opts = map__39608__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq39605){
var G__39606 = cljs.core.first.call(null,seq39605);
var seq39605__$1 = cljs.core.next.call(null,seq39605);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39606,seq39605__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args39613 = [];
var len__18583__auto___39663 = arguments.length;
var i__18584__auto___39664 = (0);
while(true){
if((i__18584__auto___39664 < len__18583__auto___39663)){
args39613.push((arguments[i__18584__auto___39664]));

var G__39665 = (i__18584__auto___39664 + (1));
i__18584__auto___39664 = G__39665;
continue;
} else {
}
break;
}

var G__39615 = args39613.length;
switch (G__39615) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39613.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19849__auto___39667 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19849__auto___39667){
return (function (){
var f__19850__auto__ = (function (){var switch__19828__auto__ = ((function (c__19849__auto___39667){
return (function (state_39639){
var state_val_39640 = (state_39639[(1)]);
if((state_val_39640 === (7))){
var inst_39635 = (state_39639[(2)]);
var state_39639__$1 = state_39639;
var statearr_39641_39668 = state_39639__$1;
(statearr_39641_39668[(2)] = inst_39635);

(statearr_39641_39668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39640 === (1))){
var state_39639__$1 = state_39639;
var statearr_39642_39669 = state_39639__$1;
(statearr_39642_39669[(2)] = null);

(statearr_39642_39669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39640 === (4))){
var inst_39618 = (state_39639[(7)]);
var inst_39618__$1 = (state_39639[(2)]);
var inst_39619 = (inst_39618__$1 == null);
var state_39639__$1 = (function (){var statearr_39643 = state_39639;
(statearr_39643[(7)] = inst_39618__$1);

return statearr_39643;
})();
if(cljs.core.truth_(inst_39619)){
var statearr_39644_39670 = state_39639__$1;
(statearr_39644_39670[(1)] = (5));

} else {
var statearr_39645_39671 = state_39639__$1;
(statearr_39645_39671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39640 === (13))){
var state_39639__$1 = state_39639;
var statearr_39646_39672 = state_39639__$1;
(statearr_39646_39672[(2)] = null);

(statearr_39646_39672[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39640 === (6))){
var inst_39618 = (state_39639[(7)]);
var state_39639__$1 = state_39639;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39639__$1,(11),to,inst_39618);
} else {
if((state_val_39640 === (3))){
var inst_39637 = (state_39639[(2)]);
var state_39639__$1 = state_39639;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39639__$1,inst_39637);
} else {
if((state_val_39640 === (12))){
var state_39639__$1 = state_39639;
var statearr_39647_39673 = state_39639__$1;
(statearr_39647_39673[(2)] = null);

(statearr_39647_39673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39640 === (2))){
var state_39639__$1 = state_39639;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39639__$1,(4),from);
} else {
if((state_val_39640 === (11))){
var inst_39628 = (state_39639[(2)]);
var state_39639__$1 = state_39639;
if(cljs.core.truth_(inst_39628)){
var statearr_39648_39674 = state_39639__$1;
(statearr_39648_39674[(1)] = (12));

} else {
var statearr_39649_39675 = state_39639__$1;
(statearr_39649_39675[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39640 === (9))){
var state_39639__$1 = state_39639;
var statearr_39650_39676 = state_39639__$1;
(statearr_39650_39676[(2)] = null);

(statearr_39650_39676[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39640 === (5))){
var state_39639__$1 = state_39639;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39651_39677 = state_39639__$1;
(statearr_39651_39677[(1)] = (8));

} else {
var statearr_39652_39678 = state_39639__$1;
(statearr_39652_39678[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39640 === (14))){
var inst_39633 = (state_39639[(2)]);
var state_39639__$1 = state_39639;
var statearr_39653_39679 = state_39639__$1;
(statearr_39653_39679[(2)] = inst_39633);

(statearr_39653_39679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39640 === (10))){
var inst_39625 = (state_39639[(2)]);
var state_39639__$1 = state_39639;
var statearr_39654_39680 = state_39639__$1;
(statearr_39654_39680[(2)] = inst_39625);

(statearr_39654_39680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39640 === (8))){
var inst_39622 = cljs.core.async.close_BANG_.call(null,to);
var state_39639__$1 = state_39639;
var statearr_39655_39681 = state_39639__$1;
(statearr_39655_39681[(2)] = inst_39622);

(statearr_39655_39681[(1)] = (10));


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
});})(c__19849__auto___39667))
;
return ((function (switch__19828__auto__,c__19849__auto___39667){
return (function() {
var cljs$core$async$state_machine__19829__auto__ = null;
var cljs$core$async$state_machine__19829__auto____0 = (function (){
var statearr_39659 = [null,null,null,null,null,null,null,null];
(statearr_39659[(0)] = cljs$core$async$state_machine__19829__auto__);

(statearr_39659[(1)] = (1));

return statearr_39659;
});
var cljs$core$async$state_machine__19829__auto____1 = (function (state_39639){
while(true){
var ret_value__19830__auto__ = (function (){try{while(true){
var result__19831__auto__ = switch__19828__auto__.call(null,state_39639);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19831__auto__;
}
break;
}
}catch (e39660){if((e39660 instanceof Object)){
var ex__19832__auto__ = e39660;
var statearr_39661_39682 = state_39639;
(statearr_39661_39682[(5)] = ex__19832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39683 = state_39639;
state_39639 = G__39683;
continue;
} else {
return ret_value__19830__auto__;
}
break;
}
});
cljs$core$async$state_machine__19829__auto__ = function(state_39639){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19829__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19829__auto____1.call(this,state_39639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19829__auto____0;
cljs$core$async$state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19829__auto____1;
return cljs$core$async$state_machine__19829__auto__;
})()
;})(switch__19828__auto__,c__19849__auto___39667))
})();
var state__19851__auto__ = (function (){var statearr_39662 = f__19850__auto__.call(null);
(statearr_39662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19849__auto___39667);

return statearr_39662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19851__auto__);
});})(c__19849__auto___39667))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__39867){
var vec__39868 = p__39867;
var v = cljs.core.nth.call(null,vec__39868,(0),null);
var p = cljs.core.nth.call(null,vec__39868,(1),null);
var job = vec__39868;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19849__auto___40050 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19849__auto___40050,res,vec__39868,v,p,job,jobs,results){
return (function (){
var f__19850__auto__ = (function (){var switch__19828__auto__ = ((function (c__19849__auto___40050,res,vec__39868,v,p,job,jobs,results){
return (function (state_39873){
var state_val_39874 = (state_39873[(1)]);
if((state_val_39874 === (1))){
var state_39873__$1 = state_39873;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39873__$1,(2),res,v);
} else {
if((state_val_39874 === (2))){
var inst_39870 = (state_39873[(2)]);
var inst_39871 = cljs.core.async.close_BANG_.call(null,res);
var state_39873__$1 = (function (){var statearr_39875 = state_39873;
(statearr_39875[(7)] = inst_39870);

return statearr_39875;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39873__$1,inst_39871);
} else {
return null;
}
}
});})(c__19849__auto___40050,res,vec__39868,v,p,job,jobs,results))
;
return ((function (switch__19828__auto__,c__19849__auto___40050,res,vec__39868,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19829__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19829__auto____0 = (function (){
var statearr_39879 = [null,null,null,null,null,null,null,null];
(statearr_39879[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19829__auto__);

(statearr_39879[(1)] = (1));

return statearr_39879;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19829__auto____1 = (function (state_39873){
while(true){
var ret_value__19830__auto__ = (function (){try{while(true){
var result__19831__auto__ = switch__19828__auto__.call(null,state_39873);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19831__auto__;
}
break;
}
}catch (e39880){if((e39880 instanceof Object)){
var ex__19832__auto__ = e39880;
var statearr_39881_40051 = state_39873;
(statearr_39881_40051[(5)] = ex__19832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39880;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40052 = state_39873;
state_39873 = G__40052;
continue;
} else {
return ret_value__19830__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19829__auto__ = function(state_39873){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19829__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19829__auto____1.call(this,state_39873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19829__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19829__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19829__auto__;
})()
;})(switch__19828__auto__,c__19849__auto___40050,res,vec__39868,v,p,job,jobs,results))
})();
var state__19851__auto__ = (function (){var statearr_39882 = f__19850__auto__.call(null);
(statearr_39882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19849__auto___40050);

return statearr_39882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19851__auto__);
});})(c__19849__auto___40050,res,vec__39868,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__39883){
var vec__39884 = p__39883;
var v = cljs.core.nth.call(null,vec__39884,(0),null);
var p = cljs.core.nth.call(null,vec__39884,(1),null);
var job = vec__39884;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__18428__auto___40053 = n;
var __40054 = (0);
while(true){
if((__40054 < n__18428__auto___40053)){
var G__39885_40055 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__39885_40055) {
case "compute":
var c__19849__auto___40057 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__40054,c__19849__auto___40057,G__39885_40055,n__18428__auto___40053,jobs,results,process,async){
return (function (){
var f__19850__auto__ = (function (){var switch__19828__auto__ = ((function (__40054,c__19849__auto___40057,G__39885_40055,n__18428__auto___40053,jobs,results,process,async){
return (function (state_39898){
var state_val_39899 = (state_39898[(1)]);
if((state_val_39899 === (1))){
var state_39898__$1 = state_39898;
var statearr_39900_40058 = state_39898__$1;
(statearr_39900_40058[(2)] = null);

(statearr_39900_40058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39899 === (2))){
var state_39898__$1 = state_39898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39898__$1,(4),jobs);
} else {
if((state_val_39899 === (3))){
var inst_39896 = (state_39898[(2)]);
var state_39898__$1 = state_39898;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39898__$1,inst_39896);
} else {
if((state_val_39899 === (4))){
var inst_39888 = (state_39898[(2)]);
var inst_39889 = process.call(null,inst_39888);
var state_39898__$1 = state_39898;
if(cljs.core.truth_(inst_39889)){
var statearr_39901_40059 = state_39898__$1;
(statearr_39901_40059[(1)] = (5));

} else {
var statearr_39902_40060 = state_39898__$1;
(statearr_39902_40060[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39899 === (5))){
var state_39898__$1 = state_39898;
var statearr_39903_40061 = state_39898__$1;
(statearr_39903_40061[(2)] = null);

(statearr_39903_40061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39899 === (6))){
var state_39898__$1 = state_39898;
var statearr_39904_40062 = state_39898__$1;
(statearr_39904_40062[(2)] = null);

(statearr_39904_40062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39899 === (7))){
var inst_39894 = (state_39898[(2)]);
var state_39898__$1 = state_39898;
var statearr_39905_40063 = state_39898__$1;
(statearr_39905_40063[(2)] = inst_39894);

(statearr_39905_40063[(1)] = (3));


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
});})(__40054,c__19849__auto___40057,G__39885_40055,n__18428__auto___40053,jobs,results,process,async))
;
return ((function (__40054,switch__19828__auto__,c__19849__auto___40057,G__39885_40055,n__18428__auto___40053,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19829__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19829__auto____0 = (function (){
var statearr_39909 = [null,null,null,null,null,null,null];
(statearr_39909[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19829__auto__);

(statearr_39909[(1)] = (1));

return statearr_39909;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19829__auto____1 = (function (state_39898){
while(true){
var ret_value__19830__auto__ = (function (){try{while(true){
var result__19831__auto__ = switch__19828__auto__.call(null,state_39898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19831__auto__;
}
break;
}
}catch (e39910){if((e39910 instanceof Object)){
var ex__19832__auto__ = e39910;
var statearr_39911_40064 = state_39898;
(statearr_39911_40064[(5)] = ex__19832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40065 = state_39898;
state_39898 = G__40065;
continue;
} else {
return ret_value__19830__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19829__auto__ = function(state_39898){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19829__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19829__auto____1.call(this,state_39898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19829__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19829__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19829__auto__;
})()
;})(__40054,switch__19828__auto__,c__19849__auto___40057,G__39885_40055,n__18428__auto___40053,jobs,results,process,async))
})();
var state__19851__auto__ = (function (){var statearr_39912 = f__19850__auto__.call(null);
(statearr_39912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19849__auto___40057);

return statearr_39912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19851__auto__);
});})(__40054,c__19849__auto___40057,G__39885_40055,n__18428__auto___40053,jobs,results,process,async))
);


break;
case "async":
var c__19849__auto___40066 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__40054,c__19849__auto___40066,G__39885_40055,n__18428__auto___40053,jobs,results,process,async){
return (function (){
var f__19850__auto__ = (function (){var switch__19828__auto__ = ((function (__40054,c__19849__auto___40066,G__39885_40055,n__18428__auto___40053,jobs,results,process,async){
return (function (state_39925){
var state_val_39926 = (state_39925[(1)]);
if((state_val_39926 === (1))){
var state_39925__$1 = state_39925;
var statearr_39927_40067 = state_39925__$1;
(statearr_39927_40067[(2)] = null);

(statearr_39927_40067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39926 === (2))){
var state_39925__$1 = state_39925;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39925__$1,(4),jobs);
} else {
if((state_val_39926 === (3))){
var inst_39923 = (state_39925[(2)]);
var state_39925__$1 = state_39925;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39925__$1,inst_39923);
} else {
if((state_val_39926 === (4))){
var inst_39915 = (state_39925[(2)]);
var inst_39916 = async.call(null,inst_39915);
var state_39925__$1 = state_39925;
if(cljs.core.truth_(inst_39916)){
var statearr_39928_40068 = state_39925__$1;
(statearr_39928_40068[(1)] = (5));

} else {
var statearr_39929_40069 = state_39925__$1;
(statearr_39929_40069[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39926 === (5))){
var state_39925__$1 = state_39925;
var statearr_39930_40070 = state_39925__$1;
(statearr_39930_40070[(2)] = null);

(statearr_39930_40070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39926 === (6))){
var state_39925__$1 = state_39925;
var statearr_39931_40071 = state_39925__$1;
(statearr_39931_40071[(2)] = null);

(statearr_39931_40071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39926 === (7))){
var inst_39921 = (state_39925[(2)]);
var state_39925__$1 = state_39925;
var statearr_39932_40072 = state_39925__$1;
(statearr_39932_40072[(2)] = inst_39921);

(statearr_39932_40072[(1)] = (3));


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
});})(__40054,c__19849__auto___40066,G__39885_40055,n__18428__auto___40053,jobs,results,process,async))
;
return ((function (__40054,switch__19828__auto__,c__19849__auto___40066,G__39885_40055,n__18428__auto___40053,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19829__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19829__auto____0 = (function (){
var statearr_39936 = [null,null,null,null,null,null,null];
(statearr_39936[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19829__auto__);

(statearr_39936[(1)] = (1));

return statearr_39936;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19829__auto____1 = (function (state_39925){
while(true){
var ret_value__19830__auto__ = (function (){try{while(true){
var result__19831__auto__ = switch__19828__auto__.call(null,state_39925);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19831__auto__;
}
break;
}
}catch (e39937){if((e39937 instanceof Object)){
var ex__19832__auto__ = e39937;
var statearr_39938_40073 = state_39925;
(statearr_39938_40073[(5)] = ex__19832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39937;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40074 = state_39925;
state_39925 = G__40074;
continue;
} else {
return ret_value__19830__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19829__auto__ = function(state_39925){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19829__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19829__auto____1.call(this,state_39925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19829__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19829__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19829__auto__;
})()
;})(__40054,switch__19828__auto__,c__19849__auto___40066,G__39885_40055,n__18428__auto___40053,jobs,results,process,async))
})();
var state__19851__auto__ = (function (){var statearr_39939 = f__19850__auto__.call(null);
(statearr_39939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19849__auto___40066);

return statearr_39939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19851__auto__);
});})(__40054,c__19849__auto___40066,G__39885_40055,n__18428__auto___40053,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__40075 = (__40054 + (1));
__40054 = G__40075;
continue;
} else {
}
break;
}

var c__19849__auto___40076 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19849__auto___40076,jobs,results,process,async){
return (function (){
var f__19850__auto__ = (function (){var switch__19828__auto__ = ((function (c__19849__auto___40076,jobs,results,process,async){
return (function (state_40031){
var state_val_40032 = (state_40031[(1)]);
if((state_val_40032 === (1))){
var state_40031__$1 = state_40031;
var statearr_40033_40077 = state_40031__$1;
(statearr_40033_40077[(2)] = null);

(statearr_40033_40077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40032 === (2))){
var state_40031__$1 = state_40031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40031__$1,(4),from);
} else {
if((state_val_40032 === (3))){
var inst_40029 = (state_40031[(2)]);
var state_40031__$1 = state_40031;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40031__$1,inst_40029);
} else {
if((state_val_40032 === (4))){
var inst_40012 = (state_40031[(7)]);
var inst_40012__$1 = (state_40031[(2)]);
var inst_40013 = (inst_40012__$1 == null);
var state_40031__$1 = (function (){var statearr_40034 = state_40031;
(statearr_40034[(7)] = inst_40012__$1);

return statearr_40034;
})();
if(cljs.core.truth_(inst_40013)){
var statearr_40035_40078 = state_40031__$1;
(statearr_40035_40078[(1)] = (5));

} else {
var statearr_40036_40079 = state_40031__$1;
(statearr_40036_40079[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40032 === (5))){
var inst_40015 = cljs.core.async.close_BANG_.call(null,jobs);
var state_40031__$1 = state_40031;
var statearr_40037_40080 = state_40031__$1;
(statearr_40037_40080[(2)] = inst_40015);

(statearr_40037_40080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40032 === (6))){
var inst_40012 = (state_40031[(7)]);
var inst_40017 = (state_40031[(8)]);
var inst_40017__$1 = cljs.core.async.chan.call(null,(1));
var inst_40018 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40019 = [inst_40012,inst_40017__$1];
var inst_40020 = (new cljs.core.PersistentVector(null,2,(5),inst_40018,inst_40019,null));
var state_40031__$1 = (function (){var statearr_40038 = state_40031;
(statearr_40038[(8)] = inst_40017__$1);

return statearr_40038;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40031__$1,(8),jobs,inst_40020);
} else {
if((state_val_40032 === (7))){
var inst_40027 = (state_40031[(2)]);
var state_40031__$1 = state_40031;
var statearr_40039_40081 = state_40031__$1;
(statearr_40039_40081[(2)] = inst_40027);

(statearr_40039_40081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40032 === (8))){
var inst_40017 = (state_40031[(8)]);
var inst_40022 = (state_40031[(2)]);
var state_40031__$1 = (function (){var statearr_40040 = state_40031;
(statearr_40040[(9)] = inst_40022);

return statearr_40040;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40031__$1,(9),results,inst_40017);
} else {
if((state_val_40032 === (9))){
var inst_40024 = (state_40031[(2)]);
var state_40031__$1 = (function (){var statearr_40041 = state_40031;
(statearr_40041[(10)] = inst_40024);

return statearr_40041;
})();
var statearr_40042_40082 = state_40031__$1;
(statearr_40042_40082[(2)] = null);

(statearr_40042_40082[(1)] = (2));


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
});})(c__19849__auto___40076,jobs,results,process,async))
;
return ((function (switch__19828__auto__,c__19849__auto___40076,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19829__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19829__auto____0 = (function (){
var statearr_40046 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40046[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19829__auto__);

(statearr_40046[(1)] = (1));

return statearr_40046;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19829__auto____1 = (function (state_40031){
while(true){
var ret_value__19830__auto__ = (function (){try{while(true){
var result__19831__auto__ = switch__19828__auto__.call(null,state_40031);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19831__auto__;
}
break;
}
}catch (e40047){if((e40047 instanceof Object)){
var ex__19832__auto__ = e40047;
var statearr_40048_40083 = state_40031;
(statearr_40048_40083[(5)] = ex__19832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40047;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40084 = state_40031;
state_40031 = G__40084;
continue;
} else {
return ret_value__19830__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19829__auto__ = function(state_40031){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19829__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19829__auto____1.call(this,state_40031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19829__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19829__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19829__auto__;
})()
;})(switch__19828__auto__,c__19849__auto___40076,jobs,results,process,async))
})();
var state__19851__auto__ = (function (){var statearr_40049 = f__19850__auto__.call(null);
(statearr_40049[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19849__auto___40076);

return statearr_40049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19851__auto__);
});})(c__19849__auto___40076,jobs,results,process,async))
);


var c__19849__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19849__auto__,jobs,results,process,async){
return (function (){
var f__19850__auto__ = (function (){var switch__19828__auto__ = ((function (c__19849__auto__,jobs,results,process,async){
return (function (state_39977){
var state_val_39978 = (state_39977[(1)]);
if((state_val_39978 === (7))){
var inst_39973 = (state_39977[(2)]);
var state_39977__$1 = state_39977;
var statearr_39979_40085 = state_39977__$1;
(statearr_39979_40085[(2)] = inst_39973);

(statearr_39979_40085[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39978 === (20))){
var state_39977__$1 = state_39977;
var statearr_39980_40086 = state_39977__$1;
(statearr_39980_40086[(2)] = null);

(statearr_39980_40086[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39978 === (1))){
var state_39977__$1 = state_39977;
var statearr_39981_40087 = state_39977__$1;
(statearr_39981_40087[(2)] = null);

(statearr_39981_40087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39978 === (4))){
var inst_39942 = (state_39977[(7)]);
var inst_39942__$1 = (state_39977[(2)]);
var inst_39943 = (inst_39942__$1 == null);
var state_39977__$1 = (function (){var statearr_39982 = state_39977;
(statearr_39982[(7)] = inst_39942__$1);

return statearr_39982;
})();
if(cljs.core.truth_(inst_39943)){
var statearr_39983_40088 = state_39977__$1;
(statearr_39983_40088[(1)] = (5));

} else {
var statearr_39984_40089 = state_39977__$1;
(statearr_39984_40089[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39978 === (15))){
var inst_39955 = (state_39977[(8)]);
var state_39977__$1 = state_39977;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39977__$1,(18),to,inst_39955);
} else {
if((state_val_39978 === (21))){
var inst_39968 = (state_39977[(2)]);
var state_39977__$1 = state_39977;
var statearr_39985_40090 = state_39977__$1;
(statearr_39985_40090[(2)] = inst_39968);

(statearr_39985_40090[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39978 === (13))){
var inst_39970 = (state_39977[(2)]);
var state_39977__$1 = (function (){var statearr_39986 = state_39977;
(statearr_39986[(9)] = inst_39970);

return statearr_39986;
})();
var statearr_39987_40091 = state_39977__$1;
(statearr_39987_40091[(2)] = null);

(statearr_39987_40091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39978 === (6))){
var inst_39942 = (state_39977[(7)]);
var state_39977__$1 = state_39977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39977__$1,(11),inst_39942);
} else {
if((state_val_39978 === (17))){
var inst_39963 = (state_39977[(2)]);
var state_39977__$1 = state_39977;
if(cljs.core.truth_(inst_39963)){
var statearr_39988_40092 = state_39977__$1;
(statearr_39988_40092[(1)] = (19));

} else {
var statearr_39989_40093 = state_39977__$1;
(statearr_39989_40093[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39978 === (3))){
var inst_39975 = (state_39977[(2)]);
var state_39977__$1 = state_39977;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39977__$1,inst_39975);
} else {
if((state_val_39978 === (12))){
var inst_39952 = (state_39977[(10)]);
var state_39977__$1 = state_39977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39977__$1,(14),inst_39952);
} else {
if((state_val_39978 === (2))){
var state_39977__$1 = state_39977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39977__$1,(4),results);
} else {
if((state_val_39978 === (19))){
var state_39977__$1 = state_39977;
var statearr_39990_40094 = state_39977__$1;
(statearr_39990_40094[(2)] = null);

(statearr_39990_40094[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39978 === (11))){
var inst_39952 = (state_39977[(2)]);
var state_39977__$1 = (function (){var statearr_39991 = state_39977;
(statearr_39991[(10)] = inst_39952);

return statearr_39991;
})();
var statearr_39992_40095 = state_39977__$1;
(statearr_39992_40095[(2)] = null);

(statearr_39992_40095[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39978 === (9))){
var state_39977__$1 = state_39977;
var statearr_39993_40096 = state_39977__$1;
(statearr_39993_40096[(2)] = null);

(statearr_39993_40096[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39978 === (5))){
var state_39977__$1 = state_39977;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39994_40097 = state_39977__$1;
(statearr_39994_40097[(1)] = (8));

} else {
var statearr_39995_40098 = state_39977__$1;
(statearr_39995_40098[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39978 === (14))){
var inst_39955 = (state_39977[(8)]);
var inst_39957 = (state_39977[(11)]);
var inst_39955__$1 = (state_39977[(2)]);
var inst_39956 = (inst_39955__$1 == null);
var inst_39957__$1 = cljs.core.not.call(null,inst_39956);
var state_39977__$1 = (function (){var statearr_39996 = state_39977;
(statearr_39996[(8)] = inst_39955__$1);

(statearr_39996[(11)] = inst_39957__$1);

return statearr_39996;
})();
if(inst_39957__$1){
var statearr_39997_40099 = state_39977__$1;
(statearr_39997_40099[(1)] = (15));

} else {
var statearr_39998_40100 = state_39977__$1;
(statearr_39998_40100[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39978 === (16))){
var inst_39957 = (state_39977[(11)]);
var state_39977__$1 = state_39977;
var statearr_39999_40101 = state_39977__$1;
(statearr_39999_40101[(2)] = inst_39957);

(statearr_39999_40101[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39978 === (10))){
var inst_39949 = (state_39977[(2)]);
var state_39977__$1 = state_39977;
var statearr_40000_40102 = state_39977__$1;
(statearr_40000_40102[(2)] = inst_39949);

(statearr_40000_40102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39978 === (18))){
var inst_39960 = (state_39977[(2)]);
var state_39977__$1 = state_39977;
var statearr_40001_40103 = state_39977__$1;
(statearr_40001_40103[(2)] = inst_39960);

(statearr_40001_40103[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39978 === (8))){
var inst_39946 = cljs.core.async.close_BANG_.call(null,to);
var state_39977__$1 = state_39977;
var statearr_40002_40104 = state_39977__$1;
(statearr_40002_40104[(2)] = inst_39946);

(statearr_40002_40104[(1)] = (10));


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
});})(c__19849__auto__,jobs,results,process,async))
;
return ((function (switch__19828__auto__,c__19849__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19829__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19829__auto____0 = (function (){
var statearr_40006 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40006[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19829__auto__);

(statearr_40006[(1)] = (1));

return statearr_40006;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19829__auto____1 = (function (state_39977){
while(true){
var ret_value__19830__auto__ = (function (){try{while(true){
var result__19831__auto__ = switch__19828__auto__.call(null,state_39977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19831__auto__;
}
break;
}
}catch (e40007){if((e40007 instanceof Object)){
var ex__19832__auto__ = e40007;
var statearr_40008_40105 = state_39977;
(statearr_40008_40105[(5)] = ex__19832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40106 = state_39977;
state_39977 = G__40106;
continue;
} else {
return ret_value__19830__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19829__auto__ = function(state_39977){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19829__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19829__auto____1.call(this,state_39977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19829__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19829__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19829__auto__;
})()
;})(switch__19828__auto__,c__19849__auto__,jobs,results,process,async))
})();
var state__19851__auto__ = (function (){var statearr_40009 = f__19850__auto__.call(null);
(statearr_40009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19849__auto__);

return statearr_40009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19851__auto__);
});})(c__19849__auto__,jobs,results,process,async))
);

return c__19849__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args40107 = [];
var len__18583__auto___40110 = arguments.length;
var i__18584__auto___40111 = (0);
while(true){
if((i__18584__auto___40111 < len__18583__auto___40110)){
args40107.push((arguments[i__18584__auto___40111]));

var G__40112 = (i__18584__auto___40111 + (1));
i__18584__auto___40111 = G__40112;
continue;
} else {
}
break;
}

var G__40109 = args40107.length;
switch (G__40109) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40107.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args40114 = [];
var len__18583__auto___40117 = arguments.length;
var i__18584__auto___40118 = (0);
while(true){
if((i__18584__auto___40118 < len__18583__auto___40117)){
args40114.push((arguments[i__18584__auto___40118]));

var G__40119 = (i__18584__auto___40118 + (1));
i__18584__auto___40118 = G__40119;
continue;
} else {
}
break;
}

var G__40116 = args40114.length;
switch (G__40116) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40114.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args40121 = [];
var len__18583__auto___40174 = arguments.length;
var i__18584__auto___40175 = (0);
while(true){
if((i__18584__auto___40175 < len__18583__auto___40174)){
args40121.push((arguments[i__18584__auto___40175]));

var G__40176 = (i__18584__auto___40175 + (1));
i__18584__auto___40175 = G__40176;
continue;
} else {
}
break;
}

var G__40123 = args40121.length;
switch (G__40123) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40121.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19849__auto___40178 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19849__auto___40178,tc,fc){
return (function (){
var f__19850__auto__ = (function (){var switch__19828__auto__ = ((function (c__19849__auto___40178,tc,fc){
return (function (state_40149){
var state_val_40150 = (state_40149[(1)]);
if((state_val_40150 === (7))){
var inst_40145 = (state_40149[(2)]);
var state_40149__$1 = state_40149;
var statearr_40151_40179 = state_40149__$1;
(statearr_40151_40179[(2)] = inst_40145);

(statearr_40151_40179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40150 === (1))){
var state_40149__$1 = state_40149;
var statearr_40152_40180 = state_40149__$1;
(statearr_40152_40180[(2)] = null);

(statearr_40152_40180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40150 === (4))){
var inst_40126 = (state_40149[(7)]);
var inst_40126__$1 = (state_40149[(2)]);
var inst_40127 = (inst_40126__$1 == null);
var state_40149__$1 = (function (){var statearr_40153 = state_40149;
(statearr_40153[(7)] = inst_40126__$1);

return statearr_40153;
})();
if(cljs.core.truth_(inst_40127)){
var statearr_40154_40181 = state_40149__$1;
(statearr_40154_40181[(1)] = (5));

} else {
var statearr_40155_40182 = state_40149__$1;
(statearr_40155_40182[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40150 === (13))){
var state_40149__$1 = state_40149;
var statearr_40156_40183 = state_40149__$1;
(statearr_40156_40183[(2)] = null);

(statearr_40156_40183[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40150 === (6))){
var inst_40126 = (state_40149[(7)]);
var inst_40132 = p.call(null,inst_40126);
var state_40149__$1 = state_40149;
if(cljs.core.truth_(inst_40132)){
var statearr_40157_40184 = state_40149__$1;
(statearr_40157_40184[(1)] = (9));

} else {
var statearr_40158_40185 = state_40149__$1;
(statearr_40158_40185[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40150 === (3))){
var inst_40147 = (state_40149[(2)]);
var state_40149__$1 = state_40149;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40149__$1,inst_40147);
} else {
if((state_val_40150 === (12))){
var state_40149__$1 = state_40149;
var statearr_40159_40186 = state_40149__$1;
(statearr_40159_40186[(2)] = null);

(statearr_40159_40186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40150 === (2))){
var state_40149__$1 = state_40149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40149__$1,(4),ch);
} else {
if((state_val_40150 === (11))){
var inst_40126 = (state_40149[(7)]);
var inst_40136 = (state_40149[(2)]);
var state_40149__$1 = state_40149;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40149__$1,(8),inst_40136,inst_40126);
} else {
if((state_val_40150 === (9))){
var state_40149__$1 = state_40149;
var statearr_40160_40187 = state_40149__$1;
(statearr_40160_40187[(2)] = tc);

(statearr_40160_40187[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40150 === (5))){
var inst_40129 = cljs.core.async.close_BANG_.call(null,tc);
var inst_40130 = cljs.core.async.close_BANG_.call(null,fc);
var state_40149__$1 = (function (){var statearr_40161 = state_40149;
(statearr_40161[(8)] = inst_40129);

return statearr_40161;
})();
var statearr_40162_40188 = state_40149__$1;
(statearr_40162_40188[(2)] = inst_40130);

(statearr_40162_40188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40150 === (14))){
var inst_40143 = (state_40149[(2)]);
var state_40149__$1 = state_40149;
var statearr_40163_40189 = state_40149__$1;
(statearr_40163_40189[(2)] = inst_40143);

(statearr_40163_40189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40150 === (10))){
var state_40149__$1 = state_40149;
var statearr_40164_40190 = state_40149__$1;
(statearr_40164_40190[(2)] = fc);

(statearr_40164_40190[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40150 === (8))){
var inst_40138 = (state_40149[(2)]);
var state_40149__$1 = state_40149;
if(cljs.core.truth_(inst_40138)){
var statearr_40165_40191 = state_40149__$1;
(statearr_40165_40191[(1)] = (12));

} else {
var statearr_40166_40192 = state_40149__$1;
(statearr_40166_40192[(1)] = (13));

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
});})(c__19849__auto___40178,tc,fc))
;
return ((function (switch__19828__auto__,c__19849__auto___40178,tc,fc){
return (function() {
var cljs$core$async$state_machine__19829__auto__ = null;
var cljs$core$async$state_machine__19829__auto____0 = (function (){
var statearr_40170 = [null,null,null,null,null,null,null,null,null];
(statearr_40170[(0)] = cljs$core$async$state_machine__19829__auto__);

(statearr_40170[(1)] = (1));

return statearr_40170;
});
var cljs$core$async$state_machine__19829__auto____1 = (function (state_40149){
while(true){
var ret_value__19830__auto__ = (function (){try{while(true){
var result__19831__auto__ = switch__19828__auto__.call(null,state_40149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19831__auto__;
}
break;
}
}catch (e40171){if((e40171 instanceof Object)){
var ex__19832__auto__ = e40171;
var statearr_40172_40193 = state_40149;
(statearr_40172_40193[(5)] = ex__19832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40194 = state_40149;
state_40149 = G__40194;
continue;
} else {
return ret_value__19830__auto__;
}
break;
}
});
cljs$core$async$state_machine__19829__auto__ = function(state_40149){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19829__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19829__auto____1.call(this,state_40149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19829__auto____0;
cljs$core$async$state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19829__auto____1;
return cljs$core$async$state_machine__19829__auto__;
})()
;})(switch__19828__auto__,c__19849__auto___40178,tc,fc))
})();
var state__19851__auto__ = (function (){var statearr_40173 = f__19850__auto__.call(null);
(statearr_40173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19849__auto___40178);

return statearr_40173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19851__auto__);
});})(c__19849__auto___40178,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19849__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19849__auto__){
return (function (){
var f__19850__auto__ = (function (){var switch__19828__auto__ = ((function (c__19849__auto__){
return (function (state_40258){
var state_val_40259 = (state_40258[(1)]);
if((state_val_40259 === (7))){
var inst_40254 = (state_40258[(2)]);
var state_40258__$1 = state_40258;
var statearr_40260_40281 = state_40258__$1;
(statearr_40260_40281[(2)] = inst_40254);

(statearr_40260_40281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40259 === (1))){
var inst_40238 = init;
var state_40258__$1 = (function (){var statearr_40261 = state_40258;
(statearr_40261[(7)] = inst_40238);

return statearr_40261;
})();
var statearr_40262_40282 = state_40258__$1;
(statearr_40262_40282[(2)] = null);

(statearr_40262_40282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40259 === (4))){
var inst_40241 = (state_40258[(8)]);
var inst_40241__$1 = (state_40258[(2)]);
var inst_40242 = (inst_40241__$1 == null);
var state_40258__$1 = (function (){var statearr_40263 = state_40258;
(statearr_40263[(8)] = inst_40241__$1);

return statearr_40263;
})();
if(cljs.core.truth_(inst_40242)){
var statearr_40264_40283 = state_40258__$1;
(statearr_40264_40283[(1)] = (5));

} else {
var statearr_40265_40284 = state_40258__$1;
(statearr_40265_40284[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40259 === (6))){
var inst_40245 = (state_40258[(9)]);
var inst_40238 = (state_40258[(7)]);
var inst_40241 = (state_40258[(8)]);
var inst_40245__$1 = f.call(null,inst_40238,inst_40241);
var inst_40246 = cljs.core.reduced_QMARK_.call(null,inst_40245__$1);
var state_40258__$1 = (function (){var statearr_40266 = state_40258;
(statearr_40266[(9)] = inst_40245__$1);

return statearr_40266;
})();
if(inst_40246){
var statearr_40267_40285 = state_40258__$1;
(statearr_40267_40285[(1)] = (8));

} else {
var statearr_40268_40286 = state_40258__$1;
(statearr_40268_40286[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40259 === (3))){
var inst_40256 = (state_40258[(2)]);
var state_40258__$1 = state_40258;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40258__$1,inst_40256);
} else {
if((state_val_40259 === (2))){
var state_40258__$1 = state_40258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40258__$1,(4),ch);
} else {
if((state_val_40259 === (9))){
var inst_40245 = (state_40258[(9)]);
var inst_40238 = inst_40245;
var state_40258__$1 = (function (){var statearr_40269 = state_40258;
(statearr_40269[(7)] = inst_40238);

return statearr_40269;
})();
var statearr_40270_40287 = state_40258__$1;
(statearr_40270_40287[(2)] = null);

(statearr_40270_40287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40259 === (5))){
var inst_40238 = (state_40258[(7)]);
var state_40258__$1 = state_40258;
var statearr_40271_40288 = state_40258__$1;
(statearr_40271_40288[(2)] = inst_40238);

(statearr_40271_40288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40259 === (10))){
var inst_40252 = (state_40258[(2)]);
var state_40258__$1 = state_40258;
var statearr_40272_40289 = state_40258__$1;
(statearr_40272_40289[(2)] = inst_40252);

(statearr_40272_40289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40259 === (8))){
var inst_40245 = (state_40258[(9)]);
var inst_40248 = cljs.core.deref.call(null,inst_40245);
var state_40258__$1 = state_40258;
var statearr_40273_40290 = state_40258__$1;
(statearr_40273_40290[(2)] = inst_40248);

(statearr_40273_40290[(1)] = (10));


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
});})(c__19849__auto__))
;
return ((function (switch__19828__auto__,c__19849__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19829__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19829__auto____0 = (function (){
var statearr_40277 = [null,null,null,null,null,null,null,null,null,null];
(statearr_40277[(0)] = cljs$core$async$reduce_$_state_machine__19829__auto__);

(statearr_40277[(1)] = (1));

return statearr_40277;
});
var cljs$core$async$reduce_$_state_machine__19829__auto____1 = (function (state_40258){
while(true){
var ret_value__19830__auto__ = (function (){try{while(true){
var result__19831__auto__ = switch__19828__auto__.call(null,state_40258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19831__auto__;
}
break;
}
}catch (e40278){if((e40278 instanceof Object)){
var ex__19832__auto__ = e40278;
var statearr_40279_40291 = state_40258;
(statearr_40279_40291[(5)] = ex__19832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40278;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40292 = state_40258;
state_40258 = G__40292;
continue;
} else {
return ret_value__19830__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19829__auto__ = function(state_40258){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19829__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19829__auto____1.call(this,state_40258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19829__auto____0;
cljs$core$async$reduce_$_state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19829__auto____1;
return cljs$core$async$reduce_$_state_machine__19829__auto__;
})()
;})(switch__19828__auto__,c__19849__auto__))
})();
var state__19851__auto__ = (function (){var statearr_40280 = f__19850__auto__.call(null);
(statearr_40280[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19849__auto__);

return statearr_40280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19851__auto__);
});})(c__19849__auto__))
);

return c__19849__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args40293 = [];
var len__18583__auto___40345 = arguments.length;
var i__18584__auto___40346 = (0);
while(true){
if((i__18584__auto___40346 < len__18583__auto___40345)){
args40293.push((arguments[i__18584__auto___40346]));

var G__40347 = (i__18584__auto___40346 + (1));
i__18584__auto___40346 = G__40347;
continue;
} else {
}
break;
}

var G__40295 = args40293.length;
switch (G__40295) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40293.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19849__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19849__auto__){
return (function (){
var f__19850__auto__ = (function (){var switch__19828__auto__ = ((function (c__19849__auto__){
return (function (state_40320){
var state_val_40321 = (state_40320[(1)]);
if((state_val_40321 === (7))){
var inst_40302 = (state_40320[(2)]);
var state_40320__$1 = state_40320;
var statearr_40322_40349 = state_40320__$1;
(statearr_40322_40349[(2)] = inst_40302);

(statearr_40322_40349[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40321 === (1))){
var inst_40296 = cljs.core.seq.call(null,coll);
var inst_40297 = inst_40296;
var state_40320__$1 = (function (){var statearr_40323 = state_40320;
(statearr_40323[(7)] = inst_40297);

return statearr_40323;
})();
var statearr_40324_40350 = state_40320__$1;
(statearr_40324_40350[(2)] = null);

(statearr_40324_40350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40321 === (4))){
var inst_40297 = (state_40320[(7)]);
var inst_40300 = cljs.core.first.call(null,inst_40297);
var state_40320__$1 = state_40320;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40320__$1,(7),ch,inst_40300);
} else {
if((state_val_40321 === (13))){
var inst_40314 = (state_40320[(2)]);
var state_40320__$1 = state_40320;
var statearr_40325_40351 = state_40320__$1;
(statearr_40325_40351[(2)] = inst_40314);

(statearr_40325_40351[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40321 === (6))){
var inst_40305 = (state_40320[(2)]);
var state_40320__$1 = state_40320;
if(cljs.core.truth_(inst_40305)){
var statearr_40326_40352 = state_40320__$1;
(statearr_40326_40352[(1)] = (8));

} else {
var statearr_40327_40353 = state_40320__$1;
(statearr_40327_40353[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40321 === (3))){
var inst_40318 = (state_40320[(2)]);
var state_40320__$1 = state_40320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40320__$1,inst_40318);
} else {
if((state_val_40321 === (12))){
var state_40320__$1 = state_40320;
var statearr_40328_40354 = state_40320__$1;
(statearr_40328_40354[(2)] = null);

(statearr_40328_40354[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40321 === (2))){
var inst_40297 = (state_40320[(7)]);
var state_40320__$1 = state_40320;
if(cljs.core.truth_(inst_40297)){
var statearr_40329_40355 = state_40320__$1;
(statearr_40329_40355[(1)] = (4));

} else {
var statearr_40330_40356 = state_40320__$1;
(statearr_40330_40356[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40321 === (11))){
var inst_40311 = cljs.core.async.close_BANG_.call(null,ch);
var state_40320__$1 = state_40320;
var statearr_40331_40357 = state_40320__$1;
(statearr_40331_40357[(2)] = inst_40311);

(statearr_40331_40357[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40321 === (9))){
var state_40320__$1 = state_40320;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40332_40358 = state_40320__$1;
(statearr_40332_40358[(1)] = (11));

} else {
var statearr_40333_40359 = state_40320__$1;
(statearr_40333_40359[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40321 === (5))){
var inst_40297 = (state_40320[(7)]);
var state_40320__$1 = state_40320;
var statearr_40334_40360 = state_40320__$1;
(statearr_40334_40360[(2)] = inst_40297);

(statearr_40334_40360[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40321 === (10))){
var inst_40316 = (state_40320[(2)]);
var state_40320__$1 = state_40320;
var statearr_40335_40361 = state_40320__$1;
(statearr_40335_40361[(2)] = inst_40316);

(statearr_40335_40361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40321 === (8))){
var inst_40297 = (state_40320[(7)]);
var inst_40307 = cljs.core.next.call(null,inst_40297);
var inst_40297__$1 = inst_40307;
var state_40320__$1 = (function (){var statearr_40336 = state_40320;
(statearr_40336[(7)] = inst_40297__$1);

return statearr_40336;
})();
var statearr_40337_40362 = state_40320__$1;
(statearr_40337_40362[(2)] = null);

(statearr_40337_40362[(1)] = (2));


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
});})(c__19849__auto__))
;
return ((function (switch__19828__auto__,c__19849__auto__){
return (function() {
var cljs$core$async$state_machine__19829__auto__ = null;
var cljs$core$async$state_machine__19829__auto____0 = (function (){
var statearr_40341 = [null,null,null,null,null,null,null,null];
(statearr_40341[(0)] = cljs$core$async$state_machine__19829__auto__);

(statearr_40341[(1)] = (1));

return statearr_40341;
});
var cljs$core$async$state_machine__19829__auto____1 = (function (state_40320){
while(true){
var ret_value__19830__auto__ = (function (){try{while(true){
var result__19831__auto__ = switch__19828__auto__.call(null,state_40320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19831__auto__;
}
break;
}
}catch (e40342){if((e40342 instanceof Object)){
var ex__19832__auto__ = e40342;
var statearr_40343_40363 = state_40320;
(statearr_40343_40363[(5)] = ex__19832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40364 = state_40320;
state_40320 = G__40364;
continue;
} else {
return ret_value__19830__auto__;
}
break;
}
});
cljs$core$async$state_machine__19829__auto__ = function(state_40320){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19829__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19829__auto____1.call(this,state_40320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19829__auto____0;
cljs$core$async$state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19829__auto____1;
return cljs$core$async$state_machine__19829__auto__;
})()
;})(switch__19828__auto__,c__19849__auto__))
})();
var state__19851__auto__ = (function (){var statearr_40344 = f__19850__auto__.call(null);
(statearr_40344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19849__auto__);

return statearr_40344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19851__auto__);
});})(c__19849__auto__))
);

return c__19849__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18180__auto__ = (((_ == null))?null:_);
var m__18181__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18180__auto__)]);
if(!((m__18181__auto__ == null))){
return m__18181__auto__.call(null,_);
} else {
var m__18181__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__18181__auto____$1 == null))){
return m__18181__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18180__auto__ = (((m == null))?null:m);
var m__18181__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18180__auto__)]);
if(!((m__18181__auto__ == null))){
return m__18181__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__18181__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__18181__auto____$1 == null))){
return m__18181__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18180__auto__ = (((m == null))?null:m);
var m__18181__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18180__auto__)]);
if(!((m__18181__auto__ == null))){
return m__18181__auto__.call(null,m,ch);
} else {
var m__18181__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__18181__auto____$1 == null))){
return m__18181__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18180__auto__ = (((m == null))?null:m);
var m__18181__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18180__auto__)]);
if(!((m__18181__auto__ == null))){
return m__18181__auto__.call(null,m);
} else {
var m__18181__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__18181__auto____$1 == null))){
return m__18181__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async40586 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40586 = (function (mult,ch,cs,meta40587){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta40587 = meta40587;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_40588,meta40587__$1){
var self__ = this;
var _40588__$1 = this;
return (new cljs.core.async.t_cljs$core$async40586(self__.mult,self__.ch,self__.cs,meta40587__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async40586.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_40588){
var self__ = this;
var _40588__$1 = this;
return self__.meta40587;
});})(cs))
;

cljs.core.async.t_cljs$core$async40586.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async40586.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async40586.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async40586.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40586.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40586.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40586.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta40587","meta40587",836054805,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async40586.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40586.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40586";

cljs.core.async.t_cljs$core$async40586.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18123__auto__,writer__18124__auto__,opt__18125__auto__){
return cljs.core._write.call(null,writer__18124__auto__,"cljs.core.async/t_cljs$core$async40586");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async40586 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async40586(mult__$1,ch__$1,cs__$1,meta40587){
return (new cljs.core.async.t_cljs$core$async40586(mult__$1,ch__$1,cs__$1,meta40587));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async40586(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19849__auto___40807 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19849__auto___40807,cs,m,dchan,dctr,done){
return (function (){
var f__19850__auto__ = (function (){var switch__19828__auto__ = ((function (c__19849__auto___40807,cs,m,dchan,dctr,done){
return (function (state_40719){
var state_val_40720 = (state_40719[(1)]);
if((state_val_40720 === (7))){
var inst_40715 = (state_40719[(2)]);
var state_40719__$1 = state_40719;
var statearr_40721_40808 = state_40719__$1;
(statearr_40721_40808[(2)] = inst_40715);

(statearr_40721_40808[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40720 === (20))){
var inst_40620 = (state_40719[(7)]);
var inst_40630 = cljs.core.first.call(null,inst_40620);
var inst_40631 = cljs.core.nth.call(null,inst_40630,(0),null);
var inst_40632 = cljs.core.nth.call(null,inst_40630,(1),null);
var state_40719__$1 = (function (){var statearr_40722 = state_40719;
(statearr_40722[(8)] = inst_40631);

return statearr_40722;
})();
if(cljs.core.truth_(inst_40632)){
var statearr_40723_40809 = state_40719__$1;
(statearr_40723_40809[(1)] = (22));

} else {
var statearr_40724_40810 = state_40719__$1;
(statearr_40724_40810[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40720 === (27))){
var inst_40591 = (state_40719[(9)]);
var inst_40662 = (state_40719[(10)]);
var inst_40667 = (state_40719[(11)]);
var inst_40660 = (state_40719[(12)]);
var inst_40667__$1 = cljs.core._nth.call(null,inst_40660,inst_40662);
var inst_40668 = cljs.core.async.put_BANG_.call(null,inst_40667__$1,inst_40591,done);
var state_40719__$1 = (function (){var statearr_40725 = state_40719;
(statearr_40725[(11)] = inst_40667__$1);

return statearr_40725;
})();
if(cljs.core.truth_(inst_40668)){
var statearr_40726_40811 = state_40719__$1;
(statearr_40726_40811[(1)] = (30));

} else {
var statearr_40727_40812 = state_40719__$1;
(statearr_40727_40812[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40720 === (1))){
var state_40719__$1 = state_40719;
var statearr_40728_40813 = state_40719__$1;
(statearr_40728_40813[(2)] = null);

(statearr_40728_40813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40720 === (24))){
var inst_40620 = (state_40719[(7)]);
var inst_40637 = (state_40719[(2)]);
var inst_40638 = cljs.core.next.call(null,inst_40620);
var inst_40600 = inst_40638;
var inst_40601 = null;
var inst_40602 = (0);
var inst_40603 = (0);
var state_40719__$1 = (function (){var statearr_40729 = state_40719;
(statearr_40729[(13)] = inst_40601);

(statearr_40729[(14)] = inst_40602);

(statearr_40729[(15)] = inst_40600);

(statearr_40729[(16)] = inst_40637);

(statearr_40729[(17)] = inst_40603);

return statearr_40729;
})();
var statearr_40730_40814 = state_40719__$1;
(statearr_40730_40814[(2)] = null);

(statearr_40730_40814[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40720 === (39))){
var state_40719__$1 = state_40719;
var statearr_40734_40815 = state_40719__$1;
(statearr_40734_40815[(2)] = null);

(statearr_40734_40815[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40720 === (4))){
var inst_40591 = (state_40719[(9)]);
var inst_40591__$1 = (state_40719[(2)]);
var inst_40592 = (inst_40591__$1 == null);
var state_40719__$1 = (function (){var statearr_40735 = state_40719;
(statearr_40735[(9)] = inst_40591__$1);

return statearr_40735;
})();
if(cljs.core.truth_(inst_40592)){
var statearr_40736_40816 = state_40719__$1;
(statearr_40736_40816[(1)] = (5));

} else {
var statearr_40737_40817 = state_40719__$1;
(statearr_40737_40817[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40720 === (15))){
var inst_40601 = (state_40719[(13)]);
var inst_40602 = (state_40719[(14)]);
var inst_40600 = (state_40719[(15)]);
var inst_40603 = (state_40719[(17)]);
var inst_40616 = (state_40719[(2)]);
var inst_40617 = (inst_40603 + (1));
var tmp40731 = inst_40601;
var tmp40732 = inst_40602;
var tmp40733 = inst_40600;
var inst_40600__$1 = tmp40733;
var inst_40601__$1 = tmp40731;
var inst_40602__$1 = tmp40732;
var inst_40603__$1 = inst_40617;
var state_40719__$1 = (function (){var statearr_40738 = state_40719;
(statearr_40738[(13)] = inst_40601__$1);

(statearr_40738[(19)] = inst_40616);

(statearr_40738[(14)] = inst_40602__$1);

(statearr_40738[(15)] = inst_40600__$1);

(statearr_40738[(17)] = inst_40603__$1);

return statearr_40738;
})();
var statearr_40739_40818 = state_40719__$1;
(statearr_40739_40818[(2)] = null);

(statearr_40739_40818[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40720 === (21))){
var inst_40641 = (state_40719[(2)]);
var state_40719__$1 = state_40719;
var statearr_40743_40819 = state_40719__$1;
(statearr_40743_40819[(2)] = inst_40641);

(statearr_40743_40819[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40720 === (31))){
var inst_40667 = (state_40719[(11)]);
var inst_40671 = done.call(null,null);
var inst_40672 = cljs.core.async.untap_STAR_.call(null,m,inst_40667);
var state_40719__$1 = (function (){var statearr_40744 = state_40719;
(statearr_40744[(18)] = inst_40671);

return statearr_40744;
})();
var statearr_40745_40820 = state_40719__$1;
(statearr_40745_40820[(2)] = inst_40672);

(statearr_40745_40820[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40720 === (32))){
var inst_40661 = (state_40719[(20)]);
var inst_40659 = (state_40719[(21)]);
var inst_40662 = (state_40719[(10)]);
var inst_40660 = (state_40719[(12)]);
var inst_40674 = (state_40719[(2)]);
var inst_40675 = (inst_40662 + (1));
var tmp40740 = inst_40661;
var tmp40741 = inst_40659;
var tmp40742 = inst_40660;
var inst_40659__$1 = tmp40741;
var inst_40660__$1 = tmp40742;
var inst_40661__$1 = tmp40740;
var inst_40662__$1 = inst_40675;
var state_40719__$1 = (function (){var statearr_40746 = state_40719;
(statearr_40746[(22)] = inst_40674);

(statearr_40746[(20)] = inst_40661__$1);

(statearr_40746[(21)] = inst_40659__$1);

(statearr_40746[(10)] = inst_40662__$1);

(statearr_40746[(12)] = inst_40660__$1);

return statearr_40746;
})();
var statearr_40747_40821 = state_40719__$1;
(statearr_40747_40821[(2)] = null);

(statearr_40747_40821[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40720 === (40))){
var inst_40687 = (state_40719[(23)]);
var inst_40691 = done.call(null,null);
var inst_40692 = cljs.core.async.untap_STAR_.call(null,m,inst_40687);
var state_40719__$1 = (function (){var statearr_40748 = state_40719;
(statearr_40748[(24)] = inst_40691);

return statearr_40748;
})();
var statearr_40749_40822 = state_40719__$1;
(statearr_40749_40822[(2)] = inst_40692);

(statearr_40749_40822[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40720 === (33))){
var inst_40678 = (state_40719[(25)]);
var inst_40680 = cljs.core.chunked_seq_QMARK_.call(null,inst_40678);
var state_40719__$1 = state_40719;
if(inst_40680){
var statearr_40750_40823 = state_40719__$1;
(statearr_40750_40823[(1)] = (36));

} else {
var statearr_40751_40824 = state_40719__$1;
(statearr_40751_40824[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40720 === (13))){
var inst_40610 = (state_40719[(26)]);
var inst_40613 = cljs.core.async.close_BANG_.call(null,inst_40610);
var state_40719__$1 = state_40719;
var statearr_40752_40825 = state_40719__$1;
(statearr_40752_40825[(2)] = inst_40613);

(statearr_40752_40825[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40720 === (22))){
var inst_40631 = (state_40719[(8)]);
var inst_40634 = cljs.core.async.close_BANG_.call(null,inst_40631);
var state_40719__$1 = state_40719;
var statearr_40753_40826 = state_40719__$1;
(statearr_40753_40826[(2)] = inst_40634);

(statearr_40753_40826[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40720 === (36))){
var inst_40678 = (state_40719[(25)]);
var inst_40682 = cljs.core.chunk_first.call(null,inst_40678);
var inst_40683 = cljs.core.chunk_rest.call(null,inst_40678);
var inst_40684 = cljs.core.count.call(null,inst_40682);
var inst_40659 = inst_40683;
var inst_40660 = inst_40682;
var inst_40661 = inst_40684;
var inst_40662 = (0);
var state_40719__$1 = (function (){var statearr_40754 = state_40719;
(statearr_40754[(20)] = inst_40661);

(statearr_40754[(21)] = inst_40659);

(statearr_40754[(10)] = inst_40662);

(statearr_40754[(12)] = inst_40660);

return statearr_40754;
})();
var statearr_40755_40827 = state_40719__$1;
(statearr_40755_40827[(2)] = null);

(statearr_40755_40827[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40720 === (41))){
var inst_40678 = (state_40719[(25)]);
var inst_40694 = (state_40719[(2)]);
var inst_40695 = cljs.core.next.call(null,inst_40678);
var inst_40659 = inst_40695;
var inst_40660 = null;
var inst_40661 = (0);
var inst_40662 = (0);
var state_40719__$1 = (function (){var statearr_40756 = state_40719;
(statearr_40756[(20)] = inst_40661);

(statearr_40756[(21)] = inst_40659);

(statearr_40756[(10)] = inst_40662);

(statearr_40756[(27)] = inst_40694);

(statearr_40756[(12)] = inst_40660);

return statearr_40756;
})();
var statearr_40757_40828 = state_40719__$1;
(statearr_40757_40828[(2)] = null);

(statearr_40757_40828[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40720 === (43))){
var state_40719__$1 = state_40719;
var statearr_40758_40829 = state_40719__$1;
(statearr_40758_40829[(2)] = null);

(statearr_40758_40829[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40720 === (29))){
var inst_40703 = (state_40719[(2)]);
var state_40719__$1 = state_40719;
var statearr_40759_40830 = state_40719__$1;
(statearr_40759_40830[(2)] = inst_40703);

(statearr_40759_40830[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40720 === (44))){
var inst_40712 = (state_40719[(2)]);
var state_40719__$1 = (function (){var statearr_40760 = state_40719;
(statearr_40760[(28)] = inst_40712);

return statearr_40760;
})();
var statearr_40761_40831 = state_40719__$1;
(statearr_40761_40831[(2)] = null);

(statearr_40761_40831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40720 === (6))){
var inst_40651 = (state_40719[(29)]);
var inst_40650 = cljs.core.deref.call(null,cs);
var inst_40651__$1 = cljs.core.keys.call(null,inst_40650);
var inst_40652 = cljs.core.count.call(null,inst_40651__$1);
var inst_40653 = cljs.core.reset_BANG_.call(null,dctr,inst_40652);
var inst_40658 = cljs.core.seq.call(null,inst_40651__$1);
var inst_40659 = inst_40658;
var inst_40660 = null;
var inst_40661 = (0);
var inst_40662 = (0);
var state_40719__$1 = (function (){var statearr_40762 = state_40719;
(statearr_40762[(29)] = inst_40651__$1);

(statearr_40762[(30)] = inst_40653);

(statearr_40762[(20)] = inst_40661);

(statearr_40762[(21)] = inst_40659);

(statearr_40762[(10)] = inst_40662);

(statearr_40762[(12)] = inst_40660);

return statearr_40762;
})();
var statearr_40763_40832 = state_40719__$1;
(statearr_40763_40832[(2)] = null);

(statearr_40763_40832[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40720 === (28))){
var inst_40659 = (state_40719[(21)]);
var inst_40678 = (state_40719[(25)]);
var inst_40678__$1 = cljs.core.seq.call(null,inst_40659);
var state_40719__$1 = (function (){var statearr_40764 = state_40719;
(statearr_40764[(25)] = inst_40678__$1);

return statearr_40764;
})();
if(inst_40678__$1){
var statearr_40765_40833 = state_40719__$1;
(statearr_40765_40833[(1)] = (33));

} else {
var statearr_40766_40834 = state_40719__$1;
(statearr_40766_40834[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40720 === (25))){
var inst_40661 = (state_40719[(20)]);
var inst_40662 = (state_40719[(10)]);
var inst_40664 = (inst_40662 < inst_40661);
var inst_40665 = inst_40664;
var state_40719__$1 = state_40719;
if(cljs.core.truth_(inst_40665)){
var statearr_40767_40835 = state_40719__$1;
(statearr_40767_40835[(1)] = (27));

} else {
var statearr_40768_40836 = state_40719__$1;
(statearr_40768_40836[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40720 === (34))){
var state_40719__$1 = state_40719;
var statearr_40769_40837 = state_40719__$1;
(statearr_40769_40837[(2)] = null);

(statearr_40769_40837[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40720 === (17))){
var state_40719__$1 = state_40719;
var statearr_40770_40838 = state_40719__$1;
(statearr_40770_40838[(2)] = null);

(statearr_40770_40838[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40720 === (3))){
var inst_40717 = (state_40719[(2)]);
var state_40719__$1 = state_40719;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40719__$1,inst_40717);
} else {
if((state_val_40720 === (12))){
var inst_40646 = (state_40719[(2)]);
var state_40719__$1 = state_40719;
var statearr_40771_40839 = state_40719__$1;
(statearr_40771_40839[(2)] = inst_40646);

(statearr_40771_40839[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40720 === (2))){
var state_40719__$1 = state_40719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40719__$1,(4),ch);
} else {
if((state_val_40720 === (23))){
var state_40719__$1 = state_40719;
var statearr_40772_40840 = state_40719__$1;
(statearr_40772_40840[(2)] = null);

(statearr_40772_40840[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40720 === (35))){
var inst_40701 = (state_40719[(2)]);
var state_40719__$1 = state_40719;
var statearr_40773_40841 = state_40719__$1;
(statearr_40773_40841[(2)] = inst_40701);

(statearr_40773_40841[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40720 === (19))){
var inst_40620 = (state_40719[(7)]);
var inst_40624 = cljs.core.chunk_first.call(null,inst_40620);
var inst_40625 = cljs.core.chunk_rest.call(null,inst_40620);
var inst_40626 = cljs.core.count.call(null,inst_40624);
var inst_40600 = inst_40625;
var inst_40601 = inst_40624;
var inst_40602 = inst_40626;
var inst_40603 = (0);
var state_40719__$1 = (function (){var statearr_40774 = state_40719;
(statearr_40774[(13)] = inst_40601);

(statearr_40774[(14)] = inst_40602);

(statearr_40774[(15)] = inst_40600);

(statearr_40774[(17)] = inst_40603);

return statearr_40774;
})();
var statearr_40775_40842 = state_40719__$1;
(statearr_40775_40842[(2)] = null);

(statearr_40775_40842[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40720 === (11))){
var inst_40620 = (state_40719[(7)]);
var inst_40600 = (state_40719[(15)]);
var inst_40620__$1 = cljs.core.seq.call(null,inst_40600);
var state_40719__$1 = (function (){var statearr_40776 = state_40719;
(statearr_40776[(7)] = inst_40620__$1);

return statearr_40776;
})();
if(inst_40620__$1){
var statearr_40777_40843 = state_40719__$1;
(statearr_40777_40843[(1)] = (16));

} else {
var statearr_40778_40844 = state_40719__$1;
(statearr_40778_40844[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40720 === (9))){
var inst_40648 = (state_40719[(2)]);
var state_40719__$1 = state_40719;
var statearr_40779_40845 = state_40719__$1;
(statearr_40779_40845[(2)] = inst_40648);

(statearr_40779_40845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40720 === (5))){
var inst_40598 = cljs.core.deref.call(null,cs);
var inst_40599 = cljs.core.seq.call(null,inst_40598);
var inst_40600 = inst_40599;
var inst_40601 = null;
var inst_40602 = (0);
var inst_40603 = (0);
var state_40719__$1 = (function (){var statearr_40780 = state_40719;
(statearr_40780[(13)] = inst_40601);

(statearr_40780[(14)] = inst_40602);

(statearr_40780[(15)] = inst_40600);

(statearr_40780[(17)] = inst_40603);

return statearr_40780;
})();
var statearr_40781_40846 = state_40719__$1;
(statearr_40781_40846[(2)] = null);

(statearr_40781_40846[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40720 === (14))){
var state_40719__$1 = state_40719;
var statearr_40782_40847 = state_40719__$1;
(statearr_40782_40847[(2)] = null);

(statearr_40782_40847[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40720 === (45))){
var inst_40709 = (state_40719[(2)]);
var state_40719__$1 = state_40719;
var statearr_40783_40848 = state_40719__$1;
(statearr_40783_40848[(2)] = inst_40709);

(statearr_40783_40848[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40720 === (26))){
var inst_40651 = (state_40719[(29)]);
var inst_40705 = (state_40719[(2)]);
var inst_40706 = cljs.core.seq.call(null,inst_40651);
var state_40719__$1 = (function (){var statearr_40784 = state_40719;
(statearr_40784[(31)] = inst_40705);

return statearr_40784;
})();
if(inst_40706){
var statearr_40785_40849 = state_40719__$1;
(statearr_40785_40849[(1)] = (42));

} else {
var statearr_40786_40850 = state_40719__$1;
(statearr_40786_40850[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40720 === (16))){
var inst_40620 = (state_40719[(7)]);
var inst_40622 = cljs.core.chunked_seq_QMARK_.call(null,inst_40620);
var state_40719__$1 = state_40719;
if(inst_40622){
var statearr_40787_40851 = state_40719__$1;
(statearr_40787_40851[(1)] = (19));

} else {
var statearr_40788_40852 = state_40719__$1;
(statearr_40788_40852[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40720 === (38))){
var inst_40698 = (state_40719[(2)]);
var state_40719__$1 = state_40719;
var statearr_40789_40853 = state_40719__$1;
(statearr_40789_40853[(2)] = inst_40698);

(statearr_40789_40853[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40720 === (30))){
var state_40719__$1 = state_40719;
var statearr_40790_40854 = state_40719__$1;
(statearr_40790_40854[(2)] = null);

(statearr_40790_40854[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40720 === (10))){
var inst_40601 = (state_40719[(13)]);
var inst_40603 = (state_40719[(17)]);
var inst_40609 = cljs.core._nth.call(null,inst_40601,inst_40603);
var inst_40610 = cljs.core.nth.call(null,inst_40609,(0),null);
var inst_40611 = cljs.core.nth.call(null,inst_40609,(1),null);
var state_40719__$1 = (function (){var statearr_40791 = state_40719;
(statearr_40791[(26)] = inst_40610);

return statearr_40791;
})();
if(cljs.core.truth_(inst_40611)){
var statearr_40792_40855 = state_40719__$1;
(statearr_40792_40855[(1)] = (13));

} else {
var statearr_40793_40856 = state_40719__$1;
(statearr_40793_40856[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40720 === (18))){
var inst_40644 = (state_40719[(2)]);
var state_40719__$1 = state_40719;
var statearr_40794_40857 = state_40719__$1;
(statearr_40794_40857[(2)] = inst_40644);

(statearr_40794_40857[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40720 === (42))){
var state_40719__$1 = state_40719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40719__$1,(45),dchan);
} else {
if((state_val_40720 === (37))){
var inst_40591 = (state_40719[(9)]);
var inst_40678 = (state_40719[(25)]);
var inst_40687 = (state_40719[(23)]);
var inst_40687__$1 = cljs.core.first.call(null,inst_40678);
var inst_40688 = cljs.core.async.put_BANG_.call(null,inst_40687__$1,inst_40591,done);
var state_40719__$1 = (function (){var statearr_40795 = state_40719;
(statearr_40795[(23)] = inst_40687__$1);

return statearr_40795;
})();
if(cljs.core.truth_(inst_40688)){
var statearr_40796_40858 = state_40719__$1;
(statearr_40796_40858[(1)] = (39));

} else {
var statearr_40797_40859 = state_40719__$1;
(statearr_40797_40859[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40720 === (8))){
var inst_40602 = (state_40719[(14)]);
var inst_40603 = (state_40719[(17)]);
var inst_40605 = (inst_40603 < inst_40602);
var inst_40606 = inst_40605;
var state_40719__$1 = state_40719;
if(cljs.core.truth_(inst_40606)){
var statearr_40798_40860 = state_40719__$1;
(statearr_40798_40860[(1)] = (10));

} else {
var statearr_40799_40861 = state_40719__$1;
(statearr_40799_40861[(1)] = (11));

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
});})(c__19849__auto___40807,cs,m,dchan,dctr,done))
;
return ((function (switch__19828__auto__,c__19849__auto___40807,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19829__auto__ = null;
var cljs$core$async$mult_$_state_machine__19829__auto____0 = (function (){
var statearr_40803 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40803[(0)] = cljs$core$async$mult_$_state_machine__19829__auto__);

(statearr_40803[(1)] = (1));

return statearr_40803;
});
var cljs$core$async$mult_$_state_machine__19829__auto____1 = (function (state_40719){
while(true){
var ret_value__19830__auto__ = (function (){try{while(true){
var result__19831__auto__ = switch__19828__auto__.call(null,state_40719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19831__auto__;
}
break;
}
}catch (e40804){if((e40804 instanceof Object)){
var ex__19832__auto__ = e40804;
var statearr_40805_40862 = state_40719;
(statearr_40805_40862[(5)] = ex__19832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40863 = state_40719;
state_40719 = G__40863;
continue;
} else {
return ret_value__19830__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19829__auto__ = function(state_40719){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19829__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19829__auto____1.call(this,state_40719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19829__auto____0;
cljs$core$async$mult_$_state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19829__auto____1;
return cljs$core$async$mult_$_state_machine__19829__auto__;
})()
;})(switch__19828__auto__,c__19849__auto___40807,cs,m,dchan,dctr,done))
})();
var state__19851__auto__ = (function (){var statearr_40806 = f__19850__auto__.call(null);
(statearr_40806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19849__auto___40807);

return statearr_40806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19851__auto__);
});})(c__19849__auto___40807,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args40864 = [];
var len__18583__auto___40867 = arguments.length;
var i__18584__auto___40868 = (0);
while(true){
if((i__18584__auto___40868 < len__18583__auto___40867)){
args40864.push((arguments[i__18584__auto___40868]));

var G__40869 = (i__18584__auto___40868 + (1));
i__18584__auto___40868 = G__40869;
continue;
} else {
}
break;
}

var G__40866 = args40864.length;
switch (G__40866) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40864.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18180__auto__ = (((m == null))?null:m);
var m__18181__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18180__auto__)]);
if(!((m__18181__auto__ == null))){
return m__18181__auto__.call(null,m,ch);
} else {
var m__18181__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__18181__auto____$1 == null))){
return m__18181__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18180__auto__ = (((m == null))?null:m);
var m__18181__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18180__auto__)]);
if(!((m__18181__auto__ == null))){
return m__18181__auto__.call(null,m,ch);
} else {
var m__18181__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__18181__auto____$1 == null))){
return m__18181__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18180__auto__ = (((m == null))?null:m);
var m__18181__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18180__auto__)]);
if(!((m__18181__auto__ == null))){
return m__18181__auto__.call(null,m);
} else {
var m__18181__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__18181__auto____$1 == null))){
return m__18181__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18180__auto__ = (((m == null))?null:m);
var m__18181__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18180__auto__)]);
if(!((m__18181__auto__ == null))){
return m__18181__auto__.call(null,m,state_map);
} else {
var m__18181__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__18181__auto____$1 == null))){
return m__18181__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18180__auto__ = (((m == null))?null:m);
var m__18181__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18180__auto__)]);
if(!((m__18181__auto__ == null))){
return m__18181__auto__.call(null,m,mode);
} else {
var m__18181__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__18181__auto____$1 == null))){
return m__18181__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__18590__auto__ = [];
var len__18583__auto___40881 = arguments.length;
var i__18584__auto___40882 = (0);
while(true){
if((i__18584__auto___40882 < len__18583__auto___40881)){
args__18590__auto__.push((arguments[i__18584__auto___40882]));

var G__40883 = (i__18584__auto___40882 + (1));
i__18584__auto___40882 = G__40883;
continue;
} else {
}
break;
}

var argseq__18591__auto__ = ((((3) < args__18590__auto__.length))?(new cljs.core.IndexedSeq(args__18590__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__18591__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__40875){
var map__40876 = p__40875;
var map__40876__$1 = ((((!((map__40876 == null)))?((((map__40876.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40876.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40876):map__40876);
var opts = map__40876__$1;
var statearr_40878_40884 = state;
(statearr_40878_40884[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__40876,map__40876__$1,opts){
return (function (val){
var statearr_40879_40885 = state;
(statearr_40879_40885[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__40876,map__40876__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_40880_40886 = state;
(statearr_40880_40886[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq40871){
var G__40872 = cljs.core.first.call(null,seq40871);
var seq40871__$1 = cljs.core.next.call(null,seq40871);
var G__40873 = cljs.core.first.call(null,seq40871__$1);
var seq40871__$2 = cljs.core.next.call(null,seq40871__$1);
var G__40874 = cljs.core.first.call(null,seq40871__$2);
var seq40871__$3 = cljs.core.next.call(null,seq40871__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40872,G__40873,G__40874,seq40871__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async41050 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41050 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta41051){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta41051 = meta41051;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41052,meta41051__$1){
var self__ = this;
var _41052__$1 = this;
return (new cljs.core.async.t_cljs$core$async41050(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta41051__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41050.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41052){
var self__ = this;
var _41052__$1 = this;
return self__.meta41051;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41050.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async41050.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41050.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async41050.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41050.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41050.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41050.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41050.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41050.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta41051","meta41051",-553598878,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41050.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41050.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41050";

cljs.core.async.t_cljs$core$async41050.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18123__auto__,writer__18124__auto__,opt__18125__auto__){
return cljs.core._write.call(null,writer__18124__auto__,"cljs.core.async/t_cljs$core$async41050");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async41050 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async41050(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta41051){
return (new cljs.core.async.t_cljs$core$async41050(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta41051));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async41050(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19849__auto___41213 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19849__auto___41213,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19850__auto__ = (function (){var switch__19828__auto__ = ((function (c__19849__auto___41213,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_41150){
var state_val_41151 = (state_41150[(1)]);
if((state_val_41151 === (7))){
var inst_41068 = (state_41150[(2)]);
var state_41150__$1 = state_41150;
var statearr_41152_41214 = state_41150__$1;
(statearr_41152_41214[(2)] = inst_41068);

(statearr_41152_41214[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41151 === (20))){
var inst_41080 = (state_41150[(7)]);
var state_41150__$1 = state_41150;
var statearr_41153_41215 = state_41150__$1;
(statearr_41153_41215[(2)] = inst_41080);

(statearr_41153_41215[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41151 === (27))){
var state_41150__$1 = state_41150;
var statearr_41154_41216 = state_41150__$1;
(statearr_41154_41216[(2)] = null);

(statearr_41154_41216[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41151 === (1))){
var inst_41056 = (state_41150[(8)]);
var inst_41056__$1 = calc_state.call(null);
var inst_41058 = (inst_41056__$1 == null);
var inst_41059 = cljs.core.not.call(null,inst_41058);
var state_41150__$1 = (function (){var statearr_41155 = state_41150;
(statearr_41155[(8)] = inst_41056__$1);

return statearr_41155;
})();
if(inst_41059){
var statearr_41156_41217 = state_41150__$1;
(statearr_41156_41217[(1)] = (2));

} else {
var statearr_41157_41218 = state_41150__$1;
(statearr_41157_41218[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41151 === (24))){
var inst_41103 = (state_41150[(9)]);
var inst_41124 = (state_41150[(10)]);
var inst_41110 = (state_41150[(11)]);
var inst_41124__$1 = inst_41103.call(null,inst_41110);
var state_41150__$1 = (function (){var statearr_41158 = state_41150;
(statearr_41158[(10)] = inst_41124__$1);

return statearr_41158;
})();
if(cljs.core.truth_(inst_41124__$1)){
var statearr_41159_41219 = state_41150__$1;
(statearr_41159_41219[(1)] = (29));

} else {
var statearr_41160_41220 = state_41150__$1;
(statearr_41160_41220[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41151 === (4))){
var inst_41071 = (state_41150[(2)]);
var state_41150__$1 = state_41150;
if(cljs.core.truth_(inst_41071)){
var statearr_41161_41221 = state_41150__$1;
(statearr_41161_41221[(1)] = (8));

} else {
var statearr_41162_41222 = state_41150__$1;
(statearr_41162_41222[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41151 === (15))){
var inst_41097 = (state_41150[(2)]);
var state_41150__$1 = state_41150;
if(cljs.core.truth_(inst_41097)){
var statearr_41163_41223 = state_41150__$1;
(statearr_41163_41223[(1)] = (19));

} else {
var statearr_41164_41224 = state_41150__$1;
(statearr_41164_41224[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41151 === (21))){
var inst_41102 = (state_41150[(12)]);
var inst_41102__$1 = (state_41150[(2)]);
var inst_41103 = cljs.core.get.call(null,inst_41102__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41104 = cljs.core.get.call(null,inst_41102__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41105 = cljs.core.get.call(null,inst_41102__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_41150__$1 = (function (){var statearr_41165 = state_41150;
(statearr_41165[(12)] = inst_41102__$1);

(statearr_41165[(14)] = inst_41104);

(statearr_41165[(9)] = inst_41103);

return statearr_41165;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_41150__$1,(22),inst_41105);
} else {
if((state_val_41151 === (31))){
var inst_41132 = (state_41150[(2)]);
var state_41150__$1 = state_41150;
if(cljs.core.truth_(inst_41132)){
var statearr_41166_41225 = state_41150__$1;
(statearr_41166_41225[(1)] = (32));

} else {
var statearr_41167_41226 = state_41150__$1;
(statearr_41167_41226[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41151 === (32))){
var inst_41109 = (state_41150[(13)]);
var state_41150__$1 = state_41150;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41150__$1,(35),out,inst_41109);
} else {
if((state_val_41151 === (33))){
var inst_41102 = (state_41150[(12)]);
var inst_41080 = inst_41102;
var state_41150__$1 = (function (){var statearr_41168 = state_41150;
(statearr_41168[(7)] = inst_41080);

return statearr_41168;
})();
var statearr_41169_41227 = state_41150__$1;
(statearr_41169_41227[(2)] = null);

(statearr_41169_41227[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41151 === (13))){
var inst_41080 = (state_41150[(7)]);
var inst_41087 = inst_41080.cljs$lang$protocol_mask$partition0$;
var inst_41088 = (inst_41087 & (64));
var inst_41089 = inst_41080.cljs$core$ISeq$;
var inst_41090 = (inst_41088) || (inst_41089);
var state_41150__$1 = state_41150;
if(cljs.core.truth_(inst_41090)){
var statearr_41170_41228 = state_41150__$1;
(statearr_41170_41228[(1)] = (16));

} else {
var statearr_41171_41229 = state_41150__$1;
(statearr_41171_41229[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41151 === (22))){
var inst_41109 = (state_41150[(13)]);
var inst_41110 = (state_41150[(11)]);
var inst_41108 = (state_41150[(2)]);
var inst_41109__$1 = cljs.core.nth.call(null,inst_41108,(0),null);
var inst_41110__$1 = cljs.core.nth.call(null,inst_41108,(1),null);
var inst_41111 = (inst_41109__$1 == null);
var inst_41112 = cljs.core._EQ_.call(null,inst_41110__$1,change);
var inst_41113 = (inst_41111) || (inst_41112);
var state_41150__$1 = (function (){var statearr_41172 = state_41150;
(statearr_41172[(13)] = inst_41109__$1);

(statearr_41172[(11)] = inst_41110__$1);

return statearr_41172;
})();
if(cljs.core.truth_(inst_41113)){
var statearr_41173_41230 = state_41150__$1;
(statearr_41173_41230[(1)] = (23));

} else {
var statearr_41174_41231 = state_41150__$1;
(statearr_41174_41231[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41151 === (36))){
var inst_41102 = (state_41150[(12)]);
var inst_41080 = inst_41102;
var state_41150__$1 = (function (){var statearr_41175 = state_41150;
(statearr_41175[(7)] = inst_41080);

return statearr_41175;
})();
var statearr_41176_41232 = state_41150__$1;
(statearr_41176_41232[(2)] = null);

(statearr_41176_41232[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41151 === (29))){
var inst_41124 = (state_41150[(10)]);
var state_41150__$1 = state_41150;
var statearr_41177_41233 = state_41150__$1;
(statearr_41177_41233[(2)] = inst_41124);

(statearr_41177_41233[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41151 === (6))){
var state_41150__$1 = state_41150;
var statearr_41178_41234 = state_41150__$1;
(statearr_41178_41234[(2)] = false);

(statearr_41178_41234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41151 === (28))){
var inst_41120 = (state_41150[(2)]);
var inst_41121 = calc_state.call(null);
var inst_41080 = inst_41121;
var state_41150__$1 = (function (){var statearr_41179 = state_41150;
(statearr_41179[(15)] = inst_41120);

(statearr_41179[(7)] = inst_41080);

return statearr_41179;
})();
var statearr_41180_41235 = state_41150__$1;
(statearr_41180_41235[(2)] = null);

(statearr_41180_41235[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41151 === (25))){
var inst_41146 = (state_41150[(2)]);
var state_41150__$1 = state_41150;
var statearr_41181_41236 = state_41150__$1;
(statearr_41181_41236[(2)] = inst_41146);

(statearr_41181_41236[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41151 === (34))){
var inst_41144 = (state_41150[(2)]);
var state_41150__$1 = state_41150;
var statearr_41182_41237 = state_41150__$1;
(statearr_41182_41237[(2)] = inst_41144);

(statearr_41182_41237[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41151 === (17))){
var state_41150__$1 = state_41150;
var statearr_41183_41238 = state_41150__$1;
(statearr_41183_41238[(2)] = false);

(statearr_41183_41238[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41151 === (3))){
var state_41150__$1 = state_41150;
var statearr_41184_41239 = state_41150__$1;
(statearr_41184_41239[(2)] = false);

(statearr_41184_41239[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41151 === (12))){
var inst_41148 = (state_41150[(2)]);
var state_41150__$1 = state_41150;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41150__$1,inst_41148);
} else {
if((state_val_41151 === (2))){
var inst_41056 = (state_41150[(8)]);
var inst_41061 = inst_41056.cljs$lang$protocol_mask$partition0$;
var inst_41062 = (inst_41061 & (64));
var inst_41063 = inst_41056.cljs$core$ISeq$;
var inst_41064 = (inst_41062) || (inst_41063);
var state_41150__$1 = state_41150;
if(cljs.core.truth_(inst_41064)){
var statearr_41185_41240 = state_41150__$1;
(statearr_41185_41240[(1)] = (5));

} else {
var statearr_41186_41241 = state_41150__$1;
(statearr_41186_41241[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41151 === (23))){
var inst_41109 = (state_41150[(13)]);
var inst_41115 = (inst_41109 == null);
var state_41150__$1 = state_41150;
if(cljs.core.truth_(inst_41115)){
var statearr_41187_41242 = state_41150__$1;
(statearr_41187_41242[(1)] = (26));

} else {
var statearr_41188_41243 = state_41150__$1;
(statearr_41188_41243[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41151 === (35))){
var inst_41135 = (state_41150[(2)]);
var state_41150__$1 = state_41150;
if(cljs.core.truth_(inst_41135)){
var statearr_41189_41244 = state_41150__$1;
(statearr_41189_41244[(1)] = (36));

} else {
var statearr_41190_41245 = state_41150__$1;
(statearr_41190_41245[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41151 === (19))){
var inst_41080 = (state_41150[(7)]);
var inst_41099 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41080);
var state_41150__$1 = state_41150;
var statearr_41191_41246 = state_41150__$1;
(statearr_41191_41246[(2)] = inst_41099);

(statearr_41191_41246[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41151 === (11))){
var inst_41080 = (state_41150[(7)]);
var inst_41084 = (inst_41080 == null);
var inst_41085 = cljs.core.not.call(null,inst_41084);
var state_41150__$1 = state_41150;
if(inst_41085){
var statearr_41192_41247 = state_41150__$1;
(statearr_41192_41247[(1)] = (13));

} else {
var statearr_41193_41248 = state_41150__$1;
(statearr_41193_41248[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41151 === (9))){
var inst_41056 = (state_41150[(8)]);
var state_41150__$1 = state_41150;
var statearr_41194_41249 = state_41150__$1;
(statearr_41194_41249[(2)] = inst_41056);

(statearr_41194_41249[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41151 === (5))){
var state_41150__$1 = state_41150;
var statearr_41195_41250 = state_41150__$1;
(statearr_41195_41250[(2)] = true);

(statearr_41195_41250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41151 === (14))){
var state_41150__$1 = state_41150;
var statearr_41196_41251 = state_41150__$1;
(statearr_41196_41251[(2)] = false);

(statearr_41196_41251[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41151 === (26))){
var inst_41110 = (state_41150[(11)]);
var inst_41117 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_41110);
var state_41150__$1 = state_41150;
var statearr_41197_41252 = state_41150__$1;
(statearr_41197_41252[(2)] = inst_41117);

(statearr_41197_41252[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41151 === (16))){
var state_41150__$1 = state_41150;
var statearr_41198_41253 = state_41150__$1;
(statearr_41198_41253[(2)] = true);

(statearr_41198_41253[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41151 === (38))){
var inst_41140 = (state_41150[(2)]);
var state_41150__$1 = state_41150;
var statearr_41199_41254 = state_41150__$1;
(statearr_41199_41254[(2)] = inst_41140);

(statearr_41199_41254[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41151 === (30))){
var inst_41104 = (state_41150[(14)]);
var inst_41103 = (state_41150[(9)]);
var inst_41110 = (state_41150[(11)]);
var inst_41127 = cljs.core.empty_QMARK_.call(null,inst_41103);
var inst_41128 = inst_41104.call(null,inst_41110);
var inst_41129 = cljs.core.not.call(null,inst_41128);
var inst_41130 = (inst_41127) && (inst_41129);
var state_41150__$1 = state_41150;
var statearr_41200_41255 = state_41150__$1;
(statearr_41200_41255[(2)] = inst_41130);

(statearr_41200_41255[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41151 === (10))){
var inst_41056 = (state_41150[(8)]);
var inst_41076 = (state_41150[(2)]);
var inst_41077 = cljs.core.get.call(null,inst_41076,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41078 = cljs.core.get.call(null,inst_41076,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41079 = cljs.core.get.call(null,inst_41076,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_41080 = inst_41056;
var state_41150__$1 = (function (){var statearr_41201 = state_41150;
(statearr_41201[(16)] = inst_41077);

(statearr_41201[(17)] = inst_41078);

(statearr_41201[(18)] = inst_41079);

(statearr_41201[(7)] = inst_41080);

return statearr_41201;
})();
var statearr_41202_41256 = state_41150__$1;
(statearr_41202_41256[(2)] = null);

(statearr_41202_41256[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41151 === (18))){
var inst_41094 = (state_41150[(2)]);
var state_41150__$1 = state_41150;
var statearr_41203_41257 = state_41150__$1;
(statearr_41203_41257[(2)] = inst_41094);

(statearr_41203_41257[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41151 === (37))){
var state_41150__$1 = state_41150;
var statearr_41204_41258 = state_41150__$1;
(statearr_41204_41258[(2)] = null);

(statearr_41204_41258[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41151 === (8))){
var inst_41056 = (state_41150[(8)]);
var inst_41073 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41056);
var state_41150__$1 = state_41150;
var statearr_41205_41259 = state_41150__$1;
(statearr_41205_41259[(2)] = inst_41073);

(statearr_41205_41259[(1)] = (10));


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
});})(c__19849__auto___41213,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19828__auto__,c__19849__auto___41213,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19829__auto__ = null;
var cljs$core$async$mix_$_state_machine__19829__auto____0 = (function (){
var statearr_41209 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41209[(0)] = cljs$core$async$mix_$_state_machine__19829__auto__);

(statearr_41209[(1)] = (1));

return statearr_41209;
});
var cljs$core$async$mix_$_state_machine__19829__auto____1 = (function (state_41150){
while(true){
var ret_value__19830__auto__ = (function (){try{while(true){
var result__19831__auto__ = switch__19828__auto__.call(null,state_41150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19831__auto__;
}
break;
}
}catch (e41210){if((e41210 instanceof Object)){
var ex__19832__auto__ = e41210;
var statearr_41211_41260 = state_41150;
(statearr_41211_41260[(5)] = ex__19832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41210;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41261 = state_41150;
state_41150 = G__41261;
continue;
} else {
return ret_value__19830__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19829__auto__ = function(state_41150){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19829__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19829__auto____1.call(this,state_41150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19829__auto____0;
cljs$core$async$mix_$_state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19829__auto____1;
return cljs$core$async$mix_$_state_machine__19829__auto__;
})()
;})(switch__19828__auto__,c__19849__auto___41213,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19851__auto__ = (function (){var statearr_41212 = f__19850__auto__.call(null);
(statearr_41212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19849__auto___41213);

return statearr_41212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19851__auto__);
});})(c__19849__auto___41213,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18180__auto__ = (((p == null))?null:p);
var m__18181__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18180__auto__)]);
if(!((m__18181__auto__ == null))){
return m__18181__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__18181__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__18181__auto____$1 == null))){
return m__18181__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18180__auto__ = (((p == null))?null:p);
var m__18181__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18180__auto__)]);
if(!((m__18181__auto__ == null))){
return m__18181__auto__.call(null,p,v,ch);
} else {
var m__18181__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__18181__auto____$1 == null))){
return m__18181__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args41262 = [];
var len__18583__auto___41265 = arguments.length;
var i__18584__auto___41266 = (0);
while(true){
if((i__18584__auto___41266 < len__18583__auto___41265)){
args41262.push((arguments[i__18584__auto___41266]));

var G__41267 = (i__18584__auto___41266 + (1));
i__18584__auto___41266 = G__41267;
continue;
} else {
}
break;
}

var G__41264 = args41262.length;
switch (G__41264) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41262.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18180__auto__ = (((p == null))?null:p);
var m__18181__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18180__auto__)]);
if(!((m__18181__auto__ == null))){
return m__18181__auto__.call(null,p);
} else {
var m__18181__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__18181__auto____$1 == null))){
return m__18181__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18180__auto__ = (((p == null))?null:p);
var m__18181__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18180__auto__)]);
if(!((m__18181__auto__ == null))){
return m__18181__auto__.call(null,p,v);
} else {
var m__18181__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__18181__auto____$1 == null))){
return m__18181__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args41270 = [];
var len__18583__auto___41395 = arguments.length;
var i__18584__auto___41396 = (0);
while(true){
if((i__18584__auto___41396 < len__18583__auto___41395)){
args41270.push((arguments[i__18584__auto___41396]));

var G__41397 = (i__18584__auto___41396 + (1));
i__18584__auto___41396 = G__41397;
continue;
} else {
}
break;
}

var G__41272 = args41270.length;
switch (G__41272) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41270.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__17525__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__17525__auto__)){
return or__17525__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__17525__auto__,mults){
return (function (p1__41269_SHARP_){
if(cljs.core.truth_(p1__41269_SHARP_.call(null,topic))){
return p1__41269_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__41269_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__17525__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async41273 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41273 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta41274){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta41274 = meta41274;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_41275,meta41274__$1){
var self__ = this;
var _41275__$1 = this;
return (new cljs.core.async.t_cljs$core$async41273(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta41274__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41273.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_41275){
var self__ = this;
var _41275__$1 = this;
return self__.meta41274;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41273.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async41273.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41273.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async41273.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41273.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41273.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41273.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41273.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta41274","meta41274",-1223858422,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41273.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41273.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41273";

cljs.core.async.t_cljs$core$async41273.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18123__auto__,writer__18124__auto__,opt__18125__auto__){
return cljs.core._write.call(null,writer__18124__auto__,"cljs.core.async/t_cljs$core$async41273");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async41273 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async41273(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta41274){
return (new cljs.core.async.t_cljs$core$async41273(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta41274));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async41273(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19849__auto___41399 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19849__auto___41399,mults,ensure_mult,p){
return (function (){
var f__19850__auto__ = (function (){var switch__19828__auto__ = ((function (c__19849__auto___41399,mults,ensure_mult,p){
return (function (state_41347){
var state_val_41348 = (state_41347[(1)]);
if((state_val_41348 === (7))){
var inst_41343 = (state_41347[(2)]);
var state_41347__$1 = state_41347;
var statearr_41349_41400 = state_41347__$1;
(statearr_41349_41400[(2)] = inst_41343);

(statearr_41349_41400[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41348 === (20))){
var state_41347__$1 = state_41347;
var statearr_41350_41401 = state_41347__$1;
(statearr_41350_41401[(2)] = null);

(statearr_41350_41401[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41348 === (1))){
var state_41347__$1 = state_41347;
var statearr_41351_41402 = state_41347__$1;
(statearr_41351_41402[(2)] = null);

(statearr_41351_41402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41348 === (24))){
var inst_41326 = (state_41347[(7)]);
var inst_41335 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_41326);
var state_41347__$1 = state_41347;
var statearr_41352_41403 = state_41347__$1;
(statearr_41352_41403[(2)] = inst_41335);

(statearr_41352_41403[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41348 === (4))){
var inst_41278 = (state_41347[(8)]);
var inst_41278__$1 = (state_41347[(2)]);
var inst_41279 = (inst_41278__$1 == null);
var state_41347__$1 = (function (){var statearr_41353 = state_41347;
(statearr_41353[(8)] = inst_41278__$1);

return statearr_41353;
})();
if(cljs.core.truth_(inst_41279)){
var statearr_41354_41404 = state_41347__$1;
(statearr_41354_41404[(1)] = (5));

} else {
var statearr_41355_41405 = state_41347__$1;
(statearr_41355_41405[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41348 === (15))){
var inst_41320 = (state_41347[(2)]);
var state_41347__$1 = state_41347;
var statearr_41356_41406 = state_41347__$1;
(statearr_41356_41406[(2)] = inst_41320);

(statearr_41356_41406[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41348 === (21))){
var inst_41340 = (state_41347[(2)]);
var state_41347__$1 = (function (){var statearr_41357 = state_41347;
(statearr_41357[(9)] = inst_41340);

return statearr_41357;
})();
var statearr_41358_41407 = state_41347__$1;
(statearr_41358_41407[(2)] = null);

(statearr_41358_41407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41348 === (13))){
var inst_41302 = (state_41347[(10)]);
var inst_41304 = cljs.core.chunked_seq_QMARK_.call(null,inst_41302);
var state_41347__$1 = state_41347;
if(inst_41304){
var statearr_41359_41408 = state_41347__$1;
(statearr_41359_41408[(1)] = (16));

} else {
var statearr_41360_41409 = state_41347__$1;
(statearr_41360_41409[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41348 === (22))){
var inst_41332 = (state_41347[(2)]);
var state_41347__$1 = state_41347;
if(cljs.core.truth_(inst_41332)){
var statearr_41361_41410 = state_41347__$1;
(statearr_41361_41410[(1)] = (23));

} else {
var statearr_41362_41411 = state_41347__$1;
(statearr_41362_41411[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41348 === (6))){
var inst_41328 = (state_41347[(11)]);
var inst_41278 = (state_41347[(8)]);
var inst_41326 = (state_41347[(7)]);
var inst_41326__$1 = topic_fn.call(null,inst_41278);
var inst_41327 = cljs.core.deref.call(null,mults);
var inst_41328__$1 = cljs.core.get.call(null,inst_41327,inst_41326__$1);
var state_41347__$1 = (function (){var statearr_41363 = state_41347;
(statearr_41363[(11)] = inst_41328__$1);

(statearr_41363[(7)] = inst_41326__$1);

return statearr_41363;
})();
if(cljs.core.truth_(inst_41328__$1)){
var statearr_41364_41412 = state_41347__$1;
(statearr_41364_41412[(1)] = (19));

} else {
var statearr_41365_41413 = state_41347__$1;
(statearr_41365_41413[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41348 === (25))){
var inst_41337 = (state_41347[(2)]);
var state_41347__$1 = state_41347;
var statearr_41366_41414 = state_41347__$1;
(statearr_41366_41414[(2)] = inst_41337);

(statearr_41366_41414[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41348 === (17))){
var inst_41302 = (state_41347[(10)]);
var inst_41311 = cljs.core.first.call(null,inst_41302);
var inst_41312 = cljs.core.async.muxch_STAR_.call(null,inst_41311);
var inst_41313 = cljs.core.async.close_BANG_.call(null,inst_41312);
var inst_41314 = cljs.core.next.call(null,inst_41302);
var inst_41288 = inst_41314;
var inst_41289 = null;
var inst_41290 = (0);
var inst_41291 = (0);
var state_41347__$1 = (function (){var statearr_41367 = state_41347;
(statearr_41367[(12)] = inst_41290);

(statearr_41367[(13)] = inst_41291);

(statearr_41367[(14)] = inst_41288);

(statearr_41367[(15)] = inst_41313);

(statearr_41367[(16)] = inst_41289);

return statearr_41367;
})();
var statearr_41368_41415 = state_41347__$1;
(statearr_41368_41415[(2)] = null);

(statearr_41368_41415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41348 === (3))){
var inst_41345 = (state_41347[(2)]);
var state_41347__$1 = state_41347;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41347__$1,inst_41345);
} else {
if((state_val_41348 === (12))){
var inst_41322 = (state_41347[(2)]);
var state_41347__$1 = state_41347;
var statearr_41369_41416 = state_41347__$1;
(statearr_41369_41416[(2)] = inst_41322);

(statearr_41369_41416[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41348 === (2))){
var state_41347__$1 = state_41347;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41347__$1,(4),ch);
} else {
if((state_val_41348 === (23))){
var state_41347__$1 = state_41347;
var statearr_41370_41417 = state_41347__$1;
(statearr_41370_41417[(2)] = null);

(statearr_41370_41417[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41348 === (19))){
var inst_41328 = (state_41347[(11)]);
var inst_41278 = (state_41347[(8)]);
var inst_41330 = cljs.core.async.muxch_STAR_.call(null,inst_41328);
var state_41347__$1 = state_41347;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41347__$1,(22),inst_41330,inst_41278);
} else {
if((state_val_41348 === (11))){
var inst_41302 = (state_41347[(10)]);
var inst_41288 = (state_41347[(14)]);
var inst_41302__$1 = cljs.core.seq.call(null,inst_41288);
var state_41347__$1 = (function (){var statearr_41371 = state_41347;
(statearr_41371[(10)] = inst_41302__$1);

return statearr_41371;
})();
if(inst_41302__$1){
var statearr_41372_41418 = state_41347__$1;
(statearr_41372_41418[(1)] = (13));

} else {
var statearr_41373_41419 = state_41347__$1;
(statearr_41373_41419[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41348 === (9))){
var inst_41324 = (state_41347[(2)]);
var state_41347__$1 = state_41347;
var statearr_41374_41420 = state_41347__$1;
(statearr_41374_41420[(2)] = inst_41324);

(statearr_41374_41420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41348 === (5))){
var inst_41285 = cljs.core.deref.call(null,mults);
var inst_41286 = cljs.core.vals.call(null,inst_41285);
var inst_41287 = cljs.core.seq.call(null,inst_41286);
var inst_41288 = inst_41287;
var inst_41289 = null;
var inst_41290 = (0);
var inst_41291 = (0);
var state_41347__$1 = (function (){var statearr_41375 = state_41347;
(statearr_41375[(12)] = inst_41290);

(statearr_41375[(13)] = inst_41291);

(statearr_41375[(14)] = inst_41288);

(statearr_41375[(16)] = inst_41289);

return statearr_41375;
})();
var statearr_41376_41421 = state_41347__$1;
(statearr_41376_41421[(2)] = null);

(statearr_41376_41421[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41348 === (14))){
var state_41347__$1 = state_41347;
var statearr_41380_41422 = state_41347__$1;
(statearr_41380_41422[(2)] = null);

(statearr_41380_41422[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41348 === (16))){
var inst_41302 = (state_41347[(10)]);
var inst_41306 = cljs.core.chunk_first.call(null,inst_41302);
var inst_41307 = cljs.core.chunk_rest.call(null,inst_41302);
var inst_41308 = cljs.core.count.call(null,inst_41306);
var inst_41288 = inst_41307;
var inst_41289 = inst_41306;
var inst_41290 = inst_41308;
var inst_41291 = (0);
var state_41347__$1 = (function (){var statearr_41381 = state_41347;
(statearr_41381[(12)] = inst_41290);

(statearr_41381[(13)] = inst_41291);

(statearr_41381[(14)] = inst_41288);

(statearr_41381[(16)] = inst_41289);

return statearr_41381;
})();
var statearr_41382_41423 = state_41347__$1;
(statearr_41382_41423[(2)] = null);

(statearr_41382_41423[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41348 === (10))){
var inst_41290 = (state_41347[(12)]);
var inst_41291 = (state_41347[(13)]);
var inst_41288 = (state_41347[(14)]);
var inst_41289 = (state_41347[(16)]);
var inst_41296 = cljs.core._nth.call(null,inst_41289,inst_41291);
var inst_41297 = cljs.core.async.muxch_STAR_.call(null,inst_41296);
var inst_41298 = cljs.core.async.close_BANG_.call(null,inst_41297);
var inst_41299 = (inst_41291 + (1));
var tmp41377 = inst_41290;
var tmp41378 = inst_41288;
var tmp41379 = inst_41289;
var inst_41288__$1 = tmp41378;
var inst_41289__$1 = tmp41379;
var inst_41290__$1 = tmp41377;
var inst_41291__$1 = inst_41299;
var state_41347__$1 = (function (){var statearr_41383 = state_41347;
(statearr_41383[(17)] = inst_41298);

(statearr_41383[(12)] = inst_41290__$1);

(statearr_41383[(13)] = inst_41291__$1);

(statearr_41383[(14)] = inst_41288__$1);

(statearr_41383[(16)] = inst_41289__$1);

return statearr_41383;
})();
var statearr_41384_41424 = state_41347__$1;
(statearr_41384_41424[(2)] = null);

(statearr_41384_41424[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41348 === (18))){
var inst_41317 = (state_41347[(2)]);
var state_41347__$1 = state_41347;
var statearr_41385_41425 = state_41347__$1;
(statearr_41385_41425[(2)] = inst_41317);

(statearr_41385_41425[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41348 === (8))){
var inst_41290 = (state_41347[(12)]);
var inst_41291 = (state_41347[(13)]);
var inst_41293 = (inst_41291 < inst_41290);
var inst_41294 = inst_41293;
var state_41347__$1 = state_41347;
if(cljs.core.truth_(inst_41294)){
var statearr_41386_41426 = state_41347__$1;
(statearr_41386_41426[(1)] = (10));

} else {
var statearr_41387_41427 = state_41347__$1;
(statearr_41387_41427[(1)] = (11));

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
});})(c__19849__auto___41399,mults,ensure_mult,p))
;
return ((function (switch__19828__auto__,c__19849__auto___41399,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19829__auto__ = null;
var cljs$core$async$state_machine__19829__auto____0 = (function (){
var statearr_41391 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41391[(0)] = cljs$core$async$state_machine__19829__auto__);

(statearr_41391[(1)] = (1));

return statearr_41391;
});
var cljs$core$async$state_machine__19829__auto____1 = (function (state_41347){
while(true){
var ret_value__19830__auto__ = (function (){try{while(true){
var result__19831__auto__ = switch__19828__auto__.call(null,state_41347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19831__auto__;
}
break;
}
}catch (e41392){if((e41392 instanceof Object)){
var ex__19832__auto__ = e41392;
var statearr_41393_41428 = state_41347;
(statearr_41393_41428[(5)] = ex__19832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41392;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41429 = state_41347;
state_41347 = G__41429;
continue;
} else {
return ret_value__19830__auto__;
}
break;
}
});
cljs$core$async$state_machine__19829__auto__ = function(state_41347){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19829__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19829__auto____1.call(this,state_41347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19829__auto____0;
cljs$core$async$state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19829__auto____1;
return cljs$core$async$state_machine__19829__auto__;
})()
;})(switch__19828__auto__,c__19849__auto___41399,mults,ensure_mult,p))
})();
var state__19851__auto__ = (function (){var statearr_41394 = f__19850__auto__.call(null);
(statearr_41394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19849__auto___41399);

return statearr_41394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19851__auto__);
});})(c__19849__auto___41399,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args41430 = [];
var len__18583__auto___41433 = arguments.length;
var i__18584__auto___41434 = (0);
while(true){
if((i__18584__auto___41434 < len__18583__auto___41433)){
args41430.push((arguments[i__18584__auto___41434]));

var G__41435 = (i__18584__auto___41434 + (1));
i__18584__auto___41434 = G__41435;
continue;
} else {
}
break;
}

var G__41432 = args41430.length;
switch (G__41432) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41430.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args41437 = [];
var len__18583__auto___41440 = arguments.length;
var i__18584__auto___41441 = (0);
while(true){
if((i__18584__auto___41441 < len__18583__auto___41440)){
args41437.push((arguments[i__18584__auto___41441]));

var G__41442 = (i__18584__auto___41441 + (1));
i__18584__auto___41441 = G__41442;
continue;
} else {
}
break;
}

var G__41439 = args41437.length;
switch (G__41439) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41437.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args41444 = [];
var len__18583__auto___41515 = arguments.length;
var i__18584__auto___41516 = (0);
while(true){
if((i__18584__auto___41516 < len__18583__auto___41515)){
args41444.push((arguments[i__18584__auto___41516]));

var G__41517 = (i__18584__auto___41516 + (1));
i__18584__auto___41516 = G__41517;
continue;
} else {
}
break;
}

var G__41446 = args41444.length;
switch (G__41446) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41444.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19849__auto___41519 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19849__auto___41519,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19850__auto__ = (function (){var switch__19828__auto__ = ((function (c__19849__auto___41519,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_41485){
var state_val_41486 = (state_41485[(1)]);
if((state_val_41486 === (7))){
var state_41485__$1 = state_41485;
var statearr_41487_41520 = state_41485__$1;
(statearr_41487_41520[(2)] = null);

(statearr_41487_41520[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41486 === (1))){
var state_41485__$1 = state_41485;
var statearr_41488_41521 = state_41485__$1;
(statearr_41488_41521[(2)] = null);

(statearr_41488_41521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41486 === (4))){
var inst_41449 = (state_41485[(7)]);
var inst_41451 = (inst_41449 < cnt);
var state_41485__$1 = state_41485;
if(cljs.core.truth_(inst_41451)){
var statearr_41489_41522 = state_41485__$1;
(statearr_41489_41522[(1)] = (6));

} else {
var statearr_41490_41523 = state_41485__$1;
(statearr_41490_41523[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41486 === (15))){
var inst_41481 = (state_41485[(2)]);
var state_41485__$1 = state_41485;
var statearr_41491_41524 = state_41485__$1;
(statearr_41491_41524[(2)] = inst_41481);

(statearr_41491_41524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41486 === (13))){
var inst_41474 = cljs.core.async.close_BANG_.call(null,out);
var state_41485__$1 = state_41485;
var statearr_41492_41525 = state_41485__$1;
(statearr_41492_41525[(2)] = inst_41474);

(statearr_41492_41525[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41486 === (6))){
var state_41485__$1 = state_41485;
var statearr_41493_41526 = state_41485__$1;
(statearr_41493_41526[(2)] = null);

(statearr_41493_41526[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41486 === (3))){
var inst_41483 = (state_41485[(2)]);
var state_41485__$1 = state_41485;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41485__$1,inst_41483);
} else {
if((state_val_41486 === (12))){
var inst_41471 = (state_41485[(8)]);
var inst_41471__$1 = (state_41485[(2)]);
var inst_41472 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_41471__$1);
var state_41485__$1 = (function (){var statearr_41494 = state_41485;
(statearr_41494[(8)] = inst_41471__$1);

return statearr_41494;
})();
if(cljs.core.truth_(inst_41472)){
var statearr_41495_41527 = state_41485__$1;
(statearr_41495_41527[(1)] = (13));

} else {
var statearr_41496_41528 = state_41485__$1;
(statearr_41496_41528[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41486 === (2))){
var inst_41448 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_41449 = (0);
var state_41485__$1 = (function (){var statearr_41497 = state_41485;
(statearr_41497[(7)] = inst_41449);

(statearr_41497[(9)] = inst_41448);

return statearr_41497;
})();
var statearr_41498_41529 = state_41485__$1;
(statearr_41498_41529[(2)] = null);

(statearr_41498_41529[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41486 === (11))){
var inst_41449 = (state_41485[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41485,(10),Object,null,(9));
var inst_41458 = chs__$1.call(null,inst_41449);
var inst_41459 = done.call(null,inst_41449);
var inst_41460 = cljs.core.async.take_BANG_.call(null,inst_41458,inst_41459);
var state_41485__$1 = state_41485;
var statearr_41499_41530 = state_41485__$1;
(statearr_41499_41530[(2)] = inst_41460);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41485__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41486 === (9))){
var inst_41449 = (state_41485[(7)]);
var inst_41462 = (state_41485[(2)]);
var inst_41463 = (inst_41449 + (1));
var inst_41449__$1 = inst_41463;
var state_41485__$1 = (function (){var statearr_41500 = state_41485;
(statearr_41500[(7)] = inst_41449__$1);

(statearr_41500[(11)] = inst_41462);

return statearr_41500;
})();
var statearr_41501_41531 = state_41485__$1;
(statearr_41501_41531[(2)] = null);

(statearr_41501_41531[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41486 === (5))){
var inst_41469 = (state_41485[(2)]);
var state_41485__$1 = (function (){var statearr_41502 = state_41485;
(statearr_41502[(10)] = inst_41469);

return statearr_41502;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41485__$1,(12),dchan);
} else {
if((state_val_41486 === (14))){
var inst_41471 = (state_41485[(8)]);
var inst_41476 = cljs.core.apply.call(null,f,inst_41471);
var state_41485__$1 = state_41485;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41485__$1,(16),out,inst_41476);
} else {
if((state_val_41486 === (16))){
var inst_41478 = (state_41485[(2)]);
var state_41485__$1 = (function (){var statearr_41503 = state_41485;
(statearr_41503[(12)] = inst_41478);

return statearr_41503;
})();
var statearr_41504_41532 = state_41485__$1;
(statearr_41504_41532[(2)] = null);

(statearr_41504_41532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41486 === (10))){
var inst_41453 = (state_41485[(2)]);
var inst_41454 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_41485__$1 = (function (){var statearr_41505 = state_41485;
(statearr_41505[(13)] = inst_41453);

return statearr_41505;
})();
var statearr_41506_41533 = state_41485__$1;
(statearr_41506_41533[(2)] = inst_41454);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41485__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41486 === (8))){
var inst_41467 = (state_41485[(2)]);
var state_41485__$1 = state_41485;
var statearr_41507_41534 = state_41485__$1;
(statearr_41507_41534[(2)] = inst_41467);

(statearr_41507_41534[(1)] = (5));


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
});})(c__19849__auto___41519,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19828__auto__,c__19849__auto___41519,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19829__auto__ = null;
var cljs$core$async$state_machine__19829__auto____0 = (function (){
var statearr_41511 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41511[(0)] = cljs$core$async$state_machine__19829__auto__);

(statearr_41511[(1)] = (1));

return statearr_41511;
});
var cljs$core$async$state_machine__19829__auto____1 = (function (state_41485){
while(true){
var ret_value__19830__auto__ = (function (){try{while(true){
var result__19831__auto__ = switch__19828__auto__.call(null,state_41485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19831__auto__;
}
break;
}
}catch (e41512){if((e41512 instanceof Object)){
var ex__19832__auto__ = e41512;
var statearr_41513_41535 = state_41485;
(statearr_41513_41535[(5)] = ex__19832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41512;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41536 = state_41485;
state_41485 = G__41536;
continue;
} else {
return ret_value__19830__auto__;
}
break;
}
});
cljs$core$async$state_machine__19829__auto__ = function(state_41485){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19829__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19829__auto____1.call(this,state_41485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19829__auto____0;
cljs$core$async$state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19829__auto____1;
return cljs$core$async$state_machine__19829__auto__;
})()
;})(switch__19828__auto__,c__19849__auto___41519,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19851__auto__ = (function (){var statearr_41514 = f__19850__auto__.call(null);
(statearr_41514[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19849__auto___41519);

return statearr_41514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19851__auto__);
});})(c__19849__auto___41519,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args41538 = [];
var len__18583__auto___41594 = arguments.length;
var i__18584__auto___41595 = (0);
while(true){
if((i__18584__auto___41595 < len__18583__auto___41594)){
args41538.push((arguments[i__18584__auto___41595]));

var G__41596 = (i__18584__auto___41595 + (1));
i__18584__auto___41595 = G__41596;
continue;
} else {
}
break;
}

var G__41540 = args41538.length;
switch (G__41540) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41538.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19849__auto___41598 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19849__auto___41598,out){
return (function (){
var f__19850__auto__ = (function (){var switch__19828__auto__ = ((function (c__19849__auto___41598,out){
return (function (state_41570){
var state_val_41571 = (state_41570[(1)]);
if((state_val_41571 === (7))){
var inst_41550 = (state_41570[(7)]);
var inst_41549 = (state_41570[(8)]);
var inst_41549__$1 = (state_41570[(2)]);
var inst_41550__$1 = cljs.core.nth.call(null,inst_41549__$1,(0),null);
var inst_41551 = cljs.core.nth.call(null,inst_41549__$1,(1),null);
var inst_41552 = (inst_41550__$1 == null);
var state_41570__$1 = (function (){var statearr_41572 = state_41570;
(statearr_41572[(7)] = inst_41550__$1);

(statearr_41572[(8)] = inst_41549__$1);

(statearr_41572[(10)] = inst_41551);

return statearr_41572;
})();
if(cljs.core.truth_(inst_41552)){
var statearr_41573_41599 = state_41570__$1;
(statearr_41573_41599[(1)] = (8));

} else {
var statearr_41574_41600 = state_41570__$1;
(statearr_41574_41600[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41571 === (1))){
var inst_41541 = cljs.core.vec.call(null,chs);
var inst_41542 = inst_41541;
var state_41570__$1 = (function (){var statearr_41575 = state_41570;
(statearr_41575[(9)] = inst_41542);

return statearr_41575;
})();
var statearr_41576_41601 = state_41570__$1;
(statearr_41576_41601[(2)] = null);

(statearr_41576_41601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41571 === (4))){
var inst_41542 = (state_41570[(9)]);
var state_41570__$1 = state_41570;
return cljs.core.async.ioc_alts_BANG_.call(null,state_41570__$1,(7),inst_41542);
} else {
if((state_val_41571 === (6))){
var inst_41566 = (state_41570[(2)]);
var state_41570__$1 = state_41570;
var statearr_41577_41602 = state_41570__$1;
(statearr_41577_41602[(2)] = inst_41566);

(statearr_41577_41602[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41571 === (3))){
var inst_41568 = (state_41570[(2)]);
var state_41570__$1 = state_41570;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41570__$1,inst_41568);
} else {
if((state_val_41571 === (2))){
var inst_41542 = (state_41570[(9)]);
var inst_41544 = cljs.core.count.call(null,inst_41542);
var inst_41545 = (inst_41544 > (0));
var state_41570__$1 = state_41570;
if(cljs.core.truth_(inst_41545)){
var statearr_41579_41603 = state_41570__$1;
(statearr_41579_41603[(1)] = (4));

} else {
var statearr_41580_41604 = state_41570__$1;
(statearr_41580_41604[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41571 === (11))){
var inst_41542 = (state_41570[(9)]);
var inst_41559 = (state_41570[(2)]);
var tmp41578 = inst_41542;
var inst_41542__$1 = tmp41578;
var state_41570__$1 = (function (){var statearr_41581 = state_41570;
(statearr_41581[(9)] = inst_41542__$1);

(statearr_41581[(11)] = inst_41559);

return statearr_41581;
})();
var statearr_41582_41605 = state_41570__$1;
(statearr_41582_41605[(2)] = null);

(statearr_41582_41605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41571 === (9))){
var inst_41550 = (state_41570[(7)]);
var state_41570__$1 = state_41570;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41570__$1,(11),out,inst_41550);
} else {
if((state_val_41571 === (5))){
var inst_41564 = cljs.core.async.close_BANG_.call(null,out);
var state_41570__$1 = state_41570;
var statearr_41583_41606 = state_41570__$1;
(statearr_41583_41606[(2)] = inst_41564);

(statearr_41583_41606[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41571 === (10))){
var inst_41562 = (state_41570[(2)]);
var state_41570__$1 = state_41570;
var statearr_41584_41607 = state_41570__$1;
(statearr_41584_41607[(2)] = inst_41562);

(statearr_41584_41607[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41571 === (8))){
var inst_41542 = (state_41570[(9)]);
var inst_41550 = (state_41570[(7)]);
var inst_41549 = (state_41570[(8)]);
var inst_41551 = (state_41570[(10)]);
var inst_41554 = (function (){var cs = inst_41542;
var vec__41547 = inst_41549;
var v = inst_41550;
var c = inst_41551;
return ((function (cs,vec__41547,v,c,inst_41542,inst_41550,inst_41549,inst_41551,state_val_41571,c__19849__auto___41598,out){
return (function (p1__41537_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__41537_SHARP_);
});
;})(cs,vec__41547,v,c,inst_41542,inst_41550,inst_41549,inst_41551,state_val_41571,c__19849__auto___41598,out))
})();
var inst_41555 = cljs.core.filterv.call(null,inst_41554,inst_41542);
var inst_41542__$1 = inst_41555;
var state_41570__$1 = (function (){var statearr_41585 = state_41570;
(statearr_41585[(9)] = inst_41542__$1);

return statearr_41585;
})();
var statearr_41586_41608 = state_41570__$1;
(statearr_41586_41608[(2)] = null);

(statearr_41586_41608[(1)] = (2));


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
});})(c__19849__auto___41598,out))
;
return ((function (switch__19828__auto__,c__19849__auto___41598,out){
return (function() {
var cljs$core$async$state_machine__19829__auto__ = null;
var cljs$core$async$state_machine__19829__auto____0 = (function (){
var statearr_41590 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41590[(0)] = cljs$core$async$state_machine__19829__auto__);

(statearr_41590[(1)] = (1));

return statearr_41590;
});
var cljs$core$async$state_machine__19829__auto____1 = (function (state_41570){
while(true){
var ret_value__19830__auto__ = (function (){try{while(true){
var result__19831__auto__ = switch__19828__auto__.call(null,state_41570);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19831__auto__;
}
break;
}
}catch (e41591){if((e41591 instanceof Object)){
var ex__19832__auto__ = e41591;
var statearr_41592_41609 = state_41570;
(statearr_41592_41609[(5)] = ex__19832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41610 = state_41570;
state_41570 = G__41610;
continue;
} else {
return ret_value__19830__auto__;
}
break;
}
});
cljs$core$async$state_machine__19829__auto__ = function(state_41570){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19829__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19829__auto____1.call(this,state_41570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19829__auto____0;
cljs$core$async$state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19829__auto____1;
return cljs$core$async$state_machine__19829__auto__;
})()
;})(switch__19828__auto__,c__19849__auto___41598,out))
})();
var state__19851__auto__ = (function (){var statearr_41593 = f__19850__auto__.call(null);
(statearr_41593[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19849__auto___41598);

return statearr_41593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19851__auto__);
});})(c__19849__auto___41598,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args41611 = [];
var len__18583__auto___41660 = arguments.length;
var i__18584__auto___41661 = (0);
while(true){
if((i__18584__auto___41661 < len__18583__auto___41660)){
args41611.push((arguments[i__18584__auto___41661]));

var G__41662 = (i__18584__auto___41661 + (1));
i__18584__auto___41661 = G__41662;
continue;
} else {
}
break;
}

var G__41613 = args41611.length;
switch (G__41613) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41611.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19849__auto___41664 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19849__auto___41664,out){
return (function (){
var f__19850__auto__ = (function (){var switch__19828__auto__ = ((function (c__19849__auto___41664,out){
return (function (state_41637){
var state_val_41638 = (state_41637[(1)]);
if((state_val_41638 === (7))){
var inst_41619 = (state_41637[(7)]);
var inst_41619__$1 = (state_41637[(2)]);
var inst_41620 = (inst_41619__$1 == null);
var inst_41621 = cljs.core.not.call(null,inst_41620);
var state_41637__$1 = (function (){var statearr_41639 = state_41637;
(statearr_41639[(7)] = inst_41619__$1);

return statearr_41639;
})();
if(inst_41621){
var statearr_41640_41665 = state_41637__$1;
(statearr_41640_41665[(1)] = (8));

} else {
var statearr_41641_41666 = state_41637__$1;
(statearr_41641_41666[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41638 === (1))){
var inst_41614 = (0);
var state_41637__$1 = (function (){var statearr_41642 = state_41637;
(statearr_41642[(8)] = inst_41614);

return statearr_41642;
})();
var statearr_41643_41667 = state_41637__$1;
(statearr_41643_41667[(2)] = null);

(statearr_41643_41667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41638 === (4))){
var state_41637__$1 = state_41637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41637__$1,(7),ch);
} else {
if((state_val_41638 === (6))){
var inst_41632 = (state_41637[(2)]);
var state_41637__$1 = state_41637;
var statearr_41644_41668 = state_41637__$1;
(statearr_41644_41668[(2)] = inst_41632);

(statearr_41644_41668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41638 === (3))){
var inst_41634 = (state_41637[(2)]);
var inst_41635 = cljs.core.async.close_BANG_.call(null,out);
var state_41637__$1 = (function (){var statearr_41645 = state_41637;
(statearr_41645[(9)] = inst_41634);

return statearr_41645;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41637__$1,inst_41635);
} else {
if((state_val_41638 === (2))){
var inst_41614 = (state_41637[(8)]);
var inst_41616 = (inst_41614 < n);
var state_41637__$1 = state_41637;
if(cljs.core.truth_(inst_41616)){
var statearr_41646_41669 = state_41637__$1;
(statearr_41646_41669[(1)] = (4));

} else {
var statearr_41647_41670 = state_41637__$1;
(statearr_41647_41670[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41638 === (11))){
var inst_41614 = (state_41637[(8)]);
var inst_41624 = (state_41637[(2)]);
var inst_41625 = (inst_41614 + (1));
var inst_41614__$1 = inst_41625;
var state_41637__$1 = (function (){var statearr_41648 = state_41637;
(statearr_41648[(8)] = inst_41614__$1);

(statearr_41648[(10)] = inst_41624);

return statearr_41648;
})();
var statearr_41649_41671 = state_41637__$1;
(statearr_41649_41671[(2)] = null);

(statearr_41649_41671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41638 === (9))){
var state_41637__$1 = state_41637;
var statearr_41650_41672 = state_41637__$1;
(statearr_41650_41672[(2)] = null);

(statearr_41650_41672[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41638 === (5))){
var state_41637__$1 = state_41637;
var statearr_41651_41673 = state_41637__$1;
(statearr_41651_41673[(2)] = null);

(statearr_41651_41673[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41638 === (10))){
var inst_41629 = (state_41637[(2)]);
var state_41637__$1 = state_41637;
var statearr_41652_41674 = state_41637__$1;
(statearr_41652_41674[(2)] = inst_41629);

(statearr_41652_41674[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41638 === (8))){
var inst_41619 = (state_41637[(7)]);
var state_41637__$1 = state_41637;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41637__$1,(11),out,inst_41619);
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
});})(c__19849__auto___41664,out))
;
return ((function (switch__19828__auto__,c__19849__auto___41664,out){
return (function() {
var cljs$core$async$state_machine__19829__auto__ = null;
var cljs$core$async$state_machine__19829__auto____0 = (function (){
var statearr_41656 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41656[(0)] = cljs$core$async$state_machine__19829__auto__);

(statearr_41656[(1)] = (1));

return statearr_41656;
});
var cljs$core$async$state_machine__19829__auto____1 = (function (state_41637){
while(true){
var ret_value__19830__auto__ = (function (){try{while(true){
var result__19831__auto__ = switch__19828__auto__.call(null,state_41637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19831__auto__;
}
break;
}
}catch (e41657){if((e41657 instanceof Object)){
var ex__19832__auto__ = e41657;
var statearr_41658_41675 = state_41637;
(statearr_41658_41675[(5)] = ex__19832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41676 = state_41637;
state_41637 = G__41676;
continue;
} else {
return ret_value__19830__auto__;
}
break;
}
});
cljs$core$async$state_machine__19829__auto__ = function(state_41637){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19829__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19829__auto____1.call(this,state_41637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19829__auto____0;
cljs$core$async$state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19829__auto____1;
return cljs$core$async$state_machine__19829__auto__;
})()
;})(switch__19828__auto__,c__19849__auto___41664,out))
})();
var state__19851__auto__ = (function (){var statearr_41659 = f__19850__auto__.call(null);
(statearr_41659[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19849__auto___41664);

return statearr_41659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19851__auto__);
});})(c__19849__auto___41664,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async41684 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41684 = (function (map_LT_,f,ch,meta41685){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta41685 = meta41685;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41686,meta41685__$1){
var self__ = this;
var _41686__$1 = this;
return (new cljs.core.async.t_cljs$core$async41684(self__.map_LT_,self__.f,self__.ch,meta41685__$1));
});

cljs.core.async.t_cljs$core$async41684.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41686){
var self__ = this;
var _41686__$1 = this;
return self__.meta41685;
});

cljs.core.async.t_cljs$core$async41684.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async41684.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41684.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41684.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async41684.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async41687 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41687 = (function (map_LT_,f,ch,meta41685,_,fn1,meta41688){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta41685 = meta41685;
this._ = _;
this.fn1 = fn1;
this.meta41688 = meta41688;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_41689,meta41688__$1){
var self__ = this;
var _41689__$1 = this;
return (new cljs.core.async.t_cljs$core$async41687(self__.map_LT_,self__.f,self__.ch,self__.meta41685,self__._,self__.fn1,meta41688__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async41687.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_41689){
var self__ = this;
var _41689__$1 = this;
return self__.meta41688;
});})(___$1))
;

cljs.core.async.t_cljs$core$async41687.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async41687.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async41687.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async41687.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__41677_SHARP_){
return f1.call(null,(((p1__41677_SHARP_ == null))?null:self__.f.call(null,p1__41677_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async41687.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41685","meta41685",575214146,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async41684","cljs.core.async/t_cljs$core$async41684",2182929,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta41688","meta41688",368877015,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async41687.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41687.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41687";

cljs.core.async.t_cljs$core$async41687.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18123__auto__,writer__18124__auto__,opt__18125__auto__){
return cljs.core._write.call(null,writer__18124__auto__,"cljs.core.async/t_cljs$core$async41687");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async41687 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async41687(map_LT___$1,f__$1,ch__$1,meta41685__$1,___$2,fn1__$1,meta41688){
return (new cljs.core.async.t_cljs$core$async41687(map_LT___$1,f__$1,ch__$1,meta41685__$1,___$2,fn1__$1,meta41688));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async41687(self__.map_LT_,self__.f,self__.ch,self__.meta41685,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__17513__auto__ = ret;
if(cljs.core.truth_(and__17513__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__17513__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async41684.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async41684.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async41684.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41685","meta41685",575214146,null)], null);
});

cljs.core.async.t_cljs$core$async41684.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41684.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41684";

cljs.core.async.t_cljs$core$async41684.cljs$lang$ctorPrWriter = (function (this__18123__auto__,writer__18124__auto__,opt__18125__auto__){
return cljs.core._write.call(null,writer__18124__auto__,"cljs.core.async/t_cljs$core$async41684");
});

cljs.core.async.__GT_t_cljs$core$async41684 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async41684(map_LT___$1,f__$1,ch__$1,meta41685){
return (new cljs.core.async.t_cljs$core$async41684(map_LT___$1,f__$1,ch__$1,meta41685));
});

}

return (new cljs.core.async.t_cljs$core$async41684(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async41693 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41693 = (function (map_GT_,f,ch,meta41694){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta41694 = meta41694;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41695,meta41694__$1){
var self__ = this;
var _41695__$1 = this;
return (new cljs.core.async.t_cljs$core$async41693(self__.map_GT_,self__.f,self__.ch,meta41694__$1));
});

cljs.core.async.t_cljs$core$async41693.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41695){
var self__ = this;
var _41695__$1 = this;
return self__.meta41694;
});

cljs.core.async.t_cljs$core$async41693.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async41693.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41693.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async41693.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async41693.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async41693.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async41693.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41694","meta41694",-525855758,null)], null);
});

cljs.core.async.t_cljs$core$async41693.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41693.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41693";

cljs.core.async.t_cljs$core$async41693.cljs$lang$ctorPrWriter = (function (this__18123__auto__,writer__18124__auto__,opt__18125__auto__){
return cljs.core._write.call(null,writer__18124__auto__,"cljs.core.async/t_cljs$core$async41693");
});

cljs.core.async.__GT_t_cljs$core$async41693 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async41693(map_GT___$1,f__$1,ch__$1,meta41694){
return (new cljs.core.async.t_cljs$core$async41693(map_GT___$1,f__$1,ch__$1,meta41694));
});

}

return (new cljs.core.async.t_cljs$core$async41693(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async41699 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41699 = (function (filter_GT_,p,ch,meta41700){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta41700 = meta41700;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41699.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41701,meta41700__$1){
var self__ = this;
var _41701__$1 = this;
return (new cljs.core.async.t_cljs$core$async41699(self__.filter_GT_,self__.p,self__.ch,meta41700__$1));
});

cljs.core.async.t_cljs$core$async41699.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41701){
var self__ = this;
var _41701__$1 = this;
return self__.meta41700;
});

cljs.core.async.t_cljs$core$async41699.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async41699.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41699.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41699.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async41699.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async41699.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async41699.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async41699.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41700","meta41700",878763872,null)], null);
});

cljs.core.async.t_cljs$core$async41699.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41699.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41699";

cljs.core.async.t_cljs$core$async41699.cljs$lang$ctorPrWriter = (function (this__18123__auto__,writer__18124__auto__,opt__18125__auto__){
return cljs.core._write.call(null,writer__18124__auto__,"cljs.core.async/t_cljs$core$async41699");
});

cljs.core.async.__GT_t_cljs$core$async41699 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async41699(filter_GT___$1,p__$1,ch__$1,meta41700){
return (new cljs.core.async.t_cljs$core$async41699(filter_GT___$1,p__$1,ch__$1,meta41700));
});

}

return (new cljs.core.async.t_cljs$core$async41699(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args41702 = [];
var len__18583__auto___41746 = arguments.length;
var i__18584__auto___41747 = (0);
while(true){
if((i__18584__auto___41747 < len__18583__auto___41746)){
args41702.push((arguments[i__18584__auto___41747]));

var G__41748 = (i__18584__auto___41747 + (1));
i__18584__auto___41747 = G__41748;
continue;
} else {
}
break;
}

var G__41704 = args41702.length;
switch (G__41704) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41702.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19849__auto___41750 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19849__auto___41750,out){
return (function (){
var f__19850__auto__ = (function (){var switch__19828__auto__ = ((function (c__19849__auto___41750,out){
return (function (state_41725){
var state_val_41726 = (state_41725[(1)]);
if((state_val_41726 === (7))){
var inst_41721 = (state_41725[(2)]);
var state_41725__$1 = state_41725;
var statearr_41727_41751 = state_41725__$1;
(statearr_41727_41751[(2)] = inst_41721);

(statearr_41727_41751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41726 === (1))){
var state_41725__$1 = state_41725;
var statearr_41728_41752 = state_41725__$1;
(statearr_41728_41752[(2)] = null);

(statearr_41728_41752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41726 === (4))){
var inst_41707 = (state_41725[(7)]);
var inst_41707__$1 = (state_41725[(2)]);
var inst_41708 = (inst_41707__$1 == null);
var state_41725__$1 = (function (){var statearr_41729 = state_41725;
(statearr_41729[(7)] = inst_41707__$1);

return statearr_41729;
})();
if(cljs.core.truth_(inst_41708)){
var statearr_41730_41753 = state_41725__$1;
(statearr_41730_41753[(1)] = (5));

} else {
var statearr_41731_41754 = state_41725__$1;
(statearr_41731_41754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41726 === (6))){
var inst_41707 = (state_41725[(7)]);
var inst_41712 = p.call(null,inst_41707);
var state_41725__$1 = state_41725;
if(cljs.core.truth_(inst_41712)){
var statearr_41732_41755 = state_41725__$1;
(statearr_41732_41755[(1)] = (8));

} else {
var statearr_41733_41756 = state_41725__$1;
(statearr_41733_41756[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41726 === (3))){
var inst_41723 = (state_41725[(2)]);
var state_41725__$1 = state_41725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41725__$1,inst_41723);
} else {
if((state_val_41726 === (2))){
var state_41725__$1 = state_41725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41725__$1,(4),ch);
} else {
if((state_val_41726 === (11))){
var inst_41715 = (state_41725[(2)]);
var state_41725__$1 = state_41725;
var statearr_41734_41757 = state_41725__$1;
(statearr_41734_41757[(2)] = inst_41715);

(statearr_41734_41757[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41726 === (9))){
var state_41725__$1 = state_41725;
var statearr_41735_41758 = state_41725__$1;
(statearr_41735_41758[(2)] = null);

(statearr_41735_41758[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41726 === (5))){
var inst_41710 = cljs.core.async.close_BANG_.call(null,out);
var state_41725__$1 = state_41725;
var statearr_41736_41759 = state_41725__$1;
(statearr_41736_41759[(2)] = inst_41710);

(statearr_41736_41759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41726 === (10))){
var inst_41718 = (state_41725[(2)]);
var state_41725__$1 = (function (){var statearr_41737 = state_41725;
(statearr_41737[(8)] = inst_41718);

return statearr_41737;
})();
var statearr_41738_41760 = state_41725__$1;
(statearr_41738_41760[(2)] = null);

(statearr_41738_41760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41726 === (8))){
var inst_41707 = (state_41725[(7)]);
var state_41725__$1 = state_41725;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41725__$1,(11),out,inst_41707);
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
});})(c__19849__auto___41750,out))
;
return ((function (switch__19828__auto__,c__19849__auto___41750,out){
return (function() {
var cljs$core$async$state_machine__19829__auto__ = null;
var cljs$core$async$state_machine__19829__auto____0 = (function (){
var statearr_41742 = [null,null,null,null,null,null,null,null,null];
(statearr_41742[(0)] = cljs$core$async$state_machine__19829__auto__);

(statearr_41742[(1)] = (1));

return statearr_41742;
});
var cljs$core$async$state_machine__19829__auto____1 = (function (state_41725){
while(true){
var ret_value__19830__auto__ = (function (){try{while(true){
var result__19831__auto__ = switch__19828__auto__.call(null,state_41725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19831__auto__;
}
break;
}
}catch (e41743){if((e41743 instanceof Object)){
var ex__19832__auto__ = e41743;
var statearr_41744_41761 = state_41725;
(statearr_41744_41761[(5)] = ex__19832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41743;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41762 = state_41725;
state_41725 = G__41762;
continue;
} else {
return ret_value__19830__auto__;
}
break;
}
});
cljs$core$async$state_machine__19829__auto__ = function(state_41725){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19829__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19829__auto____1.call(this,state_41725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19829__auto____0;
cljs$core$async$state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19829__auto____1;
return cljs$core$async$state_machine__19829__auto__;
})()
;})(switch__19828__auto__,c__19849__auto___41750,out))
})();
var state__19851__auto__ = (function (){var statearr_41745 = f__19850__auto__.call(null);
(statearr_41745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19849__auto___41750);

return statearr_41745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19851__auto__);
});})(c__19849__auto___41750,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args41763 = [];
var len__18583__auto___41766 = arguments.length;
var i__18584__auto___41767 = (0);
while(true){
if((i__18584__auto___41767 < len__18583__auto___41766)){
args41763.push((arguments[i__18584__auto___41767]));

var G__41768 = (i__18584__auto___41767 + (1));
i__18584__auto___41767 = G__41768;
continue;
} else {
}
break;
}

var G__41765 = args41763.length;
switch (G__41765) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41763.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19849__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19849__auto__){
return (function (){
var f__19850__auto__ = (function (){var switch__19828__auto__ = ((function (c__19849__auto__){
return (function (state_41935){
var state_val_41936 = (state_41935[(1)]);
if((state_val_41936 === (7))){
var inst_41931 = (state_41935[(2)]);
var state_41935__$1 = state_41935;
var statearr_41937_41978 = state_41935__$1;
(statearr_41937_41978[(2)] = inst_41931);

(statearr_41937_41978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41936 === (20))){
var inst_41901 = (state_41935[(7)]);
var inst_41912 = (state_41935[(2)]);
var inst_41913 = cljs.core.next.call(null,inst_41901);
var inst_41887 = inst_41913;
var inst_41888 = null;
var inst_41889 = (0);
var inst_41890 = (0);
var state_41935__$1 = (function (){var statearr_41938 = state_41935;
(statearr_41938[(8)] = inst_41890);

(statearr_41938[(10)] = inst_41889);

(statearr_41938[(11)] = inst_41887);

(statearr_41938[(12)] = inst_41912);

(statearr_41938[(13)] = inst_41888);

return statearr_41938;
})();
var statearr_41939_41979 = state_41935__$1;
(statearr_41939_41979[(2)] = null);

(statearr_41939_41979[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41936 === (1))){
var state_41935__$1 = state_41935;
var statearr_41940_41980 = state_41935__$1;
(statearr_41940_41980[(2)] = null);

(statearr_41940_41980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41936 === (4))){
var inst_41876 = (state_41935[(9)]);
var inst_41876__$1 = (state_41935[(2)]);
var inst_41877 = (inst_41876__$1 == null);
var state_41935__$1 = (function (){var statearr_41941 = state_41935;
(statearr_41941[(9)] = inst_41876__$1);

return statearr_41941;
})();
if(cljs.core.truth_(inst_41877)){
var statearr_41942_41981 = state_41935__$1;
(statearr_41942_41981[(1)] = (5));

} else {
var statearr_41943_41982 = state_41935__$1;
(statearr_41943_41982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41936 === (15))){
var state_41935__$1 = state_41935;
var statearr_41947_41983 = state_41935__$1;
(statearr_41947_41983[(2)] = null);

(statearr_41947_41983[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41936 === (21))){
var state_41935__$1 = state_41935;
var statearr_41948_41984 = state_41935__$1;
(statearr_41948_41984[(2)] = null);

(statearr_41948_41984[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41936 === (13))){
var inst_41890 = (state_41935[(8)]);
var inst_41889 = (state_41935[(10)]);
var inst_41887 = (state_41935[(11)]);
var inst_41888 = (state_41935[(13)]);
var inst_41897 = (state_41935[(2)]);
var inst_41898 = (inst_41890 + (1));
var tmp41944 = inst_41889;
var tmp41945 = inst_41887;
var tmp41946 = inst_41888;
var inst_41887__$1 = tmp41945;
var inst_41888__$1 = tmp41946;
var inst_41889__$1 = tmp41944;
var inst_41890__$1 = inst_41898;
var state_41935__$1 = (function (){var statearr_41949 = state_41935;
(statearr_41949[(14)] = inst_41897);

(statearr_41949[(8)] = inst_41890__$1);

(statearr_41949[(10)] = inst_41889__$1);

(statearr_41949[(11)] = inst_41887__$1);

(statearr_41949[(13)] = inst_41888__$1);

return statearr_41949;
})();
var statearr_41950_41985 = state_41935__$1;
(statearr_41950_41985[(2)] = null);

(statearr_41950_41985[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41936 === (22))){
var state_41935__$1 = state_41935;
var statearr_41951_41986 = state_41935__$1;
(statearr_41951_41986[(2)] = null);

(statearr_41951_41986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41936 === (6))){
var inst_41876 = (state_41935[(9)]);
var inst_41885 = f.call(null,inst_41876);
var inst_41886 = cljs.core.seq.call(null,inst_41885);
var inst_41887 = inst_41886;
var inst_41888 = null;
var inst_41889 = (0);
var inst_41890 = (0);
var state_41935__$1 = (function (){var statearr_41952 = state_41935;
(statearr_41952[(8)] = inst_41890);

(statearr_41952[(10)] = inst_41889);

(statearr_41952[(11)] = inst_41887);

(statearr_41952[(13)] = inst_41888);

return statearr_41952;
})();
var statearr_41953_41987 = state_41935__$1;
(statearr_41953_41987[(2)] = null);

(statearr_41953_41987[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41936 === (17))){
var inst_41901 = (state_41935[(7)]);
var inst_41905 = cljs.core.chunk_first.call(null,inst_41901);
var inst_41906 = cljs.core.chunk_rest.call(null,inst_41901);
var inst_41907 = cljs.core.count.call(null,inst_41905);
var inst_41887 = inst_41906;
var inst_41888 = inst_41905;
var inst_41889 = inst_41907;
var inst_41890 = (0);
var state_41935__$1 = (function (){var statearr_41954 = state_41935;
(statearr_41954[(8)] = inst_41890);

(statearr_41954[(10)] = inst_41889);

(statearr_41954[(11)] = inst_41887);

(statearr_41954[(13)] = inst_41888);

return statearr_41954;
})();
var statearr_41955_41988 = state_41935__$1;
(statearr_41955_41988[(2)] = null);

(statearr_41955_41988[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41936 === (3))){
var inst_41933 = (state_41935[(2)]);
var state_41935__$1 = state_41935;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41935__$1,inst_41933);
} else {
if((state_val_41936 === (12))){
var inst_41921 = (state_41935[(2)]);
var state_41935__$1 = state_41935;
var statearr_41956_41989 = state_41935__$1;
(statearr_41956_41989[(2)] = inst_41921);

(statearr_41956_41989[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41936 === (2))){
var state_41935__$1 = state_41935;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41935__$1,(4),in$);
} else {
if((state_val_41936 === (23))){
var inst_41929 = (state_41935[(2)]);
var state_41935__$1 = state_41935;
var statearr_41957_41990 = state_41935__$1;
(statearr_41957_41990[(2)] = inst_41929);

(statearr_41957_41990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41936 === (19))){
var inst_41916 = (state_41935[(2)]);
var state_41935__$1 = state_41935;
var statearr_41958_41991 = state_41935__$1;
(statearr_41958_41991[(2)] = inst_41916);

(statearr_41958_41991[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41936 === (11))){
var inst_41901 = (state_41935[(7)]);
var inst_41887 = (state_41935[(11)]);
var inst_41901__$1 = cljs.core.seq.call(null,inst_41887);
var state_41935__$1 = (function (){var statearr_41959 = state_41935;
(statearr_41959[(7)] = inst_41901__$1);

return statearr_41959;
})();
if(inst_41901__$1){
var statearr_41960_41992 = state_41935__$1;
(statearr_41960_41992[(1)] = (14));

} else {
var statearr_41961_41993 = state_41935__$1;
(statearr_41961_41993[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41936 === (9))){
var inst_41923 = (state_41935[(2)]);
var inst_41924 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_41935__$1 = (function (){var statearr_41962 = state_41935;
(statearr_41962[(15)] = inst_41923);

return statearr_41962;
})();
if(cljs.core.truth_(inst_41924)){
var statearr_41963_41994 = state_41935__$1;
(statearr_41963_41994[(1)] = (21));

} else {
var statearr_41964_41995 = state_41935__$1;
(statearr_41964_41995[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41936 === (5))){
var inst_41879 = cljs.core.async.close_BANG_.call(null,out);
var state_41935__$1 = state_41935;
var statearr_41965_41996 = state_41935__$1;
(statearr_41965_41996[(2)] = inst_41879);

(statearr_41965_41996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41936 === (14))){
var inst_41901 = (state_41935[(7)]);
var inst_41903 = cljs.core.chunked_seq_QMARK_.call(null,inst_41901);
var state_41935__$1 = state_41935;
if(inst_41903){
var statearr_41966_41997 = state_41935__$1;
(statearr_41966_41997[(1)] = (17));

} else {
var statearr_41967_41998 = state_41935__$1;
(statearr_41967_41998[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41936 === (16))){
var inst_41919 = (state_41935[(2)]);
var state_41935__$1 = state_41935;
var statearr_41968_41999 = state_41935__$1;
(statearr_41968_41999[(2)] = inst_41919);

(statearr_41968_41999[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41936 === (10))){
var inst_41890 = (state_41935[(8)]);
var inst_41888 = (state_41935[(13)]);
var inst_41895 = cljs.core._nth.call(null,inst_41888,inst_41890);
var state_41935__$1 = state_41935;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41935__$1,(13),out,inst_41895);
} else {
if((state_val_41936 === (18))){
var inst_41901 = (state_41935[(7)]);
var inst_41910 = cljs.core.first.call(null,inst_41901);
var state_41935__$1 = state_41935;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41935__$1,(20),out,inst_41910);
} else {
if((state_val_41936 === (8))){
var inst_41890 = (state_41935[(8)]);
var inst_41889 = (state_41935[(10)]);
var inst_41892 = (inst_41890 < inst_41889);
var inst_41893 = inst_41892;
var state_41935__$1 = state_41935;
if(cljs.core.truth_(inst_41893)){
var statearr_41969_42000 = state_41935__$1;
(statearr_41969_42000[(1)] = (10));

} else {
var statearr_41970_42001 = state_41935__$1;
(statearr_41970_42001[(1)] = (11));

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
});})(c__19849__auto__))
;
return ((function (switch__19828__auto__,c__19849__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19829__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19829__auto____0 = (function (){
var statearr_41974 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41974[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19829__auto__);

(statearr_41974[(1)] = (1));

return statearr_41974;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19829__auto____1 = (function (state_41935){
while(true){
var ret_value__19830__auto__ = (function (){try{while(true){
var result__19831__auto__ = switch__19828__auto__.call(null,state_41935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19831__auto__;
}
break;
}
}catch (e41975){if((e41975 instanceof Object)){
var ex__19832__auto__ = e41975;
var statearr_41976_42002 = state_41935;
(statearr_41976_42002[(5)] = ex__19832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42003 = state_41935;
state_41935 = G__42003;
continue;
} else {
return ret_value__19830__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19829__auto__ = function(state_41935){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19829__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19829__auto____1.call(this,state_41935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19829__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19829__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19829__auto__;
})()
;})(switch__19828__auto__,c__19849__auto__))
})();
var state__19851__auto__ = (function (){var statearr_41977 = f__19850__auto__.call(null);
(statearr_41977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19849__auto__);

return statearr_41977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19851__auto__);
});})(c__19849__auto__))
);

return c__19849__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args42004 = [];
var len__18583__auto___42007 = arguments.length;
var i__18584__auto___42008 = (0);
while(true){
if((i__18584__auto___42008 < len__18583__auto___42007)){
args42004.push((arguments[i__18584__auto___42008]));

var G__42009 = (i__18584__auto___42008 + (1));
i__18584__auto___42008 = G__42009;
continue;
} else {
}
break;
}

var G__42006 = args42004.length;
switch (G__42006) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42004.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args42011 = [];
var len__18583__auto___42014 = arguments.length;
var i__18584__auto___42015 = (0);
while(true){
if((i__18584__auto___42015 < len__18583__auto___42014)){
args42011.push((arguments[i__18584__auto___42015]));

var G__42016 = (i__18584__auto___42015 + (1));
i__18584__auto___42015 = G__42016;
continue;
} else {
}
break;
}

var G__42013 = args42011.length;
switch (G__42013) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42011.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args42018 = [];
var len__18583__auto___42069 = arguments.length;
var i__18584__auto___42070 = (0);
while(true){
if((i__18584__auto___42070 < len__18583__auto___42069)){
args42018.push((arguments[i__18584__auto___42070]));

var G__42071 = (i__18584__auto___42070 + (1));
i__18584__auto___42070 = G__42071;
continue;
} else {
}
break;
}

var G__42020 = args42018.length;
switch (G__42020) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42018.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19849__auto___42073 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19849__auto___42073,out){
return (function (){
var f__19850__auto__ = (function (){var switch__19828__auto__ = ((function (c__19849__auto___42073,out){
return (function (state_42044){
var state_val_42045 = (state_42044[(1)]);
if((state_val_42045 === (7))){
var inst_42039 = (state_42044[(2)]);
var state_42044__$1 = state_42044;
var statearr_42046_42074 = state_42044__$1;
(statearr_42046_42074[(2)] = inst_42039);

(statearr_42046_42074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42045 === (1))){
var inst_42021 = null;
var state_42044__$1 = (function (){var statearr_42047 = state_42044;
(statearr_42047[(7)] = inst_42021);

return statearr_42047;
})();
var statearr_42048_42075 = state_42044__$1;
(statearr_42048_42075[(2)] = null);

(statearr_42048_42075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42045 === (4))){
var inst_42024 = (state_42044[(8)]);
var inst_42024__$1 = (state_42044[(2)]);
var inst_42025 = (inst_42024__$1 == null);
var inst_42026 = cljs.core.not.call(null,inst_42025);
var state_42044__$1 = (function (){var statearr_42049 = state_42044;
(statearr_42049[(8)] = inst_42024__$1);

return statearr_42049;
})();
if(inst_42026){
var statearr_42050_42076 = state_42044__$1;
(statearr_42050_42076[(1)] = (5));

} else {
var statearr_42051_42077 = state_42044__$1;
(statearr_42051_42077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42045 === (6))){
var state_42044__$1 = state_42044;
var statearr_42052_42078 = state_42044__$1;
(statearr_42052_42078[(2)] = null);

(statearr_42052_42078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42045 === (3))){
var inst_42041 = (state_42044[(2)]);
var inst_42042 = cljs.core.async.close_BANG_.call(null,out);
var state_42044__$1 = (function (){var statearr_42053 = state_42044;
(statearr_42053[(9)] = inst_42041);

return statearr_42053;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42044__$1,inst_42042);
} else {
if((state_val_42045 === (2))){
var state_42044__$1 = state_42044;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42044__$1,(4),ch);
} else {
if((state_val_42045 === (11))){
var inst_42024 = (state_42044[(8)]);
var inst_42033 = (state_42044[(2)]);
var inst_42021 = inst_42024;
var state_42044__$1 = (function (){var statearr_42054 = state_42044;
(statearr_42054[(7)] = inst_42021);

(statearr_42054[(10)] = inst_42033);

return statearr_42054;
})();
var statearr_42055_42079 = state_42044__$1;
(statearr_42055_42079[(2)] = null);

(statearr_42055_42079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42045 === (9))){
var inst_42024 = (state_42044[(8)]);
var state_42044__$1 = state_42044;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42044__$1,(11),out,inst_42024);
} else {
if((state_val_42045 === (5))){
var inst_42021 = (state_42044[(7)]);
var inst_42024 = (state_42044[(8)]);
var inst_42028 = cljs.core._EQ_.call(null,inst_42024,inst_42021);
var state_42044__$1 = state_42044;
if(inst_42028){
var statearr_42057_42080 = state_42044__$1;
(statearr_42057_42080[(1)] = (8));

} else {
var statearr_42058_42081 = state_42044__$1;
(statearr_42058_42081[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42045 === (10))){
var inst_42036 = (state_42044[(2)]);
var state_42044__$1 = state_42044;
var statearr_42059_42082 = state_42044__$1;
(statearr_42059_42082[(2)] = inst_42036);

(statearr_42059_42082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42045 === (8))){
var inst_42021 = (state_42044[(7)]);
var tmp42056 = inst_42021;
var inst_42021__$1 = tmp42056;
var state_42044__$1 = (function (){var statearr_42060 = state_42044;
(statearr_42060[(7)] = inst_42021__$1);

return statearr_42060;
})();
var statearr_42061_42083 = state_42044__$1;
(statearr_42061_42083[(2)] = null);

(statearr_42061_42083[(1)] = (2));


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
});})(c__19849__auto___42073,out))
;
return ((function (switch__19828__auto__,c__19849__auto___42073,out){
return (function() {
var cljs$core$async$state_machine__19829__auto__ = null;
var cljs$core$async$state_machine__19829__auto____0 = (function (){
var statearr_42065 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42065[(0)] = cljs$core$async$state_machine__19829__auto__);

(statearr_42065[(1)] = (1));

return statearr_42065;
});
var cljs$core$async$state_machine__19829__auto____1 = (function (state_42044){
while(true){
var ret_value__19830__auto__ = (function (){try{while(true){
var result__19831__auto__ = switch__19828__auto__.call(null,state_42044);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19831__auto__;
}
break;
}
}catch (e42066){if((e42066 instanceof Object)){
var ex__19832__auto__ = e42066;
var statearr_42067_42084 = state_42044;
(statearr_42067_42084[(5)] = ex__19832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42085 = state_42044;
state_42044 = G__42085;
continue;
} else {
return ret_value__19830__auto__;
}
break;
}
});
cljs$core$async$state_machine__19829__auto__ = function(state_42044){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19829__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19829__auto____1.call(this,state_42044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19829__auto____0;
cljs$core$async$state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19829__auto____1;
return cljs$core$async$state_machine__19829__auto__;
})()
;})(switch__19828__auto__,c__19849__auto___42073,out))
})();
var state__19851__auto__ = (function (){var statearr_42068 = f__19850__auto__.call(null);
(statearr_42068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19849__auto___42073);

return statearr_42068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19851__auto__);
});})(c__19849__auto___42073,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args42086 = [];
var len__18583__auto___42156 = arguments.length;
var i__18584__auto___42157 = (0);
while(true){
if((i__18584__auto___42157 < len__18583__auto___42156)){
args42086.push((arguments[i__18584__auto___42157]));

var G__42158 = (i__18584__auto___42157 + (1));
i__18584__auto___42157 = G__42158;
continue;
} else {
}
break;
}

var G__42088 = args42086.length;
switch (G__42088) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42086.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19849__auto___42160 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19849__auto___42160,out){
return (function (){
var f__19850__auto__ = (function (){var switch__19828__auto__ = ((function (c__19849__auto___42160,out){
return (function (state_42126){
var state_val_42127 = (state_42126[(1)]);
if((state_val_42127 === (7))){
var inst_42122 = (state_42126[(2)]);
var state_42126__$1 = state_42126;
var statearr_42128_42161 = state_42126__$1;
(statearr_42128_42161[(2)] = inst_42122);

(statearr_42128_42161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42127 === (1))){
var inst_42089 = (new Array(n));
var inst_42090 = inst_42089;
var inst_42091 = (0);
var state_42126__$1 = (function (){var statearr_42129 = state_42126;
(statearr_42129[(7)] = inst_42091);

(statearr_42129[(9)] = inst_42090);

return statearr_42129;
})();
var statearr_42130_42162 = state_42126__$1;
(statearr_42130_42162[(2)] = null);

(statearr_42130_42162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42127 === (4))){
var inst_42094 = (state_42126[(8)]);
var inst_42094__$1 = (state_42126[(2)]);
var inst_42095 = (inst_42094__$1 == null);
var inst_42096 = cljs.core.not.call(null,inst_42095);
var state_42126__$1 = (function (){var statearr_42131 = state_42126;
(statearr_42131[(8)] = inst_42094__$1);

return statearr_42131;
})();
if(inst_42096){
var statearr_42132_42163 = state_42126__$1;
(statearr_42132_42163[(1)] = (5));

} else {
var statearr_42133_42164 = state_42126__$1;
(statearr_42133_42164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42127 === (15))){
var inst_42116 = (state_42126[(2)]);
var state_42126__$1 = state_42126;
var statearr_42134_42165 = state_42126__$1;
(statearr_42134_42165[(2)] = inst_42116);

(statearr_42134_42165[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42127 === (13))){
var state_42126__$1 = state_42126;
var statearr_42135_42166 = state_42126__$1;
(statearr_42135_42166[(2)] = null);

(statearr_42135_42166[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42127 === (6))){
var inst_42091 = (state_42126[(7)]);
var inst_42112 = (inst_42091 > (0));
var state_42126__$1 = state_42126;
if(cljs.core.truth_(inst_42112)){
var statearr_42136_42167 = state_42126__$1;
(statearr_42136_42167[(1)] = (12));

} else {
var statearr_42137_42168 = state_42126__$1;
(statearr_42137_42168[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42127 === (3))){
var inst_42124 = (state_42126[(2)]);
var state_42126__$1 = state_42126;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42126__$1,inst_42124);
} else {
if((state_val_42127 === (12))){
var inst_42090 = (state_42126[(9)]);
var inst_42114 = cljs.core.vec.call(null,inst_42090);
var state_42126__$1 = state_42126;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42126__$1,(15),out,inst_42114);
} else {
if((state_val_42127 === (2))){
var state_42126__$1 = state_42126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42126__$1,(4),ch);
} else {
if((state_val_42127 === (11))){
var inst_42106 = (state_42126[(2)]);
var inst_42107 = (new Array(n));
var inst_42090 = inst_42107;
var inst_42091 = (0);
var state_42126__$1 = (function (){var statearr_42138 = state_42126;
(statearr_42138[(10)] = inst_42106);

(statearr_42138[(7)] = inst_42091);

(statearr_42138[(9)] = inst_42090);

return statearr_42138;
})();
var statearr_42139_42169 = state_42126__$1;
(statearr_42139_42169[(2)] = null);

(statearr_42139_42169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42127 === (9))){
var inst_42090 = (state_42126[(9)]);
var inst_42104 = cljs.core.vec.call(null,inst_42090);
var state_42126__$1 = state_42126;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42126__$1,(11),out,inst_42104);
} else {
if((state_val_42127 === (5))){
var inst_42094 = (state_42126[(8)]);
var inst_42091 = (state_42126[(7)]);
var inst_42090 = (state_42126[(9)]);
var inst_42099 = (state_42126[(11)]);
var inst_42098 = (inst_42090[inst_42091] = inst_42094);
var inst_42099__$1 = (inst_42091 + (1));
var inst_42100 = (inst_42099__$1 < n);
var state_42126__$1 = (function (){var statearr_42140 = state_42126;
(statearr_42140[(12)] = inst_42098);

(statearr_42140[(11)] = inst_42099__$1);

return statearr_42140;
})();
if(cljs.core.truth_(inst_42100)){
var statearr_42141_42170 = state_42126__$1;
(statearr_42141_42170[(1)] = (8));

} else {
var statearr_42142_42171 = state_42126__$1;
(statearr_42142_42171[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42127 === (14))){
var inst_42119 = (state_42126[(2)]);
var inst_42120 = cljs.core.async.close_BANG_.call(null,out);
var state_42126__$1 = (function (){var statearr_42144 = state_42126;
(statearr_42144[(13)] = inst_42119);

return statearr_42144;
})();
var statearr_42145_42172 = state_42126__$1;
(statearr_42145_42172[(2)] = inst_42120);

(statearr_42145_42172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42127 === (10))){
var inst_42110 = (state_42126[(2)]);
var state_42126__$1 = state_42126;
var statearr_42146_42173 = state_42126__$1;
(statearr_42146_42173[(2)] = inst_42110);

(statearr_42146_42173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42127 === (8))){
var inst_42090 = (state_42126[(9)]);
var inst_42099 = (state_42126[(11)]);
var tmp42143 = inst_42090;
var inst_42090__$1 = tmp42143;
var inst_42091 = inst_42099;
var state_42126__$1 = (function (){var statearr_42147 = state_42126;
(statearr_42147[(7)] = inst_42091);

(statearr_42147[(9)] = inst_42090__$1);

return statearr_42147;
})();
var statearr_42148_42174 = state_42126__$1;
(statearr_42148_42174[(2)] = null);

(statearr_42148_42174[(1)] = (2));


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
});})(c__19849__auto___42160,out))
;
return ((function (switch__19828__auto__,c__19849__auto___42160,out){
return (function() {
var cljs$core$async$state_machine__19829__auto__ = null;
var cljs$core$async$state_machine__19829__auto____0 = (function (){
var statearr_42152 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42152[(0)] = cljs$core$async$state_machine__19829__auto__);

(statearr_42152[(1)] = (1));

return statearr_42152;
});
var cljs$core$async$state_machine__19829__auto____1 = (function (state_42126){
while(true){
var ret_value__19830__auto__ = (function (){try{while(true){
var result__19831__auto__ = switch__19828__auto__.call(null,state_42126);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19831__auto__;
}
break;
}
}catch (e42153){if((e42153 instanceof Object)){
var ex__19832__auto__ = e42153;
var statearr_42154_42175 = state_42126;
(statearr_42154_42175[(5)] = ex__19832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42153;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42176 = state_42126;
state_42126 = G__42176;
continue;
} else {
return ret_value__19830__auto__;
}
break;
}
});
cljs$core$async$state_machine__19829__auto__ = function(state_42126){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19829__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19829__auto____1.call(this,state_42126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19829__auto____0;
cljs$core$async$state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19829__auto____1;
return cljs$core$async$state_machine__19829__auto__;
})()
;})(switch__19828__auto__,c__19849__auto___42160,out))
})();
var state__19851__auto__ = (function (){var statearr_42155 = f__19850__auto__.call(null);
(statearr_42155[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19849__auto___42160);

return statearr_42155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19851__auto__);
});})(c__19849__auto___42160,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args42177 = [];
var len__18583__auto___42251 = arguments.length;
var i__18584__auto___42252 = (0);
while(true){
if((i__18584__auto___42252 < len__18583__auto___42251)){
args42177.push((arguments[i__18584__auto___42252]));

var G__42253 = (i__18584__auto___42252 + (1));
i__18584__auto___42252 = G__42253;
continue;
} else {
}
break;
}

var G__42179 = args42177.length;
switch (G__42179) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42177.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19849__auto___42255 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19849__auto___42255,out){
return (function (){
var f__19850__auto__ = (function (){var switch__19828__auto__ = ((function (c__19849__auto___42255,out){
return (function (state_42221){
var state_val_42222 = (state_42221[(1)]);
if((state_val_42222 === (7))){
var inst_42217 = (state_42221[(2)]);
var state_42221__$1 = state_42221;
var statearr_42223_42256 = state_42221__$1;
(statearr_42223_42256[(2)] = inst_42217);

(statearr_42223_42256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42222 === (1))){
var inst_42180 = [];
var inst_42181 = inst_42180;
var inst_42182 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_42221__$1 = (function (){var statearr_42224 = state_42221;
(statearr_42224[(7)] = inst_42182);

(statearr_42224[(9)] = inst_42181);

return statearr_42224;
})();
var statearr_42225_42257 = state_42221__$1;
(statearr_42225_42257[(2)] = null);

(statearr_42225_42257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42222 === (4))){
var inst_42185 = (state_42221[(8)]);
var inst_42185__$1 = (state_42221[(2)]);
var inst_42186 = (inst_42185__$1 == null);
var inst_42187 = cljs.core.not.call(null,inst_42186);
var state_42221__$1 = (function (){var statearr_42226 = state_42221;
(statearr_42226[(8)] = inst_42185__$1);

return statearr_42226;
})();
if(inst_42187){
var statearr_42227_42258 = state_42221__$1;
(statearr_42227_42258[(1)] = (5));

} else {
var statearr_42228_42259 = state_42221__$1;
(statearr_42228_42259[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42222 === (15))){
var inst_42211 = (state_42221[(2)]);
var state_42221__$1 = state_42221;
var statearr_42229_42260 = state_42221__$1;
(statearr_42229_42260[(2)] = inst_42211);

(statearr_42229_42260[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42222 === (13))){
var state_42221__$1 = state_42221;
var statearr_42230_42261 = state_42221__$1;
(statearr_42230_42261[(2)] = null);

(statearr_42230_42261[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42222 === (6))){
var inst_42181 = (state_42221[(9)]);
var inst_42206 = inst_42181.length;
var inst_42207 = (inst_42206 > (0));
var state_42221__$1 = state_42221;
if(cljs.core.truth_(inst_42207)){
var statearr_42231_42262 = state_42221__$1;
(statearr_42231_42262[(1)] = (12));

} else {
var statearr_42232_42263 = state_42221__$1;
(statearr_42232_42263[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42222 === (3))){
var inst_42219 = (state_42221[(2)]);
var state_42221__$1 = state_42221;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42221__$1,inst_42219);
} else {
if((state_val_42222 === (12))){
var inst_42181 = (state_42221[(9)]);
var inst_42209 = cljs.core.vec.call(null,inst_42181);
var state_42221__$1 = state_42221;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42221__$1,(15),out,inst_42209);
} else {
if((state_val_42222 === (2))){
var state_42221__$1 = state_42221;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42221__$1,(4),ch);
} else {
if((state_val_42222 === (11))){
var inst_42189 = (state_42221[(10)]);
var inst_42185 = (state_42221[(8)]);
var inst_42199 = (state_42221[(2)]);
var inst_42200 = [];
var inst_42201 = inst_42200.push(inst_42185);
var inst_42181 = inst_42200;
var inst_42182 = inst_42189;
var state_42221__$1 = (function (){var statearr_42233 = state_42221;
(statearr_42233[(11)] = inst_42201);

(statearr_42233[(7)] = inst_42182);

(statearr_42233[(12)] = inst_42199);

(statearr_42233[(9)] = inst_42181);

return statearr_42233;
})();
var statearr_42234_42264 = state_42221__$1;
(statearr_42234_42264[(2)] = null);

(statearr_42234_42264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42222 === (9))){
var inst_42181 = (state_42221[(9)]);
var inst_42197 = cljs.core.vec.call(null,inst_42181);
var state_42221__$1 = state_42221;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42221__$1,(11),out,inst_42197);
} else {
if((state_val_42222 === (5))){
var inst_42189 = (state_42221[(10)]);
var inst_42182 = (state_42221[(7)]);
var inst_42185 = (state_42221[(8)]);
var inst_42189__$1 = f.call(null,inst_42185);
var inst_42190 = cljs.core._EQ_.call(null,inst_42189__$1,inst_42182);
var inst_42191 = cljs.core.keyword_identical_QMARK_.call(null,inst_42182,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_42192 = (inst_42190) || (inst_42191);
var state_42221__$1 = (function (){var statearr_42235 = state_42221;
(statearr_42235[(10)] = inst_42189__$1);

return statearr_42235;
})();
if(cljs.core.truth_(inst_42192)){
var statearr_42236_42265 = state_42221__$1;
(statearr_42236_42265[(1)] = (8));

} else {
var statearr_42237_42266 = state_42221__$1;
(statearr_42237_42266[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42222 === (14))){
var inst_42214 = (state_42221[(2)]);
var inst_42215 = cljs.core.async.close_BANG_.call(null,out);
var state_42221__$1 = (function (){var statearr_42239 = state_42221;
(statearr_42239[(13)] = inst_42214);

return statearr_42239;
})();
var statearr_42240_42267 = state_42221__$1;
(statearr_42240_42267[(2)] = inst_42215);

(statearr_42240_42267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42222 === (10))){
var inst_42204 = (state_42221[(2)]);
var state_42221__$1 = state_42221;
var statearr_42241_42268 = state_42221__$1;
(statearr_42241_42268[(2)] = inst_42204);

(statearr_42241_42268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42222 === (8))){
var inst_42189 = (state_42221[(10)]);
var inst_42185 = (state_42221[(8)]);
var inst_42181 = (state_42221[(9)]);
var inst_42194 = inst_42181.push(inst_42185);
var tmp42238 = inst_42181;
var inst_42181__$1 = tmp42238;
var inst_42182 = inst_42189;
var state_42221__$1 = (function (){var statearr_42242 = state_42221;
(statearr_42242[(7)] = inst_42182);

(statearr_42242[(14)] = inst_42194);

(statearr_42242[(9)] = inst_42181__$1);

return statearr_42242;
})();
var statearr_42243_42269 = state_42221__$1;
(statearr_42243_42269[(2)] = null);

(statearr_42243_42269[(1)] = (2));


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
});})(c__19849__auto___42255,out))
;
return ((function (switch__19828__auto__,c__19849__auto___42255,out){
return (function() {
var cljs$core$async$state_machine__19829__auto__ = null;
var cljs$core$async$state_machine__19829__auto____0 = (function (){
var statearr_42247 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42247[(0)] = cljs$core$async$state_machine__19829__auto__);

(statearr_42247[(1)] = (1));

return statearr_42247;
});
var cljs$core$async$state_machine__19829__auto____1 = (function (state_42221){
while(true){
var ret_value__19830__auto__ = (function (){try{while(true){
var result__19831__auto__ = switch__19828__auto__.call(null,state_42221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19831__auto__;
}
break;
}
}catch (e42248){if((e42248 instanceof Object)){
var ex__19832__auto__ = e42248;
var statearr_42249_42270 = state_42221;
(statearr_42249_42270[(5)] = ex__19832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42248;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42271 = state_42221;
state_42221 = G__42271;
continue;
} else {
return ret_value__19830__auto__;
}
break;
}
});
cljs$core$async$state_machine__19829__auto__ = function(state_42221){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19829__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19829__auto____1.call(this,state_42221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19829__auto____0;
cljs$core$async$state_machine__19829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19829__auto____1;
return cljs$core$async$state_machine__19829__auto__;
})()
;})(switch__19828__auto__,c__19849__auto___42255,out))
})();
var state__19851__auto__ = (function (){var statearr_42250 = f__19850__auto__.call(null);
(statearr_42250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19849__auto___42255);

return statearr_42250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19851__auto__);
});})(c__19849__auto___42255,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1452702567951