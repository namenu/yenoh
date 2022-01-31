goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__49950__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__49950 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49952__i = 0, G__49952__a = new Array(arguments.length -  0);
while (G__49952__i < G__49952__a.length) {G__49952__a[G__49952__i] = arguments[G__49952__i + 0]; ++G__49952__i;}
  args = new cljs.core.IndexedSeq(G__49952__a,0,null);
} 
return G__49950__delegate.call(this,args);};
G__49950.cljs$lang$maxFixedArity = 0;
G__49950.cljs$lang$applyTo = (function (arglist__49953){
var args = cljs.core.seq(arglist__49953);
return G__49950__delegate(args);
});
G__49950.cljs$core$IFn$_invoke$arity$variadic = G__49950__delegate;
return G__49950;
})()
);

(o.error = (function() { 
var G__49954__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__49954 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49955__i = 0, G__49955__a = new Array(arguments.length -  0);
while (G__49955__i < G__49955__a.length) {G__49955__a[G__49955__i] = arguments[G__49955__i + 0]; ++G__49955__i;}
  args = new cljs.core.IndexedSeq(G__49955__a,0,null);
} 
return G__49954__delegate.call(this,args);};
G__49954.cljs$lang$maxFixedArity = 0;
G__49954.cljs$lang$applyTo = (function (arglist__49956){
var args = cljs.core.seq(arglist__49956);
return G__49954__delegate(args);
});
G__49954.cljs$core$IFn$_invoke$arity$variadic = G__49954__delegate;
return G__49954;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
