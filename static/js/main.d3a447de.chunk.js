(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{31:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(22),r=n.n(a),s=(n(31),n(11)),i=n(4),o=n(3),l=n(6),j=n(1),d={nav:!1,start:!0,game:!1,end:!1,activity:!1,countdown:!1,score:0},h=function(e,t){switch(t.type){case"NAV_CLOSE":return Object(l.a)(Object(l.a)({},e),{},{nav:!1});case"NAV_OPEN":return Object(l.a)(Object(l.a)({},e),{},{nav:!0});case"START_SCREEN":return Object(l.a)(Object(l.a)({},e),{},{start:!0,game:!1,activity:!1,end:!1,countdown:!1});case"GAME_BOARD":return Object(l.a)(Object(l.a)({},e),{},{start:!1,game:!0,activity:!1,end:!1,countdown:!0,score:0});case"GAME_START":return Object(l.a)(Object(l.a)({},e),{},{start:!1,game:!0,activity:!0,end:!1,countdown:!1});case"GAMEOVER":return Object(l.a)(Object(l.a)({},e),{},{start:!1,game:!1,activity:!1,end:!0,countdown:!1});case"SCORE":return Object(l.a)(Object(l.a)({},e),t.data);default:return console.log("Invalid action type: ".concat(t.type)),e}},b=Object(c.createContext)(),u=function(){return Object(c.useContext)(b)},m=function(e){var t=Object(c.useReducer)(h,d),n=Object(o.a)(t,2),a=n[0],r=n[1];return Object(j.jsx)(b.Provider,Object(l.a)({value:[a,r]},e))},f=n.p+"static/media/deepthoughts.932d382c.PNG",O=n.p+"static/media/resume.776822ed.pdf",g=n(14),p=n(10),v=n(15);function x(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1];function r(){a(!1)}return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("nav",{className:"nav",children:[Object(j.jsx)("a",{className:"dev",href:"#top",children:"Tyler Dev"}),Object(j.jsx)("div",{className:"gitLinkedIconsNav",children:Object(j.jsxs)("ul",{className:"social-list",children:[Object(j.jsx)("li",{className:"social-item",children:Object(j.jsx)("a",{href:"https://www.linkedin.com/in/tyler-petri-051155206/",className:"social-link",target:"_blank",rel:"noreferrer",children:Object(j.jsx)(p.d,{className:"navIcons",id:"purple"})})}),Object(j.jsx)("li",{className:"social-item",children:Object(j.jsx)("a",{href:"https://github.com/TylerPetri",className:"social-link",target:"_blank",rel:"noreferrer",children:Object(j.jsx)(g.a,{className:"navIcons",id:"purple"})})})]})}),Object(j.jsxs)("div",{className:"directory",children:[Object(j.jsx)("div",{className:"nav-item",children:Object(j.jsx)(s.b,{to:"/Portfolio",className:"nav-link",children:"Home"})}),Object(j.jsx)("div",{className:"nav-item",children:Object(j.jsx)(s.b,{to:"/demos",className:"nav-link",children:"Demos"})}),Object(j.jsx)("div",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-link",href:O,target:"_blank",rel:"noreferrer",children:"Resume"})}),Object(j.jsx)("div",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-link",href:"#footer",children:"Contact"})})]}),Object(j.jsx)("div",{onClick:function(){a(!0)},className:"hamburgerBtn",children:Object(j.jsx)(v.a,{})}),Object(j.jsxs)("div",{id:"mySidenav",className:"sidenav",style:{width:n?"175px":"0"},children:[Object(j.jsx)("button",{className:"closebtn",onClick:r,children:"\xd7"}),Object(j.jsx)("div",{className:"nav-item",children:Object(j.jsx)(s.b,{to:"/Portfolio",className:"nav-link",onClick:r,children:"Home"})}),Object(j.jsx)("div",{className:"nav-item",children:Object(j.jsx)(s.b,{to:"/demos",className:"nav-link",onClick:r,children:"Demos"})}),Object(j.jsx)("div",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-link",href:O,target:"_blank",rel:"noreferrer",onClick:r,children:"Resume"})}),Object(j.jsx)("div",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-link",href:"#footer",onClick:r,children:"Contact"})})]})]})})}var k=n.p+"static/media/selfie.842a615f.jpg";function N(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("section",{className:"intro",children:[Object(j.jsxs)("h1",{className:"section-title title-intro",children:["Hi, I'm ",Object(j.jsx)("span",{children:"Tyler Petri"})]}),Object(j.jsx)("p",{className:"subtitle subtitle-intro",id:"bio",children:"Web Development"}),Object(j.jsx)("img",{src:k,alt:"Profile",className:"my-pic"})]}),Object(j.jsxs)("div",{className:"bioBox",children:[Object(j.jsx)("h3",{className:"bioTitle",children:"About me"}),Object(j.jsx)("p",{children:"A retired poker player, semi-retired cook who has found a keen interest in programming during COVID-19."}),Object(j.jsx)("p",{children:"I've graduated from a 12-week intensive Full Stack bootcamp a few months ago, continuing my studies and exploration ever since to further my knowledge. Eventually deciding to specialize in Javascript/React/Redux with AWS experience."}),Object(j.jsx)("p",{children:"Below you will find my proficient technical skills, highlighted full stack projects and contact information. The demos page showcases smaller projects, although one can only be viewed on a desktop. Feel free to visit my linkedin and github for further details!"})]})]})}var w=n(25);function y(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(g.a,{className:"icons"}),Object(j.jsx)(w.a,{className:"icons"}),Object(j.jsx)(p.h,{className:"icons"}),Object(j.jsx)(g.b,{className:"icons"}),Object(j.jsx)(p.a,{className:"icons"}),Object(j.jsx)(p.f,{className:"icons"}),Object(j.jsx)(p.g,{className:"icons"}),Object(j.jsx)(p.e,{className:"icons"}),Object(j.jsx)(p.b,{className:"icons"}),Object(j.jsx)(p.c,{className:"icons"}),Object(j.jsx)(v.b,{className:"icons"})]})}function S(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"work",children:[Object(j.jsx)("div",{className:"picCont",children:Object(j.jsx)("a",{href:"https://library-of-stories.herokuapp.com/",target:"_blank",rel:"noreferrer",children:Object(j.jsx)("img",{src:e.LibraryOfStoriesGIF,alt:"library of stories",className:"pic"})})}),Object(j.jsx)("h4",{children:"Full Stack Short Story app"}),Object(j.jsxs)("p",{children:[" ",Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:["Developed a full stack short story publishing/reading website, including GSAP/loading animation."," "]}),Object(j.jsxs)("li",{children:["MongoDB used as main database, utilizing DynamoDB for user info and session authentication."," "]}),Object(j.jsxs)("li",{children:[" ","Utilized Mulder and S3 buckets, allowing image file upload which was tested with Insomnia."]})]})]}),Object(j.jsxs)("div",{className:"gitappLinks",children:[Object(j.jsx)("a",{href:"https://github.com/TylerPetri/De-Fabulis.git",target:"_blank",rel:"noreferrer",className:"gitlink",children:"Github repo"}),Object(j.jsx)("a",{href:"https://library-of-stories.herokuapp.com/",target:"_blank",rel:"noreferrer",className:"gitlink",children:"App"})]})]}),Object(j.jsxs)("div",{className:"work",children:[Object(j.jsx)("div",{className:"picCont",children:Object(j.jsx)("a",{href:"http://alf-bp53.s3-website.us-east-2.amazonaws.com/",target:"_blank",rel:"noreferrer",children:Object(j.jsx)("img",{src:e.AWSform,alt:"awsform-app",className:"pic"})})}),Object(j.jsx)("h4",{children:"AWS form application"}),Object(j.jsx)("p",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"A serverless AWS form built in Reactjs using Material-ui."}),Object(j.jsx)("li",{children:"Hosted on S3 static website, utilizing API-Gateway/Lambda functions for API calls connecting front-end and DynamoDB."}),Object(j.jsx)("li",{children:"Using an IAM user, assigning permissions for CORS, S3 and DynamoDB calls."})]})}),Object(j.jsxs)("div",{className:"gitappLinks",children:[Object(j.jsx)("a",{href:"https://github.com/TylerPetri/aws-lambda-form.git",target:"_blank",rel:"noreferrer",className:"gitlink",children:"Github repo"}),Object(j.jsx)("a",{href:"http://alf-bp53.s3-website.us-east-2.amazonaws.com/",target:"_blank",rel:"noreferrer",className:"gitlink",children:"App"})]})]}),Object(j.jsxs)("div",{className:"work",children:[Object(j.jsx)("div",{className:"picCont",children:Object(j.jsx)("a",{href:"https://googlebooksapi9000.herokuapp.com/",target:"_blank",rel:"noreferrer",children:Object(j.jsx)("img",{src:e.googlebooksgif,alt:"google-books-search",className:"pic"})})}),Object(j.jsx)("h4",{children:"MERN, API, Bcrypt, JWT, Google Books search app"}),Object(j.jsxs)("p",{children:[" ",Object(j.jsx)("ul",{children:Object(j.jsx)("li",{children:"Developed a UI for the google books search API with user-authentication by incorporating MongoDB & animation with vantajs. A Reactjs app."})})]}),Object(j.jsxs)("div",{className:"gitappLinks",children:[Object(j.jsx)("a",{href:"https://github.com/TylerPetri/Google-books-search.git",target:"_blank",rel:"noreferrer",className:"gitlink",children:"Github repo"}),Object(j.jsx)("a",{href:"https://googlebooksapi9000.herokuapp.com/",target:"_blank",rel:"noreferrer",className:"gitlink",children:"App"})]})]})]})}function A(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"worklong",children:[Object(j.jsxs)("div",{className:"process",children:[Object(j.jsx)("h4",{children:"Full Stack Short Story app"}),Object(j.jsxs)("p",{style:{height:"160px",paddingBottom:"0"},children:[" ",Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:["Developed a full stack short story publishing/reading website, including GSAP/loading animation."," "]}),Object(j.jsxs)("li",{children:["MongoDB used as main database, utilizing DynamoDB for user info and session authentication."," "]}),Object(j.jsxs)("li",{children:[" ","Utilized Mulder and S3 buckets, allowing image file upload which was tested with Insomnia."]})]})]}),Object(j.jsxs)("div",{className:"gitappLinks",children:[Object(j.jsx)("a",{href:"https://github.com/TylerPetri/De-Fabulis.git",target:"_blank",rel:"noreferrer",className:"gitlink",children:"Github repo"}),Object(j.jsx)("a",{href:"https://library-of-stories.herokuapp.com/",target:"_blank",rel:"noreferrer",className:"gitlink",children:"App"})]})]}),Object(j.jsx)("div",{className:"picLongCont",children:Object(j.jsx)("a",{href:"https://library-of-stories.herokuapp.com/",target:"_blank",rel:"noreferrer",className:"imgLink",children:Object(j.jsx)("img",{src:e.LibraryOfStoriesGIF,alt:"library of stories",className:"piclong"})})})]}),Object(j.jsxs)("div",{className:"worklong",children:[Object(j.jsxs)("div",{className:"process",children:[Object(j.jsx)("h4",{children:"AWS form application"}),Object(j.jsx)("p",{id:"AWSformP",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"A serverless AWS form built in Reactjs using Material-ui."}),Object(j.jsx)("li",{children:"Hosted on S3 static website, utilizing API-Gateway/Lambda functions for API calls connecting front-end and DynamoDB."}),Object(j.jsx)("li",{children:"Using an IAM user, assigning permissions for CORS, S3 and DynamoDB calls."})]})}),Object(j.jsxs)("div",{className:"gitappLinks",children:[Object(j.jsx)("a",{href:"https://github.com/TylerPetri/aws-lambda-form.git",target:"_blank",rel:"noreferrer",className:"gitlink",children:"Github repo"}),Object(j.jsx)("a",{href:"http://alf-bp53.s3-website.us-east-2.amazonaws.com/",target:"_blank",rel:"noreferrer",className:"gitlink",children:"App"})]})]}),Object(j.jsx)("div",{className:"picLongCont",children:Object(j.jsx)("a",{href:"http://alf-bp53.s3-website.us-east-2.amazonaws.com/",target:"_blank",rel:"noreferrer",children:Object(j.jsx)("img",{src:e.AWSform,alt:"awsform-app",className:"piclong",id:"formGif"})})})]}),Object(j.jsxs)("div",{className:"worklong",children:[Object(j.jsxs)("div",{className:"process",children:[Object(j.jsx)("h4",{children:"MERN, API, Bcrypt, JWT, Google Books search app"}),Object(j.jsxs)("p",{style:{height:"88px"},children:[" ",Object(j.jsx)("ul",{children:Object(j.jsx)("li",{children:"Developed a UI for the google books search API with user-authentication by incorporating MongoDB & animation with vantajs. A Reactjs app."})})]}),Object(j.jsxs)("div",{className:"gitappLinks",children:[Object(j.jsx)("a",{href:"https://github.com/TylerPetri/Google-books-search.git",target:"_blank",rel:"noreferrer",className:"gitlink",children:"Github repo"}),Object(j.jsx)("a",{href:"https://googlebooksapi9000.herokuapp.com/",target:"_blank",rel:"noreferrer",className:"gitlink",children:"App"})]})]}),Object(j.jsx)("div",{className:"picLongCont",children:Object(j.jsx)("a",{href:"https://googlebooksapi9000.herokuapp.com/",target:"_blank",rel:"noreferrer",className:"imgLink",children:Object(j.jsx)("img",{src:e.googlebooksgif,alt:"google-books-search",className:"piclong"})})})]})]})}var C="https://media.giphy.com/media/xzLOp7sMSGMCOaNKWd/giphy.gif",T="https://media.giphy.com/media/7RfKm5aARV8pN9yK2m/giphy.gif",G="https://media.giphy.com/media/sm7fe9FOTpAIbXBmc3/giphy.gif";var B=function(){var e=Object(c.useState)((function(){var e=window,t=e.innerWidth,n=e.innerHeight;return{width:t,height:n}})),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){function e(){a((function(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}))}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{id:"top"}),Object(j.jsxs)("div",{className:"boody",children:[Object(j.jsx)(x,{}),Object(j.jsx)(N,{}),Object(j.jsx)("div",{className:"languages",children:Object(j.jsx)(y,{})}),n.width>1102?Object(j.jsxs)("section",{children:[Object(j.jsx)("h1",{className:"projectsTitle",children:"Projects"}),Object(j.jsx)("div",{className:"projects",children:Object(j.jsx)(A,{LibraryOfStoriesGIF:C,AWSform:G,awsthoughts:f,googlebooksgif:T})})]}):Object(j.jsxs)("section",{children:[Object(j.jsx)("h1",{className:"projectsTitle",children:"Projects"}),Object(j.jsx)("div",{className:"projects",children:Object(j.jsx)(S,{LibraryOfStoriesGIF:C,AWSform:G,awsthoughts:f,googlebooksgif:T})})]}),Object(j.jsxs)("footer",{className:"footer",id:"footer",children:[Object(j.jsxs)("div",{className:"contact",children:[Object(j.jsx)("a",{href:"mailto:tylerpetri@hotmail.com",className:"footer-link",children:"tylerpetri93@gmail.com"}),Object(j.jsx)("div",{className:"phone",children:"(514)566-5383"})]}),Object(j.jsx)("div",{className:"copyright",children:"@copyright"})]})]})]})},E=n(26),P=n(20);n(38);var I=function e(t){Object(P.a)(this,e),this.value=t,this.next=null},D=function e(t){Object(P.a)(this,e);var n=new I(t);this.head=n,this.tail=n},F="UP",L="RIGHT",M="DOWN",R="LEFT",_=function(e){var t=e.length,n=e[0].length,c=Math.round(t/3),a=Math.round(n/3);return{row:c,col:a,cell:e[c][a]}},W=function(e){for(var t=1,n=[],c=0;c<e;c++){for(var a=[],r=0;r<e;r++)a.push(t++);n.push(a)}return n},z=function(e,t){return t===F?{row:e.row-1,col:e.col}:t===L?{row:e.row,col:e.col+1}:t===M?{row:e.row+1,col:e.col}:t===R?{row:e.row,col:e.col-1}:void 0},H=function(e,t){var n=e.row,c=e.col;return n<0||c<0||(n>=t.length||c>=t[0].length)},U=function(e){return"ArrowUp"===e?F:"ArrowRight"===e?L:"ArrowDown"===e?M:"ArrowLeft"===e?R:""},V=function(e,t){if(null===e.next)return t;var n=e.value,c=n.row,a=n.col,r=e.next.value,s=r.row,i=r.col;return s===c&&i===a+1?L:s===c&&i===a-1?R:i===a&&s===c+1?M:i===a&&s===c-1?F:""},J=function(e,t){var n=V(e,t),c=K(n),a={row:e.value.row,col:e.value.col};return z(a,c)},K=function(e){return e===F?M:e===L?R:e===M?F:e===R?L:void 0},Q=function(e,t,n,c){var a="cell";return e===t&&(a=n?"cell cell-purple":"cell cell-red"),c.has(e)&&(a="cell cell-green"),a},X=function(){var e=Object(c.useState)(0),t=Object(o.a)(e,2),n=(t[0],t[1],Object(c.useState)(W(15))),a=Object(o.a)(n,2),r=a[0],s=(a[1],Object(c.useState)(new D(_(r)))),i=Object(o.a)(s,2),l=i[0],d=i[1],h=Object(c.useState)(new Set([l.head.value.cell])),b=Object(o.a)(h,2),m=b[0],f=b[1],O=Object(c.useState)(l.head.value.cell+5),g=Object(o.a)(O,2),p=g[0],v=g[1],x=Object(c.useState)(L),k=Object(o.a)(x,2),N=k[0],w=k[1],y=Object(c.useState)(!1),S=Object(o.a)(y,2),A=S[0],C=S[1],T=u(),G=Object(o.a)(T,2),B=G[0],E=B.activity,P=B.score,F=G[1];Object(c.useEffect)((function(){window.addEventListener("keydown",(function(e){M(e)}))}),[]),function(e,t){var n=Object(c.useRef)();Object(c.useEffect)((function(){n.current=e}),[e]),Object(c.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){E&&R()}),150);var M=function(e){var t=U(e.key);""!==t&&(K(t)===N&&m.size>1||w(t))},R=function(){var e={row:l.head.value.row,col:l.head.value.col},t=z(e,N);if(H(t,r))Y();else{var n=r[t.row][t.col];if(m.has(n))Y();else{var c=new I({row:t.row,col:t.col,cell:n}),a=l.head;l.head=c,a.next=c;var s=new Set(m);s.delete(l.tail.value.cell),s.add(n),l.tail=l.tail.next,null===l.tail&&(l.tail=l.head),n===p&&(X(s),A&&$(),q(s)),f(s)}}},X=function(e){var t=J(l.tail,N);if(!H(t,r)){var n=r[t.row][t.col],c=new I({row:t.row,col:t.col,cell:n}),a=l.tail;l.tail=c,l.tail.next=a,e.add(n)}},$=function(){var e=V(l.tail,N),t=K(e);w(t),function(e){for(var t=null,n=e;null!==n;){var c=n.next;n.next=t,t=n,n=c}}(l.tail);var n=l.head;l.head=l.tail,l.tail=n},q=function(e){for(var t,n,c;n=1,c=225,t=Math.floor(Math.random()*(c-n+1)+n),e.has(t)||p===t;);var a=Math.random()<.3;v(t),C(a),F({type:"SCORE",data:{score:P+1}})},Y=function(){P>localStorage.getItem("SnakeGameHighScore")&&(localStorage.SnakeGameHighScore=P);var e=_(r);d(new D(e)),v(e.cell+5),f(new Set([e.cell])),F({type:"GAMEOVER"})};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{children:[Object(j.jsxs)("h4",{className:"scoreCont",children:["Score: ",P]}),Object(j.jsx)("div",{className:"board",children:r.map((function(e,t){return Object(j.jsx)("div",{className:"row",children:e.map((function(e,t){var n=Q(e,p,A,m);return Object(j.jsx)("div",{className:n},t)}))},t)}))})]})})},$=n(16);n(39);var q=function(){var e=u(),t=Object(o.a)(e,2),n=t[0],a=n.end,r=n.countdown,s=n.score,i=t[1],l=Object(c.useState)(35),d=Object(o.a)(l,2),h=d[0],b=d[1];Object(c.useEffect)((function(){b(35),r&&h>0&&setTimeout((function(){return b(h-1)}),100),h<1&&(i({type:"GAME_START"}),b(35))}),[r,h]);var m=localStorage.getItem("SnakeGameHighScore");return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"gameoverContainer",style:{display:a?"block":"none"},children:Object(j.jsxs)("div",{className:"dropGameover",children:[Object(j.jsxs)("div",{className:"highscore",children:[Object(j.jsx)($.a,{})," : ",m]}),Object(j.jsxs)("div",{className:"lastscorebox",children:[Object(j.jsx)("div",{className:"lastscore"}),": ",s]}),Object(j.jsx)("button",{className:"startBtn",onClick:function(){i({type:"GAME_BOARD"})},children:"Start"})]})})})},Y=(n(40),n.p+"static/media/move.a1f37b90.PNG");var Z=function(){var e=u(),t=Object(o.a)(e,2),n=t[0],a=n.start,r=n.countdown,s=t[1],i=Object(c.useState)(35),l=Object(o.a)(i,2),d=l[0],h=l[1];Object(c.useEffect)((function(){r&&d>0&&setTimeout((function(){return h(d-1)}),100),d<1&&(s({type:"GAME_START"}),h(35))}),[r,d]);var b=localStorage.getItem("SnakeGameHighScore");return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("div",{className:"bigContainer",children:[Object(j.jsxs)("div",{className:"countdownBox",style:{display:r?"block":"none"},children:[Object(j.jsx)("div",{className:"countdownTimer",style:{display:d>25?"block":"none",opacity:35===d?"1":".5"},children:"3"}),Object(j.jsx)("div",{className:"countdownTimer",style:{display:d<=25&&d>15?"block":"none",opacity:25===d?"1":".5"},children:"2"}),Object(j.jsx)("div",{className:"countdownTimer",style:{display:d<=15&&d>5?"block":"none",opacity:15===d?"1":".5"},children:"1"}),Object(j.jsx)("div",{className:"countdownTimer",style:{display:d<=5?"block":"none"},children:"Go!"})]}),Object(j.jsx)("div",{className:"startContainer",style:{display:a?"block":"none"},children:Object(j.jsxs)("div",{className:"dropStart",children:[Object(j.jsxs)("div",{className:"highscore",children:[Object(j.jsx)($.a,{})," : ",b]}),Object(j.jsx)("button",{className:"startBtn",onClick:function(){s({type:"GAME_BOARD"})},children:"Start"}),Object(j.jsx)("img",{src:Y,alt:"Arrow keys to move",className:"moveKeys"})]})}),Object(j.jsx)(q,{}),Object(j.jsx)(X,{})]})})};function ee(e){var t=[];if(e.length<=1)return e;var n=e.slice();return te(e,0,e.length-1,n,t),t}function te(e,t,n,c,a){if(t!==n){var r=Math.floor((t+n)/2);te(c,t,r,e,a),te(c,r+1,n,e,a),function(e,t,n,c,a,r){var s=t,i=t,o=n+1;for(;i<=n&&o<=c;)a[i]<=a[o]?(r.push([s,a[i]]),e[s++]=a[i++]):(r.push([s,a[o]]),e[s++]=a[o++]);for(;i<=n;)r.push([s,a[i]]),e[s++]=a[i++];for(;o<=c;)r.push([s,a[o]]),e[s++]=a[o++]}(e,t,r,n,c,a)}}function ne(e){var t=[];return e.length<=1?e:(function(e,t){for(var n=e.length,c=Math.floor(n/2)-1;c>=0;c--)ce(e,n,c,t);for(var a=n-1;a>0;a--)ae(e,0,a),t.push([0,a]),ce(e,a,0,t)}(e,t),t)}var ce=function e(t,n,c,a){var r=c,s=2*c+1,i=2*c+2,o=[];s<n&&t[s]>t[r]&&(r=s),i<n&&t[i]>t[r]&&(r=i),s<n&&o.push(s),i<n&&o.push(i),r!==c&&(ae(t,c,r),a.push([c,r]),e(t,n,r,a))};function ae(e,t,n){var c=e[t];e[t]=e[n],e[n]=c}function re(e){var t=[];return e.length<=1?e:(function(e,t){var n=!1,c=0;for(;!n;){n=!0;for(var a=0;a<e.length-1-c;a++)e[a]>e[a+1]&&(se(e,a,a+1),t.push([a,a+1,e[a],e[a+1]]),n=!1);c++}}(e,t),t)}function se(e,t,n){var c=e[t];e[t]=e[n],e[n]=c}n(41);var ie=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(),s=Object(o.a)(r,2),i=(s[0],s[1]),l=Object(c.useState)(30),d=Object(o.a)(l,2),h=d[0],b=(d[1],Object(c.useState)(p())),u=Object(o.a)(b,2),m=u[0],f=u[1],O="purple",g="red";function p(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}function v(){var e,t,n,c,r=[];m.width<640?(i(50),e=50):(i(100),e=100),m.height<666?(t=200,r.push(200)):(t=400,r.push(400));for(var s=0;s<e-1;s++)r.push((n=5,c=t,Math.floor(Math.random()*(c-n+1)+n)));a(r)}return Object(c.useEffect)((function(){function e(){f(p())}return window.addEventListener("resize",e),v(),function(){return window.removeEventListener("resize",e)}}),[m]),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsxs)("div",{className:"btn-container",children:[Object(j.jsx)("button",{className:"resetArrayBtn",onClick:function(){return v()},children:"Generate New Array"}),Object(j.jsxs)("div",{className:"sort",children:[Object(j.jsx)("button",{onClick:function(){return function(){for(var e=ee(n),t=function(t){var n=document.getElementsByClassName("array-bar");setTimeout((function(){var c=Object(o.a)(e[t],2),a=c[0],r=c[1];n[a].style.height="".concat(r,"px")}),20*t)},c=0;c<e.length;c++)t(c)}()},className:"funcBtn",children:"Merge Sort"}),Object(j.jsx)("button",{onClick:function(){return function(){for(var e=function(e){var t=[];return e.length<=1?e:(function(e,t){function n(e,t,n){var c=e[t];e[t]=e[n],e[n]=c}function c(e,c,a){for(var r=e[c],s=c-1,i=a+1;s<i;){for(s++,i--;e[s]<r;)s++;for(;e[i]>r;)i--;s<i&&(n(e,s,i),t.push([s,i,e[s],e[i]]))}return i}function a(e,t,n){var r;return n>t&&(a(e,t,r=c(e,t,n)),a(e,r+1,n)),e}a(e,0,e.length-1,t)}(e,t),t)}(n),t=function(t){var n=document.getElementsByClassName("array-bar");setTimeout((function(){var c=Object(o.a)(e[t],4),a=c[0],r=c[1],s=c[2],i=c[3],l=n[a].style,j=n[r].style;l.height="".concat(s,"px"),j.height="".concat(i,"px"),l.backgroundColor=g,j.backgroundColor="purple",setTimeout((function(){j.backgroundColor=O,l.backgroundColor=O}),60)}),60*t)},c=0;c<e.length;c++)t(c)}()},className:"funcBtn",children:"Quick Sort"}),Object(j.jsx)("button",{onClick:function(){return function(){for(var e=ne(n),t=function(t){var n=document.getElementsByClassName("array-bar");setTimeout((function(){var c=Object(o.a)(e[t],2),a=c[0],r=c[1],s=n[a].style,i=n[r].style,l=s.height;s.height=i.height,i.height=l,s.backgroundColor=g,i.backgroundColor="PURPLE",setTimeout((function(){s.backgroundColor=O,i.backgroundColor=O}),h)}),t*h)},c=0;c<e.length;c++)t(c)}()},className:"funcBtn",children:"Heap Sort"}),Object(j.jsx)("button",{onClick:function(){return function(){for(var e=re(n),t=function(t){var n=document.getElementsByClassName("array-bar");setTimeout((function(){var c=Object(o.a)(e[t],4),a=c[0],r=c[1],s=c[2],i=c[3],l=n[a].style,j=n[r].style;l.height="".concat(s,"px"),j.height="".concat(i,"px"),j.backgroundColor=g,setTimeout((function(){return j.backgroundColor=O}),5)}),5*t)},c=0;c<e.length;c++)t(c)}()},className:"funcBtn",children:"Bubble Sort"})]}),Object(j.jsx)("div",{className:"fill"})]}),Object(j.jsx)("div",{className:"array-container",children:n.map((function(e,t){return Object(j.jsx)("div",{className:"array-bar",style:{backgroundColor:O,height:"".concat(e,"px")}},t)}))})]})})},oe=(n(42),function(){var e=Object(c.useState)("selectFeature"),t=Object(o.a)(e,2),n=t[0],a=t[1],r=function(e){a(e)};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"featuresWrapper",children:[Object(j.jsx)(x,{}),Object(j.jsxs)("div",{className:"sidebarContainer",children:[Object(j.jsxs)("button",{className:"sidebarBTN",onClick:function(){return r("snakeGame")},children:[Object(j.jsx)("span",{children:"Snake Game"}),Object(j.jsx)("span",{children:"(desktop only)"})]}),Object(j.jsx)("button",{className:"sidebarBTN",onClick:function(){return r("sortingVisualizer")},children:"Sorting Visualizer"})]}),Object(j.jsxs)("div",{className:"snakeGame"!==n?"featuresContainer":"featuresSnake",children:[Object(j.jsxs)("div",{className:"selectFeature"===n?"selectFeature":"featureSelected",children:[Object(j.jsx)(E.a,{})," ",Object(j.jsx)("br",{})," ",Object(j.jsx)("h5",{children:"Click on any of the demos on the sidebar to view them."}),Object(j.jsx)("br",{}),Object(j.jsx)("h5",{children:"Please note that these demos work best on a desktop."})]}),Object(j.jsx)("div",{className:"snakeGame"===n?"snakeGameFeature":"noSnakeGameFeature",children:Object(j.jsx)(Z,{})}),Object(j.jsx)("div",{className:"sortingVisualizer"===n?"sortingFeature":"noSortingFeature",children:Object(j.jsx)(ie,{})})]})]})})});n(43);var le=function(){return Object(j.jsx)(m,{children:Object(j.jsxs)(s.a,{children:[Object(j.jsx)(i.a,{exact:!0,path:"/Portfolio",component:B}),Object(j.jsx)(i.a,{path:"/demos",component:oe})]})})},je=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function de(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var he=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};r.a.render(Object(j.jsx)(le,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Portfolio",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Portfolio","/service-worker.js");je?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):de(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):de(t,e)}))}}(),he()}},[[44,1,2]]]);
//# sourceMappingURL=main.d3a447de.chunk.js.map