goog.provide('yenoh');
yenoh.parse_select = instaparse.core.parser.cljs$core$IFn$_invoke$arity$variadic("\n    select                := <'SELECT'> set_quantifier? select_list table_expr\n    set_quantifier        := 'ALL' | 'DISTINCT'\n\n    select_list           := '*' | ( select_sublist (<comma> select_sublist)* )\n      <select_sublist>      := derived_column | qualifier '.' '*'\n      derived_column        := column_ref as_clause?\n\n      <as_clause>           := 'AS'? column_name\n\n      column_ref            := (qualifier '.')? column_name\n      column_name           := identifier\n\n\n    table_expr            := from_clause\n      from_clause           := 'FROM' table_ref (comma table_ref)*\n      table_ref             := table_name correlation_spec? | joined_table\n\n      correlation_spec      := 'AS'? identifier\n\n      (* qualified join only *)\n      joined_table          := table_ref join_type? <'JOIN'> table_ref join_spec?\n      join_type           := 'INNER' | ('LEFT' | 'RIGHT' | 'FULL') 'OUTER'?\n\n      (* 'USING' is not supported' *)\n      join_spec             := <'ON'> boolean_term\n\n      table_name            := identifier\n\n    <boolean_term>        := boolean_factor\n      <boolean_factor>        := 'NOT'? predicate\n\n      <predicate>           := comparison_pred\n      (*                     | between_pred\n                             | in_pred\n                             | like_pred\n                             | null_pred\n                             | exists_pred\n      *)\n      <comparison_pred>     := value_expr comp_op value_expr\n      <comp_op>             := '=' | '<>' | '<' | '>' | '<=' | '>='\n\n    (* \uAC1C\uBBF8\uC9C0\uC625\uC774\uB2E4... *)\n    value_expr           := numeric_value_expr  | string_value_expr\n\n      <numeric_value_expr>    := #\"\\d+\"\n      <string_value_expr>     := character_value_expr\n\n      <character_value_expr>  := value_expr_primary\n\n      <value_expr_primary>    := column_ref\n\n\n    <qualifier>           := table_name\n    (* regular identifier *)\n    <identifier>          := #\"[a-zA-Z_]+\"\n\n    <comma>               := ','\n    ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"string-ci","string-ci",374631805),true,new cljs.core.Keyword(null,"auto-whitespace","auto-whitespace",741152317),new cljs.core.Keyword(null,"standard","standard",-1769206695)], 0));
yenoh.honey__GT_ast = (function yenoh$honey__GT_ast(q){
var sql = cljs.core.first(honey.sql.format.cljs$core$IFn$_invoke$arity$1(q));
return (yenoh.parse_select.cljs$core$IFn$_invoke$arity$1 ? yenoh.parse_select.cljs$core$IFn$_invoke$arity$1(sql) : yenoh.parse_select.call(null,sql));
});
yenoh.honey__GT_sql = (function yenoh$honey__GT_sql(honey__$1){
var sql = honey.sql.format.cljs$core$IFn$_invoke$arity$2(honey__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pretty","pretty",-1916372486),true], null));
return clojure.string.trim(cljs.core.first(sql));
});
if((typeof yenoh !== 'undefined') && (typeof yenoh.emit !== 'undefined')){
} else {
yenoh.emit = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__42897 = cljs.core.get_global_hierarchy;
return (fexpr__42897.cljs$core$IFn$_invoke$arity$0 ? fexpr__42897.cljs$core$IFn$_invoke$arity$0() : fexpr__42897.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("yenoh","emit"),cljs.core.first,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
yenoh.emit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"select","select",1147833503),(function (p__42898){
var vec__42899 = p__42898;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42899,(0),null);
var select_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42899,(1),null);
var tables = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42899,(2),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,select_list,tables);
}));
yenoh.emit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"select_list","select_list",-1123258740),(function (p__42902){
var vec__42903 = p__42902;
var seq__42904 = cljs.core.seq(vec__42903);
var first__42905 = cljs.core.first(seq__42904);
var seq__42904__$1 = cljs.core.next(seq__42904);
var _ = first__42905;
var args = seq__42904__$1;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"select","select",1147833503),cljs.core.vec(args)], null);
}));
yenoh.emit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"derived_column","derived_column",-42761609),(function (p__42906){
var vec__42907 = p__42906;
var seq__42908 = cljs.core.seq(vec__42907);
var first__42909 = cljs.core.first(seq__42908);
var seq__42908__$1 = cljs.core.next(seq__42908);
var _ = first__42909;
var args = seq__42908__$1;
var G__42910 = cljs.core.count(args);
switch (G__42910) {
case (1):
return cljs.core.first(args);

break;
case (3):
var vec__42911 = args;
var cn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42911,(0),null);
var _as = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42911,(1),null);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42911,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cn,alias], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42910)].join('')));

}
}));
yenoh.emit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"column_name","column_name",-2050217542),(function (p__42914){
var vec__42915 = p__42914;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42915,(0),null);
var cn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42915,(1),null);
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cn);
}));
yenoh.emit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"column_ref","column_ref",-2034245957),(function (p__42918){
var vec__42919 = p__42918;
var seq__42920 = cljs.core.seq(vec__42919);
var first__42921 = cljs.core.first(seq__42920);
var seq__42920__$1 = cljs.core.next(seq__42920);
var _ = first__42921;
var args = seq__42920__$1;
var G__42922 = cljs.core.count(args);
switch (G__42922) {
case (1):
return cljs.core.first(args);

break;
case (3):
var vec__42923 = args;
var tn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42923,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42923,(1),null);
var cn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42923,(2),null);
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(tn),".",cljs.core.name(cn)].join(''));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42922)].join('')));

}
}));
yenoh.emit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"join_spec","join_spec",1766922672),(function (p__42926){
var vec__42927 = p__42926;
var seq__42928 = cljs.core.seq(vec__42927);
var first__42929 = cljs.core.first(seq__42928);
var seq__42928__$1 = cljs.core.next(seq__42928);
var _ = first__42929;
var args = seq__42928__$1;
var vec__42930 = args;
var vec__42933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42930,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42933,(0),null);
var lhs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42933,(1),null);
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42930,(1),null);
var vec__42936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42930,(2),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42936,(0),null);
var rhs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42936,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__42939 = op;
switch (G__42939) {
case "=":
return new cljs.core.Keyword(null,"=","=",1152933628);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42939)].join('')));

}
})(),lhs,rhs], null);
}));
yenoh.emit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"joined_table","joined_table",396289510),(function (p__42940){
var vec__42941 = p__42940;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42941,(0),null);
var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42941,(1),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42941,(2),null);
var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42941,(3),null);
var spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42941,(4),null);
var join_type = (function (){var G__42944 = cljs.core.second(type);
switch (G__42944) {
case "INNER":
return new cljs.core.Keyword(null,"join","join",-758861890);

break;
case "LEFT":
return new cljs.core.Keyword(null,"left-join","left-join",-672831855);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42944)].join('')));

}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [join_type,t1,t2,spec], null);
}));
yenoh.emit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"correlation_spec","correlation_spec",-1694050425),(function (p__42945){
var vec__42946 = p__42945;
var seq__42947 = cljs.core.seq(vec__42946);
var first__42948 = cljs.core.first(seq__42947);
var seq__42947__$1 = cljs.core.next(seq__42947);
var _ = first__42948;
var args = seq__42947__$1;
var G__42949 = cljs.core.count(args);
switch (G__42949) {
case (1):
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args));

break;
case (2):
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.second(args));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42949)].join('')));

}
}));
yenoh.emit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"table_name","table_name",341982395),(function (p__42950){
var vec__42951 = p__42950;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42951,(0),null);
var tn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42951,(1),null);
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(tn);
}));
yenoh.emit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"table_ref","table_ref",-1443757587),(function (p__42954){
var vec__42955 = p__42954;
var seq__42956 = cljs.core.seq(vec__42955);
var first__42957 = cljs.core.first(seq__42956);
var seq__42956__$1 = cljs.core.next(seq__42956);
var _ = first__42957;
var args = seq__42956__$1;
return cljs.core.vec(args);
}));
yenoh.flatten_joins = (function yenoh$flatten_joins(node){
while(true){
if((node instanceof cljs.core.Keyword)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null)], null);
} else {
if(cljs.core.vector_QMARK_(node)){
var G__42958 = cljs.core.count(node);
switch (G__42958) {
case (1):
var G__42991 = cljs.core.first(node);
node = G__42991;
continue;

break;
case (2):
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null)], null);

