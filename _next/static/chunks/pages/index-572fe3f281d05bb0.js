(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4916)}])},4916:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return u}});var a=n(5893),i=n(9008),s=n.n(i),l=n(9473),r=n(1664),c=n.n(r),m=n(7294);let o=(t,e)=>Array(e-t+1).fill().map((e,n)=>n+t),p=(t,e)=>{let n;n=e<=5?5:t>4&&t<e-3?2:4;let a={start:Math.round(t-n/2),end:Math.round(t+n/2)};(a.start-1==1||a.end+1===e)&&(a.start+=1,a.end+=1);let i=t>n?o(Math.min(a.start,e-n),Math.min(a.end,e)):o(1,Math.min(e,n+1)),s=(t,n)=>i.length+1!==e?n:[t];return 1!==i[0]&&(i=s(1,[1,"..."]).concat(i)),i[i.length-1]<e&&(i=i.concat(s(e,["...",e]))),i},d=(t,e,n)=>{let a=Math.ceil(e/n),i={pagination:{page:t,from:t*n-n>e?e:t*n-n+1,to:t*n>e?e:t*n,items_per_page:n,total:e,links:[],arrows:[]}},s=[],l=[];t>1&&l.push({label:"Previous",page:t-1,active:!1,url:"/?page=".concat(t-1)});let r=p(t,a);return r.length>0&&r.map(e=>{s.push({label:e.toString(),page:"..."===e?null:e,active:e===t,url:"..."===e?null:"/?page=".concat(e)})}),t<a&&l.push({label:"Next",page:t+1,active:!1,url:"/?page=".concat(t+1)}),i={...i,pagination:{...i.pagination,links:s,arrows:l}}},h=t=>{let{page:e,setPage:n}=t,i=d(e.current,e.total,e.item);return(0,a.jsxs)("div",{className:"row tm-row tm-mt-100 tm-mb-75",children:[(0,a.jsx)("div",{className:"tm-prev-next-wrapper",children:i&&i.pagination&&i.pagination.arrows&&i.pagination.arrows.length>0&&i.pagination.arrows.map((t,i)=>(0,a.jsx)(c(),{href:t.url,onClick:()=>n({...e,current:t.page}),className:"mb-2 tm-btn tm-btn-primary tm-prev-next tm-mr-20",children:t.label},i))}),(0,a.jsxs)("div",{className:"tm-paging-wrapper",children:[(0,a.jsx)("span",{className:"d-inline-block mr-3",children:"Page"}),(0,a.jsx)("nav",{className:"tm-paging-nav d-inline-block",children:(0,a.jsx)("ul",{children:i&&i.pagination&&i.pagination.links&&i.pagination.links.length>0&&i.pagination.links.map((t,i)=>(0,a.jsx)("li",{className:"tm-paging-item ".concat(t.active?"active":""),children:(0,a.jsx)(c(),{href:t.url,className:"mb-2 tm-btn tm-paging-link border-0",onClick:()=>n({...e,current:t.page}),children:t.label})},i))})})]})]})};var g=n(8787);function u(){let t=(0,l.v9)(g.yA),e=(0,l.I0)(),n=t.posts,i=t.users,r=t.comments,[o,p]=(0,m.useState)({current:1,item:20,total:n.length}),d=t=>{let a=n.filter(e=>e.id!==t);e((0,g.ES)({key:"posts",data:a})),p({...o,total:a.length})},u=o.current*o.item-o.item>o.total?o.total:o.current*o.item-o.item,x=o.current*o.item>o.total?o.total:o.current*o.item;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s(),{children:[(0,a.jsx)("title",{children:"Create Next App"}),(0,a.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)("div",{className:"row tm-row",children:n&&n.length>0&&n.slice(u,x).map((t,e)=>(0,a.jsxs)("article",{className:"col-12 col-md-6 tm-post",children:[(0,a.jsx)("hr",{className:"tm-hr-primary"}),(0,a.jsxs)("div",{className:"position-relative",children:[(0,a.jsx)(c(),{href:"/post/".concat(t.id),className:"effect-lily tm-post-link tm-pt-6",children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"tm-post-link-inner",children:(0,a.jsx)("img",{src:"/assets/img/img.jpg",alt:"Image",className:"img-fluid"})}),(0,a.jsx)("h2",{className:"tm-pt-30 tm-color-primary tm-post-title",children:t.title})]})}),(0,a.jsx)("button",{className:"position-absolute tm-new-badge border-0",onClick:()=>d(t.id),children:(0,a.jsx)("i",{className:"fas fa-trash"})})]}),(0,a.jsx)("p",{className:"tm-pt-20",children:t.body}),(0,a.jsx)("hr",{}),(0,a.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,a.jsxs)("span",{children:[r.length>0&&r.filter(e=>e.postId===t.id).length," ","comments"]}),(0,a.jsx)("span",{children:i.length>0&&i.filter(e=>e.id===t.userId)[0].name})]})]},e))}),(0,a.jsx)(h,{page:o,setPage:p})]})}},9008:function(t,e,n){t.exports=n(3121)}},function(t){t.O(0,[774,888,179],function(){return t(t.s=8312)}),_N_E=t.O()}]);