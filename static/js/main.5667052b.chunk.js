(this.webpackJsonpreact_img_gallery=this.webpackJsonpreact_img_gallery||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),o=(a(10),a(1)),m=function(e){var t=e.image,a=t.tags.split(",");return r.a.createElement("div",{className:"max-w-sm rounded text-center overflow-hidden shadow-lg"},r.a.createElement("img",{src:t.webformatURL,alt:"",className:"w-full"}),r.a.createElement("div",{className:"px-6 py-4"},r.a.createElement("div",{className:"text-pink-600 text-xl mb-2"},"Photo by ",t.user),r.a.createElement("ul",{className:"text-gray-700"},r.a.createElement("li",null,r.a.createElement("strong",null,"Views:")," ",t.views),r.a.createElement("li",null,r.a.createElement("strong",null,"Downloads:")," ",t.downloads),r.a.createElement("li",null,r.a.createElement("strong",null,"Likes:")," ",t.likes),r.a.createElement("li",null,r.a.createElement("strong",null,"Favorites:")," ",t.favorites),r.a.createElement("li",null,r.a.createElement("strong",null,"Comments:")," ",t.comments))),r.a.createElement("div",{className:"px-6 py-4"},a.map((function(e,t){return r.a.createElement("span",{key:t,className:"inline-block bg-gray-200 rounded px-4 py-1 text-sm font-semibold text-gray-700 mr-3 mb-2"},"# ",e)}))))},s=a(2),i=function(e){var t,a=e.searchText,l=Object(n.useState)(""),c=Object(o.a)(l,2),m=c[0],i=c[1];return r.a.createElement("div",{className:"max-w-sm rounded overflow-hidden my-10 mx-auto"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a(m)},className:"w-full max-w-sm px-3"},r.a.createElement("div",{className:"flex items-center border-b border-b-2 border-pink-600 py-2"},r.a.createElement("input",(t={onChange:function(e){return i(e.target.value)},type:"text",className:"appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"},Object(s.a)(t,"type","text"),Object(s.a)(t,"placeholder","Search image..."),t)),r.a.createElement("button",{className:"flex-shrink-0 bg-pink-600 hover:bg-pink-800 border-pink-600 hover:border-pink-800  text-sm border-4 text-white py-1 px-2 rounded",type:"submit"},"Search",r.a.createElement("a",{href:"https://www.jondarlingdev.com"})))))};var u=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!0),s=Object(o.a)(c,2),u=s[0],d=s[1],p=Object(n.useState)(""),g=Object(o.a)(p,2),x=g[0],b=g[1];return Object(n.useEffect)((function(){fetch("https://pixabay.com/api/?key=".concat("15985917-174c7f6d19457d3b55df7e978","&q=").concat(x,"&image_type=photo&pretty=true")).then((function(e){return e.json()})).then((function(e){l(e.hits),d(!1)})).catch((function(e){return console.log(e)}))}),[x]),r.a.createElement("div",{className:"container mx-auto"},r.a.createElement(i,{searchText:function(e){return b(e)}}),!u&&0===a.length&&r.a.createElement("h1",{className:"text-5xl text-center mx-auto mt-32"},"Nope! no images sorry."),u?r.a.createElement("h1",{className:"text-6xl text-center mx-auto mt-32"},"Loading ..."):r.a.createElement("div",{className:"grid grid-cols-1 px-1 md:grid-cols-2 lg:grid-cols-3 gap-4"},a.map((function(e){return r.a.createElement(m,{key:e.id,image:e})}))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null)),document.getElementById("root"))},5:function(e,t,a){e.exports=a(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.5667052b.chunk.js.map