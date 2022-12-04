import{b as Z,d as ue,W as ge,e as K,y as de,a8 as ve,u as ee,r as B,w as A,I as fe,ay as ke,o as i,j as p,s as we,k as a,n as Re,_ as xe,bn as U,H as be,bo as Ie,bp as Fe,f as j,a2 as Te,ap as Ve,a4 as r,E as V,b9 as qe,aB as De,bq as Ae,br as Q,U as $e,bs as Ne,a0 as We,S as Le,bt as Ue,q as te,g as je,i as Ke,bu as me,J as He,bv as _e,aq as Ge,L as Xe,az as Ye,R as F,t as Je,V as Qe,b2 as Y,K as o,l as M,m as x,Q as w,P as N,b0 as he,O as G,an as X,b1 as Ze,aX as Se,aE as Ce,bw as Ee,bx as Pe,aY as et,aZ as tt,a$ as at,ag as st,aG as nt,aF as ot}from"./index.ca940d41.js";import{E as re}from"./el-empty.082a1cac.js";import{W as lt}from"./WorkerBox.1f3a36e0.js";const ae=Symbol("tabsRootContextKey"),rt=Z({tabs:{type:ue(Array),default:()=>ge([])}}),it={name:"ElTabBar"},ct=K({...it,props:rt,setup(e,{expose:s}){const g=e,$="ElTabBar",u=be(),n=de(ae);n||ve($,"<el-tabs><el-tab-bar /></el-tabs>");const t=ee("tabs"),c=B(),f=B(),b=()=>{let m=0,y=0;const z=["top","bottom"].includes(n.props.tabPosition)?"width":"height",h=z==="width"?"x":"y";return g.tabs.every(l=>{var C,k,q,W;const D=(k=(C=u.parent)==null?void 0:C.refs)==null?void 0:k[`tab-${l.uid}`];if(!D)return!1;if(!l.active)return!0;y=D[`client${U(z)}`];const J=h==="x"?"left":"top";m=D.getBoundingClientRect()[J]-((W=(q=D.parentElement)==null?void 0:q.getBoundingClientRect()[J])!=null?W:0);const H=window.getComputedStyle(D);return z==="width"&&(g.tabs.length>1&&(y-=Number.parseFloat(H.paddingLeft)+Number.parseFloat(H.paddingRight)),m+=Number.parseFloat(H.paddingLeft)),!1}),{[z]:`${y}px`,transform:`translate${U(h)}(${m}px)`}},S=()=>f.value=b();return A(()=>g.tabs,async()=>{await fe(),S()},{immediate:!0}),ke(c,()=>S()),s({ref:c,update:S}),(m,y)=>(i(),p("div",{ref_key:"barRef",ref:c,class:we([a(t).e("active-bar"),a(t).is(a(n).props.tabPosition)]),style:Re(f.value)},null,6))}});var ut=xe(ct,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-bar.vue"]]);const dt=Z({panes:{type:ue(Array),default:()=>ge([])},currentName:{type:[String,Number],default:""},editable:Boolean,type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),vt={tabClick:(e,s,g)=>g instanceof Event,tabRemove:(e,s)=>s instanceof Event},pe="ElTabNav",ft=K({name:pe,props:dt,emits:vt,setup(e,{expose:s,emit:g}){const $=be(),u=de(ae);u||ve(pe,"<el-tabs><tab-nav /></el-tabs>");const n=ee("tabs"),t=Ie(),c=Fe(),f=B(),b=B(),S=B(),m=B(!1),y=B(0),z=B(!1),h=B(!0),l=j(()=>["top","bottom"].includes(u.props.tabPosition)?"width":"height"),C=j(()=>({transform:`translate${l.value==="width"?"X":"Y"}(-${y.value}px)`})),k=()=>{if(!f.value)return;const d=f.value[`offset${U(l.value)}`],_=y.value;if(!_)return;const v=_>d?_-d:0;y.value=v},q=()=>{if(!f.value||!b.value)return;const d=b.value[`offset${U(l.value)}`],_=f.value[`offset${U(l.value)}`],v=y.value;if(d-v<=_)return;const O=d-v>_*2?v+_:d-_;y.value=O},W=async()=>{const d=b.value;if(!m.value||!S.value||!f.value||!d)return;await fe();const _=S.value.querySelector(".is-active");if(!_)return;const v=f.value,O=["top","bottom"].includes(u.props.tabPosition),P=_.getBoundingClientRect(),E=v.getBoundingClientRect(),I=O?d.offsetWidth-E.width:d.offsetHeight-E.height,R=y.value;let T=R;O?(P.left<E.left&&(T=R-(E.left-P.left)),P.right>E.right&&(T=R+P.right-E.right)):(P.top<E.top&&(T=R-(E.top-P.top)),P.bottom>E.bottom&&(T=R+(P.bottom-E.bottom))),T=Math.max(T,0),y.value=Math.min(T,I)},D=()=>{if(!b.value||!f.value)return;const d=b.value[`offset${U(l.value)}`],_=f.value[`offset${U(l.value)}`],v=y.value;if(_<d){const O=y.value;m.value=m.value||{},m.value.prev=O,m.value.next=O+_<d,d-O<_&&(y.value=d-_)}else m.value=!1,v>0&&(y.value=0)},J=d=>{const _=d.code,{up:v,down:O,left:P,right:E}=Q;if(![v,O,P,E].includes(_))return;const I=Array.from(d.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),R=I.indexOf(d.target);let T;_===P||_===v?R===0?T=I.length-1:T=R-1:R<I.length-1?T=R+1:T=0,I[T].focus(),I[T].click(),H()},H=()=>{h.value&&(z.value=!0)},se=()=>z.value=!1;return A(t,d=>{d==="hidden"?h.value=!1:d==="visible"&&setTimeout(()=>h.value=!0,50)}),A(c,d=>{d?setTimeout(()=>h.value=!0,50):h.value=!1}),ke(S,D),Te(()=>setTimeout(()=>W(),0)),Ve(()=>D()),s({scrollToActiveTab:W,removeFocus:se}),A(()=>e.panes,()=>$.update(),{flush:"post"}),()=>{const d=m.value?[r("span",{class:[n.e("nav-prev"),n.is("disabled",!m.value.prev)],onClick:k},[r(V,null,{default:()=>[r(qe,null,null)]})]),r("span",{class:[n.e("nav-next"),n.is("disabled",!m.value.next)],onClick:q},[r(V,null,{default:()=>[r(De,null,null)]})])]:null,_=e.panes.map((v,O)=>{var P,E,I,R;const T=v.uid,ne=v.props.disabled,oe=(E=(P=v.props.name)!=null?P:v.index)!=null?E:`${O}`,le=!ne&&(v.isClosable||e.editable);v.index=`${O}`;const Me=le?r(V,{class:"is-icon-close",onClick:L=>g("tabRemove",v,L)},{default:()=>[r(Ae,null,null)]}):null,ze=((R=(I=v.slots).label)==null?void 0:R.call(I))||v.props.label,Oe=!ne&&v.active?0:-1;return r("div",{ref:`tab-${T}`,class:[n.e("item"),n.is(u.props.tabPosition),n.is("active",v.active),n.is("disabled",ne),n.is("closable",le),n.is("focus",z.value)],id:`tab-${oe}`,key:`tab-${T}`,"aria-controls":`pane-${oe}`,role:"tab","aria-selected":v.active,tabindex:Oe,onFocus:()=>H(),onBlur:()=>se(),onClick:L=>{se(),g("tabClick",v,oe,L)},onKeydown:L=>{le&&(L.code===Q.delete||L.code===Q.backspace)&&g("tabRemove",v,L)}},[ze,Me])});return r("div",{ref:S,class:[n.e("nav-wrap"),n.is("scrollable",!!m.value),n.is(u.props.tabPosition)]},[d,r("div",{class:n.e("nav-scroll"),ref:f},[r("div",{class:[n.e("nav"),n.is(u.props.tabPosition),n.is("stretch",e.stretch&&["top","bottom"].includes(u.props.tabPosition))],ref:b,style:C.value,role:"tablist",onKeydown:J},[e.type?null:r(ut,{tabs:[...e.panes]},null),_])])])}}}),bt=Z({type:{type:String,values:["card","border-card",""],default:""},activeName:{type:[String,Number]},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:ue(Function),default:()=>!0},stretch:Boolean}),ie=e=>je(e)||Ke(e),mt={[$e]:e=>ie(e),tabClick:(e,s)=>s instanceof Event,tabChange:e=>ie(e),edit:(e,s)=>["remove","add"].includes(s),tabRemove:e=>ie(e),tabAdd:()=>!0};var _t=K({name:"ElTabs",props:bt,emits:mt,setup(e,{emit:s,slots:g,expose:$}){var u,n;const t=ee("tabs"),c=B(),f=Ne({}),b=B((n=(u=e.modelValue)!=null?u:e.activeName)!=null?n:"0"),S=l=>{b.value=l,s($e,l),s("tabChange",l)},m=async l=>{var C,k,q;if(!(b.value===l||me(l)))try{await((C=e.beforeLeave)==null?void 0:C.call(e,l,b.value))!==!1&&(S(l),(q=(k=c.value)==null?void 0:k.removeFocus)==null||q.call(k))}catch{}},y=(l,C,k)=>{l.props.disabled||(m(C),s("tabClick",l,k))},z=(l,C)=>{l.props.disabled||me(l.props.name)||(C.stopPropagation(),s("edit",l.props.name,"remove"),s("tabRemove",l.props.name))},h=()=>{s("edit",void 0,"add"),s("tabAdd")};return We({from:'"activeName"',replacement:'"model-value" or "v-model"',scope:"ElTabs",version:"2.3.0",ref:"https://element-plus.org/en-US/component/tabs.html#attributes",type:"Attribute"},j(()=>!!e.activeName)),A(()=>e.activeName,l=>m(l)),A(()=>e.modelValue,l=>m(l)),A(b,async()=>{var l;await fe(),(l=c.value)==null||l.scrollToActiveTab()}),Le(ae,{props:e,currentName:b,registerPane:k=>f[k.uid]=k,unregisterPane:k=>delete f[k]}),$({currentName:b}),()=>{const l=e.editable||e.addable?r("span",{class:t.e("new-tab"),tabindex:"0",onClick:h,onKeydown:q=>{q.code===Q.enter&&h()}},[r(V,{class:t.is("icon-plus")},{default:()=>[r(Ue,null,null)]})]):null,C=r("div",{class:[t.e("header"),t.is(e.tabPosition)]},[l,r(ft,{ref:c,currentName:b.value,editable:e.editable,type:e.type,panes:Object.values(f),stretch:e.stretch,onTabClick:y,onTabRemove:z},null)]),k=r("div",{class:t.e("content")},[te(g,"default")]);return r("div",{class:[t.b(),t.m(e.tabPosition),{[t.m("card")]:e.type==="card",[t.m("border-card")]:e.type==="border-card"}]},[...e.tabPosition!=="bottom"?[C,k]:[k,C]])}}});const ht=Z({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),pt=["id","aria-hidden","aria-labelledby"],yt={name:"ElTabPane"},gt=K({...yt,props:ht,setup(e){const s=e,g="ElTabPane",$=be(),u=He(),n=de(ae);n||ve(g,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const t=ee("tab-pane"),c=B(),f=j(()=>s.closable||n.props.closable),b=_e(()=>{var h;return n.currentName.value===((h=s.name)!=null?h:c.value)}),S=B(b.value),m=j(()=>{var h;return(h=s.name)!=null?h:c.value}),y=_e(()=>!s.lazy||S.value||b.value);A(b,h=>{h&&(S.value=!0)});const z=Ne({uid:$.uid,slots:u,props:s,paneName:m,active:b,index:c,isClosable:f});return Te(()=>{n.registerPane(z)}),Ge(()=>{n.unregisterPane(z.uid)}),(h,l)=>a(y)?Xe((i(),p("div",{key:0,id:`pane-${a(m)}`,class:we(a(t).b()),role:"tabpanel","aria-hidden":!a(b),"aria-labelledby":`tab-${a(m)}`},[te(h.$slots,"default")],10,pt)),[[Ye,a(b)]]):F("v-if",!0)}});var Be=xe(gt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-pane.vue"]]);const kt=Je(_t,{TabPane:Be}),ce=Qe(Be);const wt={},xt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},Tt=o("path",{d:"M12 6l4 6l5-4l-2 10H5L3 8l5 4z",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),$t=[Tt];function Nt(e,s){return i(),p("svg",xt,$t)}const St=Y(wt,[["render",Nt]]),Ct={},Et={viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},Pt=o("circle",{cy:"12",cx:"12",r:"12",stroke:"currentColor"},null,-1),Bt=[Pt];function Mt(e,s){return i(),p("svg",Et,Bt)}const ye=Y(Ct,[["render",Mt]]),zt=e=>(Ee("data-v-12f5e4df"),e=e(),Pe(),e),Ot={style:{display:"flex","justify-content":"space-between"}},Rt={class:"card-header"},It={class:"small-font"},Ft={key:0},Vt={key:1},qt={style:{"list-style-type":"none","margin-top":"0"}},Dt={style:{"margin-left":"5px"}},At={key:0},Wt={key:1},Lt=zt(()=>o("div",null,"They are hosting the models:",-1)),Ut={style:{"list-style-type":"none","margin-top":"0"}},jt={class:"small-font"},Kt=K({__name:"TeamBox",props:{team:null,top:{type:Boolean}},setup(e){const s=e;function g(u){if(u==null)return"?";if(u=Number(u),u===0)return"0s";let n=Math.floor(u/86400);var t=Math.floor(u%86400/3600),c=Math.floor(u%86400%3600/60),f=n>0?n+"d ":"",b=t>0?t+"h ":"",S=c>0?c+"m ":"";return f+b+S}const $=j(()=>[...s.team.models].sort((u,n)=>n.count-u.count));return(u,n)=>(i(),M(a(Ce),{class:"team-box"},{header:x(()=>[o("div",Ot,[o("div",Rt,[e.top?(i(),M(a(V),{key:0,size:20,color:"var(--el-color-warning)",style:{"margin-right":"0.5rem"}},{default:x(()=>[r(St)]),_:1})):F("",!0),o("span",null,w(e.team.name),1)]),te(u.$slots,"header",{},void 0,!0)])]),default:x(()=>[o("div",It,"ID: "+w(e.team.id),1),o("div",null,[N("This team has been online for "),o("strong",null,w(g(e.team.uptime)),1)]),o("div",null,[N("They've generated "),o("strong",null,w(e.team.contributions),1),N(" MPS")]),o("div",null,[N("They're going at a speed of "),o("strong",null,w(e.team.speed),1),N(" MPS/s")]),o("div",null,[N("They've fulfilled "),o("strong",null,w(e.team.requests_fulfilled),1),N(" requests")]),r(a(Ze),{style:{"margin-top":"0.5rem"}},{default:x(()=>[r(a(he),{title:"Workers",name:"1"},{default:x(()=>{var t;return[e.team.worker_count===0?(i(),p("div",Ft,"They have no workers.")):(i(),p("div",Vt,[o("div",null,"They have "+w(e.team.worker_count)+" worker(s):",1),o("ul",qt,[(i(!0),p(G,null,X((t=e.team.workers)==null?void 0:t.length,c=>(i(),p("li",{key:c},[o("strong",null,[e.team.workers[c-1].online?(i(),M(a(V),{key:0,size:10,color:"var(--el-color-success)"},{default:x(()=>[r(ye)]),_:1})):(i(),M(a(V),{key:1,size:10,color:"var(--el-color-danger)"},{default:x(()=>[r(ye)]),_:1})),o("span",Dt,w(e.team.workers[c-1].name),1)])]))),128))])]))]}),_:1}),r(a(he),{title:"Models",name:"2"},{default:x(()=>{var t,c;return[((t=e.team.models)==null?void 0:t.length)===0?(i(),p("div",At,"They are hosting no models.")):(i(),p("div",Wt,[Lt,o("ul",Ut,[(i(!0),p(G,null,X((c=a($))==null?void 0:c.length,f=>(i(),p("li",{key:f},[o("strong",null,w(a($)[f-1].name)+" ("+w(a($)[f-1].count)+")",1)]))),128))])]))]}),_:1})]),_:1}),e.team.info?(i(),M(a(Se),{key:0,style:{margin:"10px 0"}})):F("",!0),o("div",jt,w(e.team.info),1)]),_:3}))}});const Ht=Y(Kt,[["__scopeId","data-v-12f5e4df"]]),Gt=e=>(Ee("data-v-966ac74d"),e=e(),Pe(),e),Xt={style:{display:"flex","justify-content":"space-between"}},Yt={class:"card-header"},Jt={style:{"margin-left":"0.5rem"}},Qt=Gt(()=>o("div",null,null,-1)),Zt={key:0},ea={class:"small-font"},ta=K({__name:"ModelBox",props:{model:null},setup(e){const s=e,g=j(()=>s.model.count===0?"Offline":s.model.queued===0?"Standby":"Online");return($,u)=>(i(),M(a(Ce),{class:"model-box"},{header:x(()=>[o("div",Xt,[o("div",Yt,[r(a(st),{content:a(g),placement:"top"},{default:x(()=>[e.model.count===0?(i(),M(a(V),{key:0,size:20,color:"red"},{default:x(()=>[r(a(et))]),_:1})):e.model.queued===0?(i(),M(a(V),{key:1,size:20,color:"orange"},{default:x(()=>[r(a(tt))]),_:1})):(i(),M(a(V),{key:2,size:20,color:"green"},{default:x(()=>[r(a(at))]),_:1}))]),_:1},8,["content"]),o("span",Jt,w(e.model.name),1)]),te($.$slots,"header",{},void 0,!0)])]),default:x(()=>[o("div",null,[N("There are "),o("strong",null,w(e.model.count),1),N(" workers running this model")]),o("div",null,[N("There are "),o("strong",null,w(Math.floor(e.model.queued/1e4)/100),1),N(" MPS queued")]),o("div",null,[N("The average model speed is "),o("strong",null,w(Math.floor(e.model.performance/1e4)/100),1),N(" MPS/s")]),o("div",null,[N("It is expected to take "),o("strong",null,w(e.model.eta)+"s",1),N(" to clear this queue")]),Qt,o("div",null,[N("The style of this model is "),o("strong",null,w(e.model.style),1)]),e.model.nsfw?(i(),p("div",Zt,"This model may produce NSFW images.")):F("",!0),e.model.description?(i(),M(a(Se),{key:1,style:{margin:"10px 0"}})):F("",!0),o("div",ea,w(e.model.description),1)]),_:3}))}});const aa=Y(ta,[["__scopeId","data-v-966ac74d"]]),sa={class:"workers"},na={key:0,class:"workers"},oa={key:1},la={key:0,class:"workers"},ra={key:1},ia={class:"workers"},ca={key:0},ua=K({__name:"WorkersView",setup(e){const s=nt(),g=ot(),$=B("workers");return(u,n)=>(i(),M(a(kt),{modelValue:$.value,"onUpdate:modelValue":n[0]||(n[0]=t=>$.value=t)},{default:x(()=>[r(a(ce),{label:"Workers",name:"workers"},{default:x(()=>[o("div",sa,[a(s).workers.length!=0?(i(),p("div",na,[(i(!0),p(G,null,X(a(s).workers.sort((t,c)=>(c.info?c.info.length:0)-(t.info?t.info.length:0)),t=>(i(),M(lt,{key:t.id,worker:t},null,8,["worker"]))),128))])):F("",!0),a(s).workers.length==0?(i(),p("div",oa,[r(a(re),{description:"No Workers Found"})])):F("",!0)])]),_:1}),r(a(ce),{label:"Teams",name:"teams"},{default:x(()=>[a(s).workers.length!=0?(i(),p("div",la,[(i(!0),p(G,null,X(a(s).teams,t=>(i(),M(Ht,{key:t.id,top:a(s).teams.sort((c,f)=>f.requests_fulfilled-c.requests_fulfilled)[0]===t,team:t},null,8,["top","team"]))),128))])):F("",!0),a(s).workers.length==0?(i(),p("div",ra,[r(a(re),{description:"No Teams Found"})])):F("",!0)]),_:1}),r(a(ce),{label:"Models",name:"models"},{default:x(()=>[o("div",ia,[(i(!0),p(G,null,X(a(g).modelsData.filter(t=>t.type==="ckpt").sort((t,c)=>c.count-t.count).sort((t,c)=>c.queued-t.queued),t=>(i(),M(aa,{key:t.name,model:t},null,8,["model"]))),128))]),a(s).workers.length==0?(i(),p("div",ca,[r(a(re),{description:"No Models Found"})])):F("",!0)]),_:1})]),_:1},8,["modelValue"]))}});const ba=Y(ua,[["__scopeId","data-v-9be3ad60"]]);export{ba as default};
