import{I as C,s as I,k as h,o as V,r as P,a as d,c as l,b as t,J as q,u as s,t as e,d as _,g as i,E as N,G as v,w as R,F as $,p as B,n as G}from"./index-8f748ede.js";import{u as Q}from"./productsStore-d126e069.js";import{_ as T}from"./pagination.min-7a636e35.js";import{_ as j}from"./SuggestionSwiper-30f56913.js";import{u as z}from"./cartsStore-fcb62606.js";import{_ as A}from"./plugin-vueexport-helper-c27b6911.js";import"./likesStore-3addb2f4.js";import"./service-0810e1b5.js";import"./filters-87564b85.js";const a=c=>(B("data-v-4352844c"),c=c(),G(),c),E=a(()=>t("div",{class:"bg-cover",style:{height:"40vh",backgroundImage:"url(./images/ImgAbout01.png)"}},null,-1)),F={class:"container"},L={class:"row mb-3 p-5"},M={class:"col-md-6 mb-3"},D={class:"slide__main"},J={class:"col-md-6 mb-3"},U={class:"text-primary mb-3"},H={class:"mb-4"},K=a(()=>t("p",{class:"mb-4"}," 付款方式： ATM 、 信用卡 ",-1)),O={class:"d-flex mb-4"},W={class:"d-flex justify-content-end mb-4"},X={key:0,class:"text-primary ms-auto"},Y={class:"h4"},Z={class:"d-flex justify-content-end"},tt={key:0,class:"row"},st=a(()=>t("h3",null,"產品描述",-1)),ot={class:"container-fluid"},et={class:"row mb-8"},ct=a(()=>t("h3",{class:"text-center my-4"}," 猜您喜歡 ",-1)),nt={__name:"ProductView",setup(c){const g=C(),u=Q(),y=z(),{getProduct:f,getProducts:b}=u,{productGetter:o,productsGetter:m}=I(u),{addCart:x}=y,r=h(1),k=h(10),S=n=>{r.value=n};return V(()=>{const{id:n}=g.params;f(n),m.value.length<=0&&b()}),(n,p)=>{const w=P("RouterLink");return d(),l($,null,[E,t("div",F,[t("div",L,[t("div",M,[t("div",D,[t("div",{class:"bg-cover img-fluid",style:q([`background-image: url(${s(o).imageUrl})`,{"min-height":"350px"}])},null,4)])]),t("div",J,[t("div",null,[t("h1",U,e(s(o).title),1),t("p",H,e(s(o).description),1),K,t("div",O,[_(T,{qty:r.value,"max-qty":k.value,onSetQty:S},null,8,["qty","max-qty"]),i(" "+e(s(o).unit),1)])]),t("div",W,[t("div",{class:N({"text-decoration-line-through":s(o).origin_price!==s(o).price})}," 原價： "+e(s(o).origin_price)+" 元 ",3),s(o).origin_price!==s(o).price?(d(),l("div",X,[i(" 特價："),t("span",Y,e(s(o).price),1),i(" 元 ")])):v("",!0)]),t("div",Z,[t("button",{class:"btn btn-outline-primary me-2",onClick:p[0]||(p[0]=it=>s(x)(s(o).id,r.value))}," 加入購物車 "),_(w,{to:"/cart",type:"button",class:"btn btn-secondary"},{default:R(()=>[i(" 直接結帳 ")]),_:1})])])]),s(o).content?(d(),l("div",tt,[st,t("p",null,e(s(o).content),1)])):v("",!0)]),t("div",ot,[t("div",et,[ct,_(j,{items:s(m)},null,8,["items"])])])],64)}}},vt=A(nt,[["__scopeId","data-v-4352844c"]]);export{vt as default};
