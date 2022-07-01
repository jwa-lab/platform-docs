"use strict";(self.webpackChunkplatform_docs=self.webpackChunkplatform_docs||[]).push([[8610],{3146:(e,t,a)=>{a.d(t,{Z:()=>u});var l=a(7294),r=a(6010),s=a(3905),n=a(4973),m=a(6742),c=a(4927),o=a(1217);const i="blogPostTitle_d4p0",g="blogPostDate_iEnO";var d=a(6700);const u=function(e){const t=function(){const{selectMessage:e}=(0,d.c2)();return t=>{const a=Math.ceil(t);return e(a,(0,n.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{children:a,frontMatter:u,metadata:p,truncated:h,isBlogPostPage:E=!1}=e,{date:b,formattedDate:N,permalink:v,tags:_,readingTime:f}=p,{author:k,title:Z,image:T,keywords:w}=u,P=u.author_url||u.authorURL,M=u.author_title||u.authorTitle,y=u.author_image_url||u.authorImageURL;return l.createElement(l.Fragment,null,l.createElement(o.Z,{keywords:w,image:T}),l.createElement("article",{className:E?void 0:"margin-bottom--xl"},(()=>{const e=E?"h1":"h2";return l.createElement("header",null,l.createElement(e,{className:(0,r.Z)("margin-bottom--sm",i)},E?Z:l.createElement(m.Z,{to:v},Z)),l.createElement("div",{className:"margin-vert--md"},l.createElement("time",{dateTime:b,className:g},N,f&&l.createElement(l.Fragment,null," \xb7 ",t(f)))),l.createElement("div",{className:"avatar margin-vert--md"},y&&l.createElement(m.Z,{className:"avatar__photo-link avatar__photo",href:P},l.createElement("img",{src:y,alt:k})),l.createElement("div",{className:"avatar__intro"},k&&l.createElement(l.Fragment,null,l.createElement("h4",{className:"avatar__name"},l.createElement(m.Z,{href:P},k)),l.createElement("small",{className:"avatar__subtitle"},M)))))})(),l.createElement("div",{className:"markdown"},l.createElement(s.Zo,{components:c.Z},a)),(_.length>0||h)&&l.createElement("footer",{className:"row margin-vert--lg"},_.length>0&&l.createElement("div",{className:"col"},l.createElement("strong",null,l.createElement(n.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),_.map((e=>{let{label:t,permalink:a}=e;return l.createElement(m.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),h&&l.createElement("div",{className:"col text--right"},l.createElement(m.Z,{to:p.permalink,"aria-label":"Read more about "+Z},l.createElement("strong",null,l.createElement(n.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},5601:(e,t,a)=>{a.d(t,{Z:()=>d});var l=a(7294),r=a(6010),s=a(6742);const n="sidebar_q+wC",m="sidebarItemTitle_9G5K",c="sidebarItemList_6T4b",o="sidebarItem_cjdF",i="sidebarItemLink_zyXk",g="sidebarItemLinkActive_wcJs";function d(e){let{sidebar:t}=e;return 0===t.items.length?null:l.createElement("div",{className:(0,r.Z)(n,"thin-scrollbar")},l.createElement("h3",{className:m},t.title),l.createElement("ul",{className:c},t.items.map((e=>l.createElement("li",{key:e.permalink,className:o},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:i,activeClassName:g},e.title))))))}},9404:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var l=a(7294),r=a(1952),s=a(3146),n=a(6742),m=a(5601),c=a(4973),o=a(6700);function i(e){let{tagName:t,count:a}=e;const r=function(){const{selectMessage:e}=(0,o.c2)();return t=>e(t,(0,c.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return l.createElement(c.Z,{id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",values:{nPosts:r(a),tagName:t}},'{nPosts} tagged with "{tagName}"')}const g=function(e){const{metadata:t,items:a,sidebar:g}=e,{allTagsPath:d,name:u,count:p}=t;return l.createElement(r.Z,{title:'Posts tagged "'+u+'"',description:'Blog | Tagged "'+u+'"',wrapperClassName:o.kM.wrapper.blogPages,pageClassName:o.kM.page.blogTagsPostPage,searchMetadatas:{tag:"blog_tags_posts"}},l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col col--3"},l.createElement(m.Z,{sidebar:g})),l.createElement("main",{className:"col col--7"},l.createElement("h1",null,l.createElement(i,{count:p,tagName:u})),l.createElement(n.Z,{href:d},l.createElement(c.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags")),l.createElement("div",{className:"margin-vert--xl"},a.map((e=>{let{content:t}=e;return l.createElement(s.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:!0},l.createElement(t,null))})))))))}}}]);