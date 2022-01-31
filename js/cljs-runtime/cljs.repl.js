goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__49323){
var map__49324 = p__49323;
var map__49324__$1 = cljs.core.__destructure_map(map__49324);
var m = map__49324__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49324__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49324__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__49326_49536 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49327_49537 = null;
var count__49328_49538 = (0);
var i__49329_49539 = (0);
while(true){
if((i__49329_49539 < count__49328_49538)){
var f_49540 = chunk__49327_49537.cljs$core$IIndexed$_nth$arity$2(null,i__49329_49539);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_49540], 0));


var G__49541 = seq__49326_49536;
var G__49542 = chunk__49327_49537;
var G__49543 = count__49328_49538;
var G__49544 = (i__49329_49539 + (1));
seq__49326_49536 = G__49541;
chunk__49327_49537 = G__49542;
count__49328_49538 = G__49543;
i__49329_49539 = G__49544;
continue;
} else {
var temp__5753__auto___49545 = cljs.core.seq(seq__49326_49536);
if(temp__5753__auto___49545){
var seq__49326_49546__$1 = temp__5753__auto___49545;
if(cljs.core.chunked_seq_QMARK_(seq__49326_49546__$1)){
var c__4679__auto___49547 = cljs.core.chunk_first(seq__49326_49546__$1);
var G__49548 = cljs.core.chunk_rest(seq__49326_49546__$1);
var G__49549 = c__4679__auto___49547;
var G__49550 = cljs.core.count(c__4679__auto___49547);
var G__49551 = (0);
seq__49326_49536 = G__49548;
chunk__49327_49537 = G__49549;
count__49328_49538 = G__49550;
i__49329_49539 = G__49551;
continue;
} else {
var f_49552 = cljs.core.first(seq__49326_49546__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_49552], 0));


var G__49553 = cljs.core.next(seq__49326_49546__$1);
var G__49554 = null;
var G__49555 = (0);
var G__49556 = (0);
seq__49326_49536 = G__49553;
chunk__49327_49537 = G__49554;
count__49328_49538 = G__49555;
i__49329_49539 = G__49556;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_49557 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_49557], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_49557)))?cljs.core.second(arglists_49557):arglists_49557)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__49336_49558 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49337_49559 = null;
var count__49338_49560 = (0);
var i__49339_49561 = (0);
while(true){
if((i__49339_49561 < count__49338_49560)){
var vec__49348_49562 = chunk__49337_49559.cljs$core$IIndexed$_nth$arity$2(null,i__49339_49561);
var name_49563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49348_49562,(0),null);
var map__49351_49564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49348_49562,(1),null);
var map__49351_49565__$1 = cljs.core.__destructure_map(map__49351_49564);
var doc_49566 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49351_49565__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49567 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49351_49565__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_49563], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_49567], 0));

if(cljs.core.truth_(doc_49566)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_49566], 0));
} else {
}


var G__49568 = seq__49336_49558;
var G__49569 = chunk__49337_49559;
var G__49570 = count__49338_49560;
var G__49571 = (i__49339_49561 + (1));
seq__49336_49558 = G__49568;
chunk__49337_49559 = G__49569;
count__49338_49560 = G__49570;
i__49339_49561 = G__49571;
continue;
} else {
var temp__5753__auto___49572 = cljs.core.seq(seq__49336_49558);
if(temp__5753__auto___49572){
var seq__49336_49573__$1 = temp__5753__auto___49572;
if(cljs.core.chunked_seq_QMARK_(seq__49336_49573__$1)){
var c__4679__auto___49574 = cljs.core.chunk_first(seq__49336_49573__$1);
var G__49575 = cljs.core.chunk_rest(seq__49336_49573__$1);
var G__49576 = c__4679__auto___49574;
var G__49577 = cljs.core.count(c__4679__auto___49574);
var G__49578 = (0);
seq__49336_49558 = G__49575;
chunk__49337_49559 = G__49576;
count__49338_49560 = G__49577;
i__49339_49561 = G__49578;
continue;
} else {
var vec__49354_49579 = cljs.core.first(seq__49336_49573__$1);
var name_49580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49354_49579,(0),null);
var map__49357_49581 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49354_49579,(1),null);
var map__49357_49582__$1 = cljs.core.__destructure_map(map__49357_49581);
var doc_49583 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49357_49582__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49584 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49357_49582__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_49580], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_49584], 0));

if(cljs.core.truth_(doc_49583)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_49583], 0));
} else {
}


var G__49585 = cljs.core.next(seq__49336_49573__$1);
var G__49586 = null;
var G__49587 = (0);
var G__49588 = (0);
seq__49336_49558 = G__49585;
chunk__49337_49559 = G__49586;
count__49338_49560 = G__49587;
i__49339_49561 = G__49588;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__49359 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__49360 = null;
var count__49361 = (0);
var i__49362 = (0);
while(true){
if((i__49362 < count__49361)){
var role = chunk__49360.cljs$core$IIndexed$_nth$arity$2(null,i__49362);
var temp__5753__auto___49589__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___49589__$1)){
var spec_49590 = temp__5753__auto___49589__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_49590)], 0));
} else {
}


var G__49591 = seq__49359;
var G__49592 = chunk__49360;
var G__49593 = count__49361;
var G__49594 = (i__49362 + (1));
seq__49359 = G__49591;
chunk__49360 = G__49592;
count__49361 = G__49593;
i__49362 = G__49594;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__49359);
if(temp__5753__auto____$1){
var seq__49359__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__49359__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__49359__$1);
var G__49595 = cljs.core.chunk_rest(seq__49359__$1);
var G__49596 = c__4679__auto__;
var G__49597 = cljs.core.count(c__4679__auto__);
var G__49598 = (0);
seq__49359 = G__49595;
chunk__49360 = G__49596;
count__49361 = G__49597;
i__49362 = G__49598;
continue;
} else {
var role = cljs.core.first(seq__49359__$1);
var temp__5753__auto___49599__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___49599__$2)){
var spec_49601 = temp__5753__auto___49599__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_49601)], 0));
} else {
}


