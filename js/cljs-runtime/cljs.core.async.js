goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__44347 = arguments.length;
switch (G__44347) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44348 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44348 = (function (f,blockable,meta44349){
this.f = f;
this.blockable = blockable;
this.meta44349 = meta44349;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44350,meta44349__$1){
var self__ = this;
var _44350__$1 = this;
return (new cljs.core.async.t_cljs$core$async44348(self__.f,self__.blockable,meta44349__$1));
}));

(cljs.core.async.t_cljs$core$async44348.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44350){
var self__ = this;
var _44350__$1 = this;
return self__.meta44349;
}));

(cljs.core.async.t_cljs$core$async44348.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44348.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44348.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async44348.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async44348.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta44349","meta44349",1980662085,null)], null);
}));

(cljs.core.async.t_cljs$core$async44348.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44348.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44348");

(cljs.core.async.t_cljs$core$async44348.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async44348");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44348.
 */
cljs.core.async.__GT_t_cljs$core$async44348 = (function cljs$core$async$__GT_t_cljs$core$async44348(f__$1,blockable__$1,meta44349){
return (new cljs.core.async.t_cljs$core$async44348(f__$1,blockable__$1,meta44349));
});

}

return (new cljs.core.async.t_cljs$core$async44348(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__44356 = arguments.length;
switch (G__44356) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__44365 = arguments.length;
switch (G__44365) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__44372 = arguments.length;
switch (G__44372) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_46912 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_46912) : fn1.call(null,val_46912));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_46912) : fn1.call(null,val_46912));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__44383 = arguments.length;
switch (G__44383) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___46920 = n;
var x_46921 = (0);
while(true){
if((x_46921 < n__4741__auto___46920)){
(a[x_46921] = x_46921);

var G__46922 = (x_46921 + (1));
x_46921 = G__46922;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44398 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44398 = (function (flag,meta44399){
this.flag = flag;
this.meta44399 = meta44399;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44400,meta44399__$1){
var self__ = this;
var _44400__$1 = this;
return (new cljs.core.async.t_cljs$core$async44398(self__.flag,meta44399__$1));
}));

(cljs.core.async.t_cljs$core$async44398.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44400){
var self__ = this;
var _44400__$1 = this;
return self__.meta44399;
}));

(cljs.core.async.t_cljs$core$async44398.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44398.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async44398.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44398.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async44398.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta44399","meta44399",-1583075915,null)], null);
}));

(cljs.core.async.t_cljs$core$async44398.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44398.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44398");

(cljs.core.async.t_cljs$core$async44398.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async44398");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44398.
 */
cljs.core.async.__GT_t_cljs$core$async44398 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async44398(flag__$1,meta44399){
return (new cljs.core.async.t_cljs$core$async44398(flag__$1,meta44399));
});

}

return (new cljs.core.async.t_cljs$core$async44398(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44439 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44439 = (function (flag,cb,meta44440){
this.flag = flag;
this.cb = cb;
this.meta44440 = meta44440;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44441,meta44440__$1){
var self__ = this;
var _44441__$1 = this;
return (new cljs.core.async.t_cljs$core$async44439(self__.flag,self__.cb,meta44440__$1));
}));

(cljs.core.async.t_cljs$core$async44439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44441){
var self__ = this;
var _44441__$1 = this;
return self__.meta44440;
}));

(cljs.core.async.t_cljs$core$async44439.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44439.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async44439.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44439.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async44439.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta44440","meta44440",462914307,null)], null);
}));

(cljs.core.async.t_cljs$core$async44439.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44439.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44439");

(cljs.core.async.t_cljs$core$async44439.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async44439");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44439.
 */
cljs.core.async.__GT_t_cljs$core$async44439 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async44439(flag__$1,cb__$1,meta44440){
return (new cljs.core.async.t_cljs$core$async44439(flag__$1,cb__$1,meta44440));
});

}

