webpackJsonp([167,91],{1:function(t,e){t.exports=function(t,e,o,a){var s,r=t=t||{},n=typeof t["default"];"object"!==n&&"function"!==n||(s=t,r=t["default"]);var l="function"==typeof r?r.options:r;if(e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns),o&&(l._scopeId=o),a){var c=Object.create(l.computed||null);Object.keys(a).forEach(function(t){var e=a[t];c[t]=function(){return e}}),l.computed=c}return{esModule:s,exports:r,options:l}}},354:function(t,e,o){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=o(79),r=a(s);e["default"]={components:{DemoBox:{props:{value:String},render:function(t){return t("p",{"class":(0,r["default"])({},"height-"+this.value,this.value)},this.$slots["default"])}}}},t.exports=e["default"]},1154:function(t,e,o){var a=o(1)(o(354),o(1323),null,null);t.exports=a.exports},1323:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("p",[t._v("Align Top")]),o("v-row",{attrs:{type:"flex",justify:"center",align:"top"}},[o("v-col",{attrs:{span:4}},[o("demo-box",{attrs:{value:"100"}},[t._v("col-4")])],1),o("v-col",{attrs:{span:4}},[o("demo-box",{attrs:{value:"50"}},[t._v("col-4")])],1),o("v-col",{attrs:{span:4}},[o("demo-box",{attrs:{value:"120"}},[t._v("col-4")])],1),o("v-col",{attrs:{span:4}},[o("demo-box",{attrs:{value:"80"}},[t._v("col-4")])],1)],1),o("p",[t._v("Align Center")]),o("v-row",{attrs:{type:"flex",justify:"space-around",align:"middle"}},[o("v-col",{attrs:{span:4}},[o("demo-box",{attrs:{value:"100"}},[t._v("col-4")])],1),o("v-col",{attrs:{span:4}},[o("demo-box",{attrs:{value:"50"}},[t._v("col-4")])],1),o("v-col",{attrs:{span:4}},[o("demo-box",{attrs:{value:"120"}},[t._v("col-4")])],1),o("v-col",{attrs:{span:4}},[o("demo-box",{attrs:{value:"80"}},[t._v("col-4")])],1)],1),o("p",[t._v("Align Bottom")]),o("v-row",{attrs:{type:"flex",justify:"space-between",align:"bottom"}},[o("v-col",{attrs:{span:4}},[o("demo-box",{attrs:{value:"100"}},[t._v("col-4")])],1),o("v-col",{attrs:{span:4}},[o("demo-box",{attrs:{value:"50"}},[t._v("col-4")])],1),o("v-col",{attrs:{span:4}},[o("demo-box",{attrs:{value:"120"}},[t._v("col-4")])],1),o("v-col",{attrs:{span:4}},[o("demo-box",{attrs:{value:"80"}},[t._v("col-4")])],1)],1)],1)},staticRenderFns:[]}}});