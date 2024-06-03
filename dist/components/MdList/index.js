/*!
 * vue-material v1.0.1
 * Made with <3 by marcosmoura 2024
 * Released under the MIT License.
 */
!(function(e,t){var o,n;if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("vue"));else if("function"==typeof define&&define.amd)define(["vue"],t);else{o=t("object"==typeof exports?require("vue"):e.Vue);for(n in o)("object"==typeof exports?exports:e)[n]=o[n]}})("undefined"!=typeof self?self:this,(function(e){return (function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};return t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=148)})({0:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var r,a,l,u,s;Object.defineProperty(t,"__esModule",{value:!0}),o(2),r=o(3),a=n(r),l=o(4),u=n(l),s=function(){var e=new a.default({ripple:!0,theming:{},locale:{startYear:1900,endYear:2099,dateFormat:"YYYY-MM-DD",days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],shorterDays:["S","M","T","W","T","F","S"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],shorterMonths:["J","F","M","A","M","Ju","Ju","A","Se","O","N","D"],firstDayOfAWeek:0},router:{linkActiveClass:"router-link-active"}});return Object.defineProperties(e.theming,{metaColors:{get:function(){return u.default.metaColors},set:function(e){u.default.metaColors=e}},theme:{get:function(){return u.default.theme},set:function(e){u.default.theme=e}},enabled:{get:function(){return u.default.enabled},set:function(e){u.default.enabled=e}}}),e},t.default=function(e){e.material||(e.material=s(),e.prototype.$material=e.material)}},1:function(t,o){t.exports=e},148:function(e,t,o){e.exports=o(73)},2:function(e,t){throw Error("Module build failed: ModuleBuildError: Module build failed: TypeError: loaderContext.getResolve is not a function\n    at getWebpackImporter (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/sass-loader/dist/utils.js:278:37)\n    at Object.loader (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/sass-loader/dist/index.js:42:61)\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/webpack/lib/NormalModule.js:195:19\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:230:18\n    at runSyncOrAsync (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:143:3)\n    at iterateNormalLoaders (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:229:2)\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:202:4\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:70:14\n    at processTicksAndRejections (node:internal/process/task_queues:77:11)")},3:function(e,t,o){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={};return r.default.util.defineReactive(t,"reactive",e),t.reactive},n=o(1),r=(function(e){return e&&e.__esModule?e:{default:e}})(n)},4:function(e,t,o){"use strict";var n,r,a,l,u;Object.defineProperty(t,"__esModule",{value:!0}),n=o(1),r=(function(e){return e&&e.__esModule?e:{default:e}})(n),a=null,l=null,u=null,t.default=new r.default({data:function(){return{prefix:"md-theme-",theme:"default",enabled:!0,metaColors:!1}},computed:{themeTarget:function(){return!this.$isServer&&document.documentElement},fullThemeName:function(){return this.getThemeName()}},watch:{enabled:{immediate:!0,handler:function(){var e=this.fullThemeName,t=this.themeTarget,o=this.enabled;t&&(o?(t.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)):(t.classList.remove(e),this.metaColors&&this.setHtmlMetaColors()))}},theme:function(e,t){var o=this.getThemeName,n=this.themeTarget;e=o(e),n.classList.remove(o(t)),n.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)},metaColors:function(e){e?this.setHtmlMetaColors(this.fullThemeName):this.setHtmlMetaColors()}},methods:{getAncestorTheme:function(e){var t,o=this;return e?(t=e.mdTheme,(function e(n){if(n){var r=n.mdTheme,a=n.$parent;return r&&r!==t?r:e(a)}return o.theme})(e.$parent)):null},getThemeName:function(e){var t=e||this.theme;return this.prefix+t},setMicrosoftColors:function(e){a&&a.setAttribute("content",e)},setThemeColors:function(e){l&&l.setAttribute("content",e)},setMaskColors:function(e){u&&u.setAttribute("color",e)},setHtmlMetaColors:function(e){var t,o="#fff";e&&(t=window.getComputedStyle(document.documentElement),o=t.getPropertyValue("--"+e+"-primary")),o&&(this.setMicrosoftColors(o),this.setThemeColors(o),this.setMaskColors(o))}},mounted:function(){var e=this;a=document.querySelector('[name="msapplication-TileColor"]'),l=document.querySelector('[name="theme-color"]'),u=document.querySelector('[rel="mask-icon"]'),this.enabled&&this.metaColors&&window.addEventListener("load",(function(){e.setHtmlMetaColors(e.fullThemeName)}))}})},73:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var r,a,l,u,s,d;Object.defineProperty(t,"__esModule",{value:!0}),r=o(0),a=n(r),l=o(74),u=n(l),s=o(75),d=n(s),t.default=function(e){(0,a.default)(e),e.component(u.default.name,u.default),e.component(d.default.name,d.default)}},74:function(e,t){throw Error("Module build failed: Error: \n\nVue packages version mismatch:\n\n- vue@2.7.16\n- vue-template-compiler@2.5.16\n\nThis may cause things to work incorrectly. Make sure to use the same version for both.\nIf you are using vue-loader@>=10.0, simply update vue-template-compiler.\nIf you are using vue-loader@<10.0 or vueify, re-installing vue-loader/vueify should bump vue-template-compiler to the latest.\n\n    at Object.<anonymous> (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/vue-template-compiler/index.js:8:9)\n    at Module._compile (node:internal/modules/cjs/loader:1369:14)\n    at Module._extensions..js (node:internal/modules/cjs/loader:1427:10)\n    at Object.require.extensions.<computed> [as .js] (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/babel-register/lib/node.js:152:7)\n    at Module.load (node:internal/modules/cjs/loader:1206:32)\n    at Function.Module._load (node:internal/modules/cjs/loader:1022:12)\n    at Module.require (node:internal/modules/cjs/loader:1231:19)\n    at require (node:internal/modules/helpers:179:18)\n    at Object.<anonymous> (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/vue-loader/lib/parser.js:1:18)\n    at Module._compile (node:internal/modules/cjs/loader:1369:14)\n    at Module._extensions..js (node:internal/modules/cjs/loader:1427:10)\n    at Object.require.extensions.<computed> [as .js] (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/babel-register/lib/node.js:152:7)\n    at Module.load (node:internal/modules/cjs/loader:1206:32)\n    at Function.Module._load (node:internal/modules/cjs/loader:1022:12)\n    at Module.require (node:internal/modules/cjs/loader:1231:19)\n    at require (node:internal/modules/helpers:179:18)")},75:function(e,t){throw Error("Module build failed: Error: \n\nVue packages version mismatch:\n\n- vue@2.7.16\n- vue-template-compiler@2.5.16\n\nThis may cause things to work incorrectly. Make sure to use the same version for both.\nIf you are using vue-loader@>=10.0, simply update vue-template-compiler.\nIf you are using vue-loader@<10.0 or vueify, re-installing vue-loader/vueify should bump vue-template-compiler to the latest.\n\n    at Object.<anonymous> (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/vue-template-compiler/index.js:8:9)\n    at Module._compile (node:internal/modules/cjs/loader:1369:14)\n    at Module._extensions..js (node:internal/modules/cjs/loader:1427:10)\n    at Object.require.extensions.<computed> [as .js] (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/babel-register/lib/node.js:152:7)\n    at Module.load (node:internal/modules/cjs/loader:1206:32)\n    at Function.Module._load (node:internal/modules/cjs/loader:1022:12)\n    at Module.require (node:internal/modules/cjs/loader:1231:19)\n    at require (node:internal/modules/helpers:179:18)\n    at Object.<anonymous> (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/vue-loader/lib/parser.js:1:18)\n    at Module._compile (node:internal/modules/cjs/loader:1369:14)\n    at Module._extensions..js (node:internal/modules/cjs/loader:1427:10)\n    at Object.require.extensions.<computed> [as .js] (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/babel-register/lib/node.js:152:7)\n    at Module.load (node:internal/modules/cjs/loader:1206:32)\n    at Function.Module._load (node:internal/modules/cjs/loader:1022:12)\n    at Module.require (node:internal/modules/cjs/loader:1231:19)\n    at require (node:internal/modules/helpers:179:18)")}})}));