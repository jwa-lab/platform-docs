"use strict";(self.webpackChunkplatform_docs=self.webpackChunkplatform_docs||[]).push([[2877],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,d=u["".concat(l,".").concat(f)]||u[f]||p[f]||a;return n?r.createElement(d,i(i({ref:t},m),{},{components:n})):r.createElement(d,i({ref:t},m))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3650:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:1},l={unversionedId:"commands/commands",id:"commands/commands",isDocsHomePage:!1,title:"Overview",description:"The Community Platform is only a tool orchestrating a number of services offering REST Apis to their users.",source:"@site/docs/commands/commands.md",sourceDirName:"commands",slug:"/commands/commands",permalink:"/platform-docs/docs/commands/commands",editUrl:"https://github.com/jwa-lab/platform-docs/docs/docs/commands/commands.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"PlayTiX Connect",permalink:"/platform-docs/docs/authentication/playtix-connect"},next:{title:"start",permalink:"/platform-docs/docs/commands/start"}},c=[{value:"Help",id:"help",children:[]}],m={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Community Platform is only a tool orchestrating a number of services offering ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference"},"REST Apis")," to their users.\nAs a result, the platform itself doesn't offer many features. In this section, we'll cover the commands that the platform offers."),(0,a.kt)("h3",{id:"help"},"Help"),(0,a.kt)("p",null,"At anytime, you can use the tool to see the available options using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," option."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ jwalab --help\n\nUsage: jwalab a.k.a JWA Community platform [global options] command\n\nJWA_LAB - v0.1\nRun a JWA Community platform (jwalab) on your local machine!\n\n\nOptions:\n  -V, --version   output the version number\n  -h, --help      display help for command\n\nCommands:\n  start           start the jwalab environment\n  stop            stop the jwalab environment\n  kill            kill the jwalab environment\n  pull            download the latest versions of the platform's services\n  tezos-client    run a command in the tezos-client\n  granabox        run a command in granabox\n  list-services   list all running services and the port they expose\n  logs            view platform logs\n  help [command]  display help for command\n")),(0,a.kt)("p",null,"These commands allow us to start/stop the platform and do some basic observability."))}p.isMDXComponent=!0}}]);