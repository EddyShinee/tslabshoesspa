(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{37:function(e,t,a){"use strict";var n,p=function(){var e={};return function(t){if(void 0===e[t]){var a=document.querySelector(t);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}e[t]=a}return e[t]}}(),i=[];function c(e){for(var t=-1,a=0;a<i.length;a++)if(i[a].identifier===e){t=a;break}return t}function s(e,t){for(var a={},n=[],p=0;p<e.length;p++){var s=e[p],r=t.base?s[0]+t.base:s[0],o=a[r]||0,l="".concat(r," ").concat(o);a[r]=o+1;var u=c(l),f={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:l,updater:h(f,t),references:1}),n.push(l)}return n}function r(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var i=a.nc;i&&(n.nonce=i)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var c=p(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var o,l=(o=[],function(e,t){return o[e]=t,o.filter(Boolean).join("\n")});function u(e,t,a,n){var p=a?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=l(t,p);else{var i=document.createTextNode(p),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(i,c[t]):e.appendChild(i)}}function f(e,t,a){var n=a.css,p=a.media,i=a.sourceMap;if(p?e.setAttribute("media",p):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var d=null,w=0;function h(e,t){var a,n,p;if(t.singleton){var i=w++;a=d||(d=r(t)),n=u.bind(null,a,i,!1),p=u.bind(null,a,i,!0)}else a=r(t),n=f.bind(null,a,t),p=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(a)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else p()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var a=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<a.length;n++){var p=c(a[n]);i[p].references--}for(var r=s(e,t),o=0;o<a.length;o++){var l=c(a[o]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}a=r}}}},38:function(e,t,a){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var a=function(e,t){var a,n,p,i=e[1]||"",c=e[3];if(!c)return i;if(t&&"function"==typeof btoa){var s=(a=c,n=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),p="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n),"/*# ".concat(p," */")),r=c.sources.map((function(e){return"/*# sourceURL=".concat(c.sourceRoot||"").concat(e," */")}));return[i].concat(r).concat([s]).join("\n")}return[i].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(a,"}"):a})).join("")},t.i=function(e,a,n){"string"==typeof e&&(e=[[null,e,""]]);var p={};if(n)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(p[c]=!0)}for(var s=0;s<e.length;s++){var r=[].concat(e[s]);n&&p[r[0]]||(a&&(r[2]?r[2]="".concat(a," and ").concat(r[2]):r[2]=a),t.push(r))}},t}},74:function(e,t,a){(t=a(38)(!1)).push([e.i,'.wpsp-faq-layout-accordion .wpsp-faq-child__outer-wrap .wpsp-faq-questions-button {\n  cursor: pointer; }\n\n[data-type="wpsp/faq-child"] .wpsp-faq-child__outer-wrap .wpsp-faq-questions-button {\n  display: flex;\n  align-items: center;\n  width: 100%; }\n  [data-type="wpsp/faq-child"] .wpsp-faq-child__outer-wrap .wpsp-faq-questions-button .wpsp-faq-icon-wrap {\n    display: inline-block;\n    vertical-align: middle; }\n  [data-type="wpsp/faq-child"] .wpsp-faq-child__outer-wrap .wpsp-faq-questions-button .wpsp-question {\n    width: 100%;\n    margin-top: 0;\n    margin-bottom: 0; }\n\n[data-type="wpsp/faq-child"] .wpsp-faq-child__outer-wrap .wpsp-faq-content p {\n  margin: 0; }\n\n[data-type="wpsp/faq-child"] .wpsp-faq-child__outer-wrap .wpsp-faq-content {\n  border-width: 0; }\n  [data-type="wpsp/faq-child"] .wpsp-faq-child__outer-wrap .wpsp-faq-content span {\n    display: inline-block; }\n\n[data-type="wpsp/faq-child"] .wpsp-faq-child__outer-wrap .wpsp-faq-item .wpsp-icon-active,\n[data-type="wpsp/faq-child"] .wpsp-faq-child__outer-wrap .wpsp-faq-item.wpsp-faq-item-active .wpsp-icon {\n  display: none; }\n\n[data-type="wpsp/faq-child"] .wpsp-faq-child__outer-wrap .wpsp-faq-item .wpsp-icon,\n[data-type="wpsp/faq-child"] .wpsp-faq-child__outer-wrap .wpsp-faq-item.wpsp-faq-item-active .wpsp-icon-active {\n  display: inline-block; }\n\n[data-type="wpsp/faq-child"] .wpsp-faq-child__outer-wrap.wpsp-faq__active .wpsp-faq-child__wrapper .wpsp-faq-item .wpsp-faq-content {\n  display: block; }\n\n[data-type="wpsp/faq-child"] .wpsp-faq-child__outer-wrap.wpsp-faq__active .wpsp-faq-child__wrapper .wpsp-faq-item .wpsp-icon {\n  display: none; }\n\n[data-type="wpsp/faq-child"] .wpsp-faq-child__outer-wrap.wpsp-faq__active .wpsp-faq-child__wrapper .wpsp-faq-item .wpsp-icon-active {\n  display: inline-block; }\n\n.wpsp-faq-layout-grid [data-type="wpsp/faq-child"] .wpsp-faq-child__outer-wrap.wpsp-faq__active .wpsp-faq-child__wrapper .wpsp-faq-item .wpsp-icon-active {\n  display: none; }\n\n.wpsp-faq-layout-grid [data-type="wpsp/faq-child"] .wpsp-faq-child__outer-wrap.wpsp-faq__active .wpsp-faq-child__wrapper .wpsp-faq-item .wpsp-icon {\n  display: none; }\n\n.wpsp-faq-layout-grid [data-type="wpsp/faq-child"] .wpsp-faq-child__outer-wrap .wpsp-faq-item .wpsp-icon,\n.wpsp-faq-layout-grid [data-type="wpsp/faq-child"] .wpsp-faq-child__outer-wrap .wpsp-faq-item.wpsp-faq-item-active .wpsp-icon-active {\n  display: none; }\n',""]),e.exports=t},84:function(e,t,a){"use strict";a.r(t);var n,p=a(0),i=a(4),c=a.n(i),s=a(3),r=a.n(s),o=a(10),l=a(1),u=a(7),f=a(2),d=a(37),w=a.n(d),h=a(74),q=a.n(h),m=0,v={injectType:"lazySingletonStyleTag",attributes:{id:"wpsp-editor-styles"},insert:"head",singleton:!0},_={};_.locals=q.a.locals||{},_.use=function(){return m++||(n=w()(q.a,v)),_},_.unuse=function(){m>0&&!--m&&(n(),n=null)};var b=_;t.default=r.a.memo((function(e,t){Object(s.useLayoutEffect)((function(){return b.use(),function(){b.unuse()}}),[]);var a=e=e.parentProps,n=a.attributes,i=a.setAttributes,r=n.question,d=n.answer,w=n.icon,h=n.iconActive,q=n.layout,m=n.headingTag;return Object(p.createElement)("div",{className:c()("wpsp-faq-child__outer-wrap","wpsp-block-".concat(e.clientId.substr(0,8)),e.isSelected&&!1!==t.isFocused?"wpsp-faq__active":"")},Object(p.createElement)(s.Suspense,{fallback:Object(u.a)()},Object(p.createElement)("div",{className:"wpsp-faq-child__wrapper"},Object(p.createElement)("div",{className:"wpsp-faq-item",role:"tab",tabIndex:"0"},Object(p.createElement)("div",{className:"wpsp-faq-questions-button wpsp-faq-questions"},"accordion"===q&&Object(p.createElement)(p.Fragment,null,Object(p.createElement)("span",{className:"wpsp-icon wpsp-faq-icon-wrap"},Object(o.a)(w)),Object(p.createElement)("span",{className:"wpsp-icon-active wpsp-faq-icon-wrap"},Object(o.a)(h))),Object(p.createElement)(f.RichText,{tagName:"span"!==m?m:"div",placeholder:Object(l.__)("Question"),value:r,onChange:function(e){return i({question:e})},className:"wpsp-question",multiline:!1,allowedFormats:["core/bold","core/italic","core/strikethrough"]})),Object(p.createElement)("div",{className:"wpsp-faq-content"},Object(p.createElement)("span",null,Object(p.createElement)(f.RichText,{tagName:"p",placeholder:Object(l.__)("Answer"),value:d,onChange:function(e){return i({answer:e})},multiline:!1,allowedFormats:["core/bold","core/italic","core/strikethrough","core/link"]})))))))}))}}]);