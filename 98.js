webpackJsonp([98,91],{1:function(t,e){t.exports=function(t,e,n,o){var r,a=t=t||{},i=typeof t["default"];"object"!==i&&"function"!==i||(r=t,a=t["default"]);var s="function"==typeof a?a.options:a;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),n&&(s._scopeId=n),o){var p=Object.create(s.computed||null);Object.keys(o).forEach(function(t){var e=o[t];p[t]=function(){return e}}),s.computed=p}return{esModule:r,exports:a,options:s}}},6:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var a=this[r][0];"number"==typeof a&&(o[a]=!0)}for(r=0;r<e.length;r++){var i=e[r];"number"==typeof i[0]&&o[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},7:function(t,e,n){function o(t){for(var e=0;e<t.length;e++){var n=t[e],o=l[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(a(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var i=[],r=0;r<n.parts.length;r++)i.push(a(n.parts[r]));l[n.id]={id:n.id,refs:1,parts:i}}}}function r(){var t=document.createElement("style");return t.type="text/css",u.appendChild(t),t}function a(t){var e,n,o=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(o){if(d)return h;o.parentNode.removeChild(o)}if(m){var a=f++;o=v||(v=r()),e=i.bind(null,o,a,!1),n=i.bind(null,o,a,!0)}else o=r(),e=s.bind(null,o),n=function(){o.parentNode.removeChild(o)};return e(t),function(o){if(o){if(o.css===t.css&&o.media===t.media&&o.sourceMap===t.sourceMap)return;e(t=o)}else n()}}function i(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=x(e,r);else{var a=document.createTextNode(r),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(a,i[e]):t.appendChild(a)}}function s(t,e){var n=e.css,o=e.media,r=e.sourceMap;if(o&&t.setAttribute("media",o),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var p="undefined"!=typeof document,c=n(8),l={},u=p&&(document.head||document.getElementsByTagName("head")[0]),v=null,f=0,d=!1,h=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){d=n;var r=c(t,e);return o(r),function(e){for(var n=[],a=0;a<r.length;a++){var i=r[a],s=l[i.id];s.refs--,n.push(s)}e?(r=c(t,e),o(r)):r=[];for(var a=0;a<n.length;a++){var s=n[a];if(0===s.refs){for(var p=0;p<s.parts.length;p++)s.parts[p]();delete l[s.id]}}}};var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},8:function(t,e){t.exports=function(t,e){for(var n=[],o={},r=0;r<e.length;r++){var a=e[r],i=a[0],s=a[1],p=a[2],c=a[3],l={id:t+":"+r,css:s,media:p,sourceMap:c};o[i]?o[i].parts.push(l):n.push(o[i]={id:i,parts:[l]})}return n}},389:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={data:function(){var t=this.$createElement;return{text:"prompt text",content:t("div",[t("p",["Content"]),t("p",["Content"])])}}},t.exports=e["default"]},906:function(t,e,n){e=t.exports=n(6)(),e.push([t.id,".code-box-demo .ant-btn{margin-right:8px;margin-bottom:8px}#components-popover-demo-placement .ant-btn{width:70px}",""])},1200:function(t,e,n){n(1372);var o=n(1)(n(389),n(1330),null,null);t.exports=o.exports},1330:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticStyle:{"margin-left":"60px"}},[n("v-popover",{ref:"popover",attrs:{placement:"topLeft",title:t.text,content:t.content}},[n("v-button",[t._v("TL")])],1),n("v-popover",{attrs:{placement:"top",title:t.text,content:t.content}},[n("v-button",[t._v("Top")])],1),n("v-popover",{attrs:{placement:"topRight",title:t.text,content:t.content}},[n("v-button",[t._v("TR")])],1)],1),n("div",{staticStyle:{width:"60px","float":"left"}},[n("v-popover",{attrs:{placement:"leftTop",title:t.text,content:t.content}},[n("v-button",[t._v("LT")])],1),n("v-popover",{attrs:{placement:"left",title:t.text,content:t.content}},[n("v-button",[t._v("Left")])],1),n("v-popover",{attrs:{placement:"leftBottom",title:t.text,content:t.content}},[n("v-button",[t._v("LB")])],1)],1),n("div",{staticStyle:{width:"60px","margin-left":"270px"}},[n("v-popover",{attrs:{placement:"rightTop",title:t.text,content:t.content}},[n("v-button",[t._v("RT")])],1),n("v-popover",{attrs:{placement:"right",title:t.text,content:t.content}},[n("v-button",[t._v("Right")])],1),n("v-popover",{attrs:{placement:"rightBottom",title:t.text,content:t.content}},[n("v-button",[t._v("RB")])],1)],1),n("div",{staticStyle:{"margin-left":"60px",clear:"both"}},[n("v-popover",{attrs:{placement:"bottomLeft",title:t.text,content:t.content}},[n("v-button",[t._v("BL")])],1),n("v-popover",{attrs:{placement:"bottom",title:t.text,content:t.content}},[n("v-button",[t._v("Bottom")])],1),n("v-popover",{attrs:{placement:"bottomRight",title:t.text,content:t.content}},[n("v-button",[t._v("BR")])],1)],1)])},staticRenderFns:[]}},1372:function(t,e,n){var o=n(906);"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);n(7)("4fdbec9c",o,!0)}});