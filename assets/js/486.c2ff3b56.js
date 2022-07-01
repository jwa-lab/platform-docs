(self.webpackChunkplatform_docs=self.webpackChunkplatform_docs||[]).push([[486],{6742:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(7294),o=r(3727),a=r(3919),s=r(412);const i=(0,n.createContext)({collectLink:()=>{}});var u=r(4996);const c=function(e){let{isNavLink:t,to:r,href:c,activeClassName:l,isActive:f,"data-noBrokenLinkCheck":d,autoAddBaseUrl:p=!0,...g}=e;var v;const{withBaseUrl:m}=(0,u.C)(),h=(0,n.useContext)(i),y=r||c,b=(0,a.Z)(y),P=null==y?void 0:y.replace("pathname://",""),_=void 0!==P?(w=P,p&&(e=>e.startsWith("/"))(w)?m(w):w):void 0;var w;const D=(0,n.useRef)(!1),O=t?o.OL:o.rU,A=s.Z.canUseIntersectionObserver;let j;(0,n.useEffect)((()=>(!A&&b&&null!=_&&window.docusaurus.prefetch(_),()=>{A&&j&&j.disconnect()})),[_,A,b]);const S=null!==(v=null==_?void 0:_.startsWith("#"))&&void 0!==v&&v,E=!_||!b||S;return _&&b&&!S&&!d&&h.collectLink(_),E?n.createElement("a",Object.assign({href:_},y&&!b&&{target:"_blank",rel:"noopener noreferrer"},g)):n.createElement(O,Object.assign({},g,{onMouseEnter:()=>{D.current||null==_||(window.docusaurus.preload(_),D.current=!0)},innerRef:e=>{var t,r;A&&e&&b&&(t=e,r=()=>{null!=_&&window.docusaurus.prefetch(_)},j=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(j.unobserve(t),j.disconnect(),r())}))})),j.observe(t))},to:_||""},t&&{isActive:f,activeClassName:l}))}},4973:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f,I:()=>l});var n=r(7294);const o=/{\w+}/g,a="{}";function s(e,t){const r=[],s=e.replace(o,(e=>{const o=e.substr(1,e.length-2),s=null==t?void 0:t[o];if(void 0!==s){const e=n.isValidElement(s)?s:String(s);return r.push(e),a}return e}));return 0===r.length?e:r.every((e=>"string"==typeof e))?s.split(a).reduce(((e,t,n)=>{var o;return e.concat(t).concat(null!==(o=r[n])&&void 0!==o?o:"")}),""):s.split(a).reduce(((e,t,o)=>[...e,n.createElement(n.Fragment,{key:o},t,r[o])]),[])}function i(e){let{children:t,values:r}=e;return s(t,r)}var u=r(7529);function c(e){let{id:t,message:r}=e;var n;return null!==(n=u[null!=t?t:r])&&void 0!==n?n:r}function l(e,t){let{message:r,id:n}=e;var o;return s(null!==(o=c({message:r,id:n}))&&void 0!==o?o:r,t)}function f(e){let{children:t,id:r,values:o}=e;var a;const s=null!==(a=c({message:t,id:r}))&&void 0!==a?a:t;return n.createElement(i,{values:o},s)}},9935:(e,t,r)=>{"use strict";r.r(t),r.d(t,{DEFAULT_PLUGIN_ID:()=>n});const n="default"},3919:(e,t,r)=>{"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{Z:()=>o,b:()=>n})},8143:(e,t,r)=>{"use strict";r.r(t),r.d(t,{BrowserRouter:()=>n.VK,HashRouter:()=>n.UT,Link:()=>n.rU,MemoryRouter:()=>n.VA,NavLink:()=>n.OL,Prompt:()=>n.NL,Redirect:()=>n.l_,Route:()=>n.AW,Router:()=>n.F0,StaticRouter:()=>n.gx,Switch:()=>n.rs,generatePath:()=>n.Gn,matchPath:()=>n.LX,useHistory:()=>n.k6,useLocation:()=>n.TH,useParams:()=>n.UO,useRouteMatch:()=>n.$B,withRouter:()=>n.EN});var n=r(3727)},4996:(e,t,r)=>{"use strict";r.d(t,{C:()=>a,Z:()=>s});var n=r(2263),o=r(3919);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.default)();return{withBaseUrl:(r,n)=>function(e,t,r,n){let{forcePrependBaseUrl:a=!1,absolute:s=!1}=void 0===n?{}:n;if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(a)return t+r;const i=r.startsWith(t)?r:t+r.replace(/^\//,"");return s?e+i:i}(t,e,r,n)}}function s(e,t){void 0===t&&(t={});const{withBaseUrl:r}=a();return r(e,t)}},8084:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o,useAllPluginInstancesData:()=>a,usePluginData:()=>s});var n=r(2263);function o(){const{globalData:e}=(0,n.default)();if(!e)throw new Error("Docusaurus global data not found");return e}function a(e){const t=o()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function s(e,t){void 0===t&&(t="default");const r=a(e)[t];if(!r)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return r}},8408:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;const n=r(8143);t.getActivePlugin=function(e,t,r){void 0===r&&(r={});const o=Object.entries(e).find((e=>{let[r,o]=e;return!!n.matchPath(t,{path:o.path,exact:!1,strict:!1})})),a=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!a&&r.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((e=>e.path)).join(", "));return a};t.getLatestVersion=e=>e.versions.find((e=>e.isLast));t.getActiveVersion=(e,r)=>{const o=t.getLatestVersion(e);return[...e.versions.filter((e=>e!==o)),o].find((e=>!!n.matchPath(r,{path:e.path,exact:!1,strict:!1})))};t.getActiveDocContext=(e,r)=>{const o=t.getActiveVersion(e,r),a=null==o?void 0:o.docs.find((e=>!!n.matchPath(r,{path:e.path,exact:!0,strict:!1})));return{activeVersion:o,activeDoc:a,alternateDocVersions:a?function(t){const r={};return e.versions.forEach((e=>{e.docs.forEach((n=>{n.id===t&&(r[e.name]=n)}))})),r}(a.id):{}}};t.getDocVersionSuggestions=(e,r)=>{const n=t.getLatestVersion(e),o=t.getActiveDocContext(e,r),a=o.activeVersion!==n;return{latestDocSuggestion:a?null==o?void 0:o.alternateDocVersions[n.name]:void 0,latestVersionSuggestion:a?n:void 0}}},6730:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;const n=r(8143),o=r(8084),a=r(8408);t.useAllDocsData=()=>o.useAllPluginInstancesData("docusaurus-plugin-content-docs");t.useDocsData=e=>o.usePluginData("docusaurus-plugin-content-docs",e);t.useActivePlugin=function(e){void 0===e&&(e={});const r=t.useAllDocsData(),{pathname:o}=n.useLocation();return a.getActivePlugin(r,o,e)};t.useActivePluginAndVersion=function(e){void 0===e&&(e={});const r=t.useActivePlugin(e),{pathname:o}=n.useLocation();if(r){return{activePlugin:r,activeVersion:a.getActiveVersion(r.pluginData,o)}}};t.useVersions=e=>t.useDocsData(e).versions;t.useLatestVersion=e=>{const r=t.useDocsData(e);return a.getLatestVersion(r)};t.useActiveVersion=e=>{const r=t.useDocsData(e),{pathname:o}=n.useLocation();return a.getActiveVersion(r,o)};t.useActiveDocContext=e=>{const r=t.useDocsData(e),{pathname:o}=n.useLocation();return a.getActiveDocContext(r,o)};t.useDocVersionSuggestions=e=>{const r=t.useDocsData(e),{pathname:o}=n.useLocation();return a.getDocVersionSuggestions(r,o)}},1217:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(7294),o=r(9105),a=r(6700),s=r(4996);function i(e){let{title:t,description:r,keywords:i,image:u}=e;const{image:c}=(0,a.LU)(),l=(0,a.pe)(t),f=(0,s.Z)(u||c,{absolute:!0});return n.createElement(o.Z,null,t&&n.createElement("title",null,l),t&&n.createElement("meta",{property:"og:title",content:l}),r&&n.createElement("meta",{name:"description",content:r}),r&&n.createElement("meta",{property:"og:description",content:r}),i&&n.createElement("meta",{name:"keywords",content:Array.isArray(i)?i.join(","):i}),f&&n.createElement("meta",{property:"og:image",content:f}),f&&n.createElement("meta",{name:"twitter:image",content:f}),f&&n.createElement("meta",{name:"twitter:card",content:"summary_large_image"}))}},907:(e,t,r)=>{try{e.exports=r(6730)}catch(n){const t={};e.exports={useAllDocsData:()=>t,useActivePluginAndVersion:()=>{}}}},6700:(e,t,r)=>{"use strict";t.kM=t.L5=t.J=t.c2=t.pe=t.Mg=t.HX=t.os=t.bc=t.l5=t._f=t.WA=t.LU=void 0;var n=r(6668);Object.defineProperty(t,"LU",{enumerable:!0,get:function(){return n.useThemeConfig}});var o=r(12);Object.defineProperty(t,"WA",{enumerable:!0,get:function(){return o.createStorageSlot}}),Object.defineProperty(t,"_f",{enumerable:!0,get:function(){return o.listStorageKeys}});var a=r(4711);Object.defineProperty(t,"l5",{enumerable:!0,get:function(){return a.useAlternatePageUtils}});var s=r(7016);Object.defineProperty(t,"bc",{enumerable:!0,get:function(){return s.parseCodeBlockTitle}});var i=r(3320);Object.defineProperty(t,"os",{enumerable:!0,get:function(){return i.docVersionSearchTag}}),Object.defineProperty(t,"HX",{enumerable:!0,get:function(){return i.DEFAULT_SEARCH_TAG}});var u=r(3438);var c=r(9016);Object.defineProperty(t,"Mg",{enumerable:!0,get:function(){return c.isSamePath}});var l=r(2128);Object.defineProperty(t,"pe",{enumerable:!0,get:function(){return l.useTitleFormatter}});var f=r(8824);Object.defineProperty(t,"c2",{enumerable:!0,get:function(){return f.usePluralForm}});var d=r(7674);Object.defineProperty(t,"J",{enumerable:!0,get:function(){return d.useDocsPreferredVersion}});var p=r(8427);Object.defineProperty(t,"L5",{enumerable:!0,get:function(){return p.DocsPreferredVersionContextProvider}});var g=r(5281);Object.defineProperty(t,"kM",{enumerable:!0,get:function(){return g.ThemeClassNames}})},5281:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ThemeClassNames=void 0,t.ThemeClassNames={page:{blogListPage:"blog-list-page",blogPostPage:"blog-post-page",blogTagsListPage:"blog-tags-list-page",blogTagsPostPage:"blog-tags-post-page",docPage:"doc-page",mdxPage:"mdx-page"},wrapper:{main:"main-wrapper",blogPages:"blog-wrapper",docPages:"docs-wrapper",mdxPages:"mdx-wrapper"}}},7016:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.parseCodeBlockTitle=void 0;const r=/title=(["'])(.*?)\1/;t.parseCodeBlockTitle=function(e){var t,n;return null!==(n=null===(t=null==e?void 0:e.match(r))||void 0===t?void 0:t[2])&&void 0!==n?n:""}},8427:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionContext=t.DocsPreferredVersionContextProvider=void 0;const n=r(655),o=n.__importStar(r(7294)),a=r(6668),s=r(3438),i=r(907),u=n.__importDefault(r(3481));function c(e){let{pluginIds:t,versionPersistence:r,allDocsData:n}=e;const o={};return t.forEach((e=>{o[e]=function(e){const t=u.default.read(e,r);return n[e].versions.some((e=>e.name===t))?{preferredVersionName:t}:(u.default.clear(e,r),{preferredVersionName:null})}(e)})),o}function l(){const e=i.useAllDocsData(),t=a.useThemeConfig().docs.versionPersistence,r=o.useMemo((()=>Object.keys(e)),[e]),[n,s]=o.useState((()=>function(e){const t={};return e.forEach((e=>{t[e]={preferredVersionName:null}})),t}(r)));o.useEffect((()=>{s(c({allDocsData:e,versionPersistence:t,pluginIds:r}))}),[e,t,r]);return[n,o.useMemo((()=>({savePreferredVersion:function(e,r){u.default.save(e,t,r),s((t=>({...t,[e]:{preferredVersionName:r}})))}})),[s])]}const f=o.createContext(null);function d(e){let{children:t}=e;const r=l();return o.default.createElement(f.Provider,{value:r},t)}t.DocsPreferredVersionContextProvider=function(e){let{children:t}=e;return s.isDocsPluginEnabled?o.default.createElement(d,null,t):o.default.createElement(o.default.Fragment,null,t)},t.useDocsPreferredVersionContext=function(){const e=o.useContext(f);if(!e)throw new Error("Can't find docs preferred context, maybe you forgot to use the DocsPreferredVersionContextProvider ?");return e}},3481:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(12),o=e=>"docs-preferred-version-"+e,a={save:(e,t,r)=>{n.createStorageSlot(o(e),{persistence:t}).set(r)},read:(e,t)=>n.createStorageSlot(o(e),{persistence:t}).get(),clear:(e,t)=>{n.createStorageSlot(o(e),{persistence:t}).del()}};t.default=a},7674:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionByPluginId=t.useDocsPreferredVersion=void 0;const n=r(7294),o=r(8427),a=r(907),s=r(9935);t.useDocsPreferredVersion=function(e){void 0===e&&(e=s.DEFAULT_PLUGIN_ID);const t=a.useDocsData(e),[r,i]=o.useDocsPreferredVersionContext(),{preferredVersionName:u}=r[e];return{preferredVersion:u?t.versions.find((e=>e.name===u)):null,savePreferredVersionName:n.useCallback((t=>{i.savePreferredVersion(e,t)}),[i])}},t.useDocsPreferredVersionByPluginId=function(){const e=a.useAllDocsData(),[t]=o.useDocsPreferredVersionContext(),r=Object.keys(e),n={};return r.forEach((r=>{n[r]=function(r){const n=e[r],{preferredVersionName:o}=t[r];return o?n.versions.find((e=>e.name===o)):null}(r)})),n}},3438:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isDocsPluginEnabled=void 0;const n=r(907);t.isDocsPluginEnabled=!!n.useAllDocsData},2128:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useTitleFormatter=void 0;const n=r(655).__importDefault(r(2263));t.useTitleFormatter=e=>{const{siteConfig:t={}}=n.default(),{title:r,titleDelimiter:o="|"}=t;return e&&e.trim().length?e.trim()+" "+o+" "+r:r}},9016:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSamePath=void 0;t.isSamePath=(e,t)=>{const r=e=>!e||(null==e?void 0:e.endsWith("/"))?e:e+"/";return r(e)===r(t)}},3320:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.docVersionSearchTag=t.DEFAULT_SEARCH_TAG=void 0,t.DEFAULT_SEARCH_TAG="default",t.docVersionSearchTag=function(e,t){return"docs-"+e+"-"+t}},12:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.listStorageKeys=t.createStorageSlot=void 0;const r="localStorage";function n(e){if(void 0===e&&(e=r),"undefined"==typeof window)throw new Error("Browser storage is not available on NodeJS / Docusaurus SSR process");if("none"===e)return null;try{return window[e]}catch(n){return t=n,o||(console.warn("Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an Iframe, in an Incognito browser session, or using too strict browser privacy settings.",t),o=!0),null}var t}let o=!1;const a={get:()=>null,set:()=>{},del:()=>{}};t.createStorageSlot=(e,t)=>{if("undefined"==typeof window)return function(e){function t(){throw new Error("Illegal storage API usage for storage key="+e+".\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers.")}return{get:t,set:t,del:t}}(e);const r=n(null==t?void 0:t.persistence);return null===r?a:{get:()=>r.getItem(e),set:t=>r.setItem(e,t),del:()=>r.removeItem(e)}},t.listStorageKeys=function(e){void 0===e&&(e=r);const t=n(e);if(!t)return[];const o=[];for(let r=0;r<t.length;r+=1){const e=t.key(r);null!==e&&o.push(e)}return o}},4711:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useAlternatePageUtils=void 0;const n=r(655).__importDefault(r(2263)),o=r(8143);t.useAlternatePageUtils=function(){const{siteConfig:{baseUrl:e,url:t},i18n:{defaultLocale:r,currentLocale:a}}=n.default(),{pathname:s}=o.useLocation(),i=a===r?e:e.replace("/"+a+"/","/"),u=s.replace(e,"");return{createUrl:function(e){let{locale:n,fullyQualified:o}=e;return""+(o?t:"")+function(e){return e===r?""+i:""+i+e+"/"}(n)+u}}}},8824:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.usePluralForm=void 0;const n=r(655),o=r(7294),a=n.__importDefault(r(2263)),s=["zero","one","two","few","many","other"];function i(e){return s.filter((t=>e.includes(t)))}const u={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=a.default();return o.useMemo((()=>{if(!Intl.PluralRules)return console.error("Intl.PluralRules not available!\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n        "),u;try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error("Failed to use Intl.PluralRules for locale="+e+".\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n"),u}}),[e])}t.usePluralForm=function(){const e=c();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];{n.length>r.pluralForms.length&&console.error("For locale="+r.locale+", a maximum of "+r.pluralForms.length+" plural forms are expected ("+r.pluralForms+"), but the message contains "+n.length+" plural forms: "+e+" ");const o=r.select(t),a=r.pluralForms.indexOf(o);return n[Math.min(a,n.length-1)]}}(r,t,e)}}},6668:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useThemeConfig=void 0;const n=r(655).__importDefault(r(2263));t.useThemeConfig=function(){return n.default().siteConfig.themeConfig}},6010:(e,t,r)=>{"use strict";function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}r.d(t,{Z:()=>o})},655:(e,t,r)=>{"use strict";r.r(t),r.d(t,{__assign:()=>a,__asyncDelegator:()=>_,__asyncGenerator:()=>P,__asyncValues:()=>w,__await:()=>b,__awaiter:()=>l,__classPrivateFieldGet:()=>S,__classPrivateFieldIn:()=>V,__classPrivateFieldSet:()=>E,__createBinding:()=>d,__decorate:()=>i,__exportStar:()=>p,__extends:()=>o,__generator:()=>f,__importDefault:()=>j,__importStar:()=>A,__makeTemplateObject:()=>D,__metadata:()=>c,__param:()=>u,__read:()=>v,__rest:()=>s,__spread:()=>m,__spreadArray:()=>y,__spreadArrays:()=>h,__values:()=>g});var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var a=function(){return a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)};function s(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function i(e,t,r,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s}function u(e,t){return function(r,n){t(r,n,e)}}function c(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function l(e,t,r,n){return new(r||(r=Promise))((function(o,a){function s(e){try{u(n.next(e))}catch(t){a(t)}}function i(e){try{u(n.throw(e))}catch(t){a(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,i)}u((n=n.apply(e,t||[])).next())}))}function f(e,t){var r,n,o,a,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,n=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(i){a=[6,i],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}}var d=Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]};function p(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||d(t,e,r)}function g(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function v(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,a=r.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(n=a.next()).done;)s.push(n.value)}catch(i){o={error:i}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return s}function m(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(v(arguments[t]));return e}function h(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var a=arguments[t],s=0,i=a.length;s<i;s++,o++)n[o]=a[s];return n}function y(e,t,r){if(r||2===arguments.length)for(var n,o=0,a=t.length;o<a;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}function b(e){return this instanceof b?(this.v=e,this):new b(e)}function P(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),a=[];return n={},s("next"),s("throw"),s("return"),n[Symbol.asyncIterator]=function(){return this},n;function s(e){o[e]&&(n[e]=function(t){return new Promise((function(r,n){a.push([e,t,r,n])>1||i(e,t)}))})}function i(e,t){try{(r=o[e](t)).value instanceof b?Promise.resolve(r.value.v).then(u,c):l(a[0][2],r)}catch(n){l(a[0][3],n)}var r}function u(e){i("next",e)}function c(e){i("throw",e)}function l(e,t){e(t),a.shift(),a.length&&i(a[0][0],a[0][1])}}function _(e){var t,r;return t={},n("next"),n("throw",(function(e){throw e})),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,o){t[n]=e[n]?function(t){return(r=!r)?{value:b(e[n](t)),done:"return"===n}:o?o(t):t}:o}}function w(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=g(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise((function(n,o){(function(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)})(n,o,(t=e[r](t)).done,t.value)}))}}}function D(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var O=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function A(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&d(t,e,r);return O(t,e),t}function j(e){return e&&e.__esModule?e:{default:e}}function S(e,t,r,n){if("a"===r&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)}function E(e,t,r,n,o){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?o.call(e,r):o?o.value=r:t.set(e,r),r}function V(e,t){if(null===t||"object"!=typeof t&&"function"!=typeof t)throw new TypeError("Cannot use 'in' operator on non-object");return"function"==typeof e?t===e:e.has(t)}}}]);