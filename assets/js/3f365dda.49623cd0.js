"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[882],{1654:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>s});var o=a(7462),i=(a(7294),a(3905)),n=(a(5488),a(5162),a(4563));const r={sidebar_position:1},c="Installation",d={unversionedId:"getting-started/installation",id:"version-0.x/getting-started/installation",title:"Installation",description:"Xanthic BOM",source:"@site/versioned_docs/version-0.x/getting-started/installation.mdx",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/getting-started/installation",draft:!1,editUrl:"https://github.com/Xanthic/Xanthic.github.io/tree/main/docs/versioned_docs/version-0.x/getting-started/installation.mdx",tags:[],version:"0.x",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1664155566,formattedLastUpdatedAt:"Sep 26, 2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"version-1.x-docs",previous:{title:"Getting Started",permalink:"/category/getting-started"},next:{title:"Kotlin",permalink:"/getting-started/kotlin"}},p={},s=[{value:"Xanthic BOM",id:"xanthic-bom",level:2},{value:"Usage: For Library Developers",id:"usage-for-library-developers",level:2},{value:"Step 1: add the bom to your project:",id:"step-1-add-the-bom-to-your-project",level:3},{value:"Step 2: add the <code>cache-core</code> dependency:",id:"step-2-add-the-cache-core-dependency",level:3},{value:"Usage: For Application Developers",id:"usage-for-application-developers",level:2},{value:"Step 1: add the bom to your project:",id:"step-1-add-the-bom-to-your-project-1",level:3},{value:"Step 2: add a cache-implementation of your choice:",id:"step-2-add-a-cache-implementation-of-your-choice",level:3}],l={toc:s};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installation"},"Installation"),(0,i.kt)("h2",{id:"xanthic-bom"},"Xanthic BOM"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"cache-bom")," will ensure that all xanthic-components in your project use the same version. See our snippets below on how to include xanthic in your project."),(0,i.kt)("h2",{id:"usage-for-library-developers"},"Usage: For Library Developers"),(0,i.kt)("p",null,"You will want to include the ",(0,i.kt)("inlineCode",{parentName:"p"},"xanthic-core")," to code against this straightforward API and let users can choose whichever backing implementation they prefer!"),(0,i.kt)("h3",{id:"step-1-add-the-bom-to-your-project"},"Step 1: add the bom to your project:"),(0,i.kt)(n.JavaDependency,{group:"io.github.xanthic.cache",name:"cache-bom",version:"0.1.2",bom:"true",scope:"api",mdxType:"JavaDependency"}),(0,i.kt)("h3",{id:"step-2-add-the-cache-core-dependency"},"Step 2: add the ",(0,i.kt)("inlineCode",{parentName:"h3"},"cache-core")," dependency:"),(0,i.kt)(n.JavaDependency,{group:"io.github.xanthic.cache",name:"cache-core",scope:"api",mdxType:"JavaDependency"}),(0,i.kt)("h2",{id:"usage-for-application-developers"},"Usage: For Application Developers"),(0,i.kt)("p",null,"As user of a library that is using xanthic, you will only need to specify the ",(0,i.kt)("inlineCode",{parentName:"p"},"bom")," and pick your one or more implementations of your choice."),(0,i.kt)("h3",{id:"step-1-add-the-bom-to-your-project-1"},"Step 1: add the bom to your project:"),(0,i.kt)(n.JavaDependency,{group:"io.github.xanthic.cache",name:"cache-bom",version:"0.1.2",bom:"true",scope:"implementation",mdxType:"JavaDependency"}),(0,i.kt)("h3",{id:"step-2-add-a-cache-implementation-of-your-choice"},"Step 2: add a cache-implementation of your choice:"),(0,i.kt)("p",null,"See all supported implementations ",(0,i.kt)("a",{parentName:"p",href:"/provider"},"here")),(0,i.kt)(n.JavaDependency,{group:"io.github.xanthic.cache",name:"cache-provider-caffeine3",scope:"implementation",mdxType:"JavaDependency"}))}h.isMDXComponent=!0}}]);