return (new cljs.core.async.t_cljs$core$async44439(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44493_SHARP_){
var G__44496 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44493_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__44496) : fret.call(null,G__44496));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44494_SHARP_){
var G__44498 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44494_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__44498) : fret.call(null,G__44498));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__46932 = (i + (1));
i = G__46932;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__4870__auto__ = [];
var len__4864__auto___46935 = arguments.length;
var i__4865__auto___46936 = (0);
while(true){
if((i__4865__auto___46936 < len__4864__auto___46935)){
args__4870__auto__.push((arguments[i__4865__auto___46936]));

var G__46937 = (i__4865__auto___46936 + (1));
i__4865__auto___46936 = G__46937;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__44514){
var map__44515 = p__44514;
var map__44515__$1 = cljs.core.__destructure_map(map__44515);
var opts = map__44515__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq44509){
var G__44510 = cljs.core.first(seq44509);
var seq44509__$1 = cljs.core.next(seq44509);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44510,seq44509__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__44521 = arguments.length;
switch (G__44521) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__44271__auto___46945 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44278__auto__ = (function (){var switch__43837__auto__ = (function (state_44602){
var state_val_44603 = (state_44602[(1)]);
if((state_val_44603 === (7))){
var inst_44598 = (state_44602[(2)]);
var state_44602__$1 = state_44602;
var statearr_44621_46951 = state_44602__$1;
(statearr_44621_46951[(2)] = inst_44598);

(statearr_44621_46951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44603 === (1))){
var state_44602__$1 = state_44602;
var statearr_44629_46952 = state_44602__$1;
(statearr_44629_46952[(2)] = null);

(statearr_44629_46952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44603 === (4))){
var inst_44562 = (state_44602[(7)]);
var inst_44562__$1 = (state_44602[(2)]);
var inst_44579 = (inst_44562__$1 == null);
var state_44602__$1 = (function (){var statearr_44637 = state_44602;
(statearr_44637[(7)] = inst_44562__$1);

return statearr_44637;
})();
if(cljs.core.truth_(inst_44579)){
var statearr_44641_46956 = state_44602__$1;
(statearr_44641_46956[(1)] = (5));

} else {
var statearr_44643_46959 = state_44602__$1;
(statearr_44643_46959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44603 === (13))){
var state_44602__$1 = state_44602;
var statearr_44645_46960 = state_44602__$1;
(statearr_44645_46960[(2)] = null);

(statearr_44645_46960[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44603 === (6))){
var inst_44562 = (state_44602[(7)]);
var state_44602__$1 = state_44602;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44602__$1,(11),to,inst_44562);
} else {
if((state_val_44603 === (3))){
var inst_44600 = (state_44602[(2)]);
var state_44602__$1 = state_44602;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44602__$1,inst_44600);
} else {
if((state_val_44603 === (12))){
var state_44602__$1 = state_44602;
var statearr_44649_46965 = state_44602__$1;
(statearr_44649_46965[(2)] = null);

(statearr_44649_46965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44603 === (2))){
var state_44602__$1 = state_44602;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44602__$1,(4),from);
} else {
if((state_val_44603 === (11))){
var inst_44590 = (state_44602[(2)]);
var state_44602__$1 = state_44602;
if(cljs.core.truth_(inst_44590)){
var statearr_44650_46966 = state_44602__$1;
(statearr_44650_46966[(1)] = (12));

} else {
var statearr_44651_46967 = state_44602__$1;
(statearr_44651_46967[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44603 === (9))){
var state_44602__$1 = state_44602;
var statearr_44652_46970 = state_44602__$1;
(statearr_44652_46970[(2)] = null);

(statearr_44652_46970[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44603 === (5))){
var state_44602__$1 = state_44602;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44653_46971 = state_44602__$1;
(statearr_44653_46971[(1)] = (8));

} else {
var statearr_44654_46972 = state_44602__$1;
(statearr_44654_46972[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44603 === (14))){
var inst_44596 = (state_44602[(2)]);
var state_44602__$1 = state_44602;
var statearr_44655_46974 = state_44602__$1;
(statearr_44655_46974[(2)] = inst_44596);

(statearr_44655_46974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44603 === (10))){
var inst_44587 = (state_44602[(2)]);
var state_44602__$1 = state_44602;
var statearr_44656_46975 = state_44602__$1;
(statearr_44656_46975[(2)] = inst_44587);

(statearr_44656_46975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44603 === (8))){
var inst_44583 = cljs.core.async.close_BANG_(to);
var state_44602__$1 = state_44602;
var statearr_44657_46976 = state_44602__$1;
(statearr_44657_46976[(2)] = inst_44583);

(statearr_44657_46976[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__43838__auto__ = null;
var cljs$core$async$state_machine__43838__auto____0 = (function (){
var statearr_44658 = [null,null,null,null,null,null,null,null];
(statearr_44658[(0)] = cljs$core$async$state_machine__43838__auto__);

(statearr_44658[(1)] = (1));

return statearr_44658;
});
var cljs$core$async$state_machine__43838__auto____1 = (function (state_44602){
while(true){
var ret_value__43839__auto__ = (function (){try{while(true){
var result__43840__auto__ = switch__43837__auto__(state_44602);
if(cljs.core.keyword_identical_QMARK_(result__43840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43840__auto__;
}
break;
}
}catch (e44660){var ex__43841__auto__ = e44660;
var statearr_44661_46978 = state_44602;
(statearr_44661_46978[(2)] = ex__43841__auto__);


if(cljs.core.seq((state_44602[(4)]))){
var statearr_44662_46981 = state_44602;
(statearr_44662_46981[(1)] = cljs.core.first((state_44602[(4)])));

} else {
throw ex__43841__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46983 = state_44602;
state_44602 = G__46983;
continue;
} else {
return ret_value__43839__auto__;
}
break;
}
});
cljs$core$async$state_machine__43838__auto__ = function(state_44602){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43838__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43838__auto____1.call(this,state_44602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43838__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43838__auto____0;
cljs$core$async$state_machine__43838__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43838__auto____1;
return cljs$core$async$state_machine__43838__auto__;
})()
})();
var state__44279__auto__ = (function (){var statearr_44667 = f__44278__auto__();
(statearr_44667[(6)] = c__44271__auto___46945);

return statearr_44667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44279__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__44673){
var vec__44674 = p__44673;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44674,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44674,(1),null);
var job = vec__44674;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__44271__auto___46993 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44278__auto__ = (function (){var switch__43837__auto__ = (function (state_44681){
var state_val_44682 = (state_44681[(1)]);
if((state_val_44682 === (1))){
var state_44681__$1 = state_44681;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44681__$1,(2),res,v);
} else {
if((state_val_44682 === (2))){
var inst_44678 = (state_44681[(2)]);
var inst_44679 = cljs.core.async.close_BANG_(res);
var state_44681__$1 = (function (){var statearr_44683 = state_44681;
(statearr_44683[(7)] = inst_44678);

return statearr_44683;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44681__$1,inst_44679);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43838__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43838__auto____0 = (function (){
var statearr_44684 = [null,null,null,null,null,null,null,null];
(statearr_44684[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43838__auto__);

(statearr_44684[(1)] = (1));

return statearr_44684;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43838__auto____1 = (function (state_44681){
while(true){
var ret_value__43839__auto__ = (function (){try{while(true){
var result__43840__auto__ = switch__43837__auto__(state_44681);
if(cljs.core.keyword_identical_QMARK_(result__43840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43840__auto__;
}
break;
}
}catch (e44685){var ex__43841__auto__ = e44685;
var statearr_44686_46996 = state_44681;
(statearr_44686_46996[(2)] = ex__43841__auto__);


if(cljs.core.seq((state_44681[(4)]))){
var statearr_44687_46997 = state_44681;
(statearr_44687_46997[(1)] = cljs.core.first((state_44681[(4)])));

} else {
throw ex__43841__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46999 = state_44681;
state_44681 = G__46999;
continue;
} else {
return ret_value__43839__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43838__auto__ = function(state_44681){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43838__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43838__auto____1.call(this,state_44681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43838__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43838__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43838__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43838__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43838__auto__;
})()
})();
var state__44279__auto__ = (function (){var statearr_44692 = f__44278__auto__();
(statearr_44692[(6)] = c__44271__auto___46993);

return statearr_44692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44279__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__44693){
var vec__44694 = p__44693;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44694,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44694,(1),null);
var job = vec__44694;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___47001 = n;
var __47002 = (0);
while(true){
if((__47002 < n__4741__auto___47001)){
var G__44697_47004 = type;
var G__44697_47005__$1 = (((G__44697_47004 instanceof cljs.core.Keyword))?G__44697_47004.fqn:null);
switch (G__44697_47005__$1) {
case "compute":
var c__44271__auto___47007 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47002,c__44271__auto___47007,G__44697_47004,G__44697_47005__$1,n__4741__auto___47001,jobs,results,process,async){
return (function (){
var f__44278__auto__ = (function (){var switch__43837__auto__ = ((function (__47002,c__44271__auto___47007,G__44697_47004,G__44697_47005__$1,n__4741__auto___47001,jobs,results,process,async){
return (function (state_44711){
var state_val_44712 = (state_44711[(1)]);
if((state_val_44712 === (1))){
var state_44711__$1 = state_44711;
var statearr_44713_47008 = state_44711__$1;
(statearr_44713_47008[(2)] = null);

(statearr_44713_47008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44712 === (2))){
var state_44711__$1 = state_44711;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44711__$1,(4),jobs);
} else {
if((state_val_44712 === (3))){
var inst_44709 = (state_44711[(2)]);
var state_44711__$1 = state_44711;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44711__$1,inst_44709);
} else {
if((state_val_44712 === (4))){
var inst_44700 = (state_44711[(2)]);
var inst_44702 = process(inst_44700);
var state_44711__$1 = state_44711;
if(cljs.core.truth_(inst_44702)){
var statearr_44714_47009 = state_44711__$1;
(statearr_44714_47009[(1)] = (5));

} else {
var statearr_44715_47010 = state_44711__$1;
(statearr_44715_47010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44712 === (5))){
var state_44711__$1 = state_44711;
var statearr_44716_47011 = state_44711__$1;
(statearr_44716_47011[(2)] = null);

(statearr_44716_47011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44712 === (6))){
var state_44711__$1 = state_44711;
var statearr_44717_47012 = state_44711__$1;
(statearr_44717_47012[(2)] = null);

(statearr_44717_47012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44712 === (7))){
var inst_44707 = (state_44711[(2)]);
var state_44711__$1 = state_44711;
var statearr_44718_47014 = state_44711__$1;
(statearr_44718_47014[(2)] = inst_44707);

(statearr_44718_47014[(1)] = (3));


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
});})(__47002,c__44271__auto___47007,G__44697_47004,G__44697_47005__$1,n__4741__auto___47001,jobs,results,process,async))
;
return ((function (__47002,switch__43837__auto__,c__44271__auto___47007,G__44697_47004,G__44697_47005__$1,n__4741__auto___47001,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43838__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43838__auto____0 = (function (){
var statearr_44719 = [null,null,null,null,null,null,null];
(statearr_44719[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43838__auto__);

(statearr_44719[(1)] = (1));

return statearr_44719;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43838__auto____1 = (function (state_44711){
while(true){
var ret_value__43839__auto__ = (function (){try{while(true){
var result__43840__auto__ = switch__43837__auto__(state_44711);
if(cljs.core.keyword_identical_QMARK_(result__43840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43840__auto__;
}
break;
}
}catch (e44721){var ex__43841__auto__ = e44721;
var statearr_44722_47016 = state_44711;
(statearr_44722_47016[(2)] = ex__43841__auto__);


if(cljs.core.seq((state_44711[(4)]))){
var statearr_44723_47017 = state_44711;
(statearr_44723_47017[(1)] = cljs.core.first((state_44711[(4)])));

} else {
throw ex__43841__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47018 = state_44711;
state_44711 = G__47018;
continue;
} else {
return ret_value__43839__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43838__auto__ = function(state_44711){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43838__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43838__auto____1.call(this,state_44711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43838__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43838__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43838__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43838__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43838__auto__;
})()
;})(__47002,switch__43837__auto__,c__44271__auto___47007,G__44697_47004,G__44697_47005__$1,n__4741__auto___47001,jobs,results,process,async))
})();
var state__44279__auto__ = (function (){var statearr_44724 = f__44278__auto__();
(statearr_44724[(6)] = c__44271__auto___47007);

return statearr_44724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44279__auto__);
});})(__47002,c__44271__auto___47007,G__44697_47004,G__44697_47005__$1,n__4741__auto___47001,jobs,results,process,async))
);


break;
case "async":
var c__44271__auto___47019 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47002,c__44271__auto___47019,G__44697_47004,G__44697_47005__$1,n__4741__auto___47001,jobs,results,process,async){
return (function (){
var f__44278__auto__ = (function (){var switch__43837__auto__ = ((function (__47002,c__44271__auto___47019,G__44697_47004,G__44697_47005__$1,n__4741__auto___47001,jobs,results,process,async){
return (function (state_44737){
var state_val_44738 = (state_44737[(1)]);
if((state_val_44738 === (1))){
var state_44737__$1 = state_44737;
var statearr_44739_47020 = state_44737__$1;
(statearr_44739_47020[(2)] = null);

(statearr_44739_47020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44738 === (2))){
var state_44737__$1 = state_44737;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44737__$1,(4),jobs);
} else {
if((state_val_44738 === (3))){
var inst_44735 = (state_44737[(2)]);
var state_44737__$1 = state_44737;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44737__$1,inst_44735);
} else {
if((state_val_44738 === (4))){
var inst_44727 = (state_44737[(2)]);
var inst_44728 = async(inst_44727);
var state_44737__$1 = state_44737;
if(cljs.core.truth_(inst_44728)){
var statearr_44741_47022 = state_44737__$1;
(statearr_44741_47022[(1)] = (5));

} else {
var statearr_44742_47023 = state_44737__$1;
(statearr_44742_47023[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44738 === (5))){
var state_44737__$1 = state_44737;
var statearr_44743_47024 = state_44737__$1;
(statearr_44743_47024[(2)] = null);

(statearr_44743_47024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44738 === (6))){
var state_44737__$1 = state_44737;
var statearr_44745_47025 = state_44737__$1;
(statearr_44745_47025[(2)] = null);

(statearr_44745_47025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44738 === (7))){
var inst_44733 = (state_44737[(2)]);
var state_44737__$1 = state_44737;
var statearr_44746_47026 = state_44737__$1;
(statearr_44746_47026[(2)] = inst_44733);

(statearr_44746_47026[(1)] = (3));


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
});})(__47002,c__44271__auto___47019,G__44697_47004,G__44697_47005__$1,n__4741__auto___47001,jobs,results,process,async))
;
return ((function (__47002,switch__43837__auto__,c__44271__auto___47019,G__44697_47004,G__44697_47005__$1,n__4741__auto___47001,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43838__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43838__auto____0 = (function (){
var statearr_44747 = [null,null,null,null,null,null,null];
(statearr_44747[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43838__auto__);

(statearr_44747[(1)] = (1));

return statearr_44747;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43838__auto____1 = (function (state_44737){
while(true){
var ret_value__43839__auto__ = (function (){try{while(true){
var result__43840__auto__ = switch__43837__auto__(state_44737);
if(cljs.core.keyword_identical_QMARK_(result__43840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43840__auto__;
}
break;
}
}catch (e44748){var ex__43841__auto__ = e44748;
var statearr_44749_47027 = state_44737;
(statearr_44749_47027[(2)] = ex__43841__auto__);


if(cljs.core.seq((state_44737[(4)]))){
var statearr_44750_47028 = state_44737;
(statearr_44750_47028[(1)] = cljs.core.first((state_44737[(4)])));

} else {
throw ex__43841__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47029 = state_44737;
state_44737 = G__47029;
continue;
} else {
return ret_value__43839__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43838__auto__ = function(state_44737){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43838__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43838__auto____1.call(this,state_44737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43838__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43838__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43838__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43838__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43838__auto__;
})()
;})(__47002,switch__43837__auto__,c__44271__auto___47019,G__44697_47004,G__44697_47005__$1,n__4741__auto___47001,jobs,results,process,async))
})();
var state__44279__auto__ = (function (){var statearr_44756 = f__44278__auto__();
(statearr_44756[(6)] = c__44271__auto___47019);

return statearr_44756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44279__auto__);
});})(__47002,c__44271__auto___47019,G__44697_47004,G__44697_47005__$1,n__4741__auto___47001,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44697_47005__$1)].join('')));

}

var G__47032 = (__47002 + (1));
__47002 = G__47032;
continue;
} else {
}
break;
}

var c__44271__auto___47033 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44278__auto__ = (function (){var switch__43837__auto__ = (function (state_44781){
var state_val_44782 = (state_44781[(1)]);
if((state_val_44782 === (7))){
var inst_44777 = (state_44781[(2)]);
var state_44781__$1 = state_44781;
var statearr_44793_47035 = state_44781__$1;
(statearr_44793_47035[(2)] = inst_44777);

(statearr_44793_47035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44782 === (1))){
var state_44781__$1 = state_44781;
var statearr_44803_47036 = state_44781__$1;
(statearr_44803_47036[(2)] = null);

(statearr_44803_47036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44782 === (4))){
var inst_44760 = (state_44781[(7)]);
var inst_44760__$1 = (state_44781[(2)]);
var inst_44761 = (inst_44760__$1 == null);
var state_44781__$1 = (function (){var statearr_44812 = state_44781;
(statearr_44812[(7)] = inst_44760__$1);

return statearr_44812;
})();
if(cljs.core.truth_(inst_44761)){
var statearr_44818_47037 = state_44781__$1;
(statearr_44818_47037[(1)] = (5));

} else {
var statearr_44821_47038 = state_44781__$1;
(statearr_44821_47038[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44782 === (6))){
var inst_44765 = (state_44781[(8)]);
var inst_44760 = (state_44781[(7)]);
var inst_44765__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_44768 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44769 = [inst_44760,inst_44765__$1];
var inst_44770 = (new cljs.core.PersistentVector(null,2,(5),inst_44768,inst_44769,null));
var state_44781__$1 = (function (){var statearr_44826 = state_44781;
(statearr_44826[(8)] = inst_44765__$1);

return statearr_44826;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44781__$1,(8),jobs,inst_44770);
} else {
if((state_val_44782 === (3))){
var inst_44779 = (state_44781[(2)]);
var state_44781__$1 = state_44781;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44781__$1,inst_44779);
} else {
if((state_val_44782 === (2))){
var state_44781__$1 = state_44781;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44781__$1,(4),from);
} else {
if((state_val_44782 === (9))){
var inst_44774 = (state_44781[(2)]);
var state_44781__$1 = (function (){var statearr_44827 = state_44781;
(statearr_44827[(9)] = inst_44774);

return statearr_44827;
})();
var statearr_44828_47053 = state_44781__$1;
(statearr_44828_47053[(2)] = null);

(statearr_44828_47053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44782 === (5))){
var inst_44763 = cljs.core.async.close_BANG_(jobs);
var state_44781__$1 = state_44781;
var statearr_44829_47054 = state_44781__$1;
(statearr_44829_47054[(2)] = inst_44763);

(statearr_44829_47054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44782 === (8))){
var inst_44765 = (state_44781[(8)]);
var inst_44772 = (state_44781[(2)]);
var state_44781__$1 = (function (){var statearr_44833 = state_44781;
(statearr_44833[(10)] = inst_44772);

return statearr_44833;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44781__$1,(9),results,inst_44765);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43838__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43838__auto____0 = (function (){
var statearr_44835 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44835[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43838__auto__);

(statearr_44835[(1)] = (1));

return statearr_44835;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43838__auto____1 = (function (state_44781){
while(true){
var ret_value__43839__auto__ = (function (){try{while(true){
var result__43840__auto__ = switch__43837__auto__(state_44781);
if(cljs.core.keyword_identical_QMARK_(result__43840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43840__auto__;
}
break;
}
}catch (e44838){var ex__43841__auto__ = e44838;
var statearr_44839_47055 = state_44781;
(statearr_44839_47055[(2)] = ex__43841__auto__);


if(cljs.core.seq((state_44781[(4)]))){
var statearr_44840_47057 = state_44781;
(statearr_44840_47057[(1)] = cljs.core.first((state_44781[(4)])));

} else {
throw ex__43841__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47058 = state_44781;
state_44781 = G__47058;
continue;
} else {
return ret_value__43839__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43838__auto__ = function(state_44781){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43838__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43838__auto____1.call(this,state_44781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43838__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43838__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43838__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43838__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43838__auto__;
})()
})();
var state__44279__auto__ = (function (){var statearr_44841 = f__44278__auto__();
(statearr_44841[(6)] = c__44271__auto___47033);

return statearr_44841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44279__auto__);
}));


var c__44271__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44278__auto__ = (function (){var switch__43837__auto__ = (function (state_44902){
var state_val_44903 = (state_44902[(1)]);
if((state_val_44903 === (7))){
var inst_44892 = (state_44902[(2)]);
var state_44902__$1 = state_44902;
var statearr_44904_47059 = state_44902__$1;
(statearr_44904_47059[(2)] = inst_44892);

(statearr_44904_47059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44903 === (20))){
var state_44902__$1 = state_44902;
var statearr_44905_47064 = state_44902__$1;
(statearr_44905_47064[(2)] = null);

(statearr_44905_47064[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44903 === (1))){
var state_44902__$1 = state_44902;
var statearr_44910_47065 = state_44902__$1;
(statearr_44910_47065[(2)] = null);

(statearr_44910_47065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44903 === (4))){
var inst_44845 = (state_44902[(7)]);
var inst_44845__$1 = (state_44902[(2)]);
var inst_44846 = (inst_44845__$1 == null);
var state_44902__$1 = (function (){var statearr_44918 = state_44902;
(statearr_44918[(7)] = inst_44845__$1);

return statearr_44918;
})();
if(cljs.core.truth_(inst_44846)){
var statearr_44924_47066 = state_44902__$1;
(statearr_44924_47066[(1)] = (5));

} else {
var statearr_44926_47067 = state_44902__$1;
(statearr_44926_47067[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44903 === (15))){
var inst_44862 = (state_44902[(8)]);
var state_44902__$1 = state_44902;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44902__$1,(18),to,inst_44862);
} else {
if((state_val_44903 === (21))){
var inst_44887 = (state_44902[(2)]);
var state_44902__$1 = state_44902;
var statearr_44931_47068 = state_44902__$1;
(statearr_44931_47068[(2)] = inst_44887);

(statearr_44931_47068[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44903 === (13))){
var inst_44889 = (state_44902[(2)]);
var state_44902__$1 = (function (){var statearr_44936 = state_44902;
(statearr_44936[(9)] = inst_44889);

return statearr_44936;
})();
var statearr_44937_47069 = state_44902__$1;
(statearr_44937_47069[(2)] = null);

(statearr_44937_47069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44903 === (6))){
var inst_44845 = (state_44902[(7)]);
var state_44902__$1 = state_44902;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44902__$1,(11),inst_44845);
} else {
if((state_val_44903 === (17))){
var inst_44877 = (state_44902[(2)]);
var state_44902__$1 = state_44902;
if(cljs.core.truth_(inst_44877)){
var statearr_44957_47070 = state_44902__$1;
(statearr_44957_47070[(1)] = (19));

} else {
var statearr_44962_47071 = state_44902__$1;
(statearr_44962_47071[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44903 === (3))){
var inst_44895 = (state_44902[(2)]);
var state_44902__$1 = state_44902;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44902__$1,inst_44895);
} else {
if((state_val_44903 === (12))){
var inst_44855 = (state_44902[(10)]);
var state_44902__$1 = state_44902;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44902__$1,(14),inst_44855);
} else {
if((state_val_44903 === (2))){
var state_44902__$1 = state_44902;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44902__$1,(4),results);
} else {
if((state_val_44903 === (19))){
var state_44902__$1 = state_44902;
var statearr_44967_47073 = state_44902__$1;
(statearr_44967_47073[(2)] = null);

(statearr_44967_47073[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44903 === (11))){
var inst_44855 = (state_44902[(2)]);
var state_44902__$1 = (function (){var statearr_44968 = state_44902;
(statearr_44968[(10)] = inst_44855);

return statearr_44968;
})();
var statearr_44969_47074 = state_44902__$1;
(statearr_44969_47074[(2)] = null);

(statearr_44969_47074[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44903 === (9))){
var state_44902__$1 = state_44902;
var statearr_44970_47075 = state_44902__$1;
(statearr_44970_47075[(2)] = null);

(statearr_44970_47075[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44903 === (5))){
var state_44902__$1 = state_44902;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44971_47076 = state_44902__$1;
(statearr_44971_47076[(1)] = (8));

} else {
var statearr_44972_47077 = state_44902__$1;
(statearr_44972_47077[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44903 === (14))){
var inst_44869 = (state_44902[(11)]);
var inst_44862 = (state_44902[(8)]);
var inst_44862__$1 = (state_44902[(2)]);
var inst_44868 = (inst_44862__$1 == null);
var inst_44869__$1 = cljs.core.not(inst_44868);
var state_44902__$1 = (function (){var statearr_44976 = state_44902;
(statearr_44976[(11)] = inst_44869__$1);

(statearr_44976[(8)] = inst_44862__$1);

return statearr_44976;
})();
if(inst_44869__$1){
var statearr_44982_47081 = state_44902__$1;
(statearr_44982_47081[(1)] = (15));

} else {
var statearr_44983_47082 = state_44902__$1;
(statearr_44983_47082[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44903 === (16))){
var inst_44869 = (state_44902[(11)]);
var state_44902__$1 = state_44902;
var statearr_44984_47083 = state_44902__$1;
(statearr_44984_47083[(2)] = inst_44869);

(statearr_44984_47083[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44903 === (10))){
var inst_44852 = (state_44902[(2)]);
var state_44902__$1 = state_44902;
var statearr_44988_47084 = state_44902__$1;
(statearr_44988_47084[(2)] = inst_44852);

(statearr_44988_47084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44903 === (18))){
var inst_44874 = (state_44902[(2)]);
var state_44902__$1 = state_44902;
var statearr_44989_47085 = state_44902__$1;
(statearr_44989_47085[(2)] = inst_44874);

(statearr_44989_47085[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44903 === (8))){
var inst_44849 = cljs.core.async.close_BANG_(to);
var state_44902__$1 = state_44902;
var statearr_44990_47090 = state_44902__$1;
(statearr_44990_47090[(2)] = inst_44849);

(statearr_44990_47090[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43838__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43838__auto____0 = (function (){
var statearr_44991 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44991[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43838__auto__);

(statearr_44991[(1)] = (1));

return statearr_44991;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43838__auto____1 = (function (state_44902){
while(true){
var ret_value__43839__auto__ = (function (){try{while(true){
var result__43840__auto__ = switch__43837__auto__(state_44902);
if(cljs.core.keyword_identical_QMARK_(result__43840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43840__auto__;
}
break;
}
}catch (e44992){var ex__43841__auto__ = e44992;
var statearr_44993_47097 = state_44902;
(statearr_44993_47097[(2)] = ex__43841__auto__);


if(cljs.core.seq((state_44902[(4)]))){
var statearr_44998_47099 = state_44902;
(statearr_44998_47099[(1)] = cljs.core.first((state_44902[(4)])));

} else {
throw ex__43841__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47102 = state_44902;
state_44902 = G__47102;
continue;
} else {
return ret_value__43839__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43838__auto__ = function(state_44902){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43838__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43838__auto____1.call(this,state_44902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43838__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43838__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43838__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43838__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43838__auto__;
})()
})();
var state__44279__auto__ = (function (){var statearr_45007 = f__44278__auto__();
(statearr_45007[(6)] = c__44271__auto__);

return statearr_45007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44279__auto__);
}));

return c__44271__auto__;
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
var G__45010 = arguments.length;
switch (G__45010) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__45025 = arguments.length;
switch (G__45025) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__45027 = arguments.length;
switch (G__45027) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__44271__auto___47110 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44278__auto__ = (function (){var switch__43837__auto__ = (function (state_45053){
var state_val_45054 = (state_45053[(1)]);
if((state_val_45054 === (7))){
var inst_45049 = (state_45053[(2)]);
var state_45053__$1 = state_45053;
var statearr_45055_47111 = state_45053__$1;
(statearr_45055_47111[(2)] = inst_45049);

(statearr_45055_47111[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45054 === (1))){
var state_45053__$1 = state_45053;
var statearr_45056_47112 = state_45053__$1;
(statearr_45056_47112[(2)] = null);

(statearr_45056_47112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45054 === (4))){
var inst_45030 = (state_45053[(7)]);
var inst_45030__$1 = (state_45053[(2)]);
var inst_45031 = (inst_45030__$1 == null);
var state_45053__$1 = (function (){var statearr_45057 = state_45053;
(statearr_45057[(7)] = inst_45030__$1);

return statearr_45057;
})();
if(cljs.core.truth_(inst_45031)){
var statearr_45058_47113 = state_45053__$1;
(statearr_45058_47113[(1)] = (5));

} else {
var statearr_45059_47114 = state_45053__$1;
(statearr_45059_47114[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45054 === (13))){
var state_45053__$1 = state_45053;
var statearr_45060_47115 = state_45053__$1;
(statearr_45060_47115[(2)] = null);

(statearr_45060_47115[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45054 === (6))){
var inst_45030 = (state_45053[(7)]);
var inst_45036 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_45030) : p.call(null,inst_45030));
var state_45053__$1 = state_45053;
if(cljs.core.truth_(inst_45036)){
var statearr_45061_47116 = state_45053__$1;
(statearr_45061_47116[(1)] = (9));

} else {
var statearr_45071_47117 = state_45053__$1;
(statearr_45071_47117[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45054 === (3))){
var inst_45051 = (state_45053[(2)]);
var state_45053__$1 = state_45053;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45053__$1,inst_45051);
} else {
if((state_val_45054 === (12))){
var state_45053__$1 = state_45053;
var statearr_45072_47118 = state_45053__$1;
(statearr_45072_47118[(2)] = null);

(statearr_45072_47118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45054 === (2))){
var state_45053__$1 = state_45053;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45053__$1,(4),ch);
} else {
if((state_val_45054 === (11))){
var inst_45030 = (state_45053[(7)]);
var inst_45040 = (state_45053[(2)]);
var state_45053__$1 = state_45053;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45053__$1,(8),inst_45040,inst_45030);
} else {
if((state_val_45054 === (9))){
var state_45053__$1 = state_45053;
var statearr_45077_47119 = state_45053__$1;
(statearr_45077_47119[(2)] = tc);

(statearr_45077_47119[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45054 === (5))){
var inst_45033 = cljs.core.async.close_BANG_(tc);
var inst_45034 = cljs.core.async.close_BANG_(fc);
var state_45053__$1 = (function (){var statearr_45078 = state_45053;
(statearr_45078[(8)] = inst_45033);

return statearr_45078;
})();
var statearr_45079_47120 = state_45053__$1;
(statearr_45079_47120[(2)] = inst_45034);

(statearr_45079_47120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45054 === (14))){
var inst_45047 = (state_45053[(2)]);
var state_45053__$1 = state_45053;
var statearr_45080_47121 = state_45053__$1;
(statearr_45080_47121[(2)] = inst_45047);

(statearr_45080_47121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45054 === (10))){
var state_45053__$1 = state_45053;
var statearr_45081_47126 = state_45053__$1;
(statearr_45081_47126[(2)] = fc);

(statearr_45081_47126[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45054 === (8))){
var inst_45042 = (state_45053[(2)]);
var state_45053__$1 = state_45053;
if(cljs.core.truth_(inst_45042)){
var statearr_45082_47127 = state_45053__$1;
(statearr_45082_47127[(1)] = (12));

} else {
var statearr_45083_47128 = state_45053__$1;
(statearr_45083_47128[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__43838__auto__ = null;
var cljs$core$async$state_machine__43838__auto____0 = (function (){
var statearr_45084 = [null,null,null,null,null,null,null,null,null];
(statearr_45084[(0)] = cljs$core$async$state_machine__43838__auto__);

(statearr_45084[(1)] = (1));

return statearr_45084;
});
var cljs$core$async$state_machine__43838__auto____1 = (function (state_45053){
while(true){
var ret_value__43839__auto__ = (function (){try{while(true){
var result__43840__auto__ = switch__43837__auto__(state_45053);
if(cljs.core.keyword_identical_QMARK_(result__43840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43840__auto__;
}
break;
}
}catch (e45085){var ex__43841__auto__ = e45085;
var statearr_45086_47132 = state_45053;
(statearr_45086_47132[(2)] = ex__43841__auto__);


if(cljs.core.seq((state_45053[(4)]))){
var statearr_45087_47133 = state_45053;
(statearr_45087_47133[(1)] = cljs.core.first((state_45053[(4)])));

} else {
throw ex__43841__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47134 = state_45053;
state_45053 = G__47134;
continue;
} else {
return ret_value__43839__auto__;
}
break;
}
});
cljs$core$async$state_machine__43838__auto__ = function(state_45053){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43838__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43838__auto____1.call(this,state_45053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43838__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43838__auto____0;
cljs$core$async$state_machine__43838__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43838__auto____1;
return cljs$core$async$state_machine__43838__auto__;
})()
})();
var state__44279__auto__ = (function (){var statearr_45092 = f__44278__auto__();
(statearr_45092[(6)] = c__44271__auto___47110);

return statearr_45092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44279__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__44271__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44278__auto__ = (function (){var switch__43837__auto__ = (function (state_45123){
var state_val_45124 = (state_45123[(1)]);
if((state_val_45124 === (7))){
var inst_45119 = (state_45123[(2)]);
var state_45123__$1 = state_45123;
var statearr_45134_47135 = state_45123__$1;
(statearr_45134_47135[(2)] = inst_45119);

(statearr_45134_47135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45124 === (1))){
var inst_45098 = init;
var inst_45099 = inst_45098;
var state_45123__$1 = (function (){var statearr_45135 = state_45123;
(statearr_45135[(7)] = inst_45099);

return statearr_45135;
})();
var statearr_45140_47136 = state_45123__$1;
(statearr_45140_47136[(2)] = null);

(statearr_45140_47136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45124 === (4))){
var inst_45102 = (state_45123[(8)]);
var inst_45102__$1 = (state_45123[(2)]);
var inst_45107 = (inst_45102__$1 == null);
var state_45123__$1 = (function (){var statearr_45146 = state_45123;
(statearr_45146[(8)] = inst_45102__$1);

return statearr_45146;
})();
if(cljs.core.truth_(inst_45107)){
var statearr_45147_47137 = state_45123__$1;
(statearr_45147_47137[(1)] = (5));

} else {
var statearr_45148_47138 = state_45123__$1;
(statearr_45148_47138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45124 === (6))){
var inst_45110 = (state_45123[(9)]);
var inst_45099 = (state_45123[(7)]);
var inst_45102 = (state_45123[(8)]);
var inst_45110__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_45099,inst_45102) : f.call(null,inst_45099,inst_45102));
var inst_45111 = cljs.core.reduced_QMARK_(inst_45110__$1);
var state_45123__$1 = (function (){var statearr_45151 = state_45123;
(statearr_45151[(9)] = inst_45110__$1);

return statearr_45151;
})();
if(inst_45111){
var statearr_45154_47139 = state_45123__$1;
(statearr_45154_47139[(1)] = (8));

} else {
var statearr_45155_47140 = state_45123__$1;
(statearr_45155_47140[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45124 === (3))){
var inst_45121 = (state_45123[(2)]);
var state_45123__$1 = state_45123;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45123__$1,inst_45121);
} else {
if((state_val_45124 === (2))){
var state_45123__$1 = state_45123;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45123__$1,(4),ch);
} else {
if((state_val_45124 === (9))){
var inst_45110 = (state_45123[(9)]);
var inst_45099 = inst_45110;
var state_45123__$1 = (function (){var statearr_45161 = state_45123;
(statearr_45161[(7)] = inst_45099);

return statearr_45161;
})();
var statearr_45162_47144 = state_45123__$1;
(statearr_45162_47144[(2)] = null);

(statearr_45162_47144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45124 === (5))){
var inst_45099 = (state_45123[(7)]);
var state_45123__$1 = state_45123;
var statearr_45167_47145 = state_45123__$1;
(statearr_45167_47145[(2)] = inst_45099);

(statearr_45167_47145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45124 === (10))){
var inst_45117 = (state_45123[(2)]);
var state_45123__$1 = state_45123;
var statearr_45169_47146 = state_45123__$1;
(statearr_45169_47146[(2)] = inst_45117);

(statearr_45169_47146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45124 === (8))){
var inst_45110 = (state_45123[(9)]);
var inst_45113 = cljs.core.deref(inst_45110);
var state_45123__$1 = state_45123;
var statearr_45173_47147 = state_45123__$1;
(statearr_45173_47147[(2)] = inst_45113);

(statearr_45173_47147[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__43838__auto__ = null;
var cljs$core$async$reduce_$_state_machine__43838__auto____0 = (function (){
var statearr_45174 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45174[(0)] = cljs$core$async$reduce_$_state_machine__43838__auto__);

(statearr_45174[(1)] = (1));

return statearr_45174;
});
var cljs$core$async$reduce_$_state_machine__43838__auto____1 = (function (state_45123){
while(true){
var ret_value__43839__auto__ = (function (){try{while(true){
var result__43840__auto__ = switch__43837__auto__(state_45123);
if(cljs.core.keyword_identical_QMARK_(result__43840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43840__auto__;
}
break;
}
}catch (e45175){var ex__43841__auto__ = e45175;
var statearr_45176_47149 = state_45123;
(statearr_45176_47149[(2)] = ex__43841__auto__);


if(cljs.core.seq((state_45123[(4)]))){
var statearr_45177_47150 = state_45123;
(statearr_45177_47150[(1)] = cljs.core.first((state_45123[(4)])));

} else {
throw ex__43841__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47151 = state_45123;
state_45123 = G__47151;
continue;
} else {
return ret_value__43839__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__43838__auto__ = function(state_45123){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__43838__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__43838__auto____1.call(this,state_45123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__43838__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__43838__auto____0;
cljs$core$async$reduce_$_state_machine__43838__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__43838__auto____1;
return cljs$core$async$reduce_$_state_machine__43838__auto__;
})()
})();
var state__44279__auto__ = (function (){var statearr_45178 = f__44278__auto__();
(statearr_45178[(6)] = c__44271__auto__);

return statearr_45178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44279__auto__);
}));

return c__44271__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__44271__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44278__auto__ = (function (){var switch__43837__auto__ = (function (state_45184){
var state_val_45185 = (state_45184[(1)]);
if((state_val_45185 === (1))){
var inst_45179 = cljs.core.async.reduce(f__$1,init,ch);
var state_45184__$1 = state_45184;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45184__$1,(2),inst_45179);
} else {
if((state_val_45185 === (2))){
var inst_45181 = (state_45184[(2)]);
var inst_45182 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_45181) : f__$1.call(null,inst_45181));
var state_45184__$1 = state_45184;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45184__$1,inst_45182);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__43838__auto__ = null;
var cljs$core$async$transduce_$_state_machine__43838__auto____0 = (function (){
var statearr_45186 = [null,null,null,null,null,null,null];
(statearr_45186[(0)] = cljs$core$async$transduce_$_state_machine__43838__auto__);

(statearr_45186[(1)] = (1));

return statearr_45186;
});
var cljs$core$async$transduce_$_state_machine__43838__auto____1 = (function (state_45184){
while(true){
var ret_value__43839__auto__ = (function (){try{while(true){
var result__43840__auto__ = switch__43837__auto__(state_45184);
if(cljs.core.keyword_identical_QMARK_(result__43840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43840__auto__;
}
break;
}
}catch (e45187){var ex__43841__auto__ = e45187;
var statearr_45188_47155 = state_45184;
(statearr_45188_47155[(2)] = ex__43841__auto__);


if(cljs.core.seq((state_45184[(4)]))){
var statearr_45189_47156 = state_45184;
(statearr_45189_47156[(1)] = cljs.core.first((state_45184[(4)])));

} else {
throw ex__43841__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47157 = state_45184;
state_45184 = G__47157;
continue;
} else {
return ret_value__43839__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__43838__auto__ = function(state_45184){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__43838__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__43838__auto____1.call(this,state_45184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__43838__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__43838__auto____0;
cljs$core$async$transduce_$_state_machine__43838__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__43838__auto____1;
return cljs$core$async$transduce_$_state_machine__43838__auto__;
})()
})();
var state__44279__auto__ = (function (){var statearr_45191 = f__44278__auto__();
(statearr_45191[(6)] = c__44271__auto__);

return statearr_45191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44279__auto__);
}));

return c__44271__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__45198 = arguments.length;
switch (G__45198) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__44271__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44278__auto__ = (function (){var switch__43837__auto__ = (function (state_45247){
var state_val_45248 = (state_45247[(1)]);
if((state_val_45248 === (7))){
var inst_45225 = (state_45247[(2)]);
var state_45247__$1 = state_45247;
var statearr_45249_47159 = state_45247__$1;
(statearr_45249_47159[(2)] = inst_45225);

(statearr_45249_47159[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45248 === (1))){
var inst_45213 = cljs.core.seq(coll);
var inst_45214 = inst_45213;
var state_45247__$1 = (function (){var statearr_45250 = state_45247;
(statearr_45250[(7)] = inst_45214);

return statearr_45250;
})();
var statearr_45251_47163 = state_45247__$1;
(statearr_45251_47163[(2)] = null);

(statearr_45251_47163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45248 === (4))){
var inst_45214 = (state_45247[(7)]);
var inst_45223 = cljs.core.first(inst_45214);
var state_45247__$1 = state_45247;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45247__$1,(7),ch,inst_45223);
} else {
if((state_val_45248 === (13))){
var inst_45237 = (state_45247[(2)]);
var state_45247__$1 = state_45247;
var statearr_45252_47164 = state_45247__$1;
(statearr_45252_47164[(2)] = inst_45237);

(statearr_45252_47164[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45248 === (6))){
var inst_45228 = (state_45247[(2)]);
var state_45247__$1 = state_45247;
if(cljs.core.truth_(inst_45228)){
var statearr_45253_47165 = state_45247__$1;
(statearr_45253_47165[(1)] = (8));

} else {
var statearr_45254_47166 = state_45247__$1;
(statearr_45254_47166[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45248 === (3))){
var inst_45245 = (state_45247[(2)]);
var state_45247__$1 = state_45247;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45247__$1,inst_45245);
} else {
if((state_val_45248 === (12))){
var state_45247__$1 = state_45247;
var statearr_45255_47167 = state_45247__$1;
(statearr_45255_47167[(2)] = null);

(statearr_45255_47167[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45248 === (2))){
var inst_45214 = (state_45247[(7)]);
var state_45247__$1 = state_45247;
if(cljs.core.truth_(inst_45214)){
var statearr_45256_47168 = state_45247__$1;
(statearr_45256_47168[(1)] = (4));

} else {
var statearr_45257_47169 = state_45247__$1;
(statearr_45257_47169[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45248 === (11))){
var inst_45234 = cljs.core.async.close_BANG_(ch);
var state_45247__$1 = state_45247;
var statearr_45258_47170 = state_45247__$1;
(statearr_45258_47170[(2)] = inst_45234);

(statearr_45258_47170[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45248 === (9))){
var state_45247__$1 = state_45247;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45259_47171 = state_45247__$1;
(statearr_45259_47171[(1)] = (11));

} else {
var statearr_45260_47172 = state_45247__$1;
(statearr_45260_47172[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45248 === (5))){
var inst_45214 = (state_45247[(7)]);
var state_45247__$1 = state_45247;
var statearr_45261_47174 = state_45247__$1;
(statearr_45261_47174[(2)] = inst_45214);

(statearr_45261_47174[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45248 === (10))){
var inst_45239 = (state_45247[(2)]);
var state_45247__$1 = state_45247;
var statearr_45262_47175 = state_45247__$1;
(statearr_45262_47175[(2)] = inst_45239);

(statearr_45262_47175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45248 === (8))){
var inst_45214 = (state_45247[(7)]);
var inst_45230 = cljs.core.next(inst_45214);
var inst_45214__$1 = inst_45230;
var state_45247__$1 = (function (){var statearr_45263 = state_45247;
(statearr_45263[(7)] = inst_45214__$1);

return statearr_45263;
})();
var statearr_45264_47176 = state_45247__$1;
(statearr_45264_47176[(2)] = null);

(statearr_45264_47176[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__43838__auto__ = null;
var cljs$core$async$state_machine__43838__auto____0 = (function (){
var statearr_45265 = [null,null,null,null,null,null,null,null];
(statearr_45265[(0)] = cljs$core$async$state_machine__43838__auto__);

(statearr_45265[(1)] = (1));

return statearr_45265;
});
var cljs$core$async$state_machine__43838__auto____1 = (function (state_45247){
while(true){
var ret_value__43839__auto__ = (function (){try{while(true){
var result__43840__auto__ = switch__43837__auto__(state_45247);
if(cljs.core.keyword_identical_QMARK_(result__43840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43840__auto__;
}
break;
}
}catch (e45266){var ex__43841__auto__ = e45266;
var statearr_45267_47177 = state_45247;
(statearr_45267_47177[(2)] = ex__43841__auto__);


if(cljs.core.seq((state_45247[(4)]))){
var statearr_45268_47179 = state_45247;
(statearr_45268_47179[(1)] = cljs.core.first((state_45247[(4)])));

} else {
throw ex__43841__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47180 = state_45247;
state_45247 = G__47180;
continue;
} else {
return ret_value__43839__auto__;
}
break;
}
});
cljs$core$async$state_machine__43838__auto__ = function(state_45247){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43838__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43838__auto____1.call(this,state_45247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43838__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43838__auto____0;
cljs$core$async$state_machine__43838__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43838__auto____1;
return cljs$core$async$state_machine__43838__auto__;
})()
})();
var state__44279__auto__ = (function (){var statearr_45269 = f__44278__auto__();
(statearr_45269[(6)] = c__44271__auto__);

return statearr_45269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44279__auto__);
}));

return c__44271__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__45271 = arguments.length;
switch (G__45271) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_47182 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_47182(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_47183 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_47183(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_47185 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_47185(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_47192 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_47192(m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45278 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45278 = (function (ch,cs,meta45279){
this.ch = ch;
this.cs = cs;
this.meta45279 = meta45279;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45280,meta45279__$1){
var self__ = this;
var _45280__$1 = this;
return (new cljs.core.async.t_cljs$core$async45278(self__.ch,self__.cs,meta45279__$1));
}));

(cljs.core.async.t_cljs$core$async45278.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45280){
var self__ = this;
var _45280__$1 = this;
return self__.meta45279;
}));

(cljs.core.async.t_cljs$core$async45278.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45278.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async45278.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45278.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async45278.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async45278.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async45278.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta45279","meta45279",-25856386,null)], null);
}));

(cljs.core.async.t_cljs$core$async45278.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45278.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45278");

(cljs.core.async.t_cljs$core$async45278.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async45278");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45278.
 */
cljs.core.async.__GT_t_cljs$core$async45278 = (function cljs$core$async$mult_$___GT_t_cljs$core$async45278(ch__$1,cs__$1,meta45279){
return (new cljs.core.async.t_cljs$core$async45278(ch__$1,cs__$1,meta45279));
});

}

return (new cljs.core.async.t_cljs$core$async45278(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__44271__auto___47199 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44278__auto__ = (function (){var switch__43837__auto__ = (function (state_45451){
var state_val_45452 = (state_45451[(1)]);
if((state_val_45452 === (7))){
var inst_45441 = (state_45451[(2)]);
var state_45451__$1 = state_45451;
var statearr_45454_47200 = state_45451__$1;
(statearr_45454_47200[(2)] = inst_45441);

(statearr_45454_47200[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45452 === (20))){
var inst_45330 = (state_45451[(7)]);
var inst_45353 = cljs.core.first(inst_45330);
var inst_45354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45353,(0),null);
var inst_45356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45353,(1),null);
var state_45451__$1 = (function (){var statearr_45455 = state_45451;
(statearr_45455[(8)] = inst_45354);

return statearr_45455;
})();
if(cljs.core.truth_(inst_45356)){
var statearr_45456_47203 = state_45451__$1;
(statearr_45456_47203[(1)] = (22));

} else {
var statearr_45457_47204 = state_45451__$1;
(statearr_45457_47204[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45452 === (27))){
var inst_45393 = (state_45451[(9)]);
var inst_45387 = (state_45451[(10)]);
var inst_45385 = (state_45451[(11)]);
var inst_45298 = (state_45451[(12)]);
var inst_45393__$1 = cljs.core._nth(inst_45385,inst_45387);
var inst_45394 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_45393__$1,inst_45298,done);
var state_45451__$1 = (function (){var statearr_45459 = state_45451;
(statearr_45459[(9)] = inst_45393__$1);

return statearr_45459;
})();
if(cljs.core.truth_(inst_45394)){
var statearr_45460_47207 = state_45451__$1;
(statearr_45460_47207[(1)] = (30));

} else {
var statearr_45461_47208 = state_45451__$1;
(statearr_45461_47208[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45452 === (1))){
var state_45451__$1 = state_45451;
var statearr_45462_47209 = state_45451__$1;
(statearr_45462_47209[(2)] = null);

(statearr_45462_47209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45452 === (24))){
var inst_45330 = (state_45451[(7)]);
var inst_45362 = (state_45451[(2)]);
var inst_45363 = cljs.core.next(inst_45330);
var inst_45308 = inst_45363;
var inst_45309 = null;
var inst_45310 = (0);
var inst_45311 = (0);
var state_45451__$1 = (function (){var statearr_45463 = state_45451;
(statearr_45463[(13)] = inst_45308);

(statearr_45463[(14)] = inst_45309);

(statearr_45463[(15)] = inst_45362);

(statearr_45463[(16)] = inst_45310);

(statearr_45463[(17)] = inst_45311);

return statearr_45463;
})();
var statearr_45465_47217 = state_45451__$1;
(statearr_45465_47217[(2)] = null);

(statearr_45465_47217[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45452 === (39))){
var state_45451__$1 = state_45451;
var statearr_45470_47224 = state_45451__$1;
(statearr_45470_47224[(2)] = null);

(statearr_45470_47224[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45452 === (4))){
var inst_45298 = (state_45451[(12)]);
var inst_45298__$1 = (state_45451[(2)]);
var inst_45299 = (inst_45298__$1 == null);
var state_45451__$1 = (function (){var statearr_45471 = state_45451;
(statearr_45471[(12)] = inst_45298__$1);

return statearr_45471;
})();
if(cljs.core.truth_(inst_45299)){
var statearr_45472_47225 = state_45451__$1;
(statearr_45472_47225[(1)] = (5));

} else {
var statearr_45473_47226 = state_45451__$1;
(statearr_45473_47226[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45452 === (15))){
var inst_45308 = (state_45451[(13)]);
var inst_45309 = (state_45451[(14)]);
var inst_45310 = (state_45451[(16)]);
var inst_45311 = (state_45451[(17)]);
var inst_45326 = (state_45451[(2)]);
var inst_45327 = (inst_45311 + (1));
var tmp45467 = inst_45308;
var tmp45468 = inst_45309;
var tmp45469 = inst_45310;
var inst_45308__$1 = tmp45467;
var inst_45309__$1 = tmp45468;
var inst_45310__$1 = tmp45469;
var inst_45311__$1 = inst_45327;
var state_45451__$1 = (function (){var statearr_45479 = state_45451;
(statearr_45479[(13)] = inst_45308__$1);

(statearr_45479[(14)] = inst_45309__$1);

(statearr_45479[(16)] = inst_45310__$1);

(statearr_45479[(17)] = inst_45311__$1);

(statearr_45479[(18)] = inst_45326);

return statearr_45479;
})();
var statearr_45480_47227 = state_45451__$1;
(statearr_45480_47227[(2)] = null);

(statearr_45480_47227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45452 === (21))){
var inst_45366 = (state_45451[(2)]);
var state_45451__$1 = state_45451;
var statearr_45485_47228 = state_45451__$1;
(statearr_45485_47228[(2)] = inst_45366);

(statearr_45485_47228[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45452 === (31))){
var inst_45393 = (state_45451[(9)]);
var inst_45397 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_45393);
var state_45451__$1 = state_45451;
var statearr_45486_47229 = state_45451__$1;
(statearr_45486_47229[(2)] = inst_45397);

(statearr_45486_47229[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45452 === (32))){
var inst_45384 = (state_45451[(19)]);
var inst_45387 = (state_45451[(10)]);
var inst_45385 = (state_45451[(11)]);
var inst_45386 = (state_45451[(20)]);
var inst_45399 = (state_45451[(2)]);
var inst_45400 = (inst_45387 + (1));
var tmp45481 = inst_45384;
var tmp45482 = inst_45385;
var tmp45483 = inst_45386;
var inst_45384__$1 = tmp45481;
var inst_45385__$1 = tmp45482;
var inst_45386__$1 = tmp45483;
var inst_45387__$1 = inst_45400;
var state_45451__$1 = (function (){var statearr_45488 = state_45451;
(statearr_45488[(19)] = inst_45384__$1);

(statearr_45488[(10)] = inst_45387__$1);

(statearr_45488[(11)] = inst_45385__$1);

(statearr_45488[(20)] = inst_45386__$1);

(statearr_45488[(21)] = inst_45399);

return statearr_45488;
})();
var statearr_45489_47230 = state_45451__$1;
(statearr_45489_47230[(2)] = null);

(statearr_45489_47230[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45452 === (40))){
var inst_45414 = (state_45451[(22)]);
var inst_45418 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_45414);
var state_45451__$1 = state_45451;
var statearr_45490_47231 = state_45451__$1;
(statearr_45490_47231[(2)] = inst_45418);

(statearr_45490_47231[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45452 === (33))){
var inst_45405 = (state_45451[(23)]);
var inst_45407 = cljs.core.chunked_seq_QMARK_(inst_45405);
var state_45451__$1 = state_45451;
if(inst_45407){
var statearr_45492_47232 = state_45451__$1;
(statearr_45492_47232[(1)] = (36));

} else {
var statearr_45493_47233 = state_45451__$1;
(statearr_45493_47233[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45452 === (13))){
var inst_45320 = (state_45451[(24)]);
var inst_45323 = cljs.core.async.close_BANG_(inst_45320);
var state_45451__$1 = state_45451;
var statearr_45499_47234 = state_45451__$1;
(statearr_45499_47234[(2)] = inst_45323);

(statearr_45499_47234[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45452 === (22))){
var inst_45354 = (state_45451[(8)]);
var inst_45359 = cljs.core.async.close_BANG_(inst_45354);
var state_45451__$1 = state_45451;
var statearr_45500_47235 = state_45451__$1;
(statearr_45500_47235[(2)] = inst_45359);

(statearr_45500_47235[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45452 === (36))){
var inst_45405 = (state_45451[(23)]);
var inst_45409 = cljs.core.chunk_first(inst_45405);
var inst_45410 = cljs.core.chunk_rest(inst_45405);
var inst_45411 = cljs.core.count(inst_45409);
var inst_45384 = inst_45410;
var inst_45385 = inst_45409;
var inst_45386 = inst_45411;
var inst_45387 = (0);
var state_45451__$1 = (function (){var statearr_45503 = state_45451;
(statearr_45503[(19)] = inst_45384);

(statearr_45503[(10)] = inst_45387);

(statearr_45503[(11)] = inst_45385);

(statearr_45503[(20)] = inst_45386);

return statearr_45503;
})();
var statearr_45505_47236 = state_45451__$1;
(statearr_45505_47236[(2)] = null);

(statearr_45505_47236[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45452 === (41))){
var inst_45405 = (state_45451[(23)]);
var inst_45420 = (state_45451[(2)]);
var inst_45421 = cljs.core.next(inst_45405);
var inst_45384 = inst_45421;
var inst_45385 = null;
var inst_45386 = (0);
var inst_45387 = (0);
var state_45451__$1 = (function (){var statearr_45508 = state_45451;
(statearr_45508[(19)] = inst_45384);

(statearr_45508[(25)] = inst_45420);

(statearr_45508[(10)] = inst_45387);

(statearr_45508[(11)] = inst_45385);

(statearr_45508[(20)] = inst_45386);

return statearr_45508;
})();
var statearr_45509_47237 = state_45451__$1;
(statearr_45509_47237[(2)] = null);

(statearr_45509_47237[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45452 === (43))){
var state_45451__$1 = state_45451;
var statearr_45510_47238 = state_45451__$1;
(statearr_45510_47238[(2)] = null);

(statearr_45510_47238[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45452 === (29))){
var inst_45429 = (state_45451[(2)]);
var state_45451__$1 = state_45451;
var statearr_45511_47239 = state_45451__$1;
(statearr_45511_47239[(2)] = inst_45429);

(statearr_45511_47239[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45452 === (44))){
var inst_45438 = (state_45451[(2)]);
var state_45451__$1 = (function (){var statearr_45512 = state_45451;
(statearr_45512[(26)] = inst_45438);

return statearr_45512;
})();
var statearr_45514_47240 = state_45451__$1;
(statearr_45514_47240[(2)] = null);

(statearr_45514_47240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45452 === (6))){
var inst_45376 = (state_45451[(27)]);
var inst_45375 = cljs.core.deref(cs);
var inst_45376__$1 = cljs.core.keys(inst_45375);
var inst_45377 = cljs.core.count(inst_45376__$1);
var inst_45378 = cljs.core.reset_BANG_(dctr,inst_45377);
var inst_45383 = cljs.core.seq(inst_45376__$1);
var inst_45384 = inst_45383;
var inst_45385 = null;
var inst_45386 = (0);
var inst_45387 = (0);
var state_45451__$1 = (function (){var statearr_45516 = state_45451;
(statearr_45516[(28)] = inst_45378);

(statearr_45516[(19)] = inst_45384);

(statearr_45516[(10)] = inst_45387);

(statearr_45516[(11)] = inst_45385);

(statearr_45516[(27)] = inst_45376__$1);

(statearr_45516[(20)] = inst_45386);

return statearr_45516;
})();
var statearr_45517_47241 = state_45451__$1;
(statearr_45517_47241[(2)] = null);

(statearr_45517_47241[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45452 === (28))){
var inst_45384 = (state_45451[(19)]);
var inst_45405 = (state_45451[(23)]);
var inst_45405__$1 = cljs.core.seq(inst_45384);
var state_45451__$1 = (function (){var statearr_45518 = state_45451;
(statearr_45518[(23)] = inst_45405__$1);

return statearr_45518;
})();
if(inst_45405__$1){
var statearr_45519_47242 = state_45451__$1;
(statearr_45519_47242[(1)] = (33));

} else {
var statearr_45521_47243 = state_45451__$1;
(statearr_45521_47243[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45452 === (25))){
var inst_45387 = (state_45451[(10)]);
var inst_45386 = (state_45451[(20)]);
var inst_45389 = (inst_45387 < inst_45386);
var inst_45390 = inst_45389;
var state_45451__$1 = state_45451;
if(cljs.core.truth_(inst_45390)){
var statearr_45522_47244 = state_45451__$1;
(statearr_45522_47244[(1)] = (27));

} else {
var statearr_45523_47245 = state_45451__$1;
(statearr_45523_47245[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45452 === (34))){
var state_45451__$1 = state_45451;
var statearr_45524_47246 = state_45451__$1;
(statearr_45524_47246[(2)] = null);

(statearr_45524_47246[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45452 === (17))){
var state_45451__$1 = state_45451;
var statearr_45525_47247 = state_45451__$1;
(statearr_45525_47247[(2)] = null);

(statearr_45525_47247[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45452 === (3))){
var inst_45443 = (state_45451[(2)]);
var state_45451__$1 = state_45451;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45451__$1,inst_45443);
} else {
if((state_val_45452 === (12))){
var inst_45371 = (state_45451[(2)]);
var state_45451__$1 = state_45451;
var statearr_45526_47248 = state_45451__$1;
(statearr_45526_47248[(2)] = inst_45371);

(statearr_45526_47248[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45452 === (2))){
var state_45451__$1 = state_45451;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45451__$1,(4),ch);
} else {
if((state_val_45452 === (23))){
var state_45451__$1 = state_45451;
var statearr_45527_47249 = state_45451__$1;
(statearr_45527_47249[(2)] = null);

(statearr_45527_47249[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45452 === (35))){
var inst_45427 = (state_45451[(2)]);
var state_45451__$1 = state_45451;
var statearr_45528_47250 = state_45451__$1;
(statearr_45528_47250[(2)] = inst_45427);

(statearr_45528_47250[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45452 === (19))){
var inst_45330 = (state_45451[(7)]);
var inst_45343 = cljs.core.chunk_first(inst_45330);
var inst_45345 = cljs.core.chunk_rest(inst_45330);
var inst_45346 = cljs.core.count(inst_45343);
var inst_45308 = inst_45345;
var inst_45309 = inst_45343;
var inst_45310 = inst_45346;
var inst_45311 = (0);
var state_45451__$1 = (function (){var statearr_45529 = state_45451;
(statearr_45529[(13)] = inst_45308);

(statearr_45529[(14)] = inst_45309);

(statearr_45529[(16)] = inst_45310);

(statearr_45529[(17)] = inst_45311);

return statearr_45529;
})();
var statearr_45531_47251 = state_45451__$1;
(statearr_45531_47251[(2)] = null);

(statearr_45531_47251[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45452 === (11))){
var inst_45308 = (state_45451[(13)]);
var inst_45330 = (state_45451[(7)]);
var inst_45330__$1 = cljs.core.seq(inst_45308);
var state_45451__$1 = (function (){var statearr_45532 = state_45451;
(statearr_45532[(7)] = inst_45330__$1);

return statearr_45532;
})();
if(inst_45330__$1){
var statearr_45533_47252 = state_45451__$1;
(statearr_45533_47252[(1)] = (16));

} else {
var statearr_45534_47253 = state_45451__$1;
(statearr_45534_47253[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45452 === (9))){
var inst_45373 = (state_45451[(2)]);
var state_45451__$1 = state_45451;
var statearr_45535_47254 = state_45451__$1;
(statearr_45535_47254[(2)] = inst_45373);

(statearr_45535_47254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45452 === (5))){
var inst_45306 = cljs.core.deref(cs);
var inst_45307 = cljs.core.seq(inst_45306);
var inst_45308 = inst_45307;
var inst_45309 = null;
var inst_45310 = (0);
var inst_45311 = (0);
var state_45451__$1 = (function (){var statearr_45536 = state_45451;
(statearr_45536[(13)] = inst_45308);

(statearr_45536[(14)] = inst_45309);

(statearr_45536[(16)] = inst_45310);

(statearr_45536[(17)] = inst_45311);

return statearr_45536;
})();
var statearr_45537_47255 = state_45451__$1;
(statearr_45537_47255[(2)] = null);

(statearr_45537_47255[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45452 === (14))){
var state_45451__$1 = state_45451;
var statearr_45538_47256 = state_45451__$1;
(statearr_45538_47256[(2)] = null);

(statearr_45538_47256[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45452 === (45))){
var inst_45435 = (state_45451[(2)]);
var state_45451__$1 = state_45451;
var statearr_45539_47258 = state_45451__$1;
(statearr_45539_47258[(2)] = inst_45435);

(statearr_45539_47258[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45452 === (26))){
var inst_45376 = (state_45451[(27)]);
var inst_45431 = (state_45451[(2)]);
var inst_45432 = cljs.core.seq(inst_45376);
var state_45451__$1 = (function (){var statearr_45540 = state_45451;
(statearr_45540[(29)] = inst_45431);

return statearr_45540;
})();
if(inst_45432){
var statearr_45541_47259 = state_45451__$1;
(statearr_45541_47259[(1)] = (42));

} else {
var statearr_45542_47260 = state_45451__$1;
(statearr_45542_47260[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45452 === (16))){
var inst_45330 = (state_45451[(7)]);
var inst_45339 = cljs.core.chunked_seq_QMARK_(inst_45330);
var state_45451__$1 = state_45451;
if(inst_45339){
var statearr_45543_47261 = state_45451__$1;
(statearr_45543_47261[(1)] = (19));

} else {
var statearr_45544_47262 = state_45451__$1;
(statearr_45544_47262[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45452 === (38))){
var inst_45424 = (state_45451[(2)]);
var state_45451__$1 = state_45451;
var statearr_45545_47263 = state_45451__$1;
(statearr_45545_47263[(2)] = inst_45424);

(statearr_45545_47263[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45452 === (30))){
var state_45451__$1 = state_45451;
var statearr_45547_47264 = state_45451__$1;
(statearr_45547_47264[(2)] = null);

(statearr_45547_47264[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45452 === (10))){
var inst_45309 = (state_45451[(14)]);
var inst_45311 = (state_45451[(17)]);
var inst_45319 = cljs.core._nth(inst_45309,inst_45311);
var inst_45320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45319,(0),null);
var inst_45321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45319,(1),null);
var state_45451__$1 = (function (){var statearr_45549 = state_45451;
(statearr_45549[(24)] = inst_45320);

return statearr_45549;
})();
if(cljs.core.truth_(inst_45321)){
var statearr_45550_47265 = state_45451__$1;
(statearr_45550_47265[(1)] = (13));

} else {
var statearr_45551_47266 = state_45451__$1;
(statearr_45551_47266[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45452 === (18))){
var inst_45369 = (state_45451[(2)]);
var state_45451__$1 = state_45451;
var statearr_45552_47267 = state_45451__$1;
(statearr_45552_47267[(2)] = inst_45369);

(statearr_45552_47267[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45452 === (42))){
var state_45451__$1 = state_45451;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45451__$1,(45),dchan);
} else {
if((state_val_45452 === (37))){
var inst_45414 = (state_45451[(22)]);
var inst_45405 = (state_45451[(23)]);
var inst_45298 = (state_45451[(12)]);
var inst_45414__$1 = cljs.core.first(inst_45405);
var inst_45415 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_45414__$1,inst_45298,done);
var state_45451__$1 = (function (){var statearr_45553 = state_45451;
(statearr_45553[(22)] = inst_45414__$1);

return statearr_45553;
})();
if(cljs.core.truth_(inst_45415)){
var statearr_45554_47274 = state_45451__$1;
(statearr_45554_47274[(1)] = (39));

} else {
var statearr_45555_47275 = state_45451__$1;
(statearr_45555_47275[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45452 === (8))){
var inst_45310 = (state_45451[(16)]);
var inst_45311 = (state_45451[(17)]);
var inst_45313 = (inst_45311 < inst_45310);
var inst_45314 = inst_45313;
var state_45451__$1 = state_45451;
if(cljs.core.truth_(inst_45314)){
var statearr_45556_47276 = state_45451__$1;
(statearr_45556_47276[(1)] = (10));

} else {
var statearr_45557_47277 = state_45451__$1;
(statearr_45557_47277[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__43838__auto__ = null;
var cljs$core$async$mult_$_state_machine__43838__auto____0 = (function (){
var statearr_45562 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45562[(0)] = cljs$core$async$mult_$_state_machine__43838__auto__);

(statearr_45562[(1)] = (1));

return statearr_45562;
});
var cljs$core$async$mult_$_state_machine__43838__auto____1 = (function (state_45451){
while(true){
var ret_value__43839__auto__ = (function (){try{while(true){
var result__43840__auto__ = switch__43837__auto__(state_45451);
if(cljs.core.keyword_identical_QMARK_(result__43840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43840__auto__;
}
break;
}
}catch (e45563){var ex__43841__auto__ = e45563;
var statearr_45564_47278 = state_45451;
(statearr_45564_47278[(2)] = ex__43841__auto__);


if(cljs.core.seq((state_45451[(4)]))){
var statearr_45565_47279 = state_45451;
(statearr_45565_47279[(1)] = cljs.core.first((state_45451[(4)])));

} else {
throw ex__43841__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47280 = state_45451;
state_45451 = G__47280;
continue;
} else {
return ret_value__43839__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__43838__auto__ = function(state_45451){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__43838__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__43838__auto____1.call(this,state_45451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__43838__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__43838__auto____0;
cljs$core$async$mult_$_state_machine__43838__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__43838__auto____1;
return cljs$core$async$mult_$_state_machine__43838__auto__;
})()
})();
var state__44279__auto__ = (function (){var statearr_45566 = f__44278__auto__();
(statearr_45566[(6)] = c__44271__auto___47199);

return statearr_45566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44279__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__45568 = arguments.length;
switch (G__45568) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_47282 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_47282(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_47283 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_47283(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_47284 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_47284(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_47286 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_47286(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_47287 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_47287(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___47288 = arguments.length;
var i__4865__auto___47289 = (0);
while(true){
if((i__4865__auto___47289 < len__4864__auto___47288)){
args__4870__auto__.push((arguments[i__4865__auto___47289]));

var G__47290 = (i__4865__auto___47289 + (1));
i__4865__auto___47289 = G__47290;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__45577){
var map__45579 = p__45577;
var map__45579__$1 = cljs.core.__destructure_map(map__45579);
var opts = map__45579__$1;
var statearr_45580_47291 = state;
(statearr_45580_47291[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_45581_47292 = state;
(statearr_45581_47292[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_45585_47293 = state;
(statearr_45585_47293[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq45573){
var G__45574 = cljs.core.first(seq45573);
var seq45573__$1 = cljs.core.next(seq45573);
var G__45575 = cljs.core.first(seq45573__$1);
var seq45573__$2 = cljs.core.next(seq45573__$1);
var G__45576 = cljs.core.first(seq45573__$2);
var seq45573__$3 = cljs.core.next(seq45573__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45574,G__45575,G__45576,seq45573__$3);
}));

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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45594 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45594 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta45595){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta45595 = meta45595;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45596,meta45595__$1){
var self__ = this;
var _45596__$1 = this;
return (new cljs.core.async.t_cljs$core$async45594(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta45595__$1));
}));

(cljs.core.async.t_cljs$core$async45594.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45596){
var self__ = this;
var _45596__$1 = this;
return self__.meta45595;
}));

(cljs.core.async.t_cljs$core$async45594.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45594.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async45594.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45594.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45594.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45594.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45594.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45594.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45594.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta45595","meta45595",-1886733475,null)], null);
}));

(cljs.core.async.t_cljs$core$async45594.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45594.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45594");

(cljs.core.async.t_cljs$core$async45594.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async45594");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45594.
 */
cljs.core.async.__GT_t_cljs$core$async45594 = (function cljs$core$async$mix_$___GT_t_cljs$core$async45594(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45595){
return (new cljs.core.async.t_cljs$core$async45594(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45595));
});

}

return (new cljs.core.async.t_cljs$core$async45594(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44271__auto___47302 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44278__auto__ = (function (){var switch__43837__auto__ = (function (state_45688){
var state_val_45689 = (state_45688[(1)]);
if((state_val_45689 === (7))){
var inst_45648 = (state_45688[(2)]);
var state_45688__$1 = state_45688;
if(cljs.core.truth_(inst_45648)){
var statearr_45692_47303 = state_45688__$1;
(statearr_45692_47303[(1)] = (8));

} else {
var statearr_45693_47304 = state_45688__$1;
(statearr_45693_47304[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (20))){
var inst_45641 = (state_45688[(7)]);
var state_45688__$1 = state_45688;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45688__$1,(23),out,inst_45641);
} else {
if((state_val_45689 === (1))){
var inst_45624 = calc_state();
var inst_45625 = cljs.core.__destructure_map(inst_45624);
var inst_45626 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45625,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45627 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45625,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45628 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45625,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_45629 = inst_45624;
var state_45688__$1 = (function (){var statearr_45694 = state_45688;
(statearr_45694[(8)] = inst_45627);

(statearr_45694[(9)] = inst_45628);

(statearr_45694[(10)] = inst_45629);

(statearr_45694[(11)] = inst_45626);

return statearr_45694;
})();
var statearr_45695_47305 = state_45688__$1;
(statearr_45695_47305[(2)] = null);

(statearr_45695_47305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (24))){
var inst_45632 = (state_45688[(12)]);
var inst_45629 = inst_45632;
var state_45688__$1 = (function (){var statearr_45696 = state_45688;
(statearr_45696[(10)] = inst_45629);

return statearr_45696;
})();
var statearr_45697_47306 = state_45688__$1;
(statearr_45697_47306[(2)] = null);

(statearr_45697_47306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (4))){
var inst_45643 = (state_45688[(13)]);
var inst_45641 = (state_45688[(7)]);
var inst_45640 = (state_45688[(2)]);
var inst_45641__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45640,(0),null);
var inst_45642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45640,(1),null);
var inst_45643__$1 = (inst_45641__$1 == null);
var state_45688__$1 = (function (){var statearr_45699 = state_45688;
(statearr_45699[(14)] = inst_45642);

(statearr_45699[(13)] = inst_45643__$1);

(statearr_45699[(7)] = inst_45641__$1);

return statearr_45699;
})();
if(cljs.core.truth_(inst_45643__$1)){
var statearr_45700_47307 = state_45688__$1;
(statearr_45700_47307[(1)] = (5));

} else {
var statearr_45702_47308 = state_45688__$1;
(statearr_45702_47308[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (15))){
var inst_45662 = (state_45688[(15)]);
var inst_45633 = (state_45688[(16)]);
var inst_45662__$1 = cljs.core.empty_QMARK_(inst_45633);
var state_45688__$1 = (function (){var statearr_45703 = state_45688;
(statearr_45703[(15)] = inst_45662__$1);

return statearr_45703;
})();
if(inst_45662__$1){
var statearr_45704_47309 = state_45688__$1;
(statearr_45704_47309[(1)] = (17));

} else {
var statearr_45705_47310 = state_45688__$1;
(statearr_45705_47310[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (21))){
var inst_45632 = (state_45688[(12)]);
var inst_45629 = inst_45632;
var state_45688__$1 = (function (){var statearr_45706 = state_45688;
(statearr_45706[(10)] = inst_45629);

return statearr_45706;
})();
var statearr_45707_47311 = state_45688__$1;
(statearr_45707_47311[(2)] = null);

(statearr_45707_47311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (13))){
var inst_45655 = (state_45688[(2)]);
var inst_45656 = calc_state();
var inst_45629 = inst_45656;
var state_45688__$1 = (function (){var statearr_45708 = state_45688;
(statearr_45708[(10)] = inst_45629);

(statearr_45708[(17)] = inst_45655);

return statearr_45708;
})();
var statearr_45710_47312 = state_45688__$1;
(statearr_45710_47312[(2)] = null);

(statearr_45710_47312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (22))){
var inst_45682 = (state_45688[(2)]);
var state_45688__$1 = state_45688;
var statearr_45711_47313 = state_45688__$1;
(statearr_45711_47313[(2)] = inst_45682);

(statearr_45711_47313[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (6))){
var inst_45642 = (state_45688[(14)]);
var inst_45646 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45642,change);
var state_45688__$1 = state_45688;
var statearr_45713_47314 = state_45688__$1;
(statearr_45713_47314[(2)] = inst_45646);

(statearr_45713_47314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (25))){
var state_45688__$1 = state_45688;
var statearr_45714_47315 = state_45688__$1;
(statearr_45714_47315[(2)] = null);

(statearr_45714_47315[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (17))){
var inst_45642 = (state_45688[(14)]);
var inst_45634 = (state_45688[(18)]);
var inst_45664 = (inst_45634.cljs$core$IFn$_invoke$arity$1 ? inst_45634.cljs$core$IFn$_invoke$arity$1(inst_45642) : inst_45634.call(null,inst_45642));
var inst_45665 = cljs.core.not(inst_45664);
var state_45688__$1 = state_45688;
var statearr_45719_47316 = state_45688__$1;
(statearr_45719_47316[(2)] = inst_45665);

(statearr_45719_47316[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (3))){
var inst_45686 = (state_45688[(2)]);
var state_45688__$1 = state_45688;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45688__$1,inst_45686);
} else {
if((state_val_45689 === (12))){
var state_45688__$1 = state_45688;
var statearr_45720_47317 = state_45688__$1;
(statearr_45720_47317[(2)] = null);

(statearr_45720_47317[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (2))){
var inst_45632 = (state_45688[(12)]);
var inst_45629 = (state_45688[(10)]);
var inst_45632__$1 = cljs.core.__destructure_map(inst_45629);
var inst_45633 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45632__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45634 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45632__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45635 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45632__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_45688__$1 = (function (){var statearr_45725 = state_45688;
(statearr_45725[(12)] = inst_45632__$1);

(statearr_45725[(16)] = inst_45633);

(statearr_45725[(18)] = inst_45634);

return statearr_45725;
})();
return cljs.core.async.ioc_alts_BANG_(state_45688__$1,(4),inst_45635);
} else {
if((state_val_45689 === (23))){
var inst_45673 = (state_45688[(2)]);
var state_45688__$1 = state_45688;
if(cljs.core.truth_(inst_45673)){
var statearr_45726_47318 = state_45688__$1;
(statearr_45726_47318[(1)] = (24));

} else {
var statearr_45727_47319 = state_45688__$1;
(statearr_45727_47319[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (19))){
var inst_45668 = (state_45688[(2)]);
var state_45688__$1 = state_45688;
var statearr_45728_47320 = state_45688__$1;
(statearr_45728_47320[(2)] = inst_45668);

(statearr_45728_47320[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (11))){
var inst_45642 = (state_45688[(14)]);
var inst_45652 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_45642);
var state_45688__$1 = state_45688;
var statearr_45730_47322 = state_45688__$1;
(statearr_45730_47322[(2)] = inst_45652);

(statearr_45730_47322[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (9))){
var inst_45642 = (state_45688[(14)]);
var inst_45633 = (state_45688[(16)]);
var inst_45659 = (state_45688[(19)]);
var inst_45659__$1 = (inst_45633.cljs$core$IFn$_invoke$arity$1 ? inst_45633.cljs$core$IFn$_invoke$arity$1(inst_45642) : inst_45633.call(null,inst_45642));
var state_45688__$1 = (function (){var statearr_45732 = state_45688;
(statearr_45732[(19)] = inst_45659__$1);

return statearr_45732;
})();
if(cljs.core.truth_(inst_45659__$1)){
var statearr_45733_47323 = state_45688__$1;
(statearr_45733_47323[(1)] = (14));

} else {
var statearr_45734_47324 = state_45688__$1;
(statearr_45734_47324[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (5))){
var inst_45643 = (state_45688[(13)]);
var state_45688__$1 = state_45688;
var statearr_45735_47325 = state_45688__$1;
(statearr_45735_47325[(2)] = inst_45643);

(statearr_45735_47325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (14))){
var inst_45659 = (state_45688[(19)]);
var state_45688__$1 = state_45688;
var statearr_45737_47326 = state_45688__$1;
(statearr_45737_47326[(2)] = inst_45659);

(statearr_45737_47326[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (26))){
var inst_45678 = (state_45688[(2)]);
var state_45688__$1 = state_45688;
var statearr_45738_47327 = state_45688__$1;
(statearr_45738_47327[(2)] = inst_45678);

(statearr_45738_47327[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (16))){
var inst_45670 = (state_45688[(2)]);
var state_45688__$1 = state_45688;
if(cljs.core.truth_(inst_45670)){
var statearr_45740_47328 = state_45688__$1;
(statearr_45740_47328[(1)] = (20));

} else {
var statearr_45742_47329 = state_45688__$1;
(statearr_45742_47329[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (10))){
var inst_45684 = (state_45688[(2)]);
var state_45688__$1 = state_45688;
var statearr_45744_47330 = state_45688__$1;
(statearr_45744_47330[(2)] = inst_45684);

(statearr_45744_47330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (18))){
var inst_45662 = (state_45688[(15)]);
var state_45688__$1 = state_45688;
var statearr_45745_47331 = state_45688__$1;
(statearr_45745_47331[(2)] = inst_45662);

(statearr_45745_47331[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45689 === (8))){
var inst_45641 = (state_45688[(7)]);
var inst_45650 = (inst_45641 == null);
var state_45688__$1 = state_45688;
if(cljs.core.truth_(inst_45650)){
var statearr_45746_47332 = state_45688__$1;
(statearr_45746_47332[(1)] = (11));

} else {
var statearr_45747_47333 = state_45688__$1;
(statearr_45747_47333[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__43838__auto__ = null;
var cljs$core$async$mix_$_state_machine__43838__auto____0 = (function (){
var statearr_45752 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45752[(0)] = cljs$core$async$mix_$_state_machine__43838__auto__);

(statearr_45752[(1)] = (1));

return statearr_45752;
});
var cljs$core$async$mix_$_state_machine__43838__auto____1 = (function (state_45688){
while(true){
var ret_value__43839__auto__ = (function (){try{while(true){
var result__43840__auto__ = switch__43837__auto__(state_45688);
if(cljs.core.keyword_identical_QMARK_(result__43840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43840__auto__;
}
break;
}
}catch (e45753){var ex__43841__auto__ = e45753;
var statearr_45754_47341 = state_45688;
(statearr_45754_47341[(2)] = ex__43841__auto__);


if(cljs.core.seq((state_45688[(4)]))){
var statearr_45755_47342 = state_45688;
(statearr_45755_47342[(1)] = cljs.core.first((state_45688[(4)])));

} else {
throw ex__43841__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47343 = state_45688;
state_45688 = G__47343;
continue;
} else {
return ret_value__43839__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__43838__auto__ = function(state_45688){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__43838__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__43838__auto____1.call(this,state_45688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__43838__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__43838__auto____0;
cljs$core$async$mix_$_state_machine__43838__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__43838__auto____1;
return cljs$core$async$mix_$_state_machine__43838__auto__;
})()
})();
var state__44279__auto__ = (function (){var statearr_45756 = f__44278__auto__();
(statearr_45756[(6)] = c__44271__auto___47302);

return statearr_45756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44279__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_47344 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_47344(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_47345 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_47345(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_47346 = (function() {
var G__47348 = null;
var G__47348__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__47348__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__47348 = function(p,v){
switch(arguments.length){
case 1:
return G__47348__1.call(this,p);
case 2:
return G__47348__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47348.cljs$core$IFn$_invoke$arity$1 = G__47348__1;
G__47348.cljs$core$IFn$_invoke$arity$2 = G__47348__2;
return G__47348;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__45771 = arguments.length;
switch (G__45771) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_47346(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_47346(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__45780 = arguments.length;
switch (G__45780) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__45778_SHARP_){
if(cljs.core.truth_((p1__45778_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__45778_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__45778_SHARP_.call(null,topic)))){
return p1__45778_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__45778_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45781 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45781 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta45782){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta45782 = meta45782;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45781.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45783,meta45782__$1){
var self__ = this;
var _45783__$1 = this;
return (new cljs.core.async.t_cljs$core$async45781(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta45782__$1));
}));

(cljs.core.async.t_cljs$core$async45781.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45783){
var self__ = this;
var _45783__$1 = this;
return self__.meta45782;
}));

(cljs.core.async.t_cljs$core$async45781.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45781.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async45781.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45781.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async45781.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async45781.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async45781.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async45781.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta45782","meta45782",1945367145,null)], null);
}));

(cljs.core.async.t_cljs$core$async45781.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45781.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45781");

(cljs.core.async.t_cljs$core$async45781.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async45781");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45781.
 */
cljs.core.async.__GT_t_cljs$core$async45781 = (function cljs$core$async$__GT_t_cljs$core$async45781(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45782){
return (new cljs.core.async.t_cljs$core$async45781(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45782));
});

}

return (new cljs.core.async.t_cljs$core$async45781(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44271__auto___47351 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44278__auto__ = (function (){var switch__43837__auto__ = (function (state_45870){
var state_val_45873 = (state_45870[(1)]);
if((state_val_45873 === (7))){
var inst_45861 = (state_45870[(2)]);
var state_45870__$1 = state_45870;
var statearr_45883_47352 = state_45870__$1;
(statearr_45883_47352[(2)] = inst_45861);

(statearr_45883_47352[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (20))){
var state_45870__$1 = state_45870;
var statearr_45884_47353 = state_45870__$1;
(statearr_45884_47353[(2)] = null);

(statearr_45884_47353[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (1))){
var state_45870__$1 = state_45870;
var statearr_45885_47354 = state_45870__$1;
(statearr_45885_47354[(2)] = null);

(statearr_45885_47354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (24))){
var inst_45844 = (state_45870[(7)]);
var inst_45853 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_45844);
var state_45870__$1 = state_45870;
var statearr_45886_47355 = state_45870__$1;
(statearr_45886_47355[(2)] = inst_45853);

(statearr_45886_47355[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (4))){
var inst_45789 = (state_45870[(8)]);
var inst_45789__$1 = (state_45870[(2)]);
var inst_45790 = (inst_45789__$1 == null);
var state_45870__$1 = (function (){var statearr_45887 = state_45870;
(statearr_45887[(8)] = inst_45789__$1);

return statearr_45887;
})();
if(cljs.core.truth_(inst_45790)){
var statearr_45888_47356 = state_45870__$1;
(statearr_45888_47356[(1)] = (5));

} else {
var statearr_45889_47357 = state_45870__$1;
(statearr_45889_47357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (15))){
var inst_45838 = (state_45870[(2)]);
var state_45870__$1 = state_45870;
var statearr_45890_47358 = state_45870__$1;
(statearr_45890_47358[(2)] = inst_45838);

(statearr_45890_47358[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (21))){
var inst_45858 = (state_45870[(2)]);
var state_45870__$1 = (function (){var statearr_45891 = state_45870;
(statearr_45891[(9)] = inst_45858);

return statearr_45891;
})();
var statearr_45892_47359 = state_45870__$1;
(statearr_45892_47359[(2)] = null);

(statearr_45892_47359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (13))){
var inst_45815 = (state_45870[(10)]);
var inst_45821 = cljs.core.chunked_seq_QMARK_(inst_45815);
var state_45870__$1 = state_45870;
if(inst_45821){
var statearr_45893_47360 = state_45870__$1;
(statearr_45893_47360[(1)] = (16));

} else {
var statearr_45894_47361 = state_45870__$1;
(statearr_45894_47361[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (22))){
var inst_45850 = (state_45870[(2)]);
var state_45870__$1 = state_45870;
if(cljs.core.truth_(inst_45850)){
var statearr_45895_47362 = state_45870__$1;
(statearr_45895_47362[(1)] = (23));

} else {
var statearr_45896_47363 = state_45870__$1;
(statearr_45896_47363[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (6))){
var inst_45789 = (state_45870[(8)]);
var inst_45844 = (state_45870[(7)]);
var inst_45846 = (state_45870[(11)]);
var inst_45844__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_45789) : topic_fn.call(null,inst_45789));
var inst_45845 = cljs.core.deref(mults);
var inst_45846__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45845,inst_45844__$1);
var state_45870__$1 = (function (){var statearr_45897 = state_45870;
(statearr_45897[(7)] = inst_45844__$1);

(statearr_45897[(11)] = inst_45846__$1);

return statearr_45897;
})();
if(cljs.core.truth_(inst_45846__$1)){
var statearr_45898_47365 = state_45870__$1;
(statearr_45898_47365[(1)] = (19));

} else {
var statearr_45900_47366 = state_45870__$1;
(statearr_45900_47366[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (25))){
var inst_45855 = (state_45870[(2)]);
var state_45870__$1 = state_45870;
var statearr_45903_47371 = state_45870__$1;
(statearr_45903_47371[(2)] = inst_45855);

(statearr_45903_47371[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (17))){
var inst_45815 = (state_45870[(10)]);
var inst_45829 = cljs.core.first(inst_45815);
var inst_45830 = cljs.core.async.muxch_STAR_(inst_45829);
var inst_45831 = cljs.core.async.close_BANG_(inst_45830);
var inst_45832 = cljs.core.next(inst_45815);
var inst_45799 = inst_45832;
var inst_45800 = null;
var inst_45801 = (0);
var inst_45802 = (0);
var state_45870__$1 = (function (){var statearr_45907 = state_45870;
(statearr_45907[(12)] = inst_45799);

(statearr_45907[(13)] = inst_45831);

(statearr_45907[(14)] = inst_45800);

(statearr_45907[(15)] = inst_45801);

(statearr_45907[(16)] = inst_45802);

return statearr_45907;
})();
var statearr_45908_47372 = state_45870__$1;
(statearr_45908_47372[(2)] = null);

(statearr_45908_47372[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (3))){
var inst_45863 = (state_45870[(2)]);
var state_45870__$1 = state_45870;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45870__$1,inst_45863);
} else {
if((state_val_45873 === (12))){
var inst_45840 = (state_45870[(2)]);
var state_45870__$1 = state_45870;
var statearr_45909_47373 = state_45870__$1;
(statearr_45909_47373[(2)] = inst_45840);

(statearr_45909_47373[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (2))){
var state_45870__$1 = state_45870;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45870__$1,(4),ch);
} else {
if((state_val_45873 === (23))){
var state_45870__$1 = state_45870;
var statearr_45910_47374 = state_45870__$1;
(statearr_45910_47374[(2)] = null);

(statearr_45910_47374[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (19))){
var inst_45789 = (state_45870[(8)]);
var inst_45846 = (state_45870[(11)]);
var inst_45848 = cljs.core.async.muxch_STAR_(inst_45846);
var state_45870__$1 = state_45870;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45870__$1,(22),inst_45848,inst_45789);
} else {
if((state_val_45873 === (11))){
var inst_45799 = (state_45870[(12)]);
var inst_45815 = (state_45870[(10)]);
var inst_45815__$1 = cljs.core.seq(inst_45799);
var state_45870__$1 = (function (){var statearr_45911 = state_45870;
(statearr_45911[(10)] = inst_45815__$1);

return statearr_45911;
})();
if(inst_45815__$1){
var statearr_45912_47375 = state_45870__$1;
(statearr_45912_47375[(1)] = (13));

} else {
var statearr_45913_47376 = state_45870__$1;
(statearr_45913_47376[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (9))){
var inst_45842 = (state_45870[(2)]);
var state_45870__$1 = state_45870;
var statearr_45914_47377 = state_45870__$1;
(statearr_45914_47377[(2)] = inst_45842);

(statearr_45914_47377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (5))){
var inst_45796 = cljs.core.deref(mults);
var inst_45797 = cljs.core.vals(inst_45796);
var inst_45798 = cljs.core.seq(inst_45797);
var inst_45799 = inst_45798;
var inst_45800 = null;
var inst_45801 = (0);
var inst_45802 = (0);
var state_45870__$1 = (function (){var statearr_45915 = state_45870;
(statearr_45915[(12)] = inst_45799);

(statearr_45915[(14)] = inst_45800);

(statearr_45915[(15)] = inst_45801);

(statearr_45915[(16)] = inst_45802);

return statearr_45915;
})();
var statearr_45916_47378 = state_45870__$1;
(statearr_45916_47378[(2)] = null);

(statearr_45916_47378[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (14))){
var state_45870__$1 = state_45870;
var statearr_45923_47380 = state_45870__$1;
(statearr_45923_47380[(2)] = null);

(statearr_45923_47380[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (16))){
var inst_45815 = (state_45870[(10)]);
var inst_45824 = cljs.core.chunk_first(inst_45815);
var inst_45825 = cljs.core.chunk_rest(inst_45815);
var inst_45826 = cljs.core.count(inst_45824);
var inst_45799 = inst_45825;
var inst_45800 = inst_45824;
var inst_45801 = inst_45826;
var inst_45802 = (0);
var state_45870__$1 = (function (){var statearr_45924 = state_45870;
(statearr_45924[(12)] = inst_45799);

(statearr_45924[(14)] = inst_45800);

(statearr_45924[(15)] = inst_45801);

(statearr_45924[(16)] = inst_45802);

return statearr_45924;
})();
var statearr_45925_47382 = state_45870__$1;
(statearr_45925_47382[(2)] = null);

(statearr_45925_47382[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (10))){
var inst_45799 = (state_45870[(12)]);
var inst_45800 = (state_45870[(14)]);
var inst_45801 = (state_45870[(15)]);
var inst_45802 = (state_45870[(16)]);
var inst_45809 = cljs.core._nth(inst_45800,inst_45802);
var inst_45810 = cljs.core.async.muxch_STAR_(inst_45809);
var inst_45811 = cljs.core.async.close_BANG_(inst_45810);
var inst_45812 = (inst_45802 + (1));
var tmp45920 = inst_45799;
var tmp45921 = inst_45800;
var tmp45922 = inst_45801;
var inst_45799__$1 = tmp45920;
var inst_45800__$1 = tmp45921;
var inst_45801__$1 = tmp45922;
var inst_45802__$1 = inst_45812;
var state_45870__$1 = (function (){var statearr_45926 = state_45870;
(statearr_45926[(12)] = inst_45799__$1);

(statearr_45926[(17)] = inst_45811);

(statearr_45926[(14)] = inst_45800__$1);

(statearr_45926[(15)] = inst_45801__$1);

(statearr_45926[(16)] = inst_45802__$1);

return statearr_45926;
})();
var statearr_45927_47383 = state_45870__$1;
(statearr_45927_47383[(2)] = null);

(statearr_45927_47383[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (18))){
var inst_45835 = (state_45870[(2)]);
var state_45870__$1 = state_45870;
var statearr_45928_47386 = state_45870__$1;
(statearr_45928_47386[(2)] = inst_45835);

(statearr_45928_47386[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (8))){
var inst_45801 = (state_45870[(15)]);
var inst_45802 = (state_45870[(16)]);
var inst_45804 = (inst_45802 < inst_45801);
var inst_45805 = inst_45804;
var state_45870__$1 = state_45870;
if(cljs.core.truth_(inst_45805)){
var statearr_45933_47389 = state_45870__$1;
(statearr_45933_47389[(1)] = (10));

} else {
var statearr_45934_47390 = state_45870__$1;
(statearr_45934_47390[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__43838__auto__ = null;
var cljs$core$async$state_machine__43838__auto____0 = (function (){
var statearr_45938 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45938[(0)] = cljs$core$async$state_machine__43838__auto__);

(statearr_45938[(1)] = (1));

return statearr_45938;
});
var cljs$core$async$state_machine__43838__auto____1 = (function (state_45870){
while(true){
var ret_value__43839__auto__ = (function (){try{while(true){
var result__43840__auto__ = switch__43837__auto__(state_45870);
if(cljs.core.keyword_identical_QMARK_(result__43840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43840__auto__;
}
break;
}
}catch (e45939){var ex__43841__auto__ = e45939;
var statearr_45940_47391 = state_45870;
(statearr_45940_47391[(2)] = ex__43841__auto__);


if(cljs.core.seq((state_45870[(4)]))){
var statearr_45942_47393 = state_45870;
(statearr_45942_47393[(1)] = cljs.core.first((state_45870[(4)])));

} else {
throw ex__43841__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47394 = state_45870;
state_45870 = G__47394;
continue;
} else {
return ret_value__43839__auto__;
}
break;
}
});
cljs$core$async$state_machine__43838__auto__ = function(state_45870){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43838__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43838__auto____1.call(this,state_45870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43838__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43838__auto____0;
cljs$core$async$state_machine__43838__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43838__auto____1;
return cljs$core$async$state_machine__43838__auto__;
})()
})();
var state__44279__auto__ = (function (){var statearr_45943 = f__44278__auto__();
(statearr_45943[(6)] = c__44271__auto___47351);

return statearr_45943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44279__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__45947 = arguments.length;
switch (G__45947) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__45952 = arguments.length;
switch (G__45952) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__45955 = arguments.length;
switch (G__45955) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__44271__auto___47403 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44278__auto__ = (function (){var switch__43837__auto__ = (function (state_46003){
var state_val_46004 = (state_46003[(1)]);
if((state_val_46004 === (7))){
var state_46003__$1 = state_46003;
var statearr_46006_47411 = state_46003__$1;
(statearr_46006_47411[(2)] = null);

(statearr_46006_47411[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46004 === (1))){
var state_46003__$1 = state_46003;
var statearr_46008_47412 = state_46003__$1;
(statearr_46008_47412[(2)] = null);

(statearr_46008_47412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46004 === (4))){
var inst_45958 = (state_46003[(7)]);
var inst_45959 = (state_46003[(8)]);
var inst_45962 = (inst_45959 < inst_45958);
var state_46003__$1 = state_46003;
if(cljs.core.truth_(inst_45962)){
var statearr_46009_47419 = state_46003__$1;
(statearr_46009_47419[(1)] = (6));

} else {
var statearr_46010_47420 = state_46003__$1;
(statearr_46010_47420[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46004 === (15))){
var inst_45987 = (state_46003[(9)]);
var inst_45992 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_45987);
var state_46003__$1 = state_46003;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46003__$1,(17),out,inst_45992);
} else {
if((state_val_46004 === (13))){
var inst_45987 = (state_46003[(9)]);
var inst_45987__$1 = (state_46003[(2)]);
var inst_45988 = cljs.core.some(cljs.core.nil_QMARK_,inst_45987__$1);
var state_46003__$1 = (function (){var statearr_46013 = state_46003;
(statearr_46013[(9)] = inst_45987__$1);

return statearr_46013;
})();
if(cljs.core.truth_(inst_45988)){
var statearr_46014_47428 = state_46003__$1;
(statearr_46014_47428[(1)] = (14));

} else {
var statearr_46015_47429 = state_46003__$1;
(statearr_46015_47429[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46004 === (6))){
var state_46003__$1 = state_46003;
var statearr_46016_47430 = state_46003__$1;
(statearr_46016_47430[(2)] = null);

(statearr_46016_47430[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46004 === (17))){
var inst_45994 = (state_46003[(2)]);
var state_46003__$1 = (function (){var statearr_46018 = state_46003;
(statearr_46018[(10)] = inst_45994);

return statearr_46018;
})();
var statearr_46019_47432 = state_46003__$1;
(statearr_46019_47432[(2)] = null);

(statearr_46019_47432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46004 === (3))){
var inst_45999 = (state_46003[(2)]);
var state_46003__$1 = state_46003;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46003__$1,inst_45999);
} else {
if((state_val_46004 === (12))){
var _ = (function (){var statearr_46020 = state_46003;
(statearr_46020[(4)] = cljs.core.rest((state_46003[(4)])));

return statearr_46020;
})();
var state_46003__$1 = state_46003;
var ex46017 = (state_46003__$1[(2)]);
var statearr_46022_47434 = state_46003__$1;
(statearr_46022_47434[(5)] = ex46017);


if((ex46017 instanceof Object)){
var statearr_46023_47435 = state_46003__$1;
(statearr_46023_47435[(1)] = (11));

(statearr_46023_47435[(5)] = null);

} else {
throw ex46017;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46004 === (2))){
var inst_45957 = cljs.core.reset_BANG_(dctr,cnt);
var inst_45958 = cnt;
var inst_45959 = (0);
var state_46003__$1 = (function (){var statearr_46037 = state_46003;
(statearr_46037[(7)] = inst_45958);

(statearr_46037[(11)] = inst_45957);

(statearr_46037[(8)] = inst_45959);

return statearr_46037;
})();
var statearr_46038_47436 = state_46003__$1;
(statearr_46038_47436[(2)] = null);

(statearr_46038_47436[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46004 === (11))){
var inst_45964 = (state_46003[(2)]);
var inst_45965 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_46003__$1 = (function (){var statearr_46039 = state_46003;
(statearr_46039[(12)] = inst_45964);

return statearr_46039;
})();
var statearr_46040_47437 = state_46003__$1;
(statearr_46040_47437[(2)] = inst_45965);

(statearr_46040_47437[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46004 === (9))){
var inst_45959 = (state_46003[(8)]);
var _ = (function (){var statearr_46041 = state_46003;
(statearr_46041[(4)] = cljs.core.cons((12),(state_46003[(4)])));

return statearr_46041;
})();
var inst_45971 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_45959) : chs__$1.call(null,inst_45959));
var inst_45972 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_45959) : done.call(null,inst_45959));
var inst_45973 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_45971,inst_45972);
var ___$1 = (function (){var statearr_46042 = state_46003;
(statearr_46042[(4)] = cljs.core.rest((state_46003[(4)])));

return statearr_46042;
})();
var state_46003__$1 = state_46003;
var statearr_46043_47438 = state_46003__$1;
(statearr_46043_47438[(2)] = inst_45973);

(statearr_46043_47438[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46004 === (5))){
var inst_45983 = (state_46003[(2)]);
var state_46003__$1 = (function (){var statearr_46044 = state_46003;
(statearr_46044[(13)] = inst_45983);

return statearr_46044;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46003__$1,(13),dchan);
} else {
if((state_val_46004 === (14))){
var inst_45990 = cljs.core.async.close_BANG_(out);
var state_46003__$1 = state_46003;
var statearr_46045_47439 = state_46003__$1;
(statearr_46045_47439[(2)] = inst_45990);

(statearr_46045_47439[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46004 === (16))){
var inst_45997 = (state_46003[(2)]);
var state_46003__$1 = state_46003;
var statearr_46046_47440 = state_46003__$1;
(statearr_46046_47440[(2)] = inst_45997);

(statearr_46046_47440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46004 === (10))){
var inst_45959 = (state_46003[(8)]);
var inst_45976 = (state_46003[(2)]);
var inst_45977 = (inst_45959 + (1));
var inst_45959__$1 = inst_45977;
var state_46003__$1 = (function (){var statearr_46047 = state_46003;
(statearr_46047[(14)] = inst_45976);

(statearr_46047[(8)] = inst_45959__$1);

return statearr_46047;
})();
var statearr_46048_47441 = state_46003__$1;
(statearr_46048_47441[(2)] = null);

(statearr_46048_47441[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46004 === (8))){
var inst_45981 = (state_46003[(2)]);
var state_46003__$1 = state_46003;
var statearr_46055_47442 = state_46003__$1;
(statearr_46055_47442[(2)] = inst_45981);

(statearr_46055_47442[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__43838__auto__ = null;
var cljs$core$async$state_machine__43838__auto____0 = (function (){
var statearr_46056 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46056[(0)] = cljs$core$async$state_machine__43838__auto__);

(statearr_46056[(1)] = (1));

return statearr_46056;
});
var cljs$core$async$state_machine__43838__auto____1 = (function (state_46003){
while(true){
var ret_value__43839__auto__ = (function (){try{while(true){
var result__43840__auto__ = switch__43837__auto__(state_46003);
if(cljs.core.keyword_identical_QMARK_(result__43840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43840__auto__;
}
break;
}
}catch (e46057){var ex__43841__auto__ = e46057;
var statearr_46058_47443 = state_46003;
(statearr_46058_47443[(2)] = ex__43841__auto__);


if(cljs.core.seq((state_46003[(4)]))){
var statearr_46059_47444 = state_46003;
(statearr_46059_47444[(1)] = cljs.core.first((state_46003[(4)])));

} else {
throw ex__43841__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47445 = state_46003;
state_46003 = G__47445;
continue;
} else {
return ret_value__43839__auto__;
}
break;
}
});
cljs$core$async$state_machine__43838__auto__ = function(state_46003){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43838__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43838__auto____1.call(this,state_46003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43838__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43838__auto____0;
cljs$core$async$state_machine__43838__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43838__auto____1;
return cljs$core$async$state_machine__43838__auto__;
})()
})();
var state__44279__auto__ = (function (){var statearr_46060 = f__44278__auto__();
(statearr_46060[(6)] = c__44271__auto___47403);

return statearr_46060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44279__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__46063 = arguments.length;
switch (G__46063) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44271__auto___47447 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44278__auto__ = (function (){var switch__43837__auto__ = (function (state_46116){
var state_val_46117 = (state_46116[(1)]);
if((state_val_46117 === (7))){
var inst_46086 = (state_46116[(7)]);
var inst_46087 = (state_46116[(8)]);
var inst_46086__$1 = (state_46116[(2)]);
var inst_46087__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46086__$1,(0),null);
var inst_46088 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46086__$1,(1),null);
var inst_46089 = (inst_46087__$1 == null);
var state_46116__$1 = (function (){var statearr_46128 = state_46116;
(statearr_46128[(7)] = inst_46086__$1);

(statearr_46128[(8)] = inst_46087__$1);

(statearr_46128[(9)] = inst_46088);

return statearr_46128;
})();
if(cljs.core.truth_(inst_46089)){
var statearr_46133_47448 = state_46116__$1;
(statearr_46133_47448[(1)] = (8));

} else {
var statearr_46134_47449 = state_46116__$1;
(statearr_46134_47449[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46117 === (1))){
var inst_46074 = cljs.core.vec(chs);
var inst_46075 = inst_46074;
var state_46116__$1 = (function (){var statearr_46135 = state_46116;
(statearr_46135[(10)] = inst_46075);

return statearr_46135;
})();
var statearr_46136_47450 = state_46116__$1;
(statearr_46136_47450[(2)] = null);

(statearr_46136_47450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46117 === (4))){
var inst_46075 = (state_46116[(10)]);
var state_46116__$1 = state_46116;
return cljs.core.async.ioc_alts_BANG_(state_46116__$1,(7),inst_46075);
} else {
if((state_val_46117 === (6))){
var inst_46109 = (state_46116[(2)]);
var state_46116__$1 = state_46116;
var statearr_46137_47451 = state_46116__$1;
(statearr_46137_47451[(2)] = inst_46109);

(statearr_46137_47451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46117 === (3))){
var inst_46111 = (state_46116[(2)]);
var state_46116__$1 = state_46116;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46116__$1,inst_46111);
} else {
if((state_val_46117 === (2))){
var inst_46075 = (state_46116[(10)]);
var inst_46079 = cljs.core.count(inst_46075);
var inst_46080 = (inst_46079 > (0));
var state_46116__$1 = state_46116;
if(cljs.core.truth_(inst_46080)){
var statearr_46139_47452 = state_46116__$1;
(statearr_46139_47452[(1)] = (4));

} else {
var statearr_46140_47453 = state_46116__$1;
(statearr_46140_47453[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46117 === (11))){
var inst_46075 = (state_46116[(10)]);
var inst_46102 = (state_46116[(2)]);
var tmp46138 = inst_46075;
var inst_46075__$1 = tmp46138;
var state_46116__$1 = (function (){var statearr_46141 = state_46116;
(statearr_46141[(10)] = inst_46075__$1);

(statearr_46141[(11)] = inst_46102);

return statearr_46141;
})();
var statearr_46143_47454 = state_46116__$1;
(statearr_46143_47454[(2)] = null);

(statearr_46143_47454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46117 === (9))){
var inst_46087 = (state_46116[(8)]);
var state_46116__$1 = state_46116;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46116__$1,(11),out,inst_46087);
} else {
if((state_val_46117 === (5))){
var inst_46107 = cljs.core.async.close_BANG_(out);
var state_46116__$1 = state_46116;
var statearr_46144_47455 = state_46116__$1;
(statearr_46144_47455[(2)] = inst_46107);

(statearr_46144_47455[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46117 === (10))){
var inst_46105 = (state_46116[(2)]);
var state_46116__$1 = state_46116;
var statearr_46145_47456 = state_46116__$1;
(statearr_46145_47456[(2)] = inst_46105);

(statearr_46145_47456[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46117 === (8))){
var inst_46086 = (state_46116[(7)]);
var inst_46075 = (state_46116[(10)]);
var inst_46087 = (state_46116[(8)]);
var inst_46088 = (state_46116[(9)]);
var inst_46097 = (function (){var cs = inst_46075;
var vec__46082 = inst_46086;
var v = inst_46087;
var c = inst_46088;
return (function (p1__46061_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__46061_SHARP_);
});
})();
var inst_46098 = cljs.core.filterv(inst_46097,inst_46075);
var inst_46075__$1 = inst_46098;
var state_46116__$1 = (function (){var statearr_46146 = state_46116;
(statearr_46146[(10)] = inst_46075__$1);

return statearr_46146;
})();
var statearr_46147_47457 = state_46116__$1;
(statearr_46147_47457[(2)] = null);

(statearr_46147_47457[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__43838__auto__ = null;
var cljs$core$async$state_machine__43838__auto____0 = (function (){
var statearr_46150 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46150[(0)] = cljs$core$async$state_machine__43838__auto__);

(statearr_46150[(1)] = (1));

return statearr_46150;
});
var cljs$core$async$state_machine__43838__auto____1 = (function (state_46116){
while(true){
var ret_value__43839__auto__ = (function (){try{while(true){
var result__43840__auto__ = switch__43837__auto__(state_46116);
if(cljs.core.keyword_identical_QMARK_(result__43840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43840__auto__;
}
break;
}
}catch (e46151){var ex__43841__auto__ = e46151;
var statearr_46153_47462 = state_46116;
(statearr_46153_47462[(2)] = ex__43841__auto__);


if(cljs.core.seq((state_46116[(4)]))){
var statearr_46155_47463 = state_46116;
(statearr_46155_47463[(1)] = cljs.core.first((state_46116[(4)])));

} else {
throw ex__43841__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47464 = state_46116;
state_46116 = G__47464;
continue;
} else {
return ret_value__43839__auto__;
}
break;
}
});
cljs$core$async$state_machine__43838__auto__ = function(state_46116){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43838__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43838__auto____1.call(this,state_46116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43838__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43838__auto____0;
cljs$core$async$state_machine__43838__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43838__auto____1;
return cljs$core$async$state_machine__43838__auto__;
})()
})();
var state__44279__auto__ = (function (){var statearr_46156 = f__44278__auto__();
(statearr_46156[(6)] = c__44271__auto___47447);

return statearr_46156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44279__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__46158 = arguments.length;
switch (G__46158) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44271__auto___47467 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44278__auto__ = (function (){var switch__43837__auto__ = (function (state_46183){
var state_val_46184 = (state_46183[(1)]);
if((state_val_46184 === (7))){
var inst_46164 = (state_46183[(7)]);
var inst_46164__$1 = (state_46183[(2)]);
var inst_46165 = (inst_46164__$1 == null);
var inst_46166 = cljs.core.not(inst_46165);
var state_46183__$1 = (function (){var statearr_46187 = state_46183;
(statearr_46187[(7)] = inst_46164__$1);

return statearr_46187;
})();
if(inst_46166){
var statearr_46188_47468 = state_46183__$1;
(statearr_46188_47468[(1)] = (8));

} else {
var statearr_46189_47469 = state_46183__$1;
(statearr_46189_47469[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46184 === (1))){
var inst_46159 = (0);
var state_46183__$1 = (function (){var statearr_46190 = state_46183;
(statearr_46190[(8)] = inst_46159);

return statearr_46190;
})();
var statearr_46191_47470 = state_46183__$1;
(statearr_46191_47470[(2)] = null);

(statearr_46191_47470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46184 === (4))){
var state_46183__$1 = state_46183;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46183__$1,(7),ch);
} else {
if((state_val_46184 === (6))){
var inst_46178 = (state_46183[(2)]);
var state_46183__$1 = state_46183;
var statearr_46195_47471 = state_46183__$1;
(statearr_46195_47471[(2)] = inst_46178);

(statearr_46195_47471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46184 === (3))){
var inst_46180 = (state_46183[(2)]);
var inst_46181 = cljs.core.async.close_BANG_(out);
var state_46183__$1 = (function (){var statearr_46198 = state_46183;
(statearr_46198[(9)] = inst_46180);

return statearr_46198;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46183__$1,inst_46181);
} else {
if((state_val_46184 === (2))){
var inst_46159 = (state_46183[(8)]);
var inst_46161 = (inst_46159 < n);
var state_46183__$1 = state_46183;
if(cljs.core.truth_(inst_46161)){
var statearr_46199_47472 = state_46183__$1;
(statearr_46199_47472[(1)] = (4));

} else {
var statearr_46200_47473 = state_46183__$1;
(statearr_46200_47473[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46184 === (11))){
var inst_46159 = (state_46183[(8)]);
var inst_46170 = (state_46183[(2)]);
var inst_46171 = (inst_46159 + (1));
var inst_46159__$1 = inst_46171;
var state_46183__$1 = (function (){var statearr_46201 = state_46183;
(statearr_46201[(8)] = inst_46159__$1);

(statearr_46201[(10)] = inst_46170);

return statearr_46201;
})();
var statearr_46202_47474 = state_46183__$1;
(statearr_46202_47474[(2)] = null);

(statearr_46202_47474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46184 === (9))){
var state_46183__$1 = state_46183;
var statearr_46203_47475 = state_46183__$1;
(statearr_46203_47475[(2)] = null);

(statearr_46203_47475[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46184 === (5))){
var state_46183__$1 = state_46183;
var statearr_46204_47476 = state_46183__$1;
(statearr_46204_47476[(2)] = null);

(statearr_46204_47476[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46184 === (10))){
var inst_46175 = (state_46183[(2)]);
var state_46183__$1 = state_46183;
var statearr_46205_47481 = state_46183__$1;
(statearr_46205_47481[(2)] = inst_46175);

(statearr_46205_47481[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46184 === (8))){
var inst_46164 = (state_46183[(7)]);
var state_46183__$1 = state_46183;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46183__$1,(11),out,inst_46164);
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
});
return (function() {
var cljs$core$async$state_machine__43838__auto__ = null;
var cljs$core$async$state_machine__43838__auto____0 = (function (){
var statearr_46210 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46210[(0)] = cljs$core$async$state_machine__43838__auto__);

(statearr_46210[(1)] = (1));

return statearr_46210;
});
var cljs$core$async$state_machine__43838__auto____1 = (function (state_46183){
while(true){
var ret_value__43839__auto__ = (function (){try{while(true){
var result__43840__auto__ = switch__43837__auto__(state_46183);
if(cljs.core.keyword_identical_QMARK_(result__43840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43840__auto__;
}
break;
}
}catch (e46211){var ex__43841__auto__ = e46211;
var statearr_46212_47484 = state_46183;
(statearr_46212_47484[(2)] = ex__43841__auto__);


if(cljs.core.seq((state_46183[(4)]))){
var statearr_46213_47485 = state_46183;
(statearr_46213_47485[(1)] = cljs.core.first((state_46183[(4)])));

} else {
throw ex__43841__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47486 = state_46183;
state_46183 = G__47486;
continue;
} else {
return ret_value__43839__auto__;
}
break;
}
});
cljs$core$async$state_machine__43838__auto__ = function(state_46183){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43838__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43838__auto____1.call(this,state_46183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43838__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43838__auto____0;
cljs$core$async$state_machine__43838__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43838__auto____1;
return cljs$core$async$state_machine__43838__auto__;
})()
})();
var state__44279__auto__ = (function (){var statearr_46217 = f__44278__auto__();
(statearr_46217[(6)] = c__44271__auto___47467);

return statearr_46217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44279__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46222 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46222 = (function (f,ch,meta46223){
this.f = f;
this.ch = ch;
this.meta46223 = meta46223;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46222.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46224,meta46223__$1){
var self__ = this;
var _46224__$1 = this;
return (new cljs.core.async.t_cljs$core$async46222(self__.f,self__.ch,meta46223__$1));
}));

(cljs.core.async.t_cljs$core$async46222.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46224){
var self__ = this;
var _46224__$1 = this;
return self__.meta46223;
}));

(cljs.core.async.t_cljs$core$async46222.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46222.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46222.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46222.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46222.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46273 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46273 = (function (f,ch,meta46223,_,fn1,meta46274){
this.f = f;
this.ch = ch;
this.meta46223 = meta46223;
this._ = _;
this.fn1 = fn1;
this.meta46274 = meta46274;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46275,meta46274__$1){
var self__ = this;
var _46275__$1 = this;
return (new cljs.core.async.t_cljs$core$async46273(self__.f,self__.ch,self__.meta46223,self__._,self__.fn1,meta46274__$1));
}));

(cljs.core.async.t_cljs$core$async46273.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46275){
var self__ = this;
var _46275__$1 = this;
return self__.meta46274;
}));

(cljs.core.async.t_cljs$core$async46273.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46273.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async46273.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46273.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__46221_SHARP_){
var G__46276 = (((p1__46221_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__46221_SHARP_) : self__.f.call(null,p1__46221_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__46276) : f1.call(null,G__46276));
});
}));

(cljs.core.async.t_cljs$core$async46273.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46223","meta46223",-1543036824,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async46222","cljs.core.async/t_cljs$core$async46222",2048299798,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta46274","meta46274",-108272147,null)], null);
}));

(cljs.core.async.t_cljs$core$async46273.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46273.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46273");

(cljs.core.async.t_cljs$core$async46273.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async46273");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46273.
 */
cljs.core.async.__GT_t_cljs$core$async46273 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46273(f__$1,ch__$1,meta46223__$1,___$2,fn1__$1,meta46274){
return (new cljs.core.async.t_cljs$core$async46273(f__$1,ch__$1,meta46223__$1,___$2,fn1__$1,meta46274));
});

}

return (new cljs.core.async.t_cljs$core$async46273(self__.f,self__.ch,self__.meta46223,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__46281 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__46281) : self__.f.call(null,G__46281));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async46222.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46222.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async46222.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46223","meta46223",-1543036824,null)], null);
}));

(cljs.core.async.t_cljs$core$async46222.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46222.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46222");

(cljs.core.async.t_cljs$core$async46222.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async46222");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46222.
 */
cljs.core.async.__GT_t_cljs$core$async46222 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46222(f__$1,ch__$1,meta46223){
return (new cljs.core.async.t_cljs$core$async46222(f__$1,ch__$1,meta46223));
});

}

return (new cljs.core.async.t_cljs$core$async46222(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46285 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46285 = (function (f,ch,meta46286){
this.f = f;
this.ch = ch;
this.meta46286 = meta46286;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46287,meta46286__$1){
var self__ = this;
var _46287__$1 = this;
return (new cljs.core.async.t_cljs$core$async46285(self__.f,self__.ch,meta46286__$1));
}));

(cljs.core.async.t_cljs$core$async46285.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46287){
var self__ = this;
var _46287__$1 = this;
return self__.meta46286;
}));

(cljs.core.async.t_cljs$core$async46285.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46285.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46285.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46285.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46285.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46285.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async46285.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46286","meta46286",1094088459,null)], null);
}));

(cljs.core.async.t_cljs$core$async46285.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46285.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46285");

(cljs.core.async.t_cljs$core$async46285.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async46285");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46285.
 */
cljs.core.async.__GT_t_cljs$core$async46285 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async46285(f__$1,ch__$1,meta46286){
return (new cljs.core.async.t_cljs$core$async46285(f__$1,ch__$1,meta46286));
});

}

return (new cljs.core.async.t_cljs$core$async46285(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46305 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46305 = (function (p,ch,meta46306){
this.p = p;
this.ch = ch;
this.meta46306 = meta46306;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46307,meta46306__$1){
var self__ = this;
var _46307__$1 = this;
return (new cljs.core.async.t_cljs$core$async46305(self__.p,self__.ch,meta46306__$1));
}));

(cljs.core.async.t_cljs$core$async46305.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46307){
var self__ = this;
var _46307__$1 = this;
return self__.meta46306;
}));

(cljs.core.async.t_cljs$core$async46305.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46305.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46305.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46305.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46305.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46305.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46305.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async46305.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46306","meta46306",102563901,null)], null);
}));

(cljs.core.async.t_cljs$core$async46305.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46305.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46305");

(cljs.core.async.t_cljs$core$async46305.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async46305");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46305.
 */
cljs.core.async.__GT_t_cljs$core$async46305 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async46305(p__$1,ch__$1,meta46306){
return (new cljs.core.async.t_cljs$core$async46305(p__$1,ch__$1,meta46306));
});

}

return (new cljs.core.async.t_cljs$core$async46305(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__46321 = arguments.length;
switch (G__46321) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44271__auto___47499 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44278__auto__ = (function (){var switch__43837__auto__ = (function (state_46354){
var state_val_46355 = (state_46354[(1)]);
if((state_val_46355 === (7))){
var inst_46350 = (state_46354[(2)]);
var state_46354__$1 = state_46354;
var statearr_46380_47500 = state_46354__$1;
(statearr_46380_47500[(2)] = inst_46350);

(statearr_46380_47500[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46355 === (1))){
var state_46354__$1 = state_46354;
var statearr_46381_47501 = state_46354__$1;
(statearr_46381_47501[(2)] = null);

(statearr_46381_47501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46355 === (4))){
var inst_46336 = (state_46354[(7)]);
var inst_46336__$1 = (state_46354[(2)]);
var inst_46337 = (inst_46336__$1 == null);
var state_46354__$1 = (function (){var statearr_46382 = state_46354;
(statearr_46382[(7)] = inst_46336__$1);

return statearr_46382;
})();
if(cljs.core.truth_(inst_46337)){
var statearr_46383_47502 = state_46354__$1;
(statearr_46383_47502[(1)] = (5));

} else {
var statearr_46384_47503 = state_46354__$1;
(statearr_46384_47503[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46355 === (6))){
var inst_46336 = (state_46354[(7)]);
var inst_46341 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46336) : p.call(null,inst_46336));
var state_46354__$1 = state_46354;
if(cljs.core.truth_(inst_46341)){
var statearr_46385_47506 = state_46354__$1;
(statearr_46385_47506[(1)] = (8));

} else {
var statearr_46386_47509 = state_46354__$1;
(statearr_46386_47509[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46355 === (3))){
var inst_46352 = (state_46354[(2)]);
var state_46354__$1 = state_46354;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46354__$1,inst_46352);
} else {
if((state_val_46355 === (2))){
var state_46354__$1 = state_46354;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46354__$1,(4),ch);
} else {
if((state_val_46355 === (11))){
var inst_46344 = (state_46354[(2)]);
var state_46354__$1 = state_46354;
var statearr_46387_47510 = state_46354__$1;
(statearr_46387_47510[(2)] = inst_46344);

(statearr_46387_47510[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46355 === (9))){
var state_46354__$1 = state_46354;
var statearr_46388_47512 = state_46354__$1;
(statearr_46388_47512[(2)] = null);

(statearr_46388_47512[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46355 === (5))){
var inst_46339 = cljs.core.async.close_BANG_(out);
var state_46354__$1 = state_46354;
var statearr_46389_47513 = state_46354__$1;
(statearr_46389_47513[(2)] = inst_46339);

(statearr_46389_47513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46355 === (10))){
var inst_46347 = (state_46354[(2)]);
var state_46354__$1 = (function (){var statearr_46390 = state_46354;
(statearr_46390[(8)] = inst_46347);

return statearr_46390;
})();
var statearr_46391_47514 = state_46354__$1;
(statearr_46391_47514[(2)] = null);

(statearr_46391_47514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46355 === (8))){
var inst_46336 = (state_46354[(7)]);
var state_46354__$1 = state_46354;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46354__$1,(11),out,inst_46336);
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
});
return (function() {
var cljs$core$async$state_machine__43838__auto__ = null;
var cljs$core$async$state_machine__43838__auto____0 = (function (){
var statearr_46392 = [null,null,null,null,null,null,null,null,null];
(statearr_46392[(0)] = cljs$core$async$state_machine__43838__auto__);

(statearr_46392[(1)] = (1));

return statearr_46392;
});
var cljs$core$async$state_machine__43838__auto____1 = (function (state_46354){
while(true){
var ret_value__43839__auto__ = (function (){try{while(true){
var result__43840__auto__ = switch__43837__auto__(state_46354);
if(cljs.core.keyword_identical_QMARK_(result__43840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43840__auto__;
}
break;
}
}catch (e46393){var ex__43841__auto__ = e46393;
var statearr_46394_47516 = state_46354;
(statearr_46394_47516[(2)] = ex__43841__auto__);


if(cljs.core.seq((state_46354[(4)]))){
var statearr_46395_47517 = state_46354;
(statearr_46395_47517[(1)] = cljs.core.first((state_46354[(4)])));

} else {
throw ex__43841__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47518 = state_46354;
state_46354 = G__47518;
continue;
} else {
return ret_value__43839__auto__;
}
break;
}
});
cljs$core$async$state_machine__43838__auto__ = function(state_46354){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43838__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43838__auto____1.call(this,state_46354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43838__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43838__auto____0;
cljs$core$async$state_machine__43838__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43838__auto____1;
return cljs$core$async$state_machine__43838__auto__;
})()
})();
var state__44279__auto__ = (function (){var statearr_46396 = f__44278__auto__();
(statearr_46396[(6)] = c__44271__auto___47499);

return statearr_46396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44279__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__46398 = arguments.length;
switch (G__46398) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__44271__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44278__auto__ = (function (){var switch__43837__auto__ = (function (state_46464){
var state_val_46465 = (state_46464[(1)]);
if((state_val_46465 === (7))){
var inst_46456 = (state_46464[(2)]);
var state_46464__$1 = state_46464;
var statearr_46482_47525 = state_46464__$1;
(statearr_46482_47525[(2)] = inst_46456);

(statearr_46482_47525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (20))){
var inst_46426 = (state_46464[(7)]);
var inst_46437 = (state_46464[(2)]);
var inst_46438 = cljs.core.next(inst_46426);
var inst_46412 = inst_46438;
var inst_46413 = null;
var inst_46414 = (0);
var inst_46415 = (0);
var state_46464__$1 = (function (){var statearr_46483 = state_46464;
(statearr_46483[(8)] = inst_46413);

(statearr_46483[(9)] = inst_46437);

(statearr_46483[(10)] = inst_46414);

(statearr_46483[(11)] = inst_46412);

(statearr_46483[(12)] = inst_46415);

return statearr_46483;
})();
var statearr_46484_47526 = state_46464__$1;
(statearr_46484_47526[(2)] = null);

(statearr_46484_47526[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (1))){
var state_46464__$1 = state_46464;
var statearr_46485_47527 = state_46464__$1;
(statearr_46485_47527[(2)] = null);

(statearr_46485_47527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (4))){
var inst_46401 = (state_46464[(13)]);
var inst_46401__$1 = (state_46464[(2)]);
var inst_46402 = (inst_46401__$1 == null);
var state_46464__$1 = (function (){var statearr_46486 = state_46464;
(statearr_46486[(13)] = inst_46401__$1);

return statearr_46486;
})();
if(cljs.core.truth_(inst_46402)){
var statearr_46487_47528 = state_46464__$1;
(statearr_46487_47528[(1)] = (5));

} else {
var statearr_46488_47529 = state_46464__$1;
(statearr_46488_47529[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (15))){
var state_46464__$1 = state_46464;
var statearr_46492_47530 = state_46464__$1;
(statearr_46492_47530[(2)] = null);

(statearr_46492_47530[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (21))){
var state_46464__$1 = state_46464;
var statearr_46493_47531 = state_46464__$1;
(statearr_46493_47531[(2)] = null);

(statearr_46493_47531[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (13))){
var inst_46413 = (state_46464[(8)]);
var inst_46414 = (state_46464[(10)]);
var inst_46412 = (state_46464[(11)]);
var inst_46415 = (state_46464[(12)]);
var inst_46422 = (state_46464[(2)]);
var inst_46423 = (inst_46415 + (1));
var tmp46489 = inst_46413;
var tmp46490 = inst_46414;
var tmp46491 = inst_46412;
var inst_46412__$1 = tmp46491;
var inst_46413__$1 = tmp46489;
var inst_46414__$1 = tmp46490;
var inst_46415__$1 = inst_46423;
var state_46464__$1 = (function (){var statearr_46494 = state_46464;
(statearr_46494[(8)] = inst_46413__$1);

(statearr_46494[(10)] = inst_46414__$1);

(statearr_46494[(11)] = inst_46412__$1);

(statearr_46494[(14)] = inst_46422);

(statearr_46494[(12)] = inst_46415__$1);

return statearr_46494;
})();
var statearr_46495_47532 = state_46464__$1;
(statearr_46495_47532[(2)] = null);

(statearr_46495_47532[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (22))){
var state_46464__$1 = state_46464;
var statearr_46496_47534 = state_46464__$1;
(statearr_46496_47534[(2)] = null);

(statearr_46496_47534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (6))){
var inst_46401 = (state_46464[(13)]);
var inst_46410 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46401) : f.call(null,inst_46401));
var inst_46411 = cljs.core.seq(inst_46410);
var inst_46412 = inst_46411;
var inst_46413 = null;
var inst_46414 = (0);
var inst_46415 = (0);
var state_46464__$1 = (function (){var statearr_46497 = state_46464;
(statearr_46497[(8)] = inst_46413);

(statearr_46497[(10)] = inst_46414);

(statearr_46497[(11)] = inst_46412);

(statearr_46497[(12)] = inst_46415);

return statearr_46497;
})();
var statearr_46498_47535 = state_46464__$1;
(statearr_46498_47535[(2)] = null);

(statearr_46498_47535[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (17))){
var inst_46426 = (state_46464[(7)]);
var inst_46430 = cljs.core.chunk_first(inst_46426);
var inst_46431 = cljs.core.chunk_rest(inst_46426);
var inst_46432 = cljs.core.count(inst_46430);
var inst_46412 = inst_46431;
var inst_46413 = inst_46430;
var inst_46414 = inst_46432;
var inst_46415 = (0);
var state_46464__$1 = (function (){var statearr_46499 = state_46464;
(statearr_46499[(8)] = inst_46413);

(statearr_46499[(10)] = inst_46414);

(statearr_46499[(11)] = inst_46412);

(statearr_46499[(12)] = inst_46415);

return statearr_46499;
})();
var statearr_46500_47536 = state_46464__$1;
(statearr_46500_47536[(2)] = null);

(statearr_46500_47536[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (3))){
var inst_46458 = (state_46464[(2)]);
var state_46464__$1 = state_46464;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46464__$1,inst_46458);
} else {
if((state_val_46465 === (12))){
var inst_46446 = (state_46464[(2)]);
var state_46464__$1 = state_46464;
var statearr_46501_47537 = state_46464__$1;
(statearr_46501_47537[(2)] = inst_46446);

(statearr_46501_47537[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (2))){
var state_46464__$1 = state_46464;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46464__$1,(4),in$);
} else {
if((state_val_46465 === (23))){
var inst_46454 = (state_46464[(2)]);
var state_46464__$1 = state_46464;
var statearr_46502_47538 = state_46464__$1;
(statearr_46502_47538[(2)] = inst_46454);

(statearr_46502_47538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (19))){
var inst_46441 = (state_46464[(2)]);
var state_46464__$1 = state_46464;
var statearr_46503_47539 = state_46464__$1;
(statearr_46503_47539[(2)] = inst_46441);

(statearr_46503_47539[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (11))){
var inst_46426 = (state_46464[(7)]);
var inst_46412 = (state_46464[(11)]);
var inst_46426__$1 = cljs.core.seq(inst_46412);
var state_46464__$1 = (function (){var statearr_46504 = state_46464;
(statearr_46504[(7)] = inst_46426__$1);

return statearr_46504;
})();
if(inst_46426__$1){
var statearr_46505_47540 = state_46464__$1;
(statearr_46505_47540[(1)] = (14));

} else {
var statearr_46506_47541 = state_46464__$1;
(statearr_46506_47541[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (9))){
var inst_46448 = (state_46464[(2)]);
var inst_46449 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_46464__$1 = (function (){var statearr_46507 = state_46464;
(statearr_46507[(15)] = inst_46448);

return statearr_46507;
})();
if(cljs.core.truth_(inst_46449)){
var statearr_46508_47542 = state_46464__$1;
(statearr_46508_47542[(1)] = (21));

} else {
var statearr_46509_47543 = state_46464__$1;
(statearr_46509_47543[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (5))){
var inst_46404 = cljs.core.async.close_BANG_(out);
var state_46464__$1 = state_46464;
var statearr_46510_47544 = state_46464__$1;
(statearr_46510_47544[(2)] = inst_46404);

(statearr_46510_47544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (14))){
var inst_46426 = (state_46464[(7)]);
var inst_46428 = cljs.core.chunked_seq_QMARK_(inst_46426);
var state_46464__$1 = state_46464;
if(inst_46428){
var statearr_46511_47545 = state_46464__$1;
(statearr_46511_47545[(1)] = (17));

} else {
var statearr_46512_47546 = state_46464__$1;
(statearr_46512_47546[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (16))){
var inst_46444 = (state_46464[(2)]);
var state_46464__$1 = state_46464;
var statearr_46513_47548 = state_46464__$1;
(statearr_46513_47548[(2)] = inst_46444);

(statearr_46513_47548[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46465 === (10))){
var inst_46413 = (state_46464[(8)]);
var inst_46415 = (state_46464[(12)]);
var inst_46420 = cljs.core._nth(inst_46413,inst_46415);
var state_46464__$1 = state_46464;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46464__$1,(13),out,inst_46420);
} else {
if((state_val_46465 === (18))){
var inst_46426 = (state_46464[(7)]);
var inst_46435 = cljs.core.first(inst_46426);
var state_46464__$1 = state_46464;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46464__$1,(20),out,inst_46435);
} else {
if((state_val_46465 === (8))){
var inst_46414 = (state_46464[(10)]);
var inst_46415 = (state_46464[(12)]);
var inst_46417 = (inst_46415 < inst_46414);
var inst_46418 = inst_46417;
var state_46464__$1 = state_46464;
if(cljs.core.truth_(inst_46418)){
var statearr_46514_47550 = state_46464__$1;
(statearr_46514_47550[(1)] = (10));

} else {
var statearr_46515_47551 = state_46464__$1;
(statearr_46515_47551[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__43838__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__43838__auto____0 = (function (){
var statearr_46516 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46516[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__43838__auto__);

(statearr_46516[(1)] = (1));

return statearr_46516;
});
var cljs$core$async$mapcat_STAR__$_state_machine__43838__auto____1 = (function (state_46464){
while(true){
var ret_value__43839__auto__ = (function (){try{while(true){
var result__43840__auto__ = switch__43837__auto__(state_46464);
if(cljs.core.keyword_identical_QMARK_(result__43840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43840__auto__;
}
break;
}
}catch (e46517){var ex__43841__auto__ = e46517;
var statearr_46518_47555 = state_46464;
(statearr_46518_47555[(2)] = ex__43841__auto__);


if(cljs.core.seq((state_46464[(4)]))){
var statearr_46519_47556 = state_46464;
(statearr_46519_47556[(1)] = cljs.core.first((state_46464[(4)])));

} else {
throw ex__43841__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47557 = state_46464;
state_46464 = G__47557;
continue;
} else {
return ret_value__43839__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__43838__auto__ = function(state_46464){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__43838__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__43838__auto____1.call(this,state_46464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__43838__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__43838__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__43838__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__43838__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__43838__auto__;
})()
})();
var state__44279__auto__ = (function (){var statearr_46520 = f__44278__auto__();
(statearr_46520[(6)] = c__44271__auto__);

return statearr_46520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44279__auto__);
}));

return c__44271__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__46523 = arguments.length;
switch (G__46523) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__46535 = arguments.length;
switch (G__46535) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__46538 = arguments.length;
switch (G__46538) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44271__auto___47562 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44278__auto__ = (function (){var switch__43837__auto__ = (function (state_46562){
var state_val_46563 = (state_46562[(1)]);
if((state_val_46563 === (7))){
var inst_46557 = (state_46562[(2)]);
var state_46562__$1 = state_46562;
var statearr_46564_47563 = state_46562__$1;
(statearr_46564_47563[(2)] = inst_46557);

(statearr_46564_47563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46563 === (1))){
var inst_46539 = null;
var state_46562__$1 = (function (){var statearr_46566 = state_46562;
(statearr_46566[(7)] = inst_46539);

return statearr_46566;
})();
var statearr_46567_47564 = state_46562__$1;
(statearr_46567_47564[(2)] = null);

(statearr_46567_47564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46563 === (4))){
var inst_46542 = (state_46562[(8)]);
var inst_46542__$1 = (state_46562[(2)]);
var inst_46543 = (inst_46542__$1 == null);
var inst_46544 = cljs.core.not(inst_46543);
var state_46562__$1 = (function (){var statearr_46569 = state_46562;
(statearr_46569[(8)] = inst_46542__$1);

return statearr_46569;
})();
if(inst_46544){
var statearr_46570_47565 = state_46562__$1;
(statearr_46570_47565[(1)] = (5));

} else {
var statearr_46572_47566 = state_46562__$1;
(statearr_46572_47566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46563 === (6))){
var state_46562__$1 = state_46562;
var statearr_46573_47567 = state_46562__$1;
(statearr_46573_47567[(2)] = null);

(statearr_46573_47567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46563 === (3))){
var inst_46559 = (state_46562[(2)]);
var inst_46560 = cljs.core.async.close_BANG_(out);
var state_46562__$1 = (function (){var statearr_46574 = state_46562;
(statearr_46574[(9)] = inst_46559);

return statearr_46574;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46562__$1,inst_46560);
} else {
if((state_val_46563 === (2))){
var state_46562__$1 = state_46562;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46562__$1,(4),ch);
} else {
if((state_val_46563 === (11))){
var inst_46542 = (state_46562[(8)]);
var inst_46551 = (state_46562[(2)]);
var inst_46539 = inst_46542;
var state_46562__$1 = (function (){var statearr_46576 = state_46562;
(statearr_46576[(7)] = inst_46539);

(statearr_46576[(10)] = inst_46551);

return statearr_46576;
})();
var statearr_46577_47568 = state_46562__$1;
(statearr_46577_47568[(2)] = null);

(statearr_46577_47568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46563 === (9))){
var inst_46542 = (state_46562[(8)]);
var state_46562__$1 = state_46562;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46562__$1,(11),out,inst_46542);
} else {
if((state_val_46563 === (5))){
var inst_46539 = (state_46562[(7)]);
var inst_46542 = (state_46562[(8)]);
var inst_46546 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46542,inst_46539);
var state_46562__$1 = state_46562;
if(inst_46546){
var statearr_46580_47569 = state_46562__$1;
(statearr_46580_47569[(1)] = (8));

} else {
var statearr_46581_47570 = state_46562__$1;
(statearr_46581_47570[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46563 === (10))){
var inst_46554 = (state_46562[(2)]);
var state_46562__$1 = state_46562;
var statearr_46582_47571 = state_46562__$1;
(statearr_46582_47571[(2)] = inst_46554);

(statearr_46582_47571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46563 === (8))){
var inst_46539 = (state_46562[(7)]);
var tmp46579 = inst_46539;
var inst_46539__$1 = tmp46579;
var state_46562__$1 = (function (){var statearr_46583 = state_46562;
(statearr_46583[(7)] = inst_46539__$1);

return statearr_46583;
})();
var statearr_46584_47572 = state_46562__$1;
(statearr_46584_47572[(2)] = null);

(statearr_46584_47572[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__43838__auto__ = null;
var cljs$core$async$state_machine__43838__auto____0 = (function (){
var statearr_46586 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46586[(0)] = cljs$core$async$state_machine__43838__auto__);

(statearr_46586[(1)] = (1));

return statearr_46586;
});
var cljs$core$async$state_machine__43838__auto____1 = (function (state_46562){
while(true){
var ret_value__43839__auto__ = (function (){try{while(true){
var result__43840__auto__ = switch__43837__auto__(state_46562);
if(cljs.core.keyword_identical_QMARK_(result__43840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43840__auto__;
}
break;
}
}catch (e46587){var ex__43841__auto__ = e46587;
var statearr_46588_47573 = state_46562;
(statearr_46588_47573[(2)] = ex__43841__auto__);


if(cljs.core.seq((state_46562[(4)]))){
var statearr_46589_47574 = state_46562;
(statearr_46589_47574[(1)] = cljs.core.first((state_46562[(4)])));

} else {
throw ex__43841__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47576 = state_46562;
state_46562 = G__47576;
continue;
} else {
return ret_value__43839__auto__;
}
break;
}
});
cljs$core$async$state_machine__43838__auto__ = function(state_46562){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43838__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43838__auto____1.call(this,state_46562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43838__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43838__auto____0;
cljs$core$async$state_machine__43838__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43838__auto____1;
return cljs$core$async$state_machine__43838__auto__;
})()
})();
var state__44279__auto__ = (function (){var statearr_46590 = f__44278__auto__();
(statearr_46590[(6)] = c__44271__auto___47562);

return statearr_46590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44279__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__46592 = arguments.length;
switch (G__46592) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44271__auto___47578 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44278__auto__ = (function (){var switch__43837__auto__ = (function (state_46632){
var state_val_46633 = (state_46632[(1)]);
if((state_val_46633 === (7))){
var inst_46628 = (state_46632[(2)]);
var state_46632__$1 = state_46632;
var statearr_46634_47579 = state_46632__$1;
(statearr_46634_47579[(2)] = inst_46628);

(statearr_46634_47579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46633 === (1))){
var inst_46595 = (new Array(n));
var inst_46596 = inst_46595;
var inst_46597 = (0);
var state_46632__$1 = (function (){var statearr_46635 = state_46632;
(statearr_46635[(7)] = inst_46597);

(statearr_46635[(8)] = inst_46596);

return statearr_46635;
})();
var statearr_46637_47580 = state_46632__$1;
(statearr_46637_47580[(2)] = null);

(statearr_46637_47580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46633 === (4))){
var inst_46600 = (state_46632[(9)]);
var inst_46600__$1 = (state_46632[(2)]);
var inst_46601 = (inst_46600__$1 == null);
var inst_46602 = cljs.core.not(inst_46601);
var state_46632__$1 = (function (){var statearr_46638 = state_46632;
(statearr_46638[(9)] = inst_46600__$1);

return statearr_46638;
})();
if(inst_46602){
var statearr_46639_47581 = state_46632__$1;
(statearr_46639_47581[(1)] = (5));

} else {
var statearr_46640_47582 = state_46632__$1;
(statearr_46640_47582[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46633 === (15))){
var inst_46622 = (state_46632[(2)]);
var state_46632__$1 = state_46632;
var statearr_46641_47583 = state_46632__$1;
(statearr_46641_47583[(2)] = inst_46622);

(statearr_46641_47583[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46633 === (13))){
var state_46632__$1 = state_46632;
var statearr_46642_47584 = state_46632__$1;
(statearr_46642_47584[(2)] = null);

(statearr_46642_47584[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46633 === (6))){
var inst_46597 = (state_46632[(7)]);
var inst_46618 = (inst_46597 > (0));
var state_46632__$1 = state_46632;
if(cljs.core.truth_(inst_46618)){
var statearr_46643_47585 = state_46632__$1;
(statearr_46643_47585[(1)] = (12));

} else {
var statearr_46644_47586 = state_46632__$1;
(statearr_46644_47586[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46633 === (3))){
var inst_46630 = (state_46632[(2)]);
var state_46632__$1 = state_46632;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46632__$1,inst_46630);
} else {
if((state_val_46633 === (12))){
var inst_46596 = (state_46632[(8)]);
var inst_46620 = cljs.core.vec(inst_46596);
var state_46632__$1 = state_46632;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46632__$1,(15),out,inst_46620);
} else {
if((state_val_46633 === (2))){
var state_46632__$1 = state_46632;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46632__$1,(4),ch);
} else {
if((state_val_46633 === (11))){
var inst_46612 = (state_46632[(2)]);
var inst_46613 = (new Array(n));
var inst_46596 = inst_46613;
var inst_46597 = (0);
var state_46632__$1 = (function (){var statearr_46645 = state_46632;
(statearr_46645[(7)] = inst_46597);

(statearr_46645[(8)] = inst_46596);

(statearr_46645[(10)] = inst_46612);

return statearr_46645;
})();
var statearr_46646_47588 = state_46632__$1;
(statearr_46646_47588[(2)] = null);

(statearr_46646_47588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46633 === (9))){
var inst_46596 = (state_46632[(8)]);
var inst_46610 = cljs.core.vec(inst_46596);
var state_46632__$1 = state_46632;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46632__$1,(11),out,inst_46610);
} else {
if((state_val_46633 === (5))){
var inst_46605 = (state_46632[(11)]);
var inst_46600 = (state_46632[(9)]);
var inst_46597 = (state_46632[(7)]);
var inst_46596 = (state_46632[(8)]);
var inst_46604 = (inst_46596[inst_46597] = inst_46600);
var inst_46605__$1 = (inst_46597 + (1));
var inst_46606 = (inst_46605__$1 < n);
var state_46632__$1 = (function (){var statearr_46648 = state_46632;
(statearr_46648[(11)] = inst_46605__$1);

(statearr_46648[(12)] = inst_46604);

return statearr_46648;
})();
if(cljs.core.truth_(inst_46606)){
var statearr_46649_47592 = state_46632__$1;
(statearr_46649_47592[(1)] = (8));

} else {
var statearr_46650_47593 = state_46632__$1;
(statearr_46650_47593[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46633 === (14))){
var inst_46625 = (state_46632[(2)]);
var inst_46626 = cljs.core.async.close_BANG_(out);
var state_46632__$1 = (function (){var statearr_46652 = state_46632;
(statearr_46652[(13)] = inst_46625);

return statearr_46652;
})();
var statearr_46653_47594 = state_46632__$1;
(statearr_46653_47594[(2)] = inst_46626);

(statearr_46653_47594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46633 === (10))){
var inst_46616 = (state_46632[(2)]);
var state_46632__$1 = state_46632;
var statearr_46654_47595 = state_46632__$1;
(statearr_46654_47595[(2)] = inst_46616);

(statearr_46654_47595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46633 === (8))){
var inst_46605 = (state_46632[(11)]);
var inst_46596 = (state_46632[(8)]);
var tmp46651 = inst_46596;
var inst_46596__$1 = tmp46651;
var inst_46597 = inst_46605;
var state_46632__$1 = (function (){var statearr_46655 = state_46632;
(statearr_46655[(7)] = inst_46597);

(statearr_46655[(8)] = inst_46596__$1);

return statearr_46655;
})();
var statearr_46656_47596 = state_46632__$1;
(statearr_46656_47596[(2)] = null);

(statearr_46656_47596[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__43838__auto__ = null;
var cljs$core$async$state_machine__43838__auto____0 = (function (){
var statearr_46657 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46657[(0)] = cljs$core$async$state_machine__43838__auto__);

(statearr_46657[(1)] = (1));

return statearr_46657;
});
var cljs$core$async$state_machine__43838__auto____1 = (function (state_46632){
while(true){
var ret_value__43839__auto__ = (function (){try{while(true){
var result__43840__auto__ = switch__43837__auto__(state_46632);
if(cljs.core.keyword_identical_QMARK_(result__43840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43840__auto__;
}
break;
}
}catch (e46658){var ex__43841__auto__ = e46658;
var statearr_46659_47601 = state_46632;
(statearr_46659_47601[(2)] = ex__43841__auto__);


if(cljs.core.seq((state_46632[(4)]))){
var statearr_46660_47602 = state_46632;
(statearr_46660_47602[(1)] = cljs.core.first((state_46632[(4)])));

} else {
throw ex__43841__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47603 = state_46632;
state_46632 = G__47603;
continue;
} else {
return ret_value__43839__auto__;
}
break;
}
});
cljs$core$async$state_machine__43838__auto__ = function(state_46632){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43838__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43838__auto____1.call(this,state_46632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43838__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43838__auto____0;
cljs$core$async$state_machine__43838__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43838__auto____1;
return cljs$core$async$state_machine__43838__auto__;
})()
})();
var state__44279__auto__ = (function (){var statearr_46661 = f__44278__auto__();
(statearr_46661[(6)] = c__44271__auto___47578);

return statearr_46661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44279__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__46665 = arguments.length;
switch (G__46665) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44271__auto___47608 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44278__auto__ = (function (){var switch__43837__auto__ = (function (state_46711){
var state_val_46712 = (state_46711[(1)]);
if((state_val_46712 === (7))){
var inst_46707 = (state_46711[(2)]);
var state_46711__$1 = state_46711;
var statearr_46713_47609 = state_46711__$1;
(statearr_46713_47609[(2)] = inst_46707);

(statearr_46713_47609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46712 === (1))){
var inst_46666 = [];
var inst_46667 = inst_46666;
var inst_46668 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_46711__$1 = (function (){var statearr_46726 = state_46711;
(statearr_46726[(7)] = inst_46667);

(statearr_46726[(8)] = inst_46668);

return statearr_46726;
})();
var statearr_46729_47610 = state_46711__$1;
(statearr_46729_47610[(2)] = null);

(statearr_46729_47610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46712 === (4))){
var inst_46671 = (state_46711[(9)]);
var inst_46671__$1 = (state_46711[(2)]);
var inst_46672 = (inst_46671__$1 == null);
var inst_46673 = cljs.core.not(inst_46672);
var state_46711__$1 = (function (){var statearr_46732 = state_46711;
(statearr_46732[(9)] = inst_46671__$1);

return statearr_46732;
})();
if(inst_46673){
var statearr_46734_47611 = state_46711__$1;
(statearr_46734_47611[(1)] = (5));

} else {
var statearr_46735_47612 = state_46711__$1;
(statearr_46735_47612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46712 === (15))){
var inst_46667 = (state_46711[(7)]);
var inst_46699 = cljs.core.vec(inst_46667);
var state_46711__$1 = state_46711;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46711__$1,(18),out,inst_46699);
} else {
if((state_val_46712 === (13))){
var inst_46694 = (state_46711[(2)]);
var state_46711__$1 = state_46711;
var statearr_46738_47613 = state_46711__$1;
(statearr_46738_47613[(2)] = inst_46694);

(statearr_46738_47613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46712 === (6))){
var inst_46667 = (state_46711[(7)]);
var inst_46696 = inst_46667.length;
var inst_46697 = (inst_46696 > (0));
var state_46711__$1 = state_46711;
if(cljs.core.truth_(inst_46697)){
var statearr_46739_47614 = state_46711__$1;
(statearr_46739_47614[(1)] = (15));

} else {
var statearr_46740_47615 = state_46711__$1;
(statearr_46740_47615[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46712 === (17))){
var inst_46704 = (state_46711[(2)]);
var inst_46705 = cljs.core.async.close_BANG_(out);
var state_46711__$1 = (function (){var statearr_46741 = state_46711;
(statearr_46741[(10)] = inst_46704);

return statearr_46741;
})();
var statearr_46742_47616 = state_46711__$1;
(statearr_46742_47616[(2)] = inst_46705);

(statearr_46742_47616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46712 === (3))){
var inst_46709 = (state_46711[(2)]);
var state_46711__$1 = state_46711;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46711__$1,inst_46709);
} else {
if((state_val_46712 === (12))){
var inst_46667 = (state_46711[(7)]);
var inst_46687 = cljs.core.vec(inst_46667);
var state_46711__$1 = state_46711;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46711__$1,(14),out,inst_46687);
} else {
if((state_val_46712 === (2))){
var state_46711__$1 = state_46711;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46711__$1,(4),ch);
} else {
if((state_val_46712 === (11))){
var inst_46667 = (state_46711[(7)]);
var inst_46675 = (state_46711[(11)]);
var inst_46671 = (state_46711[(9)]);
var inst_46683 = inst_46667.push(inst_46671);
var tmp46749 = inst_46667;
var inst_46667__$1 = tmp46749;
var inst_46668 = inst_46675;
var state_46711__$1 = (function (){var statearr_46754 = state_46711;
(statearr_46754[(7)] = inst_46667__$1);

(statearr_46754[(8)] = inst_46668);

(statearr_46754[(12)] = inst_46683);

return statearr_46754;
})();
var statearr_46757_47617 = state_46711__$1;
(statearr_46757_47617[(2)] = null);

(statearr_46757_47617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46712 === (9))){
var inst_46668 = (state_46711[(8)]);
var inst_46679 = cljs.core.keyword_identical_QMARK_(inst_46668,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_46711__$1 = state_46711;
var statearr_46758_47618 = state_46711__$1;
(statearr_46758_47618[(2)] = inst_46679);

(statearr_46758_47618[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46712 === (5))){
var inst_46676 = (state_46711[(13)]);
var inst_46668 = (state_46711[(8)]);
var inst_46675 = (state_46711[(11)]);
var inst_46671 = (state_46711[(9)]);
var inst_46675__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46671) : f.call(null,inst_46671));
var inst_46676__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46675__$1,inst_46668);
var state_46711__$1 = (function (){var statearr_46762 = state_46711;
(statearr_46762[(13)] = inst_46676__$1);

(statearr_46762[(11)] = inst_46675__$1);

return statearr_46762;
})();
if(inst_46676__$1){
var statearr_46763_47619 = state_46711__$1;
(statearr_46763_47619[(1)] = (8));

} else {
var statearr_46764_47620 = state_46711__$1;
(statearr_46764_47620[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46712 === (14))){
var inst_46675 = (state_46711[(11)]);
var inst_46671 = (state_46711[(9)]);
var inst_46689 = (state_46711[(2)]);
var inst_46690 = [];
var inst_46691 = inst_46690.push(inst_46671);
var inst_46667 = inst_46690;
var inst_46668 = inst_46675;
var state_46711__$1 = (function (){var statearr_46765 = state_46711;
(statearr_46765[(7)] = inst_46667);

(statearr_46765[(8)] = inst_46668);

(statearr_46765[(14)] = inst_46689);

(statearr_46765[(15)] = inst_46691);

return statearr_46765;
})();
var statearr_46767_47621 = state_46711__$1;
(statearr_46767_47621[(2)] = null);

(statearr_46767_47621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46712 === (16))){
var state_46711__$1 = state_46711;
var statearr_46771_47622 = state_46711__$1;
(statearr_46771_47622[(2)] = null);

(statearr_46771_47622[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46712 === (10))){
var inst_46681 = (state_46711[(2)]);
var state_46711__$1 = state_46711;
if(cljs.core.truth_(inst_46681)){
var statearr_46772_47623 = state_46711__$1;
(statearr_46772_47623[(1)] = (11));

} else {
var statearr_46773_47624 = state_46711__$1;
(statearr_46773_47624[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46712 === (18))){
var inst_46701 = (state_46711[(2)]);
var state_46711__$1 = state_46711;
var statearr_46774_47625 = state_46711__$1;
(statearr_46774_47625[(2)] = inst_46701);

(statearr_46774_47625[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46712 === (8))){
var inst_46676 = (state_46711[(13)]);
var state_46711__$1 = state_46711;
var statearr_46778_47626 = state_46711__$1;
(statearr_46778_47626[(2)] = inst_46676);

(statearr_46778_47626[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__43838__auto__ = null;
var cljs$core$async$state_machine__43838__auto____0 = (function (){
var statearr_46779 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46779[(0)] = cljs$core$async$state_machine__43838__auto__);

(statearr_46779[(1)] = (1));

return statearr_46779;
});
var cljs$core$async$state_machine__43838__auto____1 = (function (state_46711){
while(true){
var ret_value__43839__auto__ = (function (){try{while(true){
var result__43840__auto__ = switch__43837__auto__(state_46711);
if(cljs.core.keyword_identical_QMARK_(result__43840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43840__auto__;
}
break;
}
}catch (e46780){var ex__43841__auto__ = e46780;
var statearr_46781_47627 = state_46711;
(statearr_46781_47627[(2)] = ex__43841__auto__);


if(cljs.core.seq((state_46711[(4)]))){
var statearr_46782_47628 = state_46711;
(statearr_46782_47628[(1)] = cljs.core.first((state_46711[(4)])));

} else {
throw ex__43841__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47629 = state_46711;
state_46711 = G__47629;
continue;
} else {
return ret_value__43839__auto__;
}
break;
}
});
cljs$core$async$state_machine__43838__auto__ = function(state_46711){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43838__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43838__auto____1.call(this,state_46711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43838__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43838__auto____0;
cljs$core$async$state_machine__43838__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43838__auto____1;
return cljs$core$async$state_machine__43838__auto__;
})()
})();
var state__44279__auto__ = (function (){var statearr_46783 = f__44278__auto__();
(statearr_46783[(6)] = c__44271__auto___47608);

return statearr_46783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44279__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
