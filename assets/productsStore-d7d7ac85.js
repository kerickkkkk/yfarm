import{l as c}from"./index-5356cf8e.js";import{g as p,a as d}from"./likesStore-00ff5489.js";import{S as i}from"./service-76d60509.js";const h=c("products",{state:()=>({products:[],product:{},pagination:[]}),getters:{productsGetter:({products:t})=>t,productGetter:({product:t})=>t,paginationGetter:({pagination:t})=>t},actions:{async getProducts(t=1,o=""){var r,s,e;try{if(t===((r=this.pagination.value)==null?void 0:r.current_page))return!1;const{data:a}=await p(t,o);this.products=a.products,this.pagination=a.pagination}catch(a){i("",((e=(s=a==null?void 0:a.response)==null?void 0:s.data)==null?void 0:e.message)||"有錯誤","error")}},async getProduct(t){var o,r;try{if(this.products.length>0)this.product=this.products.find(s=>s.id===t);else{const{data:s}=await d(t);this.product=s.product}}catch(s){i("",((r=(o=s==null?void 0:s.response)==null?void 0:o.data)==null?void 0:r.message)||"有錯誤","error")}}}});export{h as u};