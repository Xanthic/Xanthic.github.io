"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[963],{2507:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>h,toc:()=>l});var a=n(5893),c=n(1151),t=(n(4866),n(5162),n(5452)),r=n(4563);const s={},d="Ehcache 3",h={id:"provider/ehcache",title:"Ehcache 3",description:"added in: v0.1.0",source:"@site/versioned_docs/version-0.x/provider/ehcache.mdx",sourceDirName:"provider",slug:"/provider/ehcache",permalink:"/provider/ehcache",draft:!1,unlisted:!1,editUrl:"https://github.com/Xanthic/Xanthic.github.io/tree/main/docs/versioned_docs/version-0.x/provider/ehcache.mdx",tags:[],version:"0.x",lastUpdatedBy:"iProdigy",lastUpdatedAt:1664137129,formattedLastUpdatedAt:"Sep 25, 2022",frontMatter:{},sidebar:"version-1.x-docs",previous:{title:"Caffeine 3",permalink:"/provider/caffeine3"},next:{title:"ExpiringMap",permalink:"/provider/expiringmap"}},o={},l=[{value:"Description",id:"description",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Default",id:"default",level:3},{value:"Spec",id:"spec",level:3}];function p(e){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.h1,{id:"ehcache-3",children:"Ehcache 3"}),"\n",(0,a.jsxs)(i.blockquote,{children:["\n",(0,a.jsx)(i.p,{children:"added in: v0.1.0"}),"\n"]}),"\n",(0,a.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(i.p,{children:"This provider uses Ehcache v3 in local heap memory mode."}),"\n",(0,a.jsxs)(i.p,{children:["When using this provider, specifying ",(0,a.jsx)(i.code,{children:"ICacheSpec#maxSize"})," is highly recommended."]}),"\n",(0,a.jsxs)(i.p,{children:["Due to limitations of the Ehcache interface, additional locking is introduced\nto comply with the Xanthic ",(0,a.jsx)(i.code,{children:"Cache"})," contract in a thread-safe manner.\nAs a result, multi-threaded throughput performance will not be as great as other options."]}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://www.ehcache.org/documentation/3.0/index.html",children:"Official Documentation"})}),"\n"]}),"\n",(0,a.jsx)(i.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(r.JavaDependency,{group:"io.github.xanthic.cache",name:"cache-provider-ehcache",scope:"implementation"}),"\n",(0,a.jsxs)(t.Z,{severity:"info",variant:"outlined",children:["Versions are managed by the ",(0,a.jsx)("a",{href:"/getting-started/installation",children:"xanthic-bom"}),"!"]}),"\n",(0,a.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(i.h3,{id:"default",children:"Default"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-java",children:"CacheApiSettings.getInstance().setDefaultCacheProvider(new EhcacheProvider());\n\nCache<String, Integer> cache = CacheApi.create(spec -> {\n  // if spec.provider is not set the default cache provider will be used\n});\n"})}),"\n",(0,a.jsx)(i.h3,{id:"spec",children:"Spec"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-java",children:"Cache<String, Integer> cache = CacheApi.create(spec -> {\n    spec.provider(new EhcacheProvider());\n});\n"})})]})}function u(e={}){const{wrapper:i}={...(0,c.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}}}]);