import{I as v,L as m,K as p,l as b,o as g,c as h,d as a,e as t,w as e,u as s,E as c,H as f,F as k,g as o,R as n,N as C}from"./index-ebf53b5d.js";import{a as N}from"./service-1ceeacb1.js";import{d as w}from"./tools-f017d837.js";function x(){return N({method:"POST",url:"/logout"})}const R={class:"navbar navbar-expand-md navbar-dark bg-dark mb-2"},B={class:"container-fluid"},V=a("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"},[a("span",{class:"navbar-toggler-icon"})],-1),D={id:"navbarCollapse",class:"collapse navbar-collapse"},P={class:"navbar-nav ms-auto mb-2 mb-md-0"},T={class:"nav-item"},A={class:"nav-item"},E={class:"nav-item"},F={class:"nav-item"},L={class:"nav-item"},O=["onClick"],K={__name:"NavBar",setup(j){const d=v(),u=m(),i=p("$swal"),r=b(()=>d.name||""),_=()=>{x().then(l=>{l.data.success?(i(l.data.message),w(),u.push("/login")):i("有錯誤")}).catch()};return(l,y)=>(g(),h(k,null,[a("nav",R,[a("div",B,[t(s(n),{class:"navbar-brand",to:"/admin"},{default:e(()=>[o(" 儀表板 ")]),_:1}),V,a("div",D,[a("ul",P,[a("li",T,[t(s(n),{class:"nav-link","aria-current":"page",to:"/"},{default:e(()=>[o(" 前往前台 ")]),_:1})]),a("li",A,[t(s(n),{class:c([{active:s(r)==="DashboardOrders"},"nav-link"]),"aria-current":"page",to:"/admin/orders"},{default:e(()=>[o(" 訂單列表 ")]),_:1},8,["class"])]),a("li",E,[t(s(n),{class:c([{active:s(r)==="DashboardProducts"},"nav-link"]),"aria-current":"page",to:"/admin/products"},{default:e(()=>[o(" 產品列表 ")]),_:1},8,["class"])]),a("li",F,[t(s(n),{class:c([{active:s(r)==="DashboardArticles"},"nav-link"]),"aria-current":"page",to:"/admin/articles"},{default:e(()=>[o(" 最新消息 ")]),_:1},8,["class"])]),a("li",L,[a("a",{class:"nav-link","aria-current":"page",role:"button",onClick:f(_,["prevent"])}," 登出 ",8,O)])])])])]),t(s(C))],64))}};export{K as default};
