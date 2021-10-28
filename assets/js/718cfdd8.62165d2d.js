"use strict";(self.webpackChunkplatform_docs=self.webpackChunkplatform_docs||[]).push([[9843],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3644:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:2},u={unversionedId:"tutorial/authorization",id:"tutorial/authorization",isDocsHomePage:!1,title:"Authorization",description:"To use the platform, we need to be authenticated. Fortunately, the community platform embeds a mock authentication service.",source:"@site/docs/tutorial/authorization.md",sourceDirName:"tutorial",slug:"/tutorial/authorization",permalink:"/platform-docs/docs/tutorial/authorization",editUrl:"https://github.com/jwa-lab/platform-docs/docs/docs/tutorial/authorization.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/platform-docs/docs/tutorial/getting-started"},next:{title:"Create a new item",permalink:"/platform-docs/docs/tutorial/create-an-item"}},c=[],s={toc:c};function p(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To use the platform, we need to be authenticated. Fortunately, the community platform embeds a mock authentication service."),(0,a.kt)("p",null,"Let's obtain a ",(0,a.kt)("inlineCode",{parentName:"p"},"user")," Bearer Token:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"% curl --location --request GET 'http://localhost:8999/oauth2/default/v1/token'\n")),(0,a.kt)("p",null,"This will return a JWT which looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "token": "eyJ0eXAi...RGImmtDsSaa4ua_gnuyLvA"\n}\n')),(0,a.kt)("p",null,"In the following setp of the tutorial, a studio token will be required. In order to get one, you can call the same endpoint with the parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"token_type=studio")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"% curl --location --request GET 'http://localhost:8999/oauth2/default/v1/token?token_type=studio'\n")),(0,a.kt)("p",null,"A studio token differs from a user token at the ",(0,a.kt)("inlineCode",{parentName:"p"},"studio")," claim level stored in the token. This claim will allow you to operate as a studio, and therefore use our studio-oriented APIs. "),(0,a.kt)("p",null,'Then click on the "PlayTiX | JWA Platform API Definition" Collection and paste the token (',(0,a.kt)("inlineCode",{parentName:"p"},"eyJ0....Lva"),") inside the Token field. Type should be set to ",(0,a.kt)("inlineCode",{parentName:"p"},"Bearer Token")," like so:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Bearer token",src:n(4003).Z})),(0,a.kt)("p",null,"You will have to configure the token everytime the platform restarts."),(0,a.kt)("p",null,"Now that we are ready to go, let's create NFTs!"))}p.isMDXComponent=!0},4003:function(e,t,n){t.Z=n.p+"assets/images/bearer-token-postman-34e049ee1d2fe902245ad1f8b339ec5a.png"}}]);