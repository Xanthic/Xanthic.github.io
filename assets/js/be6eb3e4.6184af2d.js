"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[125],{5775:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=a(7462),n=(a(7294),a(3905)),r=(a(5488),a(5162),a(7038)),c=a(4563);const o={},d="Caffeine 3",s={unversionedId:"provider/caffeine3",id:"version-0.x/provider/caffeine3",title:"Caffeine 3",description:"added in: v0.1.0",source:"@site/versioned_docs/version-0.x/provider/caffeine3.mdx",sourceDirName:"provider",slug:"/provider/caffeine3",permalink:"/provider/caffeine3",draft:!1,editUrl:"https://github.com/Xanthic/Xanthic.github.io/tree/main/docs/versioned_docs/version-0.x/provider/caffeine3.mdx",tags:[],version:"0.x",lastUpdatedBy:"Philipp Heuer",lastUpdatedAt:1660584848,formattedLastUpdatedAt:"Aug 15, 2022",frontMatter:{},sidebar:"version-1.x-docs",previous:{title:"Caffeine",permalink:"/provider/caffeine"},next:{title:"EHCache 3",permalink:"/provider/ehcache"}},l={},p=[{value:"Description",id:"description",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Default",id:"default",level:3},{value:"Spec",id:"spec",level:3}],f={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"caffeine-3"},"Caffeine 3"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"added in: v0.1.0")),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"..."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ben-manes/caffeine/wiki"},"Official Documentation"))),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)(c.JavaDependency,{group:"io.github.xanthic.cache",name:"cache-provider-caffeine3",scope:"implementation",mdxType:"JavaDependency"}),(0,n.kt)(r.Z,{severity:"info",variant:"outlined",mdxType:"Alert"},"Versions are managed by the ",(0,n.kt)("a",{href:"/getting-started/installation"},"xanthic-bom"),"!"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("h3",{id:"default"},"Default"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"CacheApiSettings.getInstance().setDefaultCacheProvider(new Caffeine3Provider());\n\nCache<String, Integer> cache = CacheApi.create(spec -> {\n  // if spec.provider is not set the default cache provider will be used\n});\n")),(0,n.kt)("h3",{id:"spec"},"Spec"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"Cache<String, Integer> cache = CacheApi.create(spec -> {\n    spec.provider(new Caffeine3Provider());\n});\n")))}u.isMDXComponent=!0}}]);