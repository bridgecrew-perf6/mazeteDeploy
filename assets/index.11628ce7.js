var ce=Object.defineProperty,de=Object.defineProperties;var ge=Object.getOwnPropertyDescriptors;var ae=Object.getOwnPropertySymbols;var he=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var ue=(t,s,i)=>s in t?ce(t,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[s]=i,Y=(t,s)=>{for(var i in s||(s={}))he.call(s,i)&&ue(t,i,s[i]);if(ae)for(var i of ae(s))me.call(s,i)&&ue(t,i,s[i]);return t},Z=(t,s)=>de(t,ge(s));import{u as P,a as V,r,v as pe,b as S,j as n,c as e,A as _e,T as ve,d as fe,e as Se,F as ee,M as re,B as W,f as be,g as Ce,h as ye,R as Fe,i as H,k as we,l as Ee}from"./vendor.d6a204af.js";const Ae=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))h(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const _ of a.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&h(_)}).observe(document,{childList:!0,subtree:!0});function i(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerpolicy&&(a.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?a.credentials="include":l.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function h(l){if(l.ep)return;l.ep=!0;const a=i(l);fetch(l.href,a)}};Ae();const D="https://mazete-api-dev.pechakucha.ai",Ne=fe({stringify:t=>t.kana+t.label});function xe(){const[t,s]=r.exports.useState([0,0]);return r.exports.useLayoutEffect(()=>{function i(){s([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",i),i(),()=>window.removeEventListener("resize",i)},[]),t}const ke=["\u30AD\u30E3\u30E9\u540D\u307E\u305F\u306F\u4F5C\u54C1\u540D\u3067\u3055\u304C\u3059","\u5834\u9762\u540D\u307E\u305F\u306F\u4F5C\u54C1\u540D\u3067\u3055\u304C\u3059"];function Be(){const t=P();V();const[s,i]=r.exports.useState(1),[h,l]=r.exports.useState([]),[a,_]=r.exports.useState(null),[g,N]=r.exports.useState(!1),[w,b]=r.exports.useState([]),[x,O]=r.exports.useState([]),[T,B]=r.exports.useState([]),[I,m]=r.exports.useState([]),[C,E]=r.exports.useState([]),[A,v]=r.exports.useState(null),[K,k]=xe();r.exports.useEffect(()=>{let o=window.innerHeight;document.getElementById("character_select").style.height=o+"px";let u=sessionStorage.register_id||null,p=sessionStorage.background||null,d=sessionStorage.user_list||null;if(d&&l(JSON.parse(d)),p&&_(JSON.parse(p)),!u){u=pe();var L=JSON.stringify({register_id:u}),j={method:"post",url:`${D}/register_id`,headers:{"Content-Type":"application/json"},data:L};S(j).then(f=>{sessionStorage.setItem("register_id",u)}).catch(f=>{t("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})}let $=JSON.stringify({user_id:u,search_query:"",chosen_chara_ids:"",chosen_world_ids:""}),c={method:"post",url:`${D}/get_chara_list`,headers:{"Content-Type":"application/json"},data:$};S(c).then(f=>{b(f.data.chara_list)}).catch(f=>{t("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})});let y=JSON.stringify({user_id:u,search_query:"",chosen_chara_ids:"",chosen_world_ids:""}),z={method:"post",url:`${D}/get_world_list`,headers:{"Content-Type":"application/json"},data:y};S(z).then(f=>{O(f.data.world_list)}).catch(f=>{t("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})});let F={method:"post",url:`${D}/get_autocomplete_chara`,headers:{"Content-Type":"application/json"},data:{}};S(F).then(f=>{m(f.data.auto_complete),E(f.data.auto_complete)}).catch(f=>{});let J={method:"post",url:`${D}/get_autocomplete_world`,headers:{"Content-Type":"application/json"},data:{}};S(J).then(f=>{B(f.data.auto_complete)}).catch(f=>{})},[]),r.exports.useEffect(()=>{a&&h.length>0?N(!0):N(!1)},[h,a]);const R=o=>{let u=h,p=w.filter(d=>d.chara_id==o)[0];if(u==null?void 0:u.map(d=>d.chara_id).includes(o)){for(let d=0;d<u.length;d++)u[d].chara_id===o&&(u.splice(d,1),d--);l([...u])}else u.length<3&&(u.push(p),l([...u]))},G=()=>{let o=sessionStorage.register_id||null,u=JSON.stringify({user_id:o,chosen_chara_ids:h.map(d=>d.chara_id).toString(),chosen_world_ids:[a.world_id].toString()}),p={method:"post",url:`${D}/generate_outline`,headers:{"Content-Type":"application/json"},data:u};S(p).then(d=>{sessionStorage.setItem("outline_id",d.data.outline_id),sessionStorage.setItem("background",JSON.stringify(a)),sessionStorage.setItem("user_list",JSON.stringify(h)),sessionStorage.removeItem("outline_data"),t("/synopsis",{state:{}})}).catch(d=>{t("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})},Q=o=>{o.preventDefault();let u=sessionStorage.register_id||null,p=A,d=h.map($=>$.chara_id).toString(),L="";a&&(L=[a.world_id].toString());let j=JSON.stringify({user_id:u,search_query:p,chosen_chara_ids:d,chosen_world_ids:L});if(s==1){let $={method:"post",url:`${D}/get_chara_list`,headers:{"Content-Type":"application/json"},data:j};S($).then(c=>{b(c.data.chara_list)}).catch(c=>{t("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})}else{let $={method:"post",url:`${D}/get_world_list`,headers:{"Content-Type":"application/json"},data:j};S($).then(c=>{O(c.data.world_list)}).catch(c=>{t("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})}},X=o=>u=>{u.stopPropagation();let p=h;for(let d=0;d<p.length;d++)p[d].chara_id===o&&(p.splice(d,1),d--);l([...p])};return n("div",{className:"container",id:"character_select",children:[n("div",{className:"container-wrap",children:[n("div",{className:"common-header",children:[e("div",{className:"common-header-title01",children:"-\u4F5C\u54C1\u30EA\u30DF\u30C3\u30AF\u30B9-"}),e("div",{className:"common-header-title02",children:"\u30DE\u305C\u3066"})]}),n("div",{className:"preview",children:[n("div",{className:"preview-part",onClick:()=>{i(1),E(I),v(null)},children:[n("div",{className:"preview-img-part",children:[h==null?void 0:h.map(o=>e("div",{style:{backgroundImage:`url(${o.img_url})`},className:"avatar-preview",children:n("div",{className:"avatar-preview-close",onClick:X(o.chara_id),children:[e("span",{}),e("span",{})]})},o.chara_id)),h.length==0&&e("div",{className:"avatar-preview",style:{backgroundImage:"url(/assets/image/default-avatar.png)"}})]}),e("div",{className:s===1?"preview-title-part active":"preview-title-part",children:"\u30AD\u30E3\u30E9"})]}),n("div",{className:"preview-part",onClick:()=>{i(2),E(T),v(null)},children:[e("div",{className:"preview-img-part",children:e("div",{style:{backgroundImage:`url(${a!=null?a.img_url:"/assets/image/point-bg.png"})`},className:a!=null?"world-preview":"world-none-preview"})}),e("div",{className:s===2?"preview-title-part active":"preview-title-part",children:"\u30B7\u30C1\u30E5\u30A8\u30FC\u30B7\u30E7\u30F3"})]})]}),n("div",{className:"point-select",children:[e("div",{className:"point-search",children:n("form",{onSubmit:Q,children:[e(_e,{value:A,onChange:(o,u)=>{typeof u=="string"?v(u):u&&u.inputValue?v(u.inputValue):u&&u.label?v(u.label):v(u)},filterOptions:(o,u)=>Ne(o,u),selectOnFocus:!0,clearOnBlur:!0,handleHomeEndKeys:!0,options:C,getOptionLabel:o=>typeof o=="string"?o:o.label,renderOption:(o,u)=>e("li",Z(Y({},o),{children:u.label})),renderInput:o=>e(ve,Z(Y({},o),{label:"",placeholder:ke[s-1],onChange:u=>{v(u.target.value)}}))}),e("button",{className:"search-btn",children:e("img",{src:"/assets/image/point-search.png",alt:""})})]})}),e("div",{className:"point-intro",children:"\u753B\u50CF\u306FBing\u306E\u691C\u7D22\u7D50\u679C\u3092\u3082\u3068\u306B\u8868\u793A\u3057\u3066\u3044\u307E\u3059"}),n("div",{className:"point-body",style:{height:`calc(${k}px - 305px)`},children:[s===1&&e("div",{className:"point-body-wrap",children:w==null?void 0:w.map((o,u)=>e("div",{style:{backgroundImage:`url(${o.img_url})`},onClick:()=>R(o.chara_id),className:`${h.map(p=>p.chara_id).includes(o.chara_id)?"active":""} character-item`,children:e("span",{})},u))}),s==2&&e("div",{className:"point-body-wrap",children:x==null?void 0:x.map((o,u)=>e("div",{style:{backgroundImage:`url(${o.img_url})`},className:`${(a==null?void 0:a.img_url)==o.img_url?"active":""} location-item`,onClick:p=>{_(o)},children:e("span",{})},u))})]})]})]}),n("button",{onClick:G,className:`character-add-btn ${g?"active":""}`,disabled:!g,children:[e("img",{src:"/assets/image/imgpsh_fullsize_anim.png",alt:""}),"\u30DE\u305C\u308B"]})]})}const te="https://mazete-api-dev.pechakucha.ai";function Ie(){const[t,s]=r.exports.useState([0,0]);return r.exports.useLayoutEffect(()=>{function i(){s([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",i),i(),()=>window.removeEventListener("resize",i)},[]),t}function $e(){const t=P(),s=r.exports.useRef(),[i,h]=r.exports.useState(!1),[l,a]=r.exports.useState(!0),[_,g]=r.exports.useState(""),[N,w]=r.exports.useState([]),[b,x]=r.exports.useState(null),[O,T]=r.exports.useState(10);Ie(),r.exports.useEffect(()=>{var C;let m=((C=s==null?void 0:s.current)==null?void 0:C.scrollHeight)+"px";T(m)},[_]),r.exports.useEffect(()=>{let m=window.innerHeight;document.getElementById("loading_synposis").style.height=m+"px";let C=sessionStorage.register_id||null,E=sessionStorage.outline_id||null,A=sessionStorage.background||null;x(JSON.parse(A));let v=JSON.stringify({user_id:C,outline_id:E}),K={method:"post",url:`${te}/get_outline`,headers:{"Content-Type":"application/json"},data:v};S(K).then(k=>{k.data.generated&&k.data.outline&&!k.data.error?(a(!1),w(k.data.chara_img_urls),g(k.data.outline)):t("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})}).catch(k=>{t("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})},[]);const B=()=>{let m=sessionStorage.register_id||null,C=sessionStorage.outline_id||null;sessionStorage.setItem("outline_data",JSON.stringify(_));let E=JSON.stringify({user_id:m,outline_id:C}),A={method:"post",url:`${te}/generate_story`,headers:{"Content-Type":"application/json"},data:E};S(A).then(v=>{t(`/talk/${v.data.story_id}`,{state:{}})}).catch(v=>{t("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})};r.exports.useEffect(()=>{s.current&&i&&s.current.focus()},[i]);const I=()=>{h(!1);let m=sessionStorage.register_id||null,C=sessionStorage.outline_id||null,E=JSON.stringify({user_id:m,outline_id:C,outline:_}),A={method:"post",url:`${te}/update_outline`,headers:{"Content-Type":"application/json"},data:E};S(A).then(v=>{w(v.data.new_chara_img_urls)}).catch(v=>{t("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})};return n("div",{className:"container",id:"loading_synposis",children:[n("div",{className:"container-wrap",children:[e("div",{className:`ls-top ${i?"editing":""}`,children:e("div",{className:"ls-top-wrap",style:{backgroundImage:`url(${b==null?void 0:b.img_url}`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"},children:e("div",{className:"ls-top-body",children:N.map((m,C)=>e("div",{className:"ls-top-item",style:{backgroundImage:`url(${m})`}},C))})})}),n("div",{className:"ls-main",children:[e("div",{className:"ls-main-title",children:"\u307E\u3048\u304C\u304D"}),n("div",{className:"ls-main-loading-text",children:[l&&n("div",{className:"ls-main-loading-part",children:[e("img",{src:"/assets/image/white-loading.gif",alt:""}),e("span",{children:"\u4E0B\u66F8\u304D\u6E96\u5099\u4E2D"})]}),!l&&e("textarea",{style:{height:O},ref:s,className:"ls-main-loading-wrap",value:_,disabled:!i,onChange:m=>{g(m.target.value)},onBlur:I})]}),!i&&n("a",{className:"ls-main-edit-btn",onClick:()=>{s.current.focus(),h(!0)},children:[e("span",{children:"\u7DE8\u96C6"}),e("img",{src:"/assets/image/edit-icon.png",alt:""})]}),!i&&e("div",{className:"ls-main-making-btn-part",children:e("button",{onClick:B,className:l?"ls-main-making-btn":"ls-main-making-btn active",disabled:l,children:"\u3053\u306E\u4E16\u754C\u7DDA\u306B\u5165\u308B"})})]})]}),!i&&e("button",{className:"back-to-btn",onClick:()=>{let m=sessionStorage.user_list||null;t("/",{state:{user_list:m}})},children:e("img",{src:"/assets/image/back-to-img.png",alt:""})})]})}const U="https://mazete-api-dev.pechakucha.ai",Oe={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:260,bgcolor:"background.paper",borderRadius:"10px",p:4};function ie(t){return new Promise(s=>setTimeout(s,t))}function De(){const[t,s]=r.exports.useState([0,0]);return r.exports.useLayoutEffect(()=>{function i(){s([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",i),i(),()=>window.removeEventListener("resize",i)},[]),t}function Te(){const t=P(),[s,i]=r.exports.useState(!0),[h,l]=r.exports.useState(!0),[a,_]=r.exports.useState(null),[g,N]=r.exports.useState(0),[w,b]=r.exports.useState(null),[x,O]=r.exports.useState(null),[T,B]=r.exports.useState([]),[I,m]=r.exports.useState(!1),[C,E]=r.exports.useState(!1),[A,v]=r.exports.useState(!1),[K,k]=De();let{id:R}=Se();const[G,Q]=r.exports.useState(!1),X=()=>{Q(!0);let c=sessionStorage.register_id||null,y=JSON.stringify({user_id:c,story_id:R}),z={method:"post",url:`${U}/get_shared_message`,headers:{"Content-Type":"application/json"},data:y};S(z).then(F=>{t("/movie",{state:{message:F.data.message,movie_url:F.data.movie_url}})}).catch(F=>{t("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})};r.exports.useEffect(()=>{let c=sessionStorage.register_id||null,y=JSON.stringify({user_id:c,story_id:R}),z={method:"post",url:`${U}/get_story`,headers:{"Content-Type":"application/json"},data:y};S(z).then(F=>{if(F.data.generated&&!F.data.error){_(F.data);let J=F.data.story.map(f=>{const q=new Image;return q.src=f.chara_img_url,q});l(J),i(!1)}else t("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})}).catch(F=>{t("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})},[]),r.exports.useEffect(()=>{a&&o()},[a,g]),r.exports.useEffect(async()=>{if(a){let c=a.story;await ie(1),b(c[g].position)}},[x]);const o=()=>{let c=a.story;c[g]&&(O(c[g].chara_img_url),c[g].multiple?(m(!0),B(c[g].content)):(m(!1),u(c[g].content)))},u=async c=>{v(!0);for(var y=0;y<c.length;)B([c.substring(0,y+1)]),y++,await ie(75);v(!1),a.story.length-1==g&&E(!0)},p=c=>{I&&(m(!1),u(c))},d=()=>{!A&&!I&&a.story.length-1>g&&N(g+1)},L=()=>{g===0&&t("/synopsis",{state:{}}),g!=0&&!A&&(N(g-1),E(!1))},j=c=>{c.preventDefault(),sessionStorage.removeItem("outline_id"),sessionStorage.removeItem("background"),sessionStorage.removeItem("user_list"),t("/",{state:{}})},$=c=>{if(!I)return;let y=sessionStorage.register_id||null;i(!0);let z=JSON.stringify({user_id:y,story_id:R,chosen_content:c}),F={method:"post",url:`${U}/generate_rest_story`,headers:{"Content-Type":"application/json"},data:z};S(F).then(J=>{let f=J.data.story_id,q=JSON.stringify({user_id:y,story_id:f}),oe={method:"post",url:`${U}/get_rest_story`,headers:{"Content-Type":"application/json"},data:q};S(oe).then(M=>{if(M.data.generated&&!M.data.error){a.story.splice(g+1,a.story.length-g-1),a.story=a.story.concat(M.data.story),_(a),p(c);let ne=M.data.story.map(le=>{const se=new Image;return se.src=le.chara_img_url,se});l(ne),i(!1)}else t("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})}).catch(M=>{t("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})}).catch(J=>{t("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})};return n(ee,{children:[s&&e("div",{className:"container",id:"loading_adventure",children:e("div",{className:"container-wrap",children:n("div",{className:"la-wrap",children:[e("img",{src:"/assets/image/black-loading.gif",alt:""}),e("span",{children:"\u6E96\u5099\u4E2D"})]})})}),!s&&n("div",{className:"container",id:"adventure_state",style:{height:k},children:[n("div",{className:"container-wrap",onClick:d,children:[e("div",{className:"as-thumb",style:{backgroundImage:`url(${a==null?void 0:a.background_url})`},children:x&&e("img",{src:x,alt:"",className:`as-thumb-character ${w==0?"lb":w==1?"mb":"rb"}`})}),e("div",{className:"as-text",children:T.map((c,y)=>e("div",{className:`as-text-wrap ${A||I||C?"":"arrow"}`,style:{minHeight:`${I?"unset":"80px"}`},onClick:()=>{$(c)},children:c},y))})]}),e("button",{className:"back-to-btn",onClick:L,children:e("img",{src:g==0?"/assets/image/back-to-img.png":"/assets/image/back.png",alt:""})}),C&&n("div",{className:"text-select-btn-group",children:[e("a",{onClick:j,className:"final-btn",children:"\u30C8\u30C3\u30D7\u3078"}),e("a",{className:"final-btn",onClick:X,children:"\u30B7\u30A7\u30A2"})]})]}),e(re,{open:G,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:n(W,{sx:Oe,children:[e(W,{id:"modal-modal-title",variant:"h6",component:"h2",style:{textAlign:"center"},children:e("img",{src:"/assets/image/white-loading.gif",alt:""})}),e(be,{id:"modal-modal-description",sx:{mt:2},children:"\u30B7\u30A7\u30A2\u7528\u306E\u52D5\u753B\u3092\u4F5C\u6210\u4E2D..."})]})})]})}function ze(){const t=V();return e("div",{className:"flex-center position-ref full-height full-width bg-white",children:e("div",{className:"message",style:{padding:"10px"},dangerouslySetInnerHTML:{__html:t.state.message}})})}const Le="https://mazete-api-dev.pechakucha.ai",je={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",borderRadius:"10px",p:4};function Je(){const t=P(),s=V(),[i,h]=r.exports.useState(!1),[l,a]=r.exports.useState(s.state.message),_=()=>{h(!1)},g=b=>{b.preventDefault(),sessionStorage.removeItem("outline_id"),sessionStorage.removeItem("background"),sessionStorage.removeItem("user_list"),t("/",{state:{}})},N=()=>{Ce.exports.saveAs(s.state.movie_url,"video")},w=b=>{let x=sessionStorage.register_id||null,O=JSON.stringify({user_id:x,message:l,movie_url:s.state.movie_url}),T={method:"post",url:`${Le}/get_twitter_authenticate_url`,headers:{"Content-Type":"application/json"},data:O};S(T).then(B=>{localStorage.setItem("background",sessionStorage.background),localStorage.setItem("outline_data",sessionStorage.outline_data),localStorage.setItem("outline_id",sessionStorage.outline_id),localStorage.setItem("register_id",sessionStorage.register_id),localStorage.setItem("user_list",sessionStorage.user_list),window.location.href=B.data.authenticate_url}).catch(B=>{t("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})};return n("div",{className:"container",id:"movie",children:[n("div",{className:"container-wrap",children:[e("div",{className:"movie-header",children:e("div",{className:"movie-header-title",children:"\u30B7\u30A7\u30A2"})}),n("div",{className:"movie_area",children:[n("div",{className:"movie_box",children:[e("span",{children:"\u52D5\u753B"}),e("div",{className:"movie_box_video",children:e("video",{id:"talk_movie",src:s.state.movie_url,autoPlay:!0,muted:!0,controls:!0})}),n("div",{className:"flex_box",children:[e("div",{className:"share_box",children:n("a",{onClick:()=>{h(!0)},children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"16",viewBox:"0 0 20 16",children:e("path",{fill:"#FFF",d:"M20 1.896c-.737.32-1.526.537-2.356.637.847-.5 1.5-1.291 1.805-2.233-.793.462-1.67.8-2.606.98C16.093.491 15.024 0 13.846 0 11.58 0 9.744 1.808 9.744 4.037c0 .317.033.625.106.921-3.412-.166-6.438-1.775-8.46-4.22-.352.595-.555 1.291-.555 2.029 0 1.4.729 2.637 1.83 3.362-.677-.016-1.313-.2-1.864-.504v.05c0 1.958 1.416 3.587 3.293 3.958-.343.092-.708.142-1.08.142-.263 0-.522-.025-.772-.075.521 1.604 2.039 2.77 3.836 2.804-1.403 1.084-3.175 1.73-5.099 1.73-.33 0-.657-.021-.979-.059C1.81 15.333 3.967 16 6.281 16c7.557 0 11.685-6.154 11.685-11.492 0-.175-.005-.35-.013-.52.801-.571 1.496-1.28 2.047-2.092z"})}),e("span",{children:"\u30C4\u30A4\u30FC\u30C8"})]})}),e("div",{className:"download_box",children:n("a",{onClick:N,children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"19",height:"22",viewBox:"0 0 19 22",children:e("path",{fill:"#FFF",d:"M9.484 15.139c.264 0 .528-.098.791-.362l3.262-3.134c.176-.176.283-.372.283-.635 0-.508-.42-.86-.898-.86-.254 0-.498.098-.674.293l-1.27 1.348-.605.752.127-1.445v-9.98c0-.538-.45-1.007-1.016-1.007-.566 0-1.025.47-1.025 1.006v9.98l.127 1.446-.606-.752-1.27-1.348c-.175-.195-.419-.293-.673-.293-.488 0-.898.352-.898.86 0 .263.107.459.283.635l3.262 3.134c.263.264.527.362.8.362zm5.616 6.23c2.177 0 3.33-1.152 3.33-3.31V8.576c0-2.158-1.153-3.31-3.33-3.31H12.53v2.236h2.364c.84 0 1.308.43 1.308 1.318v9.004c0 .88-.469 1.309-1.308 1.309H4.025c-.85 0-1.298-.43-1.298-1.309V8.82c0-.888.449-1.318 1.298-1.318h2.403V5.266H3.82c-2.168 0-3.33 1.152-3.33 3.31v9.483c0 2.158 1.162 3.31 3.33 3.31H15.1z"})}),e("span",{children:"\u4FDD\u5B58"})]})})]})]}),e("div",{className:"footer_box",children:e("div",{className:"recreate_box",children:n("div",{id:"back_button_footer_talk",onClick:g,children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",children:e("path",{fill:"#999",fillRule:"evenodd",d:"M10 0c.828 0 1.5.672 1.5 1.5v7h7c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5h-7.001l.001 7c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5l-.001-7H1.5C.672 11.5 0 10.828 0 10s.672-1.5 1.5-1.5h7v-7C8.5.672 9.172 0 10 0z"})}),e("span",{children:"\u3082\u3046\u4E00\u5EA6\u4F5C\u308B"})]})})})]})]}),e("button",{className:"back-to-btn",onClick:()=>{let b=sessionStorage.user_list||null;t("/",{state:{user_list:b}})},children:e("img",{src:"/assets/image/back-to-img.png",alt:""})}),e(re,{open:i,onClose:_,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:n(W,{sx:je,children:[e(W,{children:e("textarea",{className:"twitter-message",value:l,onChange:b=>{a(b.target.value)}})}),e(W,{display:"flex",justifyContent:"flex-end",children:e("div",{className:"share-btn",onClick:w,children:e("span",{children:"Twitter\u306B\u6295\u7A3F"})})})]})})]})}const He="https://mazete-api-dev.pechakucha.ai";function Re(){const t=P(),[s,i]=r.exports.useState(!0);return r.exports.useEffect(()=>{(async()=>{sessionStorage.setItem("background",localStorage.background),sessionStorage.setItem("outline_data",localStorage.outline_data),sessionStorage.setItem("outline_id",localStorage.outline_id),sessionStorage.setItem("register_id",localStorage.register_id),sessionStorage.setItem("user_list",localStorage.user_list),localStorage.removeItem("background"),localStorage.removeItem("outline_data"),localStorage.removeItem("outline_id"),localStorage.removeItem("register_id"),localStorage.removeItem("user_list");const{oauth_token:h,oauth_verifier:l}=queryString.parse(window.location.search);if(h&&l){let a=sessionStorage.register_id||null,_=JSON.stringify({user_id:a,oauth_token:h,oauth_verifier:l}),g={method:"post",url:`${He}/tweet_movie`,headers:{"Content-Type":"application/json"},data:_};S(g).then(N=>{sessionStorage.removeItem("outline_id"),sessionStorage.removeItem("background"),sessionStorage.removeItem("user_list"),t("/",{state:{}})}).catch(N=>{t("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})}})()},[]),e(ee,{children:s&&e("div",{className:"container",id:"loading_adventure",children:e("div",{className:"container-wrap",children:n("div",{className:"la-wrap",children:[e("img",{src:"/assets/image/black-loading.gif",alt:""}),e("span",{children:"\u6E96\u5099\u4E2D"})]})})})})}function Me(){return e(ye,{children:n(Fe,{children:[e(H,{path:"/",element:e(Be,{})}),e(H,{path:"/synopsis",element:e($e,{})}),e(H,{path:"/talk/:id",element:e(Te,{})}),e(H,{path:"/movie",element:e(Je,{})}),e(H,{path:"/upload_twitter",element:e(Re,{})}),e(H,{path:"/error",element:e(ze,{})})]})})}function Pe(){return e(ee,{children:e(Me,{})})}we.render(e(Ee.StrictMode,{children:e(Pe,{})}),document.getElementById("root"));
