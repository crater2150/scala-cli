"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7915],{3905:function(e,a,n){n.d(a,{Zo:function(){return p},kt:function(){return d}});var t=n(7294);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=t.createContext({}),c=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},p=function(e){var a=c(e.components);return t.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return n?t.createElement(h,o(o({ref:a},p),{},{components:n})):t.createElement(h,o({ref:a},p))}));function d(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3891:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var t=n(3117),i=n(102),r=(n(7294),n(3905)),o=["components"],s={title:"Picking the Scala version with scala-cli",sidebar_position:2},l=void 0,c={unversionedId:"cookbooks/scala-versions",id:"cookbooks/scala-versions",title:"Picking the Scala version with scala-cli",description:"By default, scala-cli runs the latest supported scala version by ScalaCLI. See our list of Supported Scala Versions in ScalaCLI.",source:"@site/docs/cookbooks/scala-versions.md",sourceDirName:"cookbooks",slug:"/cookbooks/scala-versions",permalink:"/docs/cookbooks/scala-versions",editUrl:"https://github.com/Virtuslab/scala-cli/edit/master/website/docs/cookbooks/scala-versions.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Picking the Scala version with scala-cli",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Packaging Scala applications as executable files",permalink:"/docs/cookbooks/scala-package"},next:{title:"Using scala-cli to run Scala Scripts",permalink:"/docs/cookbooks/scala-scripts"}},p=[{value:"When should I provide a full version of Scala?",id:"when-should-i-provide-a-full-version-of-scala",children:[],level:2}],u={toc:p};function m(e){var a=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,t.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"scala-cli")," runs the latest supported scala version by ScalaCLI. See our list of ",(0,r.kt)("a",{parentName:"p",href:"../reference/scala-versions"},"Supported Scala Versions")," in ScalaCLI."),(0,r.kt)("p",null,"To demonstrate how this works, here\u2019s a universal piece of code that detects the Scala version at runtime.\nThe code is a bit complicated, so we suggest that you skip reading the whole file, and just focus on what it prints:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=ScalaVersion.scala",title:"ScalaVersion.scala"},'object ScalaVersion extends App {\n  def props(url: java.net.URL): java.util.Properties = {\n    val properties = new java.util.Properties()\n    val is = url.openStream()\n    try {\n      properties.load(is)\n      properties\n    } finally is.close()\n  }\n\n  def scala2Version: String =\n    props(getClass.getResource("/library.properties")).getProperty("version.number")\n\n  def checkScala3(res: java.util.Enumeration[java.net.URL]): String =\n    if (!res.hasMoreElements) scala2Version else {\n      val manifest = props(res.nextElement)\n      manifest.getProperty("Specification-Title") match {\n        case "scala3-library-bootstrapped" =>\n          manifest.getProperty("Implementation-Version")\n        case _ => checkScala3(res)\n      }\n    }\n  val manifests = getClass.getClassLoader.getResources("META-INF/MANIFEST.MF")\n\n  val scalaVersion = checkScala3(manifests)\n  val javaVersion = System.getProperty("java.version")\n\n  println(s"Scala: $scalaVersion")\n}\n')),(0,r.kt)("p",null,"When this application is run without specifying a Scala version, it uses the latest stable release of Scala \u2014 3.1.0 at the time of writing this doc:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli ScalaVersion.scala\n")),(0,r.kt)("p",null,"When you want to control the Scala version, you can control it from the command line using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--scala")," option (with ",(0,r.kt)("inlineCode",{parentName:"p"},"-S")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--scala-version")," aliases):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli -S 2.13.5 ScalaVersion.scala\n")),(0,r.kt)("p",null,'In many cases you won\'t care for a precise Scala version and will want "any Scala 2" or "any 2.13 release."\nFor this situation, ',(0,r.kt)("inlineCode",{parentName:"p"},"scala-cli")," accepts version prefixes like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli -S 2.13.6 ScalaVersion.scala\n")),(0,r.kt)("p",null,"and this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli -S 2.12 ScalaVersion.scala\n")),(0,r.kt)("p",null,"In the first example (",(0,r.kt)("inlineCode",{parentName:"p"},"-S 2"),"), the application picks up the latest Scala 2 stable release (",(0,r.kt)("inlineCode",{parentName:"p"},"2.13.7")," at the time of this writing).\nIn the second example, the application picks up the latest stable release of ",(0,r.kt)("inlineCode",{parentName:"p"},"2.12")," (which is ",(0,r.kt)("inlineCode",{parentName:"p"},"2.12.15")," at the time of this writing)."),(0,r.kt)("p",null,"You can also pin the version of the language within a ",(0,r.kt)("inlineCode",{parentName:"p"},".scala")," file with ",(0,r.kt)("inlineCode",{parentName:"p"},"using")," directives."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"using")," directives syntax is still experimental, and may change in future versions of ",(0,r.kt)("inlineCode",{parentName:"p"},"scala-cli"),"."))),(0,r.kt)("p",null,"Here\u2019s an example of a source code file named ",(0,r.kt)("inlineCode",{parentName:"p"},"version.scala")," that contains a ",(0,r.kt)("inlineCode",{parentName:"p"},"using")," directive:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=version.scala",title:"version.scala"},"//> using scala 2.12.5\n\nobject OldCode\n//rest of the config\n")),(0,r.kt)("p",null,"Now when you compile that code along with the previous ",(0,r.kt)("inlineCode",{parentName:"p"},"ScalaVersion.scala")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli ScalaVersion.scala version.scala\n")),(0,r.kt)("p",null,'The output at the time of this writing is "',(0,r.kt)("inlineCode",{parentName:"p"},"2.12.5"),'".'),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"scala-cli")," philosophy is \u201ccommand line first,\u201d so any configuration information that\u2019s passed to the command line will override ",(0,r.kt)("inlineCode",{parentName:"p"},"using")," directives. So when you run this command with the ",(0,r.kt)("inlineCode",{parentName:"p"},"-S")," option:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli -S 2.13.5 ScalaVersion.scala version.scala\n")),(0,r.kt)("p",null,'the result is "',(0,r.kt)("inlineCode",{parentName:"p"},"2.13.5"),'" (as opposed to "',(0,r.kt)("inlineCode",{parentName:"p"},"2.12.5"),'" in the previous example).'),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"See our ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/using-directives"},"Using Directives Guide")," for more details on ",(0,r.kt)("inlineCode",{parentName:"p"},"using")," directives."))),(0,r.kt)("h2",{id:"when-should-i-provide-a-full-version-of-scala"},"When should I provide a full version of Scala?"),(0,r.kt)("p",null,"For prototyping, scripting, and other use cases that won\u2019t need to be run multiple times in the future, providing a Scala version generally isn\u2019t necessary."),(0,r.kt)("p",null,"Scala is source and binary compatible within each major version (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"2.12.x")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"3.1.x"),") so specifying the version in ",(0,r.kt)("inlineCode",{parentName:"p"},"epoch.major")," form (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"2.12"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"2.13"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"3.1"),") should be perfectly fine for most use cases. When your Scala code contains more advanced features that may be more sensitive for changes in minor version (e.g., from ",(0,r.kt)("inlineCode",{parentName:"p"},"2.13.4")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"2.13.5"),") we recommend specifying the complete Scala version."))}m.isMDXComponent=!0}}]);