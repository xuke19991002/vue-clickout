webpackJsonp([0],[,function(e,t,n){function r(e){n(10)}var o=n(3)(n(7),n(16),r,null,null);e.exports=o.exports},,,function(e,t,n){!function(t,n){e.exports=n()}(0,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function r(e){return void 0!==e.componentInstance&&e.componentInstance.$isServer}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"clickout",function(){return i});/**
  * vue-clickout
  * (c) 2018 shijianan
  * @license MIT
  */
var o={},i={bind:function(e,t,n){function o(t){var r=e.contains(t.target);if(i&&i.length)for(var o=0;o<i.length;o++){var a=n.context.$refs[i[o]];if(!a)break;if(a.contains(t.target)){r=!0;break}}if(!r){var c=new Event("clickout");e.dispatchEvent(c)}}var i=t.value;e.data={handler:o},!r(n)&&document.addEventListener("click",o)},unbind:function(e,t,n){!r(n)&&document.removeEventListener("click",e.data.handler),delete e.data}};o.install=function(e,t){e.directive("clickout",i)},"undefined"!=typeof window&&window.Vue&&window.Vue.use(o),t.default=o}])})},function(e,t,n){"use strict";var r=n(2),o=n(17),i=n(1),a=n.n(i);r.a.use(o.a),t.a=new o.a({routes:[{path:"",name:"App",component:a.a}]})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=n(1),i=n.n(o),a=n(5),c=n(4).default;r.a.config.productionTip=!1,r.a.use(c),new r.a({el:"#app",router:a.a,template:"<App/>",components:{App:i.a}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(14),o=n.n(r);t.default={name:"app",components:{commentItem:o.a}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{showReply:!1}}}},function(e,t){},function(e,t){},,,,function(e,t,n){function r(e){n(9)}var o=n(3)(n(8),n(15),r,null,null);e.exports=o.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"item-comment"},[n("div",{staticClass:"comment-user"},[n("span",{staticClass:"user-name"},[e._v("疯狂的迷弟: ")]),e._v(" "),n("p",{staticClass:"text-comment"},[e._v("王祖贤越看越美")]),e._v(" "),n("a",{ref:"replyBtnRef",staticClass:"reply-btn",attrs:{href:"javascript:;"},on:{click:function(t){e.showReply=!e.showReply}}},[e._v("回复")])]),e._v(" "),n("div",{directives:[{name:"clickout",rawName:"v-clickout",value:["replyBtnRef"],expression:"['replyBtnRef']"}],staticClass:"reply",on:{clickout:function(t){e.showReply=!1}}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.showReply,expression:"showReply"}],staticClass:"reply-area"},[n("input",{staticClass:"ipt-reply",attrs:{type:"text"}}),e._v(" "),e._m(0)])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"reply-option"},[n("button",[e._v("发送")])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("p",[e._v("评论列表中的回复框是互斥的，且点击空白处消失")]),e._v(" "),e._l(5,function(e,t){return n("comment-item",{key:t})})],2)},staticRenderFns:[]}}],[6]);
//# sourceMappingURL=app.a9b3c4b5a878ec2640e8.js.map