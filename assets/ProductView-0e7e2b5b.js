import{I as q,s as B,k as h,b as I,r as v,o as _,c as l,e as c,d as t,w as b,J as N,u as s,t as o,g as a,E as R,G as f,F as $,p as G,n as Q}from"./index-8b0852ca.js";import{u as T}from"./productsStore-9ee338db.js";import{_ as j}from"./pagination.min-e030c06d.js";import{_ as z}from"./SuggestionSwiper-da42350b.js";import{u as E}from"./cartsStore-30d6330d.js";import{B as F}from"./BannerView-fe3a556a.js";import{_ as L}from"./plugin-vueexport-helper-c27b6911.js";import"./likesStore-6d88b84b.js";import"./service-ed2548d5.js";import"./filters-2b4b10a0.js";const r=n=>(G("data-v-71d0ce92"),n=n(),Q(),n),M={class:"container"},A={"aria-label":"breadcrumb"},D={class:"breadcrumb"},J={class:"breadcrumb-item"},U=r(()=>t("li",{class:"breadcrumb-item active","aria-current":"page"}," 產品 ",-1)),H={class:"row mb-3 pb-5"},K={class:"col-md-6 mb-3"},O={class:"slide__main"},W={class:"col-md-6 mb-3"},X={class:"text-primary mb-3"},Y={class:"mb-4"},Z=r(()=>t("p",{class:"mb-4"}," 付款方式： ATM 、 信用卡 ",-1)),tt={class:"d-flex mb-4"},st={class:"d-flex justify-content-end mb-4"},et={key:0,class:"text-primary ms-auto"},ot={class:"h4"},ct={class:"d-flex justify-content-end"},at={key:0,class:"row"},nt=r(()=>t("h3",null,"產品描述",-1)),it={class:"container-fluid"},rt={class:"row mb-8"},dt=r(()=>t("h3",{class:"text-center mt-4 mb-9"}," 猜您喜歡 ",-1)),_t={__name:"ProductView",setup(n){const y=q(),m=T(),g=E(),{getProduct:x,getProducts:k}=m,{productGetter:e,productsGetter:u}=B(m),{addCart:w}=g,d=h(1),S=h(10),V=i=>{d.value=i};return I(()=>{const{id:i}=y.params;x(i),u.value.length<=0&&k()}),(i,p)=>{const C=v("router-link"),P=v("RouterLink");return _(),l($,null,[c(F),t("div",M,[t("nav",A,[t("ol",D,[t("li",J,[c(C,{to:"/",class:"nav-link active p-0"},{default:b(()=>[a(" 首頁 ")]),_:1})]),U])]),t("div",H,[t("div",K,[t("div",O,[t("div",{class:"bg-cover img-fluid",style:N([`background-image: url(${s(e).imageUrl})`,{"min-height":"350px"}])},null,4)])]),t("div",W,[t("div",null,[t("h1",X,o(s(e).title),1),t("p",Y,o(s(e).description),1),Z,t("div",tt,[c(j,{qty:d.value,"max-qty":S.value,onSetQty:V},null,8,["qty","max-qty"]),a(" "+o(s(e).unit),1)])]),t("div",st,[t("div",{class:R({"text-decoration-line-through":s(e).origin_price!==s(e).price})}," 原價： "+o(s(e).origin_price)+" 元 ",3),s(e).origin_price!==s(e).price?(_(),l("div",et,[a(" 特價："),t("span",ot,o(s(e).price),1),a(" 元 ")])):f("",!0)]),t("div",ct,[t("button",{class:"btn btn-outline-primary me-2",onClick:p[0]||(p[0]=lt=>s(w)(s(e).id,d.value))}," 加入購物車 "),c(P,{to:"/cart",type:"button",class:"btn btn-secondary"},{default:b(()=>[a(" 直接結帳 ")]),_:1})])])]),s(e).content?(_(),l("div",at,[nt,t("p",null,o(s(e).content),1)])):f("",!0)]),t("div",it,[t("div",rt,[dt,c(z,{items:s(u)},null,8,["items"])])])],64)}}},kt=L(_t,[["__scopeId","data-v-71d0ce92"]]);export{kt as default};
