/*!
 * vue-material v1.0.1
 * Made with <3 by marcosmoura 2024
 * Released under the MIT License.
 */
!(function(e,r){var a,n;if("object"==typeof exports&&"object"==typeof module)module.exports=r(require("vue"));else if("function"==typeof define&&define.amd)define(["vue"],r);else{a=r("object"==typeof exports?require("vue"):e.Vue);for(n in a)("object"==typeof exports?exports:e)[n]=a[n]}})("undefined"!=typeof self?self:this,(function(e){return (function(e){function r(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,r),t.l=!0,t.exports}var a={};return r.m=e,r.c=a,r.d=function(e,a,n){r.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(a,"a",a),a},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=542)})({0:function(e,r){e.exports=function(e,r,a,n,t,o){var l,d,u,s,i,m=e=e||{},c=typeof e.default;return"object"!==c&&"function"!==c||(l=e,m=e.default),d="function"==typeof m?m.options:m,r&&(d.render=r.render,d.staticRenderFns=r.staticRenderFns,d._compiled=!0),a&&(d.functional=!0),t&&(d._scopeId=t),o?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},d._ssrRegister=u):n&&(u=n),u&&(s=d.functional,i=s?d.render:d.beforeCreate,s?(d._injectStyles=u,d.render=function(e,r){return u.call(r),i(e,r)}):d.beforeCreate=i?[].concat(i,u):[u]),{esModule:l,exports:m,options:d}}},1:function(e,r,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var t,o,l,d;Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){var r={props:{mdTheme:null},computed:{$mdActiveTheme:function(){var e=o.default.enabled,r=o.default.getThemeName,a=o.default.getAncestorTheme;return e&&!1!==this.mdTheme?r(this.mdTheme||a(this)):null}}};return(0,d.default)(r,e)},t=a(4),o=n(t),l=a(6),d=n(l)},124:function(e,r,a){"use strict";var n,t;Object.defineProperty(r,"__esModule",{value:!0}),n=a(1),t=(function(e){return e&&e.__esModule?e:{default:e}})(n),r.default=new t.default({name:"MdAvatar"})},2:function(r,a){r.exports=e},266:function(e,r,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var t,o,l,d;Object.defineProperty(r,"__esModule",{value:!0}),t=a(3),o=n(t),l=a(267),d=n(l),r.default=function(e){(0,o.default)(e),e.component(d.default.name,d.default)}},267:function(e,r,a){"use strict";function n(e){a(268)}var t,o,l,d,u,s,i,m,c,v;Object.defineProperty(r,"__esModule",{value:!0}),t=a(124),o=a.n(t);for(l in t)"default"!==l&&(function(e){a.d(r,e,(function(){return t[e]}))})(l);d=a(269),u=a(0),s=!1,i=n,m=null,c=null,v=u(o.a,d.a,s,i,m,c),r.default=v.exports},268:function(e,r){throw Error("Module build failed: ModuleBuildError: Module build failed: Error: Cannot find module 'node-sass'\nRequire stack:\n- /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/sass-loader/lib/loader.js\n- /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/loadLoader.js\n- /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js\n- /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/webpack/lib/NormalModule.js\n- /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/webpack/lib/NormalModuleFactory.js\n- /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/webpack/lib/Compiler.js\n- /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/webpack/lib/webpack.js\n- /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/build/lib/index.js\n    at Function.Module._resolveFilename (node:internal/modules/cjs/loader:1143:15)\n    at Function.Module._load (node:internal/modules/cjs/loader:984:27)\n    at Module.require (node:internal/modules/cjs/loader:1231:19)\n    at require (node:internal/modules/helpers:179:18)\n    at Object.<anonymous> (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/sass-loader/lib/loader.js:3:14)\n    at Module._compile (node:internal/modules/cjs/loader:1369:14)\n    at Module._extensions..js (node:internal/modules/cjs/loader:1427:10)\n    at Object.require.extensions.<computed> [as .js] (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/babel-register/lib/node.js:152:7)\n    at Module.load (node:internal/modules/cjs/loader:1206:32)\n    at Function.Module._load (node:internal/modules/cjs/loader:1022:12)\n    at Module.require (node:internal/modules/cjs/loader:1231:19)\n    at require (node:internal/modules/helpers:179:18)\n    at loadLoader (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/loadLoader.js:13:17)\n    at iteratePitchingLoaders (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/webpack/lib/NormalModule.js:195:19\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:170:18\n    at loadLoader (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/loadLoader.js:27:11)\n    at iteratePitchingLoaders (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at runLoaders (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:362:2)\n    at NormalModule.doBuild (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/webpack/lib/NormalModule.js:182:3)\n    at NormalModule.build (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/webpack/lib/NormalModule.js:275:15)")},269:function(e,r,a){"use strict";var n=function(){var e=this,r=e.$createElement;return(e._self._c||r)("div",{staticClass:"md-avatar",class:[e.$mdActiveTheme]},[e._t("default")],2)},t=[],o={render:n,staticRenderFns:t};r.a=o},3:function(e,r,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var t,o,l,d,u;Object.defineProperty(r,"__esModule",{value:!0}),a(7),t=a(5),o=n(t),l=a(4),d=n(l),u=function(){var e=new o.default({ripple:!0,theming:{},locale:{startYear:1900,endYear:2099,dateFormat:"YYYY-MM-DD",days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],shorterDays:["S","M","T","W","T","F","S"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],shorterMonths:["J","F","M","A","M","Ju","Ju","A","Se","O","N","D"],firstDayOfAWeek:0},router:{linkActiveClass:"router-link-active"}});return Object.defineProperties(e.theming,{metaColors:{get:function(){return d.default.metaColors},set:function(e){d.default.metaColors=e}},theme:{get:function(){return d.default.theme},set:function(e){d.default.theme=e}},enabled:{get:function(){return d.default.enabled},set:function(e){d.default.enabled=e}}}),e},r.default=function(e){e.material||(e.material=u(),e.prototype.$material=e.material)}},4:function(e,r,a){"use strict";var n,t,o,l,d;Object.defineProperty(r,"__esModule",{value:!0}),n=a(2),t=(function(e){return e&&e.__esModule?e:{default:e}})(n),o=null,l=null,d=null,r.default=new t.default({data:function(){return{prefix:"md-theme-",theme:"default",enabled:!0,metaColors:!1}},computed:{themeTarget:function(){return!this.$isServer&&document.documentElement},fullThemeName:function(){return this.getThemeName()}},watch:{enabled:{immediate:!0,handler:function(){var e=this.fullThemeName,r=this.themeTarget,a=this.enabled;r&&(a?(r.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)):(r.classList.remove(e),this.metaColors&&this.setHtmlMetaColors()))}},theme:function(e,r){var a=this.getThemeName,n=this.themeTarget;e=a(e),n.classList.remove(a(r)),n.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)},metaColors:function(e){e?this.setHtmlMetaColors(this.fullThemeName):this.setHtmlMetaColors()}},methods:{getAncestorTheme:function(e){var r,a=this;return e?(r=e.mdTheme,(function e(n){if(n){var t=n.mdTheme,o=n.$parent;return t&&t!==r?t:e(o)}return a.theme})(e.$parent)):null},getThemeName:function(e){var r=e||this.theme;return this.prefix+r},setMicrosoftColors:function(e){o&&o.setAttribute("content",e)},setThemeColors:function(e){l&&l.setAttribute("content",e)},setMaskColors:function(e){d&&d.setAttribute("color",e)},setHtmlMetaColors:function(e){var r,a="#fff";e&&(r=window.getComputedStyle(document.documentElement),a=r.getPropertyValue("--"+e+"-primary")),a&&(this.setMicrosoftColors(a),this.setThemeColors(a),this.setMaskColors(a))}},mounted:function(){var e=this;o=document.querySelector('[name="msapplication-TileColor"]'),l=document.querySelector('[name="theme-color"]'),d=document.querySelector('[rel="mask-icon"]'),this.enabled&&this.metaColors&&window.addEventListener("load",(function(){e.setHtmlMetaColors(e.fullThemeName)}))}})},5:function(e,r,a){"use strict";var n,t;Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){var r={};return t.default.util.defineReactive(r,"reactive",e),r.reactive},n=a(2),t=(function(e){return e&&e.__esModule?e:{default:e}})(n)},542:function(e,r,a){e.exports=a(266)},6:function(e,r,a){"use strict";function n(e){return!!e&&"object"==typeof e}function t(e){var r=Object.prototype.toString.call(e);return"[object RegExp]"===r||"[object Date]"===r||o(e)}function o(e){return e.$$typeof===v}function l(e){return Array.isArray(e)?[]:{}}function d(e,r){return!1!==r.clone&&r.isMergeableObject(e)?i(l(e),e,r):e}function u(e,r,a){return e.concat(r).map((function(e){return d(e,a)}))}function s(e,r,a){var n={};return a.isMergeableObject(e)&&Object.keys(e).forEach((function(r){n[r]=d(e[r],a)})),Object.keys(r).forEach((function(t){a.isMergeableObject(r[t])&&e[t]?n[t]=i(e[t],r[t],a):n[t]=d(r[t],a)})),n}function i(e,r,a){var n,t,o;return a=a||{},a.arrayMerge=a.arrayMerge||u,a.isMergeableObject=a.isMergeableObject||m,n=Array.isArray(r),t=Array.isArray(e),o=n===t,o?n?a.arrayMerge(e,r,a):s(e,r,a):d(r,a)}var m,c,v,f;Object.defineProperty(r,"__esModule",{value:!0}),m=function(e){return n(e)&&!t(e)},c="function"==typeof Symbol&&Symbol.for,v=c?Symbol.for("react.element"):60103,i.all=function(e,r){if(!Array.isArray(e))throw Error("first argument should be an array");return e.reduce((function(e,a){return i(e,a,r)}),{})},f=i,r.default=f},7:function(e,r){throw Error("Module build failed: ModuleBuildError: Module build failed: Error: Cannot find module 'node-sass'\nRequire stack:\n- /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/sass-loader/lib/loader.js\n- /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/loadLoader.js\n- /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js\n- /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/webpack/lib/NormalModule.js\n- /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/webpack/lib/NormalModuleFactory.js\n- /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/webpack/lib/Compiler.js\n- /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/webpack/lib/webpack.js\n- /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/build/lib/index.js\n    at Function.Module._resolveFilename (node:internal/modules/cjs/loader:1143:15)\n    at Function.Module._load (node:internal/modules/cjs/loader:984:27)\n    at Module.require (node:internal/modules/cjs/loader:1231:19)\n    at require (node:internal/modules/helpers:179:18)\n    at Object.<anonymous> (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/sass-loader/lib/loader.js:3:14)\n    at Module._compile (node:internal/modules/cjs/loader:1369:14)\n    at Module._extensions..js (node:internal/modules/cjs/loader:1427:10)\n    at Object.require.extensions.<computed> [as .js] (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/babel-register/lib/node.js:152:7)\n    at Module.load (node:internal/modules/cjs/loader:1206:32)\n    at Function.Module._load (node:internal/modules/cjs/loader:1022:12)\n    at Module.require (node:internal/modules/cjs/loader:1231:19)\n    at require (node:internal/modules/helpers:179:18)\n    at loadLoader (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/loadLoader.js:13:17)\n    at iteratePitchingLoaders (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/webpack/lib/NormalModule.js:195:19\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:170:18\n    at loadLoader (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/loadLoader.js:27:11)\n    at iteratePitchingLoaders (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at runLoaders (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:362:2)\n    at NormalModule.doBuild (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/webpack/lib/NormalModule.js:182:3)\n    at NormalModule.build (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/webpack/lib/NormalModule.js:275:15)\n    at Compilation.buildModule (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/webpack/lib/Compilation.js:157:10)\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/webpack/lib/Compilation.js:460:10\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/webpack/lib/NormalModuleFactory.js:243:5\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/webpack/lib/NormalModuleFactory.js:94:13")}})}));