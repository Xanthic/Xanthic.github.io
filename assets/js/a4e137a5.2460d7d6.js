"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[608],{9554:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>v,frontMatter:()=>h,metadata:()=>p,toc:()=>u});var i=a(7462),n=(a(7294),a(3905)),r=a(4996),c=a(4866),o=a(5162),l=a(460);const h={sidebar_position:1,sidebar_label:"Home",slug:"/"},s="",p={unversionedId:"intro",id:"version-0.x/intro",title:"",description:"Xanthic is a straightforward API for in-memory caching on the JVM, via the facade pattern.",source:"@site/versioned_docs/version-0.x/intro.mdx",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/Xanthic/Xanthic.github.io/tree/main/docs/versioned_docs/version-0.x/intro.mdx",tags:[],version:"0.x",lastUpdatedBy:"iProdigy",lastUpdatedAt:1665691502,formattedLastUpdatedAt:"Oct 13, 2022",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Home",slug:"/"},sidebar:"version-1.x-docs",next:{title:"Getting Started",permalink:"/category/getting-started"}},d={},u=[{value:"Usage Example",id:"usage-example",level:2},{value:"Create Cache",id:"create-cache",level:3},{value:"Default Cache Provider",id:"default-cache-provider",level:3}],m={toc:u};function v(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:""}),(0,n.kt)("img",{src:(0,r.Z)("/img/logo-full.png"),width:"100%",alt:"Xanthic logo"}),(0,n.kt)("p",null,"Xanthic is a straightforward API for in-memory caching on the JVM, via the facade pattern."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Library developers can utilize Xanthic to ",(0,n.kt)("a",{parentName:"li",href:"/getting-started/installation#usage-for-library-developers"},"enable")," caching without marrying a single implementation"),(0,n.kt)("li",{parentName:"ul"},"Application developers can utilize Xanthic to easily switch between different ",(0,n.kt)("a",{parentName:"li",href:"/provider/"},"backing implementations")," whenever desired")),(0,n.kt)("h2",{id:"usage-example"},"Usage Example"),(0,n.kt)("h3",{id:"create-cache"},"Create Cache"),(0,n.kt)("p",null,"Create a ",(0,n.kt)("a",{parentName:"p",href:"https://javadoc.io/doc/io.github.xanthic.cache/cache-api/latest/io/github/xanthic/cache/api/Cache.html"},"cache")," (with ",(0,n.kt)("inlineCode",{parentName:"p"},"String")," keys and ",(0,n.kt)("inlineCode",{parentName:"p"},"Integer")," values)\nthat can hold ",(0,n.kt)("a",{parentName:"p",href:"https://javadoc.io/doc/io.github.xanthic.cache/cache-api/latest/io/github/xanthic/cache/api/ICacheSpec.html#maxSize()"},"up to")," 2048 elements,\nwhere entries ",(0,n.kt)("a",{parentName:"p",href:"https://javadoc.io/doc/io.github.xanthic.cache/cache-api/latest/io/github/xanthic/cache/api/ICacheSpec.html#expiryType()"},"expire")," 5 minutes following their latest access,\nand removed entries notify a specific event ",(0,n.kt)("a",{parentName:"p",href:"https://javadoc.io/doc/io.github.xanthic.cache/cache-api/latest/io/github/xanthic/cache/api/ICacheSpec.html#removalListener()"},"listener"),":"),(0,n.kt)(c.default,{mdxType:"Tabs"},(0,n.kt)(o.default,{value:"java",label:"Java",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"Cache<String, Integer> cache = CacheApi.create(spec -> {\n    spec.maxSize(2048L);\n    spec.expiryTime(Duration.ofMinutes(5L));\n    spec.expiryType(ExpiryType.POST_ACCESS); // or ExpiryType.POST_WRITE\n    spec.removalListener((key, value, cause) -> {\n        if (cause.isEviction()) {\n            // do something\n        }\n    });\n});\n"))),(0,n.kt)(o.default,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},"val cache = createCache<String, Int> {\n    maxSize = 2048\n    expiryTime = Duration.ofMinutes(5)\n    expiryType = ExpiryType.POST_ACCESS // or ExpiryType.POST_WRITE\n    removalListener { key, value, cause ->\n        if (cause.isEviction) {\n            // do something\n        }\n    }\n}\n")),(0,n.kt)(l.Z,{severity:"info",variant:"outlined",mdxType:"Alert"},(0,n.kt)("b",null,"Kotlin")," users can enjoy this more idiomatic syntax via the ",(0,n.kt)("a",{href:"/getting-started/kotlin"},"extensions module"),"."))),(0,n.kt)("p",null,"Since ",(0,n.kt)("inlineCode",{parentName:"p"},"CacheApiSpec#provider(CacheProvider)")," was not specified, the ",(0,n.kt)("b",null,"default cache provider")," will be used."),(0,n.kt)("h3",{id:"default-cache-provider"},"Default Cache Provider"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Application developers ",(0,n.kt)("a",{parentName:"li",href:"/getting-started/installation#usage-for-application-developers"},"should")," add at least one ",(0,n.kt)("inlineCode",{parentName:"li"},"cache-provider-\ud835\udc65")," module to their project ",(0,n.kt)("sup",null,"(or create their own)")),(0,n.kt)("li",{parentName:"ul"},"When there is only one cache provider registered, it will automatically become the ",(0,n.kt)("a",{parentName:"li",href:"https://javadoc.io/doc/io.github.xanthic.cache/cache-core/latest/io/github/xanthic/cache/core/CacheApiSettings.html#getDefaultCacheProvider()"},"default cache provider")),(0,n.kt)("li",{parentName:"ul"},"When there are multiple cache provider modules installed, the default will be selected according to the ",(0,n.kt)("a",{parentName:"li",href:"/provider/"},"discovery order")," ",(0,n.kt)("sup",null,"(but it is not recommended to rely on this order)")),(0,n.kt)("li",{parentName:"ul"},"Users can explicitly define which cache provider should be used as the default by calling ",(0,n.kt)("a",{parentName:"li",href:"https://javadoc.io/doc/io.github.xanthic.cache/cache-core/latest/io/github/xanthic/cache/core/CacheApiSettings.html#setDefaultCacheProvider(io.github.xanthic.cache.api.CacheProvider)"},"CacheApiSettings"),". This will override whatever default was chosen from the discovery order")))}v.isMDXComponent=!0}}]);