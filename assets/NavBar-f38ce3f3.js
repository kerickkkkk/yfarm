import{J as p,L as b,i as h,q as g,o as f,c as k,b as a,d as e,w as o,u as s,n as i,I as C,F as w,k as n,R as c,N as x}from"./index-5356cf8e.js";import{a as N}from"./service-76d60509.js";function R(){return N({method:"POST",url:"/logout"})}const D={class:"navbar navbar-expand-md navbar-dark bg-dark mb-2"},B={class:"container-fluid"},T=a("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"},[a("span",{class:"navbar-toggler-icon"})],-1),V={id:"navbarCollapse",class:"collapse navbar-collapse"},P={class:"navbar-nav ms-auto mb-2 mb-md-0"},A={class:"nav-item"},F={class:"nav-item"},L={class:"nav-item"},O={class:"nav-item"},S={class:"nav-item"},$={class:"nav-item"},j=["onClick"],E={__name:"NavBar",setup(q){const _=p(),v=b(),r=h("$swal"),l=g(()=>_.name||""),m=()=>{R().then(t=>{t.data.success?(r(t.data.message),document.cookie=`ttShopToken=;expires=${new Date}`,v.push("/login")):r("有錯誤")}).catch(t=>{var d,u;r("",((u=(d=t==null?void 0:t.response)==null?void 0:d.data)==null?void 0:u.message)||"有錯誤","error")})};return(t,d)=>(f(),k(w,null,[a("nav",D,[a("div",B,[e(s(c),{class:"navbar-brand",to:"/admin"},{default:o(()=>[n(" 儀表板 ")]),_:1}),T,a("div",V,[a("ul",P,[a("li",A,[e(s(c),{class:"nav-link","aria-current":"page",to:"/"},{default:o(()=>[n(" 前往前台 ")]),_:1})]),a("li",F,[e(s(c),{class:i([{active:s(l)==="DashboardOrders"},"nav-link"]),"aria-current":"page",to:"/admin/orders"},{default:o(()=>[n(" 訂單列表 ")]),_:1},8,["class"])]),a("li",L,[e(s(c),{class:i([{active:s(l)==="DashboardProducts"},"nav-link"]),"aria-current":"page",to:"/admin/products"},{default:o(()=>[n(" 產品列表 ")]),_:1},8,["class"])]),a("li",O,[e(s(c),{class:i([{active:s(l)==="DashboardArticles"},"nav-link"]),"aria-current":"page",to:"/admin/articles"},{default:o(()=>[n(" 最新消息 ")]),_:1},8,["class"])]),a("li",S,[e(s(c),{class:i([{active:s(l)==="DashboardCoupons"},"nav-link"]),"aria-current":"page",to:"/admin/coupons"},{default:o(()=>[n(" 優惠券 ")]),_:1},8,["class"])]),a("li",$,[a("a",{class:"nav-link","aria-current":"page",role:"button",onClick:C(m,["prevent"])}," 登出 ",8,j)])])])])]),e(s(x))],64))}};export{E as default};
