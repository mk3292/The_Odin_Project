(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),o=n.n(r),a=n(645),c=n.n(a)()(o());c.push([e.id,"body {\n    background-color: lightblue;\n    margin: 0px;\n    padding: 0px;\n}\n\n#content {\n    /* display: flex; */\n    min-height: 100vh;\n    /* justify-content: center; */\n    text-align: center;\n}\n\n.image {\n    margin: 25px;\n}\n\n.landing-page-copy, .menu-copy, .contact-copy {\n    color: whitesmoke;\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    font-weight: 900;\n    font-style: italic;\n}\n\nheader {\n    background-color: lightpink;\n    height: 50px;\n}\n\nul {\n    display: flex;\n    justify-content: space-around;\n    list-style-type: none;\n    margin: 0px;\n    padding: 0px;\n    align-items: center;\n    height: 50px;\n}\n\nli {\n    display: flex;\n    height: 40px;\n    align-items: center;\n    border-radius: 5px 5px 5px 5px;\n    border-top: 1px solid black;\n    border-right: 1px solid black;\n    border-left: 1px solid black;\n    border-bottom: 1px solid black;\n    cursor: pointer;\n}",""]);const i=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&c[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],l=r.base?s[0]+r.base:s[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=n(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=o(m,r);r.byIndex=i,t.splice(i,0,{identifier:p,updater:f,references:1})}c.push(p)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var s=r(e,o),l=0;l<a.length;l++){var d=n(a[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{const e=n.p+"5553fc4da21147c969ab.jpg";function t(){const t=document.querySelector("#content");t.replaceChildren();const n=document.createElement("h1");n.textContent="Welcome to Mitch's Restaurant",n.classList.add("landing-title"),t.appendChild(n);const r=document.createElement("img");r.classList.add("image"),r.src=e,r.alt="Image of restaurant",t.appendChild(r);const o=document.createElement("p");o.classList.add("landing-page-copy"),o.textContent="This is a cool restaurant with gimbap",t.appendChild(o);const a=document.createElement("p");a.classList.add("landing-page-copy"),a.textContent="Attire requires at least shoes",t.appendChild(a);const c=document.createElement("p");c.classList.add("landing-page-copy"),c.textContent="Thanks for complying",t.appendChild(c)}const r=n.p+"abd8d8697e66db3ee502.jpg",o=n.p+"97010dabf80d8791ae05.jpg";function a(){const e=document.querySelector("#content");e.replaceChildren();const t=document.createElement("h1");t.textContent="Welcome to Mitch's Restaurant",t.classList.add("landing-title"),e.appendChild(t);const n=document.createElement("img");n.classList.add("image"),n.src=r,n.alt="Image of gimbap",e.appendChild(n);const a=document.createElement("p");a.classList.add("menu-copy"),a.textContent="Amazing gimbap",e.appendChild(a);const c=document.createElement("img");c.classList.add("image"),c.src=o,c.alt="Image of dukguk",e.appendChild(c);const i=document.createElement("p");i.classList.add("menu-copy"),i.textContent="Amazing ddukguk",e.appendChild(i)}function c(){const e=document.querySelector("#content");e.replaceChildren();const t=document.createElement("h1");t.textContent="Welcome to Mitch's Restaurant",t.classList.add("landing-title"),e.appendChild(t);const n=document.createElement("p");n.textContent="Call us at 206-555-5555",n.classList.add("contact-copy"),e.appendChild(n);const r=document.createElement("p");r.textContent="mk@gmail.com",r.classList.add("contact-copy"),e.appendChild(r)}var i=n(379),s=n.n(i),l=n(795),d=n.n(l),p=n(569),u=n.n(p),m=n(565),f=n.n(m),h=n(216),g=n.n(h),y=n(589),v=n.n(y),b=n(426),x={};x.styleTagTransform=v(),x.setAttributes=f(),x.insert=u().bind(null,"head"),x.domAPI=d(),x.insertStyleElement=g(),s()(b.Z,x),b.Z&&b.Z.locals&&b.Z.locals,console.log("Hello Ngoc!2341242"),t(),document.querySelector(".home").addEventListener("click",t),document.querySelector(".menu").addEventListener("click",a),document.querySelector(".contact").addEventListener("click",c)})()})();