import{L as p,K as _,k as i,a as b,c as f,b as t,C as r,M as c}from"./index-76f9d128.js";import{a as v}from"./service-35363019.js";const h={class:"d-flex justify-content-center align-items-center vh-100"},w={class:"bg-light p-4"},k={class:"mb-3"},g=t("label",{for:"username",class:"form-label"},"信箱",-1),x={class:"mb-3"},y=t("label",{for:"password",class:"form-label"},"Password",-1),T={__name:"LoginView",setup(V){const d=p(),m=_("$swal"),o=i(""),n=i(""),u=()=>{const l={username:o.value,password:n.value};v({method:"POST",url:"/admin/signin",data:l}).then(({data:s})=>{const{token:e,expired:a}=s;document.cookie=`ttShopToken=${e}; expires=${new Date(a)};`,d.push("/admin")}).catch(s=>{var e,a;m("",((a=(e=s==null?void 0:s.response)==null?void 0:e.data)==null?void 0:a.message)||"有錯誤","error")})};return(l,s)=>(b(),f("div",h,[t("form",w,[t("div",k,[g,r(t("input",{id:"username","onUpdate:modelValue":s[0]||(s[0]=e=>o.value=e),type:"email",class:"form-control","aria-describedby":"emailHelp"},null,512),[[c,o.value]])]),t("div",x,[y,r(t("input",{id:"password","onUpdate:modelValue":s[1]||(s[1]=e=>n.value=e),type:"password",class:"form-control"},null,512),[[c,n.value]])]),t("button",{type:"submit",class:"btn btn-primary",onClick:u}," 送出 ")])]))}};export{T as default};
