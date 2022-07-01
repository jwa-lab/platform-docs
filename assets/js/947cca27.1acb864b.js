"use strict";(self.webpackChunkplatform_docs=self.webpackChunkplatform_docs||[]).push([[8942],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>d});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var c=n.createContext({}),p=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},m=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),u=p(r),d=o,f=u["".concat(c,".").concat(d)]||u[d]||l[d]||a;return r?n.createElement(f,s(s({ref:e},m),{},{components:r})):n.createElement(f,s({ref:e},m))}));function d(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,s=new Array(a);s[0]=u;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},876:(t,e,r)=>{r.r(e),r.d(e,{default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:2},s={unversionedId:"commands/start",id:"commands/start",isDocsHomePage:!1,title:"start",description:"start is the first command to run once the platform is installed.",source:"@site/docs/commands/start.md",sourceDirName:"commands",slug:"/commands/start",permalink:"/platform-docs/docs/commands/start",editUrl:"https://github.com/jwa-lab/platform-docs/docs/docs/commands/start.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/platform-docs/docs/commands/commands"},next:{title:"stop",permalink:"/platform-docs/docs/commands/stop"}},i=[{value:"Verify",id:"verify",children:[]},{value:"Troubleshoot",id:"troubleshoot",children:[]}],c={toc:i};function p(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"start")," is the first command to run once the platform is ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started"},"installed"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ jwalab start\n")),(0,o.kt)("p",null,"Start will orchestrate the start up of all the platform's services in the right order as well as configure all the services so they find each other and work together to offer their services."),(0,o.kt)("p",null,"The platform doesn't maintain state between restarts, so if you start, stop, and start the platform again it will start with a completely fresh state."),(0,o.kt)("h2",{id:"verify"},"Verify"),(0,o.kt)("p",null,"To verify if ",(0,o.kt)("inlineCode",{parentName:"p"},"start")," worked, you can run a ",(0,o.kt)("inlineCode",{parentName:"p"},"docker ps -f name=^/community-platform")," and you should see the following"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'% docker ps -f name=^/community-platform\nCONTAINER ID   IMAGE                                COMMAND                  CREATED         STATUS         PORTS                                                                                         NAMES\nfbbb3d82e671   blockwatch/tzstats                   "/bin/sh -c serve"       8 minutes ago   Up 8 minutes   8000/tcp, 0.0.0.0:8001->8001/tcp, :::8001->8001/tcp                                           community-platform_tzstats_1\n56bcfc485126   jwalab/tezos-work-queue:0.0.1        "sh -c \'sleep 10 && \u2026"   8 minutes ago   Up 8 minutes                                                                                                 community-platform_tezos-work-queue_1\n17905a1b0463   jwalab/item-service:0.0.2            "sh -c \'npm run seed\u2026"   8 minutes ago   Up 8 minutes                                                                                                 community-platform_item-service_1\n876d0ce8d712   blockwatch/tzindex:v9.1-rc2          "docker-entrypoint.s\u2026"   8 minutes ago   Up 8 minutes   8000/tcp, 0.0.0.0:8002->8002/tcp, :::8002->8002/tcp                                           community-platform_tzindex_1\n8e079198af28   jwalab/airlock:0.0.8                 "npm run start"          8 minutes ago   Up 8 minutes   0.0.0.0:8000->8000/tcp, :::8000->8000/tcp                                                     community-platform_airlock_1\n60a45d9ff8bd   tqtezos/flextesa:20210602            "granabox start"         8 minutes ago   Up 8 minutes   0.0.0.0:20000->20000/tcp, :::20000->20000/tcp                                                 community-platform_tzbox_1\nb373edf3ce8b   nats:latest                          "/nats-server -js"       8 minutes ago   Up 8 minutes   0.0.0.0:4222->4222/tcp, :::4222->4222/tcp, 0.0.0.0:51762->6222/tcp, 0.0.0.0:51763->8222/tcp   community-platform_nats_1\n70555597b654   postgres                             "docker-entrypoint.s\u2026"   8 minutes ago   Up 8 minutes   0.0.0.0:5432->5432/tcp, :::5432->5432/tcp                                                     community-platform_postgres_1\n270722eb8fdd   jwalab/authorization-service:0.0.4   "npm run start"          8 minutes ago   Up 8 minutes   0.0.0.0:8999->8999/tcp, :::8999->8999/tcp                                                     community-platform_authorization-service_1\ndf16bdf96d9d   swaggerapi/swagger-ui                "/docker-entrypoint.\u2026"   8 minutes ago   Up 8 minutes   80/tcp, 0.0.0.0:8080->8080/tcp, :::8080->8080/tcp                                             community-platform_swagger-ui_1\n')),(0,o.kt)("h2",{id:"troubleshoot"},"Troubleshoot"),(0,o.kt)("p",null,"To start, the platform will need access to a number of ports, and some of they may already be used on your local machine. Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jwa-lab/community-platform#changing-ports"},"platform's documentation")," to see how to remap the ports."))}p.isMDXComponent=!0}}]);