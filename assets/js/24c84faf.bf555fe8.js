"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1318],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5950:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),l=["components"],o={title:"Scala.JS",sidebar_position:21},s=void 0,c={unversionedId:"guides/scala-js",id:"guides/scala-js",title:"Scala.JS",description:"Scala CLI can compile, run, test, and package Scala.JS sources.",source:"@site/docs/guides/scala-js.md",sourceDirName:"guides",slug:"/guides/scala-js",permalink:"/docs/guides/scala-js",editUrl:"https://github.com/Virtuslab/scala-cli/edit/master/website/docs/guides/scala-js.md",tags:[],version:"current",sidebarPosition:21,frontMatter:{title:"Scala.JS",sidebar_position:21},sidebar:"tutorialSidebar",previous:{title:"Scripts",permalink:"/docs/guides/scripts"},next:{title:"Scala Native",permalink:"/docs/guides/scala-native"}},p=[{value:"Configuration",id:"configuration",children:[],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Using Directives",id:"using-directives",children:[{value:"<code>--js-version</code>",id:"--js-version",children:[],level:4},{value:"<code>--js-header</code>",id:"--js-header",children:[],level:4}],level:2},{value:"Supported Scala.JS Versions",id:"supported-scalajs-versions",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Scala CLI can compile, run, test, and package Scala.JS sources."),(0,i.kt)("p",null,"One caveat is that Scala CLI doesn't have support for JS linkers (such as ",(0,i.kt)("a",{parentName:"p",href:"https://webpack.js.org"},"webpack"),")\nlike ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/scalacenter/scalajs-bundler"},"scalajs-bundler")," has.\nFor this, you'll have to handle linking yourself, with the ",(0,i.kt)("inlineCode",{parentName:"p"},".js")," file generated by ",(0,i.kt)("inlineCode",{parentName:"p"},"scala-cli"),"."),(0,i.kt)("p",null,"In order to run Scala.JS sources, ",(0,i.kt)("inlineCode",{parentName:"p"},"node")," is required."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Enable Scala.JS support by passing ",(0,i.kt)("inlineCode",{parentName:"p"},"--js")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"scala-cli"),", such as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"scala Test.scala --js\n")),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("p",null,"This section is currently a work in progress, but here are some initial notes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Beware platform dependencies"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"run")," / ",(0,i.kt)("inlineCode",{parentName:"li"},"test")," / ",(0,i.kt)("inlineCode",{parentName:"li"},"package")," should all work")),(0,i.kt)("h2",{id:"using-directives"},"Using Directives"),(0,i.kt)("p",null,"Scala.Js options are supported by using directives in ScalaCLI:"),(0,i.kt)("h4",{id:"--js-version"},(0,i.kt)("inlineCode",{parentName:"h4"},"--js-version")),(0,i.kt)("p",null," The Scala JS version"),(0,i.kt)("h4",{id:"--js-header"},(0,i.kt)("inlineCode",{parentName:"h4"},"--js-header")),(0,i.kt)("p",null," A header that will be added at the top of generated .js files"),(0,i.kt)("p",null,"For more options, see our ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/directives#scala-js-options"},(0,i.kt)("inlineCode",{parentName:"a"},"using")," directive section"),"."),(0,i.kt)("h2",{id:"supported-scalajs-versions"},"Supported Scala.JS Versions"),(0,i.kt)("p",null,"In the future, the ScalaCLI will be able to support any version of Scala.JS independently of the version of scala-cli. But for now, there are some limitations and it isn't possible to use each version of Scala.JS. "),(0,i.kt)("p",null,"The table below lists the last supported version of Scala.JS in ScalaCLI. If you want to use newer Scala.JS, update scala-cli."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"ScalaCLI versions"),(0,i.kt)("th",{parentName:"tr",align:"center"},"ScalaJs"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0.0.9"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1.7.1")))))}d.isMDXComponent=!0}}]);