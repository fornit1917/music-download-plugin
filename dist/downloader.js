!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=38)}([function(t,e,n){"use strict";function r(t){return"[object Array]"===M.call(t)}function o(t){return"[object ArrayBuffer]"===M.call(t)}function i(t){return"undefined"!=typeof FormData&&t instanceof FormData}function a(t){var e;return e="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer}function s(t){return"string"==typeof t}function u(t){return"number"==typeof t}function c(t){return"undefined"==typeof t}function f(t){return null!==t&&"object"==typeof t}function l(t){return"[object Date]"===M.call(t)}function p(t){return"[object File]"===M.call(t)}function d(t){return"[object Blob]"===M.call(t)}function h(t){return"[object Function]"===M.call(t)}function m(t){return f(t)&&h(t.pipe)}function g(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams}function y(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}function v(){return"undefined"!=typeof window&&"undefined"!=typeof document&&"function"==typeof document.createElement}function w(t,e){if(null!==t&&"undefined"!=typeof t)if("object"==typeof t||r(t)||(t=[t]),r(t))for(var n=0,o=t.length;n<o;n++)e.call(null,t[n],n,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}function b(){function t(t,n){"object"==typeof e[n]&&"object"==typeof t?e[n]=b(e[n],t):e[n]=t}for(var e={},n=0,r=arguments.length;n<r;n++)w(arguments[n],t);return e}function T(t,e,n){return w(e,function(e,r){n&&"function"==typeof e?t[r]=x(e,n):t[r]=e}),t}var x=n(10),M=Object.prototype.toString;t.exports={isArray:r,isArrayBuffer:o,isFormData:i,isArrayBufferView:a,isString:s,isNumber:u,isObject:f,isUndefined:c,isDate:l,isFile:p,isBlob:d,isFunction:h,isStream:m,isURLSearchParams:g,isStandardBrowserEnv:v,forEach:w,merge:b,extend:T,trim:y}},function(t,e,n){"use strict";n.d(e,"b",function(){return o}),n.d(e,"a",function(){return i}),n.d(e,"c",function(){return a}),n.d(e,"e",function(){return s}),n.d(e,"d",function(){return u});var r="f1917musicdownloader",o=r+"-processed-track",i=r+"initialized",a=r+"-download-button",s=r+"-progress",u="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAyODYuMDU0IDI4Ni4wNTQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI4Ni4wNTQgMjg2LjA1NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIHN0eWxlPSJmaWxsOiM1MDcyOTk7IiBkPSJNMTQzLjAyNywwQzY0LjA0LDAsMCw2NC4wNCwwLDE0My4wMjdjMCw3OC45OTYsNjQuMDQsMTQzLjAyNywxNDMuMDI3LDE0My4wMjdzMTQzLjAyNy02NC4wMzEsMTQzLjAyNy0xNDMuMDI3QzI4Ni4wNTQsNjQuMDQ5LDIyMi4wMTQsMCwxNDMuMDI3LDB6IE0xNDMuMDI3LDI1OS4yMzZjLTY0LjE4MywwLTExNi4yMDktNTIuMDI2LTExNi4yMDktMTE2LjIwOXM1Mi4wMjYtMTE2LjIsMTE2LjIwOS0xMTYuMnMxMTYuMjA5LDUyLjAxNywxMTYuMjA5LDExNi4yUzIwNy4yMSwyNTkuMjM2LDE0My4wMjcsMjU5LjIzNnogTTE5NC43MDQsMTM0LjA4OGgtMjQuODZWODkuMzkyYzAtNC45MzQtMy45OTYtOC45MzktOC45MzktOC45MzloLTM1Ljc1N2MtNC45MzQsMC04LjkzOSw0LjAwNS04LjkzOSw4LjkzOXY0NC42OTZIOTEuMzQxYy05LjY5OSwwLTEzLjY2OCw2LjQ2My04LjgyMywxNC4zMzhsNTEuNjg2LDUxLjA5NmM0Ljg0NSw3Ljg4NCwxMi43ODMsNy44ODQsMTcuNjM3LDBsNTEuNjc3LTUxLjA5NkMyMDguMzgxLDE0MC41NTEsMjA0LjQxMiwxMzQuMDg4LDE5NC43MDQsMTM0LjA4OHoiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+"},function(t,e,n){t.exports=n(15)},function(t,e,n){"use strict";(function(e){function r(t,e){!i.isUndefined(t)&&i.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function o(){var t;return"undefined"!=typeof XMLHttpRequest?t=n(6):"undefined"!=typeof e&&(t=n(6)),t}var i=n(0),a=n(29),s=/^\)\]\}',?\n/,u={"Content-Type":"application/x-www-form-urlencoded"},c={adapter:o(),transformRequest:[function(t,e){return a(e,"Content-Type"),i.isFormData(t)||i.isArrayBuffer(t)||i.isStream(t)||i.isFile(t)||i.isBlob(t)?t:i.isArrayBufferView(t)?t.buffer:i.isURLSearchParams(t)?(r(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):i.isObject(t)?(r(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t){t=t.replace(s,"");try{t=JSON.parse(t)}catch(t){}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},i.forEach(["delete","get","head"],function(t){c.headers[t]={}}),i.forEach(["post","put","patch"],function(t){c.headers[t]=i.merge(u)}),t.exports=c}).call(e,n(35))},function(t,e,n){"use strict";function r(t){var e=t.node,n=t.url,r=t.fileName,i=t.onDownloadClick,a=t.attributes,s=t.artist,u=t.title,c=document.createElement("a");if(c.setAttribute("download",r),c.href=n,c.className=""+d.c,c.dataset.artist=s,c.dataset.title=u,c.addEventListener("click",i?i:o),a)for(var f in a)c.setAttribute(f,a[f]);e.parentNode.insertBefore(c,e)}function o(t){var e=t.target;if(t.stopPropagation(),e.dataset.noUseAjax)return!0;if(t.preventDefault(),t.target.hasAttribute("disabled"))return!1;var r=t.target.href,o=e.getAttribute("download");return i(e),p.a.request({url:r,responseType:"arraybuffer",onDownloadProgress:function(n){if(n.lengthComputable){"none"!=e.style.backgroundImage&&(e.style.backgroundImage="none",e.className+=" "+d.e);var r=Math.floor(n.loaded/n.total*100);t.target.innerHTML=r+"%"}}}).then(function(r){var i=new f.a(r.data);i.setFrame("TPE1",[e.dataset.artist]).setFrame("TIT2",e.dataset.title),i.addTag(),n.i(u.saveAs)(i.getBlob(),s(o)),a(t.target)},function(t){a(e),e.dataset.noUseAjax="1",e.click()}),!1}function i(t){t.style.opacity="0.5",t.setAttribute("disabled","")}function a(t){t.style.opacity="1",t.innerHTML="",t.style.backgroundImage="",t.removeAttribute("disabled"),t.className=t.className.replace(" "+d.e,"")}function s(t){return h.innerHTML=t,h.value}var u=n(34),c=(n.n(u),n(33)),f=n.n(c),l=n(2),p=n.n(l),d=n(1);e.a=r,e.b=o,e.c=i,e.d=a;var h=document.createElement("textarea")},function(t,e,n){"use strict";function r(t){var e=document.createElement("style");e.type="text/css",e.innerHTML=t,document.getElementsByTagName("head")[0].appendChild(e)}e.a=r,function(t){t.closest=t.closest||function(t){for(var e=this;e;){if(e.matches(t))return e;e=e.parentElement}return null}}(Element.prototype),function(){String.prototype.includes||(String.prototype.includes=function(){return String.prototype.indexOf.apply(this,arguments)!==-1})}()},function(t,e,n){"use strict";var r=n(0),o=n(21),i=n(24),a=n(30),s=n(28),u=n(9),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(23);t.exports=function(t){return new Promise(function(e,f){var l=t.data,p=t.headers;r.isFormData(l)&&delete p["Content-Type"];var d=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in d||s(t.url)||(d=new window.XDomainRequest,h="onload",m=!0,d.onprogress=function(){},d.ontimeout=function(){}),t.auth){var g=t.auth.username||"",y=t.auth.password||"";p.Authorization="Basic "+c(g+":"+y)}if(d.open(t.method.toUpperCase(),i(t.url,t.params,t.paramsSerializer),!0),d.timeout=t.timeout,d[h]=function(){if(d&&(4===d.readyState||m)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?a(d.getAllResponseHeaders()):null,r=t.responseType&&"text"!==t.responseType?d.response:d.responseText,i={data:r,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:n,config:t,request:d};o(e,f,i),d=null}},d.onerror=function(){f(u("Network Error",t)),d=null},d.ontimeout=function(){f(u("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED")),d=null},r.isStandardBrowserEnv()){var v=n(26),w=(t.withCredentials||s(t.url))&&t.xsrfCookieName?v.read(t.xsrfCookieName):void 0;w&&(p[t.xsrfHeaderName]=w)}if("setRequestHeader"in d&&r.forEach(p,function(t,e){"undefined"==typeof l&&"content-type"===e.toLowerCase()?delete p[e]:d.setRequestHeader(e,t)}),t.withCredentials&&(d.withCredentials=!0),t.responseType)try{d.responseType=t.responseType}catch(t){if("json"!==d.responseType)throw t}"function"==typeof t.onDownloadProgress&&d.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){d&&(d.abort(),f(t),d=null)}),void 0===l&&(l=null),d.send(l)})}},function(t,e,n){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},function(t,e,n){"use strict";var r=n(20);t.exports=function(t,e,n,o){var i=new Error(t);return r(i,e,n,o)}},function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},function(t,e,n){"use strict";function r(){return window.wbopen&&~(window.open+"").indexOf("wbopen")}function o(t){if(!r()&&~t.indexOf("audio_api_unavailable")){var e=t.split("?extra=")[1].split("#"),n=""===e[1]?"":i(e[1]);if(e=i(e[0]),"string"!=typeof n||!e)return t;n=n?n.split(String.fromCharCode(9)):[];for(var o,a,s=n.length;s--;){if(a=n[s].split(String.fromCharCode(11)),o=a.splice(0,1,e)[0],!u[o])return t;e=u[o].apply(null,a)}if(e&&"http"===e.substr(0,4))return e}return t}function i(t){if(!t||t.length%4==1)return!1;for(var e,n,r=0,o=0,i="";n=t.charAt(o++);)n=s.indexOf(n),~n&&(e=r%4?64*e+n:n,r++%4)&&(i+=String.fromCharCode(255&e>>(-2*r&6)));return i}function a(t,e){var n=t.length,r=[];if(n){var o=n;for(e=Math.abs(e);o--;)e=(n*(o+1)^e+o)%n,r[o]=e}return r}e.a=o;var s="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMN0PQRSTUVWXYZO123456789+/=",u={v:function(t){return t.split("").reverse().join("")},r:function(t,e){t=t.split("");for(var n,r=s+s,o=t.length;o--;)n=r.indexOf(t[o]),~n&&(t[o]=r.substr(n-e,1));return t.join("")},s:function(t,e){var n=t.length;if(n){var r=a(t,e),o=0;for(t=t.split("");++o<n;)t[o]=t.splice(r[n-1-o],1,t[o])[0];t=t.join("")}return t},i:function(t,e){return u.s(t,e^vk.id)},x:function(t,e){var n=[];return e=e.charCodeAt(0),each(t.split(""),function(t,r){n.push(String.fromCharCode(r.charCodeAt(0)^e))}),n.join("")}}},function(t,e,n){"use strict";function r(){var t=i();t.forEach(function(t){a(t).then(function(e){var n=s(e.data);u(t,n)},function(t){console.log(t)})}),window[p.a]||(c(),o(),window[p.a]=!0)}function o(){var t=0,e=location.toString();window.addEventListener("scroll",function(){clearTimeout(t),t=setTimeout(r,100)}),setInterval(function(){var t=location.toString();t!==e&&(e=t,r())},1e3)}function i(){var t=[{}],e=0,n=0;return Array.from(document.querySelectorAll(".audio_row:not(."+p.b+")")).forEach(function(r){n==y&&(e++,t[e]={},n=0);var o=JSON.parse(r.dataset.audio),i={artist:o[4],title:o[3],node:r,id:r.dataset.fullId};r.className+=" "+p.b,t[e][i.id]=i,n++}),t}function a(t){var e=new URLSearchParams;return e.append("act","reload_audio"),e.append("al","1"),e.append("ids",Object.keys(t).join(",")),l.a.post(g,e)}function s(t){var e=t.split("<!>"),r=e.find(function(t){return t.startsWith("<!json>")});return r?JSON.parse(r.substr(7).trim()).reduce(function(t,e){return t[e[1]+"_"+e[0]]=n.i(m.a)(e[2]),t},{}):[]}function u(t,e){for(var r in t){var o=t[r];n.i(d.a)({node:o.node.querySelector(".audio_row__info"),url:e[r],fileName:o.artist+" - "+o.title+".mp3",artist:o.artist,title:o.title})}}function c(){n.i(h.a)("\n        ."+p.c+' {\n            display: block;\n            float: left;\n            width: 24px;\n            height: 24px;\n            margin: 8px 8px 0 0;\n            background-image: url("'+p.d+'");\n            font-size: 11px;\n        }\n        \n        .'+p.c+"."+p.e+" {\n            padding-top: 7px;\n            height: 17px;\n        }\n        \n        ."+p.b+" .audio_inline_player .audio_inline_player_left {\n            padding: 0 45px;\n        }")}var f=n(2),l=n.n(f),p=n(1),d=n(4),h=n(5),m=n(11);e.a=r;var g="/al_audio.php",y=10},function(t,e,n){"use strict";function r(){window[a.a]||(o(),i(),window[a.a]=!0),Array.from(document.querySelectorAll(f)).forEach(function(t){t.className+=" "+a.b;var e=t.getElementsByClassName("ai_artist")[0].innerText,r=t.getElementsByClassName("ai_title")[0].innerText,o=e+" - "+r+".mp3",i=n.i(c.a)(t.getElementsByTagName("input")[0].value),u=t.getElementsByClassName("ai_body")[0];n.i(s.a)({fileName:o,url:i,node:u,title:r,artist:e})})}function o(){n.i(u.a)("\n\t\t\t."+a.c+' {\n\t\t\t\tdisplay: block;\n\t\t\t\tfloat: left;\n\t\t\t\twidth: 48px;\n\t\t\t\theight: 48px;\n\t\t\t\tmargin: 0px 5px 0px 5px;\n\t\t\t\tbackground-image: url("'+a.d+'");\n\t\t\t\tfont-size: 11px;\n\t\t\t\ttext-align: center;\n\t\t\t}\n\t\t\t\n            .'+a.c+"."+a.e+" {\n                padding-top: 15px;\n                height: auto;\n\t\t\t}\n\t\t\t\n\t\t\t.ai_current ."+a.c+",\n\t\t\t.ai_playing ."+a.c+" {\n\t\t\t\twidth: 28px !important;\n\t\t\t\theight: 28px !important;\n\t\t\t\tposition: absolute;\n\t\t\t\tright: 25px;\n\t\t\t}\t\t\t\n\t\t")}function i(){var t=0;window.addEventListener("scroll",function(){clearTimeout(t),t=setTimeout(r,100)})}var a=n(1),s=n(4),u=n(5),c=n(11);e.a=r;var f=".audio_item.ai_has_btn:not(."+a.b+")"},function(t,e,n){"use strict";function r(){window[l.a]||(a(),i(),window[l.a]=!0);var t=document.querySelectorAll(".track__actions:not(."+l.b+")");t.forEach(function(t){var e=t.querySelector(".share");if(e){var r=e.href.split("/"),i=r[r.length-1],a=t.parentNode.querySelector(".track__title").innerText,u=o(t);t.className+=" "+l.b,n.i(p.a)({node:t.querySelector(".like"),url:"#",fileName:u?u+" - "+a+".mp3":a+".mp3",onDownloadClick:s,attributes:{"data-id":i},title:a,artist:u})}})}function o(t){var e=t.parentNode.querySelector(".track__artists");if(!e&&t.closest(".sidebar-playlist")){var n=t.parentNode.querySelectorAll(".track__name-wrap .link.link_mute");return Array.from(n).map(function(t){return t.innerText}).join(" & ")}if(!e){var r=t.closest(".page-album")||t.closest(".sidebar-album");r?e=r.querySelector(".album-summary__pregroup a"):(r=t.closest(".page-artist"),r?e=r.querySelector(".page-artist__info .page-artist__title"):(r=t.closest(".sidebar-artist"),e=r?r.querySelector(".sidebar-artist__title"):null))}return e?e.innerText:null}function i(){var t=0,e=location.toString();document.addEventListener("click",function(e){var n=e.target;(n.parentNode.className.includes("album_selectable")||n.className.includes("album_selectable")||n.className.includes("d-hover__overlap")||n.parentNode.className.includes("artist__")||n.className.includes("playlist"))&&(clearTimeout(t),t=setTimeout(r,500))}),window.addEventListener("scroll",function(){clearTimeout(t),t=setTimeout(r,100)}),setInterval(function(){var t=location.toString();t!==e&&(e=t,r())},1e3)}function a(){n.i(d.a)("\n        ."+l.c+' {\n            display: inline-block;\n            vertical-align: top;\n            width: 24px;\n            height: 24px;\n            margin: 3px 10px;\n            background-image: url("'+l.d+'");\n        }\n\n        .'+l.c+"."+l.e+" {\n            vertical-align: baseline;\n            margin: 0px 10px;\n            color: #507299;\n            text-decoration: none;\n        }")}function s(t){var e=t.target;if(e.dataset.hasUrl)return n.i(p.b)(t);t.preventDefault(),t.stopPropagation();var r=t.target.dataset.id,o="https://music.yandex.ru/api/v2.1/handlers/track/"+r+"/track/download/m?hq=1";n.i(p.c)(e),f.a.request({url:o,headers:{"X-Retpath-Y":encodeURIComponent("https://music.yandex.ru/")}}).then(function(t){return f.a.get(t.data.src+"&format=json")},function(t){u(t,e)}).then(function(r){var o=m()(g+r.data.path.substr(1)+r.data.s);e.href="https://"+r.data.host+"/get-mp3/"+o+"/"+(r.data.ts+r.data.path),e.dataset.hasUrl="1",n.i(p.d)(e),n.i(p.b)(t)},function(t){u(t,e)})}function u(t,e){n.i(p.d)(e),console.log(t),alert("Error. Cannot download track")}var c=n(2),f=n.n(c),l=n(1),p=n(4),d=n(5),h=n(32),m=n.n(h);e.a=r;var g="XGRlBW9FXlekgbPrRHuSiA"},function(t,e,n){"use strict";function r(t){var e=new a(t),n=i(a.prototype.request,e);return o.extend(n,a.prototype,e),o.extend(n,e),n}var o=n(0),i=n(10),a=n(17),s=n(3),u=r(s);u.Axios=a,u.create=function(t){return r(o.merge(s,t))},u.Cancel=n(7),u.CancelToken=n(16),u.isCancel=n(8),u.all=function(t){return Promise.all(t)},u.spread=n(31),t.exports=u,t.exports.default=u},function(t,e,n){"use strict";function r(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var n=this;t(function(t){n.reason||(n.reason=new o(t),e(n.reason))})}var o=n(7);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var t,e=new r(function(e){t=e});return{token:e,cancel:t}},t.exports=r},function(t,e,n){"use strict";function r(t){this.defaults=t,this.interceptors={request:new a,response:new a}}var o=n(3),i=n(0),a=n(18),s=n(19),u=n(27),c=n(25);r.prototype.request=function(t){"string"==typeof t&&(t=i.merge({url:arguments[0]},arguments[1])),t=i.merge(o,this.defaults,{method:"get"},t),t.baseURL&&!u(t.url)&&(t.url=c(t.baseURL,t.url));var e=[s,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)n=n.then(e.shift(),e.shift());return n},i.forEach(["delete","get","head"],function(t){r.prototype[t]=function(e,n){return this.request(i.merge(n||{},{method:t,url:e}))}}),i.forEach(["post","put","patch"],function(t){r.prototype[t]=function(e,n,r){return this.request(i.merge(r||{},{method:t,url:e,data:n}))}}),t.exports=r},function(t,e,n){"use strict";function r(){this.handlers=[]}var o=n(0);r.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},r.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},r.prototype.forEach=function(t){o.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=r},function(t,e,n){"use strict";function r(t){t.cancelToken&&t.cancelToken.throwIfRequested()}var o=n(0),i=n(22),a=n(8),s=n(3);t.exports=function(t){r(t),t.headers=t.headers||{},t.data=i(t.data,t.headers,t.transformRequest),t.headers=o.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]});var e=t.adapter||s.adapter;return e(t).then(function(e){return r(t),e.data=i(e.data,e.headers,t.transformResponse),e},function(e){return a(e)||(r(t),e&&e.response&&(e.response.data=i(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},function(t,e,n){"use strict";t.exports=function(t,e,n,r){return t.config=e,n&&(t.code=n),t.response=r,t}},function(t,e,n){"use strict";var r=n(9);t.exports=function(t,e,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n)):t(n)}},function(t,e,n){"use strict";var r=n(0);t.exports=function(t,e,n){return r.forEach(n,function(n){t=n(t,e)}),t}},function(t,e,n){"use strict";function r(){this.message="String contains an invalid character"}function o(t){for(var e,n,o=String(t),a="",s=0,u=i;o.charAt(0|s)||(u="=",s%1);a+=u.charAt(63&e>>8-s%1*8)){if(n=o.charCodeAt(s+=.75),n>255)throw new r;e=e<<8|n}return a}var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",t.exports=o},function(t,e,n){"use strict";function r(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(0);t.exports=function(t,e,n){if(!e)return t;var i;if(n)i=n(e);else if(o.isURLSearchParams(e))i=e.toString();else{var a=[];o.forEach(e,function(t,e){null!==t&&"undefined"!=typeof t&&(o.isArray(t)&&(e+="[]"),o.isArray(t)||(t=[t]),o.forEach(t,function(t){o.isDate(t)?t=t.toISOString():o.isObject(t)&&(t=JSON.stringify(t)),a.push(r(e)+"="+r(t))}))}),i=a.join("&")}return i&&(t+=(t.indexOf("?")===-1?"?":"&")+i),t}},function(t,e,n){"use strict";t.exports=function(t,e){return t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,"")}},function(t,e,n){"use strict";var r=n(0);t.exports=r.isStandardBrowserEnv()?function(){return{write:function(t,e,n,o,i,a){var s=[];s.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(i)&&s.push("domain="+i),a===!0&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},function(t,e,n){"use strict";var r=n(0);t.exports=r.isStandardBrowserEnv()?function(){function t(t){var e=t;return n&&(o.setAttribute("href",e),e=o.href),o.setAttribute("href",e),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var e,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return e=t(window.location.href),function(n){var o=r.isString(n)?t(n):n;return o.protocol===e.protocol&&o.host===e.host}}():function(){return function(){return!0}}()},function(t,e,n){"use strict";var r=n(0);t.exports=function(t,e){r.forEach(t,function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])})}},function(t,e,n){"use strict";var r=n(0);t.exports=function(t){var e,n,o,i={};return t?(r.forEach(t.split("\n"),function(t){o=t.indexOf(":"),e=r.trim(t.substr(0,o)).toLowerCase(),n=r.trim(t.substr(o+1)),e&&(i[e]=i[e]?i[e]+", "+n:n)}),i):i}},function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},function(t,e,n){var r;!function(o){"use strict";function i(t,e){var n=(65535&t)+(65535&e),r=(t>>16)+(e>>16)+(n>>16);return r<<16|65535&n}function a(t,e){return t<<e|t>>>32-e}function s(t,e,n,r,o,s){return i(a(i(i(e,t),i(r,s)),o),n)}function u(t,e,n,r,o,i,a){return s(e&n|~e&r,t,e,o,i,a)}function c(t,e,n,r,o,i,a){return s(e&r|n&~r,t,e,o,i,a)}function f(t,e,n,r,o,i,a){return s(e^n^r,t,e,o,i,a)}function l(t,e,n,r,o,i,a){return s(n^(e|~r),t,e,o,i,a)}function p(t,e){t[e>>5]|=128<<e%32,t[(e+64>>>9<<4)+14]=e;var n,r,o,a,s,p=1732584193,d=-271733879,h=-1732584194,m=271733878;for(n=0;n<t.length;n+=16)r=p,o=d,a=h,s=m,p=u(p,d,h,m,t[n],7,-680876936),m=u(m,p,d,h,t[n+1],12,-389564586),h=u(h,m,p,d,t[n+2],17,606105819),d=u(d,h,m,p,t[n+3],22,-1044525330),p=u(p,d,h,m,t[n+4],7,-176418897),m=u(m,p,d,h,t[n+5],12,1200080426),h=u(h,m,p,d,t[n+6],17,-1473231341),d=u(d,h,m,p,t[n+7],22,-45705983),p=u(p,d,h,m,t[n+8],7,1770035416),m=u(m,p,d,h,t[n+9],12,-1958414417),h=u(h,m,p,d,t[n+10],17,-42063),d=u(d,h,m,p,t[n+11],22,-1990404162),p=u(p,d,h,m,t[n+12],7,1804603682),m=u(m,p,d,h,t[n+13],12,-40341101),h=u(h,m,p,d,t[n+14],17,-1502002290),d=u(d,h,m,p,t[n+15],22,1236535329),p=c(p,d,h,m,t[n+1],5,-165796510),m=c(m,p,d,h,t[n+6],9,-1069501632),h=c(h,m,p,d,t[n+11],14,643717713),d=c(d,h,m,p,t[n],20,-373897302),p=c(p,d,h,m,t[n+5],5,-701558691),m=c(m,p,d,h,t[n+10],9,38016083),h=c(h,m,p,d,t[n+15],14,-660478335),d=c(d,h,m,p,t[n+4],20,-405537848),p=c(p,d,h,m,t[n+9],5,568446438),m=c(m,p,d,h,t[n+14],9,-1019803690),h=c(h,m,p,d,t[n+3],14,-187363961),d=c(d,h,m,p,t[n+8],20,1163531501),p=c(p,d,h,m,t[n+13],5,-1444681467),m=c(m,p,d,h,t[n+2],9,-51403784),h=c(h,m,p,d,t[n+7],14,1735328473),d=c(d,h,m,p,t[n+12],20,-1926607734),p=f(p,d,h,m,t[n+5],4,-378558),m=f(m,p,d,h,t[n+8],11,-2022574463),h=f(h,m,p,d,t[n+11],16,1839030562),d=f(d,h,m,p,t[n+14],23,-35309556),p=f(p,d,h,m,t[n+1],4,-1530992060),m=f(m,p,d,h,t[n+4],11,1272893353),h=f(h,m,p,d,t[n+7],16,-155497632),d=f(d,h,m,p,t[n+10],23,-1094730640),p=f(p,d,h,m,t[n+13],4,681279174),m=f(m,p,d,h,t[n],11,-358537222),h=f(h,m,p,d,t[n+3],16,-722521979),d=f(d,h,m,p,t[n+6],23,76029189),p=f(p,d,h,m,t[n+9],4,-640364487),m=f(m,p,d,h,t[n+12],11,-421815835),h=f(h,m,p,d,t[n+15],16,530742520),d=f(d,h,m,p,t[n+2],23,-995338651),p=l(p,d,h,m,t[n],6,-198630844),m=l(m,p,d,h,t[n+7],10,1126891415),h=l(h,m,p,d,t[n+14],15,-1416354905),d=l(d,h,m,p,t[n+5],21,-57434055),p=l(p,d,h,m,t[n+12],6,1700485571),m=l(m,p,d,h,t[n+3],10,-1894986606),h=l(h,m,p,d,t[n+10],15,-1051523),d=l(d,h,m,p,t[n+1],21,-2054922799),p=l(p,d,h,m,t[n+8],6,1873313359),m=l(m,p,d,h,t[n+15],10,-30611744),h=l(h,m,p,d,t[n+6],15,-1560198380),d=l(d,h,m,p,t[n+13],21,1309151649),p=l(p,d,h,m,t[n+4],6,-145523070),m=l(m,p,d,h,t[n+11],10,-1120210379),h=l(h,m,p,d,t[n+2],15,718787259),d=l(d,h,m,p,t[n+9],21,-343485551),p=i(p,r),d=i(d,o),h=i(h,a),m=i(m,s);return[p,d,h,m]}function d(t){var e,n="",r=32*t.length;for(e=0;e<r;e+=8)n+=String.fromCharCode(t[e>>5]>>>e%32&255);return n}function h(t){var e,n=[];for(n[(t.length>>2)-1]=void 0,e=0;e<n.length;e+=1)n[e]=0;var r=8*t.length;for(e=0;e<r;e+=8)n[e>>5]|=(255&t.charCodeAt(e/8))<<e%32;return n}function m(t){return d(p(h(t),8*t.length))}function g(t,e){var n,r,o=h(t),i=[],a=[];for(i[15]=a[15]=void 0,o.length>16&&(o=p(o,8*t.length)),n=0;n<16;n+=1)i[n]=909522486^o[n],a[n]=1549556828^o[n];return r=p(i.concat(h(e)),512+8*e.length),d(p(a.concat(r),640))}function y(t){var e,n,r="0123456789abcdef",o="";for(n=0;n<t.length;n+=1)e=t.charCodeAt(n),o+=r.charAt(e>>>4&15)+r.charAt(15&e);return o}function v(t){return unescape(encodeURIComponent(t))}function w(t){return m(v(t))}function b(t){return y(w(t))}function T(t,e){return g(v(t),v(e))}function x(t,e){return y(T(t,e))}function M(t,e,n){return e?n?T(e,t):x(e,t):n?w(t):b(t)}r=function(){return M}.call(e,n,e,t),!(void 0!==r&&(t.exports=r))}(this)},function(t,e,n){!function(e,n){t.exports=n()}(this,function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t){return String(t).split("").map(function(t){return t.charCodeAt(0)})}function n(t){return new Uint8Array(e(t))}function r(t){var n=new Uint8Array(2*t.length);return new Uint16Array(n.buffer).set(e(t)),n}function o(t){return 73===t[0]&&68===t[1]&&51===t[2]}function i(t){if(!t||!t.length)return null;if(255===t[0]&&216===t[1]&&255===t[2])return"image/jpeg";if(137===t[0]&&80===t[1]&&78===t[2]&&71===t[3])return"image/png";if(71===t[0]&&73===t[1]&&70===t[2])return"image/gif";if(87===t[8]&&69===t[9]&&66===t[10]&&80===t[11])return"image/webp";var e=73===t[0]&&73===t[1]&&42===t[2]&&0===t[3],n=77===t[0]&&77===t[1]&&0===t[2]&&42===t[3];return e||n?"image/tiff":66===t[0]&&77===t[1]?"image/bmp":0===t[0]&&0===t[1]&&1===t[2]&&0===t[3]?"image/x-icon":null}function a(t){return[t>>>24&255,t>>>16&255,t>>>8&255,255&t]}function s(t){return[t>>>21&127,t>>>14&127,t>>>7&127,127&t]}function u(t){return(t[0]<<21)+(t[1]<<14)+(t[2]<<7)+t[3]}function c(t){return 11+t}function f(t){return 13+2*t}function l(t,e){return 16+2*t+2+2+2*e}function p(t,e,n,r){return 11+e+1+1+(r?2+2*(n+1):n+1)+t}function d(t,e){return 16+2*t+2+2+2*e}function h(t,e){return 13+2*t+2+2+2*e}function m(t){return 10+t}return function(){function e(n){if(t(this,e),!(n&&"object"==typeof n&&"byteLength"in n))throw new Error("First argument should be an instance of ArrayBuffer or Buffer");this.arrayBuffer=n,this.padding=4096,this.frames=[],this.url=""}return e.prototype._setIntegerFrame=function(t,e){var n=parseInt(e,10);this.frames.push({name:t,value:n,size:c(n.toString().length)})},e.prototype._setStringFrame=function(t,e){var n=e.toString();this.frames.push({name:t,value:n,size:f(n.length)})},e.prototype._setPictureFrame=function(t,e,n,r){var o=i(new Uint8Array(e)),a=n.toString();if(!o)throw new Error("Unknown picture MIME type");n||(r=!1),this.frames.push({name:"APIC",value:e,pictureType:t,mimeType:o,useUnicodeEncoding:r,description:a,size:p(e.byteLength,o.length,a.length,r)})},e.prototype._setLyricsFrame=function(t,e){var n=t.toString(),r=e.toString();this.frames.push({name:"USLT",value:r,description:n,size:l(n.length,r.length)})},e.prototype._setCommentFrame=function(t,e){var n=t.toString(),r=e.toString();this.frames.push({name:"COMM",value:r,description:n,size:d(n.length,r.length)})},e.prototype._setUserStringFrame=function(t,e){var n=t.toString(),r=e.toString();this.frames.push({name:"TXXX",description:n,value:r,size:h(n.length,r.length)})},e.prototype._setUrlLinkFrame=function(t,e){var n=e.toString();this.frames.push({name:t,value:n,size:m(n.length)})},e.prototype.setFrame=function(t,e){switch(t){case"TPE1":case"TCOM":case"TCON":if(!Array.isArray(e))throw new Error(t+" frame value should be an array of strings");var n="TCON"===t?";":"/",r=e.join(n);this._setStringFrame(t,r);break;case"TIT2":case"TALB":case"TPE2":case"TPE3":case"TPE4":case"TRCK":case"TPOS":case"TMED":case"TPUB":this._setStringFrame(t,e);break;case"TBPM":case"TLEN":case"TYER":this._setIntegerFrame(t,e);break;case"USLT":if(!("object"==typeof e&&"description"in e&&"lyrics"in e))throw new Error("USLT frame value should be an object with keys description and lyrics");this._setLyricsFrame(e.description,e.lyrics);break;case"APIC":if(!("object"==typeof e&&"type"in e&&"data"in e&&"description"in e))throw new Error("APIC frame value should be an object with keys type, data and description");if(e.type<0||e.type>20)throw new Error("Incorrect APIC frame picture type");this._setPictureFrame(e.type,e.data,e.description,!!e.useUnicodeEncoding);break;case"TXXX":if(!("object"==typeof e&&"description"in e&&"value"in e))throw new Error("TXXX frame value should be an object with keys description and value");this._setUserStringFrame(e.description,e.value);break;case"TKEY":if(!/^([A-G][#b]?m?|o)$/.test(e))throw new Error(t+" frame value should be like Dbm, C#, B or o");this._setStringFrame(t,e);break;case"WCOM":case"WCOP":case"WOAF":case"WOAR":case"WOAS":case"WORS":case"WPAY":case"WPUB":this._setUrlLinkFrame(t,e);break;case"COMM":if(!("object"==typeof e&&"description"in e&&"text"in e))throw new Error("COMM frame value should be an object with keys description and text");this._setCommentFrame(e.description,e.text);break;default:throw new Error("Unsupported frame "+t)}return this},e.prototype.removeTag=function(){if(!(this.arrayBuffer.byteLength<10)){var t=new Uint8Array(this.arrayBuffer),e=t[3],n=u([t[6],t[7],t[8],t[9]])+10;!o(t)||e<2||e>4||(this.arrayBuffer=new Uint8Array(t.subarray(n)).buffer)}},e.prototype.addTag=function(){this.removeTag();var t=[255,254],e=[101,110,103],o=10+this.frames.reduce(function(t,e){return t+e.size},0)+this.padding,i=new ArrayBuffer(this.arrayBuffer.byteLength+o),u=new Uint8Array(i),c=0,f=[];return f=[73,68,51,3],u.set(f,c),c+=f.length,c++,c++,f=s(o-10),u.set(f,c),c+=f.length,this.frames.forEach(function(o){switch(f=n(o.name),u.set(f,c),c+=f.length,f=a(o.size-10),u.set(f,c),c+=f.length,c+=2,o.name){case"WCOM":case"WCOP":case"WOAF":case"WOAR":case"WOAS":case"WORS":case"WPAY":case"WPUB":f=n(o.value),u.set(f,c),c+=f.length;break;case"TPE1":case"TCOM":case"TCON":case"TIT2":case"TALB":case"TPE2":case"TPE3":case"TPE4":case"TRCK":case"TPOS":case"TKEY":case"TMED":case"TPUB":f=[1].concat(t),u.set(f,c),
c+=f.length,f=r(o.value),u.set(f,c),c+=f.length;break;case"TXXX":case"USLT":case"COMM":f=[1],"USLT"!==o.name&&"COMM"!==o.name||(f=f.concat(e)),f=f.concat(t),u.set(f,c),c+=f.length,f=r(o.description),u.set(f,c),c+=f.length,f=[0,0].concat(t),u.set(f,c),c+=f.length,f=r(o.value),u.set(f,c),c+=f.length;break;case"TBPM":case"TLEN":case"TYER":c++,f=n(o.value),u.set(f,c),c+=f.length;break;case"APIC":f=[o.useUnicodeEncoding?1:0],u.set(f,c),c+=f.length,f=n(o.mimeType),u.set(f,c),c+=f.length,f=[0,o.pictureType],u.set(f,c),c+=f.length,o.useUnicodeEncoding?(f=[].concat(t),u.set(f,c),c+=f.length,f=r(o.description),u.set(f,c),c+=f.length,c+=2):(f=n(o.description),u.set(f,c),c+=f.length,c++),u.set(new Uint8Array(o.value),c),c+=o.value.byteLength}}),c+=this.padding,u.set(new Uint8Array(this.arrayBuffer),c),this.arrayBuffer=i,i},e.prototype.getBlob=function(){return new Blob([this.arrayBuffer],{type:"audio/mpeg"})},e.prototype.getURL=function(){return this.url||(this.url=URL.createObjectURL(this.getBlob())),this.url},e.prototype.revokeURL=function(){URL.revokeObjectURL(this.url)},e}()})},function(t,e,n){var r,o=o||function(t){"use strict";if(!("undefined"==typeof t||"undefined"!=typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))){var e=t.document,n=function(){return t.URL||t.webkitURL||t},r=e.createElementNS("http://www.w3.org/1999/xhtml","a"),o="download"in r,i=function(t){var e=new MouseEvent("click");t.dispatchEvent(e)},a=/constructor/i.test(t.HTMLElement)||t.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent),u=function(e){(t.setImmediate||t.setTimeout)(function(){throw e},0)},c="application/octet-stream",f=4e4,l=function(t){var e=function(){"string"==typeof t?n().revokeObjectURL(t):t.remove()};setTimeout(e,f)},p=function(t,e,n){e=[].concat(e);for(var r=e.length;r--;){var o=t["on"+e[r]];if("function"==typeof o)try{o.call(t,n||t)}catch(t){u(t)}}},d=function(t){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob([String.fromCharCode(65279),t],{type:t.type}):t},h=function(e,u,f){f||(e=d(e));var h,m=this,g=e.type,y=g===c,v=function(){p(m,"writestart progress write writeend".split(" "))},w=function(){if((s||y&&a)&&t.FileReader){var r=new FileReader;return r.onloadend=function(){var e=s?r.result:r.result.replace(/^data:[^;]*;/,"data:attachment/file;"),n=t.open(e,"_blank");n||(t.location.href=e),e=void 0,m.readyState=m.DONE,v()},r.readAsDataURL(e),void(m.readyState=m.INIT)}if(h||(h=n().createObjectURL(e)),y)t.location.href=h;else{var o=t.open(h,"_blank");o||(t.location.href=h)}m.readyState=m.DONE,v(),l(h)};return m.readyState=m.INIT,o?(h=n().createObjectURL(e),void setTimeout(function(){r.href=h,r.download=u,i(r),v(),l(h),m.readyState=m.DONE})):void w()},m=h.prototype,g=function(t,e,n){return new h(t,e||t.name||"download",n)};return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(t,e,n){return e=e||t.name||"download",n||(t=d(t)),navigator.msSaveOrOpenBlob(t,e)}:(m.abort=function(){},m.readyState=m.INIT=0,m.WRITING=1,m.DONE=2,m.error=m.onwritestart=m.onprogress=m.onwrite=m.onabort=m.onerror=m.onwriteend=null,g)}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content);"undefined"!=typeof t&&t.exports?t.exports.saveAs=o:null!==n(36)&&null!==n(37)&&(r=function(){return o}.call(e,n,e,t),!(void 0!==r&&(t.exports=r)))},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(f===setTimeout)return setTimeout(t,0);if((f===n||!f)&&setTimeout)return f=setTimeout,setTimeout(t,0);try{return f(t,0)}catch(e){try{return f.call(null,t,0)}catch(e){return f.call(this,t,0)}}}function i(t){if(l===clearTimeout)return clearTimeout(t);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(t);try{return l(t)}catch(e){try{return l.call(null,t)}catch(e){return l.call(this,t)}}}function a(){m&&d&&(m=!1,d.length?h=d.concat(h):g=-1,h.length&&s())}function s(){if(!m){var t=o(a);m=!0;for(var e=h.length;e;){for(d=h,h=[];++g<e;)d&&d[g].run();g=-1,e=h.length}d=null,m=!1,i(t)}}function u(t,e){this.fun=t,this.array=e}function c(){}var f,l,p=t.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:n}catch(t){f=n}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(t){l=r}}();var d,h=[],m=!1,g=-1;p.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];h.push(new u(t,e)),1!==h.length||m||o(s)},u.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.binding=function(t){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(t){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(t,e){t.exports=function(){throw new Error("define cannot be used indirect")}},function(t,e){(function(e){t.exports=e}).call(e,{})},function(t,e,n){"use strict";function r(){switch(location.hostname){case"vk.com":n.i(o.a)();break;case"m.vk.com":n.i(i.a)();break;case"music.yandex.ru":n.i(a.a)();break;default:alert(location.hostname+" is unsupported site for Music Download Plugin")}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(12),i=n(13),a=n(14);window.initMusicDownloader=r,function(){r()}()}]);