"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[485],{1987:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>v,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var i=t(7462),n=(t(7294),t(3905)),r=(t(4866),t(5162),t(3942)),p=t(4563);const o={},l="ExpiringMap",d={unversionedId:"provider/expiringmap",id:"version-0.x/provider/expiringmap",title:"ExpiringMap",description:"added in: v0.1.0",source:"@site/versioned_docs/version-0.x/provider/expiringmap.mdx",sourceDirName:"provider",slug:"/provider/expiringmap",permalink:"/provider/expiringmap",draft:!1,editUrl:"https://github.com/Xanthic/Xanthic.github.io/tree/main/docs/versioned_docs/version-0.x/provider/expiringmap.mdx",tags:[],version:"0.x",lastUpdatedBy:"iProdigy",lastUpdatedAt:1664137129,formattedLastUpdatedAt:"Sep 25, 2022",frontMatter:{},sidebar:"version-1.x-docs",previous:{title:"Ehcache 3",permalink:"/provider/ehcache"},next:{title:"Guava",permalink:"/provider/guava"}},s={},c=[{value:"Description",id:"description",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Default",id:"default",level:3},{value:"Spec",id:"spec",level:3}],u={toc:c};function v(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,i.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"expiringmap"},"ExpiringMap"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"added in: v0.1.0")),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"This provider uses Jodah ExpiringMap to fulfill the Xanthic ",(0,n.kt)("inlineCode",{parentName:"p"},"Cache")," contract."),(0,n.kt)("p",null,"Due to Jodah limitations, removal listeners will always observe the ",(0,n.kt)("inlineCode",{parentName:"p"},"RemovalCause.OTHER"),"."),(0,n.kt)("p",null,"Consider using ",(0,n.kt)("a",{parentName:"p",href:"/provider/caffeine"},"Caffeine")," or ",(0,n.kt)("a",{parentName:"p",href:"/provider/cache2k"},"Cache2k")," for better performance and thread-safety."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/jhalterman/expiringmap#expiringmap"},"Official Documentation"))),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)(p.JavaDependency,{group:"io.github.xanthic.cache",name:"cache-provider-expiringmap",scope:"implementation",mdxType:"JavaDependency"}),(0,n.kt)(r.Z,{severity:"info",variant:"outlined",mdxType:"Alert"},"Versions are managed by the ",(0,n.kt)("a",{href:"/getting-started/installation"},"xanthic-bom"),"!"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("h3",{id:"default"},"Default"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"CacheApiSettings.getInstance().setDefaultCacheProvider(new ExpiringMapProvider());\n\nCache<String, Integer> cache = CacheApi.create(spec -> {\n  // if spec.provider is not set the default cache provider will be used\n});\n")),(0,n.kt)("h3",{id:"spec"},"Spec"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"Cache<String, Integer> cache = CacheApi.create(spec -> {\n    spec.provider(new ExpiringMapProvider());\n});\n")))}v.isMDXComponent=!0}}]);