var G__49602 = cljs.core.next(seq__49359__$1);
var G__49603 = null;
var G__49604 = (0);
var G__49605 = (0);
seq__49359 = G__49602;
chunk__49360 = G__49603;
count__49361 = G__49604;
i__49362 = G__49605;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__49606 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__49607 = cljs.core.ex_cause(t);
via = G__49606;
t = G__49607;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__49409 = datafied_throwable;
var map__49409__$1 = cljs.core.__destructure_map(map__49409);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49409__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49409__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49409__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__49414 = cljs.core.last(via);
var map__49414__$1 = cljs.core.__destructure_map(map__49414);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49414__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49414__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49414__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__49415 = data;
var map__49415__$1 = cljs.core.__destructure_map(map__49415);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49415__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49415__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49415__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__49416 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__49416__$1 = cljs.core.__destructure_map(map__49416);
var top_data = map__49416__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49416__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__49450 = phase;
var G__49450__$1 = (((G__49450 instanceof cljs.core.Keyword))?G__49450.fqn:null);
switch (G__49450__$1) {
case "read-source":
var map__49455 = data;
var map__49455__$1 = cljs.core.__destructure_map(map__49455);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49455__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49455__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__49464 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__49464__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49464,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__49464);
var G__49464__$2 = (cljs.core.truth_((function (){var fexpr__49469 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49469.cljs$core$IFn$_invoke$arity$1 ? fexpr__49469.cljs$core$IFn$_invoke$arity$1(source) : fexpr__49469.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49464__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__49464__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49464__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__49464__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__49470 = top_data;
var G__49470__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49470,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__49470);
var G__49470__$2 = (cljs.core.truth_((function (){var fexpr__49471 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49471.cljs$core$IFn$_invoke$arity$1 ? fexpr__49471.cljs$core$IFn$_invoke$arity$1(source) : fexpr__49471.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49470__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__49470__$1);
var G__49470__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49470__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__49470__$2);
var G__49470__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49470__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__49470__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49470__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__49470__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__49473 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49473,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49473,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49473,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49473,(3),null);
var G__49477 = top_data;
var G__49477__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49477,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__49477);
var G__49477__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49477__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__49477__$1);
var G__49477__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49477__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__49477__$2);
var G__49477__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49477__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__49477__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49477__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__49477__$4;
}

break;
case "execution":
var vec__49478 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49478,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49478,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49478,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49478,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__49394_SHARP_){
var or__4253__auto__ = (p1__49394_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__49481 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49481.cljs$core$IFn$_invoke$arity$1 ? fexpr__49481.cljs$core$IFn$_invoke$arity$1(p1__49394_SHARP_) : fexpr__49481.call(null,p1__49394_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__49483 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__49483__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49483,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__49483);
var G__49483__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49483__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__49483__$1);
var G__49483__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49483__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__49483__$2);
var G__49483__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49483__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__49483__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49483__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__49483__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49450__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__49488){
var map__49489 = p__49488;
var map__49489__$1 = cljs.core.__destructure_map(map__49489);
var triage_data = map__49489__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49489__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49489__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49489__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49489__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49489__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49489__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49489__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49489__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__49491 = phase;
var G__49491__$1 = (((G__49491 instanceof cljs.core.Keyword))?G__49491.fqn:null);
switch (G__49491__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__49492 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__49493 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49494 = loc;
var G__49495 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__49496_49621 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__49497_49622 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__49498_49623 = true;
var _STAR_print_fn_STAR__temp_val__49499_49624 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__49498_49623);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__49499_49624);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49486_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__49486_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__49497_49622);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__49496_49621);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__49492,G__49493,G__49494,G__49495) : format.call(null,G__49492,G__49493,G__49494,G__49495));

break;
case "macroexpansion":
var G__49500 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__49501 = cause_type;
var G__49502 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49503 = loc;
var G__49504 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49500,G__49501,G__49502,G__49503,G__49504) : format.call(null,G__49500,G__49501,G__49502,G__49503,G__49504));

break;
case "compile-syntax-check":
var G__49505 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__49506 = cause_type;
var G__49507 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49508 = loc;
var G__49509 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49505,G__49506,G__49507,G__49508,G__49509) : format.call(null,G__49505,G__49506,G__49507,G__49508,G__49509));

break;
case "compilation":
var G__49510 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__49511 = cause_type;
var G__49512 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49513 = loc;
var G__49514 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49510,G__49511,G__49512,G__49513,G__49514) : format.call(null,G__49510,G__49511,G__49512,G__49513,G__49514));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__49515 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__49516 = symbol;
var G__49517 = loc;
var G__49518 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__49519_49626 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__49520_49627 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__49521_49628 = true;
var _STAR_print_fn_STAR__temp_val__49522_49629 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__49521_49628);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__49522_49629);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49487_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__49487_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__49520_49627);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__49519_49626);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__49515,G__49516,G__49517,G__49518) : format.call(null,G__49515,G__49516,G__49517,G__49518));
} else {
var G__49527 = "Execution error%s at %s(%s).\n%s\n";
var G__49528 = cause_type;
var G__49529 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49530 = loc;
var G__49531 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49527,G__49528,G__49529,G__49530,G__49531) : format.call(null,G__49527,G__49528,G__49529,G__49530,G__49531));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49491__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
