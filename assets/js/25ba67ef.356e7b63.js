"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[241],{1220:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>p});var a=i(5893),s=i(1151),t=(i(4866),i(5162),i(5491)),r=i(4563);const c={},d="Infinispan",o={id:"provider/infinispan",title:"Infinispan",description:"added in: v0.1.0",source:"@site/versioned_docs/version-0.x/provider/infinispan.mdx",sourceDirName:"provider",slug:"/provider/infinispan",permalink:"/provider/infinispan",draft:!1,unlisted:!1,editUrl:"https://github.com/Xanthic/Xanthic.github.io/tree/main/docs/versioned_docs/version-0.x/provider/infinispan.mdx",tags:[],version:"0.x",lastUpdatedBy:"iProdigy",lastUpdatedAt:1664137129,formattedLastUpdatedAt:"Sep 25, 2022",frontMatter:{},sidebar:"version-1.x-docs",previous:{title:"Guava",permalink:"/provider/guava"},next:{title:"Integrations",permalink:"/category/integrations"}},l={},p=[{value:"Description",id:"description",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Default",id:"default",level:3},{value:"Spec",id:"spec",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"infinispan",children:"Infinispan"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"added in: v0.1.0"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["This provider uses Infinispan in local, volatile mode to fulfill the Xanthic ",(0,a.jsx)(n.code,{children:"Cache"})," contract."]}),"\n",(0,a.jsx)(n.p,{children:"Out of the box, Infinispan's distributed or scattered cache options are not (yet) supported."}),"\n",(0,a.jsxs)(n.p,{children:["Note: Infinispan itself depends on Caffeine, so one can achieve a smaller binary by using Caffeine ",(0,a.jsx)(n.a,{href:"/provider/caffeine",children:"instead"}),",\nif not also using other features of Infinispan."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://infinispan.org/documentation/",children:"Official Documentation"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(r.JavaDependency,{group:"io.github.xanthic.cache",name:"cache-provider-infinispan",scope:"implementation"}),"\n",(0,a.jsxs)(t.Z,{severity:"info",variant:"outlined",children:["Versions are managed by the ",(0,a.jsx)("a",{href:"/getting-started/installation",children:"xanthic-bom"}),"!"]}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n.h3,{id:"default",children:"Default"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"CacheApiSettings.getInstance().setDefaultCacheProvider(new InfinispanProvider());\n\nCache<String, Integer> cache = CacheApi.create(spec -> {\n  // if spec.provider is not set the default cache provider will be used\n});\n"})}),"\n",(0,a.jsx)(n.h3,{id:"spec",children:"Spec"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"Cache<String, Integer> cache = CacheApi.create(spec -> {\n    spec.provider(new InfinispanProvider());\n});\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}}}]);