webpackJsonp([6,91],{547:function(n,s,a){n.exports={content:{"zh-CN":[["p","\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002"]],"en-US":[["p","The simplest usage that close the notification box after 4.5s."]]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/notification/demo/basic.md",id:"components-notification-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">@click.native</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>openNotification<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Display normal message<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span>\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    methods<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      <span class="token function">openNotification</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>$notification<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          message<span class="token punctuation">:</span> <span class="token string">\'Notification Title\'</span><span class="token punctuation">,</span>\n          description<span class="token punctuation">:</span> <span class="token string">\'This is the content of the notification. This is the content of the notification. This is the content of the notification.\'</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n',preview:function(){return new Promise(function(n){a.e(149,function(s){n(a(1184))})})}}},548:function(n,s,a){n.exports={content:{"zh-CN":[["p","\u56fe\u6807\u53ef\u4ee5\u88ab\u81ea\u5b9a\u4e49\u3002"]],"en-US":[["p","The icon can be customized to any react node."]]},meta:{order:4,title:{"zh-CN":"\u81ea\u5b9a\u4e49\u56fe\u6807","en-US":"Customized Icon"},filename:"components/notification/demo/custom-icon.md",id:"components-notification-demo-custom-icon"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">@click.native</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>openNotification<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Display normal message<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span>\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    methods<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      <span class="token function">openNotification</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">var</span> h <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$createElement\n\n        <span class="token keyword">this</span><span class="token punctuation">.</span>$notification<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          icon<span class="token punctuation">:</span> <span class="token function">h</span><span class="token punctuation">(</span>\n            <span class="token string">"v-icon"</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>\n              attrs<span class="token punctuation">:</span> <span class="token punctuation">{</span> type<span class="token punctuation">:</span> <span class="token string">"smile-circle"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n              style<span class="token punctuation">:</span> <span class="token string">"color: rgb(16, 142, 233);"</span>\n            <span class="token punctuation">}</span>\n          <span class="token punctuation">)</span><span class="token punctuation">,</span>\n          message<span class="token punctuation">:</span> <span class="token string">\'Notification Title\'</span><span class="token punctuation">,</span>\n          description<span class="token punctuation">:</span> <span class="token string">\'This is the content of the notification. This is the content of the notification. This is the content of the notification.\'</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n',preview:function(){return new Promise(function(n){a.e(148,function(s){n(a(1185))})})}}},549:function(n,s,a){n.exports={content:{"zh-CN":[["p","\u81ea\u5b9a\u4e49\u901a\u77e5\u6846\u81ea\u52a8\u5173\u95ed\u7684\u5ef6\u65f6\uff0c\u9ed8\u8ba4",["code","4.5s"],"\uff0c\u53d6\u6d88\u81ea\u52a8\u5173\u95ed\u53ea\u8981\u5c06\u8be5\u503c\u8bbe\u4e3a ",["code","0"]," \u5373\u53ef\u3002"]],"en-US":[["p",["code","Duration"]," can be used to specify how long the notification stays open. After the duration time elapses,\nthe notification closes automatically. If not specified, default value is 4.5 seconds. If you set the value to 0,\nthe notification box will never close automatically."]]},meta:{order:1,title:{"zh-CN":"\u81ea\u52a8\u5173\u95ed\u7684\u5ef6\u65f6","en-US":"Duration after which the notification box is closed"},filename:"components/notification/demo/duration.md",id:"components-notification-demo-duration"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">@click.native</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>openNotification<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Display normal message<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span>\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    methods<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      <span class="token function">openNotification</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>$notification<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          message<span class="token punctuation">:</span> <span class="token string">\'Notification Title\'</span><span class="token punctuation">,</span>\n          description<span class="token punctuation">:</span> <span class="token string">\'I will never close automatically. I will be close automatically. I will never close automatically.\'</span><span class="token punctuation">,</span>\n          duration<span class="token punctuation">:</span> <span class="token number">0</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n',preview:function(){return new Promise(function(n){a.e(147,function(s){n(a(1186))})})}}},550:function(n,s,a){n.exports={content:{"zh-CN":[["p","\u53ef\u4ee5\u8bbe\u7f6e\u901a\u77e5\u4ece\u53f3\u4e0a\u89d2\u3001\u53f3\u4e0b\u89d2\u3001\u5de6\u4e0b\u89d2\u3001\u5de6\u4e0a\u89d2\u5f39\u51fa\u3002"]],"en-US":[["p","A notification box can pop up from ",["code","topRight"]," or ",["code","bottomRight"]," or ",["code","bottomLeft"]," or ",["code","topLeft"],"."]]},meta:{order:5,title:{"zh-CN":"\u4f4d\u7f6e","en-US":"Placement"},filename:"components/notification/demo/placement.md",id:"components-notification-demo-placement"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-select</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>selectValue<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">120</span>px<span class="token punctuation">;</span> <span class="token property">margin-right</span><span class="token punctuation">:</span> <span class="token number">10</span>px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span> <span class="token attr-name">@onChange</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>onChange<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-option</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>option</span> <span class="token attr-name">in</span> <span class="token attr-name">options"</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>option<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token punctuation">{</span>option<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-option</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-select</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">@click.native</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>openNotification<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Display normal message<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span>\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        selectValue<span class="token punctuation">:</span> <span class="token string">\'topRight\'</span><span class="token punctuation">,</span>\n        options<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'topLeft\'</span><span class="token punctuation">,</span> <span class="token string">\'topRight\'</span><span class="token punctuation">,</span> <span class="token string">\'bottomLeft\'</span><span class="token punctuation">,</span> <span class="token string">\'bottomRight\'</span><span class="token punctuation">]</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    methods<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      <span class="token function">onChange</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>$notification<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          placement<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>selectValue\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n      <span class="token function">openNotification</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>$notification<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          message<span class="token punctuation">:</span> <span class="token string">\'Notification Title\'</span><span class="token punctuation">,</span>\n          description<span class="token punctuation">:</span> <span class="token string">\'This is the content of the notification. This is the content of the notification. This is the content of the notification.\'</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n',preview:function(){return new Promise(function(n){a.e(146,function(s){n(a(1187))})})}}},551:function(n,s,a){n.exports={content:{"zh-CN":[["p","\u81ea\u5b9a\u4e49\u5173\u95ed\u6309\u94ae\u7684\u6837\u5f0f\u548c\u6587\u5b57\u3002"]],"en-US":[["p","To customize the style or font of the close button."]]},meta:{order:3,title:{"zh-CN":"\u81ea\u5b9a\u4e49\u6309\u94ae","en-US":"Custom close button"},filename:"components/notification/demo/with-btn.md",id:"components-notification-demo-with-btn"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">@click.native</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>openNotification<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Display normal message<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span>\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    methods<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      <span class="token function">openNotification</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>$notification<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          message<span class="token punctuation">:</span> <span class="token string">\'Notification Title\'</span><span class="token punctuation">,</span>\n          description<span class="token punctuation">:</span> <span class="token string">\'This is the content of the notification. This is the content of the notification. This is the content of the notification.\'</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n',preview:function(){return new Promise(function(n){a.e(145,function(s){n(a(1188))})})}}},552:function(n,s,a){n.exports={content:{"zh-CN":[["p","\u901a\u77e5\u63d0\u9192\u6846\u5de6\u4fa7\u6709\u56fe\u6807\u3002"]],"en-US":[["p","A notification box with a icon at the left side."]]},meta:{order:2,title:{"zh-CN":"\u5e26\u6709\u56fe\u6807\u7684\u901a\u77e5\u63d0\u9192\u6846","en-US":"Notification with icon"},filename:"components/notification/demo/with-icon.md",id:"components-notification-demo-with-icon"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">></span></span>\n    <span class="token operator">&lt;</span>v<span class="token operator">-</span>button @click<span class="token punctuation">.</span>native<span class="token operator">=</span><span class="token string">"openNotificationWithIcon(\'success\')"</span><span class="token operator">></span>Success<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-button</span><span class="token punctuation">></span></span>\n    <span class="token operator">&lt;</span>v<span class="token operator">-</span>button @click<span class="token punctuation">.</span>native<span class="token operator">=</span><span class="token string">"openNotificationWithIcon(\'info\')"</span><span class="token operator">></span>Info<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-button</span><span class="token punctuation">></span></span>\n    <span class="token operator">&lt;</span>v<span class="token operator">-</span>button @click<span class="token punctuation">.</span>native<span class="token operator">=</span><span class="token string">"openNotificationWithIcon(\'warning\')"</span><span class="token operator">></span>Warning<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-button</span><span class="token punctuation">></span></span>\n    <span class="token operator">&lt;</span>v<span class="token operator">-</span>button @click<span class="token punctuation">.</span>native<span class="token operator">=</span><span class="token string">"openNotificationWithIcon(\'error\')"</span><span class="token operator">></span>Error<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style language-css">\n  <span class="token selector"><span class="token class">.code-box-demo</span> <span class="token class">.ant-btn</span> </span><span class="token punctuation">{</span>\n    <span class="token property">margin-right</span><span class="token punctuation">:</span> <span class="token number">1</span>em<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span>\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    methods<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      <span class="token function">openNotificationWithIcon</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>$notification<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          message<span class="token punctuation">:</span> <span class="token string">\'Notification Title\'</span><span class="token punctuation">,</span>\n          description<span class="token punctuation">:</span> <span class="token string">\'This is the content of the notification. This is the content of the notification. This is the content of the notification.\'</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n',preview:function(){return new Promise(function(n){a.e(101,function(s){n(a(1189))})})}}},650:function(n,s,a){n.exports={basic:a(547),"custom-icon":a(548),duration:a(549),placement:a(550),"with-btn":a(551),"with-icon":a(552)}}});