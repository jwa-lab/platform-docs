(self.webpackChunkplatform_docs=self.webpackChunkplatform_docs||[]).push([[799],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return c}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),c=a,h=p["".concat(l,".").concat(c)]||p[c]||m[c]||r;return n?i.createElement(h,o(o({ref:t},d),{},{components:n})):i.createElement(h,o({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5246:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var i=n(2122),a=n(9756),r=(n(7294),n(3905)),o={sidebar_position:4},s={unversionedId:"tutorial/assign-an-item",id:"tutorial/assign-an-item",isDocsHomePage:!1,title:"Assign an item",description:"Note: to follow this tutorial, simply copy/paste the curl requests, or use the Postman collection located here",source:"@site/docs/tutorial/assign-an-item.md",sourceDirName:"tutorial",slug:"/tutorial/assign-an-item",permalink:"/platform-docs/docs/tutorial/assign-an-item",editUrl:"https://github.com/jwa-lab/platform-docs/docs/docs/tutorial/assign-an-item.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Mint an existing item",permalink:"/platform-docs/docs/tutorial/mint-an-item"},next:{title:"Mint an inventory item",permalink:"/platform-docs/docs/tutorial/mint-inventory-item"}},l=[{value:"Create a user",id:"create-a-user",children:[]},{value:"Get user",id:"get-user",children:[]},{value:"Assign item",id:"assign-item",children:[]},{value:"Get inventory item",id:"get-inventory-item",children:[]},{value:"Assigning sold out item",id:"assigning-sold-out-item",children:[]},{value:"Updating an assigned item.",id:"updating-an-assigned-item",children:[]}],u={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: to follow this tutorial, simply copy/paste the ",(0,r.kt)("inlineCode",{parentName:"em"},"curl")," requests, or use the ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/jwa-lab/item-store/blob/main/postman_collection/JWA%20Platform%20-%20Item%20Store.postman_collection.json"},"Postman collection located here"))),(0,r.kt)("p",null,"At this point, we have created an item and minted it in the blockchain, or tokenized it.\nThe item is still owned by the creator, it hasn't yet been assigned to a user or a player for use."),(0,r.kt)("p",null,"Before assigning an item to a user, we need to create a user:"),(0,r.kt)("h2",{id:"create-a-user"},"Create a user"),(0,r.kt)("p",null,"A user is a simple entity in the ",(0,r.kt)("inlineCode",{parentName:"p"},"item store")," used to group items that belong to the same user. The user is anonymous and doesn't contain any non-public information or game specific information, it's mostly a unique identifier."),(0,r.kt)("p",null,"Let's create our first user. For convenience, we do assign it a ",(0,r.kt)("inlineCode",{parentName:"p"},"user_id")," but it doesn't need to be unique, it can be used to link the JWA Platform's user id to a user id in the video game editor's database for instance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request POST 'http://localhost:8000/item-store/user' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    # user id is custom, doesn't need to be unique and is specified by the video game editor. It needs to be a number though.\n    \"user_id\": 42\n}'\n")),(0,r.kt)("p",null,"Which returns a user document:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    // document alphanum id looks like "GvzrcnkBKbvuvgx_4Nrt" and is a string. It\'s automatically generated\n    "user_id": "<document alphanum id>"\n}\n')),(0,r.kt)("h2",{id:"get-user"},"Get user"),(0,r.kt)("p",null,"We can now retrieve a user using its unique id:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# the <document alphanum id> is a string and it looks something like \"GvzrcnkBKbvuvgx_4Nrt\"\ncurl --location --request GET 'http://localhost:8000/item-store/user/<document alphanum id>'\n")),(0,r.kt)("p",null,"Which returns the initial user:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    // user id is the id specified by the video game editor\n    "user_id": 42\n}\n')),(0,r.kt)("p",null,"To distinguish between the two ids: the document itself contains a ",(0,r.kt)("inlineCode",{parentName:"p"},"user_id")," defined by us. The ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," could be ",(0,r.kt)("inlineCode",{parentName:"p"},"42")," for instance.\nThe user document in the platform has an automatically generated alpha numeric ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," which looks like ",(0,r.kt)("inlineCode",{parentName:"p"},"GvzrcnkBKbvuvgx_4Nrt"),". If we want to retrieve\nthe user in the platform, we need to use the unique id which looks like ",(0,r.kt)("inlineCode",{parentName:"p"},"GvzrcnkBKbvuvgx_4Nrt"),", and it's part of the url."),(0,r.kt)("h2",{id:"assign-item"},"Assign item"),(0,r.kt)("p",null,"We now have an item in the ",(0,r.kt)("inlineCode",{parentName:"p"},"item-store"),", and a ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," as well. We can assign the item to the user.\nFor that, we will pass the user's unique id, which looke like ",(0,r.kt)("inlineCode",{parentName:"p"},"GvzrcnkBKbvuvgx_4Nrt")," and the item ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," that we'd like to assign:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST \'http://localhost:8000/item-store/inventory\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    # user id is a string and it looks like "GvzrcnkBKbvuvgx_4Nrt"\n    "user_id": "<user id>",\n    # item id is a number like 1, 1000, 1337. It was assign when we first created the item.\n    "item_id": <item id>\n}\'\n')),(0,r.kt)("p",null,"which returns:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    // this is a new type of id, it\'s an alpha numeric string that looks weird like the <user id>, something like "efzvcnkBKbvuvgx_ptpb"\n    "inventory_item_id": "<inventory item id>"\n}\n')),(0,r.kt)("p",null,"This operation returns an inventory item. The concept of an inventory is new, so let's explain what happened:"),(0,r.kt)("p",null,"Let's assume we had created ",(0,r.kt)("inlineCode",{parentName:"p"},"10")," ",(0,r.kt)("inlineCode",{parentName:"p"},"golden geese"),". We have 1 item in ",(0,r.kt)("inlineCode",{parentName:"p"},"item-store")," with quantity ",(0,r.kt)("inlineCode",{parentName:"p"},"10")," which means that ",(0,r.kt)("inlineCode",{parentName:"p"},"10")," users may buy one before it's sold out.\nEach buyer will have their own ",(0,r.kt)("strong",{parentName:"p"},"copy")," of the item, which can evolve independently.\nYou could imagine the original item as being the prototype, or mold for new items. Now, if we want to purchase one, we will create a unique instance of that item which can have\nits own life. It can be updated (if the golden goose turns into platinum?), or it can be sold to another user, so each copy will evolve differently and indenpendently from the others.\nTo store the copy, we will create an inventory, linked to a user (1 user = 1 inventory), and all items owned by a user will be stored in the user's single inventory.\nNow, each inventory item can still be addressed using its own unique id which is automatically generated."),(0,r.kt)("p",null,"The inventory item tracks the unique id for the item, the user id, and some data. Let's take a look."),(0,r.kt)("h2",{id:"get-inventory-item"},"Get inventory item"),(0,r.kt)("p",null,"Let's see what an inventory item looks like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-curl"},"curl --location --request GET 'http://localhost:8000/item-store/inventory/<inventory item id>'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    // The item id is the original item id, which is a number like 1, 2, 1000, 1337...\n    "item_id": <item id>,\n    "user_id": "<user id>",\n    "instance_number": 1,\n    "data": {}\n}\n')),(0,r.kt)("p",null,"We can see that the inventory item points to the item with id ",(0,r.kt)("inlineCode",{parentName:"p"},"<item id>"),", it belongs to user ",(0,r.kt)("inlineCode",{parentName:"p"},"<user id>")," and it has instance_number ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),". It also has an empty ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," field.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"instance_number")," means that user ",(0,r.kt)("inlineCode",{parentName:"p"},"<user id>")," got the first item, ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),".\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," field only stores the fields that have changed from the original item. For now the item hasn't evolved, it has only be assigned, so there are no differences.\nSo how do I know what the item looks like? Simple, remember that the ",(0,r.kt)("inlineCode",{parentName:"p"},"item_id")," is unique. So if I take id ",(0,r.kt)("inlineCode",{parentName:"p"},"<item id>")," and retrieve the item in the item store, I can get its current status:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'http://localhost:8000/item-store/item/<item id>'\n")),(0,r.kt)("p",null,"Which returns:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "Golden Goose",\n    "data": {\n        "level": "legendary",\n        "type": "goose",\n        "attribute": "gold"\n    },\n    "total_quantity": 1,\n    "available_quantity": 0,\n    "item_id": <item id>\n}\n')),(0,r.kt)("p",null,"So here we are, we can see that the item is our Golden Goose and we can see its attributes.\nOne thing to notice, given that we just assigned the item, we can see that the ",(0,r.kt)("inlineCode",{parentName:"p"},"available_quantity")," has decreased by 1.\nThis means that the item can no longer be assigned, the item is sold out. After all, it's a legendary item, there aren't that many of them in our world."),(0,r.kt)("p",null,"Let's verify that:"),(0,r.kt)("h2",{id:"assigning-sold-out-item"},"Assigning sold out item"),(0,r.kt)("p",null,"In theory, we could assign the same item multiple times to the same user. What if a user wants to purchase multiple copies of the same item?\nSo let's try to assign the Goolden Goose again, to the same user:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request POST 'http://localhost:8000/item-store/inventory' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"user_id\": \"<user id>\",\n    \"item_id\": <item id>\n}'\n")),(0,r.kt)("p",null,"Which returns:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "message": "ITEM_SOLD_OUT: <item id>"\n}\n')),(0,r.kt)("p",null,"With an ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTP")," error of ",(0,r.kt)("inlineCode",{parentName:"p"},"400"),"."),(0,r.kt)("p",null,"Pretty explicit, the item is sold out and can't be assigned anymore, hence the error."),(0,r.kt)("h2",{id:"updating-an-assigned-item"},"Updating an assigned item."),(0,r.kt)("p",null,"Our golden goose is now assigned to the user.\nLet's say the goose has evolved and is now made of platinum, we could update it in the inventory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# remember that we received the inventory item id (looks like \"efzvcnkBKbvuvgx_ptpb\") when we first assigned the item to a user.\n# don't include the wrapping quotes \" in the url\ncurl --location --request PUT 'http://localhost:8000/item-store/inventory/<inventory item id>' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"attribute\": \"platinum\"\n}'\n")),(0,r.kt)("p",null,"We have updated the ",(0,r.kt)("inlineCode",{parentName:"p"},"attribute")," field, let's verify it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'http://localhost:8000/item-store/inventory/<inventory item id>'\n")),(0,r.kt)("p",null,"Which returns:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "item_id": <item id>,\n    "user_id": "<user id>",\n    "instance_number": 1,\n    "data": {\n        "attribute": "platinum"\n    }\n}\n')),(0,r.kt)("p",null,"Remember that the original item can't change, it's immutable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'http://localhost:8000/item-store/item/1'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "Golden Goose",\n    "data": {\n        "level": "legendary",\n        "type": "goose",\n        "attribute": "gold"\n    },\n    "total_quantity": 1,\n    "available_quantity": 0,\n    "item_id": <item id>\n}\n')),(0,r.kt)("p",null,"But the inventory item can, because each copy can now evolve differently.\nThe inventory item only contains the difference between the original item and the inventory item in its ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," field."),(0,r.kt)("p",null,"Now that we've assigned an item and updated it, let's store its new state in the blockchain."))}d.isMDXComponent=!0}}]);