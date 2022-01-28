"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Overview","href":"/docs/overview","docId":"overview"},{"type":"link","label":"Getting started","href":"/docs/getting_started","docId":"getting_started"},{"type":"category","label":"Commands","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Basics","href":"/docs/commands/basics","docId":"commands/basics"},{"type":"link","label":"Compile","href":"/docs/commands/compile","docId":"commands/compile"},{"type":"link","label":"Run","href":"/docs/commands/run","docId":"commands/run"},{"type":"link","label":"Test","href":"/docs/commands/test","docId":"commands/test"},{"type":"link","label":"Package","href":"/docs/commands/package","docId":"commands/package"},{"type":"link","label":"REPL","href":"/docs/commands/repl","docId":"commands/repl"},{"type":"link","label":"Format","href":"/docs/commands/fmt","docId":"commands/fmt"},{"type":"link","label":"IDE Setup","href":"/docs/commands/setup-ide","docId":"commands/setup-ide"},{"type":"link","label":"Clean","href":"/docs/commands/clean","docId":"commands/clean"}]},{"type":"category","label":"Guides","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introduction","href":"/docs/guides/intro","docId":"guides/intro"},{"type":"link","label":"Configuration","href":"/docs/guides/configuration","docId":"guides/configuration"},{"type":"link","label":"Managing dependencies","href":"/docs/guides/dependencies","docId":"guides/dependencies"},{"type":"link","label":"IDE support","href":"/docs/guides/ide","docId":"guides/ide"},{"type":"link","label":"Using directives","href":"/docs/guides/using-directives","docId":"guides/using-directives"},{"type":"link","label":"SBT and Mill","href":"/docs/guides/sbt-mill","docId":"guides/sbt-mill"},{"type":"link","label":"Scripts","href":"/docs/guides/scripts","docId":"guides/scripts"},{"type":"link","label":"Scala.JS","href":"/docs/guides/scala-js","docId":"guides/scala-js"},{"type":"link","label":"Scala Native","href":"/docs/guides/scala-native","docId":"guides/scala-native"},{"type":"link","label":"Internals","href":"/docs/guides/internals","docId":"guides/internals"}]},{"type":"category","label":"Cookbook","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introduction","href":"/docs/cookbooks/intro","docId":"cookbooks/intro"},{"type":"link","label":"Packaging Scala applications as executable files","href":"/docs/cookbooks/scala-package","docId":"cookbooks/scala-package"},{"type":"link","label":"Picking the Scala version with scala-cli","href":"/docs/cookbooks/scala-versions","docId":"cookbooks/scala-versions"},{"type":"link","label":"Using scala-cli to run Scala Scripts","href":"/docs/cookbooks/scala-scripts","docId":"cookbooks/scala-scripts"},{"type":"link","label":"Testing your code with different Java versions","href":"/docs/cookbooks/scala-jvm","docId":"cookbooks/scala-jvm"},{"type":"link","label":"Packaging Scala applications as Docker images","href":"/docs/cookbooks/scala-docker","docId":"cookbooks/scala-docker"},{"type":"link","label":"Sharing and testing code with GitHub gists","href":"/docs/cookbooks/gists","docId":"cookbooks/gists"},{"type":"link","label":"Setup ScalaCLI project in VSCode","href":"/docs/cookbooks/vscode","docId":"cookbooks/vscode"}]},{"type":"category","label":"Reference","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Command-line options","href":"/docs/reference/cli-options","docId":"reference/cli-options"},{"type":"link","label":"Directives","href":"/docs/reference/directives","docId":"reference/directives"},{"type":"link","label":"Commands","href":"/docs/reference/commands","docId":"reference/commands"},{"type":"link","label":"Dependency format","href":"/docs/reference/dependency","docId":"reference/dependency"},{"type":"link","label":"Working directory","href":"/docs/reference/working-dir","docId":"reference/working-dir"},{"type":"link","label":"Interaction with Bloop server","href":"/docs/reference/bloop","docId":"reference/bloop"},{"type":"link","label":"Supported scala versions","href":"/docs/reference/scala-versions","docId":"reference/scala-versions"}]},{"type":"link","label":"Under the hood","href":"/docs/under-the-hood","docId":"under-the-hood"}]},"docs":{"commands/basics":{"id":"commands/basics","title":"Basics","description":"Scala CLI is a command line tool that executes a given command on the inputs it\u2019s provided with a given configuration to produce a result.","sidebar":"tutorialSidebar"},"commands/clean":{"id":"commands/clean","title":"Clean","description":"The clean command deletes all of the files that are generated by scala-cli. This including the .scala directory where Scala CLI generated its output and stores its caches.","sidebar":"tutorialSidebar"},"commands/compile":{"id":"commands/compile","title":"Compile","description":"Scala CLI compiles your code with its compile command:","sidebar":"tutorialSidebar"},"commands/fmt":{"id":"commands/fmt","title":"Format","description":"Scala-cli supports formatting your code using Scalafmt:","sidebar":"tutorialSidebar"},"commands/package":{"id":"commands/package","title":"Package","description":"The package command can package your Scala code in various formats, such as:","sidebar":"tutorialSidebar"},"commands/repl":{"id":"commands/repl","title":"REPL","description":"The repl command starts a Scala REPL, which lets you interactively run your code and inspect its results:","sidebar":"tutorialSidebar"},"commands/run":{"id":"commands/run","title":"Run","description":"The run command runs your Scala code:","sidebar":"tutorialSidebar"},"commands/setup-ide":{"id":"commands/setup-ide","title":"IDE Setup","description":"Whether it\'s VS Code or IntelliJ, Scala CLI can help you setup your IDE of choice by generating the files that are necessary for it, providing you with full-blown IDE support.","sidebar":"tutorialSidebar"},"commands/test":{"id":"commands/test","title":"Test","description":"The test command runs test suites in the test sources.","sidebar":"tutorialSidebar"},"cookbooks/gists":{"id":"cookbooks/gists","title":"Sharing and testing code with GitHub gists","description":"Running code from gists","sidebar":"tutorialSidebar"},"cookbooks/intro":{"id":"cookbooks/intro","title":"Introduction","description":"This section of the documentation contains a set of recipes that show how to use scala-cli in certain situations.","sidebar":"tutorialSidebar"},"cookbooks/scala-docker":{"id":"cookbooks/scala-docker","title":"Packaging Scala applications as Docker images","description":"Scala CLI can create an executable application and package it into a Docker image.","sidebar":"tutorialSidebar"},"cookbooks/scala-jvm":{"id":"cookbooks/scala-jvm","title":"Testing your code with different Java versions","description":"You can use Scala CLI to test your code compatibility with various versions of java, with a key point being that manual installation of a JDK/SDK is not required(!).","sidebar":"tutorialSidebar"},"cookbooks/scala-package":{"id":"cookbooks/scala-package","title":"Packaging Scala applications as executable files","description":"Scala CLI lets you package your application into a lightweight JAR file that can be easily run.","sidebar":"tutorialSidebar"},"cookbooks/scala-scripts":{"id":"cookbooks/scala-scripts","title":"Using scala-cli to run Scala Scripts","description":"Scala Scripts","sidebar":"tutorialSidebar"},"cookbooks/scala-versions":{"id":"cookbooks/scala-versions","title":"Picking the Scala version with scala-cli","description":"By default, scala-cli runs the latest supported scala version by ScalaCLI. See our list of Supported Scala Versions in ScalaCLI.","sidebar":"tutorialSidebar"},"cookbooks/vscode":{"id":"cookbooks/vscode","title":"Setup ScalaCLI project in VSCode","description":"Scala CLI can generate the files that are necessary for providing IDE support in Visual Studio Code.","sidebar":"tutorialSidebar"},"getting_started":{"id":"getting_started","title":"Getting started","description":"This article requires knowledge of the Scala language (how to define a class or method) as well as Scala tooling (the REPL, and basics of dependency management and unit tests).","sidebar":"tutorialSidebar"},"guides/configuration":{"id":"guides/configuration","title":"Configuration","description":"scala-cli can be configured in two ways:","sidebar":"tutorialSidebar"},"guides/dependencies":{"id":"guides/dependencies","title":"Managing dependencies","description":"You can add dependencies on the command line, with the --dependency option:","sidebar":"tutorialSidebar"},"guides/ide":{"id":"guides/ide","title":"IDE support","description":"IDE support is currently under development, primarily because changes needs to be made in both Metals and IntelliJ.","sidebar":"tutorialSidebar"},"guides/internals":{"id":"guides/internals","title":"Internals","description":"Even though Scala CLI exposes a simple interface to users, quite a number of steps happen when compiling or running even a single source file.","sidebar":"tutorialSidebar"},"guides/intro":{"id":"guides/intro","title":"Introduction","description":"This section covers aspects of Scala CLI that apply across various commands.","sidebar":"tutorialSidebar"},"guides/sbt-mill":{"id":"guides/sbt-mill","title":"SBT and Mill","description":"Scala CLI lets you export your current build into sbt or Mill.","sidebar":"tutorialSidebar"},"guides/scala-js":{"id":"guides/scala-js","title":"Scala.JS","description":"Scala CLI can compile, run, test, and package Scala.JS sources.","sidebar":"tutorialSidebar"},"guides/scala-native":{"id":"guides/scala-native","title":"Scala Native","description":"Scala Native works with Scala 3.1.x, 2.13.x and 2.12.x. Scripts are unavailable for Scala 2.12.x.","sidebar":"tutorialSidebar"},"guides/scripts":{"id":"guides/scripts","title":"Scripts","description":"scala-cli accepts Scala scripts as files that end in .sc.","sidebar":"tutorialSidebar"},"guides/using-directives":{"id":"guides/using-directives","title":"Using directives","description":"using directives is an experimental language extension that may change in future versions of Scala CLI.","sidebar":"tutorialSidebar"},"overview":{"id":"overview","title":"Overview","description":"The scala-cli CLI makes it easier to compile, run, test, and package Scala code.","sidebar":"tutorialSidebar"},"reference/bloop":{"id":"reference/bloop","title":"Interaction with Bloop server","description":"TODO","sidebar":"tutorialSidebar"},"reference/cli-options":{"id":"reference/cli-options","title":"Command-line options","description":"This is a summary of options that are available for each subcommand of the scala-cli command.","sidebar":"tutorialSidebar"},"reference/commands":{"id":"reference/commands","title":"Commands","description":"about","sidebar":"tutorialSidebar"},"reference/dependency":{"id":"reference/dependency","title":"Dependency format","description":"- Same as Mill","sidebar":"tutorialSidebar"},"reference/directives":{"id":"reference/directives","title":"Directives","description":"using directives","sidebar":"tutorialSidebar"},"reference/scala-versions":{"id":"reference/scala-versions","title":"Supported scala versions","description":"Current ScalaCLI versions support Scala 3, 2.13 and 2.12. The table below lists the last supported version of scala in ScalaCLI. If you want to use newer scala, update scala-cli.","sidebar":"tutorialSidebar"},"reference/working-dir":{"id":"reference/working-dir","title":"Working directory","description":"- Scala CLI needs a working directory:","sidebar":"tutorialSidebar"},"under-the-hood":{"id":"under-the-hood","title":"Under the hood","description":"This page is for people who are already familiar with the Scala/JVM ecosystem.","sidebar":"tutorialSidebar"}}}')}}]);