webpackJsonp([153,91],{1:function(e,n){e.exports=function(e,n,t,o){var i,s=e=e||{},c=typeof e["default"];"object"!==c&&"function"!==c||(i=e,s=e["default"]);var r="function"==typeof s?s.options:s;if(n&&(r.render=n.render,r.staticRenderFns=n.staticRenderFns),t&&(r._scopeId=t),o){var a=Object.create(r.computed||null);Object.keys(o).forEach(function(e){var n=o[e];a[e]=function(){return n}}),r.computed=a}return{esModule:i,exports:s,options:r}}},369:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]={data:function(){return{visible:!1}},methods:{showModal:function(){this.visible=!0},onOk:function(e){this.visible=!1},onCancel:function(e){this.visible=!1}}},e.exports=n["default"]},1179:function(e,n,t){var o=t(1)(t(369),t(1272),null,null);e.exports=o.exports},1272:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("v-button",{attrs:{type:"primary"},nativeOn:{click:function(n){e.showModal(n)}}},[e._v("Open a modal dialog")]),t("v-modal",{attrs:{title:"Basic Modal"},on:{onOk:e.onOk,onCancel:e.onCancel},model:{value:e.visible,callback:function(n){e.visible=n},expression:"visible"}},[t("p",[e._v("some contents...")]),t("p",[e._v("some contents...")]),t("p",[e._v("some contents...")])])],1)},staticRenderFns:[]}}});