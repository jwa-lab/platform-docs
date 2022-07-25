"use strict";(self.webpackChunkplatform_docs=self.webpackChunkplatform_docs||[]).push([[968],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),p=r,f=u["".concat(c,".").concat(p)]||u[p]||h[p]||a;return n?o.createElement(f,i(i({ref:t},d),{},{components:n})):o.createElement(f,i({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9654:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:2},i={unversionedId:"items-service/hook",id:"items-service/hook",isDocsHomePage:!1,title:"Hook",description:"The hook service allows the Playtix API to communicate with your application to inform you of an internal event.",source:"@site/docs/items-service/hook.md",sourceDirName:"items-service",slug:"/items-service/hook",permalink:"/platform-docs/docs/items-service/hook",editUrl:"https://github.com/jwa-lab/platform-docs/docs/docs/items-service/hook.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/platform-docs/docs/items-service/introduction"},next:{title:"Introduction",permalink:"/platform-docs/docs/resources-service/introduction"}},l=[{value:"Process",id:"process",children:[]},{value:"Subscribe to Playtix hook",id:"subscribe-to-playtix-hook",children:[]},{value:"List of events that trigger the hook",id:"list-of-events-that-trigger-the-hook",children:[{value:"Change of owner",id:"change-of-owner",children:[]},{value:"NFT burned",id:"nft-burned",children:[]}]},{value:"receiving a hook call",id:"receiving-a-hook-call",children:[]}],c={toc:l};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The hook service allows the Playtix API to communicate with your application to inform you of an internal event."),(0,r.kt)("h2",{id:"process"},"Process"),(0,r.kt)("p",null,"When one or more events relevant to you are triggered, the API checks if a hook exists and sends the events to the registered URL."),(0,r.kt)("p",null,"An event that is relevant to you is an event that concerns an on chain item related to a game that you own."),(0,r.kt)("h2",{id:"subscribe-to-playtix-hook"},"Subscribe to Playtix hook"),(0,r.kt)("p",null,"Hook need just a few parameters to be created and subscribed :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Playtix Identifier of the game you want to receive the event for."),(0,r.kt)("li",{parentName:"ul"},"The URL that the hook will call when an event is generated and caught.")),(0,r.kt)("p",null,"Hooks are currently registered manually by our team, send us these informations, and we will set them up for you. It is recommended to have only one hook.\nSecurity enhancements are coming soon with authentication and validation of hooks."),(0,r.kt)("h2",{id:"list-of-events-that-trigger-the-hook"},"List of events that trigger the hook"),(0,r.kt)("h3",{id:"change-of-owner"},"Change of owner"),(0,r.kt)("p",null,"When an item has changed ownership, we generate an event with the following data :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'event : Contain "ItemOwnerChanged", this is the name of the event'),(0,r.kt)("li",{parentName:"ul"},"item_id : The Playtix Identifier of the item"),(0,r.kt)("li",{parentName:"ul"},"old_owner_player_id : The Playtix Identifier of the old player who owns the NFT, if the player is not registered and does not have a Playtix account, the value is null."),(0,r.kt)("li",{parentName:"ul"},"new_owner_player_id : The Playtix Identifier of the new player who owns the NFT, if the player is not registered and does not have a Playtix account, the value is null.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "event": "ItemOwnerChanged",\n    "item_id": "05c91bc0-6e47-4a2e-a863-b89f743cebb2",\n    "old_owner_player_id": "a96a0762-50f4-4d51-aced-f2655864f46a",\n    "new_owner_player_id": "192cb21f-4c29-4530-b4ba-290156ff38bd"\n}\n')),(0,r.kt)("h3",{id:"nft-burned"},"NFT burned"),(0,r.kt)("p",null,"When an item is burned, we generate an event with the following data :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'event : Contain "ItemNftBurned", this is the name of the event'),(0,r.kt)("li",{parentName:"ul"},"item_id : The Playtix Identifier of the item"),(0,r.kt)("li",{parentName:"ul"},"owner_id : The Playtix Identifier of the player who owns the NFT, if the player is not registered and does not have a Playtix account, the value is null."),(0,r.kt)("li",{parentName:"ul"},"schema_id : The Playtix identifier of the burned item schema.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "event": "ItemNftBurned",\n    "item_id": "b36520eb-6e4d-4f43-881c-75da0ef61ab7",\n    "owner_id": "a96a0762-50f4-4d51-aced-f2655864f46a",\n    "schema_id": "3c44a275-0398-46e5-8466-9860122aa99a"\n}\n')),(0,r.kt)("h2",{id:"receiving-a-hook-call"},"receiving a hook call"),(0,r.kt)("p",null,"If you subscribe to Playtix hook, events are grouped and sent to the URL by a POST call.\nThe events are grouped by interval of five seconds and sent in the body in JSON."),(0,r.kt)("p",null,"Example of RAW HTTP request :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'POST <YOUR_HOOK_URL> HTTP/1.1\nAccept: application/json\nContent-Type: application/json\nUser-Agent: axios/0.26.1\nHost: api.playtix.team\n\n[\n    {\n        "event": "ItemOwnerChanged",\n        "item_id": "05c91bc0-6e47-4a2e-a863-b89f743cebb2",\n        "old_owner_player_id": "a96a0762-50f4-4d51-aced-f2655864f46a",\n        "new_owner_player_id": "192cb21f-4c29-4530-b4ba-290156ff38bd"\n    }, {\n        "event": "ItemNftBurned",\n        "item_id": "b36520eb-6e4d-4f43-881c-75da0ef61ab7",\n        "owner_id": "a96a0762-50f4-4d51-aced-f2655864f46a",\n        "schema_id": "3c44a275-0398-46e5-8466-9860122aa99a"\n    }\n]\n')),(0,r.kt)("p",null,"All events are mixed in the same array, you have to check which type of event you receive individually."),(0,r.kt)("p",null,'Use the "event" parameters to check the type of event.'))}s.isMDXComponent=!0}}]);