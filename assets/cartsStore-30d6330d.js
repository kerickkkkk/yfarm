import{h as s}from"./index-8b0852ca.js";import{s as e,S as c}from"./service-ed2548d5.js";function o(){return e({method:"GET",url:"/cart"})}function i(t,a){return e({method:"POST",url:"/cart",data:{data:{product_id:t,qty:a}}})}function n(t,a,r){return e({method:"PUT",url:`/cart/${t}`,data:{data:{product_id:a,qty:r}}})}function d(t){return e({method:"DELETE",url:`/cart/${t}`})}function l(){return e({method:"DELETE",url:"/carts"})}const f=s("carts",{state:()=>({carts:[],total:0,finalTotal:0}),getters:{cartsGetter:({carts:t})=>t,totalGetter:({total:t})=>t,finalTotalGetter:({finalTotal:t})=>t},actions:{async getCarts(){try{const{data:t}=await o();this.carts=t.data.carts,this.total=t.data.total,this.finalTotal=t.data.final_total}catch{}},async addCart(t,a=1){a=a*1||1;try{const{data:r}=await i(t,a);c.fire(r.message||"加入購物車成功"),this.getCarts()}catch{}},async updateCart(t,a,r=1){r=r*1||1;try{await n(t,a,r),this.getCarts()}catch{}},async deleteCart(t){try{await d(t),this.getCarts()}catch{}},async deleteAllCarts(t){try{await l(t),this.getCarts()}catch{}}}});export{f as u};