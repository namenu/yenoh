goog.provide('instaparse.util');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4870__auto__ = [];
var len__4864__auto___51002 = arguments.length;
var i__4865__auto___51003 = (0);
while(true){
if((i__4865__auto___51003 < len__4864__auto___51002)){
args__4870__auto__.push((arguments[i__4865__auto___51003]));

var G__51005 = (i__4865__auto___51003 + (1));
i__4865__auto___51003 = G__51005;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_runtime_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq50966){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50966));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4870__auto__ = [];
var len__4864__auto___51007 = arguments.length;
var i__4865__auto___51008 = (0);
while(true){
if((i__4865__auto___51008 < len__4864__auto___51007)){
args__4870__auto__.push((arguments[i__4865__auto___51008]));

var G__51009 = (i__4865__auto___51008 + (1));
i__4865__auto___51008 = G__51009;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_illegal_argument_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq51000){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51000));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__51001 = "";
var G__51001__$1 = (cljs.core.truth_(re.ignoreCase)?[G__51001,"i"].join(''):G__51001);
var G__51001__$2 = (cljs.core.truth_(re.multiline)?[G__51001__$1,"m"].join(''):G__51001__$1);
if(cljs.core.truth_(re.unicode)){
return [G__51001__$2,"u"].join('');
} else {
return G__51001__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
