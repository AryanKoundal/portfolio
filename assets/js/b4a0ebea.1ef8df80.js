"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7704],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,h=p["".concat(s,".").concat(u)]||p[u]||d[u]||r;return n?o.createElement(h,i(i({ref:t},m),{},{components:n})):o.createElement(h,i({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8615:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],l={title:"MongoDB Setup"},s=void 0,c={unversionedId:"Web Development/mongodb-setup",id:"Web Development/mongodb-setup",title:"MongoDB Setup",description:"Published on December 23, 2020",source:"@site/docs/Web Development/mongodb-setup.md",sourceDirName:"Web Development",slug:"/Web Development/mongodb-setup",permalink:"/portfolio/docs/Web Development/mongodb-setup",draft:!1,tags:[],version:"current",frontMatter:{title:"MongoDB Setup"},sidebar:"tutorialSidebar",previous:{title:"MongoDB Cheatsheet",permalink:"/portfolio/docs/Web Development/mongodb-cheatsheet"},next:{title:"NodeJS Auto-reload server",permalink:"/portfolio/docs/Web Development/nodejs-auto-reload"}},m={},d=[{value:"Installation and config",id:"installation-and-config",level:2},{value:"Create a new collection",id:"create-a-new-collection",level:2},{value:"Create a new user",id:"create-a-new-user",level:2},{value:"connection-string format",id:"connection-string-format",level:2},{value:"Authentication",id:"authentication",level:3},{value:"Verify connection-string",id:"verify-connection-string",level:3},{value:"Resources",id:"resources",level:2}],p={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Published on December 23, 2020"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"This document was migrated from ",(0,r.kt)("a",{parentName:"em",href:"https://digipie.github.io/digidocs/mongodb/local-setup/"},"DigiDocs"))),(0,r.kt)("p",null,"The purpose of this guide is to quickly set up a local copy of MongoDB ",(0,r.kt)("strong",{parentName:"p"},"on Windows")," for local development purposes. Authentication will not be enabled or covered in this tutorial."),(0,r.kt)("h2",{id:"installation-and-config"},"Installation and config"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/administration/install-community/"},"MongoDB Community Edition"),", the standard configuration is fine."),(0,r.kt)("li",{parentName:"ol"},"Take note of where your installation's ",(0,r.kt)("inlineCode",{parentName:"li"},"bin")," folder is at, it should be at ",(0,r.kt)("inlineCode",{parentName:"li"},"C:\\Program Files\\MongoDB\\Server\\4.2\\bin")," by default."),(0,r.kt)("li",{parentName:"ol"},"Add it to your environment variables. See guide ",(0,r.kt)("a",{parentName:"li",href:"https://www.architectryan.com/2018/03/17/add-to-the-path-on-windows-10/"},"here"),"."),(0,r.kt)("li",{parentName:"ol"},"Open your terminal - if you already have it opened, exit and re-open it to reload the enviroment variables."),(0,r.kt)("li",{parentName:"ol"},"Enter ",(0,r.kt)("inlineCode",{parentName:"li"},"mongo")," to access MongoDB.")),(0,r.kt)("h2",{id:"create-a-new-collection"},"Create a new collection"),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Next, create a new collection, use the ",(0,r.kt)("inlineCode",{parentName:"li"},"use")," command:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# To display the database you are using\ndb\n\n# To switch databases use `use <database>`\n# To create a new database, switch to a non-existing database\nuse dev\n\n# Template\nuse <database>\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Read ",(0,r.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/mongo/"},"https://docs.mongodb.com/manual/mongo/")," for more information.")),(0,r.kt)("h2",{id:"create-a-new-user"},"Create a new user"),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Next, create a user with ",(0,r.kt)("inlineCode",{parentName:"li"},"readWrite")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"dbAdmin")," roles, using the ",(0,r.kt)("inlineCode",{parentName:"li"},"db.createUser()")," command:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Switch to the database you want to add the user to\nuse dev\n\n# Create the user with `readWrite` and `dbAdmin` rights\ndb.createUser(\n  {\n    user: "devadmin",\n    pwd: passwordPrompt(),\n    roles: [ "readWrite", "dbAdmin" ]\n  }\n)\n\n# Template\ndb.createUser(\n  {\n    user: <username>,\n    pwd: <password>,\n    roles: [ "readWrite", "dbAdmin" ]\n  }\n)\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Read ",(0,r.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/reference/method/db.createUser/"},"https://docs.mongodb.com/manual/reference/method/db.createUser/")," for more information.")),(0,r.kt)("h2",{id:"connection-string-format"},"connection-string format"),(0,r.kt)("p",null,"The connection-string is used to access the MongoDB instance from your applications (i.e. MongooseJS). The format of your connection-string is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[database][?options]]\n# Parts in [ and ] are optional\n\n# Example, without authentication\nmongodb://localhost:27017/dev\n\n# Example, with authentication\nmongodb://devadmin:<password>@localhost:27017/dev\n# Replace the <password> with your actual password\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If the username or password includes the at sign @, colon :, slash /, or the percent sign % character, use percent encoding. See ",(0,r.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/reference/connection-string/#examples"},"https://docs.mongodb.com/manual/reference/connection-string/#examples")," for more information.")),(0,r.kt)("h3",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"Given that we are not enabling authentication, you can use either of the above connection-string URI formats."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Read ",(0,r.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/tutorial/enable-authentication/"},"https://docs.mongodb.com/manual/tutorial/enable-authentication/")," for more information.")),(0,r.kt)("h3",{id:"verify-connection-string"},"Verify connection-string"),(0,r.kt)("p",null,"To verify your connection-string, simply use ",(0,r.kt)("inlineCode",{parentName:"p"},"mongo <mongoURI>"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Example, without authentication\nmongo mongodb://localhost:27017/dev\n\n# Example, with authentication\nmongo mongodb://devadmin:<password>@localhost:27017/dev\n")),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://digipie.github.io/digidocs/mongodb/local-setup/"},"Original copy of this document at DigiDocs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/administration/install-community/"},"MongoDB's official guide to Install MongoDB Community Edition")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.architectryan.com/2018/03/17/add-to-the-path-on-windows-10/"},"Architect Ryan's guide to Add to the PATH on Windows 10")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/mongo/"},"MongoDB's official guide to the mongo shell")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/reference/method/db.createUser/"},"MongoDB's official guide to db.createUser()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/reference/connection-string/"},"MongoDB's official guide to Connection String URI Format")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/tutorial/enable-authentication/"},"MongoDB's official guide to Enable Access Control"))))}u.isMDXComponent=!0}}]);