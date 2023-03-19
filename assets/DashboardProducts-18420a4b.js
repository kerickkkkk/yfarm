import{b as R,s as H,S as W}from"./service-1ceeacb1.js";import{j as B,K as O,k as r,b as q,o as u,c as _,d as t,t as D,C as P,M as S,F as T,m as G,G as A,E as ot,O as lt,p as K,n as Q,g as Y,h as at,s as nt,P as et,l as dt,Q as it,u as N,L as ct,f as rt,e as J}from"./index-ebf53b5d.js";import{P as ut}from"./PaginationComponent-2d1c0997.js";import{M as Z}from"./modal-cb46425a.js";import{_ as tt}from"./plugin-vueexport-helper-c27b6911.js";import"./tools-f017d837.js";const w=l=>(K("data-v-fbeba868"),l=l(),Q(),l),mt={id:"productModal",ref:"productModalDom",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},pt={class:"modal-dialog modal-xl"},_t={class:"modal-content border-0"},bt={class:"modal-header bg-dark text-white"},ht={id:"productModalLabel",class:"modal-title"},vt=w(()=>t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1)),ft={class:"modal-body"},gt={class:"row"},yt={class:"col-sm-4"},$t={class:"mb-2"},Ut={class:"mb-3"},kt=w(()=>t("label",{for:"imageUrl",class:"form-label"},"輸入圖片網址",-1)),wt=["src"],xt={class:"mb-2"},Ct={class:"mb-3"},Pt=w(()=>t("label",{for:"imagesUrl",class:"form-label"},"輸入子圖片組",-1)),It={class:"row"},Mt={class:"px-1 py-2"},St=["src"],Lt=["onClick"],Vt={class:"col-sm-8"},Dt={class:"mb-3"},Et=w(()=>t("label",{for:"title",class:"form-label"},"標題",-1)),Rt={class:"row"},Tt={class:"mb-3 col-md-6"},At=w(()=>t("label",{for:"category",class:"form-label"},"分類",-1)),Bt={class:"mb-3 col-md-6"},Ft=w(()=>t("label",{for:"price",class:"form-label"},"單位",-1)),Nt={class:"row"},Gt={class:"mb-3 col-md-6"},Ot=w(()=>t("label",{for:"origin_price",class:"form-label"},"原價",-1)),qt={class:"mb-3 col-md-6"},zt=w(()=>t("label",{for:"price",class:"form-label"},"售價",-1)),Xt={class:"row"},jt={class:"col-6"},Ht={class:"d-flex"},Wt=w(()=>t("h6",null,"星等：",-1)),Jt={class:"rating"},Yt=["onClick"],Kt=w(()=>t("hr",null,null,-1)),Qt={class:"mb-3"},Zt=w(()=>t("label",{for:"content",class:"form-label"},"產品描述",-1)),te={class:"mb-3"},ee=w(()=>t("label",{for:"content",class:"form-label"},"說明內容",-1)),se={class:"mb-3"},oe={class:"form-check"},le=w(()=>t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1)),ae={class:"modal-footer"},ne={__name:"AddEditProductModal",emits:["getProducts"],setup(l,{expose:$,emit:i}){const f=B(),b=O("$swal"),{setLoading:g}=f,y="https://vue3-course-api.hexschool.io/v2",I="vue3",x=r(null),e=r({imageUrl:""}),d=r(""),U=r(""),L=(h,o)=>{x.value.show(),U.value=o,e.value=h},m=()=>{e.value.imagesUrl?e.value.imagesUrl.push(d.value):e.value.imagesUrl=[d.value],d.value=""},a=h=>{e.value.imagesUrl.splice(h,1)},k=h=>{const o=U.value==="new"?"post":"put",s=U.value==="new"?`${y}/api/${I}/admin/product`:`${y}/api/${I}/admin/product/${h}`,p={data:e.value};g(!0),R({method:o,url:s,data:p}).then(({data:n})=>{n.success&&(g(!1),i("getProducts"),x.value.hide(),b(n.message))}).catch(n=>{var C,c;b("",((c=(C=n==null?void 0:n.response)==null?void 0:C.data)==null?void 0:c.message)||"有錯誤","error"),g(!1)})};return q(()=>{var o;const h=(o=document.cookie.split("; ").find(s=>s.startsWith("ttShopToken=")))==null?void 0:o.split("=")[1];x.value=new Z("#productModal",{focus:!1}),R.defaults.headers.common.Authorization=h}),$({show:L}),(h,o)=>(u(),_("div",mt,[t("div",pt,[t("div",_t,[t("div",bt,[t("h5",ht,[t("span",null,D(U.value==="new"?"新增":"編輯")+"產品",1)]),vt]),t("div",ft,[t("div",gt,[t("div",yt,[t("div",$t,[t("div",Ut,[kt,P(t("input",{id:"imageUrl","onUpdate:modelValue":o[0]||(o[0]=s=>e.value.imageUrl=s),type:"text",class:"form-control",placeholder:"請輸入圖片連結"},null,512),[[S,e.value.imageUrl]])]),t("img",{class:"img-fluid",src:e.value.imageUrl,alt:""},null,8,wt)]),t("div",xt,[t("div",Ct,[Pt,P(t("input",{id:"imagesUrl","onUpdate:modelValue":o[1]||(o[1]=s=>d.value=s),type:"text",class:"form-control",placeholder:"請輸入圖片連結"},null,512),[[S,d.value]])]),t("div",It,[(u(!0),_(T,null,G(e.value.imagesUrl,(s,p)=>(u(),_("div",{key:s,class:"position-relative col-4"},[t("div",Mt,[t("img",{class:"img-fluid",src:s,alt:""},null,8,St),t("button",{class:"btn btn-outline-primary rounded-circle position-absolute top-0 end-0 py-1 px-2",onClick:n=>a(p)}," X ",8,Lt)])]))),128))])]),t("div",null,[d.value!==""?(u(),_("button",{key:0,class:"btn btn-outline-primary btn-sm d-block w-100",onClick:m}," 新增圖片 ")):A("",!0)])]),t("div",Vt,[t("div",Dt,[Et,P(t("input",{id:"title","onUpdate:modelValue":o[2]||(o[2]=s=>e.value.title=s),type:"text",class:"form-control",placeholder:"請輸入標題"},null,512),[[S,e.value.title]])]),t("div",Rt,[t("div",Tt,[At,P(t("input",{id:"category","onUpdate:modelValue":o[3]||(o[3]=s=>e.value.category=s),type:"text",class:"form-control",placeholder:"請輸入分類"},null,512),[[S,e.value.category]])]),t("div",Bt,[Ft,P(t("input",{id:"unit","onUpdate:modelValue":o[4]||(o[4]=s=>e.value.unit=s),type:"text",class:"form-control",placeholder:"請輸入單位"},null,512),[[S,e.value.unit]])])]),t("div",Nt,[t("div",Gt,[Ot,P(t("input",{id:"origin_price","onUpdate:modelValue":o[5]||(o[5]=s=>e.value.origin_price=s),type:"number",min:"0",class:"form-control",placeholder:"請輸入原價"},null,512),[[S,e.value.origin_price]])]),t("div",qt,[zt,P(t("input",{id:"price","onUpdate:modelValue":o[6]||(o[6]=s=>e.value.price=s),type:"number",min:"0",class:"form-control",placeholder:"請輸入售價"},null,512),[[S,e.value.price]])])]),t("div",Xt,[t("div",jt,[t("div",Ht,[Wt,t("div",Jt,[(u(),_(T,null,G(5,s=>t("span",{key:s,class:ot(["star",{active:s<=e.value.star}]),onClick:p=>e.value.star=s},null,10,Yt)),64)),P(t("input",{"onUpdate:modelValue":o[7]||(o[7]=s=>e.value.star=s),type:"hidden"},null,512),[[S,e.value.star]])])])])]),Kt,t("div",Qt,[Zt,P(t("textarea",{id:"content","onUpdate:modelValue":o[8]||(o[8]=s=>e.value.content=s),type:"text",class:"form-control",placeholder:"請輸入產品描述"},null,512),[[S,e.value.content]])]),t("div",te,[ee,P(t("textarea",{id:"description","onUpdate:modelValue":o[9]||(o[9]=s=>e.value.description=s),type:"text",class:"form-control",placeholder:"請輸入說明內容"},null,512),[[S,e.value.description]])]),t("div",se,[t("div",oe,[P(t("input",{id:"is_enabled","onUpdate:modelValue":o[10]||(o[10]=s=>e.value.is_enabled=s),class:"form-check-input",type:"checkbox","true-value":1,"false-value":0},null,512),[[lt,e.value.is_enabled]]),le])])])])]),t("div",ae,[t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal",onClick:o[11]||(o[11]=(...s)=>h.resetProduct&&h.resetProduct(...s))}," 取消 "),t("button",{type:"button",class:"btn btn-primary",onClick:o[12]||(o[12]=s=>k(e.value.id))}," 確認 ")])])])],512))}},de=tt(ne,[["__scopeId","data-v-fbeba868"]]),ie={id:"deleteProductModalDom",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},ce={class:"modal-dialog"},re={class:"modal-content border-0"},ue=t("div",{class:"modal-header bg-danger text-white"},[t("h5",{id:"delProductModalLabel",class:"modal-title"},[t("span",null,"刪除產品")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),me={class:"modal-body"},pe={class:"text-danger"},_e={class:"modal-footer"},be=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1),he={__name:"DeleteProductModal",emits:["getProducts"],setup(l,{expose:$,emit:i}){const f=B(),b=O("$swal"),{setLoading:g}=f,y="https://vue3-course-api.hexschool.io/v2",I="vue3",x=r(null),e=r(0),d=r(""),U=({id:m,title:a})=>{x.value.show(),e.value=m,d.value=a},L=m=>{g(!0),R({method:"DELETE",url:`${y}/api/${I}/admin/product/${m}`}).then(({data:a})=>{a.success&&(g(!1),b(a.message),i("getProducts"),x.value.hide())}).catch(a=>{console.dir(a),g(!1)})};return q(()=>{var a;const m=(a=document.cookie.split("; ").find(k=>k.startsWith("ttShopToken=")))==null?void 0:a.split("=")[1];x.value=new Z("#deleteProductModalDom",{focus:!1}),R.defaults.headers.common.Authorization=m}),$({show:U}),(m,a)=>(u(),_("div",ie,[t("div",ce,[t("div",re,[ue,t("div",me,[Y(" 是否刪除 "),t("strong",pe,D(d.value),1),Y(" 商品(刪除後將無法恢復)。 ")]),t("div",_e,[be,t("button",{type:"button",class:"btn btn-danger",onClick:a[0]||(a[0]=k=>L(e.value))}," 確認刪除 ")])])])]))}},ve=B(),{setLoading:E}=ve,fe=at("uploadImages",{state:()=>({imagesUrl:[]}),getters:{gettersImagesUrl:({imagesUrl:l})=>l},actions:{setImage(l){const $="/admin/upload",i=new FormData;return i.append("file-to-upload",l),H({method:"post",url:$,data:i})},deleteImageUrl(l){this.imagesUrl.splice(l,1),this.updateImagesUrl()},async updateImagesUrl(l,$=!1){var b,g;l&&this.imagesUrl.push(l);const i={category:"圖床",content:"圖床用",description:"圖床用",id:"-NOqSXY5EM4pdTaqnSJr",imageUrl:"",is_enabled:0,num:1,origin_price:100,price:100,star:5,title:"圖床",unit:"張",imagesUrl:this.imagesUrl},f=`/admin/product/${i.id}`;E(!0);try{const{data:y}=await H({method:"put",url:f,data:{data:i}});if(E(!1),y.success){const I=$?"已上傳圖片":"已刪除圖片";W.fire({text:I,customClass:{container:"position-absolute"},toast:!0,showConfirmButton:!1,position:"bottom-right",timer:1500}),this.getImagesUrl()}}catch(y){W.fire("",((g=(b=y==null?void 0:y.response)==null?void 0:b.data)==null?void 0:g.message)||"有錯誤","error"),E(!1)}},getImagesUrl(){const l="-NOqSXY5EM4pdTaqnSJr",$="/admin/products/all";E(!0),H({method:"get",url:$}).then(({data:i})=>{this.imagesUrl=i.products[l].imagesUrl||[],E(!1)}).catch(i=>{var f,b;W.fire("",((b=(f=i==null?void 0:i.response)==null?void 0:f.data)==null?void 0:b.message)||"有錯誤","error"),E(!1)})}}});const F=l=>(K("data-v-be10b98f"),l=l(),Q(),l),ge={id:"modal",class:"modal fade",tabindex:"-1","aria-labelledby":"modalLabel","aria-hidden":"true"},ye={class:"modal-dialog modal-xl"},$e={class:"modal-content border-0"},Ue=F(()=>t("div",{class:"modal-header bg-dark text-white"},[t("h5",{id:"modalLabel",class:"modal-title"},[t("span",null,"上傳檔案")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),ke={class:"modal-body"},we={class:"row"},xe={class:"col-6"},Ce=F(()=>t("h3",null,"上傳檔案",-1)),Pe={class:"input-group"},Ie=["disabled"],Me=["src"],Se={class:"col-6"},Le=F(()=>t("h3",null,"上傳完成",-1)),Ve=["disabled"],De=["disabled"],Ee=["src"],Re=F(()=>t("hr",null,null,-1)),Te={class:"row"},Ae=F(()=>t("h3",null,"儲存圖片的連結(點選取得連結)",-1)),Be={class:"row"},Fe={class:"px-1 py-2"},Ne=["value"],Ge=["onClick"],Oe=["src"],qe=["onClick"],ze={class:"modal-footer"},Xe={__name:"UploadImageModal",setup(l,{expose:$}){const i=B(),f=fe(),{getImagesUrl:b,setImage:g,updateImagesUrl:y,deleteImageUrl:I}=f,{gettersImagesUrl:x}=nt(f),e=O("$swal"),{setLoading:d}=i,U=new FileReader,L=r(null),m=r(""),a=r(""),k=r(null),h=et(null),o=dt(()=>x.value),s=et([]),p=()=>{L.value.show()},n=()=>{if(!k.value)return e("檔案不得為空"),!1;d(!0),g(k.value).then(({data:v})=>{d(!1),a.value=v.imageUrl}).catch(v=>{var V,M;d(!1),e("",((M=(V=v==null?void 0:v.response)==null?void 0:V.data)==null?void 0:M.message)||"有錯誤","error")})},C=v=>{U.readAsDataURL(v.target.files[0]),k.value=v.target.files[0]},c=v=>{m.value=v.target.result},z=()=>{h.value.select(),document.execCommand("copy"),e({text:"已複製",customClass:{container:"position-absolute"},toast:!0,showConfirmButton:!1,position:"bottom-right",timer:1500})},st=v=>{s.value[v].select(),document.execCommand("copy"),e({text:"已複製",customClass:{container:"position-absolute"},toast:!0,showConfirmButton:!1,position:"bottom-right",timer:1500})};return q(()=>{L.value=new Z("#modal",{focus:!1}),b(),U.addEventListener("load",c)}),it(()=>{U.removeEventListener("load",c)}),$({show:p}),(v,V)=>(u(),_("div",ge,[t("div",ye,[t("div",$e,[Ue,t("div",ke,[t("div",we,[t("div",xe,[Ce,t("div",Pe,[t("input",{id:"inputGroupFile04",type:"file",class:"form-control","aria-describedby":"fileInput","aria-label":"Upload",onChange:C},null,32),t("button",{id:"fileInput",class:"btn btn-outline-secondary",type:"button",disabled:m.value==="",onClick:n},D(m.value===""?"選擇":"上傳")+"圖片 ",9,Ie)]),Y(" 預覽圖片 "),m.value?(u(),_("img",{key:0,src:m.value,alt:""},null,8,Me)):A("",!0)]),t("div",Se,[Le,t("button",{class:"btn btn-sm btn-primary me-2",disabled:a.value==="",onClick:z}," 複製上傳連結 ",8,Ve),t("button",{class:"btn btn-sm btn-primary",disabled:a.value==="",onClick:V[0]||(V[0]=M=>N(y)(a.value,!0))}," 儲存上傳連結 ",8,De),P(t("input",{ref_key:"finishUrlDom",ref:h,"onUpdate:modelValue":V[1]||(V[1]=M=>a.value=M),type:"text",placeholder:"上傳後的圖片連結",readonly:"readonly"},null,512),[[S,a.value]]),a.value?(u(),_("img",{key:0,src:a.value,alt:""},null,8,Ee)):A("",!0)]),Re,t("div",Te,[Ae,t("div",Be,[(u(!0),_(T,null,G(N(o),(M,X)=>(u(),_("div",{key:M,class:"position-relative col-4"},[t("div",Fe,[t("input",{ref_for:!0,ref:j=>N(s)[X]=j,value:M,type:"text",readonly:"readonly"},null,8,Ne),t("button",{class:"btn btn-sm btn-primary",onClick:j=>st(X)}," 點擊複製 ",8,Ge),t("img",{class:"img-fluid",src:M,alt:""},null,8,Oe),t("button",{class:"btn btn-outline-primary rounded-circle position-absolute top-0 end-0 py-1 px-2",onClick:j=>N(I)(X)}," X ",8,qe)])]))),128))])])])]),t("div",ze,[t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal",onClick:V[2]||(V[2]=(...M)=>v.resetProduct&&v.resetProduct(...M))}," 取消 "),t("button",{type:"button",class:"btn btn-primary",onClick:n}," 確認 ")])])])]))}},je=tt(Xe,[["__scopeId","data-v-be10b98f"]]);const He=l=>(K("data-v-042144c3"),l=l(),Q(),l),We={class:"container"},Je={class:"text-end mt-4"},Ye={class:"table mt-4"},Ke=He(()=>t("thead",null,[t("tr",null,[t("th",{width:"120"}," 分類 "),t("th",null,"產品名稱"),t("th",{width:"120"}," 原價 "),t("th",{width:"120"}," 售價 "),t("th",{width:"100"}," 是否啟用 "),t("th",{width:"120"}," 編輯 ")])],-1)),Qe={class:"text-end"},Ze={class:"text-end"},ts={key:0,class:"text-success"},es={key:1},ss={class:"btn-group"},os=["onClick"],ls=["onClick"],as={key:0},ns={__name:"DashboardProducts",setup(l){const $=ct(),i=B(),f=O("$swal"),{setLoading:b}=i,g="https://vue3-course-api.hexschool.io/v2",y="vue3",I={category:"",content:"",description:"",imageUrl:"",imagesUrl:[],is_enabled:"",num:"",origin_price:0,price:0,title:"",unit:""},x=r([]),e=r({...I}),d=r(null),U=r(""),L=r(null),m=r(null),a=r(null),k=(p=1)=>{s(),b(!0),R.get(`${g}/api/${y}/admin/products?page=${p}`).then(({data:n})=>{x.value=n.products,d.value=n.pagination}).catch(n=>{var C,c;b(!1),f("",(c=(C=n==null?void 0:n.response)==null?void 0:C.data)==null?void 0:c.message,"error"),$.push({name:"Login"})}).finally(()=>b(!1))},h=()=>{m.value.show()},o=(p,n)=>{U.value=p,p==="new"?s():e.value=n,p==="new"||p==="edit"?L.value.show(e.value,U.value):p==="delete"?a.value.show(n):f("錯誤")},s=()=>{e.value={...I}};return q(()=>{var n;const p=(n=document.cookie.split("; ").find(C=>C.startsWith("ttShopToken=")))==null?void 0:n.split("=")[1];R.defaults.headers.common.Authorization=p,k()}),(p,n)=>{var C;return u(),_(T,null,[t("div",We,[t("div",Je,[t("button",{class:"btn btn-primary me-3",onClick:h}," 上傳圖片 "),t("button",{class:"btn btn-primary",onClick:n[0]||(n[0]=c=>o("new"))}," 建立新的產品 ")]),t("table",Ye,[Ke,t("tbody",null,[(u(!0),_(T,null,G(x.value,c=>(u(),_("tr",{key:c.id},[t("td",null,D(c.category),1),t("td",null,D(c.title),1),t("td",Qe,D(c.origin_price),1),t("td",Ze,D(c.price),1),t("td",null,[c.is_enabled?(u(),_("span",ts,"啟用")):(u(),_("span",es,"未啟用"))]),t("td",null,[t("div",ss,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:z=>o("edit",c)}," 編輯 ",8,os),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:z=>o("delete",c)}," 刪除 ",8,ls)])])]))),128))])]),(C=d.value)!=null&&C.total_pages?(u(),_("div",as,[d.value?(u(),rt(ut,{key:0,"current-page":d.value.current_page,"total-pages":d.value.total_pages,"has-next":d.value.has_next,"has-pre":d.value.has_pre,onGetPage:k},null,8,["current-page","total-pages","has-next","has-pre"])):A("",!0)])):A("",!0)]),J(de,{ref_key:"addEditProductRef",ref:L,onGetProducts:k},null,512),J(he,{ref_key:"deleteProductRef",ref:a,onGetProducts:k},null,512),J(je,{ref_key:"uploadImageRef",ref:m},null,512)],64)}}},ps=tt(ns,[["__scopeId","data-v-042144c3"]]);export{ps as default};
