(this["webpackJsonplinguagens-de-programacao"]=this["webpackJsonplinguagens-de-programacao"]||[]).push([[75],{124:function(n,I,_){!function(n){"use strict";n.defineMode("ntriples",(function(){var n={PRE_SUBJECT:0,WRITING_SUB_URI:1,WRITING_BNODE_URI:2,PRE_PRED:3,WRITING_PRED_URI:4,PRE_OBJ:5,WRITING_OBJ_URI:6,WRITING_OBJ_BNODE:7,WRITING_OBJ_LITERAL:8,WRITING_LIT_LANG:9,WRITING_LIT_TYPE:10,POST_OBJ:11,ERROR:12};function I(I,_){var R,e=I.location;R=e==n.PRE_SUBJECT&&"<"==_?n.WRITING_SUB_URI:e==n.PRE_SUBJECT&&"_"==_?n.WRITING_BNODE_URI:e==n.PRE_PRED&&"<"==_?n.WRITING_PRED_URI:e==n.PRE_OBJ&&"<"==_?n.WRITING_OBJ_URI:e==n.PRE_OBJ&&"_"==_?n.WRITING_OBJ_BNODE:e==n.PRE_OBJ&&'"'==_?n.WRITING_OBJ_LITERAL:e==n.WRITING_SUB_URI&&">"==_||e==n.WRITING_BNODE_URI&&" "==_?n.PRE_PRED:e==n.WRITING_PRED_URI&&">"==_?n.PRE_OBJ:e==n.WRITING_OBJ_URI&&">"==_||e==n.WRITING_OBJ_BNODE&&" "==_||e==n.WRITING_OBJ_LITERAL&&'"'==_||e==n.WRITING_LIT_LANG&&" "==_||e==n.WRITING_LIT_TYPE&&">"==_?n.POST_OBJ:e==n.WRITING_OBJ_LITERAL&&"@"==_?n.WRITING_LIT_LANG:e==n.WRITING_OBJ_LITERAL&&"^"==_?n.WRITING_LIT_TYPE:" "!=_||e!=n.PRE_SUBJECT&&e!=n.PRE_PRED&&e!=n.PRE_OBJ&&e!=n.POST_OBJ?e==n.POST_OBJ&&"."==_?n.PRE_SUBJECT:n.ERROR:e,I.location=R}return{startState:function(){return{location:n.PRE_SUBJECT,uris:[],anchors:[],bnodes:[],langs:[],types:[]}},token:function(n,_){var R=n.next();if("<"==R){I(_,R);var e="";return n.eatWhile((function(n){return"#"!=n&&">"!=n&&(e+=n,!0)})),_.uris.push(e),n.match("#",!1)||(n.next(),I(_,">")),"variable"}if("#"==R){var t="";return n.eatWhile((function(n){return">"!=n&&" "!=n&&(t+=n,!0)})),_.anchors.push(t),"variable-2"}if(">"==R)return I(_,">"),"variable";if("_"==R){I(_,R);var r="";return n.eatWhile((function(n){return" "!=n&&(r+=n,!0)})),_.bnodes.push(r),n.next(),I(_," "),"builtin"}if('"'==R)return I(_,R),n.eatWhile((function(n){return'"'!=n})),n.next(),"@"!=n.peek()&&"^"!=n.peek()&&I(_,'"'),"string";if("@"==R){I(_,"@");var i="";return n.eatWhile((function(n){return" "!=n&&(i+=n,!0)})),_.langs.push(i),n.next(),I(_," "),"string-2"}if("^"==R){n.next(),I(_,"^");var T="";return n.eatWhile((function(n){return">"!=n&&(T+=n,!0)})),_.types.push(T),n.next(),I(_,">"),"variable"}" "==R&&I(_,R),"."==R&&I(_,R)}}})),n.defineMIME("application/n-triples","ntriples"),n.defineMIME("application/n-quads","ntriples"),n.defineMIME("text/n-triples","ntriples")}(_(9))}}]);
//# sourceMappingURL=75.b1c59e8d.chunk.js.map