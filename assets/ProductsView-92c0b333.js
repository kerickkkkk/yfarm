import{s as f,r as m,h as b,a as k,o,c as a,d as n,b as t,w as P,F as _,v as h,u as e,j as x,H as y,k as w,n as C,t as V,p as B,f as S}from"./index-5356cf8e.js";import{P as G}from"./pagination.min-98ced836.js";import{P as I}from"./PaginationComponent-930fbe8c.js";import{u as N}from"./productsStore-d7d7ac85.js";import{_ as L}from"./SuggestionSwiper-30e897aa.js";import{B as R}from"./BannerView-4f5638bb.js";import{_ as F}from"./plugin-vueexport-helper-c27b6911.js";import"./filters-87564b85.js";import"./cartsStore-89c1c65c.js";import"./service-76d60509.js";import"./likesStore-00ff5489.js";const d=c=>(B("data-v-5347afe2"),c=c(),S(),c),T={class:"container"},$={"aria-label":"breadcrumb"},j={class:"breadcrumb"},z={class:"breadcrumb-item"},D=d(()=>t("li",{class:"breadcrumb-item active","aria-current":"page"}," 產品 ",-1)),E={class:"row pb-6"},H={class:"col-md-3 mb-6"},M={class:"list-group"},q=d(()=>t("li",{class:"list-group-item list-group-item-dark"}," 分類 ",-1)),A=["onClick"],J={class:"col-md-9"},K={key:0,class:"row"},O={key:1,class:"h3 text-center"},Q={class:"row mb-8"},U=d(()=>t("h3",{class:"text-center mt-4 mb-9"}," 猜您喜歡 ",-1)),W={__name:"ProductsView",setup(c){const u=N(),{getProducts:i}=u,{productsGetter:l,paginationGetter:r}=f(u),g=m(["全部","花生糖","焙炒花生"]),p=m("全部");return b(()=>{i()}),(X,Y)=>{const v=k("RouterLink");return o(),a(_,null,[n(R),t("div",T,[t("nav",$,[t("ol",j,[t("li",z,[n(v,{to:"/",class:"nav-link active p-0"},{default:P(()=>[w(" 首頁 ")]),_:1})]),D])]),t("div",E,[t("div",H,[t("div",M,[q,(o(!0),a(_,null,h(g.value,s=>(o(),a("button",{key:s,type:"button",class:C([{active:s===p.value},"list-group-item list-group-item-action list-group-item-primary"]),"aria-current":"true",onClick:Z=>{p.value=s,e(i)(e(r).currentPage,s)}},V(s),11,A))),128))])]),t("div",J,[e(l).length>0?(o(),a("div",K,[(o(!0),a(_,null,h(e(l),s=>(o(),a("div",{key:s.id,class:"col-md-6 col-lg-4 mb-4"},[n(G,{item:s},null,8,["item"])]))),128)),e(r).total_pages?(o(),x(I,{key:0,"current-page":e(r).current_page,"total-pages":e(r).total_pages,"has-next":e(r).has_next,"has-pre":e(r).has_pre,onGetPage:e(i)},null,8,["current-page","total-pages","has-next","has-pre","onGetPage"])):y("",!0)])):(o(),a("div",O," 沒有產品! "))])]),t("div",Q,[U,n(L,{items:e(l)},null,8,["items"])])])],64)}}},dt=F(W,[["__scopeId","data-v-5347afe2"]]);export{dt as default};
