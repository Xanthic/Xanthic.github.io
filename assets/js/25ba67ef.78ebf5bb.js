"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[241],{8340:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>p,default:()=>f,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var t=i(7462),a=(i(7294),i(3905)),r=(i(5488),i(5162),i(4098)),s=i(4563);const o={},p="Infinispan",d={unversionedId:"provider/infinispan",id:"version-0.x/provider/infinispan",title:"Infinispan",description:"added in: v0.1.0",source:"@site/versioned_docs/version-0.x/provider/infinispan.mdx",sourceDirName:"provider",slug:"/provider/infinispan",permalink:"/provider/infinispan",draft:!1,editUrl:"https://github.com/Xanthic/Xanthic.github.io/tree/main/docs/versioned_docs/version-0.x/provider/infinispan.mdx",tags:[],version:"0.x",lastUpdatedBy:"iProdigy",lastUpdatedAt:1664137129,formattedLastUpdatedAt:"Sep 25, 2022",frontMatter:{},sidebar:"version-1.x-docs",previous:{title:"Guava",permalink:"/provider/guava"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Default",id:"default",level:3},{value:"Spec",id:"spec",level:3}],u={toc:c};function f(e){let{components:n,...i}=e;return(0,a.kt)("wrapper",(0,t.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"infinispan"},"Infinispan"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"added in: v0.1.0")),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"This provider uses Infinispan in local, volatile mode to fulfill the Xanthic ",(0,a.kt)("inlineCode",{parentName:"p"},"Cache")," contract."),(0,a.kt)("p",null,"Out of the box, Infinispan's distributed or scattered cache options are not (yet) supported."),(0,a.kt)("p",null,"Note: Infinispan itself depends on Caffeine, so one can achieve a smaller binary by using Caffeine ",(0,a.kt)("a",{parentName:"p",href:"/provider/caffeine"},"instead"),",\nif not also using other features of Infinispan."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://infinispan.org/documentation/"},"Official Documentation"))),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(s.JavaDependency,{group:"io.github.xanthic.cache",name:"cache-provider-infinispan",scope:"implementation",mdxType:"JavaDependency"}),(0,a.kt)(r.Z,{severity:"info",variant:"outlined",mdxType:"Alert"},"Versions are managed by the ",(0,a.kt)("a",{href:"/getting-started/installation"},"xanthic-bom"),"!"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"default"},"Default"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"CacheApiSettings.getInstance().setDefaultCacheProvider(new InfinispanProvider());\n\nCache<String, Integer> cache = CacheApi.create(spec -> {\n  // if spec.provider is not set the default cache provider will be used\n});\n")),(0,a.kt)("h3",{id:"spec"},"Spec"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"Cache<String, Integer> cache = CacheApi.create(spec -> {\n    spec.provider(new InfinispanProvider());\n});\n")))}f.isMDXComponent=!0}}]);