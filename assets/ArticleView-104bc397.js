import{I as g,k,b as f,r as n,o as s,c as a,e as c,d as t,w as d,F as _,m as x,t as r,g as u}from"./index-8b0852ca.js";import{a as w}from"./articles-5e448c31.js";import{B as y}from"./BannerView-fe3a556a.js";import"./service-ed2548d5.js";import"./plugin-vueexport-helper-c27b6911.js";const B={class:"container mb-8"},V={"aria-label":"breadcrumb"},A={class:"breadcrumb"},L={class:"breadcrumb-item"},N=t("li",{class:"breadcrumb-item active","aria-current":"page"}," 最新消息 ",-1),R={class:"row"},C={key:0,class:"card mb-4"},F={class:"row g-1"},$={class:"col-md-4"},D=["src","alt"],E={class:"col-md-8"},I={class:"card-body"},M={class:"d-flex flex-wrap"},S={class:"card-title"},T={class:"card-text"},j={class:"card-text text-end"},q={key:1,class:"text-center"},P={__name:"ArticleView",setup(z){const m=g(),e=k([]),h=o=>{w(o).then(({data:i})=>{e.value=i.article}).catch()};return f(()=>{const{id:o}=m.params;h(o)}),(o,i)=>{const p=n("router-link"),v=n("RouterLink");return s(),a(_,null,[c(y),t("div",B,[t("nav",V,[t("ol",A,[t("li",L,[c(p,{to:"/",class:"nav-link active p-0"},{default:d(()=>[u(" 首頁 ")]),_:1})]),N])]),t("section",R,[e.value.title?(s(),a("div",C,[t("div",F,[t("div",$,[t("img",{src:e.value.image,class:"img-fluid rounded-start",alt:e.value.title},null,8,D)]),t("div",E,[t("div",I,[t("div",M,[(s(!0),a(_,null,x(e.value.tag,(l,b)=>(s(),a("span",{key:`${l}-${b}`,class:"badge rounded-pill text-bg-light"},r(l),1))),128))]),t("h2",S,r(e.value.title),1),t("p",T,r(e.value.content),1),t("p",j,[c(v,{class:"btn btn-link",to:"/articles"},{default:d(()=>[u(" 回最新消息列表 ")]),_:1})])])])])])):(s(),a("h2",q," 沒有最新消息 "))])])],64)}}};export{P as default};
