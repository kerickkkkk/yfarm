import{I as q,s as B,k as b,b as I,r as h,o as d,c as l,e as o,d as t,w as v,J as L,u as s,t as n,g as c,E as N,G as f,F as R,p as T,n as $}from"./index-4791cd43.js";import{u as G}from"./productsStore-ed7ec223.js";import{_ as M}from"./pagination.min-56c7b3cd.js";import{_ as Q}from"./SuggestionSwiper-70dcaaa9.js";import{u as j}from"./cartsStore-93793008.js";import{B as z}from"./BannerView-dd43f435.js";import{_ as E}from"./plugin-vueexport-helper-c27b6911.js";import"./likesStore-3f635b3f.js";import"./service-37dadeab.js";import"./filters-2b4b10a0.js";const _=i=>(T("data-v-9472d64b"),i=i(),$(),i),F={class:"container mb-9"},H={"aria-label":"breadcrumb"},D={class:"breadcrumb"},J={class:"breadcrumb-item"},U=_(()=>t("li",{class:"breadcrumb-item active","aria-current":"page"}," 產品 ",-1)),A={class:"row mb-3 pb-5"},K={class:"col-md-6 mb-3"},O={class:"slide__main"},W={class:"col-md-6 mb-3"},X={class:"text-primary mb-3"},Y=["innerHTML"],Z={class:"d-flex mb-4"},tt={class:"d-flex justify-content-end mb-4"},st={key:0,class:"text-primary ms-auto"},et={class:"h4"},ot={class:"d-flex justify-content-end"},nt={key:0,class:"row"},ct=_(()=>t("h3",null,"產品描述",-1)),it={class:"container-fluid"},at={class:"row mb-8"},rt=_(()=>t("h3",{class:"text-center mt-4 mb-9"}," 猜您喜歡 ",-1)),dt={__name:"ProductView",setup(i){const y=q(),u=G(),g=j(),{getProduct:x,getProducts:k}=u,{productGetter:e,productsGetter:m}=B(u),{addCart:w}=g,r=b(1),S=b(10),V=a=>{r.value=a};return I(()=>{const{id:a}=y.params;x(a),m.value.length<=0&&k()}),(a,p)=>{const C=h("router-link"),P=h("RouterLink");return d(),l(R,null,[o(z),t("div",F,[t("nav",H,[t("ol",D,[t("li",J,[o(C,{to:"/",class:"nav-link active p-0"},{default:v(()=>[c(" 首頁 ")]),_:1})]),U])]),t("div",A,[t("div",K,[t("div",O,[t("div",{class:"bg-top img-fluid",style:L([`background-image: url(${s(e).imageUrl})`,{"min-height":"350px"}])},null,4)])]),t("div",W,[t("div",null,[t("h1",X,n(s(e).title),1),t("p",{class:"mb-4",innerHTML:s(e).description},null,8,Y),t("div",Z,[o(M,{qty:r.value,"max-qty":S.value,onSetQty:V},null,8,["qty","max-qty"]),c(" "+n(s(e).unit),1)])]),t("div",tt,[t("div",{class:N({"text-decoration-line-through":s(e).origin_price!==s(e).price})}," 原價： "+n(s(e).origin_price)+" 元 ",3),s(e).origin_price!==s(e).price?(d(),l("div",st,[c(" 特價："),t("span",et,n(s(e).price),1),c(" 元 ")])):f("",!0)]),t("div",ot,[t("button",{class:"btn btn-outline-primary me-2",onClick:p[0]||(p[0]=lt=>s(w)(s(e).id,r.value))}," 加入購物車 "),o(P,{to:"/cart",type:"button",class:"btn btn-secondary"},{default:v(()=>[c(" 直接結帳 ")]),_:1})])])]),s(e).content?(d(),l("div",nt,[ct,t("p",null,n(s(e).content),1)])):f("",!0)]),t("div",it,[t("div",at,[rt,o(Q,{items:s(m)},null,8,["items"])])])],64)}}},xt=E(dt,[["__scopeId","data-v-9472d64b"]]);export{xt as default};
