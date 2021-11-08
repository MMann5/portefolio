(this.webpackJsonpportefolio=this.webpackJsonpportefolio||[]).push([[0],{26:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(9),a=n(3),i=n(1),s=n(0),l=Object(i.createContext)(),o=function(e){var t=e.children,n=Object(i.useState)("light"),c=Object(a.a)(n,2),o=c[0],r=c[1];Object(i.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");r(e.matches?"dark":"light"),e.addEventListener("change",(function(e){r(e.matches?"dark":"light")}))}),[]);return Object(s.jsx)(l.Provider,{value:[{themeName:o,toggleTheme:function(){var e="dark"===o?"light":"dark";localStorage.setItem("themeName",e),r(e)}}],children:t})},r="https://mmann5.github.io/portefolio/",h="MM.",j="Michael Mann",u="Full Stack/Frontend Web Developer",m="With experience in writring single-page application using the latest WEB technonologies, including ReactJs, Redux, NodeJs and MongoDB. Graduate of the Coding Academy - an intensive coding bootcamp (640 hours)that qualifies Full Stack developers.",b={linkedin:"https://linkedin.com/in/michael-mann-339545149 ",github:"https://github.com/MMann5"},d=[{name:"Blogin",description:"Pixel perfect Landing Page exercise",stack:["HTML","CSS","Javascript"],sourceCode:"https://github.com/MMann5/pixel-perfect",livePreview:"https://mmann5.github.io/pixel-perfect/"},{name:"Touch The Num",description:"You have to touch the numbers in the order as fast as possible",stack:["HTML","CSS","Javascript"],sourceCode:"https://github.com/MMann5/touchthenum",livePreview:"https://mmann5.github.io/touchthenum/"},{name:"Pacman",description:"Pac-Man is an action maze chase video game; the player controls the eponymous character through an enclosed maze.",stack:["HTML","CSS","Javascript"],sourceCode:"https://github.com/MMann5/pacman",livePreview:"https://mmann5.github.io/pacman/"},{name:"Ballboard",description:"Clone of Pacman with monster and balls",stack:["HTML","CSS","Javascript"],sourceCode:"https://github.com/MMann5/ballboard",livePreview:"https://mmann5.github.io/ballboard/"},{name:"Meme Generator",description:"You can create and download your meme",stack:["HTML","CSS","Javascript"],sourceCode:"https://github.com/MMann5/meme-generator",livePreview:"https://mmann5.github.io/meme-generator/"},{name:"Appsus",description:"Single Page Application of 3 applications : Mails, Notes and Bookstore",stack:["ReactJs","CSS","Javascript","API"],sourceCode:"https://github.com/MMann5/Appsus",livePreview:"https://mmann5.github.io/Appsus/"},{name:"Weather App",description:"First application with React Native",stack:["ReactNative","Style Component","Javascript","API","Expo"],sourceCode:"https://github.com/MMann5/meteo-app",livePreview:"https://github.com/MMann5/meteo-app"},{name:"Trellops",description:"Trello clone, Project End to End",stack:["ReactJs","Redux","Javascript","NodeJs","Express","MongoDB","React-Beautiful-DND","WebSockets"],sourceCode:"https://github.com/MMann5/trellops",livePreview:"http://trellops.herokuapp.com/#/"}],p=["HTML","CSS","SASS","JavaScript","ReactJs","React Native","Redux","Material UI","Git","NodeJs","API","MongoDB","Mongoose"],O="michael.mann55@gmail.com",x=n(14),v=n.n(x),g=n(12),f=n.n(g),k=n(16),N=n.n(k),M=n(15),_=n.n(M),C=(n(26),function(){var e=Object(i.useContext)(l),t=Object(a.a)(e,1)[0],n=t.themeName,c=t.toggleTheme,o=Object(i.useState)(!1),r=Object(a.a)(o,2),h=r[0],j=r[1],u=function(){return j(!h)};return Object(s.jsxs)("nav",{className:"center nav",children:[Object(s.jsxs)("ul",{style:{display:h?"flex":null},className:"nav__list",children:[d.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#projects",onClick:u,className:"link link--nav",children:"Projects"})}):null,p.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#skills",onClick:u,className:"link link--nav",children:"Skills"})}):null,O?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#contact",onClick:u,className:"link link--nav",children:"Contact"})}):null]}),Object(s.jsx)("button",{type:"button",onClick:c,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(s.jsx)(f.a,{}):Object(s.jsx)(v.a,{})}),Object(s.jsx)("button",{type:"button",onClick:u,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:h?Object(s.jsx)(_.a,{}):Object(s.jsx)(N.a,{})})]})}),S=(n(32),function(){var e=r,t=h;return Object(s.jsxs)("header",{className:"header center",children:[Object(s.jsx)("h3",{children:e?Object(s.jsx)("a",{href:e,className:"link",children:t}):t}),Object(s.jsx)(C,{})]})}),w=n(10),P=n.n(w),J=n(17),y=n.n(J),E=(n(33),function(){var e=j,t=u,n=m,c=b;return Object(s.jsxs)("div",{className:"about center",children:[e&&Object(s.jsxs)("h1",{children:["Hi, I am ",Object(s.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(s.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(s.jsx)("p",{className:"about__desc",children:n&&n}),Object(s.jsx)("div",{className:"about__contact center",children:c&&Object(s.jsxs)(s.Fragment,{children:[c.github&&Object(s.jsx)("a",{href:c.github,"aria-label":"github",className:"link link--icon",children:Object(s.jsx)(P.a,{})}),c.linkedin&&Object(s.jsx)("a",{href:c.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(s.jsx)(y.a,{})})]})})]})}),T=n(7),A=n.n(T),R=n(18),L=n.n(R),B=(n(35),function(e){var t=e.project;return Object(s.jsxs)("div",{className:"project",children:[Object(s.jsx)("h3",{children:t.name}),Object(s.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(s.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(s.jsx)("li",{className:"project__stack-item",children:e},A()())}))}),t.sourceCode&&Object(s.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(s.jsx)(P.a,{})}),t.livePreview&&Object(s.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(s.jsx)(L.a,{})})]})}),H=(n(36),function(){return d.length?Object(s.jsxs)("section",{id:"projects",className:"section projects",children:[Object(s.jsx)("h2",{className:"section__title",children:"Projects"}),Object(s.jsx)("div",{className:"projects__grid",children:d.map((function(e){return Object(s.jsx)(B,{project:e},A()())}))})]}):null}),I=(n(37),function(){return p.length?Object(s.jsxs)("section",{className:"section skills",id:"skills",children:[Object(s.jsx)("h2",{className:"section__title",children:"Skills"}),Object(s.jsx)("ul",{className:"skills__list",children:p.map((function(e){return Object(s.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},A()())}))})]}):null}),D=n(19),F=n.n(D),W=(n(38),function(){var e=Object(i.useState)(!1),t=Object(a.a)(e,2),n=t[0],c=t[1];return Object(i.useEffect)((function(){var e=function(){return window.pageYOffset>500?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(s.jsx)("div",{className:"scroll-top",children:Object(s.jsx)("a",{href:"#top",children:Object(s.jsx)(F.a,{fontSize:"large"})})}):null}),z=(n(39),function(){return O?Object(s.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(s.jsx)("h2",{className:"section__title",children:"Contact"}),Object(s.jsx)("a",{href:"mailto:".concat(O),children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),G=(n(40),function(){return Object(s.jsx)("footer",{className:"footer",children:Object(s.jsx)("a",{href:"https://mmann5.github.io/portefolio/",className:"link footer__link",children:"Copyright \xa9 2020 Michael Mann"})})}),Y=(n(41),function(){var e=Object(i.useContext)(l),t=Object(a.a)(e,1)[0].themeName;return Object(s.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(s.jsx)(S,{}),Object(s.jsxs)("main",{children:[Object(s.jsx)(E,{}),Object(s.jsx)(H,{}),Object(s.jsx)(I,{}),Object(s.jsx)(z,{})]}),Object(s.jsx)(W,{}),Object(s.jsx)(G,{})]})});n(42);Object(c.render)(Object(s.jsx)(o,{children:Object(s.jsx)(Y,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.abdd5353.chunk.js.map