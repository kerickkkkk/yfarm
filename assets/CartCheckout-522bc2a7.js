import{I as D,L as G,s as L,k as $,o as B,r as c,a as m,c as u,b as e,d as o,u as d,F as b,m as E,g,w as V,t as n,G as _,C as I,M}from"./index-76f9d128.js";import{c as O}from"./filters-87564b85.js";import{u as R}from"./cartsStore-753ff124.js";import{_ as A}from"./CartStep-e0a51626.js";import{s as X}from"./service-35363019.js";function z(p){return X({method:"POST",url:"/order",data:p})}const P=e("div",{class:"bg-cover",style:{height:"40vh",backgroundImage:"url(./images/ImgAbout01.png)"}},null,-1),j={class:"container"},H=e("section",{class:"step d-md-flex"},null,-1),J={class:"container mt-5"},K={class:"row"},Q={class:"col-md-6"},W={class:"row"},Y={class:"table"},Z=e("thead",null,[e("tr",null,[e("th",{scope:"col"}," 商品選項 "),e("th",{scope:"col",class:"text-end"}," 單價 X 數量 "),e("th",{scope:"col",class:"text-end"}," 小計 ")])],-1),ee={class:"cart__title d-flex"},se={class:"me-3"},te=["src","alt"],le={class:"cart__title__content"},ae={class:"h6"},oe={class:"text-end"},de={class:"text-end"},ne={key:1},ie={colspan:"100",class:"text-center"},re={class:"text-end",colspan:"100"},ce={class:"text-end",colspan:"100"},me={class:"col-md-6"},ue={class:"mb-3"},_e=e("label",{for:"name",class:"form-label"},"姓名",-1),pe={class:"mb-3"},ve=e("label",{for:"email",class:"form-label"},"Email",-1),he={class:"mb-3"},fe=e("label",{for:"tel",class:"form-label"},"電話",-1),be={class:"mb-3"},ge=e("label",{for:"address",class:"form-label"},"地址",-1),Ve={class:"mb-3"},xe=e("label",{for:"message",class:"form-label"},"留言",-1),ye=e("button",{class:"btn btn-secondary",type:"submit"}," 送出訂單 ",-1),Fe={__name:"CartCheckout",setup(p){const x=D(),y=G(),v=R(),{getCarts:k}=v,{cartsGetter:h,totalGetter:T,finalTotalGetter:U}=L(v),C=x.meta.step,w={name:"",email:"",tel:"",address:"",message:""},s=$({name:"",email:"",tel:"",address:"",message:""}),F=()=>{s.value={...w.value}},N=()=>{const f={data:{user:{name:s.value.name,tel:s.value.tel,email:s.value.email,address:s.value.address},message:s.value.message}};z(f).then(t=>{t.data.success&&(F(),y.push("/finish"))}).catch()};return B(()=>{k()}),(f,t)=>{const q=c("routerLink"),i=c("VField"),r=c("error-message"),S=c("VForm");return m(),u(b,null,[P,e("div",j,[o(A,{step:d(C)},null,8,["step"])]),H,e("div",J,[e("div",K,[e("div",Q,[e("div",W,[e("table",Y,[Z,e("tbody",null,[d(h).length>0?(m(!0),u(b,{key:0},E(d(h),l=>(m(),u("tr",{key:l.id},[e("th",null,[e("div",ee,[e("div",se,[e("img",{src:l.product.imageUrl,alt:l.product.title,width:"50",class:"img-fluid"},null,8,te)]),e("div",le,[e("div",ae,n(l.product.title),1)])])]),e("td",oe,n(d(O)(l.product.price))+" X "+n(l.qty),1),e("td",de," NT $"+n(l.final_total),1)]))),128)):(m(),u("tr",ne,[e("td",ie,[g(" 購物車沒有東西 "),o(q,{to:"/products"},{default:V(()=>[g(" 挑選產品去 ")]),_:1})])]))]),e("tfoot",null,[e("tr",null,[e("td",re," 原價 NT $ "+n(d(T)),1)]),e("tr",null,[e("td",ce," 總價 NT $ "+n(d(U)),1)])])])])]),e("div",me,[o(S,{onSubmit:N},{default:V(({errors:l})=>[e("div",ue,[_e,o(i,{id:"name",modelValue:s.value.name,"onUpdate:modelValue":t[0]||(t[0]=a=>s.value.name=a),name:"姓名",type:"text",class:_(["form-control",{"is-invalid":l.姓名}]),placeholder:"請輸入 姓名",rules:"required"},null,8,["modelValue","class"]),o(r,{name:"姓名",class:"invalid-feedback"})]),e("div",pe,[ve,o(i,{id:"email",modelValue:s.value.email,"onUpdate:modelValue":t[1]||(t[1]=a=>s.value.email=a),name:"email",type:"email",class:_(["form-control",{"is-invalid":l.email}]),placeholder:"請輸入 Email",rules:"email|required"},null,8,["modelValue","class"]),o(r,{name:"email",class:"invalid-feedback"})]),e("div",he,[fe,o(i,{id:"tel",modelValue:s.value.tel,"onUpdate:modelValue":t[2]||(t[2]=a=>s.value.tel=a),name:"電話",type:"tel",class:_(["form-control",{"is-invalid":l.電話}]),placeholder:"請輸入 電話",rules:"required|min:8|max:10"},null,8,["modelValue","class"]),o(r,{name:"電話",class:"invalid-feedback"})]),e("div",be,[ge,o(i,{id:"address",modelValue:s.value.address,"onUpdate:modelValue":t[3]||(t[3]=a=>s.value.address=a),name:"地址",type:"text",class:_(["form-control",{"is-invalid":l.地址}]),placeholder:"請輸入 地址",rules:"required"},null,8,["modelValue","class"]),o(r,{modelValue:s.value.address,"onUpdate:modelValue":t[4]||(t[4]=a=>s.value.address=a),name:"地址",class:"invalid-feedback"},null,8,["modelValue"])]),e("div",Ve,[xe,I(e("textarea",{id:"message","onUpdate:modelValue":t[5]||(t[5]=a=>s.value.message=a),class:"form-control",placeholder:"請輸入 留言","aria-describedby":"message"},null,512),[[M,s.value.message]])]),ye]),_:1})])])])],64)}}};export{Fe as default};
