(self.webpackChunkzawlinnnaing=self.webpackChunkzawlinnnaing||[]).push([[49],{9123:function(e,t,n){"use strict";n.d(t,{bG:function(){return c},$0:function(){return d},VY:function(){return p}});var o=n(7294),l=(0,o.createContext)({selected:"",refs:{},meta:{},scrollTo:function(){},registerRef:function(){return null}}),r=(l.Consumer,l.Provider),a=n(9634),i={},s={};"undefined"!=typeof window&&n.n(a)().polyfill();var c=function(e){var t=e.debounceDelay,n=void 0===t?50:t,l=e.scrollBehavior,a=void 0===l?"smooth":l,c=e.offset,u=void 0===c?0:c,m=e.children,d=(0,o.useState)(""),p=d[0],f=d[1];(0,o.useEffect)((function(){return document.addEventListener("scroll",E,!0),b(),function(){document.removeEventListener("scroll",E,!0)}}),[]);var h,g,v,b=function(){var e=Object.keys(i).reduce((function(e,t){var n=i[t]&&i[t].current;if(!n)return{id:t,differenceFromTop:0};var o=n.getBoundingClientRect().top,l=Math.abs(o);return l>=e.differenceFromTop?e:{differenceFromTop:l,id:t}}),{differenceFromTop:9999,id:""});p!==e.id&&f(e.id)},E=(h=b,g=n,v=null,function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];null!==v&&(clearTimeout(v),v=null),v=setTimeout((function(){return h.apply(void 0,e)}),g)}),w=function(e){var t=e.id,n=e.meta,l=(0,o.createRef)();return i[t]=l,s[t]=n,l},y=function(e){var t=i[e]&&i[e].current;if(!t)return console.warn("Section ID not recognized!");f(e),window.scrollTo({top:t.offsetTop+u,behavior:a})},k=(0,o.useMemo)((function(){return{registerRef:w,scrollTo:y,refs:i,meta:s,selected:p}}),[p,i]);return o.createElement(r,{value:k},m)},u=function(){return u=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},u.apply(this,arguments)},m=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(o=Object.getOwnPropertySymbols(e);l<o.length;l++)t.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(n[o[l]]=e[o[l]])}return n},d=function(e){var t=e.id,n=e.children,r=e.meta,a=m(e,["id","children","meta"]),i=(0,o.useContext)(l).registerRef,s=(0,o.useMemo)((function(){return i({id:t,meta:r})}),[t]);return o.createElement("section",u({},a,{ref:s,id:t}),n)},p=function(){var e=(0,o.useContext)(l),t=e.scrollTo,n=e.selected,r=e.refs,a=e.meta;return Object.keys(r).map((function(e){return{id:e,meta:a[e],onClick:function(){return t(e)},selected:n===e}}))}},9634:function(e){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var n,o=e.HTMLElement||e.Element,l={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:o.prototype.scroll||i,scrollIntoView:o.prototype.scrollIntoView},r=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,a=(n=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(n)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?f.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):l.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(s(arguments[0])?l.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):f.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},o.prototype.scroll=o.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==s(arguments[0])){var e=arguments[0].left,t=arguments[0].top;f.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");l.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},o.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):l.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},o.prototype.scrollIntoView=function(){if(!0!==s(arguments[0])){var n=d(this),o=n.getBoundingClientRect(),r=this.getBoundingClientRect();n!==t.body?(f.call(this,n,n.scrollLeft+r.left-o.left,n.scrollTop+r.top-o.top),"fixed"!==e.getComputedStyle(n).position&&e.scrollBy({left:o.left,top:o.top,behavior:"smooth"})):e.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else l.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function i(e,t){this.scrollLeft=e,this.scrollTop=t}function s(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(e,t){return"Y"===t?e.clientHeight+a<e.scrollHeight:"X"===t?e.clientWidth+a<e.scrollWidth:void 0}function u(t,n){var o=e.getComputedStyle(t,null)["overflow"+n];return"auto"===o||"scroll"===o}function m(e){var t=c(e,"Y")&&u(e,"Y"),n=c(e,"X")&&u(e,"X");return t||n}function d(e){for(;e!==t.body&&!1===m(e);)e=e.parentNode||e.host;return e}function p(t){var n,o,l,a,i=(r()-t.startTime)/468;a=i=i>1?1:i,n=.5*(1-Math.cos(Math.PI*a)),o=t.startX+(t.x-t.startX)*n,l=t.startY+(t.y-t.startY)*n,t.method.call(t.scrollable,o,l),o===t.x&&l===t.y||e.requestAnimationFrame(p.bind(e,t))}function f(n,o,a){var s,c,u,m,d=r();n===t.body?(s=e,c=e.scrollX||e.pageXOffset,u=e.scrollY||e.pageYOffset,m=l.scroll):(s=n,c=n.scrollLeft,u=n.scrollTop,m=i),p({scrollable:s,method:m,startTime:d,startX:c,startY:u,x:o,y:a})}}}}()},1580:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var o=n(1442),l=n(7294),r=n(9123),a=n(9);const i=a.default.div.withConfig({displayName:"TableOfContent__ExpandedPanel",componentId:"sc-13pposw-0"})(["transition:height 0.5s;"]),s=a.default.section.withConfig({displayName:"TableOfContent__Container",componentId:"sc-13pposw-1"})(["height:",";"],(e=>e.isVisible?"auto":"0px"));function c({expandedPanelHeight:e="170px",outerClassName:t="",sectionIds:n}){const{0:a,1:c}=(0,l.useState)(!1),u=(0,l.useRef)(null),m=(0,r.VY)(),d=function(){const e=(0,l.useRef)(0),{0:t,1:n}=(0,l.useState)(!0);function o(){const t=window.pageYOffset||document.documentElement.scrollTop;t>e.current?n(!1):n(!0),e.current=t<=0?0:t}return(0,l.useEffect)((()=>(document.addEventListener("scroll",o),()=>{document.removeEventListener("scroll",o)})),[]),t}();function p(){c(!a)}const f=(0,l.useMemo)((()=>m.filter((e=>n.includes(e.id)))),[m,n]);return(0,l.useEffect)((()=>{u.current&&(u.current.style.height=a?e:"0px")}),[a]),l.createElement(s,{className:"app-table-of-content "+t,isVisible:d},l.createElement("div",{className:"block p-4 shadow-sm border-b-2"},l.createElement("div",{className:"flex justify-between",tabIndex:-1,onClick:p,role:"button"},l.createElement("p",null,"Table of content"),l.createElement("button",{className:"block",type:"button",onClick:p},a?l.createElement(o.g8U,{width:"16",height:"16"}):l.createElement(o.v4q,{width:"16",height:"16"}))),l.createElement(i,{className:"h-0 overflow-y-scroll "+(a?"mt-4":""),ref:u},l.createElement("ul",null,f.map((e=>l.createElement("li",{className:"p-4 text-green-500",key:e.id},l.createElement("a",{href:"#"+e.id,className:(e.selected?"active-link":"")+" py-2",key:e.id,onClick:()=>{c(!1)}},e.meta.text))))))))}},6074:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var o=n(7294),l=n(9123),r=n(9),a=n(4704),i=n(7905),s=n(1580),c=n(7114),u="about-module--aboutSection--gaEnL",m="about-module--aboutSectionTitle--14e4R",d=n(7043);const p=r.default.span.withConfig({displayName:"about__PrimarySpan",componentId:"sc-fz887s-0"})(["color:var(--accent-color);font-weight:bold;"]),f=r.default.hr.withConfig({displayName:"about__SectionHr",componentId:"sc-fz887s-1"})(["margin:0 1rem;"]),h={frontend:"frontend",backend:"backend",tldr:"tldr"};function g(e){return o.createElement(o.Fragment,null,o.createElement(c.Z,{location:e.location},o.createElement(i.Z,{title:"About me - Zaw Lin Naing",description:"I am a software engineer with 5 years of professional experience in developing web applications, using Node.js, React.js, Vue.js and Laravel. I also have hands-on experience in Docker, Kubernetes, AWS and Deep Learning/Machine Learning."}),o.createElement("section",{className:"block"},o.createElement(l.bG,null,o.createElement(s.Z,{sectionIds:Object.values(h),expandedPanelHeight:"12rem"}),o.createElement("div",{className:"max-w-screen pt-16 about-module--aboutContainer--1j3aB"},o.createElement(l.$0,{id:h.tldr,className:u,meta:{text:"TLDR"}},o.createElement("h1",{className:m},"TLDR;"),o.createElement("p",null,"I am a software engineer with 5 years of professional experience in developing web applications, using"," ",o.createElement(a.Z,{href:d.rA.nodejs.url},"Node.js"),","," ",o.createElement(a.Z,{href:d.rA.reactJs.url},"React.js"),","," ",o.createElement(a.Z,{href:d.rA.vue.url},"Vue.js")," and"," ",o.createElement(a.Z,{href:d.rA.laravel.url},"Laravel"),". I also have hands-on experience in"," ",o.createElement(p,null,"Docker, Kubernetes, AWS and Deep Learning/Machine Learning"),". I love to build scalable and maintainable software and always prioritize clean software architecture in software development. I am always eager to learn new technologies and concepts to contribute more."),o.createElement("p",{className:"italic font-bold text-green-500"},"What I can offer:"),o.createElement("ol",{className:"list-disc ml-8"},o.createElement("li",null,"Architect and develop web applications both backend and frontend."),o.createElement("li",null,"Setup and Deploy web apps on cloud providers, e.g,"," ",o.createElement(a.Z,{href:"https://aws.amazon.com/"},"AWS"),","," ",o.createElement(a.Z,{href:"https://www.digitalocean.com/"},"Digital Ocean")," ","using Docker, Kubernetes and Serverless."),o.createElement("li",null,"Can work on Deep learning/Machine learning projects if needed."),o.createElement("li",null,"Research about new technologies to solve complex business problems."))),o.createElement(f,null),o.createElement(l.$0,{id:h.backend,className:u,meta:{text:"Backend Engineering"}},o.createElement("h1",{className:m},"Backend Engineering"),o.createElement("p",{className:"my-4"},"I can design and build scalable services with either"," ",o.createElement(p,null,"microservice")," or"," ",o.createElement(p,null,"monolith")," architectures. I can also provide insights on which architecture to choose depending on business requirements and constraints. I can solve business problems with the following data storage technologies."),o.createElement("ul",{className:"list-disc ml-8"},o.createElement("li",null,"NoSQL database:"," ",o.createElement("span",{className:"app-link"},o.createElement(a.Z,{href:"https://www.mongodb.com/"},"MongoDB")),"."),o.createElement("li",null,"SQL databases:"," ",o.createElement(a.Z,{href:"https://www.mysql.com/"},"MySQL"),","," ",o.createElement(a.Z,{href:"https://www.postgresql.org/"},"PostgreSQL"),"."),o.createElement("li",null,"In-memory storage:"," ",o.createElement(a.Z,{href:"https://redis.io/"},"Redis"),"."),o.createElement("li",null,"Cloud Object Storage:"," ",o.createElement(a.Z,{href:"https://aws.amazon.com/s3"},"S3"),".")),o.createElement("p",null,"I am happy to learn any frameworks, programming languages or technologies as a whole that will help in solving business problems. What I can offer for backend engineering includes:"),o.createElement("ul",{className:"list-disc ml-8"},o.createElement("li",null,"Designing the overall system architecture for web applications."),o.createElement("li",null,"Developing the backend system using Node.js and Laravel."),o.createElement("li",null,"Refactoring existing backend code by improving readability, separation of concerns, decoupling business logic from request/response layer or framework-specific functions into separate modules. Changing layered architecture into modular architecture for ease of splitting monolithic app into micro-services."),o.createElement("li",null,"Migrate monolith applications into micro-services and ensure"," ",o.createElement(a.Z,{href:"https://en.wikipedia.org/wiki/Eventual_consistency"},"eventual data consistency")," ","for such distributed services"),o.createElement("li",null,"Database schema design, including SQL and NoSQL to satisfy business needs."),o.createElement("li",null,"Working with APIs, including integration with third-party APIs, RESTful API development and GraphQL development."),o.createElement("li",null,"Writing unit tests and integration tests"),o.createElement("li",null,"Containerization of web applications using"," ",o.createElement(a.Z,{href:"https://www.docker.com/"},"Docker")," and deploying multiple services using"," ",o.createElement(a.Z,{href:"https://kubernetes.io/"},"Kubernetes")," ","and Nginx load balancer."))),o.createElement(f,null),o.createElement(l.$0,{id:h.frontend,className:u,meta:{text:"Frontend Engineering"}},o.createElement("h1",{className:m},"Frontend Engineering"),o.createElement("p",null,"I have built"," ",o.createElement("span",{className:"font-bold"},"several enterprise-level web apps")," ","using ",o.createElement(a.Z,{href:"https://reactjs.org/"},"React.js")," ","and ",o.createElement(a.Z,{href:d.rA.nextJS.url},"Next.js"),". I also have experience in building"," ",o.createElement("span",{className:"font-bold"},"3+ small to medium sized applications")," ","using ",o.createElement(a.Z,{href:"https://vuejs.org/"},"Vue.js"),". Even though I am not as experience in Vue.js as React.js, I am confident that I can transfer my knowledge regarding with architectural patterns and principles from React. Thus, I believe that I can build quality apps with both frameworks. I can also setup"," ",o.createElement(a.Z,{href:"https://web.dev/progressive-web-apps/"},"PWA")," ","using above mentioned frameworks. I am currently a fan of writing"," ",o.createElement(a.Z,{href:"https://blog.logrocket.com/react-pure-components-functional/"},"pure")," ","components and developing in"," ",o.createElement(a.Z,{href:"https://redux.js.org/tutorials/fundamentals/part-1-overview"},"redux architecture"),"."),"On the frontend-side, I can help you with:",o.createElement("ul",{className:"list-disc ml-8"},o.createElement("li",null,"Development of enterprise level applications with"," ",o.createElement(a.Z,null,"React.js")," and ",o.createElement(a.Z,null,"Vue.js"),"."),o.createElement("li",null,"Refactoring codebase to implement Redux architecture and pure components, for better maintainability, separation of concerns, and thus, faster development speed."),o.createElement("li",null,"Adoption of design systems and integration with their components library, such as"," ",o.createElement(a.Z,{href:"https://www.carbondesignsystem.com/"},"Carbon"),", ",o.createElement(a.Z,{href:"https://ant.design/"},"Ant.design"),"."),o.createElement("li",null,"Writing unit tests and behavioral driven tests."),o.createElement("li",null,"Deployment of static websites,"," ",o.createElement(a.Z,{href:"https://en.wikipedia.org/wiki/Single-page_application#:~:text=A%20single%2Dpage%20application%20(SPA,browser%20loading%20entire%20new%20pages."},"SPA"),", and"," ",o.createElement(a.Z,{href:"https://web.dev/progressive-web-apps/"},"PWA")," ","using containerization technologies or web server."))))))))}}}]);
//# sourceMappingURL=component---src-pages-about-tsx-4bd1cdf551a406610a88.js.map