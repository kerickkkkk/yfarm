import{s as y,k as g,l as w,b as x,r as S,o as c,c as b,d as t,e as s,w as e,u as a,F as v,a as k,m as I,f as V,g as P,p as B,n as j}from"./index-ebf53b5d.js";import{S as p,a as u,P as N,b as C}from"./pagination.min-ba59fddd.js";import{u as H}from"./productsStore-279c4abb.js";import{_ as L}from"./plugin-vueexport-helper-c27b6911.js";import"./filters-2b4b10a0.js";import"./cartsStore-aac64227.js";import"./service-1ceeacb1.js";import"./likesStore-9bcca7ea.js";const R="/yfarm/images/ImgAbout01.png",A="/yfarm/images/ImgAbout02.png";const d=o=>(B("data-v-0bd47704"),o=o(),j(),o),F={class:"hero mb-12"},T=d(()=>t("div",{class:"container"},[t("div",{class:"row justify-content-center"},[t("div",{class:"col-8 col-md-6"},[t("div",{class:"h1 text-white"}," 來一塊花生糖，砌一壺茶， 心都暖了起來。 ")])])],-1)),E={class:"sale pb-13"},G=d(()=>t("h2",{class:"text-center mb-9"},[t("span",{class:"dot"}," 促銷商品 ")],-1)),M={class:"w-100"},q={class:"goal",style:{height:"720px"}},z={class:"container-fluid position-relative pb-13"},D=d(()=>t("div",{class:"col-md-7 position-md-absolute end-0"},[t("img",{class:"rounded-start-5",src:R,alt:"創立初衷"})],-1)),J={class:"container"},K={class:"row"},O={class:"col-md-4"},Q=d(()=>t("h2",{class:"mb-11"},[t("span",{class:"dot"}," 創立初衷 ")],-1)),U=d(()=>t("p",{class:"h5 mb-8"}," 將農產品送到消費者面前，提高農民們的收入，穩定農村家庭的經濟，讓每一份努力都能有更合理的回饋。 ",-1)),W=k('<section class="feature pb-13" data-v-0bd47704><div class="container" data-v-0bd47704><div class="row justify-content-md-between align-items-md-center" data-v-0bd47704><div class="col-md-7" data-v-0bd47704><img class="rounded-5" src="'+A+'" alt="產品特色" data-v-0bd47704></div><div class="col-md-4" data-v-0bd47704><h2 class="mb-11" data-v-0bd47704><span class="dot" data-v-0bd47704> 產品特色 </span></h2><p class="h5 mb-8" data-v-0bd47704> 將農產品送到消費者面前，提高農民們的收入，穩定農村家庭的經濟，讓每一份努力都能有更合理的回饋。 </p><button class="btn btn-secondary" data-v-0bd47704> 了解更多 </button></div></div></div></section><section class="articles mb-13" data-v-0bd47704><div class="container" data-v-0bd47704><div class="row" data-v-0bd47704><div class="col-md-2" data-v-0bd47704><h2 class="mb-11" data-v-0bd47704><span class="dot" data-v-0bd47704> 最新消息 </span></h2></div><div class="col-md-8" data-v-0bd47704><ul data-v-0bd47704><li class="border-bottom border-primary border-3 d-flex justify-content-between align-items-center py-5" style="--bs-border-opacity:.1;" data-v-0bd47704><div class="d-flex" data-v-0bd47704><div class="h6 me-5" data-v-0bd47704> 2023-01-12 </div><h3 class="h5" data-v-0bd47704> 新年快樂 </h3></div><button class="btn btn-outline-secondary" data-v-0bd47704> 官方公告 </button></li><li class="border-bottom border-primary border-3 d-flex justify-content-between align-items-center py-5" style="--bs-border-opacity:.1;" data-v-0bd47704><div class="d-flex" data-v-0bd47704><div class="h6 me-5" data-v-0bd47704> 2023-01-12 </div><h3 class="h5" data-v-0bd47704> 新年快樂 </h3></div><button class="btn btn-outline-secondary" data-v-0bd47704> 官方公告 </button></li><li class="border-bottom border-primary border-3 d-flex justify-content-between align-items-center py-5" style="--bs-border-opacity:.1;" data-v-0bd47704><div class="d-flex" data-v-0bd47704><div class="h6 me-5" data-v-0bd47704> 2023-01-12 </div><h3 class="h5" data-v-0bd47704> 新年快樂 </h3></div><button class="btn btn-outline-secondary" data-v-0bd47704> 官方公告 </button></li></ul></div></div></div></section>',2),X={__name:"HomeView",setup(o){const n=H(),{getProducts:m}=n,{productsGetter:_}=y(n),r=g([C]),h=w(()=>_.value.filter(i=>i.origin_price!==i.price));return x(()=>{m()}),(i,Y)=>{const f=S("RouterLink");return c(),b(v,null,[t("section",F,[s(a(u),{pagination:!0,modules:r.value,class:"mySwiper position-relative rounded-5 rounded-top-0",style:{height:"720px"}},{default:e(()=>[s(a(p),{style:{backgroundImage:"url(./images/ImgBanner.png)"}},{default:e(()=>[T]),_:1})]),_:1},8,["modules"])]),t("section",E,[G,s(a(u),{"initial-slide":2,"slides-per-view":1.4,"space-between":12,pagination:!0,modules:r.value,"centered-slides":!0,breakpoints:{768:{slidesPerView:3,spaceBetween:30}},class:"container position-relative rounded-5 rounded-top-0"},{default:e(()=>[(c(!0),b(v,null,I(a(h),l=>(c(),V(a(p),{key:l,class:"col-4 pb-9"},{default:e(()=>[t("div",M,[s(N,{item:l},null,8,["item"])])]),_:2},1024))),128))]),_:1},8,["slides-per-view","modules"])]),t("section",q,[t("div",z,[D,t("div",J,[t("div",K,[t("div",O,[Q,U,s(f,{to:"/intention",class:"btn btn-secondary"},{default:e(()=>[P(" 了解更多 ")]),_:1})])])])])]),W],64)}}},it=L(X,[["__scopeId","data-v-0bd47704"]]);export{it as default};
