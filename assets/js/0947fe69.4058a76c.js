"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6021],{3905:function(e,a,t){t.d(a,{Zo:function(){return p},kt:function(){return d}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),s=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},p=function(e){var a=s(e.components);return n.createElement(l.Provider,{value:a},e.children)},k={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(t),d=r,u=m["".concat(l,".").concat(d)]||m[d]||k[d]||o;return t?n.createElement(u,c(c({ref:a},p),{},{components:t})):n.createElement(u,c({ref:a},p))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=m;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5606:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var n=t(3117),r=t(102),o=(t(7294),t(3905)),c=["components"],i={title:"Packaging Scala applications as Docker images",sidebar_position:5},l=void 0,s={unversionedId:"cookbooks/scala-docker",id:"cookbooks/scala-docker",title:"Packaging Scala applications as Docker images",description:"Scala CLI can create an executable application and package it into a Docker image.",source:"@site/docs/cookbooks/scala-docker.md",sourceDirName:"cookbooks",slug:"/cookbooks/scala-docker",permalink:"/docs/cookbooks/scala-docker",editUrl:"https://github.com/Virtuslab/scala-cli/edit/master/website/docs/cookbooks/scala-docker.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Packaging Scala applications as Docker images",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Testing your code with different Java versions",permalink:"/docs/cookbooks/scala-jvm"},next:{title:"Sharing and testing code with GitHub gists",permalink:"/docs/cookbooks/gists"}},p=[],k={toc:p};function m(e){var a=e.components,t=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},k,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Scala CLI can create an executable application and package it into a Docker image."),(0,o.kt)("p",null,"For example, here's a simple piece of code that will be executed in a Docker container:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=HelloDocker.scala",title:"HelloDocker.scala"},'object HelloDocker extends App {\n    println("Hello from Docker")\n}\n')),(0,o.kt)("p",null,"Passing ",(0,o.kt)("inlineCode",{parentName:"p"},"--docker")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"package")," sub-command generates a Docker image. When creating a Docker image, the ",(0,o.kt)("inlineCode",{parentName:"p"},"--docker-image-repository")," parameter is mandatory."),(0,o.kt)("p",null,"The following command generates a ",(0,o.kt)("inlineCode",{parentName:"p"},"hello-docker")," image with the ",(0,o.kt)("inlineCode",{parentName:"p"},"latest")," tag:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli package --docker HelloDocker.scala --docker-image-repository hello-docker\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run hello-docker\n# Hello from Docker\n")),(0,o.kt)("p",null,"You can also package your app in the Scala.JS or Scala Native environments.\nFor example, this command creates a Scala.JS Docker image:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli package --js --docker HelloDocker.scala --docker-image-repository hello-docker\n")),(0,o.kt)("p",null,"This command creates a Scala Native Docker image:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"ignore",ignore:!0},"scala-cli package --native --docker HelloDocker.scala --docker-image-repository hello-docker\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Packaging a Scala Native application to a Docker image is supported only on Linux."))))}m.isMDXComponent=!0}}]);