import{u}from"./likesStore-3addb2f4.js";import{P as h}from"./pagination.min-7a636e35.js";import{s as p,o as k,a as e,c as s,b as t,u as o,F as n,m as g,g as l,d as r,w as f,R as v}from"./index-8f748ede.js";import{_ as b}from"./SuggestionSwiper-30f56913.js";import"./service-0810e1b5.js";import"./filters-87564b85.js";import"./cartsStore-fcb62606.js";import"./plugin-vueexport-helper-c27b6911.js";const w=t("div",{class:"bg-cover",style:{height:"40vh",backgroundImage:"url(./images/ImgAbout01.png)"}},null,-1),x={class:"container"},y=t("h2",{class:"text-center"}," 我的最愛 ",-1),L={class:"row"},P={key:0,class:"row"},V={key:1,class:"h3 text-center"},B={class:"row mb-8"},N=t("h3",{class:"text-center my-4"}," 猜您喜歡 ",-1),j={__name:"LikesView",setup(R){const a=u(),{getAllProducts:d,getLikes:m}=a,{filterLikesProductsGetter:c,noLikesProductsGetter:_}=p(a);return k(async()=>{await d(),m()}),(A,C)=>(e(),s(n,null,[w,t("div",x,[y,t("div",L,[o(c).length>0?(e(),s("div",P,[(e(!0),s(n,null,g(o(c),i=>(e(),s("div",{key:i.id,class:"col-md-4 mb-4"},[r(h,{item:i},null,8,["item"])]))),128))])):(e(),s("div",V,[l(" 沒有我的最愛 我的最愛 "),r(o(v),{class:"btn btn-primary",to:"/products"},{default:f(()=>[l(" 前往產品 ")]),_:1})]))]),t("div",B,[N,r(b,{items:o(_)},null,8,["items"])])])],64))}};export{j as default};
