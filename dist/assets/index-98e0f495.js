(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function du(e,t){const n=Object.create(null),i=e.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const ze={},cs=[],dn=()=>{},Zb=()=>!1,Qb=/^on[^a-z]/,Rl=e=>Qb.test(e),fu=e=>e.startsWith("onUpdate:"),Qe=Object.assign,pu=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},eC=Object.prototype.hasOwnProperty,Ae=(e,t)=>eC.call(e,t),te=Array.isArray,us=e=>Pl(e)==="[object Map]",rm=e=>Pl(e)==="[object Set]",ae=e=>typeof e=="function",Ze=e=>typeof e=="string",mu=e=>typeof e=="symbol",Ke=e=>e!==null&&typeof e=="object",om=e=>Ke(e)&&ae(e.then)&&ae(e.catch),lm=Object.prototype.toString,Pl=e=>lm.call(e),tC=e=>Pl(e).slice(8,-1),am=e=>Pl(e)==="[object Object]",gu=e=>Ze(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Fo=du(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),xl=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},nC=/-(\w)/g,Sn=xl(e=>e.replace(nC,(t,n)=>n?n.toUpperCase():"")),iC=/\B([A-Z])/g,Gi=xl(e=>e.replace(iC,"-$1").toLowerCase()),Ol=xl(e=>e.charAt(0).toUpperCase()+e.slice(1)),ka=xl(e=>e?`on${Ol(e)}`:""),Cr=(e,t)=>!Object.is(e,t),Ra=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Ko=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},sC=e=>{const t=parseFloat(e);return isNaN(t)?e:t},rC=e=>{const t=Ze(e)?Number(e):NaN;return isNaN(t)?e:t};let Cd;const uc=()=>Cd||(Cd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ll(e){if(te(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],s=Ze(i)?cC(i):Ll(i);if(s)for(const r in s)t[r]=s[r]}return t}else{if(Ze(e))return e;if(Ke(e))return e}}const oC=/;(?![^(]*\))/g,lC=/:([^]+)/,aC=new RegExp("\\/\\*.*?\\*\\/","gs");function cC(e){const t={};return e.replace(aC,"").split(oC).forEach(n=>{if(n){const i=n.split(lC);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Wn(e){let t="";if(Ze(e))t=e;else if(te(e))for(let n=0;n<e.length;n++){const i=Wn(e[n]);i&&(t+=i+" ")}else if(Ke(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function yu(e){if(!e)return null;let{class:t,style:n}=e;return t&&!Ze(t)&&(e.class=Wn(t)),n&&(e.style=Ll(n)),e}const uC="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",hC=du(uC);function cm(e){return!!e||e===""}const Je=e=>Ze(e)?e:e==null?"":te(e)||Ke(e)&&(e.toString===lm||!ae(e.toString))?JSON.stringify(e,um,2):String(e),um=(e,t)=>t&&t.__v_isRef?um(e,t.value):us(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[i,s])=>(n[`${i} =>`]=s,n),{})}:rm(t)?{[`Set(${t.size})`]:[...t.values()]}:Ke(t)&&!te(t)&&!am(t)?String(t):t;let rn;class hm{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=rn,!t&&rn&&(this.index=(rn.scopes||(rn.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=rn;try{return rn=this,t()}finally{rn=n}}}on(){rn=this}off(){rn=this.parent}stop(t){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function dC(e){return new hm(e)}function fC(e,t=rn){t&&t.active&&t.effects.push(e)}function pC(){return rn}const _u=e=>{const t=new Set(e);return t.w=0,t.n=0,t},dm=e=>(e.w&fi)>0,fm=e=>(e.n&fi)>0,mC=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=fi},gC=e=>{const{deps:t}=e;if(t.length){let n=0;for(let i=0;i<t.length;i++){const s=t[i];dm(s)&&!fm(s)?s.delete(e):t[n++]=s,s.w&=~fi,s.n&=~fi}t.length=n}},hc=new WeakMap;let rr=0,fi=1;const dc=30;let on;const Di=Symbol(""),fc=Symbol("");class vu{constructor(t,n=null,i){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,fC(this,i)}run(){if(!this.active)return this.fn();let t=on,n=ai;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=on,on=this,ai=!0,fi=1<<++rr,rr<=dc?mC(this):wd(this),this.fn()}finally{rr<=dc&&gC(this),fi=1<<--rr,on=this.parent,ai=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){on===this?this.deferStop=!0:this.active&&(wd(this),this.onStop&&this.onStop(),this.active=!1)}}function wd(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let ai=!0;const pm=[];function Rs(){pm.push(ai),ai=!1}function Ps(){const e=pm.pop();ai=e===void 0?!0:e}function Ht(e,t,n){if(ai&&on){let i=hc.get(e);i||hc.set(e,i=new Map);let s=i.get(n);s||i.set(n,s=_u()),mm(s)}}function mm(e,t){let n=!1;rr<=dc?fm(e)||(e.n|=fi,n=!dm(e)):n=!e.has(on),n&&(e.add(on),on.deps.push(e))}function jn(e,t,n,i,s,r){const o=hc.get(e);if(!o)return;let l=[];if(t==="clear")l=[...o.values()];else if(n==="length"&&te(e)){const a=Number(i);o.forEach((c,d)=>{(d==="length"||d>=a)&&l.push(c)})}else switch(n!==void 0&&l.push(o.get(n)),t){case"add":te(e)?gu(n)&&l.push(o.get("length")):(l.push(o.get(Di)),us(e)&&l.push(o.get(fc)));break;case"delete":te(e)||(l.push(o.get(Di)),us(e)&&l.push(o.get(fc)));break;case"set":us(e)&&l.push(o.get(Di));break}if(l.length===1)l[0]&&pc(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);pc(_u(a))}}function pc(e,t){const n=te(e)?e:[...e];for(const i of n)i.computed&&Id(i);for(const i of n)i.computed||Id(i)}function Id(e,t){(e!==on||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const yC=du("__proto__,__v_isRef,__isVue"),gm=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(mu)),_C=bu(),vC=bu(!1,!0),bC=bu(!0),Ed=CC();function CC(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const i=ke(this);for(let r=0,o=this.length;r<o;r++)Ht(i,"get",r+"");const s=i[t](...n);return s===-1||s===!1?i[t](...n.map(ke)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Rs();const i=ke(this)[t].apply(this,n);return Ps(),i}}),e}function wC(e){const t=ke(this);return Ht(t,"has",e),t.hasOwnProperty(e)}function bu(e=!1,t=!1){return function(i,s,r){if(s==="__v_isReactive")return!e;if(s==="__v_isReadonly")return e;if(s==="__v_isShallow")return t;if(s==="__v_raw"&&r===(e?t?BC:Cm:t?bm:vm).get(i))return i;const o=te(i);if(!e){if(o&&Ae(Ed,s))return Reflect.get(Ed,s,r);if(s==="hasOwnProperty")return wC}const l=Reflect.get(i,s,r);return(mu(s)?gm.has(s):yC(s))||(e||Ht(i,"get",s),t)?l:bt(l)?o&&gu(s)?l:l.value:Ke(l)?e?wm(l):xs(l):l}}const IC=ym(),EC=ym(!0);function ym(e=!1){return function(n,i,s,r){let o=n[i];if(bs(o)&&bt(o)&&!bt(s))return!1;if(!e&&(!qo(s)&&!bs(s)&&(o=ke(o),s=ke(s)),!te(n)&&bt(o)&&!bt(s)))return o.value=s,!0;const l=te(n)&&gu(i)?Number(i)<n.length:Ae(n,i),a=Reflect.set(n,i,s,r);return n===ke(r)&&(l?Cr(s,o)&&jn(n,"set",i,s):jn(n,"add",i,s)),a}}function TC(e,t){const n=Ae(e,t);e[t];const i=Reflect.deleteProperty(e,t);return i&&n&&jn(e,"delete",t,void 0),i}function SC(e,t){const n=Reflect.has(e,t);return(!mu(t)||!gm.has(t))&&Ht(e,"has",t),n}function AC(e){return Ht(e,"iterate",te(e)?"length":Di),Reflect.ownKeys(e)}const _m={get:_C,set:IC,deleteProperty:TC,has:SC,ownKeys:AC},kC={get:bC,set(e,t){return!0},deleteProperty(e,t){return!0}},RC=Qe({},_m,{get:vC,set:EC}),Cu=e=>e,Nl=e=>Reflect.getPrototypeOf(e);function yo(e,t,n=!1,i=!1){e=e.__v_raw;const s=ke(e),r=ke(t);n||(t!==r&&Ht(s,"get",t),Ht(s,"get",r));const{has:o}=Nl(s),l=i?Cu:n?Eu:wr;if(o.call(s,t))return l(e.get(t));if(o.call(s,r))return l(e.get(r));e!==s&&e.get(t)}function _o(e,t=!1){const n=this.__v_raw,i=ke(n),s=ke(e);return t||(e!==s&&Ht(i,"has",e),Ht(i,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function vo(e,t=!1){return e=e.__v_raw,!t&&Ht(ke(e),"iterate",Di),Reflect.get(e,"size",e)}function Td(e){e=ke(e);const t=ke(this);return Nl(t).has.call(t,e)||(t.add(e),jn(t,"add",e,e)),this}function Sd(e,t){t=ke(t);const n=ke(this),{has:i,get:s}=Nl(n);let r=i.call(n,e);r||(e=ke(e),r=i.call(n,e));const o=s.call(n,e);return n.set(e,t),r?Cr(t,o)&&jn(n,"set",e,t):jn(n,"add",e,t),this}function Ad(e){const t=ke(this),{has:n,get:i}=Nl(t);let s=n.call(t,e);s||(e=ke(e),s=n.call(t,e)),i&&i.call(t,e);const r=t.delete(e);return s&&jn(t,"delete",e,void 0),r}function kd(){const e=ke(this),t=e.size!==0,n=e.clear();return t&&jn(e,"clear",void 0,void 0),n}function bo(e,t){return function(i,s){const r=this,o=r.__v_raw,l=ke(o),a=t?Cu:e?Eu:wr;return!e&&Ht(l,"iterate",Di),o.forEach((c,d)=>i.call(s,a(c),a(d),r))}}function Co(e,t,n){return function(...i){const s=this.__v_raw,r=ke(s),o=us(r),l=e==="entries"||e===Symbol.iterator&&o,a=e==="keys"&&o,c=s[e](...i),d=n?Cu:t?Eu:wr;return!t&&Ht(r,"iterate",a?fc:Di),{next(){const{value:f,done:m}=c.next();return m?{value:f,done:m}:{value:l?[d(f[0]),d(f[1])]:d(f),done:m}},[Symbol.iterator](){return this}}}}function Xn(e){return function(...t){return e==="delete"?!1:this}}function PC(){const e={get(r){return yo(this,r)},get size(){return vo(this)},has:_o,add:Td,set:Sd,delete:Ad,clear:kd,forEach:bo(!1,!1)},t={get(r){return yo(this,r,!1,!0)},get size(){return vo(this)},has:_o,add:Td,set:Sd,delete:Ad,clear:kd,forEach:bo(!1,!0)},n={get(r){return yo(this,r,!0)},get size(){return vo(this,!0)},has(r){return _o.call(this,r,!0)},add:Xn("add"),set:Xn("set"),delete:Xn("delete"),clear:Xn("clear"),forEach:bo(!0,!1)},i={get(r){return yo(this,r,!0,!0)},get size(){return vo(this,!0)},has(r){return _o.call(this,r,!0)},add:Xn("add"),set:Xn("set"),delete:Xn("delete"),clear:Xn("clear"),forEach:bo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=Co(r,!1,!1),n[r]=Co(r,!0,!1),t[r]=Co(r,!1,!0),i[r]=Co(r,!0,!0)}),[e,n,t,i]}const[xC,OC,LC,NC]=PC();function wu(e,t){const n=t?e?NC:LC:e?OC:xC;return(i,s,r)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?i:Reflect.get(Ae(n,s)&&s in i?n:i,s,r)}const DC={get:wu(!1,!1)},MC={get:wu(!1,!0)},FC={get:wu(!0,!1)},vm=new WeakMap,bm=new WeakMap,Cm=new WeakMap,BC=new WeakMap;function UC(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function HC(e){return e.__v_skip||!Object.isExtensible(e)?0:UC(tC(e))}function xs(e){return bs(e)?e:Iu(e,!1,_m,DC,vm)}function $C(e){return Iu(e,!1,RC,MC,bm)}function wm(e){return Iu(e,!0,kC,FC,Cm)}function Iu(e,t,n,i,s){if(!Ke(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=s.get(e);if(r)return r;const o=HC(e);if(o===0)return e;const l=new Proxy(e,o===2?i:n);return s.set(e,l),l}function hs(e){return bs(e)?hs(e.__v_raw):!!(e&&e.__v_isReactive)}function bs(e){return!!(e&&e.__v_isReadonly)}function qo(e){return!!(e&&e.__v_isShallow)}function Im(e){return hs(e)||bs(e)}function ke(e){const t=e&&e.__v_raw;return t?ke(t):e}function Em(e){return Ko(e,"__v_skip",!0),e}const wr=e=>Ke(e)?xs(e):e,Eu=e=>Ke(e)?wm(e):e;function Tm(e){ai&&on&&(e=ke(e),mm(e.dep||(e.dep=_u())))}function Sm(e,t){e=ke(e);const n=e.dep;n&&pc(n)}function bt(e){return!!(e&&e.__v_isRef===!0)}function Am(e){return km(e,!1)}function VC(e){return km(e,!0)}function km(e,t){return bt(e)?e:new zC(e,t)}class zC{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:ke(t),this._value=n?t:wr(t)}get value(){return Tm(this),this._value}set value(t){const n=this.__v_isShallow||qo(t)||bs(t);t=n?t:ke(t),Cr(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:wr(t),Sm(this))}}function ds(e){return bt(e)?e.value:e}const WC={get:(e,t,n)=>ds(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const s=e[t];return bt(s)&&!bt(n)?(s.value=n,!0):Reflect.set(e,t,n,i)}};function Rm(e){return hs(e)?e:new Proxy(e,WC)}class jC{constructor(t,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new vu(t,()=>{this._dirty||(this._dirty=!0,Sm(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const t=ke(this);return Tm(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function KC(e,t,n=!1){let i,s;const r=ae(e);return r?(i=e,s=dn):(i=e.get,s=e.set),new jC(i,s,r||!s,n)}function ci(e,t,n,i){let s;try{s=i?e(...i):e()}catch(r){Dl(r,t,n)}return s}function Zt(e,t,n,i){if(ae(e)){const r=ci(e,t,n,i);return r&&om(r)&&r.catch(o=>{Dl(o,t,n)}),r}const s=[];for(let r=0;r<e.length;r++)s.push(Zt(e[r],t,n,i));return s}function Dl(e,t,n,i=!0){const s=t?t.vnode:null;if(t){let r=t.parent;const o=t.proxy,l=n;for(;r;){const c=r.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,o,l)===!1)return}r=r.parent}const a=t.appContext.config.errorHandler;if(a){ci(a,null,10,[e,o,l]);return}}qC(e,n,s,i)}function qC(e,t,n,i=!0){console.error(e)}let Ir=!1,mc=!1;const vt=[];let vn=0;const fs=[];let Dn=null,Ai=0;const Pm=Promise.resolve();let Tu=null;function xm(e){const t=Tu||Pm;return e?t.then(this?e.bind(this):e):t}function GC(e){let t=vn+1,n=vt.length;for(;t<n;){const i=t+n>>>1;Er(vt[i])<e?t=i+1:n=i}return t}function Su(e){(!vt.length||!vt.includes(e,Ir&&e.allowRecurse?vn+1:vn))&&(e.id==null?vt.push(e):vt.splice(GC(e.id),0,e),Om())}function Om(){!Ir&&!mc&&(mc=!0,Tu=Pm.then(Nm))}function YC(e){const t=vt.indexOf(e);t>vn&&vt.splice(t,1)}function XC(e){te(e)?fs.push(...e):(!Dn||!Dn.includes(e,e.allowRecurse?Ai+1:Ai))&&fs.push(e),Om()}function Rd(e,t=Ir?vn+1:0){for(;t<vt.length;t++){const n=vt[t];n&&n.pre&&(vt.splice(t,1),t--,n())}}function Lm(e){if(fs.length){const t=[...new Set(fs)];if(fs.length=0,Dn){Dn.push(...t);return}for(Dn=t,Dn.sort((n,i)=>Er(n)-Er(i)),Ai=0;Ai<Dn.length;Ai++)Dn[Ai]();Dn=null,Ai=0}}const Er=e=>e.id==null?1/0:e.id,JC=(e,t)=>{const n=Er(e)-Er(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Nm(e){mc=!1,Ir=!0,vt.sort(JC);const t=dn;try{for(vn=0;vn<vt.length;vn++){const n=vt[vn];n&&n.active!==!1&&ci(n,null,14)}}finally{vn=0,vt.length=0,Lm(),Ir=!1,Tu=null,(vt.length||fs.length)&&Nm()}}function ZC(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||ze;let s=n;const r=t.startsWith("update:"),o=r&&t.slice(7);if(o&&o in i){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:m}=i[d]||ze;m&&(s=n.map(b=>Ze(b)?b.trim():b)),f&&(s=n.map(sC))}let l,a=i[l=ka(t)]||i[l=ka(Sn(t))];!a&&r&&(a=i[l=ka(Gi(t))]),a&&Zt(a,e,6,s);const c=i[l+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Zt(c,e,6,s)}}function Dm(e,t,n=!1){const i=t.emitsCache,s=i.get(e);if(s!==void 0)return s;const r=e.emits;let o={},l=!1;if(!ae(e)){const a=c=>{const d=Dm(c,t,!0);d&&(l=!0,Qe(o,d))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!r&&!l?(Ke(e)&&i.set(e,null),null):(te(r)?r.forEach(a=>o[a]=null):Qe(o,r),Ke(e)&&i.set(e,o),o)}function Ml(e,t){return!e||!Rl(t)?!1:(t=t.slice(2).replace(/Once$/,""),Ae(e,t[0].toLowerCase()+t.slice(1))||Ae(e,Gi(t))||Ae(e,t))}let pt=null,Mm=null;function Go(e){const t=pt;return pt=e,Mm=e&&e.type.__scopeId||null,t}function je(e,t=pt,n){if(!t||e._n)return e;const i=(...s)=>{i._d&&Vd(-1);const r=Go(t);let o;try{o=e(...s)}finally{Go(r),i._d&&Vd(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Pa(e){const{type:t,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:l,attrs:a,emit:c,render:d,renderCache:f,data:m,setupState:b,ctx:C,inheritAttrs:A}=e;let M,z;const j=Go(e);try{if(n.shapeFlag&4){const F=s||i;M=_n(d.call(F,F,f,r,b,m,C)),z=a}else{const F=t;M=_n(F.length>1?F(r,{attrs:a,slots:l,emit:c}):F(r,null)),z=t.props?a:QC(a)}}catch(F){fr.length=0,Dl(F,e,1),M=fe(Qt)}let Y=M;if(z&&A!==!1){const F=Object.keys(z),{shapeFlag:oe}=Y;F.length&&oe&7&&(o&&F.some(fu)&&(z=e2(z,o)),Y=pi(Y,z))}return n.dirs&&(Y=pi(Y),Y.dirs=Y.dirs?Y.dirs.concat(n.dirs):n.dirs),n.transition&&(Y.transition=n.transition),M=Y,Go(j),M}const QC=e=>{let t;for(const n in e)(n==="class"||n==="style"||Rl(n))&&((t||(t={}))[n]=e[n]);return t},e2=(e,t)=>{const n={};for(const i in e)(!fu(i)||!(i.slice(9)in t))&&(n[i]=e[i]);return n};function t2(e,t,n){const{props:i,children:s,component:r}=e,{props:o,children:l,patchFlag:a}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return i?Pd(i,o,c):!!o;if(a&8){const d=t.dynamicProps;for(let f=0;f<d.length;f++){const m=d[f];if(o[m]!==i[m]&&!Ml(c,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:i===o?!1:i?o?Pd(i,o,c):!0:!!o;return!1}function Pd(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(t[r]!==e[r]&&!Ml(n,r))return!0}return!1}function n2({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const i2=e=>e.__isSuspense;function s2(e,t){t&&t.pendingBranch?te(e)?t.effects.push(...e):t.effects.push(e):XC(e)}const wo={};function Bo(e,t,n){return Fm(e,t,n)}function Fm(e,t,{immediate:n,deep:i,flush:s,onTrack:r,onTrigger:o}=ze){var l;const a=pC()===((l=ot)==null?void 0:l.scope)?ot:null;let c,d=!1,f=!1;if(bt(e)?(c=()=>e.value,d=qo(e)):hs(e)?(c=()=>e,i=!0):te(e)?(f=!0,d=e.some(F=>hs(F)||qo(F)),c=()=>e.map(F=>{if(bt(F))return F.value;if(hs(F))return Pi(F);if(ae(F))return ci(F,a,2)})):ae(e)?t?c=()=>ci(e,a,2):c=()=>{if(!(a&&a.isUnmounted))return m&&m(),Zt(e,a,3,[b])}:c=dn,t&&i){const F=c;c=()=>Pi(F())}let m,b=F=>{m=j.onStop=()=>{ci(F,a,4)}},C;if(kr)if(b=dn,t?n&&Zt(t,a,3,[c(),f?[]:void 0,b]):c(),s==="sync"){const F=J2();C=F.__watcherHandles||(F.__watcherHandles=[])}else return dn;let A=f?new Array(e.length).fill(wo):wo;const M=()=>{if(j.active)if(t){const F=j.run();(i||d||(f?F.some((oe,pe)=>Cr(oe,A[pe])):Cr(F,A)))&&(m&&m(),Zt(t,a,3,[F,A===wo?void 0:f&&A[0]===wo?[]:A,b]),A=F)}else j.run()};M.allowRecurse=!!t;let z;s==="sync"?z=M:s==="post"?z=()=>Ft(M,a&&a.suspense):(M.pre=!0,a&&(M.id=a.uid),z=()=>Su(M));const j=new vu(c,z);t?n?M():A=j.run():s==="post"?Ft(j.run.bind(j),a&&a.suspense):j.run();const Y=()=>{j.stop(),a&&a.scope&&pu(a.scope.effects,j)};return C&&C.push(Y),Y}function r2(e,t,n){const i=this.proxy,s=Ze(e)?e.includes(".")?Bm(i,e):()=>i[e]:e.bind(i,i);let r;ae(t)?r=t:(r=t.handler,n=t);const o=ot;ws(this);const l=Fm(s,r.bind(i),n);return o?ws(o):Mi(),l}function Bm(e,t){const n=t.split(".");return()=>{let i=e;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function Pi(e,t){if(!Ke(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),bt(e))Pi(e.value,t);else if(te(e))for(let n=0;n<e.length;n++)Pi(e[n],t);else if(rm(e)||us(e))e.forEach(n=>{Pi(n,t)});else if(am(e))for(const n in e)Pi(e[n],t);return e}function fn(e,t){const n=pt;if(n===null)return e;const i=$l(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[o,l,a,c=ze]=t[r];o&&(ae(o)&&(o={mounted:o,updated:o}),o.deep&&Pi(l),s.push({dir:o,instance:i,value:l,oldValue:void 0,arg:a,modifiers:c}))}return e}function wi(e,t,n,i){const s=e.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const l=s[o];r&&(l.oldValue=r[o].value);let a=l.dir[i];a&&(Rs(),Zt(a,n,8,[e.el,l,e,t]),Ps())}}function Um(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Wm(()=>{e.isMounted=!0}),Km(()=>{e.isUnmounting=!0}),e}const Yt=[Function,Array],Hm={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Yt,onEnter:Yt,onAfterEnter:Yt,onEnterCancelled:Yt,onBeforeLeave:Yt,onLeave:Yt,onAfterLeave:Yt,onLeaveCancelled:Yt,onBeforeAppear:Yt,onAppear:Yt,onAfterAppear:Yt,onAppearCancelled:Yt},o2={name:"BaseTransition",props:Hm,setup(e,{slots:t}){const n=Du(),i=Um();let s;return()=>{const r=t.default&&Au(t.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const A of r)if(A.type!==Qt){o=A;break}}const l=ke(e),{mode:a}=l;if(i.isLeaving)return xa(o);const c=xd(o);if(!c)return xa(o);const d=Tr(c,l,i,n);Sr(c,d);const f=n.subTree,m=f&&xd(f);let b=!1;const{getTransitionKey:C}=c.type;if(C){const A=C();s===void 0?s=A:A!==s&&(s=A,b=!0)}if(m&&m.type!==Qt&&(!ki(c,m)||b)){const A=Tr(m,l,i,n);if(Sr(m,A),a==="out-in")return i.isLeaving=!0,A.afterLeave=()=>{i.isLeaving=!1,n.update.active!==!1&&n.update()},xa(o);a==="in-out"&&c.type!==Qt&&(A.delayLeave=(M,z,j)=>{const Y=$m(i,m);Y[String(m.key)]=m,M._leaveCb=()=>{z(),M._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=j})}return o}}},l2=o2;function $m(e,t){const{leavingVNodes:n}=e;let i=n.get(t.type);return i||(i=Object.create(null),n.set(t.type,i)),i}function Tr(e,t,n,i){const{appear:s,mode:r,persisted:o=!1,onBeforeEnter:l,onEnter:a,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:f,onLeave:m,onAfterLeave:b,onLeaveCancelled:C,onBeforeAppear:A,onAppear:M,onAfterAppear:z,onAppearCancelled:j}=t,Y=String(e.key),F=$m(n,e),oe=(J,me)=>{J&&Zt(J,i,9,me)},pe=(J,me)=>{const _e=me[1];oe(J,me),te(J)?J.every(Fe=>Fe.length<=1)&&_e():J.length<=1&&_e()},Re={mode:r,persisted:o,beforeEnter(J){let me=l;if(!n.isMounted)if(s)me=A||l;else return;J._leaveCb&&J._leaveCb(!0);const _e=F[Y];_e&&ki(e,_e)&&_e.el._leaveCb&&_e.el._leaveCb(),oe(me,[J])},enter(J){let me=a,_e=c,Fe=d;if(!n.isMounted)if(s)me=M||a,_e=z||c,Fe=j||d;else return;let v=!1;const Pe=J._enterCb=we=>{v||(v=!0,we?oe(Fe,[J]):oe(_e,[J]),Re.delayedLeave&&Re.delayedLeave(),J._enterCb=void 0)};me?pe(me,[J,Pe]):Pe()},leave(J,me){const _e=String(e.key);if(J._enterCb&&J._enterCb(!0),n.isUnmounting)return me();oe(f,[J]);let Fe=!1;const v=J._leaveCb=Pe=>{Fe||(Fe=!0,me(),Pe?oe(C,[J]):oe(b,[J]),J._leaveCb=void 0,F[_e]===e&&delete F[_e])};F[_e]=e,m?pe(m,[J,v]):v()},clone(J){return Tr(J,t,n,i)}};return Re}function xa(e){if(Fl(e))return e=pi(e),e.children=null,e}function xd(e){return Fl(e)?e.children?e.children[0]:void 0:e}function Sr(e,t){e.shapeFlag&6&&e.component?Sr(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Au(e,t=!1,n){let i=[],s=0;for(let r=0;r<e.length;r++){let o=e[r];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===De?(o.patchFlag&128&&s++,i=i.concat(Au(o.children,t,l))):(t||o.type!==Qt)&&i.push(l!=null?pi(o,{key:l}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function Vm(e,t){return ae(e)?(()=>Qe({name:e.name},t,{setup:e}))():e}const ur=e=>!!e.type.__asyncLoader,Fl=e=>e.type.__isKeepAlive;function a2(e,t){zm(e,"a",t)}function c2(e,t){zm(e,"da",t)}function zm(e,t,n=ot){const i=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Bl(t,i,n),n){let s=n.parent;for(;s&&s.parent;)Fl(s.parent.vnode)&&u2(i,t,n,s),s=s.parent}}function u2(e,t,n,i){const s=Bl(t,e,i,!0);qm(()=>{pu(i[t],s)},n)}function Bl(e,t,n=ot,i=!1){if(n){const s=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Rs(),ws(n);const l=Zt(t,n,e,o);return Mi(),Ps(),l});return i?s.unshift(r):s.push(r),r}}const Gn=e=>(t,n=ot)=>(!kr||e==="sp")&&Bl(e,(...i)=>t(...i),n),h2=Gn("bm"),Wm=Gn("m"),d2=Gn("bu"),jm=Gn("u"),Km=Gn("bum"),qm=Gn("um"),f2=Gn("sp"),p2=Gn("rtg"),m2=Gn("rtc");function g2(e,t=ot){Bl("ec",e,t)}const ku="components",y2="directives";function Ye(e,t){return Ru(ku,e,!0,t)||e}const Gm=Symbol.for("v-ndc");function tt(e){return Ze(e)?Ru(ku,e,!1)||e:e||Gm}function Hi(e){return Ru(y2,e)}function Ru(e,t,n=!0,i=!1){const s=pt||ot;if(s){const r=s.type;if(e===ku){const l=G2(r,!1);if(l&&(l===t||l===Sn(t)||l===Ol(Sn(t))))return r}const o=Od(s[e]||r[e],t)||Od(s.appContext[e],t);return!o&&i?r:o}}function Od(e,t){return e&&(e[t]||e[Sn(t)]||e[Ol(Sn(t))])}function Cs(e,t,n,i){let s;const r=n&&n[i];if(te(e)||Ze(e)){s=new Array(e.length);for(let o=0,l=e.length;o<l;o++)s[o]=t(e[o],o,void 0,r&&r[o])}else if(typeof e=="number"){s=new Array(e);for(let o=0;o<e;o++)s[o]=t(o+1,o,void 0,r&&r[o])}else if(Ke(e))if(e[Symbol.iterator])s=Array.from(e,(o,l)=>t(o,l,void 0,r&&r[l]));else{const o=Object.keys(e);s=new Array(o.length);for(let l=0,a=o.length;l<a;l++){const c=o[l];s[l]=t(e[c],c,l,r&&r[l])}}else s=[];return n&&(n[i]=s),s}function he(e,t,n={},i,s){if(pt.isCE||pt.parent&&ur(pt.parent)&&pt.parent.isCE)return t!=="default"&&(n.name=t),fe("slot",n,i&&i());let r=e[t];r&&r._c&&(r._d=!1),I();const o=r&&Ym(r(n)),l=ue(De,{key:n.key||o&&o.key||`_${t}`},o||(i?i():[]),o&&e._===1?64:-2);return!s&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),r&&r._c&&(r._d=!0),l}function Ym(e){return e.some(t=>Jo(t)?!(t.type===Qt||t.type===De&&!Ym(t.children)):!0)?e:null}const gc=e=>e?og(e)?$l(e)||e.proxy:gc(e.parent):null,hr=Qe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>gc(e.parent),$root:e=>gc(e.root),$emit:e=>e.emit,$options:e=>Pu(e),$forceUpdate:e=>e.f||(e.f=()=>Su(e.update)),$nextTick:e=>e.n||(e.n=xm.bind(e.proxy)),$watch:e=>r2.bind(e)}),Oa=(e,t)=>e!==ze&&!e.__isScriptSetup&&Ae(e,t),_2={get({_:e},t){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:l,appContext:a}=e;let c;if(t[0]!=="$"){const b=o[t];if(b!==void 0)switch(b){case 1:return i[t];case 2:return s[t];case 4:return n[t];case 3:return r[t]}else{if(Oa(i,t))return o[t]=1,i[t];if(s!==ze&&Ae(s,t))return o[t]=2,s[t];if((c=e.propsOptions[0])&&Ae(c,t))return o[t]=3,r[t];if(n!==ze&&Ae(n,t))return o[t]=4,n[t];yc&&(o[t]=0)}}const d=hr[t];let f,m;if(d)return t==="$attrs"&&Ht(e,"get",t),d(e);if((f=l.__cssModules)&&(f=f[t]))return f;if(n!==ze&&Ae(n,t))return o[t]=4,n[t];if(m=a.config.globalProperties,Ae(m,t))return m[t]},set({_:e},t,n){const{data:i,setupState:s,ctx:r}=e;return Oa(s,t)?(s[t]=n,!0):i!==ze&&Ae(i,t)?(i[t]=n,!0):Ae(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let l;return!!n[o]||e!==ze&&Ae(e,o)||Oa(t,o)||(l=r[0])&&Ae(l,o)||Ae(i,o)||Ae(hr,o)||Ae(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Ae(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ld(e){return te(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let yc=!0;function v2(e){const t=Pu(e),n=e.proxy,i=e.ctx;yc=!1,t.beforeCreate&&Nd(t.beforeCreate,e,"bc");const{data:s,computed:r,methods:o,watch:l,provide:a,inject:c,created:d,beforeMount:f,mounted:m,beforeUpdate:b,updated:C,activated:A,deactivated:M,beforeDestroy:z,beforeUnmount:j,destroyed:Y,unmounted:F,render:oe,renderTracked:pe,renderTriggered:Re,errorCaptured:J,serverPrefetch:me,expose:_e,inheritAttrs:Fe,components:v,directives:Pe,filters:we}=t;if(c&&b2(c,i,null),o)for(const X in o){const Ie=o[X];ae(Ie)&&(i[X]=Ie.bind(n))}if(s){const X=s.call(n,n);Ke(X)&&(e.data=xs(X))}if(yc=!0,r)for(const X in r){const Ie=r[X],Lt=ae(Ie)?Ie.bind(n,n):ae(Ie.get)?Ie.get.bind(n,n):dn,Gt=!ae(Ie)&&ae(Ie.set)?Ie.set.bind(n):dn,Nt=ln({get:Lt,set:Gt});Object.defineProperty(i,X,{enumerable:!0,configurable:!0,get:()=>Nt.value,set:ut=>Nt.value=ut})}if(l)for(const X in l)Xm(l[X],i,n,X);if(a){const X=ae(a)?a.call(n):a;Reflect.ownKeys(X).forEach(Ie=>{Uo(Ie,X[Ie])})}d&&Nd(d,e,"c");function ve(X,Ie){te(Ie)?Ie.forEach(Lt=>X(Lt.bind(n))):Ie&&X(Ie.bind(n))}if(ve(h2,f),ve(Wm,m),ve(d2,b),ve(jm,C),ve(a2,A),ve(c2,M),ve(g2,J),ve(m2,pe),ve(p2,Re),ve(Km,j),ve(qm,F),ve(f2,me),te(_e))if(_e.length){const X=e.exposed||(e.exposed={});_e.forEach(Ie=>{Object.defineProperty(X,Ie,{get:()=>n[Ie],set:Lt=>n[Ie]=Lt})})}else e.exposed||(e.exposed={});oe&&e.render===dn&&(e.render=oe),Fe!=null&&(e.inheritAttrs=Fe),v&&(e.components=v),Pe&&(e.directives=Pe)}function b2(e,t,n=dn){te(e)&&(e=_c(e));for(const i in e){const s=e[i];let r;Ke(s)?"default"in s?r=In(s.from||i,s.default,!0):r=In(s.from||i):r=In(s),bt(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function Nd(e,t,n){Zt(te(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,n)}function Xm(e,t,n,i){const s=i.includes(".")?Bm(n,i):()=>n[i];if(Ze(e)){const r=t[e];ae(r)&&Bo(s,r)}else if(ae(e))Bo(s,e.bind(n));else if(Ke(e))if(te(e))e.forEach(r=>Xm(r,t,n,i));else{const r=ae(e.handler)?e.handler.bind(n):t[e.handler];ae(r)&&Bo(s,r,e)}}function Pu(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,l=r.get(t);let a;return l?a=l:!s.length&&!n&&!i?a=t:(a={},s.length&&s.forEach(c=>Yo(a,c,o,!0)),Yo(a,t,o)),Ke(t)&&r.set(t,a),a}function Yo(e,t,n,i=!1){const{mixins:s,extends:r}=t;r&&Yo(e,r,n,!0),s&&s.forEach(o=>Yo(e,o,n,!0));for(const o in t)if(!(i&&o==="expose")){const l=C2[o]||n&&n[o];e[o]=l?l(e[o],t[o]):t[o]}return e}const C2={data:Dd,props:Md,emits:Md,methods:or,computed:or,beforeCreate:Rt,created:Rt,beforeMount:Rt,mounted:Rt,beforeUpdate:Rt,updated:Rt,beforeDestroy:Rt,beforeUnmount:Rt,destroyed:Rt,unmounted:Rt,activated:Rt,deactivated:Rt,errorCaptured:Rt,serverPrefetch:Rt,components:or,directives:or,watch:I2,provide:Dd,inject:w2};function Dd(e,t){return t?e?function(){return Qe(ae(e)?e.call(this,this):e,ae(t)?t.call(this,this):t)}:t:e}function w2(e,t){return or(_c(e),_c(t))}function _c(e){if(te(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Rt(e,t){return e?[...new Set([].concat(e,t))]:t}function or(e,t){return e?Qe(Object.create(null),e,t):t}function Md(e,t){return e?te(e)&&te(t)?[...new Set([...e,...t])]:Qe(Object.create(null),Ld(e),Ld(t??{})):t}function I2(e,t){if(!e)return t;if(!t)return e;const n=Qe(Object.create(null),e);for(const i in t)n[i]=Rt(e[i],t[i]);return n}function Jm(){return{app:null,config:{isNativeTag:Zb,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let E2=0;function T2(e,t){return function(i,s=null){ae(i)||(i=Qe({},i)),s!=null&&!Ke(s)&&(s=null);const r=Jm(),o=new Set;let l=!1;const a=r.app={_uid:E2++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Z2,get config(){return r.config},set config(c){},use(c,...d){return o.has(c)||(c&&ae(c.install)?(o.add(c),c.install(a,...d)):ae(c)&&(o.add(c),c(a,...d))),a},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),a},component(c,d){return d?(r.components[c]=d,a):r.components[c]},directive(c,d){return d?(r.directives[c]=d,a):r.directives[c]},mount(c,d,f){if(!l){const m=fe(i,s);return m.appContext=r,d&&t?t(m,c):e(m,c,f),l=!0,a._container=c,c.__vue_app__=a,$l(m.component)||m.component.proxy}},unmount(){l&&(e(null,a._container),delete a._container.__vue_app__)},provide(c,d){return r.provides[c]=d,a},runWithContext(c){Xo=a;try{return c()}finally{Xo=null}}};return a}}let Xo=null;function Uo(e,t){if(ot){let n=ot.provides;const i=ot.parent&&ot.parent.provides;i===n&&(n=ot.provides=Object.create(i)),n[e]=t}}function In(e,t,n=!1){const i=ot||pt;if(i||Xo){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Xo._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&ae(t)?t.call(i&&i.proxy):t}}function S2(e,t,n,i=!1){const s={},r={};Ko(r,Hl,1),e.propsDefaults=Object.create(null),Zm(e,t,s,r);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=i?s:$C(s):e.type.props?e.props=s:e.props=r,e.attrs=r}function A2(e,t,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=e,l=ke(s),[a]=e.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let f=0;f<d.length;f++){let m=d[f];if(Ml(e.emitsOptions,m))continue;const b=t[m];if(a)if(Ae(r,m))b!==r[m]&&(r[m]=b,c=!0);else{const C=Sn(m);s[C]=vc(a,l,C,b,e,!1)}else b!==r[m]&&(r[m]=b,c=!0)}}}else{Zm(e,t,s,r)&&(c=!0);let d;for(const f in l)(!t||!Ae(t,f)&&((d=Gi(f))===f||!Ae(t,d)))&&(a?n&&(n[f]!==void 0||n[d]!==void 0)&&(s[f]=vc(a,l,f,void 0,e,!0)):delete s[f]);if(r!==l)for(const f in r)(!t||!Ae(t,f))&&(delete r[f],c=!0)}c&&jn(e,"set","$attrs")}function Zm(e,t,n,i){const[s,r]=e.propsOptions;let o=!1,l;if(t)for(let a in t){if(Fo(a))continue;const c=t[a];let d;s&&Ae(s,d=Sn(a))?!r||!r.includes(d)?n[d]=c:(l||(l={}))[d]=c:Ml(e.emitsOptions,a)||(!(a in i)||c!==i[a])&&(i[a]=c,o=!0)}if(r){const a=ke(n),c=l||ze;for(let d=0;d<r.length;d++){const f=r[d];n[f]=vc(s,a,f,c[f],e,!Ae(c,f))}}return o}function vc(e,t,n,i,s,r){const o=e[n];if(o!=null){const l=Ae(o,"default");if(l&&i===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&ae(a)){const{propsDefaults:c}=s;n in c?i=c[n]:(ws(s),i=c[n]=a.call(null,t),Mi())}else i=a}o[0]&&(r&&!l?i=!1:o[1]&&(i===""||i===Gi(n))&&(i=!0))}return i}function Qm(e,t,n=!1){const i=t.propsCache,s=i.get(e);if(s)return s;const r=e.props,o={},l=[];let a=!1;if(!ae(e)){const d=f=>{a=!0;const[m,b]=Qm(f,t,!0);Qe(o,m),b&&l.push(...b)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!r&&!a)return Ke(e)&&i.set(e,cs),cs;if(te(r))for(let d=0;d<r.length;d++){const f=Sn(r[d]);Fd(f)&&(o[f]=ze)}else if(r)for(const d in r){const f=Sn(d);if(Fd(f)){const m=r[d],b=o[f]=te(m)||ae(m)?{type:m}:Qe({},m);if(b){const C=Hd(Boolean,b.type),A=Hd(String,b.type);b[0]=C>-1,b[1]=A<0||C<A,(C>-1||Ae(b,"default"))&&l.push(f)}}}const c=[o,l];return Ke(e)&&i.set(e,c),c}function Fd(e){return e[0]!=="$"}function Bd(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Ud(e,t){return Bd(e)===Bd(t)}function Hd(e,t){return te(t)?t.findIndex(n=>Ud(n,e)):ae(t)&&Ud(t,e)?0:-1}const eg=e=>e[0]==="_"||e==="$stable",xu=e=>te(e)?e.map(_n):[_n(e)],k2=(e,t,n)=>{if(t._n)return t;const i=je((...s)=>xu(t(...s)),n);return i._c=!1,i},tg=(e,t,n)=>{const i=e._ctx;for(const s in e){if(eg(s))continue;const r=e[s];if(ae(r))t[s]=k2(s,r,i);else if(r!=null){const o=xu(r);t[s]=()=>o}}},ng=(e,t)=>{const n=xu(t);e.slots.default=()=>n},R2=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=ke(t),Ko(t,"_",n)):tg(t,e.slots={})}else e.slots={},t&&ng(e,t);Ko(e.slots,Hl,1)},P2=(e,t,n)=>{const{vnode:i,slots:s}=e;let r=!0,o=ze;if(i.shapeFlag&32){const l=t._;l?n&&l===1?r=!1:(Qe(s,t),!n&&l===1&&delete s._):(r=!t.$stable,tg(t,s)),o=t}else t&&(ng(e,t),o={default:1});if(r)for(const l in s)!eg(l)&&!(l in o)&&delete s[l]};function bc(e,t,n,i,s=!1){if(te(e)){e.forEach((m,b)=>bc(m,t&&(te(t)?t[b]:t),n,i,s));return}if(ur(i)&&!s)return;const r=i.shapeFlag&4?$l(i.component)||i.component.proxy:i.el,o=s?null:r,{i:l,r:a}=e,c=t&&t.r,d=l.refs===ze?l.refs={}:l.refs,f=l.setupState;if(c!=null&&c!==a&&(Ze(c)?(d[c]=null,Ae(f,c)&&(f[c]=null)):bt(c)&&(c.value=null)),ae(a))ci(a,l,12,[o,d]);else{const m=Ze(a),b=bt(a);if(m||b){const C=()=>{if(e.f){const A=m?Ae(f,a)?f[a]:d[a]:a.value;s?te(A)&&pu(A,r):te(A)?A.includes(r)||A.push(r):m?(d[a]=[r],Ae(f,a)&&(f[a]=d[a])):(a.value=[r],e.k&&(d[e.k]=a.value))}else m?(d[a]=o,Ae(f,a)&&(f[a]=o)):b&&(a.value=o,e.k&&(d[e.k]=o))};o?(C.id=-1,Ft(C,n)):C()}}}const Ft=s2;function x2(e){return O2(e)}function O2(e,t){const n=uc();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:d,parentNode:f,nextSibling:m,setScopeId:b=dn,insertStaticContent:C}=e,A=(g,_,w,T=null,R=null,D=null,U=!1,x=null,N=!!_.dynamicChildren)=>{if(g===_)return;g&&!ki(g,_)&&(T=B(g),ut(g,R,D,!0),g=null),_.patchFlag===-2&&(N=!1,_.dynamicChildren=null);const{type:O,ref:K,shapeFlag:q}=_;switch(O){case Ul:M(g,_,w,T);break;case Qt:z(g,_,w,T);break;case Ho:g==null&&j(_,w,T,U);break;case De:v(g,_,w,T,R,D,U,x,N);break;default:q&1?oe(g,_,w,T,R,D,U,x,N):q&6?Pe(g,_,w,T,R,D,U,x,N):(q&64||q&128)&&O.process(g,_,w,T,R,D,U,x,N,be)}K!=null&&R&&bc(K,g&&g.ref,D,_||g,!_)},M=(g,_,w,T)=>{if(g==null)i(_.el=l(_.children),w,T);else{const R=_.el=g.el;_.children!==g.children&&c(R,_.children)}},z=(g,_,w,T)=>{g==null?i(_.el=a(_.children||""),w,T):_.el=g.el},j=(g,_,w,T)=>{[g.el,g.anchor]=C(g.children,_,w,T,g.el,g.anchor)},Y=({el:g,anchor:_},w,T)=>{let R;for(;g&&g!==_;)R=m(g),i(g,w,T),g=R;i(_,w,T)},F=({el:g,anchor:_})=>{let w;for(;g&&g!==_;)w=m(g),s(g),g=w;s(_)},oe=(g,_,w,T,R,D,U,x,N)=>{U=U||_.type==="svg",g==null?pe(_,w,T,R,D,U,x,N):me(g,_,R,D,U,x,N)},pe=(g,_,w,T,R,D,U,x)=>{let N,O;const{type:K,props:q,shapeFlag:Z,transition:ne,dirs:V}=g;if(N=g.el=o(g.type,D,q&&q.is,q),Z&8?d(N,g.children):Z&16&&J(g.children,N,null,T,R,D&&K!=="foreignObject",U,x),V&&wi(g,null,T,"created"),Re(N,g,g.scopeId,U,T),q){for(const ye in q)ye!=="value"&&!Fo(ye)&&r(N,ye,null,q[ye],D,g.children,T,R,W);"value"in q&&r(N,"value",null,q.value),(O=q.onVnodeBeforeMount)&&yn(O,T,g)}V&&wi(g,null,T,"beforeMount");const ge=(!R||R&&!R.pendingBranch)&&ne&&!ne.persisted;ge&&ne.beforeEnter(N),i(N,_,w),((O=q&&q.onVnodeMounted)||ge||V)&&Ft(()=>{O&&yn(O,T,g),ge&&ne.enter(N),V&&wi(g,null,T,"mounted")},R)},Re=(g,_,w,T,R)=>{if(w&&b(g,w),T)for(let D=0;D<T.length;D++)b(g,T[D]);if(R){let D=R.subTree;if(_===D){const U=R.vnode;Re(g,U,U.scopeId,U.slotScopeIds,R.parent)}}},J=(g,_,w,T,R,D,U,x,N=0)=>{for(let O=N;O<g.length;O++){const K=g[O]=x?ii(g[O]):_n(g[O]);A(null,K,_,w,T,R,D,U,x)}},me=(g,_,w,T,R,D,U)=>{const x=_.el=g.el;let{patchFlag:N,dynamicChildren:O,dirs:K}=_;N|=g.patchFlag&16;const q=g.props||ze,Z=_.props||ze;let ne;w&&Ii(w,!1),(ne=Z.onVnodeBeforeUpdate)&&yn(ne,w,_,g),K&&wi(_,g,w,"beforeUpdate"),w&&Ii(w,!0);const V=R&&_.type!=="foreignObject";if(O?_e(g.dynamicChildren,O,x,w,T,V,D):U||Ie(g,_,x,null,w,T,V,D,!1),N>0){if(N&16)Fe(x,_,q,Z,w,T,R);else if(N&2&&q.class!==Z.class&&r(x,"class",null,Z.class,R),N&4&&r(x,"style",q.style,Z.style,R),N&8){const ge=_.dynamicProps;for(let ye=0;ye<ge.length;ye++){const He=ge[ye],Le=q[He],Xe=Z[He];(Xe!==Le||He==="value")&&r(x,He,Le,Xe,R,g.children,w,T,W)}}N&1&&g.children!==_.children&&d(x,_.children)}else!U&&O==null&&Fe(x,_,q,Z,w,T,R);((ne=Z.onVnodeUpdated)||K)&&Ft(()=>{ne&&yn(ne,w,_,g),K&&wi(_,g,w,"updated")},T)},_e=(g,_,w,T,R,D,U)=>{for(let x=0;x<_.length;x++){const N=g[x],O=_[x],K=N.el&&(N.type===De||!ki(N,O)||N.shapeFlag&70)?f(N.el):w;A(N,O,K,null,T,R,D,U,!0)}},Fe=(g,_,w,T,R,D,U)=>{if(w!==T){if(w!==ze)for(const x in w)!Fo(x)&&!(x in T)&&r(g,x,w[x],null,U,_.children,R,D,W);for(const x in T){if(Fo(x))continue;const N=T[x],O=w[x];N!==O&&x!=="value"&&r(g,x,O,N,U,_.children,R,D,W)}"value"in T&&r(g,"value",w.value,T.value)}},v=(g,_,w,T,R,D,U,x,N)=>{const O=_.el=g?g.el:l(""),K=_.anchor=g?g.anchor:l("");let{patchFlag:q,dynamicChildren:Z,slotScopeIds:ne}=_;ne&&(x=x?x.concat(ne):ne),g==null?(i(O,w,T),i(K,w,T),J(_.children,w,K,R,D,U,x,N)):q>0&&q&64&&Z&&g.dynamicChildren?(_e(g.dynamicChildren,Z,w,R,D,U,x),(_.key!=null||R&&_===R.subTree)&&Ou(g,_,!0)):Ie(g,_,w,K,R,D,U,x,N)},Pe=(g,_,w,T,R,D,U,x,N)=>{_.slotScopeIds=x,g==null?_.shapeFlag&512?R.ctx.activate(_,w,T,U,N):we(_,w,T,R,D,U,N):Ot(g,_,N)},we=(g,_,w,T,R,D,U)=>{const x=g.component=z2(g,T,R);if(Fl(g)&&(x.ctx.renderer=be),W2(x),x.asyncDep){if(R&&R.registerDep(x,ve),!g.el){const N=x.subTree=fe(Qt);z(null,N,_,w)}return}ve(x,g,_,w,R,D,U)},Ot=(g,_,w)=>{const T=_.component=g.component;if(t2(g,_,w))if(T.asyncDep&&!T.asyncResolved){X(T,_,w);return}else T.next=_,YC(T.update),T.update();else _.el=g.el,T.vnode=_},ve=(g,_,w,T,R,D,U)=>{const x=()=>{if(g.isMounted){let{next:K,bu:q,u:Z,parent:ne,vnode:V}=g,ge=K,ye;Ii(g,!1),K?(K.el=V.el,X(g,K,U)):K=V,q&&Ra(q),(ye=K.props&&K.props.onVnodeBeforeUpdate)&&yn(ye,ne,K,V),Ii(g,!0);const He=Pa(g),Le=g.subTree;g.subTree=He,A(Le,He,f(Le.el),B(Le),g,R,D),K.el=He.el,ge===null&&n2(g,He.el),Z&&Ft(Z,R),(ye=K.props&&K.props.onVnodeUpdated)&&Ft(()=>yn(ye,ne,K,V),R)}else{let K;const{el:q,props:Z}=_,{bm:ne,m:V,parent:ge}=g,ye=ur(_);if(Ii(g,!1),ne&&Ra(ne),!ye&&(K=Z&&Z.onVnodeBeforeMount)&&yn(K,ge,_),Ii(g,!0),q&&le){const He=()=>{g.subTree=Pa(g),le(q,g.subTree,g,R,null)};ye?_.type.__asyncLoader().then(()=>!g.isUnmounted&&He()):He()}else{const He=g.subTree=Pa(g);A(null,He,w,T,g,R,D),_.el=He.el}if(V&&Ft(V,R),!ye&&(K=Z&&Z.onVnodeMounted)){const He=_;Ft(()=>yn(K,ge,He),R)}(_.shapeFlag&256||ge&&ur(ge.vnode)&&ge.vnode.shapeFlag&256)&&g.a&&Ft(g.a,R),g.isMounted=!0,_=w=T=null}},N=g.effect=new vu(x,()=>Su(O),g.scope),O=g.update=()=>N.run();O.id=g.uid,Ii(g,!0),O()},X=(g,_,w)=>{_.component=g;const T=g.vnode.props;g.vnode=_,g.next=null,A2(g,_.props,T,w),P2(g,_.children,w),Rs(),Rd(),Ps()},Ie=(g,_,w,T,R,D,U,x,N=!1)=>{const O=g&&g.children,K=g?g.shapeFlag:0,q=_.children,{patchFlag:Z,shapeFlag:ne}=_;if(Z>0){if(Z&128){Gt(O,q,w,T,R,D,U,x,N);return}else if(Z&256){Lt(O,q,w,T,R,D,U,x,N);return}}ne&8?(K&16&&W(O,R,D),q!==O&&d(w,q)):K&16?ne&16?Gt(O,q,w,T,R,D,U,x,N):W(O,R,D,!0):(K&8&&d(w,""),ne&16&&J(q,w,T,R,D,U,x,N))},Lt=(g,_,w,T,R,D,U,x,N)=>{g=g||cs,_=_||cs;const O=g.length,K=_.length,q=Math.min(O,K);let Z;for(Z=0;Z<q;Z++){const ne=_[Z]=N?ii(_[Z]):_n(_[Z]);A(g[Z],ne,w,null,R,D,U,x,N)}O>K?W(g,R,D,!0,!1,q):J(_,w,T,R,D,U,x,N,q)},Gt=(g,_,w,T,R,D,U,x,N)=>{let O=0;const K=_.length;let q=g.length-1,Z=K-1;for(;O<=q&&O<=Z;){const ne=g[O],V=_[O]=N?ii(_[O]):_n(_[O]);if(ki(ne,V))A(ne,V,w,null,R,D,U,x,N);else break;O++}for(;O<=q&&O<=Z;){const ne=g[q],V=_[Z]=N?ii(_[Z]):_n(_[Z]);if(ki(ne,V))A(ne,V,w,null,R,D,U,x,N);else break;q--,Z--}if(O>q){if(O<=Z){const ne=Z+1,V=ne<K?_[ne].el:T;for(;O<=Z;)A(null,_[O]=N?ii(_[O]):_n(_[O]),w,V,R,D,U,x,N),O++}}else if(O>Z)for(;O<=q;)ut(g[O],R,D,!0),O++;else{const ne=O,V=O,ge=new Map;for(O=V;O<=Z;O++){const At=_[O]=N?ii(_[O]):_n(_[O]);At.key!=null&&ge.set(At.key,O)}let ye,He=0;const Le=Z-V+1;let Xe=!1,js=0;const gn=new Array(Le);for(O=0;O<Le;O++)gn[O]=0;for(O=ne;O<=q;O++){const At=g[O];if(He>=Le){ut(At,R,D,!0);continue}let $t;if(At.key!=null)$t=ge.get(At.key);else for(ye=V;ye<=Z;ye++)if(gn[ye-V]===0&&ki(At,_[ye])){$t=ye;break}$t===void 0?ut(At,R,D,!0):(gn[$t-V]=O+1,$t>=js?js=$t:Xe=!0,A(At,_[$t],w,null,R,D,U,x,N),He++)}const St=Xe?L2(gn):cs;for(ye=St.length-1,O=Le-1;O>=0;O--){const At=V+O,$t=_[At],Ks=At+1<K?_[At+1].el:T;gn[O]===0?A(null,$t,w,Ks,R,D,U,x,N):Xe&&(ye<0||O!==St[ye]?Nt($t,w,Ks,2):ye--)}}},Nt=(g,_,w,T,R=null)=>{const{el:D,type:U,transition:x,children:N,shapeFlag:O}=g;if(O&6){Nt(g.component.subTree,_,w,T);return}if(O&128){g.suspense.move(_,w,T);return}if(O&64){U.move(g,_,w,be);return}if(U===De){i(D,_,w);for(let q=0;q<N.length;q++)Nt(N[q],_,w,T);i(g.anchor,_,w);return}if(U===Ho){Y(g,_,w);return}if(T!==2&&O&1&&x)if(T===0)x.beforeEnter(D),i(D,_,w),Ft(()=>x.enter(D),R);else{const{leave:q,delayLeave:Z,afterLeave:ne}=x,V=()=>i(D,_,w),ge=()=>{q(D,()=>{V(),ne&&ne()})};Z?Z(D,V,ge):ge()}else i(D,_,w)},ut=(g,_,w,T=!1,R=!1)=>{const{type:D,props:U,ref:x,children:N,dynamicChildren:O,shapeFlag:K,patchFlag:q,dirs:Z}=g;if(x!=null&&bc(x,null,w,g,!0),K&256){_.ctx.deactivate(g);return}const ne=K&1&&Z,V=!ur(g);let ge;if(V&&(ge=U&&U.onVnodeBeforeUnmount)&&yn(ge,_,g),K&6)S(g.component,w,T);else{if(K&128){g.suspense.unmount(w,T);return}ne&&wi(g,null,_,"beforeUnmount"),K&64?g.type.remove(g,_,w,R,be,T):O&&(D!==De||q>0&&q&64)?W(O,_,w,!1,!0):(D===De&&q&384||!R&&K&16)&&W(N,_,w),T&&sn(g)}(V&&(ge=U&&U.onVnodeUnmounted)||ne)&&Ft(()=>{ge&&yn(ge,_,g),ne&&wi(g,null,_,"unmounted")},w)},sn=g=>{const{type:_,el:w,anchor:T,transition:R}=g;if(_===De){Dt(w,T);return}if(_===Ho){F(g);return}const D=()=>{s(w),R&&!R.persisted&&R.afterLeave&&R.afterLeave()};if(g.shapeFlag&1&&R&&!R.persisted){const{leave:U,delayLeave:x}=R,N=()=>U(w,D);x?x(g.el,D,N):N()}else D()},Dt=(g,_)=>{let w;for(;g!==_;)w=m(g),s(g),g=w;s(_)},S=(g,_,w)=>{const{bum:T,scope:R,update:D,subTree:U,um:x}=g;T&&Ra(T),R.stop(),D&&(D.active=!1,ut(U,g,_,w)),x&&Ft(x,_),Ft(()=>{g.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},W=(g,_,w,T=!1,R=!1,D=0)=>{for(let U=D;U<g.length;U++)ut(g[U],_,w,T,R)},B=g=>g.shapeFlag&6?B(g.component.subTree):g.shapeFlag&128?g.suspense.next():m(g.anchor||g.el),G=(g,_,w)=>{g==null?_._vnode&&ut(_._vnode,null,null,!0):A(_._vnode||null,g,_,null,null,null,w),Rd(),Lm(),_._vnode=g},be={p:A,um:ut,m:Nt,r:sn,mt:we,mc:J,pc:Ie,pbc:_e,n:B,o:e};let Ue,le;return t&&([Ue,le]=t(be)),{render:G,hydrate:Ue,createApp:T2(G,Ue)}}function Ii({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Ou(e,t,n=!1){const i=e.children,s=t.children;if(te(i)&&te(s))for(let r=0;r<i.length;r++){const o=i[r];let l=s[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[r]=ii(s[r]),l.el=o.el),n||Ou(o,l)),l.type===Ul&&(l.el=o.el)}}function L2(e){const t=e.slice(),n=[0];let i,s,r,o,l;const a=e.length;for(i=0;i<a;i++){const c=e[i];if(c!==0){if(s=n[n.length-1],e[s]<c){t[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,e[n[l]]<c?r=l+1:o=l;c<e[n[r]]&&(r>0&&(t[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=t[o];return n}const N2=e=>e.__isTeleport,dr=e=>e&&(e.disabled||e.disabled===""),$d=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Cc=(e,t)=>{const n=e&&e.to;return Ze(n)?t?t(n):null:n},D2={__isTeleport:!0,process(e,t,n,i,s,r,o,l,a,c){const{mc:d,pc:f,pbc:m,o:{insert:b,querySelector:C,createText:A,createComment:M}}=c,z=dr(t.props);let{shapeFlag:j,children:Y,dynamicChildren:F}=t;if(e==null){const oe=t.el=A(""),pe=t.anchor=A("");b(oe,n,i),b(pe,n,i);const Re=t.target=Cc(t.props,C),J=t.targetAnchor=A("");Re&&(b(J,Re),o=o||$d(Re));const me=(_e,Fe)=>{j&16&&d(Y,_e,Fe,s,r,o,l,a)};z?me(n,pe):Re&&me(Re,J)}else{t.el=e.el;const oe=t.anchor=e.anchor,pe=t.target=e.target,Re=t.targetAnchor=e.targetAnchor,J=dr(e.props),me=J?n:pe,_e=J?oe:Re;if(o=o||$d(pe),F?(m(e.dynamicChildren,F,me,s,r,o,l),Ou(e,t,!0)):a||f(e,t,me,_e,s,r,o,l,!1),z)J||Io(t,n,oe,c,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const Fe=t.target=Cc(t.props,C);Fe&&Io(t,Fe,null,c,0)}else J&&Io(t,pe,Re,c,1)}ig(t)},remove(e,t,n,i,{um:s,o:{remove:r}},o){const{shapeFlag:l,children:a,anchor:c,targetAnchor:d,target:f,props:m}=e;if(f&&r(d),(o||!dr(m))&&(r(c),l&16))for(let b=0;b<a.length;b++){const C=a[b];s(C,t,n,!0,!!C.dynamicChildren)}},move:Io,hydrate:M2};function Io(e,t,n,{o:{insert:i},m:s},r=2){r===0&&i(e.targetAnchor,t,n);const{el:o,anchor:l,shapeFlag:a,children:c,props:d}=e,f=r===2;if(f&&i(o,t,n),(!f||dr(d))&&a&16)for(let m=0;m<c.length;m++)s(c[m],t,n,2);f&&i(l,t,n)}function M2(e,t,n,i,s,r,{o:{nextSibling:o,parentNode:l,querySelector:a}},c){const d=t.target=Cc(t.props,a);if(d){const f=d._lpa||d.firstChild;if(t.shapeFlag&16)if(dr(t.props))t.anchor=c(o(e),t,l(e),n,i,s,r),t.targetAnchor=f;else{t.anchor=o(e);let m=f;for(;m;)if(m=o(m),m&&m.nodeType===8&&m.data==="teleport anchor"){t.targetAnchor=m,d._lpa=t.targetAnchor&&o(t.targetAnchor);break}c(f,t,d,n,i,s,r)}ig(t)}return t.anchor&&o(t.anchor)}const F2=D2;function ig(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;for(;n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const De=Symbol.for("v-fgt"),Ul=Symbol.for("v-txt"),Qt=Symbol.for("v-cmt"),Ho=Symbol.for("v-stc"),fr=[];let cn=null;function I(e=!1){fr.push(cn=e?null:[])}function B2(){fr.pop(),cn=fr[fr.length-1]||null}let Ar=1;function Vd(e){Ar+=e}function sg(e){return e.dynamicChildren=Ar>0?cn||cs:null,B2(),Ar>0&&cn&&cn.push(e),e}function L(e,t,n,i,s,r){return sg(P(e,t,n,i,s,r,!0))}function ue(e,t,n,i,s){return sg(fe(e,t,n,i,s,!0))}function Jo(e){return e?e.__v_isVNode===!0:!1}function ki(e,t){return e.type===t.type&&e.key===t.key}const Hl="__vInternal",rg=({key:e})=>e??null,$o=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Ze(e)||bt(e)||ae(e)?{i:pt,r:e,k:t,f:!!n}:e:null);function P(e,t=null,n=null,i=0,s=null,r=e===De?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&rg(t),ref:t&&$o(t),scopeId:Mm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:pt};return l?(Nu(a,n),r&128&&e.normalize(a)):n&&(a.shapeFlag|=Ze(n)?8:16),Ar>0&&!o&&cn&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&cn.push(a),a}const fe=U2;function U2(e,t=null,n=null,i=0,s=null,r=!1){if((!e||e===Gm)&&(e=Qt),Jo(e)){const l=pi(e,t,!0);return n&&Nu(l,n),Ar>0&&!r&&cn&&(l.shapeFlag&6?cn[cn.indexOf(e)]=l:cn.push(l)),l.patchFlag|=-2,l}if(Y2(e)&&(e=e.__vccOpts),t){t=Lu(t);let{class:l,style:a}=t;l&&!Ze(l)&&(t.class=Wn(l)),Ke(a)&&(Im(a)&&!te(a)&&(a=Qe({},a)),t.style=Ll(a))}const o=Ze(e)?1:i2(e)?128:N2(e)?64:Ke(e)?4:ae(e)?2:0;return P(e,t,n,i,s,o,r,!0)}function Lu(e){return e?Im(e)||Hl in e?Qe({},e):e:null}function pi(e,t,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=e,l=t?E(i||{},t):i;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&rg(l),ref:t&&t.ref?n&&s?te(s)?s.concat($o(t)):[s,$o(t)]:$o(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==De?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&pi(e.ssContent),ssFallback:e.ssFallback&&pi(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function ht(e=" ",t=0){return fe(Ul,null,e,t)}function H2(e,t){const n=fe(Ho,null,e);return n.staticCount=t,n}function de(e="",t=!1){return t?(I(),ue(Qt,null,e)):fe(Qt,null,e)}function _n(e){return e==null||typeof e=="boolean"?fe(Qt):te(e)?fe(De,null,e.slice()):typeof e=="object"?ii(e):fe(Ul,null,String(e))}function ii(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:pi(e)}function Nu(e,t){let n=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(te(t))n=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),Nu(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(Hl in t)?t._ctx=pt:s===3&&pt&&(pt.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ae(t)?(t={default:t,_ctx:pt},n=32):(t=String(t),i&64?(n=16,t=[ht(t)]):n=8);e.children=t,e.shapeFlag|=n}function E(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=Wn([t.class,i.class]));else if(s==="style")t.style=Ll([t.style,i.style]);else if(Rl(s)){const r=t[s],o=i[s];o&&r!==o&&!(te(r)&&r.includes(o))&&(t[s]=r?[].concat(r,o):o)}else s!==""&&(t[s]=i[s])}return t}function yn(e,t,n,i=null){Zt(e,t,7,[n,i])}const $2=Jm();let V2=0;function z2(e,t,n){const i=e.type,s=(t?t.appContext:e.appContext)||$2,r={uid:V2++,vnode:e,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new hm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Qm(i,s),emitsOptions:Dm(i,s),emit:null,emitted:null,propsDefaults:ze,inheritAttrs:i.inheritAttrs,ctx:ze,data:ze,props:ze,attrs:ze,slots:ze,refs:ze,setupState:ze,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=ZC.bind(null,r),e.ce&&e.ce(r),r}let ot=null;const Du=()=>ot||pt;let Mu,ts,zd="__VUE_INSTANCE_SETTERS__";(ts=uc()[zd])||(ts=uc()[zd]=[]),ts.push(e=>ot=e),Mu=e=>{ts.length>1?ts.forEach(t=>t(e)):ts[0](e)};const ws=e=>{Mu(e),e.scope.on()},Mi=()=>{ot&&ot.scope.off(),Mu(null)};function og(e){return e.vnode.shapeFlag&4}let kr=!1;function W2(e,t=!1){kr=t;const{props:n,children:i}=e.vnode,s=og(e);S2(e,n,s,t),R2(e,i);const r=s?j2(e,t):void 0;return kr=!1,r}function j2(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Em(new Proxy(e.ctx,_2));const{setup:i}=n;if(i){const s=e.setupContext=i.length>1?q2(e):null;ws(e),Rs();const r=ci(i,e,0,[e.props,s]);if(Ps(),Mi(),om(r)){if(r.then(Mi,Mi),t)return r.then(o=>{Wd(e,o,t)}).catch(o=>{Dl(o,e,0)});e.asyncDep=r}else Wd(e,r,t)}else lg(e,t)}function Wd(e,t,n){ae(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Ke(t)&&(e.setupState=Rm(t)),lg(e,n)}let jd;function lg(e,t,n){const i=e.type;if(!e.render){if(!t&&jd&&!i.render){const s=i.template||Pu(e).template;if(s){const{isCustomElement:r,compilerOptions:o}=e.appContext.config,{delimiters:l,compilerOptions:a}=i,c=Qe(Qe({isCustomElement:r,delimiters:l},o),a);i.render=jd(s,c)}}e.render=i.render||dn}ws(e),Rs(),v2(e),Ps(),Mi()}function K2(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Ht(e,"get","$attrs"),t[n]}}))}function q2(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return K2(e)},slots:e.slots,emit:e.emit,expose:t}}function $l(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Rm(Em(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in hr)return hr[n](e)},has(t,n){return n in t||n in hr}}))}function G2(e,t=!0){return ae(e)?e.displayName||e.name:e.name||t&&e.__name}function Y2(e){return ae(e)&&"__vccOpts"in e}const ln=(e,t)=>KC(e,t,kr);function Fu(e,t,n){const i=arguments.length;return i===2?Ke(t)&&!te(t)?Jo(t)?fe(e,null,[t]):fe(e,t):fe(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Jo(n)&&(n=[n]),fe(e,t,n))}const X2=Symbol.for("v-scx"),J2=()=>In(X2),Z2="3.3.2",Q2="http://www.w3.org/2000/svg",Ri=typeof document<"u"?document:null,Kd=Ri&&Ri.createElement("template"),ew={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const s=t?Ri.createElementNS(Q2,e):Ri.createElement(e,n?{is:n}:void 0);return e==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:e=>Ri.createTextNode(e),createComment:e=>Ri.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ri.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,s,r){const o=n?n.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Kd.innerHTML=i?`<svg>${e}</svg>`:e;const l=Kd.content;if(i){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}t.insertBefore(l,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function tw(e,t,n){const i=e._vtc;i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function nw(e,t,n){const i=e.style,s=Ze(n);if(n&&!s){if(t&&!Ze(t))for(const r in t)n[r]==null&&wc(i,r,"");for(const r in n)wc(i,r,n[r])}else{const r=i.display;s?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const qd=/\s*!important$/;function wc(e,t,n){if(te(n))n.forEach(i=>wc(e,t,i));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=iw(e,t);qd.test(n)?e.setProperty(Gi(i),n.replace(qd,""),"important"):e[i]=n}}const Gd=["Webkit","Moz","ms"],La={};function iw(e,t){const n=La[t];if(n)return n;let i=Sn(t);if(i!=="filter"&&i in e)return La[t]=i;i=Ol(i);for(let s=0;s<Gd.length;s++){const r=Gd[s]+i;if(r in e)return La[t]=r}return t}const Yd="http://www.w3.org/1999/xlink";function sw(e,t,n,i,s){if(i&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Yd,t.slice(6,t.length)):e.setAttributeNS(Yd,t,n);else{const r=hC(t);n==null||r&&!cm(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function rw(e,t,n,i,s,r,o){if(t==="innerHTML"||t==="textContent"){i&&o(i,s,r),e[t]=n??"";return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){e._value=n;const c=l==="OPTION"?e.getAttribute("value"):e.value,d=n??"";c!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let a=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=cm(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(t)}function ow(e,t,n,i){e.addEventListener(t,n,i)}function lw(e,t,n,i){e.removeEventListener(t,n,i)}function aw(e,t,n,i,s=null){const r=e._vei||(e._vei={}),o=r[t];if(i&&o)o.value=i;else{const[l,a]=cw(t);if(i){const c=r[t]=dw(i,s);ow(e,l,c,a)}else o&&(lw(e,l,o,a),r[t]=void 0)}}const Xd=/(?:Once|Passive|Capture)$/;function cw(e){let t;if(Xd.test(e)){t={};let i;for(;i=e.match(Xd);)e=e.slice(0,e.length-i[0].length),t[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Gi(e.slice(2)),t]}let Na=0;const uw=Promise.resolve(),hw=()=>Na||(uw.then(()=>Na=0),Na=Date.now());function dw(e,t){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Zt(fw(i,n.value),t,5,[i])};return n.value=e,n.attached=hw(),n}function fw(e,t){if(te(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const Jd=/^on[a-z]/,pw=(e,t,n,i,s=!1,r,o,l,a)=>{t==="class"?tw(e,i,s):t==="style"?nw(e,n,i):Rl(t)?fu(t)||aw(e,t,n,i,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):mw(e,t,i,s))?rw(e,t,i,r,o,l,a):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),sw(e,t,i,s))};function mw(e,t,n,i){return i?!!(t==="innerHTML"||t==="textContent"||t in e&&Jd.test(t)&&ae(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Jd.test(t)&&Ze(n)?!1:t in e}const Jn="transition",Xs="animation",qr=(e,{slots:t})=>Fu(l2,cg(e),t);qr.displayName="Transition";const ag={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},gw=qr.props=Qe({},Hm,ag),Ei=(e,t=[])=>{te(e)?e.forEach(n=>n(...t)):e&&e(...t)},Zd=e=>e?te(e)?e.some(t=>t.length>1):e.length>1:!1;function cg(e){const t={};for(const v in e)v in ag||(t[v]=e[v]);if(e.css===!1)return t;const{name:n="v",type:i,duration:s,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:a=r,appearActiveClass:c=o,appearToClass:d=l,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:b=`${n}-leave-to`}=e,C=yw(s),A=C&&C[0],M=C&&C[1],{onBeforeEnter:z,onEnter:j,onEnterCancelled:Y,onLeave:F,onLeaveCancelled:oe,onBeforeAppear:pe=z,onAppear:Re=j,onAppearCancelled:J=Y}=t,me=(v,Pe,we)=>{ni(v,Pe?d:l),ni(v,Pe?c:o),we&&we()},_e=(v,Pe)=>{v._isLeaving=!1,ni(v,f),ni(v,b),ni(v,m),Pe&&Pe()},Fe=v=>(Pe,we)=>{const Ot=v?Re:j,ve=()=>me(Pe,v,we);Ei(Ot,[Pe,ve]),Qd(()=>{ni(Pe,v?a:r),Nn(Pe,v?d:l),Zd(Ot)||ef(Pe,i,A,ve)})};return Qe(t,{onBeforeEnter(v){Ei(z,[v]),Nn(v,r),Nn(v,o)},onBeforeAppear(v){Ei(pe,[v]),Nn(v,a),Nn(v,c)},onEnter:Fe(!1),onAppear:Fe(!0),onLeave(v,Pe){v._isLeaving=!0;const we=()=>_e(v,Pe);Nn(v,f),hg(),Nn(v,m),Qd(()=>{v._isLeaving&&(ni(v,f),Nn(v,b),Zd(F)||ef(v,i,M,we))}),Ei(F,[v,we])},onEnterCancelled(v){me(v,!1),Ei(Y,[v])},onAppearCancelled(v){me(v,!0),Ei(J,[v])},onLeaveCancelled(v){_e(v),Ei(oe,[v])}})}function yw(e){if(e==null)return null;if(Ke(e))return[Da(e.enter),Da(e.leave)];{const t=Da(e);return[t,t]}}function Da(e){return rC(e)}function Nn(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function ni(e,t){t.split(/\s+/).forEach(i=>i&&e.classList.remove(i));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Qd(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let _w=0;function ef(e,t,n,i){const s=e._endId=++_w,r=()=>{s===e._endId&&i()};if(n)return setTimeout(r,n);const{type:o,timeout:l,propCount:a}=ug(e,t);if(!o)return i();const c=o+"end";let d=0;const f=()=>{e.removeEventListener(c,m),r()},m=b=>{b.target===e&&++d>=a&&f()};setTimeout(()=>{d<a&&f()},l+1),e.addEventListener(c,m)}function ug(e,t){const n=window.getComputedStyle(e),i=C=>(n[C]||"").split(", "),s=i(`${Jn}Delay`),r=i(`${Jn}Duration`),o=tf(s,r),l=i(`${Xs}Delay`),a=i(`${Xs}Duration`),c=tf(l,a);let d=null,f=0,m=0;t===Jn?o>0&&(d=Jn,f=o,m=r.length):t===Xs?c>0&&(d=Xs,f=c,m=a.length):(f=Math.max(o,c),d=f>0?o>c?Jn:Xs:null,m=d?d===Jn?r.length:a.length:0);const b=d===Jn&&/\b(transform|all)(,|$)/.test(i(`${Jn}Property`).toString());return{type:d,timeout:f,propCount:m,hasTransform:b}}function tf(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,i)=>nf(n)+nf(e[i])))}function nf(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function hg(){return document.body.offsetHeight}const dg=new WeakMap,fg=new WeakMap,pg={name:"TransitionGroup",props:Qe({},gw,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=Du(),i=Um();let s,r;return jm(()=>{if(!s.length)return;const o=e.moveClass||`${e.name||"v"}-move`;if(!Ew(s[0].el,n.vnode.el,o))return;s.forEach(Cw),s.forEach(ww);const l=s.filter(Iw);hg(),l.forEach(a=>{const c=a.el,d=c.style;Nn(c,o),d.transform=d.webkitTransform=d.transitionDuration="";const f=c._moveCb=m=>{m&&m.target!==c||(!m||/transform$/.test(m.propertyName))&&(c.removeEventListener("transitionend",f),c._moveCb=null,ni(c,o))};c.addEventListener("transitionend",f)})}),()=>{const o=ke(e),l=cg(o);let a=o.tag||De;s=r,r=t.default?Au(t.default()):[];for(let c=0;c<r.length;c++){const d=r[c];d.key!=null&&Sr(d,Tr(d,l,i,n))}if(s)for(let c=0;c<s.length;c++){const d=s[c];Sr(d,Tr(d,l,i,n)),dg.set(d,d.el.getBoundingClientRect())}return fe(a,null,r)}}},vw=e=>delete e.mode;pg.props;const bw=pg;function Cw(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function ww(e){fg.set(e,e.el.getBoundingClientRect())}function Iw(e){const t=dg.get(e),n=fg.get(e),i=t.left-n.left,s=t.top-n.top;if(i||s){const r=e.el.style;return r.transform=r.webkitTransform=`translate(${i}px,${s}px)`,r.transitionDuration="0s",e}}function Ew(e,t,n){const i=e.cloneNode();e._vtc&&e._vtc.forEach(o=>{o.split(/\s+/).forEach(l=>l&&i.classList.remove(l))}),n.split(/\s+/).forEach(o=>o&&i.classList.add(o)),i.style.display="none";const s=t.nodeType===1?t:t.parentNode;s.appendChild(i);const{hasTransform:r}=ug(i);return s.removeChild(i),r}const Tw={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},sf=(e,t)=>n=>{if(!("key"in n))return;const i=Gi(n.key);if(t.some(s=>s===i||Tw[s]===i))return e(n)},Sw={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Js(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:i}){!t!=!n&&(i?t?(i.beforeEnter(e),Js(e,!0),i.enter(e)):i.leave(e,()=>{Js(e,!1)}):Js(e,t))},beforeUnmount(e,{value:t}){Js(e,t)}};function Js(e,t){e.style.display=t?e._vod:"none"}const Aw=Qe({patchProp:pw},ew);let rf;function kw(){return rf||(rf=x2(Aw))}const Rw=(...e)=>{const t=kw().createApp(...e),{mount:n}=t;return t.mount=i=>{const s=Pw(i);if(!s)return;const r=t._component;!ae(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function Pw(e){return Ze(e)?document.querySelector(e):e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H=function(e,t){if(!e)throw Os(t)},Os=function(e){return new Error("Firebase Database ("+mg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++i)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},xw=function(e){const t=[];let n=0,i=0;for(;n<e.length;){const s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=e[n++];t[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=e[n++],o=e[n++],l=e[n++],a=((s&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;t[i++]=String.fromCharCode(55296+(a>>10)),t[i++]=String.fromCharCode(56320+(a&1023))}else{const r=e[n++],o=e[n++];t[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return t.join("")},Vl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<e.length;s+=3){const r=e[s],o=s+1<e.length,l=o?e[s+1]:0,a=s+2<e.length,c=a?e[s+2]:0,d=r>>2,f=(r&3)<<4|l>>4;let m=(l&15)<<2|c>>6,b=c&63;a||(b=64,o||(m=64)),i.push(n[d],n[f],n[m],n[b])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(gg(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):xw(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<e.length;){const r=n[e.charAt(s++)],l=s<e.length?n[e.charAt(s)]:0;++s;const c=s<e.length?n[e.charAt(s)]:64;++s;const f=s<e.length?n[e.charAt(s)]:64;if(++s,r==null||l==null||c==null||f==null)throw new Ow;const m=r<<2|l>>4;if(i.push(m),c!==64){const b=l<<4&240|c>>2;if(i.push(b),f!==64){const C=c<<6&192|f;i.push(C)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Ow extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yg=function(e){const t=gg(e);return Vl.encodeByteArray(t,!0)},_g=function(e){return yg(e).replace(/\./g,"")},Zo=function(e){try{return Vl.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lw(e){return vg(void 0,e)}function vg(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)!t.hasOwnProperty(n)||!Nw(n)||(e[n]=vg(e[n],t[n]));return e}function Nw(e){return e!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw=()=>Dw().__FIREBASE_DEFAULTS__,Fw=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Bw=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Zo(e[1]);return t&&JSON.parse(t)},Bu=()=>{try{return Mw()||Fw()||Bw()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Uw=e=>{var t,n;return(n=(t=Bu())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},bg=()=>{var e;return(e=Bu())===null||e===void 0?void 0:e.config},Cg=e=>{var t;return(t=Bu())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,i))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Uu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Et())}function Hw(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function wg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $w(){const e=Et();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Ig(){return mg.NODE_ADMIN===!0}function Eg(){try{return typeof indexedDB=="object"}catch{return!1}}function Vw(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;t(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw="FirebaseError";class On extends Error{constructor(t,n,i){super(n),this.code=t,this.customData=i,this.name=zw,Object.setPrototypeOf(this,On.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ls.prototype.create)}}class Ls{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},s=`${this.service}/${t}`,r=this.errors[t],o=r?Ww(r,i):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new On(s,l,i)}}function Ww(e,t){return e.replace(jw,(n,i)=>{const s=t[i];return s!=null?String(s):`<${i}?>`})}const jw=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(e){return JSON.parse(e)}function ft(e){return JSON.stringify(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg=function(e){let t={},n={},i={},s="";try{const r=e.split(".");t=Pr(Zo(r[0])||""),n=Pr(Zo(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:t,claims:n,data:i,signature:s}},Kw=function(e){const t=Tg(e),n=t.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},qw=function(e){const t=Tg(e).claims;return typeof t=="object"&&t.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Is(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]}function Ic(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Qo(e,t,n){const i={};for(const s in e)Object.prototype.hasOwnProperty.call(e,s)&&(i[s]=t.call(n,e[s],s,e));return i}function el(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const s of n){if(!i.includes(s))return!1;const r=e[s],o=t[s];if(of(r)&&of(o)){if(!el(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function of(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,n){n||(n=0);const i=this.W_;if(typeof t=="string")for(let f=0;f<16;f++)i[f]=t.charCodeAt(n)<<24|t.charCodeAt(n+1)<<16|t.charCodeAt(n+2)<<8|t.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)i[f]=t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3],n+=4;for(let f=16;f<80;f++){const m=i[f-3]^i[f-8]^i[f-14]^i[f-16];i[f]=(m<<1|m>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,d;for(let f=0;f<80;f++){f<40?f<20?(c=l^r&(o^l),d=1518500249):(c=r^o^l,d=1859775393):f<60?(c=r&o|l&(r|o),d=2400959708):(c=r^o^l,d=3395469782);const m=(s<<5|s>>>27)+c+a+d+i[f]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=s,s=m}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(t,n){if(t==null)return;n===void 0&&(n=t.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<n;)if(r[o]=t.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=t[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const t=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)t[i]=this.chain_[s]>>r&255,++i;return t}}function Yw(e,t){const n=new Xw(e,t);return n.subscribe.bind(n)}class Xw{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,i){let s;if(t===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Jw(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:i},s.next===void 0&&(s.next=Ma),s.error===void 0&&(s.error=Ma),s.complete===void 0&&(s.complete=Ma);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Jw(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Ma(){}function Zw(e,t){return`${e} failed: ${t} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,H(i<e.length,"Surrogate pair missing trail surrogate.");const o=e.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):s<65536?(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},zl=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(e){return e&&e._delegate?e._delegate:e}class mn{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const i=new Rr;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(nI(t))try{this.getOrInitializeService({instanceIdentifier:Ti})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(t=Ti){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ti){return this.instances.has(t)}getOptions(t=Ti){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);i===l&&o.resolve(s)}return s}onInit(t,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(t),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&t(o,s),()=>{r.delete(t)}}invokeOnInitCallbacks(t,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:tI(t),options:n}),this.instances.set(t,i),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=Ti){return this.component?this.component.multipleInstances?t:Ti:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tI(e){return e===Ti?void 0:e}function nI(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new eI(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xe;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(xe||(xe={}));const sI={debug:xe.DEBUG,verbose:xe.VERBOSE,info:xe.INFO,warn:xe.WARN,error:xe.ERROR,silent:xe.SILENT},rI=xe.INFO,oI={[xe.DEBUG]:"log",[xe.VERBOSE]:"log",[xe.INFO]:"info",[xe.WARN]:"warn",[xe.ERROR]:"error"},lI=(e,t,...n)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),s=oI[t];if(s)console[s](`[${i}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Gr{constructor(t){this.name=t,this._logLevel=rI,this._logHandler=lI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in xe))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?sI[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,xe.DEBUG,...t),this._logHandler(this,xe.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,xe.VERBOSE,...t),this._logHandler(this,xe.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,xe.INFO,...t),this._logHandler(this,xe.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,xe.WARN,...t),this._logHandler(this,xe.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,xe.ERROR,...t),this._logHandler(this,xe.ERROR,...t)}}const aI=(e,t)=>t.some(n=>e instanceof n);let lf,af;function cI(){return lf||(lf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uI(){return af||(af=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sg=new WeakMap,Ec=new WeakMap,Ag=new WeakMap,Fa=new WeakMap,Hu=new WeakMap;function hI(e){const t=new Promise((n,i)=>{const s=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{n(ui(e.result)),s()},o=()=>{i(e.error),s()};e.addEventListener("success",r),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Sg.set(n,e)}).catch(()=>{}),Hu.set(t,e),t}function dI(e){if(Ec.has(e))return;const t=new Promise((n,i)=>{const s=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)});Ec.set(e,t)}let Tc={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ec.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ag.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ui(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function fI(e){Tc=e(Tc)}function pI(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const i=e.call(Ba(this),t,...n);return Ag.set(i,t.sort?t.sort():[t]),ui(i)}:uI().includes(e)?function(...t){return e.apply(Ba(this),t),ui(Sg.get(this))}:function(...t){return ui(e.apply(Ba(this),t))}}function mI(e){return typeof e=="function"?pI(e):(e instanceof IDBTransaction&&dI(e),aI(e,cI())?new Proxy(e,Tc):e)}function ui(e){if(e instanceof IDBRequest)return hI(e);if(Fa.has(e))return Fa.get(e);const t=mI(e);return t!==e&&(Fa.set(e,t),Hu.set(t,e)),t}const Ba=e=>Hu.get(e);function gI(e,t,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(e,t),l=ui(o);return i&&o.addEventListener("upgradeneeded",a=>{i(ui(o.result),a.oldVersion,a.newVersion,ui(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),s&&a.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const yI=["get","getKey","getAll","getAllKeys","count"],_I=["put","add","delete","clear"],Ua=new Map;function cf(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ua.get(t))return Ua.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,s=_I.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||yI.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,s?"readwrite":"readonly");let c=a.store;return i&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),s&&a.done]))[0]};return Ua.set(t,r),r}fI(e=>({...e,get:(t,n,i)=>cf(t,n)||e.get(t,n,i),has:(t,n)=>!!cf(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(bI(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function bI(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Sc="@firebase/app",uf="0.9.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i=new Gr("@firebase/app"),CI="@firebase/app-compat",wI="@firebase/analytics-compat",II="@firebase/analytics",EI="@firebase/app-check-compat",TI="@firebase/app-check",SI="@firebase/auth",AI="@firebase/auth-compat",kI="@firebase/database",RI="@firebase/database-compat",PI="@firebase/functions",xI="@firebase/functions-compat",OI="@firebase/installations",LI="@firebase/installations-compat",NI="@firebase/messaging",DI="@firebase/messaging-compat",MI="@firebase/performance",FI="@firebase/performance-compat",BI="@firebase/remote-config",UI="@firebase/remote-config-compat",HI="@firebase/storage",$I="@firebase/storage-compat",VI="@firebase/firestore",zI="@firebase/firestore-compat",WI="firebase",jI="9.22.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac="[DEFAULT]",KI={[Sc]:"fire-core",[CI]:"fire-core-compat",[II]:"fire-analytics",[wI]:"fire-analytics-compat",[TI]:"fire-app-check",[EI]:"fire-app-check-compat",[SI]:"fire-auth",[AI]:"fire-auth-compat",[kI]:"fire-rtdb",[RI]:"fire-rtdb-compat",[PI]:"fire-fn",[xI]:"fire-fn-compat",[OI]:"fire-iid",[LI]:"fire-iid-compat",[NI]:"fire-fcm",[DI]:"fire-fcm-compat",[MI]:"fire-perf",[FI]:"fire-perf-compat",[BI]:"fire-rc",[UI]:"fire-rc-compat",[HI]:"fire-gcs",[$I]:"fire-gcs-compat",[VI]:"fire-fst",[zI]:"fire-fst-compat","fire-js":"fire-js",[WI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl=new Map,kc=new Map;function qI(e,t){try{e.container.addComponent(t)}catch(n){$i.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function An(e){const t=e.name;if(kc.has(t))return $i.debug(`There were multiple attempts to register component ${t}.`),!1;kc.set(t,e);for(const n of tl.values())qI(n,e);return!0}function kg(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},hi=new Ls("app","Firebase",GI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(t,n,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw hi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi=jI;function Rg(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const i=Object.assign({name:Ac,automaticDataCollectionEnabled:!1},t),s=i.name;if(typeof s!="string"||!s)throw hi.create("bad-app-name",{appName:String(s)});if(n||(n=bg()),!n)throw hi.create("no-options");const r=tl.get(s);if(r){if(el(n,r.options)&&el(i,r.config))return r;throw hi.create("duplicate-app",{appName:s})}const o=new iI(s);for(const a of kc.values())o.addComponent(a);const l=new YI(n,i,o);return tl.set(s,l),l}function Pg(e=Ac){const t=tl.get(e);if(!t&&e===Ac&&bg())return Rg();if(!t)throw hi.create("no-app",{appName:e});return t}function Kt(e,t,n){var i;let s=(i=KI[e])!==null&&i!==void 0?i:e;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const l=[`Unable to register library "${s}" with version "${t}":`];r&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),$i.warn(l.join(" "));return}An(new mn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI="firebase-heartbeat-database",JI=1,xr="firebase-heartbeat-store";let Ha=null;function xg(){return Ha||(Ha=gI(XI,JI,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(xr)}}}).catch(e=>{throw hi.create("idb-open",{originalErrorMessage:e.message})})),Ha}async function ZI(e){try{return await(await xg()).transaction(xr).objectStore(xr).get(Og(e))}catch(t){if(t instanceof On)$i.warn(t.message);else{const n=hi.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});$i.warn(n.message)}}}async function hf(e,t){try{const i=(await xg()).transaction(xr,"readwrite");await i.objectStore(xr).put(t,Og(e)),await i.done}catch(n){if(n instanceof On)$i.warn(n.message);else{const i=hi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$i.warn(i.message)}}}function Og(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI=1024,eE=30*24*60*60*1e3;class tE{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new iE(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=df();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=eE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=df(),{heartbeatsToSend:n,unsentEntries:i}=nE(this._heartbeatsCache.heartbeats),s=_g(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function df(){return new Date().toISOString().substring(0,10)}function nE(e,t=QI){const n=[];let i=e.slice();for(const s of e){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),ff(n)>t){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ff(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class iE{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Eg()?Vw().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ZI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return hf(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return hf(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function ff(e){return _g(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sE(e){An(new mn("platform-logger",t=>new vI(t),"PRIVATE")),An(new mn("heartbeat",t=>new tE(t),"PRIVATE")),Kt(Sc,uf,e),Kt(Sc,uf,"esm2017"),Kt("fire-js","")}sE("");function $u(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(n[i[s]]=e[i[s]]);return n}function Lg(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rE=Lg,Ng=new Ls("auth","Firebase",Lg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl=new Gr("@firebase/auth");function oE(e,...t){nl.logLevel<=xe.WARN&&nl.warn(`Auth (${yi}): ${e}`,...t)}function Vo(e,...t){nl.logLevel<=xe.ERROR&&nl.error(`Auth (${yi}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(e,...t){throw Vu(e,...t)}function En(e,...t){return Vu(e,...t)}function Dg(e,t,n){const i=Object.assign(Object.assign({},rE()),{[t]:n});return new Ls("auth","Firebase",i).create(t,{appName:e.name})}function lE(e,t,n){const i=n;if(!(t instanceof i))throw i.name!==t.constructor.name&&kn(e,"argument-error"),Dg(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Vu(e,...t){if(typeof e!="string"){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return Ng.create(e,...t)}function re(e,t,...n){if(!e)throw Vu(t,...n)}function Bn(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Vo(t),new Error(t)}function Kn(e,t){e||Bn(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function aE(){return pf()==="http:"||pf()==="https:"}function pf(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(aE()||Hw()||"connection"in navigator)?navigator.onLine:!0}function uE(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(t,n){this.shortDelay=t,this.longDelay=n,Kn(n>t,"Short delay should be less than long delay!"),this.isMobile=Uu()||wg()}get(){return cE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(e,t){Kn(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{static initialize(t,n,i){this.fetchImpl=t,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE=new Yr(3e4,6e4);function Fg(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Xr(e,t,n,i,s={}){return Bg(e,s,async()=>{let r={},o={};i&&(t==="GET"?o=i:r={body:JSON.stringify(i)});const l=Ns(Object.assign({key:e.config.apiKey},o)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Mg.fetch()(Ug(e,e.config.apiHost,n,l),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},r))})}async function Bg(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},hE),t);try{const s=new pE(e),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Eo(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const l=r.ok?o.errorMessage:o.error.message,[a,c]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Eo(e,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Eo(e,"email-already-in-use",o);if(a==="USER_DISABLED")throw Eo(e,"user-disabled",o);const d=i[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Dg(e,d,c);kn(e,d)}}catch(s){if(s instanceof On)throw s;kn(e,"network-request-failed",{message:String(s)})}}async function fE(e,t,n,i,s={}){const r=await Xr(e,t,n,i,s);return"mfaPendingCredential"in r&&kn(e,"multi-factor-auth-required",{_serverResponse:r}),r}function Ug(e,t,n,i){const s=`${t}${n}?${i}`;return e.config.emulator?zu(e.config,s):`${e.config.apiScheme}://${s}`}class pE{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(En(this.auth,"network-request-failed")),dE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Eo(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=En(e,t,i);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mE(e,t){return Xr(e,"POST","/v1/accounts:delete",t)}async function gE(e,t){return Xr(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function yE(e,t=!1){const n=gi(e),i=await n.getIdToken(t),s=Wu(i);re(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:pr($a(s.auth_time)),issuedAtTime:pr($a(s.iat)),expirationTime:pr($a(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function $a(e){return Number(e)*1e3}function Wu(e){const[t,n,i]=e.split(".");if(t===void 0||n===void 0||i===void 0)return Vo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Zo(n);return s?JSON.parse(s):(Vo("Failed to decode base64 JWT payload"),null)}catch(s){return Vo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function _E(e){const t=Wu(e);return re(t,"internal-error"),re(typeof t.exp<"u","internal-error"),re(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Or(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof On&&vE(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function vE({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=pr(this.lastLoginAt),this.creationTime=pr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function il(e){var t;const n=e.auth,i=await e.getIdToken(),s=await Or(e,gE(n,{idToken:i}));re(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];e._notifyReloadListener(r);const o=!((t=r.providerUserInfo)===null||t===void 0)&&t.length?IE(r.providerUserInfo):[],l=wE(e.providerData,o),a=e.isAnonymous,c=!(e.email&&r.passwordHash)&&!(l!=null&&l.length),d=a?c:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:l,metadata:new Hg(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(e,f)}async function CE(e){const t=gi(e);await il(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function wE(e,t){return[...e.filter(i=>!t.some(s=>s.providerId===i.providerId)),...t]}function IE(e){return e.map(t=>{var{providerId:n}=t,i=$u(t,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EE(e,t){const n=await Bg(e,{},async()=>{const i=Ns({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:r}=e.config,o=Ug(e,s,"/v1/token",`key=${r}`),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Mg.fetch()(o,{method:"POST",headers:l,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){re(t.idToken,"internal-error"),re(typeof t.idToken<"u","internal-error"),re(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):_E(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return re(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await EE(t,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(t,n,i){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(t,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new Lr;return i&&(re(typeof i=="string","internal-error",{appName:t}),o.refreshToken=i),s&&(re(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),r&&(re(typeof r=="number","internal-error",{appName:t}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Lr,this.toJSON())}_performRefresh(){return Bn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(e,t){re(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Fi{constructor(t){var{uid:n,auth:i,stsTokenManager:s}=t,r=$u(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new bE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Hg(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const n=await Or(this,this.stsTokenManager.getToken(this.auth,t));return re(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return yE(this,t)}reload(){return CE(this)}_assign(t){this!==t&&(re(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Fi(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),n&&await il(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Or(this,mE(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var i,s,r,o,l,a,c,d;const f=(i=n.displayName)!==null&&i!==void 0?i:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,b=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(l=n.tenantId)!==null&&l!==void 0?l:void 0,M=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,z=(c=n.createdAt)!==null&&c!==void 0?c:void 0,j=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:Y,emailVerified:F,isAnonymous:oe,providerData:pe,stsTokenManager:Re}=n;re(Y&&Re,t,"internal-error");const J=Lr.fromJSON(this.name,Re);re(typeof Y=="string",t,"internal-error"),Zn(f,t.name),Zn(m,t.name),re(typeof F=="boolean",t,"internal-error"),re(typeof oe=="boolean",t,"internal-error"),Zn(b,t.name),Zn(C,t.name),Zn(A,t.name),Zn(M,t.name),Zn(z,t.name),Zn(j,t.name);const me=new Fi({uid:Y,auth:t,email:m,emailVerified:F,displayName:f,isAnonymous:oe,photoURL:C,phoneNumber:b,tenantId:A,stsTokenManager:J,createdAt:z,lastLoginAt:j});return pe&&Array.isArray(pe)&&(me.providerData=pe.map(_e=>Object.assign({},_e))),M&&(me._redirectEventId=M),me}static async _fromIdTokenResponse(t,n,i=!1){const s=new Lr;s.updateFromServerResponse(n);const r=new Fi({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:i});return await il(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf=new Map;function Un(e){Kn(e instanceof Function,"Expected a class definition");let t=mf.get(e);return t?(Kn(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,mf.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}$g.type="NONE";const gf=$g;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(e,t,n){return`firebase:${e}:${t}:${n}`}class ps{constructor(t,n,i){this.persistence=t,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=zo(this.userKey,s.apiKey,r),this.fullPersistenceKey=zo("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Fi._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,i="authUser"){if(!n.length)return new ps(Un(gf),t,i);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||Un(gf);const o=zo(i,t.config.apiKey,t.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){const f=Fi._fromJSON(t,d);c!==r&&(l=f),r=c;break}}catch{}const a=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!a.length?new ps(r,t,i):(r=a[0],l&&await r._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new ps(r,t,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Wg(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Vg(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Kg(t))return"Blackberry";if(qg(t))return"Webos";if(ju(t))return"Safari";if((t.includes("chrome/")||zg(t))&&!t.includes("edge/"))return"Chrome";if(jg(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=e.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Vg(e=Et()){return/firefox\//i.test(e)}function ju(e=Et()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function zg(e=Et()){return/crios\//i.test(e)}function Wg(e=Et()){return/iemobile/i.test(e)}function jg(e=Et()){return/android/i.test(e)}function Kg(e=Et()){return/blackberry/i.test(e)}function qg(e=Et()){return/webos/i.test(e)}function Wl(e=Et()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function TE(e=Et()){var t;return Wl(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function SE(){return $w()&&document.documentMode===10}function Gg(e=Et()){return Wl(e)||jg(e)||qg(e)||Kg(e)||/windows phone/i.test(e)||Wg(e)}function AE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yg(e,t=[]){let n;switch(e){case"Browser":n=yf(Et());break;case"Worker":n=`${yf(Et())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${yi}/${i}`}async function Xg(e,t){return Xr(e,"GET","/v2/recaptchaConfig",Fg(e,t))}function _f(e){return e!==void 0&&e.enterprise!==void 0}class Jg{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kE(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function Zg(e){return new Promise((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=s=>{const r=En("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",kE().appendChild(i)})}function RE(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const PE="https://www.google.com/recaptcha/enterprise.js?render=",xE="recaptcha-enterprise",OE="NO_RECAPTCHA";class LE{constructor(t){this.type=xE,this.auth=Jr(t)}async verify(t="verify",n=!1){async function i(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,l)=>{Xg(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new Jg(a);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(a=>{l(a)})})}function s(r,o,l){const a=window.grecaptcha;_f(a)?a.enterprise.ready(()=>{a.enterprise.execute(r,{action:t}).then(c=>{o(c)}).catch(()=>{o(OE)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{i(this.auth).then(l=>{if(!n&&_f(window.grecaptcha))s(l,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Zg(PE+l).then(()=>{s(l,r,o)}).catch(a=>{o(a)})}}).catch(l=>{o(l)})})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const i=r=>new Promise((o,l)=>{try{const a=t(r);o(a)}catch(a){l(a)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const i of this.queue)await i(t),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(t,n,i,s){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vf(this),this.idTokenSubscription=new vf(this),this.beforeStateQueue=new NE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ng,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Un(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await ps.create(this,t),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(t);(!o||o===l)&&(a!=null&&a.user)&&(s=a.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await il(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=uE()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?gi(t):null;return n&&re(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&re(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Un(t))})}async initializeRecaptchaConfig(){const t=await Xg(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Jg(t);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new LE(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Ls("auth","Firebase",t())}onAuthStateChanged(t,n,i){return this.registerStateListener(this.authStateSubscription,t,n,i)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,i){return this.registerStateListener(this.idTokenSubscription,t,n,i)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const i=await this.getOrInitRedirectPersistenceManager(n);return t===null?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Un(t)||this._popupRedirectResolver;re(n,this,"argument-error"),this.redirectPersistenceManager=await ps.create(this,[Un(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return re(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?t.addObserver(n,i,s):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Yg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&oE(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Jr(e){return gi(e)}class vf{constructor(t){this.auth=t,this.observer=null,this.addObserver=Yw(n=>this.observer=n)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ME(e,t){const n=kg(e,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(el(r,t??{}))return s;kn(s,"already-initialized")}return n.initialize({options:t})}function FE(e,t){const n=(t==null?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Un);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,t==null?void 0:t.popupRedirectResolver)}function BE(e,t,n){const i=Jr(e);re(i._canInitEmulator,i,"emulator-config-failed"),re(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),r=Qg(t),{host:o,port:l}=UE(t),a=l===null?"":`:${l}`;i.config.emulator={url:`${r}//${o}${a}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:l,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||HE()}function Qg(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function UE(e){const t=Qg(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:bf(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:bf(o)}}}function bf(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function HE(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Bn("not implemented")}_getIdTokenResponse(t){return Bn("not implemented")}_linkToIdToken(t,n){return Bn("not implemented")}_getReauthenticationResolver(t){return Bn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ms(e,t){return fE(e,"POST","/v1/accounts:signInWithIdp",Fg(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $E="http://localhost";class Vi extends e1{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Vi(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):kn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:i,signInMethod:s}=n,r=$u(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new Vi(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return ms(t,n)}_linkToIdToken(t,n){const i=this.buildRequest();return i.idToken=n,ms(t,i)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,ms(t,n)}buildRequest(){const t={requestUri:$E,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Ns(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr extends Ku{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends Zr{constructor(){super("facebook.com")}static credential(t){return Vi._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ri.credentialFromTaggedObject(t)}static credentialFromError(t){return ri.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ri.credential(t.oauthAccessToken)}catch{return null}}}ri.FACEBOOK_SIGN_IN_METHOD="facebook.com";ri.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends Zr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Vi._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Fn.credentialFromTaggedObject(t)}static credentialFromError(t){return Fn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:i}=t;if(!n&&!i)return null;try{return Fn.credential(n,i)}catch{return null}}}Fn.GOOGLE_SIGN_IN_METHOD="google.com";Fn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends Zr{constructor(){super("github.com")}static credential(t){return Vi._fromParams({providerId:oi.PROVIDER_ID,signInMethod:oi.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return oi.credentialFromTaggedObject(t)}static credentialFromError(t){return oi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return oi.credential(t.oauthAccessToken)}catch{return null}}}oi.GITHUB_SIGN_IN_METHOD="github.com";oi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li extends Zr{constructor(){super("twitter.com")}static credential(t,n){return Vi._fromParams({providerId:li.PROVIDER_ID,signInMethod:li.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return li.credentialFromTaggedObject(t)}static credentialFromError(t){return li.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=t;if(!n||!i)return null;try{return li.credential(n,i)}catch{return null}}}li.TWITTER_SIGN_IN_METHOD="twitter.com";li.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,i,s=!1){const r=await Fi._fromIdTokenResponse(t,i,s),o=Cf(i);return new Es({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(t,n,i){await t._updateTokensIfNecessary(i,!0);const s=Cf(i);return new Es({user:t,providerId:s,_tokenResponse:i,operationType:n})}}function Cf(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl extends On{constructor(t,n,i,s){var r;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,sl.prototype),this.customData={appName:t.name,tenantId:(r=t.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(t,n,i,s){return new sl(t,n,i,s)}}function t1(e,t,n,i){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?sl._fromErrorAndOperation(e,r,t,i):r})}async function VE(e,t,n=!1){const i=await Or(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Es._forOperation(e,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zE(e,t,n=!1){const{auth:i}=e,s="reauthenticate";try{const r=await Or(e,t1(i,s,t,e),n);re(r.idToken,i,"internal-error");const o=Wu(r.idToken);re(o,i,"internal-error");const{sub:l}=o;return re(e.uid===l,i,"user-mismatch"),Es._forOperation(e,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&kn(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WE(e,t,n=!1){const i="signIn",s=await t1(e,i,t),r=await Es._fromIdTokenResponse(e,i,s);return n||await e._updateCurrentUser(r.user),r}function n1(e,t,n,i){return gi(e).onIdTokenChanged(t,n,i)}function jE(e,t,n){return gi(e).beforeAuthStateChanged(t,n)}function wf(e){return gi(e).signOut()}const rl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(rl,"1"),this.storage.removeItem(rl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KE(){const e=Et();return ju(e)||Wl(e)}const qE=1e3,GE=10;class s1 extends i1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=KE()&&AE(),this.fallbackToPolling=Gg(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&t(n,s,i)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const i=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(i,t.newValue):this.storage.removeItem(i);else if(this.localCache[i]===t.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);SE()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,GE):s()}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:i}),!0)})},qE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}s1.type="LOCAL";const YE=s1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1 extends i1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}r1.type="SESSION";const o1=r1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XE(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const i=new jl(t);return this.receivers.push(i),i}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const l=Array.from(o).map(async c=>c(n.origin,r)),a=await XE(l);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:a})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qu(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((l,a)=>{const c=qu("",20);s.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),r=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),l(m.data.response);break;default:clearTimeout(d),clearTimeout(r),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(){return window}function ZE(e){Tn().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l1(){return typeof Tn().WorkerGlobalScope<"u"&&typeof Tn().importScripts=="function"}async function QE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function e4(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function t4(){return l1()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a1="firebaseLocalStorageDb",n4=1,ol="firebaseLocalStorage",c1="fbase_key";class Qr{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Kl(e,t){return e.transaction([ol],t?"readwrite":"readonly").objectStore(ol)}function i4(){const e=indexedDB.deleteDatabase(a1);return new Qr(e).toPromise()}function Pc(){const e=indexedDB.open(a1,n4);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const i=e.result;try{i.createObjectStore(ol,{keyPath:c1})}catch(s){n(s)}}),e.addEventListener("success",async()=>{const i=e.result;i.objectStoreNames.contains(ol)?t(i):(i.close(),await i4(),t(await Pc()))})})}async function If(e,t,n){const i=Kl(e,!0).put({[c1]:t,value:n});return new Qr(i).toPromise()}async function s4(e,t){const n=Kl(e,!1).get(t),i=await new Qr(n).toPromise();return i===void 0?null:i.value}function Ef(e,t){const n=Kl(e,!0).delete(t);return new Qr(n).toPromise()}const r4=800,o4=3;class u1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Pc(),this.db)}async _withRetries(t){let n=0;for(;;)try{const i=await this._openDb();return await t(i)}catch(i){if(n++>o4)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return l1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jl._getInstance(t4()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await QE(),!this.activeServiceWorker)return;this.sender=new JE(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((t=i[0])===null||t===void 0)&&t.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||e4()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Pc();return await If(t,rl,"1"),await Ef(t,rl),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>If(i,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(i=>s4(i,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ef(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const r=Kl(s,!1).getAll();return new Qr(r).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:r}of t)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),r4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}u1.type="LOCAL";const l4=u1;new Yr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h1(e,t){return t?Un(t):(re(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu extends e1{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return ms(t,this._buildIdpRequest())}_linkToIdToken(t,n){return ms(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return ms(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function a4(e){return WE(e.auth,new Gu(e),e.bypassAuthState)}function c4(e){const{auth:t,user:n}=e;return re(n,t,"internal-error"),zE(n,new Gu(e),e.bypassAuthState)}async function u4(e){const{auth:t,user:n}=e;return re(n,t,"internal-error"),VE(n,new Gu(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{constructor(t,n,i,s,r=!1){this.auth=t,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:l}=t;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return a4;case"linkViaPopup":case"linkViaRedirect":return u4;case"reauthViaPopup":case"reauthViaRedirect":return c4;default:kn(this.auth,"internal-error")}}resolve(t){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h4=new Yr(2e3,1e4);async function d4(e,t,n){const i=Jr(e);lE(e,t,Ku);const s=h1(i,n);return new xi(i,"signInViaPopup",t,s).executeNotNull()}class xi extends d1{constructor(t,n,i,s,r){super(t,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,xi.currentPopupAction&&xi.currentPopupAction.cancel(),xi.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return re(t,this.auth,"internal-error"),t}async onExecution(){Kn(this.filter.length===1,"Popup operations only handle one event");const t=qu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(En(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(En(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xi.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(En(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,h4.get())};t()}}xi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f4="pendingRedirect",Wo=new Map;class p4 extends d1{constructor(t,n,i=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let t=Wo.get(this.auth._key());if(!t){try{const i=await m4(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(i)}catch(n){t=()=>Promise.reject(n)}Wo.set(this.auth._key(),t)}return this.bypassAuthState||Wo.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function m4(e,t){const n=_4(t),i=y4(e);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function g4(e,t){Wo.set(e._key(),t)}function y4(e){return Un(e._redirectPersistence)}function _4(e){return zo(f4,e.config.apiKey,e.name)}async function v4(e,t,n=!1){const i=Jr(e),s=h1(i,t),o=await new p4(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b4=10*60*1e3;class C4{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(t,i)&&(n=!0,this.sendToConsumer(t,i),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!w4(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var i;if(t.error&&!f1(t)){const s=((i=t.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(En(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const i=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&i}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=b4&&this.cachedEventUids.clear(),this.cachedEventUids.has(Tf(t))}saveEventToCache(t){this.cachedEventUids.add(Tf(t)),this.lastProcessedEventTime=Date.now()}}function Tf(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function f1({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function w4(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return f1(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I4(e,t={}){return Xr(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E4=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,T4=/^https?/;async function S4(e){if(e.config.emulator)return;const{authorizedDomains:t}=await I4(e);for(const n of t)try{if(A4(n))return}catch{}kn(e,"unauthorized-domain")}function A4(e){const t=Rc(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&i===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!T4.test(n))return!1;if(E4.test(e))return i===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k4=new Yr(3e4,6e4);function Sf(){const e=Tn().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function R4(e){return new Promise((t,n)=>{var i,s,r;function o(){Sf(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Sf(),n(En(e,"network-request-failed"))},timeout:k4.get()})}if(!((s=(i=Tn().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((r=Tn().gapi)===null||r===void 0)&&r.load)o();else{const l=RE("iframefcb");return Tn()[l]=()=>{gapi.load?o():n(En(e,"network-request-failed"))},Zg(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(t=>{throw jo=null,t})}let jo=null;function P4(e){return jo=jo||R4(e),jo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x4=new Yr(5e3,15e3),O4="__/auth/iframe",L4="emulator/auth/iframe",N4={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},D4=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function M4(e){const t=e.config;re(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?zu(t,L4):`https://${e.config.authDomain}/${O4}`,i={apiKey:t.apiKey,appName:e.name,v:yi},s=D4.get(e.config.apiHost);s&&(i.eid=s);const r=e._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${Ns(i).slice(1)}`}async function F4(e){const t=await P4(e),n=Tn().gapi;return re(n,e,"internal-error"),t.open({where:document.body,url:M4(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:N4,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=En(e,"network-request-failed"),l=Tn().setTimeout(()=>{r(o)},x4.get());function a(){Tn().clearTimeout(l),s(i)}i.ping(a).then(a,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B4={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},U4=500,H4=600,$4="_blank",V4="http://localhost";class Af{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function z4(e,t,n,i=U4,s=H4){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const a=Object.assign(Object.assign({},B4),{width:i.toString(),height:s.toString(),top:r,left:o}),c=Et().toLowerCase();n&&(l=zg(c)?$4:n),Vg(c)&&(t=t||V4,a.scrollbars="yes");const d=Object.entries(a).reduce((m,[b,C])=>`${m}${b}=${C},`,"");if(TE(c)&&l!=="_self")return W4(t||"",l),new Af(null);const f=window.open(t||"",l,d);re(f,e,"popup-blocked");try{f.focus()}catch{}return new Af(f)}function W4(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j4="__/auth/handler",K4="emulator/auth/handler",q4=encodeURIComponent("fac");async function kf(e,t,n,i,s,r){re(e.config.authDomain,e,"auth-domain-config-required"),re(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:yi,eventId:s};if(t instanceof Ku){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Ic(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,f]of Object.entries(r||{}))o[d]=f}if(t instanceof Zr){const d=t.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}e.tenantId&&(o.tid=e.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const a=await e._getAppCheckToken(),c=a?`#${q4}=${encodeURIComponent(a)}`:"";return`${G4(e)}?${Ns(l).slice(1)}${c}`}function G4({config:e}){return e.emulator?zu(e,K4):`https://${e.authDomain}/${j4}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va="webStorageSupport";class Y4{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=o1,this._completeRedirectFn=v4,this._overrideRedirectResult=g4}async _openPopup(t,n,i,s){var r;Kn((r=this.eventManagers[t._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await kf(t,n,i,Rc(),s);return z4(t,o,qu())}async _openRedirect(t,n,i,s){await this._originValidation(t);const r=await kf(t,n,i,Rc(),s);return ZE(r),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(Kn(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(t);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(t){const n=await F4(t),i=new C4(t);return n.register("authEvent",s=>(re(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:i},this.iframes[t._key()]=n,i}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Va,{type:Va},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Va];o!==void 0&&n(!!o),kn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=S4(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Gg()||ju()||Wl()}}const X4=Y4;var Rf="@firebase/auth",Pf="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J4{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(i=>{t((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z4(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Q4(e){An(new mn("auth",(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),r=t.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=i.options;re(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const a={apiKey:o,authDomain:l,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Yg(e)},c=new DE(i,s,r,a);return FE(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,i)=>{t.getProvider("auth-internal").initialize()})),An(new mn("auth-internal",t=>{const n=Jr(t.getProvider("auth").getImmediate());return(i=>new J4(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kt(Rf,Pf,Z4(e)),Kt(Rf,Pf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e6=5*60,t6=Cg("authIdTokenMaxAge")||e6;let xf=null;const n6=e=>async t=>{const n=t&&await t.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>t6)return;const s=n==null?void 0:n.token;xf!==s&&(xf=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function p1(e=Pg()){const t=kg(e,"auth");if(t.isInitialized())return t.getImmediate();const n=ME(e,{popupRedirectResolver:X4,persistence:[l4,YE,o1]}),i=Cg("authTokenSyncURL");if(i){const r=n6(i);jE(n,r,()=>r(n.currentUser)),n1(n,o=>r(o))}const s=Uw("auth");return s&&BE(n,`http://${s}`),n}Q4("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i6=new Map,s6={activated:!1,tokenObservers:[]};function Rn(e){return i6.get(e)||Object.assign({},s6)}const Of={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r6{constructor(t,n,i,s,r){if(this.operation=t,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=s,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=s,s>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(t){this.stop();try{this.pending=new Rr,await o6(this.getNextRun(t)),this.pending.resolve(),await this.pending.promise,this.pending=new Rr,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(t){if(t)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function o6(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l6={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},ll=new Ls("appCheck","AppCheck",l6);function a6(e){if(!Rn(e).activated)throw ll.create("use-before-activation",{appName:e.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c6="firebase-app-check-database",u6=1,xc="firebase-app-check-store";let To=null;function h6(){return To||(To=new Promise((e,t)=>{try{const n=indexedDB.open(c6,u6);n.onsuccess=i=>{e(i.target.result)},n.onerror=i=>{var s;t(ll.create("storage-open",{originalErrorMessage:(s=i.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=i=>{const s=i.target.result;switch(i.oldVersion){case 0:s.createObjectStore(xc,{keyPath:"compositeKey"})}}}catch(n){t(ll.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),To)}function d6(e,t){return f6(p6(e),t)}async function f6(e,t){const i=(await h6()).transaction(xc,"readwrite"),r=i.objectStore(xc).put({compositeKey:e,value:t});return new Promise((o,l)=>{r.onsuccess=a=>{o()},i.onerror=a=>{var c;l(ll.create("storage-set",{originalErrorMessage:(c=a.target.error)===null||c===void 0?void 0:c.message}))}})}function p6(e){return`${e.options.appId}-${e.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc=new Gr("@firebase/app-check");function Lf(e,t){return Eg()?d6(e,t).catch(n=>{Oc.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m6={error:"UNKNOWN_ERROR"};function g6(e){return Vl.encodeString(JSON.stringify(e),!1)}async function Lc(e,t=!1){const n=e.app;a6(n);const i=Rn(n);let s=i.token,r;if(s&&!lr(s)&&(i.token=void 0,s=void 0),!s){const a=await i.cachedTokenPromise;a&&(lr(a)?s=a:await Lf(n,void 0))}if(!t&&s&&lr(s))return{token:s.token};let o=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),s=await Rn(n).exchangeTokenPromise}catch(a){a.code==="appCheck/throttled"?Oc.warn(a.message):Oc.error(a),r=a}let l;return s?r?lr(s)?l={token:s.token,internalError:r}:l=Df(r):(l={token:s.token},i.token=s,await Lf(n,s)):l=Df(r),o&&v6(n,l),l}function y6(e,t,n,i){const{app:s}=e,r=Rn(s),o={next:n,error:i,type:t};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&lr(r.token)){const l=r.token;Promise.resolve().then(()=>{n({token:l.token}),Nf(e)}).catch(()=>{})}r.cachedTokenPromise.then(()=>Nf(e))}function m1(e,t){const n=Rn(e),i=n.tokenObservers.filter(s=>s.next!==t);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function Nf(e){const{app:t}=e,n=Rn(t);let i=n.tokenRefresher;i||(i=_6(e),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function _6(e){const{app:t}=e;return new r6(async()=>{const n=Rn(t);let i;if(n.token?i=await Lc(e,!0):i=await Lc(e),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=Rn(t);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,s),Math.max(0,i-Date.now())}else return 0},Of.RETRIAL_MIN_WAIT,Of.RETRIAL_MAX_WAIT)}function v6(e,t){const n=Rn(e).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&t.error!=null?i.error(t.error):i.next(t)}catch{}}function lr(e){return e.expireTimeMillis-Date.now()>0}function Df(e){return{token:g6(m6),error:e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b6{constructor(t,n){this.app=t,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:t}=Rn(this.app);for(const n of t)m1(this.app,n.next);return Promise.resolve()}}function C6(e,t){return new b6(e,t)}function w6(e){return{getToken:t=>Lc(e,t),addTokenListener:t=>y6(e,"INTERNAL",t),removeTokenListener:t=>m1(e.app,t)}}const I6="@firebase/app-check",E6="0.7.0",T6="app-check",Mf="app-check-internal";function S6(){An(new mn(T6,e=>{const t=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat");return C6(t,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider(Mf).initialize()})),An(new mn(Mf,e=>{const t=e.getProvider("app-check").getImmediate();return w6(t)},"PUBLIC").setInstantiationMode("EXPLICIT")),Kt(I6,E6)}S6();var A6="firebase",k6="9.22.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kt(A6,k6,"app");const g1=Symbol("firebaseApp");function y1(e){return Du()&&In(g1,null)||Pg(e)}const R6=typeof window<"u",So=new WeakMap;function P6(e,t){if(!So.has(e)){const n=dC(!0);So.set(e,n);const{unmount:i}=t;t.unmount=()=>{i.call(t),n.stop(),So.delete(e)}}return So.get(e)}const x6=new WeakMap,Ao=new WeakMap;function _1(e){const t=y1(e);if(!Ao.has(t)){let n;const s=[new Promise(r=>{n=r}),r=>{Ao.set(t,r),n(r.value)}];Ao.set(t,s)}return Ao.get(t)}function O6(e){const t=_1(e);return Array.isArray(t)?t[0]:Promise.resolve(t.value)}function L6(e,t){const n=p1(t);n1(n,i=>{const s=_1();e.value=i,Array.isArray(s)&&s[1](e)})}const Ff="@firebase/database",Bf="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let v1="";function N6(e){v1=e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D6{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,n){n==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),ft(n))}get(t){const n=this.domStorage_.getItem(this.prefixedName_(t));return n==null?null:Pr(n)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M6{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,n){n==null?delete this.cache_[t]:this.cache_[t]=n}get(t){return Yn(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b1=function(e){try{if(typeof window<"u"&&typeof window[e]<"u"){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new D6(t)}}catch{}return new M6},Oi=b1("localStorage"),Nc=b1("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs=new Gr("@firebase/database"),F6=function(){let e=1;return function(){return e++}}(),C1=function(e){const t=Qw(e),n=new Gw;n.update(t);const i=n.digest();return Vl.encodeByteArray(i)},eo=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?t+=eo.apply(null,i):typeof i=="object"?t+=ft(i):t+=i,t+=" "}return t};let Bi=null,Uf=!0;const B6=function(e,t){H(!t||e===!0||e===!1,"Can't turn on custom loggers persistently."),e===!0?(gs.logLevel=xe.VERBOSE,Bi=gs.log.bind(gs),t&&Nc.set("logging_enabled",!0)):typeof e=="function"?Bi=e:(Bi=null,Nc.remove("logging_enabled"))},yt=function(...e){if(Uf===!0&&(Uf=!1,Bi===null&&Nc.get("logging_enabled")===!0&&B6(!0)),Bi){const t=eo.apply(null,e);Bi(t)}},to=function(e){return function(...t){yt(e,...t)}},Dc=function(...e){const t="FIREBASE INTERNAL ERROR: "+eo(...e);gs.error(t)},zi=function(...e){const t=`FIREBASE FATAL ERROR: ${eo(...e)}`;throw gs.error(t),new Error(t)},qt=function(...e){const t="FIREBASE WARNING: "+eo(...e);gs.warn(t)},U6=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&qt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},w1=function(e){return typeof e=="number"&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},H6=function(e){if(document.readyState==="complete")e();else{let t=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ts="[MIN_NAME]",Wi="[MAX_NAME]",Ds=function(e,t){if(e===t)return 0;if(e===Ts||t===Wi)return-1;if(t===Ts||e===Wi)return 1;{const n=Hf(e),i=Hf(t);return n!==null?i!==null?n-i===0?e.length-t.length:n-i:-1:i!==null?1:e<t?-1:1}},$6=function(e,t){return e===t?0:e<t?-1:1},Zs=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+ft(t))},Yu=function(e){if(typeof e!="object"||e===null)return ft(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)i!==0&&(n+=","),n+=ft(t[i]),n+=":",n+=Yu(e[t[i]]);return n+="}",n},I1=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let s=0;s<n;s+=t)s+t>n?i.push(e.substring(s,n)):i.push(e.substring(s,s+t));return i};function tn(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const E1=function(e){H(!w1(e),"Invalid JSON number");const t=11,n=52,i=(1<<t-1)-1;let s,r,o,l,a;e===0?(r=0,o=0,s=1/e===-1/0?1:0):(s=e<0,e=Math.abs(e),e>=Math.pow(2,1-i)?(l=Math.min(Math.floor(Math.log(e)/Math.LN2),i),r=l+i,o=Math.round(e*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(e/Math.pow(2,1-i-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=t;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const d=c.join("");let f="";for(a=0;a<64;a+=8){let m=parseInt(d.substr(a,8),2).toString(16);m.length===1&&(m="0"+m),f=f+m}return f.toLowerCase()},V6=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},z6=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},W6=new RegExp("^-?(0*)\\d{1,10}$"),j6=-2147483648,K6=2147483647,Hf=function(e){if(W6.test(e)){const t=Number(e);if(t>=j6&&t<=K6)return t}return null},no=function(e){try{e()}catch(t){setTimeout(()=>{const n=t.stack||"";throw qt("Exception was thrown by user callback.",n),t},Math.floor(0))}},q6=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},mr=function(e,t){const n=setTimeout(e,t);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G6{constructor(t,n){this.appName_=t,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(n,i):n(null)},0)})}addTokenChangeListener(t){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(t))}notifyForInvalidToken(){qt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y6{constructor(t,n,i){this.appName_=t,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(n=>n&&n.code==="auth/token-not-initialized"?(yt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(n,i):n(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(n=>n.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(n=>n.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',qt(t)}}class Mc{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}Mc.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu="5",T1="v",S1="s",A1="r",k1="f",R1=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,P1="ls",x1="p",Fc="ac",O1="websocket",L1="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X6{constructor(t,n,i,s,r=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Oi.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&Oi.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${n}`}}function J6(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function N1(e,t,n){H(typeof t=="string","typeof type must == string"),H(typeof n=="object","typeof params must == object");let i;if(t===O1)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===L1)i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);J6(e)&&(n.ns=e.namespace);const s=[];return tn(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z6{constructor(){this.counters_={}}incrementCounter(t,n=1){Yn(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=n}get(){return Lw(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za={},Wa={};function Ju(e){const t=e.toString();return za[t]||(za[t]=new Z6),za[t]}function Q6(e,t){const n=e.toString();return Wa[n]||(Wa[n]=t()),Wa[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e9{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,n){this.closeAfterResponse=t,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,n){for(this.pendingResponses[t]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&no(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $f="start",t9="close",n9="pLPCommand",i9="pRTLPCB",D1="id",M1="pw",F1="ser",s9="cb",r9="seg",o9="ts",l9="d",a9="dframe",B1=1870,U1=30,c9=B1-U1,u9=25e3,h9=3e4;class os{constructor(t,n,i,s,r,o,l){this.connId=t,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=to(t),this.stats_=Ju(n),this.urlFn=a=>(this.appCheckToken&&(a[Fc]=this.appCheckToken),N1(n,L1,a))}open(t,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new e9(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(h9)),H6(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Zu((...r)=>{const[o,l,a,c,d]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===$f)this.id=l,this.password=a;else if(o===t9)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const i={};i[$f]="t",i[F1]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[s9]=this.scriptTagHolder.uniqueCallbackIdentifier),i[T1]=Xu,this.transportSessionId&&(i[S1]=this.transportSessionId),this.lastSessionId&&(i[P1]=this.lastSessionId),this.applicationId&&(i[x1]=this.applicationId),this.appCheckToken&&(i[Fc]=this.appCheckToken),typeof location<"u"&&location.hostname&&R1.test(location.hostname)&&(i[A1]=k1);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){os.forceAllow_=!0}static forceDisallow(){os.forceDisallow_=!0}static isAvailable(){return os.forceAllow_?!0:!os.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!V6()&&!z6()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const n=ft(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=yg(n),s=I1(i,c9);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(t,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[a9]="t",i[D1]=t,i[M1]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const n=ft(t).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Zu{constructor(t,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=F6(),window[n9+this.uniqueCallbackIdentifier]=t,window[i9+this.uniqueCallbackIdentifier]=n,this.myIFrame=Zu.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){yt("frame writing exception"),l.stack&&yt(l.stack),yt(l)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||yt("No IE domain setting required")}catch{const i=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,n){for(this.myID=t,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[D1]=this.myID,t[M1]=this.myPW,t[F1]=this.currentSerial;let n=this.urlFn(t),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+U1+i.length<=B1;){const o=this.pendingSegs.shift();i=i+"&"+r9+s+"="+o.seg+"&"+o9+s+"="+o.ts+"&"+l9+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(t,n,i){this.pendingSegs.push({seg:t,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(t,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(u9)),r=()=>{clearTimeout(s),i()};this.addTag(t,r)}addTag(t,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=t,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{yt("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d9=16384,f9=45e3;let al=null;typeof MozWebSocket<"u"?al=MozWebSocket:typeof WebSocket<"u"&&(al=WebSocket);class an{constructor(t,n,i,s,r,o,l){this.connId=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=to(this.connId),this.stats_=Ju(n),this.connURL=an.connectionURL_(n,o,l,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(t,n,i,s,r){const o={};return o[T1]=Xu,typeof location<"u"&&location.hostname&&R1.test(location.hostname)&&(o[A1]=k1),n&&(o[S1]=n),i&&(o[P1]=i),s&&(o[Fc]=s),r&&(o[x1]=r),N1(t,O1,o)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Oi.set("previous_websocket_failure",!0);try{let i;Ig(),this.mySock=new al(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){an.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(t=!0)}return!t&&al!==null&&!an.forceDisallow_}static previouslyFailed(){return Oi.isInMemoryStorage||Oi.get("previous_websocket_failure")===!0}markConnectionHealthy(){Oi.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Pr(n);this.onMessage(i)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(H(this.frames===null,"We already have a frame buffer"),t.length<=6){const n=Number(t);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const n=t.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(t){this.resetKeepAlive();const n=ft(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=I1(n,d9);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(f9))}sendString_(t){try{this.mySock.send(t)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}an.responsesRequiredToBeHealthy=2;an.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(t){this.initTransports_(t)}static get ALL_TRANSPORTS(){return[os,an]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(t){const n=an&&an.isAvailable();let i=n&&!an.previouslyFailed();if(t.webSocketOnly&&(n||qt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[an];else{const s=this.transports_=[];for(const r of Nr.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Nr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Nr.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p9=6e4,m9=5e3,g9=10*1024,y9=100*1024,ja="t",Vf="d",_9="s",zf="r",v9="e",Wf="o",jf="a",Kf="n",qf="p",b9="h";class C9{constructor(t,n,i,s,r,o,l,a,c,d){this.id=t,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=to("c:"+this.id+":"),this.transportManager_=new Nr(n),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=t.healthyTimeout||0;s>0&&(this.healthyTimeout_=mr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>y9?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>g9?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return n=>{t===this.conn_?this.onConnectionLost_(n):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return n=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(n):t===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(t){const n={t:"d",d:t};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(ja in t){const n=t[ja];n===jf?this.upgradeIfSecondaryHealthy_():n===zf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Wf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const n=Zs("t",t),i=Zs("d",t);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:qf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:jf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Kf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const n=Zs("t",t),i=Zs("d",t);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const n=Zs(ja,t);if(Vf in t){const i=t[Vf];if(n===b9){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Kf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===_9?this.onConnectionShutdown_(i):n===zf?this.onReset_(i):n===v9?Dc("Server Error: "+i):n===Wf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Dc("Unknown control packet command: "+n)}}onHandshake_(t){const n=t.ts,i=t.v,s=t.h;this.sessionId=t.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Xu!==i&&qt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),mr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(p9))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,n){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):mr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(m9))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:qf,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Oi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{put(t,n,i,s){}merge(t,n,i,s){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,n,i){}onDisconnectMerge(t,n,i){}onDisconnectCancel(t,n){}reportStats(t){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(t){this.allowedEvents_=t,this.listeners_={},H(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...n){if(Array.isArray(this.listeners_[t])){const i=[...this.listeners_[t]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(t,n,i){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:n,context:i});const s=this.getInitialEvent(t);s&&n.apply(i,s)}off(t,n,i){this.validateEventType_(t);const s=this.listeners_[t]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(t){H(this.allowedEvents_.find(n=>n===t),"Unknown event: "+t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl extends $1{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Uu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new cl}getInitialEvent(t){return H(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf=32,Yf=768;class qe{constructor(t,n){if(n===void 0){this.pieces_=t.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=n}toString(){let t="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(t+="/"+this.pieces_[n]);return t||"/"}}function Me(){return new qe("")}function Te(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function mi(e){return e.pieces_.length-e.pieceNum_}function We(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new qe(e.pieces_,t)}function V1(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function w9(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)e.pieces_[n]!==""&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function z1(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function W1(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new qe(t,0)}function lt(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof qe)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const i=t.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new qe(n,0)}function Ce(e){return e.pieceNum_>=e.pieces_.length}function Jt(e,t){const n=Te(e),i=Te(t);if(n===null)return t;if(n===i)return Jt(We(e),We(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function j1(e,t){if(mi(e)!==mi(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function un(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(mi(e)>mi(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class I9{constructor(t,n){this.errorPrefix_=n,this.parts_=z1(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=zl(this.parts_[i]);K1(this)}}function E9(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=zl(t),K1(e)}function T9(e){const t=e.parts_.pop();e.byteLength_-=zl(t),e.parts_.length>0&&(e.byteLength_-=1)}function K1(e){if(e.byteLength_>Yf)throw new Error(e.errorPrefix_+"has a key path longer than "+Yf+" bytes ("+e.byteLength_+").");if(e.parts_.length>Gf)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Gf+") or object contains a cycle "+Si(e))}function Si(e){return e.parts_.length===0?"":"in property '"+e.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu extends $1{constructor(){super(["visible"]);let t,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[t];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Qu}getInitialEvent(t){return H(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs=1e3,S9=60*5*1e3,Xf=30*1e3,A9=1.3,k9=3e4,R9="server_kill",Jf=3;class zn extends H1{constructor(t,n,i,s,r,o,l,a){if(super(),this.repoInfo_=t,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=zn.nextPersistentConnectionId_++,this.log_=to("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Qs,this.maxReconnectDelay_=S9,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Ig())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Qu.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&cl.getInstance().on("online",this.onOnline_,this)}sendRequest(t,n,i){const s=++this.requestNumber_,r={r:s,a:t,b:n};this.log_(ft(r)),H(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(t){this.initConnection_();const n=new Rr,s={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(t,n,i,s){this.initConnection_();const r=t._queryIdentifier,o=t._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),H(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),H(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:n,query:t,tag:i};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(t){const n=this.outstandingGets_[t];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(t){const n=t.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";t.tag&&(r.q=n._queryObject,r.t=t.tag),r.h=t.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;zn.warnOnListenWarnings_(a,n),(this.listens.get(i)&&this.listens.get(i).get(s))===t&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(i,s),t.onComplete&&t.onComplete(c,a))})}static warnOnListenWarnings_(t,n){if(t&&typeof t=="object"&&Yn(t,"w")){const i=Is(t,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();qt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||qw(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Xf)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,n=Kw(t)?"auth":"gauth",i={cred:t};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===t&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const n=t.s,i=t.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(t,n){const i=t._path.toString(),s=t._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),H(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,t._queryObject,n)}sendUnlisten_(t,n,i,s){this.log_("Unlisten on "+t+" for "+n);const r={p:t},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(t,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,n,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:n,onComplete:i})}onDisconnectMerge(t,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,n,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:n,onComplete:i})}onDisconnectCancel(t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(t,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+t,r),this.sendRequest(t,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(t,n,i,s){this.putInternal("p",t,n,i,s)}merge(t,n,i,s){this.putInternal("m",t,n,i,s)}putInternal(t,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:t,request:o,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(t){const n=this.outstandingPuts_[t].action,i=this.outstandingPuts_[t].request,s=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(t){if(this.connected_){const n={c:t};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+ft(t));const n=t.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,n){this.log_("handleServerMessage",t,n),t==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):t==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):t==="c"?this.onListenRevoked_(n.p,n.q):t==="ac"?this.onAuthRevoked_(n.s,n.d):t==="apc"?this.onAppCheckRevoked_(n.s,n.d):t==="sd"?this.onSecurityDebugPacket_(n):Dc("Unrecognized action received from server: "+ft(t)+`
Are you using the latest client?`)}onReady_(t,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){H(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Qs,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=Qs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>k9&&(this.reconnectDelay_=Qs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-t);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*A9)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+zn.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,i())},c=function(f){H(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(f)};this.realtime_={close:a,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,m]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?yt("getToken() completed but was canceled"):(yt("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=m&&m.token,l=new C9(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,i,b=>{qt(b+" ("+this.repoInfo_.toString()+")"),this.interrupt(R9)},r))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&qt(f),a())}}}interrupt(t){yt("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){yt("Resuming connection for reason: "+t),delete this.interruptReasons_[t],Ic(this.interruptReasons_)&&(this.reconnectDelay_=Qs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const n=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const n=this.outstandingPuts_[t];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,n){let i;n?i=n.map(r=>Yu(r)).join("$"):i="default";const s=this.removeListen_(t,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(t,n){const i=new qe(t).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(t,n){yt("Auth token revoked: "+t+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Jf&&(this.reconnectDelay_=Xf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,n){yt("App check token revoked: "+t+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Jf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const n of t.values())this.sendListen_(n);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let n="js";t["sdk."+n+"."+v1.replace(/\./g,"-")]=1,Uu()?t["framework.cordova"]=1:wg()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=cl.getInstance().currentlyOnline();return Ic(this.interruptReasons_)&&t}}zn.nextPersistentConnectionId_=0;zn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(t,n){this.name=t,this.node=n}static Wrap(t,n){return new Se(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,n){const i=new Se(Ts,t),s=new Se(Ts,n);return this.compare(i,s)!==0}minPost(){return Se.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ko;class q1 extends ql{static get __EMPTY_NODE(){return ko}static set __EMPTY_NODE(t){ko=t}compare(t,n){return Ds(t.name,n.name)}isDefinedOn(t){throw Os("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,n){return!1}minPost(){return Se.MIN}maxPost(){return new Se(Wi,ko)}makePost(t,n){return H(typeof t=="string","KeyIndex indexValue must always be a string."),new Se(t,ko)}toString(){return".key"}}const ys=new q1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(t,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!t.isEmpty();)if(t=t,o=n?i(t.key,n):1,s&&(o*=-1),o<0)this.isReverse_?t=t.left:t=t.right;else if(o===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(t.key,t.value):n={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class rt{constructor(t,n,i,s,r){this.key=t,this.value=n,this.color=i??rt.RED,this.left=s??Ut.EMPTY_NODE,this.right=r??Ut.EMPTY_NODE}copy(t,n,i,s,r){return new rt(t??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,i){let s=this;const r=i(t,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(t,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(t,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ut.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,n){let i,s;if(i=this,n(t,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(t,i.key)===0){if(i.right.isEmpty())return Ut.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}rt.RED=!0;rt.BLACK=!1;class P9{copy(t,n,i,s,r){return this}insert(t,n,i){return new rt(t,n,null)}remove(t,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ut{constructor(t,n=Ut.EMPTY_NODE){this.comparator_=t,this.root_=n}insert(t,n){return new Ut(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,rt.BLACK,null,null))}remove(t){return new Ut(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,rt.BLACK,null,null))}get(t){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(t,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(t){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(t,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new Ro(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,n){return new Ro(this.root_,t,this.comparator_,!1,n)}getReverseIteratorFrom(t,n){return new Ro(this.root_,t,this.comparator_,!0,n)}getReverseIterator(t){return new Ro(this.root_,null,this.comparator_,!0,t)}}Ut.EMPTY_NODE=new P9;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x9(e,t){return Ds(e.name,t.name)}function eh(e,t){return Ds(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bc;function O9(e){Bc=e}const G1=function(e){return typeof e=="number"?"number:"+E1(e):"string:"+e},Y1=function(e){if(e.isLeafNode()){const t=e.val();H(typeof t=="string"||typeof t=="number"||typeof t=="object"&&Yn(t,".sv"),"Priority must be a string or number.")}else H(e===Bc||e.isEmpty(),"priority of unexpected type.");H(e===Bc||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zf;class st{constructor(t,n=st.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=n,this.lazyHash_=null,H(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Y1(this.priorityNode_)}static set __childrenNodeConstructor(t){Zf=t}static get __childrenNodeConstructor(){return Zf}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new st(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:st.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return Ce(t)?this:Te(t)===".priority"?this.priorityNode_:st.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,n){return null}updateImmediateChild(t,n){return t===".priority"?this.updatePriority(n):n.isEmpty()&&t!==".priority"?this:st.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}updateChild(t,n){const i=Te(t);return i===null?n:n.isEmpty()&&i!==".priority"?this:(H(i!==".priority"||mi(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,st.__childrenNodeConstructor.EMPTY_NODE.updateChild(We(t),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,n){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+G1(this.priorityNode_.val())+":");const n=typeof this.value_;t+=n+":",n==="number"?t+=E1(this.value_):t+=this.value_,this.lazyHash_=C1(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===st.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof st.__childrenNodeConstructor?-1:(H(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const n=typeof t.value_,i=typeof this.value_,s=st.VALUE_TYPE_ORDER.indexOf(n),r=st.VALUE_TYPE_ORDER.indexOf(i);return H(s>=0,"Unknown leaf type: "+n),H(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const n=t;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}st.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let X1,J1;function L9(e){X1=e}function N9(e){J1=e}class D9 extends ql{compare(t,n){const i=t.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?Ds(t.name,n.name):r}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,n){return!t.getPriority().equals(n.getPriority())}minPost(){return Se.MIN}maxPost(){return new Se(Wi,new st("[PRIORITY-POST]",J1))}makePost(t,n){const i=X1(t);return new Se(n,new st("[PRIORITY-POST]",i))}toString(){return".priority"}}const Ct=new D9;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M9=Math.log(2);class F9{constructor(t){const n=r=>parseInt(Math.log(r)/M9,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(t+1),this.current_=this.count-1;const s=i(this.count);this.bits_=t+1&s}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const ul=function(e,t,n,i){e.sort(t);const s=function(a,c){const d=c-a;let f,m;if(d===0)return null;if(d===1)return f=e[a],m=n?n(f):f,new rt(m,f.node,rt.BLACK,null,null);{const b=parseInt(d/2,10)+a,C=s(a,b),A=s(b+1,c);return f=e[b],m=n?n(f):f,new rt(m,f.node,rt.BLACK,C,A)}},r=function(a){let c=null,d=null,f=e.length;const m=function(C,A){const M=f-C,z=f;f-=C;const j=s(M+1,z),Y=e[M],F=n?n(Y):Y;b(new rt(F,Y.node,A,null,j))},b=function(C){c?(c.left=C,c=C):(d=C,c=C)};for(let C=0;C<a.count;++C){const A=a.nextBitIsOne(),M=Math.pow(2,a.count-(C+1));A?m(M,rt.BLACK):(m(M,rt.BLACK),m(M,rt.RED))}return d},o=new F9(e.length),l=r(o);return new Ut(i||t,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ka;const ns={};class Hn{constructor(t,n){this.indexes_=t,this.indexSet_=n}static get Default(){return H(ns&&Ct,"ChildrenNode.ts has not been loaded"),Ka=Ka||new Hn({".priority":ns},{".priority":Ct}),Ka}get(t){const n=Is(this.indexes_,t);if(!n)throw new Error("No index defined for "+t);return n instanceof Ut?n:null}hasIndex(t){return Yn(this.indexSet_,t.toString())}addIndex(t,n){H(t!==ys,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(Se.Wrap);let o=r.getNext();for(;o;)s=s||t.isDefinedOn(o.node),i.push(o),o=r.getNext();let l;s?l=ul(i,t.getCompare()):l=ns;const a=t.toString(),c=Object.assign({},this.indexSet_);c[a]=t;const d=Object.assign({},this.indexes_);return d[a]=l,new Hn(d,c)}addToIndexes(t,n){const i=Qo(this.indexes_,(s,r)=>{const o=Is(this.indexSet_,r);if(H(o,"Missing index implementation for "+r),s===ns)if(o.isDefinedOn(t.node)){const l=[],a=n.getIterator(Se.Wrap);let c=a.getNext();for(;c;)c.name!==t.name&&l.push(c),c=a.getNext();return l.push(t),ul(l,o.getCompare())}else return ns;else{const l=n.get(t.name);let a=s;return l&&(a=a.remove(new Se(t.name,l))),a.insert(t,t.node)}});return new Hn(i,this.indexSet_)}removeFromIndexes(t,n){const i=Qo(this.indexes_,s=>{if(s===ns)return s;{const r=n.get(t.name);return r?s.remove(new Se(t.name,r)):s}});return new Hn(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let er;class Oe{constructor(t,n,i){this.children_=t,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Y1(this.priorityNode_),this.children_.isEmpty()&&H(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return er||(er=new Oe(new Ut(eh),null,Hn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||er}updatePriority(t){return this.children_.isEmpty()?this:new Oe(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const n=this.children_.get(t);return n===null?er:n}}getChild(t){const n=Te(t);return n===null?this:this.getImmediateChild(n).getChild(We(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,n){if(H(n,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(n);{const i=new Se(t,n);let s,r;n.isEmpty()?(s=this.children_.remove(t),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(t,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?er:this.priorityNode_;return new Oe(s,o,r)}}updateChild(t,n){const i=Te(t);if(i===null)return n;{H(Te(t)!==".priority"||mi(t)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(We(t),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(Ct,(o,l)=>{n[o]=l.val(t),i++,r&&Oe.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!t&&r&&s<2*i){const o=[];for(const l in n)o[l]=n[l];return o}else return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+G1(this.getPriority().val())+":"),this.forEachChild(Ct,(n,i)=>{const s=i.hash();s!==""&&(t+=":"+n+":"+s)}),this.lazyHash_=t===""?"":C1(t)}return this.lazyHash_}getPredecessorChildName(t,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new Se(t,n));return r?r.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const n=this.resolveIndex_(t);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(t){const n=this.getFirstChildName(t);return n?new Se(n,this.children_.get(n)):null}getLastChildName(t){const n=this.resolveIndex_(t);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(t){const n=this.getLastChildName(t);return n?new Se(n,this.children_.get(n)):null}forEachChild(t,n){const i=this.resolveIndex_(t);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(t,s=>s);{const s=this.children_.getIteratorFrom(t.name,Se.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,t)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(t,s=>s);{const s=this.children_.getReverseIteratorFrom(t.name,Se.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,t)>0;)s.getNext(),r=s.peek();return s}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===io?-1:0}withIndex(t){if(t===ys||this.indexMap_.hasIndex(t))return this;{const n=this.indexMap_.addIndex(t,this.children_);return new Oe(this.children_,this.priorityNode_,n)}}isIndexed(t){return t===ys||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const n=t;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(Ct),s=n.getIterator(Ct);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(t){return t===ys?null:this.indexMap_.get(t.toString())}}Oe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class B9 extends Oe{constructor(){super(new Ut(eh),Oe.EMPTY_NODE,Hn.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return Oe.EMPTY_NODE}isEmpty(){return!1}}const io=new B9;Object.defineProperties(Se,{MIN:{value:new Se(Ts,Oe.EMPTY_NODE)},MAX:{value:new Se(Wi,io)}});q1.__EMPTY_NODE=Oe.EMPTY_NODE;st.__childrenNodeConstructor=Oe;O9(io);N9(io);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U9=!0;function _t(e,t=null){if(e===null)return Oe.EMPTY_NODE;if(typeof e=="object"&&".priority"in e&&(t=e[".priority"]),H(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof e=="object"&&".value"in e&&e[".value"]!==null&&(e=e[".value"]),typeof e!="object"||".sv"in e){const n=e;return new st(n,_t(t))}if(!(e instanceof Array)&&U9){const n=[];let i=!1;if(tn(e,(o,l)=>{if(o.substring(0,1)!=="."){const a=_t(l);a.isEmpty()||(i=i||!a.getPriority().isEmpty(),n.push(new Se(o,a)))}}),n.length===0)return Oe.EMPTY_NODE;const r=ul(n,x9,o=>o.name,eh);if(i){const o=ul(n,Ct.getCompare());return new Oe(r,_t(t),new Hn({".priority":o},{".priority":Ct}))}else return new Oe(r,_t(t),Hn.Default)}else{let n=Oe.EMPTY_NODE;return tn(e,(i,s)=>{if(Yn(e,i)&&i.substring(0,1)!=="."){const r=_t(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(_t(t))}}L9(_t);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H9 extends ql{constructor(t){super(),this.indexPath_=t,H(!Ce(t)&&Te(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,n){const i=this.extractChild(t.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?Ds(t.name,n.name):r}makePost(t,n){const i=_t(t),s=Oe.EMPTY_NODE.updateChild(this.indexPath_,i);return new Se(n,s)}maxPost(){const t=Oe.EMPTY_NODE.updateChild(this.indexPath_,io);return new Se(Wi,t)}toString(){return z1(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $9 extends ql{compare(t,n){const i=t.node.compareTo(n.node);return i===0?Ds(t.name,n.name):i}isDefinedOn(t){return!0}indexedValueChanged(t,n){return!t.equals(n)}minPost(){return Se.MIN}maxPost(){return Se.MAX}makePost(t,n){const i=_t(t);return new Se(n,i)}toString(){return".value"}}const V9=new $9;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z9(e){return{type:"value",snapshotNode:e}}function W9(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function j9(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Qf(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function K9(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ct}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return H(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return H(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ts}hasEnd(){return this.endSet_}getIndexEndValue(){return H(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return H(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Wi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return H(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ct}copy(){const t=new th;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function ep(e){const t={};if(e.isDefault())return t;let n;if(e.index_===Ct?n="$priority":e.index_===V9?n="$value":e.index_===ys?n="$key":(H(e.index_ instanceof H9,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=ft(n),e.startSet_){const i=e.startAfterSet_?"startAfter":"startAt";t[i]=ft(e.indexStartValue_),e.startNameSet_&&(t[i]+=","+ft(e.indexStartName_))}if(e.endSet_){const i=e.endBeforeSet_?"endBefore":"endAt";t[i]=ft(e.indexEndValue_),e.endNameSet_&&(t[i]+=","+ft(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function tp(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;n===""&&(e.isViewFromLeft()?n="l":n="r"),t.vf=n}return e.index_!==Ct&&(t.i=e.index_.toString()),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl extends H1{constructor(t,n,i,s){super(),this.repoInfo_=t,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=to("p:rest:"),this.listens_={}}reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,n){return n!==void 0?"tag$"+n:(H(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,n,i,s){const r=t._path.toString();this.log_("Listen called for "+r+" "+t._queryIdentifier);const o=hl.getListenId_(t,i),l={};this.listens_[o]=l;const a=ep(t._queryParams);this.restRequest_(r+".json",a,(c,d)=>{let f=d;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(r,f,!1,i),Is(this.listens_,o)===l){let m;c?c===401?m="permission_denied":m="rest_error:"+c:m="ok",s(m,null)}})}unlisten(t,n){const i=hl.getListenId_(t,n);delete this.listens_[i]}get(t){const n=ep(t._queryParams),i=t._path.toString(),s=new Rr;return this.restRequest_(i+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(i,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(t){}restRequest_(t,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+Ns(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(i&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Pr(l.responseText)}catch{qt("Failed to parse JSON response for "+o+": "+l.responseText)}i(null,a)}else l.status!==401&&l.status!==404&&qt("Got unsuccessful REST response for "+o+" Status: "+l.status),i(l.status);i=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q9{constructor(){this.rootNode_=Oe.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,n){this.rootNode_=this.rootNode_.updateChild(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(){return{value:null,children:new Map}}function Z1(e,t,n){if(Ce(t))e.value=n,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(t,n);else{const i=Te(t);e.children.has(i)||e.children.set(i,dl());const s=e.children.get(i);t=We(t),Z1(s,t,n)}}function Uc(e,t,n){e.value!==null?n(t,e.value):G9(e,(i,s)=>{const r=new qe(t.toString()+"/"+i);Uc(s,r,n)})}function G9(e,t){e.children.forEach((n,i)=>{t(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y9{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),n=Object.assign({},t);return this.last_&&tn(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np=10*1e3,X9=30*1e3,J9=5*60*1e3;class Z9{constructor(t,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Y9(t);const i=np+(X9-np)*Math.random();mr(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const t=this.statsListener_.get(),n={};let i=!1;tn(t,(s,r)=>{r>0&&Yn(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),mr(this.reportStats_.bind(this),Math.floor(Math.random()*2*J9))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Cn;(function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Cn||(Cn={}));function Q1(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function e0(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function t0(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(t,n,i){this.path=t,this.affectedTree=n,this.revert=i,this.type=Cn.ACK_USER_WRITE,this.source=Q1()}operationForChild(t){if(Ce(this.path)){if(this.affectedTree.value!=null)return H(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new qe(t));return new fl(Me(),n,this.revert)}}else return H(Te(this.path)===t,"operationForChild called for unrelated child."),new fl(We(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(t,n,i){this.source=t,this.path=n,this.snap=i,this.type=Cn.OVERWRITE}operationForChild(t){return Ce(this.path)?new ji(this.source,Me(),this.snap.getImmediateChild(t)):new ji(this.source,We(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(t,n,i){this.source=t,this.path=n,this.children=i,this.type=Cn.MERGE}operationForChild(t){if(Ce(this.path)){const n=this.children.subtree(new qe(t));return n.isEmpty()?null:n.value?new ji(this.source,Me(),n.value):new Dr(this.source,Me(),n)}else return H(Te(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new Dr(this.source,We(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(t,n,i){this.node_=t,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(Ce(t))return this.isFullyInitialized()&&!this.filtered_;const n=Te(t);return this.isCompleteForChild(n)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}function Q9(e,t,n,i){const s=[],r=[];return t.forEach(o=>{o.type==="child_changed"&&e.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(K9(o.childName,o.snapshotNode))}),tr(e,s,"child_removed",t,i,n),tr(e,s,"child_added",t,i,n),tr(e,s,"child_moved",r,i,n),tr(e,s,"child_changed",t,i,n),tr(e,s,"value",t,i,n),s}function tr(e,t,n,i,s,r){const o=i.filter(l=>l.type===n);o.sort((l,a)=>tT(e,l,a)),o.forEach(l=>{const a=eT(e,l,r);s.forEach(c=>{c.respondsTo(l.type)&&t.push(c.createEvent(a,e.query_))})})}function eT(e,t,n){return t.type==="value"||t.type==="child_removed"||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function tT(e,t,n){if(t.childName==null||n.childName==null)throw Os("Should only compare child_ events.");const i=new Se(t.childName,t.snapshotNode),s=new Se(n.childName,n.snapshotNode);return e.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n0(e,t){return{eventCache:e,serverCache:t}}function gr(e,t,n,i){return n0(new nh(t,n,i),e.serverCache)}function i0(e,t,n,i){return n0(e.eventCache,new nh(t,n,i))}function Hc(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Ki(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qa;const nT=()=>(qa||(qa=new Ut($6)),qa);class Ve{constructor(t,n=nT()){this.value=t,this.children=n}static fromObject(t){let n=new Ve(null);return tn(t,(i,s)=>{n=n.set(new qe(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,n){if(this.value!=null&&n(this.value))return{path:Me(),value:this.value};if(Ce(t))return null;{const i=Te(t),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(We(t),n);return r!=null?{path:lt(new qe(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(Ce(t))return this;{const n=Te(t),i=this.children.get(n);return i!==null?i.subtree(We(t)):new Ve(null)}}set(t,n){if(Ce(t))return new Ve(n,this.children);{const i=Te(t),r=(this.children.get(i)||new Ve(null)).set(We(t),n),o=this.children.insert(i,r);return new Ve(this.value,o)}}remove(t){if(Ce(t))return this.children.isEmpty()?new Ve(null):new Ve(null,this.children);{const n=Te(t),i=this.children.get(n);if(i){const s=i.remove(We(t));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new Ve(null):new Ve(this.value,r)}else return this}}get(t){if(Ce(t))return this.value;{const n=Te(t),i=this.children.get(n);return i?i.get(We(t)):null}}setTree(t,n){if(Ce(t))return n;{const i=Te(t),r=(this.children.get(i)||new Ve(null)).setTree(We(t),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new Ve(this.value,o)}}fold(t){return this.fold_(Me(),t)}fold_(t,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(lt(t,s),n)}),n(t,this.value,i)}findOnPath(t,n){return this.findOnPath_(t,Me(),n)}findOnPath_(t,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(Ce(t))return null;{const r=Te(t),o=this.children.get(r);return o?o.findOnPath_(We(t),lt(n,r),i):null}}foreachOnPath(t,n){return this.foreachOnPath_(t,Me(),n)}foreachOnPath_(t,n,i){if(Ce(t))return this;{this.value&&i(n,this.value);const s=Te(t),r=this.children.get(s);return r?r.foreachOnPath_(We(t),lt(n,s),i):new Ve(null)}}foreach(t){this.foreach_(Me(),t)}foreach_(t,n){this.children.inorderTraversal((i,s)=>{s.foreach_(lt(t,i),n)}),this.value&&n(t,this.value)}foreachChild(t){this.children.inorderTraversal((n,i)=>{i.value&&t(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(t){this.writeTree_=t}static empty(){return new pn(new Ve(null))}}function yr(e,t,n){if(Ce(t))return new pn(new Ve(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(i!=null){const s=i.path;let r=i.value;const o=Jt(s,t);return r=r.updateChild(o,n),new pn(e.writeTree_.set(s,r))}else{const s=new Ve(n),r=e.writeTree_.setTree(t,s);return new pn(r)}}}function ip(e,t,n){let i=e;return tn(n,(s,r)=>{i=yr(i,lt(t,s),r)}),i}function sp(e,t){if(Ce(t))return pn.empty();{const n=e.writeTree_.setTree(t,new Ve(null));return new pn(n)}}function $c(e,t){return Yi(e,t)!=null}function Yi(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return n!=null?e.writeTree_.get(n.path).getChild(Jt(n.path,t)):null}function rp(e){const t=[],n=e.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ct,(i,s)=>{t.push(new Se(i,s))}):e.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&t.push(new Se(i,s.value))}),t}function di(e,t){if(Ce(t))return e;{const n=Yi(e,t);return n!=null?new pn(new Ve(n)):new pn(e.writeTree_.subtree(t))}}function Vc(e){return e.writeTree_.isEmpty()}function Ss(e,t){return s0(Me(),e.writeTree_,t)}function s0(e,t,n){if(t.value!=null)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal((s,r)=>{s===".priority"?(H(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=s0(lt(e,s),r,n)}),!n.getChild(e).isEmpty()&&i!==null&&(n=n.updateChild(lt(e,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r0(e,t){return u0(t,e)}function iT(e,t,n,i,s){H(i>e.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:s}),s&&(e.visibleWrites=yr(e.visibleWrites,t,n)),e.lastWriteId=i}function sT(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}function rT(e,t){const n=e.allWrites.findIndex(l=>l.writeId===t);H(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let s=i.visible,r=!1,o=e.allWrites.length-1;for(;s&&o>=0;){const l=e.allWrites[o];l.visible&&(o>=n&&oT(l,i.path)?s=!1:un(i.path,l.path)&&(r=!0)),o--}if(s){if(r)return lT(e),!0;if(i.snap)e.visibleWrites=sp(e.visibleWrites,i.path);else{const l=i.children;tn(l,a=>{e.visibleWrites=sp(e.visibleWrites,lt(i.path,a))})}return!0}else return!1}function oT(e,t){if(e.snap)return un(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&un(lt(e.path,n),t))return!0;return!1}function lT(e){e.visibleWrites=o0(e.allWrites,aT,Me()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function aT(e){return e.visible}function o0(e,t,n){let i=pn.empty();for(let s=0;s<e.length;++s){const r=e[s];if(t(r)){const o=r.path;let l;if(r.snap)un(n,o)?(l=Jt(n,o),i=yr(i,l,r.snap)):un(o,n)&&(l=Jt(o,n),i=yr(i,Me(),r.snap.getChild(l)));else if(r.children){if(un(n,o))l=Jt(n,o),i=ip(i,l,r.children);else if(un(o,n))if(l=Jt(o,n),Ce(l))i=ip(i,Me(),r.children);else{const a=Is(r.children,Te(l));if(a){const c=a.getChild(We(l));i=yr(i,Me(),c)}}}else throw Os("WriteRecord should have .snap or .children")}}return i}function l0(e,t,n,i,s){if(!i&&!s){const r=Yi(e.visibleWrites,t);if(r!=null)return r;{const o=di(e.visibleWrites,t);if(Vc(o))return n;if(n==null&&!$c(o,Me()))return null;{const l=n||Oe.EMPTY_NODE;return Ss(o,l)}}}else{const r=di(e.visibleWrites,t);if(!s&&Vc(r))return n;if(!s&&n==null&&!$c(r,Me()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(un(c.path,t)||un(t,c.path))},l=o0(e.allWrites,o,t),a=n||Oe.EMPTY_NODE;return Ss(l,a)}}}function cT(e,t,n){let i=Oe.EMPTY_NODE;const s=Yi(e.visibleWrites,t);if(s)return s.isLeafNode()||s.forEachChild(Ct,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=di(e.visibleWrites,t);return n.forEachChild(Ct,(o,l)=>{const a=Ss(di(r,new qe(o)),l);i=i.updateImmediateChild(o,a)}),rp(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=di(e.visibleWrites,t);return rp(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function uT(e,t,n,i,s){H(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=lt(t,n);if($c(e.visibleWrites,r))return null;{const o=di(e.visibleWrites,r);return Vc(o)?s.getChild(n):Ss(o,s.getChild(n))}}function hT(e,t,n,i){const s=lt(t,n),r=Yi(e.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=di(e.visibleWrites,s);return Ss(o,i.getNode().getImmediateChild(n))}else return null}function dT(e,t){return Yi(e.visibleWrites,t)}function fT(e,t,n,i,s,r,o){let l;const a=di(e.visibleWrites,t),c=Yi(a,Me());if(c!=null)l=c;else if(n!=null)l=Ss(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],f=o.getCompare(),m=r?l.getReverseIteratorFrom(i,o):l.getIteratorFrom(i,o);let b=m.getNext();for(;b&&d.length<s;)f(b,i)!==0&&d.push(b),b=m.getNext();return d}else return[]}function pT(){return{visibleWrites:pn.empty(),allWrites:[],lastWriteId:-1}}function zc(e,t,n,i){return l0(e.writeTree,e.treePath,t,n,i)}function a0(e,t){return cT(e.writeTree,e.treePath,t)}function op(e,t,n,i){return uT(e.writeTree,e.treePath,t,n,i)}function pl(e,t){return dT(e.writeTree,lt(e.treePath,t))}function mT(e,t,n,i,s,r){return fT(e.writeTree,e.treePath,t,n,i,s,r)}function ih(e,t,n){return hT(e.writeTree,e.treePath,t,n)}function c0(e,t){return u0(lt(e.treePath,t),e.writeTree)}function u0(e,t){return{treePath:e,writeTree:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(){this.changeMap=new Map}trackChildChange(t){const n=t.type,i=t.childName;H(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),H(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,Qf(i,t.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,j9(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,W9(i,t.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,Qf(i,t.snapshotNode,s.oldSnap));else throw Os("Illegal combination of changes: "+t+" occurred after "+s)}else this.changeMap.set(i,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{getCompleteChild(t){return null}getChildAfterChild(t,n,i){return null}}const h0=new yT;class sh{constructor(t,n,i=null){this.writes_=t,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(t){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(t))return n.getNode().getImmediateChild(t);{const i=this.optCompleteServerCache_!=null?new nh(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ih(this.writes_,t,i)}}getChildAfterChild(t,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ki(this.viewCache_),r=mT(this.writes_,s,n,1,i,t);return r.length===0?null:r[0]}}function _T(e,t){H(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),H(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function vT(e,t,n,i,s){const r=new gT;let o,l;if(n.type===Cn.OVERWRITE){const c=n;c.source.fromUser?o=Wc(e,t,c.path,c.snap,i,s,r):(H(c.source.fromServer,"Unknown source."),l=c.source.tagged||t.serverCache.isFiltered()&&!Ce(c.path),o=ml(e,t,c.path,c.snap,i,s,l,r))}else if(n.type===Cn.MERGE){const c=n;c.source.fromUser?o=CT(e,t,c.path,c.children,i,s,r):(H(c.source.fromServer,"Unknown source."),l=c.source.tagged||t.serverCache.isFiltered(),o=jc(e,t,c.path,c.children,i,s,l,r))}else if(n.type===Cn.ACK_USER_WRITE){const c=n;c.revert?o=ET(e,t,c.path,i,s,r):o=wT(e,t,c.path,c.affectedTree,i,s,r)}else if(n.type===Cn.LISTEN_COMPLETE)o=IT(e,t,n.path,i,r);else throw Os("Unknown operation type: "+n.type);const a=r.getChanges();return bT(t,o,a),{viewCache:o,changes:a}}function bT(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Hc(e);(n.length>0||!e.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(z9(Hc(t)))}}function d0(e,t,n,i,s,r){const o=t.eventCache;if(pl(i,n)!=null)return t;{let l,a;if(Ce(n))if(H(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const c=Ki(t),d=c instanceof Oe?c:Oe.EMPTY_NODE,f=a0(i,d);l=e.filter.updateFullNode(t.eventCache.getNode(),f,r)}else{const c=zc(i,Ki(t));l=e.filter.updateFullNode(t.eventCache.getNode(),c,r)}else{const c=Te(n);if(c===".priority"){H(mi(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=t.serverCache.getNode();const f=op(i,n,d,a);f!=null?l=e.filter.updatePriority(d,f):l=o.getNode()}else{const d=We(n);let f;if(o.isCompleteForChild(c)){a=t.serverCache.getNode();const m=op(i,n,o.getNode(),a);m!=null?f=o.getNode().getImmediateChild(c).updateChild(d,m):f=o.getNode().getImmediateChild(c)}else f=ih(i,c,t.serverCache);f!=null?l=e.filter.updateChild(o.getNode(),c,f,d,s,r):l=o.getNode()}}return gr(t,l,o.isFullyInitialized()||Ce(n),e.filter.filtersNodes())}}function ml(e,t,n,i,s,r,o,l){const a=t.serverCache;let c;const d=o?e.filter:e.filter.getIndexedFilter();if(Ce(n))c=d.updateFullNode(a.getNode(),i,null);else if(d.filtersNodes()&&!a.isFiltered()){const b=a.getNode().updateChild(n,i);c=d.updateFullNode(a.getNode(),b,null)}else{const b=Te(n);if(!a.isCompleteForPath(n)&&mi(n)>1)return t;const C=We(n),M=a.getNode().getImmediateChild(b).updateChild(C,i);b===".priority"?c=d.updatePriority(a.getNode(),M):c=d.updateChild(a.getNode(),b,M,C,h0,null)}const f=i0(t,c,a.isFullyInitialized()||Ce(n),d.filtersNodes()),m=new sh(s,f,r);return d0(e,f,n,s,m,l)}function Wc(e,t,n,i,s,r,o){const l=t.eventCache;let a,c;const d=new sh(s,t,r);if(Ce(n))c=e.filter.updateFullNode(t.eventCache.getNode(),i,o),a=gr(t,c,!0,e.filter.filtersNodes());else{const f=Te(n);if(f===".priority")c=e.filter.updatePriority(t.eventCache.getNode(),i),a=gr(t,c,l.isFullyInitialized(),l.isFiltered());else{const m=We(n),b=l.getNode().getImmediateChild(f);let C;if(Ce(m))C=i;else{const A=d.getCompleteChild(f);A!=null?V1(m)===".priority"&&A.getChild(W1(m)).isEmpty()?C=A:C=A.updateChild(m,i):C=Oe.EMPTY_NODE}if(b.equals(C))a=t;else{const A=e.filter.updateChild(l.getNode(),f,C,m,d,o);a=gr(t,A,l.isFullyInitialized(),e.filter.filtersNodes())}}}return a}function lp(e,t){return e.eventCache.isCompleteForChild(t)}function CT(e,t,n,i,s,r,o){let l=t;return i.foreach((a,c)=>{const d=lt(n,a);lp(t,Te(d))&&(l=Wc(e,l,d,c,s,r,o))}),i.foreach((a,c)=>{const d=lt(n,a);lp(t,Te(d))||(l=Wc(e,l,d,c,s,r,o))}),l}function ap(e,t,n){return n.foreach((i,s)=>{t=t.updateChild(i,s)}),t}function jc(e,t,n,i,s,r,o,l){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let a=t,c;Ce(n)?c=i:c=new Ve(null).setTree(n,i);const d=t.serverCache.getNode();return c.children.inorderTraversal((f,m)=>{if(d.hasChild(f)){const b=t.serverCache.getNode().getImmediateChild(f),C=ap(e,b,m);a=ml(e,a,new qe(f),C,s,r,o,l)}}),c.children.inorderTraversal((f,m)=>{const b=!t.serverCache.isCompleteForChild(f)&&m.value===null;if(!d.hasChild(f)&&!b){const C=t.serverCache.getNode().getImmediateChild(f),A=ap(e,C,m);a=ml(e,a,new qe(f),A,s,r,o,l)}}),a}function wT(e,t,n,i,s,r,o){if(pl(s,n)!=null)return t;const l=t.serverCache.isFiltered(),a=t.serverCache;if(i.value!=null){if(Ce(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return ml(e,t,n,a.getNode().getChild(n),s,r,l,o);if(Ce(n)){let c=new Ve(null);return a.getNode().forEachChild(ys,(d,f)=>{c=c.set(new qe(d),f)}),jc(e,t,n,c,s,r,l,o)}else return t}else{let c=new Ve(null);return i.foreach((d,f)=>{const m=lt(n,d);a.isCompleteForPath(m)&&(c=c.set(d,a.getNode().getChild(m)))}),jc(e,t,n,c,s,r,l,o)}}function IT(e,t,n,i,s){const r=t.serverCache,o=i0(t,r.getNode(),r.isFullyInitialized()||Ce(n),r.isFiltered());return d0(e,o,n,i,h0,s)}function ET(e,t,n,i,s,r){let o;if(pl(i,n)!=null)return t;{const l=new sh(i,t,s),a=t.eventCache.getNode();let c;if(Ce(n)||Te(n)===".priority"){let d;if(t.serverCache.isFullyInitialized())d=zc(i,Ki(t));else{const f=t.serverCache.getNode();H(f instanceof Oe,"serverChildren would be complete if leaf node"),d=a0(i,f)}d=d,c=e.filter.updateFullNode(a,d,r)}else{const d=Te(n);let f=ih(i,d,t.serverCache);f==null&&t.serverCache.isCompleteForChild(d)&&(f=a.getImmediateChild(d)),f!=null?c=e.filter.updateChild(a,d,f,We(n),l,r):t.eventCache.getNode().hasChild(d)?c=e.filter.updateChild(a,d,Oe.EMPTY_NODE,We(n),l,r):c=a,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=zc(i,Ki(t)),o.isLeafNode()&&(c=e.filter.updateFullNode(c,o,r)))}return o=t.serverCache.isFullyInitialized()||pl(i,Me())!=null,gr(t,c,o,e.filter.filtersNodes())}}function TT(e,t){const n=Ki(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Ce(t)&&!n.getImmediateChild(Te(t)).isEmpty())?n.getChild(t):null}function cp(e,t,n,i){t.type===Cn.MERGE&&t.source.queryId!==null&&(H(Ki(e.viewCache_),"We should always have a full cache before handling merges"),H(Hc(e.viewCache_),"Missing event cache, even though we have a server cache"));const s=e.viewCache_,r=vT(e.processor_,s,t,n,i);return _T(e.processor_,r.viewCache),H(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=r.viewCache,ST(e,r.changes,r.viewCache.eventCache.getNode(),null)}function ST(e,t,n,i){const s=i?[i]:e.eventRegistrations_;return Q9(e.eventGenerator_,t,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let up;function AT(e){H(!up,"__referenceConstructor has already been defined"),up=e}function rh(e,t,n,i){const s=t.source.queryId;if(s!==null){const r=e.views.get(s);return H(r!=null,"SyncTree gave us an op for an invalid query."),cp(r,t,n,i)}else{let r=[];for(const o of e.views.values())r=r.concat(cp(o,t,n,i));return r}}function oh(e,t){let n=null;for(const i of e.views.values())n=n||TT(i,t);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hp;function kT(e){H(!hp,"__referenceConstructor has already been defined"),hp=e}class dp{constructor(t){this.listenProvider_=t,this.syncPointTree_=new Ve(null),this.pendingWriteTree_=pT(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function RT(e,t,n,i,s){return iT(e.pendingWriteTree_,t,n,i,s),s?Yl(e,new ji(Q1(),t,n)):[]}function ls(e,t,n=!1){const i=sT(e.pendingWriteTree_,t);if(rT(e.pendingWriteTree_,t)){let r=new Ve(null);return i.snap!=null?r=r.set(Me(),!0):tn(i.children,o=>{r=r.set(new qe(o),!0)}),Yl(e,new fl(i.path,r,n))}else return[]}function Gl(e,t,n){return Yl(e,new ji(e0(),t,n))}function PT(e,t,n){const i=Ve.fromObject(n);return Yl(e,new Dr(e0(),t,i))}function xT(e,t,n,i){const s=g0(e,i);if(s!=null){const r=y0(s),o=r.path,l=r.queryId,a=Jt(o,t),c=new ji(t0(l),a,n);return _0(e,o,c)}else return[]}function OT(e,t,n,i){const s=g0(e,i);if(s){const r=y0(s),o=r.path,l=r.queryId,a=Jt(o,t),c=Ve.fromObject(n),d=new Dr(t0(l),a,c);return _0(e,o,d)}else return[]}function f0(e,t,n){const s=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,(o,l)=>{const a=Jt(o,t),c=oh(l,a);if(c)return c});return l0(s,t,r,n,!0)}function Yl(e,t){return p0(t,e.syncPointTree_,null,r0(e.pendingWriteTree_,Me()))}function p0(e,t,n,i){if(Ce(e.path))return m0(e,t,n,i);{const s=t.get(Me());n==null&&s!=null&&(n=oh(s,Me()));let r=[];const o=Te(e.path),l=e.operationForChild(o),a=t.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,d=c0(i,o);r=r.concat(p0(l,a,c,d))}return s&&(r=r.concat(rh(s,e,i,n))),r}}function m0(e,t,n,i){const s=t.get(Me());n==null&&s!=null&&(n=oh(s,Me()));let r=[];return t.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=c0(i,o),d=e.operationForChild(o);d&&(r=r.concat(m0(d,l,a,c)))}),s&&(r=r.concat(rh(s,e,i,n))),r}function g0(e,t){return e.tagToQueryMap.get(t)}function y0(e){const t=e.indexOf("$");return H(t!==-1&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new qe(e.substr(0,t))}}function _0(e,t,n){const i=e.syncPointTree_.get(t);H(i,"Missing sync point for query tag that we're tracking");const s=r0(e.pendingWriteTree_,t);return rh(i,n,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(t){this.node_=t}getImmediateChild(t){const n=this.node_.getImmediateChild(t);return new lh(n)}node(){return this.node_}}class ah{constructor(t,n){this.syncTree_=t,this.path_=n}getImmediateChild(t){const n=lt(this.path_,t);return new ah(this.syncTree_,n)}node(){return f0(this.syncTree_,this.path_)}}const LT=function(e){return e=e||{},e.timestamp=e.timestamp||new Date().getTime(),e},fp=function(e,t,n){if(!e||typeof e!="object")return e;if(H(".sv"in e,"Unexpected leaf node or priority contents"),typeof e[".sv"]=="string")return NT(e[".sv"],t,n);if(typeof e[".sv"]=="object")return DT(e[".sv"],t);H(!1,"Unexpected server value: "+JSON.stringify(e,null,2))},NT=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:H(!1,"Unexpected server value: "+e)}},DT=function(e,t,n){e.hasOwnProperty("increment")||H(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;typeof i!="number"&&H(!1,"Unexpected increment value: "+i);const s=t.node();if(H(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},MT=function(e,t,n,i){return ch(t,new ah(n,e),i)},FT=function(e,t,n){return ch(e,new lh(t),n)};function ch(e,t,n){const i=e.getPriority().val(),s=fp(i,t.getImmediateChild(".priority"),n);let r;if(e.isLeafNode()){const o=e,l=fp(o.getValue(),t,n);return l!==o.getValue()||s!==o.getPriority().val()?new st(l,_t(s)):e}else{const o=e;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new st(s))),o.forEachChild(Ct,(l,a)=>{const c=ch(a,t.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(t="",n=null,i={children:{},childCount:0}){this.name=t,this.parent=n,this.node=i}}function hh(e,t){let n=t instanceof qe?t:new qe(t),i=e,s=Te(n);for(;s!==null;){const r=Is(i.node.children,s)||{children:{},childCount:0};i=new uh(s,i,r),n=We(n),s=Te(n)}return i}function Ms(e){return e.node.value}function v0(e,t){e.node.value=t,Kc(e)}function b0(e){return e.node.childCount>0}function BT(e){return Ms(e)===void 0&&!b0(e)}function Xl(e,t){tn(e.node.children,(n,i)=>{t(new uh(n,e,i))})}function C0(e,t,n,i){n&&!i&&t(e),Xl(e,s=>{C0(s,t,!0,i)}),n&&i&&t(e)}function UT(e,t,n){let i=n?e:e.parent;for(;i!==null;){if(t(i))return!0;i=i.parent}return!1}function so(e){return new qe(e.parent===null?e.name:so(e.parent)+"/"+e.name)}function Kc(e){e.parent!==null&&HT(e.parent,e.name,e)}function HT(e,t,n){const i=BT(n),s=Yn(e.node.children,t);i&&s?(delete e.node.children[t],e.node.childCount--,Kc(e)):!i&&!s&&(e.node.children[t]=n.node,e.node.childCount++,Kc(e))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $T=/[\[\].#$\/\u0000-\u001F\u007F]/,VT=/[\[\].#$\u0000-\u001F\u007F]/,Ga=10*1024*1024,w0=function(e){return typeof e=="string"&&e.length!==0&&!$T.test(e)},zT=function(e){return typeof e=="string"&&e.length!==0&&!VT.test(e)},WT=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),zT(e)},I0=function(e,t,n){const i=n instanceof qe?new I9(n,e):n;if(t===void 0)throw new Error(e+"contains undefined "+Si(i));if(typeof t=="function")throw new Error(e+"contains a function "+Si(i)+" with contents = "+t.toString());if(w1(t))throw new Error(e+"contains "+t.toString()+" "+Si(i));if(typeof t=="string"&&t.length>Ga/3&&zl(t)>Ga)throw new Error(e+"contains a string greater than "+Ga+" utf8 bytes "+Si(i)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let s=!1,r=!1;if(tn(t,(o,l)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!w0(o)))throw new Error(e+" contains an invalid key ("+o+") "+Si(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);E9(i,o),I0(e,l,i),T9(i)}),s&&r)throw new Error(e+' contains ".value" child '+Si(i)+" in addition to actual children.")}},jT=function(e,t){const n=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!w0(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!WT(n))throw new Error(Zw(e,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function qT(e,t){let n=null;for(let i=0;i<t.length;i++){const s=t[i],r=s.getPath();n!==null&&!j1(r,n.path)&&(e.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&e.eventLists_.push(n)}function Xi(e,t,n){qT(e,n),GT(e,i=>un(i,t)||un(t,i))}function GT(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const s=e.eventLists_[i];if(s){const r=s.path;t(r)?(YT(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function YT(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(n!==null){e.events[t]=null;const i=n.getEventRunner();Bi&&yt("event: "+n.toString()),no(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT="repo_interrupt",JT=25;class ZT{constructor(t,n,i,s){this.repoInfo_=t,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new KT,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=dl(),this.transactionQueueTree_=new uh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function QT(e,t,n){if(e.stats_=Ju(e.repoInfo_),e.forceRestClient_||q6())e.server_=new hl(e.repoInfo_,(i,s,r,o)=>{pp(e,i,s,r,o)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>mp(e,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ft(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new zn(e.repoInfo_,t,(i,s,r,o)=>{pp(e,i,s,r,o)},i=>{mp(e,i)},i=>{t3(e,i)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(i=>{e.server_.refreshAuthToken(i)}),e.appCheckProvider_.addTokenChangeListener(i=>{e.server_.refreshAppCheckToken(i.token)}),e.statsReporter_=Q6(e.repoInfo_,()=>new Z9(e.stats_,e.server_)),e.infoData_=new q9,e.infoSyncTree_=new dp({startListening:(i,s,r,o)=>{let l=[];const a=e.infoData_.getNode(i._path);return a.isEmpty()||(l=Gl(e.infoSyncTree_,i._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),dh(e,"connected",!1),e.serverSyncTree_=new dp({startListening:(i,s,r,o)=>(e.server_.listen(i,r,s,(l,a)=>{const c=o(l,a);Xi(e.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{e.server_.unlisten(i,s)}})}function e3(e){const n=e.infoData_.getNode(new qe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function E0(e){return LT({timestamp:e3(e)})}function pp(e,t,n,i,s){e.dataUpdateCount++;const r=new qe(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(s)if(i){const a=Qo(n,c=>_t(c));o=OT(e.serverSyncTree_,r,a,s)}else{const a=_t(n);o=xT(e.serverSyncTree_,r,a,s)}else if(i){const a=Qo(n,c=>_t(c));o=PT(e.serverSyncTree_,r,a)}else{const a=_t(n);o=Gl(e.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=ph(e,r)),Xi(e.eventQueue_,l,o)}function mp(e,t){dh(e,"connected",t),t===!1&&i3(e)}function t3(e,t){tn(t,(n,i)=>{dh(e,n,i)})}function dh(e,t,n){const i=new qe("/.info/"+t),s=_t(n);e.infoData_.updateSnapshot(i,s);const r=Gl(e.infoSyncTree_,i,s);Xi(e.eventQueue_,i,r)}function n3(e){return e.nextWriteId_++}function i3(e){T0(e,"onDisconnectEvents");const t=E0(e),n=dl();Uc(e.onDisconnect_,Me(),(s,r)=>{const o=MT(s,r,e.serverSyncTree_,t);Z1(n,s,o)});let i=[];Uc(n,Me(),(s,r)=>{i=i.concat(Gl(e.serverSyncTree_,s,r));const o=l3(e,s);ph(e,o)}),e.onDisconnect_=dl(),Xi(e.eventQueue_,Me(),i)}function s3(e){e.persistentConnection_&&e.persistentConnection_.interrupt(XT)}function T0(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),yt(n,...t)}function S0(e,t,n){return f0(e.serverSyncTree_,t,n)||Oe.EMPTY_NODE}function fh(e,t=e.transactionQueueTree_){if(t||Jl(e,t),Ms(t)){const n=k0(e,t);H(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&r3(e,so(t),n)}else b0(t)&&Xl(t,n=>{fh(e,n)})}function r3(e,t,n){const i=n.map(c=>c.currentWriteId),s=S0(e,t,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const d=n[c];H(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const f=Jt(t,d.path);r=r.updateChild(f,d.currentOutputSnapshotRaw)}const l=r.val(!0),a=t;e.server_.put(a.toString(),l,c=>{T0(e,"transaction put response",{path:a.toString(),status:c});let d=[];if(c==="ok"){const f=[];for(let m=0;m<n.length;m++)n[m].status=2,d=d.concat(ls(e.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&f.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();Jl(e,hh(e.transactionQueueTree_,t)),fh(e,e.transactionQueueTree_),Xi(e.eventQueue_,t,d);for(let m=0;m<f.length;m++)no(f[m])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{qt("transaction at "+a.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}ph(e,t)}},o)}function ph(e,t){const n=A0(e,t),i=so(n),s=k0(e,n);return o3(e,s,i),i}function o3(e,t,n){if(t.length===0)return;const i=[];let s=[];const o=t.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<t.length;l++){const a=t[l],c=Jt(n,a.path);let d=!1,f;if(H(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,f=a.abortReason,s=s.concat(ls(e.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=JT)d=!0,f="maxretry",s=s.concat(ls(e.serverSyncTree_,a.currentWriteId,!0));else{const m=S0(e,a.path,o);a.currentInputSnapshot=m;const b=t[l].update(m.val());if(b!==void 0){I0("transaction failed: Data returned ",b,a.path);let C=_t(b);typeof b=="object"&&b!=null&&Yn(b,".priority")||(C=C.updatePriority(m.getPriority()));const M=a.currentWriteId,z=E0(e),j=FT(C,m,z);a.currentOutputSnapshotRaw=C,a.currentOutputSnapshotResolved=j,a.currentWriteId=n3(e),o.splice(o.indexOf(M),1),s=s.concat(RT(e.serverSyncTree_,a.path,j,a.currentWriteId,a.applyLocally)),s=s.concat(ls(e.serverSyncTree_,M,!0))}else d=!0,f="nodata",s=s.concat(ls(e.serverSyncTree_,a.currentWriteId,!0))}Xi(e.eventQueue_,n,s),s=[],d&&(t[l].status=2,function(m){setTimeout(m,Math.floor(0))}(t[l].unwatcher),t[l].onComplete&&(f==="nodata"?i.push(()=>t[l].onComplete(null,!1,t[l].currentInputSnapshot)):i.push(()=>t[l].onComplete(new Error(f),!1,null))))}Jl(e,e.transactionQueueTree_);for(let l=0;l<i.length;l++)no(i[l]);fh(e,e.transactionQueueTree_)}function A0(e,t){let n,i=e.transactionQueueTree_;for(n=Te(t);n!==null&&Ms(i)===void 0;)i=hh(i,n),t=We(t),n=Te(t);return i}function k0(e,t){const n=[];return R0(e,t,n),n.sort((i,s)=>i.order-s.order),n}function R0(e,t,n){const i=Ms(t);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);Xl(t,s=>{R0(e,s,n)})}function Jl(e,t){const n=Ms(t);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,v0(t,n.length>0?n:void 0)}Xl(t,i=>{Jl(e,i)})}function l3(e,t){const n=so(A0(e,t)),i=hh(e.transactionQueueTree_,t);return UT(i,s=>{Ya(e,s)}),Ya(e,i),C0(i,s=>{Ya(e,s)}),n}function Ya(e,t){const n=Ms(t);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(H(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(H(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(ls(e.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?v0(t,void 0):n.length=r+1,Xi(e.eventQueue_,so(t),s);for(let o=0;o<i.length;o++)no(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a3(e){let t="";const n=e.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}t+="/"+s}return t}function c3(e){const t={};e.charAt(0)==="?"&&(e=e.substring(1));for(const n of e.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):qt(`Invalid query segment '${n}' in query '${e}'`)}return t}const gp=function(e,t){const n=u3(e),i=n.namespace;n.domain==="firebase.com"&&zi(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&zi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||U6();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new X6(n.host,n.secure,i,s,t,"",i!==n.subdomain),path:new qe(n.pathString)}},u3=function(e){let t="",n="",i="",s="",r="",o=!0,l="https",a=443;if(typeof e=="string"){let c=e.indexOf("//");c>=0&&(l=e.substring(0,c-1),e=e.substring(c+2));let d=e.indexOf("/");d===-1&&(d=e.length);let f=e.indexOf("?");f===-1&&(f=e.length),t=e.substring(0,Math.min(d,f)),d<f&&(s=a3(e.substring(d,f)));const m=c3(e.substring(Math.min(e.length,f)));c=t.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(t.substring(c+1),10)):c=t.length;const b=t.slice(0,c);if(b.toLowerCase()==="localhost")n="localhost";else if(b.split(".").length<=2)n=b;else{const C=t.indexOf(".");i=t.substring(0,C).toLowerCase(),n=t.substring(C+1),r=i}"ns"in m&&(r=m.ns)}return{host:t,port:a,domain:n,subdomain:i,secure:o,scheme:l,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(t,n,i,s){this._repo=t,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return Ce(this._path)?null:V1(this._path)}get ref(){return new Fs(this._repo,this._path)}get _queryIdentifier(){const t=tp(this._queryParams),n=Yu(t);return n==="{}"?"default":n}get _queryObject(){return tp(this._queryParams)}isEqual(t){if(t=gi(t),!(t instanceof mh))return!1;const n=this._repo===t._repo,i=j1(this._path,t._path),s=this._queryIdentifier===t._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+w9(this._path)}}class Fs extends mh{constructor(t,n){super(t,n,new th,!1)}get parent(){const t=W1(this._path);return t===null?null:new Fs(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}AT(Fs);kT(Fs);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h3="FIREBASE_DATABASE_EMULATOR_HOST",qc={};let d3=!1;function f3(e,t,n,i,s){let r=i||e.options.databaseURL;r===void 0&&(e.options.projectId||zi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),yt("Using default host for project ",e.options.projectId),r=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o=gp(r,s),l=o.repoInfo,a,c;typeof process<"u"&&process.env&&(c=process.env[h3]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=gp(r,s),l=o.repoInfo):a=!o.repoInfo.secure;const d=s&&a?new Mc(Mc.OWNER):new Y6(e.name,e.options,t);jT("Invalid Firebase Database URL",o),Ce(o.path)||zi("Database URL must point to the root of a Firebase Database (not including a child path).");const f=m3(l,e,d,new G6(e.name,n));return new g3(f,e)}function p3(e,t){const n=qc[t];(!n||n[e.key]!==e)&&zi(`Database ${t}(${e.repoInfo_}) has already been deleted.`),s3(e),delete n[e.key]}function m3(e,t,n,i){let s=qc[t.name];s||(s={},qc[t.name]=s);let r=s[e.toURLString()];return r&&zi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new ZT(e,d3,n,i),s[e.toURLString()]=r,r}class g3{constructor(t,n){this._repoInternal=t,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(QT(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Fs(this._repo,Me())),this._rootInternal}_delete(){return this._rootInternal!==null&&(p3(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&zi("Cannot call "+t+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y3(e){N6(yi),An(new mn("database",(t,{instanceIdentifier:n})=>{const i=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return f3(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),Kt(Ff,Bf,e),Kt(Ff,Bf,"esm2017")}zn.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)};zn.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};y3();var _3=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},$,gh=gh||{},ie=_3||self;function gl(){}function Zl(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function ro(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function v3(e){return Object.prototype.hasOwnProperty.call(e,Xa)&&e[Xa]||(e[Xa]=++b3)}var Xa="closure_uid_"+(1e9*Math.random()>>>0),b3=0;function C3(e,t,n){return e.call.apply(e.bind,arguments)}function w3(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),e.apply(t,s)}}return function(){return e.apply(t,arguments)}}function wt(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?wt=C3:wt=w3,wt.apply(null,arguments)}function Po(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),e.apply(this,i)}}function ct(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(i,s,r){for(var o=Array(arguments.length-2),l=2;l<arguments.length;l++)o[l-2]=arguments[l];return t.prototype[s].apply(i,o)}}function _i(){this.s=this.s,this.o=this.o}var I3=0;_i.prototype.s=!1;_i.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),I3!=0)&&v3(this)};_i.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const P0=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function yh(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function yp(e,t){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(Zl(i)){const s=e.length||0,r=i.length||0;e.length=s+r;for(let o=0;o<r;o++)e[s+o]=i[o]}else e.push(i)}}function It(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}It.prototype.h=function(){this.defaultPrevented=!0};var E3=function(){if(!ie.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{ie.addEventListener("test",gl,t),ie.removeEventListener("test",gl,t)}catch{}return e}();function yl(e){return/^[\s\xa0]*$/.test(e)}var _p=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Ja(e,t){return e<t?-1:e>t?1:0}function Ql(){var e=ie.navigator;return e&&(e=e.userAgent)?e:""}function bn(e){return Ql().indexOf(e)!=-1}function _h(e){return _h[" "](e),e}_h[" "]=gl;function x0(e,t,n){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:e[t]=n(t)}var T3=bn("Opera"),Mr=bn("Trident")||bn("MSIE"),O0=bn("Edge"),Gc=O0||Mr,L0=bn("Gecko")&&!(Ql().toLowerCase().indexOf("webkit")!=-1&&!bn("Edge"))&&!(bn("Trident")||bn("MSIE"))&&!bn("Edge"),S3=Ql().toLowerCase().indexOf("webkit")!=-1&&!bn("Edge");function N0(){var e=ie.document;return e?e.documentMode:void 0}var Yc;e:{var Za="",Qa=function(){var e=Ql();if(L0)return/rv:([^\);]+)(\)|;)/.exec(e);if(O0)return/Edge\/([\d\.]+)/.exec(e);if(Mr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(S3)return/WebKit\/(\S+)/.exec(e);if(T3)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Qa&&(Za=Qa?Qa[1]:""),Mr){var ec=N0();if(ec!=null&&ec>parseFloat(Za)){Yc=String(ec);break e}}Yc=Za}var A3={};function k3(){return x0(A3,9,function(){let e=0;const t=_p(String(Yc)).split("."),n=_p("9").split("."),i=Math.max(t.length,n.length);for(let o=0;e==0&&o<i;o++){var s=t[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s[0].length==0&&r[0].length==0)break;e=Ja(s[1].length==0?0:parseInt(s[1],10),r[1].length==0?0:parseInt(r[1],10))||Ja(s[2].length==0,r[2].length==0)||Ja(s[2],r[2]),s=s[3],r=r[3]}while(e==0)}return 0<=e})}ie.document&&Mr&&N0();function Fr(e,t){if(It.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(L0){e:{try{_h(t.nodeName);var s=!0;break e}catch{}s=!1}s||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:R3[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Fr.$.h.call(this)}}ct(Fr,It);var R3={2:"touch",3:"pen",4:"mouse"};Fr.prototype.h=function(){Fr.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var oo="closure_listenable_"+(1e6*Math.random()|0),P3=0;function x3(e,t,n,i,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.la=s,this.key=++P3,this.fa=this.ia=!1}function ea(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function vh(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function D0(e){const t={};for(const n in e)t[n]=e[n];return t}const vp="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M0(e,t){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)e[n]=i[n];for(let r=0;r<vp.length;r++)n=vp[r],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function ta(e){this.src=e,this.g={},this.h=0}ta.prototype.add=function(e,t,n,i,s){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=Jc(e,t,i,s);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new x3(t,this.src,r,!!i,s),t.ia=n,e.push(t)),t};function Xc(e,t){var n=t.type;if(n in e.g){var i=e.g[n],s=P0(i,t),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(ea(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Jc(e,t,n,i){for(var s=0;s<e.length;++s){var r=e[s];if(!r.fa&&r.listener==t&&r.capture==!!n&&r.la==i)return s}return-1}var bh="closure_lm_"+(1e6*Math.random()|0),tc={};function F0(e,t,n,i,s){if(i&&i.once)return U0(e,t,n,i,s);if(Array.isArray(t)){for(var r=0;r<t.length;r++)F0(e,t[r],n,i,s);return null}return n=Ih(n),e&&e[oo]?e.O(t,n,ro(i)?!!i.capture:!!i,s):B0(e,t,n,!1,i,s)}function B0(e,t,n,i,s,r){if(!t)throw Error("Invalid event type");var o=ro(s)?!!s.capture:!!s,l=wh(e);if(l||(e[bh]=l=new ta(e)),n=l.add(t,n,i,o,r),n.proxy)return n;if(i=O3(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)E3||(s=o),s===void 0&&(s=!1),e.addEventListener(t.toString(),i,s);else if(e.attachEvent)e.attachEvent($0(t.toString()),i);else if(e.addListener&&e.removeListener)e.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function O3(){function e(n){return t.call(e.src,e.listener,n)}const t=L3;return e}function U0(e,t,n,i,s){if(Array.isArray(t)){for(var r=0;r<t.length;r++)U0(e,t[r],n,i,s);return null}return n=Ih(n),e&&e[oo]?e.P(t,n,ro(i)?!!i.capture:!!i,s):B0(e,t,n,!0,i,s)}function H0(e,t,n,i,s){if(Array.isArray(t))for(var r=0;r<t.length;r++)H0(e,t[r],n,i,s);else i=ro(i)?!!i.capture:!!i,n=Ih(n),e&&e[oo]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=Jc(r,n,i,s),-1<n&&(ea(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=wh(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Jc(t,n,i,s)),(n=-1<e?t[e]:null)&&Ch(n))}function Ch(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[oo])Xc(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent($0(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=wh(t))?(Xc(n,e),n.h==0&&(n.src=null,t[bh]=null)):ea(e)}}}function $0(e){return e in tc?tc[e]:tc[e]="on"+e}function L3(e,t){if(e.fa)e=!0;else{t=new Fr(t,this);var n=e.listener,i=e.la||e.src;e.ia&&Ch(e),e=n.call(i,t)}return e}function wh(e){return e=e[bh],e instanceof ta?e:null}var nc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ih(e){return typeof e=="function"?e:(e[nc]||(e[nc]=function(t){return e.handleEvent(t)}),e[nc])}function at(){_i.call(this),this.i=new ta(this),this.S=this,this.J=null}ct(at,_i);at.prototype[oo]=!0;at.prototype.removeEventListener=function(e,t,n,i){H0(this,e,t,n,i)};function mt(e,t){var n,i=e.J;if(i)for(n=[];i;i=i.J)n.push(i);if(e=e.S,i=t.type||t,typeof t=="string")t=new It(t,e);else if(t instanceof It)t.target=t.target||e;else{var s=t;t=new It(i,e),M0(t,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];s=xo(o,i,!0,t)&&s}if(o=t.g=e,s=xo(o,i,!0,t)&&s,s=xo(o,i,!1,t)&&s,n)for(r=0;r<n.length;r++)o=t.g=n[r],s=xo(o,i,!1,t)&&s}at.prototype.N=function(){if(at.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)ea(n[i]);delete e.g[t],e.h--}}this.J=null};at.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)};at.prototype.P=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};function xo(e,t,n,i){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.fa&&o.capture==n){var l=o.listener,a=o.la||o.src;o.ia&&Xc(e.i,o),s=l.call(a,i)!==!1&&s}}return s&&!i.defaultPrevented}var Eh=ie.JSON.stringify;function N3(){var e=W0;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class D3{constructor(){this.h=this.g=null}add(t,n){const i=V0.get();i.set(t,n),this.h?this.h.next=i:this.g=i,this.h=i}}var V0=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new M3,e=>e.reset());class M3{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function F3(e){ie.setTimeout(()=>{throw e},0)}function z0(e,t){Zc||B3(),Qc||(Zc(),Qc=!0),W0.add(e,t)}var Zc;function B3(){var e=ie.Promise.resolve(void 0);Zc=function(){e.then(U3)}}var Qc=!1,W0=new D3;function U3(){for(var e;e=N3();){try{e.h.call(e.g)}catch(n){F3(n)}var t=V0;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Qc=!1}function na(e,t){at.call(this),this.h=e||1,this.g=t||ie,this.j=wt(this.qb,this),this.l=Date.now()}ct(na,at);$=na.prototype;$.ga=!1;$.T=null;$.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),mt(this,"tick"),this.ga&&(Th(this),this.start()))}};$.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Th(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}$.N=function(){na.$.N.call(this),Th(this),delete this.g};function Sh(e,t,n){if(typeof e=="function")n&&(e=wt(e,n));else if(e&&typeof e.handleEvent=="function")e=wt(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:ie.setTimeout(e,t||0)}function j0(e){e.g=Sh(()=>{e.g=null,e.i&&(e.i=!1,j0(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class H3 extends _i{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:j0(this)}N(){super.N(),this.g&&(ie.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Br(e){_i.call(this),this.h=e,this.g={}}ct(Br,_i);var bp=[];function K0(e,t,n,i){Array.isArray(n)||(n&&(bp[0]=n.toString()),n=bp);for(var s=0;s<n.length;s++){var r=F0(t,n[s],i||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function q0(e){vh(e.g,function(t,n){this.g.hasOwnProperty(n)&&Ch(t)},e),e.g={}}Br.prototype.N=function(){Br.$.N.call(this),q0(this)};Br.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ia(){this.g=!0}ia.prototype.Ea=function(){this.g=!1};function $3(e,t,n,i,s,r){e.info(function(){if(e.g)if(r)for(var o="",l=r.split("&"),a=0;a<l.length;a++){var c=l[a].split("=");if(1<c.length){var d=c[0];c=c[1];var f=d.split("_");o=2<=f.length&&f[1]=="type"?o+(d+"="+c+"&"):o+(d+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+t+`
`+n+`
`+o})}function V3(e,t,n,i,s,r,o){e.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+t+`
`+n+`
`+r+" "+o})}function as(e,t,n,i){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+W3(e,n)+(i?" "+i:"")})}function z3(e,t){e.info(function(){return"TIMEOUT: "+t})}ia.prototype.info=function(){};function W3(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Eh(n)}catch{return t}}var Bs={},Cp=null;function Ah(){return Cp=Cp||new at}Bs.Ta="serverreachability";function G0(e){It.call(this,Bs.Ta,e)}ct(G0,It);function Ur(e){const t=Ah();mt(t,new G0(t))}Bs.STAT_EVENT="statevent";function Y0(e,t){It.call(this,Bs.STAT_EVENT,e),this.stat=t}ct(Y0,It);function Pt(e){const t=Ah();mt(t,new Y0(t,e))}Bs.Ua="timingevent";function X0(e,t){It.call(this,Bs.Ua,e),this.size=t}ct(X0,It);function lo(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return ie.setTimeout(function(){e()},t)}var kh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},j3={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Rh(){}Rh.prototype.h=null;function wp(e){return e.h||(e.h=e.i())}function K3(){}var ao={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ph(){It.call(this,"d")}ct(Ph,It);function xh(){It.call(this,"c")}ct(xh,It);var eu;function sa(){}ct(sa,Rh);sa.prototype.g=function(){return new XMLHttpRequest};sa.prototype.i=function(){return{}};eu=new sa;function co(e,t,n,i){this.l=e,this.j=t,this.m=n,this.W=i||1,this.U=new Br(this),this.P=q3,e=Gc?125:void 0,this.V=new na(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new J0}function J0(){this.i=null,this.g="",this.h=!1}var q3=45e3,tu={},_l={};$=co.prototype;$.setTimeout=function(e){this.P=e};function nu(e,t,n){e.L=1,e.v=oa(qn(t)),e.s=n,e.S=!0,Z0(e,null)}function Z0(e,t){e.G=Date.now(),uo(e),e.A=qn(e.v);var n=e.A,i=e.W;Array.isArray(i)||(i=[String(i)]),oy(n.i,"t",i),e.C=0,n=e.l.I,e.h=new J0,e.g=Ay(e.l,n?t:null,!e.s),0<e.O&&(e.M=new H3(wt(e.Pa,e,e.g),e.O)),K0(e.U,e.g,"readystatechange",e.nb),t=e.I?D0(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Ur(),$3(e.j,e.u,e.A,e.m,e.W,e.s)}$.nb=function(e){e=e.target;const t=this.M;t&&$n(e)==3?t.l():this.Pa(e)};$.Pa=function(e){try{if(e==this.g)e:{const d=$n(this.g);var t=this.g.Ia();const f=this.g.da();if(!(3>d)&&(d!=3||Gc||this.g&&(this.h.h||this.g.ja()||Sp(this.g)))){this.J||d!=4||t==7||(t==8||0>=f?Ur(3):Ur(2)),ra(this);var n=this.g.da();this.aa=n;t:if(Q0(this)){var i=Sp(this.g);e="";var s=i.length,r=$n(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Li(this),_r(this);var o="";break t}this.h.i=new ie.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:r&&t==s-1});i.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,V3(this.j,this.u,this.A,this.m,this.W,d,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var l,a=this.g;if((l=a.g?a.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!yl(l)){var c=l;break t}}c=null}if(n=c)as(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,iu(this,n);else{this.i=!1,this.o=3,Pt(12),Li(this),_r(this);break e}}this.S?(ey(this,d,o),Gc&&this.i&&d==3&&(K0(this.U,this.V,"tick",this.mb),this.V.start())):(as(this.j,this.m,o,null),iu(this,o)),d==4&&Li(this),this.i&&!this.J&&(d==4?Iy(this.l,this):(this.i=!1,uo(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Pt(12)):(this.o=0,Pt(13)),Li(this),_r(this)}}}catch{}finally{}};function Q0(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function ey(e,t,n){let i=!0,s;for(;!e.J&&e.C<n.length;)if(s=G3(e,n),s==_l){t==4&&(e.o=4,Pt(14),i=!1),as(e.j,e.m,null,"[Incomplete Response]");break}else if(s==tu){e.o=4,Pt(15),as(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}else as(e.j,e.m,s,null),iu(e,s);Q0(e)&&s!=_l&&s!=tu&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Pt(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.ca&&(e.ca=!0,t=e.l,t.g==e&&t.ca&&!t.L&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Bh(t),t.L=!0,Pt(11))):(as(e.j,e.m,n,"[Invalid Chunked Response]"),Li(e),_r(e))}$.mb=function(){if(this.g){var e=$n(this.g),t=this.g.ja();this.C<t.length&&(ra(this),ey(this,e,t),this.i&&e!=4&&uo(this))}};function G3(e,t){var n=e.C,i=t.indexOf(`
`,n);return i==-1?_l:(n=Number(t.substring(n,i)),isNaN(n)?tu:(i+=1,i+n>t.length?_l:(t=t.substr(i,n),e.C=i+n,t)))}$.cancel=function(){this.J=!0,Li(this)};function uo(e){e.Y=Date.now()+e.P,ty(e,e.P)}function ty(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=lo(wt(e.lb,e),t)}function ra(e){e.B&&(ie.clearTimeout(e.B),e.B=null)}$.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(z3(this.j,this.A),this.L!=2&&(Ur(),Pt(17)),Li(this),this.o=2,_r(this)):ty(this,this.Y-e)};function _r(e){e.l.H==0||e.J||Iy(e.l,e)}function Li(e){ra(e);var t=e.M;t&&typeof t.ra=="function"&&t.ra(),e.M=null,Th(e.V),q0(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ra())}function iu(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||su(n.h,e))){if(!e.K&&su(n.h,e)&&n.H==3){try{var i=n.Ja.g.parse(t)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Cl(n),ua(n);else break e;Fh(n),Pt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.M&&n.A==0&&!n.v&&(n.v=lo(wt(n.ib,n),6e3));if(1>=cy(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else Ni(n,11)}else if((e.K||n.g==e)&&Cl(n),!yl(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let c=s[t];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.J=c[1],n.oa=c[2];const d=c[3];d!=null&&(n.qa=d,n.j.info("VER="+n.qa));const f=c[4];f!=null&&(n.Ga=f,n.j.info("SVER="+n.Ga));const m=c[5];m!=null&&typeof m=="number"&&0<m&&(i=1.5*m,n.K=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const b=e.g;if(b){const C=b.g?b.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(C){var r=i.h;r.g||C.indexOf("spdy")==-1&&C.indexOf("quic")==-1&&C.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Oh(r,r.h),r.h=null))}if(i.F){const A=b.g?b.g.getResponseHeader("X-HTTP-Session-Id"):null;A&&(i.Da=A,Ge(i.G,i.F,A))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-e.G,n.j.info("Handshake RTT: "+n.S+"ms")),i=n;var o=e;if(i.wa=Sy(i,i.I?i.oa:null,i.Y),o.K){uy(i.h,o);var l=o,a=i.K;a&&l.setTimeout(a),l.B&&(ra(l),uo(l)),i.g=o}else Cy(i);0<n.i.length&&ha(n)}else c[0]!="stop"&&c[0]!="close"||Ni(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Ni(n,7):Mh(n):c[0]!="noop"&&n.l&&n.l.Aa(c),n.A=0)}}Ur(4)}catch{}}function Y3(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Zl(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}t=[],n=0;for(i in e)t[n++]=e[i];return t}function X3(e){if(e.sa&&typeof e.sa=="function")return e.sa();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Zl(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const i in e)t[n++]=i;return t}}}function ny(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Zl(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=X3(e),i=Y3(e),s=i.length,r=0;r<s;r++)t.call(void 0,i[r],n&&n[r],e)}var iy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function J3(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),s=null;if(0<=i){var r=e[n].substring(0,i);s=e[n].substring(i+1)}else r=e[n];t(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Ui(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Ui){this.h=t!==void 0?t:e.h,vl(this,e.j),this.s=e.s,this.g=e.g,bl(this,e.m),this.l=e.l,t=e.i;var n=new Hr;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Ip(this,n),this.o=e.o}else e&&(n=String(e).match(iy))?(this.h=!!t,vl(this,n[1]||"",!0),this.s=ar(n[2]||""),this.g=ar(n[3]||"",!0),bl(this,n[4]),this.l=ar(n[5]||"",!0),Ip(this,n[6]||"",!0),this.o=ar(n[7]||"")):(this.h=!!t,this.i=new Hr(null,this.h))}Ui.prototype.toString=function(){var e=[],t=this.j;t&&e.push(cr(t,Ep,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(cr(t,Ep,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(cr(n,n.charAt(0)=="/"?e5:Q3,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",cr(n,n5)),e.join("")};function qn(e){return new Ui(e)}function vl(e,t,n){e.j=n?ar(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function bl(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Ip(e,t,n){t instanceof Hr?(e.i=t,i5(e.i,e.h)):(n||(t=cr(t,t5)),e.i=new Hr(t,e.h))}function Ge(e,t,n){e.i.set(t,n)}function oa(e){return Ge(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ar(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function cr(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Z3),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Z3(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Ep=/[#\/\?@]/g,Q3=/[#\?:]/g,e5=/[#\?]/g,t5=/[#\?@]/g,n5=/#/g;function Hr(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function vi(e){e.g||(e.g=new Map,e.h=0,e.i&&J3(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}$=Hr.prototype;$.add=function(e,t){vi(this),this.i=null,e=Us(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function sy(e,t){vi(e),t=Us(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function ry(e,t){return vi(e),t=Us(e,t),e.g.has(t)}$.forEach=function(e,t){vi(this),this.g.forEach(function(n,i){n.forEach(function(s){e.call(t,s,i,this)},this)},this)};$.sa=function(){vi(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let i=0;i<t.length;i++){const s=e[i];for(let r=0;r<s.length;r++)n.push(t[i])}return n};$.Z=function(e){vi(this);let t=[];if(typeof e=="string")ry(this,e)&&(t=t.concat(this.g.get(Us(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};$.set=function(e,t){return vi(this),this.i=null,e=Us(this,e),ry(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};$.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function oy(e,t,n){sy(e,t),0<n.length&&(e.i=null,e.g.set(Us(e,t),yh(n)),e.h+=n.length)}$.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var i=t[n];const r=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),e.push(s)}}return this.i=e.join("&")};function Us(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function i5(e,t){t&&!e.j&&(vi(e),e.i=null,e.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(sy(this,i),oy(this,s,n))},e)),e.j=t}var s5=class{constructor(e,t){this.h=e,this.g=t}};function ly(e){this.l=e||r5,ie.PerformanceNavigationTiming?(e=ie.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(ie.g&&ie.g.Ka&&ie.g.Ka()&&ie.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var r5=10;function ay(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function cy(e){return e.h?1:e.g?e.g.size:0}function su(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Oh(e,t){e.g?e.g.add(t):e.h=t}function uy(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}ly.prototype.cancel=function(){if(this.i=hy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function hy(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return yh(e.i)}function Lh(){}Lh.prototype.stringify=function(e){return ie.JSON.stringify(e,void 0)};Lh.prototype.parse=function(e){return ie.JSON.parse(e,void 0)};function o5(){this.g=new Lh}function l5(e,t,n){const i=n||"";try{ny(e,function(s,r){let o=s;ro(s)&&(o=Eh(s)),t.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw t.push(i+"type="+encodeURIComponent("_badmap")),s}}function a5(e,t){const n=new ia;if(ie.Image){const i=new Image;i.onload=Po(Oo,n,i,"TestLoadImage: loaded",!0,t),i.onerror=Po(Oo,n,i,"TestLoadImage: error",!1,t),i.onabort=Po(Oo,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=Po(Oo,n,i,"TestLoadImage: timeout",!1,t),ie.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=e}else t(!1)}function Oo(e,t,n,i,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(i)}catch{}}function la(e){this.l=e.fc||null,this.j=e.ob||!1}ct(la,Rh);la.prototype.g=function(){return new aa(this.l,this.j)};la.prototype.i=function(e){return function(){return e}}({});function aa(e,t){at.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Nh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ct(aa,at);var Nh=0;$=aa.prototype;$.open=function(e,t){if(this.readyState!=Nh)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,$r(this)};$.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||ie).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};$.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ho(this)),this.readyState=Nh};$.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,$r(this)),this.g&&(this.readyState=3,$r(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof ie.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;dy(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function dy(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}$.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?ho(this):$r(this),this.readyState==3&&dy(this)}};$.Za=function(e){this.g&&(this.response=this.responseText=e,ho(this))};$.Ya=function(e){this.g&&(this.response=e,ho(this))};$.ka=function(){this.g&&ho(this)};function ho(e){e.readyState=4,e.l=null,e.j=null,e.A=null,$r(e)}$.setRequestHeader=function(e,t){this.v.append(e,t)};$.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};$.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function $r(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(aa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var c5=ie.JSON.parse;function et(e){at.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=fy,this.L=this.M=!1}ct(et,at);var fy="",u5=/^https?$/i,h5=["POST","PUT"];$=et.prototype;$.Oa=function(e){this.M=e};$.ha=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():eu.g(),this.C=this.u?wp(this.u):wp(eu),this.g.onreadystatechange=wt(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(r){Tp(this,r);return}if(e=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=ie.FormData&&e instanceof ie.FormData,!(0<=P0(h5,t))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{gy(this),0<this.B&&((this.L=d5(this.g))?(this.g.timeout=this.B,this.g.ontimeout=wt(this.ua,this)):this.A=Sh(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){Tp(this,r)}};function d5(e){return Mr&&k3()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}$.ua=function(){typeof gh<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,mt(this,"timeout"),this.abort(8))};function Tp(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,py(e),ca(e)}function py(e){e.F||(e.F=!0,mt(e,"complete"),mt(e,"error"))}$.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,mt(this,"complete"),mt(this,"abort"),ca(this))};$.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ca(this,!0)),et.$.N.call(this)};$.La=function(){this.s||(this.G||this.v||this.l?my(this):this.kb())};$.kb=function(){my(this)};function my(e){if(e.h&&typeof gh<"u"&&(!e.C[1]||$n(e)!=4||e.da()!=2)){if(e.v&&$n(e)==4)Sh(e.La,0,e);else if(mt(e,"readystatechange"),$n(e)==4){e.h=!1;try{const l=e.da();e:switch(l){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var i;if(i=l===0){var s=String(e.I).match(iy)[1]||null;if(!s&&ie.self&&ie.self.location){var r=ie.self.location.protocol;s=r.substr(0,r.length-1)}i=!u5.test(s?s.toLowerCase():"")}n=i}if(n)mt(e,"complete"),mt(e,"success");else{e.m=6;try{var o=2<$n(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.da()+"]",py(e)}}finally{ca(e)}}}}function ca(e,t){if(e.g){gy(e);const n=e.g,i=e.C[0]?gl:null;e.g=null,e.C=null,t||mt(e,"ready");try{n.onreadystatechange=i}catch{}}}function gy(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(ie.clearTimeout(e.A),e.A=null)}function $n(e){return e.g?e.g.readyState:0}$.da=function(){try{return 2<$n(this)?this.g.status:-1}catch{return-1}};$.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};$.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),c5(t)}};function Sp(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case fy:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}$.Ia=function(){return this.m};$.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function yy(e){let t="";return vh(e,function(n,i){t+=i,t+=":",t+=n,t+=`\r
`}),t}function Dh(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=yy(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):Ge(e,t,n))}function nr(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function _y(e){this.Ga=0,this.i=[],this.j=new ia,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=nr("failFast",!1,e),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=nr("baseRetryDelayMs",5e3,e),this.hb=nr("retryDelaySeedMs",1e4,e),this.eb=nr("forwardChannelMaxRetries",2,e),this.xa=nr("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.K=void 0,this.I=e&&e.supportsCrossDomainXhr||!1,this.J="",this.h=new ly(e&&e.concurrentRequestLimit),this.Ja=new o5,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.j.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}$=_y.prototype;$.qa=8;$.H=1;function Mh(e){if(vy(e),e.H==3){var t=e.W++,n=qn(e.G);Ge(n,"SID",e.J),Ge(n,"RID",t),Ge(n,"TYPE","terminate"),fo(e,n),t=new co(e,e.j,t,void 0),t.L=2,t.v=oa(qn(n)),n=!1,ie.navigator&&ie.navigator.sendBeacon&&(n=ie.navigator.sendBeacon(t.v.toString(),"")),!n&&ie.Image&&(new Image().src=t.v,n=!0),n||(t.g=Ay(t.l,null),t.g.ha(t.v)),t.G=Date.now(),uo(t)}Ty(e)}function ua(e){e.g&&(Bh(e),e.g.cancel(),e.g=null)}function vy(e){ua(e),e.u&&(ie.clearTimeout(e.u),e.u=null),Cl(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&ie.clearTimeout(e.m),e.m=null)}function ha(e){ay(e.h)||e.m||(e.m=!0,z0(e.Na,e),e.C=0)}function f5(e,t){return cy(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.F.concat(e.i),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=lo(wt(e.Na,e,t),Ey(e,e.C)),e.C++,!0)}$.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const s=new co(this,this.j,e,void 0);let r=this.s;if(this.U&&(r?(r=D0(r),M0(r,this.U)):r=this.U),this.o!==null||this.O||(s.I=r,r=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){t:{var i=this.i[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(t+=i,4096<t){t=n;break e}if(t===4096||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=by(this,s,t),n=qn(this.G),Ge(n,"RID",e),Ge(n,"CVER",22),this.F&&Ge(n,"X-HTTP-Session-Id",this.F),fo(this,n),r&&(this.O?t="headers="+encodeURIComponent(String(yy(r)))+"&"+t:this.o&&Dh(n,this.o,r)),Oh(this.h,s),this.bb&&Ge(n,"TYPE","init"),this.P?(Ge(n,"$req",t),Ge(n,"SID","null"),s.ba=!0,nu(s,n,null)):nu(s,n,t),this.H=2}}else this.H==3&&(e?Ap(this,e):this.i.length==0||ay(this.h)||Ap(this))};function Ap(e,t){var n;t?n=t.m:n=e.W++;const i=qn(e.G);Ge(i,"SID",e.J),Ge(i,"RID",n),Ge(i,"AID",e.V),fo(e,i),e.o&&e.s&&Dh(i,e.o,e.s),n=new co(e,e.j,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.i=t.F.concat(e.i)),t=by(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Oh(e.h,n),nu(n,i,t)}function fo(e,t){e.ma&&vh(e.ma,function(n,i){Ge(t,i,n)}),e.l&&ny({},function(n,i){Ge(t,i,n)})}function by(e,t,n){n=Math.min(e.i.length,n);var i=e.l?wt(e.l.Va,e.l,e):null;e:{var s=e.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let l=!0;for(let a=0;a<n;a++){let c=s[a].h;const d=s[a].g;if(c-=r,0>c)r=Math.max(0,s[a].h-100),l=!1;else try{l5(d,o,"req"+c+"_")}catch{i&&i(d)}}if(l){i=o.join("&");break e}}}return e=e.i.splice(0,n),t.F=e,i}function Cy(e){e.g||e.u||(e.ba=1,z0(e.Ma,e),e.A=0)}function Fh(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=lo(wt(e.Ma,e),Ey(e,e.A)),e.A++,!0)}$.Ma=function(){if(this.u=null,wy(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var e=2*this.S;this.j.info("BP detection timer enabled: "+e),this.B=lo(wt(this.jb,this),e)}};$.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,Pt(10),ua(this),wy(this))};function Bh(e){e.B!=null&&(ie.clearTimeout(e.B),e.B=null)}function wy(e){e.g=new co(e,e.j,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=qn(e.wa);Ge(t,"RID","rpc"),Ge(t,"SID",e.J),Ge(t,"CI",e.M?"0":"1"),Ge(t,"AID",e.V),Ge(t,"TYPE","xmlhttp"),fo(e,t),e.o&&e.s&&Dh(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.oa,n.L=1,n.v=oa(qn(t)),n.s=null,n.S=!0,Z0(n,e)}$.ib=function(){this.v!=null&&(this.v=null,ua(this),Fh(this),Pt(19))};function Cl(e){e.v!=null&&(ie.clearTimeout(e.v),e.v=null)}function Iy(e,t){var n=null;if(e.g==t){Cl(e),Bh(e),e.g=null;var i=2}else if(su(e.h,t))n=t.F,uy(e.h,t),i=1;else return;if(e.H!=0){if(e.ta=t.aa,t.i)if(i==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var s=e.C;i=Ah(),mt(i,new X0(i,n)),ha(e)}else Cy(e);else if(s=t.o,s==3||s==0&&0<e.ta||!(i==1&&f5(e,t)||i==2&&Fh(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),s){case 1:Ni(e,5);break;case 4:Ni(e,10);break;case 3:Ni(e,6);break;default:Ni(e,2)}}}function Ey(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.l||(n*=2),n*t}function Ni(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var i=wt(e.pb,e);n||(n=new Ui("//www.google.com/images/cleardot.gif"),ie.location&&ie.location.protocol=="http"||vl(n,"https"),oa(n)),a5(n.toString(),i)}else Pt(2);e.H=0,e.l&&e.l.za(t),Ty(e),vy(e)}$.pb=function(e){e?(this.j.info("Successfully pinged google.com"),Pt(2)):(this.j.info("Failed to ping google.com"),Pt(1))};function Ty(e){if(e.H=0,e.pa=[],e.l){const t=hy(e.h);(t.length!=0||e.i.length!=0)&&(yp(e.pa,t),yp(e.pa,e.i),e.h.i.length=0,yh(e.i),e.i.length=0),e.l.ya()}}function Sy(e,t,n){var i=n instanceof Ui?qn(n):new Ui(n,void 0);if(i.g!="")t&&(i.g=t+"."+i.g),bl(i,i.m);else{var s=ie.location;i=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var r=new Ui(null,void 0);i&&vl(r,i),t&&(r.g=t),s&&bl(r,s),n&&(r.l=n),i=r}return n=e.F,t=e.Da,n&&t&&Ge(i,n,t),Ge(i,"VER",e.qa),fo(e,i),i}function Ay(e,t,n){if(t&&!e.I)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new et(new la({ob:!0})):new et(e.va),t.Oa(e.I),t}function ky(){}$=ky.prototype;$.Ba=function(){};$.Aa=function(){};$.za=function(){};$.ya=function(){};$.Va=function(){};function nn(e,t){at.call(this),this.g=new _y(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!yl(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!yl(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Hs(this)}ct(nn,at);nn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var e=this.g,t=this.l,n=this.h||void 0;Pt(0),e.Y=t,e.ma=n||{},e.M=e.aa,e.G=Sy(e,null,e.Y),ha(e)};nn.prototype.close=function(){Mh(this.g)};nn.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Eh(e),e=n);t.i.push(new s5(t.fb++,e)),t.H==3&&ha(t)};nn.prototype.N=function(){this.g.l=null,delete this.j,Mh(this.g),delete this.g,nn.$.N.call(this)};function Ry(e){Ph.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}ct(Ry,Ph);function Py(){xh.call(this),this.status=1}ct(Py,xh);function Hs(e){this.g=e}ct(Hs,ky);Hs.prototype.Ba=function(){mt(this.g,"a")};Hs.prototype.Aa=function(e){mt(this.g,new Ry(e))};Hs.prototype.za=function(e){mt(this.g,new Py)};Hs.prototype.ya=function(){mt(this.g,"b")};function p5(){this.blockSize=-1}function Pn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ct(Pn,p5);Pn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ic(e,t,n){n||(n=0);var i=Array(16);if(typeof t=="string")for(var s=0;16>s;++s)i[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)i[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var r=e.g[3],o=t+(r^n&(s^r))+i[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=r+(s^t&(n^s))+i[1]+3905402710&4294967295,r=t+(o<<12&4294967295|o>>>20),o=s+(n^r&(t^n))+i[2]+606105819&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(t^s&(r^t))+i[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(r^n&(s^r))+i[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=r+(s^t&(n^s))+i[5]+1200080426&4294967295,r=t+(o<<12&4294967295|o>>>20),o=s+(n^r&(t^n))+i[6]+2821735955&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(t^s&(r^t))+i[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(r^n&(s^r))+i[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=r+(s^t&(n^s))+i[9]+2336552879&4294967295,r=t+(o<<12&4294967295|o>>>20),o=s+(n^r&(t^n))+i[10]+4294925233&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(t^s&(r^t))+i[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(r^n&(s^r))+i[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=r+(s^t&(n^s))+i[13]+4254626195&4294967295,r=t+(o<<12&4294967295|o>>>20),o=s+(n^r&(t^n))+i[14]+2792965006&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(t^s&(r^t))+i[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(s^r&(n^s))+i[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(t^n))+i[6]+3225465664&4294967295,r=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(r^t))+i[11]+643717713&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(s^r))+i[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^r&(n^s))+i[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(t^n))+i[10]+38016083&4294967295,r=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(r^t))+i[15]+3634488961&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(s^r))+i[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^r&(n^s))+i[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(t^n))+i[14]+3275163606&4294967295,r=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(r^t))+i[3]+4107603335&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(s^r))+i[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^r&(n^s))+i[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(t^n))+i[2]+4243563512&4294967295,r=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(r^t))+i[7]+1735328473&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^t&(s^r))+i[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(n^s^r)+i[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^s)+i[8]+2272392833&4294967295,r=t+(o<<11&4294967295|o>>>21),o=s+(r^t^n)+i[11]+1839030562&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^t)+i[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^r)+i[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^s)+i[4]+1272893353&4294967295,r=t+(o<<11&4294967295|o>>>21),o=s+(r^t^n)+i[7]+4139469664&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^t)+i[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^r)+i[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^s)+i[0]+3936430074&4294967295,r=t+(o<<11&4294967295|o>>>21),o=s+(r^t^n)+i[3]+3572445317&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^t)+i[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^r)+i[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=r+(t^n^s)+i[12]+3873151461&4294967295,r=t+(o<<11&4294967295|o>>>21),o=s+(r^t^n)+i[15]+530742520&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^t)+i[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(s^(n|~r))+i[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~s))+i[7]+1126891415&4294967295,r=t+(o<<10&4294967295|o>>>22),o=s+(t^(r|~n))+i[14]+2878612391&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~t))+i[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~r))+i[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~s))+i[3]+2399980690&4294967295,r=t+(o<<10&4294967295|o>>>22),o=s+(t^(r|~n))+i[10]+4293915773&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~t))+i[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~r))+i[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~s))+i[15]+4264355552&4294967295,r=t+(o<<10&4294967295|o>>>22),o=s+(t^(r|~n))+i[6]+2734768916&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~t))+i[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~r))+i[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=r+(n^(t|~s))+i[11]+3174756917&4294967295,r=t+(o<<10&4294967295|o>>>22),o=s+(t^(r|~n))+i[2]+718787259&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~t))+i[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+r&4294967295}Pn.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,i=this.m,s=this.h,r=0;r<t;){if(s==0)for(;r<=n;)ic(this,e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<t;)if(i[s++]=e.charCodeAt(r++),s==this.blockSize){ic(this,i),s=0;break}}else for(;r<t;)if(i[s++]=e[r++],s==this.blockSize){ic(this,i),s=0;break}}this.h=s,this.i+=t};Pn.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var i=0;32>i;i+=8)e[n++]=this.g[t]>>>i&255;return e};function Ne(e,t){this.h=t;for(var n=[],i=!0,s=e.length-1;0<=s;s--){var r=e[s]|0;i&&r==t||(n[s]=r,i=!1)}this.g=n}var m5={};function Uh(e){return-128<=e&&128>e?x0(m5,e,function(t){return new Ne([t|0],0>t?-1:0)}):new Ne([e|0],0>e?-1:0)}function wn(e){if(isNaN(e)||!isFinite(e))return _s;if(0>e)return dt(wn(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=ru;return new Ne(t,0)}function xy(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return dt(xy(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=wn(Math.pow(t,8)),i=_s,s=0;s<e.length;s+=8){var r=Math.min(8,e.length-s),o=parseInt(e.substring(s,s+r),t);8>r?(r=wn(Math.pow(t,r)),i=i.R(r).add(wn(o))):(i=i.R(n),i=i.add(wn(o)))}return i}var ru=4294967296,_s=Uh(0),ou=Uh(1),kp=Uh(16777216);$=Ne.prototype;$.ea=function(){if(Xt(this))return-dt(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var i=this.D(n);e+=(0<=i?i:ru+i)*t,t*=ru}return e};$.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Vn(this))return"0";if(Xt(this))return"-"+dt(this).toString(e);for(var t=wn(Math.pow(e,6)),n=this,i="";;){var s=Il(n,t).g;n=wl(n,s.R(t));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=s,Vn(n))return r+i;for(;6>r.length;)r="0"+r;i=r+i}};$.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Vn(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function Xt(e){return e.h==-1}$.X=function(e){return e=wl(this,e),Xt(e)?-1:Vn(e)?0:1};function dt(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new Ne(n,~e.h).add(ou)}$.abs=function(){return Xt(this)?dt(this):this};$.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,s=0;s<=t;s++){var r=i+(this.D(s)&65535)+(e.D(s)&65535),o=(r>>>16)+(this.D(s)>>>16)+(e.D(s)>>>16);i=o>>>16,r&=65535,o&=65535,n[s]=o<<16|r}return new Ne(n,n[n.length-1]&-2147483648?-1:0)};function wl(e,t){return e.add(dt(t))}$.R=function(e){if(Vn(this)||Vn(e))return _s;if(Xt(this))return Xt(e)?dt(this).R(dt(e)):dt(dt(this).R(e));if(Xt(e))return dt(this.R(dt(e)));if(0>this.X(kp)&&0>e.X(kp))return wn(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<e.g.length;s++){var r=this.D(i)>>>16,o=this.D(i)&65535,l=e.D(s)>>>16,a=e.D(s)&65535;n[2*i+2*s]+=o*a,Lo(n,2*i+2*s),n[2*i+2*s+1]+=r*a,Lo(n,2*i+2*s+1),n[2*i+2*s+1]+=o*l,Lo(n,2*i+2*s+1),n[2*i+2*s+2]+=r*l,Lo(n,2*i+2*s+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new Ne(n,0)};function Lo(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function ir(e,t){this.g=e,this.h=t}function Il(e,t){if(Vn(t))throw Error("division by zero");if(Vn(e))return new ir(_s,_s);if(Xt(e))return t=Il(dt(e),t),new ir(dt(t.g),dt(t.h));if(Xt(t))return t=Il(e,dt(t)),new ir(dt(t.g),t.h);if(30<e.g.length){if(Xt(e)||Xt(t))throw Error("slowDivide_ only works with positive integers.");for(var n=ou,i=t;0>=i.X(e);)n=Rp(n),i=Rp(i);var s=is(n,1),r=is(i,1);for(i=is(i,2),n=is(n,2);!Vn(i);){var o=r.add(i);0>=o.X(e)&&(s=s.add(n),r=o),i=is(i,1),n=is(n,1)}return t=wl(e,s.R(t)),new ir(s,t)}for(s=_s;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),r=wn(n),o=r.R(t);Xt(o)||0<o.X(e);)n-=i,r=wn(n),o=r.R(t);Vn(r)&&(r=ou),s=s.add(r),e=wl(e,o)}return new ir(s,e)}$.gb=function(e){return Il(this,e).h};$.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)&e.D(i);return new Ne(n,this.h&e.h)};$.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)|e.D(i);return new Ne(n,this.h|e.h)};$.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)^e.D(i);return new Ne(n,this.h^e.h)};function Rp(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.D(i)<<1|e.D(i-1)>>>31;return new Ne(n,e.h)}function is(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,s=[],r=0;r<i;r++)s[r]=0<t?e.D(r+n)>>>t|e.D(r+n+1)<<32-t:e.D(r+n);return new Ne(s,e.h)}nn.prototype.send=nn.prototype.u;nn.prototype.open=nn.prototype.m;nn.prototype.close=nn.prototype.close;kh.NO_ERROR=0;kh.TIMEOUT=8;kh.HTTP_ERROR=6;j3.COMPLETE="complete";K3.EventType=ao;ao.OPEN="a";ao.CLOSE="b";ao.ERROR="c";ao.MESSAGE="d";at.prototype.listen=at.prototype.O;et.prototype.listenOnce=et.prototype.P;et.prototype.getLastError=et.prototype.Sa;et.prototype.getLastErrorCode=et.prototype.Ia;et.prototype.getStatus=et.prototype.da;et.prototype.getResponseJson=et.prototype.Wa;et.prototype.getResponseText=et.prototype.ja;et.prototype.send=et.prototype.ha;et.prototype.setWithCredentials=et.prototype.Oa;Pn.prototype.digest=Pn.prototype.l;Pn.prototype.reset=Pn.prototype.reset;Pn.prototype.update=Pn.prototype.j;Ne.prototype.add=Ne.prototype.add;Ne.prototype.multiply=Ne.prototype.R;Ne.prototype.modulo=Ne.prototype.gb;Ne.prototype.compare=Ne.prototype.X;Ne.prototype.toNumber=Ne.prototype.ea;Ne.prototype.toString=Ne.prototype.toString;Ne.prototype.getBits=Ne.prototype.D;Ne.fromNumber=wn;Ne.fromString=xy;var g5=Ne;const Pp="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Bt.UNAUTHENTICATED=new Bt(null),Bt.GOOGLE_CREDENTIALS=new Bt("google-credentials-uid"),Bt.FIRST_PARTY=new Bt("first-party-uid"),Bt.MOCK_USER=new Bt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let da="9.22.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El=new Gr("@firebase/firestore");function jt(e,...t){if(El.logLevel<=xe.DEBUG){const n=t.map(Oy);El.debug(`Firestore (${da}): ${e}`,...n)}}function Hh(e,...t){if(El.logLevel<=xe.ERROR){const n=t.map(Oy);El.error(`Firestore (${da}): ${e}`,...n)}}function Oy(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ly(e="Unexpected state"){const t=`FIRESTORE (${da}) INTERNAL ASSERTION FAILED: `+e;throw Hh(t),new Error(t)}function lu(e,t){e||Ly()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Wt extends On{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y5{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class _5{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Bt.UNAUTHENTICATED))}shutdown(){}}class v5{constructor(t){this.t=t,this.currentUser=Bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let i=this.i;const s=a=>this.i!==i?(i=this.i,n(a)):Promise.resolve();let r=new vs;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new vs,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const a=r;t.enqueueRetryable(async()=>{await a.promise,await s(this.currentUser)})},l=a=>{jt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=a,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(a=>l(a)),setTimeout(()=>{if(!this.auth){const a=this.t.getImmediate({optional:!0});a?l(a):(jt("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new vs)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==t?(jt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(lu(typeof i.accessToken=="string"),new y5(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return lu(t===null||typeof t=="string"),new Bt(t)}}class b5{constructor(t,n,i){this.h=t,this.l=n,this.m=i,this.type="FirstParty",this.user=Bt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class C5{constructor(t,n,i){this.h=t,this.l=n,this.m=i}getToken(){return Promise.resolve(new b5(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(Bt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class w5{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class I5{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,n){const i=r=>{r.error!=null&&jt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,jt("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>i(r))};const s=r=>{jt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?s(r):jt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(lu(typeof n.token=="string"),this.T=n.token,new w5(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E5(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let i=0;i<e;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T5{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const s=E5(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=t.charAt(s[r]%t.length))}return i}}function Ny(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S5{constructor(t,n,i,s,r,o,l,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=a,this.useFetchStreams=c}}class Tl{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Tl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Tl&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xp,Ee;(Ee=xp||(xp={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new g5([4294967295,4294967295],0);function sc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A5{constructor(t,n,i=1e3,s=1.5,r=6e4){this.ii=t,this.timerId=n,this.Po=i,this.bo=s,this.Vo=r,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(t){this.cancel();const n=Math.floor(this.So+this.ko()),i=Math.max(0,Date.now()-this.Co),s=Math.max(0,n-i);s>0&&jt("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,s,()=>(this.Co=Date.now(),t())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(t,n,i,s,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new vs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,i,s,r){const o=Date.now()+i,l=new $h(t,n,o,s,r);return l.start(i),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Wt(zt.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function k5(e,t){if(Hh("AsyncQueue",`${t}: ${e}`),Ny(e))return new Wt(zt.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R5{constructor(t,n,i,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=Bt.UNAUTHENTICATED,this.clientId=T5.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{jt("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(jt("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Wt(zt.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new vs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const i=k5(n,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dy(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Op=new Map;function P5(e,t,n,i){if(t===!0&&i===!0)throw new Wt(zt.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(t){var n,i;if(t.host===void 0){if(t.ssl!==void 0)throw new Wt(zt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new Wt(zt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}P5("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Dy((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Wt(zt.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Wt(zt.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Wt(zt.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,i=t.experimentalLongPollingOptions,n.timeoutSeconds===i.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams;var n,i}}class x5{constructor(t,n,i,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Lp({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Wt(zt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new Wt(zt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Lp(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new _5;switch(n.type){case"firstParty":return new C5(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Wt(zt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Op.get(t);n&&(jt("ComponentProvider","Removing Datastore"),Op.delete(t),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O5{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new A5(this,"async_queue_retry"),this.Xc=()=>{const n=sc();n&&jt("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const t=sc();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Zc(),this.ta(t)}enterRestrictedMode(t){if(!this.jc){this.jc=!0,this.Jc=t||!1;const n=sc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(t){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new vs;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Qc.push(t),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(t){if(!Ny(t))throw t;jt("AsyncQueue","Operation failed with retryable error: "+t)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(t){const n=this.Gc.then(()=>(this.Hc=!0,t().catch(i=>{this.Wc=i,this.Hc=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw Hh("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Hc=!1,i))));return this.Gc=n,n}enqueueAfterDelay(t,n,i){this.Zc(),this.Yc.indexOf(t)>-1&&(n=0);const s=$h.createAndSchedule(this,t,n,i,r=>this.na(r));return this.zc.push(s),s}Zc(){this.Wc&&Ly()}verifyOperationInProgress(){}async sa(){let t;do t=this.Gc,await t;while(t!==this.Gc)}ia(t){for(const n of this.zc)if(n.timerId===t)return!0;return!1}ra(t){return this.sa().then(()=>{this.zc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.sa()})}oa(t){this.Yc.push(t)}na(t){const n=this.zc.indexOf(t);this.zc.splice(n,1)}}class L5 extends x5{constructor(t,n,i,s){super(t,n,i,s),this.type="firestore",this._queue=new O5,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||N5(this),this._firestoreClient.terminate()}}function N5(e){var t,n,i;const s=e._freezeSettings(),r=function(o,l,a,c){return new S5(o,l,a,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,Dy(c.experimentalLongPollingOptions),c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._firestoreClient=new R5(e._authCredentials,e._appCheckCredentials,e._queue,r),!((n=s.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.cache)===null||i===void 0)&&i._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}(function(e,t=!0){(function(n){da=n})(yi),An(new mn("firestore",(n,{instanceIdentifier:i,options:s})=>{const r=n.getProvider("app").getImmediate(),o=new L5(new v5(n.getProvider("auth-internal")),new I5(n.getProvider("app-check-internal")),function(l,a){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new Wt(zt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Tl(l.options.projectId,a)}(r,i),r);return s=Object.assign({useFetchStreams:t},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),Kt(Pp,"3.12.0",e),Kt(Pp,"3.12.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const My="firebasestorage.googleapis.com",D5="storageBucket",M5=2*60*1e3,F5=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends On{constructor(t,n,i=0){super(rc(t),`Firebase Storage: ${n} (${rc(t)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ln.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return rc(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var xn;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(xn||(xn={}));function rc(e){return"storage/"+e}function B5(){const e="An unknown error occurred, please check the error payload for server response.";return new Ln(xn.UNKNOWN,e)}function U5(){return new Ln(xn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function H5(){return new Ln(xn.CANCELED,"User canceled the upload/download.")}function $5(e){return new Ln(xn.INVALID_URL,"Invalid URL '"+e+"'.")}function V5(e){return new Ln(xn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Np(e){return new Ln(xn.INVALID_ARGUMENT,e)}function Fy(){return new Ln(xn.APP_DELETED,"The Firebase app was deleted.")}function z5(e){return new Ln(xn.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let i;try{i=hn.makeFromUrl(t,n)}catch{return new hn(t,"")}if(i.path==="")return i;throw V5(t)}static makeFromUrl(t,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(F){F.path.charAt(F.path.length-1)==="/"&&(F.path_=F.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),a={bucket:1,path:3};function c(F){F.path_=decodeURIComponent(F.path)}const d="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",b=new RegExp(`^https?://${f}/${d}/b/${s}/o${m}`,"i"),C={bucket:1,path:3},A=n===My?"(?:storage.googleapis.com|storage.cloud.google.com)":n,M="([^?#]*)",z=new RegExp(`^https?://${A}/${s}/${M}`,"i"),Y=[{regex:l,indices:a,postModify:r},{regex:b,indices:C,postModify:c},{regex:z,indices:{bucket:1,path:2},postModify:c}];for(let F=0;F<Y.length;F++){const oe=Y[F],pe=oe.regex.exec(t);if(pe){const Re=pe[oe.indices.bucket];let J=pe[oe.indices.path];J||(J=""),i=new hn(Re,J),oe.postModify(i);break}}if(i==null)throw $5(t);return i}}class W5{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j5(e,t,n){let i=1,s=null,r=null,o=!1,l=0;function a(){return l===2}let c=!1;function d(...M){c||(c=!0,t.apply(null,M))}function f(M){s=setTimeout(()=>{s=null,e(b,a())},M)}function m(){r&&clearTimeout(r)}function b(M,...z){if(c){m();return}if(M){m(),d.call(null,M,...z);return}if(a()||o){m(),d.call(null,M,...z);return}i<64&&(i*=2);let Y;l===1?(l=2,Y=0):Y=(i+Math.random())*1e3,f(Y)}let C=!1;function A(M){C||(C=!0,m(),!c&&(s!==null?(M||(l=2),clearTimeout(s),f(0)):M||(l=1)))}return f(0),r=setTimeout(()=>{o=!0,A(!0)},n),A}function K5(e){e(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q5(e){return e!==void 0}function Dp(e,t,n,i){if(i<t)throw Np(`Invalid value for '${e}'. Expected ${t} or greater.`);if(i>n)throw Np(`Invalid value for '${e}'. Expected ${n} or less.`)}function G5(e){const t=encodeURIComponent;let n="?";for(const i in e)if(e.hasOwnProperty(i)){const s=t(i)+"="+t(e[i]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Sl;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(Sl||(Sl={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y5(e,t){const n=e>=500&&e<600,s=[408,429].indexOf(e)!==-1,r=t.indexOf(e)!==-1;return n||s||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X5{constructor(t,n,i,s,r,o,l,a,c,d,f,m=!0){this.url_=t,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=f,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((b,C)=>{this.resolve_=b,this.reject_=C,this.start_()})}start_(){const t=(i,s)=>{if(s){i(!1,new No(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=l=>{const a=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const l=r.getErrorCode()===Sl.NO_ERROR,a=r.getStatus();if(!l||Y5(a,this.additionalRetryCodes_)&&this.retry){const d=r.getErrorCode()===Sl.ABORT;i(!1,new No(!1,null,d));return}const c=this.successCodes_.indexOf(a)!==-1;i(!0,new No(c,r))})},n=(i,s)=>{const r=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const a=this.callback_(l,l.getResponse());q5(a)?r(a):r()}catch(a){o(a)}else if(l!==null){const a=B5();a.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,a)):o(a)}else if(s.canceled){const a=this.appDelete_?Fy():H5();o(a)}else{const a=U5();o(a)}};this.canceled_?n(!1,new No(!1,null,!0)):this.backoffId_=j5(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&K5(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class No{constructor(t,n,i){this.wasSuccessCode=t,this.connection=n,this.canceled=!!i}}function J5(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function Z5(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function Q5(e,t){t&&(e["X-Firebase-GMPID"]=t)}function e7(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function t7(e,t,n,i,s,r,o=!0){const l=G5(e.urlParams),a=e.url+l,c=Object.assign({},e.headers);return Q5(c,t),J5(c,n),Z5(c,r),e7(c,i),new X5(a,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n7(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function i7(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(t,n){this._service=t,n instanceof hn?this._location=n:this._location=hn.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new Al(t,n)}get root(){const t=new hn(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return i7(this._location.path)}get storage(){return this._service}get parent(){const t=n7(this._location.path);if(t===null)return null;const n=new hn(this._location.bucket,t);return new Al(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw z5(t)}}function Mp(e,t){const n=t==null?void 0:t[D5];return n==null?null:hn.makeFromBucketSpec(n,e)}class s7{constructor(t,n,i,s,r){this.app=t,this._authProvider=n,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=My,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=M5,this._maxUploadRetryTime=F5,this._requests=new Set,s!=null?this._bucket=hn.makeFromBucketSpec(s,this._host):this._bucket=Mp(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=hn.makeFromBucketSpec(this._url,t):this._bucket=Mp(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Dp("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Dp("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Al(this,t)}_makeRequest(t,n,i,s,r=!0){if(this._deleted)return new W5(Fy());{const o=t7(t,this._appId,i,s,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,n){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,i,s).getPromise()}}const Fp="@firebase/storage",Bp="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r7="storage";function o7(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return new s7(n,i,s,t,yi)}function l7(){An(new mn(r7,o7,"PUBLIC").setMultipleInstances(!0)),Kt(Fp,Bp,""),Kt(Fp,Bp,"esm2017")}l7();function a7(e){return(t,n)=>{const i=P6(t,n).run(()=>Am(e));x6.set(t,i),L6(i,t)}}function oc(e){return R6?p1(y1(e)):null}function c7(e,{firebaseApp:t,modules:n=[]}){e.provide(g1,t);for(const i of n)e.use(i.bind(null,t))}const u7={apiKey:"AIzaSyCiE3x-D8uzBDfzepyjS4HwGrol_PS3e9I",authDomain:"volley-rank-105ba.firebaseapp.com",projectId:"volley-rank-105ba",storageBucket:"volley-rank-105ba.appspot.com",messagingSenderId:"639696193648",appId:"1:639696193648:web:1d3f896994efc79bfb0cb5",measurementId:"G-L17C854GWV"},Up=Rg(u7);/*!
  * vue-router v4.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const By=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",$s=e=>By?Symbol(e):"_vr_"+e,h7=$s("rvlm"),Hp=$s("rvd"),Vh=$s("r"),Uy=$s("rl"),au=$s("rvl"),rs=typeof window<"u";function d7(e){return e.__esModule||By&&e[Symbol.toStringTag]==="Module"}const Be=Object.assign;function lc(e,t){const n={};for(const i in t){const s=t[i];n[i]=Array.isArray(s)?s.map(e):e(s)}return n}const vr=()=>{},f7=/\/$/,p7=e=>e.replace(f7,"");function ac(e,t,n="/"){let i,s={},r="",o="";const l=t.indexOf("?"),a=t.indexOf("#",l>-1?l:0);return l>-1&&(i=t.slice(0,l),r=t.slice(l+1,a>-1?a:t.length),s=e(r)),a>-1&&(i=i||t.slice(0,a),o=t.slice(a,t.length)),i=_7(i??t,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function m7(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function $p(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function g7(e,t,n){const i=t.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&As(t.matched[i],n.matched[s])&&Hy(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function As(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Hy(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!y7(e[n],t[n]))return!1;return!0}function y7(e,t){return Array.isArray(e)?Vp(e,t):Array.isArray(t)?Vp(t,e):e===t}function Vp(e,t){return Array.isArray(t)?e.length===t.length&&e.every((n,i)=>n===t[i]):e.length===1&&e[0]===t}function _7(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),i=e.split("/");let s=n.length-1,r,o;for(r=0;r<i.length;r++)if(o=i[r],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(r-(r===i.length?1:0)).join("/")}var Vr;(function(e){e.pop="pop",e.push="push"})(Vr||(Vr={}));var br;(function(e){e.back="back",e.forward="forward",e.unknown=""})(br||(br={}));function v7(e){if(!e)if(rs){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),p7(e)}const b7=/^[^#]+#/;function C7(e,t){return e.replace(b7,"#")+t}function w7(e,t){const n=document.documentElement.getBoundingClientRect(),i=e.getBoundingClientRect();return{behavior:t.behavior,left:i.left-n.left-(t.left||0),top:i.top-n.top-(t.top||0)}}const fa=()=>({left:window.pageXOffset,top:window.pageYOffset});function I7(e){let t;if("el"in e){const n=e.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=w7(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function zp(e,t){return(history.state?history.state.position-t:-1)+e}const cu=new Map;function E7(e,t){cu.set(e,t)}function T7(e){const t=cu.get(e);return cu.delete(e),t}let S7=()=>location.protocol+"//"+location.host;function $y(e,t){const{pathname:n,search:i,hash:s}=t,r=e.indexOf("#");if(r>-1){let l=s.includes(e.slice(r))?e.slice(r).length:1,a=s.slice(l);return a[0]!=="/"&&(a="/"+a),$p(a,"")}return $p(n,e)+i+s}function A7(e,t,n,i){let s=[],r=[],o=null;const l=({state:m})=>{const b=$y(e,location),C=n.value,A=t.value;let M=0;if(m){if(n.value=b,t.value=m,o&&o===C){o=null;return}M=A?m.position-A.position:0}else i(b);s.forEach(z=>{z(n.value,C,{delta:M,type:Vr.pop,direction:M?M>0?br.forward:br.back:br.unknown})})};function a(){o=n.value}function c(m){s.push(m);const b=()=>{const C=s.indexOf(m);C>-1&&s.splice(C,1)};return r.push(b),b}function d(){const{history:m}=window;m.state&&m.replaceState(Be({},m.state,{scroll:fa()}),"")}function f(){for(const m of r)m();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d),{pauseListeners:a,listen:c,destroy:f}}function Wp(e,t,n,i=!1,s=!1){return{back:e,current:t,forward:n,replaced:i,position:window.history.length,scroll:s?fa():null}}function k7(e){const{history:t,location:n}=window,i={value:$y(e,n)},s={value:t.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(a,c,d){const f=e.indexOf("#"),m=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+a:S7()+e+a;try{t[d?"replaceState":"pushState"](c,"",m),s.value=c}catch(b){console.error(b),n[d?"replace":"assign"](m)}}function o(a,c){const d=Be({},t.state,Wp(s.value.back,a,s.value.forward,!0),c,{position:s.value.position});r(a,d,!0),i.value=a}function l(a,c){const d=Be({},s.value,t.state,{forward:a,scroll:fa()});r(d.current,d,!0);const f=Be({},Wp(i.value,a,null),{position:d.position+1},c);r(a,f,!1),i.value=a}return{location:i,state:s,push:l,replace:o}}function R7(e){e=v7(e);const t=k7(e),n=A7(e,t.state,t.location,t.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=Be({location:"",base:e,go:i,createHref:C7.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function P7(e){return typeof e=="string"||e&&typeof e=="object"}function Vy(e){return typeof e=="string"||typeof e=="symbol"}const Qn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},zy=$s("nf");var jp;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(jp||(jp={}));function ks(e,t){return Be(new Error,{type:e,[zy]:!0},t)}function ei(e,t){return e instanceof Error&&zy in e&&(t==null||!!(e.type&t))}const Kp="[^/]+?",x7={sensitive:!1,strict:!1,start:!0,end:!0},O7=/[.+*?^${}()[\]/\\]/g;function L7(e,t){const n=Be({},x7,t),i=[];let s=n.start?"^":"";const r=[];for(const c of e){const d=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let f=0;f<c.length;f++){const m=c[f];let b=40+(n.sensitive?.25:0);if(m.type===0)f||(s+="/"),s+=m.value.replace(O7,"\\$&"),b+=40;else if(m.type===1){const{value:C,repeatable:A,optional:M,regexp:z}=m;r.push({name:C,repeatable:A,optional:M});const j=z||Kp;if(j!==Kp){b+=10;try{new RegExp(`(${j})`)}catch(F){throw new Error(`Invalid custom RegExp for param "${C}" (${j}): `+F.message)}}let Y=A?`((?:${j})(?:/(?:${j}))*)`:`(${j})`;f||(Y=M&&c.length<2?`(?:/${Y})`:"/"+Y),M&&(Y+="?"),s+=Y,b+=20,M&&(b+=-8),A&&(b+=-20),j===".*"&&(b+=-50)}d.push(b)}i.push(d)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(c){const d=c.match(o),f={};if(!d)return null;for(let m=1;m<d.length;m++){const b=d[m]||"",C=r[m-1];f[C.name]=b&&C.repeatable?b.split("/"):b}return f}function a(c){let d="",f=!1;for(const m of e){(!f||!d.endsWith("/"))&&(d+="/"),f=!1;for(const b of m)if(b.type===0)d+=b.value;else if(b.type===1){const{value:C,repeatable:A,optional:M}=b,z=C in c?c[C]:"";if(Array.isArray(z)&&!A)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const j=Array.isArray(z)?z.join("/"):z;if(!j)if(M)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):f=!0);else throw new Error(`Missing required param "${C}"`);d+=j}}return d}return{re:o,score:i,keys:r,parse:l,stringify:a}}function N7(e,t){let n=0;for(;n<e.length&&n<t.length;){const i=t[n]-e[n];if(i)return i;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function D7(e,t){let n=0;const i=e.score,s=t.score;for(;n<i.length&&n<s.length;){const r=N7(i[n],s[n]);if(r)return r;n++}return s.length-i.length}const M7={type:0,value:""},F7=/[a-zA-Z0-9_]/;function B7(e){if(!e)return[[]];if(e==="/")return[[M7]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(b){throw new Error(`ERR (${n})/"${c}": ${b}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let l=0,a,c="",d="";function f(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:d,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),c="")}function m(){c+=a}for(;l<e.length;){if(a=e[l++],a==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:a==="/"?(c&&f(),o()):a===":"?(f(),n=1):m();break;case 4:m(),n=i;break;case 1:a==="("?n=2:F7.test(a)?m():(f(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case 2:a===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+a:n=3:d+=a;break;case 3:f(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--,d="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),f(),o(),s}function U7(e,t,n){const i=L7(B7(e.path),n),s=Be(i,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function H7(e,t){const n=[],i=new Map;t=Gp({strict:!1,end:!0,sensitive:!1},t);function s(d){return i.get(d)}function r(d,f,m){const b=!m,C=V7(d);C.aliasOf=m&&m.record;const A=Gp(t,d),M=[C];if("alias"in d){const Y=typeof d.alias=="string"?[d.alias]:d.alias;for(const F of Y)M.push(Be({},C,{components:m?m.record.components:C.components,path:F,aliasOf:m?m.record:C}))}let z,j;for(const Y of M){const{path:F}=Y;if(f&&F[0]!=="/"){const oe=f.record.path,pe=oe[oe.length-1]==="/"?"":"/";Y.path=f.record.path+(F&&pe+F)}if(z=U7(Y,f,A),m?m.alias.push(z):(j=j||z,j!==z&&j.alias.push(z),b&&d.name&&!qp(z)&&o(d.name)),"children"in C){const oe=C.children;for(let pe=0;pe<oe.length;pe++)r(oe[pe],z,m&&m.children[pe])}m=m||z,a(z)}return j?()=>{o(j)}:vr}function o(d){if(Vy(d)){const f=i.get(d);f&&(i.delete(d),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(d);f>-1&&(n.splice(f,1),d.record.name&&i.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function l(){return n}function a(d){let f=0;for(;f<n.length&&D7(d,n[f])>=0&&(d.record.path!==n[f].record.path||!Wy(d,n[f]));)f++;n.splice(f,0,d),d.record.name&&!qp(d)&&i.set(d.record.name,d)}function c(d,f){let m,b={},C,A;if("name"in d&&d.name){if(m=i.get(d.name),!m)throw ks(1,{location:d});A=m.record.name,b=Be($7(f.params,m.keys.filter(j=>!j.optional).map(j=>j.name)),d.params),C=m.stringify(b)}else if("path"in d)C=d.path,m=n.find(j=>j.re.test(C)),m&&(b=m.parse(C),A=m.record.name);else{if(m=f.name?i.get(f.name):n.find(j=>j.re.test(f.path)),!m)throw ks(1,{location:d,currentLocation:f});A=m.record.name,b=Be({},f.params,d.params),C=m.stringify(b)}const M=[];let z=m;for(;z;)M.unshift(z.record),z=z.parent;return{name:A,path:C,params:b,matched:M,meta:W7(M)}}return e.forEach(d=>r(d)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:l,getRecordMatcher:s}}function $7(e,t){const n={};for(const i of t)i in e&&(n[i]=e[i]);return n}function V7(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:z7(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function z7(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const i in e.components)t[i]=typeof n=="boolean"?n:n[i];return t}function qp(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function W7(e){return e.reduce((t,n)=>Be(t,n.meta),{})}function Gp(e,t){const n={};for(const i in e)n[i]=i in t?t[i]:e[i];return n}function Wy(e,t){return t.children.some(n=>n===e||Wy(e,n))}const jy=/#/g,j7=/&/g,K7=/\//g,q7=/=/g,G7=/\?/g,Ky=/\+/g,Y7=/%5B/g,X7=/%5D/g,qy=/%5E/g,J7=/%60/g,Gy=/%7B/g,Z7=/%7C/g,Yy=/%7D/g,Q7=/%20/g;function zh(e){return encodeURI(""+e).replace(Z7,"|").replace(Y7,"[").replace(X7,"]")}function eS(e){return zh(e).replace(Gy,"{").replace(Yy,"}").replace(qy,"^")}function uu(e){return zh(e).replace(Ky,"%2B").replace(Q7,"+").replace(jy,"%23").replace(j7,"%26").replace(J7,"`").replace(Gy,"{").replace(Yy,"}").replace(qy,"^")}function tS(e){return uu(e).replace(q7,"%3D")}function nS(e){return zh(e).replace(jy,"%23").replace(G7,"%3F")}function iS(e){return e==null?"":nS(e).replace(K7,"%2F")}function kl(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function sS(e){const t={};if(e===""||e==="?")return t;const i=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(Ky," "),o=r.indexOf("="),l=kl(o<0?r:r.slice(0,o)),a=o<0?null:kl(r.slice(o+1));if(l in t){let c=t[l];Array.isArray(c)||(c=t[l]=[c]),c.push(a)}else t[l]=a}return t}function Yp(e){let t="";for(let n in e){const i=e[n];if(n=tS(n),i==null){i!==void 0&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(i)?i.map(r=>r&&uu(r)):[i&&uu(i)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function rS(e){const t={};for(const n in e){const i=e[n];i!==void 0&&(t[n]=Array.isArray(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return t}function sr(){let e=[];function t(i){return e.push(i),()=>{const s=e.indexOf(i);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function si(e,t,n,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,l)=>{const a=f=>{f===!1?l(ks(4,{from:n,to:t})):f instanceof Error?l(f):P7(f)?l(ks(2,{from:t,to:f})):(r&&i.enterCallbacks[s]===r&&typeof f=="function"&&r.push(f),o())},c=e.call(i&&i.instances[s],t,n,a);let d=Promise.resolve(c);e.length<3&&(d=d.then(a)),d.catch(f=>l(f))})}function cc(e,t,n,i){const s=[];for(const r of e)for(const o in r.components){let l=r.components[o];if(!(t!=="beforeRouteEnter"&&!r.instances[o]))if(oS(l)){const c=(l.__vccOpts||l)[t];c&&s.push(si(c,n,i,r,o))}else{let a=l();s.push(()=>a.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const d=d7(c)?c.default:c;r.components[o]=d;const m=(d.__vccOpts||d)[t];return m&&si(m,n,i,r,o)()}))}}return s}function oS(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Xp(e){const t=In(Vh),n=In(Uy),i=ln(()=>t.resolve(ds(e.to))),s=ln(()=>{const{matched:a}=i.value,{length:c}=a,d=a[c-1],f=n.matched;if(!d||!f.length)return-1;const m=f.findIndex(As.bind(null,d));if(m>-1)return m;const b=Jp(a[c-2]);return c>1&&Jp(d)===b&&f[f.length-1].path!==b?f.findIndex(As.bind(null,a[c-2])):m}),r=ln(()=>s.value>-1&&uS(n.params,i.value.params)),o=ln(()=>s.value>-1&&s.value===n.matched.length-1&&Hy(n.params,i.value.params));function l(a={}){return cS(a)?t[ds(e.replace)?"replace":"push"](ds(e.to)).catch(vr):Promise.resolve()}return{route:i,href:ln(()=>i.value.href),isActive:r,isExactActive:o,navigate:l}}const lS=Vm({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Xp,setup(e,{slots:t}){const n=xs(Xp(e)),{options:i}=In(Vh),s=ln(()=>({[Zp(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Zp(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&t.default(n);return e.custom?r:Fu("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),aS=lS;function cS(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function uS(e,t){for(const n in t){const i=t[n],s=e[n];if(typeof i=="string"){if(i!==s)return!1}else if(!Array.isArray(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Jp(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Zp=(e,t,n)=>e??t??n,hS=Vm({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const i=In(au),s=ln(()=>e.route||i.value),r=In(Hp,0),o=ln(()=>s.value.matched[r]);Uo(Hp,r+1),Uo(h7,o),Uo(au,s);const l=Am();return Bo(()=>[l.value,o.value,e.name],([a,c,d],[f,m,b])=>{c&&(c.instances[d]=a,m&&m!==c&&a&&a===f&&(c.leaveGuards.size||(c.leaveGuards=m.leaveGuards),c.updateGuards.size||(c.updateGuards=m.updateGuards))),a&&c&&(!m||!As(c,m)||!f)&&(c.enterCallbacks[d]||[]).forEach(C=>C(a))},{flush:"post"}),()=>{const a=s.value,c=o.value,d=c&&c.components[e.name],f=e.name;if(!d)return Qp(n.default,{Component:d,route:a});const m=c.props[e.name],b=m?m===!0?a.params:typeof m=="function"?m(a):m:null,A=Fu(d,Be({},b,t,{onVnodeUnmounted:M=>{M.component.isUnmounted&&(c.instances[f]=null)},ref:l}));return Qp(n.default,{Component:A,route:a})||A}}});function Qp(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Xy=hS;function dS(e){const t=H7(e.routes,e),n=e.parseQuery||sS,i=e.stringifyQuery||Yp,s=e.history,r=sr(),o=sr(),l=sr(),a=VC(Qn);let c=Qn;rs&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=lc.bind(null,S=>""+S),f=lc.bind(null,iS),m=lc.bind(null,kl);function b(S,W){let B,G;return Vy(S)?(B=t.getRecordMatcher(S),G=W):G=S,t.addRoute(G,B)}function C(S){const W=t.getRecordMatcher(S);W&&t.removeRoute(W)}function A(){return t.getRoutes().map(S=>S.record)}function M(S){return!!t.getRecordMatcher(S)}function z(S,W){if(W=Be({},W||a.value),typeof S=="string"){const g=ac(n,S,W.path),_=t.resolve({path:g.path},W),w=s.createHref(g.fullPath);return Be(g,_,{params:m(_.params),hash:kl(g.hash),redirectedFrom:void 0,href:w})}let B;if("path"in S)B=Be({},S,{path:ac(n,S.path,W.path).path});else{const g=Be({},S.params);for(const _ in g)g[_]==null&&delete g[_];B=Be({},S,{params:f(S.params)}),W.params=f(W.params)}const G=t.resolve(B,W),be=S.hash||"";G.params=d(m(G.params));const Ue=m7(i,Be({},S,{hash:eS(be),path:G.path})),le=s.createHref(Ue);return Be({fullPath:Ue,hash:be,query:i===Yp?rS(S.query):S.query||{}},G,{redirectedFrom:void 0,href:le})}function j(S){return typeof S=="string"?ac(n,S,a.value.path):Be({},S)}function Y(S,W){if(c!==S)return ks(8,{from:W,to:S})}function F(S){return Re(S)}function oe(S){return F(Be(j(S),{replace:!0}))}function pe(S){const W=S.matched[S.matched.length-1];if(W&&W.redirect){const{redirect:B}=W;let G=typeof B=="function"?B(S):B;return typeof G=="string"&&(G=G.includes("?")||G.includes("#")?G=j(G):{path:G},G.params={}),Be({query:S.query,hash:S.hash,params:S.params},G)}}function Re(S,W){const B=c=z(S),G=a.value,be=S.state,Ue=S.force,le=S.replace===!0,g=pe(B);if(g)return Re(Be(j(g),{state:be,force:Ue,replace:le}),W||B);const _=B;_.redirectedFrom=W;let w;return!Ue&&g7(i,G,B)&&(w=ks(16,{to:_,from:G}),Gt(G,G,!0,!1)),(w?Promise.resolve(w):me(_,G)).catch(T=>ei(T)?ei(T,2)?T:Lt(T):X(T,_,G)).then(T=>{if(T){if(ei(T,2))return Re(Be(j(T.to),{state:be,force:Ue,replace:le}),W||_)}else T=Fe(_,G,!0,le,be);return _e(_,G,T),T})}function J(S,W){const B=Y(S,W);return B?Promise.reject(B):Promise.resolve()}function me(S,W){let B;const[G,be,Ue]=fS(S,W);B=cc(G.reverse(),"beforeRouteLeave",S,W);for(const g of G)g.leaveGuards.forEach(_=>{B.push(si(_,S,W))});const le=J.bind(null,S,W);return B.push(le),ss(B).then(()=>{B=[];for(const g of r.list())B.push(si(g,S,W));return B.push(le),ss(B)}).then(()=>{B=cc(be,"beforeRouteUpdate",S,W);for(const g of be)g.updateGuards.forEach(_=>{B.push(si(_,S,W))});return B.push(le),ss(B)}).then(()=>{B=[];for(const g of S.matched)if(g.beforeEnter&&!W.matched.includes(g))if(Array.isArray(g.beforeEnter))for(const _ of g.beforeEnter)B.push(si(_,S,W));else B.push(si(g.beforeEnter,S,W));return B.push(le),ss(B)}).then(()=>(S.matched.forEach(g=>g.enterCallbacks={}),B=cc(Ue,"beforeRouteEnter",S,W),B.push(le),ss(B))).then(()=>{B=[];for(const g of o.list())B.push(si(g,S,W));return B.push(le),ss(B)}).catch(g=>ei(g,8)?g:Promise.reject(g))}function _e(S,W,B){for(const G of l.list())G(S,W,B)}function Fe(S,W,B,G,be){const Ue=Y(S,W);if(Ue)return Ue;const le=W===Qn,g=rs?history.state:{};B&&(G||le?s.replace(S.fullPath,Be({scroll:le&&g&&g.scroll},be)):s.push(S.fullPath,be)),a.value=S,Gt(S,W,B,le),Lt()}let v;function Pe(){v=s.listen((S,W,B)=>{const G=z(S),be=pe(G);if(be){Re(Be(be,{replace:!0}),G).catch(vr);return}c=G;const Ue=a.value;rs&&E7(zp(Ue.fullPath,B.delta),fa()),me(G,Ue).catch(le=>ei(le,12)?le:ei(le,2)?(Re(le.to,G).then(g=>{ei(g,20)&&!B.delta&&B.type===Vr.pop&&s.go(-1,!1)}).catch(vr),Promise.reject()):(B.delta&&s.go(-B.delta,!1),X(le,G,Ue))).then(le=>{le=le||Fe(G,Ue,!1),le&&(B.delta?s.go(-B.delta,!1):B.type===Vr.pop&&ei(le,20)&&s.go(-1,!1)),_e(G,Ue,le)}).catch(vr)})}let we=sr(),Ot=sr(),ve;function X(S,W,B){Lt(S);const G=Ot.list();return G.length?G.forEach(be=>be(S,W,B)):console.error(S),Promise.reject(S)}function Ie(){return ve&&a.value!==Qn?Promise.resolve():new Promise((S,W)=>{we.add([S,W])})}function Lt(S){return ve||(ve=!S,Pe(),we.list().forEach(([W,B])=>S?B(S):W()),we.reset()),S}function Gt(S,W,B,G){const{scrollBehavior:be}=e;if(!rs||!be)return Promise.resolve();const Ue=!B&&T7(zp(S.fullPath,0))||(G||!B)&&history.state&&history.state.scroll||null;return xm().then(()=>be(S,W,Ue)).then(le=>le&&I7(le)).catch(le=>X(le,S,W))}const Nt=S=>s.go(S);let ut;const sn=new Set;return{currentRoute:a,addRoute:b,removeRoute:C,hasRoute:M,getRoutes:A,resolve:z,options:e,push:F,replace:oe,go:Nt,back:()=>Nt(-1),forward:()=>Nt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:Ot.add,isReady:Ie,install(S){const W=this;S.component("RouterLink",aS),S.component("RouterView",Xy),S.config.globalProperties.$router=W,Object.defineProperty(S.config.globalProperties,"$route",{enumerable:!0,get:()=>ds(a)}),rs&&!ut&&a.value===Qn&&(ut=!0,F(s.location).catch(be=>{}));const B={};for(const be in Qn)B[be]=ln(()=>a.value[be]);S.provide(Vh,W),S.provide(Uy,xs(B)),S.provide(au,a);const G=S.unmount;sn.add(S),S.unmount=function(){sn.delete(S),sn.size<1&&(c=Qn,v&&v(),a.value=Qn,ut=!1,ve=!1),G()}}}}function ss(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function fS(e,t){const n=[],i=[],s=[],r=Math.max(t.matched.length,e.matched.length);for(let o=0;o<r;o++){const l=t.matched[o];l&&(e.matched.find(c=>As(c,l))?i.push(l):n.push(l));const a=e.matched[o];a&&(t.matched.find(c=>As(c,a))||s.push(a))}return[n,i,s]}const Vs=(e,t)=>{const n=e.__vccOpts||e;for(const[i,s]of t)n[i]=s;return n},pS={__name:"App",setup(e){return(t,n)=>{const i=Ye("NavBar");return I(),L(De,null,[fe(i,{class:"nav-menu"}),fe(ds(Xy))],64)}}},mS=Vs(pS,[["__scopeId","data-v-2a8ffa71"]]),gS="modulepreload",yS=function(e){return"/volley-lock/"+e},em={},Do=function(t,n,i){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=yS(r),r in em)return;em[r]=!0;const o=r.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!i)for(let d=s.length-1;d>=0;d--){const f=s[d];if(f.href===r&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${l}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":gS,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((d,f)=>{c.addEventListener("load",d),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())},_S="/volley-lock/assets/blue-lock-fe3186c9.png";const vS={},bS=P("header",null,[P("img",{alt:"Vue logo",class:"logo",src:_S,width:"125",height:"125"}),P("div",{class:"card flex justify-content-center"},[P("h1",null," VOLLEY LOCK ")])],-1);function CS(e,t){const n=Ye("TheWelcome");return I(),L(De,null,[bS,P("main",null,[fe(n)])],64)}const wS=Vs(vS,[["render",CS]]),IS=dS({history:R7("/volley-lock"),routes:[{path:"/",name:"home",component:wS},{path:"/results",name:"results",component:()=>Do(()=>import("./TierResults-574afdcc.js"),["assets/TierResults-574afdcc.js","assets/sortable.esm-9c3c89c5.js","assets/TierResults-ec2ba9f1.css"])},{path:"/graph",name:"graph",component:()=>Do(()=>import("./GraphView-10331c10.js"),["assets/GraphView-10331c10.js","assets/GraphView-4d995ba2.css"])},{path:"/tier",name:"tier",component:()=>Do(()=>import("./TierView-8f54cd73.js"),["assets/TierView-8f54cd73.js","assets/sortable.esm-9c3c89c5.js","assets/TierResults-ec2ba9f1.css"])},{path:"/profile",name:"profile",component:()=>Do(()=>import("./ProfileView-0741f5bc.js"),["assets/ProfileView-0741f5bc.js","assets/ProfileView-e6416bed.css"])}]});var Q={innerWidth(e){if(e){let t=e.offsetWidth,n=getComputedStyle(e);return t+=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),t}return 0},width(e){if(e){let t=e.offsetWidth,n=getComputedStyle(e);return t-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),t}return 0},getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)},getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)},getOuterWidth(e,t){if(e){let n=e.offsetWidth;if(t){let i=getComputedStyle(e);n+=parseFloat(i.marginLeft)+parseFloat(i.marginRight)}return n}return 0},getOuterHeight(e,t){if(e){let n=e.offsetHeight;if(t){let i=getComputedStyle(e);n+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return n}return 0},getClientHeight(e,t){if(e){let n=e.clientHeight;if(t){let i=getComputedStyle(e);n+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return n}return 0},getViewport(){let e=window,t=document,n=t.documentElement,i=t.getElementsByTagName("body")[0],s=e.innerWidth||n.clientWidth||i.clientWidth,r=e.innerHeight||n.clientHeight||i.clientHeight;return{width:s,height:r}},getOffset(e){if(e){let t=e.getBoundingClientRect();return{top:t.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:t.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}},index(e){if(e){let t=e.parentNode.childNodes,n=0;for(let i=0;i<t.length;i++){if(t[i]===e)return n;t[i].nodeType===1&&n++}}return-1},addMultipleClasses(e,t){if(e&&t)if(e.classList){let n=t.split(" ");for(let i=0;i<n.length;i++)e.classList.add(n[i])}else{let n=t.split(" ");for(let i=0;i<n.length;i++)e.className+=" "+n[i]}},addClass(e,t){e&&t&&(e.classList?e.classList.add(t):e.className+=" "+t)},removeClass(e,t){e&&t&&(e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," "))},hasClass(e,t){return e?e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className):!1},find(e,t){return this.isElement(e)?e.querySelectorAll(t):[]},findSingle(e,t){return this.isElement(e)?e.querySelector(t):null},getHeight(e){if(e){let t=e.offsetHeight,n=getComputedStyle(e);return t-=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)+parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth),t}return 0},getWidth(e){if(e){let t=e.offsetWidth,n=getComputedStyle(e);return t-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)+parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth),t}return 0},absolutePosition(e,t){if(e){let n=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),i=n.height,s=n.width,r=t.offsetHeight,o=t.offsetWidth,l=t.getBoundingClientRect(),a=this.getWindowScrollTop(),c=this.getWindowScrollLeft(),d=this.getViewport(),f,m;l.top+r+i>d.height?(f=l.top+a-i,e.style.transformOrigin="bottom",f<0&&(f=a)):(f=r+l.top+a,e.style.transformOrigin="top"),l.left+s>d.width?m=Math.max(0,l.left+c+o-s):m=l.left+c,e.style.top=f+"px",e.style.left=m+"px"}},relativePosition(e,t){if(e){let n=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e);const i=t.offsetHeight,s=t.getBoundingClientRect(),r=this.getViewport();let o,l;s.top+i+n.height>r.height?(o=-1*n.height,e.style.transformOrigin="bottom",s.top+o<0&&(o=-1*s.top)):(o=i,e.style.transformOrigin="top"),n.width>r.width?l=s.left*-1:s.left+n.width>r.width?l=(s.left+n.width-r.width)*-1:l=0,e.style.top=o+"px",e.style.left=l+"px"}},getParents(e,t=[]){return e.parentNode===null?t:this.getParents(e.parentNode,t.concat([e.parentNode]))},getScrollableParents(e){let t=[];if(e){let n=this.getParents(e);const i=/(auto|scroll)/,s=r=>{let o=window.getComputedStyle(r,null);return i.test(o.getPropertyValue("overflow"))||i.test(o.getPropertyValue("overflowX"))||i.test(o.getPropertyValue("overflowY"))};for(let r of n){let o=r.nodeType===1&&r.dataset.scrollselectors;if(o){let l=o.split(",");for(let a of l){let c=this.findSingle(r,a);c&&s(c)&&t.push(c)}}r.nodeType!==9&&s(r)&&t.push(r)}}return t},getHiddenElementOuterHeight(e){if(e){e.style.visibility="hidden",e.style.display="block";let t=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",t}return 0},getHiddenElementOuterWidth(e){if(e){e.style.visibility="hidden",e.style.display="block";let t=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",t}return 0},getHiddenElementDimensions(e){if(e){let t={};return e.style.visibility="hidden",e.style.display="block",t.width=e.offsetWidth,t.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",t}return 0},fadeIn(e,t){if(e){e.style.opacity=0;let n=+new Date,i=0,s=function(){i=+e.style.opacity+(new Date().getTime()-n)/t,e.style.opacity=i,n=+new Date,+i<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}},fadeOut(e,t){if(e){let n=1,i=50,s=t,r=i/s,o=setInterval(()=>{n-=r,n<=0&&(n=0,clearInterval(o)),e.style.opacity=n},i)}},getUserAgent(){return navigator.userAgent},appendChild(e,t){if(this.isElement(t))t.appendChild(e);else if(t.el&&t.elElement)t.elElement.appendChild(e);else throw new Error("Cannot append "+t+" to "+e)},isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"},scrollInView(e,t){let n=getComputedStyle(e).getPropertyValue("borderTopWidth"),i=n?parseFloat(n):0,s=getComputedStyle(e).getPropertyValue("paddingTop"),r=s?parseFloat(s):0,o=e.getBoundingClientRect(),a=t.getBoundingClientRect().top+document.body.scrollTop-(o.top+document.body.scrollTop)-i-r,c=e.scrollTop,d=e.clientHeight,f=this.getOuterHeight(t);a<0?e.scrollTop=c+a:a+f>d&&(e.scrollTop=c+a-d+f)},clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}},getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null},calculateScrollbarWidth(){if(this.calculatedScrollbarWidth!=null)return this.calculatedScrollbarWidth;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),this.calculatedScrollbarWidth=t,t},getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser},resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),t=/(chrome)[ ]([\w.]+)/.exec(e)||/(webkit)[ ]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ ]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},isVisible(e){return e&&e.offsetParent!=null},invokeElementMethod(e,t,n){e[t].apply(e,n)},isExist(e){return!!(e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode)},isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)},focus(e,t){e&&document.activeElement!==e&&e.focus(t)},isFocusableElement(e,t=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`):!1},getFocusableElements(e,t=""){let n=this.find(e,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`),i=[];for(let s of n)getComputedStyle(s).display!="none"&&getComputedStyle(s).visibility!="hidden"&&i.push(s);return i},getFirstFocusableElement(e,t){const n=this.getFocusableElements(e,t);return n.length>0?n[0]:null},getLastFocusableElement(e,t){const n=this.getFocusableElements(e,t);return n.length>0?n[n.length-1]:null},getNextFocusableElement(e,t,n){const i=this.getFocusableElements(e,n),s=i.length>0?i.findIndex(o=>o===t):-1,r=s>-1&&i.length>=s+1?s+1:-1;return r>-1?i[r]:null},isClickable(e){if(e){const t=e.nodeName,n=e.parentElement&&e.parentElement.nodeName;return t==="INPUT"||t==="TEXTAREA"||t==="BUTTON"||t==="A"||n==="INPUT"||n==="TEXTAREA"||n==="BUTTON"||n==="A"||!!e.closest(".p-button, .p-checkbox, .p-radiobutton")}return!1},applyStyle(e,t){if(typeof t=="string")e.style.cssText=t;else for(let n in t)e.style[n]=t[n]},isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream},isAndroid(){return/(android)/i.test(navigator.userAgent)},isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0},exportCSV(e,t){let n=new Blob([e],{type:"application/csv;charset=utf-8;"});if(window.navigator.msSaveOrOpenBlob)navigator.msSaveOrOpenBlob(n,t+".csv");else{let i=document.createElement("a");i.download!==void 0?(i.setAttribute("href",URL.createObjectURL(n)),i.setAttribute("download",t+".csv"),i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i)):(e="data:text/csv;charset=utf-8,"+e,window.open(encodeURI(e)))}}};class ES{constructor(t,n=()=>{}){this.element=t,this.listener=n}bindScrollListener(){this.scrollableParents=Q.getScrollableParents(this.element);for(let t=0;t<this.scrollableParents.length;t++)this.scrollableParents[t].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let t=0;t<this.scrollableParents.length;t++)this.scrollableParents[t].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}}function Jy(){const e=new Map;return{on(t,n){let i=e.get(t);i?i.push(n):i=[n],e.set(t,i)},off(t,n){let i=e.get(t);i&&i.splice(i.indexOf(n)>>>0,1)},emit(t,n){let i=e.get(t);i&&i.slice().map(s=>{s(n)})}}}var $e={equals(e,t,n){return n?this.resolveFieldData(e,n)===this.resolveFieldData(t,n):this.deepEquals(e,t)},deepEquals(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var n=Array.isArray(e),i=Array.isArray(t),s,r,o;if(n&&i){if(r=e.length,r!=t.length)return!1;for(s=r;s--!==0;)if(!this.deepEquals(e[s],t[s]))return!1;return!0}if(n!=i)return!1;var l=e instanceof Date,a=t instanceof Date;if(l!=a)return!1;if(l&&a)return e.getTime()==t.getTime();var c=e instanceof RegExp,d=t instanceof RegExp;if(c!=d)return!1;if(c&&d)return e.toString()==t.toString();var f=Object.keys(e);if(r=f.length,r!==Object.keys(t).length)return!1;for(s=r;s--!==0;)if(!Object.prototype.hasOwnProperty.call(t,f[s]))return!1;for(s=r;s--!==0;)if(o=f[s],!this.deepEquals(e[o],t[o]))return!1;return!0}return e!==e&&t!==t},resolveFieldData(e,t){if(e&&Object.keys(e).length&&t){if(this.isFunction(t))return t(e);if(t.indexOf(".")===-1)return e[t];{let s=t.split("."),r=e;for(var n=0,i=s.length;n<i;++n){if(r==null)return null;r=r[s[n]]}return r}}else return null},isFunction(e){return!!(e&&e.constructor&&e.call&&e.apply)},getItemValue(e,...t){return this.isFunction(e)?e(...t):e},filter(e,t,n){var i=[];if(e){for(let s of e)for(let r of t)if(String(this.resolveFieldData(s,r)).toLowerCase().indexOf(n.toLowerCase())>-1){i.push(s);break}}return i},reorderArray(e,t,n){e&&t!==n&&(n>=e.length&&(n%=e.length,t%=e.length),e.splice(n,0,e.splice(t,1)[0]))},findIndexInList(e,t){let n=-1;if(t){for(let i=0;i<t.length;i++)if(t[i]===e){n=i;break}}return n},contains(e,t){if(e!=null&&t&&t.length){for(let n of t)if(this.equals(e,n))return!0}return!1},insertIntoOrderedArray(e,t,n,i){if(n.length>0){let s=!1;for(let r=0;r<n.length;r++)if(this.findIndexInList(n[r],i)>t){n.splice(r,0,e),s=!0;break}s||n.push(e)}else n.push(e)},removeAccents(e){return e&&e.search(/[\xC0-\xFF]/g)>-1&&(e=e.replace(/[\xC0-\xC5]/g,"A").replace(/[\xC6]/g,"AE").replace(/[\xC7]/g,"C").replace(/[\xC8-\xCB]/g,"E").replace(/[\xCC-\xCF]/g,"I").replace(/[\xD0]/g,"D").replace(/[\xD1]/g,"N").replace(/[\xD2-\xD6\xD8]/g,"O").replace(/[\xD9-\xDC]/g,"U").replace(/[\xDD]/g,"Y").replace(/[\xDE]/g,"P").replace(/[\xE0-\xE5]/g,"a").replace(/[\xE6]/g,"ae").replace(/[\xE7]/g,"c").replace(/[\xE8-\xEB]/g,"e").replace(/[\xEC-\xEF]/g,"i").replace(/[\xF1]/g,"n").replace(/[\xF2-\xF6\xF8]/g,"o").replace(/[\xF9-\xFC]/g,"u").replace(/[\xFE]/g,"p").replace(/[\xFD\xFF]/g,"y")),e},getVNodeProp(e,t){let n=e.props;if(n){let i=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),s=Object.prototype.hasOwnProperty.call(n,i)?i:t;return e.type.props[t].type===Boolean&&n[s]===""?!0:n[s]}return null},convertToFlatCase(e){return this.isNotEmpty(e)?e.replace(/(-|_)/g,"").toLowerCase():e},isEmpty(e){return e==null||e===""||Array.isArray(e)&&e.length===0||!(e instanceof Date)&&typeof e=="object"&&Object.keys(e).length===0},isNotEmpty(e){return!this.isEmpty(e)},isPrintableCharacter(e=""){return this.isNotEmpty(e)&&e.length===1&&e.match(/\S| /)},findLast(e,t){let n;if(this.isNotEmpty(e))try{n=e.findLast(t)}catch{n=[...e].reverse().find(t)}return n},findLastIndex(e,t){let n=-1;if(this.isNotEmpty(e))try{n=e.findLastIndex(t)}catch{n=e.lastIndexOf([...e].reverse().find(t))}return n}},tm=0;function qi(e="pv_id_"){return tm++,`${e}${tm}`}function TS(){let e=[];const t=(o,l,a=999)=>{const c=s(o,l,a),d=c.value+(c.key===o?0:a)+1;return e.push({key:o,value:d}),d},n=o=>{e=e.filter(l=>l.value!==o)},i=(o,l)=>s(o,l).value,s=(o,l,a=0)=>[...e].reverse().find(c=>l?!0:c.key===o)||{key:o,value:a},r=o=>o&&parseInt(o.style.zIndex,10)||0;return{get:r,set:(o,l,a)=>{l&&(l.style.zIndex=String(t(o,!0,a)))},clear:o=>{o&&(n(r(o)),o.style.zIndex="")},getCurrent:o=>i(o,!0)}}var en=TS();const gt={STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",IN:"in",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",BETWEEN:"between",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter"},nm={ripple:!1,inputStyle:"outlined",locale:{startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",completed:"Completed",pending:"Pending",dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",today:"Today",weekHeader:"Wk",firstDayOfWeek:0,dateFormat:"mm/dd/yy",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyFilterMessage:"No results found",searchMessage:"{0} results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyMessage:"No available options",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left"}},filterMatchModeOptions:{text:[gt.STARTS_WITH,gt.CONTAINS,gt.NOT_CONTAINS,gt.ENDS_WITH,gt.EQUALS,gt.NOT_EQUALS],numeric:[gt.EQUALS,gt.NOT_EQUALS,gt.LESS_THAN,gt.LESS_THAN_OR_EQUAL_TO,gt.GREATER_THAN,gt.GREATER_THAN_OR_EQUAL_TO],date:[gt.DATE_IS,gt.DATE_IS_NOT,gt.DATE_BEFORE,gt.DATE_AFTER]},zIndex:{modal:1100,overlay:1e3,menu:1e3,tooltip:1100},pt:void 0},SS=Symbol();function AS(e,t,n,i){const s=document.getElementById(n),r=s.cloneNode(!0),o=s.getAttribute("href").replace(e,t);r.setAttribute("id",n+"-clone"),r.setAttribute("href",o),r.addEventListener("load",()=>{s.remove(),r.setAttribute("id",n),i&&i()}),s.parentNode&&s.parentNode.insertBefore(r,s.nextSibling)}var kS={install:(e,t)=>{let n=t?{...nm,...t}:{...nm};const i={config:xs(n),changeTheme:AS};e.config.globalProperties.$primevue=i,e.provide(SS,i)}};var ti=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Zy={exports:{}};/*!
* sweetalert2 v11.4.0
* Released under the MIT License.
*/(function(e,t){(function(n,i){e.exports=i()})(ti,function(){const n="SweetAlert2:",i=u=>{const h=[];for(let p=0;p<u.length;p++)h.indexOf(u[p])===-1&&h.push(u[p]);return h},s=u=>u.charAt(0).toUpperCase()+u.slice(1),r=u=>Array.prototype.slice.call(u),o=u=>{console.warn("".concat(n," ").concat(typeof u=="object"?u.join(" "):u))},l=u=>{console.error("".concat(n," ").concat(u))},a=[],c=u=>{a.includes(u)||(a.push(u),o(u))},d=(u,h)=>{c('"'.concat(u,'" is deprecated and will be removed in the next major release. Please use "').concat(h,'" instead.'))},f=u=>typeof u=="function"?u():u,m=u=>u&&typeof u.toPromise=="function",b=u=>m(u)?u.toPromise():Promise.resolve(u),C=u=>u&&Promise.resolve(u)===u,A={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},M=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],z={},j=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Y=u=>Object.prototype.hasOwnProperty.call(A,u),F=u=>M.indexOf(u)!==-1,oe=u=>z[u],pe=u=>{Y(u)||o('Unknown parameter "'.concat(u,'"'))},Re=u=>{j.includes(u)&&o('The parameter "'.concat(u,'" is incompatible with toasts'))},J=u=>{oe(u)&&d(u,oe(u))},me=u=>{!u.backdrop&&u.allowOutsideClick&&o('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const h in u)pe(h),u.toast&&Re(h),J(h)},_e="swal2-",Fe=u=>{const h={};for(const p in u)h[u[p]]=_e+u[p];return h},v=Fe(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),Pe=Fe(["success","warning","info","question","error"]),we=()=>document.body.querySelector(".".concat(v.container)),Ot=u=>{const h=we();return h?h.querySelector(u):null},ve=u=>Ot(".".concat(u)),X=()=>ve(v.popup),Ie=()=>ve(v.icon),Lt=()=>ve(v.title),Gt=()=>ve(v["html-container"]),Nt=()=>ve(v.image),ut=()=>ve(v["progress-steps"]),sn=()=>ve(v["validation-message"]),Dt=()=>Ot(".".concat(v.actions," .").concat(v.confirm)),S=()=>Ot(".".concat(v.actions," .").concat(v.deny)),W=()=>ve(v["input-label"]),B=()=>Ot(".".concat(v.loader)),G=()=>Ot(".".concat(v.actions," .").concat(v.cancel)),be=()=>ve(v.actions),Ue=()=>ve(v.footer),le=()=>ve(v["timer-progress-bar"]),g=()=>ve(v.close),_=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,w=()=>{const u=r(X().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((p,y)=>{const k=parseInt(p.getAttribute("tabindex")),ee=parseInt(y.getAttribute("tabindex"));return k>ee?1:k<ee?-1:0}),h=r(X().querySelectorAll(_)).filter(p=>p.getAttribute("tabindex")!=="-1");return i(u.concat(h)).filter(p=>St(p))},T=()=>!N(document.body,v["toast-shown"])&&!N(document.body,v["no-backdrop"]),R=()=>X()&&N(X(),v.toast),D=()=>X().hasAttribute("data-loading"),U={previousBodyPadding:null},x=(u,h)=>{if(u.textContent="",h){const y=new DOMParser().parseFromString(h,"text/html");r(y.querySelector("head").childNodes).forEach(k=>{u.appendChild(k)}),r(y.querySelector("body").childNodes).forEach(k=>{u.appendChild(k)})}},N=(u,h)=>{if(!h)return!1;const p=h.split(/\s+/);for(let y=0;y<p.length;y++)if(!u.classList.contains(p[y]))return!1;return!0},O=(u,h)=>{r(u.classList).forEach(p=>{!Object.values(v).includes(p)&&!Object.values(Pe).includes(p)&&!Object.values(h.showClass).includes(p)&&u.classList.remove(p)})},K=(u,h,p)=>{if(O(u,h),h.customClass&&h.customClass[p]){if(typeof h.customClass[p]!="string"&&!h.customClass[p].forEach)return o("Invalid type of customClass.".concat(p,'! Expected string or iterable object, got "').concat(typeof h.customClass[p],'"'));V(u,h.customClass[p])}},q=(u,h)=>{if(!h)return null;switch(h){case"select":case"textarea":case"file":return u.querySelector(".".concat(v.popup," > .").concat(v[h]));case"checkbox":return u.querySelector(".".concat(v.popup," > .").concat(v.checkbox," input"));case"radio":return u.querySelector(".".concat(v.popup," > .").concat(v.radio," input:checked"))||u.querySelector(".".concat(v.popup," > .").concat(v.radio," input:first-child"));case"range":return u.querySelector(".".concat(v.popup," > .").concat(v.range," input"));default:return u.querySelector(".".concat(v.popup," > .").concat(v.input))}},Z=u=>{if(u.focus(),u.type!=="file"){const h=u.value;u.value="",u.value=h}},ne=(u,h,p)=>{!u||!h||(typeof h=="string"&&(h=h.split(/\s+/).filter(Boolean)),h.forEach(y=>{Array.isArray(u)?u.forEach(k=>{p?k.classList.add(y):k.classList.remove(y)}):p?u.classList.add(y):u.classList.remove(y)}))},V=(u,h)=>{ne(u,h,!0)},ge=(u,h)=>{ne(u,h,!1)},ye=(u,h)=>{const p=r(u.childNodes);for(let y=0;y<p.length;y++)if(N(p[y],h))return p[y]},He=(u,h,p)=>{p==="".concat(parseInt(p))&&(p=parseInt(p)),p||parseInt(p)===0?u.style[h]=typeof p=="number"?"".concat(p,"px"):p:u.style.removeProperty(h)},Le=function(u){let h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";u.style.display=h},Xe=u=>{u.style.display="none"},js=(u,h,p,y)=>{const k=u.querySelector(h);k&&(k.style[p]=y)},gn=(u,h,p)=>{h?Le(u,p):Xe(u)},St=u=>!!(u&&(u.offsetWidth||u.offsetHeight||u.getClientRects().length)),At=()=>!St(Dt())&&!St(S())&&!St(G()),$t=u=>u.scrollHeight>u.clientHeight,Ks=u=>{const h=window.getComputedStyle(u),p=parseFloat(h.getPropertyValue("animation-duration")||"0"),y=parseFloat(h.getPropertyValue("transition-duration")||"0");return p>0||y>0},ga=function(u){let h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const p=le();St(p)&&(h&&(p.style.transition="none",p.style.width="100%"),setTimeout(()=>{p.style.transition="width ".concat(u/1e3,"s linear"),p.style.width="0%"},10))},T_=()=>{const u=le(),h=parseInt(window.getComputedStyle(u).width);u.style.removeProperty("transition"),u.style.width="100%";const p=parseInt(window.getComputedStyle(u).width),y=h/p*100;u.style.removeProperty("transition"),u.style.width="".concat(y,"%")},Kh=()=>typeof window>"u"||typeof document>"u",S_=100,se={},A_=()=>{se.previousActiveElement&&se.previousActiveElement.focus?(se.previousActiveElement.focus(),se.previousActiveElement=null):document.body&&document.body.focus()},k_=u=>new Promise(h=>{if(!u)return h();const p=window.scrollX,y=window.scrollY;se.restoreFocusTimeout=setTimeout(()=>{A_(),h()},S_),window.scrollTo(p,y)}),R_=`
 <div aria-labelledby="`.concat(v.title,'" aria-describedby="').concat(v["html-container"],'" class="').concat(v.popup,`" tabindex="-1">
   <button type="button" class="`).concat(v.close,`"></button>
   <ul class="`).concat(v["progress-steps"],`"></ul>
   <div class="`).concat(v.icon,`"></div>
   <img class="`).concat(v.image,`" />
   <h2 class="`).concat(v.title,'" id="').concat(v.title,`"></h2>
   <div class="`).concat(v["html-container"],'" id="').concat(v["html-container"],`"></div>
   <input class="`).concat(v.input,`" />
   <input type="file" class="`).concat(v.file,`" />
   <div class="`).concat(v.range,`">
     <input type="range" />
     <output></output>
   </div>
   <select class="`).concat(v.select,`"></select>
   <div class="`).concat(v.radio,`"></div>
   <label for="`).concat(v.checkbox,'" class="').concat(v.checkbox,`">
     <input type="checkbox" />
     <span class="`).concat(v.label,`"></span>
   </label>
   <textarea class="`).concat(v.textarea,`"></textarea>
   <div class="`).concat(v["validation-message"],'" id="').concat(v["validation-message"],`"></div>
   <div class="`).concat(v.actions,`">
     <div class="`).concat(v.loader,`"></div>
     <button type="button" class="`).concat(v.confirm,`"></button>
     <button type="button" class="`).concat(v.deny,`"></button>
     <button type="button" class="`).concat(v.cancel,`"></button>
   </div>
   <div class="`).concat(v.footer,`"></div>
   <div class="`).concat(v["timer-progress-bar-container"],`">
     <div class="`).concat(v["timer-progress-bar"],`"></div>
   </div>
 </div>
`).replace(/(^|\n)\s*/g,""),P_=()=>{const u=we();return u?(u.remove(),ge([document.documentElement,document.body],[v["no-backdrop"],v["toast-shown"],v["has-column"]]),!0):!1},bi=()=>{se.currentInstance.resetValidationMessage()},x_=()=>{const u=X(),h=ye(u,v.input),p=ye(u,v.file),y=u.querySelector(".".concat(v.range," input")),k=u.querySelector(".".concat(v.range," output")),ee=ye(u,v.select),it=u.querySelector(".".concat(v.checkbox," input")),Vt=ye(u,v.textarea);h.oninput=bi,p.onchange=bi,ee.onchange=bi,it.onchange=bi,Vt.oninput=bi,y.oninput=()=>{bi(),k.value=y.value},y.onchange=()=>{bi(),y.nextSibling.value=y.value}},O_=u=>typeof u=="string"?document.querySelector(u):u,L_=u=>{const h=X();h.setAttribute("role",u.toast?"alert":"dialog"),h.setAttribute("aria-live",u.toast?"polite":"assertive"),u.toast||h.setAttribute("aria-modal","true")},N_=u=>{window.getComputedStyle(u).direction==="rtl"&&V(we(),v.rtl)},D_=u=>{const h=P_();if(Kh()){l("SweetAlert2 requires document to initialize");return}const p=document.createElement("div");p.className=v.container,h&&V(p,v["no-transition"]),x(p,R_);const y=O_(u.target);y.appendChild(p),L_(u),N_(y),x_()},ya=(u,h)=>{u instanceof HTMLElement?h.appendChild(u):typeof u=="object"?M_(u,h):u&&x(h,u)},M_=(u,h)=>{u.jquery?F_(h,u):x(h,u.toString())},F_=(u,h)=>{if(u.textContent="",0 in h)for(let p=0;p in h;p++)u.appendChild(h[p].cloneNode(!0));else u.appendChild(h.cloneNode(!0))},qs=(()=>{if(Kh())return!1;const u=document.createElement("div"),h={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const p in h)if(Object.prototype.hasOwnProperty.call(h,p)&&typeof u.style[p]<"u")return h[p];return!1})(),B_=()=>{const u=document.createElement("div");u.className=v["scrollbar-measure"],document.body.appendChild(u);const h=u.getBoundingClientRect().width-u.clientWidth;return document.body.removeChild(u),h},U_=(u,h)=>{const p=be(),y=B();!h.showConfirmButton&&!h.showDenyButton&&!h.showCancelButton?Xe(p):Le(p),K(p,h,"actions"),H_(p,y,h),x(y,h.loaderHtml),K(y,h,"loader")};function H_(u,h,p){const y=Dt(),k=S(),ee=G();_a(y,"confirm",p),_a(k,"deny",p),_a(ee,"cancel",p),$_(y,k,ee,p),p.reverseButtons&&(p.toast?(u.insertBefore(ee,y),u.insertBefore(k,y)):(u.insertBefore(ee,h),u.insertBefore(k,h),u.insertBefore(y,h)))}function $_(u,h,p,y){if(!y.buttonsStyling)return ge([u,h,p],v.styled);V([u,h,p],v.styled),y.confirmButtonColor&&(u.style.backgroundColor=y.confirmButtonColor,V(u,v["default-outline"])),y.denyButtonColor&&(h.style.backgroundColor=y.denyButtonColor,V(h,v["default-outline"])),y.cancelButtonColor&&(p.style.backgroundColor=y.cancelButtonColor,V(p,v["default-outline"]))}function _a(u,h,p){gn(u,p["show".concat(s(h),"Button")],"inline-block"),x(u,p["".concat(h,"ButtonText")]),u.setAttribute("aria-label",p["".concat(h,"ButtonAriaLabel")]),u.className=v[h],K(u,p,"".concat(h,"Button")),V(u,p["".concat(h,"ButtonClass")])}function V_(u,h){typeof h=="string"?u.style.background=h:h||V([document.documentElement,document.body],v["no-backdrop"])}function z_(u,h){h in v?V(u,v[h]):(o('The "position" parameter is not valid, defaulting to "center"'),V(u,v.center))}function W_(u,h){if(h&&typeof h=="string"){const p="grow-".concat(h);p in v&&V(u,v[p])}}const j_=(u,h)=>{const p=we();p&&(V_(p,h.backdrop),z_(p,h.position),W_(p,h.grow),K(p,h,"container"))};var ce={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap};const K_=["input","file","range","select","radio","checkbox","textarea"],q_=(u,h)=>{const p=X(),y=ce.innerParams.get(u),k=!y||h.input!==y.input;K_.forEach(ee=>{const it=v[ee],Vt=ye(p,it);X_(ee,h.inputAttributes),Vt.className=it,k&&Xe(Vt)}),h.input&&(k&&G_(h),J_(h))},G_=u=>{if(!Mt[u.input])return l('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(u.input,'"'));const h=qh(u.input),p=Mt[u.input](h,u);Le(p),setTimeout(()=>{Z(p)})},Y_=u=>{for(let h=0;h<u.attributes.length;h++){const p=u.attributes[h].name;["type","value","style"].includes(p)||u.removeAttribute(p)}},X_=(u,h)=>{const p=q(X(),u);if(p){Y_(p);for(const y in h)p.setAttribute(y,h[y])}},J_=u=>{const h=qh(u.input);u.customClass&&V(h,u.customClass.input)},va=(u,h)=>{(!u.placeholder||h.inputPlaceholder)&&(u.placeholder=h.inputPlaceholder)},Gs=(u,h,p)=>{if(p.inputLabel){u.id=v.input;const y=document.createElement("label"),k=v["input-label"];y.setAttribute("for",u.id),y.className=k,V(y,p.customClass.inputLabel),y.innerText=p.inputLabel,h.insertAdjacentElement("beforebegin",y)}},qh=u=>{const h=v[u]?v[u]:v.input;return ye(X(),h)},Mt={};Mt.text=Mt.email=Mt.password=Mt.number=Mt.tel=Mt.url=(u,h)=>(typeof h.inputValue=="string"||typeof h.inputValue=="number"?u.value=h.inputValue:C(h.inputValue)||o('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof h.inputValue,'"')),Gs(u,u,h),va(u,h),u.type=h.input,u),Mt.file=(u,h)=>(Gs(u,u,h),va(u,h),u),Mt.range=(u,h)=>{const p=u.querySelector("input"),y=u.querySelector("output");return p.value=h.inputValue,p.type=h.input,y.value=h.inputValue,Gs(p,u,h),u},Mt.select=(u,h)=>{if(u.textContent="",h.inputPlaceholder){const p=document.createElement("option");x(p,h.inputPlaceholder),p.value="",p.disabled=!0,p.selected=!0,u.appendChild(p)}return Gs(u,u,h),u},Mt.radio=u=>(u.textContent="",u),Mt.checkbox=(u,h)=>{const p=q(X(),"checkbox");p.value="1",p.id=v.checkbox,p.checked=!!h.inputValue;const y=u.querySelector("span");return x(y,h.inputPlaceholder),u},Mt.textarea=(u,h)=>{u.value=h.inputValue,va(u,h),Gs(u,u,h);const p=y=>parseInt(window.getComputedStyle(y).marginLeft)+parseInt(window.getComputedStyle(y).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const y=parseInt(window.getComputedStyle(X()).width),k=()=>{const ee=u.offsetWidth+p(u);ee>y?X().style.width="".concat(ee,"px"):X().style.width=null};new MutationObserver(k).observe(u,{attributes:!0,attributeFilter:["style"]})}}),u};const Z_=(u,h)=>{const p=Gt();K(p,h,"htmlContainer"),h.html?(ya(h.html,p),Le(p,"block")):h.text?(p.textContent=h.text,Le(p,"block")):Xe(p),q_(u,h)},Q_=(u,h)=>{const p=Ue();gn(p,h.footer),h.footer&&ya(h.footer,p),K(p,h,"footer")},ev=(u,h)=>{const p=g();x(p,h.closeButtonHtml),K(p,h,"closeButton"),gn(p,h.showCloseButton),p.setAttribute("aria-label",h.closeButtonAriaLabel)},tv=(u,h)=>{const p=ce.innerParams.get(u),y=Ie();if(p&&h.icon===p.icon){Yh(y,h),Gh(y,h);return}if(!h.icon&&!h.iconHtml)return Xe(y);if(h.icon&&Object.keys(Pe).indexOf(h.icon)===-1)return l('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(h.icon,'"')),Xe(y);Le(y),Yh(y,h),Gh(y,h),V(y,h.showClass.icon)},Gh=(u,h)=>{for(const p in Pe)h.icon!==p&&ge(u,Pe[p]);V(u,Pe[h.icon]),rv(u,h),nv(),K(u,h,"icon")},nv=()=>{const u=X(),h=window.getComputedStyle(u).getPropertyValue("background-color"),p=u.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let y=0;y<p.length;y++)p[y].style.backgroundColor=h},iv=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,sv=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,Yh=(u,h)=>{u.textContent="",h.iconHtml?x(u,Xh(h.iconHtml)):h.icon==="success"?x(u,iv):h.icon==="error"?x(u,sv):x(u,Xh({question:"?",warning:"!",info:"i"}[h.icon]))},rv=(u,h)=>{if(h.iconColor){u.style.color=h.iconColor,u.style.borderColor=h.iconColor;for(const p of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])js(u,p,"backgroundColor",h.iconColor);js(u,".swal2-success-ring","borderColor",h.iconColor)}},Xh=u=>'<div class="'.concat(v["icon-content"],'">').concat(u,"</div>"),ov=(u,h)=>{const p=Nt();if(!h.imageUrl)return Xe(p);Le(p,""),p.setAttribute("src",h.imageUrl),p.setAttribute("alt",h.imageAlt),He(p,"width",h.imageWidth),He(p,"height",h.imageHeight),p.className=v.image,K(p,h,"image")},lv=u=>{const h=document.createElement("li");return V(h,v["progress-step"]),x(h,u),h},av=u=>{const h=document.createElement("li");return V(h,v["progress-step-line"]),u.progressStepsDistance&&(h.style.width=u.progressStepsDistance),h},cv=(u,h)=>{const p=ut();if(!h.progressSteps||h.progressSteps.length===0)return Xe(p);Le(p),p.textContent="",h.currentProgressStep>=h.progressSteps.length&&o("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),h.progressSteps.forEach((y,k)=>{const ee=lv(y);if(p.appendChild(ee),k===h.currentProgressStep&&V(ee,v["active-progress-step"]),k!==h.progressSteps.length-1){const it=av(h);p.appendChild(it)}})},uv=(u,h)=>{const p=Lt();gn(p,h.title||h.titleText,"block"),h.title&&ya(h.title,p),h.titleText&&(p.innerText=h.titleText),K(p,h,"title")},hv=(u,h)=>{const p=we(),y=X();h.toast?(He(p,"width",h.width),y.style.width="100%",y.insertBefore(B(),Ie())):He(y,"width",h.width),He(y,"padding",h.padding),h.color&&(y.style.color=h.color),h.background&&(y.style.background=h.background),Xe(sn()),dv(y,h)},dv=(u,h)=>{u.className="".concat(v.popup," ").concat(St(u)?h.showClass.popup:""),h.toast?(V([document.documentElement,document.body],v["toast-shown"]),V(u,v.toast)):V(u,v.modal),K(u,h,"popup"),typeof h.customClass=="string"&&V(u,h.customClass),h.icon&&V(u,v["icon-".concat(h.icon)])},Jh=(u,h)=>{hv(u,h),j_(u,h),cv(u,h),tv(u,h),ov(u,h),uv(u,h),ev(u,h),Z_(u,h),U_(u,h),Q_(u,h),typeof h.didRender=="function"&&h.didRender(X())},Ji=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),fv=()=>{r(document.body.children).forEach(h=>{h===we()||h.contains(we())||(h.hasAttribute("aria-hidden")&&h.setAttribute("data-previous-aria-hidden",h.getAttribute("aria-hidden")),h.setAttribute("aria-hidden","true"))})},Zh=()=>{r(document.body.children).forEach(h=>{h.hasAttribute("data-previous-aria-hidden")?(h.setAttribute("aria-hidden",h.getAttribute("data-previous-aria-hidden")),h.removeAttribute("data-previous-aria-hidden")):h.removeAttribute("aria-hidden")})},Qh=["swal-title","swal-html","swal-footer"],pv=u=>{const h=typeof u.template=="string"?document.querySelector(u.template):u.template;if(!h)return{};const p=h.content;return Cv(p),Object.assign(mv(p),gv(p),yv(p),_v(p),vv(p),bv(p,Qh))},mv=u=>{const h={};return r(u.querySelectorAll("swal-param")).forEach(p=>{Ci(p,["name","value"]);const y=p.getAttribute("name"),k=p.getAttribute("value");typeof A[y]=="boolean"&&k==="false"&&(h[y]=!1),typeof A[y]=="object"&&(h[y]=JSON.parse(k))}),h},gv=u=>{const h={};return r(u.querySelectorAll("swal-button")).forEach(p=>{Ci(p,["type","color","aria-label"]);const y=p.getAttribute("type");h["".concat(y,"ButtonText")]=p.innerHTML,h["show".concat(s(y),"Button")]=!0,p.hasAttribute("color")&&(h["".concat(y,"ButtonColor")]=p.getAttribute("color")),p.hasAttribute("aria-label")&&(h["".concat(y,"ButtonAriaLabel")]=p.getAttribute("aria-label"))}),h},yv=u=>{const h={},p=u.querySelector("swal-image");return p&&(Ci(p,["src","width","height","alt"]),p.hasAttribute("src")&&(h.imageUrl=p.getAttribute("src")),p.hasAttribute("width")&&(h.imageWidth=p.getAttribute("width")),p.hasAttribute("height")&&(h.imageHeight=p.getAttribute("height")),p.hasAttribute("alt")&&(h.imageAlt=p.getAttribute("alt"))),h},_v=u=>{const h={},p=u.querySelector("swal-icon");return p&&(Ci(p,["type","color"]),p.hasAttribute("type")&&(h.icon=p.getAttribute("type")),p.hasAttribute("color")&&(h.iconColor=p.getAttribute("color")),h.iconHtml=p.innerHTML),h},vv=u=>{const h={},p=u.querySelector("swal-input");p&&(Ci(p,["type","label","placeholder","value"]),h.input=p.getAttribute("type")||"text",p.hasAttribute("label")&&(h.inputLabel=p.getAttribute("label")),p.hasAttribute("placeholder")&&(h.inputPlaceholder=p.getAttribute("placeholder")),p.hasAttribute("value")&&(h.inputValue=p.getAttribute("value")));const y=u.querySelectorAll("swal-input-option");return y.length&&(h.inputOptions={},r(y).forEach(k=>{Ci(k,["value"]);const ee=k.getAttribute("value"),it=k.innerHTML;h.inputOptions[ee]=it})),h},bv=(u,h)=>{const p={};for(const y in h){const k=h[y],ee=u.querySelector(k);ee&&(Ci(ee,[]),p[k.replace(/^swal-/,"")]=ee.innerHTML.trim())}return p},Cv=u=>{const h=Qh.concat(["swal-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);r(u.children).forEach(p=>{const y=p.tagName.toLowerCase();h.indexOf(y)===-1&&o("Unrecognized element <".concat(y,">"))})},Ci=(u,h)=>{r(u.attributes).forEach(p=>{h.indexOf(p.name)===-1&&o(['Unrecognized attribute "'.concat(p.name,'" on <').concat(u.tagName.toLowerCase(),">."),"".concat(h.length?"Allowed attributes are: ".concat(h.join(", ")):"To set the value, use HTML within the element.")])})};var ed={email:(u,h)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(u)?Promise.resolve():Promise.resolve(h||"Invalid email address"),url:(u,h)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(u)?Promise.resolve():Promise.resolve(h||"Invalid URL")};function wv(u){u.inputValidator||Object.keys(ed).forEach(h=>{u.input===h&&(u.inputValidator=ed[h])})}function Iv(u){(!u.target||typeof u.target=="string"&&!document.querySelector(u.target)||typeof u.target!="string"&&!u.target.appendChild)&&(o('Target parameter is not valid, defaulting to "body"'),u.target="body")}function Ev(u){wv(u),u.showLoaderOnConfirm&&!u.preConfirm&&o(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Iv(u),typeof u.title=="string"&&(u.title=u.title.split(`
`).join("<br />")),D_(u)}class Tv{constructor(h,p){this.callback=h,this.remaining=p,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(h){const p=this.running;return p&&this.stop(),this.remaining+=h,p&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Sv=()=>{U.previousBodyPadding===null&&document.body.scrollHeight>window.innerHeight&&(U.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(U.previousBodyPadding+B_(),"px"))},Av=()=>{U.previousBodyPadding!==null&&(document.body.style.paddingRight="".concat(U.previousBodyPadding,"px"),U.previousBodyPadding=null)},kv=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!N(document.body,v.iosfix)){const h=document.body.scrollTop;document.body.style.top="".concat(h*-1,"px"),V(document.body,v.iosfix),Pv(),Rv()}},Rv=()=>{const u=navigator.userAgent,h=!!u.match(/iPad/i)||!!u.match(/iPhone/i),p=!!u.match(/WebKit/i);h&&p&&!u.match(/CriOS/i)&&X().scrollHeight>window.innerHeight-44&&(we().style.paddingBottom="".concat(44,"px"))},Pv=()=>{const u=we();let h;u.ontouchstart=p=>{h=xv(p)},u.ontouchmove=p=>{h&&(p.preventDefault(),p.stopPropagation())}},xv=u=>{const h=u.target,p=we();return Ov(u)||Lv(u)?!1:h===p||!$t(p)&&h.tagName!=="INPUT"&&h.tagName!=="TEXTAREA"&&!($t(Gt())&&Gt().contains(h))},Ov=u=>u.touches&&u.touches.length&&u.touches[0].touchType==="stylus",Lv=u=>u.touches&&u.touches.length>1,Nv=()=>{if(N(document.body,v.iosfix)){const u=parseInt(document.body.style.top,10);ge(document.body,v.iosfix),document.body.style.top="",document.body.scrollTop=u*-1}},td=10,Dv=u=>{const h=we(),p=X();typeof u.willOpen=="function"&&u.willOpen(p);const k=window.getComputedStyle(document.body).overflowY;Bv(h,p,u),setTimeout(()=>{Mv(h,p)},td),T()&&(Fv(h,u.scrollbarPadding,k),fv()),!R()&&!se.previousActiveElement&&(se.previousActiveElement=document.activeElement),typeof u.didOpen=="function"&&setTimeout(()=>u.didOpen(p)),ge(h,v["no-transition"])},nd=u=>{const h=X();if(u.target!==h)return;const p=we();h.removeEventListener(qs,nd),p.style.overflowY="auto"},Mv=(u,h)=>{qs&&Ks(h)?(u.style.overflowY="hidden",h.addEventListener(qs,nd)):u.style.overflowY="auto"},Fv=(u,h,p)=>{kv(),h&&p!=="hidden"&&Sv(),setTimeout(()=>{u.scrollTop=0})},Bv=(u,h,p)=>{V(u,p.showClass.backdrop),h.style.setProperty("opacity","0","important"),Le(h,"grid"),setTimeout(()=>{V(h,p.showClass.popup),h.style.removeProperty("opacity")},td),V([document.documentElement,document.body],v.shown),p.heightAuto&&p.backdrop&&!p.toast&&V([document.documentElement,document.body],v["height-auto"])},Zi=u=>{let h=X();h||new go,h=X();const p=B();R()?Xe(Ie()):Uv(h,u),Le(p),h.setAttribute("data-loading",!0),h.setAttribute("aria-busy",!0),h.focus()},Uv=(u,h)=>{const p=be(),y=B();!h&&St(Dt())&&(h=Dt()),Le(p),h&&(Xe(h),y.setAttribute("data-button-to-replace",h.className)),y.parentNode.insertBefore(y,h),V([u,p],v.loading)},Hv=(u,h)=>{h.input==="select"||h.input==="radio"?jv(u,h):["text","email","number","tel","textarea"].includes(h.input)&&(m(h.inputValue)||C(h.inputValue))&&(Zi(Dt()),Kv(u,h))},$v=(u,h)=>{const p=u.getInput();if(!p)return null;switch(h.input){case"checkbox":return Vv(p);case"radio":return zv(p);case"file":return Wv(p);default:return h.inputAutoTrim?p.value.trim():p.value}},Vv=u=>u.checked?1:0,zv=u=>u.checked?u.value:null,Wv=u=>u.files.length?u.getAttribute("multiple")!==null?u.files:u.files[0]:null,jv=(u,h)=>{const p=X(),y=k=>qv[h.input](p,ba(k),h);m(h.inputOptions)||C(h.inputOptions)?(Zi(Dt()),b(h.inputOptions).then(k=>{u.hideLoading(),y(k)})):typeof h.inputOptions=="object"?y(h.inputOptions):l("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof h.inputOptions))},Kv=(u,h)=>{const p=u.getInput();Xe(p),b(h.inputValue).then(y=>{p.value=h.input==="number"?parseFloat(y)||0:"".concat(y),Le(p),p.focus(),u.hideLoading()}).catch(y=>{l("Error in inputValue promise: ".concat(y)),p.value="",Le(p),p.focus(),u.hideLoading()})},qv={select:(u,h,p)=>{const y=ye(u,v.select),k=(ee,it,Vt)=>{const kt=document.createElement("option");kt.value=Vt,x(kt,it),kt.selected=id(Vt,p.inputValue),ee.appendChild(kt)};h.forEach(ee=>{const it=ee[0],Vt=ee[1];if(Array.isArray(Vt)){const kt=document.createElement("optgroup");kt.label=it,kt.disabled=!1,y.appendChild(kt),Vt.forEach(es=>k(kt,es[1],es[0]))}else k(y,Vt,it)}),y.focus()},radio:(u,h,p)=>{const y=ye(u,v.radio);h.forEach(ee=>{const it=ee[0],Vt=ee[1],kt=document.createElement("input"),es=document.createElement("label");kt.type="radio",kt.name=v.radio,kt.value=it,id(it,p.inputValue)&&(kt.checked=!0);const Aa=document.createElement("span");x(Aa,Vt),Aa.className=v.label,es.appendChild(kt),es.appendChild(Aa),y.appendChild(es)});const k=y.querySelectorAll("input");k.length&&k[0].focus()}},ba=u=>{const h=[];return typeof Map<"u"&&u instanceof Map?u.forEach((p,y)=>{let k=p;typeof k=="object"&&(k=ba(k)),h.push([y,k])}):Object.keys(u).forEach(p=>{let y=u[p];typeof y=="object"&&(y=ba(y)),h.push([p,y])}),h},id=(u,h)=>h&&h.toString()===u.toString(),Gv=u=>{const h=ce.innerParams.get(u);u.disableButtons(),h.input?sd(u,"confirm"):wa(u,!0)},Yv=u=>{const h=ce.innerParams.get(u);u.disableButtons(),h.returnInputValueOnDeny?sd(u,"deny"):Ca(u,!1)},Xv=(u,h)=>{u.disableButtons(),h(Ji.cancel)},sd=(u,h)=>{const p=ce.innerParams.get(u);if(!p.input)return l('The "input" parameter is needed to be set when using returnInputValueOn'.concat(s(h)));const y=$v(u,p);p.inputValidator?Jv(u,y,h):u.getInput().checkValidity()?h==="deny"?Ca(u,y):wa(u,y):(u.enableButtons(),u.showValidationMessage(p.validationMessage))},Jv=(u,h,p)=>{const y=ce.innerParams.get(u);u.disableInput(),Promise.resolve().then(()=>b(y.inputValidator(h,y.validationMessage))).then(ee=>{u.enableButtons(),u.enableInput(),ee?u.showValidationMessage(ee):p==="deny"?Ca(u,h):wa(u,h)})},Ca=(u,h)=>{const p=ce.innerParams.get(u||void 0);p.showLoaderOnDeny&&Zi(S()),p.preDeny?(ce.awaitingPromise.set(u||void 0,!0),Promise.resolve().then(()=>b(p.preDeny(h,p.validationMessage))).then(k=>{k===!1?u.hideLoading():u.closePopup({isDenied:!0,value:typeof k>"u"?h:k})}).catch(k=>od(u||void 0,k))):u.closePopup({isDenied:!0,value:h})},rd=(u,h)=>{u.closePopup({isConfirmed:!0,value:h})},od=(u,h)=>{u.rejectPromise(h)},wa=(u,h)=>{const p=ce.innerParams.get(u||void 0);p.showLoaderOnConfirm&&Zi(),p.preConfirm?(u.resetValidationMessage(),ce.awaitingPromise.set(u||void 0,!0),Promise.resolve().then(()=>b(p.preConfirm(h,p.validationMessage))).then(k=>{St(sn())||k===!1?u.hideLoading():rd(u,typeof k>"u"?h:k)}).catch(k=>od(u||void 0,k))):rd(u,h)},Zv=(u,h,p)=>{ce.innerParams.get(u).toast?Qv(u,h,p):(tb(h),nb(h),ib(u,h,p))},Qv=(u,h,p)=>{h.popup.onclick=()=>{const y=ce.innerParams.get(u);y&&(eb(y)||y.timer||y.input)||p(Ji.close)}},eb=u=>u.showConfirmButton||u.showDenyButton||u.showCancelButton||u.showCloseButton;let po=!1;const tb=u=>{u.popup.onmousedown=()=>{u.container.onmouseup=function(h){u.container.onmouseup=void 0,h.target===u.container&&(po=!0)}}},nb=u=>{u.container.onmousedown=()=>{u.popup.onmouseup=function(h){u.popup.onmouseup=void 0,(h.target===u.popup||u.popup.contains(h.target))&&(po=!0)}}},ib=(u,h,p)=>{h.container.onclick=y=>{const k=ce.innerParams.get(u);if(po){po=!1;return}y.target===h.container&&f(k.allowOutsideClick)&&p(Ji.backdrop)}},sb=()=>St(X()),ld=()=>Dt()&&Dt().click(),rb=()=>S()&&S().click(),ob=()=>G()&&G().click(),lb=(u,h,p,y)=>{h.keydownTarget&&h.keydownHandlerAdded&&(h.keydownTarget.removeEventListener("keydown",h.keydownHandler,{capture:h.keydownListenerCapture}),h.keydownHandlerAdded=!1),p.toast||(h.keydownHandler=k=>cb(u,k,y),h.keydownTarget=p.keydownListenerCapture?window:X(),h.keydownListenerCapture=p.keydownListenerCapture,h.keydownTarget.addEventListener("keydown",h.keydownHandler,{capture:h.keydownListenerCapture}),h.keydownHandlerAdded=!0)},Ia=(u,h,p)=>{const y=w();if(y.length)return h=h+p,h===y.length?h=0:h===-1&&(h=y.length-1),y[h].focus();X().focus()},ad=["ArrowRight","ArrowDown"],ab=["ArrowLeft","ArrowUp"],cb=(u,h,p)=>{const y=ce.innerParams.get(u);y&&(y.stopKeydownPropagation&&h.stopPropagation(),h.key==="Enter"?ub(u,h,y):h.key==="Tab"?hb(h,y):[...ad,...ab].includes(h.key)?db(h.key):h.key==="Escape"&&fb(h,y,p))},ub=(u,h,p)=>{if(!(!f(p.allowEnterKey)||h.isComposing)&&h.target&&u.getInput()&&h.target.outerHTML===u.getInput().outerHTML){if(["textarea","file"].includes(p.input))return;ld(),h.preventDefault()}},hb=(u,h)=>{const p=u.target,y=w();let k=-1;for(let ee=0;ee<y.length;ee++)if(p===y[ee]){k=ee;break}u.shiftKey?Ia(h,k,-1):Ia(h,k,1),u.stopPropagation(),u.preventDefault()},db=u=>{const h=Dt(),p=S(),y=G();if(![h,p,y].includes(document.activeElement))return;const k=ad.includes(u)?"nextElementSibling":"previousElementSibling",ee=document.activeElement[k];ee instanceof HTMLElement&&ee.focus()},fb=(u,h,p)=>{f(h.allowEscapeKey)&&(u.preventDefault(),p(Ji.esc))},pb=u=>typeof u=="object"&&u.jquery,cd=u=>u instanceof Element||pb(u),mb=u=>{const h={};return typeof u[0]=="object"&&!cd(u[0])?Object.assign(h,u[0]):["title","html","icon"].forEach((p,y)=>{const k=u[y];typeof k=="string"||cd(k)?h[p]=k:k!==void 0&&l("Unexpected type of ".concat(p,'! Expected "string" or "Element", got ').concat(typeof k))}),h};function gb(){const u=this;for(var h=arguments.length,p=new Array(h),y=0;y<h;y++)p[y]=arguments[y];return new u(...p)}function yb(u){class h extends this{_main(y,k){return super._main(y,Object.assign({},u,k))}}return h}const _b=()=>se.timeout&&se.timeout.getTimerLeft(),ud=()=>{if(se.timeout)return T_(),se.timeout.stop()},hd=()=>{if(se.timeout){const u=se.timeout.start();return ga(u),u}},vb=()=>{const u=se.timeout;return u&&(u.running?ud():hd())},bb=u=>{if(se.timeout){const h=se.timeout.increase(u);return ga(h,!0),h}},Cb=()=>se.timeout&&se.timeout.isRunning();let dd=!1;const Ea={};function wb(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";Ea[u]=this,dd||(document.body.addEventListener("click",Ib),dd=!0)}const Ib=u=>{for(let h=u.target;h&&h!==document;h=h.parentNode)for(const p in Ea){const y=h.getAttribute(p);if(y){Ea[p].fire({template:y});return}}};var Eb=Object.freeze({isValidParameter:Y,isUpdatableParameter:F,isDeprecatedParameter:oe,argsToParams:mb,isVisible:sb,clickConfirm:ld,clickDeny:rb,clickCancel:ob,getContainer:we,getPopup:X,getTitle:Lt,getHtmlContainer:Gt,getImage:Nt,getIcon:Ie,getInputLabel:W,getCloseButton:g,getActions:be,getConfirmButton:Dt,getDenyButton:S,getCancelButton:G,getLoader:B,getFooter:Ue,getTimerProgressBar:le,getFocusableElements:w,getValidationMessage:sn,isLoading:D,fire:gb,mixin:yb,showLoading:Zi,enableLoading:Zi,getTimerLeft:_b,stopTimer:ud,resumeTimer:hd,toggleTimer:vb,increaseTimer:bb,isTimerRunning:Cb,bindClickHandler:wb});function fd(){const u=ce.innerParams.get(this);if(!u)return;const h=ce.domCache.get(this);Xe(h.loader),R()?u.icon&&Le(Ie()):Tb(h),ge([h.popup,h.actions],v.loading),h.popup.removeAttribute("aria-busy"),h.popup.removeAttribute("data-loading"),h.confirmButton.disabled=!1,h.denyButton.disabled=!1,h.cancelButton.disabled=!1}const Tb=u=>{const h=u.popup.getElementsByClassName(u.loader.getAttribute("data-button-to-replace"));h.length?Le(h[0],"inline-block"):At()&&Xe(u.actions)};function Sb(u){const h=ce.innerParams.get(u||this),p=ce.domCache.get(u||this);return p?q(p.popup,h.input):null}var Ys={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};function pd(u,h,p,y){R()?gd(u,y):(k_(p).then(()=>gd(u,y)),se.keydownTarget.removeEventListener("keydown",se.keydownHandler,{capture:se.keydownListenerCapture}),se.keydownHandlerAdded=!1),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(h.setAttribute("style","display:none !important"),h.removeAttribute("class"),h.innerHTML=""):h.remove(),T()&&(Av(),Nv(),Zh()),Ab()}function Ab(){ge([document.documentElement,document.body],[v.shown,v["height-auto"],v["no-backdrop"],v["toast-shown"]])}function mo(u){u=xb(u);const h=Ys.swalPromiseResolve.get(this),p=Rb(this);this.isAwaitingPromise()?u.isDismissed||(md(this),h(u)):p&&h(u)}function kb(){return!!ce.awaitingPromise.get(this)}const Rb=u=>{const h=X();if(!h)return!1;const p=ce.innerParams.get(u);if(!p||N(h,p.hideClass.popup))return!1;ge(h,p.showClass.popup),V(h,p.hideClass.popup);const y=we();return ge(y,p.showClass.backdrop),V(y,p.hideClass.backdrop),Ob(u,h,p),!0};function Pb(u){const h=Ys.swalPromiseReject.get(this);md(this),h&&h(u)}const md=u=>{u.isAwaitingPromise()&&(ce.awaitingPromise.delete(u),ce.innerParams.get(u)||u._destroy())},xb=u=>typeof u>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},u),Ob=(u,h,p)=>{const y=we(),k=qs&&Ks(h);typeof p.willClose=="function"&&p.willClose(h),k?Lb(u,h,y,p.returnFocus,p.didClose):pd(u,y,p.returnFocus,p.didClose)},Lb=(u,h,p,y,k)=>{se.swalCloseEventFinishedCallback=pd.bind(null,u,p,y,k),h.addEventListener(qs,function(ee){ee.target===h&&(se.swalCloseEventFinishedCallback(),delete se.swalCloseEventFinishedCallback)})},gd=(u,h)=>{setTimeout(()=>{typeof h=="function"&&h.bind(u.params)(),u._destroy()})};function yd(u,h,p){const y=ce.domCache.get(u);h.forEach(k=>{y[k].disabled=p})}function _d(u,h){if(!u)return!1;if(u.type==="radio"){const y=u.parentNode.parentNode.querySelectorAll("input");for(let k=0;k<y.length;k++)y[k].disabled=h}else u.disabled=h}function Nb(){yd(this,["confirmButton","denyButton","cancelButton"],!1)}function Db(){yd(this,["confirmButton","denyButton","cancelButton"],!0)}function Mb(){return _d(this.getInput(),!1)}function Fb(){return _d(this.getInput(),!0)}function Bb(u){const h=ce.domCache.get(this),p=ce.innerParams.get(this);x(h.validationMessage,u),h.validationMessage.className=v["validation-message"],p.customClass&&p.customClass.validationMessage&&V(h.validationMessage,p.customClass.validationMessage),Le(h.validationMessage);const y=this.getInput();y&&(y.setAttribute("aria-invalid",!0),y.setAttribute("aria-describedby",v["validation-message"]),Z(y),V(y,v.inputerror))}function Ub(){const u=ce.domCache.get(this);u.validationMessage&&Xe(u.validationMessage);const h=this.getInput();h&&(h.removeAttribute("aria-invalid"),h.removeAttribute("aria-describedby"),ge(h,v.inputerror))}function Hb(){return ce.domCache.get(this).progressSteps}function $b(u){const h=X(),p=ce.innerParams.get(this);if(!h||N(h,p.hideClass.popup))return o("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");const y=Vb(u),k=Object.assign({},p,y);Jh(this,k),ce.innerParams.set(this,k),Object.defineProperties(this,{params:{value:Object.assign({},this.params,u),writable:!1,enumerable:!0}})}const Vb=u=>{const h={};return Object.keys(u).forEach(p=>{F(p)?h[p]=u[p]:o('Invalid parameter to update: "'.concat(p,`". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js

If you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md`))}),h};function zb(){const u=ce.domCache.get(this),h=ce.innerParams.get(this);if(!h){vd(this);return}u.popup&&se.swalCloseEventFinishedCallback&&(se.swalCloseEventFinishedCallback(),delete se.swalCloseEventFinishedCallback),se.deferDisposalTimer&&(clearTimeout(se.deferDisposalTimer),delete se.deferDisposalTimer),typeof h.didDestroy=="function"&&h.didDestroy(),Wb(this)}const Wb=u=>{vd(u),delete u.params,delete se.keydownHandler,delete se.keydownTarget,delete se.currentInstance},vd=u=>{u.isAwaitingPromise()?(Ta(ce,u),ce.awaitingPromise.set(u,!0)):(Ta(Ys,u),Ta(ce,u))},Ta=(u,h)=>{for(const p in u)u[p].delete(h)};var bd=Object.freeze({hideLoading:fd,disableLoading:fd,getInput:Sb,close:mo,isAwaitingPromise:kb,rejectPromise:Pb,closePopup:mo,closeModal:mo,closeToast:mo,enableButtons:Nb,disableButtons:Db,enableInput:Mb,disableInput:Fb,showValidationMessage:Bb,resetValidationMessage:Ub,getProgressSteps:Hb,update:$b,_destroy:zb});let Sa;class Qi{constructor(){if(typeof window>"u")return;Sa=this;for(var h=arguments.length,p=new Array(h),y=0;y<h;y++)p[y]=arguments[y];const k=Object.freeze(this.constructor.argsToParams(p));Object.defineProperties(this,{params:{value:k,writable:!1,enumerable:!0,configurable:!0}});const ee=this._main(this.params);ce.promise.set(this,ee)}_main(h){let p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};me(Object.assign({},p,h)),se.currentInstance&&(se.currentInstance._destroy(),T()&&Zh()),se.currentInstance=this;const y=Kb(h,p);Ev(y),Object.freeze(y),se.timeout&&(se.timeout.stop(),delete se.timeout),clearTimeout(se.restoreFocusTimeout);const k=qb(this);return Jh(this,y),ce.innerParams.set(this,y),jb(this,k,y)}then(h){return ce.promise.get(this).then(h)}finally(h){return ce.promise.get(this).finally(h)}}const jb=(u,h,p)=>new Promise((y,k)=>{const ee=it=>{u.closePopup({isDismissed:!0,dismiss:it})};Ys.swalPromiseResolve.set(u,y),Ys.swalPromiseReject.set(u,k),h.confirmButton.onclick=()=>Gv(u),h.denyButton.onclick=()=>Yv(u),h.cancelButton.onclick=()=>Xv(u,ee),h.closeButton.onclick=()=>ee(Ji.close),Zv(u,h,ee),lb(u,se,p,ee),Hv(u,p),Dv(p),Gb(se,p,ee),Yb(h,p),setTimeout(()=>{h.container.scrollTop=0})}),Kb=(u,h)=>{const p=pv(u),y=Object.assign({},A,h,p,u);return y.showClass=Object.assign({},A.showClass,y.showClass),y.hideClass=Object.assign({},A.hideClass,y.hideClass),y},qb=u=>{const h={popup:X(),container:we(),actions:be(),confirmButton:Dt(),denyButton:S(),cancelButton:G(),loader:B(),closeButton:g(),validationMessage:sn(),progressSteps:ut()};return ce.domCache.set(u,h),h},Gb=(u,h,p)=>{const y=le();Xe(y),h.timer&&(u.timeout=new Tv(()=>{p("timer"),delete u.timeout},h.timer),h.timerProgressBar&&(Le(y),K(y,h,"timerProgressBar"),setTimeout(()=>{u.timeout&&u.timeout.running&&ga(h.timer)})))},Yb=(u,h)=>{if(!h.toast){if(!f(h.allowEnterKey))return Jb();Xb(u,h)||Ia(h,-1,1)}},Xb=(u,h)=>h.focusDeny&&St(u.denyButton)?(u.denyButton.focus(),!0):h.focusCancel&&St(u.cancelButton)?(u.cancelButton.focus(),!0):h.focusConfirm&&St(u.confirmButton)?(u.confirmButton.focus(),!0):!1,Jb=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};Object.assign(Qi.prototype,bd),Object.assign(Qi,Eb),Object.keys(bd).forEach(u=>{Qi[u]=function(){if(Sa)return Sa[u](...arguments)}}),Qi.DismissReason=Ji,Qi.version="11.4.0";const go=Qi;return go.default=go,go}),typeof ti<"u"&&ti.Sweetalert2&&(ti.swal=ti.sweetAlert=ti.Swal=ti.SweetAlert=ti.Sweetalert2)})(Zy);var Mo=Zy.exports;class RS{static install(t,n={}){var i;const s=Mo.mixin(n),r=function(...o){return s.fire.call(s,...o)};Object.assign(r,Mo),Object.keys(Mo).filter(o=>typeof Mo[o]=="function").forEach(o=>{r[o]=s[o].bind(s)}),(i=t.config)!=null&&i.globalProperties&&!t.config.globalProperties.$swal?(t.config.globalProperties.$swal=r,t.provide("$swal",r)):Object.prototype.hasOwnProperty.call(t,"$swal")||(t.prototype.$swal=r,t.swal=r)}}var Tt={name:"BaseComponent",props:{pt:{type:Object,default:void 0}},methods:{getOption(e={},t=""){const n=$e.convertToFlatCase(t);return e[Object.keys(e).find(i=>$e.convertToFlatCase(i)===n)||""]},getPTValue(e={},t="",n={}){const i=$e.getItemValue(this.getOption(e,t),n),s=$e.getItemValue(this.getOption(this.defaultPT,t),n);return E(i,s)},ptm(e="",t={}){return this.getPTValue(this.pt,e,{props:this.$props,state:this.$data,...t})},ptmo(e={},t="",n={}){return this.getPTValue(e,t,n)}},computed:{defaultPT(){return $e.getItemValue(this.getOption(this.$primevue.config.pt,this.$.type.name),this.defaultsParams)},defaultsParams(){return{instance:this.$}}}},Wh={name:"InputText",extends:Tt,emits:["update:modelValue"],props:{modelValue:null},methods:{onInput(e){this.$emit("update:modelValue",e.target.value)}},computed:{filled(){return this.modelValue!=null&&this.modelValue.toString().length>0}}};const PS=["value"];function xS(e,t,n,i,s,r){return I(),L("input",E({class:["p-inputtext p-component",{"p-filled":r.filled}],value:n.modelValue,onInput:t[0]||(t[0]=(...o)=>r.onInput&&r.onInput(...o))},e.ptm("root")),null,16,PS)}Wh.render=xS;var pa={name:"Portal",props:{appendTo:{type:String,default:"body"},disabled:{type:Boolean,default:!1}},data(){return{mounted:!1}},mounted(){this.mounted=Q.isClient()},computed:{inline(){return this.disabled||this.appendTo==="self"}}};function OS(e,t,n,i,s,r){return r.inline?he(e.$slots,"default",{key:0}):s.mounted?(I(),ue(F2,{key:1,to:n.appendTo},[he(e.$slots,"default")],8,["to"])):de("",!0)}pa.render=OS;var Mn=Jy(),xt={name:"BaseIcon",props:{label:{type:String,default:void 0},spin:{type:Boolean,default:!1}},methods:{pti(){const e=$e.isEmpty(this.label);return{class:["p-icon",{"p-icon-spin":this.spin}],role:e?void 0:"img","aria-label":e?void 0:this.label,"aria-hidden":e}}}};function LS(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",n==="top"&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}var NS=`
.p-icon {
    display: inline-block;
}
.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}
@-webkit-keyframes p-icon-spin {
0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
}
100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
}
}
@keyframes p-icon-spin {
0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
}
100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
}
}
`;LS(NS);var zr={name:"CheckIcon",extends:xt};const DS=P("path",{d:"M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z",fill:"currentColor"},null,-1),MS=[DS];function FS(e,t,n,i,s,r){return I(),L("svg",E({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),MS,16)}zr.render=FS;var Wr={name:"ExclamationTriangleIcon",extends:xt};const BS=H2('<g clip-path="url(#clip0_323_12417)"><path d="M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z" fill="currentColor"></path><path d="M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z" fill="currentColor"></path><path d="M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z" fill="currentColor"></path></g><defs><clipPath id="clip0_323_12417"><rect width="14" height="14" fill="white"></rect></clipPath></defs>',2),US=[BS];function HS(e,t,n,i,s,r){return I(),L("svg",E({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),US,16)}Wr.render=HS;var jr={name:"InfoCircleIcon",extends:xt};const $S=P("g",{"clip-path":"url(#clip0_408_21102)"},[P("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z",fill:"currentColor"})],-1),VS=P("defs",null,[P("clipPath",{id:"clip0_408_21102"},[P("rect",{width:"14",height:"14",fill:"white"})])],-1),zS=[$S,VS];function WS(e,t,n,i,s,r){return I(),L("svg",E({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),zS,16)}jr.render=WS;var zs={name:"TimesIcon",extends:xt};const jS=P("path",{d:"M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z",fill:"currentColor"},null,-1),KS=[jS];function qS(e,t,n,i,s,r){return I(),L("svg",E({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),KS,16)}zs.render=qS;var Kr={name:"TimesCircleIcon",extends:xt};const GS=P("g",{"clip-path":"url(#clip0_334_13179)"},[P("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z",fill:"currentColor"})],-1),YS=P("defs",null,[P("clipPath",{id:"clip0_334_13179"},[P("rect",{width:"14",height:"14",fill:"white"})])],-1),XS=[GS,YS];function JS(e,t,n,i,s,r){return I(),L("svg",E({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),XS,16)}Kr.render=JS;let hu;function ZS(e){e.addEventListener("mousedown",Qy)}function QS(e){e.removeEventListener("mousedown",Qy)}function eA(e){let t=document.createElement("span");t.className="p-ink",t.setAttribute("role","presentation"),t.setAttribute("aria-hidden","true"),e.appendChild(t),t.addEventListener("animationend",e_)}function tA(e){let t=t_(e);t&&(QS(e),t.removeEventListener("animationend",e_),t.remove())}function Qy(e){let t=e.currentTarget,n=t_(t);if(!n||getComputedStyle(n,null).display==="none")return;if(Q.removeClass(n,"p-ink-active"),!Q.getHeight(n)&&!Q.getWidth(n)){let o=Math.max(Q.getOuterWidth(t),Q.getOuterHeight(t));n.style.height=o+"px",n.style.width=o+"px"}let i=Q.getOffset(t),s=e.pageX-i.left+document.body.scrollTop-Q.getWidth(n)/2,r=e.pageY-i.top+document.body.scrollLeft-Q.getHeight(n)/2;n.style.top=r+"px",n.style.left=s+"px",Q.addClass(n,"p-ink-active"),hu=setTimeout(()=>{n&&Q.removeClass(n,"p-ink-active")},401)}function e_(e){hu&&clearTimeout(hu),Q.removeClass(e.currentTarget,"p-ink-active")}function t_(e){for(let t=0;t<e.children.length;t++)if(typeof e.children[t].className=="string"&&e.children[t].className.indexOf("p-ink")!==-1)return e.children[t];return null}const Ws={mounted(e,t){t.instance.$primevue&&t.instance.$primevue.config&&t.instance.$primevue.config.ripple&&(eA(e),ZS(e))},unmounted(e){tA(e)}};var n_={name:"ToastMessage",extends:Tt,emits:["close"],props:{message:{type:null,default:null},templates:{type:Object,default:null},closeIcon:{type:String,default:null},infoIcon:{type:String,default:null},warnIcon:{type:String,default:null},errorIcon:{type:String,default:null},successIcon:{type:String,default:null},closeButtonProps:{type:null,default:null}},closeTimeout:null,mounted(){this.message.life&&(this.closeTimeout=setTimeout(()=>{this.close({message:this.message,type:"life-end"})},this.message.life))},beforeUnmount(){this.clearCloseTimeout()},methods:{close(e){this.$emit("close",e)},onCloseClick(){this.clearCloseTimeout(),this.close({message:this.message,type:"close"})},clearCloseTimeout(){this.closeTimeout&&(clearTimeout(this.closeTimeout),this.closeTimeout=null)}},computed:{containerClass(){return["p-toast-message",this.message.styleClass,{"p-toast-message-info":this.message.severity==="info","p-toast-message-warn":this.message.severity==="warn","p-toast-message-error":this.message.severity==="error","p-toast-message-success":this.message.severity==="success"}]},iconComponent(){return{info:!this.infoIcon&&jr,success:!this.successIcon&&zr,warn:!this.warnIcon&&Wr,error:!this.errorIcon&&Kr}[this.message.severity]},iconClass(){return[{[this.infoIcon]:this.message.severity==="info",[this.warnIcon]:this.message.severity==="warn",[this.errorIcon]:this.message.severity==="error",[this.successIcon]:this.message.severity==="success"}]},closeAriaLabel(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},components:{TimesIcon:zs,InfoCircleIcon:jr,CheckIcon:zr,ExclamationTriangleIcon:Wr,TimesCircleIcon:Kr},directives:{ripple:Ws}};const nA=["aria-label"];function iA(e,t,n,i,s,r){const o=Hi("ripple");return I(),L("div",E({class:r.containerClass,role:"alert","aria-live":"assertive","aria-atomic":"true"},e.ptm("container")),[P("div",E({class:["p-toast-message-content",n.message.contentStyleClass]},e.ptm("content")),[n.templates.message?(I(),ue(tt(n.templates.message),{key:1,message:n.message},null,8,["message"])):(I(),L(De,{key:0},[(I(),ue(tt(n.templates.icon?n.templates.icon:r.iconComponent.name?r.iconComponent:"span"),E({class:[r.iconClass,"p-toast-message-icon"]},e.ptm("icon")),null,16,["class"])),P("div",E({class:"p-toast-message-text"},e.ptm("text")),[P("span",E({class:"p-toast-summary"},e.ptm("summary")),Je(n.message.summary),17),P("div",E({class:"p-toast-detail"},e.ptm("detail")),Je(n.message.detail),17)],16)],64)),n.message.closable!==!1?(I(),L("div",yu(E({key:2},e.ptm("buttonContainer"))),[fn((I(),L("button",E({class:"p-toast-icon-close p-link",type:"button","aria-label":r.closeAriaLabel,onClick:t[0]||(t[0]=(...l)=>r.onCloseClick&&r.onCloseClick(...l)),autofocus:""},{...n.closeButtonProps,...e.ptm("button")}),[(I(),ue(tt(n.templates.closeicon||"TimesIcon"),E({class:["p-toast-icon-close-icon",n.closeIcon]},e.ptm("buttonIcon")),null,16,["class"]))],16,nA)),[[o]])],16)):de("",!0)],16)],16)}n_.render=iA;var sA=0,i_={name:"Toast",extends:Tt,inheritAttrs:!1,emits:["close","life-end"],props:{group:{type:String,default:null},position:{type:String,default:"top-right"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},breakpoints:{type:Object,default:null},closeIcon:{type:String,default:void 0},infoIcon:{type:String,default:void 0},warnIcon:{type:String,default:void 0},errorIcon:{type:String,default:void 0},successIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null}},data(){return{messages:[]}},styleElement:null,mounted(){Mn.on("add",this.onAdd),Mn.on("remove-group",this.onRemoveGroup),Mn.on("remove-all-groups",this.onRemoveAllGroups),this.breakpoints&&this.createStyle()},beforeUnmount(){this.destroyStyle(),this.$refs.container&&this.autoZIndex&&en.clear(this.$refs.container),Mn.off("add",this.onAdd),Mn.off("remove-group",this.onRemoveGroup),Mn.off("remove-all-groups",this.onRemoveAllGroups)},methods:{add(e){e.id==null&&(e.id=sA++),this.messages=[...this.messages,e]},remove(e){let t=-1;for(let n=0;n<this.messages.length;n++)if(this.messages[n]===e.message){t=n;break}this.messages.splice(t,1),this.$emit(e.type,{message:e.message})},onAdd(e){this.group==e.group&&this.add(e)},onRemoveGroup(e){this.group===e&&(this.messages=[])},onRemoveAllGroups(){this.messages=[]},onEnter(){this.$refs.container.setAttribute(this.attributeSelector,""),this.autoZIndex&&en.set("modal",this.$refs.container,this.baseZIndex||this.$primevue.config.zIndex.modal)},onLeave(){this.$refs.container&&this.autoZIndex&&$e.isEmpty(this.messages)&&setTimeout(()=>{en.clear(this.$refs.container)},200)},createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let e="";for(let t in this.breakpoints){let n="";for(let i in this.breakpoints[t])n+=i+":"+this.breakpoints[t][i]+"!important;";e+=`
                        @media screen and (max-width: ${t}) {
                            .p-toast[${this.attributeSelector}] {
                                ${n}
                            }
                        }
                    `}this.styleElement.innerHTML=e}},destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)}},computed:{containerClass(){return["p-toast p-component p-toast-"+this.position,{"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},attributeSelector(){return qi()}},components:{ToastMessage:n_,Portal:pa}};function rA(e,t,n,i,s,r){const o=Ye("ToastMessage"),l=Ye("Portal");return I(),ue(l,null,{default:je(()=>[P("div",E({ref:"container",class:r.containerClass},{...e.$attrs,...e.ptm("root")}),[fe(bw,E({name:"p-toast-message",tag:"div",onEnter:r.onEnter,onLeave:r.onLeave},e.ptm("message")),{default:je(()=>[(I(!0),L(De,null,Cs(s.messages,a=>(I(),ue(o,{key:a.id,message:a,templates:e.$slots,closeIcon:n.closeIcon,infoIcon:n.infoIcon,warnIcon:n.warnIcon,errorIcon:n.errorIcon,successIcon:n.successIcon,closeButtonProps:n.closeButtonProps,onClose:t[0]||(t[0]=c=>r.remove(c)),pt:e.pt},null,8,["message","templates","closeIcon","infoIcon","warnIcon","errorIcon","successIcon","closeButtonProps","pt"]))),128))]),_:1},16,["onEnter","onLeave"])],16)]),_:1})}function oA(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",n==="top"&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}var lA=`
.p-toast {
    position: fixed;
    width: 25rem;
}
.p-toast-message-content {
    display: flex;
    align-items: flex-start;
}
.p-toast-message-text {
    flex: 1 1 auto;
}
.p-toast-top-right {
    top: 20px;
    right: 20px;
}
.p-toast-top-left {
    top: 20px;
    left: 20px;
}
.p-toast-bottom-left {
    bottom: 20px;
    left: 20px;
}
.p-toast-bottom-right {
    bottom: 20px;
    right: 20px;
}
.p-toast-top-center {
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
}
.p-toast-bottom-center {
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
}
.p-toast-center {
    left: 50%;
    top: 50%;
    min-width: 20vw;
    transform: translate(-50%, -50%);
}
.p-toast-icon-close {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
}
.p-toast-icon-close.p-link {
    cursor: pointer;
}

/* Animations */
.p-toast-message-enter-from {
    opacity: 0;
    -webkit-transform: translateY(50%);
    -ms-transform: translateY(50%);
    transform: translateY(50%);
}
.p-toast-message-leave-from {
    max-height: 1000px;
}
.p-toast .p-toast-message.p-toast-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin-bottom: 0;
    overflow: hidden;
}
.p-toast-message-enter-active {
    -webkit-transition: transform 0.3s, opacity 0.3s;
    transition: transform 0.3s, opacity 0.3s;
}
.p-toast-message-leave-active {
    -webkit-transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin-bottom 0.3s;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin-bottom 0.3s;
}
`;oA(lA);i_.render=rA;var s_={name:"SpinnerIcon",extends:xt};const aA=P("g",{"clip-path":"url(#clip0_417_21408)"},[P("path",{d:"M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",fill:"currentColor"})],-1),cA=P("defs",null,[P("clipPath",{id:"clip0_417_21408"},[P("rect",{width:"14",height:"14",fill:"white"})])],-1),uA=[aA,cA];function hA(e,t,n,i,s,r){return I(),L("svg",E({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),uA,16)}s_.render=hA;var ma={name:"Button",extends:Tt,props:{label:{type:String,default:null},icon:{type:String,default:null},iconPos:{type:String,default:"left"},iconClass:{type:String,default:null},badge:{type:String,default:null},badgeClass:{type:String,default:null},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:void 0},link:{type:Boolean,default:!1},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},plain:{type:Boolean,default:!1}},computed:{buttonClass(){return["p-button p-component",{"p-button-icon-only":this.hasIcon&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-disabled":this.$attrs.disabled||this.loading,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.hasIcon&&this.label,"p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text,"p-button-outlined":this.outlined,"p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain}]},iconStyleClass(){return["p-button-icon",this.iconClass,{"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}]},loadingIconStyleClass(){return["p-button-loading-icon pi-spin",this.iconStyleClass]},badgeStyleClass(){return["p-badge p-component",this.badgeClass,{"p-badge-no-gutter":this.badge&&String(this.badge).length===1}]},disabled(){return this.$attrs.disabled||this.loading},defaultAriaLabel(){return this.label?this.label+(this.badge?" "+this.badge:""):this.$attrs["aria-label"]},hasIcon(){return this.icon||this.$slots.icon}},components:{SpinnerIcon:s_},directives:{ripple:Ws}};const dA=["aria-label","disabled"];function fA(e,t,n,i,s,r){const o=Ye("SpinnerIcon"),l=Hi("ripple");return fn((I(),L("button",E({class:r.buttonClass,type:"button","aria-label":r.defaultAriaLabel,disabled:r.disabled},e.ptm("root")),[he(e.$slots,"default",{},()=>[n.loading?he(e.$slots,"loadingicon",{key:0,class:Wn(r.loadingIconStyleClass)},()=>[n.loadingIcon?(I(),L("span",E({key:0,class:[r.loadingIconStyleClass,n.loadingIcon]},e.ptm("loadingIcon")),null,16)):(I(),ue(o,E({key:1,class:r.loadingIconStyleClass,spin:""},e.ptm("loadingIcon")),null,16,["class"]))]):he(e.$slots,"icon",{key:1,class:Wn(r.iconStyleClass)},()=>[n.icon?(I(),L("span",E({key:0,class:[r.iconStyleClass,n.icon]},e.ptm("icon")),null,16)):de("",!0)]),P("span",E({class:"p-button-label"},e.ptm("label")),Je(n.label||" "),17),n.badge?(I(),L("span",E({key:2,class:r.badgeStyleClass},e.ptm("badge")),Je(n.badge),17)):de("",!0)])],16,dA)),[[l]])}ma.render=fA;var r_={name:"BarsIcon",extends:xt};const pA=P("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z",fill:"currentColor"},null,-1),mA=[pA];function gA(e,t,n,i,s,r){return I(),L("svg",E({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),mA,16)}r_.render=gA;var o_={name:"AngleDownIcon",extends:xt};const yA=P("path",{d:"M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z",fill:"currentColor"},null,-1),_A=[yA];function vA(e,t,n,i,s,r){return I(),L("svg",E({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),_A,16)}o_.render=vA;var l_={name:"AngleRightIcon",extends:xt};const bA=P("path",{d:"M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z",fill:"currentColor"},null,-1),CA=[bA];function wA(e,t,n,i,s,r){return I(),L("svg",E({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),CA,16)}l_.render=wA;var a_={name:"MenubarSub",extends:Tt,emits:["item-mouseenter","item-click"],props:{items:{type:Array,default:null},root:{type:Boolean,default:!1},popup:{type:Boolean,default:!1},mobileActive:{type:Boolean,default:!1},templates:{type:Object,default:null},exact:{type:Boolean,default:!0},level:{type:Number,default:0},menuId:{type:String,default:null},focusedItemId:{type:String,default:null},activeItemPath:{type:Object,default:null}},list:null,methods:{getItemId(e){return`${this.menuId}_${e.key}`},getItemKey(e){return this.getItemId(e)},getItemProp(e,t,n){return e&&e.item?$e.getItemValue(e.item[t],n):void 0},getItemLabel(e){return this.getItemProp(e,"label")},getPTOptions(e,t){return this.ptm(t,{context:{active:this.isItemActive(e),focused:this.isItemFocused(e)}})},isItemActive(e){return this.activeItemPath.some(t=>t.key===e.key)},isItemVisible(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled(e){return this.getItemProp(e,"disabled")},isItemFocused(e){return this.focusedItemId===this.getItemId(e)},isItemGroup(e){return $e.isNotEmpty(e.items)},onItemClick(e,t){this.getItemProp(t,"command",{originalEvent:e,item:t.item}),this.$emit("item-click",{originalEvent:e,processedItem:t,isFocus:!0})},onItemMouseEnter(e,t){this.$emit("item-mouseenter",{originalEvent:e,processedItem:t})},onItemActionClick(e,t){t&&t(e)},getAriaSetSize(){return this.items.filter(e=>this.isItemVisible(e)&&!this.getItemProp(e,"separator")).length},getAriaPosInset(e){return e-this.items.slice(0,e).filter(t=>this.isItemVisible(t)&&this.getItemProp(t,"separator")).length+1},getItemClass(e){return["p-menuitem",this.getItemProp(e,"class"),{"p-menuitem-active p-highlight":this.isItemActive(e),"p-focus":this.isItemFocused(e),"p-disabled":this.isItemDisabled(e)}]},getItemActionClass(e,t){return["p-menuitem-link",{"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},getItemIconClass(e){return["p-menuitem-icon",this.getItemProp(e,"icon")]},getSeparatorItemClass(e){return["p-menuitem-separator",this.getItemProp(e,"class")]}},computed:{containerClass(){return{"p-submenu-list":!this.root,"p-menubar-root-list":this.root}}},components:{AngleRightIcon:l_,AngleDownIcon:o_},directives:{ripple:Ws}};const IA=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-level","aria-setsize","aria-posinset"],EA=["onClick","onMouseenter"],TA=["href","onClick"],SA=["href","target"],AA=["id"];function kA(e,t,n,i,s,r){const o=Ye("router-link"),l=Ye("MenubarSub",!0),a=Hi("ripple");return I(),L("ul",yu(Lu(e.ptm("menu"))),[(I(!0),L(De,null,Cs(n.items,(c,d)=>(I(),L(De,{key:r.getItemKey(c)},[r.isItemVisible(c)&&!r.getItemProp(c,"separator")?(I(),L("li",E({key:0,id:r.getItemId(c),style:r.getItemProp(c,"style"),class:r.getItemClass(c),role:"menuitem","aria-label":r.getItemLabel(c),"aria-disabled":r.isItemDisabled(c)||void 0,"aria-expanded":r.isItemGroup(c)?r.isItemActive(c):void 0,"aria-haspopup":r.isItemGroup(c)&&!r.getItemProp(c,"to")?"menu":void 0,"aria-level":n.level+1,"aria-setsize":r.getAriaSetSize(),"aria-posinset":r.getAriaPosInset(d)},r.getPTOptions(c,"menuitem")),[P("div",E({class:"p-menuitem-content",onClick:f=>r.onItemClick(f,c),onMouseenter:f=>r.onItemMouseEnter(f,c)},r.getPTOptions(c,"content")),[n.templates.item?(I(),ue(tt(n.templates.item),{key:1,item:c.item},null,8,["item"])):(I(),L(De,{key:0},[r.getItemProp(c,"to")&&!r.isItemDisabled(c)?(I(),ue(o,{key:0,to:r.getItemProp(c,"to"),custom:""},{default:je(({navigate:f,href:m,isActive:b,isExactActive:C})=>[fn((I(),L("a",E({href:m,class:r.getItemActionClass(c,{isActive:b,isExactActive:C}),tabindex:"-1","aria-hidden":"true",onClick:A=>r.onItemActionClick(A,f)},r.getPTOptions(c,"action")),[n.templates.itemicon?(I(),ue(tt(n.templates.itemicon),{key:0,item:c.item,class:Wn(r.getItemIconClass(c))},null,8,["item","class"])):r.getItemProp(c,"icon")?(I(),L("span",E({key:1,class:r.getItemIconClass(c)},r.getPTOptions(c,"icon")),null,16)):de("",!0),P("span",E({class:"p-menuitem-text"},r.getPTOptions(c,"label")),Je(r.getItemLabel(c)),17)],16,TA)),[[a]])]),_:2},1032,["to"])):fn((I(),L("a",E({key:1,href:r.getItemProp(c,"url"),class:r.getItemActionClass(c),target:r.getItemProp(c,"target"),tabindex:"-1","aria-hidden":"true"},r.getPTOptions(c,"action")),[n.templates.itemicon?(I(),ue(tt(n.templates.itemicon),{key:0,item:c.item,class:Wn(r.getItemIconClass(c))},null,8,["item","class"])):r.getItemProp(c,"icon")?(I(),L("span",E({key:1,class:r.getItemIconClass(c)},r.getPTOptions(c,"icon")),null,16)):de("",!0),P("span",E({class:"p-menuitem-text"},r.getPTOptions(c,"label")),Je(r.getItemLabel(c)),17),r.getItemProp(c,"items")?(I(),L(De,{key:2},[n.templates.submenuicon?(I(),ue(tt(n.templates.submenuicon),{key:0,root:n.root,active:r.isItemActive(c),class:"p-submenu-icon"},null,8,["root","active"])):(I(),ue(tt(n.root?"AngleDownIcon":"AngleRightIcon"),E({key:1,class:"p-submenu-icon"},r.getPTOptions(c,"submenuIcon")),null,16))],64)):de("",!0)],16,SA)),[[a]])],64))],16,EA),r.isItemVisible(c)&&r.isItemGroup(c)?(I(),ue(l,{key:0,menuId:n.menuId,role:"menu",class:"p-submenu-list",focusedItemId:n.focusedItemId,items:c.items,mobileActive:n.mobileActive,activeItemPath:n.activeItemPath,templates:n.templates,exact:n.exact,level:n.level+1,pt:e.pt,onItemClick:t[0]||(t[0]=f=>e.$emit("item-click",f)),onItemMouseenter:t[1]||(t[1]=f=>e.$emit("item-mouseenter",f))},null,8,["menuId","focusedItemId","items","mobileActive","activeItemPath","templates","exact","level","pt"])):de("",!0)],16,IA)):de("",!0),r.isItemVisible(c)&&r.getItemProp(c,"separator")?(I(),L("li",E({key:1,id:r.getItemId(c),style:r.getItemProp(c,"style"),class:r.getSeparatorItemClass(c),role:"separator"},e.ptm("separator")),null,16,AA)):de("",!0)],64))),128))],16)}a_.render=kA;var c_={name:"Menubar",extends:Tt,emits:["focus","blur"],props:{model:{type:Array,default:null},exact:{type:Boolean,default:!0},buttonProps:{type:null,default:null},"aria-labelledby":{type:String,default:null},"aria-label":{type:String,default:null}},data(){return{id:this.$attrs.id,mobileActive:!1,focused:!1,focusedItemInfo:{index:-1,level:0,parentKey:""},activeItemPath:[],dirty:!1}},watch:{"$attrs.id":function(e){this.id=e||qi()},activeItemPath(e){$e.isNotEmpty(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())}},outsideClickListener:null,container:null,menubar:null,mounted(){this.id=this.id||qi()},beforeUnmount(){this.mobileActive=!1,this.unbindOutsideClickListener(),this.unbindResizeListener(),this.container&&en.clear(this.container),this.container=null},methods:{getItemProp(e,t){return e?$e.getItemValue(e[t]):void 0},getItemLabel(e){return this.getItemProp(e,"label")},isItemDisabled(e){return this.getItemProp(e,"disabled")},isItemGroup(e){return $e.isNotEmpty(this.getItemProp(e,"items"))},isItemSeparator(e){return this.getItemProp(e,"separator")},getProccessedItemLabel(e){return e?this.getItemLabel(e.item):void 0},isProccessedItemGroup(e){return e&&$e.isNotEmpty(e.items)},toggle(e){this.mobileActive?(this.mobileActive=!1,en.clear(this.menubar),this.hide()):(this.mobileActive=!0,en.set("menu",this.menubar,this.$primevue.config.zIndex.menu),setTimeout(()=>{this.show()},0)),this.bindOutsideClickListener(),e.preventDefault()},show(){this.focusedItemInfo={index:this.findFirstFocusedItemIndex(),level:0,parentKey:""},Q.focus(this.menubar)},hide(e,t){this.mobileActive&&setTimeout(()=>{Q.focus(this.$refs.menubutton)},0),this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""},t&&Q.focus(this.menubar),this.dirty=!1},onFocus(e){this.focused=!0,this.focusedItemInfo=this.focusedItemInfo.index!==-1?this.focusedItemInfo:{index:this.findFirstFocusedItemIndex(),level:0,parentKey:""},this.$emit("focus",e)},onBlur(e){this.focused=!1,this.focusedItemInfo={index:-1,level:0,parentKey:""},this.searchValue="",this.dirty=!1,this.$emit("blur",e)},onKeyDown(e){const t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&$e.isPrintableCharacter(e.key)&&this.searchItems(e,e.key);break}},onItemChange(e){const{processedItem:t,isFocus:n}=e;if($e.isEmpty(t))return;const{index:i,key:s,level:r,parentKey:o,items:l}=t,a=$e.isNotEmpty(l),c=this.activeItemPath.filter(d=>d.parentKey!==o&&d.parentKey!==s);a&&c.push(t),this.focusedItemInfo={index:i,level:r,parentKey:o},this.activeItemPath=c,a&&(this.dirty=!0),n&&Q.focus(this.menubar)},onItemClick(e){const{originalEvent:t,processedItem:n}=e,i=this.isProccessedItemGroup(n),s=$e.isEmpty(n.parent);if(this.isSelected(n)){const{index:o,key:l,level:a,parentKey:c}=n;this.activeItemPath=this.activeItemPath.filter(d=>l!==d.key&&l.startsWith(d.key)),this.focusedItemInfo={index:o,level:a,parentKey:c},this.dirty=!s,Q.focus(this.menubar)}else if(i)this.onItemChange(e);else{const o=s?n:this.activeItemPath.find(l=>l.parentKey==="");this.hide(t),this.changeFocusedItemIndex(t,o?o.index:-1),this.mobileActive=!1,Q.focus(this.menubar)}},onItemMouseEnter(e){!this.mobileActive&&this.dirty&&this.onItemChange(e)},menuButtonClick(e){this.toggle(e)},menuButtonKeydown(e){(e.code==="Enter"||e.code==="Space")&&this.menuButtonClick(e)},onArrowDownKey(e){const t=this.visibleItems[this.focusedItemInfo.index];if(t?$e.isEmpty(t.parent):null)this.isProccessedItemGroup(t)&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo={index:-1,parentKey:t.key},this.onArrowRightKey(e));else{const i=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,i),e.preventDefault()}},onArrowUpKey(e){const t=this.visibleItems[this.focusedItemInfo.index];if($e.isEmpty(t.parent)){if(this.isProccessedItemGroup(t)){this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo={index:-1,parentKey:t.key};const s=this.findLastItemIndex();this.changeFocusedItemIndex(e,s)}}else{const i=this.activeItemPath.find(s=>s.key===t.parentKey);if(this.focusedItemInfo.index===0)this.focusedItemInfo={index:-1,parentKey:i?i.parentKey:""},this.searchValue="",this.onArrowLeftKey(e),this.activeItemPath=this.activeItemPath.filter(s=>s.parentKey!==this.focusedItemInfo.parentKey);else{const s=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,s)}}e.preventDefault()},onArrowLeftKey(e){const t=this.visibleItems[this.focusedItemInfo.index],n=t?this.activeItemPath.find(i=>i.key===t.parentKey):null;if(n)this.onItemChange({originalEvent:e,processedItem:n}),this.activeItemPath=this.activeItemPath.filter(i=>i.parentKey!==this.focusedItemInfo.parentKey),e.preventDefault();else{const i=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,i),e.preventDefault()}},onArrowRightKey(e){const t=this.visibleItems[this.focusedItemInfo.index];if(t?this.activeItemPath.find(i=>i.key===t.parentKey):null)this.isProccessedItemGroup(t)&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo={index:-1,parentKey:t.key},this.onArrowDownKey(e));else{const i=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,i),e.preventDefault()}},onHomeKey(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()},onEndKey(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()},onEnterKey(e){if(this.focusedItemInfo.index!==-1){const t=Q.findSingle(this.menubar,`li[id="${`${this.focusedItemId}`}"]`),n=t&&Q.findSingle(t,".p-menuitem-link");n?n.click():t&&t.click();const i=this.visibleItems[this.focusedItemInfo.index];!this.isProccessedItemGroup(i)&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex())}e.preventDefault()},onSpaceKey(e){this.onEnterKey(e)},onEscapeKey(e){this.hide(e,!0),this.focusedItemInfo.index=this.findFirstFocusedItemIndex(),e.preventDefault()},onTabKey(e){if(this.focusedItemInfo.index!==-1){const t=this.visibleItems[this.focusedItemInfo.index];!this.isProccessedItemGroup(t)&&this.onItemChange({originalEvent:e,processedItem:t})}this.hide()},bindOutsideClickListener(){this.outsideClickListener||(this.outsideClickListener=e=>{const t=this.menubar!==e.target&&!this.menubar.contains(e.target),n=this.mobileActive&&this.$refs.menubutton!==e.target&&!this.$refs.menubutton.contains(e.target);t&&(n?this.mobileActive=!1:this.hide())},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindResizeListener(){this.resizeListener||(this.resizeListener=e=>{Q.isTouchDevice()||this.hide(e,!0),this.mobileActive=!1},window.addEventListener("resize",this.resizeListener))},unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isItemMatched(e){return this.isValidItem(e)&&this.getProccessedItemLabel(e).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())},isValidItem(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)},isValidSelectedItem(e){return this.isValidItem(e)&&this.isSelected(e)},isSelected(e){return this.activeItemPath.some(t=>t.key===e.key)},findFirstItemIndex(){return this.visibleItems.findIndex(e=>this.isValidItem(e))},findLastItemIndex(){return $e.findLastIndex(this.visibleItems,e=>this.isValidItem(e))},findNextItemIndex(e){const t=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(n=>this.isValidItem(n)):-1;return t>-1?t+e+1:e},findPrevItemIndex(e){const t=e>0?$e.findLastIndex(this.visibleItems.slice(0,e),n=>this.isValidItem(n)):-1;return t>-1?t:e},findSelectedItemIndex(){return this.visibleItems.findIndex(e=>this.isValidSelectedItem(e))},findFirstFocusedItemIndex(){const e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e},findLastFocusedItemIndex(){const e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e},searchItems(e,t){this.searchValue=(this.searchValue||"")+t;let n=-1,i=!1;return this.focusedItemInfo.index!==-1?(n=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(s=>this.isItemMatched(s)),n=n===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(s=>this.isItemMatched(s)):n+this.focusedItemInfo.index):n=this.visibleItems.findIndex(s=>this.isItemMatched(s)),n!==-1&&(i=!0),n===-1&&this.focusedItemInfo.index===-1&&(n=this.findFirstFocusedItemIndex()),n!==-1&&this.changeFocusedItemIndex(e,n),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),i},changeFocusedItemIndex(e,t){this.focusedItemInfo.index!==t&&(this.focusedItemInfo.index=t,this.scrollInView())},scrollInView(e=-1){const t=e!==-1?`${this.id}_${e}`:this.focusedItemId,n=Q.findSingle(this.menubar,`li[id="${t}"]`);n&&n.scrollIntoView&&n.scrollIntoView({block:"nearest",inline:"start"})},createProcessedItems(e,t=0,n={},i=""){const s=[];return e&&e.forEach((r,o)=>{const l=(i!==""?i+"_":"")+o,a={item:r,index:o,level:t,key:l,parent:n,parentKey:i};a.items=this.createProcessedItems(r.items,t+1,a,l),s.push(a)}),s},containerRef(e){this.container=e},menubarRef(e){this.menubar=e?e.$el:void 0}},computed:{containerClass(){return["p-menubar p-component",{"p-menubar-mobile-active":this.mobileActive}]},processedItems(){return this.createProcessedItems(this.model||[])},visibleItems(){const e=this.activeItemPath.find(t=>t.key===this.focusedItemInfo.parentKey);return e?e.items:this.processedItems},focusedItemId(){return this.focusedItemInfo.index!==-1?`${this.id}${$e.isNotEmpty(this.focusedItemInfo.parentKey)?"_"+this.focusedItemInfo.parentKey:""}_${this.focusedItemInfo.index}`:null}},components:{MenubarSub:a_,BarsIcon:r_}};const RA=["aria-haspopup","aria-expanded","aria-controls","aria-label"];function PA(e,t,n,i,s,r){const o=Ye("BarsIcon"),l=Ye("MenubarSub");return I(),L("div",E({ref:r.containerRef,class:r.containerClass},e.ptm("root")),[e.$slots.start?(I(),L("div",E({key:0,class:"p-menubar-start"},e.ptm("start")),[he(e.$slots,"start")],16)):de("",!0),n.model&&n.model.length>0?(I(),L("a",E({key:1,ref:"menubutton",role:"button",tabindex:"0",class:"p-menubar-button","aria-haspopup":!!(n.model.length&&n.model.length>0),"aria-expanded":s.mobileActive,"aria-controls":s.id,"aria-label":e.$primevue.config.locale.aria.navigation,onClick:t[0]||(t[0]=a=>r.menuButtonClick(a)),onKeydown:t[1]||(t[1]=a=>r.menuButtonKeydown(a))},{...n.buttonProps,...e.ptm("button")}),[he(e.$slots,"popupicon",{},()=>[fe(o,yu(Lu(e.ptm("popupIcon"))),null,16)])],16,RA)):de("",!0),fe(l,{ref:r.menubarRef,id:s.id,class:"p-menubar-root-list",role:"menubar",items:r.processedItems,templates:e.$slots,root:!0,mobileActive:s.mobileActive,tabindex:"0","aria-activedescendant":s.focused?r.focusedItemId:void 0,menuId:s.id,focusedItemId:s.focused?r.focusedItemId:void 0,activeItemPath:s.activeItemPath,exact:n.exact,level:0,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,pt:e.pt,onFocus:r.onFocus,onBlur:r.onBlur,onKeydown:r.onKeyDown,onItemClick:r.onItemClick,onItemMouseenter:r.onItemMouseEnter},null,8,["id","items","templates","mobileActive","aria-activedescendant","menuId","focusedItemId","activeItemPath","exact","aria-labelledby","aria-label","pt","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter"]),e.$slots.end?(I(),L("div",E({key:2,class:"p-menubar-end"},e.ptm("end")),[he(e.$slots,"end")],16)):de("",!0)],16)}function xA(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",n==="top"&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}var OA=`
.p-menubar {
    display: flex;
    align-items: center;
}
.p-menubar ul {
    margin: 0;
    padding: 0;
    list-style: none;
}
.p-menubar .p-menuitem-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
}
.p-menubar .p-menuitem-text {
    line-height: 1;
}
.p-menubar .p-menuitem {
    position: relative;
}
.p-menubar-root-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
.p-menubar-root-list > li ul {
    display: none;
    z-index: 1;
}
.p-menubar-root-list > .p-menuitem-active > .p-submenu-list {
    display: block;
}
.p-menubar .p-submenu-list {
    display: none;
    position: absolute;
    z-index: 1;
}
.p-menubar .p-submenu-list > .p-menuitem-active > .p-submenu-list {
    display: block;
    left: 100%;
    top: 0;
}
.p-menubar .p-submenu-list .p-menuitem .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    margin-left: auto;
}
.p-menubar .p-menubar-end {
    margin-left: auto;
    align-self: center;
}
.p-menubar-button {
    display: none;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    text-decoration: none;
}
`;xA(OA);c_.render=PA;const LA={},NA={class:"item"},DA={class:"details"};function MA(e,t){return I(),L("div",NA,[P("i",null,[he(e.$slots,"icon",{},void 0,!0)]),P("div",DA,[P("h3",null,[he(e.$slots,"heading",{},void 0,!0)]),he(e.$slots,"default",{},void 0,!0)])])}const im=Vs(LA,[["render",MA],["__scopeId","data-v-fd0742eb"]]),FA={},BA={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"17",fill:"currentColor"},UA=P("path",{d:"M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z"},null,-1),HA=[UA];function $A(e,t){return I(),L("svg",BA,HA)}const VA=Vs(FA,[["render",$A]]),zA={},WA={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"iconify iconify--mdi",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},jA=P("path",{d:"M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z",fill:"currentColor"},null,-1),KA=[jA];function qA(e,t){return I(),L("svg",WA,KA)}const GA=Vs(zA,[["render",qA]]),YA="/volley-lock/assets/blue-lock-f0063cba.svg",XA={data(){return{items:[{label:"Home",icon:"pi pi-fw pi-home",to:"/"},{label:"Votación",icon:"pi pi-fw pi-th-large",to:"/tier"},{label:"Resultados",icon:"pi pi-fw pi-sort-amount-up-alt",to:"/results"},{label:"Gráfica",icon:"pi pi-fw pi-chart-line",to:"/graph"}],user:null,username:"",logged:this.userLogged()}},methods:{async singOutFirebase(){const e=oc(),t=await wf(e).then(()=>(this.$swal("Cierre de sesión con éxito","","success"),!1)).catch(n=>{this.$swal("ERROR al cerrar sesión",n.toString(),"error")});this.logged=t,this.currentUser=null,this.$router.push("/")},displayProfile(){},getUsername(e){let n=e.displayName.split(" ")[0].toLowerCase();return n.charAt(0).toUpperCase()+n.slice(1)},singOutFirebaseNoSwal(){const e=oc();wf(e)},async userLogged(){const e=await O6();return e?(this.user=e,this.username=this.getUsername(e),!0):!1},async fetchPostRegister(e){let t="https://volley-ranking-server.onrender.com/register";const n={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},mode:"no-cors",body:JSON.stringify(e,null,2)};await fetch(t,n)},async googleAuth(){const e=new Fn,t=oc();this.userLogged&&this.singOutFirebaseNoSwal();const n=await d4(t,e).then(i=>({user:i.user,logged:!0})).catch(i=>{this.$swal("ERROR en la autenticación",i.toString(),"error")});if(this.userLogged){this.user=n.user,this.username=this.getUsername(n.user),this.logged=n.logged;const i={id:this.user.uid,name:this.user.displayName,email:this.user.email,photo:`${this.user.photoURL}`};this.fetchPostRegister(i)}}}},JA={class:"card"},ZA=P("img",{alt:"logo",src:YA,height:"40",class:"mr-2"},null,-1),QA={key:0},ek={key:1};function tk(e,t,n,i,s,r){const o=Ye("Button"),l=Ye("RouterLink"),a=Ye("Menubar");return I(),L("div",JA,[fe(a,{model:s.items},{start:je(()=>[ZA]),end:je(()=>[s.logged?(I(),L("div",ek,[fe(l,{to:"/profile"},{default:je(()=>[fe(o,{plain:"",text:""},{default:je(()=>[ht(Je(s.username),1)]),_:1})]),_:1}),ht("   "),fe(o,{class:"auth",icon:"pi pi-sign-out",severity:"info","aria-label":"User",label:"Cerrar sesión",onClick:r.singOutFirebase},null,8,["onClick"])])):(I(),L("div",QA,[fe(o,{class:"auth",icon:"pi pi-google",severity:"info","aria-label":"User",label:"Iniciar sesión",onClick:r.googleAuth},null,8,["onClick"])]))]),_:1},8,["model"])])}const nk=Vs(XA,[["render",tk]]),ik=P("a",{href:"https://vuejs.org/",target:"_blank",rel:"noopener"},"proyecto",-1),sk=P("br",null,null,-1),rk=P("a",{href:"https://volley-ranking-server.onrender.com/docs",target:"_blank",rel:"noopener"},"API",-1),ok=P("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank",rel:"noopener"},"Vite",-1),lk=P("a",{href:"primevue.org/dialog/",target:"_blank",rel:"noopener"},"PrimeVue",-1),ak=P("br",null,null,-1),ck={__name:"TheWelcome",setup(e){return(t,n)=>(I(),L(De,null,[fe(im,null,{icon:je(()=>[fe(VA)]),heading:je(()=>[ht("Documentación")]),default:je(()=>[ht(" Documentación del "),ik,ht(" mestra los componentes y funciones por si se necesitaran entender y modificar en un futuro. "),sk,ht(" Por otro lado, también se encuentra disponible la documentación de la "),rk,ht(" utilizada para este sistema ")]),_:1}),fe(im,null,{icon:je(()=>[fe(GA)]),heading:je(()=>[ht("Desarrollo")]),default:je(()=>[ht(" El proyecto ha sido desarrollado y construido con "),ok,ht(" además del uso de Vue 3 y de "),lk,ht(" para la mayoria de los componentes implementados "),ak]),_:1})],64))}};function uk(e,t){const{onFocusIn:n,onFocusOut:i}=t.value||{};e.$_pfocustrap_mutationobserver=new MutationObserver(s=>{s.forEach(r=>{if(r.type==="childList"&&!e.contains(document.activeElement)){const o=l=>{const a=Q.isFocusableElement(l)?l:Q.getFirstFocusableElement(l);return $e.isNotEmpty(a)?a:o(l.nextSibling)};Q.focus(o(r.nextSibling))}})}),e.$_pfocustrap_mutationobserver.disconnect(),e.$_pfocustrap_mutationobserver.observe(e,{childList:!0}),e.$_pfocustrap_focusinlistener=s=>n&&n(s),e.$_pfocustrap_focusoutlistener=s=>i&&i(s),e.addEventListener("focusin",e.$_pfocustrap_focusinlistener),e.addEventListener("focusout",e.$_pfocustrap_focusoutlistener)}function sm(e){e.$_pfocustrap_mutationobserver&&e.$_pfocustrap_mutationobserver.disconnect(),e.$_pfocustrap_focusinlistener&&e.removeEventListener("focusin",e.$_pfocustrap_focusinlistener)&&(e.$_pfocustrap_focusinlistener=null),e.$_pfocustrap_focusoutlistener&&e.removeEventListener("focusout",e.$_pfocustrap_focusoutlistener)&&(e.$_pfocustrap_focusoutlistener=null)}function hk(e,t){const{autoFocusSelector:n="",firstFocusableSelector:i="",autoFocus:s=!1}=t.value||{};let r=Q.getFirstFocusableElement(e,`[autofocus]:not(.p-hidden-focusable)${n}`);s&&!r&&(r=Q.getFirstFocusableElement(e,`:not(.p-hidden-focusable)${i}`)),Q.focus(r)}function dk(e){const{currentTarget:t,relatedTarget:n}=e,i=n===t.$_pfocustrap_lasthiddenfocusableelement?Q.getFirstFocusableElement(t.parentElement,`:not(.p-hidden-focusable)${t.$_pfocustrap_focusableselector}`):t.$_pfocustrap_lasthiddenfocusableelement;Q.focus(i)}function fk(e){const{currentTarget:t,relatedTarget:n}=e,i=n===t.$_pfocustrap_firsthiddenfocusableelement?Q.getLastFocusableElement(t.parentElement,`:not(.p-hidden-focusable)${t.$_pfocustrap_focusableselector}`):t.$_pfocustrap_firsthiddenfocusableelement;Q.focus(i)}function pk(e,t){const{tabIndex:n=0,firstFocusableSelector:i="",lastFocusableSelector:s=""}=t.value||{},r=a=>{const c=document.createElement("span");return c.classList="p-hidden-accessible p-hidden-focusable",c.tabIndex=n,c.setAttribute("aria-hidden","true"),c.setAttribute("role","presentation"),c.addEventListener("focus",a),c},o=r(dk),l=r(fk);o.$_pfocustrap_lasthiddenfocusableelement=l,o.$_pfocustrap_focusableselector=i,l.$_pfocustrap_firsthiddenfocusableelement=o,l.$_pfocustrap_focusableselector=s,e.prepend(o),e.append(l)}const mk={mounted(e,t){const{disabled:n}=t.value||{};n||(pk(e,t),uk(e,t),hk(e,t))},updated(e,t){const{disabled:n}=t.value||{};n&&sm(e)},unmounted(e){sm(e)}};var u_={name:"WindowMaximizeIcon",extends:xt};const gk=P("g",{"clip-path":"url(#clip0_414_20927)"},[P("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z",fill:"currentColor"})],-1),yk=P("defs",null,[P("clipPath",{id:"clip0_414_20927"},[P("rect",{width:"14",height:"14",fill:"white"})])],-1),_k=[gk,yk];function vk(e,t,n,i,s,r){return I(),L("svg",E({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),_k,16)}u_.render=vk;var h_={name:"WindowMinimizeIcon",extends:xt};const bk=P("g",{"clip-path":"url(#clip0_414_20939)"},[P("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z",fill:"currentColor"})],-1),Ck=P("defs",null,[P("clipPath",{id:"clip0_414_20939"},[P("rect",{width:"14",height:"14",fill:"white"})])],-1),wk=[bk,Ck];function Ik(e,t,n,i,s,r){return I(),L("svg",E({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),wk,16)}h_.render=Ik;var d_={name:"Dialog",extends:Tt,inheritAttrs:!1,emits:["update:visible","show","hide","after-hide","maximize","unmaximize","dragend"],props:{header:{type:null,default:null},footer:{type:null,default:null},visible:{type:Boolean,default:!1},modal:{type:Boolean,default:null},contentStyle:{type:null,default:null},contentClass:{type:String,default:null},contentProps:{type:null,default:null},rtl:{type:Boolean,default:null},maximizable:{type:Boolean,default:!1},dismissableMask:{type:Boolean,default:!1},closable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},position:{type:String,default:"center"},breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0},keepInViewport:{type:Boolean,default:!0},minX:{type:Number,default:0},minY:{type:Number,default:0},appendTo:{type:String,default:"body"},closeIcon:{type:String,default:void 0},maximizeIcon:{type:String,default:void 0},minimizeIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null},_instance:null},provide(){return{dialogRef:ln(()=>this._instance)}},data(){return{containerVisible:this.visible,maximized:!1,focusableMax:null,focusableClose:null}},documentKeydownListener:null,container:null,mask:null,content:null,headerContainer:null,footerContainer:null,maximizableButton:null,closeButton:null,styleElement:null,dragging:null,documentDragListener:null,documentDragEndListener:null,lastPageX:null,lastPageY:null,updated(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount(){this.unbindDocumentState(),this.unbindGlobalListeners(),this.destroyStyle(),this.mask&&this.autoZIndex&&en.clear(this.mask),this.container=null,this.mask=null},mounted(){this.breakpoints&&this.createStyle()},methods:{close(){this.$emit("update:visible",!1)},onBeforeEnter(e){e.setAttribute(this.attributeSelector,"")},onEnter(){this.$emit("show"),this.focus(),this.enableDocumentSettings(),this.bindGlobalListeners(),this.autoZIndex&&en.set("modal",this.mask,this.baseZIndex+this.$primevue.config.zIndex.modal)},onBeforeLeave(){this.modal&&Q.addClass(this.mask,"p-component-overlay-leave")},onLeave(){this.$emit("hide"),this.focusableClose=null,this.focusableMax=null},onAfterLeave(){this.autoZIndex&&en.clear(this.mask),this.containerVisible=!1,this.unbindDocumentState(),this.unbindGlobalListeners(),this.$emit("after-hide")},onMaskClick(e){this.dismissableMask&&this.modal&&this.mask===e.target&&this.close()},focus(){const e=n=>n.querySelector("[autofocus]");let t=this.$slots.footer&&e(this.footerContainer);t||(t=this.$slots.header&&e(this.headerContainer),t||(t=this.$slots.default&&e(this.content),t||(this.maximizable?(this.focusableMax=!0,t=this.maximizableButton):(this.focusableClose=!0,t=this.closeButton)))),t&&Q.focus(t)},maximize(e){this.maximized?(this.maximized=!1,this.$emit("unmaximize",e)):(this.maximized=!0,this.$emit("maximize",e)),this.modal||(this.maximized?Q.addClass(document.body,"p-overflow-hidden"):Q.removeClass(document.body,"p-overflow-hidden"))},enableDocumentSettings(){(this.modal||this.maximizable&&this.maximized)&&Q.addClass(document.body,"p-overflow-hidden")},unbindDocumentState(){(this.modal||this.maximizable&&this.maximized)&&Q.removeClass(document.body,"p-overflow-hidden")},onKeyDown(e){e.code==="Escape"&&this.closeOnEscape&&this.close()},bindDocumentKeyDownListener(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},getPositionClass(){const t=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(n=>n===this.position);return t?`p-dialog-${t}`:""},containerRef(e){this.container=e},maskRef(e){this.mask=e},contentRef(e){this.content=e},headerContainerRef(e){this.headerContainer=e},footerContainerRef(e){this.footerContainer=e},maximizableRef(e){this.maximizableButton=e},closeButtonRef(e){this.closeButton=e},createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let e="";for(let t in this.breakpoints)e+=`
                        @media screen and (max-width: ${t}) {
                            .p-dialog[${this.attributeSelector}] {
                                width: ${this.breakpoints[t]} !important;
                            }
                        }
                    `;this.styleElement.innerHTML=e}},destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},initDrag(e){Q.hasClass(e.target,"p-dialog-header-icon")||Q.hasClass(e.target.parentElement,"p-dialog-header-icon")||this.draggable&&(this.dragging=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.container.style.margin="0",Q.addClass(document.body,"p-unselectable-text"))},bindGlobalListeners(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.closeOnEscape&&this.closable&&this.bindDocumentKeyDownListener()},unbindGlobalListeners(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentKeyDownListener()},bindDocumentDragListener(){this.documentDragListener=e=>{if(this.dragging){let t=Q.getOuterWidth(this.container),n=Q.getOuterHeight(this.container),i=e.pageX-this.lastPageX,s=e.pageY-this.lastPageY,r=this.container.getBoundingClientRect(),o=r.left+i,l=r.top+s,a=Q.getViewport();this.container.style.position="fixed",this.keepInViewport?(o>=this.minX&&o+t<a.width&&(this.lastPageX=e.pageX,this.container.style.left=o+"px"),l>=this.minY&&l+n<a.height&&(this.lastPageY=e.pageY,this.container.style.top=l+"px")):(this.lastPageX=e.pageX,this.container.style.left=o+"px",this.lastPageY=e.pageY,this.container.style.top=l+"px")}},window.document.addEventListener("mousemove",this.documentDragListener)},unbindDocumentDragListener(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)},bindDocumentDragEndListener(){this.documentDragEndListener=e=>{this.dragging&&(this.dragging=!1,Q.removeClass(document.body,"p-unselectable-text"),this.$emit("dragend",e))},window.document.addEventListener("mouseup",this.documentDragEndListener)},unbindDocumentDragEndListener(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}},computed:{maskClass(){return["p-dialog-mask",{"p-component-overlay p-component-overlay-enter":this.modal},this.getPositionClass()]},dialogClass(){return["p-dialog p-component",{"p-dialog-rtl":this.rtl,"p-dialog-maximized":this.maximizable&&this.maximized,"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},maximizeIconComponent(){return this.maximized?this.minimizeIcon?"span":"WindowMinimizeIcon":this.maximizeIcon?"span":"WindowMaximizeIcon"},maximizeIconClass(){return`p-dialog-header-maximize-icon ${this.maximized?this.minimizeIcon:this.maximizeIcon}`},ariaId(){return qi()},ariaLabelledById(){return this.header!=null||this.$attrs["aria-labelledby"]!==null?this.ariaId+"_header":null},closeAriaLabel(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},attributeSelector(){return qi()},contentStyleClass(){return["p-dialog-content",this.contentClass]}},directives:{ripple:Ws,focustrap:mk},components:{Portal:pa,WindowMinimizeIcon:h_,WindowMaximizeIcon:u_,TimesIcon:zs}};const Ek=["aria-labelledby","aria-modal"],Tk=["id"],Sk=["autofocus","tabindex"],Ak=["autofocus","aria-label"];function kk(e,t,n,i,s,r){const o=Ye("Portal"),l=Hi("ripple"),a=Hi("focustrap");return I(),ue(o,{appendTo:n.appendTo},{default:je(()=>[s.containerVisible?(I(),L("div",E({key:0,ref:r.maskRef,class:r.maskClass,onClick:t[3]||(t[3]=(...c)=>r.onMaskClick&&r.onMaskClick(...c))},e.ptm("mask")),[fe(qr,{name:"p-dialog",onBeforeEnter:r.onBeforeEnter,onEnter:r.onEnter,onBeforeLeave:r.onBeforeLeave,onLeave:r.onLeave,onAfterLeave:r.onAfterLeave,appear:""},{default:je(()=>[n.visible?fn((I(),L("div",E({key:0,ref:r.containerRef,class:r.dialogClass,role:"dialog","aria-labelledby":r.ariaLabelledById,"aria-modal":n.modal},{...e.$attrs,...e.ptm("root")}),[n.showHeader?(I(),L("div",E({key:0,ref:r.headerContainerRef,class:"p-dialog-header",onMousedown:t[2]||(t[2]=(...c)=>r.initDrag&&r.initDrag(...c))},e.ptm("header")),[he(e.$slots,"header",{},()=>[n.header?(I(),L("span",E({key:0,id:r.ariaLabelledById,class:"p-dialog-title"},e.ptm("headerTitle")),Je(n.header),17,Tk)):de("",!0)]),P("div",E({class:"p-dialog-header-icons"},e.ptm("headerIcons")),[n.maximizable?fn((I(),L("button",E({key:0,ref:r.maximizableRef,autofocus:s.focusableMax,class:"p-dialog-header-icon p-dialog-header-maximize p-link",onClick:t[0]||(t[0]=(...c)=>r.maximize&&r.maximize(...c)),type:"button",tabindex:n.maximizable?"0":"-1"},e.ptm("maximizableButton")),[he(e.$slots,"maximizeicon",{maximized:s.maximized},()=>[(I(),ue(tt(r.maximizeIconComponent),E({class:r.maximizeIconClass},e.ptm("maximizableIcon")),null,16,["class"]))])],16,Sk)),[[l]]):de("",!0),n.closable?fn((I(),L("button",E({key:1,ref:r.closeButtonRef,autofocus:s.focusableClose,class:"p-dialog-header-icon p-dialog-header-close p-link",onClick:t[1]||(t[1]=(...c)=>r.close&&r.close(...c)),"aria-label":r.closeAriaLabel,type:"button"},{...n.closeButtonProps,...e.ptm("closeButton")}),[he(e.$slots,"closeicon",{},()=>[(I(),ue(tt(n.closeIcon?"span":"TimesIcon"),E({class:["p-dialog-header-close-icon",n.closeIcon]},e.ptm("closeButtonIcon")),null,16,["class"]))])],16,Ak)),[[l]]):de("",!0)],16)],16)):de("",!0),P("div",E({ref:r.contentRef,class:r.contentStyleClass,style:n.contentStyle},{...n.contentProps,...e.ptm("content")}),[he(e.$slots,"default")],16),n.footer||e.$slots.footer?(I(),L("div",E({key:1,ref:r.footerContainerRef,class:"p-dialog-footer"},e.ptm("footer")),[he(e.$slots,"footer",{},()=>[ht(Je(n.footer),1)])],16)):de("",!0)],16,Ek)),[[a,{disabled:!n.modal}]]):de("",!0)]),_:3},8,["onBeforeEnter","onEnter","onBeforeLeave","onLeave","onAfterLeave"])],16)):de("",!0)]),_:3},8,["appendTo"])}function Rk(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",n==="top"&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}var Pk=`
.p-dialog-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
}
.p-dialog-mask.p-component-overlay {
    pointer-events: auto;
}
.p-dialog {
    display: flex;
    flex-direction: column;
    pointer-events: auto;
    max-height: 90%;
    transform: scale(1);
}
.p-dialog-content {
    overflow-y: auto;
}
.p-dialog-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
}
.p-dialog-footer {
    flex-shrink: 0;
}
.p-dialog .p-dialog-header-icons {
    display: flex;
    align-items: center;
}
.p-dialog .p-dialog-header-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
}

/* Fluid */
.p-fluid .p-dialog-footer .p-button {
    width: auto;
}

/* Animation */
/* Center */
.p-dialog-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}
.p-dialog-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.p-dialog-enter-from,
.p-dialog-leave-to {
    opacity: 0;
    transform: scale(0.7);
}

/* Top, Bottom, Left, Right, Top* and Bottom* */
.p-dialog-top .p-dialog,
.p-dialog-bottom .p-dialog,
.p-dialog-left .p-dialog,
.p-dialog-right .p-dialog,
.p-dialog-topleft .p-dialog,
.p-dialog-topright .p-dialog,
.p-dialog-bottomleft .p-dialog,
.p-dialog-bottomright .p-dialog {
    margin: 0.75rem;
    transform: translate3d(0px, 0px, 0px);
}
.p-dialog-top .p-dialog-enter-active,
.p-dialog-top .p-dialog-leave-active,
.p-dialog-bottom .p-dialog-enter-active,
.p-dialog-bottom .p-dialog-leave-active,
.p-dialog-left .p-dialog-enter-active,
.p-dialog-left .p-dialog-leave-active,
.p-dialog-right .p-dialog-enter-active,
.p-dialog-right .p-dialog-leave-active,
.p-dialog-topleft .p-dialog-enter-active,
.p-dialog-topleft .p-dialog-leave-active,
.p-dialog-topright .p-dialog-enter-active,
.p-dialog-topright .p-dialog-leave-active,
.p-dialog-bottomleft .p-dialog-enter-active,
.p-dialog-bottomleft .p-dialog-leave-active,
.p-dialog-bottomright .p-dialog-enter-active,
.p-dialog-bottomright .p-dialog-leave-active {
    transition: all 0.3s ease-out;
}
.p-dialog-top .p-dialog-enter-from,
.p-dialog-top .p-dialog-leave-to {
    transform: translate3d(0px, -100%, 0px);
}
.p-dialog-bottom .p-dialog-enter-from,
.p-dialog-bottom .p-dialog-leave-to {
    transform: translate3d(0px, 100%, 0px);
}
.p-dialog-left .p-dialog-enter-from,
.p-dialog-left .p-dialog-leave-to,
.p-dialog-topleft .p-dialog-enter-from,
.p-dialog-topleft .p-dialog-leave-to,
.p-dialog-bottomleft .p-dialog-enter-from,
.p-dialog-bottomleft .p-dialog-leave-to {
    transform: translate3d(-100%, 0px, 0px);
}
.p-dialog-right .p-dialog-enter-from,
.p-dialog-right .p-dialog-leave-to,
.p-dialog-topright .p-dialog-enter-from,
.p-dialog-topright .p-dialog-leave-to,
.p-dialog-bottomright .p-dialog-enter-from,
.p-dialog-bottomright .p-dialog-leave-to {
    transform: translate3d(100%, 0px, 0px);
}

/* Maximize */
.p-dialog-maximized {
    -webkit-transition: none;
    transition: none;
    transform: none;
    width: 100vw !important;
    height: 100vh !important;
    top: 0px !important;
    left: 0px !important;
    max-height: 100%;
    height: 100%;
}
.p-dialog-maximized .p-dialog-content {
    flex-grow: 1;
}

/* Position */
.p-dialog-left {
    justify-content: flex-start;
}
.p-dialog-right {
    justify-content: flex-end;
}
.p-dialog-top {
    align-items: flex-start;
}
.p-dialog-topleft {
    justify-content: flex-start;
    align-items: flex-start;
}
.p-dialog-topright {
    justify-content: flex-end;
    align-items: flex-start;
}
.p-dialog-bottom {
    align-items: flex-end;
}
.p-dialog-bottomleft {
    justify-content: flex-start;
    align-items: flex-end;
}
.p-dialog-bottomright {
    justify-content: flex-end;
    align-items: flex-end;
}
.p-confirm-dialog .p-dialog-content {
    display: flex;
    align-items: center;
}
`;Rk(Pk);d_.render=kk;var f_={name:"EyeIcon",extends:xt};const xk=P("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z",fill:"currentColor"},null,-1),Ok=[xk];function Lk(e,t,n,i,s,r){return I(),L("svg",E({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),Ok,16)}f_.render=Lk;var p_={name:"EyeSlashIcon",extends:xt};const Nk=P("g",{"clip-path":"url(#clip0_287_10550)"},[P("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M13.9414 6.74792C13.9437 6.75295 13.9455 6.757 13.9469 6.76003C13.982 6.8394 14.0001 6.9252 14.0001 7.01195C14.0001 7.0987 13.982 7.1845 13.9469 7.26386C13.6004 8.00059 13.1711 8.69549 12.6674 9.33515C12.6115 9.4071 12.54 9.46538 12.4582 9.50556C12.3765 9.54574 12.2866 9.56678 12.1955 9.56707C12.0834 9.56671 11.9737 9.53496 11.8788 9.47541C11.7838 9.41586 11.7074 9.3309 11.6583 9.23015C11.6092 9.12941 11.5893 9.01691 11.6008 8.90543C11.6124 8.79394 11.6549 8.68793 11.7237 8.5994C12.1065 8.09726 12.4437 7.56199 12.7313 6.99995C12.2595 6.08027 10.3402 2.8014 6.99732 2.8014C6.63723 2.80218 6.27816 2.83969 5.92569 2.91336C5.77666 2.93304 5.62568 2.89606 5.50263 2.80972C5.37958 2.72337 5.29344 2.59398 5.26125 2.44714C5.22907 2.30031 5.2532 2.14674 5.32885 2.01685C5.40451 1.88696 5.52618 1.79021 5.66978 1.74576C6.10574 1.64961 6.55089 1.60134 6.99732 1.60181C11.5916 1.60181 13.7864 6.40856 13.9414 6.74792ZM2.20333 1.61685C2.35871 1.61411 2.5091 1.67179 2.6228 1.77774L12.2195 11.3744C12.3318 11.4869 12.3949 11.6393 12.3949 11.7983C12.3949 11.9572 12.3318 12.1097 12.2195 12.2221C12.107 12.3345 11.9546 12.3976 11.7956 12.3976C11.6367 12.3976 11.4842 12.3345 11.3718 12.2221L10.5081 11.3584C9.46549 12.0426 8.24432 12.4042 6.99729 12.3981C2.403 12.3981 0.208197 7.59135 0.0532336 7.25198C0.0509364 7.24694 0.0490875 7.2429 0.0476856 7.23986C0.0162332 7.16518 3.05176e-05 7.08497 3.05176e-05 7.00394C3.05176e-05 6.92291 0.0162332 6.8427 0.0476856 6.76802C0.631261 5.47831 1.46902 4.31959 2.51084 3.36119L1.77509 2.62545C1.66914 2.51175 1.61146 2.36136 1.61421 2.20597C1.61695 2.05059 1.6799 1.90233 1.78979 1.79244C1.89968 1.68254 2.04794 1.6196 2.20333 1.61685ZM7.45314 8.35147L5.68574 6.57609V6.5361C5.5872 6.78938 5.56498 7.06597 5.62183 7.33173C5.67868 7.59749 5.8121 7.84078 6.00563 8.03158C6.19567 8.21043 6.43052 8.33458 6.68533 8.39089C6.94014 8.44721 7.20543 8.43359 7.45314 8.35147ZM1.26327 6.99994C1.7351 7.91163 3.64645 11.1985 6.99729 11.1985C7.9267 11.2048 8.8408 10.9618 9.64438 10.4947L8.35682 9.20718C7.86027 9.51441 7.27449 9.64491 6.69448 9.57752C6.11446 9.51014 5.57421 9.24881 5.16131 8.83592C4.74842 8.42303 4.4871 7.88277 4.41971 7.30276C4.35232 6.72274 4.48282 6.13697 4.79005 5.64041L3.35855 4.2089C2.4954 5.00336 1.78523 5.94935 1.26327 6.99994Z",fill:"currentColor"})],-1),Dk=P("defs",null,[P("clipPath",{id:"clip0_287_10550"},[P("rect",{width:"14",height:"14",fill:"white"})])],-1),Mk=[Nk,Dk];function Fk(e,t,n,i,s,r){return I(),L("svg",E({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),Mk,16)}p_.render=Fk;var Bk=Jy(),m_={name:"Password",extends:Tt,emits:["update:modelValue","change","focus","blur","invalid"],props:{modelValue:String,promptLabel:{type:String,default:null},mediumRegex:{type:String,default:"^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"},strongRegex:{type:String,default:"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"},weakLabel:{type:String,default:null},mediumLabel:{type:String,default:null},strongLabel:{type:String,default:null},feedback:{type:Boolean,default:!0},appendTo:{type:String,default:"body"},toggleMask:{type:Boolean,default:!1},hideIcon:{type:String,default:void 0},showIcon:{type:String,default:void 0},disabled:{type:Boolean,default:!1},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},inputProps:{type:null,default:null},panelId:{type:String,default:null},panelClass:{type:[String,Object],default:null},panelStyle:{type:Object,default:null},panelProps:{type:null,default:null},"aria-labelledby":{type:String,default:null},"aria-label":{type:String,default:null}},data(){return{overlayVisible:!1,meter:null,infoText:null,focused:!1,unmasked:!1}},mediumCheckRegExp:null,strongCheckRegExp:null,resizeListener:null,scrollHandler:null,overlay:null,mounted(){this.infoText=this.promptText,this.mediumCheckRegExp=new RegExp(this.mediumRegex),this.strongCheckRegExp=new RegExp(this.strongRegex)},beforeUnmount(){this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(en.clear(this.overlay),this.overlay=null)},methods:{onOverlayEnter(e){en.set("overlay",e,this.$primevue.config.zIndex.overlay),this.alignOverlay(),this.bindScrollListener(),this.bindResizeListener()},onOverlayLeave(){this.unbindScrollListener(),this.unbindResizeListener(),this.overlay=null},onOverlayAfterLeave(e){en.clear(e)},alignOverlay(){this.appendTo==="self"?Q.relativePosition(this.overlay,this.$refs.input.$el):(this.overlay.style.minWidth=Q.getOuterWidth(this.$refs.input.$el)+"px",Q.absolutePosition(this.overlay,this.$refs.input.$el))},testStrength(e){let t=0;return this.strongCheckRegExp.test(e)?t=3:this.mediumCheckRegExp.test(e)?t=2:e.length&&(t=1),t},onInput(e){this.$emit("update:modelValue",e.target.value)},onFocus(e){this.focused=!0,this.feedback&&(this.setPasswordMeter(this.modelValue),this.overlayVisible=!0),this.$emit("focus",e)},onBlur(e){this.focused=!1,this.feedback&&(this.overlayVisible=!1),this.$emit("blur",e)},onKeyUp(e){if(this.feedback){const t=e.target.value,{meter:n,label:i}=this.checkPasswordStrength(t);if(this.meter=n,this.infoText=i,e.code==="Escape"){this.overlayVisible&&(this.overlayVisible=!1);return}this.overlayVisible||(this.overlayVisible=!0)}},setPasswordMeter(){if(!this.modelValue)return;const{meter:e,label:t}=this.checkPasswordStrength(this.modelValue);this.meter=e,this.infoText=t,this.overlayVisible||(this.overlayVisible=!0)},checkPasswordStrength(e){let t=null,n=null;switch(this.testStrength(e)){case 1:t=this.weakText,n={strength:"weak",width:"33.33%"};break;case 2:t=this.mediumText,n={strength:"medium",width:"66.66%"};break;case 3:t=this.strongText,n={strength:"strong",width:"100%"};break;default:t=this.promptText,n=null;break}return{label:t,meter:n}},onInvalid(e){this.$emit("invalid",e)},bindScrollListener(){this.scrollHandler||(this.scrollHandler=new ES(this.$refs.input.$el,()=>{this.overlayVisible&&(this.overlayVisible=!1)})),this.scrollHandler.bindScrollListener()},unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener(){this.resizeListener||(this.resizeListener=()=>{this.overlayVisible&&!Q.isTouchDevice()&&(this.overlayVisible=!1)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},overlayRef(e){this.overlay=e},onMaskToggle(){this.unmasked=!this.unmasked},onOverlayClick(e){Bk.emit("overlay-click",{originalEvent:e,target:this.$el})}},computed:{containerClass(){return["p-password p-component p-inputwrapper",{"p-inputwrapper-filled":this.filled,"p-inputwrapper-focus":this.focused,"p-input-icon-right":this.toggleMask}]},inputFieldClass(){return["p-password-input",this.inputClass,{"p-disabled":this.disabled}]},panelStyleClass(){return["p-password-panel p-component",this.panelClass,{"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},strengthClass(){return`p-password-strength ${this.meter?this.meter.strength:""}`},inputType(){return this.unmasked?"text":"password"},filled(){return this.modelValue!=null&&this.modelValue.toString().length>0},weakText(){return this.weakLabel||this.$primevue.config.locale.weak},mediumText(){return this.mediumLabel||this.$primevue.config.locale.medium},strongText(){return this.strongLabel||this.$primevue.config.locale.strong},promptText(){return this.promptLabel||this.$primevue.config.locale.passwordPrompt},panelUniqueId(){return qi()+"_panel"}},components:{PInputText:Wh,Portal:pa,EyeSlashIcon:p_,EyeIcon:f_}};const Uk=["id"];function Hk(e,t,n,i,s,r){const o=Ye("PInputText"),l=Ye("Portal");return I(),L("div",E({class:r.containerClass},e.ptm("root")),[fe(o,E({ref:"input",id:n.inputId,type:r.inputType,class:r.inputFieldClass,style:n.inputStyle,value:n.modelValue,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-controls":n.panelProps&&n.panelProps.id||n.panelId||r.panelUniqueId,"aria-expanded":s.overlayVisible,"aria-haspopup":!0,placeholder:n.placeholder,required:n.required,onInput:r.onInput,onFocus:r.onFocus,onBlur:r.onBlur,onKeyup:r.onKeyUp,onInvalid:r.onInvalid},{...n.inputProps,...e.ptm("input")}),null,16,["id","type","class","style","value","aria-labelledby","aria-label","aria-controls","aria-expanded","placeholder","required","onInput","onFocus","onBlur","onKeyup","onInvalid"]),n.toggleMask&&s.unmasked?he(e.$slots,"hideicon",{key:0,onClick:r.onMaskToggle},()=>[(I(),ue(tt(n.hideIcon?"i":"EyeSlashIcon"),E({class:n.hideIcon,onClick:r.onMaskToggle},e.ptm("hideIcon")),null,16,["class","onClick"]))]):de("",!0),n.toggleMask&&!s.unmasked?he(e.$slots,"showicon",{key:1,onClick:r.onMaskToggle},()=>[(I(),ue(tt(n.showIcon?"i":"EyeIcon"),E({class:n.showIcon,onClick:r.onMaskToggle},e.ptm("showIcon")),null,16,["class","onClick"]))]):de("",!0),P("span",E({class:"p-hidden-accessible","aria-live":"polite"},e.ptm("hiddenAccesible")),Je(s.infoText),17),fe(l,{appendTo:n.appendTo},{default:je(()=>[fe(qr,{name:"p-connected-overlay",onEnter:r.onOverlayEnter,onLeave:r.onOverlayLeave,onAfterLeave:r.onOverlayAfterLeave},{default:je(()=>[s.overlayVisible?(I(),L("div",E({key:0,ref:r.overlayRef,id:n.panelId||r.panelUniqueId,class:r.panelStyleClass,style:n.panelStyle,onClick:t[0]||(t[0]=(...a)=>r.onOverlayClick&&r.onOverlayClick(...a))},{...n.panelProps,...e.ptm("panel")}),[he(e.$slots,"header"),he(e.$slots,"content",{},()=>[P("div",E({class:"p-password-meter"},e.ptm("meter")),[P("div",E({class:r.strengthClass,style:{width:s.meter?s.meter.width:""}},e.ptm("meterLabel")),null,16)],16),P("div",E({class:"p-password-info"},e.ptm("info")),Je(s.infoText),17)]),he(e.$slots,"footer")],16,Uk)):de("",!0)]),_:3},8,["onEnter","onLeave","onAfterLeave"])]),_:3},8,["appendTo"])],16)}function $k(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",n==="top"&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}var Vk=`
.p-password {
    position: relative;
    display: inline-flex;
}
.p-password-panel {
    position: absolute;
    top: 0;
    left: 0;
}
.p-password .p-password-panel {
    min-width: 100%;
}
.p-password-meter {
    height: 10px;
}
.p-password-strength {
    height: 100%;
    width: 0;
    transition: width 1s ease-in-out;
}
.p-fluid .p-password {
    display: flex;
}
.p-password-input::-ms-reveal,
.p-password-input::-ms-clear {
    display: none;
}
`;$k(Vk);m_.render=Hk;var g_={name:"PlusIcon",extends:xt};const zk=P("g",{"clip-path":"url(#clip0_306_11939)"},[P("path",{d:"M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z",fill:"currentColor"})],-1),Wk=P("defs",null,[P("clipPath",{id:"clip0_306_11939"},[P("rect",{width:"14",height:"14",fill:"white"})])],-1),jk=[zk,Wk];function Kk(e,t,n,i,s,r){return I(),L("svg",E({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),jk,16)}g_.render=Kk;var y_={name:"UploadIcon",extends:xt};const qk=P("g",{"clip-path":"url(#clip0_414_21072)"},[P("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.58942 9.82197C6.70165 9.93405 6.85328 9.99793 7.012 10C7.17071 9.99793 7.32234 9.93405 7.43458 9.82197C7.54681 9.7099 7.61079 9.55849 7.61286 9.4V2.04798L9.79204 4.22402C9.84752 4.28011 9.91365 4.32457 9.98657 4.35479C10.0595 4.38502 10.1377 4.40039 10.2167 4.40002C10.2956 4.40039 10.3738 4.38502 10.4467 4.35479C10.5197 4.32457 10.5858 4.28011 10.6413 4.22402C10.7538 4.11152 10.817 3.95902 10.817 3.80002C10.817 3.64102 10.7538 3.48852 10.6413 3.37602L7.45127 0.190618C7.44656 0.185584 7.44176 0.180622 7.43687 0.175736C7.32419 0.063214 7.17136 0 7.012 0C6.85264 0 6.69981 0.063214 6.58712 0.175736C6.58181 0.181045 6.5766 0.186443 6.5715 0.191927L3.38282 3.37602C3.27669 3.48976 3.2189 3.6402 3.22165 3.79564C3.2244 3.95108 3.28746 4.09939 3.39755 4.20932C3.50764 4.31925 3.65616 4.38222 3.81182 4.38496C3.96749 4.3877 4.11814 4.33001 4.23204 4.22402L6.41113 2.04807V9.4C6.41321 9.55849 6.47718 9.7099 6.58942 9.82197ZM11.9952 14H2.02883C1.751 13.9887 1.47813 13.9228 1.22584 13.8061C0.973545 13.6894 0.746779 13.5241 0.558517 13.3197C0.370254 13.1154 0.22419 12.876 0.128681 12.6152C0.0331723 12.3545 -0.00990605 12.0775 0.0019109 11.8V9.40005C0.0019109 9.24092 0.065216 9.08831 0.1779 8.97579C0.290584 8.86326 0.443416 8.80005 0.602775 8.80005C0.762134 8.80005 0.914966 8.86326 1.02765 8.97579C1.14033 9.08831 1.20364 9.24092 1.20364 9.40005V11.8C1.18295 12.0376 1.25463 12.274 1.40379 12.4602C1.55296 12.6463 1.76817 12.7681 2.00479 12.8H11.9952C12.2318 12.7681 12.447 12.6463 12.5962 12.4602C12.7453 12.274 12.817 12.0376 12.7963 11.8V9.40005C12.7963 9.24092 12.8596 9.08831 12.9723 8.97579C13.085 8.86326 13.2378 8.80005 13.3972 8.80005C13.5565 8.80005 13.7094 8.86326 13.8221 8.97579C13.9347 9.08831 13.998 9.24092 13.998 9.40005V11.8C14.022 12.3563 13.8251 12.8996 13.45 13.3116C13.0749 13.7236 12.552 13.971 11.9952 14Z",fill:"currentColor"})],-1),Gk=P("defs",null,[P("clipPath",{id:"clip0_414_21072"},[P("rect",{width:"14",height:"14",fill:"white"})])],-1),Yk=[qk,Gk];function Xk(e,t,n,i,s,r){return I(),L("svg",E({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),Yk,16)}y_.render=Xk;var jh={name:"Message",extends:Tt,emits:["close"],props:{severity:{type:String,default:"info"},closable:{type:Boolean,default:!0},sticky:{type:Boolean,default:!0},life:{type:Number,default:3e3},icon:{type:String,default:void 0},closeIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null}},timeout:null,data(){return{visible:!0}},mounted(){this.sticky||this.closeAfterDelay()},methods:{close(e){this.visible=!1,this.$emit("close",e)},closeAfterDelay(){setTimeout(()=>{this.visible=!1},this.life)}},computed:{containerClass(){return"p-message p-component p-message-"+this.severity},iconComponent(){return{info:jr,success:zr,warn:Wr,error:Kr}[this.severity]},closeAriaLabel(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{ripple:Ws},components:{TimesIcon:zs,InfoCircleIcon:jr,CheckIcon:zr,ExclamationTriangleIcon:Wr,TimesCircleIcon:Kr}};const Jk=["aria-label"];function Zk(e,t,n,i,s,r){const o=Ye("TimesIcon"),l=Hi("ripple");return I(),ue(qr,{name:"p-message",appear:""},{default:je(()=>[fn(P("div",E({class:r.containerClass,role:"alert","aria-live":"assertive","aria-atomic":"true"},e.ptm("root")),[P("div",E({class:"p-message-wrapper"},e.ptm("wrapper")),[he(e.$slots,"messageicon",{class:"p-message-icon"},()=>[(I(),ue(tt(n.icon?"span":r.iconComponent),E({class:["p-message-icon",n.icon]},e.ptm("icon")),null,16,["class"]))]),P("div",E({class:"p-message-text"},e.ptm("text")),[he(e.$slots,"default")],16),n.closable?fn((I(),L("button",E({key:0,class:"p-message-close p-link","aria-label":r.closeAriaLabel,type:"button",onClick:t[0]||(t[0]=a=>r.close(a))},{...n.closeButtonProps,...e.ptm("button")}),[he(e.$slots,"closeicon",{class:"p-message-close-icon"},()=>[n.closeIcon?(I(),L("i",E({key:0,class:["p-message-close-icon",n.closeIcon]},e.ptm("buttonIcon")),null,16)):(I(),ue(o,E({key:1,class:"p-message-close-icon"},e.ptm("buttonIcon")),null,16))])],16,Jk)),[[l]]):de("",!0)],16)],16),[[Sw,s.visible]])]),_:3})}function Qk(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",n==="top"&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}var e8=`
.p-message-wrapper {
    display: flex;
    align-items: center;
}
.p-message-close {
    display: flex;
    align-items: center;
    justify-content: center;
}
.p-message-close.p-link {
    margin-left: auto;
    overflow: hidden;
    position: relative;
}
.p-message-enter-from {
    opacity: 0;
}
.p-message-enter-active {
    transition: opacity 0.3s;
}
.p-message.p-message-leave-from {
    max-height: 1000px;
}
.p-message.p-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin: 0 !important;
}
.p-message-leave-active {
    overflow: hidden;
    transition: max-height 0.3s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin 0.15s;
}
.p-message-leave-active .p-message-close {
    display: none;
}
`;Qk(e8);jh.render=Zk;var __={name:"ProgressBar",extends:Tt,props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},computed:{containerClass(){return["p-progressbar p-component",{"p-progressbar-determinate":this.determinate,"p-progressbar-indeterminate":this.indeterminate}]},progressStyle(){return{width:this.value+"%",display:"flex"}},indeterminate(){return this.mode==="indeterminate"},determinate(){return this.mode==="determinate"}}};const t8=["aria-valuenow"];function n8(e,t,n,i,s,r){return I(),L("div",E({role:"progressbar",class:r.containerClass,"aria-valuemin":"0","aria-valuenow":n.value,"aria-valuemax":"100"},e.ptm("root")),[r.determinate?(I(),L("div",E({key:0,class:"p-progressbar-value p-progressbar-value-animate",style:r.progressStyle},e.ptm("value")),[n.value!=null&&n.value!==0&&n.showValue?(I(),L("div",E({key:0,class:"p-progressbar-label"},e.ptm("label")),[he(e.$slots,"default",{},()=>[ht(Je(n.value+"%"),1)])],16)):de("",!0)],16)):de("",!0),r.indeterminate?(I(),L("div",E({key:1,class:"p-progressbar-indeterminate-container"},e.ptm("root")),[P("div",E({class:"p-progressbar-value p-progressbar-value-animate"},e.ptm("value")),null,16)],16)):de("",!0)],16,t8)}function i8(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",n==="top"&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}var s8=`
.p-progressbar {
    position: relative;
    overflow: hidden;
}
.p-progressbar-determinate .p-progressbar-value {
    height: 100%;
    width: 0%;
    position: absolute;
    display: none;
    border: 0 none;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}
.p-progressbar-determinate .p-progressbar-label {
    display: inline-flex;
}
.p-progressbar-determinate .p-progressbar-value-animate {
    transition: width 1s ease-in-out;
}
.p-progressbar-indeterminate .p-progressbar-value::before {
    content: '';
    position: absolute;
    background-color: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
    -webkit-animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}
.p-progressbar-indeterminate .p-progressbar-value::after {
    content: '';
    position: absolute;
    background-color: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
    -webkit-animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    -webkit-animation-delay: 1.15s;
    animation-delay: 1.15s;
}
@-webkit-keyframes p-progressbar-indeterminate-anim {
0% {
        left: -35%;
        right: 100%;
}
60% {
        left: 100%;
        right: -90%;
}
100% {
        left: 100%;
        right: -90%;
}
}
@keyframes p-progressbar-indeterminate-anim {
0% {
        left: -35%;
        right: 100%;
}
60% {
        left: 100%;
        right: -90%;
}
100% {
        left: 100%;
        right: -90%;
}
}
@-webkit-keyframes p-progressbar-indeterminate-anim-short {
0% {
        left: -200%;
        right: 100%;
}
60% {
        left: 107%;
        right: -8%;
}
100% {
        left: 107%;
        right: -8%;
}
}
@keyframes p-progressbar-indeterminate-anim-short {
0% {
        left: -200%;
        right: 100%;
}
60% {
        left: 107%;
        right: -8%;
}
100% {
        left: 107%;
        right: -8%;
}
}
`;i8(s8);__.render=n8;var v_={name:"Badge",extends:Tt,props:{value:{type:[String,Number],default:null},severity:{type:String,default:null},size:{type:String,default:null}},computed:{containerClass(){return this.$slots.default?"p-overlay-badge":this.badgeClass},badgeClass(){return["p-badge p-component",{"p-badge-no-gutter":$e.isNotEmpty(this.value)&&String(this.value).length===1,"p-badge-dot":$e.isEmpty(this.value)&&!this.$slots.default,"p-badge-lg":this.size==="large","p-badge-xl":this.size==="xlarge","p-badge-info":this.severity==="info","p-badge-success":this.severity==="success","p-badge-warning":this.severity==="warning","p-badge-danger":this.severity==="danger"}]}}};function r8(e,t,n,i,s,r){return I(),L("span",E({class:r.badgeClass},e.ptm("root")),[he(e.$slots,"default",{},()=>[ht(Je(n.value),1)])],16)}v_.render=r8;var b_={extends:Tt,emits:["remove"],props:{files:{type:Array,default:()=>[]},badgeSeverity:{type:String,default:"warning"},badgeValue:{type:String,default:null},previewWidth:{type:Number,default:50},templates:{type:null,default:null}},methods:{formatSize(e){if(e===0)return"0 B";let t=1e3,n=3,i=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],s=Math.floor(Math.log(e)/Math.log(t));return parseFloat((e/Math.pow(t,s)).toFixed(n))+" "+i[s]}},components:{FileUploadButton:ma,FileUploadBadge:v_,TimesIcon:zs}};const o8=["alt","src","width"];function l8(e,t,n,i,s,r){const o=Ye("FileUploadBadge"),l=Ye("TimesIcon"),a=Ye("FileUploadButton");return I(!0),L(De,null,Cs(n.files,(c,d)=>(I(),L("div",E({key:c.name+c.type+c.size,class:"p-fileupload-file"},e.ptm("file")),[P("img",E({role:"presentation",class:"p-fileupload-file-thumbnail",alt:c.name,src:c.objectURL,width:n.previewWidth},e.ptm("thumbnail")),null,16,o8),P("div",E({class:"p-fileupload-file-details"},e.ptm("details")),[P("div",E({class:"p-fileupload-file-name"},e.ptm("fileName")),Je(c.name),17),P("span",E({class:"p-fileupload-file-size"},e.ptm("fileSize")),Je(r.formatSize(c.size)),17),fe(o,{value:n.badgeValue,class:"p-fileupload-file-badge",severity:n.badgeSeverity,pt:e.ptm("badge")},null,8,["value","severity","pt"])],16),P("div",E({class:"p-fileupload-file-actions"},e.ptm("actions")),[fe(a,{onClick:f=>e.$emit("remove",d),text:"",rounded:"",severity:"danger",class:"p-fileupload-file-remove",pt:e.ptm("removeButton")},{icon:je(f=>[n.templates.fileremoveicon?(I(),ue(tt(n.templates.fileremoveicon),{key:0,class:Wn(f.class),file:c,index:d},null,8,["class","file","index"])):(I(),ue(l,E({key:1,class:f.class,"aria-hidden":"true"},e.ptm("removeButton").icon),null,16,["class"]))]),_:2},1032,["onClick","pt"])],16)],16))),128)}b_.render=l8;var C_={name:"FileUpload",extends:Tt,emits:["select","uploader","before-upload","progress","upload","error","before-send","clear","remove","remove-uploaded-file"],props:{name:{type:String,default:null},url:{type:String,default:null},mode:{type:String,default:"advanced"},multiple:{type:Boolean,default:!1},accept:{type:String,default:null},disabled:{type:Boolean,default:!1},auto:{type:Boolean,default:!1},maxFileSize:{type:Number,default:null},invalidFileSizeMessage:{type:String,default:"{0}: Invalid file size, file size should be smaller than {1}."},invalidFileTypeMessage:{type:String,default:"{0}: Invalid file type, allowed file types: {1}."},fileLimit:{type:Number,default:null},invalidFileLimitMessage:{type:String,default:"Maximum number of files exceeded, limit is {0} at most."},withCredentials:{type:Boolean,default:!1},previewWidth:{type:Number,default:50},chooseLabel:{type:String,default:null},uploadLabel:{type:String,default:null},cancelLabel:{type:String,default:null},customUpload:{type:Boolean,default:!1},showUploadButton:{type:Boolean,default:!0},showCancelButton:{type:Boolean,default:!0},chooseIcon:{type:String,default:void 0},uploadIcon:{type:String,default:void 0},cancelIcon:{type:String,default:void 0},style:null,class:null},duplicateIEEvent:!1,data(){return{uploadedFileCount:0,files:[],messages:[],focused:!1,progress:null,uploadedFiles:[]}},methods:{onFileSelect(e){if(e.type!=="drop"&&this.isIE11()&&this.duplicateIEEvent){this.duplicateIEEvent=!1;return}this.messages=[],this.files=this.files||[];let t=e.dataTransfer?e.dataTransfer.files:e.target.files;for(let n of t)this.isFileSelected(n)||this.validate(n)&&(this.isImage(n)&&(n.objectURL=window.URL.createObjectURL(n)),this.files.push(n));this.$emit("select",{originalEvent:e,files:this.files}),this.fileLimit&&this.checkFileLimit(),this.auto&&this.hasFiles&&!this.isFileLimitExceeded()&&this.upload(),e.type!=="drop"&&this.isIE11()?this.clearIEInput():this.clearInputElement()},choose(){this.$refs.fileInput.click()},upload(){if(this.customUpload)this.fileLimit&&(this.uploadedFileCount+=this.files.length),this.$emit("uploader",{files:this.files}),this.clear();else{let e=new XMLHttpRequest,t=new FormData;this.$emit("before-upload",{xhr:e,formData:t});for(let n of this.files)t.append(this.name,n,n.name);e.upload.addEventListener("progress",n=>{n.lengthComputable&&(this.progress=Math.round(n.loaded*100/n.total)),this.$emit("progress",{originalEvent:n,progress:this.progress})}),e.onreadystatechange=()=>{e.readyState===4&&(this.progress=0,e.status>=200&&e.status<300?(this.fileLimit&&(this.uploadedFileCount+=this.files.length),this.$emit("upload",{xhr:e,files:this.files})):this.$emit("error",{xhr:e,files:this.files}),this.uploadedFiles.push(...this.files),this.clear())},e.open("POST",this.url,!0),this.$emit("before-send",{xhr:e,formData:t}),e.withCredentials=this.withCredentials,e.send(t)}},clear(){this.files=[],this.messages=null,this.$emit("clear"),this.isAdvanced&&this.clearInputElement()},onFocus(){this.focused=!0},onBlur(){this.focused=!1},isFileSelected(e){if(this.files&&this.files.length){for(let t of this.files)if(t.name+t.type+t.size===e.name+e.type+e.size)return!0}return!1},isIE11(){return!!window.MSInputMethodContext&&!!document.documentMode},validate(e){return this.accept&&!this.isFileTypeValid(e)?(this.messages.push(this.invalidFileTypeMessage.replace("{0}",e.name).replace("{1}",this.accept)),!1):this.maxFileSize&&e.size>this.maxFileSize?(this.messages.push(this.invalidFileSizeMessage.replace("{0}",e.name).replace("{1}",this.formatSize(this.maxFileSize))),!1):!0},isFileTypeValid(e){let t=this.accept.split(",").map(n=>n.trim());for(let n of t)if(this.isWildcard(n)?this.getTypeClass(e.type)===this.getTypeClass(n):e.type==n||this.getFileExtension(e).toLowerCase()===n.toLowerCase())return!0;return!1},getTypeClass(e){return e.substring(0,e.indexOf("/"))},isWildcard(e){return e.indexOf("*")!==-1},getFileExtension(e){return"."+e.name.split(".").pop()},isImage(e){return/^image\//.test(e.type)},onDragEnter(e){this.disabled||(e.stopPropagation(),e.preventDefault())},onDragOver(e){this.disabled||(Q.addClass(this.$refs.content,"p-fileupload-highlight"),e.stopPropagation(),e.preventDefault())},onDragLeave(){this.disabled||Q.removeClass(this.$refs.content,"p-fileupload-highlight")},onDrop(e){if(!this.disabled){Q.removeClass(this.$refs.content,"p-fileupload-highlight"),e.stopPropagation(),e.preventDefault();const t=e.dataTransfer?e.dataTransfer.files:e.target.files;(this.multiple||t&&t.length===1)&&this.onFileSelect(e)}},onBasicUploaderClick(){this.hasFiles?this.upload():this.$refs.fileInput.click()},remove(e){this.clearInputElement();let t=this.files.splice(e,1)[0];this.files=[...this.files],this.$emit("remove",{file:t,files:this.files})},removeUploadedFile(e){let t=this.uploadedFiles.splice(e,1)[0];this.uploadedFiles=[...this.uploadedFiles],this.$emit("remove-uploaded-file",{file:t,files:this.uploadedFiles})},clearInputElement(){this.$refs.fileInput.value=""},clearIEInput(){this.$refs.fileInput&&(this.duplicateIEEvent=!0,this.$refs.fileInput.value="")},formatSize(e){if(e===0)return"0 B";let t=1e3,n=3,i=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],s=Math.floor(Math.log(e)/Math.log(t));return parseFloat((e/Math.pow(t,s)).toFixed(n))+" "+i[s]},isFileLimitExceeded(){return this.fileLimit&&this.fileLimit<=this.files.length+this.uploadedFileCount&&this.focused&&(this.focused=!1),this.fileLimit&&this.fileLimit<this.files.length+this.uploadedFileCount},checkFileLimit(){this.isFileLimitExceeded()&&this.messages.push(this.invalidFileLimitMessage.replace("{0}",this.fileLimit.toString()))},onMessageClose(){this.messages=null}},computed:{isAdvanced(){return this.mode==="advanced"},isBasic(){return this.mode==="basic"},advancedChooseButtonClass(){return["p-button p-component p-fileupload-choose",this.class,{"p-disabled":this.disabled,"p-focus":this.focused}]},basicChooseButtonClass(){return["p-button p-component p-fileupload-choose",this.class,{"p-fileupload-choose-selected":this.hasFiles,"p-disabled":this.disabled,"p-focus":this.focused}]},basicChooseButtonLabel(){return this.auto?this.chooseButtonLabel:this.hasFiles?this.files.map(e=>e.name).join(", "):this.chooseButtonLabel},hasFiles(){return this.files&&this.files.length>0},hasUploadedFiles(){return this.uploadedFiles&&this.uploadedFiles.length>0},chooseDisabled(){return this.disabled||this.fileLimit&&this.fileLimit<=this.files.length+this.uploadedFileCount},uploadDisabled(){return this.disabled||!this.hasFiles||this.fileLimit&&this.fileLimit<this.files.length},cancelDisabled(){return this.disabled||!this.hasFiles},chooseButtonLabel(){return this.chooseLabel||this.$primevue.config.locale.choose},uploadButtonLabel(){return this.uploadLabel||this.$primevue.config.locale.upload},cancelButtonLabel(){return this.cancelLabel||this.$primevue.config.locale.cancel},completedLabel(){return this.$primevue.config.locale.completed},pendingLabel(){return this.$primevue.config.locale.pending}},components:{FileUploadButton:ma,FileUploadProgressBar:__,FileUploadMessage:jh,FileContent:b_,PlusIcon:g_,UploadIcon:y_,TimesIcon:zs},directives:{ripple:Ws}};const a8=["multiple","accept","disabled"],c8=["accept","disabled","multiple"];function u8(e,t,n,i,s,r){const o=Ye("FileUploadButton"),l=Ye("FileUploadProgressBar"),a=Ye("FileUploadMessage"),c=Ye("FileContent"),d=Hi("ripple");return r.isAdvanced?(I(),L("div",E({key:0,class:"p-fileupload p-fileupload-advanced p-component"},e.ptm("root")),[P("input",E({ref:"fileInput",type:"file",onChange:t[0]||(t[0]=(...f)=>r.onFileSelect&&r.onFileSelect(...f)),multiple:n.multiple,accept:n.accept,disabled:r.chooseDisabled},e.ptm("input")),null,16,a8),P("div",E({class:"p-fileupload-buttonbar"},e.ptm("buttonbar")),[he(e.$slots,"header",{files:s.files,uploadedFiles:s.uploadedFiles,chooseCallback:r.choose,uploadCallback:r.upload,clearCallback:r.clear},()=>[fn((I(),L("span",E({class:r.advancedChooseButtonClass,style:n.style,onClick:t[1]||(t[1]=(...f)=>r.choose&&r.choose(...f)),onKeydown:t[2]||(t[2]=sf((...f)=>r.choose&&r.choose(...f),["enter"])),onFocus:t[3]||(t[3]=(...f)=>r.onFocus&&r.onFocus(...f)),onBlur:t[4]||(t[4]=(...f)=>r.onBlur&&r.onBlur(...f)),tabindex:"0"},e.ptm("chooseButton")),[he(e.$slots,"chooseicon",{},()=>[(I(),ue(tt(n.chooseIcon?"span":"PlusIcon"),E({class:["p-button-icon p-button-icon-left",n.chooseIcon],"aria-hidden":"true"},e.ptm("chooseIcon")),null,16,["class"]))]),P("span",E({class:"p-button-label"},e.ptm("chooseButtonLabel")),Je(r.chooseButtonLabel),17)],16)),[[d]]),n.showUploadButton?(I(),ue(o,{key:0,label:r.uploadButtonLabel,onClick:r.upload,disabled:r.uploadDisabled,pt:e.ptm("uploadButton")},{icon:je(f=>[he(e.$slots,"uploadicon",{},()=>[(I(),ue(tt(n.uploadIcon?"span":"UploadIcon"),E({class:[f.class,n.uploadIcon],"aria-hidden":"true"},e.ptm("uploadButton").icon),null,16,["class"]))])]),_:3},8,["label","onClick","disabled","pt"])):de("",!0),n.showCancelButton?(I(),ue(o,{key:1,label:r.cancelButtonLabel,onClick:r.clear,disabled:r.cancelDisabled,pt:e.ptm("cancelButton")},{icon:je(f=>[he(e.$slots,"cancelicon",{},()=>[(I(),ue(tt(n.cancelIcon?"span":"TimesIcon"),E({class:[f.class,n.cancelIcon],"aria-hidden":"true"},e.ptm("cancelButton").icon),null,16,["class"]))])]),_:3},8,["label","onClick","disabled","pt"])):de("",!0)])],16),P("div",E({ref:"content",class:"p-fileupload-content",onDragenter:t[5]||(t[5]=(...f)=>r.onDragEnter&&r.onDragEnter(...f)),onDragover:t[6]||(t[6]=(...f)=>r.onDragOver&&r.onDragOver(...f)),onDragleave:t[7]||(t[7]=(...f)=>r.onDragLeave&&r.onDragLeave(...f)),onDrop:t[8]||(t[8]=(...f)=>r.onDrop&&r.onDrop(...f))},e.ptm("content")),[he(e.$slots,"content",{files:s.files,uploadedFiles:s.uploadedFiles,removeUploadedFileCallback:r.removeUploadedFile,removeFileCallback:r.remove,progress:s.progress,messages:s.messages},()=>[r.hasFiles?(I(),ue(l,{key:0,value:s.progress,showValue:!1,pt:e.ptm("progressbar")},null,8,["value","pt"])):de("",!0),(I(!0),L(De,null,Cs(s.messages,f=>(I(),ue(a,{key:f,severity:"error",onClose:r.onMessageClose,pt:e.ptm("message")},{default:je(()=>[ht(Je(f),1)]),_:2},1032,["onClose","pt"]))),128)),r.hasFiles?(I(),ue(c,{key:1,files:s.files,onRemove:r.remove,badgeValue:r.pendingLabel,previewWidth:n.previewWidth,templates:e.$slots,pt:e.pt},null,8,["files","onRemove","badgeValue","previewWidth","templates","pt"])):de("",!0),fe(c,{files:s.uploadedFiles,onRemove:r.removeUploadedFile,badgeValue:r.completedLabel,badgeSeverity:"success",previewWidth:n.previewWidth,templates:e.$slots,pt:e.pt},null,8,["files","onRemove","badgeValue","previewWidth","templates","pt"])]),e.$slots.empty&&!r.hasFiles&&!r.hasUploadedFiles?(I(),L("div",E({key:0,class:"p-fileupload-empty"},e.ptm("empty")),[he(e.$slots,"empty")],16)):de("",!0)],16)],16)):r.isBasic?(I(),L("div",E({key:1,class:"p-fileupload p-fileupload-basic p-component"},e.ptm("root")),[(I(!0),L(De,null,Cs(s.messages,f=>(I(),ue(a,{key:f,severity:"error",onClose:r.onMessageClose,pt:e.ptm("messages")},{default:je(()=>[ht(Je(f),1)]),_:2},1032,["onClose","pt"]))),128)),fn((I(),L("span",E({class:r.basicChooseButtonClass,style:n.style,onMouseup:t[12]||(t[12]=(...f)=>r.onBasicUploaderClick&&r.onBasicUploaderClick(...f)),onKeydown:t[13]||(t[13]=sf((...f)=>r.choose&&r.choose(...f),["enter"])),onFocus:t[14]||(t[14]=(...f)=>r.onFocus&&r.onFocus(...f)),onBlur:t[15]||(t[15]=(...f)=>r.onBlur&&r.onBlur(...f)),tabindex:"0"},e.ptm("basicButton")),[!r.hasFiles||n.auto?he(e.$slots,"uploadicon",{key:0},()=>[(I(),ue(tt(n.uploadIcon?"span":"UploadIcon"),E({class:["p-button-icon p-button-icon-left",n.uploadIcon],"aria-hidden":"true"},e.ptm("uploadIcon")),null,16,["class"]))]):he(e.$slots,"chooseicon",{key:1},()=>[(I(),ue(tt(n.chooseIcon?"span":"PlusIcon"),E({class:["p-button-icon p-button-icon-left",n.chooseIcon],"aria-hidden":"true"},e.ptm("chooseIcon")),null,16,["class"]))]),P("span",E({class:"p-button-label"},e.ptm("label")),Je(r.basicChooseButtonLabel),17),r.hasFiles?de("",!0):(I(),L("input",E({key:2,ref:"fileInput",type:"file",accept:n.accept,disabled:n.disabled,multiple:n.multiple,onChange:t[9]||(t[9]=(...f)=>r.onFileSelect&&r.onFileSelect(...f)),onFocus:t[10]||(t[10]=(...f)=>r.onFocus&&r.onFocus(...f)),onBlur:t[11]||(t[11]=(...f)=>r.onBlur&&r.onBlur(...f))},e.ptm("input")),null,16,c8))],16)),[[d]])],16)):de("",!0)}function h8(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",n==="top"&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}var d8=`
.p-fileupload-content {
    position: relative;
}
.p-fileupload-content .p-progressbar {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
.p-button.p-fileupload-choose {
    position: relative;
    overflow: hidden;
}
.p-fileupload-buttonbar {
    display: flex;
    flex-wrap: wrap;
}
.p-fileupload > input[type='file'],
.p-fileupload-basic input[type='file'] {
    display: none;
}
.p-fluid .p-fileupload .p-button {
    width: auto;
}
.p-fileupload-file {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}
.p-fileupload-file-thumbnail {
    flex-shrink: 0;
}
.p-fileupload-file-actions {
    margin-left: auto;
}
`;h8(d8);C_.render=u8;var w_={name:"Card",extends:Tt};function f8(e,t,n,i,s,r){return I(),L("div",E({class:"p-card p-component"},e.ptm("root")),[e.$slots.header?(I(),L("div",E({key:0,class:"p-card-header"},e.ptm("header")),[he(e.$slots,"header")],16)):de("",!0),P("div",E({class:"p-card-body"},e.ptm("body")),[e.$slots.title?(I(),L("div",E({key:0,class:"p-card-title"},e.ptm("title")),[he(e.$slots,"title")],16)):de("",!0),e.$slots.subtitle?(I(),L("div",E({key:1,class:"p-card-subtitle"},e.ptm("subtitle")),[he(e.$slots,"subtitle")],16)):de("",!0),P("div",E({class:"p-card-content"},e.ptm("content")),[he(e.$slots,"content")],16),e.$slots.footer?(I(),L("div",E({key:2,class:"p-card-footer"},e.ptm("footer")),[he(e.$slots,"footer")],16)):de("",!0)],16)],16)}w_.render=f8;var I_={name:"Textarea",extends:Tt,emits:["update:modelValue"],props:{modelValue:null,autoResize:Boolean},mounted(){this.$el.offsetParent&&this.autoResize&&this.resize()},updated(){this.$el.offsetParent&&this.autoResize&&this.resize()},methods:{resize(){const e=window.getComputedStyle(this.$el);this.$el.style.height="auto",this.$el.style.height=`calc(${e.borderTopWidth} + ${e.borderBottomWidth} + ${this.$el.scrollHeight}px)`,parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden"},onInput(e){this.autoResize&&this.resize(),this.$emit("update:modelValue",e.target.value)}},computed:{filled(){return this.modelValue!=null&&this.modelValue.toString().length>0}}};const p8=["value"];function m8(e,t,n,i,s,r){return I(),L("textarea",E({class:["p-inputtextarea p-inputtext p-component",{"p-filled":r.filled,"p-inputtextarea-resizable ":n.autoResize}],value:n.modelValue,onInput:t[0]||(t[0]=(...o)=>r.onInput&&r.onInput(...o))},e.ptm("root")),null,16,p8)}function g8(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",n==="top"&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}var y8=`
.p-inputtextarea-resizable {
    overflow: hidden;
    resize: none;
}
.p-fluid .p-inputtextarea {
    width: 100%;
}
`;g8(y8);I_.render=m8;var E_={name:"Steps",extends:Tt,props:{id:{type:String,default:qi()},model:{type:Array,default:null},readonly:{type:Boolean,default:!0},exact:{type:Boolean,default:!0}},mounted(){const e=this.findFirstItem();e.tabIndex="0"},methods:{onItemClick(e,t,n){if(this.disabled(t)||this.readonly){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),t.to&&n&&n(e)},onItemKeydown(e,t,n){switch(e.code){case"ArrowRight":{this.navigateToNextItem(e.target),e.preventDefault();break}case"ArrowLeft":{this.navigateToPrevItem(e.target),e.preventDefault();break}case"Home":{this.navigateToFirstItem(e.target),e.preventDefault();break}case"End":{this.navigateToLastItem(e.target),e.preventDefault();break}case"Tab":break;case"Enter":case"Space":{this.onItemClick(e,t,n),e.preventDefault();break}}},navigateToNextItem(e){const t=this.findNextItem(e);t&&this.setFocusToMenuitem(e,t)},navigateToPrevItem(e){const t=this.findPrevItem(e);t&&this.setFocusToMenuitem(e,t)},navigateToFirstItem(e){const t=this.findFirstItem(e);t&&this.setFocusToMenuitem(e,t)},navigateToLastItem(e){const t=this.findLastItem(e);t&&this.setFocusToMenuitem(e,t)},findNextItem(e){const t=e.parentElement.nextElementSibling;return t?t.children[0]:null},findPrevItem(e){const t=e.parentElement.previousElementSibling;return t?t.children[0]:null},findFirstItem(){const e=Q.findSingle(this.$refs.list,".p-steps-item");return e?e.children[0]:null},findLastItem(){const e=Q.find(this.$refs.list,".p-steps-item");return e?e[e.length-1].children[0]:null},setFocusToMenuitem(e,t){e.tabIndex="-1",t.tabIndex="0",t.focus()},isActive(e){return e.to?this.$router.resolve(e.to).path===this.$route.path:!1},getItemClass(e){return["p-steps-item",e.class,{"p-highlight p-steps-current":this.isActive(e),"p-disabled":this.isItemDisabled(e)}]},linkClass(e){return["p-menuitem-link",{"router-link-active":e&&e.isActive,"router-link-active-exact":this.exact&&e&&e.isExactActive}]},isItemDisabled(e){return this.disabled(e)||this.readonly&&!this.isActive(e)},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label}},computed:{containerClass(){return["p-steps p-component",{"p-readonly":this.readonly}]}}};const _8=["id"],v8=["href","aria-current","onClick","onKeydown"],b8=["onKeydown"];function C8(e,t,n,i,s,r){const o=Ye("router-link");return I(),L("nav",E({id:n.id,class:r.containerClass},e.ptm("root")),[P("ol",E({ref:"list",class:"p-steps-list"},e.ptm("menu")),[(I(!0),L(De,null,Cs(n.model,(l,a)=>(I(),L(De,{key:l.to},[r.visible(l)?(I(),L("li",E({key:0,class:r.getItemClass(l),style:l.style},e.ptm("menuitem")),[e.$slots.item?(I(),ue(tt(e.$slots.item),{key:1,item:l},null,8,["item"])):(I(),L(De,{key:0},[r.isItemDisabled(l)?(I(),L("span",E({key:1,class:r.linkClass(),onKeydown:c=>r.onItemKeydown(c,l)},e.ptm("action")),[P("span",E({class:"p-steps-number"},e.ptm("step")),Je(a+1),17),P("span",E({class:"p-steps-title"},e.ptm("label")),Je(r.label(l)),17)],16,b8)):(I(),ue(o,{key:0,to:l.to,custom:""},{default:je(({navigate:c,href:d,isActive:f,isExactActive:m})=>[P("a",E({href:d,class:r.linkClass({isActive:f,isExactActive:m}),tabindex:-1,"aria-current":m?"step":void 0,onClick:b=>r.onItemClick(b,l,c),onKeydown:b=>r.onItemKeydown(b,l,c)},e.ptm("action")),[P("span",E({class:"p-steps-number"},e.ptm("step")),Je(a+1),17),P("span",E({class:"p-steps-title"},e.ptm("label")),Je(r.label(l)),17)],16,v8)]),_:2},1032,["to"]))],64))],16)):de("",!0)],64))),128))],16)],16,_8)}function w8(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",n==="top"&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}var I8=`
.p-steps {
    position: relative;
}
.p-steps .p-steps-list {
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
}
.p-steps-item {
    position: relative;
    display: flex;
    justify-content: center;
    flex: 1 1 auto;
}
.p-steps-item .p-menuitem-link {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    text-decoration: none;
}
.p-steps.p-steps-readonly .p-steps-item {
    cursor: auto;
}
.p-steps-item.p-steps-current .p-menuitem-link {
    cursor: default;
}
.p-steps-title {
    white-space: nowrap;
}
.p-steps-number {
    display: flex;
    align-items: center;
    justify-content: center;
}
.p-steps-title {
    display: block;
}
`;w8(I8);E_.render=C8;const E8=Symbol();var T8={install:e=>{const t={add:n=>{Mn.emit("add",n)},removeGroup:n=>{Mn.emit("remove-group",n)},removeAllGroups:()=>{Mn.emit("remove-all-groups")}};e.config.globalProperties.$toast=t,e.provide(E8,t)}};const nt=Rw(mS);nt.use(kS);nt.use(IS);nt.use(T8);nt.use(RS);nt.use(c7,{firebaseApp:Up,modules:[a7(Up)]});nt.component("Menubar",c_);nt.component("Button",ma);nt.component("TheWelcome",ck);nt.component("NavBar",nk);nt.component("Dialog",d_);nt.component("InputText",Wh);nt.component("Password",m_);nt.component("Toast",i_);nt.component("FileUpload",C_);nt.component("Card",w_);nt.component("Textarea",I_);nt.component("Steps",E_);nt.component("Message",jh);nt.mount("#app");export{De as F,Vs as _,Do as a,P as b,L as c,H2 as d,Cs as e,fe as f,O6 as g,ht as h,I as o,Ye as r,Je as t,je as w};
