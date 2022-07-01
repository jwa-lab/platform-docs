"use strict";(self.webpackChunkplatform_docs=self.webpackChunkplatform_docs||[]).push([[2862],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>d});var o=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=o.createContext({}),c=function(t){var e=o.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=c(t.components);return o.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},u=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=c(n),d=a,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return n?o.createElement(h,l(l({ref:e},p),{},{components:n})):o.createElement(h,l({ref:e},p))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5193:(t,e,n)=>{n.r(e),n.d(e,{default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>i});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:1},l={unversionedId:"tutorial/getting-started",id:"tutorial/getting-started",isDocsHomePage:!1,title:"Getting started",description:"What will we do?",source:"@site/docs/tutorial/getting-started.md",sourceDirName:"tutorial",slug:"/tutorial/getting-started",permalink:"/platform-docs/docs/tutorial/getting-started",editUrl:"https://github.com/jwa-lab/platform-docs/docs/docs/tutorial/getting-started.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"What is the JWA Platform?",permalink:"/platform-docs/docs/intro"},next:{title:"Authorization",permalink:"/platform-docs/docs/tutorial/authorization"}},i=[{value:"What will we do?",id:"what-will-we-do",children:[]},{value:"What do you need?",id:"what-do-you-need",children:[]},{value:"Related documentation",id:"related-documentation",children:[]},{value:"Install",id:"install",children:[]},{value:"Start",id:"start",children:[]},{value:"Documentation",id:"documentation",children:[{value:"Swagger",id:"swagger",children:[]},{value:"Postman",id:"postman",children:[]}]}],s={toc:i};function c(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,o.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-will-we-do"},"What will we do?"),(0,a.kt)("p",null,"By following this tutorial you will be able to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Run a complete JWA Platform on your local machine"),(0,a.kt)("li",{parentName:"ul"},"Create a video game item and allocate a finite quantity"),(0,a.kt)("li",{parentName:"ul"},"Tokenize it on the blockchain (mint an NFT)"),(0,a.kt)("li",{parentName:"ul"},"Assign the item to a user and make it evolve"),(0,a.kt)("li",{parentName:"ul"},"Transfer the item to another user")),(0,a.kt)("h2",{id:"what-do-you-need"},"What do you need?"),(0,a.kt)("p",null,"To use this platform, you will need the following tools installed on your local machine:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node.js")," with ",(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/"},"NPM"),", to install the platform"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"Docker"),", to run the platform"),(0,a.kt)("li",{parentName:"ol"},"An HTTP Client such as ",(0,a.kt)("a",{parentName:"li",href:"https://www.postman.com/"},"Postman")," or ",(0,a.kt)("a",{parentName:"li",href:"https://curl.se/"},"curl")," to make API calls.")),(0,a.kt)("h2",{id:"related-documentation"},"Related documentation"),(0,a.kt)("p",null,"We suggest you to complete the tutorial first, but if you're eager to understand how items/instances are tokenized on the blockchain, you may read ",(0,a.kt)("a",{parentName:"p",href:"/docs/tokenization/tokenization"},"the Tokenization documentation")," first.\nThe ",(0,a.kt)("a",{parentName:"p",href:"/docs/tokenization/tezos"},"Tezos documentation")," helps you locate your tokenized items and instances in Tezos."),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("p",null,"Make sure you have ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Docker")," and ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"Node.js")," installed first."),(0,a.kt)("p",null,"Then simply install the community platform globally on your machine:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"% npm install -g @jwalab/community-platform\n\nchanged 11 packages, and audited 12 packages in 2s\n\n2 packages are looking for funding\n  run `npm fund` for details\n\nfound 0 vulnerabilities\n")),(0,a.kt)("p",null,"You should have it globally installed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"% jwalab --help\n\nUsage: jwalab a.k.a JWA Community platform [global options] command\n\nJWA_LAB - v0.1.0\nRun a JWA Community platform (jwalab) on your local machine!\n\n\nOptions:\n  -V, --version   output the version number\n  -h, --help      display help for command\n\nCommands:\n  start           start the jwalab environment\n  stop            stop the jwalab environment\n  kill            kill the jwalab environment\n  pull            download the latest versions of the platform's services\n  tezos-client    run a command in the tezos-client\n  granabox        run a command in granabox\n  help [command]  display help for command\n")),(0,a.kt)("h2",{id:"start"},"Start"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'% jwalab start\n\nCreating network "community-platform_default" with the default driver\nCreating community-platform_postgres_1              ... done\nCreating community-platform_swagger-ui_1            ... done\nCreating community-platform_tzbox_1                 ... done\nCreating community-platform_authorization-service_1 ... done\nCreating community-platform_nats_1                  ... done\nCreating community-platform_tzindex_1               ... done\nCreating community-platform_item-service_1          ... done\nCreating community-platform_airlock_1               ... done\nCreating community-platform_tzstats_1               ... done\nCreating community-platform_tezos-work-queue_1      ... done\n')),(0,a.kt)("p",null,"Verify that everything is running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},' % docker ps\nCONTAINER ID   IMAGE                                COMMAND                  CREATED          STATUS          PORTS                                                                                                                             NAMES\ned53821329cc   jwalab/tezos-work-queue:0.0.1        "sh -c \'sleep 10 && \u2026"   47 seconds ago   Up 34 seconds                                                                                                                                     community-platform_tezos-work-queue_1\nefda141448be   blockwatch/tzstats                   "/bin/sh -c serve"       47 seconds ago   Up 46 seconds   8000/tcp, 0.0.0.0:8001->8001/tcp, :::8001->8001/tcp                                                                               community-platform_tzstats_1\nde836f7d94d9   jwalab/airlock:0.0.8                 "npm run start"          47 seconds ago   Up 46 seconds   0.0.0.0:8000->8000/tcp, :::8000->8000/tcp                                                                                         community-platform_airlock_1\nf73cc040c295   jwalab/item-service:0.0.1            "sh -c \'npm run seed\u2026"   47 seconds ago   Up 47 seconds                                                                                                                                     community-platform_item-service_1\n8dfa18c2a4f3   blockwatch/tzindex:v9.1-rc2          "docker-entrypoint.s\u2026"   48 seconds ago   Up 47 seconds   8000/tcp, 0.0.0.0:8002->8002/tcp, :::8002->8002/tcp                                                                               community-platform_tzindex_1\na72815bcfab9   nats:latest                          "/nats-server -js"       49 seconds ago   Up 47 seconds   0.0.0.0:4222->4222/tcp, :::4222->4222/tcp, 0.0.0.0:6222->6222/tcp, :::6222->6222/tcp, 0.0.0.0:8222->8222/tcp, :::8222->8222/tcp   community-platform_nats_1\n57a624580769   tqtezos/flextesa:20210602            "granabox start"         49 seconds ago   Up 48 seconds   0.0.0.0:20000->20000/tcp, :::20000->20000/tcp                                                                                     community-platform_tzbox_1\nbba743701610   jwalab/authorization-service:0.0.4   "npm run start"          49 seconds ago   Up 47 seconds   0.0.0.0:8999->8999/tcp, :::8999->8999/tcp                                                                                         community-platform_authorization-service_1\n9be090c0d0d7   swaggerapi/swagger-ui                "/docker-entrypoint.\u2026"   49 seconds ago   Up 48 seconds   80/tcp, 0.0.0.0:80->8080/tcp, :::80->8080/tcp                                                                                     community-platform_swagger-ui_1\n568c0bc9d977   postgres                             "docker-entrypoint.s\u2026"   49 seconds ago   Up 48 seconds   0.0.0.0:5432->5432/tcp, :::5432->5432/tcp                                                                                         community-platform_postgres_1\n')),(0,a.kt)("p",null,"You're now up and running!"),(0,a.kt)("h2",{id:"documentation"},"Documentation"),(0,a.kt)("p",null,"The platform offers its documentation as OpenAPI specifications.\nThis means you can view it in a tool like swagger, or load it up in Postman."),(0,a.kt)("h3",{id:"swagger"},"Swagger"),(0,a.kt)("p",null,"To see what the documentation looks like in Swagger, simply open ",(0,a.kt)("a",{parentName:"p",href:"http://localhost/"},"localhost"),". It should looks like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"swagger",src:n(221).Z})),(0,a.kt)("h3",{id:"postman"},"Postman"),(0,a.kt)("p",null,"Even better, we can run the documentation using Postman or equivalent:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open Postman"),(0,a.kt)("li",{parentName:"ol"},"click Import in the top-left corner"),(0,a.kt)("li",{parentName:"ol"},"In the new window, click on link and enter ",(0,a.kt)("inlineCode",{parentName:"li"},"http://localhost:8000/docs")),(0,a.kt)("li",{parentName:"ol"},"click Continue, then Import."),(0,a.kt)("li",{parentName:"ol"},'You should now see the PlayTiX collection under "Collections"')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"postman",src:n(6548).Z})),(0,a.kt)("p",null,"We recommend using the Postman option to follow this tutorial."))}c.isMDXComponent=!0},221:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/openapi-specifications-11d1178fb05e66fa1d0e0331ea55f4ce.png"},6548:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/postman-docs-4c056758d7c29877188b5e77b18723aa.png"}}]);