break;
case (4):
var vec__42959 = node;
var join_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42959,(0),null);
var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42959,(1),null);
var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42959,(2),null);
var join_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42959,(3),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$5((yenoh.flatten_joins.cljs$core$IFn$_invoke$arity$1 ? yenoh.flatten_joins.cljs$core$IFn$_invoke$arity$1(t1) : yenoh.flatten_joins.call(null,t1)),join_type,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),t2,join_spec);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42958)].join('')));

}
} else {
return null;
}
}
break;
}
});
yenoh.emit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"from_clause","from_clause",761041880),(function (p__42962){
var vec__42963 = p__42962;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42963,(0),null);
var _from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42963,(1),null);
var tables = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42963,(2),null);
return yenoh.flatten_joins(tables);
}));
yenoh.emit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"table_expr","table_expr",-821698691),(function (p__42966){
var vec__42967 = p__42966;
var seq__42968 = cljs.core.seq(vec__42967);
var first__42969 = cljs.core.first(seq__42968);
var seq__42968__$1 = cljs.core.next(seq__42968);
var _ = first__42969;
var args = seq__42968__$1;
return args;
}));
yenoh.emit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (node){
var vec__42970 = node;
var seq__42971 = cljs.core.seq(vec__42970);
var first__42972 = cljs.core.first(seq__42971);
var seq__42971__$1 = cljs.core.next(seq__42971);
var tag = first__42972;
var args = seq__42971__$1;
if(cljs.core.truth_((function (){var fexpr__42973 = cljs.core.PersistentHashSet.EMPTY;
return (fexpr__42973.cljs$core$IFn$_invoke$arity$1 ? fexpr__42973.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__42973.call(null,tag));
})())){
return args;
} else {
return node;
}
}));
yenoh.ast__GT_honey = (function yenoh$ast__GT_honey(ast){
return clojure.walk.postwalk((function (v){
if(cljs.core.vector_QMARK_(v)){
return yenoh.emit.cljs$core$IFn$_invoke$arity$1(v);
} else {
return v;
}
}),ast);
});

//# sourceMappingURL=yenoh.js.map
