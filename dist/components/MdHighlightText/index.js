/*!
 * vue-material v1.0.1
 * Made with <3 by marcosmoura 2024
 * Released under the MIT License.
 */
!(function(e,t){var n,o;if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("vue"));else if("function"==typeof define&&define.amd)define(["vue"],t);else{n=t("object"==typeof exports?require("vue"):e.Vue);for(o in n)("object"==typeof exports?exports:e)[o]=n[o]}})("undefined"!=typeof self?self:this,(function(e){return (function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=144)})({0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r,a,u,l,s;Object.defineProperty(t,"__esModule",{value:!0}),n(2),r=n(3),a=o(r),u=n(4),l=o(u),s=function(){var e=new a.default({ripple:!0,theming:{},locale:{startYear:1900,endYear:2099,dateFormat:"YYYY-MM-DD",days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],shorterDays:["S","M","T","W","T","F","S"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],shorterMonths:["J","F","M","A","M","Ju","Ju","A","Se","O","N","D"],firstDayOfAWeek:0},router:{linkActiveClass:"router-link-active"}});return Object.defineProperties(e.theming,{metaColors:{get:function(){return l.default.metaColors},set:function(e){l.default.metaColors=e}},theme:{get:function(){return l.default.theme},set:function(e){l.default.theme=e}},enabled:{get:function(){return l.default.enabled},set:function(e){l.default.enabled=e}}}),e},t.default=function(e){e.material||(e.material=s(),e.prototype.$material=e.material)}},1:function(t,n){t.exports=e},144:function(e,t,n){e.exports=n(67)},2:function(e,t){throw Error("Module build failed: ModuleBuildError: Module build failed: TypeError: loaderContext.getResolve is not a function\n    at getWebpackImporter (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/sass-loader/dist/utils.js:278:37)\n    at Object.loader (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/sass-loader/dist/index.js:42:61)\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/webpack/lib/NormalModule.js:195:19\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:230:18\n    at runSyncOrAsync (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:143:3)\n    at iterateNormalLoaders (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:229:2)\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:202:4\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:70:14\n    at processTicksAndRejections (node:internal/process/task_queues:77:11)")},3:function(e,t,n){"use strict";var o,r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={};return r.default.util.defineReactive(t,"reactive",e),t.reactive},o=n(1),r=(function(e){return e&&e.__esModule?e:{default:e}})(o)},4:function(e,t,n){"use strict";var o,r,a,u,l;Object.defineProperty(t,"__esModule",{value:!0}),o=n(1),r=(function(e){return e&&e.__esModule?e:{default:e}})(o),a=null,u=null,l=null,t.default=new r.default({data:function(){return{prefix:"md-theme-",theme:"default",enabled:!0,metaColors:!1}},computed:{themeTarget:function(){return!this.$isServer&&document.documentElement},fullThemeName:function(){return this.getThemeName()}},watch:{enabled:{immediate:!0,handler:function(){var e=this.fullThemeName,t=this.themeTarget,n=this.enabled;t&&(n?(t.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)):(t.classList.remove(e),this.metaColors&&this.setHtmlMetaColors()))}},theme:function(e,t){var n=this.getThemeName,o=this.themeTarget;e=n(e),o.classList.remove(n(t)),o.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)},metaColors:function(e){e?this.setHtmlMetaColors(this.fullThemeName):this.setHtmlMetaColors()}},methods:{getAncestorTheme:function(e){var t,n=this;return e?(t=e.mdTheme,(function e(o){if(o){var r=o.mdTheme,a=o.$parent;return r&&r!==t?r:e(a)}return n.theme})(e.$parent)):null},getThemeName:function(e){var t=e||this.theme;return this.prefix+t},setMicrosoftColors:function(e){a&&a.setAttribute("content",e)},setThemeColors:function(e){u&&u.setAttribute("content",e)},setMaskColors:function(e){l&&l.setAttribute("color",e)},setHtmlMetaColors:function(e){var t,n="#fff";e&&(t=window.getComputedStyle(document.documentElement),n=t.getPropertyValue("--"+e+"-primary")),n&&(this.setMicrosoftColors(n),this.setThemeColors(n),this.setMaskColors(n))}},mounted:function(){var e=this;a=document.querySelector('[name="msapplication-TileColor"]'),u=document.querySelector('[name="theme-color"]'),l=document.querySelector('[rel="mask-icon"]'),this.enabled&&this.metaColors&&window.addEventListener("load",(function(){e.setHtmlMetaColors(e.fullThemeName)}))}})},67:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r,a,u,l;Object.defineProperty(t,"__esModule",{value:!0}),r=n(0),a=o(r),u=n(68),l=o(u),t.default=function(e){(0,a.default)(e),e.component(l.default.name,l.default)}},68:function(e,t){throw Error("Module build failed: Error: \n\nVue packages version mismatch:\n\n- vue@2.7.16\n- vue-template-compiler@2.5.16\n\nThis may cause things to work incorrectly. Make sure to use the same version for both.\nIf you are using vue-loader@>=10.0, simply update vue-template-compiler.\nIf you are using vue-loader@<10.0 or vueify, re-installing vue-loader/vueify should bump vue-template-compiler to the latest.\n\n    at Object.<anonymous> (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/vue-template-compiler/index.js:8:9)\n    at Module._compile (node:internal/modules/cjs/loader:1369:14)\n    at Module._extensions..js (node:internal/modules/cjs/loader:1427:10)\n    at Object.require.extensions.<computed> [as .js] (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/babel-register/lib/node.js:152:7)\n    at Module.load (node:internal/modules/cjs/loader:1206:32)\n    at Function.Module._load (node:internal/modules/cjs/loader:1022:12)\n    at Module.require (node:internal/modules/cjs/loader:1231:19)\n    at require (node:internal/modules/helpers:179:18)\n    at Object.<anonymous> (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/vue-loader/lib/parser.js:1:18)\n    at Module._compile (node:internal/modules/cjs/loader:1369:14)\n    at Module._extensions..js (node:internal/modules/cjs/loader:1427:10)\n    at Object.require.extensions.<computed> [as .js] (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/babel-register/lib/node.js:152:7)\n    at Module.load (node:internal/modules/cjs/loader:1206:32)\n    at Function.Module._load (node:internal/modules/cjs/loader:1022:12)\n    at Module.require (node:internal/modules/cjs/loader:1231:19)\n    at require (node:internal/modules/helpers:179:18)")}})}));