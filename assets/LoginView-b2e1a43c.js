import{_ as b}from"./logo-4ad03925.js";import{L as h,i as w,r as u,a as c,o as x,c as V,d as t,w as k,b as s,n as p,k as _}from"./index-5356cf8e.js";import{a as B}from"./service-76d60509.js";const T={class:"d-flex justify-content-center align-items-center vh-100 bg-cover",style:{"background-image":"url(https://storage.googleapis.com/vue-course-api.appspot.com/vue3/1679408620153.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=UfV7XGE9dwbzfDKlaraKFCNdBCu1eRCqMeY2uMoWuCm5Wsr3dC3T%2BKYyNdtVgPBRSy1j%2FI%2B12dhfOhJ00U2Qha3NLlZolefgPlWQNGT4dlM6Da4GlvrN5smHGkF2yI1vhNOQ2fwLJdzDXr3lliJO5hjTwXox39aijm6qNMFdSIwtttCEALYkxwo0c%2BgBTKuB6%2Blup6P7efhl2Om1bojxAxksPzq4T5TemqKcwLHDr7SeCeAfE5MXLjlpvFzVEvLtDk8Gxv5ipu802OKOYxWTTs2HSXDemT0jDuQoabGdJ%2BlISfeSsHMOtgFaTY0Z42L22wx8Y0yEXHkU3fa%2BKUNMqg%3D%3D)"}},N={class:"mb-3"},y=s("div",null,[s("img",{class:"mx-auto d-block",width:"110",src:b,alt:"logo"})],-1),E={class:"mb-3"},C=s("label",{for:"email",class:"form-label"},[s("span",{class:"text-danger"},"*"),_(" Email ")],-1),D={class:"mb-3"},F=s("label",{for:"password",class:"form-label"},[s("span",{class:"text-danger"},"*"),_(" 密碼 ")],-1),S=s("button",{type:"submit",class:"btn btn-primary"}," 送出 ",-1),q={__name:"LoginView",setup(j){const v=h(),d=w("$swal"),l=u(""),n=u(""),f=()=>{const r={username:l.value,password:n.value};B({method:"POST",url:"/admin/signin",data:r}).then(({data:e})=>{const{token:a,expired:o}=e;document.cookie=`ttShopToken=${a}; expires=${new Date(o)};`,d("登入成功"),v.push("/admin/products")}).catch(e=>{var a,o;d("",((o=(a=e==null?void 0:e.response)==null?void 0:a.data)==null?void 0:o.message)||"有錯誤","error")})};return(r,e)=>{const a=c("VField"),o=c("ErrorMessage"),g=c("VForm");return x(),V("div",T,[t(g,{onSubmit:f},{default:k(({errors:m})=>[s("div",N,[y,s("div",E,[C,t(a,{id:"email",modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=i=>l.value=i),name:"email",type:"email",class:p(["form-control",{"is-invalid":m.email}]),placeholder:"請輸入 Email",rules:"email|required"},null,8,["modelValue","class"]),t(o,{name:"email",class:"invalid-feedback"})])]),s("div",D,[F,t(a,{id:"password",modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=i=>n.value=i),name:"密碼",type:"password",class:p(["form-control",{"is-invalid":m.密碼}]),placeholder:"請輸入 密碼",rules:"required"},null,8,["modelValue","class"]),t(o,{name:"密碼",class:"invalid-feedback"})]),S]),_:1})])}}};export{q as default};
