webpackJsonp([71,43],{2:function(e,n){e.exports=function(e,n,t,o){var r,c=e=e||{},u=typeof e["default"];"object"!==u&&"function"!==u||(r=e,c=e["default"]);var a="function"==typeof c?c.options:c;if(n&&(a.render=n.render,a.staticRenderFns=n.staticRenderFns),t&&(a._scopeId=t),o){var s=Object.create(a.computed||null);Object.keys(o).forEach(function(e){var n=o[e];s[e]=function(){return n}}),a.computed=s}return{esModule:r,exports:c,options:a}}},431:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]={data:function(){return{model:1}},methods:{onChange:function(e){console.log(e)}}},e.exports=n["default"]},1033:function(e,n,t){var o=t(2)(t(431),t(1069),null,null);e.exports=o.exports},1069:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-pagination",{attrs:{total:50},on:{onChange:e.onChange},model:{value:e.model,callback:function(n){e.model=n},expression:"model"}})},staticRenderFns:[]}}});