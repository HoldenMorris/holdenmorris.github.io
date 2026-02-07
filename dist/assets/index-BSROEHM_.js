var mr=Object.defineProperty;var gr=(e,t,o)=>t in e?mr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var D=(e,t,o)=>gr(e,typeof t!="symbol"?t+"":t,o);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function o(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=o(i);fetch(i.href,s)}})();var Re="";function Te(e){Re=e}function br(e=""){if(!Re){const t=[...document.getElementsByTagName("script")],o=t.find(r=>r.hasAttribute("data-shoelace"));if(o)Te(o.getAttribute("data-shoelace"));else{const r=t.find(s=>/shoelace(\.min)?\.js($|\?)/.test(s.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(s.src));let i="";r&&(i=r.getAttribute("src")),Te(i.split("/").slice(0,-1).join("/"))}}return Re.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var Mo=Object.defineProperty,vr=Object.defineProperties,yr=Object.getOwnPropertyDescriptor,wr=Object.getOwnPropertyDescriptors,oo=Object.getOwnPropertySymbols,xr=Object.prototype.hasOwnProperty,_r=Object.prototype.propertyIsEnumerable,xe=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Ve=e=>{throw TypeError(e)},ro=(e,t,o)=>t in e?Mo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,kt=(e,t)=>{for(var o in t||(t={}))xr.call(t,o)&&ro(e,o,t[o]);if(oo)for(var o of oo(t))_r.call(t,o)&&ro(e,o,t[o]);return e},ue=(e,t)=>vr(e,wr(t)),d=(e,t,o,r)=>{for(var i=r>1?void 0:r?yr(t,o):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(r?n(t,o,i):n(i))||i);return r&&i&&Mo(t,o,i),i},Do=(e,t,o)=>t.has(e)||Ve("Cannot "+o),$r=(e,t,o)=>(Do(e,t,"read from private field"),t.get(e)),kr=(e,t,o)=>t.has(e)?Ve("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),Ar=(e,t,o,r)=>(Do(e,t,"write to private field"),t.set(e,o),o),Cr=function(e,t){this[0]=e,this[1]=t},Sr=e=>{var t=e[xe("asyncIterator")],o=!1,r,i={};return t==null?(t=e[xe("iterator")](),r=s=>i[s]=n=>t[s](n)):(t=t.call(e),r=s=>i[s]=n=>{if(o){if(o=!1,s==="throw")throw n;return n}return o=!0,{done:!1,value:new Cr(new Promise(a=>{var l=t[s](n);l instanceof Object||Ve("Object expected"),a(l)}),1)}}),i[xe("iterator")]=()=>i,r("next"),"throw"in t?r("throw"):i.throw=s=>{throw s},"return"in t&&r("return"),i};Te("/shoelace");/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ee=globalThis,je=ee.ShadowRoot&&(ee.ShadyCSS===void 0||ee.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,We=Symbol(),io=new WeakMap;let Bo=class{constructor(t,o,r){if(this._$cssResult$=!0,r!==We)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=o}get styleSheet(){let t=this.o;const o=this.t;if(je&&t===void 0){const r=o!==void 0&&o.length===1;r&&(t=io.get(o)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&io.set(o,t))}return t}toString(){return this.cssText}};const Er=e=>new Bo(typeof e=="string"?e:e+"",void 0,We),z=(e,...t)=>{const o=e.length===1?e[0]:t.reduce((r,i,s)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new Bo(o,e,We)},zr=(e,t)=>{if(je)e.adoptedStyleSheets=t.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet);else for(const o of t){const r=document.createElement("style"),i=ee.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=o.cssText,e.appendChild(r)}},so=je?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let o="";for(const r of t.cssRules)o+=r.cssText;return Er(o)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Pr,defineProperty:Or,getOwnPropertyDescriptor:Lr,getOwnPropertyNames:Rr,getOwnPropertySymbols:Tr,getPrototypeOf:Mr}=Object,ct=globalThis,no=ct.trustedTypes,Dr=no?no.emptyScript:"",_e=ct.reactiveElementPolyfillSupport,Ht=(e,t)=>e,se={toAttribute(e,t){switch(t){case Boolean:e=e?Dr:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=e!==null;break;case Number:o=e===null?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch{o=null}}return o}},qe=(e,t)=>!Pr(e,t),ao={attribute:!0,type:String,converter:se,reflect:!1,useDefault:!1,hasChanged:qe};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ct.litPropertyMetadata??(ct.litPropertyMetadata=new WeakMap);let Ct=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,o=ao){if(o.state&&(o.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((o=Object.create(o)).wrapped=!0),this.elementProperties.set(t,o),!o.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,o);i!==void 0&&Or(this.prototype,t,i)}}static getPropertyDescriptor(t,o,r){const{get:i,set:s}=Lr(this.prototype,t)??{get(){return this[o]},set(n){this[o]=n}};return{get:i,set(n){const a=i==null?void 0:i.call(this);s==null||s.call(this,n),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ao}static _$Ei(){if(this.hasOwnProperty(Ht("elementProperties")))return;const t=Mr(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Ht("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ht("properties"))){const o=this.properties,r=[...Rr(o),...Tr(o)];for(const i of r)this.createProperty(i,o[i])}const t=this[Symbol.metadata];if(t!==null){const o=litPropertyMetadata.get(t);if(o!==void 0)for(const[r,i]of o)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[o,r]of this.elementProperties){const i=this._$Eu(o,r);i!==void 0&&this._$Eh.set(i,o)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const o=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)o.unshift(so(i))}else t!==void 0&&o.push(so(t));return o}static _$Eu(t,o){const r=o.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(o=>this.enableUpdating=o),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(o=>o(this))}addController(t){var o;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)==null||o.call(t))}removeController(t){var o;(o=this._$EO)==null||o.delete(t)}_$E_(){const t=new Map,o=this.constructor.elementProperties;for(const r of o.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return zr(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(o=>{var r;return(r=o.hostConnected)==null?void 0:r.call(o)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(o=>{var r;return(r=o.hostDisconnected)==null?void 0:r.call(o)})}attributeChangedCallback(t,o,r){this._$AK(t,r)}_$ET(t,o){var s;const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){const n=(((s=r.converter)==null?void 0:s.toAttribute)!==void 0?r.converter:se).toAttribute(o,r.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,o){var s,n;const r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const a=r.getPropertyOptions(i),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((s=a.converter)==null?void 0:s.fromAttribute)!==void 0?a.converter:se;this._$Em=i;const c=l.fromAttribute(o,a.type);this[i]=c??((n=this._$Ej)==null?void 0:n.get(i))??c,this._$Em=null}}requestUpdate(t,o,r,i=!1,s){var n;if(t!==void 0){const a=this.constructor;if(i===!1&&(s=this[t]),r??(r=a.getPropertyOptions(t)),!((r.hasChanged??qe)(s,o)||r.useDefault&&r.reflect&&s===((n=this._$Ej)==null?void 0:n.get(t))&&!this.hasAttribute(a._$Eu(t,r))))return;this.C(t,o,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,o,{useDefault:r,reflect:i,wrapped:s},n){r&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,n??o??this[t]),s!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(o=void 0),this._$AL.set(t,o)),i===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(o){Promise.reject(o)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,n]of this._$Ep)this[s]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,n]of i){const{wrapped:a}=n,l=this[s];a!==!0||this._$AL.has(s)||l===void 0||this.C(s,void 0,n,l)}}let t=!1;const o=this._$AL;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),(r=this._$EO)==null||r.forEach(i=>{var s;return(s=i.hostUpdate)==null?void 0:s.call(i)}),this.update(o)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(o)}willUpdate(t){}_$AE(t){var o;(o=this._$EO)==null||o.forEach(r=>{var i;return(i=r.hostUpdated)==null?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(o=>this._$ET(o,this[o]))),this._$EM()}updated(t){}firstUpdated(t){}};Ct.elementStyles=[],Ct.shadowRootOptions={mode:"open"},Ct[Ht("elementProperties")]=new Map,Ct[Ht("finalized")]=new Map,_e==null||_e({ReactiveElement:Ct}),(ct.reactiveElementVersions??(ct.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vt=globalThis,lo=e=>e,ne=Vt.trustedTypes,co=ne?ne.createPolicy("lit-html",{createHTML:e=>e}):void 0,Fo="$lit$",lt=`lit$${Math.random().toFixed(9).slice(2)}$`,No="?"+lt,Br=`<${No}>`,xt=document,Wt=()=>xt.createComment(""),qt=e=>e===null||typeof e!="object"&&typeof e!="function",Ye=Array.isArray,Fr=e=>Ye(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",$e=`[ 	
\f\r]`,Dt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ho=/-->/g,uo=/>/g,mt=RegExp(`>|${$e}(?:([^\\s"'>=/]+)(${$e}*=${$e}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),po=/'/g,fo=/"/g,Io=/^(?:script|style|textarea|title)$/i,Nr=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),w=Nr(1),_t=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),mo=new WeakMap,yt=xt.createTreeWalker(xt,129);function Uo(e,t){if(!Ye(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return co!==void 0?co.createHTML(t):t}const Ir=(e,t)=>{const o=e.length-1,r=[];let i,s=t===2?"<svg>":t===3?"<math>":"",n=Dt;for(let a=0;a<o;a++){const l=e[a];let c,h,u=-1,m=0;for(;m<l.length&&(n.lastIndex=m,h=n.exec(l),h!==null);)m=n.lastIndex,n===Dt?h[1]==="!--"?n=ho:h[1]!==void 0?n=uo:h[2]!==void 0?(Io.test(h[2])&&(i=RegExp("</"+h[2],"g")),n=mt):h[3]!==void 0&&(n=mt):n===mt?h[0]===">"?(n=i??Dt,u=-1):h[1]===void 0?u=-2:(u=n.lastIndex-h[2].length,c=h[1],n=h[3]===void 0?mt:h[3]==='"'?fo:po):n===fo||n===po?n=mt:n===ho||n===uo?n=Dt:(n=mt,i=void 0);const p=n===mt&&e[a+1].startsWith("/>")?" ":"";s+=n===Dt?l+Br:u>=0?(r.push(c),l.slice(0,u)+Fo+l.slice(u)+lt+p):l+lt+(u===-2?a:p)}return[Uo(e,s+(e[o]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class Yt{constructor({strings:t,_$litType$:o},r){let i;this.parts=[];let s=0,n=0;const a=t.length-1,l=this.parts,[c,h]=Ir(t,o);if(this.el=Yt.createElement(c,r),yt.currentNode=this.el.content,o===2||o===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=yt.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const u of i.getAttributeNames())if(u.endsWith(Fo)){const m=h[n++],p=i.getAttribute(u).split(lt),g=/([.?@])?(.*)/.exec(m);l.push({type:1,index:s,name:g[2],strings:p,ctor:g[1]==="."?Hr:g[1]==="?"?Vr:g[1]==="@"?jr:pe}),i.removeAttribute(u)}else u.startsWith(lt)&&(l.push({type:6,index:s}),i.removeAttribute(u));if(Io.test(i.tagName)){const u=i.textContent.split(lt),m=u.length-1;if(m>0){i.textContent=ne?ne.emptyScript:"";for(let p=0;p<m;p++)i.append(u[p],Wt()),yt.nextNode(),l.push({type:2,index:++s});i.append(u[m],Wt())}}}else if(i.nodeType===8)if(i.data===No)l.push({type:2,index:s});else{let u=-1;for(;(u=i.data.indexOf(lt,u+1))!==-1;)l.push({type:7,index:s}),u+=lt.length-1}s++}}static createElement(t,o){const r=xt.createElement("template");return r.innerHTML=t,r}}function Pt(e,t,o=e,r){var n,a;if(t===_t)return t;let i=r!==void 0?(n=o._$Co)==null?void 0:n[r]:o._$Cl;const s=qt(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==s&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),s===void 0?i=void 0:(i=new s(e),i._$AT(e,o,r)),r!==void 0?(o._$Co??(o._$Co=[]))[r]=i:o._$Cl=i),i!==void 0&&(t=Pt(e,i._$AS(e,t.values),i,r)),t}class Ur{constructor(t,o){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=o}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:o},parts:r}=this._$AD,i=((t==null?void 0:t.creationScope)??xt).importNode(o,!0);yt.currentNode=i;let s=yt.nextNode(),n=0,a=0,l=r[0];for(;l!==void 0;){if(n===l.index){let c;l.type===2?c=new Xt(s,s.nextSibling,this,t):l.type===1?c=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(c=new Wr(s,this,t)),this._$AV.push(c),l=r[++a]}n!==(l==null?void 0:l.index)&&(s=yt.nextNode(),n++)}return yt.currentNode=xt,i}p(t){let o=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,o),o+=r.strings.length-2):r._$AI(t[o])),o++}}class Xt{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,o,r,i){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=o,this._$AM=r,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const o=this._$AM;return o!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=o.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,o=this){t=Pt(this,t,o),qt(t)?t===E||t==null||t===""?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==_t&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Fr(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==E&&qt(this._$AH)?this._$AA.nextSibling.data=t:this.T(xt.createTextNode(t)),this._$AH=t}$(t){var s;const{values:o,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Yt.createElement(Uo(r.h,r.h[0]),this.options)),r);if(((s=this._$AH)==null?void 0:s._$AD)===i)this._$AH.p(o);else{const n=new Ur(i,this),a=n.u(this.options);n.p(o),this.T(a),this._$AH=n}}_$AC(t){let o=mo.get(t.strings);return o===void 0&&mo.set(t.strings,o=new Yt(t)),o}k(t){Ye(this._$AH)||(this._$AH=[],this._$AR());const o=this._$AH;let r,i=0;for(const s of t)i===o.length?o.push(r=new Xt(this.O(Wt()),this.O(Wt()),this,this.options)):r=o[i],r._$AI(s),i++;i<o.length&&(this._$AR(r&&r._$AB.nextSibling,i),o.length=i)}_$AR(t=this._$AA.nextSibling,o){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,o);t!==this._$AB;){const i=lo(t).nextSibling;lo(t).remove(),t=i}}setConnected(t){var o;this._$AM===void 0&&(this._$Cv=t,(o=this._$AP)==null||o.call(this,t))}}class pe{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,o,r,i,s){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=o,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=E}_$AI(t,o=this,r,i){const s=this.strings;let n=!1;if(s===void 0)t=Pt(this,t,o,0),n=!qt(t)||t!==this._$AH&&t!==_t,n&&(this._$AH=t);else{const a=t;let l,c;for(t=s[0],l=0;l<s.length-1;l++)c=Pt(this,a[r+l],o,l),c===_t&&(c=this._$AH[l]),n||(n=!qt(c)||c!==this._$AH[l]),c===E?t=E:t!==E&&(t+=(c??"")+s[l+1]),this._$AH[l]=c}n&&!i&&this.j(t)}j(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Hr extends pe{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===E?void 0:t}}class Vr extends pe{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==E)}}class jr extends pe{constructor(t,o,r,i,s){super(t,o,r,i,s),this.type=5}_$AI(t,o=this){if((t=Pt(this,t,o,0)??E)===_t)return;const r=this._$AH,i=t===E&&r!==E||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==E&&(r===E||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var o;typeof this._$AH=="function"?this._$AH.call(((o=this.options)==null?void 0:o.host)??this.element,t):this._$AH.handleEvent(t)}}class Wr{constructor(t,o,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=o,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Pt(this,t)}}const ke=Vt.litHtmlPolyfillSupport;ke==null||ke(Yt,Xt),(Vt.litHtmlVersions??(Vt.litHtmlVersions=[])).push("3.3.2");const qr=(e,t,o)=>{const r=(o==null?void 0:o.renderBefore)??t;let i=r._$litPart$;if(i===void 0){const s=(o==null?void 0:o.renderBefore)??null;r._$litPart$=i=new Xt(t.insertBefore(Wt(),s),s,void 0,o??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wt=globalThis;let M=class extends Ct{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var o;const t=super.createRenderRoot();return(o=this.renderOptions).renderBefore??(o.renderBefore=t.firstChild),t}update(t){const o=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=qr(o,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return _t}};var To;M._$litElement$=!0,M.finalized=!0,(To=wt.litElementHydrateSupport)==null||To.call(wt,{LitElement:M});const Ae=wt.litElementPolyfillSupport;Ae==null||Ae({LitElement:M});(wt.litElementVersions??(wt.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yr={ATTRIBUTE:1},Kr=e=>(...t)=>({_$litDirective$:e,values:t});let Xr=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,o,r){this._$Ct=t,this._$AM=o,this._$Ci=r}_$AS(t,o){return this.update(t,o)}update(t,o){return this.render(...o)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt=Kr(class extends Xr{constructor(e){var t;if(super(e),e.type!==Yr.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,i;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!((r=this.nt)!=null&&r.has(s))&&this.st.add(s);return this.render(t)}const o=e.element.classList;for(const s of this.st)s in t||(o.remove(s),this.st.delete(s));for(const s in t){const n=!!t[s];n===this.st.has(s)||(i=this.nt)!=null&&i.has(s)||(n?(o.add(s),this.st.add(s)):(o.remove(s),this.st.delete(s)))}return _t}});var Gr=z`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,Zr={name:"default",resolver:e=>br(`assets/icons/${e}.svg`)},Jr=Zr,go={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},Qr={name:"system",resolver:e=>e in go?`data:image/svg+xml,${encodeURIComponent(go[e])}`:""},ti=Qr,ei=[Jr,ti],Me=[];function oi(e){Me.push(e)}function ri(e){Me=Me.filter(t=>t!==e)}function bo(e){return ei.find(t=>t.name===e)}var ii=z`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;function rt(e,t){const o=kt({waitUntilFirstUpdate:!1},t);return(r,i)=>{const{update:s}=r,n=Array.isArray(e)?e:[e];r.update=function(a){n.forEach(l=>{const c=l;if(a.has(c)){const h=a.get(c),u=this[c];h!==u&&(!o.waitUntilFirstUpdate||this.hasUpdated)&&this[i](h,u)}}),s.call(this,a)}}}var it=z`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const si={attribute:!0,type:String,converter:se,reflect:!1,hasChanged:qe},ni=(e=si,t,o)=>{const{kind:r,metadata:i}=o;let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(o.name,e),r==="accessor"){const{name:n}=o;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,l,e,!0,a)},init(a){return a!==void 0&&this.C(n,void 0,e,a),a}}}if(r==="setter"){const{name:n}=o;return function(a){const l=this[n];t.call(this,a),this.requestUpdate(n,l,e,!0,a)}}throw Error("Unsupported decorator location: "+r)};function f(e){return(t,o)=>typeof o=="object"?ni(e,t,o):((r,i,s)=>{const n=i.hasOwnProperty(s);return i.constructor.createProperty(s,r),n?Object.getOwnPropertyDescriptor(i,s):void 0})(e,t,o)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function fe(e){return f({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ai=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,o),o);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function J(e,t){return(o,r,i)=>{const s=n=>{var a;return((a=n.renderRoot)==null?void 0:a.querySelector(e))??null};return ai(o,r,{get(){return s(this)}})}}var oe,N=class extends M{constructor(){super(),kr(this,oe,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const o=new CustomEvent(e,kt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(o),o}static define(e,t=this,o={}){const r=customElements.get(e);if(!r){try{customElements.define(e,t,o)}catch{customElements.define(e,class extends t{},o)}return}let i=" (unknown version)",s=i;"version"in t&&t.version&&(i=" v"+t.version),"version"in r&&r.version&&(s=" v"+r.version),!(i&&s&&i===s)&&console.warn(`Attempted to register <${e}>${i}, but <${e}>${s} has already been registered.`)}attributeChangedCallback(e,t,o){$r(this,oe)||(this.constructor.elementProperties.forEach((r,i)=>{r.reflect&&this[i]!=null&&this.initialReflectedProperties.set(i,this[i])}),Ar(this,oe,!0)),super.attributeChangedCallback(e,t,o)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,o)=>{e.has(o)&&this[o]==null&&(this[o]=t)})}};oe=new WeakMap;N.version="2.20.1";N.dependencies={};d([f()],N.prototype,"dir",2);d([f()],N.prototype,"lang",2);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const li=(e,t)=>(e==null?void 0:e._$litType$)!==void 0;var Bt=Symbol(),Jt=Symbol(),Ce,Se=new Map,Y=class extends N{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var o;let r;if(t!=null&&t.spriteSheet)return this.svg=w`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,this.svg;try{if(r=await fetch(e,{mode:"cors"}),!r.ok)return r.status===410?Bt:Jt}catch{return Jt}try{const i=document.createElement("div");i.innerHTML=await r.text();const s=i.firstElementChild;if(((o=s==null?void 0:s.tagName)==null?void 0:o.toLowerCase())!=="svg")return Bt;Ce||(Ce=new DOMParser);const a=Ce.parseFromString(s.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):Bt}catch{return Bt}}connectedCallback(){super.connectedCallback(),oi(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),ri(this)}getIconSource(){const e=bo(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:o}=this.getIconSource(),r=o?bo(this.library):void 0;if(!t){this.svg=null;return}let i=Se.get(t);if(i||(i=this.resolveIcon(t,r),Se.set(t,i)),!this.initialRender)return;const s=await i;if(s===Jt&&Se.delete(t),t===this.getIconSource().url){if(li(s)){if(this.svg=s,r){await this.updateComplete;const n=this.shadowRoot.querySelector("[part='svg']");typeof r.mutator=="function"&&n&&r.mutator(n)}return}switch(s){case Jt:case Bt:this.svg=null,this.emit("sl-error");break;default:this.svg=s.cloneNode(!0),(e=r==null?void 0:r.mutator)==null||e.call(r,this.svg),this.emit("sl-load")}}}render(){return this.svg}};Y.styles=[it,ii];d([fe()],Y.prototype,"svg",2);d([f({reflect:!0})],Y.prototype,"name",2);d([f()],Y.prototype,"src",2);d([f()],Y.prototype,"label",2);d([f({reflect:!0})],Y.prototype,"library",2);d([rt("label")],Y.prototype,"handleLabelChange",1);d([rt(["name","src","library"])],Y.prototype,"setIcon",1);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ho=Symbol.for(""),ci=e=>{if((e==null?void 0:e.r)===Ho)return e==null?void 0:e._$litStatic$},ae=(e,...t)=>({_$litStatic$:t.reduce((o,r,i)=>o+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+e[i+1],e[0]),r:Ho}),vo=new Map,di=e=>(t,...o)=>{const r=o.length;let i,s;const n=[],a=[];let l,c=0,h=!1;for(;c<r;){for(l=t[c];c<r&&(s=o[c],(i=ci(s))!==void 0);)l+=i+t[++c],h=!0;c!==r&&a.push(s),n.push(l),c++}if(c===r&&n.push(t[r]),h){const u=n.join("$$lit$$");(t=vo.get(u))===void 0&&(n.raw=n,vo.set(u,t=n)),o=a}return e(t,...o)},re=di(w);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=e=>e??E;var T=class extends N{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?ae`a`:ae`button`;return re`
      <${t}
        part="base"
        class=${dt({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${C(e?void 0:this.disabled)}
        type=${C(e?void 0:"button")}
        href=${C(e?this.href:void 0)}
        target=${C(e?this.target:void 0)}
        download=${C(e?this.download:void 0)}
        rel=${C(e&&this.target?"noreferrer noopener":void 0)}
        role=${C(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${C(this.name)}
          library=${C(this.library)}
          src=${C(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};T.styles=[it,Gr];T.dependencies={"sl-icon":Y};d([J(".icon-button")],T.prototype,"button",2);d([fe()],T.prototype,"hasFocus",2);d([f()],T.prototype,"name",2);d([f()],T.prototype,"library",2);d([f()],T.prototype,"src",2);d([f()],T.prototype,"href",2);d([f()],T.prototype,"target",2);d([f()],T.prototype,"download",2);d([f()],T.prototype,"label",2);d([f({type:Boolean,reflect:!0})],T.prototype,"disabled",2);T.define("sl-icon-button");var hi=z`
  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;function*Ke(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*Sr(Ke(e.shadowRoot.activeElement))))}function ui(){return[...Ke()].pop()}var yo=new WeakMap;function Vo(e){let t=yo.get(e);return t||(t=window.getComputedStyle(e,null),yo.set(e,t)),t}function pi(e){if(typeof e.checkVisibility=="function")return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const t=Vo(e);return t.visibility!=="hidden"&&t.display!=="none"}function fi(e){const t=Vo(e),{overflowY:o,overflowX:r}=t;return o==="scroll"||r==="scroll"?!0:o!=="auto"||r!=="auto"?!1:e.scrollHeight>e.clientHeight&&o==="auto"||e.scrollWidth>e.clientWidth&&r==="auto"}function mi(e){const t=e.tagName.toLowerCase(),o=Number(e.getAttribute("tabindex"));if(e.hasAttribute("tabindex")&&(isNaN(o)||o<=-1)||e.hasAttribute("disabled")||e.closest("[inert]"))return!1;if(t==="input"&&e.getAttribute("type")==="radio"){const s=e.getRootNode(),n=`input[type='radio'][name="${e.getAttribute("name")}"]`,a=s.querySelector(`${n}:checked`);return a?a===e:s.querySelector(n)===e}return pi(e)?(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)?!0:fi(e):!1}function gi(e,t){var o;return((o=e.getRootNode({composed:!0}))==null?void 0:o.host)!==t}function wo(e){const t=new WeakMap,o=[];function r(i){if(i instanceof Element){if(i.hasAttribute("inert")||i.closest("[inert]")||t.has(i))return;t.set(i,!0),!o.includes(i)&&mi(i)&&o.push(i),i instanceof HTMLSlotElement&&gi(i,e)&&i.assignedElements({flatten:!0}).forEach(s=>{r(s)}),i.shadowRoot!==null&&i.shadowRoot.mode==="open"&&r(i.shadowRoot)}for(const s of i.children)r(s)}return r(e),o.sort((i,s)=>{const n=Number(i.getAttribute("tabindex"))||0;return(Number(s.getAttribute("tabindex"))||0)-n})}var Ft=[],bi=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=t=>{var o;if(t.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const r=ui();if(this.previousFocus=r,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const i=wo(this.element);let s=i.findIndex(a=>a===r);this.previousFocus=this.currentFocus;const n=this.tabDirection==="forward"?1:-1;for(;;){s+n>=i.length?s=0:s+n<0?s=i.length-1:s+=n,this.previousFocus=this.currentFocus;const a=i[s];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||a&&this.possiblyHasTabbableChildren(a))return;t.preventDefault(),this.currentFocus=a,(o=this.currentFocus)==null||o.focus({preventScroll:!1});const l=[...Ke()];if(l.includes(this.currentFocus)||!l.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e,this.elementsWithTabbableControls=["iframe"]}activate(){Ft.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Ft=Ft.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Ft[Ft.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=wo(this.element);if(!this.element.matches(":focus-within")){const t=e[0],o=e[e.length-1],r=this.tabDirection==="forward"?t:o;typeof(r==null?void 0:r.focus)=="function"&&(this.currentFocus=r,r.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(e){return this.elementsWithTabbableControls.includes(e.tagName.toLowerCase())||e.hasAttribute("controls")}},De=new Set;function vi(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function yi(){const e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(e)||!e?0:e}function Ee(e){if(De.add(e),!document.documentElement.classList.contains("sl-scroll-lock")){const t=vi()+yi();let o=getComputedStyle(document.documentElement).scrollbarGutter;(!o||o==="auto")&&(o="stable"),t<2&&(o=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",o),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function ze(e){De.delete(e),De.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}var wi=e=>{var t;const{activeElement:o}=document;o&&e.contains(o)&&((t=document.activeElement)==null||t.blur())},jo=new Map,xi=new WeakMap;function _i(e){return e??{keyframes:[],options:{duration:0}}}function xo(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function I(e,t){jo.set(e,_i(t))}function gt(e,t,o){const r=xi.get(e);if(r!=null&&r[t])return xo(r[t],o.dir);const i=jo.get(t);return i?xo(i,o.dir):{keyframes:[],options:{duration:0}}}function le(e,t){return new Promise(o=>{function r(i){i.target===e&&(e.removeEventListener(t,r),o())}e.addEventListener(t,r)})}function bt(e,t,o){return new Promise(r=>{if((o==null?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const i=e.animate(t,ue(kt({},o),{duration:$i()?0:o.duration}));i.addEventListener("cancel",r,{once:!0}),i.addEventListener("finish",r,{once:!0})})}function _o(e){return e=e.toString().toLowerCase(),e.indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?parseFloat(e)*1e3:parseFloat(e)}function $i(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function St(e){return Promise.all(e.getAnimations().map(t=>new Promise(o=>{t.cancel(),requestAnimationFrame(o)})))}var Wo=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=o=>{const r=o.target;(this.slotNames.includes("[default]")&&!r.name||r.name&&this.slotNames.includes(r.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};const Be=new Set,Et=new Map;let vt,Xe="ltr",Ge="en";const qo=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(qo){const e=new MutationObserver(Ko);Xe=document.documentElement.dir||"ltr",Ge=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Yo(...e){e.map(t=>{const o=t.$code.toLowerCase();Et.has(o)?Et.set(o,Object.assign(Object.assign({},Et.get(o)),t)):Et.set(o,t),vt||(vt=t)}),Ko()}function Ko(){qo&&(Xe=document.documentElement.dir||"ltr",Ge=document.documentElement.lang||navigator.language),[...Be.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let ki=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){Be.add(this.host)}hostDisconnected(){Be.delete(this.host)}dir(){return`${this.host.dir||Xe}`.toLowerCase()}lang(){return`${this.host.lang||Ge}`.toLowerCase()}getTranslationData(t){var o,r;const i=new Intl.Locale(t.replace(/_/g,"-")),s=i==null?void 0:i.language.toLowerCase(),n=(r=(o=i==null?void 0:i.region)===null||o===void 0?void 0:o.toLowerCase())!==null&&r!==void 0?r:"",a=Et.get(`${s}-${n}`),l=Et.get(s);return{locale:i,language:s,region:n,primary:a,secondary:l}}exists(t,o){var r;const{primary:i,secondary:s}=this.getTranslationData((r=o.lang)!==null&&r!==void 0?r:this.lang());return o=Object.assign({includeFallback:!1},o),!!(i&&i[t]||s&&s[t]||o.includeFallback&&vt&&vt[t])}term(t,...o){const{primary:r,secondary:i}=this.getTranslationData(this.lang());let s;if(r&&r[t])s=r[t];else if(i&&i[t])s=i[t];else if(vt&&vt[t])s=vt[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof s=="function"?s(...o):s}date(t,o){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),o).format(t)}number(t,o){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),o).format(t)}relativeTime(t,o,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(t,o)}};var Xo={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};Yo(Xo);var Ai=Xo,Lt=class extends ki{};Yo(Ai);function $o(e){return e.charAt(0).toUpperCase()+e.slice(1)}var U=class extends N{constructor(){super(...arguments),this.hasSlotController=new Wo(this,"footer"),this.localize=new Lt(this),this.modal=new bi(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=e=>{this.contained||e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),Ee(this)))}disconnectedCallback(){super.disconnectedCallback(),ze(this),this.removeOpenListeners()}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const o=gt(this,"drawer.denyClose",{dir:this.localize.dir()});bt(this.panel,o.keyframes,o.options);return}this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;document.removeEventListener("keydown",this.handleDocumentKeyDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),Ee(this));const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([St(this.drawer),St(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=gt(this,`drawer.show${$o(this.placement)}`,{dir:this.localize.dir()}),o=gt(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([bt(this.panel,t.keyframes,t.options),bt(this.overlay,o.keyframes,o.options)]),this.emit("sl-after-show")}else{wi(this),this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),ze(this)),await Promise.all([St(this.drawer),St(this.overlay)]);const e=gt(this,`drawer.hide${$o(this.placement)}`,{dir:this.localize.dir()}),t=gt(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([bt(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),bt(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const o=this.originalTrigger;typeof(o==null?void 0:o.focus)=="function"&&setTimeout(()=>o.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),Ee(this)),this.open&&this.contained&&(this.modal.deactivate(),ze(this))}async show(){if(!this.open)return this.open=!0,le(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,le(this,"sl-after-hide")}render(){return w`
      <div
        part="base"
        class=${dt({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${C(this.noHeader?this.label:void 0)}
          aria-labelledby=${C(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":w`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};U.styles=[it,hi];U.dependencies={"sl-icon-button":T};d([J(".drawer")],U.prototype,"drawer",2);d([J(".drawer__panel")],U.prototype,"panel",2);d([J(".drawer__overlay")],U.prototype,"overlay",2);d([f({type:Boolean,reflect:!0})],U.prototype,"open",2);d([f({reflect:!0})],U.prototype,"label",2);d([f({reflect:!0})],U.prototype,"placement",2);d([f({type:Boolean,reflect:!0})],U.prototype,"contained",2);d([f({attribute:"no-header",type:Boolean,reflect:!0})],U.prototype,"noHeader",2);d([rt("open",{waitUntilFirstUpdate:!0})],U.prototype,"handleOpenChange",1);d([rt("contained",{waitUntilFirstUpdate:!0})],U.prototype,"handleNoModalChange",1);I("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});I("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});I("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});I("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});I("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});I("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});I("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});I("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});I("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});I("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});I("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});U.define("sl-drawer");const ko=[{id:"about",label:"About"},{id:"skills",label:"Skills"},{id:"projects",label:"Projects"},{id:"experience",label:"Experience"},{id:"contact",label:"Contact"}];class Fe extends M{constructor(){super(),this._pastHero=!1,this._scrolled=!1,this._activeSection="",this._drawerOpen=!1,this._onScroll=this._onScroll.bind(this)}connectedCallback(){super.connectedCallback(),window.addEventListener("scroll",this._onScroll,{passive:!0}),this._sectionObserver=new IntersectionObserver(t=>{t.forEach(o=>{o.isIntersecting&&(this._activeSection=o.target.id)})},{rootMargin:"-20% 0px -70% 0px"}),requestAnimationFrame(()=>{document.querySelectorAll("section[id]").forEach(t=>{this._sectionObserver.observe(t)})})}disconnectedCallback(){var t;super.disconnectedCallback(),window.removeEventListener("scroll",this._onScroll),(t=this._sectionObserver)==null||t.disconnect()}_onScroll(){requestAnimationFrame(()=>{this._pastHero=window.scrollY>window.innerHeight*.8,this._scrolled=window.scrollY>50})}_handleNavClick(t){t.preventDefault();const o=t.currentTarget.getAttribute("href").substring(1),r=document.getElementById(o);if(r){const s=r.getBoundingClientRect().top+window.scrollY-64;window.scrollTo({top:s,behavior:"smooth"})}}_handleMobileNavClick(t){this._handleNavClick(t),this._drawerOpen=!1}render(){const t={visible:this._pastHero,scrolled:this._scrolled};return w`
      <nav class=${dt(t)}>
        <div class="nav-inner">
          <a href="#hero" class="nav-logo" @click=${this._handleNavClick}>
            <span class="monogram">HM</span>
          </a>
          <div class="nav-links">
            ${ko.map(o=>w`
                <a
                  href="#${o.id}"
                  class=${o.id===this._activeSection?"active":""}
                  @click=${this._handleNavClick}
                >${o.label}</a>
              `)}
          </div>
          <sl-icon-button
            class="mobile-menu"
            name="list"
            label="Menu"
            @click=${()=>this._drawerOpen=!0}
          ></sl-icon-button>
        </div>
      </nav>

      <sl-drawer
        label="Navigation"
        placement="end"
        ?open=${this._drawerOpen}
        @sl-after-hide=${()=>this._drawerOpen=!1}
      >
        ${ko.map(o=>w`
            <a href="#${o.id}" class="drawer-link" @click=${this._handleMobileNavClick}>
              ${o.label}
            </a>
          `)}
      </sl-drawer>
    `}}D(Fe,"properties",{_pastHero:{type:Boolean,state:!0},_scrolled:{type:Boolean,state:!0},_activeSection:{type:String,state:!0},_drawerOpen:{type:Boolean,state:!0}}),D(Fe,"styles",z`
    :host {
      display: block;
    }

    nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: var(--z-nav, 100);
      transform: translateY(-100%);
      transition: transform var(--transition-normal), background var(--transition-normal);
      background: transparent;
    }

    nav.visible {
      transform: translateY(0);
    }

    nav.scrolled {
      background: rgba(10, 10, 15, 0.85);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--border);
    }

    .nav-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: var(--space-2) var(--space-4);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .nav-logo {
      text-decoration: none;
      color: var(--text-primary);
    }

    .monogram {
      font-family: var(--font-mono);
      font-weight: 700;
      font-size: 1.2rem;
      color: var(--accent);
    }

    .nav-links {
      display: flex;
      gap: var(--space-1);
    }

    .nav-links a {
      color: var(--text-secondary);
      text-decoration: none;
      font-size: 0.9rem;
      padding: var(--space-1) var(--space-2);
      border-radius: var(--radius-sm);
      transition: color var(--transition-fast), background var(--transition-fast);
    }

    .nav-links a:hover,
    .nav-links a.active {
      color: var(--accent);
    }

    .mobile-menu {
      display: none;
    }

    sl-drawer::part(body) {
      display: flex;
      flex-direction: column;
      gap: var(--space-2);
      padding: var(--space-4);
    }

    .drawer-link {
      color: var(--text-primary);
      text-decoration: none;
      font-size: 1.1rem;
      padding: var(--space-2);
      border-radius: var(--radius-sm);
      transition: color var(--transition-fast);
    }

    .drawer-link:hover {
      color: var(--accent);
    }

    @media (max-width: 768px) {
      .nav-links {
        display: none;
      }
      .mobile-menu {
        display: block;
      }
    }
  `);customElements.define("portfolio-nav",Fe);var Ci=z`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`,Go=class extends N{constructor(){super(...arguments),this.localize=new Lt(this)}render(){return w`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Go.styles=[it,Ci];var Nt=new WeakMap,It=new WeakMap,Ut=new WeakMap,Pe=new WeakSet,Qt=new WeakMap,Si=class{constructor(e,t){this.handleFormData=o=>{const r=this.options.disabled(this.host),i=this.options.name(this.host),s=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!r&&!n&&typeof i=="string"&&i.length>0&&typeof s<"u"&&(Array.isArray(s)?s.forEach(a=>{o.formData.append(i,a.toString())}):o.formData.append(i,s.toString()))},this.handleFormSubmit=o=>{var r;const i=this.options.disabled(this.host),s=this.options.reportValidity;this.form&&!this.form.noValidate&&((r=Nt.get(this.form))==null||r.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!i&&!s(this.host)&&(o.preventDefault(),o.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Qt.set(this.host,[])},this.handleInteraction=o=>{const r=Qt.get(this.host);r.includes(o.type)||r.push(o.type),r.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const r of o)if(typeof r.checkValidity=="function"&&!r.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const r of o)if(typeof r.reportValidity=="function"&&!r.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=kt({form:o=>{const r=o.form;if(r){const s=o.getRootNode().querySelector(`#${r}`);if(s)return s}return o.closest("form")},name:o=>o.name,value:o=>o.value,defaultValue:o=>o.defaultValue,disabled:o=>{var r;return(r=o.disabled)!=null?r:!1},reportValidity:o=>typeof o.reportValidity=="function"?o.reportValidity():!0,checkValidity:o=>typeof o.checkValidity=="function"?o.checkValidity():!0,setValue:(o,r)=>o.value=r,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),Qt.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Qt.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,Nt.has(this.form)?Nt.get(this.form).add(this.host):Nt.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),It.has(this.form)||(It.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Ut.has(this.form)||(Ut.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=Nt.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),It.has(this.form)&&(this.form.reportValidity=It.get(this.form),It.delete(this.form)),Ut.has(this.form)&&(this.form.checkValidity=Ut.get(this.form),Ut.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?Pe.add(e):Pe.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const o=document.createElement("button");o.type=e,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",t&&(o.name=t.name,o.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(r=>{t.hasAttribute(r)&&o.setAttribute(r,t.getAttribute(r))})),this.form.append(o),o.click(),o.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,o=!!Pe.has(t),r=!!t.required;t.toggleAttribute("data-required",r),t.toggleAttribute("data-optional",!r),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&o),t.toggleAttribute("data-user-valid",e&&o)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e==null||e.preventDefault()}},Ze=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(ue(kt({},Ze),{valid:!1,valueMissing:!0}));Object.freeze(ue(kt({},Ze),{valid:!1,customError:!0}));var Ei=z`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`,_=class extends N{constructor(){super(...arguments),this.formControlController=new Si(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new Wo(this,"[default]","prefix","suffix"),this.localize=new Lt(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Ze}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?ae`a`:ae`button`;return re`
      <${t}
        part="base"
        class=${dt({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${C(e?void 0:this.disabled)}
        type=${C(e?void 0:this.type)}
        title=${this.title}
        name=${C(e?void 0:this.name)}
        value=${C(e?void 0:this.value)}
        href=${C(e&&!this.disabled?this.href:void 0)}
        target=${C(e?this.target:void 0)}
        download=${C(e?this.download:void 0)}
        rel=${C(e?this.rel:void 0)}
        role=${C(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?re` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?re`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};_.styles=[it,Ei];_.dependencies={"sl-icon":Y,"sl-spinner":Go};d([J(".button")],_.prototype,"button",2);d([fe()],_.prototype,"hasFocus",2);d([fe()],_.prototype,"invalid",2);d([f()],_.prototype,"title",2);d([f({reflect:!0})],_.prototype,"variant",2);d([f({reflect:!0})],_.prototype,"size",2);d([f({type:Boolean,reflect:!0})],_.prototype,"caret",2);d([f({type:Boolean,reflect:!0})],_.prototype,"disabled",2);d([f({type:Boolean,reflect:!0})],_.prototype,"loading",2);d([f({type:Boolean,reflect:!0})],_.prototype,"outline",2);d([f({type:Boolean,reflect:!0})],_.prototype,"pill",2);d([f({type:Boolean,reflect:!0})],_.prototype,"circle",2);d([f()],_.prototype,"type",2);d([f()],_.prototype,"name",2);d([f()],_.prototype,"value",2);d([f()],_.prototype,"href",2);d([f()],_.prototype,"target",2);d([f()],_.prototype,"rel",2);d([f()],_.prototype,"download",2);d([f()],_.prototype,"form",2);d([f({attribute:"formaction"})],_.prototype,"formAction",2);d([f({attribute:"formenctype"})],_.prototype,"formEnctype",2);d([f({attribute:"formmethod"})],_.prototype,"formMethod",2);d([f({attribute:"formnovalidate",type:Boolean})],_.prototype,"formNoValidate",2);d([f({attribute:"formtarget"})],_.prototype,"formTarget",2);d([rt("disabled",{waitUntilFirstUpdate:!0})],_.prototype,"handleDisabledChange",1);_.define("sl-button");Y.define("sl-icon");class Ne extends M{constructor(){super(),this._typedName="",this._typedRole="",this._showTagline=!1,this._showCta=!1,this._fullName="Holden Morris",this._fullRole="Software Developer"}firstUpdated(){this._startMatrixRain(),this._startTyping()}disconnectedCallback(){super.disconnectedCallback(),this._animFrameId&&cancelAnimationFrame(this._animFrameId)}_startMatrixRain(){const t=this.renderRoot.querySelector("canvas");if(!t)return;const o=t.getContext("2d"),r=()=>{t.width=t.offsetWidth,t.height=t.offsetHeight};r(),window.addEventListener("resize",r);const i="{}[]<>()=>/;:.0123456789abcdef",s=14,n=Math.floor(t.width/20),a=new Array(n).fill(1),l=()=>{o.fillStyle="rgba(10, 10, 15, 0.05)",o.fillRect(0,0,t.width,t.height),o.fillStyle="rgba(99, 102, 241, 0.08)",o.font=`${s}px JetBrains Mono, monospace`;for(let c=0;c<a.length;c++){const h=i[Math.floor(Math.random()*i.length)];o.fillText(h,c*20,a[c]*s),a[c]*s>t.height&&Math.random()>.975&&(a[c]=0),a[c]++}this._animFrameId=requestAnimationFrame(l)};l()}_startTyping(){let t=0;const o=setInterval(()=>{t++,this._typedName=this._fullName.substring(0,t),t>=this._fullName.length&&(clearInterval(o),setTimeout(()=>this._typeRole(),200))},60)}_typeRole(){let t=0;const o=setInterval(()=>{t++,this._typedRole=this._fullRole.substring(0,t),t>=this._fullRole.length&&(clearInterval(o),setTimeout(()=>{this._showTagline=!0},400),setTimeout(()=>{this._showCta=!0},800))},50)}_scrollToProjects(){const t=document.getElementById("projects");t&&t.scrollIntoView({behavior:"smooth",block:"start"})}render(){return w`
      <section id="hero">
        <canvas aria-hidden="true"></canvas>
        <div class="hero-content">
          <p class="terminal-prefix">$ whoami</p>
          <h1>${this._typedName}<span class="cursor">_</span></h1>
          <p class="role">${this._typedRole}</p>
          <p class="tagline ${this._showTagline?"visible":""}">
            Building software since 1984 — forty-two years of turning ideas into running code.
          </p>
          <div class="hero-cta ${this._showCta?"visible":""}">
            <sl-button variant="primary" size="large" @click=${this._scrollToProjects}>
              View my work
              <sl-icon slot="suffix" name="arrow-down"></sl-icon>
            </sl-button>
            <sl-icon-button
              name="github"
              label="GitHub"
              style="font-size: 1.8rem;"
              href="https://github.com/HoldenMorris"
              target="_blank"
            ></sl-icon-button>
          </div>
        </div>
        <div class="scroll-indicator" aria-hidden="true">
          <sl-icon name="chevron-down"></sl-icon>
        </div>
      </section>
    `}}D(Ne,"properties",{_typedName:{type:String,state:!0},_typedRole:{type:String,state:!0},_showTagline:{type:Boolean,state:!0},_showCta:{type:Boolean,state:!0}}),D(Ne,"styles",z`
    :host {
      display: block;
      min-height: 100vh;
      position: relative;
      overflow: hidden;
    }

    canvas {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
    }

    .hero-content {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-height: 100vh;
      padding: var(--space-4);
      max-width: 900px;
      margin: 0 auto;
    }

    .hero-content::before {
      content: '';
      position: absolute;
      width: 600px;
      height: 600px;
      background: radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%);
      top: 50%;
      left: 30%;
      transform: translate(-50%, -50%);
      pointer-events: none;
    }

    .terminal-prefix {
      font-family: var(--font-mono);
      color: var(--accent);
      font-size: 1.1rem;
      margin-bottom: var(--space-1);
      opacity: 0;
      animation: fadeSlideUp 0.5s 0.3s forwards;
    }

    h1 {
      font-size: clamp(3rem, 8vw, 6rem);
      font-weight: 800;
      line-height: 1.05;
      margin: 0;
    }

    .cursor {
      color: var(--accent);
      animation: blink 1s step-end infinite;
    }

    .role {
      font-family: var(--font-mono);
      font-size: clamp(1.2rem, 3vw, 1.8rem);
      color: var(--text-secondary);
      margin-top: var(--space-1);
      min-height: 1.5em;
    }

    .tagline {
      font-size: clamp(1rem, 2vw, 1.3rem);
      color: var(--text-secondary);
      margin-top: var(--space-2);
      opacity: 0;
      transition: opacity 0.6s ease, transform 0.6s ease;
      transform: translateY(10px);
    }

    .tagline.visible {
      opacity: 1;
      transform: translateY(0);
    }

    .hero-cta {
      margin-top: var(--space-4);
      display: flex;
      gap: var(--space-2);
      align-items: center;
      opacity: 0;
      transition: opacity 0.6s ease, transform 0.6s ease;
      transform: translateY(10px);
    }

    .hero-cta.visible {
      opacity: 1;
      transform: translateY(0);
    }

    .scroll-indicator {
      position: absolute;
      bottom: var(--space-4);
      left: 50%;
      animation: bounce 2s infinite;
      color: var(--text-secondary);
      font-size: 1.5rem;
    }
  `);customElements.define("portfolio-hero",Ne);const Gt=e=>{var t;return t=class extends e{constructor(){super(),this._revealed=!1}connectedCallback(){super.connectedCallback(),this._observer=new IntersectionObserver(([o])=>{o.isIntersecting&&(this._revealed=!0,this._observer.disconnect())},{threshold:.15}),this._observer.observe(this)}disconnectedCallback(){var o;super.disconnectedCallback(),(o=this._observer)==null||o.disconnect()}updated(o){super.updated(o),o.has("_revealed")&&this._revealed&&this.classList.add("revealed")}},D(t,"properties",{...e.properties,_revealed:{type:Boolean,state:!0}}),t},jt={shortBio:"I wrote my first line of code at twelve. Four decades later, I'm still at it — architecting backends, crafting APIs, and leading teams that ship. Currently building at Synaq in Gauteng and co-running Abantu Digital on the side.",location:"Gauteng, South Africa",github:"https://github.com/HoldenMorris",linkedin:"https://www.linkedin.com/in/morrisholden",startYear:1984};class Zo extends Gt(M){constructor(){super(),this._yearsExp=new Date().getFullYear()-jt.startYear}render(){return w`
      <section id="about">
        <h2 class="section-heading">
          <span class="heading-accent">//</span> About Me
        </h2>
        <div class="about-grid">
          <div class="about-text">
            <p>${jt.shortBio}</p>
            <p class="location">
              <sl-icon name="geo-alt"></sl-icon>
              ${jt.location}
            </p>
          </div>
          <div class="about-stats">
            <div class="stat-card">
              <span class="stat-number">${this._yearsExp}</span>
              <span class="stat-suffix">+</span>
              <span class="stat-label">years coding</span>
            </div>
            <div class="stat-card">
              <span class="stat-number">1984</span>
              <span class="stat-label">first line of code</span>
            </div>
            <div class="stat-card">
              <span class="stat-number">2</span>
              <span class="stat-label">companies built</span>
            </div>
          </div>
        </div>
      </section>
    `}}D(Zo,"styles",z`
    :host {
      display: block;
      padding: var(--section-padding) var(--space-4);
      max-width: 1200px;
      margin: 0 auto;
      opacity: 0;
      transform: translateY(30px);
      transition: opacity var(--transition-slow), transform var(--transition-slow);
    }

    :host(.revealed) {
      opacity: 1;
      transform: translateY(0);
    }

    .section-heading {
      font-size: clamp(1.8rem, 4vw, 2.5rem);
      margin-bottom: var(--space-6);
    }

    .heading-accent {
      color: var(--accent);
      font-family: var(--font-mono);
    }

    .about-grid {
      display: grid;
      grid-template-columns: 1.5fr 1fr;
      gap: var(--space-8);
      align-items: start;
    }

    .about-text p {
      font-size: 1.1rem;
      line-height: 1.8;
      color: var(--text-secondary);
      margin-bottom: var(--space-3);
    }

    .location {
      display: flex;
      align-items: center;
      gap: var(--space-1);
      font-size: 0.95rem;
      color: var(--text-secondary);
    }

    .location sl-icon {
      color: var(--accent);
    }

    .about-stats {
      display: flex;
      flex-direction: column;
      gap: var(--space-3);
    }

    .stat-card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: var(--radius-md);
      padding: var(--space-3);
      text-align: center;
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }

    :host(.revealed) .stat-card {
      opacity: 1;
      transform: translateY(0);
    }

    :host(.revealed) .stat-card:nth-child(1) { transition-delay: 0ms; }
    :host(.revealed) .stat-card:nth-child(2) { transition-delay: 150ms; }
    :host(.revealed) .stat-card:nth-child(3) { transition-delay: 300ms; }

    .stat-number {
      font-size: 3rem;
      font-weight: 800;
      color: var(--accent);
      font-family: var(--font-mono);
      line-height: 1;
    }

    .stat-suffix {
      font-size: 2rem;
      font-weight: 800;
      color: var(--accent);
      font-family: var(--font-mono);
    }

    .stat-label {
      display: block;
      color: var(--text-secondary);
      font-size: 0.85rem;
      margin-top: var(--space-1);
    }

    @media (max-width: 768px) {
      .about-grid {
        grid-template-columns: 1fr;
        gap: var(--space-4);
      }

      .about-stats {
        flex-direction: row;
        flex-wrap: wrap;
      }

      .stat-card {
        flex: 1;
        min-width: 120px;
      }
    }
  `);customElements.define("portfolio-about",Zo);const zi=[{name:"Node.js",category:"runtime",proficiency:95},{name:"JavaScript",category:"language",proficiency:95},{name:"TypeScript",category:"language",proficiency:80},{name:"PHP",category:"language",proficiency:85},{name:"Python",category:"language",proficiency:70},{name:"SQL",category:"language",proficiency:85},{name:"Lit",category:"frontend",proficiency:80},{name:"Web Components",category:"frontend",proficiency:85},{name:"HTML/CSS",category:"frontend",proficiency:90},{name:"React",category:"frontend",proficiency:70},{name:"REST APIs",category:"backend",proficiency:95},{name:"Express",category:"backend",proficiency:90},{name:"Drupal",category:"backend",proficiency:85},{name:"PostgreSQL",category:"backend",proficiency:80},{name:"MongoDB",category:"backend",proficiency:75},{name:"Git",category:"devops",proficiency:90},{name:"Docker",category:"devops",proficiency:75},{name:"Linux",category:"devops",proficiency:85},{name:"CI/CD",category:"devops",proficiency:80},{name:"Software Architecture",category:"meta",proficiency:90},{name:"Team Leadership",category:"meta",proficiency:85},{name:"Technical Direction",category:"meta",proficiency:85}],Pi={language:{label:"Languages",icon:"code-slash"},runtime:{label:"Runtimes",icon:"cpu"},frontend:{label:"Frontend",icon:"layout-text-window"},backend:{label:"Backend & Data",icon:"server"},devops:{label:"DevOps & Tools",icon:"terminal"},meta:{label:"Architecture & Leadership",icon:"diagram-3"}};var Oi=z`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,At=class extends N{constructor(){super(...arguments),this.localize=new Lt(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return w`
      <span
        part="base"
        class=${dt({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?w`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};At.styles=[it,Oi];At.dependencies={"sl-icon-button":T};d([f({reflect:!0})],At.prototype,"variant",2);d([f({reflect:!0})],At.prototype,"size",2);d([f({type:Boolean,reflect:!0})],At.prototype,"pill",2);d([f({type:Boolean})],At.prototype,"removable",2);At.define("sl-tag");var Li=z`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,Ri=z`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const ht=Math.min,B=Math.max,ce=Math.round,te=Math.floor,G=e=>({x:e,y:e}),Ti={left:"right",right:"left",bottom:"top",top:"bottom"},Mi={start:"end",end:"start"};function Ie(e,t,o){return B(e,ht(t,o))}function Rt(e,t){return typeof e=="function"?e(t):e}function ut(e){return e.split("-")[0]}function Tt(e){return e.split("-")[1]}function Jo(e){return e==="x"?"y":"x"}function Je(e){return e==="y"?"height":"width"}const Di=new Set(["top","bottom"]);function ot(e){return Di.has(ut(e))?"y":"x"}function Qe(e){return Jo(ot(e))}function Bi(e,t,o){o===void 0&&(o=!1);const r=Tt(e),i=Qe(e),s=Je(i);let n=i==="x"?r===(o?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(n=de(n)),[n,de(n)]}function Fi(e){const t=de(e);return[Ue(e),t,Ue(t)]}function Ue(e){return e.replace(/start|end/g,t=>Mi[t])}const Ao=["left","right"],Co=["right","left"],Ni=["top","bottom"],Ii=["bottom","top"];function Ui(e,t,o){switch(e){case"top":case"bottom":return o?t?Co:Ao:t?Ao:Co;case"left":case"right":return t?Ni:Ii;default:return[]}}function Hi(e,t,o,r){const i=Tt(e);let s=Ui(ut(e),o==="start",r);return i&&(s=s.map(n=>n+"-"+i),t&&(s=s.concat(s.map(Ue)))),s}function de(e){return e.replace(/left|right|bottom|top/g,t=>Ti[t])}function Vi(e){return{top:0,right:0,bottom:0,left:0,...e}}function Qo(e){return typeof e!="number"?Vi(e):{top:e,right:e,bottom:e,left:e}}function he(e){const{x:t,y:o,width:r,height:i}=e;return{width:r,height:i,top:o,left:t,right:t+r,bottom:o+i,x:t,y:o}}function So(e,t,o){let{reference:r,floating:i}=e;const s=ot(t),n=Qe(t),a=Je(n),l=ut(t),c=s==="y",h=r.x+r.width/2-i.width/2,u=r.y+r.height/2-i.height/2,m=r[a]/2-i[a]/2;let p;switch(l){case"top":p={x:h,y:r.y-i.height};break;case"bottom":p={x:h,y:r.y+r.height};break;case"right":p={x:r.x+r.width,y:u};break;case"left":p={x:r.x-i.width,y:u};break;default:p={x:r.x,y:r.y}}switch(Tt(t)){case"start":p[n]-=m*(o&&c?-1:1);break;case"end":p[n]+=m*(o&&c?-1:1);break}return p}async function ji(e,t){var o;t===void 0&&(t={});const{x:r,y:i,platform:s,rects:n,elements:a,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:u="floating",altBoundary:m=!1,padding:p=0}=Rt(t,e),g=Qo(p),y=a[m?u==="floating"?"reference":"floating":u],v=he(await s.getClippingRect({element:(o=await(s.isElement==null?void 0:s.isElement(y)))==null||o?y:y.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(a.floating)),boundary:c,rootBoundary:h,strategy:l})),x=u==="floating"?{x:r,y:i,width:n.floating.width,height:n.floating.height}:n.reference,$=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a.floating)),A=await(s.isElement==null?void 0:s.isElement($))?await(s.getScale==null?void 0:s.getScale($))||{x:1,y:1}:{x:1,y:1},O=he(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:x,offsetParent:$,strategy:l}):x);return{top:(v.top-O.top+g.top)/A.y,bottom:(O.bottom-v.bottom+g.bottom)/A.y,left:(v.left-O.left+g.left)/A.x,right:(O.right-v.right+g.right)/A.x}}const Wi=async(e,t,o)=>{const{placement:r="bottom",strategy:i="absolute",middleware:s=[],platform:n}=o,a=s.filter(Boolean),l=await(n.isRTL==null?void 0:n.isRTL(t));let c=await n.getElementRects({reference:e,floating:t,strategy:i}),{x:h,y:u}=So(c,r,l),m=r,p={},g=0;for(let y=0;y<a.length;y++){var b;const{name:v,fn:x}=a[y],{x:$,y:A,data:O,reset:S}=await x({x:h,y:u,initialPlacement:r,placement:m,strategy:i,middlewareData:p,rects:c,platform:{...n,detectOverflow:(b=n.detectOverflow)!=null?b:ji},elements:{reference:e,floating:t}});h=$??h,u=A??u,p={...p,[v]:{...p[v],...O}},S&&g<=50&&(g++,typeof S=="object"&&(S.placement&&(m=S.placement),S.rects&&(c=S.rects===!0?await n.getElementRects({reference:e,floating:t,strategy:i}):S.rects),{x:h,y:u}=So(c,m,l)),y=-1)}return{x:h,y:u,placement:m,strategy:i,middlewareData:p}},qi=e=>({name:"arrow",options:e,async fn(t){const{x:o,y:r,placement:i,rects:s,platform:n,elements:a,middlewareData:l}=t,{element:c,padding:h=0}=Rt(e,t)||{};if(c==null)return{};const u=Qo(h),m={x:o,y:r},p=Qe(i),g=Je(p),b=await n.getDimensions(c),y=p==="y",v=y?"top":"left",x=y?"bottom":"right",$=y?"clientHeight":"clientWidth",A=s.reference[g]+s.reference[p]-m[p]-s.floating[g],O=m[p]-s.reference[p],S=await(n.getOffsetParent==null?void 0:n.getOffsetParent(c));let L=S?S[$]:0;(!L||!await(n.isElement==null?void 0:n.isElement(S)))&&(L=a.floating[$]||s.floating[g]);const tt=A/2-O/2,K=L/2-b[g]/2-1,H=ht(u[v],K),st=ht(u[x],K),X=H,nt=L-b[g]-st,R=L/2-b[g]/2+tt,ft=Ie(X,R,nt),et=!l.arrow&&Tt(i)!=null&&R!==ft&&s.reference[g]/2-(R<X?H:st)-b[g]/2<0,V=et?R<X?R-X:R-nt:0;return{[p]:m[p]+V,data:{[p]:ft,centerOffset:R-ft-V,...et&&{alignmentOffset:V}},reset:et}}}),Yi=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var o,r;const{placement:i,middlewareData:s,rects:n,initialPlacement:a,platform:l,elements:c}=t,{mainAxis:h=!0,crossAxis:u=!0,fallbackPlacements:m,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:b=!0,...y}=Rt(e,t);if((o=s.arrow)!=null&&o.alignmentOffset)return{};const v=ut(i),x=ot(a),$=ut(a)===a,A=await(l.isRTL==null?void 0:l.isRTL(c.floating)),O=m||($||!b?[de(a)]:Fi(a)),S=g!=="none";!m&&S&&O.push(...Hi(a,b,g,A));const L=[a,...O],tt=await l.detectOverflow(t,y),K=[];let H=((r=s.flip)==null?void 0:r.overflows)||[];if(h&&K.push(tt[v]),u){const R=Bi(i,n,A);K.push(tt[R[0]],tt[R[1]])}if(H=[...H,{placement:i,overflows:K}],!K.every(R=>R<=0)){var st,X;const R=(((st=s.flip)==null?void 0:st.index)||0)+1,ft=L[R];if(ft&&(!(u==="alignment"?x!==ot(ft):!1)||H.every(j=>ot(j.placement)===x?j.overflows[0]>0:!0)))return{data:{index:R,overflows:H},reset:{placement:ft}};let et=(X=H.filter(V=>V.overflows[0]<=0).sort((V,j)=>V.overflows[1]-j.overflows[1])[0])==null?void 0:X.placement;if(!et)switch(p){case"bestFit":{var nt;const V=(nt=H.filter(j=>{if(S){const at=ot(j.placement);return at===x||at==="y"}return!0}).map(j=>[j.placement,j.overflows.filter(at=>at>0).reduce((at,fr)=>at+fr,0)]).sort((j,at)=>j[1]-at[1])[0])==null?void 0:nt[0];V&&(et=V);break}case"initialPlacement":et=a;break}if(i!==et)return{reset:{placement:et}}}return{}}}},Ki=new Set(["left","top"]);async function Xi(e,t){const{placement:o,platform:r,elements:i}=e,s=await(r.isRTL==null?void 0:r.isRTL(i.floating)),n=ut(o),a=Tt(o),l=ot(o)==="y",c=Ki.has(n)?-1:1,h=s&&l?-1:1,u=Rt(t,e);let{mainAxis:m,crossAxis:p,alignmentAxis:g}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return a&&typeof g=="number"&&(p=a==="end"?g*-1:g),l?{x:p*h,y:m*c}:{x:m*c,y:p*h}}const Gi=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var o,r;const{x:i,y:s,placement:n,middlewareData:a}=t,l=await Xi(t,e);return n===((o=a.offset)==null?void 0:o.placement)&&(r=a.arrow)!=null&&r.alignmentOffset?{}:{x:i+l.x,y:s+l.y,data:{...l,placement:n}}}}},Zi=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:o,y:r,placement:i,platform:s}=t,{mainAxis:n=!0,crossAxis:a=!1,limiter:l={fn:v=>{let{x,y:$}=v;return{x,y:$}}},...c}=Rt(e,t),h={x:o,y:r},u=await s.detectOverflow(t,c),m=ot(ut(i)),p=Jo(m);let g=h[p],b=h[m];if(n){const v=p==="y"?"top":"left",x=p==="y"?"bottom":"right",$=g+u[v],A=g-u[x];g=Ie($,g,A)}if(a){const v=m==="y"?"top":"left",x=m==="y"?"bottom":"right",$=b+u[v],A=b-u[x];b=Ie($,b,A)}const y=l.fn({...t,[p]:g,[m]:b});return{...y,data:{x:y.x-o,y:y.y-r,enabled:{[p]:n,[m]:a}}}}}},Ji=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var o,r;const{placement:i,rects:s,platform:n,elements:a}=t,{apply:l=()=>{},...c}=Rt(e,t),h=await n.detectOverflow(t,c),u=ut(i),m=Tt(i),p=ot(i)==="y",{width:g,height:b}=s.floating;let y,v;u==="top"||u==="bottom"?(y=u,v=m===(await(n.isRTL==null?void 0:n.isRTL(a.floating))?"start":"end")?"left":"right"):(v=u,y=m==="end"?"top":"bottom");const x=b-h.top-h.bottom,$=g-h.left-h.right,A=ht(b-h[y],x),O=ht(g-h[v],$),S=!t.middlewareData.shift;let L=A,tt=O;if((o=t.middlewareData.shift)!=null&&o.enabled.x&&(tt=$),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(L=x),S&&!m){const H=B(h.left,0),st=B(h.right,0),X=B(h.top,0),nt=B(h.bottom,0);p?tt=g-2*(H!==0||st!==0?H+st:B(h.left,h.right)):L=b-2*(X!==0||nt!==0?X+nt:B(h.top,h.bottom))}await l({...t,availableWidth:tt,availableHeight:L});const K=await n.getDimensions(a.floating);return g!==K.width||b!==K.height?{reset:{rects:!0}}:{}}}};function me(){return typeof window<"u"}function Mt(e){return tr(e)?(e.nodeName||"").toLowerCase():"#document"}function F(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Q(e){var t;return(t=(tr(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function tr(e){return me()?e instanceof Node||e instanceof F(e).Node:!1}function W(e){return me()?e instanceof Element||e instanceof F(e).Element:!1}function Z(e){return me()?e instanceof HTMLElement||e instanceof F(e).HTMLElement:!1}function Eo(e){return!me()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof F(e).ShadowRoot}const Qi=new Set(["inline","contents"]);function Zt(e){const{overflow:t,overflowX:o,overflowY:r,display:i}=q(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+o)&&!Qi.has(i)}const ts=new Set(["table","td","th"]);function es(e){return ts.has(Mt(e))}const os=[":popover-open",":modal"];function ge(e){return os.some(t=>{try{return e.matches(t)}catch{return!1}})}const rs=["transform","translate","scale","rotate","perspective"],is=["transform","translate","scale","rotate","perspective","filter"],ss=["paint","layout","strict","content"];function be(e){const t=to(),o=W(e)?q(e):e;return rs.some(r=>o[r]?o[r]!=="none":!1)||(o.containerType?o.containerType!=="normal":!1)||!t&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!t&&(o.filter?o.filter!=="none":!1)||is.some(r=>(o.willChange||"").includes(r))||ss.some(r=>(o.contain||"").includes(r))}function ns(e){let t=pt(e);for(;Z(t)&&!Ot(t);){if(be(t))return t;if(ge(t))return null;t=pt(t)}return null}function to(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const as=new Set(["html","body","#document"]);function Ot(e){return as.has(Mt(e))}function q(e){return F(e).getComputedStyle(e)}function ve(e){return W(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function pt(e){if(Mt(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Eo(e)&&e.host||Q(e);return Eo(t)?t.host:t}function er(e){const t=pt(e);return Ot(t)?e.ownerDocument?e.ownerDocument.body:e.body:Z(t)&&Zt(t)?t:er(t)}function Kt(e,t,o){var r;t===void 0&&(t=[]),o===void 0&&(o=!0);const i=er(e),s=i===((r=e.ownerDocument)==null?void 0:r.body),n=F(i);if(s){const a=He(n);return t.concat(n,n.visualViewport||[],Zt(i)?i:[],a&&o?Kt(a):[])}return t.concat(i,Kt(i,[],o))}function He(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function or(e){const t=q(e);let o=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=Z(e),s=i?e.offsetWidth:o,n=i?e.offsetHeight:r,a=ce(o)!==s||ce(r)!==n;return a&&(o=s,r=n),{width:o,height:r,$:a}}function eo(e){return W(e)?e:e.contextElement}function zt(e){const t=eo(e);if(!Z(t))return G(1);const o=t.getBoundingClientRect(),{width:r,height:i,$:s}=or(t);let n=(s?ce(o.width):o.width)/r,a=(s?ce(o.height):o.height)/i;return(!n||!Number.isFinite(n))&&(n=1),(!a||!Number.isFinite(a))&&(a=1),{x:n,y:a}}const ls=G(0);function rr(e){const t=F(e);return!to()||!t.visualViewport?ls:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function cs(e,t,o){return t===void 0&&(t=!1),!o||t&&o!==F(e)?!1:t}function $t(e,t,o,r){t===void 0&&(t=!1),o===void 0&&(o=!1);const i=e.getBoundingClientRect(),s=eo(e);let n=G(1);t&&(r?W(r)&&(n=zt(r)):n=zt(e));const a=cs(s,o,r)?rr(s):G(0);let l=(i.left+a.x)/n.x,c=(i.top+a.y)/n.y,h=i.width/n.x,u=i.height/n.y;if(s){const m=F(s),p=r&&W(r)?F(r):r;let g=m,b=He(g);for(;b&&r&&p!==g;){const y=zt(b),v=b.getBoundingClientRect(),x=q(b),$=v.left+(b.clientLeft+parseFloat(x.paddingLeft))*y.x,A=v.top+(b.clientTop+parseFloat(x.paddingTop))*y.y;l*=y.x,c*=y.y,h*=y.x,u*=y.y,l+=$,c+=A,g=F(b),b=He(g)}}return he({width:h,height:u,x:l,y:c})}function ye(e,t){const o=ve(e).scrollLeft;return t?t.left+o:$t(Q(e)).left+o}function ir(e,t){const o=e.getBoundingClientRect(),r=o.left+t.scrollLeft-ye(e,o),i=o.top+t.scrollTop;return{x:r,y:i}}function ds(e){let{elements:t,rect:o,offsetParent:r,strategy:i}=e;const s=i==="fixed",n=Q(r),a=t?ge(t.floating):!1;if(r===n||a&&s)return o;let l={scrollLeft:0,scrollTop:0},c=G(1);const h=G(0),u=Z(r);if((u||!u&&!s)&&((Mt(r)!=="body"||Zt(n))&&(l=ve(r)),Z(r))){const p=$t(r);c=zt(r),h.x=p.x+r.clientLeft,h.y=p.y+r.clientTop}const m=n&&!u&&!s?ir(n,l):G(0);return{width:o.width*c.x,height:o.height*c.y,x:o.x*c.x-l.scrollLeft*c.x+h.x+m.x,y:o.y*c.y-l.scrollTop*c.y+h.y+m.y}}function hs(e){return Array.from(e.getClientRects())}function us(e){const t=Q(e),o=ve(e),r=e.ownerDocument.body,i=B(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),s=B(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let n=-o.scrollLeft+ye(e);const a=-o.scrollTop;return q(r).direction==="rtl"&&(n+=B(t.clientWidth,r.clientWidth)-i),{width:i,height:s,x:n,y:a}}const zo=25;function ps(e,t){const o=F(e),r=Q(e),i=o.visualViewport;let s=r.clientWidth,n=r.clientHeight,a=0,l=0;if(i){s=i.width,n=i.height;const h=to();(!h||h&&t==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}const c=ye(r);if(c<=0){const h=r.ownerDocument,u=h.body,m=getComputedStyle(u),p=h.compatMode==="CSS1Compat"&&parseFloat(m.marginLeft)+parseFloat(m.marginRight)||0,g=Math.abs(r.clientWidth-u.clientWidth-p);g<=zo&&(s-=g)}else c<=zo&&(s+=c);return{width:s,height:n,x:a,y:l}}const fs=new Set(["absolute","fixed"]);function ms(e,t){const o=$t(e,!0,t==="fixed"),r=o.top+e.clientTop,i=o.left+e.clientLeft,s=Z(e)?zt(e):G(1),n=e.clientWidth*s.x,a=e.clientHeight*s.y,l=i*s.x,c=r*s.y;return{width:n,height:a,x:l,y:c}}function Po(e,t,o){let r;if(t==="viewport")r=ps(e,o);else if(t==="document")r=us(Q(e));else if(W(t))r=ms(t,o);else{const i=rr(e);r={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return he(r)}function sr(e,t){const o=pt(e);return o===t||!W(o)||Ot(o)?!1:q(o).position==="fixed"||sr(o,t)}function gs(e,t){const o=t.get(e);if(o)return o;let r=Kt(e,[],!1).filter(a=>W(a)&&Mt(a)!=="body"),i=null;const s=q(e).position==="fixed";let n=s?pt(e):e;for(;W(n)&&!Ot(n);){const a=q(n),l=be(n);!l&&a.position==="fixed"&&(i=null),(s?!l&&!i:!l&&a.position==="static"&&!!i&&fs.has(i.position)||Zt(n)&&!l&&sr(e,n))?r=r.filter(h=>h!==n):i=a,n=pt(n)}return t.set(e,r),r}function bs(e){let{element:t,boundary:o,rootBoundary:r,strategy:i}=e;const n=[...o==="clippingAncestors"?ge(t)?[]:gs(t,this._c):[].concat(o),r],a=n[0],l=n.reduce((c,h)=>{const u=Po(t,h,i);return c.top=B(u.top,c.top),c.right=ht(u.right,c.right),c.bottom=ht(u.bottom,c.bottom),c.left=B(u.left,c.left),c},Po(t,a,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function vs(e){const{width:t,height:o}=or(e);return{width:t,height:o}}function ys(e,t,o){const r=Z(t),i=Q(t),s=o==="fixed",n=$t(e,!0,s,t);let a={scrollLeft:0,scrollTop:0};const l=G(0);function c(){l.x=ye(i)}if(r||!r&&!s)if((Mt(t)!=="body"||Zt(i))&&(a=ve(t)),r){const p=$t(t,!0,s,t);l.x=p.x+t.clientLeft,l.y=p.y+t.clientTop}else i&&c();s&&!r&&i&&c();const h=i&&!r&&!s?ir(i,a):G(0),u=n.left+a.scrollLeft-l.x-h.x,m=n.top+a.scrollTop-l.y-h.y;return{x:u,y:m,width:n.width,height:n.height}}function Oe(e){return q(e).position==="static"}function Oo(e,t){if(!Z(e)||q(e).position==="fixed")return null;if(t)return t(e);let o=e.offsetParent;return Q(e)===o&&(o=o.ownerDocument.body),o}function nr(e,t){const o=F(e);if(ge(e))return o;if(!Z(e)){let i=pt(e);for(;i&&!Ot(i);){if(W(i)&&!Oe(i))return i;i=pt(i)}return o}let r=Oo(e,t);for(;r&&es(r)&&Oe(r);)r=Oo(r,t);return r&&Ot(r)&&Oe(r)&&!be(r)?o:r||ns(e)||o}const ws=async function(e){const t=this.getOffsetParent||nr,o=this.getDimensions,r=await o(e.floating);return{reference:ys(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function xs(e){return q(e).direction==="rtl"}const ie={convertOffsetParentRelativeRectToViewportRelativeRect:ds,getDocumentElement:Q,getClippingRect:bs,getOffsetParent:nr,getElementRects:ws,getClientRects:hs,getDimensions:vs,getScale:zt,isElement:W,isRTL:xs};function ar(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function _s(e,t){let o=null,r;const i=Q(e);function s(){var a;clearTimeout(r),(a=o)==null||a.disconnect(),o=null}function n(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),s();const c=e.getBoundingClientRect(),{left:h,top:u,width:m,height:p}=c;if(a||t(),!m||!p)return;const g=te(u),b=te(i.clientWidth-(h+m)),y=te(i.clientHeight-(u+p)),v=te(h),$={rootMargin:-g+"px "+-b+"px "+-y+"px "+-v+"px",threshold:B(0,ht(1,l))||1};let A=!0;function O(S){const L=S[0].intersectionRatio;if(L!==l){if(!A)return n();L?n(!1,L):r=setTimeout(()=>{n(!1,1e-7)},1e3)}L===1&&!ar(c,e.getBoundingClientRect())&&n(),A=!1}try{o=new IntersectionObserver(O,{...$,root:i.ownerDocument})}catch{o=new IntersectionObserver(O,$)}o.observe(e)}return n(!0),s}function $s(e,t,o,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:n=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=r,c=eo(e),h=i||s?[...c?Kt(c):[],...Kt(t)]:[];h.forEach(v=>{i&&v.addEventListener("scroll",o,{passive:!0}),s&&v.addEventListener("resize",o)});const u=c&&a?_s(c,o):null;let m=-1,p=null;n&&(p=new ResizeObserver(v=>{let[x]=v;x&&x.target===c&&p&&(p.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var $;($=p)==null||$.observe(t)})),o()}),c&&!l&&p.observe(c),p.observe(t));let g,b=l?$t(e):null;l&&y();function y(){const v=$t(e);b&&!ar(b,v)&&o(),b=v,g=requestAnimationFrame(y)}return o(),()=>{var v;h.forEach(x=>{i&&x.removeEventListener("scroll",o),s&&x.removeEventListener("resize",o)}),u==null||u(),(v=p)==null||v.disconnect(),p=null,l&&cancelAnimationFrame(g)}}const ks=Gi,As=Zi,Cs=Yi,Lo=Ji,Ss=qi,Es=(e,t,o)=>{const r=new Map,i={platform:ie,...o},s={...i.platform,_c:r};return Wi(e,t,{...i,platform:s})};function zs(e){return Ps(e)}function Le(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Ps(e){for(let t=e;t;t=Le(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=Le(e);t;t=Le(t)){if(!(t instanceof Element))continue;const o=getComputedStyle(t);if(o.display!=="contents"&&(o.position!=="static"||be(o)||t.tagName==="BODY"))return t}return null}function Os(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e&&("contextElement"in e?e.contextElement instanceof Element:!0)}var k=class extends N{constructor(){super(...arguments),this.localize=new Lt(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),o=this.placement.includes("top")||this.placement.includes("bottom");let r=0,i=0,s=0,n=0,a=0,l=0,c=0,h=0;o?e.top<t.top?(r=e.left,i=e.bottom,s=e.right,n=e.bottom,a=t.left,l=t.top,c=t.right,h=t.top):(r=t.left,i=t.bottom,s=t.right,n=t.bottom,a=e.left,l=e.top,c=e.right,h=e.top):e.left<t.left?(r=e.right,i=e.top,s=t.left,n=t.top,a=e.right,l=e.bottom,c=t.left,h=t.bottom):(r=t.right,i=t.top,s=e.left,n=e.top,a=t.right,l=t.bottom,c=e.left,h=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${r}px`),this.style.setProperty("--hover-bridge-top-left-y",`${i}px`),this.style.setProperty("--hover-bridge-top-right-x",`${s}px`),this.style.setProperty("--hover-bridge-top-right-y",`${n}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${h}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||Os(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=$s(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[ks({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Lo({apply:({rects:o})=>{const r=this.sync==="width"||this.sync==="both",i=this.sync==="height"||this.sync==="both";this.popup.style.width=r?`${o.reference.width}px`:"",this.popup.style.height=i?`${o.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(Cs({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(As({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(Lo({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:o,availableHeight:r})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${r}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${o}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(Ss({element:this.arrowEl,padding:this.arrowPadding}));const t=this.strategy==="absolute"?o=>ie.getOffsetParent(o,zs):ie.getOffsetParent;Es(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:ue(kt({},ie),{getOffsetParent:t})}).then(({x:o,y:r,middlewareData:i,placement:s})=>{const n=this.localize.dir()==="rtl",a={top:"bottom",right:"left",bottom:"top",left:"right"}[s.split("-")[0]];if(this.setAttribute("data-current-placement",s),Object.assign(this.popup.style,{left:`${o}px`,top:`${r}px`}),this.arrow){const l=i.arrow.x,c=i.arrow.y;let h="",u="",m="",p="";if(this.arrowPlacement==="start"){const g=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",u=n?g:"",p=n?"":g}else if(this.arrowPlacement==="end"){const g=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=n?"":g,p=n?g:"",m=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(p=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",h=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(p=typeof l=="number"?`${l}px`:"",h=typeof c=="number"?`${c}px`:"");Object.assign(this.arrowEl.style,{top:h,right:u,bottom:m,left:p,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return w`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${dt({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${dt({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?w`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};k.styles=[it,Ri];d([J(".popup")],k.prototype,"popup",2);d([J(".popup__arrow")],k.prototype,"arrowEl",2);d([f()],k.prototype,"anchor",2);d([f({type:Boolean,reflect:!0})],k.prototype,"active",2);d([f({reflect:!0})],k.prototype,"placement",2);d([f({reflect:!0})],k.prototype,"strategy",2);d([f({type:Number})],k.prototype,"distance",2);d([f({type:Number})],k.prototype,"skidding",2);d([f({type:Boolean})],k.prototype,"arrow",2);d([f({attribute:"arrow-placement"})],k.prototype,"arrowPlacement",2);d([f({attribute:"arrow-padding",type:Number})],k.prototype,"arrowPadding",2);d([f({type:Boolean})],k.prototype,"flip",2);d([f({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],k.prototype,"flipFallbackPlacements",2);d([f({attribute:"flip-fallback-strategy"})],k.prototype,"flipFallbackStrategy",2);d([f({type:Object})],k.prototype,"flipBoundary",2);d([f({attribute:"flip-padding",type:Number})],k.prototype,"flipPadding",2);d([f({type:Boolean})],k.prototype,"shift",2);d([f({type:Object})],k.prototype,"shiftBoundary",2);d([f({attribute:"shift-padding",type:Number})],k.prototype,"shiftPadding",2);d([f({attribute:"auto-size"})],k.prototype,"autoSize",2);d([f()],k.prototype,"sync",2);d([f({type:Object})],k.prototype,"autoSizeBoundary",2);d([f({attribute:"auto-size-padding",type:Number})],k.prototype,"autoSizePadding",2);d([f({attribute:"hover-bridge",type:Boolean})],k.prototype,"hoverBridge",2);var P=class extends N{constructor(){super(),this.localize=new Lt(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{e.key==="Escape"&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=_o(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=_o(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await St(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:o,options:r}=gt(this,"tooltip.show",{dir:this.localize.dir()});await bt(this.popup.popup,o,r),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await St(this.body);const{keyframes:o,options:r}=gt(this,"tooltip.hide",{dir:this.localize.dir()});await bt(this.popup.popup,o,r),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,le(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,le(this,"sl-after-hide")}render(){return w`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${dt({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};P.styles=[it,Li];P.dependencies={"sl-popup":k};d([J("slot:not([name])")],P.prototype,"defaultSlot",2);d([J(".tooltip__body")],P.prototype,"body",2);d([J("sl-popup")],P.prototype,"popup",2);d([f()],P.prototype,"content",2);d([f()],P.prototype,"placement",2);d([f({type:Boolean,reflect:!0})],P.prototype,"disabled",2);d([f({type:Number})],P.prototype,"distance",2);d([f({type:Boolean,reflect:!0})],P.prototype,"open",2);d([f({type:Number})],P.prototype,"skidding",2);d([f()],P.prototype,"trigger",2);d([f({type:Boolean})],P.prototype,"hoist",2);d([rt("open",{waitUntilFirstUpdate:!0})],P.prototype,"handleOpenChange",1);d([rt(["content","distance","hoist","placement","skidding"])],P.prototype,"handleOptionsChange",1);d([rt("disabled")],P.prototype,"handleDisabledChange",1);I("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});I("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});P.define("sl-tooltip");class lr extends Gt(M){render(){return w`
      <section id="skills">
        <h2 class="section-heading">
          <span class="heading-accent">//</span> Skills & Tech
        </h2>
        <div class="skills-grid">
          ${Object.entries(Pi).map(([t,o])=>{const r=zi.filter(i=>i.category===t);return r.length?w`
              <div class="skill-category">
                <h3 class="category-label">
                  <sl-icon name=${o.icon}></sl-icon>
                  ${o.label}
                </h3>
                <div class="skill-tags">
                  ${r.map(i=>w`
                      <sl-tooltip content="${i.proficiency}% proficiency">
                        <sl-tag size="medium" variant="neutral">
                          ${i.name}
                          <span
                            class="proficiency-dot"
                            style="--prof: ${i.proficiency/100}"
                          ></span>
                        </sl-tag>
                      </sl-tooltip>
                    `)}
                </div>
              </div>
            `:""})}
        </div>
      </section>
    `}}D(lr,"styles",z`
    :host {
      display: block;
      padding: var(--section-padding) var(--space-4);
      max-width: 1200px;
      margin: 0 auto;
      opacity: 0;
      transform: translateY(30px);
      transition: opacity var(--transition-slow), transform var(--transition-slow);
    }

    :host(.revealed) {
      opacity: 1;
      transform: translateY(0);
    }

    .section-heading {
      font-size: clamp(1.8rem, 4vw, 2.5rem);
      margin-bottom: var(--space-6);
    }

    .heading-accent {
      color: var(--accent);
      font-family: var(--font-mono);
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: var(--space-4);
    }

    .skill-category {
      opacity: 0;
      transform: translateY(15px);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }

    :host(.revealed) .skill-category { opacity: 1; transform: translateY(0); }
    :host(.revealed) .skill-category:nth-child(1) { transition-delay: 0ms; }
    :host(.revealed) .skill-category:nth-child(2) { transition-delay: 100ms; }
    :host(.revealed) .skill-category:nth-child(3) { transition-delay: 200ms; }
    :host(.revealed) .skill-category:nth-child(4) { transition-delay: 300ms; }
    :host(.revealed) .skill-category:nth-child(5) { transition-delay: 400ms; }
    :host(.revealed) .skill-category:nth-child(6) { transition-delay: 500ms; }

    .category-label {
      font-family: var(--font-mono);
      color: var(--text-secondary);
      font-size: 0.95rem;
      margin-bottom: var(--space-2);
      display: flex;
      align-items: center;
      gap: var(--space-1);
    }

    .category-label sl-icon {
      color: var(--accent);
    }

    .skill-tags {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-1);
    }

    sl-tag {
      cursor: default;
      transition: transform var(--transition-fast), box-shadow var(--transition-fast);
    }

    sl-tag:hover {
      transform: scale(1.05);
      box-shadow: 0 0 12px rgba(99, 102, 241, 0.3);
    }

    .proficiency-dot {
      display: inline-block;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      margin-left: 6px;
      background: var(--accent);
      opacity: var(--prof);
    }
  `);customElements.define("portfolio-skills",lr);const Ls=[{id:"webbeacon",title:"WebBeacon",description:"A lightweight Node.js web beacon for tracking real-time user interactions and performance metrics.",tags:["Node.js","JavaScript","Analytics","Real-time"],screenshots:["/assets/images/placeholder-project.svg"],videoUrl:null,liveUrl:null,repoUrl:"https://github.com/HoldenMorris/WebBeacon",featured:!0},{id:"node-rest-auth",title:"Node-Rest-Auth",description:"Authentication library for securing REST API endpoints with token-based auth and role management.",tags:["Node.js","REST API","Authentication","Security"],screenshots:["/assets/images/placeholder-project.svg"],videoUrl:null,liveUrl:null,repoUrl:"https://github.com/HoldenMorris/Node-Rest-Auth",featured:!0},{id:"hydra",title:"Hydra",description:"A mobile terminal webapp for managing and monitoring distributed services from any device.",tags:["Node.js","Mobile","Terminal","WebApp"],screenshots:["/assets/images/placeholder-project.svg"],videoUrl:null,liveUrl:null,repoUrl:"https://github.com/HoldenMorris/hydra",featured:!0}];class cr extends Gt(M){render(){const t=Ls.filter(o=>o.featured);return w`
      <section id="projects">
        <h2 class="section-heading">
          <span class="heading-accent">//</span> Projects
        </h2>
        <div class="projects-grid">
          ${t.map(o=>w`
              <article class="project-card">
                <div class="card-titlebar">
                  <div class="window-dots">
                    <span class="dot red"></span>
                    <span class="dot yellow"></span>
                    <span class="dot green"></span>
                  </div>
                  <span class="card-filename"
                    >${o.title.toLowerCase().replace(/\s+/g,"-")}.js</span
                  >
                </div>
                <div class="card-media">
                  ${o.videoUrl?w`<video
                        src=${o.videoUrl}
                        controls
                        playsinline
                        preload="metadata"
                      ></video>`:w`<img
                        src=${o.screenshots[0]}
                        alt="${o.title} screenshot"
                        loading="lazy"
                      />`}
                </div>
                <div class="card-body">
                  <h3 class="project-title">${o.title}</h3>
                  <p class="project-desc">${o.description}</p>
                  <div class="project-tags">
                    ${o.tags.map(r=>w`<sl-tag size="small" variant="neutral">${r}</sl-tag>`)}
                  </div>
                  <div class="project-links">
                    ${o.repoUrl?w`
                          <sl-button
                            variant="default"
                            size="small"
                            href=${o.repoUrl}
                            target="_blank"
                          >
                            <sl-icon slot="prefix" name="github"></sl-icon>
                            Source
                          </sl-button>
                        `:""}
                    ${o.liveUrl?w`
                          <sl-button
                            variant="primary"
                            size="small"
                            href=${o.liveUrl}
                            target="_blank"
                          >
                            <sl-icon slot="prefix" name="box-arrow-up-right"></sl-icon>
                            Live Demo
                          </sl-button>
                        `:""}
                  </div>
                </div>
              </article>
            `)}
        </div>
      </section>
    `}}D(cr,"styles",z`
    :host {
      display: block;
      padding: var(--section-padding) var(--space-4);
      max-width: 1200px;
      margin: 0 auto;
      opacity: 0;
      transform: translateY(30px);
      transition: opacity var(--transition-slow), transform var(--transition-slow);
    }

    :host(.revealed) {
      opacity: 1;
      transform: translateY(0);
    }

    .section-heading {
      font-size: clamp(1.8rem, 4vw, 2.5rem);
      margin-bottom: var(--space-6);
    }

    .heading-accent {
      color: var(--accent);
      font-family: var(--font-mono);
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: var(--space-4);
    }

    .project-card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: var(--radius-lg);
      overflow: hidden;
      transition: transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal);
      opacity: 0;
      transform: translateY(20px);
    }

    :host(.revealed) .project-card {
      opacity: 1;
      transform: translateY(0);
    }

    :host(.revealed) .project-card:nth-child(1) { transition-delay: 0ms; }
    :host(.revealed) .project-card:nth-child(2) { transition-delay: 100ms; }
    :host(.revealed) .project-card:nth-child(3) { transition-delay: 200ms; }

    .project-card:hover {
      transform: translateY(-4px);
      border-color: var(--accent);
      box-shadow: 0 8px 30px rgba(99, 102, 241, 0.15);
    }

    .card-titlebar {
      display: flex;
      align-items: center;
      gap: var(--space-2);
      padding: var(--space-1) var(--space-2);
      background: var(--bg-secondary);
      border-bottom: 1px solid var(--border);
    }

    .window-dots {
      display: flex;
      gap: 6px;
    }

    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }

    .dot.red { background: #ff5f57; }
    .dot.yellow { background: #febc2e; }
    .dot.green { background: #28c840; }

    .card-filename {
      font-family: var(--font-mono);
      font-size: 0.8rem;
      color: var(--text-secondary);
    }

    .card-media img,
    .card-media video {
      width: 100%;
      height: 200px;
      object-fit: cover;
      display: block;
      background: var(--bg-secondary);
    }

    .card-body {
      padding: var(--space-3);
    }

    .project-title {
      font-size: 1.2rem;
      font-weight: 700;
      margin-bottom: var(--space-1);
    }

    .project-desc {
      font-size: 0.9rem;
      color: var(--text-secondary);
      line-height: 1.6;
    }

    .project-tags {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-1);
      margin: var(--space-2) 0;
    }

    .project-links {
      display: flex;
      gap: var(--space-2);
      margin-top: var(--space-2);
    }

    @media (max-width: 768px) {
      .projects-grid {
        grid-template-columns: 1fr;
      }
    }
  `);customElements.define("portfolio-projects",cr);const Ro=[{id:"synaq",company:"Synaq",role:"Software Developer",period:"2020 — Present",description:"Full-stack development and backend architecture for enterprise communications platform.",highlights:["Backend architecture and API development","Node.js microservices","Database integration and performance optimisation"]},{id:"abantu",company:"Abantu Digital",role:"Co-Founder & Technical Director",period:"2018 — Present",description:"Co-founded a digital agency providing web development, CMS, and technical consulting.",highlights:["Technical strategy and architecture decisions","Drupal-based CMS solutions","Team leadership and client delivery"]},{id:"earlier",company:"Earlier Roles",role:"Various Development & Technical Positions",period:"1984 — 2018",description:"Over three decades of software development across multiple industries and technologies.",highlights:["Started coding at age 12 in 1984","Full-stack web development from the early web era","Progressive growth from developer to architect to technical director"]}];class dr extends Gt(M){render(){return w`
      <section id="experience">
        <h2 class="section-heading">
          <span class="heading-accent">//</span> Experience
        </h2>
        <div class="timeline">
          ${Ro.map((t,o)=>w`
              <div class="timeline-entry">
                <div class="timeline-marker">
                  <div class="marker-dot"></div>
                  ${o<Ro.length-1?w`<div class="marker-line"></div>`:""}
                </div>
                <div class="timeline-content">
                  <div class="timeline-header">
                    <h3>${t.role}</h3>
                    <span class="timeline-company">
                      <sl-icon name="building"></sl-icon>
                      ${t.company}
                    </span>
                    <span class="timeline-period">
                      <sl-icon name="calendar3"></sl-icon>
                      ${t.period}
                    </span>
                  </div>
                  <p class="timeline-desc">${t.description}</p>
                  <ul class="timeline-highlights">
                    ${t.highlights.map(r=>w`<li>${r}</li>`)}
                  </ul>
                </div>
              </div>
            `)}
        </div>
      </section>
    `}}D(dr,"styles",z`
    :host {
      display: block;
      padding: var(--section-padding) var(--space-4);
      max-width: 1200px;
      margin: 0 auto;
      opacity: 0;
      transform: translateY(30px);
      transition: opacity var(--transition-slow), transform var(--transition-slow);
    }

    :host(.revealed) {
      opacity: 1;
      transform: translateY(0);
    }

    .section-heading {
      font-size: clamp(1.8rem, 4vw, 2.5rem);
      margin-bottom: var(--space-6);
    }

    .heading-accent {
      color: var(--accent);
      font-family: var(--font-mono);
    }

    .timeline {
      position: relative;
      padding-left: var(--space-6);
    }

    .timeline-entry {
      display: flex;
      gap: var(--space-3);
      margin-bottom: var(--space-6);
      opacity: 0;
      transform: translateX(-20px);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }

    :host(.revealed) .timeline-entry {
      opacity: 1;
      transform: translateX(0);
    }

    :host(.revealed) .timeline-entry:nth-child(1) { transition-delay: 0ms; }
    :host(.revealed) .timeline-entry:nth-child(2) { transition-delay: 200ms; }
    :host(.revealed) .timeline-entry:nth-child(3) { transition-delay: 400ms; }

    .timeline-marker {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-shrink: 0;
    }

    .marker-dot {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: var(--accent);
      box-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
      z-index: 1;
      flex-shrink: 0;
    }

    .marker-line {
      width: 2px;
      flex: 1;
      background: var(--border);
      margin-top: 4px;
    }

    .timeline-content {
      padding-bottom: var(--space-2);
    }

    .timeline-header h3 {
      font-size: 1.2rem;
      margin-bottom: var(--space-1);
    }

    .timeline-company,
    .timeline-period {
      font-size: 0.9rem;
      color: var(--text-secondary);
      display: flex;
      align-items: center;
      gap: 4px;
      margin-bottom: 2px;
    }

    .timeline-company sl-icon,
    .timeline-period sl-icon {
      color: var(--accent);
      font-size: 0.85rem;
    }

    .timeline-desc {
      font-size: 0.95rem;
      color: var(--text-secondary);
      margin-top: var(--space-2);
      line-height: 1.6;
    }

    .timeline-highlights {
      list-style: none;
      margin-top: var(--space-2);
      padding: 0;
    }

    .timeline-highlights li {
      position: relative;
      padding-left: var(--space-3);
      color: var(--text-secondary);
      margin-bottom: var(--space-1);
      font-size: 0.9rem;
    }

    .timeline-highlights li::before {
      content: '>';
      position: absolute;
      left: 0;
      color: var(--accent);
      font-family: var(--font-mono);
      font-weight: 700;
    }

    @media (max-width: 768px) {
      .timeline {
        padding-left: var(--space-4);
      }
    }
  `);customElements.define("portfolio-experience",dr);class hr extends Gt(M){render(){return w`
      <section id="contact">
        <h2 class="section-heading">
          <span class="heading-accent">//</span> Get in Touch
        </h2>
        <p class="contact-intro">Interested in working together? Let's connect.</p>
        <div class="contact-links">
          <a href=${jt.github} target="_blank" rel="noopener" class="contact-card">
            <sl-icon name="github"></sl-icon>
            <span class="contact-label">GitHub</span>
            <span class="contact-handle">@HoldenMorris</span>
          </a>
          <a href=${jt.linkedin} target="_blank" rel="noopener" class="contact-card">
            <sl-icon name="linkedin"></sl-icon>
            <span class="contact-label">LinkedIn</span>
            <span class="contact-handle">morrisholden</span>
          </a>
          ${""}
        </div>
      </section>
    `}}D(hr,"styles",z`
    :host {
      display: block;
      padding: var(--section-padding) var(--space-4);
      max-width: 1200px;
      margin: 0 auto;
      opacity: 0;
      transform: translateY(30px);
      transition: opacity var(--transition-slow), transform var(--transition-slow);
    }

    :host(.revealed) {
      opacity: 1;
      transform: translateY(0);
    }

    .section-heading {
      font-size: clamp(1.8rem, 4vw, 2.5rem);
      margin-bottom: var(--space-3);
    }

    .heading-accent {
      color: var(--accent);
      font-family: var(--font-mono);
    }

    .contact-intro {
      color: var(--text-secondary);
      font-size: 1.1rem;
      margin-bottom: var(--space-6);
    }

    .contact-links {
      display: flex;
      gap: var(--space-4);
      justify-content: center;
      flex-wrap: wrap;
    }

    .contact-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: var(--space-4) var(--space-6);
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: var(--radius-lg);
      text-decoration: none;
      color: var(--text-primary);
      transition: all var(--transition-normal);
      min-width: 180px;
      opacity: 0;
      transform: scale(0.9);
    }

    :host(.revealed) .contact-card {
      opacity: 1;
      transform: scale(1);
    }

    :host(.revealed) .contact-card:nth-child(1) { transition-delay: 0ms; }
    :host(.revealed) .contact-card:nth-child(2) { transition-delay: 100ms; }
    :host(.revealed) .contact-card:nth-child(3) { transition-delay: 200ms; }

    .contact-card:hover {
      border-color: var(--accent);
      transform: translateY(-4px);
      box-shadow: 0 8px 25px rgba(99, 102, 241, 0.2);
    }

    .contact-card:hover sl-icon {
      color: var(--accent);
    }

    .contact-card sl-icon {
      font-size: 2.5rem;
      transition: color var(--transition-fast);
    }

    .contact-label {
      font-weight: 600;
      margin-top: var(--space-2);
    }

    .contact-handle {
      font-size: 0.85rem;
      color: var(--text-secondary);
      font-family: var(--font-mono);
    }

    @media (max-width: 768px) {
      .contact-links {
        flex-direction: column;
        align-items: center;
      }

      .contact-card {
        width: 100%;
        max-width: 300px;
      }
    }
  `);customElements.define("portfolio-contact",hr);var Rs=z`
  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,we=class extends N{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};we.styles=[it,Rs];d([f({type:Boolean,reflect:!0})],we.prototype,"vertical",2);d([rt("vertical")],we.prototype,"handleVerticalChange",1);we.define("sl-divider");class ur extends M{render(){const t=new Date().getFullYear();return w`
      <footer>
        <sl-divider></sl-divider>
        <div class="footer-content">
          <span>&copy; ${t} Holden Morris</span>
          <span class="footer-tagline">Coding since 1984 — still shipping.</span>
          <span class="footer-right">
            Built with
            <a href="https://lit.dev" target="_blank" rel="noopener">Lit</a> +
            <a href="https://shoelace.style" target="_blank" rel="noopener">Shoelace</a>
          </span>
        </div>
      </footer>
    `}}D(ur,"styles",z`
    :host {
      display: block;
      padding: var(--space-4);
    }

    sl-divider {
      --color: var(--border);
      margin-bottom: var(--space-4);
    }

    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: var(--space-2);
      font-size: 0.85rem;
      color: var(--text-secondary);
    }

    .footer-tagline {
      font-family: var(--font-mono);
    }

    .footer-right a {
      color: var(--accent);
      text-decoration: none;
    }

    .footer-right a:hover {
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      .footer-content {
        flex-direction: column;
        text-align: center;
      }
    }
  `);customElements.define("portfolio-footer",ur);class pr extends M{render(){return w`
      <portfolio-nav></portfolio-nav>
      <main>
        <portfolio-hero></portfolio-hero>
        <portfolio-about></portfolio-about>
        <portfolio-skills></portfolio-skills>
        <portfolio-projects></portfolio-projects>
        <portfolio-experience></portfolio-experience>
        <portfolio-contact></portfolio-contact>
      </main>
      <portfolio-footer></portfolio-footer>
    `}}D(pr,"styles",z`
    :host {
      display: block;
      min-height: 100vh;
      color: var(--text-primary);
      background: var(--bg-primary);
    }
  `);customElements.define("portfolio-app",pr);
