(this["webpackJsonplinguagens-de-programacao"]=this["webpackJsonplinguagens-de-programacao"]||[]).push([[96],{146:function(e,t,n){!function(e){"use strict";e.defineMode("smalltalk",(function(e){var t=/[+\-\/\\*~<>=@%|&?!.,:;^]/,n=/true|false|nil|self|super|thisContext/,a=function(e,t){this.next=e,this.parent=t},i=function(e,t,n){this.name=e,this.context=t,this.eos=n},r=function(){this.context=new a(o,null),this.expectVariable=!0,this.indentation=0,this.userIndentationDelta=0};r.prototype.userIndent=function(t){this.userIndentationDelta=t>0?t/e.indentUnit-this.indentation:0};var o=function(e,r,o){var h=new i(null,r,!1),x=e.next();return'"'===x?h=s(e,new a(s,r)):"'"===x?h=u(e,new a(u,r)):"#"===x?"'"===e.peek()?(e.next(),h=c(e,new a(c,r))):e.eatWhile(/[^\s.{}\[\]()]/)?h.name="string-2":h.name="meta":"$"===x?("<"===e.next()&&(e.eatWhile(/[^\s>]/),e.next()),h.name="string-2"):"|"===x&&o.expectVariable?h.context=new a(l,r):/[\[\]{}()]/.test(x)?(h.name="bracket",h.eos=/[\[{(]/.test(x),"["===x?o.indentation++:"]"===x&&(o.indentation=Math.max(0,o.indentation-1))):t.test(x)?(e.eatWhile(t),h.name="operator",h.eos=";"!==x):/\d/.test(x)?(e.eatWhile(/[\w\d]/),h.name="number"):/[\w_]/.test(x)?(e.eatWhile(/[\w\d_]/),h.name=o.expectVariable?n.test(e.current())?"keyword":"variable":null):h.eos=o.expectVariable,h},s=function(e,t){return e.eatWhile(/[^"]/),new i("comment",e.eat('"')?t.parent:t,!0)},u=function(e,t){return e.eatWhile(/[^']/),new i("string",e.eat("'")?t.parent:t,!1)},c=function(e,t){return e.eatWhile(/[^']/),new i("string-2",e.eat("'")?t.parent:t,!1)},l=function(e,t){var n=new i(null,t,!1);return"|"===e.next()?(n.context=t.parent,n.eos=!0):(e.eatWhile(/[^|]/),n.name="variable"),n};return{startState:function(){return new r},token:function(e,t){if(t.userIndent(e.indentation()),e.eatSpace())return null;var n=t.context.next(e,t.context,t);return t.context=n.context,t.expectVariable=n.eos,n.name},blankLine:function(e){e.userIndent(0)},indent:function(t,n){var a=t.context.next===o&&n&&"]"===n.charAt(0)?-1:t.userIndentationDelta;return(t.indentation+a)*e.indentUnit},electricChars:"]"}})),e.defineMIME("text/x-stsrc",{name:"smalltalk"})}(n(9))}}]);
//# sourceMappingURL=96.1ea0c145.chunk.js.map