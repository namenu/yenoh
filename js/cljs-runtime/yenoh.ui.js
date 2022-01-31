goog.provide('yenoh.ui');
if((typeof yenoh !== 'undefined') && (typeof yenoh.ui !== 'undefined') && (typeof yenoh.ui.text !== 'undefined')){
} else {
yenoh.ui.text = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("SELECT name, address FROM users AS U");
}
yenoh.ui.app = (function yenoh$ui$app(){
var honey__$1 = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var debug = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rows","rows",850049680),(10),new cljs.core.Keyword(null,"cols","cols",-1914801295),(80),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(yenoh.ui.text),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__42975_SHARP_){
return cljs.core.reset_BANG_(yenoh.ui.text,p1__42975_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Convert to HoneySQL",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var s = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__42979_42993 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__42980_42994 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__42981_42995 = true;
var _STAR_print_fn_STAR__temp_val__42982_42996 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42981_42995);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__42982_42996);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(yenoh.ast__GT_honey((function (){var G__42983 = cljs.core.deref(yenoh.ui.text);
return (yenoh.parse_select.cljs$core$IFn$_invoke$arity$1 ? yenoh.parse_select.cljs$core$IFn$_invoke$arity$1(G__42983) : yenoh.parse_select.call(null,G__42983));
})()));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42980_42994);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42979_42993);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return cljs.core.reset_BANG_(honey__$1,s);
})], null)], null)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Convert from HoneySQL",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var hs = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(honey__$1));
var s = yenoh.honey__GT_sql(hs);
return cljs.core.reset_BANG_(yenoh.ui.text,s);
})], null)], null)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"debug",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var s = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__42986_42997 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__42987_42998 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__42988_42999 = true;
var _STAR_print_fn_STAR__temp_val__42989_43000 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42988_42999);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__42989_43000);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((function (){var G__42992 = cljs.core.deref(yenoh.ui.text);
return (yenoh.parse_select.cljs$core$IFn$_invoke$arity$1 ? yenoh.parse_select.cljs$core$IFn$_invoke$arity$1(G__42992) : yenoh.parse_select.call(null,G__42992));
})());
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42987_42998);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42986_42997);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return cljs.core.reset_BANG_(debug,s);
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rows","rows",850049680),(10),new cljs.core.Keyword(null,"cols","cols",-1914801295),(80),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(honey__$1),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__42977_SHARP_){
return cljs.core.reset_BANG_(honey__$1,p1__42977_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.deref(debug)], null)], null);
});
});
reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [yenoh.ui.app], null),document.getElementById("app"));
yenoh.ui.init = (function yenoh$ui$init(){
return null;
});

//# sourceMappingURL=yenoh.ui.js.map
