"use strict";(self.webpackChunkplatform_docs=self.webpackChunkplatform_docs||[]).push([[818],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3603:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:6},s={unversionedId:"commands/tezos-client",id:"commands/tezos-client",isDocsHomePage:!1,title:"tezos-client",description:"The community platform is also running a tezos client. The tezos client is a CLI that issues RPC calls to the tezos sandbox.",source:"@site/docs/commands/tezos-client.md",sourceDirName:"commands",slug:"/commands/tezos-client",permalink:"/platform-docs/docs/commands/tezos-client",editUrl:"https://github.com/jwa-lab/platform-docs/docs/docs/commands/tezos-client.md",version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"pull",permalink:"/platform-docs/docs/commands/pull"},next:{title:"granabox (protocol)",permalink:"/platform-docs/docs/commands/granabox"}},c=[],i={toc:c};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The community platform is also running a tezos client. The tezos client is a CLI that issues ",(0,o.kt)("inlineCode",{parentName:"p"},"RPC")," calls to the tezos sandbox.\nThis is different than the ",(0,o.kt)("inlineCode",{parentName:"p"},"<protocol>box")," command as it doesn't manage the node but consumes it."),(0,o.kt)("p",null,"You can use the built-in tezos client to create wallets, originate contracts, transfer tezos between addresses and many other things."),(0,o.kt)("p",null,"To see how to use the client, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://assets.tqtezos.com/docs/setup/1-tezos-client/"},"official documentation"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ jwalab tezos-client -- --help\n")))}l.isMDXComponent=!0}}]);