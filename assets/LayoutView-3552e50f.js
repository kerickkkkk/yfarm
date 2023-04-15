import{_ as y}from"./logo-4ad03925.js";import{u as at}from"./cartsStore-de5fe46e.js";import{i as ot,r as A,a as w,o as N,c as R,b as t,d as i,w as d,n as it,e as nt,p as ct,f as lt,g as dt,s as q,h as rt,j as _t,F as mt,k,t as H,u as P}from"./index-72fe37f2.js";import{u as ut}from"./likesStore-83298aca.js";import{_ as ft}from"./plugin-vueexport-helper-c27b6911.js";import{r as ht,a as pt,b as vt,c as bt,d as gt,e as Et,f as wt,g as kt}from"./component-functions-e1de1c19.js";import"./service-97f28bed.js";const x=r=>(ct("data-v-2d6fc3ac"),r=r(),lt(),r),yt={class:"rounded-top-5 bg-cover py-10 mt-6 mt-md-12",style:{backgroundImage:"linear-gradient(to right, rgba(169, 193, 0 , 0.9), rgba(169, 193, 0, 0.9)), url(./images/ImgFooter.jpg)"}},xt={class:"container text-white"},St={class:"row align-items-end"},Ct={class:"col-md-5 mb-8 mb-md-0"},At=x(()=>t("div",{class:"mb-3"},[t("img",{style:{width:"120px"},src:y,alt:"logo"})],-1)),Nt={class:"mb-3"},Vt=x(()=>t("label",{for:"email",class:"form-label"},"關於農場的最新優惠，施作趣聞，不漏接",-1)),Tt={class:"position-relative mb-"},$t={class:"mb-3"},Dt=x(()=>t("button",{type:"submit",class:"position-absolute end-0 top-50 translate-middle-y me-3 btn btn-sm btn-primary"}," 立即訂購 ",-1)),It=x(()=>t("div",{class:"fs-7"}," © 楊家農舍 2023 ",-1)),Lt=nt('<div class="col-md-4 ms-md-auto mb-8 mb-md-4" data-v-2d6fc3ac><div data-v-2d6fc3ac><h5 class="h4 text-white mb-5" data-v-2d6fc3ac> 聯絡我們 </h5><ul data-v-2d6fc3ac><li class="d-flex mb-3 mb-md-4" data-v-2d6fc3ac><div data-v-2d6fc3ac>營業時間</div><div data-v-2d6fc3ac>09:00 - 17:00</div></li><li class="d-flex mb-3 mb-md-4" data-v-2d6fc3ac><div class="me-7" data-v-2d6fc3ac> 電話 </div><div data-v-2d6fc3ac><a class="text-white" href="tel:+886-912345678" data-v-2d6fc3ac>0912-345-678</a></div></li><li class="d-flex" data-v-2d6fc3ac><div class="me-7" data-v-2d6fc3ac> 地址 </div><div data-v-2d6fc3ac> 雲林縣土庫鎮奮起湖奮起 100 之 1 號 </div></li></ul></div></div><div class="col-md-2 mb-md-5 mb-4" data-v-2d6fc3ac><h5 class="h4 text-white mb-5" data-v-2d6fc3ac> 加入官方帳號 </h5><div style="width:96px;height:96px;" data-v-2d6fc3ac><img src="'+y+'" alt="qr code" data-v-2d6fc3ac></div></div>',2),Ot={__name:"FooterView",setup(r){const h=ot("$swal"),c=A(""),_=A(null),p=(v,f)=>{h({title:"感謝訂閱",focusCancel:!1}),f.resetForm(),document.focus()};return(v,f)=>{const b=w("VField"),g=w("error-message"),o=w("VForm");return N(),R("footer",yt,[t("div",xt,[t("div",St,[t("div",Ct,[At,t("div",Nt,[Vt,t("div",Tt,[i(o,{onSubmit:p},{default:d(({errors:l})=>[t("div",$t,[i(b,{id:"email",ref_key:"email",ref:_,modelValue:c.value,"onUpdate:modelValue":f[0]||(f[0]=E=>c.value=E),name:"email",type:"email",class:it(["form-control py-4",{"is-invalid":l.email}]),placeholder:"請輸入 Email",rules:"email|required"},null,8,["modelValue","class"]),Dt,i(g,{name:"email",class:"invalid-feedback"})])]),_:1})])]),It]),Lt])])])}}},Ft=ft(Ot,[["__scopeId","data-v-2d6fc3ac"]]);var V={},Bt={get exports(){return V},set exports(r){V=r}};/*!
  * Bootstrap offcanvas.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(r,h){(function(c,_){r.exports=_(ht(),pt(),vt(),bt(),gt(),Et(),wt(),kt())})(dt,function(c,_,p,v,f,b,g,o){const l=n=>n&&typeof n=="object"&&"default"in n?n:{default:n},E=l(_),s=l(p),S=l(v),C=l(f),K=l(b),M=l(g),z="offcanvas",m=".bs.offcanvas",T=".data-api",G=`load${m}${T}`,j="Escape",$="show",D="showing",I="hiding",W="offcanvas-backdrop",L=".offcanvas.show",Y=`show${m}`,Q=`shown${m}`,U=`hide${m}`,O=`hidePrevented${m}`,F=`hidden${m}`,J=`resize${m}`,X=`click${m}${T}`,Z=`keydown.dismiss${m}`,tt='[data-bs-toggle="offcanvas"]',et={backdrop:!0,keyboard:!0,scroll:!1},st={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class u extends S.default{constructor(e,a){super(e,a),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return et}static get DefaultType(){return st}static get NAME(){return z}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||s.default.trigger(this._element,Y,{relatedTarget:e}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new E.default().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(D);const B=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add($),this._element.classList.remove(D),s.default.trigger(this._element,Q,{relatedTarget:e})};this._queueCallback(B,this._element,!0)}hide(){if(!this._isShown||s.default.trigger(this._element,U).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(I),this._backdrop.hide();const a=()=>{this._element.classList.remove($,I),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new E.default().reset(),s.default.trigger(this._element,F)};this._queueCallback(a,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const e=()=>{if(this._config.backdrop==="static"){s.default.trigger(this._element,O);return}this.hide()},a=Boolean(this._config.backdrop);return new K.default({className:W,isVisible:a,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:a?e:null})}_initializeFocusTrap(){return new M.default({trapElement:this._element})}_addEventListeners(){s.default.on(this._element,Z,e=>{if(e.key===j){if(!this._config.keyboard){s.default.trigger(this._element,O);return}this.hide()}})}static jQueryInterface(e){return this.each(function(){const a=u.getOrCreateInstance(this,e);if(typeof e=="string"){if(a[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);a[e](this)}})}}return s.default.on(document,X,tt,function(n){const e=c.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),c.isDisabled(this))return;s.default.one(e,F,()=>{c.isVisible(this)&&this.focus()});const a=C.default.findOne(L);a&&a!==e&&u.getInstance(a).hide(),u.getOrCreateInstance(e).toggle(this)}),s.default.on(window,G,()=>{for(const n of C.default.find(L))u.getOrCreateInstance(n).show()}),s.default.on(window,J,()=>{for(const n of C.default.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(n).position!=="fixed"&&u.getOrCreateInstance(n).hide()}),o.enableDismissTrigger(u),c.defineJQueryPlugin(u),u})})(Bt);const qt=V,Ht={style:{"z-index":"9999"},class:"navbar navbar-expand-md position-fixed start-0 end-0 bg-white bg-md-transparent navbar-white mt-md-9 py-0"},Pt={class:"container w-md-100"},Rt=t("img",{style:{width:"60px"},src:y,alt:"首頁"},null,-1),Kt=t("span",{class:"navbar-toggler-icon"},null,-1),Mt=[Kt],zt={id:"offcanvas",class:"offcanvas offcanvas-start bg-light w-100",tabindex:"-1","aria-labelledby":"offcanvasLabel"},Gt={class:"offcanvas-body"},jt={class:"navbar-nav bg-md-white flex-grow-1 text-center me-md-5 rounded-3 px-md-5"},Wt={class:"nav-item me-auto d-none d-md-block"},Yt=t("img",{style:{width:"60px"},src:y,alt:"首頁"},null,-1),Qt={class:"nav-item"},Ut={class:"nav-item"},Jt={class:"nav-item"},Xt={class:"nav-item"},Zt={class:"navbar-nav bg-md-primary text-center rounded-3"},te={class:"nav-item bg-white bg-md-transparent mb-4 mb-md-0"},ee={class:"position-md-relative"},se=t("i",{class:"bi bi-cart-fill fs-4"},null,-1),ae={class:"position-absolute top-md-0 top-50 fs-md-6 end-md-auto end-0 start-md-100 rounded-circle text-white py-md-0 py-1 px-2 bg-secondary translate-middle-md translate-middle-y me-2 me-md-0"},oe={class:"fs-6"},ie={class:"nav-item bg-white bg-md-transparent mb-4 mb-md-0"},ne=t("i",{class:"bi bi-heart-fill fs-4"},null,-1),ce={class:"position-absolute top-md-0 top-50 fs-md-6 end-md-auto end-0 start-md-100 rounded-circle text-white py-md-0 py-1 px-2 bg-secondary translate-middle-md translate-middle-y me-2 me-md-0"},le={class:"fs-6"},de={class:"nav-item bg-white bg-md-transparent mb-4 mb-md-0"},re=t("i",{class:"bi bi-person-fill fs-4"},null,-1),ge={__name:"LayoutView",setup(r){const h=at(),c=ut(),_=A(null),{getCarts:p}=h,{getLikes:v}=c,{cartsGetter:f}=q(h),{likesGetter:b}=q(c),g=()=>{_.value.show()},o=()=>{_.value.hide()};return rt(()=>{_.value=new qt("#offcanvas",{focus:!1}),p(),v()}),(l,E)=>{const s=w("RouterLink"),S=w("RouterView");return N(),R(mt,null,[t("nav",Ht,[t("div",Pt,[i(s,{class:"d-md-none d-block",to:"/"},{default:d(()=>[Rt]),_:1}),t("button",{class:"navbar-toggler ms-auto bg-primary rounded-0",type:"button",style:{transform:"translateX(12px)","line-height":"50px",width:"60px"},onClick:g},Mt),t("div",zt,[t("div",{class:"offcanvas-header"},[t("button",{type:"button",class:"btn-close p-4 fs-1 text-white bg-primary ms-auto rounded-circle opacity-100",onClick:o})]),t("div",Gt,[t("ul",jt,[t("li",Wt,[i(s,{class:"nav-link",to:"/"},{default:d(()=>[Yt]),_:1})]),t("li",Qt,[i(s,{class:"nav-link p-5","aria-current":"page",to:"/products",onClick:o},{default:d(()=>[k(" 產品 ")]),_:1})]),t("li",Ut,[i(s,{to:"/aboutus",class:"nav-link p-5","aria-current":"page",onClick:o},{default:d(()=>[k(" 關於我們 ")]),_:1})]),t("li",Jt,[i(s,{to:"/articles",class:"nav-link p-5","aria-current":"page",onClick:o},{default:d(()=>[k(" 最新消息 ")]),_:1})]),t("li",Xt,[i(s,{to:"/qa",class:"nav-link p-5","aria-current":"page",onClick:o},{default:d(()=>[k(" 常見問題 ")]),_:1})])]),t("ul",Zt,[t("li",te,[i(s,{class:"text-md-white nav-link py-5 px-md-4 position-relative","aria-current":"page",to:"/cart",onClick:o},{default:d(()=>[t("div",ee,[se,t("div",ae,[t("span",oe,H(P(f).length),1)])])]),_:1})]),t("li",ie,[i(s,{class:"nav-link px-md-4 py-5 position-relative","aria-current":"page",to:"/likes",onClick:o},{default:d(()=>[t("div",{class:"position-relative",onClick:o},[ne,t("div",ce,[t("span",le,H(P(b).length),1)])])]),_:1})]),t("li",de,[i(s,{to:"/login",class:"nav-link px-md-4 py-5","aria-current":"page",onClick:o},{default:d(()=>[re]),_:1})])])])])])]),(N(),_t(S,{key:l.$route.fullPath})),i(Ft)],64)}}};export{ge as default};