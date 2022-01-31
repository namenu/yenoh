goog.provide('instaparse.failure');
/**
 * Takes an index into text, and determines the line and column info
 */
instaparse.failure.index__GT_line_column = (function instaparse$failure$index__GT_line_column(index,text){
var line = (1);
var col = (1);
var counter = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,counter)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),col], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.get.cljs$core$IFn$_invoke$arity$2(text,counter))){
var G__50956 = (line + (1));
var G__50957 = (1);
var G__50958 = (counter + (1));
line = G__50956;
col = G__50957;
counter = G__50958;
continue;
} else {
var G__50959 = line;
var G__50960 = (col + (1));
var G__50961 = (counter + (1));
line = G__50959;
col = G__50960;
counter = G__50961;
continue;

}
}
break;
}
});
instaparse.failure.get_line = (function instaparse$failure$get_line(n,text){
var chars = cljs.core.seq(clojure.string.replace(text,"\r\n","\n"));
var n__$1 = n;
while(true){
if(cljs.core.empty_QMARK_(chars)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n__$1,(1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["\n",null], null), null)),chars));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.first(chars))){
var G__50962 = cljs.core.next(chars);
var G__50963 = (n__$1 - (1));
chars = G__50962;
n__$1 = G__50963;
continue;
} else {
var G__50964 = cljs.core.next(chars);
var G__50965 = n__$1;
chars = G__50964;
n__$1 = G__50965;
continue;

}
}
}
break;
}
});
/**
 * Creates string with caret at nth position, 1-based
 */
instaparse.failure.marker = (function instaparse$failure$marker(n){
if(cljs.core.integer_QMARK_(n)){
if((n <= (1))){
return "^";
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - (1))," "),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^"], null)));
}
} else {
return null;
}
});
/**
 * Adds text, line, and column info to failure object.
 */
instaparse.failure.augment_failure = (function instaparse$failure$augment_failure(failure,text){
var lc = instaparse.failure.index__GT_line_column(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(failure),text);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([failure,lc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),instaparse.failure.get_line(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(lc),text)], null)], 0));
});
/**
 * Provides special case for printing negative lookahead reasons
 */
instaparse.failure.print_reason = (function instaparse$failure$print_reason(r){
if(cljs.core.truth_(new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r))){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NOT "], 0));

return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r)], 0));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"char-range","char-range",1443391389).cljs$core$IFn$_invoke$arity$1(r))){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.char_range__GT_str(r)], 0));
} else {
if((r instanceof RegExp)){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.regexp__GT_str(r)], 0));
} else {
return cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0));

}
}
}
});
/**
 * Takes an augmented failure object and prints the error message
 */
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__50907){
var map__50908 = p__50907;
var map__50908__$1 = cljs.core.__destructure_map(map__50908);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50908__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50908__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50908__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50908__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Parse error at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),":"].join('')], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([text], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.failure.marker(column)], 0));

var full_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"full","full",436801220),reason)));
var partial_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.Keyword(null,"full","full",436801220)),reason)));
var total = (cljs.core.count(full_reasons) + cljs.core.count(partial_reasons));
if((total === (0))){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),total)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected:"], 0));
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected one of:"], 0));

}
}

var seq__50935_50967 = cljs.core.seq(full_reasons);
var chunk__50936_50968 = null;
var count__50937_50969 = (0);
var i__50938_50970 = (0);
while(true){
if((i__50938_50970 < count__50937_50969)){
var r_50971 = chunk__50936_50968.cljs$core$IIndexed$_nth$arity$2(null,i__50938_50970);
instaparse.failure.print_reason(r_50971);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__50972 = seq__50935_50967;
var G__50973 = chunk__50936_50968;
var G__50974 = count__50937_50969;
var G__50975 = (i__50938_50970 + (1));
seq__50935_50967 = G__50972;
chunk__50936_50968 = G__50973;
count__50937_50969 = G__50974;
i__50938_50970 = G__50975;
continue;
} else {
var temp__5753__auto___50976 = cljs.core.seq(seq__50935_50967);
if(temp__5753__auto___50976){
var seq__50935_50977__$1 = temp__5753__auto___50976;
if(cljs.core.chunked_seq_QMARK_(seq__50935_50977__$1)){
var c__4679__auto___50978 = cljs.core.chunk_first(seq__50935_50977__$1);
var G__50979 = cljs.core.chunk_rest(seq__50935_50977__$1);
var G__50980 = c__4679__auto___50978;
var G__50981 = cljs.core.count(c__4679__auto___50978);
var G__50982 = (0);
seq__50935_50967 = G__50979;
chunk__50936_50968 = G__50980;
count__50937_50969 = G__50981;
i__50938_50970 = G__50982;
continue;
} else {
var r_50983 = cljs.core.first(seq__50935_50977__$1);
instaparse.failure.print_reason(r_50983);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__50984 = cljs.core.next(seq__50935_50977__$1);
var G__50985 = null;
var G__50986 = (0);
var G__50987 = (0);
seq__50935_50967 = G__50984;
chunk__50936_50968 = G__50985;
count__50937_50969 = G__50986;
i__50938_50970 = G__50987;
continue;
}
} else {
}
}
break;
}

var seq__50952 = cljs.core.seq(partial_reasons);
var chunk__50953 = null;
var count__50954 = (0);
var i__50955 = (0);
while(true){
if((i__50955 < count__50954)){
var r = chunk__50953.cljs$core$IIndexed$_nth$arity$2(null,i__50955);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__50988 = seq__50952;
var G__50989 = chunk__50953;
var G__50990 = count__50954;
var G__50991 = (i__50955 + (1));
seq__50952 = G__50988;
chunk__50953 = G__50989;
count__50954 = G__50990;
i__50955 = G__50991;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50952);
if(temp__5753__auto__){
var seq__50952__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50952__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__50952__$1);
var G__50992 = cljs.core.chunk_rest(seq__50952__$1);
var G__50993 = c__4679__auto__;
var G__50994 = cljs.core.count(c__4679__auto__);
var G__50995 = (0);
seq__50952 = G__50992;
chunk__50953 = G__50993;
count__50954 = G__50994;
i__50955 = G__50995;
continue;
} else {
var r = cljs.core.first(seq__50952__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__50996 = cljs.core.next(seq__50952__$1);
var G__50997 = null;
var G__50998 = (0);
var G__50999 = (0);
seq__50952 = G__50996;
chunk__50953 = G__50997;
count__50954 = G__50998;
i__50955 = G__50999;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=instaparse.failure.js.map
