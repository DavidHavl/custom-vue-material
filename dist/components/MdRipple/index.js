/*!
 * vue-material v1.0.0-beta-10.2
 * Made with <3 by marcosmoura 2019
 * Released under the MIT License.
 */
!(function(e,t){var n,r;if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("vue"));else if("function"==typeof define&&define.amd)define(["vue"],t);else{n=t("object"==typeof exports?require("vue"):e.Vue);for(r in n)("object"==typeof exports?exports:e)[r]=n[r]}})("undefined"!=typeof self?self:this,(function(e){return (function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=540)})({0:function(e,t){e.exports=function(e,t,n,r,o,u){var i,a,c,s,l,f=e=e||{},d=typeof e.default;return"object"!==d&&"function"!==d||(i=e,f=e.default),a="function"==typeof f?f.options:f,t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns,a._compiled=!0),n&&(a.functional=!0),o&&(a._scopeId=o),u?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(u)},a._ssrRegister=c):r&&(c=r),c&&(s=a.functional,l=s?a.render:a.beforeCreate,s?(a._injectStyles=c,a.render=function(e,t){return c.call(t),l(e,t)}):a.beforeCreate=l?[].concat(l,c):[c]),{esModule:i,exports:f,options:a}}},1:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,u,i,a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={props:{mdTheme:null},computed:{$mdActiveTheme:function(){var e=u.default.enabled,t=u.default.getThemeName,n=u.default.getAncestorTheme;return e&&!1!==this.mdTheme?t(this.mdTheme||n(this)):null}}};return(0,a.default)(t,e)},o=n(4),u=r(o),i=n(6),a=r(i)},10:function(e,t,n){(function(t){var r,o,u,i,a,c=n(14),s="undefined"==typeof window?t:window,l=["moz","webkit"],f="AnimationFrame",d=s["request"+f],m=s["cancel"+f]||s["cancelRequest"+f];for(r=0;!d&&r<l.length;r++)d=s[l[r]+"Request"+f],m=s[l[r]+"Cancel"+f]||s[l[r]+"CancelRequest"+f];d&&m||(o=0,u=0,i=[],a=1e3/60,d=function(e){if(0===i.length){var t=c(),n=Math.max(0,a-(t-o));o=n+t,setTimeout((function(){var e,t=i.slice(0);for(i.length=0,e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(o)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(n))}return i.push({handle:++u,callback:e,cancelled:!1}),u},m=function(e){for(var t=0;t<i.length;t++)i[t].handle===e&&(i[t].cancelled=!0)}),e.exports=function(e){return d.call(s,e)},e.exports.cancel=function(){m.apply(s,arguments)},e.exports.polyfill=function(e){e||(e=s),e.requestAnimationFrame=d,e.cancelAnimationFrame=m}}).call(t,n(12))},11:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){return Math.random().toString(36).slice(4)};t.default=r},12:function(e,t){var n;n=(function(){return this})();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},14:function(e,t,n){(function(t){(function(){var n,r,o,u,i,a;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:void 0!==t&&null!==t&&t.hrtime?(e.exports=function(){return(n()-i)/1e6},r=t.hrtime,n=function(){var e;return e=r(),1e9*e[0]+e[1]},u=n(),a=1e9*t.uptime(),i=u-a):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(t,n(15))},15:function(e,t){function n(){throw Error("setTimeout has not been defined")}function r(){throw Error("clearTimeout has not been defined")}function o(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function u(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function i(){m&&p&&(m=!1,p.length?d=p.concat(d):h=-1,d.length&&a())}function a(){var e,t;if(!m){for(e=o(i),m=!0,t=d.length;t;){for(p=d,d=[];++h<t;)p&&p[h].run();h=-1,t=d.length}p=null,m=!1,u(e)}}function c(e,t){this.fun=e,this.array=t}function s(){}var l,f,d,m,p,h,v=e.exports={};!(function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}})(),d=[],m=!1,h=-1,v.nextTick=function(e){var t,n=Array(arguments.length-1);if(arguments.length>1)for(t=1;t<arguments.length;t++)n[t-1]=arguments[t];d.push(new c(e,n)),1!==d.length||m||o(a)},c.prototype.run=function(){this.fun.apply(null,this.array)},v.title="browser",v.browser=!0,v.env={},v.argv=[],v.version="",v.versions={},v.on=s,v.addListener=s,v.once=s,v.off=s,v.removeListener=s,v.removeAllListeners=s,v.emit=s,v.prependListener=s,v.prependOnceListener=s,v.listeners=function(e){return[]},v.binding=function(e){throw Error("process.binding is not supported")},v.cwd=function(){return"/"},v.chdir=function(e){throw Error("process.chdir is not supported")},v.umask=function(){return 0}},17:function(e,t,n){"use strict";function r(e){n(23)}var o,u,i,a,c,s,l,f,d,m;Object.defineProperty(t,"__esModule",{value:!0}),o=n(18),u=n.n(o);for(i in o)"default"!==i&&(function(e){n.d(t,e,(function(){return o[e]}))})(i);a=n(26),c=n(0),s=!1,l=r,f=null,d=null,m=c(u.a,a.a,s,l,f,d),t.default=m.exports},18:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,u,i,a,c,s,l,f,d;Object.defineProperty(t,"__esModule",{value:!0}),o=Object.assign||function(e){var t,n,r;for(t=1;t<arguments.length;t++){n=arguments[t];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n(10),i=r(u),a=n(1),c=r(a),s=n(11),l=r(s),f=n(22),d=r(f),t.default=new c.default({name:"MdRipple",components:{MdWave:d.default},props:{mdActive:null,mdDisabled:Boolean,mdCentered:Boolean,mdEventTrigger:{type:Boolean,default:!0}},data:function(){return{ripples:[],touchTimeout:null,eventType:null}},computed:{isDisabled:function(){return!this.$material.ripple||this.mdDisabled},rippleClasses:function(){return{"md-disabled":this.isDisabled}},waveClasses:function(){return{"md-centered":this.mdCentered}}},watch:{mdActive:function(e){var t="boolean"==typeof e,n="mouseevent"===(""+e.constructor).match(/function (\w*)/)[1].toLowerCase();t&&this.mdCentered&&e?this.startRipple({type:"mousedown"}):n&&this.startRipple(e),this.$emit("update:mdActive",!1)}},methods:{touchMoveCheck:function(){window.clearTimeout(this.touchTimeout)},touchStartCheck:function(e){var t=this;this.touchTimeout=window.setTimeout((function(){t.startRipple(e)}),100)},startRipple:function(e){var t=this;(0,i.default)((function(){var n,r,o=t.eventType,u=t.isDisabled,i=t.mdCentered;u||o&&o!==e.type||(n=t.getSize(),r=null,r=i?t.getCenteredPosition(n):t.getHitPosition(e,n),t.eventType=e.type,t.ripples.push({waveStyles:t.applyStyles(r,n),uuid:(0,l.default)()}))}))},applyStyles:function(e,t){return t+="px",o({},e,{width:t,height:t})},clearWave:function(e){this.ripples=e?this.ripples.filter((function(t){return t.uuid!==e})):[]},getSize:function(){var e=this.$el,t=e.offsetWidth,n=e.offsetHeight;return Math.round(Math.max(t,n))},getCenteredPosition:function(e){var t=-e/2+"px";return{"margin-top":t,"margin-left":t}},getHitPosition:function(e,t){var n=this.$el.getBoundingClientRect(),r=e.pageY,o=e.pageX;return"touchstart"===e.type&&(r=e.changedTouches[0].pageY,o=e.changedTouches[0].pageX),{top:r-n.top-t/2-document.documentElement.scrollTop+"px",left:o-n.left-t/2-document.documentElement.scrollLeft+"px"}}}})},19:function(e,t,n){"use strict";var r,o;Object.defineProperty(t,"__esModule",{value:!0}),r=n(1),o=(function(e){return e&&e.__esModule?e:{default:e}})(r),t.default=new o.default({name:"MdWave",data:function(){return{animating:!0}},props:{waveClasses:null,waveStyles:null},methods:{end:function(){this.animating=null,this.$emit("md-end")}}})},2:function(t,n){t.exports=e},22:function(e,t,n){"use strict";function r(e){n(24)}var o,u,i,a,c,s,l,f,d,m;Object.defineProperty(t,"__esModule",{value:!0}),o=n(19),u=n.n(o);for(i in o)"default"!==i&&(function(e){n.d(t,e,(function(){return o[e]}))})(i);a=n(25),c=n(0),s=!1,l=r,f=null,d=null,m=c(u.a,a.a,s,l,f,d),t.default=m.exports},23:function(e,t){},24:function(e,t){},25:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"md-ripple"},on:{"after-enter":e.end}},[e.animating?n("span"):e._e()])},o=[],u={render:r,staticRenderFns:o};t.a=u},26:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["md-ripple",e.rippleClasses],on:{"&touchstart":function(t){return (function(t){return e.mdEventTrigger&&e.touchStartCheck(t)})(t)},"&touchmove":function(t){return (function(t){return e.mdEventTrigger&&e.touchMoveCheck(t)})(t)},"&mousedown":function(t){return (function(t){return e.mdEventTrigger&&e.startRipple(t)})(t)}}},[e._t("default"),e._v(" "),e._l(e.ripples,(function(t){return e.isDisabled?e._e():n("md-wave",{key:t.uuid,class:["md-ripple-wave",e.waveClasses],style:t.waveStyles,on:{"md-end":function(n){e.clearWave(t.uuid)}}})}))],2)},o=[],u={render:r,staticRenderFns:o};t.a=u},3:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,u,i,a,c;Object.defineProperty(t,"__esModule",{value:!0}),n(7),o=n(5),u=r(o),i=n(4),a=r(i),c=function(){var e=new u.default({ripple:!0,theming:{},locale:{startYear:1900,endYear:2099,dateFormat:"YYYY-MM-DD",days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],shorterDays:["S","M","T","W","T","F","S"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],shorterMonths:["J","F","M","A","M","Ju","Ju","A","Se","O","N","D"],firstDayOfAWeek:0},router:{linkActiveClass:"router-link-active"}});return Object.defineProperties(e.theming,{metaColors:{get:function(){return a.default.metaColors},set:function(e){a.default.metaColors=e}},theme:{get:function(){return a.default.theme},set:function(e){a.default.theme=e}},enabled:{get:function(){return a.default.enabled},set:function(e){a.default.enabled=e}}}),e},t.default=function(e){e.material||(e.material=c(),e.prototype.$material=e.material)}},4:function(e,t,n){"use strict";var r,o,u,i,a;Object.defineProperty(t,"__esModule",{value:!0}),r=n(2),o=(function(e){return e&&e.__esModule?e:{default:e}})(r),u=null,i=null,a=null,t.default=new o.default({data:function(){return{prefix:"md-theme-",theme:"default",enabled:!0,metaColors:!1}},computed:{themeTarget:function(){return!this.$isServer&&document.documentElement},fullThemeName:function(){return this.getThemeName()}},watch:{enabled:{immediate:!0,handler:function(){var e=this.fullThemeName,t=this.themeTarget,n=this.enabled;t&&(n?(t.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)):(t.classList.remove(e),this.metaColors&&this.setHtmlMetaColors()))}},theme:function(e,t){var n=this.getThemeName,r=this.themeTarget;e=n(e),r.classList.remove(n(t)),r.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)},metaColors:function(e){e?this.setHtmlMetaColors(this.fullThemeName):this.setHtmlMetaColors()}},methods:{getAncestorTheme:function(e){var t,n=this;return e?(t=e.mdTheme,(function e(r){if(r){var o=r.mdTheme,u=r.$parent;return o&&o!==t?o:e(u)}return n.theme})(e.$parent)):null},getThemeName:function(e){var t=e||this.theme;return this.prefix+t},setMicrosoftColors:function(e){u&&u.setAttribute("content",e)},setThemeColors:function(e){i&&i.setAttribute("content",e)},setMaskColors:function(e){a&&a.setAttribute("color",e)},setHtmlMetaColors:function(e){var t,n="#fff";e&&(t=window.getComputedStyle(document.documentElement),n=t.getPropertyValue("--"+e+"-primary")),n&&(this.setMicrosoftColors(n),this.setThemeColors(n),this.setMaskColors(n))}},mounted:function(){var e=this;u=document.querySelector('[name="msapplication-TileColor"]'),i=document.querySelector('[name="theme-color"]'),a=document.querySelector('[rel="mask-icon"]'),this.enabled&&this.metaColors&&window.addEventListener("load",(function(){e.setHtmlMetaColors(e.fullThemeName)}))}})},417:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,u,i,a,c,s;Object.defineProperty(t,"__esModule",{value:!0}),o=n(3),u=r(o),i=n(17),a=r(i),c=n(22),s=r(c),t.default=function(e){(0,u.default)(e),e.component(a.default.name,a.default),e.component(s.default.name,s.default)}},5:function(e,t,n){"use strict";var r,o;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={};return o.default.util.defineReactive(t,"reactive",e),t.reactive},r=n(2),o=(function(e){return e&&e.__esModule?e:{default:e}})(r)},540:function(e,t,n){e.exports=n(417)},6:function(e,t,n){"use strict";function r(e){return!!e&&"object"==typeof e}function o(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||u(e)}function u(e){return e.$$typeof===m}function i(e){return Array.isArray(e)?[]:{}}function a(e,t){return!1!==t.clone&&t.isMergeableObject(e)?l(i(e),e,t):e}function c(e,t,n){return e.concat(t).map((function(e){return a(e,n)}))}function s(e,t,n){var r={};return n.isMergeableObject(e)&&Object.keys(e).forEach((function(t){r[t]=a(e[t],n)})),Object.keys(t).forEach((function(o){n.isMergeableObject(t[o])&&e[o]?r[o]=l(e[o],t[o],n):r[o]=a(t[o],n)})),r}function l(e,t,n){var r,o,u;return n=n||{},n.arrayMerge=n.arrayMerge||c,n.isMergeableObject=n.isMergeableObject||f,r=Array.isArray(t),o=Array.isArray(e),u=r===o,u?r?n.arrayMerge(e,t,n):s(e,t,n):a(t,n)}var f,d,m,p;Object.defineProperty(t,"__esModule",{value:!0}),f=function(e){return r(e)&&!o(e)},d="function"==typeof Symbol&&Symbol.for,m=d?Symbol.for("react.element"):60103,l.all=function(e,t){if(!Array.isArray(e))throw Error("first argument should be an array");return e.reduce((function(e,n){return l(e,n,t)}),{})},p=l,t.default=p},7:function(e,t){}})}));