(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function Bd(t,e){const n=Object.create(null),i=t.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Ze={},sr=[],Bn=()=>{},cT=()=>!1,uT=/^on[^a-z]/,Ic=t=>uT.test(t),Ud=t=>t.startsWith("onUpdate:"),pt=Object.assign,Vd=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},hT=Object.prototype.hasOwnProperty,Fe=(t,e)=>hT.call(t,e),ae=Array.isArray,rr=t=>Ec(t)==="[object Map]",K1=t=>Ec(t)==="[object Set]",we=t=>typeof t=="function",ht=t=>typeof t=="string",$d=t=>typeof t=="symbol",it=t=>t!==null&&typeof t=="object",G1=t=>it(t)&&we(t.then)&&we(t.catch),Y1=Object.prototype.toString,Ec=t=>Y1.call(t),dT=t=>Ec(t).slice(8,-1),Q1=t=>Ec(t)==="[object Object]",Hd=t=>ht(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,vl=Bd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Tc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},fT=/-(\w)/g,ei=Tc(t=>t.replace(fT,(e,n)=>n?n.toUpperCase():"")),pT=/\B([A-Z])/g,Fs=Tc(t=>t.replace(pT,"-$1").toLowerCase()),Sc=Tc(t=>t.charAt(0).toUpperCase()+t.slice(1)),Mu=Tc(t=>t?`on${Sc(t)}`:""),Vo=(t,e)=>!Object.is(t,e),Fu=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Nl=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},mT=t=>{const e=parseFloat(t);return isNaN(e)?t:e},gT=t=>{const e=ht(t)?Number(t):NaN;return isNaN(e)?t:e};let Am;const Ch=()=>Am||(Am=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ac(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=ht(i)?wT(i):Ac(i);if(s)for(const r in s)e[r]=s[r]}return e}else{if(ht(t))return t;if(it(t))return t}}const yT=/;(?![^(]*\))/g,vT=/:([^]+)/,_T=new RegExp("\\/\\*.*?\\*\\/","gs");function wT(t){const e={};return t.replace(_T,"").split(yT).forEach(n=>{if(n){const i=n.split(vT);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function wi(t){let e="";if(ht(t))e=t;else if(ae(t))for(let n=0;n<t.length;n++){const i=wi(t[n]);i&&(e+=i+" ")}else if(it(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function zd(t){if(!t)return null;let{class:e,style:n}=t;return e&&!ht(e)&&(t.class=wi(e)),n&&(t.style=Ac(n)),t}const bT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",CT=Bd(bT);function X1(t){return!!t||t===""}const ct=t=>ht(t)?t:t==null?"":ae(t)||it(t)&&(t.toString===Y1||!we(t.toString))?JSON.stringify(t,J1,2):String(t),J1=(t,e)=>e&&e.__v_isRef?J1(t,e.value):rr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s])=>(n[`${i} =>`]=s,n),{})}:K1(e)?{[`Set(${e.size})`]:[...e.values()]}:it(e)&&!ae(e)&&!Q1(e)?String(e):e;let Rn;class Z1{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Rn,!e&&Rn&&(this.index=(Rn.scopes||(Rn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Rn;try{return Rn=this,e()}finally{Rn=n}}}on(){Rn=this}off(){Rn=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function IT(t){return new Z1(t)}function ET(t,e=Rn){e&&e.active&&e.effects.push(t)}function TT(){return Rn}const jd=t=>{const e=new Set(t);return e.w=0,e.n=0,e},e0=t=>(t.w&Yi)>0,t0=t=>(t.n&Yi)>0,ST=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Yi},AT=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const s=e[i];e0(s)&&!t0(s)?s.delete(t):e[n++]=s,s.w&=~Yi,s.n&=~Yi}e.length=n}},Ih=new WeakMap;let yo=0,Yi=1;const Eh=30;let Pn;const Cs=Symbol(""),Th=Symbol("");class Wd{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ET(this,i)}run(){if(!this.active)return this.fn();let e=Pn,n=zi;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Pn,Pn=this,zi=!0,Yi=1<<++yo,yo<=Eh?ST(this):km(this),this.fn()}finally{yo<=Eh&&AT(this),Yi=1<<--yo,Pn=this.parent,zi=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Pn===this?this.deferStop=!0:this.active&&(km(this),this.onStop&&this.onStop(),this.active=!1)}}function km(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let zi=!0;const n0=[];function Or(){n0.push(zi),zi=!1}function Mr(){const t=n0.pop();zi=t===void 0?!0:t}function fn(t,e,n){if(zi&&Pn){let i=Ih.get(t);i||Ih.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=jd()),i0(s)}}function i0(t,e){let n=!1;yo<=Eh?t0(t)||(t.n|=Yi,n=!e0(t)):n=!t.has(Pn),n&&(t.add(Pn),Pn.deps.push(t))}function bi(t,e,n,i,s,r){const o=Ih.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ae(t)){const l=Number(i);o.forEach((c,d)=>{(d==="length"||d>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ae(t)?Hd(n)&&a.push(o.get("length")):(a.push(o.get(Cs)),rr(t)&&a.push(o.get(Th)));break;case"delete":ae(t)||(a.push(o.get(Cs)),rr(t)&&a.push(o.get(Th)));break;case"set":rr(t)&&a.push(o.get(Cs));break}if(a.length===1)a[0]&&Sh(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Sh(jd(l))}}function Sh(t,e){const n=ae(t)?t:[...t];for(const i of n)i.computed&&xm(i);for(const i of n)i.computed||xm(i)}function xm(t,e){(t!==Pn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const kT=Bd("__proto__,__v_isRef,__isVue"),s0=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter($d)),xT=qd(),RT=qd(!1,!0),PT=qd(!0),Rm=NT();function NT(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=Ue(this);for(let r=0,o=this.length;r<o;r++)fn(i,"get",r+"");const s=i[e](...n);return s===-1||s===!1?i[e](...n.map(Ue)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Or();const i=Ue(this)[e].apply(this,n);return Mr(),i}}),t}function DT(t){const e=Ue(this);return fn(e,"has",t),e.hasOwnProperty(t)}function qd(t=!1,e=!1){return function(i,s,r){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(t?e?YT:c0:e?l0:a0).get(i))return i;const o=ae(i);if(!t){if(o&&Fe(Rm,s))return Reflect.get(Rm,s,r);if(s==="hasOwnProperty")return DT}const a=Reflect.get(i,s,r);return($d(s)?s0.has(s):kT(s))||(t||fn(i,"get",s),e)?a:jt(a)?o&&Hd(s)?a:a.value:it(a)?t?u0(a):Fr(a):a}}const LT=r0(),OT=r0(!0);function r0(t=!1){return function(n,i,s,r){let o=n[i];if(_r(o)&&jt(o)&&!jt(s))return!1;if(!t&&(!Dl(s)&&!_r(s)&&(o=Ue(o),s=Ue(s)),!ae(n)&&jt(o)&&!jt(s)))return o.value=s,!0;const a=ae(n)&&Hd(i)?Number(i)<n.length:Fe(n,i),l=Reflect.set(n,i,s,r);return n===Ue(r)&&(a?Vo(s,o)&&bi(n,"set",i,s):bi(n,"add",i,s)),l}}function MT(t,e){const n=Fe(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&bi(t,"delete",e,void 0),i}function FT(t,e){const n=Reflect.has(t,e);return(!$d(e)||!s0.has(e))&&fn(t,"has",e),n}function BT(t){return fn(t,"iterate",ae(t)?"length":Cs),Reflect.ownKeys(t)}const o0={get:xT,set:LT,deleteProperty:MT,has:FT,ownKeys:BT},UT={get:PT,set(t,e){return!0},deleteProperty(t,e){return!0}},VT=pt({},o0,{get:RT,set:OT}),Kd=t=>t,kc=t=>Reflect.getPrototypeOf(t);function Ga(t,e,n=!1,i=!1){t=t.__v_raw;const s=Ue(t),r=Ue(e);n||(e!==r&&fn(s,"get",e),fn(s,"get",r));const{has:o}=kc(s),a=i?Kd:n?Qd:$o;if(o.call(s,e))return a(t.get(e));if(o.call(s,r))return a(t.get(r));t!==s&&t.get(e)}function Ya(t,e=!1){const n=this.__v_raw,i=Ue(n),s=Ue(t);return e||(t!==s&&fn(i,"has",t),fn(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Qa(t,e=!1){return t=t.__v_raw,!e&&fn(Ue(t),"iterate",Cs),Reflect.get(t,"size",t)}function Pm(t){t=Ue(t);const e=Ue(this);return kc(e).has.call(e,t)||(e.add(t),bi(e,"add",t,t)),this}function Nm(t,e){e=Ue(e);const n=Ue(this),{has:i,get:s}=kc(n);let r=i.call(n,t);r||(t=Ue(t),r=i.call(n,t));const o=s.call(n,t);return n.set(t,e),r?Vo(e,o)&&bi(n,"set",t,e):bi(n,"add",t,e),this}function Dm(t){const e=Ue(this),{has:n,get:i}=kc(e);let s=n.call(e,t);s||(t=Ue(t),s=n.call(e,t)),i&&i.call(e,t);const r=e.delete(t);return s&&bi(e,"delete",t,void 0),r}function Lm(){const t=Ue(this),e=t.size!==0,n=t.clear();return e&&bi(t,"clear",void 0,void 0),n}function Xa(t,e){return function(i,s){const r=this,o=r.__v_raw,a=Ue(o),l=e?Kd:t?Qd:$o;return!t&&fn(a,"iterate",Cs),o.forEach((c,d)=>i.call(s,l(c),l(d),r))}}function Ja(t,e,n){return function(...i){const s=this.__v_raw,r=Ue(s),o=rr(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),d=n?Kd:e?Qd:$o;return!e&&fn(r,"iterate",l?Th:Cs),{next(){const{value:f,done:m}=c.next();return m?{value:f,done:m}:{value:a?[d(f[0]),d(f[1])]:d(f),done:m}},[Symbol.iterator](){return this}}}}function Ri(t){return function(...e){return t==="delete"?!1:this}}function $T(){const t={get(r){return Ga(this,r)},get size(){return Qa(this)},has:Ya,add:Pm,set:Nm,delete:Dm,clear:Lm,forEach:Xa(!1,!1)},e={get(r){return Ga(this,r,!1,!0)},get size(){return Qa(this)},has:Ya,add:Pm,set:Nm,delete:Dm,clear:Lm,forEach:Xa(!1,!0)},n={get(r){return Ga(this,r,!0)},get size(){return Qa(this,!0)},has(r){return Ya.call(this,r,!0)},add:Ri("add"),set:Ri("set"),delete:Ri("delete"),clear:Ri("clear"),forEach:Xa(!0,!1)},i={get(r){return Ga(this,r,!0,!0)},get size(){return Qa(this,!0)},has(r){return Ya.call(this,r,!0)},add:Ri("add"),set:Ri("set"),delete:Ri("delete"),clear:Ri("clear"),forEach:Xa(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Ja(r,!1,!1),n[r]=Ja(r,!0,!1),e[r]=Ja(r,!1,!0),i[r]=Ja(r,!0,!0)}),[t,n,e,i]}const[HT,zT,jT,WT]=$T();function Gd(t,e){const n=e?t?WT:jT:t?zT:HT;return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(Fe(n,s)&&s in i?n:i,s,r)}const qT={get:Gd(!1,!1)},KT={get:Gd(!1,!0)},GT={get:Gd(!0,!1)},a0=new WeakMap,l0=new WeakMap,c0=new WeakMap,YT=new WeakMap;function QT(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function XT(t){return t.__v_skip||!Object.isExtensible(t)?0:QT(dT(t))}function Fr(t){return _r(t)?t:Yd(t,!1,o0,qT,a0)}function JT(t){return Yd(t,!1,VT,KT,l0)}function u0(t){return Yd(t,!0,UT,GT,c0)}function Yd(t,e,n,i,s){if(!it(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=XT(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function or(t){return _r(t)?or(t.__v_raw):!!(t&&t.__v_isReactive)}function _r(t){return!!(t&&t.__v_isReadonly)}function Dl(t){return!!(t&&t.__v_isShallow)}function h0(t){return or(t)||_r(t)}function Ue(t){const e=t&&t.__v_raw;return e?Ue(e):t}function d0(t){return Nl(t,"__v_skip",!0),t}const $o=t=>it(t)?Fr(t):t,Qd=t=>it(t)?u0(t):t;function f0(t){zi&&Pn&&(t=Ue(t),i0(t.dep||(t.dep=jd())))}function p0(t,e){t=Ue(t);const n=t.dep;n&&Sh(n)}function jt(t){return!!(t&&t.__v_isRef===!0)}function m0(t){return g0(t,!1)}function ZT(t){return g0(t,!0)}function g0(t,e){return jt(t)?t:new e4(t,e)}class e4{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ue(e),this._value=n?e:$o(e)}get value(){return f0(this),this._value}set value(e){const n=this.__v_isShallow||Dl(e)||_r(e);e=n?e:Ue(e),Vo(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:$o(e),p0(this))}}function ar(t){return jt(t)?t.value:t}const t4={get:(t,e,n)=>ar(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return jt(s)&&!jt(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function y0(t){return or(t)?t:new Proxy(t,t4)}class n4{constructor(e,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Wd(e,()=>{this._dirty||(this._dirty=!0,p0(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=Ue(this);return f0(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function i4(t,e,n=!1){let i,s;const r=we(t);return r?(i=t,s=Bn):(i=t.get,s=t.set),new n4(i,s,r||!s,n)}function ji(t,e,n,i){let s;try{s=i?t(...i):t()}catch(r){xc(r,e,n)}return s}function Tn(t,e,n,i){if(we(t)){const r=ji(t,e,n,i);return r&&G1(r)&&r.catch(o=>{xc(o,e,n)}),r}const s=[];for(let r=0;r<t.length;r++)s.push(Tn(t[r],e,n,i));return s}function xc(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){ji(l,null,10,[t,o,a]);return}}s4(t,n,s,i)}function s4(t,e,n,i=!0){console.error(t)}let Ho=!1,Ah=!1;const Ht=[];let qn=0;const lr=[];let ci=null,fs=0;const v0=Promise.resolve();let Xd=null;function _0(t){const e=Xd||v0;return t?e.then(this?t.bind(this):t):e}function r4(t){let e=qn+1,n=Ht.length;for(;e<n;){const i=e+n>>>1;zo(Ht[i])<t?e=i+1:n=i}return e}function Jd(t){(!Ht.length||!Ht.includes(t,Ho&&t.allowRecurse?qn+1:qn))&&(t.id==null?Ht.push(t):Ht.splice(r4(t.id),0,t),w0())}function w0(){!Ho&&!Ah&&(Ah=!0,Xd=v0.then(C0))}function o4(t){const e=Ht.indexOf(t);e>qn&&Ht.splice(e,1)}function a4(t){ae(t)?lr.push(...t):(!ci||!ci.includes(t,t.allowRecurse?fs+1:fs))&&lr.push(t),w0()}function Om(t,e=Ho?qn+1:0){for(;e<Ht.length;e++){const n=Ht[e];n&&n.pre&&(Ht.splice(e,1),e--,n())}}function b0(t){if(lr.length){const e=[...new Set(lr)];if(lr.length=0,ci){ci.push(...e);return}for(ci=e,ci.sort((n,i)=>zo(n)-zo(i)),fs=0;fs<ci.length;fs++)ci[fs]();ci=null,fs=0}}const zo=t=>t.id==null?1/0:t.id,l4=(t,e)=>{const n=zo(t)-zo(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function C0(t){Ah=!1,Ho=!0,Ht.sort(l4);const e=Bn;try{for(qn=0;qn<Ht.length;qn++){const n=Ht[qn];n&&n.active!==!1&&ji(n,null,14)}}finally{qn=0,Ht.length=0,b0(),Ho=!1,Xd=null,(Ht.length||lr.length)&&C0()}}function c4(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Ze;let s=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:m}=i[d]||Ze;m&&(s=n.map(y=>ht(y)?y.trim():y)),f&&(s=n.map(mT))}let a,l=i[a=Mu(e)]||i[a=Mu(ei(e))];!l&&r&&(l=i[a=Mu(Fs(e))]),l&&Tn(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Tn(c,t,6,s)}}function I0(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!we(t)){const l=c=>{const d=I0(c,e,!0);d&&(a=!0,pt(o,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(it(t)&&i.set(t,null),null):(ae(r)?r.forEach(l=>o[l]=null):pt(o,r),it(t)&&i.set(t,o),o)}function Rc(t,e){return!t||!Ic(e)?!1:(e=e.slice(2).replace(/Once$/,""),Fe(t,e[0].toLowerCase()+e.slice(1))||Fe(t,Fs(e))||Fe(t,e))}let Dt=null,Pc=null;function Ll(t){const e=Dt;return Dt=t,Pc=t&&t.type.__scopeId||null,e}function u4(t){Pc=t}function h4(){Pc=null}function lt(t,e=Dt,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&Gm(-1);const r=Ll(e);let o;try{o=t(...s)}finally{Ll(r),i._d&&Gm(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Bu(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:d,renderCache:f,data:m,setupState:y,ctx:b,inheritAttrs:C}=t;let S,B;const U=Ll(t);try{if(n.shapeFlag&4){const M=s||i;S=Wn(d.call(M,M,f,r,y,m,b)),B=l}else{const M=e;S=Wn(M.length>1?M(r,{attrs:l,slots:a,emit:c}):M(r,null)),B=e.props?l:d4(l)}}catch(M){ko.length=0,xc(M,t,1),S=xe(Sn)}let W=S;if(B&&C!==!1){const M=Object.keys(B),{shapeFlag:oe}=W;M.length&&oe&7&&(o&&M.some(Ud)&&(B=f4(B,o)),W=Ji(W,B))}return n.dirs&&(W=Ji(W),W.dirs=W.dirs?W.dirs.concat(n.dirs):n.dirs),n.transition&&(W.transition=n.transition),S=W,Ll(U),S}const d4=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ic(n))&&((e||(e={}))[n]=t[n]);return e},f4=(t,e)=>{const n={};for(const i in t)(!Ud(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function p4(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Mm(i,o,c):!!o;if(l&8){const d=e.dynamicProps;for(let f=0;f<d.length;f++){const m=d[f];if(o[m]!==i[m]&&!Rc(c,m))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Mm(i,o,c):!0:!!o;return!1}function Mm(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!Rc(n,r))return!0}return!1}function m4({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const g4=t=>t.__isSuspense;function y4(t,e){e&&e.pendingBranch?ae(t)?e.effects.push(...t):e.effects.push(t):a4(t)}const Za={};function _l(t,e,n){return E0(t,e,n)}function E0(t,e,{immediate:n,deep:i,flush:s,onTrack:r,onTrigger:o}=Ze){var a;const l=TT()===((a=Et)==null?void 0:a.scope)?Et:null;let c,d=!1,f=!1;if(jt(t)?(c=()=>t.value,d=Dl(t)):or(t)?(c=()=>t,i=!0):ae(t)?(f=!0,d=t.some(M=>or(M)||Dl(M)),c=()=>t.map(M=>{if(jt(M))return M.value;if(or(M))return gs(M);if(we(M))return ji(M,l,2)})):we(t)?e?c=()=>ji(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return m&&m(),Tn(t,l,3,[y])}:c=Bn,e&&i){const M=c;c=()=>gs(M())}let m,y=M=>{m=U.onStop=()=>{ji(M,l,4)}},b;if(Ko)if(y=Bn,e?n&&Tn(e,l,3,[c(),f?[]:void 0,y]):c(),s==="sync"){const M=uS();b=M.__watcherHandles||(M.__watcherHandles=[])}else return Bn;let C=f?new Array(t.length).fill(Za):Za;const S=()=>{if(U.active)if(e){const M=U.run();(i||d||(f?M.some((oe,_e)=>Vo(oe,C[_e])):Vo(M,C)))&&(m&&m(),Tn(e,l,3,[M,C===Za?void 0:f&&C[0]===Za?[]:C,y]),C=M)}else U.run()};S.allowRecurse=!!e;let B;s==="sync"?B=S:s==="post"?B=()=>un(S,l&&l.suspense):(S.pre=!0,l&&(S.id=l.uid),B=()=>Jd(S));const U=new Wd(c,B);e?n?S():C=U.run():s==="post"?un(U.run.bind(U),l&&l.suspense):U.run();const W=()=>{U.stop(),l&&l.scope&&Vd(l.scope.effects,U)};return b&&b.push(W),W}function v4(t,e,n){const i=this.proxy,s=ht(t)?t.includes(".")?T0(i,t):()=>i[t]:t.bind(i,i);let r;we(e)?r=e:(r=e.handler,n=e);const o=Et;wr(this);const a=E0(s,r.bind(i),n);return o?wr(o):Is(),a}function T0(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function gs(t,e){if(!it(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),jt(t))gs(t.value,e);else if(ae(t))for(let n=0;n<t.length;n++)gs(t[n],e);else if(K1(t)||rr(t))t.forEach(n=>{gs(n,e)});else if(Q1(t))for(const n in t)gs(t[n],e);return t}function nn(t,e){const n=Dt;if(n===null)return t;const i=Mc(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=Ze]=e[r];o&&(we(o)&&(o={mounted:o,updated:o}),o.deep&&gs(a),s.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function ls(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Or(),Tn(l,n,8,[t.el,a,t,e]),Mr())}}function S0(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return P0(()=>{t.isMounted=!0}),D0(()=>{t.isUnmounting=!0}),t}const bn=[Function,Array],A0={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:bn,onEnter:bn,onAfterEnter:bn,onEnterCancelled:bn,onBeforeLeave:bn,onLeave:bn,onAfterLeave:bn,onLeaveCancelled:bn,onBeforeAppear:bn,onAppear:bn,onAfterAppear:bn,onAppearCancelled:bn},_4={name:"BaseTransition",props:A0,setup(t,{slots:e}){const n=lf(),i=S0();let s;return()=>{const r=e.default&&Zd(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const C of r)if(C.type!==Sn){o=C;break}}const a=Ue(t),{mode:l}=a;if(i.isLeaving)return Uu(o);const c=Fm(o);if(!c)return Uu(o);const d=jo(c,a,i,n);Wo(c,d);const f=n.subTree,m=f&&Fm(f);let y=!1;const{getTransitionKey:b}=c.type;if(b){const C=b();s===void 0?s=C:C!==s&&(s=C,y=!0)}if(m&&m.type!==Sn&&(!ps(c,m)||y)){const C=jo(m,a,i,n);if(Wo(m,C),l==="out-in")return i.isLeaving=!0,C.afterLeave=()=>{i.isLeaving=!1,n.update.active!==!1&&n.update()},Uu(o);l==="in-out"&&c.type!==Sn&&(C.delayLeave=(S,B,U)=>{const W=k0(i,m);W[String(m.key)]=m,S._leaveCb=()=>{B(),S._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=U})}return o}}},w4=_4;function k0(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function jo(t,e,n,i){const{appear:s,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:f,onLeave:m,onAfterLeave:y,onLeaveCancelled:b,onBeforeAppear:C,onAppear:S,onAfterAppear:B,onAppearCancelled:U}=e,W=String(t.key),M=k0(n,t),oe=(te,be)=>{te&&Tn(te,i,9,be)},_e=(te,be)=>{const Te=be[1];oe(te,be),ae(te)?te.every(Ke=>Ke.length<=1)&&Te():te.length<=1&&Te()},Re={mode:r,persisted:o,beforeEnter(te){let be=a;if(!n.isMounted)if(s)be=C||a;else return;te._leaveCb&&te._leaveCb(!0);const Te=M[W];Te&&ps(t,Te)&&Te.el._leaveCb&&Te.el._leaveCb(),oe(be,[te])},enter(te){let be=l,Te=c,Ke=d;if(!n.isMounted)if(s)be=S||l,Te=B||c,Ke=U||d;else return;let w=!1;const Ve=te._enterCb=Ne=>{w||(w=!0,Ne?oe(Ke,[te]):oe(Te,[te]),Re.delayedLeave&&Re.delayedLeave(),te._enterCb=void 0)};be?_e(be,[te,Ve]):Ve()},leave(te,be){const Te=String(t.key);if(te._enterCb&&te._enterCb(!0),n.isUnmounting)return be();oe(f,[te]);let Ke=!1;const w=te._leaveCb=Ve=>{Ke||(Ke=!0,be(),Ve?oe(b,[te]):oe(y,[te]),te._leaveCb=void 0,M[Te]===t&&delete M[Te])};M[Te]=t,m?_e(m,[te,w]):w()},clone(te){return jo(te,e,n,i)}};return Re}function Uu(t){if(Nc(t))return t=Ji(t),t.children=null,t}function Fm(t){return Nc(t)?t.children?t.children[0]:void 0:t}function Wo(t,e){t.shapeFlag&6&&t.component?Wo(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Zd(t,e=!1,n){let i=[],s=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===He?(o.patchFlag&128&&s++,i=i.concat(Zd(o.children,e,a))):(e||o.type!==Sn)&&i.push(a!=null?Ji(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function x0(t,e){return we(t)?(()=>pt({name:t.name},e,{setup:t}))():t}const To=t=>!!t.type.__asyncLoader,Nc=t=>t.type.__isKeepAlive;function b4(t,e){R0(t,"a",e)}function C4(t,e){R0(t,"da",e)}function R0(t,e,n=Et){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Dc(e,i,n),n){let s=n.parent;for(;s&&s.parent;)Nc(s.parent.vnode)&&I4(i,e,n,s),s=s.parent}}function I4(t,e,n,i){const s=Dc(e,t,i,!0);L0(()=>{Vd(i[e],s)},n)}function Dc(t,e,n=Et,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Or(),wr(n);const a=Tn(e,n,t,o);return Is(),Mr(),a});return i?s.unshift(r):s.push(r),r}}const ki=t=>(e,n=Et)=>(!Ko||t==="sp")&&Dc(t,(...i)=>e(...i),n),E4=ki("bm"),P0=ki("m"),T4=ki("bu"),N0=ki("u"),D0=ki("bum"),L0=ki("um"),S4=ki("sp"),A4=ki("rtg"),k4=ki("rtc");function x4(t,e=Et){Dc("ec",t,e)}const ef="components",R4="directives";function ut(t,e){return tf(ef,t,!0,e)||t}const O0=Symbol.for("v-ndc");function ot(t){return ht(t)?tf(ef,t,!1)||t:t||O0}function Qi(t){return tf(R4,t)}function tf(t,e,n=!0,i=!1){const s=Dt||Et;if(s){const r=s.type;if(t===ef){const a=aS(r,!1);if(a&&(a===e||a===ei(e)||a===Sc(ei(e))))return r}const o=Bm(s[t]||r[t],e)||Bm(s.appContext[t],e);return!o&&i?r:o}}function Bm(t,e){return t&&(t[e]||t[ei(e)]||t[Sc(ei(e))])}function Xi(t,e,n,i){let s;const r=n&&n[i];if(ae(t)||ht(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(it(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,r&&r[a])}}else s=[];return n&&(n[i]=s),s}function ye(t,e,n={},i,s){if(Dt.isCE||Dt.parent&&To(Dt.parent)&&Dt.parent.isCE)return e!=="default"&&(n.name=e),xe("slot",n,i&&i());let r=t[e];r&&r._c&&(r._d=!1),I();const o=r&&M0(r(n)),a=me(He,{key:n.key||o&&o.key||`_${e}`},o||(i?i():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function M0(t){return t.some(e=>Fl(e)?!(e.type===Sn||e.type===He&&!M0(e.children)):!0)?t:null}const kh=t=>t?K0(t)?Mc(t)||t.proxy:kh(t.parent):null,So=pt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>kh(t.parent),$root:t=>kh(t.root),$emit:t=>t.emit,$options:t=>nf(t),$forceUpdate:t=>t.f||(t.f=()=>Jd(t.update)),$nextTick:t=>t.n||(t.n=_0.bind(t.proxy)),$watch:t=>v4.bind(t)}),Vu=(t,e)=>t!==Ze&&!t.__isScriptSetup&&Fe(t,e),P4={get({_:t},e){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(Vu(i,e))return o[e]=1,i[e];if(s!==Ze&&Fe(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&Fe(c,e))return o[e]=3,r[e];if(n!==Ze&&Fe(n,e))return o[e]=4,n[e];xh&&(o[e]=0)}}const d=So[e];let f,m;if(d)return e==="$attrs"&&fn(t,"get",e),d(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==Ze&&Fe(n,e))return o[e]=4,n[e];if(m=l.config.globalProperties,Fe(m,e))return m[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return Vu(s,e)?(s[e]=n,!0):i!==Ze&&Fe(i,e)?(i[e]=n,!0):Fe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==Ze&&Fe(t,o)||Vu(e,o)||(a=r[0])&&Fe(a,o)||Fe(i,o)||Fe(So,o)||Fe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Fe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Um(t){return ae(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let xh=!0;function N4(t){const e=nf(t),n=t.proxy,i=t.ctx;xh=!1,e.beforeCreate&&Vm(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:d,beforeMount:f,mounted:m,beforeUpdate:y,updated:b,activated:C,deactivated:S,beforeDestroy:B,beforeUnmount:U,destroyed:W,unmounted:M,render:oe,renderTracked:_e,renderTriggered:Re,errorCaptured:te,serverPrefetch:be,expose:Te,inheritAttrs:Ke,components:w,directives:Ve,filters:Ne}=e;if(c&&D4(c,i,null),o)for(const ne in o){const De=o[ne];we(De)&&(i[ne]=De.bind(n))}if(s){const ne=s.call(n,n);it(ne)&&(t.data=Fr(ne))}if(xh=!0,r)for(const ne in r){const De=r[ne],on=we(De)?De.bind(n,n):we(De.get)?De.get.bind(n,n):Bn,wn=!we(De)&&we(De.set)?De.set.bind(n):Bn,an=Nn({get:on,set:wn});Object.defineProperty(i,ne,{enumerable:!0,configurable:!0,get:()=>an.value,set:xt=>an.value=xt})}if(a)for(const ne in a)F0(a[ne],i,n,ne);if(l){const ne=we(l)?l.call(n):l;Reflect.ownKeys(ne).forEach(De=>{wl(De,ne[De])})}d&&Vm(d,t,"c");function Se(ne,De){ae(De)?De.forEach(on=>ne(on.bind(n))):De&&ne(De.bind(n))}if(Se(E4,f),Se(P0,m),Se(T4,y),Se(N0,b),Se(b4,C),Se(C4,S),Se(x4,te),Se(k4,_e),Se(A4,Re),Se(D0,U),Se(L0,M),Se(S4,be),ae(Te))if(Te.length){const ne=t.exposed||(t.exposed={});Te.forEach(De=>{Object.defineProperty(ne,De,{get:()=>n[De],set:on=>n[De]=on})})}else t.exposed||(t.exposed={});oe&&t.render===Bn&&(t.render=oe),Ke!=null&&(t.inheritAttrs=Ke),w&&(t.components=w),Ve&&(t.directives=Ve)}function D4(t,e,n=Bn){ae(t)&&(t=Rh(t));for(const i in t){const s=t[i];let r;it(s)?"default"in s?r=Qn(s.from||i,s.default,!0):r=Qn(s.from||i):r=Qn(s),jt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Vm(t,e,n){Tn(ae(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function F0(t,e,n,i){const s=i.includes(".")?T0(n,i):()=>n[i];if(ht(t)){const r=e[t];we(r)&&_l(s,r)}else if(we(t))_l(s,t.bind(n));else if(it(t))if(ae(t))t.forEach(r=>F0(r,e,n,i));else{const r=we(t.handler)?t.handler.bind(n):e[t.handler];we(r)&&_l(s,r,t)}}function nf(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>Ol(l,c,o,!0)),Ol(l,e,o)),it(e)&&r.set(e,l),l}function Ol(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&Ol(t,r,n,!0),s&&s.forEach(o=>Ol(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=L4[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const L4={data:$m,props:Hm,emits:Hm,methods:vo,computed:vo,beforeCreate:en,created:en,beforeMount:en,mounted:en,beforeUpdate:en,updated:en,beforeDestroy:en,beforeUnmount:en,destroyed:en,unmounted:en,activated:en,deactivated:en,errorCaptured:en,serverPrefetch:en,components:vo,directives:vo,watch:M4,provide:$m,inject:O4};function $m(t,e){return e?t?function(){return pt(we(t)?t.call(this,this):t,we(e)?e.call(this,this):e)}:e:t}function O4(t,e){return vo(Rh(t),Rh(e))}function Rh(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function en(t,e){return t?[...new Set([].concat(t,e))]:e}function vo(t,e){return t?pt(Object.create(null),t,e):e}function Hm(t,e){return t?ae(t)&&ae(e)?[...new Set([...t,...e])]:pt(Object.create(null),Um(t),Um(e??{})):e}function M4(t,e){if(!t)return e;if(!e)return t;const n=pt(Object.create(null),t);for(const i in e)n[i]=en(t[i],e[i]);return n}function B0(){return{app:null,config:{isNativeTag:cT,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let F4=0;function B4(t,e){return function(i,s=null){we(i)||(i=pt({},i)),s!=null&&!it(s)&&(s=null);const r=B0(),o=new Set;let a=!1;const l=r.app={_uid:F4++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:hS,get config(){return r.config},set config(c){},use(c,...d){return o.has(c)||(c&&we(c.install)?(o.add(c),c.install(l,...d)):we(c)&&(o.add(c),c(l,...d))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,d){return d?(r.components[c]=d,l):r.components[c]},directive(c,d){return d?(r.directives[c]=d,l):r.directives[c]},mount(c,d,f){if(!a){const m=xe(i,s);return m.appContext=r,d&&e?e(m,c):t(m,c,f),a=!0,l._container=c,c.__vue_app__=l,Mc(m.component)||m.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,d){return r.provides[c]=d,l},runWithContext(c){Ml=l;try{return c()}finally{Ml=null}}};return l}}let Ml=null;function wl(t,e){if(Et){let n=Et.provides;const i=Et.parent&&Et.parent.provides;i===n&&(n=Et.provides=Object.create(i)),n[t]=e}}function Qn(t,e,n=!1){const i=Et||Dt;if(i||Ml){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Ml._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&we(e)?e.call(i&&i.proxy):e}}function U4(t,e,n,i=!1){const s={},r={};Nl(r,Oc,1),t.propsDefaults=Object.create(null),U0(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:JT(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function V4(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=Ue(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let f=0;f<d.length;f++){let m=d[f];if(Rc(t.emitsOptions,m))continue;const y=e[m];if(l)if(Fe(r,m))y!==r[m]&&(r[m]=y,c=!0);else{const b=ei(m);s[b]=Ph(l,a,b,y,t,!1)}else y!==r[m]&&(r[m]=y,c=!0)}}}else{U0(t,e,s,r)&&(c=!0);let d;for(const f in a)(!e||!Fe(e,f)&&((d=Fs(f))===f||!Fe(e,d)))&&(l?n&&(n[f]!==void 0||n[d]!==void 0)&&(s[f]=Ph(l,a,f,void 0,t,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!Fe(e,f))&&(delete r[f],c=!0)}c&&bi(t,"set","$attrs")}function U0(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(vl(l))continue;const c=e[l];let d;s&&Fe(s,d=ei(l))?!r||!r.includes(d)?n[d]=c:(a||(a={}))[d]=c:Rc(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=Ue(n),c=a||Ze;for(let d=0;d<r.length;d++){const f=r[d];n[f]=Ph(s,l,f,c[f],t,!Fe(c,f))}}return o}function Ph(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=Fe(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&we(l)){const{propsDefaults:c}=s;n in c?i=c[n]:(wr(s),i=c[n]=l.call(null,e),Is())}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Fs(n))&&(i=!0))}return i}function V0(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!we(t)){const d=f=>{l=!0;const[m,y]=V0(f,e,!0);pt(o,m),y&&a.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!r&&!l)return it(t)&&i.set(t,sr),sr;if(ae(r))for(let d=0;d<r.length;d++){const f=ei(r[d]);zm(f)&&(o[f]=Ze)}else if(r)for(const d in r){const f=ei(d);if(zm(f)){const m=r[d],y=o[f]=ae(m)||we(m)?{type:m}:pt({},m);if(y){const b=qm(Boolean,y.type),C=qm(String,y.type);y[0]=b>-1,y[1]=C<0||b<C,(b>-1||Fe(y,"default"))&&a.push(f)}}}const c=[o,a];return it(t)&&i.set(t,c),c}function zm(t){return t[0]!=="$"}function jm(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Wm(t,e){return jm(t)===jm(e)}function qm(t,e){return ae(e)?e.findIndex(n=>Wm(n,t)):we(e)&&Wm(e,t)?0:-1}const $0=t=>t[0]==="_"||t==="$stable",sf=t=>ae(t)?t.map(Wn):[Wn(t)],$4=(t,e,n)=>{if(e._n)return e;const i=lt((...s)=>sf(e(...s)),n);return i._c=!1,i},H0=(t,e,n)=>{const i=t._ctx;for(const s in t){if($0(s))continue;const r=t[s];if(we(r))e[s]=$4(s,r,i);else if(r!=null){const o=sf(r);e[s]=()=>o}}},z0=(t,e)=>{const n=sf(e);t.slots.default=()=>n},H4=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Ue(e),Nl(e,"_",n)):H0(e,t.slots={})}else t.slots={},e&&z0(t,e);Nl(t.slots,Oc,1)},z4=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=Ze;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(pt(s,e),!n&&a===1&&delete s._):(r=!e.$stable,H0(e,s)),o=e}else e&&(z0(t,e),o={default:1});if(r)for(const a in s)!$0(a)&&!(a in o)&&delete s[a]};function Nh(t,e,n,i,s=!1){if(ae(t)){t.forEach((m,y)=>Nh(m,e&&(ae(e)?e[y]:e),n,i,s));return}if(To(i)&&!s)return;const r=i.shapeFlag&4?Mc(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,d=a.refs===Ze?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(ht(c)?(d[c]=null,Fe(f,c)&&(f[c]=null)):jt(c)&&(c.value=null)),we(l))ji(l,a,12,[o,d]);else{const m=ht(l),y=jt(l);if(m||y){const b=()=>{if(t.f){const C=m?Fe(f,l)?f[l]:d[l]:l.value;s?ae(C)&&Vd(C,r):ae(C)?C.includes(r)||C.push(r):m?(d[l]=[r],Fe(f,l)&&(f[l]=d[l])):(l.value=[r],t.k&&(d[t.k]=l.value))}else m?(d[l]=o,Fe(f,l)&&(f[l]=o)):y&&(l.value=o,t.k&&(d[t.k]=o))};o?(b.id=-1,un(b,n)):b()}}}const un=y4;function j4(t){return W4(t)}function W4(t,e){const n=Ch();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:d,parentNode:f,nextSibling:m,setScopeId:y=Bn,insertStaticContent:b}=t,C=(g,_,T,A=null,N=null,$=null,z=!1,D=null,V=!!_.dynamicChildren)=>{if(g===_)return;g&&!ps(g,_)&&(A=H(g),xt(g,N,$,!0),g=null),_.patchFlag===-2&&(V=!1,_.dynamicChildren=null);const{type:O,ref:Q,shapeFlag:J}=_;switch(O){case Lc:S(g,_,T,A);break;case Sn:B(g,_,T,A);break;case bl:g==null&&U(_,T,A,z);break;case He:w(g,_,T,A,N,$,z,D,V);break;default:J&1?oe(g,_,T,A,N,$,z,D,V):J&6?Ve(g,_,T,A,N,$,z,D,V):(J&64||J&128)&&O.process(g,_,T,A,N,$,z,D,V,Ae)}Q!=null&&N&&Nh(Q,g&&g.ref,$,_||g,!_)},S=(g,_,T,A)=>{if(g==null)i(_.el=a(_.children),T,A);else{const N=_.el=g.el;_.children!==g.children&&c(N,_.children)}},B=(g,_,T,A)=>{g==null?i(_.el=l(_.children||""),T,A):_.el=g.el},U=(g,_,T,A)=>{[g.el,g.anchor]=b(g.children,_,T,A,g.el,g.anchor)},W=({el:g,anchor:_},T,A)=>{let N;for(;g&&g!==_;)N=m(g),i(g,T,A),g=N;i(_,T,A)},M=({el:g,anchor:_})=>{let T;for(;g&&g!==_;)T=m(g),s(g),g=T;s(_)},oe=(g,_,T,A,N,$,z,D,V)=>{z=z||_.type==="svg",g==null?_e(_,T,A,N,$,z,D,V):be(g,_,N,$,z,D,V)},_e=(g,_,T,A,N,$,z,D)=>{let V,O;const{type:Q,props:J,shapeFlag:ie,transition:le,dirs:K}=g;if(V=g.el=o(g.type,$,J&&J.is,J),ie&8?d(V,g.children):ie&16&&te(g.children,V,null,A,N,$&&Q!=="foreignObject",z,D),K&&ls(g,null,A,"created"),Re(V,g,g.scopeId,z,A),J){for(const Ee in J)Ee!=="value"&&!vl(Ee)&&r(V,Ee,null,J[Ee],$,g.children,A,N,G);"value"in J&&r(V,"value",null,J.value),(O=J.onVnodeBeforeMount)&&jn(O,A,g)}K&&ls(g,null,A,"beforeMount");const Ie=(!N||N&&!N.pendingBranch)&&le&&!le.persisted;Ie&&le.beforeEnter(V),i(V,_,T),((O=J&&J.onVnodeMounted)||Ie||K)&&un(()=>{O&&jn(O,A,g),Ie&&le.enter(V),K&&ls(g,null,A,"mounted")},N)},Re=(g,_,T,A,N)=>{if(T&&y(g,T),A)for(let $=0;$<A.length;$++)y(g,A[$]);if(N){let $=N.subTree;if(_===$){const z=N.vnode;Re(g,z,z.scopeId,z.slotScopeIds,N.parent)}}},te=(g,_,T,A,N,$,z,D,V=0)=>{for(let O=V;O<g.length;O++){const Q=g[O]=D?Fi(g[O]):Wn(g[O]);C(null,Q,_,T,A,N,$,z,D)}},be=(g,_,T,A,N,$,z)=>{const D=_.el=g.el;let{patchFlag:V,dynamicChildren:O,dirs:Q}=_;V|=g.patchFlag&16;const J=g.props||Ze,ie=_.props||Ze;let le;T&&cs(T,!1),(le=ie.onVnodeBeforeUpdate)&&jn(le,T,_,g),Q&&ls(_,g,T,"beforeUpdate"),T&&cs(T,!0);const K=N&&_.type!=="foreignObject";if(O?Te(g.dynamicChildren,O,D,T,A,K,$):z||De(g,_,D,null,T,A,K,$,!1),V>0){if(V&16)Ke(D,_,J,ie,T,A,N);else if(V&2&&J.class!==ie.class&&r(D,"class",null,ie.class,N),V&4&&r(D,"style",J.style,ie.style,N),V&8){const Ie=_.dynamicProps;for(let Ee=0;Ee<Ie.length;Ee++){const Qe=Ie[Ee],je=J[Qe],at=ie[Qe];(at!==je||Qe==="value")&&r(D,Qe,je,at,N,g.children,T,A,G)}}V&1&&g.children!==_.children&&d(D,_.children)}else!z&&O==null&&Ke(D,_,J,ie,T,A,N);((le=ie.onVnodeUpdated)||Q)&&un(()=>{le&&jn(le,T,_,g),Q&&ls(_,g,T,"updated")},A)},Te=(g,_,T,A,N,$,z)=>{for(let D=0;D<_.length;D++){const V=g[D],O=_[D],Q=V.el&&(V.type===He||!ps(V,O)||V.shapeFlag&70)?f(V.el):T;C(V,O,Q,null,A,N,$,z,!0)}},Ke=(g,_,T,A,N,$,z)=>{if(T!==A){if(T!==Ze)for(const D in T)!vl(D)&&!(D in A)&&r(g,D,T[D],null,z,_.children,N,$,G);for(const D in A){if(vl(D))continue;const V=A[D],O=T[D];V!==O&&D!=="value"&&r(g,D,O,V,z,_.children,N,$,G)}"value"in A&&r(g,"value",T.value,A.value)}},w=(g,_,T,A,N,$,z,D,V)=>{const O=_.el=g?g.el:a(""),Q=_.anchor=g?g.anchor:a("");let{patchFlag:J,dynamicChildren:ie,slotScopeIds:le}=_;le&&(D=D?D.concat(le):le),g==null?(i(O,T,A),i(Q,T,A),te(_.children,T,Q,N,$,z,D,V)):J>0&&J&64&&ie&&g.dynamicChildren?(Te(g.dynamicChildren,ie,T,N,$,z,D),(_.key!=null||N&&_===N.subTree)&&rf(g,_,!0)):De(g,_,T,Q,N,$,z,D,V)},Ve=(g,_,T,A,N,$,z,D,V)=>{_.slotScopeIds=D,g==null?_.shapeFlag&512?N.ctx.activate(_,T,A,z,V):Ne(_,T,A,N,$,z,V):rn(g,_,V)},Ne=(g,_,T,A,N,$,z)=>{const D=g.component=nS(g,A,N);if(Nc(g)&&(D.ctx.renderer=Ae),iS(D),D.asyncDep){if(N&&N.registerDep(D,Se),!g.el){const V=D.subTree=xe(Sn);B(null,V,_,T)}return}Se(D,g,_,T,N,$,z)},rn=(g,_,T)=>{const A=_.component=g.component;if(p4(g,_,T))if(A.asyncDep&&!A.asyncResolved){ne(A,_,T);return}else A.next=_,o4(A.update),A.update();else _.el=g.el,A.vnode=_},Se=(g,_,T,A,N,$,z)=>{const D=()=>{if(g.isMounted){let{next:Q,bu:J,u:ie,parent:le,vnode:K}=g,Ie=Q,Ee;cs(g,!1),Q?(Q.el=K.el,ne(g,Q,z)):Q=K,J&&Fu(J),(Ee=Q.props&&Q.props.onVnodeBeforeUpdate)&&jn(Ee,le,Q,K),cs(g,!0);const Qe=Bu(g),je=g.subTree;g.subTree=Qe,C(je,Qe,f(je.el),H(je),g,N,$),Q.el=Qe.el,Ie===null&&m4(g,Qe.el),ie&&un(ie,N),(Ee=Q.props&&Q.props.onVnodeUpdated)&&un(()=>jn(Ee,le,Q,K),N)}else{let Q;const{el:J,props:ie}=_,{bm:le,m:K,parent:Ie}=g,Ee=To(_);if(cs(g,!1),le&&Fu(le),!Ee&&(Q=ie&&ie.onVnodeBeforeMount)&&jn(Q,Ie,_),cs(g,!0),J&&ge){const Qe=()=>{g.subTree=Bu(g),ge(J,g.subTree,g,N,null)};Ee?_.type.__asyncLoader().then(()=>!g.isUnmounted&&Qe()):Qe()}else{const Qe=g.subTree=Bu(g);C(null,Qe,T,A,g,N,$),_.el=Qe.el}if(K&&un(K,N),!Ee&&(Q=ie&&ie.onVnodeMounted)){const Qe=_;un(()=>jn(Q,Ie,Qe),N)}(_.shapeFlag&256||Ie&&To(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&g.a&&un(g.a,N),g.isMounted=!0,_=T=A=null}},V=g.effect=new Wd(D,()=>Jd(O),g.scope),O=g.update=()=>V.run();O.id=g.uid,cs(g,!0),O()},ne=(g,_,T)=>{_.component=g;const A=g.vnode.props;g.vnode=_,g.next=null,V4(g,_.props,A,T),z4(g,_.children,T),Or(),Om(),Mr()},De=(g,_,T,A,N,$,z,D,V=!1)=>{const O=g&&g.children,Q=g?g.shapeFlag:0,J=_.children,{patchFlag:ie,shapeFlag:le}=_;if(ie>0){if(ie&128){wn(O,J,T,A,N,$,z,D,V);return}else if(ie&256){on(O,J,T,A,N,$,z,D,V);return}}le&8?(Q&16&&G(O,N,$),J!==O&&d(T,J)):Q&16?le&16?wn(O,J,T,A,N,$,z,D,V):G(O,N,$,!0):(Q&8&&d(T,""),le&16&&te(J,T,A,N,$,z,D,V))},on=(g,_,T,A,N,$,z,D,V)=>{g=g||sr,_=_||sr;const O=g.length,Q=_.length,J=Math.min(O,Q);let ie;for(ie=0;ie<J;ie++){const le=_[ie]=V?Fi(_[ie]):Wn(_[ie]);C(g[ie],le,T,null,N,$,z,D,V)}O>Q?G(g,N,$,!0,!1,J):te(_,T,A,N,$,z,D,V,J)},wn=(g,_,T,A,N,$,z,D,V)=>{let O=0;const Q=_.length;let J=g.length-1,ie=Q-1;for(;O<=J&&O<=ie;){const le=g[O],K=_[O]=V?Fi(_[O]):Wn(_[O]);if(ps(le,K))C(le,K,T,null,N,$,z,D,V);else break;O++}for(;O<=J&&O<=ie;){const le=g[J],K=_[ie]=V?Fi(_[ie]):Wn(_[ie]);if(ps(le,K))C(le,K,T,null,N,$,z,D,V);else break;J--,ie--}if(O>J){if(O<=ie){const le=ie+1,K=le<Q?_[le].el:A;for(;O<=ie;)C(null,_[O]=V?Fi(_[O]):Wn(_[O]),T,K,N,$,z,D,V),O++}}else if(O>ie)for(;O<=J;)xt(g[O],N,$,!0),O++;else{const le=O,K=O,Ie=new Map;for(O=K;O<=ie;O++){const Jt=_[O]=V?Fi(_[O]):Wn(_[O]);Jt.key!=null&&Ie.set(Jt.key,O)}let Ee,Qe=0;const je=ie-K+1;let at=!1,eo=0;const zn=new Array(je);for(O=0;O<je;O++)zn[O]=0;for(O=le;O<=J;O++){const Jt=g[O];if(Qe>=je){xt(Jt,N,$,!0);continue}let mn;if(Jt.key!=null)mn=Ie.get(Jt.key);else for(Ee=K;Ee<=ie;Ee++)if(zn[Ee-K]===0&&ps(Jt,_[Ee])){mn=Ee;break}mn===void 0?xt(Jt,N,$,!0):(zn[mn-K]=O+1,mn>=eo?eo=mn:at=!0,C(Jt,_[mn],T,null,N,$,z,D,V),Qe++)}const Xt=at?q4(zn):sr;for(Ee=Xt.length-1,O=je-1;O>=0;O--){const Jt=K+O,mn=_[Jt],to=Jt+1<Q?_[Jt+1].el:A;zn[O]===0?C(null,mn,T,to,N,$,z,D,V):at&&(Ee<0||O!==Xt[Ee]?an(mn,T,to,2):Ee--)}}},an=(g,_,T,A,N=null)=>{const{el:$,type:z,transition:D,children:V,shapeFlag:O}=g;if(O&6){an(g.component.subTree,_,T,A);return}if(O&128){g.suspense.move(_,T,A);return}if(O&64){z.move(g,_,T,Ae);return}if(z===He){i($,_,T);for(let J=0;J<V.length;J++)an(V[J],_,T,A);i(g.anchor,_,T);return}if(z===bl){W(g,_,T);return}if(A!==2&&O&1&&D)if(A===0)D.beforeEnter($),i($,_,T),un(()=>D.enter($),N);else{const{leave:J,delayLeave:ie,afterLeave:le}=D,K=()=>i($,_,T),Ie=()=>{J($,()=>{K(),le&&le()})};ie?ie($,K,Ie):Ie()}else i($,_,T)},xt=(g,_,T,A=!1,N=!1)=>{const{type:$,props:z,ref:D,children:V,dynamicChildren:O,shapeFlag:Q,patchFlag:J,dirs:ie}=g;if(D!=null&&Nh(D,null,T,g,!0),Q&256){_.ctx.deactivate(g);return}const le=Q&1&&ie,K=!To(g);let Ie;if(K&&(Ie=z&&z.onVnodeBeforeUnmount)&&jn(Ie,_,g),Q&6)k(g.component,T,A);else{if(Q&128){g.suspense.unmount(T,A);return}le&&ls(g,null,_,"beforeUnmount"),Q&64?g.type.remove(g,_,T,N,Ae,A):O&&($!==He||J>0&&J&64)?G(O,_,T,!1,!0):($===He&&J&384||!N&&Q&16)&&G(V,_,T),A&&xn(g)}(K&&(Ie=z&&z.onVnodeUnmounted)||le)&&un(()=>{Ie&&jn(Ie,_,g),le&&ls(g,null,_,"unmounted")},T)},xn=g=>{const{type:_,el:T,anchor:A,transition:N}=g;if(_===He){ln(T,A);return}if(_===bl){M(g);return}const $=()=>{s(T),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(g.shapeFlag&1&&N&&!N.persisted){const{leave:z,delayLeave:D}=N,V=()=>z(T,$);D?D(g.el,$,V):V()}else $()},ln=(g,_)=>{let T;for(;g!==_;)T=m(g),s(g),g=T;s(_)},k=(g,_,T)=>{const{bum:A,scope:N,update:$,subTree:z,um:D}=g;A&&Fu(A),N.stop(),$&&($.active=!1,xt(z,g,_,T)),D&&un(D,_),un(()=>{g.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},G=(g,_,T,A=!1,N=!1,$=0)=>{for(let z=$;z<g.length;z++)xt(g[z],_,T,A,N)},H=g=>g.shapeFlag&6?H(g.component.subTree):g.shapeFlag&128?g.suspense.next():m(g.anchor||g.el),Z=(g,_,T)=>{g==null?_._vnode&&xt(_._vnode,null,null,!0):C(_._vnode||null,g,_,null,null,null,T),Om(),b0(),_._vnode=g},Ae={p:C,um:xt,m:an,r:xn,mt:Ne,mc:te,pc:De,pbc:Te,n:H,o:t};let Ye,ge;return e&&([Ye,ge]=e(Ae)),{render:Z,hydrate:Ye,createApp:B4(Z,Ye)}}function cs({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function rf(t,e,n=!1){const i=t.children,s=e.children;if(ae(i)&&ae(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Fi(s[r]),a.el=o.el),n||rf(o,a)),a.type===Lc&&(a.el=o.el)}}function q4(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const K4=t=>t.__isTeleport,Ao=t=>t&&(t.disabled||t.disabled===""),Km=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Dh=(t,e)=>{const n=t&&t.to;return ht(n)?e?e(n):null:n},G4={__isTeleport:!0,process(t,e,n,i,s,r,o,a,l,c){const{mc:d,pc:f,pbc:m,o:{insert:y,querySelector:b,createText:C,createComment:S}}=c,B=Ao(e.props);let{shapeFlag:U,children:W,dynamicChildren:M}=e;if(t==null){const oe=e.el=C(""),_e=e.anchor=C("");y(oe,n,i),y(_e,n,i);const Re=e.target=Dh(e.props,b),te=e.targetAnchor=C("");Re&&(y(te,Re),o=o||Km(Re));const be=(Te,Ke)=>{U&16&&d(W,Te,Ke,s,r,o,a,l)};B?be(n,_e):Re&&be(Re,te)}else{e.el=t.el;const oe=e.anchor=t.anchor,_e=e.target=t.target,Re=e.targetAnchor=t.targetAnchor,te=Ao(t.props),be=te?n:_e,Te=te?oe:Re;if(o=o||Km(_e),M?(m(t.dynamicChildren,M,be,s,r,o,a),rf(t,e,!0)):l||f(t,e,be,Te,s,r,o,a,!1),B)te||el(e,n,oe,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const Ke=e.target=Dh(e.props,b);Ke&&el(e,Ke,null,c,0)}else te&&el(e,_e,Re,c,1)}j0(e)},remove(t,e,n,i,{um:s,o:{remove:r}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:d,target:f,props:m}=t;if(f&&r(d),(o||!Ao(m))&&(r(c),a&16))for(let y=0;y<l.length;y++){const b=l[y];s(b,e,n,!0,!!b.dynamicChildren)}},move:el,hydrate:Y4};function el(t,e,n,{o:{insert:i},m:s},r=2){r===0&&i(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:d}=t,f=r===2;if(f&&i(o,e,n),(!f||Ao(d))&&l&16)for(let m=0;m<c.length;m++)s(c[m],e,n,2);f&&i(a,e,n)}function Y4(t,e,n,i,s,r,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const d=e.target=Dh(e.props,l);if(d){const f=d._lpa||d.firstChild;if(e.shapeFlag&16)if(Ao(e.props))e.anchor=c(o(t),e,a(t),n,i,s,r),e.targetAnchor=f;else{e.anchor=o(t);let m=f;for(;m;)if(m=o(m),m&&m.nodeType===8&&m.data==="teleport anchor"){e.targetAnchor=m,d._lpa=e.targetAnchor&&o(e.targetAnchor);break}c(f,e,d,n,i,s,r)}j0(e)}return e.anchor&&o(e.anchor)}const Q4=G4;function j0(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const He=Symbol.for("v-fgt"),Lc=Symbol.for("v-txt"),Sn=Symbol.for("v-cmt"),bl=Symbol.for("v-stc"),ko=[];let Ln=null;function I(t=!1){ko.push(Ln=t?null:[])}function X4(){ko.pop(),Ln=ko[ko.length-1]||null}let qo=1;function Gm(t){qo+=t}function W0(t){return t.dynamicChildren=qo>0?Ln||sr:null,X4(),qo>0&&Ln&&Ln.push(t),t}function L(t,e,n,i,s,r){return W0(R(t,e,n,i,s,r,!0))}function me(t,e,n,i,s){return W0(xe(t,e,n,i,s,!0))}function Fl(t){return t?t.__v_isVNode===!0:!1}function ps(t,e){return t.type===e.type&&t.key===e.key}const Oc="__vInternal",q0=({key:t})=>t??null,Cl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ht(t)||jt(t)||we(t)?{i:Dt,r:t,k:e,f:!!n}:t:null);function R(t,e=null,n=null,i=0,s=null,r=t===He?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&q0(e),ref:e&&Cl(e),scopeId:Pc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Dt};return a?(af(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=ht(n)?8:16),qo>0&&!o&&Ln&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Ln.push(l),l}const xe=J4;function J4(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===O0)&&(t=Sn),Fl(t)){const a=Ji(t,e,!0);return n&&af(a,n),qo>0&&!r&&Ln&&(a.shapeFlag&6?Ln[Ln.indexOf(t)]=a:Ln.push(a)),a.patchFlag|=-2,a}if(lS(t)&&(t=t.__vccOpts),e){e=of(e);let{class:a,style:l}=e;a&&!ht(a)&&(e.class=wi(a)),it(l)&&(h0(l)&&!ae(l)&&(l=pt({},l)),e.style=Ac(l))}const o=ht(t)?1:g4(t)?128:K4(t)?64:it(t)?4:we(t)?2:0;return R(t,e,n,i,s,o,r,!0)}function of(t){return t?h0(t)||Oc in t?pt({},t):t:null}function Ji(t,e,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=t,a=e?E(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&q0(a),ref:e&&e.ref?n&&s?ae(s)?s.concat(Cl(e)):[s,Cl(e)]:Cl(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==He?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ji(t.ssContent),ssFallback:t.ssFallback&&Ji(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function tn(t=" ",e=0){return xe(Lc,null,t,e)}function Z4(t,e){const n=xe(bl,null,t);return n.staticCount=e,n}function fe(t="",e=!1){return e?(I(),me(Sn,null,t)):xe(Sn,null,t)}function Wn(t){return t==null||typeof t=="boolean"?xe(Sn):ae(t)?xe(He,null,t.slice()):typeof t=="object"?Fi(t):xe(Lc,null,String(t))}function Fi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ji(t)}function af(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(ae(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),af(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Oc in e)?e._ctx=Dt:s===3&&Dt&&(Dt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else we(e)?(e={default:e,_ctx:Dt},n=32):(e=String(e),i&64?(n=16,e=[tn(e)]):n=8);t.children=e,t.shapeFlag|=n}function E(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=wi([e.class,i.class]));else if(s==="style")e.style=Ac([e.style,i.style]);else if(Ic(s)){const r=e[s],o=i[s];o&&r!==o&&!(ae(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function jn(t,e,n,i=null){Tn(t,e,7,[n,i])}const eS=B0();let tS=0;function nS(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||eS,r={uid:tS++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Z1(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:V0(i,s),emitsOptions:I0(i,s),emit:null,emitted:null,propsDefaults:Ze,inheritAttrs:i.inheritAttrs,ctx:Ze,data:Ze,props:Ze,attrs:Ze,slots:Ze,refs:Ze,setupState:Ze,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=c4.bind(null,r),t.ce&&t.ce(r),r}let Et=null;const lf=()=>Et||Dt;let cf,Gs,Ym="__VUE_INSTANCE_SETTERS__";(Gs=Ch()[Ym])||(Gs=Ch()[Ym]=[]),Gs.push(t=>Et=t),cf=t=>{Gs.length>1?Gs.forEach(e=>e(t)):Gs[0](t)};const wr=t=>{cf(t),t.scope.on()},Is=()=>{Et&&Et.scope.off(),cf(null)};function K0(t){return t.vnode.shapeFlag&4}let Ko=!1;function iS(t,e=!1){Ko=e;const{props:n,children:i}=t.vnode,s=K0(t);U4(t,n,s,e),H4(t,i);const r=s?sS(t,e):void 0;return Ko=!1,r}function sS(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=d0(new Proxy(t.ctx,P4));const{setup:i}=n;if(i){const s=t.setupContext=i.length>1?oS(t):null;wr(t),Or();const r=ji(i,t,0,[t.props,s]);if(Mr(),Is(),G1(r)){if(r.then(Is,Is),e)return r.then(o=>{Qm(t,o,e)}).catch(o=>{xc(o,t,0)});t.asyncDep=r}else Qm(t,r,e)}else G0(t,e)}function Qm(t,e,n){we(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:it(e)&&(t.setupState=y0(e)),G0(t,n)}let Xm;function G0(t,e,n){const i=t.type;if(!t.render){if(!e&&Xm&&!i.render){const s=i.template||nf(t).template;if(s){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=pt(pt({isCustomElement:r,delimiters:a},o),l);i.render=Xm(s,c)}}t.render=i.render||Bn}wr(t),Or(),N4(t),Mr(),Is()}function rS(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return fn(t,"get","$attrs"),e[n]}}))}function oS(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return rS(t)},slots:t.slots,emit:t.emit,expose:e}}function Mc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(y0(d0(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in So)return So[n](t)},has(e,n){return n in e||n in So}}))}function aS(t,e=!0){return we(t)?t.displayName||t.name:t.name||e&&t.__name}function lS(t){return we(t)&&"__vccOpts"in t}const Nn=(t,e)=>i4(t,e,Ko);function uf(t,e,n){const i=arguments.length;return i===2?it(e)&&!ae(e)?Fl(e)?xe(t,null,[e]):xe(t,e):xe(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Fl(n)&&(n=[n]),xe(t,e,n))}const cS=Symbol.for("v-scx"),uS=()=>Qn(cS),hS="3.3.2",dS="http://www.w3.org/2000/svg",ms=typeof document<"u"?document:null,Jm=ms&&ms.createElement("template"),fS={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e?ms.createElementNS(dS,t):ms.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>ms.createTextNode(t),createComment:t=>ms.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ms.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Jm.innerHTML=i?`<svg>${t}</svg>`:t;const a=Jm.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function pS(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function mS(t,e,n){const i=t.style,s=ht(n);if(n&&!s){if(e&&!ht(e))for(const r in e)n[r]==null&&Lh(i,r,"");for(const r in n)Lh(i,r,n[r])}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=r)}}const Zm=/\s*!important$/;function Lh(t,e,n){if(ae(n))n.forEach(i=>Lh(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=gS(t,e);Zm.test(n)?t.setProperty(Fs(i),n.replace(Zm,""),"important"):t[i]=n}}const eg=["Webkit","Moz","ms"],$u={};function gS(t,e){const n=$u[e];if(n)return n;let i=ei(e);if(i!=="filter"&&i in t)return $u[e]=i;i=Sc(i);for(let s=0;s<eg.length;s++){const r=eg[s]+i;if(r in t)return $u[e]=r}return e}const tg="http://www.w3.org/1999/xlink";function yS(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(tg,e.slice(6,e.length)):t.setAttributeNS(tg,e,n);else{const r=CT(e);n==null||r&&!X1(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function vS(t,e,n,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,d=n??"";c!==d&&(t.value=d),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=X1(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function _S(t,e,n,i){t.addEventListener(e,n,i)}function wS(t,e,n,i){t.removeEventListener(e,n,i)}function bS(t,e,n,i,s=null){const r=t._vei||(t._vei={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=CS(e);if(i){const c=r[e]=TS(i,s);_S(t,a,c,l)}else o&&(wS(t,a,o,l),r[e]=void 0)}}const ng=/(?:Once|Passive|Capture)$/;function CS(t){let e;if(ng.test(t)){e={};let i;for(;i=t.match(ng);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Fs(t.slice(2)),e]}let Hu=0;const IS=Promise.resolve(),ES=()=>Hu||(IS.then(()=>Hu=0),Hu=Date.now());function TS(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Tn(SS(i,n.value),e,5,[i])};return n.value=t,n.attached=ES(),n}function SS(t,e){if(ae(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const ig=/^on[a-z]/,AS=(t,e,n,i,s=!1,r,o,a,l)=>{e==="class"?pS(t,i,s):e==="style"?mS(t,n,i):Ic(e)?Ud(e)||bS(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):kS(t,e,i,s))?vS(t,e,i,r,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),yS(t,e,i,s))};function kS(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&ig.test(e)&&we(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||ig.test(e)&&ht(n)?!1:e in t}const Pi="transition",ro="animation",ya=(t,{slots:e})=>uf(w4,Q0(t),e);ya.displayName="Transition";const Y0={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},xS=ya.props=pt({},A0,Y0),us=(t,e=[])=>{ae(t)?t.forEach(n=>n(...e)):t&&t(...e)},sg=t=>t?ae(t)?t.some(e=>e.length>1):t.length>1:!1;function Q0(t){const e={};for(const w in t)w in Y0||(e[w]=t[w]);if(t.css===!1)return e;const{name:n="v",type:i,duration:s,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:d=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:y=`${n}-leave-to`}=t,b=RS(s),C=b&&b[0],S=b&&b[1],{onBeforeEnter:B,onEnter:U,onEnterCancelled:W,onLeave:M,onLeaveCancelled:oe,onBeforeAppear:_e=B,onAppear:Re=U,onAppearCancelled:te=W}=e,be=(w,Ve,Ne)=>{Mi(w,Ve?d:a),Mi(w,Ve?c:o),Ne&&Ne()},Te=(w,Ve)=>{w._isLeaving=!1,Mi(w,f),Mi(w,y),Mi(w,m),Ve&&Ve()},Ke=w=>(Ve,Ne)=>{const rn=w?Re:U,Se=()=>be(Ve,w,Ne);us(rn,[Ve,Se]),rg(()=>{Mi(Ve,w?l:r),li(Ve,w?d:a),sg(rn)||og(Ve,i,C,Se)})};return pt(e,{onBeforeEnter(w){us(B,[w]),li(w,r),li(w,o)},onBeforeAppear(w){us(_e,[w]),li(w,l),li(w,c)},onEnter:Ke(!1),onAppear:Ke(!0),onLeave(w,Ve){w._isLeaving=!0;const Ne=()=>Te(w,Ve);li(w,f),J0(),li(w,m),rg(()=>{w._isLeaving&&(Mi(w,f),li(w,y),sg(M)||og(w,i,S,Ne))}),us(M,[w,Ne])},onEnterCancelled(w){be(w,!1),us(W,[w])},onAppearCancelled(w){be(w,!0),us(te,[w])},onLeaveCancelled(w){Te(w),us(oe,[w])}})}function RS(t){if(t==null)return null;if(it(t))return[zu(t.enter),zu(t.leave)];{const e=zu(t);return[e,e]}}function zu(t){return gT(t)}function li(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Mi(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function rg(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let PS=0;function og(t,e,n,i){const s=t._endId=++PS,r=()=>{s===t._endId&&i()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=X0(t,e);if(!o)return i();const c=o+"end";let d=0;const f=()=>{t.removeEventListener(c,m),r()},m=y=>{y.target===t&&++d>=l&&f()};setTimeout(()=>{d<l&&f()},a+1),t.addEventListener(c,m)}function X0(t,e){const n=window.getComputedStyle(t),i=b=>(n[b]||"").split(", "),s=i(`${Pi}Delay`),r=i(`${Pi}Duration`),o=ag(s,r),a=i(`${ro}Delay`),l=i(`${ro}Duration`),c=ag(a,l);let d=null,f=0,m=0;e===Pi?o>0&&(d=Pi,f=o,m=r.length):e===ro?c>0&&(d=ro,f=c,m=l.length):(f=Math.max(o,c),d=f>0?o>c?Pi:ro:null,m=d?d===Pi?r.length:l.length:0);const y=d===Pi&&/\b(transform|all)(,|$)/.test(i(`${Pi}Property`).toString());return{type:d,timeout:f,propCount:m,hasTransform:y}}function ag(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>lg(n)+lg(t[i])))}function lg(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function J0(){return document.body.offsetHeight}const Z0=new WeakMap,ev=new WeakMap,tv={name:"TransitionGroup",props:pt({},xS,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=lf(),i=S0();let s,r;return N0(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!FS(s[0].el,n.vnode.el,o))return;s.forEach(LS),s.forEach(OS);const a=s.filter(MS);J0(),a.forEach(l=>{const c=l.el,d=c.style;li(c,o),d.transform=d.webkitTransform=d.transitionDuration="";const f=c._moveCb=m=>{m&&m.target!==c||(!m||/transform$/.test(m.propertyName))&&(c.removeEventListener("transitionend",f),c._moveCb=null,Mi(c,o))};c.addEventListener("transitionend",f)})}),()=>{const o=Ue(t),a=Q0(o);let l=o.tag||He;s=r,r=e.default?Zd(e.default()):[];for(let c=0;c<r.length;c++){const d=r[c];d.key!=null&&Wo(d,jo(d,a,i,n))}if(s)for(let c=0;c<s.length;c++){const d=s[c];Wo(d,jo(d,a,i,n)),Z0.set(d,d.el.getBoundingClientRect())}return xe(l,null,r)}}},NS=t=>delete t.mode;tv.props;const DS=tv;function LS(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function OS(t){ev.set(t,t.el.getBoundingClientRect())}function MS(t){const e=Z0.get(t),n=ev.get(t),i=e.left-n.left,s=e.top-n.top;if(i||s){const r=t.el.style;return r.transform=r.webkitTransform=`translate(${i}px,${s}px)`,r.transitionDuration="0s",t}}function FS(t,e,n){const i=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&i.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&i.classList.add(o)),i.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(i);const{hasTransform:r}=X0(i);return s.removeChild(i),r}const BS={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},cg=(t,e)=>n=>{if(!("key"in n))return;const i=Fs(n.key);if(e.some(s=>s===i||BS[s]===i))return t(n)},nv={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):oo(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),oo(t,!0),i.enter(t)):i.leave(t,()=>{oo(t,!1)}):oo(t,e))},beforeUnmount(t,{value:e}){oo(t,e)}};function oo(t,e){t.style.display=e?t._vod:"none"}const US=pt({patchProp:AS},fS);let ug;function VS(){return ug||(ug=j4(US))}const $S=(...t)=>{const e=VS().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=HS(i);if(!s)return;const r=e._component;!we(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function HS(t){return ht(t)?document.querySelector(t):t}/**
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
 */const iv={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const j=function(t,e){if(!t)throw Br(e)},Br=function(t){return new Error("Firebase Database ("+iv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const sv=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},zS=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Fc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,d=r>>2,f=(r&3)<<4|a>>4;let m=(a&15)<<2|c>>6,y=c&63;l||(y=64,o||(m=64)),i.push(n[d],n[f],n[m],n[y])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(sv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):zS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||c==null||f==null)throw new jS;const m=r<<2|a>>4;if(i.push(m),c!==64){const y=a<<4&240|c>>2;if(i.push(y),f!==64){const b=c<<6&192|f;i.push(b)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class jS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rv=function(t){const e=sv(t);return Fc.encodeByteArray(e,!0)},Bl=function(t){return rv(t).replace(/\./g,"")},Ul=function(t){try{return Fc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function WS(t){return ov(void 0,t)}function ov(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!qS(n)||(t[n]=ov(t[n],e[n]));return t}function qS(t){return t!=="__proto__"}/**
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
 */function KS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const GS=()=>KS().__FIREBASE_DEFAULTS__,YS=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},QS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ul(t[1]);return e&&JSON.parse(e)},hf=()=>{try{return GS()||YS()||QS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},av=t=>{var e,n;return(n=(e=hf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},XS=t=>{const e=av(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},lv=()=>{var t;return(t=hf())===null||t===void 0?void 0:t.config},cv=t=>{var e;return(e=hf())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Go{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function JS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Bl(JSON.stringify(n)),Bl(JSON.stringify(o)),a].join(".")}/**
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
 */function Yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function df(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Yt())}function ZS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function uv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function e6(){const t=Yt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function hv(){return iv.NODE_ADMIN===!0}function dv(){try{return typeof indexedDB=="object"}catch{return!1}}function t6(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const n6="FirebaseError";class oi extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=n6,Object.setPrototypeOf(this,oi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ur.prototype.create)}}class Ur{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?i6(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new oi(s,a,i)}}function i6(t,e){return t.replace(s6,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const s6=/\{\$([^}]+)}/g;/**
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
 */function Yo(t){return JSON.parse(t)}function Nt(t){return JSON.stringify(t)}/**
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
 */const fv=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=Yo(Ul(r[0])||""),n=Yo(Ul(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},r6=function(t){const e=fv(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},o6=function(t){const e=fv(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function xi(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function br(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Oh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Vl(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function $l(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(hg(r)&&hg(o)){if(!$l(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function hg(t){return t!==null&&typeof t=="object"}/**
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
 */function Vr(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class a6{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)i[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)i[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const m=i[f-3]^i[f-8]^i[f-14]^i[f-16];i[f]=(m<<1|m>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,d;for(let f=0;f<80;f++){f<40?f<20?(c=a^r&(o^a),d=1518500249):(c=r^o^a,d=1859775393):f<60?(c=r&o|a&(r|o),d=2400959708):(c=r^o^a,d=3395469782);const m=(s<<5|s>>>27)+c+l+d+i[f]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=m}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function l6(t,e){const n=new c6(t,e);return n.subscribe.bind(n)}class c6{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");u6(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=ju),s.error===void 0&&(s.error=ju),s.complete===void 0&&(s.complete=ju);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function u6(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ju(){}function h6(t,e){return`${t} failed: ${e} argument `}/**
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
 */const d6=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,j(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Bc=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function pn(t){return t&&t._delegate?t._delegate:t}class Vn{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const hs="[DEFAULT]";/**
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
 */class f6{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Go;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(m6(e))try{this.getOrInitializeService({instanceIdentifier:hs})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=hs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hs){return this.instances.has(e)}getOptions(e=hs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:p6(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=hs){return this.component?this.component.multipleInstances?e:hs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function p6(t){return t===hs?void 0:t}function m6(t){return t.instantiationMode==="EAGER"}/**
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
 */class g6{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new f6(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Be;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Be||(Be={}));const y6={debug:Be.DEBUG,verbose:Be.VERBOSE,info:Be.INFO,warn:Be.WARN,error:Be.ERROR,silent:Be.SILENT},v6=Be.INFO,_6={[Be.DEBUG]:"log",[Be.VERBOSE]:"log",[Be.INFO]:"info",[Be.WARN]:"warn",[Be.ERROR]:"error"},w6=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=_6[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class va{constructor(e){this.name=e,this._logLevel=v6,this._logHandler=w6,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?y6[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Be.DEBUG,...e),this._logHandler(this,Be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Be.VERBOSE,...e),this._logHandler(this,Be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Be.INFO,...e),this._logHandler(this,Be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Be.WARN,...e),this._logHandler(this,Be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Be.ERROR,...e),this._logHandler(this,Be.ERROR,...e)}}const b6=(t,e)=>e.some(n=>t instanceof n);let dg,fg;function C6(){return dg||(dg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function I6(){return fg||(fg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pv=new WeakMap,Mh=new WeakMap,mv=new WeakMap,Wu=new WeakMap,ff=new WeakMap;function E6(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Wi(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&pv.set(n,t)}).catch(()=>{}),ff.set(e,t),e}function T6(t){if(Mh.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Mh.set(t,e)}let Fh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Mh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||mv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Wi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function S6(t){Fh=t(Fh)}function A6(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(qu(this),e,...n);return mv.set(i,e.sort?e.sort():[e]),Wi(i)}:I6().includes(t)?function(...e){return t.apply(qu(this),e),Wi(pv.get(this))}:function(...e){return Wi(t.apply(qu(this),e))}}function k6(t){return typeof t=="function"?A6(t):(t instanceof IDBTransaction&&T6(t),b6(t,C6())?new Proxy(t,Fh):t)}function Wi(t){if(t instanceof IDBRequest)return E6(t);if(Wu.has(t))return Wu.get(t);const e=k6(t);return e!==t&&(Wu.set(t,e),ff.set(e,t)),e}const qu=t=>ff.get(t);function x6(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=Wi(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Wi(o.result),l.oldVersion,l.newVersion,Wi(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const R6=["get","getKey","getAll","getAllKeys","count"],P6=["put","add","delete","clear"],Ku=new Map;function pg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ku.get(e))return Ku.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=P6.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||R6.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Ku.set(e,r),r}S6(t=>({...t,get:(e,n,i)=>pg(e,n)||t.get(e,n,i),has:(e,n)=>!!pg(e,n)||t.has(e,n)}));/**
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
 */class N6{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(D6(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function D6(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bh="@firebase/app",mg="0.9.10";/**
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
 */const As=new va("@firebase/app"),L6="@firebase/app-compat",O6="@firebase/analytics-compat",M6="@firebase/analytics",F6="@firebase/app-check-compat",B6="@firebase/app-check",U6="@firebase/auth",V6="@firebase/auth-compat",$6="@firebase/database",H6="@firebase/database-compat",z6="@firebase/functions",j6="@firebase/functions-compat",W6="@firebase/installations",q6="@firebase/installations-compat",K6="@firebase/messaging",G6="@firebase/messaging-compat",Y6="@firebase/performance",Q6="@firebase/performance-compat",X6="@firebase/remote-config",J6="@firebase/remote-config-compat",Z6="@firebase/storage",e9="@firebase/storage-compat",t9="@firebase/firestore",n9="@firebase/firestore-compat",i9="firebase",s9="9.22.0";/**
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
 */const Uh="[DEFAULT]",r9={[Bh]:"fire-core",[L6]:"fire-core-compat",[M6]:"fire-analytics",[O6]:"fire-analytics-compat",[B6]:"fire-app-check",[F6]:"fire-app-check-compat",[U6]:"fire-auth",[V6]:"fire-auth-compat",[$6]:"fire-rtdb",[H6]:"fire-rtdb-compat",[z6]:"fire-fn",[j6]:"fire-fn-compat",[W6]:"fire-iid",[q6]:"fire-iid-compat",[K6]:"fire-fcm",[G6]:"fire-fcm-compat",[Y6]:"fire-perf",[Q6]:"fire-perf-compat",[X6]:"fire-rc",[J6]:"fire-rc-compat",[Z6]:"fire-gcs",[e9]:"fire-gcs-compat",[t9]:"fire-fst",[n9]:"fire-fst-compat","fire-js":"fire-js",[i9]:"fire-js-all"};/**
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
 */const Hl=new Map,Vh=new Map;function o9(t,e){try{t.container.addComponent(e)}catch(n){As.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ti(t){const e=t.name;if(Vh.has(e))return As.debug(`There were multiple attempts to register component ${e}.`),!1;Vh.set(e,t);for(const n of Hl.values())o9(n,t);return!0}function pf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const a9={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},qi=new Ur("app","Firebase",a9);/**
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
 */class l9{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Vn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qi.create("app-deleted",{appName:this._name})}}/**
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
 */const is=s9;function gv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Uh,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw qi.create("bad-app-name",{appName:String(s)});if(n||(n=lv()),!n)throw qi.create("no-options");const r=Hl.get(s);if(r){if($l(n,r.options)&&$l(i,r.config))return r;throw qi.create("duplicate-app",{appName:s})}const o=new g6(s);for(const l of Vh.values())o.addComponent(l);const a=new l9(n,i,o);return Hl.set(s,a),a}function mf(t=Uh){const e=Hl.get(t);if(!e&&t===Uh&&lv())return gv();if(!e)throw qi.create("no-app",{appName:t});return e}function yn(t,e,n){var i;let s=(i=r9[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),As.warn(a.join(" "));return}ti(new Vn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const c9="firebase-heartbeat-database",u9=1,Qo="firebase-heartbeat-store";let Gu=null;function yv(){return Gu||(Gu=x6(c9,u9,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Qo)}}}).catch(t=>{throw qi.create("idb-open",{originalErrorMessage:t.message})})),Gu}async function h9(t){try{return await(await yv()).transaction(Qo).objectStore(Qo).get(vv(t))}catch(e){if(e instanceof oi)As.warn(e.message);else{const n=qi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});As.warn(n.message)}}}async function gg(t,e){try{const i=(await yv()).transaction(Qo,"readwrite");await i.objectStore(Qo).put(e,vv(t)),await i.done}catch(n){if(n instanceof oi)As.warn(n.message);else{const i=qi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});As.warn(i.message)}}}function vv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const d9=1024,f9=30*24*60*60*1e3;class p9{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new g9(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=yg();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=f9}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=yg(),{heartbeatsToSend:n,unsentEntries:i}=m9(this._heartbeatsCache.heartbeats),s=Bl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function yg(){return new Date().toISOString().substring(0,10)}function m9(t,e=d9){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),vg(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),vg(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class g9{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dv()?t6().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await h9(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return gg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return gg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function vg(t){return Bl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function y9(t){ti(new Vn("platform-logger",e=>new N6(e),"PRIVATE")),ti(new Vn("heartbeat",e=>new p9(e),"PRIVATE")),yn(Bh,mg,t),yn(Bh,mg,"esm2017"),yn("fire-js","")}y9("");function gf(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function _v(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const v9=_v,wv=new Ur("auth","Firebase",_v());/**
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
 */const zl=new va("@firebase/auth");function _9(t,...e){zl.logLevel<=Be.WARN&&zl.warn(`Auth (${is}): ${t}`,...e)}function Il(t,...e){zl.logLevel<=Be.ERROR&&zl.error(`Auth (${is}): ${t}`,...e)}/**
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
 */function ni(t,...e){throw yf(t,...e)}function Xn(t,...e){return yf(t,...e)}function bv(t,e,n){const i=Object.assign(Object.assign({},v9()),{[e]:n});return new Ur("auth","Firebase",i).create(e,{appName:t.name})}function w9(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&ni(t,"argument-error"),bv(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function yf(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return wv.create(t,...e)}function pe(t,e,...n){if(!t)throw yf(e,...n)}function di(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Il(e),new Error(e)}function Ci(t,e){t||di(e)}/**
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
 */function $h(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function b9(){return _g()==="http:"||_g()==="https:"}function _g(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function C9(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(b9()||ZS()||"connection"in navigator)?navigator.onLine:!0}function I9(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class _a{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ci(n>e,"Short delay should be less than long delay!"),this.isMobile=df()||uv()}get(){return C9()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function vf(t,e){Ci(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Cv{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;di("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;di("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;di("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const E9={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const T9=new _a(3e4,6e4);function Iv(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function wa(t,e,n,i,s={}){return Ev(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=Vr(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Cv.fetch()(Tv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Ev(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},E9),e);try{const s=new A9(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw tl(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw tl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw tl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw tl(t,"user-disabled",o);const d=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw bv(t,d,c);ni(t,d)}}catch(s){if(s instanceof oi)throw s;ni(t,"network-request-failed",{message:String(s)})}}async function S9(t,e,n,i,s={}){const r=await wa(t,e,n,i,s);return"mfaPendingCredential"in r&&ni(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Tv(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?vf(t.config,s):`${t.config.apiScheme}://${s}`}class A9{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Xn(this.auth,"network-request-failed")),T9.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function tl(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=Xn(t,e,i);return s.customData._tokenResponse=n,s}/**
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
 */async function k9(t,e){return wa(t,"POST","/v1/accounts:delete",e)}async function x9(t,e){return wa(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function xo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function R9(t,e=!1){const n=pn(t),i=await n.getIdToken(e),s=_f(i);pe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:xo(Yu(s.auth_time)),issuedAtTime:xo(Yu(s.iat)),expirationTime:xo(Yu(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Yu(t){return Number(t)*1e3}function _f(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Il("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ul(n);return s?JSON.parse(s):(Il("Failed to decode base64 JWT payload"),null)}catch(s){return Il("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function P9(t){const e=_f(t);return pe(e,"internal-error"),pe(typeof e.exp<"u","internal-error"),pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Xo(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof oi&&N9(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function N9({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class D9{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Sv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xo(this.lastLoginAt),this.creationTime=xo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function jl(t){var e;const n=t.auth,i=await t.getIdToken(),s=await Xo(t,x9(n,{idToken:i}));pe(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?M9(r.providerUserInfo):[],a=O9(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),d=l?c:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Sv(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function L9(t){const e=pn(t);await jl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function O9(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function M9(t){return t.map(e=>{var{providerId:n}=e,i=gf(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function F9(t,e){const n=await Ev(t,{},async()=>{const i=Vr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=Tv(t,s,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Cv.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Jo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){pe(e.idToken,"internal-error"),pe(typeof e.idToken<"u","internal-error"),pe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):P9(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return pe(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await F9(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new Jo;return i&&(pe(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(pe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(pe(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Jo,this.toJSON())}_performRefresh(){return di("not implemented")}}/**
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
 */function Ni(t,e){pe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Es{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=gf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new D9(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Sv(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Xo(this,this.stsTokenManager.getToken(this.auth,e));return pe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return R9(this,e)}reload(){return L9(this)}_assign(e){this!==e&&(pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Es(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await jl(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Xo(this,k9(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,a,l,c,d;const f=(i=n.displayName)!==null&&i!==void 0?i:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,y=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,b=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,B=(c=n.createdAt)!==null&&c!==void 0?c:void 0,U=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:W,emailVerified:M,isAnonymous:oe,providerData:_e,stsTokenManager:Re}=n;pe(W&&Re,e,"internal-error");const te=Jo.fromJSON(this.name,Re);pe(typeof W=="string",e,"internal-error"),Ni(f,e.name),Ni(m,e.name),pe(typeof M=="boolean",e,"internal-error"),pe(typeof oe=="boolean",e,"internal-error"),Ni(y,e.name),Ni(b,e.name),Ni(C,e.name),Ni(S,e.name),Ni(B,e.name),Ni(U,e.name);const be=new Es({uid:W,auth:e,email:m,emailVerified:M,displayName:f,isAnonymous:oe,photoURL:b,phoneNumber:y,tenantId:C,stsTokenManager:te,createdAt:B,lastLoginAt:U});return _e&&Array.isArray(_e)&&(be.providerData=_e.map(Te=>Object.assign({},Te))),S&&(be._redirectEventId=S),be}static async _fromIdTokenResponse(e,n,i=!1){const s=new Jo;s.updateFromServerResponse(n);const r=new Es({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await jl(r),r}}/**
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
 */const wg=new Map;function fi(t){Ci(t instanceof Function,"Expected a class definition");let e=wg.get(t);return e?(Ci(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,wg.set(t,e),e)}/**
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
 */class Av{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Av.type="NONE";const bg=Av;/**
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
 */function El(t,e,n){return`firebase:${t}:${e}:${n}`}class cr{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=El(this.userKey,s.apiKey,r),this.fullPersistenceKey=El("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Es._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new cr(fi(bg),e,i);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||fi(bg);const o=El(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const f=Es._fromJSON(e,d);c!==r&&(a=f),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new cr(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new cr(r,e,i))}}/**
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
 */function Cg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Rv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(kv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Nv(e))return"Blackberry";if(Dv(e))return"Webos";if(wf(e))return"Safari";if((e.includes("chrome/")||xv(e))&&!e.includes("edge/"))return"Chrome";if(Pv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function kv(t=Yt()){return/firefox\//i.test(t)}function wf(t=Yt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xv(t=Yt()){return/crios\//i.test(t)}function Rv(t=Yt()){return/iemobile/i.test(t)}function Pv(t=Yt()){return/android/i.test(t)}function Nv(t=Yt()){return/blackberry/i.test(t)}function Dv(t=Yt()){return/webos/i.test(t)}function Uc(t=Yt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function B9(t=Yt()){var e;return Uc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function U9(){return e6()&&document.documentMode===10}function Lv(t=Yt()){return Uc(t)||Pv(t)||Dv(t)||Nv(t)||/windows phone/i.test(t)||Rv(t)}function V9(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Ov(t,e=[]){let n;switch(t){case"Browser":n=Cg(Yt());break;case"Worker":n=`${Cg(Yt())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${is}/${i}`}async function Mv(t,e){return wa(t,"GET","/v2/recaptchaConfig",Iv(t,e))}function Ig(t){return t!==void 0&&t.enterprise!==void 0}class Fv{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function $9(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Bv(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=Xn("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",$9().appendChild(i)})}function H9(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const z9="https://www.google.com/recaptcha/enterprise.js?render=",j9="recaptcha-enterprise",W9="NO_RECAPTCHA";class q9{constructor(e){this.type=j9,this.auth=ba(e)}async verify(e="verify",n=!1){async function i(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{Mv(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Fv(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(r,o,a){const l=window.grecaptcha;Ig(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(W9)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{i(this.auth).then(a=>{if(!n&&Ig(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Bv(z9+a).then(()=>{s(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
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
 */class K9{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */class G9{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Eg(this),this.idTokenSubscription=new Eg(this),this.beforeStateQueue=new K9(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=fi(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await cr.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await jl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=I9()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?pn(e):null;return n&&pe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(fi(e))})}async initializeRecaptchaConfig(){const e=await Mv(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Fv(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new q9(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ur("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&fi(e)||this._popupRedirectResolver;pe(n,this,"argument-error"),this.redirectPersistenceManager=await cr.create(this,[fi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return pe(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,i,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ov(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&_9(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ba(t){return pn(t)}class Eg{constructor(e){this.auth=e,this.observer=null,this.addObserver=l6(n=>this.observer=n)}get next(){return pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function Y9(t,e){const n=pf(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if($l(r,e??{}))return s;ni(s,"already-initialized")}return n.initialize({options:e})}function Q9(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(fi);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function X9(t,e,n){const i=ba(t);pe(i._canInitEmulator,i,"emulator-config-failed"),pe(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),r=Uv(e),{host:o,port:a}=J9(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Z9()}function Uv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function J9(t){const e=Uv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Tg(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Tg(o)}}}function Tg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Z9(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Vv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return di("not implemented")}_getIdTokenResponse(e){return di("not implemented")}_linkToIdToken(e,n){return di("not implemented")}_getReauthenticationResolver(e){return di("not implemented")}}/**
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
 */async function ur(t,e){return S9(t,"POST","/v1/accounts:signInWithIdp",Iv(t,e))}/**
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
 */const eA="http://localhost";class ks extends Vv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ks(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ni("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=gf(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new ks(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ur(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,ur(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ur(e,n)}buildRequest(){const e={requestUri:eA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vr(n)}return e}}/**
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
 */class bf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ca extends bf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ui extends Ca{constructor(){super("facebook.com")}static credential(e){return ks._fromParams({providerId:Ui.PROVIDER_ID,signInMethod:Ui.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ui.credentialFromTaggedObject(e)}static credentialFromError(e){return Ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ui.credential(e.oauthAccessToken)}catch{return null}}}Ui.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ui.PROVIDER_ID="facebook.com";/**
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
 */class hi extends Ca{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ks._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return hi.credentialFromTaggedObject(e)}static credentialFromError(e){return hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return hi.credential(n,i)}catch{return null}}}hi.GOOGLE_SIGN_IN_METHOD="google.com";hi.PROVIDER_ID="google.com";/**
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
 */class Vi extends Ca{constructor(){super("github.com")}static credential(e){return ks._fromParams({providerId:Vi.PROVIDER_ID,signInMethod:Vi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vi.credentialFromTaggedObject(e)}static credentialFromError(e){return Vi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vi.credential(e.oauthAccessToken)}catch{return null}}}Vi.GITHUB_SIGN_IN_METHOD="github.com";Vi.PROVIDER_ID="github.com";/**
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
 */class $i extends Ca{constructor(){super("twitter.com")}static credential(e,n){return ks._fromParams({providerId:$i.PROVIDER_ID,signInMethod:$i.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return $i.credentialFromTaggedObject(e)}static credentialFromError(e){return $i.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return $i.credential(n,i)}catch{return null}}}$i.TWITTER_SIGN_IN_METHOD="twitter.com";$i.PROVIDER_ID="twitter.com";/**
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
 */class Cr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await Es._fromIdTokenResponse(e,i,s),o=Sg(i);return new Cr({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=Sg(i);return new Cr({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function Sg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Wl extends oi{constructor(e,n,i,s){var r;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Wl.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new Wl(e,n,i,s)}}function $v(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Wl._fromErrorAndOperation(t,r,e,i):r})}async function tA(t,e,n=!1){const i=await Xo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Cr._forOperation(t,"link",i)}/**
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
 */async function nA(t,e,n=!1){const{auth:i}=t,s="reauthenticate";try{const r=await Xo(t,$v(i,s,e,t),n);pe(r.idToken,i,"internal-error");const o=_f(r.idToken);pe(o,i,"internal-error");const{sub:a}=o;return pe(t.uid===a,i,"user-mismatch"),Cr._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&ni(i,"user-mismatch"),r}}/**
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
 */async function iA(t,e,n=!1){const i="signIn",s=await $v(t,i,e),r=await Cr._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}function Hv(t,e,n,i){return pn(t).onIdTokenChanged(e,n,i)}function sA(t,e,n){return pn(t).beforeAuthStateChanged(e,n)}function Ag(t){return pn(t).signOut()}const ql="__sak";/**
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
 */class zv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ql,"1"),this.storage.removeItem(ql),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function rA(){const t=Yt();return wf(t)||Uc(t)}const oA=1e3,aA=10;class jv extends zv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=rA()&&V9(),this.fallbackToPolling=Lv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);U9()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,aA):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},oA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}jv.type="LOCAL";const lA=jv;/**
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
 */class Wv extends zv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Wv.type="SESSION";const qv=Wv;/**
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
 */function cA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Vc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new Vc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await cA(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vc.receivers=[];/**
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
 */function Cf(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class uA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Cf("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(m.data.response);break;default:clearTimeout(d),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Jn(){return window}function hA(t){Jn().location.href=t}/**
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
 */function Kv(){return typeof Jn().WorkerGlobalScope<"u"&&typeof Jn().importScripts=="function"}async function dA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function pA(){return Kv()?self:null}/**
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
 */const Gv="firebaseLocalStorageDb",mA=1,Kl="firebaseLocalStorage",Yv="fbase_key";class Ia{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $c(t,e){return t.transaction([Kl],e?"readwrite":"readonly").objectStore(Kl)}function gA(){const t=indexedDB.deleteDatabase(Gv);return new Ia(t).toPromise()}function Hh(){const t=indexedDB.open(Gv,mA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Kl,{keyPath:Yv})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Kl)?e(i):(i.close(),await gA(),e(await Hh()))})})}async function kg(t,e,n){const i=$c(t,!0).put({[Yv]:e,value:n});return new Ia(i).toPromise()}async function yA(t,e){const n=$c(t,!1).get(e),i=await new Ia(n).toPromise();return i===void 0?null:i.value}function xg(t,e){const n=$c(t,!0).delete(e);return new Ia(n).toPromise()}const vA=800,_A=3;class Qv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>_A)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Kv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vc._getInstance(pA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await dA(),!this.activeServiceWorker)return;this.sender=new uA(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hh();return await kg(e,ql,"1"),await xg(e,ql),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>kg(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>yA(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>xg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=$c(s,!1).getAll();return new Ia(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Qv.type="LOCAL";const wA=Qv;new _a(3e4,6e4);/**
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
 */function Xv(t,e){return e?fi(e):(pe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class If extends Vv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ur(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ur(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ur(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function bA(t){return iA(t.auth,new If(t),t.bypassAuthState)}function CA(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),nA(n,new If(t),t.bypassAuthState)}async function IA(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),tA(n,new If(t),t.bypassAuthState)}/**
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
 */class Jv{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bA;case"linkViaPopup":case"linkViaRedirect":return IA;case"reauthViaPopup":case"reauthViaRedirect":return CA;default:ni(this.auth,"internal-error")}}resolve(e){Ci(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ci(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const EA=new _a(2e3,1e4);async function TA(t,e,n){const i=ba(t);w9(t,e,bf);const s=Xv(i,n);return new ys(i,"signInViaPopup",e,s).executeNotNull()}class ys extends Jv{constructor(e,n,i,s,r){super(e,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,ys.currentPopupAction&&ys.currentPopupAction.cancel(),ys.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return pe(e,this.auth,"internal-error"),e}async onExecution(){Ci(this.filter.length===1,"Popup operations only handle one event");const e=Cf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Xn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ys.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,EA.get())};e()}}ys.currentPopupAction=null;/**
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
 */const SA="pendingRedirect",Tl=new Map;class AA extends Jv{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Tl.get(this.auth._key());if(!e){try{const i=await kA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Tl.set(this.auth._key(),e)}return this.bypassAuthState||Tl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kA(t,e){const n=PA(e),i=RA(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function xA(t,e){Tl.set(t._key(),e)}function RA(t){return fi(t._redirectPersistence)}function PA(t){return El(SA,t.config.apiKey,t.name)}async function NA(t,e,n=!1){const i=ba(t),s=Xv(i,e),o=await new AA(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const DA=10*60*1e3;class LA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!OA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Zv(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(Xn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=DA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Rg(e))}saveEventToCache(e){this.cachedEventUids.add(Rg(e)),this.lastProcessedEventTime=Date.now()}}function Rg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Zv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function OA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Zv(t);default:return!1}}/**
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
 */async function MA(t,e={}){return wa(t,"GET","/v1/projects",e)}/**
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
 */const FA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,BA=/^https?/;async function UA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await MA(t);for(const n of e)try{if(VA(n))return}catch{}ni(t,"unauthorized-domain")}function VA(t){const e=$h(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!BA.test(n))return!1;if(FA.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const $A=new _a(3e4,6e4);function Pg(){const t=Jn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function HA(t){return new Promise((e,n)=>{var i,s,r;function o(){Pg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Pg(),n(Xn(t,"network-request-failed"))},timeout:$A.get()})}if(!((s=(i=Jn().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=Jn().gapi)===null||r===void 0)&&r.load)o();else{const a=H9("iframefcb");return Jn()[a]=()=>{gapi.load?o():n(Xn(t,"network-request-failed"))},Bv(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Sl=null,e})}let Sl=null;function zA(t){return Sl=Sl||HA(t),Sl}/**
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
 */const jA=new _a(5e3,15e3),WA="__/auth/iframe",qA="emulator/auth/iframe",KA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},GA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function YA(t){const e=t.config;pe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?vf(e,qA):`https://${t.config.authDomain}/${WA}`,i={apiKey:e.apiKey,appName:t.name,v:is},s=GA.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${Vr(i).slice(1)}`}async function QA(t){const e=await zA(t),n=Jn().gapi;return pe(n,t,"internal-error"),e.open({where:document.body,url:YA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:KA,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=Xn(t,"network-request-failed"),a=Jn().setTimeout(()=>{r(o)},jA.get());function l(){Jn().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const XA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},JA=500,ZA=600,ek="_blank",tk="http://localhost";class Ng{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nk(t,e,n,i=JA,s=ZA){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},XA),{width:i.toString(),height:s.toString(),top:r,left:o}),c=Yt().toLowerCase();n&&(a=xv(c)?ek:n),kv(c)&&(e=e||tk,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[y,b])=>`${m}${y}=${b},`,"");if(B9(c)&&a!=="_self")return ik(e||"",a),new Ng(null);const f=window.open(e||"",a,d);pe(f,t,"popup-blocked");try{f.focus()}catch{}return new Ng(f)}function ik(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const sk="__/auth/handler",rk="emulator/auth/handler",ok=encodeURIComponent("fac");async function Dg(t,e,n,i,s,r){pe(t.config.authDomain,t,"auth-domain-config-required"),pe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:is,eventId:s};if(e instanceof bf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Oh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries(r||{}))o[d]=f}if(e instanceof Ca){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),c=l?`#${ok}=${encodeURIComponent(l)}`:"";return`${ak(t)}?${Vr(a).slice(1)}${c}`}function ak({config:t}){return t.emulator?vf(t,rk):`https://${t.authDomain}/${sk}`}/**
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
 */const Qu="webStorageSupport";class lk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qv,this._completeRedirectFn=NA,this._overrideRedirectResult=xA}async _openPopup(e,n,i,s){var r;Ci((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Dg(e,n,i,$h(),s);return nk(e,o,Cf())}async _openRedirect(e,n,i,s){await this._originValidation(e);const r=await Dg(e,n,i,$h(),s);return hA(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(Ci(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await QA(e),i=new LA(e);return n.register("authEvent",s=>(pe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Qu,{type:Qu},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Qu];o!==void 0&&n(!!o),ni(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=UA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Lv()||wf()||Uc()}}const ck=lk;var Lg="@firebase/auth",Og="0.23.2";/**
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
 */class uk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function hk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function dk(t){ti(new Vn("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;pe(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ov(t)},c=new G9(i,s,r,l);return Q9(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),ti(new Vn("auth-internal",e=>{const n=ba(e.getProvider("auth").getImmediate());return(i=>new uk(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),yn(Lg,Og,hk(t)),yn(Lg,Og,"esm2017")}/**
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
 */const fk=5*60,pk=cv("authIdTokenMaxAge")||fk;let Mg=null;const mk=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>pk)return;const s=n==null?void 0:n.token;Mg!==s&&(Mg=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function e_(t=mf()){const e=pf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Y9(t,{popupRedirectResolver:ck,persistence:[wA,lA,qv]}),i=cv("authTokenSyncURL");if(i){const r=mk(i);sA(n,r,()=>r(n.currentUser)),Hv(n,o=>r(o))}const s=av("auth");return s&&X9(n,`http://${s}`),n}dk("Browser");/**
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
 */const gk=new Map,yk={activated:!1,tokenObservers:[]};function ii(t){return gk.get(t)||Object.assign({},yk)}const Fg={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class vk{constructor(e,n,i,s,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=s,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=s,s>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Go,await _k(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Go,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function _k(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const wk={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Gl=new Ur("appCheck","AppCheck",wk);function bk(t){if(!ii(t).activated)throw Gl.create("use-before-activation",{appName:t.name})}/**
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
 */const Ck="firebase-app-check-database",Ik=1,zh="firebase-app-check-store";let nl=null;function Ek(){return nl||(nl=new Promise((t,e)=>{try{const n=indexedDB.open(Ck,Ik);n.onsuccess=i=>{t(i.target.result)},n.onerror=i=>{var s;e(Gl.create("storage-open",{originalErrorMessage:(s=i.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=i=>{const s=i.target.result;switch(i.oldVersion){case 0:s.createObjectStore(zh,{keyPath:"compositeKey"})}}}catch(n){e(Gl.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),nl)}function Tk(t,e){return Sk(Ak(t),e)}async function Sk(t,e){const i=(await Ek()).transaction(zh,"readwrite"),r=i.objectStore(zh).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},i.onerror=l=>{var c;a(Gl.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function Ak(t){return`${t.options.appId}-${t.name}`}/**
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
 */const jh=new va("@firebase/app-check");function Bg(t,e){return dv()?Tk(t,e).catch(n=>{jh.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const kk={error:"UNKNOWN_ERROR"};function xk(t){return Fc.encodeString(JSON.stringify(t),!1)}async function Wh(t,e=!1){const n=t.app;bk(n);const i=ii(n);let s=i.token,r;if(s&&!_o(s)&&(i.token=void 0,s=void 0),!s){const l=await i.cachedTokenPromise;l&&(_o(l)?s=l:await Bg(n,void 0))}if(!e&&s&&_o(s))return{token:s.token};let o=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),s=await ii(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?jh.warn(l.message):jh.error(l),r=l}let a;return s?r?_o(s)?a={token:s.token,internalError:r}:a=Vg(r):(a={token:s.token},i.token=s,await Bg(n,s)):a=Vg(r),o&&Nk(n,a),a}function Rk(t,e,n,i){const{app:s}=t,r=ii(s),o={next:n,error:i,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&_o(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),Ug(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>Ug(t))}function t_(t,e){const n=ii(t),i=n.tokenObservers.filter(s=>s.next!==e);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function Ug(t){const{app:e}=t,n=ii(e);let i=n.tokenRefresher;i||(i=Pk(t),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function Pk(t){const{app:e}=t;return new vk(async()=>{const n=ii(e);let i;if(n.token?i=await Wh(t,!0):i=await Wh(t),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=ii(e);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,s),Math.max(0,i-Date.now())}else return 0},Fg.RETRIAL_MIN_WAIT,Fg.RETRIAL_MAX_WAIT)}function Nk(t,e){const n=ii(t).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function _o(t){return t.expireTimeMillis-Date.now()>0}function Vg(t){return{token:xk(kk),error:t}}/**
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
 */class Dk{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=ii(this.app);for(const n of e)t_(this.app,n.next);return Promise.resolve()}}function Lk(t,e){return new Dk(t,e)}function Ok(t){return{getToken:e=>Wh(t,e),addTokenListener:e=>Rk(t,"INTERNAL",e),removeTokenListener:e=>t_(t.app,e)}}const Mk="@firebase/app-check",Fk="0.7.0",Bk="app-check",$g="app-check-internal";function Uk(){ti(new Vn(Bk,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return Lk(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider($g).initialize()})),ti(new Vn($g,t=>{const e=t.getProvider("app-check").getImmediate();return Ok(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),yn(Mk,Fk)}Uk();var Vk="firebase",$k="9.22.0";/**
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
 */yn(Vk,$k,"app");const n_=Symbol("firebaseApp");function i_(t){return lf()&&Qn(n_,null)||mf(t)}const Hk=typeof window<"u",il=new WeakMap;function zk(t,e){if(!il.has(t)){const n=IT(!0);il.set(t,n);const{unmount:i}=e;e.unmount=()=>{i.call(e),n.stop(),il.delete(t)}}return il.get(t)}const jk=new WeakMap,sl=new WeakMap;function s_(t){const e=i_(t);if(!sl.has(e)){let n;const s=[new Promise(r=>{n=r}),r=>{sl.set(e,r),n(r.value)}];sl.set(e,s)}return sl.get(e)}function Wk(t){const e=s_(t);return Array.isArray(e)?e[0]:Promise.resolve(e.value)}function qk(t,e){const n=e_(e);Hv(n,i=>{const s=s_();t.value=i,Array.isArray(s)&&s[1](t)})}const Hg="@firebase/database",zg="0.14.4";/**
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
 */let r_="";function Kk(t){r_=t}/**
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
 */class Gk{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Nt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Yo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Yk{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return xi(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const o_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Gk(e)}}catch{}return new Yk},vs=o_("localStorage"),qh=o_("sessionStorage");/**
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
 */const hr=new va("@firebase/database"),Qk=function(){let t=1;return function(){return t++}}(),a_=function(t){const e=d6(t),n=new a6;n.update(e);const i=n.digest();return Fc.encodeByteArray(i)},Ea=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Ea.apply(null,i):typeof i=="object"?e+=Nt(i):e+=i,e+=" "}return e};let Ts=null,jg=!0;const Xk=function(t,e){j(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(hr.logLevel=Be.VERBOSE,Ts=hr.log.bind(hr),e&&qh.set("logging_enabled",!0)):typeof t=="function"?Ts=t:(Ts=null,qh.remove("logging_enabled"))},Ut=function(...t){if(jg===!0&&(jg=!1,Ts===null&&qh.get("logging_enabled")===!0&&Xk(!0)),Ts){const e=Ea.apply(null,t);Ts(e)}},Ta=function(t){return function(...e){Ut(t,...e)}},Kh=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ea(...t);hr.error(e)},xs=function(...t){const e=`FIREBASE FATAL ERROR: ${Ea(...t)}`;throw hr.error(e),new Error(e)},vn=function(...t){const e="FIREBASE WARNING: "+Ea(...t);hr.warn(e)},Jk=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&vn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},l_=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Zk=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ir="[MIN_NAME]",Rs="[MAX_NAME]",$r=function(t,e){if(t===e)return 0;if(t===Ir||e===Rs)return-1;if(e===Ir||t===Rs)return 1;{const n=Wg(t),i=Wg(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},e3=function(t,e){return t===e?0:t<e?-1:1},ao=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Nt(e))},Ef=function(t){if(typeof t!="object"||t===null)return Nt(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=Nt(e[i]),n+=":",n+=Ef(t[e[i]]);return n+="}",n},c_=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function kn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const u_=function(t){j(!l_(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,l;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const d=c.join("");let f="";for(l=0;l<64;l+=8){let m=parseInt(d.substr(l,8),2).toString(16);m.length===1&&(m="0"+m),f=f+m}return f.toLowerCase()},t3=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},n3=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},i3=new RegExp("^-?(0*)\\d{1,10}$"),s3=-2147483648,r3=2147483647,Wg=function(t){if(i3.test(t)){const e=Number(t);if(e>=s3&&e<=r3)return e}return null},Sa=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw vn("Exception was thrown by user callback.",n),e},Math.floor(0))}},o3=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ro=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class a3{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){vn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class l3{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ut("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',vn(e)}}class Gh{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Gh.OWNER="owner";/**
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
 */const Tf="5",h_="v",d_="s",f_="r",p_="f",m_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,g_="ls",y_="p",Yh="ac",v_="websocket",__="long_polling";/**
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
 */class c3{constructor(e,n,i,s,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=vs.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&vs.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function u3(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function w_(t,e,n){j(typeof e=="string","typeof type must == string"),j(typeof n=="object","typeof params must == object");let i;if(e===v_)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===__)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);u3(t)&&(n.ns=t.namespace);const s=[];return kn(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
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
 */class h3{constructor(){this.counters_={}}incrementCounter(e,n=1){xi(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return WS(this.counters_)}}/**
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
 */const Xu={},Ju={};function Sf(t){const e=t.toString();return Xu[e]||(Xu[e]=new h3),Xu[e]}function d3(t,e){const n=t.toString();return Ju[n]||(Ju[n]=e()),Ju[n]}/**
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
 */class f3{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Sa(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const qg="start",p3="close",m3="pLPCommand",g3="pRTLPCB",b_="id",C_="pw",I_="ser",y3="cb",v3="seg",_3="ts",w3="d",b3="dframe",E_=1870,T_=30,C3=E_-T_,I3=25e3,E3=3e4;class tr{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ta(e),this.stats_=Sf(n),this.urlFn=l=>(this.appCheckToken&&(l[Yh]=this.appCheckToken),w_(n,__,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new f3(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(E3)),Zk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Af((...r)=>{const[o,a,l,c,d]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===qg)this.id=a,this.password=l;else if(o===p3)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[qg]="t",i[I_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[y3]=this.scriptTagHolder.uniqueCallbackIdentifier),i[h_]=Tf,this.transportSessionId&&(i[d_]=this.transportSessionId),this.lastSessionId&&(i[g_]=this.lastSessionId),this.applicationId&&(i[y_]=this.applicationId),this.appCheckToken&&(i[Yh]=this.appCheckToken),typeof location<"u"&&location.hostname&&m_.test(location.hostname)&&(i[f_]=p_);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){tr.forceAllow_=!0}static forceDisallow(){tr.forceDisallow_=!0}static isAvailable(){return tr.forceAllow_?!0:!tr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!t3()&&!n3()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Nt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=rv(n),s=c_(i,C3);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[b3]="t",i[b_]=e,i[C_]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Nt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Af{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Qk(),window[m3+this.uniqueCallbackIdentifier]=e,window[g3+this.uniqueCallbackIdentifier]=n,this.myIFrame=Af.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ut("frame writing exception"),a.stack&&Ut(a.stack),Ut(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ut("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[b_]=this.myID,e[C_]=this.myPW,e[I_]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+T_+i.length<=E_;){const o=this.pendingSegs.shift();i=i+"&"+v3+s+"="+o.seg+"&"+_3+s+"="+o.ts+"&"+w3+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(I3)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Ut("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const T3=16384,S3=45e3;let Yl=null;typeof MozWebSocket<"u"?Yl=MozWebSocket:typeof WebSocket<"u"&&(Yl=WebSocket);class Dn{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ta(this.connId),this.stats_=Sf(n),this.connURL=Dn.connectionURL_(n,o,a,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[h_]=Tf,typeof location<"u"&&location.hostname&&m_.test(location.hostname)&&(o[f_]=p_),n&&(o[d_]=n),i&&(o[g_]=i),s&&(o[Yh]=s),r&&(o[y_]=r),w_(e,v_,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,vs.set("previous_websocket_failure",!0);try{let i;hv(),this.mySock=new Yl(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Dn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Yl!==null&&!Dn.forceDisallow_}static previouslyFailed(){return vs.isInMemoryStorage||vs.get("previous_websocket_failure")===!0}markConnectionHealthy(){vs.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Yo(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(j(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=Nt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=c_(n,T3);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(S3))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Dn.responsesRequiredToBeHealthy=2;Dn.healthyTimeout=3e4;/**
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
 */class Zo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[tr,Dn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Dn&&Dn.isAvailable();let i=n&&!Dn.previouslyFailed();if(e.webSocketOnly&&(n||vn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Dn];else{const s=this.transports_=[];for(const r of Zo.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Zo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Zo.globalTransportInitialized_=!1;/**
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
 */const A3=6e4,k3=5e3,x3=10*1024,R3=100*1024,Zu="t",Kg="d",P3="s",Gg="r",N3="e",Yg="o",Qg="a",Xg="n",Jg="p",D3="h";class L3{constructor(e,n,i,s,r,o,a,l,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ta("c:"+this.id+":"),this.transportManager_=new Zo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Ro(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>R3?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>x3?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Zu in e){const n=e[Zu];n===Qg?this.upgradeIfSecondaryHealthy_():n===Gg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Yg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ao("t",e),i=ao("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Jg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Qg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Xg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ao("t",e),i=ao("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ao(Zu,e);if(Kg in e){const i=e[Kg];if(n===D3){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Xg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===P3?this.onConnectionShutdown_(i):n===Gg?this.onReset_(i):n===N3?Kh("Server Error: "+i):n===Yg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Kh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Tf!==i&&vn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Ro(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(A3))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ro(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(k3))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Jg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(vs.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class S_{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class A_{constructor(e){this.allowedEvents_=e,this.listeners_={},j(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){j(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Ql extends A_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!df()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ql}getInitialEvent(e){return j(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Zg=32,ey=768;class st{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function qe(){return new st("")}function Oe(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Zi(t){return t.pieces_.length-t.pieceNum_}function et(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new st(t.pieces_,e)}function k_(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function O3(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function x_(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function R_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new st(e,0)}function Tt(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof st)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new st(n,0)}function Pe(t){return t.pieceNum_>=t.pieces_.length}function En(t,e){const n=Oe(t),i=Oe(e);if(n===null)return e;if(n===i)return En(et(t),et(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function P_(t,e){if(Zi(t)!==Zi(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function On(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Zi(t)>Zi(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class M3{constructor(e,n){this.errorPrefix_=n,this.parts_=x_(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Bc(this.parts_[i]);N_(this)}}function F3(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Bc(e),N_(t)}function B3(t){const e=t.parts_.pop();t.byteLength_-=Bc(e),t.parts_.length>0&&(t.byteLength_-=1)}function N_(t){if(t.byteLength_>ey)throw new Error(t.errorPrefix_+"has a key path longer than "+ey+" bytes ("+t.byteLength_+").");if(t.parts_.length>Zg)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Zg+") or object contains a cycle "+ds(t))}function ds(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class kf extends A_{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new kf}getInitialEvent(e){return j(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const lo=1e3,U3=60*5*1e3,ty=30*1e3,V3=1.3,$3=3e4,H3="server_kill",ny=3;class yi extends S_{constructor(e,n,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=yi.nextPersistentConnectionId_++,this.log_=Ta("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=lo,this.maxReconnectDelay_=U3,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!hv())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");kf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ql.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(Nt(r)),j(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new Go,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),j(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),j(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;yi.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&xi(e,"w")){const i=br(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();vn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||o6(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ty)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=r6(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),j(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Nt(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Kh("Unrecognized action received from server: "+Nt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){j(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=lo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=lo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>$3&&(this.reconnectDelay_=lo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*V3)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+yi.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(f){j(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,m]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Ut("getToken() completed but was canceled"):(Ut("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=m&&m.token,a=new L3(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,y=>{vn(y+" ("+this.repoInfo_.toString()+")"),this.interrupt(H3)},r))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&vn(f),l())}}}interrupt(e){Ut("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ut("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Oh(this.interruptReasons_)&&(this.reconnectDelay_=lo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>Ef(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new st(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){Ut("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ny&&(this.reconnectDelay_=ty,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ut("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ny&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+r_.replace(/\./g,"-")]=1,df()?e["framework.cordova"]=1:uv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ql.getInstance().currentlyOnline();return Oh(this.interruptReasons_)&&e}}yi.nextPersistentConnectionId_=0;yi.nextConnectionId_=0;/**
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
 */class Me{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Me(e,n)}}/**
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
 */class Hc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new Me(Ir,e),s=new Me(Ir,n);return this.compare(i,s)!==0}minPost(){return Me.MIN}}/**
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
 */let rl;class D_ extends Hc{static get __EMPTY_NODE(){return rl}static set __EMPTY_NODE(e){rl=e}compare(e,n){return $r(e.name,n.name)}isDefinedOn(e){throw Br("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Me.MIN}maxPost(){return new Me(Rs,rl)}makePost(e,n){return j(typeof e=="string","KeyIndex indexValue must always be a string."),new Me(e,rl)}toString(){return".key"}}const dr=new D_;/**
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
 */class ol{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class It{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??It.RED,this.left=s??hn.EMPTY_NODE,this.right=r??hn.EMPTY_NODE}copy(e,n,i,s,r){return new It(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return hn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return hn.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,It.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,It.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}It.RED=!0;It.BLACK=!1;class z3{copy(e,n,i,s,r){return this}insert(e,n,i){return new It(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class hn{constructor(e,n=hn.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new hn(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,It.BLACK,null,null))}remove(e){return new hn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,It.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ol(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ol(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ol(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ol(this.root_,null,this.comparator_,!0,e)}}hn.EMPTY_NODE=new z3;/**
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
 */function j3(t,e){return $r(t.name,e.name)}function xf(t,e){return $r(t,e)}/**
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
 */let Qh;function W3(t){Qh=t}const L_=function(t){return typeof t=="number"?"number:"+u_(t):"string:"+t},O_=function(t){if(t.isLeafNode()){const e=t.val();j(typeof e=="string"||typeof e=="number"||typeof e=="object"&&xi(e,".sv"),"Priority must be a string or number.")}else j(t===Qh||t.isEmpty(),"priority of unexpected type.");j(t===Qh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let iy;class bt{constructor(e,n=bt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,j(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),O_(this.priorityNode_)}static set __childrenNodeConstructor(e){iy=e}static get __childrenNodeConstructor(){return iy}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new bt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:bt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Pe(e)?this:Oe(e)===".priority"?this.priorityNode_:bt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:bt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=Oe(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(j(i!==".priority"||Zi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,bt.__childrenNodeConstructor.EMPTY_NODE.updateChild(et(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+L_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=u_(this.value_):e+=this.value_,this.lazyHash_=a_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===bt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof bt.__childrenNodeConstructor?-1:(j(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=bt.VALUE_TYPE_ORDER.indexOf(n),r=bt.VALUE_TYPE_ORDER.indexOf(i);return j(s>=0,"Unknown leaf type: "+n),j(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}bt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let M_,F_;function q3(t){M_=t}function K3(t){F_=t}class G3 extends Hc{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?$r(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Me.MIN}maxPost(){return new Me(Rs,new bt("[PRIORITY-POST]",F_))}makePost(e,n){const i=M_(e);return new Me(n,new bt("[PRIORITY-POST]",i))}toString(){return".priority"}}const Wt=new G3;/**
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
 */const Y3=Math.log(2);class Q3{constructor(e){const n=r=>parseInt(Math.log(r)/Y3,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Xl=function(t,e,n,i){t.sort(e);const s=function(l,c){const d=c-l;let f,m;if(d===0)return null;if(d===1)return f=t[l],m=n?n(f):f,new It(m,f.node,It.BLACK,null,null);{const y=parseInt(d/2,10)+l,b=s(l,y),C=s(y+1,c);return f=t[y],m=n?n(f):f,new It(m,f.node,It.BLACK,b,C)}},r=function(l){let c=null,d=null,f=t.length;const m=function(b,C){const S=f-b,B=f;f-=b;const U=s(S+1,B),W=t[S],M=n?n(W):W;y(new It(M,W.node,C,null,U))},y=function(b){c?(c.left=b,c=b):(d=b,c=b)};for(let b=0;b<l.count;++b){const C=l.nextBitIsOne(),S=Math.pow(2,l.count-(b+1));C?m(S,It.BLACK):(m(S,It.BLACK),m(S,It.RED))}return d},o=new Q3(t.length),a=r(o);return new hn(i||e,a)};/**
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
 */let eh;const Ys={};class pi{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return j(Ys&&Wt,"ChildrenNode.ts has not been loaded"),eh=eh||new pi({".priority":Ys},{".priority":Wt}),eh}get(e){const n=br(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof hn?n:null}hasIndex(e){return xi(this.indexSet_,e.toString())}addIndex(e,n){j(e!==dr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(Me.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Xl(i,e.getCompare()):a=Ys;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new pi(d,c)}addToIndexes(e,n){const i=Vl(this.indexes_,(s,r)=>{const o=br(this.indexSet_,r);if(j(o,"Missing index implementation for "+r),s===Ys)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Me.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Xl(a,o.getCompare())}else return Ys;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new Me(e.name,a))),l.insert(e,e.node)}});return new pi(i,this.indexSet_)}removeFromIndexes(e,n){const i=Vl(this.indexes_,s=>{if(s===Ys)return s;{const r=n.get(e.name);return r?s.remove(new Me(e.name,r)):s}});return new pi(i,this.indexSet_)}}/**
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
 */let co;class ze{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&O_(this.priorityNode_),this.children_.isEmpty()&&j(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return co||(co=new ze(new hn(xf),null,pi.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||co}updatePriority(e){return this.children_.isEmpty()?this:new ze(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?co:n}}getChild(e){const n=Oe(e);return n===null?this:this.getImmediateChild(n).getChild(et(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(j(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new Me(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?co:this.priorityNode_;return new ze(s,o,r)}}updateChild(e,n){const i=Oe(e);if(i===null)return n;{j(Oe(e)!==".priority"||Zi(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(et(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(Wt,(o,a)=>{n[o]=a.val(e),i++,r&&ze.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+L_(this.getPriority().val())+":"),this.forEachChild(Wt,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":a_(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new Me(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Me(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Me(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Me.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Me.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Aa?-1:0}withIndex(e){if(e===dr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ze(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===dr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(Wt),s=n.getIterator(Wt);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===dr?null:this.indexMap_.get(e.toString())}}ze.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class X3 extends ze{constructor(){super(new hn(xf),ze.EMPTY_NODE,pi.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ze.EMPTY_NODE}isEmpty(){return!1}}const Aa=new X3;Object.defineProperties(Me,{MIN:{value:new Me(Ir,ze.EMPTY_NODE)},MAX:{value:new Me(Rs,Aa)}});D_.__EMPTY_NODE=ze.EMPTY_NODE;bt.__childrenNodeConstructor=ze;W3(Aa);K3(Aa);/**
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
 */const J3=!0;function Vt(t,e=null){if(t===null)return ze.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),j(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new bt(n,Vt(e))}if(!(t instanceof Array)&&J3){const n=[];let i=!1;if(kn(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Vt(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new Me(o,l)))}}),n.length===0)return ze.EMPTY_NODE;const r=Xl(n,j3,o=>o.name,xf);if(i){const o=Xl(n,Wt.getCompare());return new ze(r,Vt(e),new pi({".priority":o},{".priority":Wt}))}else return new ze(r,Vt(e),pi.Default)}else{let n=ze.EMPTY_NODE;return kn(t,(i,s)=>{if(xi(t,i)&&i.substring(0,1)!=="."){const r=Vt(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(Vt(e))}}q3(Vt);/**
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
 */class Z3 extends Hc{constructor(e){super(),this.indexPath_=e,j(!Pe(e)&&Oe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?$r(e.name,n.name):r}makePost(e,n){const i=Vt(e),s=ze.EMPTY_NODE.updateChild(this.indexPath_,i);return new Me(n,s)}maxPost(){const e=ze.EMPTY_NODE.updateChild(this.indexPath_,Aa);return new Me(Rs,e)}toString(){return x_(this.indexPath_,0).join("/")}}/**
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
 */class e7 extends Hc{compare(e,n){const i=e.node.compareTo(n.node);return i===0?$r(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Me.MIN}maxPost(){return Me.MAX}makePost(e,n){const i=Vt(e);return new Me(n,i)}toString(){return".value"}}const t7=new e7;/**
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
 */function n7(t){return{type:"value",snapshotNode:t}}function i7(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function s7(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function sy(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function r7(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Rf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Wt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return j(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return j(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ir}hasEnd(){return this.endSet_}getIndexEndValue(){return j(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return j(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Rs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return j(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Wt}copy(){const e=new Rf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ry(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Wt?n="$priority":t.index_===t7?n="$value":t.index_===dr?n="$key":(j(t.index_ instanceof Z3,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Nt(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=Nt(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+Nt(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=Nt(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+Nt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function oy(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Wt&&(e.i=t.index_.toString()),e}/**
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
 */class Jl extends S_{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Ta("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(j(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Jl.getListenId_(e,i),a={};this.listens_[o]=a;const l=ry(e._queryParams);this.restRequest_(r+".json",l,(c,d)=>{let f=d;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(r,f,!1,i),br(this.listens_,o)===a){let m;c?c===401?m="permission_denied":m="rest_error:"+c:m="ok",s(m,null)}})}unlisten(e,n){const i=Jl.getListenId_(e,n);delete this.listens_[i]}get(e){const n=ry(e._queryParams),i=e._path.toString(),s=new Go;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Vr(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Yo(a.responseText)}catch{vn("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&vn("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class o7{constructor(){this.rootNode_=ze.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Zl(){return{value:null,children:new Map}}function B_(t,e,n){if(Pe(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=Oe(e);t.children.has(i)||t.children.set(i,Zl());const s=t.children.get(i);e=et(e),B_(s,e,n)}}function Xh(t,e,n){t.value!==null?n(e,t.value):a7(t,(i,s)=>{const r=new st(e.toString()+"/"+i);Xh(s,r,n)})}function a7(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
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
 */class l7{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&kn(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
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
 */const ay=10*1e3,c7=30*1e3,u7=5*60*1e3;class h7{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new l7(e);const i=ay+(c7-ay)*Math.random();Ro(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;kn(e,(s,r)=>{r>0&&xi(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),Ro(this.reportStats_.bind(this),Math.floor(Math.random()*2*u7))}}/**
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
 */var Gn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Gn||(Gn={}));function U_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function V_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function $_(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class ec{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=Gn.ACK_USER_WRITE,this.source=U_()}operationForChild(e){if(Pe(this.path)){if(this.affectedTree.value!=null)return j(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new st(e));return new ec(qe(),n,this.revert)}}else return j(Oe(this.path)===e,"operationForChild called for unrelated child."),new ec(et(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ps{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=Gn.OVERWRITE}operationForChild(e){return Pe(this.path)?new Ps(this.source,qe(),this.snap.getImmediateChild(e)):new Ps(this.source,et(this.path),this.snap)}}/**
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
 */class ea{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=Gn.MERGE}operationForChild(e){if(Pe(this.path)){const n=this.children.subtree(new st(e));return n.isEmpty()?null:n.value?new Ps(this.source,qe(),n.value):new ea(this.source,qe(),n)}else return j(Oe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ea(this.source,et(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Pf{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Pe(e))return this.isFullyInitialized()&&!this.filtered_;const n=Oe(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function d7(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(r7(o.childName,o.snapshotNode))}),uo(t,s,"child_removed",e,i,n),uo(t,s,"child_added",e,i,n),uo(t,s,"child_moved",r,i,n),uo(t,s,"child_changed",e,i,n),uo(t,s,"value",e,i,n),s}function uo(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,l)=>p7(t,a,l)),o.forEach(a=>{const l=f7(t,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function f7(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function p7(t,e,n){if(e.childName==null||n.childName==null)throw Br("Should only compare child_ events.");const i=new Me(e.childName,e.snapshotNode),s=new Me(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
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
 */function H_(t,e){return{eventCache:t,serverCache:e}}function Po(t,e,n,i){return H_(new Pf(e,n,i),t.serverCache)}function z_(t,e,n,i){return H_(t.eventCache,new Pf(e,n,i))}function Jh(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ns(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let th;const m7=()=>(th||(th=new hn(e3)),th);class Je{constructor(e,n=m7()){this.value=e,this.children=n}static fromObject(e){let n=new Je(null);return kn(e,(i,s)=>{n=n.set(new st(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:qe(),value:this.value};if(Pe(e))return null;{const i=Oe(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(et(e),n);return r!=null?{path:Tt(new st(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Pe(e))return this;{const n=Oe(e),i=this.children.get(n);return i!==null?i.subtree(et(e)):new Je(null)}}set(e,n){if(Pe(e))return new Je(n,this.children);{const i=Oe(e),r=(this.children.get(i)||new Je(null)).set(et(e),n),o=this.children.insert(i,r);return new Je(this.value,o)}}remove(e){if(Pe(e))return this.children.isEmpty()?new Je(null):new Je(null,this.children);{const n=Oe(e),i=this.children.get(n);if(i){const s=i.remove(et(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new Je(null):new Je(this.value,r)}else return this}}get(e){if(Pe(e))return this.value;{const n=Oe(e),i=this.children.get(n);return i?i.get(et(e)):null}}setTree(e,n){if(Pe(e))return n;{const i=Oe(e),r=(this.children.get(i)||new Je(null)).setTree(et(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new Je(this.value,o)}}fold(e){return this.fold_(qe(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(Tt(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,qe(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(Pe(e))return null;{const r=Oe(e),o=this.children.get(r);return o?o.findOnPath_(et(e),Tt(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,qe(),n)}foreachOnPath_(e,n,i){if(Pe(e))return this;{this.value&&i(n,this.value);const s=Oe(e),r=this.children.get(s);return r?r.foreachOnPath_(et(e),Tt(n,s),i):new Je(null)}}foreach(e){this.foreach_(qe(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(Tt(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
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
 */class Un{constructor(e){this.writeTree_=e}static empty(){return new Un(new Je(null))}}function No(t,e,n){if(Pe(e))return new Un(new Je(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=En(s,e);return r=r.updateChild(o,n),new Un(t.writeTree_.set(s,r))}else{const s=new Je(n),r=t.writeTree_.setTree(e,s);return new Un(r)}}}function ly(t,e,n){let i=t;return kn(n,(s,r)=>{i=No(i,Tt(e,s),r)}),i}function cy(t,e){if(Pe(e))return Un.empty();{const n=t.writeTree_.setTree(e,new Je(null));return new Un(n)}}function Zh(t,e){return Bs(t,e)!=null}function Bs(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(En(n.path,e)):null}function uy(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Wt,(i,s)=>{e.push(new Me(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new Me(i,s.value))}),e}function Ki(t,e){if(Pe(e))return t;{const n=Bs(t,e);return n!=null?new Un(new Je(n)):new Un(t.writeTree_.subtree(e))}}function ed(t){return t.writeTree_.isEmpty()}function Er(t,e){return j_(qe(),t.writeTree_,e)}function j_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(j(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=j_(Tt(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(Tt(t,".priority"),i)),n}}/**
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
 */function W_(t,e){return Q_(e,t)}function g7(t,e,n,i,s){j(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=No(t.visibleWrites,e,n)),t.lastWriteId=i}function y7(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function v7(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);j(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&_7(a,i.path)?s=!1:On(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return w7(t),!0;if(i.snap)t.visibleWrites=cy(t.visibleWrites,i.path);else{const a=i.children;kn(a,l=>{t.visibleWrites=cy(t.visibleWrites,Tt(i.path,l))})}return!0}else return!1}function _7(t,e){if(t.snap)return On(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&On(Tt(t.path,n),e))return!0;return!1}function w7(t){t.visibleWrites=q_(t.allWrites,b7,qe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function b7(t){return t.visible}function q_(t,e,n){let i=Un.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)On(n,o)?(a=En(n,o),i=No(i,a,r.snap)):On(o,n)&&(a=En(o,n),i=No(i,qe(),r.snap.getChild(a)));else if(r.children){if(On(n,o))a=En(n,o),i=ly(i,a,r.children);else if(On(o,n))if(a=En(o,n),Pe(a))i=ly(i,qe(),r.children);else{const l=br(r.children,Oe(a));if(l){const c=l.getChild(et(a));i=No(i,qe(),c)}}}else throw Br("WriteRecord should have .snap or .children")}}return i}function K_(t,e,n,i,s){if(!i&&!s){const r=Bs(t.visibleWrites,e);if(r!=null)return r;{const o=Ki(t.visibleWrites,e);if(ed(o))return n;if(n==null&&!Zh(o,qe()))return null;{const a=n||ze.EMPTY_NODE;return Er(o,a)}}}else{const r=Ki(t.visibleWrites,e);if(!s&&ed(r))return n;if(!s&&n==null&&!Zh(r,qe()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(On(c.path,e)||On(e,c.path))},a=q_(t.allWrites,o,e),l=n||ze.EMPTY_NODE;return Er(a,l)}}}function C7(t,e,n){let i=ze.EMPTY_NODE;const s=Bs(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Wt,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=Ki(t.visibleWrites,e);return n.forEachChild(Wt,(o,a)=>{const l=Er(Ki(r,new st(o)),a);i=i.updateImmediateChild(o,l)}),uy(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Ki(t.visibleWrites,e);return uy(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function I7(t,e,n,i,s){j(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Tt(e,n);if(Zh(t.visibleWrites,r))return null;{const o=Ki(t.visibleWrites,r);return ed(o)?s.getChild(n):Er(o,s.getChild(n))}}function E7(t,e,n,i){const s=Tt(e,n),r=Bs(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=Ki(t.visibleWrites,s);return Er(o,i.getNode().getImmediateChild(n))}else return null}function T7(t,e){return Bs(t.visibleWrites,e)}function S7(t,e,n,i,s,r,o){let a;const l=Ki(t.visibleWrites,e),c=Bs(l,qe());if(c!=null)a=c;else if(n!=null)a=Er(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],f=o.getCompare(),m=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let y=m.getNext();for(;y&&d.length<s;)f(y,i)!==0&&d.push(y),y=m.getNext();return d}else return[]}function A7(){return{visibleWrites:Un.empty(),allWrites:[],lastWriteId:-1}}function td(t,e,n,i){return K_(t.writeTree,t.treePath,e,n,i)}function G_(t,e){return C7(t.writeTree,t.treePath,e)}function hy(t,e,n,i){return I7(t.writeTree,t.treePath,e,n,i)}function tc(t,e){return T7(t.writeTree,Tt(t.treePath,e))}function k7(t,e,n,i,s,r){return S7(t.writeTree,t.treePath,e,n,i,s,r)}function Nf(t,e,n){return E7(t.writeTree,t.treePath,e,n)}function Y_(t,e){return Q_(Tt(t.treePath,e),t.writeTree)}function Q_(t,e){return{treePath:t,writeTree:e}}/**
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
 */class x7{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;j(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),j(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,sy(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,s7(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,i7(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,sy(i,e.snapshotNode,s.oldSnap));else throw Br("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class R7{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const X_=new R7;class Df{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Pf(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Nf(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ns(this.viewCache_),r=k7(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}function P7(t,e){j(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),j(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function N7(t,e,n,i,s){const r=new x7;let o,a;if(n.type===Gn.OVERWRITE){const c=n;c.source.fromUser?o=nd(t,e,c.path,c.snap,i,s,r):(j(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!Pe(c.path),o=nc(t,e,c.path,c.snap,i,s,a,r))}else if(n.type===Gn.MERGE){const c=n;c.source.fromUser?o=L7(t,e,c.path,c.children,i,s,r):(j(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=id(t,e,c.path,c.children,i,s,a,r))}else if(n.type===Gn.ACK_USER_WRITE){const c=n;c.revert?o=F7(t,e,c.path,i,s,r):o=O7(t,e,c.path,c.affectedTree,i,s,r)}else if(n.type===Gn.LISTEN_COMPLETE)o=M7(t,e,n.path,i,r);else throw Br("Unknown operation type: "+n.type);const l=r.getChanges();return D7(e,o,l),{viewCache:o,changes:l}}function D7(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Jh(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(n7(Jh(e)))}}function J_(t,e,n,i,s,r){const o=e.eventCache;if(tc(i,n)!=null)return e;{let a,l;if(Pe(n))if(j(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ns(e),d=c instanceof ze?c:ze.EMPTY_NODE,f=G_(i,d);a=t.filter.updateFullNode(e.eventCache.getNode(),f,r)}else{const c=td(i,Ns(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=Oe(n);if(c===".priority"){j(Zi(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const f=hy(i,n,d,l);f!=null?a=t.filter.updatePriority(d,f):a=o.getNode()}else{const d=et(n);let f;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const m=hy(i,n,o.getNode(),l);m!=null?f=o.getNode().getImmediateChild(c).updateChild(d,m):f=o.getNode().getImmediateChild(c)}else f=Nf(i,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,d,s,r):a=o.getNode()}}return Po(e,a,o.isFullyInitialized()||Pe(n),t.filter.filtersNodes())}}function nc(t,e,n,i,s,r,o,a){const l=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(Pe(n))c=d.updateFullNode(l.getNode(),i,null);else if(d.filtersNodes()&&!l.isFiltered()){const y=l.getNode().updateChild(n,i);c=d.updateFullNode(l.getNode(),y,null)}else{const y=Oe(n);if(!l.isCompleteForPath(n)&&Zi(n)>1)return e;const b=et(n),S=l.getNode().getImmediateChild(y).updateChild(b,i);y===".priority"?c=d.updatePriority(l.getNode(),S):c=d.updateChild(l.getNode(),y,S,b,X_,null)}const f=z_(e,c,l.isFullyInitialized()||Pe(n),d.filtersNodes()),m=new Df(s,f,r);return J_(t,f,n,s,m,a)}function nd(t,e,n,i,s,r,o){const a=e.eventCache;let l,c;const d=new Df(s,e,r);if(Pe(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Po(e,c,!0,t.filter.filtersNodes());else{const f=Oe(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=Po(e,c,a.isFullyInitialized(),a.isFiltered());else{const m=et(n),y=a.getNode().getImmediateChild(f);let b;if(Pe(m))b=i;else{const C=d.getCompleteChild(f);C!=null?k_(m)===".priority"&&C.getChild(R_(m)).isEmpty()?b=C:b=C.updateChild(m,i):b=ze.EMPTY_NODE}if(y.equals(b))l=e;else{const C=t.filter.updateChild(a.getNode(),f,b,m,d,o);l=Po(e,C,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function dy(t,e){return t.eventCache.isCompleteForChild(e)}function L7(t,e,n,i,s,r,o){let a=e;return i.foreach((l,c)=>{const d=Tt(n,l);dy(e,Oe(d))&&(a=nd(t,a,d,c,s,r,o))}),i.foreach((l,c)=>{const d=Tt(n,l);dy(e,Oe(d))||(a=nd(t,a,d,c,s,r,o))}),a}function fy(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function id(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;Pe(n)?c=i:c=new Je(null).setTree(n,i);const d=e.serverCache.getNode();return c.children.inorderTraversal((f,m)=>{if(d.hasChild(f)){const y=e.serverCache.getNode().getImmediateChild(f),b=fy(t,y,m);l=nc(t,l,new st(f),b,s,r,o,a)}}),c.children.inorderTraversal((f,m)=>{const y=!e.serverCache.isCompleteForChild(f)&&m.value===null;if(!d.hasChild(f)&&!y){const b=e.serverCache.getNode().getImmediateChild(f),C=fy(t,b,m);l=nc(t,l,new st(f),C,s,r,o,a)}}),l}function O7(t,e,n,i,s,r,o){if(tc(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(Pe(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return nc(t,e,n,l.getNode().getChild(n),s,r,a,o);if(Pe(n)){let c=new Je(null);return l.getNode().forEachChild(dr,(d,f)=>{c=c.set(new st(d),f)}),id(t,e,n,c,s,r,a,o)}else return e}else{let c=new Je(null);return i.foreach((d,f)=>{const m=Tt(n,d);l.isCompleteForPath(m)&&(c=c.set(d,l.getNode().getChild(m)))}),id(t,e,n,c,s,r,a,o)}}function M7(t,e,n,i,s){const r=e.serverCache,o=z_(e,r.getNode(),r.isFullyInitialized()||Pe(n),r.isFiltered());return J_(t,o,n,i,X_,s)}function F7(t,e,n,i,s,r){let o;if(tc(i,n)!=null)return e;{const a=new Df(i,e,s),l=e.eventCache.getNode();let c;if(Pe(n)||Oe(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=td(i,Ns(e));else{const f=e.serverCache.getNode();j(f instanceof ze,"serverChildren would be complete if leaf node"),d=G_(i,f)}d=d,c=t.filter.updateFullNode(l,d,r)}else{const d=Oe(n);let f=Nf(i,d,e.serverCache);f==null&&e.serverCache.isCompleteForChild(d)&&(f=l.getImmediateChild(d)),f!=null?c=t.filter.updateChild(l,d,f,et(n),a,r):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(l,d,ze.EMPTY_NODE,et(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=td(i,Ns(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||tc(i,qe())!=null,Po(e,c,o,t.filter.filtersNodes())}}function B7(t,e){const n=Ns(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Pe(e)&&!n.getImmediateChild(Oe(e)).isEmpty())?n.getChild(e):null}function py(t,e,n,i){e.type===Gn.MERGE&&e.source.queryId!==null&&(j(Ns(t.viewCache_),"We should always have a full cache before handling merges"),j(Jh(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=N7(t.processor_,s,e,n,i);return P7(t.processor_,r.viewCache),j(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,U7(t,r.changes,r.viewCache.eventCache.getNode(),null)}function U7(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return d7(t.eventGenerator_,e,n,s)}/**
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
 */let my;function V7(t){j(!my,"__referenceConstructor has already been defined"),my=t}function Lf(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return j(r!=null,"SyncTree gave us an op for an invalid query."),py(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(py(o,e,n,i));return r}}function Of(t,e){let n=null;for(const i of t.views.values())n=n||B7(i,e);return n}/**
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
 */let gy;function $7(t){j(!gy,"__referenceConstructor has already been defined"),gy=t}class yy{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Je(null),this.pendingWriteTree_=A7(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function H7(t,e,n,i,s){return g7(t.pendingWriteTree_,e,n,i,s),s?jc(t,new Ps(U_(),e,n)):[]}function nr(t,e,n=!1){const i=y7(t.pendingWriteTree_,e);if(v7(t.pendingWriteTree_,e)){let r=new Je(null);return i.snap!=null?r=r.set(qe(),!0):kn(i.children,o=>{r=r.set(new st(o),!0)}),jc(t,new ec(i.path,r,n))}else return[]}function zc(t,e,n){return jc(t,new Ps(V_(),e,n))}function z7(t,e,n){const i=Je.fromObject(n);return jc(t,new ea(V_(),e,i))}function j7(t,e,n,i){const s=nw(t,i);if(s!=null){const r=iw(s),o=r.path,a=r.queryId,l=En(o,e),c=new Ps($_(a),l,n);return sw(t,o,c)}else return[]}function W7(t,e,n,i){const s=nw(t,i);if(s){const r=iw(s),o=r.path,a=r.queryId,l=En(o,e),c=Je.fromObject(n),d=new ea($_(a),l,c);return sw(t,o,d)}else return[]}function Z_(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=En(o,e),c=Of(a,l);if(c)return c});return K_(s,e,r,n,!0)}function jc(t,e){return ew(e,t.syncPointTree_,null,W_(t.pendingWriteTree_,qe()))}function ew(t,e,n,i){if(Pe(t.path))return tw(t,e,n,i);{const s=e.get(qe());n==null&&s!=null&&(n=Of(s,qe()));let r=[];const o=Oe(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,d=Y_(i,o);r=r.concat(ew(a,l,c,d))}return s&&(r=r.concat(Lf(s,t,i,n))),r}}function tw(t,e,n,i){const s=e.get(qe());n==null&&s!=null&&(n=Of(s,qe()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Y_(i,o),d=t.operationForChild(o);d&&(r=r.concat(tw(d,a,l,c)))}),s&&(r=r.concat(Lf(s,t,i,n))),r}function nw(t,e){return t.tagToQueryMap.get(e)}function iw(t){const e=t.indexOf("$");return j(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new st(t.substr(0,e))}}function sw(t,e,n){const i=t.syncPointTree_.get(e);j(i,"Missing sync point for query tag that we're tracking");const s=W_(t.pendingWriteTree_,e);return Lf(i,n,s,null)}/**
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
 */class Mf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Mf(n)}node(){return this.node_}}class Ff{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Tt(this.path_,e);return new Ff(this.syncTree_,n)}node(){return Z_(this.syncTree_,this.path_)}}const q7=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},vy=function(t,e,n){if(!t||typeof t!="object")return t;if(j(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return K7(t[".sv"],e,n);if(typeof t[".sv"]=="object")return G7(t[".sv"],e);j(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},K7=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:j(!1,"Unexpected server value: "+t)}},G7=function(t,e,n){t.hasOwnProperty("increment")||j(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&j(!1,"Unexpected increment value: "+i);const s=e.node();if(j(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},Y7=function(t,e,n,i){return Bf(e,new Ff(n,t),i)},Q7=function(t,e,n){return Bf(t,new Mf(e),n)};function Bf(t,e,n){const i=t.getPriority().val(),s=vy(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=vy(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new bt(a,Vt(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new bt(s))),o.forEachChild(Wt,(a,l)=>{const c=Bf(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class Uf{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function Vf(t,e){let n=e instanceof st?e:new st(e),i=t,s=Oe(n);for(;s!==null;){const r=br(i.node.children,s)||{children:{},childCount:0};i=new Uf(s,i,r),n=et(n),s=Oe(n)}return i}function Hr(t){return t.node.value}function rw(t,e){t.node.value=e,sd(t)}function ow(t){return t.node.childCount>0}function X7(t){return Hr(t)===void 0&&!ow(t)}function Wc(t,e){kn(t.node.children,(n,i)=>{e(new Uf(n,t,i))})}function aw(t,e,n,i){n&&!i&&e(t),Wc(t,s=>{aw(s,e,!0,i)}),n&&i&&e(t)}function J7(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function ka(t){return new st(t.parent===null?t.name:ka(t.parent)+"/"+t.name)}function sd(t){t.parent!==null&&Z7(t.parent,t.name,t)}function Z7(t,e,n){const i=X7(n),s=xi(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,sd(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,sd(t))}/**
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
 */const e5=/[\[\].#$\/\u0000-\u001F\u007F]/,t5=/[\[\].#$\u0000-\u001F\u007F]/,nh=10*1024*1024,lw=function(t){return typeof t=="string"&&t.length!==0&&!e5.test(t)},n5=function(t){return typeof t=="string"&&t.length!==0&&!t5.test(t)},i5=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),n5(t)},cw=function(t,e,n){const i=n instanceof st?new M3(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ds(i));if(typeof e=="function")throw new Error(t+"contains a function "+ds(i)+" with contents = "+e.toString());if(l_(e))throw new Error(t+"contains "+e.toString()+" "+ds(i));if(typeof e=="string"&&e.length>nh/3&&Bc(e)>nh)throw new Error(t+"contains a string greater than "+nh+" utf8 bytes "+ds(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(kn(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!lw(o)))throw new Error(t+" contains an invalid key ("+o+") "+ds(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);F3(i,o),cw(t,a,i),B3(i)}),s&&r)throw new Error(t+' contains ".value" child '+ds(i)+" in addition to actual children.")}},s5=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!lw(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!i5(n))throw new Error(h6(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class r5{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function o5(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!P_(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function Us(t,e,n){o5(t,n),a5(t,i=>On(i,e)||On(e,i))}function a5(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(l5(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function l5(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Ts&&Ut("event: "+n.toString()),Sa(i)}}}/**
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
 */const c5="repo_interrupt",u5=25;class h5{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new r5,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Zl(),this.transactionQueueTree_=new Uf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function d5(t,e,n){if(t.stats_=Sf(t.repoInfo_),t.forceRestClient_||o3())t.server_=new Jl(t.repoInfo_,(i,s,r,o)=>{_y(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>wy(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Nt(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new yi(t.repoInfo_,e,(i,s,r,o)=>{_y(t,i,s,r,o)},i=>{wy(t,i)},i=>{p5(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=d3(t.repoInfo_,()=>new h7(t.stats_,t.server_)),t.infoData_=new o7,t.infoSyncTree_=new yy({startListening:(i,s,r,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=zc(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),$f(t,"connected",!1),t.serverSyncTree_=new yy({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);Us(t.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function f5(t){const n=t.infoData_.getNode(new st(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function uw(t){return q7({timestamp:f5(t)})}function _y(t,e,n,i,s){t.dataUpdateCount++;const r=new st(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const l=Vl(n,c=>Vt(c));o=W7(t.serverSyncTree_,r,l,s)}else{const l=Vt(n);o=j7(t.serverSyncTree_,r,l,s)}else if(i){const l=Vl(n,c=>Vt(c));o=z7(t.serverSyncTree_,r,l)}else{const l=Vt(n);o=zc(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=zf(t,r)),Us(t.eventQueue_,a,o)}function wy(t,e){$f(t,"connected",e),e===!1&&g5(t)}function p5(t,e){kn(e,(n,i)=>{$f(t,n,i)})}function $f(t,e,n){const i=new st("/.info/"+e),s=Vt(n);t.infoData_.updateSnapshot(i,s);const r=zc(t.infoSyncTree_,i,s);Us(t.eventQueue_,i,r)}function m5(t){return t.nextWriteId_++}function g5(t){hw(t,"onDisconnectEvents");const e=uw(t),n=Zl();Xh(t.onDisconnect_,qe(),(s,r)=>{const o=Y7(s,r,t.serverSyncTree_,e);B_(n,s,o)});let i=[];Xh(n,qe(),(s,r)=>{i=i.concat(zc(t.serverSyncTree_,s,r));const o=w5(t,s);zf(t,o)}),t.onDisconnect_=Zl(),Us(t.eventQueue_,qe(),i)}function y5(t){t.persistentConnection_&&t.persistentConnection_.interrupt(c5)}function hw(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ut(n,...e)}function dw(t,e,n){return Z_(t.serverSyncTree_,e,n)||ze.EMPTY_NODE}function Hf(t,e=t.transactionQueueTree_){if(e||qc(t,e),Hr(e)){const n=pw(t,e);j(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&v5(t,ka(e),n)}else ow(e)&&Wc(e,n=>{Hf(t,n)})}function v5(t,e,n){const i=n.map(c=>c.currentWriteId),s=dw(t,e,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const d=n[c];j(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const f=En(e,d.path);r=r.updateChild(f,d.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{hw(t,"transaction put response",{path:l.toString(),status:c});let d=[];if(c==="ok"){const f=[];for(let m=0;m<n.length;m++)n[m].status=2,d=d.concat(nr(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&f.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();qc(t,Vf(t.transactionQueueTree_,e)),Hf(t,t.transactionQueueTree_),Us(t.eventQueue_,e,d);for(let m=0;m<f.length;m++)Sa(f[m])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{vn("transaction at "+l.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}zf(t,e)}},o)}function zf(t,e){const n=fw(t,e),i=ka(n),s=pw(t,n);return _5(t,s,i),i}function _5(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=En(n,l.path);let d=!1,f;if(j(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,f=l.abortReason,s=s.concat(nr(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=u5)d=!0,f="maxretry",s=s.concat(nr(t.serverSyncTree_,l.currentWriteId,!0));else{const m=dw(t,l.path,o);l.currentInputSnapshot=m;const y=e[a].update(m.val());if(y!==void 0){cw("transaction failed: Data returned ",y,l.path);let b=Vt(y);typeof y=="object"&&y!=null&&xi(y,".priority")||(b=b.updatePriority(m.getPriority()));const S=l.currentWriteId,B=uw(t),U=Q7(b,m,B);l.currentOutputSnapshotRaw=b,l.currentOutputSnapshotResolved=U,l.currentWriteId=m5(t),o.splice(o.indexOf(S),1),s=s.concat(H7(t.serverSyncTree_,l.path,U,l.currentWriteId,l.applyLocally)),s=s.concat(nr(t.serverSyncTree_,S,!0))}else d=!0,f="nodata",s=s.concat(nr(t.serverSyncTree_,l.currentWriteId,!0))}Us(t.eventQueue_,n,s),s=[],d&&(e[a].status=2,function(m){setTimeout(m,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(f),!1,null))))}qc(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)Sa(i[a]);Hf(t,t.transactionQueueTree_)}function fw(t,e){let n,i=t.transactionQueueTree_;for(n=Oe(e);n!==null&&Hr(i)===void 0;)i=Vf(i,n),e=et(e),n=Oe(e);return i}function pw(t,e){const n=[];return mw(t,e,n),n.sort((i,s)=>i.order-s.order),n}function mw(t,e,n){const i=Hr(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);Wc(e,s=>{mw(t,s,n)})}function qc(t,e){const n=Hr(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,rw(e,n.length>0?n:void 0)}Wc(e,i=>{qc(t,i)})}function w5(t,e){const n=ka(fw(t,e)),i=Vf(t.transactionQueueTree_,e);return J7(i,s=>{ih(t,s)}),ih(t,i),aw(i,s=>{ih(t,s)}),n}function ih(t,e){const n=Hr(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(j(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(j(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(nr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?rw(e,void 0):n.length=r+1,Us(t.eventQueue_,ka(e),s);for(let o=0;o<i.length;o++)Sa(i[o])}}/**
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
 */function b5(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function C5(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):vn(`Invalid query segment '${n}' in query '${t}'`)}return e}const by=function(t,e){const n=I5(t),i=n.namespace;n.domain==="firebase.com"&&xs(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&xs("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Jk();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new c3(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new st(n.pathString)}},I5=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(d,f)),d<f&&(s=b5(t.substring(d,f)));const m=C5(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const y=e.slice(0,c);if(y.toLowerCase()==="localhost")n="localhost";else if(y.split(".").length<=2)n=y;else{const b=e.indexOf(".");i=e.substring(0,b).toLowerCase(),n=e.substring(b+1),r=i}"ns"in m&&(r=m.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
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
 */class jf{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return Pe(this._path)?null:k_(this._path)}get ref(){return new zr(this._repo,this._path)}get _queryIdentifier(){const e=oy(this._queryParams),n=Ef(e);return n==="{}"?"default":n}get _queryObject(){return oy(this._queryParams)}isEqual(e){if(e=pn(e),!(e instanceof jf))return!1;const n=this._repo===e._repo,i=P_(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+O3(this._path)}}class zr extends jf{constructor(e,n){super(e,n,new Rf,!1)}get parent(){const e=R_(this._path);return e===null?null:new zr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}V7(zr);$7(zr);/**
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
 */const E5="FIREBASE_DATABASE_EMULATOR_HOST",rd={};let T5=!1;function S5(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||xs("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ut("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=by(r,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[E5]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=by(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const d=s&&l?new Gh(Gh.OWNER):new l3(t.name,t.options,e);s5("Invalid Firebase Database URL",o),Pe(o.path)||xs("Database URL must point to the root of a Firebase Database (not including a child path).");const f=k5(a,t,d,new a3(t.name,n));return new x5(f,t)}function A5(t,e){const n=rd[e];(!n||n[t.key]!==t)&&xs(`Database ${e}(${t.repoInfo_}) has already been deleted.`),y5(t),delete n[t.key]}function k5(t,e,n,i){let s=rd[e.name];s||(s={},rd[e.name]=s);let r=s[t.toURLString()];return r&&xs("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new h5(t,T5,n,i),s[t.toURLString()]=r,r}class x5{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(d5(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new zr(this._repo,qe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(A5(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&xs("Cannot call "+e+" on a deleted database.")}}/**
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
 */function R5(t){Kk(is),ti(new Vn("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return S5(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),yn(Hg,zg,t),yn(Hg,zg,"esm2017")}yi.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};yi.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};R5();var P5=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},q,Wf=Wf||{},ue=P5||self;function ic(){}function Kc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function xa(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function N5(t){return Object.prototype.hasOwnProperty.call(t,sh)&&t[sh]||(t[sh]=++D5)}var sh="closure_uid_"+(1e9*Math.random()>>>0),D5=0;function L5(t,e,n){return t.call.apply(t.bind,arguments)}function O5(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function qt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?qt=L5:qt=O5,qt.apply(null,arguments)}function al(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function At(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function ss(){this.s=this.s,this.o=this.o}var M5=0;ss.prototype.s=!1;ss.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),M5!=0)&&N5(this)};ss.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const gw=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function qf(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Cy(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(Kc(i)){const s=t.length||0,r=i.length||0;t.length=s+r;for(let o=0;o<r;o++)t[s+o]=i[o]}else t.push(i)}}function Kt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Kt.prototype.h=function(){this.defaultPrevented=!0};var F5=function(){if(!ue.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ue.addEventListener("test",ic,e),ue.removeEventListener("test",ic,e)}catch{}return t}();function sc(t){return/^[\s\xa0]*$/.test(t)}var Iy=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function rh(t,e){return t<e?-1:t>e?1:0}function Gc(){var t=ue.navigator;return t&&(t=t.userAgent)?t:""}function Kn(t){return Gc().indexOf(t)!=-1}function Kf(t){return Kf[" "](t),t}Kf[" "]=ic;function yw(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var B5=Kn("Opera"),Tr=Kn("Trident")||Kn("MSIE"),vw=Kn("Edge"),od=vw||Tr,_w=Kn("Gecko")&&!(Gc().toLowerCase().indexOf("webkit")!=-1&&!Kn("Edge"))&&!(Kn("Trident")||Kn("MSIE"))&&!Kn("Edge"),U5=Gc().toLowerCase().indexOf("webkit")!=-1&&!Kn("Edge");function ww(){var t=ue.document;return t?t.documentMode:void 0}var rc;e:{var oh="",ah=function(){var t=Gc();if(_w)return/rv:([^\);]+)(\)|;)/.exec(t);if(vw)return/Edge\/([\d\.]+)/.exec(t);if(Tr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(U5)return/WebKit\/(\S+)/.exec(t);if(B5)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ah&&(oh=ah?ah[1]:""),Tr){var lh=ww();if(lh!=null&&lh>parseFloat(oh)){rc=String(lh);break e}}rc=oh}var V5={};function $5(){return yw(V5,9,function(){let t=0;const e=Iy(String(rc)).split("."),n=Iy("9").split("."),i=Math.max(e.length,n.length);for(let o=0;t==0&&o<i;o++){var s=e[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s[0].length==0&&r[0].length==0)break;t=rh(s[1].length==0?0:parseInt(s[1],10),r[1].length==0?0:parseInt(r[1],10))||rh(s[2].length==0,r[2].length==0)||rh(s[2],r[2]),s=s[3],r=r[3]}while(t==0)}return 0<=t})}var ad;if(ue.document&&Tr){var Ey=ww();ad=Ey||parseInt(rc,10)||void 0}else ad=void 0;var H5=ad;function ta(t,e){if(Kt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(_w){e:{try{Kf(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:z5[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ta.$.h.call(this)}}At(ta,Kt);var z5={2:"touch",3:"pen",4:"mouse"};ta.prototype.h=function(){ta.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ra="closure_listenable_"+(1e6*Math.random()|0),j5=0;function W5(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=s,this.key=++j5,this.fa=this.ia=!1}function Yc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Gf(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function bw(t){const e={};for(const n in t)e[n]=t[n];return e}const Ty="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Cw(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<Ty.length;r++)n=Ty[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Qc(t){this.src=t,this.g={},this.h=0}Qc.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=cd(t,e,i,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new W5(e,this.src,r,!!i,s),e.ia=n,t.push(e)),e};function ld(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=gw(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Yc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function cd(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==i)return s}return-1}var Yf="closure_lm_"+(1e6*Math.random()|0),ch={};function Iw(t,e,n,i,s){if(i&&i.once)return Tw(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Iw(t,e[r],n,i,s);return null}return n=Jf(n),t&&t[Ra]?t.O(e,n,xa(i)?!!i.capture:!!i,s):Ew(t,e,n,!1,i,s)}function Ew(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=xa(s)?!!s.capture:!!s,a=Xf(t);if(a||(t[Yf]=a=new Qc(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=q5(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)F5||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(Aw(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function q5(){function t(n){return e.call(t.src,t.listener,n)}const e=K5;return t}function Tw(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Tw(t,e[r],n,i,s);return null}return n=Jf(n),t&&t[Ra]?t.P(e,n,xa(i)?!!i.capture:!!i,s):Ew(t,e,n,!0,i,s)}function Sw(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)Sw(t,e[r],n,i,s);else i=xa(i)?!!i.capture:!!i,n=Jf(n),t&&t[Ra]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=cd(r,n,i,s),-1<n&&(Yc(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Xf(t))&&(e=t.g[e.toString()],t=-1,e&&(t=cd(e,n,i,s)),(n=-1<t?e[t]:null)&&Qf(n))}function Qf(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ra])ld(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Aw(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Xf(e))?(ld(n,t),n.h==0&&(n.src=null,e[Yf]=null)):Yc(t)}}}function Aw(t){return t in ch?ch[t]:ch[t]="on"+t}function K5(t,e){if(t.fa)t=!0;else{e=new ta(e,this);var n=t.listener,i=t.la||t.src;t.ia&&Qf(t),t=n.call(i,e)}return t}function Xf(t){return t=t[Yf],t instanceof Qc?t:null}var uh="__closure_events_fn_"+(1e9*Math.random()>>>0);function Jf(t){return typeof t=="function"?t:(t[uh]||(t[uh]=function(e){return t.handleEvent(e)}),t[uh])}function St(){ss.call(this),this.i=new Qc(this),this.S=this,this.J=null}At(St,ss);St.prototype[Ra]=!0;St.prototype.removeEventListener=function(t,e,n,i){Sw(this,t,e,n,i)};function Lt(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,typeof e=="string")e=new Kt(e,t);else if(e instanceof Kt)e.target=e.target||t;else{var s=e;e=new Kt(i,t),Cw(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=ll(o,i,!0,e)&&s}if(o=e.g=t,s=ll(o,i,!0,e)&&s,s=ll(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=ll(o,i,!1,e)&&s}St.prototype.N=function(){if(St.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)Yc(n[i]);delete t.g[e],t.h--}}this.J=null};St.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};St.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function ll(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&ld(t.i,o),s=a.call(l,i)!==!1&&s}}return s&&!i.defaultPrevented}var Zf=ue.JSON.stringify;function G5(){var t=Rw;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Y5{constructor(){this.h=this.g=null}add(e,n){const i=kw.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var kw=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Q5,t=>t.reset());class Q5{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function X5(t){ue.setTimeout(()=>{throw t},0)}function xw(t,e){ud||J5(),hd||(ud(),hd=!0),Rw.add(t,e)}var ud;function J5(){var t=ue.Promise.resolve(void 0);ud=function(){t.then(Z5)}}var hd=!1,Rw=new Y5;function Z5(){for(var t;t=G5();){try{t.h.call(t.g)}catch(n){X5(n)}var e=kw;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}hd=!1}function Xc(t,e){St.call(this),this.h=t||1,this.g=e||ue,this.j=qt(this.qb,this),this.l=Date.now()}At(Xc,St);q=Xc.prototype;q.ga=!1;q.T=null;q.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Lt(this,"tick"),this.ga&&(ep(this),this.start()))}};q.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ep(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}q.N=function(){Xc.$.N.call(this),ep(this),delete this.g};function tp(t,e,n){if(typeof t=="function")n&&(t=qt(t,n));else if(t&&typeof t.handleEvent=="function")t=qt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ue.setTimeout(t,e||0)}function Pw(t){t.g=tp(()=>{t.g=null,t.i&&(t.i=!1,Pw(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class ex extends ss{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Pw(this)}N(){super.N(),this.g&&(ue.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function na(t){ss.call(this),this.h=t,this.g={}}At(na,ss);var Sy=[];function Nw(t,e,n,i){Array.isArray(n)||(n&&(Sy[0]=n.toString()),n=Sy);for(var s=0;s<n.length;s++){var r=Iw(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Dw(t){Gf(t.g,function(e,n){this.g.hasOwnProperty(n)&&Qf(e)},t),t.g={}}na.prototype.N=function(){na.$.N.call(this),Dw(this)};na.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Jc(){this.g=!0}Jc.prototype.Ea=function(){this.g=!1};function tx(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var d=c[0];c=c[1];var f=d.split("_");o=2<=f.length&&f[1]=="type"?o+(d+"="+c+"&"):o+(d+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function nx(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function ir(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+sx(t,n)+(i?" "+i:"")})}function ix(t,e){t.info(function(){return"TIMEOUT: "+e})}Jc.prototype.info=function(){};function sx(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Zf(n)}catch{return e}}var Vs={},Ay=null;function Zc(){return Ay=Ay||new St}Vs.Ta="serverreachability";function Lw(t){Kt.call(this,Vs.Ta,t)}At(Lw,Kt);function ia(t){const e=Zc();Lt(e,new Lw(e))}Vs.STAT_EVENT="statevent";function Ow(t,e){Kt.call(this,Vs.STAT_EVENT,t),this.stat=e}At(Ow,Kt);function sn(t){const e=Zc();Lt(e,new Ow(e,t))}Vs.Ua="timingevent";function Mw(t,e){Kt.call(this,Vs.Ua,t),this.size=e}At(Mw,Kt);function Pa(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ue.setTimeout(function(){t()},e)}var eu={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Fw={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function np(){}np.prototype.h=null;function ky(t){return t.h||(t.h=t.i())}function Bw(){}var Na={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ip(){Kt.call(this,"d")}At(ip,Kt);function sp(){Kt.call(this,"c")}At(sp,Kt);var dd;function tu(){}At(tu,np);tu.prototype.g=function(){return new XMLHttpRequest};tu.prototype.i=function(){return{}};dd=new tu;function Da(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new na(this),this.P=rx,t=od?125:void 0,this.V=new Xc(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new Uw}function Uw(){this.i=null,this.g="",this.h=!1}var rx=45e3,fd={},oc={};q=Da.prototype;q.setTimeout=function(t){this.P=t};function pd(t,e,n){t.L=1,t.v=iu(Ii(e)),t.s=n,t.S=!0,Vw(t,null)}function Vw(t,e){t.G=Date.now(),La(t),t.A=Ii(t.v);var n=t.A,i=t.W;Array.isArray(i)||(i=[String(i)]),Gw(n.i,"t",i),t.C=0,n=t.l.I,t.h=new Uw,t.g=mb(t.l,n?e:null,!t.s),0<t.O&&(t.M=new ex(qt(t.Pa,t,t.g),t.O)),Nw(t.U,t.g,"readystatechange",t.nb),e=t.I?bw(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ia(),tx(t.j,t.u,t.A,t.m,t.W,t.s)}q.nb=function(t){t=t.target;const e=this.M;e&&mi(t)==3?e.l():this.Pa(t)};q.Pa=function(t){try{if(t==this.g)e:{const d=mi(this.g);var e=this.g.Ia();const f=this.g.da();if(!(3>d)&&(d!=3||od||this.g&&(this.h.h||this.g.ja()||Ny(this.g)))){this.J||d!=4||e==7||(e==8||0>=f?ia(3):ia(2)),nu(this);var n=this.g.da();this.aa=n;t:if($w(this)){var i=Ny(this.g);t="";var s=i.length,r=mi(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){_s(this),Do(this);var o="";break t}this.h.i=new ue.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,nx(this.j,this.u,this.A,this.m,this.W,d,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!sc(a)){var c=a;break t}}c=null}if(n=c)ir(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,md(this,n);else{this.i=!1,this.o=3,sn(12),_s(this),Do(this);break e}}this.S?(Hw(this,d,o),od&&this.i&&d==3&&(Nw(this.U,this.V,"tick",this.mb),this.V.start())):(ir(this.j,this.m,o,null),md(this,o)),d==4&&_s(this),this.i&&!this.J&&(d==4?hb(this.l,this):(this.i=!1,La(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,sn(12)):(this.o=0,sn(13)),_s(this),Do(this)}}}catch{}finally{}};function $w(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Hw(t,e,n){let i=!0,s;for(;!t.J&&t.C<n.length;)if(s=ox(t,n),s==oc){e==4&&(t.o=4,sn(14),i=!1),ir(t.j,t.m,null,"[Incomplete Response]");break}else if(s==fd){t.o=4,sn(15),ir(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else ir(t.j,t.m,s,null),md(t,s);$w(t)&&s!=oc&&s!=fd&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,sn(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),hp(e),e.L=!0,sn(11))):(ir(t.j,t.m,n,"[Invalid Chunked Response]"),_s(t),Do(t))}q.mb=function(){if(this.g){var t=mi(this.g),e=this.g.ja();this.C<e.length&&(nu(this),Hw(this,t,e),this.i&&t!=4&&La(this))}};function ox(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?oc:(n=Number(e.substring(n,i)),isNaN(n)?fd:(i+=1,i+n>e.length?oc:(e=e.substr(i,n),t.C=i+n,e)))}q.cancel=function(){this.J=!0,_s(this)};function La(t){t.Y=Date.now()+t.P,zw(t,t.P)}function zw(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Pa(qt(t.lb,t),e)}function nu(t){t.B&&(ue.clearTimeout(t.B),t.B=null)}q.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(ix(this.j,this.A),this.L!=2&&(ia(),sn(17)),_s(this),this.o=2,Do(this)):zw(this,this.Y-t)};function Do(t){t.l.H==0||t.J||hb(t.l,t)}function _s(t){nu(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,ep(t.V),Dw(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function md(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||gd(n.h,t))){if(!t.K&&gd(n.h,t)&&n.H==3){try{var i=n.Ja.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)cc(n),ou(n);else break e;up(n),sn(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.M&&n.A==0&&!n.v&&(n.v=Pa(qt(n.ib,n),6e3));if(1>=Xw(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else ws(n,11)}else if((t.K||n.g==t)&&cc(n),!sc(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.J=c[1],n.oa=c[2];const d=c[3];d!=null&&(n.qa=d,n.j.info("VER="+n.qa));const f=c[4];f!=null&&(n.Ga=f,n.j.info("SVER="+n.Ga));const m=c[5];m!=null&&typeof m=="number"&&0<m&&(i=1.5*m,n.K=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const y=t.g;if(y){const b=y.g?y.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(b){var r=i.h;r.g||b.indexOf("spdy")==-1&&b.indexOf("quic")==-1&&b.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(rp(r,r.h),r.h=null))}if(i.F){const C=y.g?y.g.getResponseHeader("X-HTTP-Session-Id"):null;C&&(i.Da=C,rt(i.G,i.F,C))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),i=n;var o=t;if(i.wa=pb(i,i.I?i.oa:null,i.Y),o.K){Jw(i.h,o);var a=o,l=i.K;l&&a.setTimeout(l),a.B&&(nu(a),La(a)),i.g=o}else cb(i);0<n.i.length&&au(n)}else c[0]!="stop"&&c[0]!="close"||ws(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?ws(n,7):cp(n):c[0]!="noop"&&n.l&&n.l.Aa(c),n.A=0)}}ia(4)}catch{}}function ax(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Kc(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function lx(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Kc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function jw(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Kc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=lx(t),i=ax(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}var Ww=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function cx(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Ss(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ss){this.h=e!==void 0?e:t.h,ac(this,t.j),this.s=t.s,this.g=t.g,lc(this,t.m),this.l=t.l,e=t.i;var n=new sa;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),xy(this,n),this.o=t.o}else t&&(n=String(t).match(Ww))?(this.h=!!e,ac(this,n[1]||"",!0),this.s=wo(n[2]||""),this.g=wo(n[3]||"",!0),lc(this,n[4]),this.l=wo(n[5]||"",!0),xy(this,n[6]||"",!0),this.o=wo(n[7]||"")):(this.h=!!e,this.i=new sa(null,this.h))}Ss.prototype.toString=function(){var t=[],e=this.j;e&&t.push(bo(e,Ry,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(bo(e,Ry,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(bo(n,n.charAt(0)=="/"?dx:hx,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",bo(n,px)),t.join("")};function Ii(t){return new Ss(t)}function ac(t,e,n){t.j=n?wo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function lc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function xy(t,e,n){e instanceof sa?(t.i=e,mx(t.i,t.h)):(n||(e=bo(e,fx)),t.i=new sa(e,t.h))}function rt(t,e,n){t.i.set(e,n)}function iu(t){return rt(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function wo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function bo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,ux),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ux(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ry=/[#\/\?@]/g,hx=/[#\?:]/g,dx=/[#\?]/g,fx=/[#\?@]/g,px=/#/g;function sa(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function rs(t){t.g||(t.g=new Map,t.h=0,t.i&&cx(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}q=sa.prototype;q.add=function(t,e){rs(this),this.i=null,t=jr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function qw(t,e){rs(t),e=jr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Kw(t,e){return rs(t),e=jr(t,e),t.g.has(e)}q.forEach=function(t,e){rs(this),this.g.forEach(function(n,i){n.forEach(function(s){t.call(e,s,i,this)},this)},this)};q.sa=function(){rs(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let r=0;r<s.length;r++)n.push(e[i])}return n};q.Z=function(t){rs(this);let e=[];if(typeof t=="string")Kw(this,t)&&(e=e.concat(this.g.get(jr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};q.set=function(t,e){return rs(this),this.i=null,t=jr(this,t),Kw(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};q.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Gw(t,e,n){qw(t,e),0<n.length&&(t.i=null,t.g.set(jr(t,e),qf(n)),t.h+=n.length)}q.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};function jr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function mx(t,e){e&&!t.j&&(rs(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(qw(this,i),Gw(this,s,n))},t)),t.j=e}var gx=class{constructor(t,e){this.h=t,this.g=e}};function Yw(t){this.l=t||yx,ue.PerformanceNavigationTiming?(t=ue.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ue.g&&ue.g.Ka&&ue.g.Ka()&&ue.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var yx=10;function Qw(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Xw(t){return t.h?1:t.g?t.g.size:0}function gd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function rp(t,e){t.g?t.g.add(e):t.h=e}function Jw(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Yw.prototype.cancel=function(){if(this.i=Zw(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Zw(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return qf(t.i)}function op(){}op.prototype.stringify=function(t){return ue.JSON.stringify(t,void 0)};op.prototype.parse=function(t){return ue.JSON.parse(t,void 0)};function vx(){this.g=new op}function _x(t,e,n){const i=n||"";try{jw(t,function(s,r){let o=s;xa(s)&&(o=Zf(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function wx(t,e){const n=new Jc;if(ue.Image){const i=new Image;i.onload=al(cl,n,i,"TestLoadImage: loaded",!0,e),i.onerror=al(cl,n,i,"TestLoadImage: error",!1,e),i.onabort=al(cl,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=al(cl,n,i,"TestLoadImage: timeout",!1,e),ue.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function cl(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function Oa(t){this.l=t.fc||null,this.j=t.ob||!1}At(Oa,np);Oa.prototype.g=function(){return new su(this.l,this.j)};Oa.prototype.i=function(t){return function(){return t}}({});function su(t,e){St.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=ap,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}At(su,St);var ap=0;q=su.prototype;q.open=function(t,e){if(this.readyState!=ap)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ra(this)};q.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||ue).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};q.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ma(this)),this.readyState=ap};q.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ra(this)),this.g&&(this.readyState=3,ra(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof ue.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;eb(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function eb(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}q.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ma(this):ra(this),this.readyState==3&&eb(this)}};q.Za=function(t){this.g&&(this.response=this.responseText=t,Ma(this))};q.Ya=function(t){this.g&&(this.response=t,Ma(this))};q.ka=function(){this.g&&Ma(this)};function Ma(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ra(t)}q.setRequestHeader=function(t,e){this.v.append(t,e)};q.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};q.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ra(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(su.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var bx=ue.JSON.parse;function ft(t){St.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=tb,this.L=this.M=!1}At(ft,St);var tb="",Cx=/^https?$/i,Ix=["POST","PUT"];q=ft.prototype;q.Oa=function(t){this.M=t};q.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():dd.g(),this.C=this.u?ky(this.u):ky(dd),this.g.onreadystatechange=qt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){Py(this,r);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=ue.FormData&&t instanceof ue.FormData,!(0<=gw(Ix,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{sb(this),0<this.B&&((this.L=Ex(this.g))?(this.g.timeout=this.B,this.g.ontimeout=qt(this.ua,this)):this.A=tp(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Py(this,r)}};function Ex(t){return Tr&&$5()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}q.ua=function(){typeof Wf<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Lt(this,"timeout"),this.abort(8))};function Py(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,nb(t),ru(t)}function nb(t){t.F||(t.F=!0,Lt(t,"complete"),Lt(t,"error"))}q.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Lt(this,"complete"),Lt(this,"abort"),ru(this))};q.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ru(this,!0)),ft.$.N.call(this)};q.La=function(){this.s||(this.G||this.v||this.l?ib(this):this.kb())};q.kb=function(){ib(this)};function ib(t){if(t.h&&typeof Wf<"u"&&(!t.C[1]||mi(t)!=4||t.da()!=2)){if(t.v&&mi(t)==4)tp(t.La,0,t);else if(Lt(t,"readystatechange"),mi(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=a===0){var s=String(t.I).match(Ww)[1]||null;if(!s&&ue.self&&ue.self.location){var r=ue.self.location.protocol;s=r.substr(0,r.length-1)}i=!Cx.test(s?s.toLowerCase():"")}n=i}if(n)Lt(t,"complete"),Lt(t,"success");else{t.m=6;try{var o=2<mi(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",nb(t)}}finally{ru(t)}}}}function ru(t,e){if(t.g){sb(t);const n=t.g,i=t.C[0]?ic:null;t.g=null,t.C=null,e||Lt(t,"ready");try{n.onreadystatechange=i}catch{}}}function sb(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(ue.clearTimeout(t.A),t.A=null)}function mi(t){return t.g?t.g.readyState:0}q.da=function(){try{return 2<mi(this)?this.g.status:-1}catch{return-1}};q.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};q.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),bx(e)}};function Ny(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case tb:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}q.Ia=function(){return this.m};q.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function rb(t){let e="";return Gf(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function lp(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=rb(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):rt(t,e,n))}function ho(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ob(t){this.Ga=0,this.i=[],this.j=new Jc,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ho("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ho("baseRetryDelayMs",5e3,t),this.hb=ho("retryDelaySeedMs",1e4,t),this.eb=ho("forwardChannelMaxRetries",2,t),this.xa=ho("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new Yw(t&&t.concurrentRequestLimit),this.Ja=new vx,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}q=ob.prototype;q.qa=8;q.H=1;function cp(t){if(ab(t),t.H==3){var e=t.W++,n=Ii(t.G);rt(n,"SID",t.J),rt(n,"RID",e),rt(n,"TYPE","terminate"),Fa(t,n),e=new Da(t,t.j,e,void 0),e.L=2,e.v=iu(Ii(n)),n=!1,ue.navigator&&ue.navigator.sendBeacon&&(n=ue.navigator.sendBeacon(e.v.toString(),"")),!n&&ue.Image&&(new Image().src=e.v,n=!0),n||(e.g=mb(e.l,null),e.g.ha(e.v)),e.G=Date.now(),La(e)}fb(t)}function ou(t){t.g&&(hp(t),t.g.cancel(),t.g=null)}function ab(t){ou(t),t.u&&(ue.clearTimeout(t.u),t.u=null),cc(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&ue.clearTimeout(t.m),t.m=null)}function au(t){Qw(t.h)||t.m||(t.m=!0,xw(t.Na,t),t.C=0)}function Tx(t,e){return Xw(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Pa(qt(t.Na,t,e),db(t,t.C)),t.C++,!0)}q.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Da(this,this.j,t,void 0);let r=this.s;if(this.U&&(r?(r=bw(r),Cw(r,this.U)):r=this.U),this.o!==null||this.O||(s.I=r,r=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var i=this.i[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=lb(this,s,e),n=Ii(this.G),rt(n,"RID",t),rt(n,"CVER",22),this.F&&rt(n,"X-HTTP-Session-Id",this.F),Fa(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(rb(r)))+"&"+e:this.o&&lp(n,this.o,r)),rp(this.h,s),this.bb&&rt(n,"TYPE","init"),this.P?(rt(n,"$req",e),rt(n,"SID","null"),s.ba=!0,pd(s,n,null)):pd(s,n,e),this.H=2}}else this.H==3&&(t?Dy(this,t):this.i.length==0||Qw(this.h)||Dy(this))};function Dy(t,e){var n;e?n=e.m:n=t.W++;const i=Ii(t.G);rt(i,"SID",t.J),rt(i,"RID",n),rt(i,"AID",t.V),Fa(t,i),t.o&&t.s&&lp(i,t.o,t.s),n=new Da(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=lb(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),rp(t.h,n),pd(n,i,e)}function Fa(t,e){t.ma&&Gf(t.ma,function(n,i){rt(e,i,n)}),t.l&&jw({},function(n,i){rt(e,i,n)})}function lb(t,e,n){n=Math.min(t.i.length,n);var i=t.l?qt(t.l.Va,t.l,t):null;e:{var s=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=s[l].h;const d=s[l].g;if(c-=r,0>c)r=Math.max(0,s[l].h-100),a=!1;else try{_x(d,o,"req"+c+"_")}catch{i&&i(d)}}if(a){i=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,i}function cb(t){t.g||t.u||(t.ba=1,xw(t.Ma,t),t.A=0)}function up(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Pa(qt(t.Ma,t),db(t,t.A)),t.A++,!0)}q.Ma=function(){if(this.u=null,ub(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=Pa(qt(this.jb,this),t)}};q.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,sn(10),ou(this),ub(this))};function hp(t){t.B!=null&&(ue.clearTimeout(t.B),t.B=null)}function ub(t){t.g=new Da(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Ii(t.wa);rt(e,"RID","rpc"),rt(e,"SID",t.J),rt(e,"CI",t.M?"0":"1"),rt(e,"AID",t.V),rt(e,"TYPE","xmlhttp"),Fa(t,e),t.o&&t.s&&lp(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=iu(Ii(e)),n.s=null,n.S=!0,Vw(n,t)}q.ib=function(){this.v!=null&&(this.v=null,ou(this),up(this),sn(19))};function cc(t){t.v!=null&&(ue.clearTimeout(t.v),t.v=null)}function hb(t,e){var n=null;if(t.g==e){cc(t),hp(t),t.g=null;var i=2}else if(gd(t.h,e))n=e.F,Jw(t.h,e),i=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;i=Zc(),Lt(i,new Mw(i,n)),au(t)}else cb(t);else if(s=e.o,s==3||s==0&&0<t.ta||!(i==1&&Tx(t,e)||i==2&&up(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:ws(t,5);break;case 4:ws(t,10);break;case 3:ws(t,6);break;default:ws(t,2)}}}function db(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function ws(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var i=qt(t.pb,t);n||(n=new Ss("//www.google.com/images/cleardot.gif"),ue.location&&ue.location.protocol=="http"||ac(n,"https"),iu(n)),wx(n.toString(),i)}else sn(2);t.H=0,t.l&&t.l.za(e),fb(t),ab(t)}q.pb=function(t){t?(this.j.info("Successfully pinged google.com"),sn(2)):(this.j.info("Failed to ping google.com"),sn(1))};function fb(t){if(t.H=0,t.pa=[],t.l){const e=Zw(t.h);(e.length!=0||t.i.length!=0)&&(Cy(t.pa,e),Cy(t.pa,t.i),t.h.i.length=0,qf(t.i),t.i.length=0),t.l.ya()}}function pb(t,e,n){var i=n instanceof Ss?Ii(n):new Ss(n,void 0);if(i.g!="")e&&(i.g=e+"."+i.g),lc(i,i.m);else{var s=ue.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new Ss(null,void 0);i&&ac(r,i),e&&(r.g=e),s&&lc(r,s),n&&(r.l=n),i=r}return n=t.F,e=t.Da,n&&e&&rt(i,n,e),rt(i,"VER",t.qa),Fa(t,i),i}function mb(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new ft(new Oa({ob:!0})):new ft(t.va),e.Oa(t.I),e}function gb(){}q=gb.prototype;q.Ba=function(){};q.Aa=function(){};q.za=function(){};q.ya=function(){};q.Va=function(){};function uc(){if(Tr&&!(10<=Number(H5)))throw Error("Environmental error: no available transport.")}uc.prototype.g=function(t,e){return new _n(t,e)};function _n(t,e){St.call(this),this.g=new ob(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!sc(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!sc(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Wr(this)}At(_n,St);_n.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;sn(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=pb(t,null,t.Y),au(t)};_n.prototype.close=function(){cp(this.g)};_n.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Zf(t),t=n);e.i.push(new gx(e.fb++,t)),e.H==3&&au(e)};_n.prototype.N=function(){this.g.l=null,delete this.j,cp(this.g),delete this.g,_n.$.N.call(this)};function yb(t){ip.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}At(yb,ip);function vb(){sp.call(this),this.status=1}At(vb,sp);function Wr(t){this.g=t}At(Wr,gb);Wr.prototype.Ba=function(){Lt(this.g,"a")};Wr.prototype.Aa=function(t){Lt(this.g,new yb(t))};Wr.prototype.za=function(t){Lt(this.g,new vb)};Wr.prototype.ya=function(){Lt(this.g,"b")};function Sx(){this.blockSize=-1}function $n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}At($n,Sx);$n.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function hh(t,e,n){n||(n=0);var i=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)i[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)i[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var r=t.g[3],o=e+(r^n&(s^r))+i[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[2]+606105819&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[6]+2821735955&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[10]+4294925233&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[14]+2792965006&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^r&(n^s))+i[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[11]+643717713&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[15]+3634488961&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[3]+4107603335&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[7]+1735328473&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^r)+i[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[11]+1839030562&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[7]+4139469664&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[3]+3572445317&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[15]+530742520&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~r))+i[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[14]+2878612391&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[10]+4293915773&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[6]+2734768916&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[2]+718787259&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+r&4294967295}$n.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,i=this.m,s=this.h,r=0;r<e;){if(s==0)for(;r<=n;)hh(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(i[s++]=t.charCodeAt(r++),s==this.blockSize){hh(this,i),s=0;break}}else for(;r<e;)if(i[s++]=t[r++],s==this.blockSize){hh(this,i),s=0;break}}this.h=s,this.i+=e};$n.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};function We(t,e){this.h=e;for(var n=[],i=!0,s=t.length-1;0<=s;s--){var r=t[s]|0;i&&r==e||(n[s]=r,i=!1)}this.g=n}var Ax={};function dp(t){return-128<=t&&128>t?yw(Ax,t,function(e){return new We([e|0],0>e?-1:0)}):new We([t|0],0>t?-1:0)}function Yn(t){if(isNaN(t)||!isFinite(t))return fr;if(0>t)return Pt(Yn(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=yd;return new We(e,0)}function _b(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Pt(_b(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Yn(Math.pow(e,8)),i=fr,s=0;s<t.length;s+=8){var r=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+r),e);8>r?(r=Yn(Math.pow(e,r)),i=i.R(r).add(Yn(o))):(i=i.R(n),i=i.add(Yn(o)))}return i}var yd=4294967296,fr=dp(0),vd=dp(1),Ly=dp(16777216);q=We.prototype;q.ea=function(){if(Cn(this))return-Pt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:yd+i)*e,e*=yd}return t};q.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(gi(this))return"0";if(Cn(this))return"-"+Pt(this).toString(t);for(var e=Yn(Math.pow(t,6)),n=this,i="";;){var s=dc(n,e).g;n=hc(n,s.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,gi(n))return r+i;for(;6>r.length;)r="0"+r;i=r+i}};q.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function gi(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Cn(t){return t.h==-1}q.X=function(t){return t=hc(this,t),Cn(t)?-1:gi(t)?0:1};function Pt(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new We(n,~t.h).add(vd)}q.abs=function(){return Cn(this)?Pt(this):this};q.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,s=0;s<=e;s++){var r=i+(this.D(s)&65535)+(t.D(s)&65535),o=(r>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);i=o>>>16,r&=65535,o&=65535,n[s]=o<<16|r}return new We(n,n[n.length-1]&-2147483648?-1:0)};function hc(t,e){return t.add(Pt(e))}q.R=function(t){if(gi(this)||gi(t))return fr;if(Cn(this))return Cn(t)?Pt(this).R(Pt(t)):Pt(Pt(this).R(t));if(Cn(t))return Pt(this.R(Pt(t)));if(0>this.X(Ly)&&0>t.X(Ly))return Yn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<t.g.length;s++){var r=this.D(i)>>>16,o=this.D(i)&65535,a=t.D(s)>>>16,l=t.D(s)&65535;n[2*i+2*s]+=o*l,ul(n,2*i+2*s),n[2*i+2*s+1]+=r*l,ul(n,2*i+2*s+1),n[2*i+2*s+1]+=o*a,ul(n,2*i+2*s+1),n[2*i+2*s+2]+=r*a,ul(n,2*i+2*s+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new We(n,0)};function ul(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function fo(t,e){this.g=t,this.h=e}function dc(t,e){if(gi(e))throw Error("division by zero");if(gi(t))return new fo(fr,fr);if(Cn(t))return e=dc(Pt(t),e),new fo(Pt(e.g),Pt(e.h));if(Cn(e))return e=dc(t,Pt(e)),new fo(Pt(e.g),e.h);if(30<t.g.length){if(Cn(t)||Cn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=vd,i=e;0>=i.X(t);)n=Oy(n),i=Oy(i);var s=Qs(n,1),r=Qs(i,1);for(i=Qs(i,2),n=Qs(n,2);!gi(i);){var o=r.add(i);0>=o.X(t)&&(s=s.add(n),r=o),i=Qs(i,1),n=Qs(n,1)}return e=hc(t,s.R(e)),new fo(s,e)}for(s=fr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),r=Yn(n),o=r.R(e);Cn(o)||0<o.X(t);)n-=i,r=Yn(n),o=r.R(e);gi(r)&&(r=vd),s=s.add(r),t=hc(t,o)}return new fo(s,t)}q.gb=function(t){return dc(this,t).h};q.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new We(n,this.h&t.h)};q.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new We(n,this.h|t.h)};q.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new We(n,this.h^t.h)};function Oy(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new We(n,t.h)}function Qs(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,s=[],r=0;r<i;r++)s[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new We(s,t.h)}uc.prototype.createWebChannel=uc.prototype.g;_n.prototype.send=_n.prototype.u;_n.prototype.open=_n.prototype.m;_n.prototype.close=_n.prototype.close;eu.NO_ERROR=0;eu.TIMEOUT=8;eu.HTTP_ERROR=6;Fw.COMPLETE="complete";Bw.EventType=Na;Na.OPEN="a";Na.CLOSE="b";Na.ERROR="c";Na.MESSAGE="d";St.prototype.listen=St.prototype.O;ft.prototype.listenOnce=ft.prototype.P;ft.prototype.getLastError=ft.prototype.Sa;ft.prototype.getLastErrorCode=ft.prototype.Ia;ft.prototype.getStatus=ft.prototype.da;ft.prototype.getResponseJson=ft.prototype.Wa;ft.prototype.getResponseText=ft.prototype.ja;ft.prototype.send=ft.prototype.ha;ft.prototype.setWithCredentials=ft.prototype.Oa;$n.prototype.digest=$n.prototype.l;$n.prototype.reset=$n.prototype.reset;$n.prototype.update=$n.prototype.j;We.prototype.add=We.prototype.add;We.prototype.multiply=We.prototype.R;We.prototype.modulo=We.prototype.gb;We.prototype.compare=We.prototype.X;We.prototype.toNumber=We.prototype.ea;We.prototype.toString=We.prototype.toString;We.prototype.getBits=We.prototype.D;We.fromNumber=Yn;We.fromString=_b;var kx=function(){return new uc},xx=function(){return Zc()},dh=eu,Rx=Fw,Px=Vs,My={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Nx=Oa,hl=Bw,Dx=ft,Lx=$n,pr=We;const Fy="@firebase/firestore";/**
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
 */class Bt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Bt.UNAUTHENTICATED=new Bt(null),Bt.GOOGLE_CREDENTIALS=new Bt("google-credentials-uid"),Bt.FIRST_PARTY=new Bt("first-party-uid"),Bt.MOCK_USER=new Bt("mock-user");/**
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
 */let qr="9.22.0";/**
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
 */const Ds=new va("@firebase/firestore");function By(){return Ds.logLevel}function ee(t,...e){if(Ds.logLevel<=Be.DEBUG){const n=e.map(fp);Ds.debug(`Firestore (${qr}): ${t}`,...n)}}function Ei(t,...e){if(Ds.logLevel<=Be.ERROR){const n=e.map(fp);Ds.error(`Firestore (${qr}): ${t}`,...n)}}function Sr(t,...e){if(Ds.logLevel<=Be.WARN){const n=e.map(fp);Ds.warn(`Firestore (${qr}): ${t}`,...n)}}function fp(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function ce(t="Unexpected state"){const e=`FIRESTORE (${qr}) INTERNAL ASSERTION FAILED: `+t;throw Ei(e),new Error(e)}function nt(t,e){t||ce()}function ve(t,e){return t}/**
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
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends oi{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class vi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class wb{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ox{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Bt.UNAUTHENTICATED))}shutdown(){}}class Mx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Fx{constructor(e){this.t=e,this.currentUser=Bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let r=new vi;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new vi,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new vi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(nt(typeof i.accessToken=="string"),new wb(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return nt(e===null||typeof e=="string"),new Bt(e)}}class Bx{constructor(e,n,i){this.h=e,this.l=n,this.m=i,this.type="FirstParty",this.user=Bt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Ux{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new Bx(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Bt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Vx{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $x{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const i=r=>{r.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?s(r):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(nt(typeof n.token=="string"),this.T=n.token,new Vx(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Hx(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
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
 */class bb{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=Hx(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function $e(t,e){return t<e?-1:t>e?1:0}function Ar(t,e,n){return t.length===e.length&&t.every((i,s)=>n(i,e[s]))}/**
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
 */class _t{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new X(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new X(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new X(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new X(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return _t.fromMillis(Date.now())}static fromDate(e){return _t.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new _t(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?$e(this.nanoseconds,e.nanoseconds):$e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class de{constructor(e){this.timestamp=e}static fromTimestamp(e){return new de(e)}static min(){return new de(new _t(0,0))}static max(){return new de(new _t(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class oa{constructor(e,n,i){n===void 0?n=0:n>e.length&&ce(),i===void 0?i=e.length-n:i>e.length-n&&ce(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return oa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof oa?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const r=e.get(s),o=n.get(s);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class tt extends oa{construct(e,n,i){return new tt(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new X(x.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new tt(n)}static emptyPath(){return new tt([])}}const zx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class zt extends oa{construct(e,n,i){return new zt(e,n,i)}static isValidIdentifier(e){return zx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),zt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new zt(["__name__"])}static fromServerFormat(e){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new X(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new X(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new X(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new X(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new zt(n)}static emptyPath(){return new zt([])}}/**
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
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(tt.fromString(e))}static fromName(e){return new se(tt.fromString(e).popFirst(5))}static empty(){return new se(tt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&tt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return tt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new tt(e.slice()))}}function jx(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=de.fromTimestamp(i===1e9?new _t(n+1,0):new _t(n,i));return new es(s,se.empty(),e)}function Wx(t){return new es(t.readTime,t.key,-1)}class es{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new es(de.min(),se.empty(),-1)}static max(){return new es(de.max(),se.empty(),-1)}}function qx(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=se.comparator(t.documentKey,e.documentKey),n!==0?n:$e(t.largestBatchId,e.largestBatchId))}/**
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
 */const Kx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Gx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ba(t){if(t.code!==x.FAILED_PRECONDITION||t.message!==Kx)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ce(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(n,r).next(i,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,i)=>{n(e)})}static reject(e){return new F((n,i)=>{i(e)})}static waitFor(e){return new F((n,i)=>{let s=0,r=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++r,o&&r===s&&n()},l=>i(l))}),o=!0,r===s&&n()})}static or(e){let n=F.resolve(!1);for(const i of e)n=n.next(s=>s?F.resolve(s):i());return n}static forEach(e,n){const i=[];return e.forEach((s,r)=>{i.push(n.call(this,s,r))}),this.waitFor(i)}static mapArray(e,n){return new F((i,s)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(d=>{o[c]=d,++a,a===r&&i(o)},d=>s(d))}})}static doWhile(e,n){return new F((i,s)=>{const r=()=>{e()===!0?n().next(()=>{r()},s):i()};r()})}}function Ua(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class pp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.ot(i),this.ut=i=>n.writeSequenceNumber(i))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}pp.ct=-1;function lu(t){return t==null}function fc(t){return t===0&&1/t==-1/0}function Yx(t){return typeof t=="number"&&Number.isInteger(t)&&!fc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Uy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Kr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Cb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class dt{constructor(e,n){this.comparator=e,this.root=n||Rt.EMPTY}insert(e,n){return new dt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Rt.BLACK,null,null))}remove(e){return new dt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new dl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new dl(this.root,e,this.comparator,!1)}getReverseIterator(){return new dl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new dl(this.root,e,this.comparator,!0)}}class dl{constructor(e,n,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?i(e.key,n):1,n&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Rt{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??Rt.RED,this.left=s??Rt.EMPTY,this.right=r??Rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,s,r){return new Rt(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Rt.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ce();const e=this.left.check();if(e!==this.right.check())throw ce();return e+(this.isRed()?0:1)}}Rt.EMPTY=null,Rt.RED=!0,Rt.BLACK=!1;Rt.EMPTY=new class{constructor(){this.size=0}get key(){throw ce()}get value(){throw ce()}get color(){throw ce()}get left(){throw ce()}get right(){throw ce()}copy(t,e,n,i,s){return this}insert(t,e,n){return new Rt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Gt{constructor(e){this.comparator=e,this.data=new dt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Vy(this.data.getIterator())}getIteratorFrom(e){return new Vy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof Gt)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Gt(this.comparator);return n.data=e,n}}class Vy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Mn{constructor(e){this.fields=e,e.sort(zt.comparator)}static empty(){return new Mn([])}unionWith(e){let n=new Gt(zt.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new Mn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ar(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class Ib extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Qt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Ib("Invalid base64 string: "+s):s}}(e);return new Qt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let r=0;r<i.length;++r)s+=String.fromCharCode(i[r]);return s}(e);return new Qt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return $e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qt.EMPTY_BYTE_STRING=new Qt("");const Qx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ts(t){if(nt(!!t),typeof t=="string"){let e=0;const n=Qx.exec(t);if(nt(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:yt(t.seconds),nanos:yt(t.nanos)}}function yt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ls(t){return typeof t=="string"?Qt.fromBase64String(t):Qt.fromUint8Array(t)}/**
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
 */function mp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function gp(t){const e=t.mapValue.fields.__previous_value__;return mp(e)?gp(e):e}function aa(t){const e=ts(t.mapValue.fields.__local_write_time__.timestampValue);return new _t(e.seconds,e.nanos)}/**
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
 */class Xx{constructor(e,n,i,s,r,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class la{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new la("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof la&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const fl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Os(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?mp(t)?4:Jx(t)?9007199254740991:10:ce()}function si(t,e){if(t===e)return!0;const n=Os(t);if(n!==Os(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return aa(t).isEqual(aa(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const r=ts(i.timestampValue),o=ts(s.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ls(i.bytesValue).isEqual(Ls(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return yt(i.geoPointValue.latitude)===yt(s.geoPointValue.latitude)&&yt(i.geoPointValue.longitude)===yt(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return yt(i.integerValue)===yt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const r=yt(i.doubleValue),o=yt(s.doubleValue);return r===o?fc(r)===fc(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Ar(t.arrayValue.values||[],e.arrayValue.values||[],si);case 10:return function(i,s){const r=i.mapValue.fields||{},o=s.mapValue.fields||{};if(Uy(r)!==Uy(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!si(r[a],o[a])))return!1;return!0}(t,e);default:return ce()}}function ca(t,e){return(t.values||[]).find(n=>si(n,e))!==void 0}function kr(t,e){if(t===e)return 0;const n=Os(t),i=Os(e);if(n!==i)return $e(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return $e(t.booleanValue,e.booleanValue);case 2:return function(s,r){const o=yt(s.integerValue||s.doubleValue),a=yt(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return $y(t.timestampValue,e.timestampValue);case 4:return $y(aa(t),aa(e));case 5:return $e(t.stringValue,e.stringValue);case 6:return function(s,r){const o=Ls(s),a=Ls(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,r){const o=s.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=$e(o[l],a[l]);if(c!==0)return c}return $e(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,r){const o=$e(yt(s.latitude),yt(r.latitude));return o!==0?o:$e(yt(s.longitude),yt(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,r){const o=s.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=kr(o[l],a[l]);if(c)return c}return $e(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,r){if(s===fl.mapValue&&r===fl.mapValue)return 0;if(s===fl.mapValue)return 1;if(r===fl.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let d=0;d<a.length&&d<c.length;++d){const f=$e(a[d],c[d]);if(f!==0)return f;const m=kr(o[a[d]],l[c[d]]);if(m!==0)return m}return $e(a.length,c.length)}(t.mapValue,e.mapValue);default:throw ce()}}function $y(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return $e(t,e);const n=ts(t),i=ts(e),s=$e(n.seconds,i.seconds);return s!==0?s:$e(n.nanos,i.nanos)}function xr(t){return _d(t)}function _d(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(i){const s=ts(i);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ls(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,se.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(i){let s="[",r=!0;for(const o of i.values||[])r?r=!1:s+=",",s+=_d(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(i){const s=Object.keys(i.fields||{}).sort();let r="{",o=!0;for(const a of s)o?o=!1:r+=",",r+=`${a}:${_d(i.fields[a])}`;return r+"}"}(t.mapValue):ce();var e,n}function Hy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function wd(t){return!!t&&"integerValue"in t}function yp(t){return!!t&&"arrayValue"in t}function zy(t){return!!t&&"nullValue"in t}function jy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Al(t){return!!t&&"mapValue"in t}function Lo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Kr(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=Lo(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Lo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Jx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class In{constructor(e){this.value=e}static empty(){return new In({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!Al(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Lo(n)}setAll(e){let n=zt.emptyPath(),i={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,s),i={},s=[],n=a.popLast()}o?i[a.lastSegment()]=Lo(o):s.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(e){const n=this.field(e.popLast());Al(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return si(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=n.mapValue.fields[e.get(i)];Al(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,i){Kr(n,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new In(Lo(this.value))}}function Eb(t){const e=[];return Kr(t.fields,(n,i)=>{const s=new zt([n]);if(Al(i)){const r=Eb(i.mapValue).fields;if(r.length===0)e.push(s);else for(const o of r)e.push(s.child(o))}else e.push(s)}),new Mn(e)}/**
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
 */class $t{constructor(e,n,i,s,r,o,a){this.key=e,this.documentType=n,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new $t(e,0,de.min(),de.min(),de.min(),In.empty(),0)}static newFoundDocument(e,n,i,s){return new $t(e,1,n,de.min(),i,s,0)}static newNoDocument(e,n){return new $t(e,2,n,de.min(),de.min(),In.empty(),0)}static newUnknownDocument(e,n){return new $t(e,3,n,de.min(),de.min(),In.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(de.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=In.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=In.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=de.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class pc{constructor(e,n){this.position=e,this.inclusive=n}}function Wy(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(r.field.isKeyField()?i=se.comparator(se.fromName(o.referenceValue),n.key):i=kr(o,n.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function qy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!si(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Oo{constructor(e,n="asc"){this.field=e,this.dir=n}}function Zx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Tb{}class vt extends Tb{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new tR(e,n,i):n==="array-contains"?new sR(e,i):n==="in"?new rR(e,i):n==="not-in"?new oR(e,i):n==="array-contains-any"?new aR(e,i):new vt(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new nR(e,i):new iR(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(kr(n,this.value)):n!==null&&Os(this.value)===Os(n)&&this.matchesComparison(kr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ce()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Hn extends Tb{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new Hn(e,n)}matches(e){return Sb(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Sb(t){return t.op==="and"}function Ab(t){return eR(t)&&Sb(t)}function eR(t){for(const e of t.filters)if(e instanceof Hn)return!1;return!0}function bd(t){if(t instanceof vt)return t.field.canonicalString()+t.op.toString()+xr(t.value);if(Ab(t))return t.filters.map(e=>bd(e)).join(",");{const e=t.filters.map(n=>bd(n)).join(",");return`${t.op}(${e})`}}function kb(t,e){return t instanceof vt?function(n,i){return i instanceof vt&&n.op===i.op&&n.field.isEqual(i.field)&&si(n.value,i.value)}(t,e):t instanceof Hn?function(n,i){return i instanceof Hn&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((s,r,o)=>s&&kb(r,i.filters[o]),!0):!1}(t,e):void ce()}function xb(t){return t instanceof vt?function(e){return`${e.field.canonicalString()} ${e.op} ${xr(e.value)}`}(t):t instanceof Hn?function(e){return e.op.toString()+" {"+e.getFilters().map(xb).join(" ,")+"}"}(t):"Filter"}class tR extends vt{constructor(e,n,i){super(e,n,i),this.key=se.fromName(i.referenceValue)}matches(e){const n=se.comparator(e.key,this.key);return this.matchesComparison(n)}}class nR extends vt{constructor(e,n){super(e,"in",n),this.keys=Rb("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class iR extends vt{constructor(e,n){super(e,"not-in",n),this.keys=Rb("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Rb(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>se.fromName(i.referenceValue))}class sR extends vt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return yp(n)&&ca(n.arrayValue,this.value)}}class rR extends vt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ca(this.value.arrayValue,n)}}class oR extends vt{constructor(e,n){super(e,"not-in",n)}matches(e){if(ca(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ca(this.value.arrayValue,n)}}class aR extends vt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!yp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>ca(this.value.arrayValue,i))}}/**
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
 */class lR{constructor(e,n=null,i=[],s=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.dt=null}}function Ky(t,e=null,n=[],i=[],s=null,r=null,o=null){return new lR(t,e,n,i,s,r,o)}function vp(t){const e=ve(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>bd(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),lu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>xr(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>xr(i)).join(",")),e.dt=n}return e.dt}function _p(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Zx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!kb(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!qy(t.startAt,e.startAt)&&qy(t.endAt,e.endAt)}function Cd(t){return se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Va{constructor(e,n=null,i=[],s=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function cR(t,e,n,i,s,r,o,a){return new Va(t,e,n,i,s,r,o,a)}function wp(t){return new Va(t)}function Gy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Pb(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function bp(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Nb(t){return t.collectionGroup!==null}function mr(t){const e=ve(t);if(e.wt===null){e.wt=[];const n=bp(e),i=Pb(e);if(n!==null&&i===null)n.isKeyField()||e.wt.push(new Oo(n)),e.wt.push(new Oo(zt.keyField(),"asc"));else{let s=!1;for(const r of e.explicitOrderBy)e.wt.push(r),r.field.isKeyField()&&(s=!0);if(!s){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Oo(zt.keyField(),r))}}}return e.wt}function Ti(t){const e=ve(t);if(!e._t)if(e.limitType==="F")e._t=Ky(e.path,e.collectionGroup,mr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of mr(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Oo(r.field,o))}const i=e.endAt?new pc(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new pc(e.startAt.position,e.startAt.inclusive):null;e._t=Ky(e.path,e.collectionGroup,n,e.filters,e.limit,i,s)}return e._t}function Id(t,e){e.getFirstInequalityField(),bp(t);const n=t.filters.concat([e]);return new Va(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ed(t,e,n){return new Va(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function cu(t,e){return _p(Ti(t),Ti(e))&&t.limitType===e.limitType}function Db(t){return`${vp(Ti(t))}|lt:${t.limitType}`}function Td(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>xb(i)).join(", ")}]`),lu(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>xr(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>xr(i)).join(",")),`Target(${n})`}(Ti(t))}; limitType=${t.limitType})`}function uu(t,e){return e.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):se.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,i){for(const s of mr(n))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(n,i){return!(n.startAt&&!function(s,r,o){const a=Wy(s,r,o);return s.inclusive?a<=0:a<0}(n.startAt,mr(n),i)||n.endAt&&!function(s,r,o){const a=Wy(s,r,o);return s.inclusive?a>=0:a>0}(n.endAt,mr(n),i))}(t,e)}function uR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Lb(t){return(e,n)=>{let i=!1;for(const s of mr(t)){const r=hR(s,e,n);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function hR(t,e,n){const i=t.field.isKeyField()?se.comparator(e.key,n.key):function(s,r,o){const a=r.data.field(s),l=o.data.field(s);return a!==null&&l!==null?kr(a,l):ce()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return ce()}}/**
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
 */class Gr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[n]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Kr(this.inner,(n,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return Cb(this.inner)}size(){return this.innerSize}}/**
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
 */const dR=new dt(se.comparator);function Si(){return dR}const Ob=new dt(se.comparator);function Co(...t){let e=Ob;for(const n of t)e=e.insert(n.key,n);return e}function Mb(t){let e=Ob;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function bs(){return Mo()}function Fb(){return Mo()}function Mo(){return new Gr(t=>t.toString(),(t,e)=>t.isEqual(e))}const fR=new dt(se.comparator),pR=new Gt(se.comparator);function ke(...t){let e=pR;for(const n of t)e=e.add(n);return e}const mR=new Gt($e);function gR(){return mR}/**
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
 */function Bb(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fc(e)?"-0":e}}function Ub(t){return{integerValue:""+t}}function yR(t,e){return Yx(e)?Ub(e):Bb(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class hu{constructor(){this._=void 0}}function vR(t,e,n){return t instanceof mc?function(i,s){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&mp(s)&&(s=gp(s)),s&&(r.fields.__previous_value__=s),{mapValue:r}}(n,e):t instanceof ua?$b(t,e):t instanceof ha?Hb(t,e):function(i,s){const r=Vb(i,s),o=Yy(r)+Yy(i.gt);return wd(r)&&wd(i.gt)?Ub(o):Bb(i.serializer,o)}(t,e)}function _R(t,e,n){return t instanceof ua?$b(t,e):t instanceof ha?Hb(t,e):n}function Vb(t,e){return t instanceof gc?wd(n=e)||function(i){return!!i&&"doubleValue"in i}(n)?e:{integerValue:0}:null;var n}class mc extends hu{}class ua extends hu{constructor(e){super(),this.elements=e}}function $b(t,e){const n=zb(e);for(const i of t.elements)n.some(s=>si(s,i))||n.push(i);return{arrayValue:{values:n}}}class ha extends hu{constructor(e){super(),this.elements=e}}function Hb(t,e){let n=zb(e);for(const i of t.elements)n=n.filter(s=>!si(s,i));return{arrayValue:{values:n}}}class gc extends hu{constructor(e,n){super(),this.serializer=e,this.gt=n}}function Yy(t){return yt(t.integerValue||t.doubleValue)}function zb(t){return yp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function wR(t,e){return t.field.isEqual(e.field)&&function(n,i){return n instanceof ua&&i instanceof ua||n instanceof ha&&i instanceof ha?Ar(n.elements,i.elements,si):n instanceof gc&&i instanceof gc?si(n.gt,i.gt):n instanceof mc&&i instanceof mc}(t.transform,e.transform)}class bR{constructor(e,n){this.version=e,this.transformResults=n}}class _i{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new _i}static exists(e){return new _i(void 0,e)}static updateTime(e){return new _i(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function kl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class du{}function jb(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new qb(t.key,_i.none()):new $a(t.key,t.data,_i.none());{const n=t.data,i=In.empty();let s=new Gt(zt.comparator);for(let r of e.fields)if(!s.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new $s(t.key,i,new Mn(s.toArray()),_i.none())}}function CR(t,e,n){t instanceof $a?function(i,s,r){const o=i.value.clone(),a=Xy(i.fieldTransforms,s,r.transformResults);o.setAll(a),s.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof $s?function(i,s,r){if(!kl(i.precondition,s))return void s.convertToUnknownDocument(r.version);const o=Xy(i.fieldTransforms,s,r.transformResults),a=s.data;a.setAll(Wb(i)),a.setAll(o),s.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(i,s,r){s.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function Fo(t,e,n,i){return t instanceof $a?function(s,r,o,a){if(!kl(s.precondition,r))return o;const l=s.value.clone(),c=Jy(s.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,i):t instanceof $s?function(s,r,o,a){if(!kl(s.precondition,r))return o;const l=Jy(s.fieldTransforms,a,r),c=r.data;return c.setAll(Wb(s)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(d=>d.field))}(t,e,n,i):function(s,r,o){return kl(s.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function IR(t,e){let n=null;for(const i of t.fieldTransforms){const s=e.data.field(i.field),r=Vb(i.transform,s||null);r!=null&&(n===null&&(n=In.empty()),n.set(i.field,r))}return n||null}function Qy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Ar(n,i,(s,r)=>wR(s,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class $a extends du{constructor(e,n,i,s=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class $s extends du{constructor(e,n,i,s,r=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Wb(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function Xy(t,e,n){const i=new Map;nt(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,_R(o,a,n[s]))}return i}function Jy(t,e,n){const i=new Map;for(const s of t){const r=s.transform,o=n.data.field(s.field);i.set(s.field,vR(r,o,e))}return i}class qb extends du{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ER extends du{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class TR{constructor(e,n,i,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&CR(r,e,i[s])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=Fo(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=Fo(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=Fb();return this.mutations.forEach(s=>{const r=e.get(s.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(s.key)?null:a;const l=jb(o,a);l!==null&&i.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(de.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ke())}isEqual(e){return this.batchId===e.batchId&&Ar(this.mutations,e.mutations,(n,i)=>Qy(n,i))&&Ar(this.baseMutations,e.baseMutations,(n,i)=>Qy(n,i))}}class Cp{constructor(e,n,i,s){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=s}static from(e,n,i){nt(e.mutations.length===i.length);let s=fR;const r=e.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new Cp(e,n,i,s)}}/**
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
 */class SR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class AR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var gt,Le;function kR(t){switch(t){default:return ce();case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0}}function Kb(t){if(t===void 0)return Ei("GRPC error has no .code"),x.UNKNOWN;switch(t){case gt.OK:return x.OK;case gt.CANCELLED:return x.CANCELLED;case gt.UNKNOWN:return x.UNKNOWN;case gt.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case gt.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case gt.INTERNAL:return x.INTERNAL;case gt.UNAVAILABLE:return x.UNAVAILABLE;case gt.UNAUTHENTICATED:return x.UNAUTHENTICATED;case gt.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case gt.NOT_FOUND:return x.NOT_FOUND;case gt.ALREADY_EXISTS:return x.ALREADY_EXISTS;case gt.PERMISSION_DENIED:return x.PERMISSION_DENIED;case gt.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case gt.ABORTED:return x.ABORTED;case gt.OUT_OF_RANGE:return x.OUT_OF_RANGE;case gt.UNIMPLEMENTED:return x.UNIMPLEMENTED;case gt.DATA_LOSS:return x.DATA_LOSS;default:return ce()}}(Le=gt||(gt={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Ip{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return pl}static getOrCreateInstance(){return pl===null&&(pl=new Ip),pl}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let pl=null;/**
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
 */function xR(){return new TextEncoder}/**
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
 */const RR=new pr([4294967295,4294967295],0);function Zy(t){const e=xR().encode(t),n=new Lx;return n.update(e),new Uint8Array(n.digest())}function e1(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new pr([n,i],0),new pr([s,r],0)]}class Ep{constructor(e,n,i){if(this.bitmap=e,this.padding=n,this.hashCount=i,n<0||n>=8)throw new Io(`Invalid padding: ${n}`);if(i<0)throw new Io(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Io(`Invalid hash count: ${i}`);if(e.length===0&&n!==0)throw new Io(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=pr.fromNumber(this.It)}Et(e,n,i){let s=e.add(n.multiply(pr.fromNumber(i)));return s.compare(RR)===1&&(s=new pr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=Zy(e),[i,s]=e1(n);for(let r=0;r<this.hashCount;r++){const o=this.Et(i,s,r);if(!this.At(o))return!1}return!0}static create(e,n,i){const s=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new Ep(r,s,n);return i.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=Zy(e),[i,s]=e1(n);for(let r=0;r<this.hashCount;r++){const o=this.Et(i,s,r);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),i=e%8;this.bitmap[n]|=1<<i}}class Io extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class fu{constructor(e,n,i,s,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const s=new Map;return s.set(e,Ha.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new fu(de.min(),s,new dt($e),Si(),ke())}}class Ha{constructor(e,n,i,s,r){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new Ha(i,n,ke(),ke(),ke())}}/**
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
 */class xl{constructor(e,n,i,s){this.Pt=e,this.removedTargetIds=n,this.key=i,this.bt=s}}class Gb{constructor(e,n){this.targetId=e,this.Vt=n}}class Yb{constructor(e,n,i=Qt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=s}}class t1{constructor(){this.St=0,this.Dt=i1(),this.Ct=Qt.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=ke(),n=ke(),i=ke();return this.Dt.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:i=i.add(s);break;default:ce()}}),new Ha(this.Ct,this.xt,e,n,i)}Ft(){this.Nt=!1,this.Dt=i1()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class PR{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Si(),this.zt=n1(),this.Wt=new dt($e)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const i=this.Zt(n);switch(e.state){case 0:this.te(n)&&i.$t(e.resumeToken);break;case 1:i.Ut(),i.kt||i.Ft(),i.$t(e.resumeToken);break;case 2:i.Ut(),i.kt||this.removeTarget(n);break;case 3:this.te(n)&&(i.Kt(),i.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),i.$t(e.resumeToken));break;default:ce()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((i,s)=>{this.te(s)&&n(s)})}ne(e){var n;const i=e.targetId,s=e.Vt.count,r=this.se(i);if(r){const o=r.target;if(Cd(o))if(s===0){const a=new se(o.path);this.Yt(i,a,$t.newNoDocument(a,de.min()))}else nt(s===1);else{const a=this.ie(i);if(a!==s){const l=this.re(e,a);if(l!==0){this.ee(i);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(i,c)}(n=Ip.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(c,d,f){var m,y,b,C,S,B;const U={localCacheCount:d,existenceFilterCount:f.count},W=f.unchangedNames;return W&&(U.bloomFilter={applied:c===0,hashCount:(m=W==null?void 0:W.hashCount)!==null&&m!==void 0?m:0,bitmapLength:(C=(b=(y=W==null?void 0:W.bits)===null||y===void 0?void 0:y.bitmap)===null||b===void 0?void 0:b.length)!==null&&C!==void 0?C:0,padding:(B=(S=W==null?void 0:W.bits)===null||S===void 0?void 0:S.padding)!==null&&B!==void 0?B:0}),U}(l,a,e.Vt))}}}}re(e,n){const{unchangedNames:i,count:s}=e.Vt;if(!i||!i.bits)return 1;const{bits:{bitmap:r="",padding:o=0},hashCount:a=0}=i;let l,c;try{l=Ls(r).toUint8Array()}catch(d){if(d instanceof Ib)return Sr("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw d}try{c=new Ep(l,o,a)}catch(d){return Sr(d instanceof Io?"BloomFilter error: ":"Applying bloom filter failed: ",d),1}return c.It===0?1:s!==n-this.oe(e.targetId,c)?2:0}oe(e,n){const i=this.Gt.getRemoteKeysForTarget(e);let s=0;return i.forEach(r=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;n.vt(a)||(this.Yt(e,r,null),s++)}),s}ce(e){const n=new Map;this.Qt.forEach((r,o)=>{const a=this.se(o);if(a){if(r.current&&Cd(a.target)){const l=new se(a.target.path);this.jt.get(l)!==null||this.ae(o,l)||this.Yt(o,l,$t.newNoDocument(l,e))}r.Mt&&(n.set(o,r.Ot()),r.Ft())}});let i=ke();this.zt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.se(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(i=i.add(r))}),this.jt.forEach((r,o)=>o.setReadTime(e));const s=new fu(e,n,this.Wt,this.jt,i);return this.jt=Si(),this.zt=n1(),this.Wt=new dt($e),s}Jt(e,n){if(!this.te(e))return;const i=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,i),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,i){if(!this.te(e))return;const s=this.Zt(e);this.ae(e,n)?s.Bt(n,1):s.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),i&&(this.jt=this.jt.insert(n,i))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new t1,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new Gt($e),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new t1),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function n1(){return new dt(se.comparator)}function i1(){return new dt(se.comparator)}const NR=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),DR=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),LR=(()=>({and:"AND",or:"OR"}))();class OR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Sd(t,e){return t.useProto3Json||lu(e)?e:{value:e}}function yc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Qb(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function MR(t,e){return yc(t,e.toTimestamp())}function Zn(t){return nt(!!t),de.fromTimestamp(function(e){const n=ts(e);return new _t(n.seconds,n.nanos)}(t))}function Tp(t,e){return function(n){return new tt(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Xb(t){const e=tt.fromString(t);return nt(tC(e)),e}function Ad(t,e){return Tp(t.databaseId,e.path)}function fh(t,e){const n=Xb(e);if(n.get(1)!==t.databaseId.projectId)throw new X(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new X(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new se(Jb(n))}function kd(t,e){return Tp(t.databaseId,e)}function FR(t){const e=Xb(t);return e.length===4?tt.emptyPath():Jb(e)}function xd(t){return new tt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Jb(t){return nt(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function s1(t,e,n){return{name:Ad(t,e),fields:n.value.mapValue.fields}}function BR(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:ce()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(l,c){return l.useProto3Json?(nt(c===void 0||typeof c=="string"),Qt.fromBase64String(c||"")):(nt(c===void 0||c instanceof Uint8Array),Qt.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?x.UNKNOWN:Kb(l.code);return new X(c,l.message||"")}(o);n=new Yb(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=fh(t,i.document.name),r=Zn(i.document.updateTime),o=i.document.createTime?Zn(i.document.createTime):de.min(),a=new In({mapValue:{fields:i.document.fields}}),l=$t.newFoundDocument(s,r,o,a),c=i.targetIds||[],d=i.removedTargetIds||[];n=new xl(c,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=fh(t,i.document),r=i.readTime?Zn(i.readTime):de.min(),o=$t.newNoDocument(s,r),a=i.removedTargetIds||[];n=new xl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=fh(t,i.document),r=i.removedTargetIds||[];n=new xl([],r,s,null)}else{if(!("filter"in e))return ce();{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,o=new AR(s,r),a=i.targetId;n=new Gb(a,o)}}return n}function UR(t,e){let n;if(e instanceof $a)n={update:s1(t,e.key,e.value)};else if(e instanceof qb)n={delete:Ad(t,e.key)};else if(e instanceof $s)n={update:s1(t,e.key,e.data),updateMask:GR(e.fieldMask)};else{if(!(e instanceof ER))return ce();n={verify:Ad(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(s,r){const o=r.transform;if(o instanceof mc)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ua)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ha)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof gc)return{fieldPath:r.field.canonicalString(),increment:o.gt};throw ce()}(0,i))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:MR(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ce()}(t,e.precondition)),n}function VR(t,e){return t&&t.length>0?(nt(e!==void 0),t.map(n=>function(i,s){let r=i.updateTime?Zn(i.updateTime):Zn(s);return r.isEqual(de.min())&&(r=Zn(s)),new bR(r,i.transformResults||[])}(n,e))):[]}function $R(t,e){return{documents:[kd(t,e.path)]}}function HR(t,e){const n={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(n.parent=kd(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=kd(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(l){if(l.length!==0)return eC(Hn.create(l,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const r=function(l){if(l.length!==0)return l.map(c=>function(d){return{field:Js(d.field),direction:WR(d.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=Sd(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function zR(t){let e=FR(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){nt(i===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let r=[];n.where&&(r=function(d){const f=Zb(d);return f instanceof Hn&&Ab(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(d=>function(f){return new Oo(Zs(f.field),function(m){switch(m){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(d)));let a=null;n.limit&&(a=function(d){let f;return f=typeof d=="object"?d.value:d,lu(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(d){const f=!!d.before,m=d.values||[];return new pc(m,f)}(n.startAt));let c=null;return n.endAt&&(c=function(d){const f=!d.before,m=d.values||[];return new pc(m,f)}(n.endAt)),cR(e,s,o,r,a,"F",l,c)}function jR(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ce()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Zb(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Zs(e.unaryFilter.field);return vt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=Zs(e.unaryFilter.field);return vt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Zs(e.unaryFilter.field);return vt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Zs(e.unaryFilter.field);return vt.create(r,"!=",{nullValue:"NULL_VALUE"});default:return ce()}}(t):t.fieldFilter!==void 0?function(e){return vt.create(Zs(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ce()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Hn.create(e.compositeFilter.filters.map(n=>Zb(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return ce()}}(e.compositeFilter.op))}(t):ce()}function WR(t){return NR[t]}function qR(t){return DR[t]}function KR(t){return LR[t]}function Js(t){return{fieldPath:t.canonicalString()}}function Zs(t){return zt.fromServerFormat(t.fieldPath)}function eC(t){return t instanceof vt?function(e){if(e.op==="=="){if(jy(e.value))return{unaryFilter:{field:Js(e.field),op:"IS_NAN"}};if(zy(e.value))return{unaryFilter:{field:Js(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(jy(e.value))return{unaryFilter:{field:Js(e.field),op:"IS_NOT_NAN"}};if(zy(e.value))return{unaryFilter:{field:Js(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Js(e.field),op:qR(e.op),value:e.value}}}(t):t instanceof Hn?function(e){const n=e.getFilters().map(i=>eC(i));return n.length===1?n[0]:{compositeFilter:{op:KR(e.op),filters:n}}}(t):ce()}function GR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function tC(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Hi{constructor(e,n,i,s,r=de.min(),o=de.min(),a=Qt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Hi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Hi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Hi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Hi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class YR{constructor(e){this.fe=e}}function QR(t){const e=zR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ed(e,e.limit,"L"):e}/**
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
 */class XR{constructor(){this.rn=new JR}addToCollectionParentIndex(e,n){return this.rn.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(es.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(es.min())}updateCollectionGroup(e,n,i){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class JR{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n]||new Gt(tt.comparator),r=!s.has(i);return this.index[n]=s.add(i),r}has(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(e){return(this.index[e]||new Gt(tt.comparator)).toArray()}}/**
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
 */class Rr{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Rr(0)}static Mn(){return new Rr(-1)}}/**
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
 */class ZR{constructor(){this.changes=new Gr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,$t.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?F.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class eP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class tP{constructor(e,n,i,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(i!==null&&Fo(i.mutation,s,Mn.empty(),_t.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,ke()).next(()=>i))}getLocalViewOfDocuments(e,n,i=ke()){const s=bs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,i).next(r=>{let o=Co();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const i=bs();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,ke()))}populateOverlays(e,n,i){const s=[];return i.forEach(r=>{n.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(e,s).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,i,s){let r=Si();const o=Mo(),a=Mo();return n.forEach((l,c)=>{const d=i.get(c.key);s.has(c.key)&&(d===void 0||d.mutation instanceof $s)?r=r.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Fo(d.mutation,c,d.mutation.getFieldMask(),_t.now())):o.set(c.key,Mn.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var f;return a.set(c,new eP(d,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const i=Mo();let s=new dt((o,a)=>o-a),r=ke();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let d=i.get(l)||Mn.empty();d=a.applyToLocalView(c,d),i.set(l,d);const f=(s.get(a.batchId)||ke()).add(l);s=s.insert(a.batchId,f)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,d=l.value,f=Fb();d.forEach(m=>{if(!r.has(m)){const y=jb(n.get(m),i.get(m));y!==null&&f.set(m,y),r=r.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return F.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i){return function(s){return se.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Nb(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i):this.getDocumentsMatchingCollectionQuery(e,n,i)}getNextDocuments(e,n,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,s).next(r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,s-r.size):F.resolve(bs());let a=-1,l=r;return o.next(c=>F.forEach(c,(d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),r.get(d)?F.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{l=l.insert(d,m)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,ke())).next(d=>({batchId:a,changes:Mb(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new se(n)).next(i=>{let s=Co();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,i){const s=n.collectionGroup;let r=Co();return this.indexManager.getCollectionParents(e,s).next(o=>F.forEach(o,a=>{const l=function(c,d){return new Va(d,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,l,i).next(c=>{c.forEach((d,f)=>{r=r.insert(d,f)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(r=>(s=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,s))).next(r=>{s.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,$t.newInvalidDocument(c)))});let o=Co();return r.forEach((a,l)=>{const c=s.get(a);c!==void 0&&Fo(c.mutation,l,Mn.empty(),_t.now()),uu(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class nP{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return F.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var i;return this.cs.set(n.id,{id:(i=n).id,version:i.version,createTime:Zn(i.createTime)}),F.resolve()}getNamedQuery(e,n){return F.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(i){return{name:i.name,query:QR(i.bundledQuery),readTime:Zn(i.readTime)}}(n)),F.resolve()}}/**
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
 */class iP{constructor(){this.overlays=new dt(se.comparator),this.ls=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const i=bs();return F.forEach(n,s=>this.getOverlay(e,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((s,r)=>{this.we(e,n,r)}),F.resolve()}removeOverlaysForBatchId(e,n,i){const s=this.ls.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.ls.delete(i)),F.resolve()}getOverlaysForCollection(e,n,i){const s=bs(),r=n.length+1,o=new se(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>i&&s.set(l.getKey(),l)}return F.resolve(s)}getOverlaysForCollectionGroup(e,n,i,s){let r=new dt((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>i){let d=r.get(c.largestBatchId);d===null&&(d=bs(),r=r.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=bs(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=s)););return F.resolve(a)}we(e,n,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.ls.get(s.largestBatchId).delete(i.key);this.ls.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new SR(n,i));let r=this.ls.get(n);r===void 0&&(r=ke(),this.ls.set(n,r)),this.ls.set(n,r.add(i.key))}}/**
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
 */class Sp{constructor(){this.fs=new Gt(Ct.ds),this.ws=new Gt(Ct._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const i=new Ct(e,n);this.fs=this.fs.add(i),this.ws=this.ws.add(i)}gs(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.ys(new Ct(e,n))}ps(e,n){e.forEach(i=>this.removeReference(i,n))}Is(e){const n=new se(new tt([])),i=new Ct(n,e),s=new Ct(n,e+1),r=[];return this.ws.forEachInRange([i,s],o=>{this.ys(o),r.push(o.key)}),r}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new se(new tt([])),i=new Ct(n,e),s=new Ct(n,e+1);let r=ke();return this.ws.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Ct(e,0),i=this.fs.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class Ct{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return se.comparator(e.key,n.key)||$e(e.As,n.As)}static _s(e,n){return $e(e.As,n.As)||se.comparator(e.key,n.key)}}/**
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
 */class sP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new Gt(Ct.ds)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,s){const r=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new TR(r,n,i,s);this.mutationQueue.push(o);for(const a of s)this.Rs=this.Rs.add(new Ct(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,s=this.bs(i),r=s<0?0:s;return F.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new Ct(n,0),s=new Ct(n,Number.POSITIVE_INFINITY),r=[];return this.Rs.forEachInRange([i,s],o=>{const a=this.Ps(o.As);r.push(a)}),F.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new Gt($e);return n.forEach(s=>{const r=new Ct(s,0),o=new Ct(s,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([r,o],a=>{i=i.add(a.As)})}),F.resolve(this.Vs(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,s=i.length+1;let r=i;se.isDocumentKey(r)||(r=r.child(""));const o=new Ct(new se(r),0);let a=new Gt($e);return this.Rs.forEachWhile(l=>{const c=l.key.path;return!!i.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.As)),!0)},o),F.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(i=>{const s=this.Ps(i);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){nt(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this.Rs;return F.forEach(n.mutations,s=>{const r=new Ct(s.key,n.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Rs=i})}Cn(e){}containsKey(e,n){const i=new Ct(n,0),s=this.Rs.firstAfterOrEqual(i);return F.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class rP{constructor(e){this.Ds=e,this.docs=new dt(se.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,s=this.docs.get(i),r=s?s.size:0,o=this.Ds(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return F.resolve(i?i.document.mutableCopy():$t.newInvalidDocument(n))}getEntries(e,n){let i=Si();return n.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():$t.newInvalidDocument(s))}),F.resolve(i)}getDocumentsMatchingQuery(e,n,i,s){let r=Si();const o=n.path,a=new se(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:d}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||qx(Wx(d),i)<=0||(s.has(d.key)||uu(n,d))&&(r=r.insert(d.key,d.mutableCopy()))}return F.resolve(r)}getAllFromCollectionGroup(e,n,i,s){ce()}Cs(e,n){return F.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new oP(this)}getSize(e){return F.resolve(this.size)}}class oP extends ZR{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?n.push(this.os.addEntry(e,s)):this.os.removeEntry(i)}),F.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
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
 */class aP{constructor(e){this.persistence=e,this.xs=new Gr(n=>vp(n),_p),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Sp,this.targetCount=0,this.Ms=Rr.kn()}forEachTarget(e,n){return this.xs.forEach((i,s)=>n(s)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Ns&&(this.Ns=n),F.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new Rr(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Fn(n),F.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,i){let s=0;const r=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.xs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),F.waitFor(r).next(()=>s)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const i=this.xs.get(n)||null;return F.resolve(i)}addMatchingKeys(e,n,i){return this.ks.gs(n,i),F.resolve()}removeMatchingKeys(e,n,i){this.ks.ps(n,i);const s=this.persistence.referenceDelegate,r=[];return s&&n.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),F.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),F.resolve()}getMatchingKeysForTargetId(e,n){const i=this.ks.Es(n);return F.resolve(i)}containsKey(e,n){return F.resolve(this.ks.containsKey(n))}}/**
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
 */class lP{constructor(e,n){this.$s={},this.overlays={},this.Os=new pp(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new aP(this),this.indexManager=new XR,this.remoteDocumentCache=function(i){return new rP(i)}(i=>this.referenceDelegate.Ls(i)),this.serializer=new YR(n),this.qs=new nP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new iP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.$s[e.toKey()];return i||(i=new sP(n,this.referenceDelegate),this.$s[e.toKey()]=i),i}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,i){ee("MemoryPersistence","Starting transaction:",e);const s=new cP(this.Os.next());return this.referenceDelegate.Us(),i(s).next(r=>this.referenceDelegate.Ks(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Gs(e,n){return F.or(Object.values(this.$s).map(i=>()=>i.containsKey(e,n)))}}class cP extends Gx{constructor(e){super(),this.currentSequenceNumber=e}}class Ap{constructor(e){this.persistence=e,this.Qs=new Sp,this.js=null}static zs(e){return new Ap(e)}get Ws(){if(this.js)return this.js;throw ce()}addReference(e,n,i){return this.Qs.addReference(i,n),this.Ws.delete(i.toString()),F.resolve()}removeReference(e,n,i){return this.Qs.removeReference(i,n),this.Ws.add(i.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),F.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(s=>this.Ws.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(r=>this.Ws.add(r.toString()))}).next(()=>i.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Ws,i=>{const s=se.fromPath(i);return this.Hs(e,s).next(r=>{r||n.removeEntry(s,de.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(i=>{i?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return F.or([()=>F.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
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
 */class kp{constructor(e,n,i,s){this.targetId=e,this.fromCache=n,this.Fi=i,this.Bi=s}static Li(e,n){let i=ke(),s=ke();for(const r of n.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new kp(e,n.fromCache,i,s)}}/**
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
 */class uP{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,i,s){return this.Ki(e,n).next(r=>r||this.Gi(e,n,s,i)).next(r=>r||this.Qi(e,n))}Ki(e,n){if(Gy(n))return F.resolve(null);let i=Ti(n);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ed(n,null,"F"),i=Ti(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(r=>{const o=ke(...r);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(l=>{const c=this.ji(n,a);return this.zi(n,c,o,l.readTime)?this.Ki(e,Ed(n,null,"F")):this.Wi(e,c,n,l)}))})))}Gi(e,n,i,s){return Gy(n)||s.isEqual(de.min())?this.Qi(e,n):this.Ui.getDocuments(e,i).next(r=>{const o=this.ji(n,r);return this.zi(n,o,i,s)?this.Qi(e,n):(By()<=Be.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Td(n)),this.Wi(e,o,n,jx(s,-1)))})}ji(e,n){let i=new Gt(Lb(e));return n.forEach((s,r)=>{uu(e,r)&&(i=i.add(r))}),i}zi(e,n,i,s){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Qi(e,n){return By()<=Be.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",Td(n)),this.Ui.getDocumentsMatchingQuery(e,n,es.min())}Wi(e,n,i,s){return this.Ui.getDocumentsMatchingQuery(e,i,s).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class hP{constructor(e,n,i,s){this.persistence=e,this.Hi=n,this.serializer=s,this.Ji=new dt($e),this.Yi=new Gr(r=>vp(r),_p),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(i)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new tP(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function dP(t,e,n,i){return new hP(t,e,n,i)}async function nC(t,e){const n=ve(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let s;return n.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,n.tr(e),n.mutationQueue.getAllMutationBatches(i))).next(r=>{const o=[],a=[];let l=ke();for(const c of s){o.push(c.batchId);for(const d of c.mutations)l=l.add(d.key)}for(const c of r){a.push(c.batchId);for(const d of c.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(i,l).next(c=>({er:c,removedBatchIds:o,addedBatchIds:a}))})})}function fP(t,e){const n=ve(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const d=l.batch,f=d.keys();let m=F.resolve();return f.forEach(y=>{m=m.next(()=>c.getEntry(a,y)).next(b=>{const C=l.docVersions.get(y);nt(C!==null),b.version.compareTo(C)<0&&(d.applyToRemoteDocument(b,l),b.isValidDocument()&&(b.setReadTime(l.commitVersion),c.addEntry(b)))})}),m.next(()=>o.mutationQueue.removeMutationBatch(a,d))}(n,i,e,r).next(()=>r.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(o){let a=ke();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(i,s))})}function iC(t){const e=ve(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function pP(t,e){const n=ve(t),i=e.snapshotVersion;let s=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});s=n.Ji;const a=[];e.targetChanges.forEach((d,f)=>{const m=s.get(f);if(!m)return;a.push(n.Bs.removeMatchingKeys(r,d.removedDocuments,f).next(()=>n.Bs.addMatchingKeys(r,d.addedDocuments,f)));let y=m.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(f)!==null?y=y.withResumeToken(Qt.EMPTY_BYTE_STRING,de.min()).withLastLimboFreeSnapshotVersion(de.min()):d.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(d.resumeToken,i)),s=s.insert(f,y),function(b,C,S){return b.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(m,y,d)&&a.push(n.Bs.updateTargetData(r,y))});let l=Si(),c=ke();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,d))}),a.push(mP(r,o,e.documentUpdates).next(d=>{l=d.nr,c=d.sr})),!i.isEqual(de.min())){const d=n.Bs.getLastRemoteSnapshotVersion(r).next(f=>n.Bs.setTargetsMetadata(r,r.currentSequenceNumber,i));a.push(d)}return F.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Ji=s,r))}function mP(t,e,n){let i=ke(),s=ke();return n.forEach(r=>i=i.add(r)),e.getEntries(t,i).next(r=>{let o=Si();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(de.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):ee("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{nr:o,sr:s}})}function gP(t,e){const n=ve(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function yP(t,e){const n=ve(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return n.Bs.getTargetData(i,e).next(r=>r?(s=r,F.resolve(s)):n.Bs.allocateTargetId(i).next(o=>(s=new Hi(e,o,"TargetPurposeListen",i.currentSequenceNumber),n.Bs.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=n.Ji.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(i.targetId,i),n.Yi.set(e,i.targetId)),i})}async function Rd(t,e,n){const i=ve(t),s=i.Ji.get(e),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,o=>i.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ua(o))throw o;ee("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.Ji=i.Ji.remove(e),i.Yi.delete(s.target)}function r1(t,e,n){const i=ve(t);let s=de.min(),r=ke();return i.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const d=ve(a),f=d.Yi.get(c);return f!==void 0?F.resolve(d.Ji.get(f)):d.Bs.getTargetData(l,c)}(i,o,Ti(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.Bs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>i.Hi.getDocumentsMatchingQuery(o,e,n?s:de.min(),n?r:ke())).next(a=>(vP(i,uR(e),a),{documents:a,ir:r})))}function vP(t,e,n){let i=t.Xi.get(e)||de.min();n.forEach((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)}),t.Xi.set(e,i)}class o1{constructor(){this.activeTargetIds=gR()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class _P{constructor(){this.Hr=new o1,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,i){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new o1,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class wP{Yr(e){}shutdown(){}}/**
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
 */class a1{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){ee("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){ee("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ml=null;function ph(){return ml===null?ml=268435456+Math.round(2147483648*Math.random()):ml++,"0x"+ml.toString(16)}/**
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
 */const bP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class CP{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
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
 */const Mt="WebChannelConnection";class IP extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,i,s,r){const o=ph(),a=this.To(e,n);ee("RestConnection",`Sending RPC '${e}' ${o}:`,a,i);const l={};return this.Eo(l,s,r),this.Ao(e,a,l,i).then(c=>(ee("RestConnection",`Received RPC '${e}' ${o}: `,c),c),c=>{throw Sr("RestConnection",`RPC '${e}' ${o} failed with error: `,c,"url: ",a,"request:",i),c})}vo(e,n,i,s,r,o){return this.Io(e,n,i,s,r)}Eo(e,n,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+qr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,r)=>e[r]=s),i&&i.headers.forEach((s,r)=>e[r]=s)}To(e,n){const i=bP[e];return`${this.mo}/v1/${n}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,i,s){const r=ph();return new Promise((o,a)=>{const l=new Dx;l.setWithCredentials(!0),l.listenOnce(Rx.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case dh.NO_ERROR:const d=l.getResponseJson();ee(Mt,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(d)),o(d);break;case dh.TIMEOUT:ee(Mt,`RPC '${e}' ${r} timed out`),a(new X(x.DEADLINE_EXCEEDED,"Request time out"));break;case dh.HTTP_ERROR:const f=l.getStatus();if(ee(Mt,`RPC '${e}' ${r} failed with status:`,f,"response text:",l.getResponseText()),f>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const y=m==null?void 0:m.error;if(y&&y.status&&y.message){const b=function(C){const S=C.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(S)>=0?S:x.UNKNOWN}(y.status);a(new X(b,y.message))}else a(new X(x.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new X(x.UNAVAILABLE,"Connection failed."));break;default:ce()}}finally{ee(Mt,`RPC '${e}' ${r} completed.`)}});const c=JSON.stringify(s);ee(Mt,`RPC '${e}' ${r} sending request:`,s),l.send(n,"POST",c,i,15)})}Ro(e,n,i){const s=ph(),r=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=kx(),a=xx(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new Nx({})),this.Eo(l.initMessageHeaders,n,i),l.encodeInitMessageHeaders=!0;const d=r.join("");ee(Mt,`Creating RPC '${e}' stream ${s}: ${d}`,l);const f=o.createWebChannel(d,l);let m=!1,y=!1;const b=new CP({ro:S=>{y?ee(Mt,`Not sending because RPC '${e}' stream ${s} is closed:`,S):(m||(ee(Mt,`Opening RPC '${e}' stream ${s} transport.`),f.open(),m=!0),ee(Mt,`RPC '${e}' stream ${s} sending:`,S),f.send(S))},oo:()=>f.close()}),C=(S,B,U)=>{S.listen(B,W=>{try{U(W)}catch(M){setTimeout(()=>{throw M},0)}})};return C(f,hl.EventType.OPEN,()=>{y||ee(Mt,`RPC '${e}' stream ${s} transport opened.`)}),C(f,hl.EventType.CLOSE,()=>{y||(y=!0,ee(Mt,`RPC '${e}' stream ${s} transport closed`),b.wo())}),C(f,hl.EventType.ERROR,S=>{y||(y=!0,Sr(Mt,`RPC '${e}' stream ${s} transport errored:`,S),b.wo(new X(x.UNAVAILABLE,"The operation could not be completed")))}),C(f,hl.EventType.MESSAGE,S=>{var B;if(!y){const U=S.data[0];nt(!!U);const W=U,M=W.error||((B=W[0])===null||B===void 0?void 0:B.error);if(M){ee(Mt,`RPC '${e}' stream ${s} received error:`,M);const oe=M.status;let _e=function(te){const be=gt[te];if(be!==void 0)return Kb(be)}(oe),Re=M.message;_e===void 0&&(_e=x.INTERNAL,Re="Unknown error status: "+oe+" with message "+M.message),y=!0,b.wo(new X(_e,Re)),f.close()}else ee(Mt,`RPC '${e}' stream ${s} received:`,U),b._o(U)}}),C(a,Px.STAT_EVENT,S=>{S.stat===My.PROXY?ee(Mt,`RPC '${e}' stream ${s} detected buffering proxy`):S.stat===My.NOPROXY&&ee(Mt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{b.fo()},0),b}}function mh(){return typeof document<"u"?document:null}/**
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
 */function pu(t){return new OR(t,!0)}/**
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
 */class sC{constructor(e,n,i=1e3,s=1.5,r=6e4){this.ii=e,this.timerId=n,this.Po=i,this.bo=s,this.Vo=r,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),i=Math.max(0,Date.now()-this.Co),s=Math.max(0,n-i);s>0&&ee("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,s,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class rC{constructor(e,n,i,s,r,o,a,l){this.ii=e,this.$o=i,this.Oo=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new sC(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===x.RESOURCE_EXHAUSTED?(Ei(n.toString()),Ei("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Fo===n&&this.Zo(i,s)},i=>{e(()=>{const s=new X(x.UNKNOWN,"Fetching auth token failed: "+i.message);return this.tu(s)})})}Zo(e,n){const i=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{i(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(s=>{i(()=>this.tu(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return ee("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(ee("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class EP extends rC{constructor(e,n,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=BR(this.serializer,e),i=function(s){if(!("targetChange"in s))return de.min();const r=s.targetChange;return r.targetIds&&r.targetIds.length?de.min():r.readTime?Zn(r.readTime):de.min()}(e);return this.listener.nu(n,i)}su(e){const n={};n.database=xd(this.serializer),n.addTarget=function(s,r){let o;const a=r.target;if(o=Cd(a)?{documents:$R(s,a)}:{query:HR(s,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0){o.resumeToken=Qb(s,r.resumeToken);const l=Sd(s,r.expectedCount);l!==null&&(o.expectedCount=l)}else if(r.snapshotVersion.compareTo(de.min())>0){o.readTime=yc(s,r.snapshotVersion.toTimestamp());const l=Sd(s,r.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const i=jR(this.serializer,e);i&&(n.labels=i),this.Wo(n)}iu(e){const n={};n.database=xd(this.serializer),n.removeTarget=e,this.Wo(n)}}class TP extends rC{constructor(e,n,i,s,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(nt(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=VR(e.writeResults,e.commitTime),i=Zn(e.commitTime);return this.listener.cu(i,n)}return nt(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=xd(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>UR(this.serializer,i))};this.Wo(n)}}/**
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
 */class SP extends class{}{constructor(e,n,i,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=s,this.lu=!1}fu(){if(this.lu)throw new X(x.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.connection.Io(e,n,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new X(x.UNKNOWN,s.toString())})}vo(e,n,i,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.vo(e,n,i,r,o,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new X(x.UNKNOWN,r.toString())})}terminate(){this.lu=!0}}class AP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Ei(n),this.mu=!1):ee("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class kP{constructor(e,n,i,s,r){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=r,this.Pu.Yr(o=>{i.enqueueAndForget(async()=>{Hs(this)&&(ee("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ve(a);l.vu.add(4),await za(l),l.bu.set("Unknown"),l.vu.delete(4),await mu(l)}(this))})}),this.bu=new AP(i,s)}}async function mu(t){if(Hs(t))for(const e of t.Ru)await e(!0)}async function za(t){for(const e of t.Ru)await e(!1)}function oC(t,e){const n=ve(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),Pp(n)?Rp(n):Yr(n).Ko()&&xp(n,e))}function aC(t,e){const n=ve(t),i=Yr(n);n.Au.delete(e),i.Ko()&&lC(n,e),n.Au.size===0&&(i.Ko()?i.jo():Hs(n)&&n.bu.set("Unknown"))}function xp(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(de.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Yr(t).su(e)}function lC(t,e){t.Vu.qt(e),Yr(t).iu(e)}function Rp(t){t.Vu=new PR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),Yr(t).start(),t.bu.gu()}function Pp(t){return Hs(t)&&!Yr(t).Uo()&&t.Au.size>0}function Hs(t){return ve(t).vu.size===0}function cC(t){t.Vu=void 0}async function xP(t){t.Au.forEach((e,n)=>{xp(t,e)})}async function RP(t,e){cC(t),Pp(t)?(t.bu.Iu(e),Rp(t)):t.bu.set("Unknown")}async function PP(t,e,n){if(t.bu.set("Online"),e instanceof Yb&&e.state===2&&e.cause)try{await async function(i,s){const r=s.cause;for(const o of s.targetIds)i.Au.has(o)&&(await i.remoteSyncer.rejectListen(o,r),i.Au.delete(o),i.Vu.removeTarget(o))}(t,e)}catch(i){ee("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await vc(t,i)}else if(e instanceof xl?t.Vu.Ht(e):e instanceof Gb?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(de.min()))try{const i=await iC(t.localStore);n.compareTo(i)>=0&&await function(s,r){const o=s.Vu.ce(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=s.Au.get(l);c&&s.Au.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach((a,l)=>{const c=s.Au.get(a);if(!c)return;s.Au.set(a,c.withResumeToken(Qt.EMPTY_BYTE_STRING,c.snapshotVersion)),lC(s,a);const d=new Hi(c.target,a,l,c.sequenceNumber);xp(s,d)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(i){ee("RemoteStore","Failed to raise snapshot:",i),await vc(t,i)}}async function vc(t,e,n){if(!Ua(e))throw e;t.vu.add(1),await za(t),t.bu.set("Offline"),n||(n=()=>iC(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ee("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await mu(t)})}function uC(t,e){return e().catch(n=>vc(t,n,e))}async function gu(t){const e=ve(t),n=ns(e);let i=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;NP(e);)try{const s=await gP(e.localStore,i);if(s===null){e.Eu.length===0&&n.jo();break}i=s.batchId,DP(e,s)}catch(s){await vc(e,s)}hC(e)&&dC(e)}function NP(t){return Hs(t)&&t.Eu.length<10}function DP(t,e){t.Eu.push(e);const n=ns(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function hC(t){return Hs(t)&&!ns(t).Uo()&&t.Eu.length>0}function dC(t){ns(t).start()}async function LP(t){ns(t).hu()}async function OP(t){const e=ns(t);for(const n of t.Eu)e.uu(n.mutations)}async function MP(t,e,n){const i=t.Eu.shift(),s=Cp.from(i,e,n);await uC(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await gu(t)}async function FP(t,e){e&&ns(t).ou&&await async function(n,i){if(s=i.code,kR(s)&&s!==x.ABORTED){const r=n.Eu.shift();ns(n).Qo(),await uC(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,i)),await gu(n)}var s}(t,e),hC(t)&&dC(t)}async function l1(t,e){const n=ve(t);n.asyncQueue.verifyOperationInProgress(),ee("RemoteStore","RemoteStore received new credentials");const i=Hs(n);n.vu.add(3),await za(n),i&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await mu(n)}async function BP(t,e){const n=ve(t);e?(n.vu.delete(2),await mu(n)):e||(n.vu.add(2),await za(n),n.bu.set("Unknown"))}function Yr(t){return t.Su||(t.Su=function(e,n,i){const s=ve(e);return s.fu(),new EP(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{uo:xP.bind(null,t),ao:RP.bind(null,t),nu:PP.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),Pp(t)?Rp(t):t.bu.set("Unknown")):(await t.Su.stop(),cC(t))})),t.Su}function ns(t){return t.Du||(t.Du=function(e,n,i){const s=ve(e);return s.fu(),new TP(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{uo:LP.bind(null,t),ao:FP.bind(null,t),au:OP.bind(null,t),cu:MP.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await gu(t)):(await t.Du.stop(),t.Eu.length>0&&(ee("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
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
 */class Np{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new vi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,a=new Np(e,n,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Dp(t,e){if(Ei("AsyncQueue",`${e}: ${t}`),Ua(t))return new X(x.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class gr{constructor(e){this.comparator=e?(n,i)=>e(n,i)||se.comparator(n.key,i.key):(n,i)=>se.comparator(n.key,i.key),this.keyedMap=Co(),this.sortedSet=new dt(this.comparator)}static emptySet(e){return new gr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof gr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new gr;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
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
 */class c1{constructor(){this.Cu=new dt(se.comparator)}track(e){const n=e.doc.key,i=this.Cu.get(n);i?e.type!==0&&i.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&i.type!==1?this.Cu=this.Cu.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Cu=this.Cu.remove(n):e.type===1&&i.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):ce():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,i)=>{e.push(i)}),e}}class Pr{constructor(e,n,i,s,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,i,s,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Pr(e,n,gr.emptySet(n),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&cu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==i[s].type||!n[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
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
 */class UP{constructor(){this.Nu=void 0,this.listeners=[]}}class VP{constructor(){this.queries=new Gr(e=>Db(e),cu),this.onlineState="Unknown",this.ku=new Set}}async function fC(t,e){const n=ve(t),i=e.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new UP),s)try{r.Nu=await n.onListen(i)}catch(o){const a=Dp(o,`Initialization of query '${Td(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,r),r.listeners.push(e),e.Mu(n.onlineState),r.Nu&&e.$u(r.Nu)&&Lp(n)}async function pC(t,e){const n=ve(t),i=e.query;let s=!1;const r=n.queries.get(i);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),s=r.listeners.length===0)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function $P(t,e){const n=ve(t);let i=!1;for(const s of e){const r=s.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.$u(s)&&(i=!0);o.Nu=s}}i&&Lp(n)}function HP(t,e,n){const i=ve(t),s=i.queries.get(e);if(s)for(const r of s.listeners)r.onError(n);i.queries.delete(e)}function Lp(t){t.ku.forEach(e=>{e.next()})}class mC{constructor(e,n,i){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=i||{}}$u(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new Pr(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const i=n!=="Offline";return(!this.options.Ku||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=Pr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
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
 */class gC{constructor(e){this.key=e}}class yC{constructor(e){this.key=e}}class zP{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=ke(),this.mutatedKeys=ke(),this.tc=Lb(e),this.ec=new gr(this.tc)}get nc(){return this.Yu}sc(e,n){const i=n?n.ic:new c1,s=n?n.ec:this.ec;let r=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,f)=>{const m=s.get(d),y=uu(this.query,f)?f:null,b=!!m&&this.mutatedKeys.has(m.key),C=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let S=!1;m&&y?m.data.isEqual(y.data)?b!==C&&(i.track({type:3,doc:y}),S=!0):this.rc(m,y)||(i.track({type:2,doc:y}),S=!0,(l&&this.tc(y,l)>0||c&&this.tc(y,c)<0)&&(a=!0)):!m&&y?(i.track({type:0,doc:y}),S=!0):m&&!y&&(i.track({type:1,doc:m}),S=!0,(l||c)&&(a=!0)),S&&(y?(o=o.add(y),r=C?r.add(d):r.delete(d)):(o=o.delete(d),r=r.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),r=r.delete(d.key),i.track({type:1,doc:d})}return{ec:o,ic:i,zi:a,mutatedKeys:r}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i){const s=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const r=e.ic.xu();r.sort((c,d)=>function(f,m){const y=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ce()}};return y(f)-y(m)}(c.type,d.type)||this.tc(c.doc,d.doc)),this.oc(i);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,l=a!==this.Xu;return this.Xu=a,r.length!==0||l?{snapshot:new Pr(this.query,e.ec,s,r,e.mutatedKeys,a===0,l,!1,!!i&&i.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new c1,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=ke(),this.ec.forEach(i=>{this.ac(i.key)&&(this.Zu=this.Zu.add(i.key))});const n=[];return e.forEach(i=>{this.Zu.has(i)||n.push(new yC(i))}),this.Zu.forEach(i=>{e.has(i)||n.push(new gC(i))}),n}hc(e){this.Yu=e.ir,this.Zu=ke();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return Pr.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class jP{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class WP{constructor(e){this.key=e,this.fc=!1}}class qP{constructor(e,n,i,s,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new Gr(a=>Db(a),cu),this._c=new Map,this.mc=new Set,this.gc=new dt(se.comparator),this.yc=new Map,this.Ic=new Sp,this.Tc={},this.Ec=new Map,this.Ac=Rr.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function KP(t,e){const n=i8(t);let i,s;const r=n.wc.get(e);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.lc();else{const o=await yP(n.localStore,Ti(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,s=await GP(n,e,i,a==="current",o.resumeToken),n.isPrimaryClient&&oC(n.remoteStore,o)}return s}async function GP(t,e,n,i,s){t.Rc=(f,m,y)=>async function(b,C,S,B){let U=C.view.sc(S);U.zi&&(U=await r1(b.localStore,C.query,!1).then(({documents:oe})=>C.view.sc(oe,U)));const W=B&&B.targetChanges.get(C.targetId),M=C.view.applyChanges(U,b.isPrimaryClient,W);return h1(b,C.targetId,M.cc),M.snapshot}(t,f,m,y);const r=await r1(t.localStore,e,!0),o=new zP(e,r.ir),a=o.sc(r.documents),l=Ha.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,l);h1(t,n,c.cc);const d=new jP(e,n,o);return t.wc.set(e,d),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),c.snapshot}async function YP(t,e){const n=ve(t),i=n.wc.get(e),s=n._c.get(i.targetId);if(s.length>1)return n._c.set(i.targetId,s.filter(r=>!cu(r,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Rd(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),aC(n.remoteStore,i.targetId),Pd(n,i.targetId)}).catch(Ba)):(Pd(n,i.targetId),await Rd(n.localStore,i.targetId,!0))}async function QP(t,e,n){const i=s8(t);try{const s=await function(r,o){const a=ve(r),l=_t.now(),c=o.reduce((m,y)=>m.add(y.key),ke());let d,f;return a.persistence.runTransaction("Locally write mutations","readwrite",m=>{let y=Si(),b=ke();return a.Zi.getEntries(m,c).next(C=>{y=C,y.forEach((S,B)=>{B.isValidDocument()||(b=b.add(S))})}).next(()=>a.localDocuments.getOverlayedDocuments(m,y)).next(C=>{d=C;const S=[];for(const B of o){const U=IR(B,d.get(B.key).overlayedDocument);U!=null&&S.push(new $s(B.key,U,Eb(U.value.mapValue),_i.exists(!0)))}return a.mutationQueue.addMutationBatch(m,l,S,o)}).next(C=>{f=C;const S=C.applyToLocalDocumentSet(d,b);return a.documentOverlayCache.saveOverlays(m,C.batchId,S)})}).then(()=>({batchId:f.batchId,changes:Mb(d)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(r,o,a){let l=r.Tc[r.currentUser.toKey()];l||(l=new dt($e)),l=l.insert(o,a),r.Tc[r.currentUser.toKey()]=l}(i,s.batchId,n),await ja(i,s.changes),await gu(i.remoteStore)}catch(s){const r=Dp(s,"Failed to persist write");n.reject(r)}}async function vC(t,e){const n=ve(t);try{const i=await pP(n.localStore,e);e.targetChanges.forEach((s,r)=>{const o=n.yc.get(r);o&&(nt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.fc=!0:s.modifiedDocuments.size>0?nt(o.fc):s.removedDocuments.size>0&&(nt(o.fc),o.fc=!1))}),await ja(n,i,e)}catch(i){await Ba(i)}}function u1(t,e,n){const i=ve(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.wc.forEach((r,o)=>{const a=o.view.Mu(e);a.snapshot&&s.push(a.snapshot)}),function(r,o){const a=ve(r);a.onlineState=o;let l=!1;a.queries.forEach((c,d)=>{for(const f of d.listeners)f.Mu(o)&&(l=!0)}),l&&Lp(a)}(i.eventManager,e),s.length&&i.dc.nu(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function XP(t,e,n){const i=ve(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.yc.get(e),r=s&&s.key;if(r){let o=new dt(se.comparator);o=o.insert(r,$t.newNoDocument(r,de.min()));const a=ke().add(r),l=new fu(de.min(),new Map,new dt($e),o,a);await vC(i,l),i.gc=i.gc.remove(r),i.yc.delete(e),Op(i)}else await Rd(i.localStore,e,!1).then(()=>Pd(i,e,n)).catch(Ba)}async function JP(t,e){const n=ve(t),i=e.batch.batchId;try{const s=await fP(n.localStore,e);wC(n,i,null),_C(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await ja(n,s)}catch(s){await Ba(s)}}async function ZP(t,e,n){const i=ve(t);try{const s=await function(r,o){const a=ve(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(d=>(nt(d!==null),c=d.keys(),a.mutationQueue.removeMutationBatch(l,d))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(i.localStore,e);wC(i,e,n),_C(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await ja(i,s)}catch(s){await Ba(s)}}function _C(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function wC(t,e,n){const i=ve(t);let s=i.Tc[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(n?r.reject(n):r.resolve(),s=s.remove(e)),i.Tc[i.currentUser.toKey()]=s}}function Pd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t._c.get(e))t.wc.delete(i),n&&t.dc.Pc(i,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(i=>{t.Ic.containsKey(i)||bC(t,i)})}function bC(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(aC(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),Op(t))}function h1(t,e,n){for(const i of n)i instanceof gC?(t.Ic.addReference(i.key,e),e8(t,i)):i instanceof yC?(ee("SyncEngine","Document no longer in limbo: "+i.key),t.Ic.removeReference(i.key,e),t.Ic.containsKey(i.key)||bC(t,i.key)):ce()}function e8(t,e){const n=e.key,i=n.path.canonicalString();t.gc.get(n)||t.mc.has(i)||(ee("SyncEngine","New document in limbo: "+n),t.mc.add(i),Op(t))}function Op(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new se(tt.fromString(e)),i=t.Ac.next();t.yc.set(i,new WP(n)),t.gc=t.gc.insert(n,i),oC(t.remoteStore,new Hi(Ti(wp(n.path)),i,"TargetPurposeLimboResolution",pp.ct))}}async function ja(t,e,n){const i=ve(t),s=[],r=[],o=[];i.wc.isEmpty()||(i.wc.forEach((a,l)=>{o.push(i.Rc(l,e,n).then(c=>{if((c||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const d=kp.Li(l.targetId,c);r.push(d)}}))}),await Promise.all(o),i.dc.nu(s),await async function(a,l){const c=ve(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>F.forEach(l,f=>F.forEach(f.Fi,m=>c.persistence.referenceDelegate.addReference(d,f.targetId,m)).next(()=>F.forEach(f.Bi,m=>c.persistence.referenceDelegate.removeReference(d,f.targetId,m)))))}catch(d){if(!Ua(d))throw d;ee("LocalStore","Failed to update sequence numbers: "+d)}for(const d of l){const f=d.targetId;if(!d.fromCache){const m=c.Ji.get(f),y=m.snapshotVersion,b=m.withLastLimboFreeSnapshotVersion(y);c.Ji=c.Ji.insert(f,b)}}}(i.localStore,r))}async function t8(t,e){const n=ve(t);if(!n.currentUser.isEqual(e)){ee("SyncEngine","User change. New user:",e.toKey());const i=await nC(n.localStore,e);n.currentUser=e,function(s,r){s.Ec.forEach(o=>{o.forEach(a=>{a.reject(new X(x.CANCELLED,r))})}),s.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await ja(n,i.er)}}function n8(t,e){const n=ve(t),i=n.yc.get(e);if(i&&i.fc)return ke().add(i.key);{let s=ke();const r=n._c.get(e);if(!r)return s;for(const o of r){const a=n.wc.get(o);s=s.unionWith(a.view.nc)}return s}}function i8(t){const e=ve(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=vC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=n8.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=XP.bind(null,e),e.dc.nu=$P.bind(null,e.eventManager),e.dc.Pc=HP.bind(null,e.eventManager),e}function s8(t){const e=ve(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=JP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ZP.bind(null,e),e}class d1{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=pu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return dP(this.persistence,new uP,e.initialUser,this.serializer)}createPersistence(e){return new lP(Ap.zs,this.serializer)}createSharedClientState(e){return new _P}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class r8{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>u1(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=t8.bind(null,this.syncEngine),await BP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new VP}createDatastore(e){const n=pu(e.databaseInfo.databaseId),i=(s=e.databaseInfo,new IP(s));var s;return function(r,o,a,l){return new SP(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return n=this.localStore,i=this.datastore,s=e.asyncQueue,r=a=>u1(this.syncEngine,a,0),o=a1.D()?new a1:new wP,new kP(n,i,s,r,o);var n,i,s,r,o}createSyncEngine(e,n){return function(i,s,r,o,a,l,c){const d=new qP(i,s,r,o,a,l);return c&&(d.vc=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ve(e);ee("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await za(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
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
 *//**
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
 */class CC{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):Ei("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class o8{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=Bt.UNAUTHENTICATED,this.clientId=bb.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{ee("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(ee("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new X(x.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=Dp(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function gh(t,e){t.asyncQueue.verifyOperationInProgress(),ee("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async s=>{i.isEqual(s)||(await nC(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function f1(t,e){t.asyncQueue.verifyOperationInProgress();const n=await l8(t);ee("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(s=>l1(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,r)=>l1(e.remoteStore,r)),t._onlineComponents=e}function a8(t){return t.name==="FirebaseError"?t.code===x.FAILED_PRECONDITION||t.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function l8(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee("FirestoreClient","Using user provided OfflineComponentProvider");try{await gh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!a8(n))throw n;Sr("Error using user provided cache. Falling back to memory cache: "+n),await gh(t,new d1)}}else ee("FirestoreClient","Using default OfflineComponentProvider"),await gh(t,new d1);return t._offlineComponents}async function IC(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee("FirestoreClient","Using user provided OnlineComponentProvider"),await f1(t,t._uninitializedComponentsProvider._online)):(ee("FirestoreClient","Using default OnlineComponentProvider"),await f1(t,new r8))),t._onlineComponents}function c8(t){return IC(t).then(e=>e.syncEngine)}async function EC(t){const e=await IC(t),n=e.eventManager;return n.onListen=KP.bind(null,e.syncEngine),n.onUnlisten=YP.bind(null,e.syncEngine),n}function u8(t,e,n={}){const i=new vi;return t.asyncQueue.enqueueAndForget(async()=>function(s,r,o,a,l){const c=new CC({next:f=>{r.enqueueAndForget(()=>pC(s,d));const m=f.docs.has(o);!m&&f.fromCache?l.reject(new X(x.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&f.fromCache&&a&&a.source==="server"?l.reject(new X(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(f)},error:f=>l.reject(f)}),d=new mC(wp(o.path),c,{includeMetadataChanges:!0,Ku:!0});return fC(s,d)}(await EC(t),t.asyncQueue,e,n,i)),i.promise}function h8(t,e,n={}){const i=new vi;return t.asyncQueue.enqueueAndForget(async()=>function(s,r,o,a,l){const c=new CC({next:f=>{r.enqueueAndForget(()=>pC(s,d)),f.fromCache&&a.source==="server"?l.reject(new X(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(f)},error:f=>l.reject(f)}),d=new mC(o,c,{includeMetadataChanges:!0,Ku:!0});return fC(s,d)}(await EC(t),t.asyncQueue,e,n,i)),i.promise}/**
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
 */function TC(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const p1=new Map;/**
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
 */function SC(t,e,n){if(!n)throw new X(x.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function d8(t,e,n,i){if(e===!0&&i===!0)throw new X(x.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function m1(t){if(!se.isDocumentKey(t))throw new X(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function g1(t){if(se.isDocumentKey(t))throw new X(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function yu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ce()}function Ms(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new X(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=yu(t);throw new X(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class y1{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new X(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new X(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}d8("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=TC((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new X(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new X(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new X(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,i=e.experimentalLongPollingOptions,n.timeoutSeconds===i.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,i}}class vu{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new y1({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new X(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new X(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new y1(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Ox;switch(n.type){case"firstParty":return new Ux(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new X(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=p1.get(e);n&&(ee("ComponentProvider","Removing Datastore"),p1.delete(e),n.terminate())}(this),Promise.resolve()}}function f8(t,e,n,i={}){var s;const r=(t=Ms(t,vu))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&Sr("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),i.mockUserToken){let o,a;if(typeof i.mockUserToken=="string")o=i.mockUserToken,a=Bt.MOCK_USER;else{o=JS(i.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=i.mockUserToken.sub||i.mockUserToken.user_id;if(!l)throw new X(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Bt(l)}t._authCredentials=new Mx(new wb(o,a))}}/**
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
 */class dn{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new dn(this.firestore,e,this._key)}}class Qr{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Qr(this.firestore,e,this._query)}}class Gi extends Qr{constructor(e,n,i){super(e,n,wp(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new dn(this.firestore,null,new se(e))}withConverter(e){return new Gi(this.firestore,e,this._path)}}function v1(t,e,...n){if(t=pn(t),SC("collection","path",e),t instanceof vu){const i=tt.fromString(e,...n);return g1(i),new Gi(t,null,i)}{if(!(t instanceof dn||t instanceof Gi))throw new X(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(tt.fromString(e,...n));return g1(i),new Gi(t.firestore,null,i)}}function yr(t,e,...n){if(t=pn(t),arguments.length===1&&(e=bb.A()),SC("doc","path",e),t instanceof vu){const i=tt.fromString(e,...n);return m1(i),new dn(t,null,new se(i))}{if(!(t instanceof dn||t instanceof Gi))throw new X(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(tt.fromString(e,...n));return m1(i),new dn(t.firestore,t instanceof Gi?t.converter:null,new se(i))}}/**
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
 */class p8{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new sC(this,"async_queue_retry"),this.Xc=()=>{const n=mh();n&&ee("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=mh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=mh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new vi;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Ua(e))throw e;ee("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(i=>{this.Wc=i,this.Hc=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw Ei("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Hc=!1,i))));return this.Gc=n,n}enqueueAfterDelay(e,n,i){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const s=Np.createAndSchedule(this,e,n,i,r=>this.na(r));return this.zc.push(s),s}Zc(){this.Wc&&ce()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}class _u extends vu{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=new p8,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||kC(this),this._firestoreClient.terminate()}}function AC(t,e){const n=typeof t=="object"?t:mf(),i=typeof t=="string"?t:e||"(default)",s=pf(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=XS("firestore");r&&f8(s,...r)}return s}function Mp(t){return t._firestoreClient||kC(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function kC(t){var e,n,i;const s=t._freezeSettings(),r=function(o,a,l,c){return new Xx(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,TC(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new o8(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=s.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.cache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}/**
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
 */class Nr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Nr(Qt.fromBase64String(e))}catch(n){throw new X(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Nr(Qt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Fp{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new X(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new zt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class xC{constructor(e){this._methodName=e}}/**
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
 */class Bp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new X(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new X(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return $e(this._lat,e._lat)||$e(this._long,e._long)}}/**
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
 */const m8=/^__.*__$/;class g8{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new $s(e,this.data,this.fieldMask,n,this.fieldTransforms):new $a(e,this.data,n,this.fieldTransforms)}}function RC(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ce()}}class Up{constructor(e,n,i,s,r,o){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.ua(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Up(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.aa({path:i,la:!1});return s.fa(e),s}da(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.aa({path:i,la:!1});return s.ua(),s}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return _c(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(RC(this.ca)&&m8.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class y8{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||pu(e)}ya(e,n,i,s=!1){return new Up({ca:e,methodName:n,ga:i,path:zt.emptyPath(),la:!1,ma:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function PC(t){const e=t._freezeSettings(),n=pu(t._databaseId);return new y8(t._databaseId,!!e.ignoreUndefinedProperties,n)}function v8(t,e,n,i,s,r={}){const o=t.ya(r.merge||r.mergeFields?2:0,e,n,s);LC("Data must be an object, but it was:",o,i);const a=NC(i,o);let l,c;if(r.merge)l=new Mn(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const d=[];for(const f of r.mergeFields){const m=w8(e,f,n);if(!o.contains(m))throw new X(x.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);C8(d,m)||d.push(m)}l=new Mn(d),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new g8(new In(a),l,c)}function _8(t,e,n,i=!1){return Vp(n,t.ya(i?4:3,e))}function Vp(t,e){if(DC(t=pn(t)))return LC("Unsupported field value:",e,t),NC(t,e);if(t instanceof xC)return function(n,i){if(!RC(i.ca))throw i._a(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i._a(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,i){const s=[];let r=0;for(const o of n){let a=Vp(o,i.wa(r));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),r++}return{arrayValue:{values:s}}}(t,e)}return function(n,i){if((n=pn(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return yR(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=_t.fromDate(n);return{timestampValue:yc(i.serializer,s)}}if(n instanceof _t){const s=new _t(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:yc(i.serializer,s)}}if(n instanceof Bp)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Nr)return{bytesValue:Qb(i.serializer,n._byteString)};if(n instanceof dn){const s=i.databaseId,r=n.firestore._databaseId;if(!r.isEqual(s))throw i._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Tp(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i._a(`Unsupported field value: ${yu(n)}`)}(t,e)}function NC(t,e){const n={};return Cb(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Kr(t,(i,s)=>{const r=Vp(s,e.ha(i));r!=null&&(n[i]=r)}),{mapValue:{fields:n}}}function DC(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof _t||t instanceof Bp||t instanceof Nr||t instanceof dn||t instanceof xC)}function LC(t,e,n){if(!DC(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const i=yu(n);throw i==="an object"?e._a(t+" a custom object"):e._a(t+" "+i)}}function w8(t,e,n){if((e=pn(e))instanceof Fp)return e._internalPath;if(typeof e=="string")return OC(t,e);throw _c("Field path arguments must be of type string or ",t,!1,void 0,n)}const b8=new RegExp("[~\\*/\\[\\]]");function OC(t,e,n){if(e.search(b8)>=0)throw _c(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Fp(...e.split("."))._internalPath}catch{throw _c(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function _c(t,e,n,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${i}`),o&&(l+=` in document ${s}`),l+=")"),new X(x.INVALID_ARGUMENT,a+t+l)}function C8(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class MC{constructor(e,n,i,s,r){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new dn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new I8(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field($p("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class I8 extends MC{data(){return super.data()}}function $p(t,e){return typeof e=="string"?OC(t,e):e instanceof Fp?e._internalPath:e._delegate._internalPath}/**
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
 */function E8(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new X(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Hp{}class T8 extends Hp{}function _1(t,e,...n){let i=[];e instanceof Hp&&i.push(e),i=i.concat(n),function(s){const r=s.filter(a=>a instanceof zp).length,o=s.filter(a=>a instanceof wu).length;if(r>1||r>0&&o>0)throw new X(x.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const s of i)t=s._apply(t);return t}class wu extends T8{constructor(e,n,i){super(),this._field=e,this._op=n,this._value=i,this.type="where"}static _create(e,n,i){return new wu(e,n,i)}_apply(e){const n=this._parse(e);return FC(e._query,n),new Qr(e.firestore,e.converter,Id(e._query,n))}_parse(e){const n=PC(e.firestore);return function(s,r,o,a,l,c,d){let f;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new X(x.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){b1(d,c);const m=[];for(const y of d)m.push(w1(a,s,y));f={arrayValue:{values:m}}}else f=w1(a,s,d)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||b1(d,c),f=_8(o,r,d,c==="in"||c==="not-in");return vt.create(l,c,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function S8(t,e,n){const i=e,s=$p("where",t);return wu._create(s,i,n)}class zp extends Hp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new zp(e,n)}_parse(e){const n=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return n.length===1?n[0]:Hn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let r=i;const o=s.getFlattenedFilters();for(const a of o)FC(r,a),r=Id(r,a)}(e._query,n),new Qr(e.firestore,e.converter,Id(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function w1(t,e,n){if(typeof(n=pn(n))=="string"){if(n==="")throw new X(x.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Nb(e)&&n.indexOf("/")!==-1)throw new X(x.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=e.path.child(tt.fromString(n));if(!se.isDocumentKey(i))throw new X(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Hy(t,new se(i))}if(n instanceof dn)return Hy(t,n._key);throw new X(x.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${yu(n)}.`)}function b1(t,e){if(!Array.isArray(t)||t.length===0)throw new X(x.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function FC(t,e){if(e.isInequality()){const i=bp(t),s=e.field;if(i!==null&&!i.isEqual(s))throw new X(x.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${i.toString()}' and '${s.toString()}'`);const r=Pb(t);r!==null&&A8(t,s,r)}const n=function(i,s){for(const r of i)for(const o of r.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new X(x.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new X(x.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function A8(t,e,n){if(!n.isEqual(e))throw new X(x.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class k8{convertValue(e,n="none"){switch(Os(e)){case 0:return null;case 1:return e.booleanValue;case 2:return yt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ls(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ce()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const i={};return Kr(e,(s,r)=>{i[s]=this.convertValue(r,n)}),i}convertGeoPoint(e){return new Bp(yt(e.latitude),yt(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=gp(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(aa(e));default:return null}}convertTimestamp(e){const n=ts(e);return new _t(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=tt.fromString(e);nt(tC(i));const s=new la(i.get(1),i.get(3)),r=new se(i.popFirst(5));return s.isEqual(n)||Ei(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */function x8(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}/**
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
 */class Eo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class BC extends MC{constructor(e,n,i,s,r,o){super(e,n,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Rl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field($p("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class Rl extends BC{data(e={}){return super.data(e)}}class R8{constructor(e,n,i,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Eo(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new Rl(this._firestore,this._userDataWriter,i.key,i,new Eo(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new X(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let r=0;return i._snapshot.docChanges.map(o=>{const a=new Rl(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Eo(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new Rl(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Eo(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,c=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:P8(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function P8(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ce()}}/**
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
 */function jp(t){t=Ms(t,dn);const e=Ms(t.firestore,_u);return u8(Mp(e),t._key).then(n=>D8(e,t,n))}class UC extends k8{constructor(e){super(),this.firestore=e}convertBytes(e){return new Nr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new dn(this.firestore,null,n)}}function C1(t){t=Ms(t,Qr);const e=Ms(t.firestore,_u),n=Mp(e),i=new UC(e);return E8(t._query),h8(n,t._query).then(s=>new R8(e,i,t,s))}function vr(t,e,n){t=Ms(t,dn);const i=Ms(t.firestore,_u),s=x8(t.converter,e,n);return N8(i,[v8(PC(i),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,_i.none())])}function N8(t,e){return function(n,i){const s=new vi;return n.asyncQueue.enqueueAndForget(async()=>QP(await c8(n),i,s)),s.promise}(Mp(t),e)}function D8(t,e,n){const i=n.docs.get(e._key),s=new UC(t);return new BC(t,s,e._key,i,new Eo(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){qr=n})(is),ti(new Vn("firestore",(n,{instanceIdentifier:i,options:s})=>{const r=n.getProvider("app").getImmediate(),o=new _u(new Fx(n.getProvider("auth-internal")),new $x(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new X(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new la(a.options.projectId,l)}(r,i),r);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),yn(Fy,"3.12.0",t),yn(Fy,"3.12.0","esm2017")})();/**
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
 */const VC="firebasestorage.googleapis.com",L8="storageBucket",O8=2*60*1e3,M8=10*60*1e3;/**
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
 */class ai extends oi{constructor(e,n,i=0){super(yh(e),`Firebase Storage: ${n} (${yh(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ai.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return yh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ri;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ri||(ri={}));function yh(t){return"storage/"+t}function F8(){const t="An unknown error occurred, please check the error payload for server response.";return new ai(ri.UNKNOWN,t)}function B8(){return new ai(ri.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function U8(){return new ai(ri.CANCELED,"User canceled the upload/download.")}function V8(t){return new ai(ri.INVALID_URL,"Invalid URL '"+t+"'.")}function $8(t){return new ai(ri.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function I1(t){return new ai(ri.INVALID_ARGUMENT,t)}function $C(){return new ai(ri.APP_DELETED,"The Firebase app was deleted.")}function H8(t){return new ai(ri.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Fn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=Fn.makeFromUrl(e,n)}catch{return new Fn(e,"")}if(i.path==="")return i;throw $8(e)}static makeFromUrl(e,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(M){M.path.charAt(M.path.length-1)==="/"&&(M.path_=M.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(M){M.path_=decodeURIComponent(M.path)}const d="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",y=new RegExp(`^https?://${f}/${d}/b/${s}/o${m}`,"i"),b={bucket:1,path:3},C=n===VC?"(?:storage.googleapis.com|storage.cloud.google.com)":n,S="([^?#]*)",B=new RegExp(`^https?://${C}/${s}/${S}`,"i"),W=[{regex:a,indices:l,postModify:r},{regex:y,indices:b,postModify:c},{regex:B,indices:{bucket:1,path:2},postModify:c}];for(let M=0;M<W.length;M++){const oe=W[M],_e=oe.regex.exec(e);if(_e){const Re=_e[oe.indices.bucket];let te=_e[oe.indices.path];te||(te=""),i=new Fn(Re,te),oe.postModify(i);break}}if(i==null)throw V8(e);return i}}class z8{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function j8(t,e,n){let i=1,s=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function d(...S){c||(c=!0,e.apply(null,S))}function f(S){s=setTimeout(()=>{s=null,t(y,l())},S)}function m(){r&&clearTimeout(r)}function y(S,...B){if(c){m();return}if(S){m(),d.call(null,S,...B);return}if(l()||o){m(),d.call(null,S,...B);return}i<64&&(i*=2);let W;a===1?(a=2,W=0):W=(i+Math.random())*1e3,f(W)}let b=!1;function C(S){b||(b=!0,m(),!c&&(s!==null?(S||(a=2),clearTimeout(s),f(0)):S||(a=1)))}return f(0),r=setTimeout(()=>{o=!0,C(!0)},n),C}function W8(t){t(!1)}/**
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
 */function q8(t){return t!==void 0}function E1(t,e,n,i){if(i<e)throw I1(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw I1(`Invalid value for '${t}'. Expected ${n} or less.`)}function K8(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const s=e(i)+"="+e(t[i]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
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
 */var wc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(wc||(wc={}));/**
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
 */function G8(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||s||r}/**
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
 */class Y8{constructor(e,n,i,s,r,o,a,l,c,d,f,m=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=f,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,b)=>{this.resolve_=y,this.reject_=b,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new gl(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===wc.NO_ERROR,l=r.getStatus();if(!a||G8(l,this.additionalRetryCodes_)&&this.retry){const d=r.getErrorCode()===wc.ABORT;i(!1,new gl(!1,null,d));return}const c=this.successCodes_.indexOf(l)!==-1;i(!0,new gl(c,r))})},n=(i,s)=>{const r=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());q8(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=F8();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?$C():U8();o(l)}else{const l=B8();o(l)}};this.canceled_?n(!1,new gl(!1,null,!0)):this.backoffId_=j8(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&W8(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class gl{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function Q8(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function X8(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function J8(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Z8(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function eN(t,e,n,i,s,r,o=!0){const a=K8(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return J8(c,e),Q8(c,n),X8(c,r),Z8(c,i),new Y8(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function tN(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function nN(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class bc{constructor(e,n){this._service=e,n instanceof Fn?this._location=n:this._location=Fn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new bc(e,n)}get root(){const e=new Fn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return nN(this._location.path)}get storage(){return this._service}get parent(){const e=tN(this._location.path);if(e===null)return null;const n=new Fn(this._location.bucket,e);return new bc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw H8(e)}}function T1(t,e){const n=e==null?void 0:e[L8];return n==null?null:Fn.makeFromBucketSpec(n,t)}class iN{constructor(e,n,i,s,r){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=VC,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=O8,this._maxUploadRetryTime=M8,this._requests=new Set,s!=null?this._bucket=Fn.makeFromBucketSpec(s,this._host):this._bucket=T1(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Fn.makeFromBucketSpec(this._url,e):this._bucket=T1(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){E1("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){E1("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new bc(this,e)}_makeRequest(e,n,i,s,r=!0){if(this._deleted)return new z8($C());{const o=eN(e,this._appId,i,s,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,s).getPromise()}}const S1="@firebase/storage",A1="0.11.2";/**
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
 */const sN="storage";function rN(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new iN(n,i,s,e,is)}function oN(){ti(new Vn(sN,rN,"PUBLIC").setMultipleInstances(!0)),yn(S1,A1,""),yn(S1,A1,"esm2017")}oN();function aN(t){return(e,n)=>{const i=zk(e,n).run(()=>m0(t));jk.set(e,i),qk(i,e)}}function vh(t){return Hk?e_(i_(t)):null}function lN(t,{firebaseApp:e,modules:n=[]}){t.provide(n_,e);for(const i of n)t.use(i.bind(null,e))}const cN={apiKey:"AIzaSyDjwJRaZR7zN8tkhSfbj583WZEexE6PrxY",authDomain:"volley-lock.firebaseapp.com",projectId:"volley-lock",storageBucket:"volley-lock.appspot.com",messagingSenderId:"222174613866",appId:"1:222174613866:web:5fa3f46f52e68f1357d513"},Nd=gv(cN),Wp=AC(Nd);/*!
  * vue-router v4.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const HC=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Xr=t=>HC?Symbol(t):"_vr_"+t,uN=Xr("rvlm"),k1=Xr("rvd"),qp=Xr("r"),zC=Xr("rl"),Dd=Xr("rvl"),er=typeof window<"u";function hN(t){return t.__esModule||HC&&t[Symbol.toStringTag]==="Module"}const Ge=Object.assign;function _h(t,e){const n={};for(const i in e){const s=e[i];n[i]=Array.isArray(s)?s.map(t):t(s)}return n}const Bo=()=>{},dN=/\/$/,fN=t=>t.replace(dN,"");function wh(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("?"),l=e.indexOf("#",a>-1?a:0);return a>-1&&(i=e.slice(0,a),r=e.slice(a+1,l>-1?l:e.length),s=t(r)),l>-1&&(i=i||e.slice(0,l),o=e.slice(l,e.length)),i=yN(i??e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function pN(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function x1(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function mN(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&Dr(e.matched[i],n.matched[s])&&jC(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Dr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function jC(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!gN(t[n],e[n]))return!1;return!0}function gN(t,e){return Array.isArray(t)?R1(t,e):Array.isArray(e)?R1(e,t):t===e}function R1(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function yN(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/");let s=n.length-1,r,o;for(r=0;r<i.length;r++)if(o=i[r],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(r-(r===i.length?1:0)).join("/")}var da;(function(t){t.pop="pop",t.push="push"})(da||(da={}));var Uo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Uo||(Uo={}));function vN(t){if(!t)if(er){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),fN(t)}const _N=/^[^#]+#/;function wN(t,e){return t.replace(_N,"#")+e}function bN(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const bu=()=>({left:window.pageXOffset,top:window.pageYOffset});function CN(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=bN(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function P1(t,e){return(history.state?history.state.position-e:-1)+t}const Ld=new Map;function IN(t,e){Ld.set(t,e)}function EN(t){const e=Ld.get(t);return Ld.delete(t),e}let TN=()=>location.protocol+"//"+location.host;function WC(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let a=s.includes(t.slice(r))?t.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),x1(l,"")}return x1(n,t)+i+s}function SN(t,e,n,i){let s=[],r=[],o=null;const a=({state:m})=>{const y=WC(t,location),b=n.value,C=e.value;let S=0;if(m){if(n.value=y,e.value=m,o&&o===b){o=null;return}S=C?m.position-C.position:0}else i(y);s.forEach(B=>{B(n.value,b,{delta:S,type:da.pop,direction:S?S>0?Uo.forward:Uo.back:Uo.unknown})})};function l(){o=n.value}function c(m){s.push(m);const y=()=>{const b=s.indexOf(m);b>-1&&s.splice(b,1)};return r.push(y),y}function d(){const{history:m}=window;m.state&&m.replaceState(Ge({},m.state,{scroll:bu()}),"")}function f(){for(const m of r)m();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",d),{pauseListeners:l,listen:c,destroy:f}}function N1(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?bu():null}}function AN(t){const{history:e,location:n}=window,i={value:WC(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,d){const f=t.indexOf("#"),m=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:TN()+t+l;try{e[d?"replaceState":"pushState"](c,"",m),s.value=c}catch(y){console.error(y),n[d?"replace":"assign"](m)}}function o(l,c){const d=Ge({},e.state,N1(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,d,!0),i.value=l}function a(l,c){const d=Ge({},s.value,e.state,{forward:l,scroll:bu()});r(d.current,d,!0);const f=Ge({},N1(i.value,l,null),{position:d.position+1},c);r(l,f,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function kN(t){t=vN(t);const e=AN(t),n=SN(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=Ge({location:"",base:t,go:i,createHref:wN.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function xN(t){return typeof t=="string"||t&&typeof t=="object"}function qC(t){return typeof t=="string"||typeof t=="symbol"}const Di={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},KC=Xr("nf");var D1;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(D1||(D1={}));function Lr(t,e){return Ge(new Error,{type:t,[KC]:!0},e)}function Li(t,e){return t instanceof Error&&KC in t&&(e==null||!!(t.type&e))}const L1="[^/]+?",RN={sensitive:!1,strict:!1,start:!0,end:!0},PN=/[.+*?^${}()[\]/\\]/g;function NN(t,e){const n=Ge({},RN,e),i=[];let s=n.start?"^":"";const r=[];for(const c of t){const d=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let f=0;f<c.length;f++){const m=c[f];let y=40+(n.sensitive?.25:0);if(m.type===0)f||(s+="/"),s+=m.value.replace(PN,"\\$&"),y+=40;else if(m.type===1){const{value:b,repeatable:C,optional:S,regexp:B}=m;r.push({name:b,repeatable:C,optional:S});const U=B||L1;if(U!==L1){y+=10;try{new RegExp(`(${U})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${b}" (${U}): `+M.message)}}let W=C?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;f||(W=S&&c.length<2?`(?:/${W})`:"/"+W),S&&(W+="?"),s+=W,y+=20,S&&(y+=-8),C&&(y+=-20),U===".*"&&(y+=-50)}d.push(y)}i.push(d)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const d=c.match(o),f={};if(!d)return null;for(let m=1;m<d.length;m++){const y=d[m]||"",b=r[m-1];f[b.name]=y&&b.repeatable?y.split("/"):y}return f}function l(c){let d="",f=!1;for(const m of t){(!f||!d.endsWith("/"))&&(d+="/"),f=!1;for(const y of m)if(y.type===0)d+=y.value;else if(y.type===1){const{value:b,repeatable:C,optional:S}=y,B=b in c?c[b]:"";if(Array.isArray(B)&&!C)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const U=Array.isArray(B)?B.join("/"):B;if(!U)if(S)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):f=!0);else throw new Error(`Missing required param "${b}"`);d+=U}}return d}return{re:o,score:i,keys:r,parse:a,stringify:l}}function DN(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function LN(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=DN(i[n],s[n]);if(r)return r;n++}return s.length-i.length}const ON={type:0,value:""},MN=/[a-zA-Z0-9_]/;function FN(t){if(!t)return[[]];if(t==="/")return[[ON]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${c}": ${y}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",d="";function f(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function m(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):m();break;case 4:m(),n=i;break;case 1:l==="("?n=2:MN.test(l)?m():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:n=3:d+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),s}function BN(t,e,n){const i=NN(FN(t.path),n),s=Ge(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function UN(t,e){const n=[],i=new Map;e=M1({strict:!1,end:!0,sensitive:!1},e);function s(d){return i.get(d)}function r(d,f,m){const y=!m,b=$N(d);b.aliasOf=m&&m.record;const C=M1(e,d),S=[b];if("alias"in d){const W=typeof d.alias=="string"?[d.alias]:d.alias;for(const M of W)S.push(Ge({},b,{components:m?m.record.components:b.components,path:M,aliasOf:m?m.record:b}))}let B,U;for(const W of S){const{path:M}=W;if(f&&M[0]!=="/"){const oe=f.record.path,_e=oe[oe.length-1]==="/"?"":"/";W.path=f.record.path+(M&&_e+M)}if(B=BN(W,f,C),m?m.alias.push(B):(U=U||B,U!==B&&U.alias.push(B),y&&d.name&&!O1(B)&&o(d.name)),"children"in b){const oe=b.children;for(let _e=0;_e<oe.length;_e++)r(oe[_e],B,m&&m.children[_e])}m=m||B,l(B)}return U?()=>{o(U)}:Bo}function o(d){if(qC(d)){const f=i.get(d);f&&(i.delete(d),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(d);f>-1&&(n.splice(f,1),d.record.name&&i.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){let f=0;for(;f<n.length&&LN(d,n[f])>=0&&(d.record.path!==n[f].record.path||!GC(d,n[f]));)f++;n.splice(f,0,d),d.record.name&&!O1(d)&&i.set(d.record.name,d)}function c(d,f){let m,y={},b,C;if("name"in d&&d.name){if(m=i.get(d.name),!m)throw Lr(1,{location:d});C=m.record.name,y=Ge(VN(f.params,m.keys.filter(U=>!U.optional).map(U=>U.name)),d.params),b=m.stringify(y)}else if("path"in d)b=d.path,m=n.find(U=>U.re.test(b)),m&&(y=m.parse(b),C=m.record.name);else{if(m=f.name?i.get(f.name):n.find(U=>U.re.test(f.path)),!m)throw Lr(1,{location:d,currentLocation:f});C=m.record.name,y=Ge({},f.params,d.params),b=m.stringify(y)}const S=[];let B=m;for(;B;)S.unshift(B.record),B=B.parent;return{name:C,path:b,params:y,matched:S,meta:zN(S)}}return t.forEach(d=>r(d)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function VN(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function $N(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:HN(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function HN(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="boolean"?n:n[i];return e}function O1(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function zN(t){return t.reduce((e,n)=>Ge(e,n.meta),{})}function M1(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function GC(t,e){return e.children.some(n=>n===t||GC(t,n))}const YC=/#/g,jN=/&/g,WN=/\//g,qN=/=/g,KN=/\?/g,QC=/\+/g,GN=/%5B/g,YN=/%5D/g,XC=/%5E/g,QN=/%60/g,JC=/%7B/g,XN=/%7C/g,ZC=/%7D/g,JN=/%20/g;function Kp(t){return encodeURI(""+t).replace(XN,"|").replace(GN,"[").replace(YN,"]")}function ZN(t){return Kp(t).replace(JC,"{").replace(ZC,"}").replace(XC,"^")}function Od(t){return Kp(t).replace(QC,"%2B").replace(JN,"+").replace(YC,"%23").replace(jN,"%26").replace(QN,"`").replace(JC,"{").replace(ZC,"}").replace(XC,"^")}function eD(t){return Od(t).replace(qN,"%3D")}function tD(t){return Kp(t).replace(YC,"%23").replace(KN,"%3F")}function nD(t){return t==null?"":tD(t).replace(WN,"%2F")}function Cc(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function iD(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(QC," "),o=r.indexOf("="),a=Cc(o<0?r:r.slice(0,o)),l=o<0?null:Cc(r.slice(o+1));if(a in e){let c=e[a];Array.isArray(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function F1(t){let e="";for(let n in t){const i=t[n];if(n=eD(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(i)?i.map(r=>r&&Od(r)):[i&&Od(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function sD(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Array.isArray(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}function po(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Bi(t,e,n,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(Lr(4,{from:n,to:e})):f instanceof Error?a(f):xN(f)?a(Lr(2,{from:e,to:f})):(r&&i.enterCallbacks[s]===r&&typeof f=="function"&&r.push(f),o())},c=t.call(i&&i.instances[s],e,n,l);let d=Promise.resolve(c);t.length<3&&(d=d.then(l)),d.catch(f=>a(f))})}function bh(t,e,n,i){const s=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(rD(a)){const c=(a.__vccOpts||a)[e];c&&s.push(Bi(c,n,i,r,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const d=hN(c)?c.default:c;r.components[o]=d;const m=(d.__vccOpts||d)[e];return m&&Bi(m,n,i,r,o)()}))}}return s}function rD(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function B1(t){const e=Qn(qp),n=Qn(zC),i=Nn(()=>e.resolve(ar(t.to))),s=Nn(()=>{const{matched:l}=i.value,{length:c}=l,d=l[c-1],f=n.matched;if(!d||!f.length)return-1;const m=f.findIndex(Dr.bind(null,d));if(m>-1)return m;const y=U1(l[c-2]);return c>1&&U1(d)===y&&f[f.length-1].path!==y?f.findIndex(Dr.bind(null,l[c-2])):m}),r=Nn(()=>s.value>-1&&cD(n.params,i.value.params)),o=Nn(()=>s.value>-1&&s.value===n.matched.length-1&&jC(n.params,i.value.params));function a(l={}){return lD(l)?e[ar(t.replace)?"replace":"push"](ar(t.to)).catch(Bo):Promise.resolve()}return{route:i,href:Nn(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const oD=x0({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:B1,setup(t,{slots:e}){const n=Fr(B1(t)),{options:i}=Qn(qp),s=Nn(()=>({[V1(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[V1(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:uf("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),aD=oD;function lD(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function cD(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!Array.isArray(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function U1(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const V1=(t,e,n)=>t??e??n,uD=x0({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const i=Qn(Dd),s=Nn(()=>t.route||i.value),r=Qn(k1,0),o=Nn(()=>s.value.matched[r]);wl(k1,r+1),wl(uN,o),wl(Dd,s);const a=m0();return _l(()=>[a.value,o.value,t.name],([l,c,d],[f,m,y])=>{c&&(c.instances[d]=l,m&&m!==c&&l&&l===f&&(c.leaveGuards.size||(c.leaveGuards=m.leaveGuards),c.updateGuards.size||(c.updateGuards=m.updateGuards))),l&&c&&(!m||!Dr(c,m)||!f)&&(c.enterCallbacks[d]||[]).forEach(b=>b(l))},{flush:"post"}),()=>{const l=s.value,c=o.value,d=c&&c.components[t.name],f=t.name;if(!d)return $1(n.default,{Component:d,route:l});const m=c.props[t.name],y=m?m===!0?l.params:typeof m=="function"?m(l):m:null,C=uf(d,Ge({},y,e,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(c.instances[f]=null)},ref:a}));return $1(n.default,{Component:C,route:l})||C}}});function $1(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const eI=uD;function hD(t){const e=UN(t.routes,t),n=t.parseQuery||iD,i=t.stringifyQuery||F1,s=t.history,r=po(),o=po(),a=po(),l=ZT(Di);let c=Di;er&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=_h.bind(null,k=>""+k),f=_h.bind(null,nD),m=_h.bind(null,Cc);function y(k,G){let H,Z;return qC(k)?(H=e.getRecordMatcher(k),Z=G):Z=k,e.addRoute(Z,H)}function b(k){const G=e.getRecordMatcher(k);G&&e.removeRoute(G)}function C(){return e.getRoutes().map(k=>k.record)}function S(k){return!!e.getRecordMatcher(k)}function B(k,G){if(G=Ge({},G||l.value),typeof k=="string"){const g=wh(n,k,G.path),_=e.resolve({path:g.path},G),T=s.createHref(g.fullPath);return Ge(g,_,{params:m(_.params),hash:Cc(g.hash),redirectedFrom:void 0,href:T})}let H;if("path"in k)H=Ge({},k,{path:wh(n,k.path,G.path).path});else{const g=Ge({},k.params);for(const _ in g)g[_]==null&&delete g[_];H=Ge({},k,{params:f(k.params)}),G.params=f(G.params)}const Z=e.resolve(H,G),Ae=k.hash||"";Z.params=d(m(Z.params));const Ye=pN(i,Ge({},k,{hash:ZN(Ae),path:Z.path})),ge=s.createHref(Ye);return Ge({fullPath:Ye,hash:Ae,query:i===F1?sD(k.query):k.query||{}},Z,{redirectedFrom:void 0,href:ge})}function U(k){return typeof k=="string"?wh(n,k,l.value.path):Ge({},k)}function W(k,G){if(c!==k)return Lr(8,{from:G,to:k})}function M(k){return Re(k)}function oe(k){return M(Ge(U(k),{replace:!0}))}function _e(k){const G=k.matched[k.matched.length-1];if(G&&G.redirect){const{redirect:H}=G;let Z=typeof H=="function"?H(k):H;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=U(Z):{path:Z},Z.params={}),Ge({query:k.query,hash:k.hash,params:k.params},Z)}}function Re(k,G){const H=c=B(k),Z=l.value,Ae=k.state,Ye=k.force,ge=k.replace===!0,g=_e(H);if(g)return Re(Ge(U(g),{state:Ae,force:Ye,replace:ge}),G||H);const _=H;_.redirectedFrom=G;let T;return!Ye&&mN(i,Z,H)&&(T=Lr(16,{to:_,from:Z}),wn(Z,Z,!0,!1)),(T?Promise.resolve(T):be(_,Z)).catch(A=>Li(A)?Li(A,2)?A:on(A):ne(A,_,Z)).then(A=>{if(A){if(Li(A,2))return Re(Ge(U(A.to),{state:Ae,force:Ye,replace:ge}),G||_)}else A=Ke(_,Z,!0,ge,Ae);return Te(_,Z,A),A})}function te(k,G){const H=W(k,G);return H?Promise.reject(H):Promise.resolve()}function be(k,G){let H;const[Z,Ae,Ye]=dD(k,G);H=bh(Z.reverse(),"beforeRouteLeave",k,G);for(const g of Z)g.leaveGuards.forEach(_=>{H.push(Bi(_,k,G))});const ge=te.bind(null,k,G);return H.push(ge),Xs(H).then(()=>{H=[];for(const g of r.list())H.push(Bi(g,k,G));return H.push(ge),Xs(H)}).then(()=>{H=bh(Ae,"beforeRouteUpdate",k,G);for(const g of Ae)g.updateGuards.forEach(_=>{H.push(Bi(_,k,G))});return H.push(ge),Xs(H)}).then(()=>{H=[];for(const g of k.matched)if(g.beforeEnter&&!G.matched.includes(g))if(Array.isArray(g.beforeEnter))for(const _ of g.beforeEnter)H.push(Bi(_,k,G));else H.push(Bi(g.beforeEnter,k,G));return H.push(ge),Xs(H)}).then(()=>(k.matched.forEach(g=>g.enterCallbacks={}),H=bh(Ye,"beforeRouteEnter",k,G),H.push(ge),Xs(H))).then(()=>{H=[];for(const g of o.list())H.push(Bi(g,k,G));return H.push(ge),Xs(H)}).catch(g=>Li(g,8)?g:Promise.reject(g))}function Te(k,G,H){for(const Z of a.list())Z(k,G,H)}function Ke(k,G,H,Z,Ae){const Ye=W(k,G);if(Ye)return Ye;const ge=G===Di,g=er?history.state:{};H&&(Z||ge?s.replace(k.fullPath,Ge({scroll:ge&&g&&g.scroll},Ae)):s.push(k.fullPath,Ae)),l.value=k,wn(k,G,H,ge),on()}let w;function Ve(){w=s.listen((k,G,H)=>{const Z=B(k),Ae=_e(Z);if(Ae){Re(Ge(Ae,{replace:!0}),Z).catch(Bo);return}c=Z;const Ye=l.value;er&&IN(P1(Ye.fullPath,H.delta),bu()),be(Z,Ye).catch(ge=>Li(ge,12)?ge:Li(ge,2)?(Re(ge.to,Z).then(g=>{Li(g,20)&&!H.delta&&H.type===da.pop&&s.go(-1,!1)}).catch(Bo),Promise.reject()):(H.delta&&s.go(-H.delta,!1),ne(ge,Z,Ye))).then(ge=>{ge=ge||Ke(Z,Ye,!1),ge&&(H.delta?s.go(-H.delta,!1):H.type===da.pop&&Li(ge,20)&&s.go(-1,!1)),Te(Z,Ye,ge)}).catch(Bo)})}let Ne=po(),rn=po(),Se;function ne(k,G,H){on(k);const Z=rn.list();return Z.length?Z.forEach(Ae=>Ae(k,G,H)):console.error(k),Promise.reject(k)}function De(){return Se&&l.value!==Di?Promise.resolve():new Promise((k,G)=>{Ne.add([k,G])})}function on(k){return Se||(Se=!k,Ve(),Ne.list().forEach(([G,H])=>k?H(k):G()),Ne.reset()),k}function wn(k,G,H,Z){const{scrollBehavior:Ae}=t;if(!er||!Ae)return Promise.resolve();const Ye=!H&&EN(P1(k.fullPath,0))||(Z||!H)&&history.state&&history.state.scroll||null;return _0().then(()=>Ae(k,G,Ye)).then(ge=>ge&&CN(ge)).catch(ge=>ne(ge,k,G))}const an=k=>s.go(k);let xt;const xn=new Set;return{currentRoute:l,addRoute:y,removeRoute:b,hasRoute:S,getRoutes:C,resolve:B,options:t,push:M,replace:oe,go:an,back:()=>an(-1),forward:()=>an(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:rn.add,isReady:De,install(k){const G=this;k.component("RouterLink",aD),k.component("RouterView",eI),k.config.globalProperties.$router=G,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>ar(l)}),er&&!xt&&l.value===Di&&(xt=!0,M(s.location).catch(Ae=>{}));const H={};for(const Ae in Di)H[Ae]=Nn(()=>l.value[Ae]);k.provide(qp,G),k.provide(zC,Fr(H)),k.provide(Dd,l);const Z=k.unmount;xn.add(k),k.unmount=function(){xn.delete(k),xn.size<1&&(c=Di,w&&w(),l.value=Di,xt=!1,Se=!1),Z()}}}}function Xs(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function dD(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Dr(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Dr(c,l))||s.push(l))}return[n,i,s]}const Jr=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},fD={__name:"App",setup(t){return(e,n)=>{const i=ut("NavBar");return I(),L(He,null,[xe(i,{class:"nav-menu"}),xe(ar(eI))],64)}}},pD=Jr(fD,[["__scopeId","data-v-2a8ffa71"]]),mD="modulepreload",gD=function(t){return"/volley-lock/"+t},H1={},mo=function(e,n,i){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=gD(r),r in H1)return;H1[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!i)for(let d=s.length-1;d>=0;d--){const f=s[d];if(f.href===r&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":mD,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((d,f)=>{c.addEventListener("load",d),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())},yD="/volley-lock/assets/volley-lock-icon-f966aa47.png";const vD={},_D=t=>(u4("data-v-b6072c45"),t=t(),h4(),t),wD=_D(()=>R("header",null,[R("img",{alt:"Vue logo",class:"logo",src:yD,width:"125",height:"125"}),R("div",{class:"card flex justify-content-center"},[R("h1",null," VOLLEY LOCK ")])],-1));function bD(t,e){const n=ut("TheWelcome");return I(),L(He,null,[wD,R("main",null,[xe(n)])],64)}const CD=Jr(vD,[["render",bD],["__scopeId","data-v-b6072c45"]]),ID=hD({history:kN("/volley-lock/"),routes:[{path:"/",name:"home",component:CD},{path:"/results",name:"results",component:()=>mo(()=>import("./TierResults-f49ce05c.js"),["assets/TierResults-f49ce05c.js","assets/sortable.esm-9c3c89c5.js","assets/TierResults-36d84629.css"])},{path:"/graph",name:"graph",component:()=>mo(()=>import("./GraphView-c613371c.js"),["assets/GraphView-c613371c.js","assets/GraphView-623536dd.css"])},{path:"/tier",name:"tier",component:()=>mo(()=>import("./TierView-1871ce97.js"),["assets/TierView-1871ce97.js","assets/sortable.esm-9c3c89c5.js","assets/TierView-ddb2b4b5.css"])},{path:"/youtube",name:"youtube",component:()=>mo(()=>import("./YoutubeView-4ecfba2c.js"),["assets/YoutubeView-4ecfba2c.js","assets/YoutubeView-4b5342c1.css"])},{path:"/profile",name:"profile",component:()=>mo(()=>import("./ProfileView-907125a8.js"),["assets/ProfileView-907125a8.js","assets/ProfileView-746f4d14.css"])}]});class Gp{constructor(e,n,i,s,r=!1,o={}){this.id=e,this.name=n,this.email=i,this.photo=s,this.voted=r,this.votes=o}get id(){return this.id}get name(){return this.name}get email(){return this.email}get photo(){return this.photo}get voted(){return this.voted}get votes(){return this.votes}id(e){this.id=e}name(e){this.name=e}email(e){this.email=e}photo(e){this.photo=e}voted(e){this.voted=e}votes(e){this.votes=e}}const Md={toFirestore:t=>({id:t.id,name:t.name,email:t.email,photo:t.photo,voted:t.voted,votes:t.votes}),fromFirestore:(t,e)=>{const n=t.data(e);return new Gp(n.id,n.name,n.email,n.photo,n.voted,n.votes)}};var Y={innerWidth(t){if(t){let e=t.offsetWidth,n=getComputedStyle(t);return e+=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),e}return 0},width(t){if(t){let e=t.offsetWidth,n=getComputedStyle(t);return e-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),e}return 0},getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)},getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)},getOuterWidth(t,e){if(t){let n=t.offsetWidth;if(e){let i=getComputedStyle(t);n+=parseFloat(i.marginLeft)+parseFloat(i.marginRight)}return n}return 0},getOuterHeight(t,e){if(t){let n=t.offsetHeight;if(e){let i=getComputedStyle(t);n+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return n}return 0},getClientHeight(t,e){if(t){let n=t.clientHeight;if(e){let i=getComputedStyle(t);n+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return n}return 0},getViewport(){let t=window,e=document,n=e.documentElement,i=e.getElementsByTagName("body")[0],s=t.innerWidth||n.clientWidth||i.clientWidth,r=t.innerHeight||n.clientHeight||i.clientHeight;return{width:s,height:r}},getOffset(t){if(t){let e=t.getBoundingClientRect();return{top:e.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:e.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}},index(t){if(t){let e=t.parentNode.childNodes,n=0;for(let i=0;i<e.length;i++){if(e[i]===t)return n;e[i].nodeType===1&&n++}}return-1},addMultipleClasses(t,e){if(t&&e)if(t.classList){let n=e.split(" ");for(let i=0;i<n.length;i++)t.classList.add(n[i])}else{let n=e.split(" ");for(let i=0;i<n.length;i++)t.className+=" "+n[i]}},addClass(t,e){t&&e&&(t.classList?t.classList.add(e):t.className+=" "+e)},removeClass(t,e){t&&e&&(t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," "))},hasClass(t,e){return t?t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className):!1},find(t,e){return this.isElement(t)?t.querySelectorAll(e):[]},findSingle(t,e){return this.isElement(t)?t.querySelector(e):null},getHeight(t){if(t){let e=t.offsetHeight,n=getComputedStyle(t);return e-=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)+parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth),e}return 0},getWidth(t){if(t){let e=t.offsetWidth,n=getComputedStyle(t);return e-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)+parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth),e}return 0},absolutePosition(t,e){if(t){let n=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),i=n.height,s=n.width,r=e.offsetHeight,o=e.offsetWidth,a=e.getBoundingClientRect(),l=this.getWindowScrollTop(),c=this.getWindowScrollLeft(),d=this.getViewport(),f,m;a.top+r+i>d.height?(f=a.top+l-i,t.style.transformOrigin="bottom",f<0&&(f=l)):(f=r+a.top+l,t.style.transformOrigin="top"),a.left+s>d.width?m=Math.max(0,a.left+c+o-s):m=a.left+c,t.style.top=f+"px",t.style.left=m+"px"}},relativePosition(t,e){if(t){let n=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t);const i=e.offsetHeight,s=e.getBoundingClientRect(),r=this.getViewport();let o,a;s.top+i+n.height>r.height?(o=-1*n.height,t.style.transformOrigin="bottom",s.top+o<0&&(o=-1*s.top)):(o=i,t.style.transformOrigin="top"),n.width>r.width?a=s.left*-1:s.left+n.width>r.width?a=(s.left+n.width-r.width)*-1:a=0,t.style.top=o+"px",t.style.left=a+"px"}},getParents(t,e=[]){return t.parentNode===null?e:this.getParents(t.parentNode,e.concat([t.parentNode]))},getScrollableParents(t){let e=[];if(t){let n=this.getParents(t);const i=/(auto|scroll)/,s=r=>{let o=window.getComputedStyle(r,null);return i.test(o.getPropertyValue("overflow"))||i.test(o.getPropertyValue("overflowX"))||i.test(o.getPropertyValue("overflowY"))};for(let r of n){let o=r.nodeType===1&&r.dataset.scrollselectors;if(o){let a=o.split(",");for(let l of a){let c=this.findSingle(r,l);c&&s(c)&&e.push(c)}}r.nodeType!==9&&s(r)&&e.push(r)}}return e},getHiddenElementOuterHeight(t){if(t){t.style.visibility="hidden",t.style.display="block";let e=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",e}return 0},getHiddenElementOuterWidth(t){if(t){t.style.visibility="hidden",t.style.display="block";let e=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",e}return 0},getHiddenElementDimensions(t){if(t){let e={};return t.style.visibility="hidden",t.style.display="block",e.width=t.offsetWidth,e.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",e}return 0},fadeIn(t,e){if(t){t.style.opacity=0;let n=+new Date,i=0,s=function(){i=+t.style.opacity+(new Date().getTime()-n)/e,t.style.opacity=i,n=+new Date,+i<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}},fadeOut(t,e){if(t){let n=1,i=50,s=e,r=i/s,o=setInterval(()=>{n-=r,n<=0&&(n=0,clearInterval(o)),t.style.opacity=n},i)}},getUserAgent(){return navigator.userAgent},appendChild(t,e){if(this.isElement(e))e.appendChild(t);else if(e.el&&e.elElement)e.elElement.appendChild(t);else throw new Error("Cannot append "+e+" to "+t)},isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"},scrollInView(t,e){let n=getComputedStyle(t).getPropertyValue("borderTopWidth"),i=n?parseFloat(n):0,s=getComputedStyle(t).getPropertyValue("paddingTop"),r=s?parseFloat(s):0,o=t.getBoundingClientRect(),l=e.getBoundingClientRect().top+document.body.scrollTop-(o.top+document.body.scrollTop)-i-r,c=t.scrollTop,d=t.clientHeight,f=this.getOuterHeight(e);l<0?t.scrollTop=c+l:l+f>d&&(t.scrollTop=c+l-d+f)},clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}},getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null},calculateScrollbarWidth(){if(this.calculatedScrollbarWidth!=null)return this.calculatedScrollbarWidth;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let e=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),this.calculatedScrollbarWidth=e,e},getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser},resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),e=/(chrome)[ ]([\w.]+)/.exec(t)||/(webkit)[ ]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ ]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:e[1]||"",version:e[2]||"0"}},isVisible(t){return t&&t.offsetParent!=null},invokeElementMethod(t,e,n){t[e].apply(t,n)},isExist(t){return!!(t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode)},isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)},focus(t,e){t&&document.activeElement!==t&&t.focus(e)},isFocusableElement(t,e=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`):!1},getFocusableElements(t,e=""){let n=this.find(t,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`),i=[];for(let s of n)getComputedStyle(s).display!="none"&&getComputedStyle(s).visibility!="hidden"&&i.push(s);return i},getFirstFocusableElement(t,e){const n=this.getFocusableElements(t,e);return n.length>0?n[0]:null},getLastFocusableElement(t,e){const n=this.getFocusableElements(t,e);return n.length>0?n[n.length-1]:null},getNextFocusableElement(t,e,n){const i=this.getFocusableElements(t,n),s=i.length>0?i.findIndex(o=>o===e):-1,r=s>-1&&i.length>=s+1?s+1:-1;return r>-1?i[r]:null},isClickable(t){if(t){const e=t.nodeName,n=t.parentElement&&t.parentElement.nodeName;return e==="INPUT"||e==="TEXTAREA"||e==="BUTTON"||e==="A"||n==="INPUT"||n==="TEXTAREA"||n==="BUTTON"||n==="A"||!!t.closest(".p-button, .p-checkbox, .p-radiobutton")}return!1},applyStyle(t,e){if(typeof e=="string")t.style.cssText=e;else for(let n in e)t.style[n]=e[n]},isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream},isAndroid(){return/(android)/i.test(navigator.userAgent)},isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0},exportCSV(t,e){let n=new Blob([t],{type:"application/csv;charset=utf-8;"});if(window.navigator.msSaveOrOpenBlob)navigator.msSaveOrOpenBlob(n,e+".csv");else{let i=document.createElement("a");i.download!==void 0?(i.setAttribute("href",URL.createObjectURL(n)),i.setAttribute("download",e+".csv"),i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i)):(t="data:text/csv;charset=utf-8,"+t,window.open(encodeURI(t)))}}};class ED{constructor(e,n=()=>{}){this.element=e,this.listener=n}bindScrollListener(){this.scrollableParents=Y.getScrollableParents(this.element);for(let e=0;e<this.scrollableParents.length;e++)this.scrollableParents[e].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let e=0;e<this.scrollableParents.length;e++)this.scrollableParents[e].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}}function tI(){const t=new Map;return{on(e,n){let i=t.get(e);i?i.push(n):i=[n],t.set(e,i)},off(e,n){let i=t.get(e);i&&i.splice(i.indexOf(n)>>>0,1)},emit(e,n){let i=t.get(e);i&&i.slice().map(s=>{s(n)})}}}var Xe={equals(t,e,n){return n?this.resolveFieldData(t,n)===this.resolveFieldData(e,n):this.deepEquals(t,e)},deepEquals(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var n=Array.isArray(t),i=Array.isArray(e),s,r,o;if(n&&i){if(r=t.length,r!=e.length)return!1;for(s=r;s--!==0;)if(!this.deepEquals(t[s],e[s]))return!1;return!0}if(n!=i)return!1;var a=t instanceof Date,l=e instanceof Date;if(a!=l)return!1;if(a&&l)return t.getTime()==e.getTime();var c=t instanceof RegExp,d=e instanceof RegExp;if(c!=d)return!1;if(c&&d)return t.toString()==e.toString();var f=Object.keys(t);if(r=f.length,r!==Object.keys(e).length)return!1;for(s=r;s--!==0;)if(!Object.prototype.hasOwnProperty.call(e,f[s]))return!1;for(s=r;s--!==0;)if(o=f[s],!this.deepEquals(t[o],e[o]))return!1;return!0}return t!==t&&e!==e},resolveFieldData(t,e){if(t&&Object.keys(t).length&&e){if(this.isFunction(e))return e(t);if(e.indexOf(".")===-1)return t[e];{let s=e.split("."),r=t;for(var n=0,i=s.length;n<i;++n){if(r==null)return null;r=r[s[n]]}return r}}else return null},isFunction(t){return!!(t&&t.constructor&&t.call&&t.apply)},getItemValue(t,...e){return this.isFunction(t)?t(...e):t},filter(t,e,n){var i=[];if(t){for(let s of t)for(let r of e)if(String(this.resolveFieldData(s,r)).toLowerCase().indexOf(n.toLowerCase())>-1){i.push(s);break}}return i},reorderArray(t,e,n){t&&e!==n&&(n>=t.length&&(n%=t.length,e%=t.length),t.splice(n,0,t.splice(e,1)[0]))},findIndexInList(t,e){let n=-1;if(e){for(let i=0;i<e.length;i++)if(e[i]===t){n=i;break}}return n},contains(t,e){if(t!=null&&e&&e.length){for(let n of e)if(this.equals(t,n))return!0}return!1},insertIntoOrderedArray(t,e,n,i){if(n.length>0){let s=!1;for(let r=0;r<n.length;r++)if(this.findIndexInList(n[r],i)>e){n.splice(r,0,t),s=!0;break}s||n.push(t)}else n.push(t)},removeAccents(t){return t&&t.search(/[\xC0-\xFF]/g)>-1&&(t=t.replace(/[\xC0-\xC5]/g,"A").replace(/[\xC6]/g,"AE").replace(/[\xC7]/g,"C").replace(/[\xC8-\xCB]/g,"E").replace(/[\xCC-\xCF]/g,"I").replace(/[\xD0]/g,"D").replace(/[\xD1]/g,"N").replace(/[\xD2-\xD6\xD8]/g,"O").replace(/[\xD9-\xDC]/g,"U").replace(/[\xDD]/g,"Y").replace(/[\xDE]/g,"P").replace(/[\xE0-\xE5]/g,"a").replace(/[\xE6]/g,"ae").replace(/[\xE7]/g,"c").replace(/[\xE8-\xEB]/g,"e").replace(/[\xEC-\xEF]/g,"i").replace(/[\xF1]/g,"n").replace(/[\xF2-\xF6\xF8]/g,"o").replace(/[\xF9-\xFC]/g,"u").replace(/[\xFE]/g,"p").replace(/[\xFD\xFF]/g,"y")),t},getVNodeProp(t,e){let n=t.props;if(n){let i=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),s=Object.prototype.hasOwnProperty.call(n,i)?i:e;return t.type.props[e].type===Boolean&&n[s]===""?!0:n[s]}return null},convertToFlatCase(t){return this.isNotEmpty(t)?t.replace(/(-|_)/g,"").toLowerCase():t},isEmpty(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0},isNotEmpty(t){return!this.isEmpty(t)},isPrintableCharacter(t=""){return this.isNotEmpty(t)&&t.length===1&&t.match(/\S| /)},findLast(t,e){let n;if(this.isNotEmpty(t))try{n=t.findLast(e)}catch{n=[...t].reverse().find(e)}return n},findLastIndex(t,e){let n=-1;if(this.isNotEmpty(t))try{n=t.findLastIndex(e)}catch{n=t.lastIndexOf([...t].reverse().find(e))}return n}},z1=0;function Ai(t="pv_id_"){return z1++,`${t}${z1}`}function TD(){let t=[];const e=(o,a,l=999)=>{const c=s(o,a,l),d=c.value+(c.key===o?0:l)+1;return t.push({key:o,value:d}),d},n=o=>{t=t.filter(a=>a.value!==o)},i=(o,a)=>s(o,a).value,s=(o,a,l=0)=>[...t].reverse().find(c=>a?!0:c.key===o)||{key:o,value:l},r=o=>o&&parseInt(o.style.zIndex,10)||0;return{get:r,set:(o,a,l)=>{a&&(a.style.zIndex=String(e(o,!0,l)))},clear:o=>{o&&(n(r(o)),o.style.zIndex="")},getCurrent:o=>i(o,!0)}}var An=TD();const Ft={STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",IN:"in",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",BETWEEN:"between",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter"},j1={ripple:!1,inputStyle:"outlined",locale:{startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",completed:"Completed",pending:"Pending",dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",today:"Today",weekHeader:"Wk",firstDayOfWeek:0,dateFormat:"mm/dd/yy",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyFilterMessage:"No results found",searchMessage:"{0} results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyMessage:"No available options",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left"}},filterMatchModeOptions:{text:[Ft.STARTS_WITH,Ft.CONTAINS,Ft.NOT_CONTAINS,Ft.ENDS_WITH,Ft.EQUALS,Ft.NOT_EQUALS],numeric:[Ft.EQUALS,Ft.NOT_EQUALS,Ft.LESS_THAN,Ft.LESS_THAN_OR_EQUAL_TO,Ft.GREATER_THAN,Ft.GREATER_THAN_OR_EQUAL_TO],date:[Ft.DATE_IS,Ft.DATE_IS_NOT,Ft.DATE_BEFORE,Ft.DATE_AFTER]},zIndex:{modal:1100,overlay:1e3,menu:1e3,tooltip:1100},pt:void 0},SD=Symbol();function AD(t,e,n,i){const s=document.getElementById(n),r=s.cloneNode(!0),o=s.getAttribute("href").replace(t,e);r.setAttribute("id",n+"-clone"),r.setAttribute("href",o),r.addEventListener("load",()=>{s.remove(),r.setAttribute("id",n),i&&i()}),s.parentNode&&s.parentNode.insertBefore(r,s.nextSibling)}var kD={install:(t,e)=>{let n=e?{...j1,...e}:{...j1};const i={config:Fr(n),changeTheme:AD};t.config.globalProperties.$primevue=i,t.provide(SD,i)}};const Yp={registrationDateStart:"2023/12/04",registrationDateEnd:"2023/12/05",votesDateStart:"2023/12/06",votesDateEnd:"2023/12/13",timeLimitVotes:7};var Oi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},nI={exports:{}};/*!
* sweetalert2 v11.4.0
* Released under the MIT License.
*/(function(t,e){(function(n,i){t.exports=i()})(Oi,function(){const n="SweetAlert2:",i=u=>{const h=[];for(let p=0;p<u.length;p++)h.indexOf(u[p])===-1&&h.push(u[p]);return h},s=u=>u.charAt(0).toUpperCase()+u.slice(1),r=u=>Array.prototype.slice.call(u),o=u=>{console.warn("".concat(n," ").concat(typeof u=="object"?u.join(" "):u))},a=u=>{console.error("".concat(n," ").concat(u))},l=[],c=u=>{l.includes(u)||(l.push(u),o(u))},d=(u,h)=>{c('"'.concat(u,'" is deprecated and will be removed in the next major release. Please use "').concat(h,'" instead.'))},f=u=>typeof u=="function"?u():u,m=u=>u&&typeof u.toPromise=="function",y=u=>m(u)?u.toPromise():Promise.resolve(u),b=u=>u&&Promise.resolve(u)===u,C={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},S=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],B={},U=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],W=u=>Object.prototype.hasOwnProperty.call(C,u),M=u=>S.indexOf(u)!==-1,oe=u=>B[u],_e=u=>{W(u)||o('Unknown parameter "'.concat(u,'"'))},Re=u=>{U.includes(u)&&o('The parameter "'.concat(u,'" is incompatible with toasts'))},te=u=>{oe(u)&&d(u,oe(u))},be=u=>{!u.backdrop&&u.allowOutsideClick&&o('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const h in u)_e(h),u.toast&&Re(h),te(h)},Te="swal2-",Ke=u=>{const h={};for(const p in u)h[u[p]]=Te+u[p];return h},w=Ke(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),Ve=Ke(["success","warning","info","question","error"]),Ne=()=>document.body.querySelector(".".concat(w.container)),rn=u=>{const h=Ne();return h?h.querySelector(u):null},Se=u=>rn(".".concat(u)),ne=()=>Se(w.popup),De=()=>Se(w.icon),on=()=>Se(w.title),wn=()=>Se(w["html-container"]),an=()=>Se(w.image),xt=()=>Se(w["progress-steps"]),xn=()=>Se(w["validation-message"]),ln=()=>rn(".".concat(w.actions," .").concat(w.confirm)),k=()=>rn(".".concat(w.actions," .").concat(w.deny)),G=()=>Se(w["input-label"]),H=()=>rn(".".concat(w.loader)),Z=()=>rn(".".concat(w.actions," .").concat(w.cancel)),Ae=()=>Se(w.actions),Ye=()=>Se(w.footer),ge=()=>Se(w["timer-progress-bar"]),g=()=>Se(w.close),_=`
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
`,T=()=>{const u=r(ne().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((p,v)=>{const P=parseInt(p.getAttribute("tabindex")),re=parseInt(v.getAttribute("tabindex"));return P>re?1:P<re?-1:0}),h=r(ne().querySelectorAll(_)).filter(p=>p.getAttribute("tabindex")!=="-1");return i(u.concat(h)).filter(p=>Xt(p))},A=()=>!V(document.body,w["toast-shown"])&&!V(document.body,w["no-backdrop"]),N=()=>ne()&&V(ne(),w.toast),$=()=>ne().hasAttribute("data-loading"),z={previousBodyPadding:null},D=(u,h)=>{if(u.textContent="",h){const v=new DOMParser().parseFromString(h,"text/html");r(v.querySelector("head").childNodes).forEach(P=>{u.appendChild(P)}),r(v.querySelector("body").childNodes).forEach(P=>{u.appendChild(P)})}},V=(u,h)=>{if(!h)return!1;const p=h.split(/\s+/);for(let v=0;v<p.length;v++)if(!u.classList.contains(p[v]))return!1;return!0},O=(u,h)=>{r(u.classList).forEach(p=>{!Object.values(w).includes(p)&&!Object.values(Ve).includes(p)&&!Object.values(h.showClass).includes(p)&&u.classList.remove(p)})},Q=(u,h,p)=>{if(O(u,h),h.customClass&&h.customClass[p]){if(typeof h.customClass[p]!="string"&&!h.customClass[p].forEach)return o("Invalid type of customClass.".concat(p,'! Expected string or iterable object, got "').concat(typeof h.customClass[p],'"'));K(u,h.customClass[p])}},J=(u,h)=>{if(!h)return null;switch(h){case"select":case"textarea":case"file":return u.querySelector(".".concat(w.popup," > .").concat(w[h]));case"checkbox":return u.querySelector(".".concat(w.popup," > .").concat(w.checkbox," input"));case"radio":return u.querySelector(".".concat(w.popup," > .").concat(w.radio," input:checked"))||u.querySelector(".".concat(w.popup," > .").concat(w.radio," input:first-child"));case"range":return u.querySelector(".".concat(w.popup," > .").concat(w.range," input"));default:return u.querySelector(".".concat(w.popup," > .").concat(w.input))}},ie=u=>{if(u.focus(),u.type!=="file"){const h=u.value;u.value="",u.value=h}},le=(u,h,p)=>{!u||!h||(typeof h=="string"&&(h=h.split(/\s+/).filter(Boolean)),h.forEach(v=>{Array.isArray(u)?u.forEach(P=>{p?P.classList.add(v):P.classList.remove(v)}):p?u.classList.add(v):u.classList.remove(v)}))},K=(u,h)=>{le(u,h,!0)},Ie=(u,h)=>{le(u,h,!1)},Ee=(u,h)=>{const p=r(u.childNodes);for(let v=0;v<p.length;v++)if(V(p[v],h))return p[v]},Qe=(u,h,p)=>{p==="".concat(parseInt(p))&&(p=parseInt(p)),p||parseInt(p)===0?u.style[h]=typeof p=="number"?"".concat(p,"px"):p:u.style.removeProperty(h)},je=function(u){let h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";u.style.display=h},at=u=>{u.style.display="none"},eo=(u,h,p,v)=>{const P=u.querySelector(h);P&&(P.style[p]=v)},zn=(u,h,p)=>{h?je(u,p):at(u)},Xt=u=>!!(u&&(u.offsetWidth||u.offsetHeight||u.getClientRects().length)),Jt=()=>!Xt(ln())&&!Xt(k())&&!Xt(Z()),mn=u=>u.scrollHeight>u.clientHeight,to=u=>{const h=window.getComputedStyle(u),p=parseFloat(h.getPropertyValue("animation-duration")||"0"),v=parseFloat(h.getPropertyValue("transition-duration")||"0");return p>0||v>0},Eu=function(u){let h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const p=ge();Xt(p)&&(h&&(p.style.transition="none",p.style.width="100%"),setTimeout(()=>{p.style.transition="width ".concat(u/1e3,"s linear"),p.style.width="0%"},10))},MI=()=>{const u=ge(),h=parseInt(window.getComputedStyle(u).width);u.style.removeProperty("transition"),u.style.width="100%";const p=parseInt(window.getComputedStyle(u).width),v=h/p*100;u.style.removeProperty("transition"),u.style.width="".concat(v,"%")},Jp=()=>typeof window>"u"||typeof document>"u",FI=100,he={},BI=()=>{he.previousActiveElement&&he.previousActiveElement.focus?(he.previousActiveElement.focus(),he.previousActiveElement=null):document.body&&document.body.focus()},UI=u=>new Promise(h=>{if(!u)return h();const p=window.scrollX,v=window.scrollY;he.restoreFocusTimeout=setTimeout(()=>{BI(),h()},FI),window.scrollTo(p,v)}),VI=`
 <div aria-labelledby="`.concat(w.title,'" aria-describedby="').concat(w["html-container"],'" class="').concat(w.popup,`" tabindex="-1">
   <button type="button" class="`).concat(w.close,`"></button>
   <ul class="`).concat(w["progress-steps"],`"></ul>
   <div class="`).concat(w.icon,`"></div>
   <img class="`).concat(w.image,`" />
   <h2 class="`).concat(w.title,'" id="').concat(w.title,`"></h2>
   <div class="`).concat(w["html-container"],'" id="').concat(w["html-container"],`"></div>
   <input class="`).concat(w.input,`" />
   <input type="file" class="`).concat(w.file,`" />
   <div class="`).concat(w.range,`">
     <input type="range" />
     <output></output>
   </div>
   <select class="`).concat(w.select,`"></select>
   <div class="`).concat(w.radio,`"></div>
   <label for="`).concat(w.checkbox,'" class="').concat(w.checkbox,`">
     <input type="checkbox" />
     <span class="`).concat(w.label,`"></span>
   </label>
   <textarea class="`).concat(w.textarea,`"></textarea>
   <div class="`).concat(w["validation-message"],'" id="').concat(w["validation-message"],`"></div>
   <div class="`).concat(w.actions,`">
     <div class="`).concat(w.loader,`"></div>
     <button type="button" class="`).concat(w.confirm,`"></button>
     <button type="button" class="`).concat(w.deny,`"></button>
     <button type="button" class="`).concat(w.cancel,`"></button>
   </div>
   <div class="`).concat(w.footer,`"></div>
   <div class="`).concat(w["timer-progress-bar-container"],`">
     <div class="`).concat(w["timer-progress-bar"],`"></div>
   </div>
 </div>
`).replace(/(^|\n)\s*/g,""),$I=()=>{const u=Ne();return u?(u.remove(),Ie([document.documentElement,document.body],[w["no-backdrop"],w["toast-shown"],w["has-column"]]),!0):!1},os=()=>{he.currentInstance.resetValidationMessage()},HI=()=>{const u=ne(),h=Ee(u,w.input),p=Ee(u,w.file),v=u.querySelector(".".concat(w.range," input")),P=u.querySelector(".".concat(w.range," output")),re=Ee(u,w.select),wt=u.querySelector(".".concat(w.checkbox," input")),gn=Ee(u,w.textarea);h.oninput=os,p.onchange=os,re.onchange=os,wt.onchange=os,gn.oninput=os,v.oninput=()=>{os(),P.value=v.value},v.onchange=()=>{os(),v.nextSibling.value=v.value}},zI=u=>typeof u=="string"?document.querySelector(u):u,jI=u=>{const h=ne();h.setAttribute("role",u.toast?"alert":"dialog"),h.setAttribute("aria-live",u.toast?"polite":"assertive"),u.toast||h.setAttribute("aria-modal","true")},WI=u=>{window.getComputedStyle(u).direction==="rtl"&&K(Ne(),w.rtl)},qI=u=>{const h=$I();if(Jp()){a("SweetAlert2 requires document to initialize");return}const p=document.createElement("div");p.className=w.container,h&&K(p,w["no-transition"]),D(p,VI);const v=zI(u.target);v.appendChild(p),jI(u),WI(v),HI()},Tu=(u,h)=>{u instanceof HTMLElement?h.appendChild(u):typeof u=="object"?KI(u,h):u&&D(h,u)},KI=(u,h)=>{u.jquery?GI(h,u):D(h,u.toString())},GI=(u,h)=>{if(u.textContent="",0 in h)for(let p=0;p in h;p++)u.appendChild(h[p].cloneNode(!0));else u.appendChild(h.cloneNode(!0))},no=(()=>{if(Jp())return!1;const u=document.createElement("div"),h={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const p in h)if(Object.prototype.hasOwnProperty.call(h,p)&&typeof u.style[p]<"u")return h[p];return!1})(),YI=()=>{const u=document.createElement("div");u.className=w["scrollbar-measure"],document.body.appendChild(u);const h=u.getBoundingClientRect().width-u.clientWidth;return document.body.removeChild(u),h},QI=(u,h)=>{const p=Ae(),v=H();!h.showConfirmButton&&!h.showDenyButton&&!h.showCancelButton?at(p):je(p),Q(p,h,"actions"),XI(p,v,h),D(v,h.loaderHtml),Q(v,h,"loader")};function XI(u,h,p){const v=ln(),P=k(),re=Z();Su(v,"confirm",p),Su(P,"deny",p),Su(re,"cancel",p),JI(v,P,re,p),p.reverseButtons&&(p.toast?(u.insertBefore(re,v),u.insertBefore(P,v)):(u.insertBefore(re,h),u.insertBefore(P,h),u.insertBefore(v,h)))}function JI(u,h,p,v){if(!v.buttonsStyling)return Ie([u,h,p],w.styled);K([u,h,p],w.styled),v.confirmButtonColor&&(u.style.backgroundColor=v.confirmButtonColor,K(u,w["default-outline"])),v.denyButtonColor&&(h.style.backgroundColor=v.denyButtonColor,K(h,w["default-outline"])),v.cancelButtonColor&&(p.style.backgroundColor=v.cancelButtonColor,K(p,w["default-outline"]))}function Su(u,h,p){zn(u,p["show".concat(s(h),"Button")],"inline-block"),D(u,p["".concat(h,"ButtonText")]),u.setAttribute("aria-label",p["".concat(h,"ButtonAriaLabel")]),u.className=w[h],Q(u,p,"".concat(h,"Button")),K(u,p["".concat(h,"ButtonClass")])}function ZI(u,h){typeof h=="string"?u.style.background=h:h||K([document.documentElement,document.body],w["no-backdrop"])}function eE(u,h){h in w?K(u,w[h]):(o('The "position" parameter is not valid, defaulting to "center"'),K(u,w.center))}function tE(u,h){if(h&&typeof h=="string"){const p="grow-".concat(h);p in w&&K(u,w[p])}}const nE=(u,h)=>{const p=Ne();p&&(ZI(p,h.backdrop),eE(p,h.position),tE(p,h.grow),Q(p,h,"container"))};var Ce={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap};const iE=["input","file","range","select","radio","checkbox","textarea"],sE=(u,h)=>{const p=ne(),v=Ce.innerParams.get(u),P=!v||h.input!==v.input;iE.forEach(re=>{const wt=w[re],gn=Ee(p,wt);aE(re,h.inputAttributes),gn.className=wt,P&&at(gn)}),h.input&&(P&&rE(h),lE(h))},rE=u=>{if(!cn[u.input])return a('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(u.input,'"'));const h=Zp(u.input),p=cn[u.input](h,u);je(p),setTimeout(()=>{ie(p)})},oE=u=>{for(let h=0;h<u.attributes.length;h++){const p=u.attributes[h].name;["type","value","style"].includes(p)||u.removeAttribute(p)}},aE=(u,h)=>{const p=J(ne(),u);if(p){oE(p);for(const v in h)p.setAttribute(v,h[v])}},lE=u=>{const h=Zp(u.input);u.customClass&&K(h,u.customClass.input)},Au=(u,h)=>{(!u.placeholder||h.inputPlaceholder)&&(u.placeholder=h.inputPlaceholder)},io=(u,h,p)=>{if(p.inputLabel){u.id=w.input;const v=document.createElement("label"),P=w["input-label"];v.setAttribute("for",u.id),v.className=P,K(v,p.customClass.inputLabel),v.innerText=p.inputLabel,h.insertAdjacentElement("beforebegin",v)}},Zp=u=>{const h=w[u]?w[u]:w.input;return Ee(ne(),h)},cn={};cn.text=cn.email=cn.password=cn.number=cn.tel=cn.url=(u,h)=>(typeof h.inputValue=="string"||typeof h.inputValue=="number"?u.value=h.inputValue:b(h.inputValue)||o('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof h.inputValue,'"')),io(u,u,h),Au(u,h),u.type=h.input,u),cn.file=(u,h)=>(io(u,u,h),Au(u,h),u),cn.range=(u,h)=>{const p=u.querySelector("input"),v=u.querySelector("output");return p.value=h.inputValue,p.type=h.input,v.value=h.inputValue,io(p,u,h),u},cn.select=(u,h)=>{if(u.textContent="",h.inputPlaceholder){const p=document.createElement("option");D(p,h.inputPlaceholder),p.value="",p.disabled=!0,p.selected=!0,u.appendChild(p)}return io(u,u,h),u},cn.radio=u=>(u.textContent="",u),cn.checkbox=(u,h)=>{const p=J(ne(),"checkbox");p.value="1",p.id=w.checkbox,p.checked=!!h.inputValue;const v=u.querySelector("span");return D(v,h.inputPlaceholder),u},cn.textarea=(u,h)=>{u.value=h.inputValue,Au(u,h),io(u,u,h);const p=v=>parseInt(window.getComputedStyle(v).marginLeft)+parseInt(window.getComputedStyle(v).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const v=parseInt(window.getComputedStyle(ne()).width),P=()=>{const re=u.offsetWidth+p(u);re>v?ne().style.width="".concat(re,"px"):ne().style.width=null};new MutationObserver(P).observe(u,{attributes:!0,attributeFilter:["style"]})}}),u};const cE=(u,h)=>{const p=wn();Q(p,h,"htmlContainer"),h.html?(Tu(h.html,p),je(p,"block")):h.text?(p.textContent=h.text,je(p,"block")):at(p),sE(u,h)},uE=(u,h)=>{const p=Ye();zn(p,h.footer),h.footer&&Tu(h.footer,p),Q(p,h,"footer")},hE=(u,h)=>{const p=g();D(p,h.closeButtonHtml),Q(p,h,"closeButton"),zn(p,h.showCloseButton),p.setAttribute("aria-label",h.closeButtonAriaLabel)},dE=(u,h)=>{const p=Ce.innerParams.get(u),v=De();if(p&&h.icon===p.icon){tm(v,h),em(v,h);return}if(!h.icon&&!h.iconHtml)return at(v);if(h.icon&&Object.keys(Ve).indexOf(h.icon)===-1)return a('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(h.icon,'"')),at(v);je(v),tm(v,h),em(v,h),K(v,h.showClass.icon)},em=(u,h)=>{for(const p in Ve)h.icon!==p&&Ie(u,Ve[p]);K(u,Ve[h.icon]),gE(u,h),fE(),Q(u,h,"icon")},fE=()=>{const u=ne(),h=window.getComputedStyle(u).getPropertyValue("background-color"),p=u.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let v=0;v<p.length;v++)p[v].style.backgroundColor=h},pE=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,mE=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,tm=(u,h)=>{u.textContent="",h.iconHtml?D(u,nm(h.iconHtml)):h.icon==="success"?D(u,pE):h.icon==="error"?D(u,mE):D(u,nm({question:"?",warning:"!",info:"i"}[h.icon]))},gE=(u,h)=>{if(h.iconColor){u.style.color=h.iconColor,u.style.borderColor=h.iconColor;for(const p of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])eo(u,p,"backgroundColor",h.iconColor);eo(u,".swal2-success-ring","borderColor",h.iconColor)}},nm=u=>'<div class="'.concat(w["icon-content"],'">').concat(u,"</div>"),yE=(u,h)=>{const p=an();if(!h.imageUrl)return at(p);je(p,""),p.setAttribute("src",h.imageUrl),p.setAttribute("alt",h.imageAlt),Qe(p,"width",h.imageWidth),Qe(p,"height",h.imageHeight),p.className=w.image,Q(p,h,"image")},vE=u=>{const h=document.createElement("li");return K(h,w["progress-step"]),D(h,u),h},_E=u=>{const h=document.createElement("li");return K(h,w["progress-step-line"]),u.progressStepsDistance&&(h.style.width=u.progressStepsDistance),h},wE=(u,h)=>{const p=xt();if(!h.progressSteps||h.progressSteps.length===0)return at(p);je(p),p.textContent="",h.currentProgressStep>=h.progressSteps.length&&o("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),h.progressSteps.forEach((v,P)=>{const re=vE(v);if(p.appendChild(re),P===h.currentProgressStep&&K(re,w["active-progress-step"]),P!==h.progressSteps.length-1){const wt=_E(h);p.appendChild(wt)}})},bE=(u,h)=>{const p=on();zn(p,h.title||h.titleText,"block"),h.title&&Tu(h.title,p),h.titleText&&(p.innerText=h.titleText),Q(p,h,"title")},CE=(u,h)=>{const p=Ne(),v=ne();h.toast?(Qe(p,"width",h.width),v.style.width="100%",v.insertBefore(H(),De())):Qe(v,"width",h.width),Qe(v,"padding",h.padding),h.color&&(v.style.color=h.color),h.background&&(v.style.background=h.background),at(xn()),IE(v,h)},IE=(u,h)=>{u.className="".concat(w.popup," ").concat(Xt(u)?h.showClass.popup:""),h.toast?(K([document.documentElement,document.body],w["toast-shown"]),K(u,w.toast)):K(u,w.modal),Q(u,h,"popup"),typeof h.customClass=="string"&&K(u,h.customClass),h.icon&&K(u,w["icon-".concat(h.icon)])},im=(u,h)=>{CE(u,h),nE(u,h),wE(u,h),dE(u,h),yE(u,h),bE(u,h),hE(u,h),cE(u,h),QI(u,h),uE(u,h),typeof h.didRender=="function"&&h.didRender(ne())},js=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),EE=()=>{r(document.body.children).forEach(h=>{h===Ne()||h.contains(Ne())||(h.hasAttribute("aria-hidden")&&h.setAttribute("data-previous-aria-hidden",h.getAttribute("aria-hidden")),h.setAttribute("aria-hidden","true"))})},sm=()=>{r(document.body.children).forEach(h=>{h.hasAttribute("data-previous-aria-hidden")?(h.setAttribute("aria-hidden",h.getAttribute("data-previous-aria-hidden")),h.removeAttribute("data-previous-aria-hidden")):h.removeAttribute("aria-hidden")})},rm=["swal-title","swal-html","swal-footer"],TE=u=>{const h=typeof u.template=="string"?document.querySelector(u.template):u.template;if(!h)return{};const p=h.content;return NE(p),Object.assign(SE(p),AE(p),kE(p),xE(p),RE(p),PE(p,rm))},SE=u=>{const h={};return r(u.querySelectorAll("swal-param")).forEach(p=>{as(p,["name","value"]);const v=p.getAttribute("name"),P=p.getAttribute("value");typeof C[v]=="boolean"&&P==="false"&&(h[v]=!1),typeof C[v]=="object"&&(h[v]=JSON.parse(P))}),h},AE=u=>{const h={};return r(u.querySelectorAll("swal-button")).forEach(p=>{as(p,["type","color","aria-label"]);const v=p.getAttribute("type");h["".concat(v,"ButtonText")]=p.innerHTML,h["show".concat(s(v),"Button")]=!0,p.hasAttribute("color")&&(h["".concat(v,"ButtonColor")]=p.getAttribute("color")),p.hasAttribute("aria-label")&&(h["".concat(v,"ButtonAriaLabel")]=p.getAttribute("aria-label"))}),h},kE=u=>{const h={},p=u.querySelector("swal-image");return p&&(as(p,["src","width","height","alt"]),p.hasAttribute("src")&&(h.imageUrl=p.getAttribute("src")),p.hasAttribute("width")&&(h.imageWidth=p.getAttribute("width")),p.hasAttribute("height")&&(h.imageHeight=p.getAttribute("height")),p.hasAttribute("alt")&&(h.imageAlt=p.getAttribute("alt"))),h},xE=u=>{const h={},p=u.querySelector("swal-icon");return p&&(as(p,["type","color"]),p.hasAttribute("type")&&(h.icon=p.getAttribute("type")),p.hasAttribute("color")&&(h.iconColor=p.getAttribute("color")),h.iconHtml=p.innerHTML),h},RE=u=>{const h={},p=u.querySelector("swal-input");p&&(as(p,["type","label","placeholder","value"]),h.input=p.getAttribute("type")||"text",p.hasAttribute("label")&&(h.inputLabel=p.getAttribute("label")),p.hasAttribute("placeholder")&&(h.inputPlaceholder=p.getAttribute("placeholder")),p.hasAttribute("value")&&(h.inputValue=p.getAttribute("value")));const v=u.querySelectorAll("swal-input-option");return v.length&&(h.inputOptions={},r(v).forEach(P=>{as(P,["value"]);const re=P.getAttribute("value"),wt=P.innerHTML;h.inputOptions[re]=wt})),h},PE=(u,h)=>{const p={};for(const v in h){const P=h[v],re=u.querySelector(P);re&&(as(re,[]),p[P.replace(/^swal-/,"")]=re.innerHTML.trim())}return p},NE=u=>{const h=rm.concat(["swal-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);r(u.children).forEach(p=>{const v=p.tagName.toLowerCase();h.indexOf(v)===-1&&o("Unrecognized element <".concat(v,">"))})},as=(u,h)=>{r(u.attributes).forEach(p=>{h.indexOf(p.name)===-1&&o(['Unrecognized attribute "'.concat(p.name,'" on <').concat(u.tagName.toLowerCase(),">."),"".concat(h.length?"Allowed attributes are: ".concat(h.join(", ")):"To set the value, use HTML within the element.")])})};var om={email:(u,h)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(u)?Promise.resolve():Promise.resolve(h||"Invalid email address"),url:(u,h)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(u)?Promise.resolve():Promise.resolve(h||"Invalid URL")};function DE(u){u.inputValidator||Object.keys(om).forEach(h=>{u.input===h&&(u.inputValidator=om[h])})}function LE(u){(!u.target||typeof u.target=="string"&&!document.querySelector(u.target)||typeof u.target!="string"&&!u.target.appendChild)&&(o('Target parameter is not valid, defaulting to "body"'),u.target="body")}function OE(u){DE(u),u.showLoaderOnConfirm&&!u.preConfirm&&o(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),LE(u),typeof u.title=="string"&&(u.title=u.title.split(`
`).join("<br />")),qI(u)}class ME{constructor(h,p){this.callback=h,this.remaining=p,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(h){const p=this.running;return p&&this.stop(),this.remaining+=h,p&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const FE=()=>{z.previousBodyPadding===null&&document.body.scrollHeight>window.innerHeight&&(z.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(z.previousBodyPadding+YI(),"px"))},BE=()=>{z.previousBodyPadding!==null&&(document.body.style.paddingRight="".concat(z.previousBodyPadding,"px"),z.previousBodyPadding=null)},UE=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!V(document.body,w.iosfix)){const h=document.body.scrollTop;document.body.style.top="".concat(h*-1,"px"),K(document.body,w.iosfix),$E(),VE()}},VE=()=>{const u=navigator.userAgent,h=!!u.match(/iPad/i)||!!u.match(/iPhone/i),p=!!u.match(/WebKit/i);h&&p&&!u.match(/CriOS/i)&&ne().scrollHeight>window.innerHeight-44&&(Ne().style.paddingBottom="".concat(44,"px"))},$E=()=>{const u=Ne();let h;u.ontouchstart=p=>{h=HE(p)},u.ontouchmove=p=>{h&&(p.preventDefault(),p.stopPropagation())}},HE=u=>{const h=u.target,p=Ne();return zE(u)||jE(u)?!1:h===p||!mn(p)&&h.tagName!=="INPUT"&&h.tagName!=="TEXTAREA"&&!(mn(wn())&&wn().contains(h))},zE=u=>u.touches&&u.touches.length&&u.touches[0].touchType==="stylus",jE=u=>u.touches&&u.touches.length>1,WE=()=>{if(V(document.body,w.iosfix)){const u=parseInt(document.body.style.top,10);Ie(document.body,w.iosfix),document.body.style.top="",document.body.scrollTop=u*-1}},am=10,qE=u=>{const h=Ne(),p=ne();typeof u.willOpen=="function"&&u.willOpen(p);const P=window.getComputedStyle(document.body).overflowY;YE(h,p,u),setTimeout(()=>{KE(h,p)},am),A()&&(GE(h,u.scrollbarPadding,P),EE()),!N()&&!he.previousActiveElement&&(he.previousActiveElement=document.activeElement),typeof u.didOpen=="function"&&setTimeout(()=>u.didOpen(p)),Ie(h,w["no-transition"])},lm=u=>{const h=ne();if(u.target!==h)return;const p=Ne();h.removeEventListener(no,lm),p.style.overflowY="auto"},KE=(u,h)=>{no&&to(h)?(u.style.overflowY="hidden",h.addEventListener(no,lm)):u.style.overflowY="auto"},GE=(u,h,p)=>{UE(),h&&p!=="hidden"&&FE(),setTimeout(()=>{u.scrollTop=0})},YE=(u,h,p)=>{K(u,p.showClass.backdrop),h.style.setProperty("opacity","0","important"),je(h,"grid"),setTimeout(()=>{K(h,p.showClass.popup),h.style.removeProperty("opacity")},am),K([document.documentElement,document.body],w.shown),p.heightAuto&&p.backdrop&&!p.toast&&K([document.documentElement,document.body],w["height-auto"])},Ws=u=>{let h=ne();h||new Ka,h=ne();const p=H();N()?at(De()):QE(h,u),je(p),h.setAttribute("data-loading",!0),h.setAttribute("aria-busy",!0),h.focus()},QE=(u,h)=>{const p=Ae(),v=H();!h&&Xt(ln())&&(h=ln()),je(p),h&&(at(h),v.setAttribute("data-button-to-replace",h.className)),v.parentNode.insertBefore(v,h),K([u,p],w.loading)},XE=(u,h)=>{h.input==="select"||h.input==="radio"?n2(u,h):["text","email","number","tel","textarea"].includes(h.input)&&(m(h.inputValue)||b(h.inputValue))&&(Ws(ln()),i2(u,h))},JE=(u,h)=>{const p=u.getInput();if(!p)return null;switch(h.input){case"checkbox":return ZE(p);case"radio":return e2(p);case"file":return t2(p);default:return h.inputAutoTrim?p.value.trim():p.value}},ZE=u=>u.checked?1:0,e2=u=>u.checked?u.value:null,t2=u=>u.files.length?u.getAttribute("multiple")!==null?u.files:u.files[0]:null,n2=(u,h)=>{const p=ne(),v=P=>s2[h.input](p,ku(P),h);m(h.inputOptions)||b(h.inputOptions)?(Ws(ln()),y(h.inputOptions).then(P=>{u.hideLoading(),v(P)})):typeof h.inputOptions=="object"?v(h.inputOptions):a("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof h.inputOptions))},i2=(u,h)=>{const p=u.getInput();at(p),y(h.inputValue).then(v=>{p.value=h.input==="number"?parseFloat(v)||0:"".concat(v),je(p),p.focus(),u.hideLoading()}).catch(v=>{a("Error in inputValue promise: ".concat(v)),p.value="",je(p),p.focus(),u.hideLoading()})},s2={select:(u,h,p)=>{const v=Ee(u,w.select),P=(re,wt,gn)=>{const Zt=document.createElement("option");Zt.value=gn,D(Zt,wt),Zt.selected=cm(gn,p.inputValue),re.appendChild(Zt)};h.forEach(re=>{const wt=re[0],gn=re[1];if(Array.isArray(gn)){const Zt=document.createElement("optgroup");Zt.label=wt,Zt.disabled=!1,v.appendChild(Zt),gn.forEach(Ks=>P(Zt,Ks[1],Ks[0]))}else P(v,gn,wt)}),v.focus()},radio:(u,h,p)=>{const v=Ee(u,w.radio);h.forEach(re=>{const wt=re[0],gn=re[1],Zt=document.createElement("input"),Ks=document.createElement("label");Zt.type="radio",Zt.name=w.radio,Zt.value=wt,cm(wt,p.inputValue)&&(Zt.checked=!0);const Ou=document.createElement("span");D(Ou,gn),Ou.className=w.label,Ks.appendChild(Zt),Ks.appendChild(Ou),v.appendChild(Ks)});const P=v.querySelectorAll("input");P.length&&P[0].focus()}},ku=u=>{const h=[];return typeof Map<"u"&&u instanceof Map?u.forEach((p,v)=>{let P=p;typeof P=="object"&&(P=ku(P)),h.push([v,P])}):Object.keys(u).forEach(p=>{let v=u[p];typeof v=="object"&&(v=ku(v)),h.push([p,v])}),h},cm=(u,h)=>h&&h.toString()===u.toString(),r2=u=>{const h=Ce.innerParams.get(u);u.disableButtons(),h.input?um(u,"confirm"):Ru(u,!0)},o2=u=>{const h=Ce.innerParams.get(u);u.disableButtons(),h.returnInputValueOnDeny?um(u,"deny"):xu(u,!1)},a2=(u,h)=>{u.disableButtons(),h(js.cancel)},um=(u,h)=>{const p=Ce.innerParams.get(u);if(!p.input)return a('The "input" parameter is needed to be set when using returnInputValueOn'.concat(s(h)));const v=JE(u,p);p.inputValidator?l2(u,v,h):u.getInput().checkValidity()?h==="deny"?xu(u,v):Ru(u,v):(u.enableButtons(),u.showValidationMessage(p.validationMessage))},l2=(u,h,p)=>{const v=Ce.innerParams.get(u);u.disableInput(),Promise.resolve().then(()=>y(v.inputValidator(h,v.validationMessage))).then(re=>{u.enableButtons(),u.enableInput(),re?u.showValidationMessage(re):p==="deny"?xu(u,h):Ru(u,h)})},xu=(u,h)=>{const p=Ce.innerParams.get(u||void 0);p.showLoaderOnDeny&&Ws(k()),p.preDeny?(Ce.awaitingPromise.set(u||void 0,!0),Promise.resolve().then(()=>y(p.preDeny(h,p.validationMessage))).then(P=>{P===!1?u.hideLoading():u.closePopup({isDenied:!0,value:typeof P>"u"?h:P})}).catch(P=>dm(u||void 0,P))):u.closePopup({isDenied:!0,value:h})},hm=(u,h)=>{u.closePopup({isConfirmed:!0,value:h})},dm=(u,h)=>{u.rejectPromise(h)},Ru=(u,h)=>{const p=Ce.innerParams.get(u||void 0);p.showLoaderOnConfirm&&Ws(),p.preConfirm?(u.resetValidationMessage(),Ce.awaitingPromise.set(u||void 0,!0),Promise.resolve().then(()=>y(p.preConfirm(h,p.validationMessage))).then(P=>{Xt(xn())||P===!1?u.hideLoading():hm(u,typeof P>"u"?h:P)}).catch(P=>dm(u||void 0,P))):hm(u,h)},c2=(u,h,p)=>{Ce.innerParams.get(u).toast?u2(u,h,p):(d2(h),f2(h),p2(u,h,p))},u2=(u,h,p)=>{h.popup.onclick=()=>{const v=Ce.innerParams.get(u);v&&(h2(v)||v.timer||v.input)||p(js.close)}},h2=u=>u.showConfirmButton||u.showDenyButton||u.showCancelButton||u.showCloseButton;let Wa=!1;const d2=u=>{u.popup.onmousedown=()=>{u.container.onmouseup=function(h){u.container.onmouseup=void 0,h.target===u.container&&(Wa=!0)}}},f2=u=>{u.container.onmousedown=()=>{u.popup.onmouseup=function(h){u.popup.onmouseup=void 0,(h.target===u.popup||u.popup.contains(h.target))&&(Wa=!0)}}},p2=(u,h,p)=>{h.container.onclick=v=>{const P=Ce.innerParams.get(u);if(Wa){Wa=!1;return}v.target===h.container&&f(P.allowOutsideClick)&&p(js.backdrop)}},m2=()=>Xt(ne()),fm=()=>ln()&&ln().click(),g2=()=>k()&&k().click(),y2=()=>Z()&&Z().click(),v2=(u,h,p,v)=>{h.keydownTarget&&h.keydownHandlerAdded&&(h.keydownTarget.removeEventListener("keydown",h.keydownHandler,{capture:h.keydownListenerCapture}),h.keydownHandlerAdded=!1),p.toast||(h.keydownHandler=P=>w2(u,P,v),h.keydownTarget=p.keydownListenerCapture?window:ne(),h.keydownListenerCapture=p.keydownListenerCapture,h.keydownTarget.addEventListener("keydown",h.keydownHandler,{capture:h.keydownListenerCapture}),h.keydownHandlerAdded=!0)},Pu=(u,h,p)=>{const v=T();if(v.length)return h=h+p,h===v.length?h=0:h===-1&&(h=v.length-1),v[h].focus();ne().focus()},pm=["ArrowRight","ArrowDown"],_2=["ArrowLeft","ArrowUp"],w2=(u,h,p)=>{const v=Ce.innerParams.get(u);v&&(v.stopKeydownPropagation&&h.stopPropagation(),h.key==="Enter"?b2(u,h,v):h.key==="Tab"?C2(h,v):[...pm,..._2].includes(h.key)?I2(h.key):h.key==="Escape"&&E2(h,v,p))},b2=(u,h,p)=>{if(!(!f(p.allowEnterKey)||h.isComposing)&&h.target&&u.getInput()&&h.target.outerHTML===u.getInput().outerHTML){if(["textarea","file"].includes(p.input))return;fm(),h.preventDefault()}},C2=(u,h)=>{const p=u.target,v=T();let P=-1;for(let re=0;re<v.length;re++)if(p===v[re]){P=re;break}u.shiftKey?Pu(h,P,-1):Pu(h,P,1),u.stopPropagation(),u.preventDefault()},I2=u=>{const h=ln(),p=k(),v=Z();if(![h,p,v].includes(document.activeElement))return;const P=pm.includes(u)?"nextElementSibling":"previousElementSibling",re=document.activeElement[P];re instanceof HTMLElement&&re.focus()},E2=(u,h,p)=>{f(h.allowEscapeKey)&&(u.preventDefault(),p(js.esc))},T2=u=>typeof u=="object"&&u.jquery,mm=u=>u instanceof Element||T2(u),S2=u=>{const h={};return typeof u[0]=="object"&&!mm(u[0])?Object.assign(h,u[0]):["title","html","icon"].forEach((p,v)=>{const P=u[v];typeof P=="string"||mm(P)?h[p]=P:P!==void 0&&a("Unexpected type of ".concat(p,'! Expected "string" or "Element", got ').concat(typeof P))}),h};function A2(){const u=this;for(var h=arguments.length,p=new Array(h),v=0;v<h;v++)p[v]=arguments[v];return new u(...p)}function k2(u){class h extends this{_main(v,P){return super._main(v,Object.assign({},u,P))}}return h}const x2=()=>he.timeout&&he.timeout.getTimerLeft(),gm=()=>{if(he.timeout)return MI(),he.timeout.stop()},ym=()=>{if(he.timeout){const u=he.timeout.start();return Eu(u),u}},R2=()=>{const u=he.timeout;return u&&(u.running?gm():ym())},P2=u=>{if(he.timeout){const h=he.timeout.increase(u);return Eu(h,!0),h}},N2=()=>he.timeout&&he.timeout.isRunning();let vm=!1;const Nu={};function D2(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";Nu[u]=this,vm||(document.body.addEventListener("click",L2),vm=!0)}const L2=u=>{for(let h=u.target;h&&h!==document;h=h.parentNode)for(const p in Nu){const v=h.getAttribute(p);if(v){Nu[p].fire({template:v});return}}};var O2=Object.freeze({isValidParameter:W,isUpdatableParameter:M,isDeprecatedParameter:oe,argsToParams:S2,isVisible:m2,clickConfirm:fm,clickDeny:g2,clickCancel:y2,getContainer:Ne,getPopup:ne,getTitle:on,getHtmlContainer:wn,getImage:an,getIcon:De,getInputLabel:G,getCloseButton:g,getActions:Ae,getConfirmButton:ln,getDenyButton:k,getCancelButton:Z,getLoader:H,getFooter:Ye,getTimerProgressBar:ge,getFocusableElements:T,getValidationMessage:xn,isLoading:$,fire:A2,mixin:k2,showLoading:Ws,enableLoading:Ws,getTimerLeft:x2,stopTimer:gm,resumeTimer:ym,toggleTimer:R2,increaseTimer:P2,isTimerRunning:N2,bindClickHandler:D2});function _m(){const u=Ce.innerParams.get(this);if(!u)return;const h=Ce.domCache.get(this);at(h.loader),N()?u.icon&&je(De()):M2(h),Ie([h.popup,h.actions],w.loading),h.popup.removeAttribute("aria-busy"),h.popup.removeAttribute("data-loading"),h.confirmButton.disabled=!1,h.denyButton.disabled=!1,h.cancelButton.disabled=!1}const M2=u=>{const h=u.popup.getElementsByClassName(u.loader.getAttribute("data-button-to-replace"));h.length?je(h[0],"inline-block"):Jt()&&at(u.actions)};function F2(u){const h=Ce.innerParams.get(u||this),p=Ce.domCache.get(u||this);return p?J(p.popup,h.input):null}var so={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};function wm(u,h,p,v){N()?Cm(u,v):(UI(p).then(()=>Cm(u,v)),he.keydownTarget.removeEventListener("keydown",he.keydownHandler,{capture:he.keydownListenerCapture}),he.keydownHandlerAdded=!1),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(h.setAttribute("style","display:none !important"),h.removeAttribute("class"),h.innerHTML=""):h.remove(),A()&&(BE(),WE(),sm()),B2()}function B2(){Ie([document.documentElement,document.body],[w.shown,w["height-auto"],w["no-backdrop"],w["toast-shown"]])}function qa(u){u=H2(u);const h=so.swalPromiseResolve.get(this),p=V2(this);this.isAwaitingPromise()?u.isDismissed||(bm(this),h(u)):p&&h(u)}function U2(){return!!Ce.awaitingPromise.get(this)}const V2=u=>{const h=ne();if(!h)return!1;const p=Ce.innerParams.get(u);if(!p||V(h,p.hideClass.popup))return!1;Ie(h,p.showClass.popup),K(h,p.hideClass.popup);const v=Ne();return Ie(v,p.showClass.backdrop),K(v,p.hideClass.backdrop),z2(u,h,p),!0};function $2(u){const h=so.swalPromiseReject.get(this);bm(this),h&&h(u)}const bm=u=>{u.isAwaitingPromise()&&(Ce.awaitingPromise.delete(u),Ce.innerParams.get(u)||u._destroy())},H2=u=>typeof u>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},u),z2=(u,h,p)=>{const v=Ne(),P=no&&to(h);typeof p.willClose=="function"&&p.willClose(h),P?j2(u,h,v,p.returnFocus,p.didClose):wm(u,v,p.returnFocus,p.didClose)},j2=(u,h,p,v,P)=>{he.swalCloseEventFinishedCallback=wm.bind(null,u,p,v,P),h.addEventListener(no,function(re){re.target===h&&(he.swalCloseEventFinishedCallback(),delete he.swalCloseEventFinishedCallback)})},Cm=(u,h)=>{setTimeout(()=>{typeof h=="function"&&h.bind(u.params)(),u._destroy()})};function Im(u,h,p){const v=Ce.domCache.get(u);h.forEach(P=>{v[P].disabled=p})}function Em(u,h){if(!u)return!1;if(u.type==="radio"){const v=u.parentNode.parentNode.querySelectorAll("input");for(let P=0;P<v.length;P++)v[P].disabled=h}else u.disabled=h}function W2(){Im(this,["confirmButton","denyButton","cancelButton"],!1)}function q2(){Im(this,["confirmButton","denyButton","cancelButton"],!0)}function K2(){return Em(this.getInput(),!1)}function G2(){return Em(this.getInput(),!0)}function Y2(u){const h=Ce.domCache.get(this),p=Ce.innerParams.get(this);D(h.validationMessage,u),h.validationMessage.className=w["validation-message"],p.customClass&&p.customClass.validationMessage&&K(h.validationMessage,p.customClass.validationMessage),je(h.validationMessage);const v=this.getInput();v&&(v.setAttribute("aria-invalid",!0),v.setAttribute("aria-describedby",w["validation-message"]),ie(v),K(v,w.inputerror))}function Q2(){const u=Ce.domCache.get(this);u.validationMessage&&at(u.validationMessage);const h=this.getInput();h&&(h.removeAttribute("aria-invalid"),h.removeAttribute("aria-describedby"),Ie(h,w.inputerror))}function X2(){return Ce.domCache.get(this).progressSteps}function J2(u){const h=ne(),p=Ce.innerParams.get(this);if(!h||V(h,p.hideClass.popup))return o("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");const v=Z2(u),P=Object.assign({},p,v);im(this,P),Ce.innerParams.set(this,P),Object.defineProperties(this,{params:{value:Object.assign({},this.params,u),writable:!1,enumerable:!0}})}const Z2=u=>{const h={};return Object.keys(u).forEach(p=>{M(p)?h[p]=u[p]:o('Invalid parameter to update: "'.concat(p,`". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js

If you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md`))}),h};function eT(){const u=Ce.domCache.get(this),h=Ce.innerParams.get(this);if(!h){Tm(this);return}u.popup&&he.swalCloseEventFinishedCallback&&(he.swalCloseEventFinishedCallback(),delete he.swalCloseEventFinishedCallback),he.deferDisposalTimer&&(clearTimeout(he.deferDisposalTimer),delete he.deferDisposalTimer),typeof h.didDestroy=="function"&&h.didDestroy(),tT(this)}const tT=u=>{Tm(u),delete u.params,delete he.keydownHandler,delete he.keydownTarget,delete he.currentInstance},Tm=u=>{u.isAwaitingPromise()?(Du(Ce,u),Ce.awaitingPromise.set(u,!0)):(Du(so,u),Du(Ce,u))},Du=(u,h)=>{for(const p in u)u[p].delete(h)};var Sm=Object.freeze({hideLoading:_m,disableLoading:_m,getInput:F2,close:qa,isAwaitingPromise:U2,rejectPromise:$2,closePopup:qa,closeModal:qa,closeToast:qa,enableButtons:W2,disableButtons:q2,enableInput:K2,disableInput:G2,showValidationMessage:Y2,resetValidationMessage:Q2,getProgressSteps:X2,update:J2,_destroy:eT});let Lu;class qs{constructor(){if(typeof window>"u")return;Lu=this;for(var h=arguments.length,p=new Array(h),v=0;v<h;v++)p[v]=arguments[v];const P=Object.freeze(this.constructor.argsToParams(p));Object.defineProperties(this,{params:{value:P,writable:!1,enumerable:!0,configurable:!0}});const re=this._main(this.params);Ce.promise.set(this,re)}_main(h){let p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};be(Object.assign({},p,h)),he.currentInstance&&(he.currentInstance._destroy(),A()&&sm()),he.currentInstance=this;const v=iT(h,p);OE(v),Object.freeze(v),he.timeout&&(he.timeout.stop(),delete he.timeout),clearTimeout(he.restoreFocusTimeout);const P=sT(this);return im(this,v),Ce.innerParams.set(this,v),nT(this,P,v)}then(h){return Ce.promise.get(this).then(h)}finally(h){return Ce.promise.get(this).finally(h)}}const nT=(u,h,p)=>new Promise((v,P)=>{const re=wt=>{u.closePopup({isDismissed:!0,dismiss:wt})};so.swalPromiseResolve.set(u,v),so.swalPromiseReject.set(u,P),h.confirmButton.onclick=()=>r2(u),h.denyButton.onclick=()=>o2(u),h.cancelButton.onclick=()=>a2(u,re),h.closeButton.onclick=()=>re(js.close),c2(u,h,re),v2(u,he,p,re),XE(u,p),qE(p),rT(he,p,re),oT(h,p),setTimeout(()=>{h.container.scrollTop=0})}),iT=(u,h)=>{const p=TE(u),v=Object.assign({},C,h,p,u);return v.showClass=Object.assign({},C.showClass,v.showClass),v.hideClass=Object.assign({},C.hideClass,v.hideClass),v},sT=u=>{const h={popup:ne(),container:Ne(),actions:Ae(),confirmButton:ln(),denyButton:k(),cancelButton:Z(),loader:H(),closeButton:g(),validationMessage:xn(),progressSteps:xt()};return Ce.domCache.set(u,h),h},rT=(u,h,p)=>{const v=ge();at(v),h.timer&&(u.timeout=new ME(()=>{p("timer"),delete u.timeout},h.timer),h.timerProgressBar&&(je(v),Q(v,h,"timerProgressBar"),setTimeout(()=>{u.timeout&&u.timeout.running&&Eu(h.timer)})))},oT=(u,h)=>{if(!h.toast){if(!f(h.allowEnterKey))return lT();aT(u,h)||Pu(h,-1,1)}},aT=(u,h)=>h.focusDeny&&Xt(u.denyButton)?(u.denyButton.focus(),!0):h.focusCancel&&Xt(u.cancelButton)?(u.cancelButton.focus(),!0):h.focusConfirm&&Xt(u.confirmButton)?(u.confirmButton.focus(),!0):!1,lT=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};Object.assign(qs.prototype,Sm),Object.assign(qs,O2),Object.keys(Sm).forEach(u=>{qs[u]=function(){if(Lu)return Lu[u](...arguments)}}),qs.DismissReason=js,qs.version="11.4.0";const Ka=qs;return Ka.default=Ka,Ka}),typeof Oi<"u"&&Oi.Sweetalert2&&(Oi.swal=Oi.sweetAlert=Oi.Swal=Oi.SweetAlert=Oi.Sweetalert2)})(nI);var yl=nI.exports;class xD{static install(e,n={}){var i;const s=yl.mixin(n),r=function(...o){return s.fire.call(s,...o)};Object.assign(r,yl),Object.keys(yl).filter(o=>typeof yl[o]=="function").forEach(o=>{r[o]=s[o].bind(s)}),(i=e.config)!=null&&i.globalProperties&&!e.config.globalProperties.$swal?(e.config.globalProperties.$swal=r,e.provide("$swal",r)):Object.prototype.hasOwnProperty.call(e,"$swal")||(e.prototype.$swal=r,e.swal=r)}}var kt={name:"BaseComponent",props:{pt:{type:Object,default:void 0}},methods:{getOption(t={},e=""){const n=Xe.convertToFlatCase(e);return t[Object.keys(t).find(i=>Xe.convertToFlatCase(i)===n)||""]},getPTValue(t={},e="",n={}){const i=Xe.getItemValue(this.getOption(t,e),n),s=Xe.getItemValue(this.getOption(this.defaultPT,e),n);return E(i,s)},ptm(t="",e={}){return this.getPTValue(this.pt,t,{props:this.$props,state:this.$data,...e})},ptmo(t={},e="",n={}){return this.getPTValue(t,e,n)}},computed:{defaultPT(){return Xe.getItemValue(this.getOption(this.$primevue.config.pt,this.$.type.name),this.defaultsParams)},defaultsParams(){return{instance:this.$}}}},Qp={name:"InputText",extends:kt,emits:["update:modelValue"],props:{modelValue:null},methods:{onInput(t){this.$emit("update:modelValue",t.target.value)}},computed:{filled(){return this.modelValue!=null&&this.modelValue.toString().length>0}}};const RD=["value"];function PD(t,e,n,i,s,r){return I(),L("input",E({class:["p-inputtext p-component",{"p-filled":r.filled}],value:n.modelValue,onInput:e[0]||(e[0]=(...o)=>r.onInput&&r.onInput(...o))},t.ptm("root")),null,16,RD)}Qp.render=PD;var Cu={name:"Portal",props:{appendTo:{type:String,default:"body"},disabled:{type:Boolean,default:!1}},data(){return{mounted:!1}},mounted(){this.mounted=Y.isClient()},computed:{inline(){return this.disabled||this.appendTo==="self"}}};function ND(t,e,n,i,s,r){return r.inline?ye(t.$slots,"default",{key:0}):s.mounted?(I(),me(Q4,{key:1,to:n.appendTo},[ye(t.$slots,"default")],8,["to"])):fe("",!0)}Cu.render=ND;var ui=tI(),Ot={name:"BaseIcon",props:{label:{type:String,default:void 0},spin:{type:Boolean,default:!1}},methods:{pti(){const t=Xe.isEmpty(this.label);return{class:["p-icon",{"p-icon-spin":this.spin}],role:t?void 0:"img","aria-label":t?void 0:this.label,"aria-hidden":t}}}};function DD(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",n==="top"&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}}var LD=`
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
`;DD(LD);var fa={name:"CheckIcon",extends:Ot};const OD=R("path",{d:"M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z",fill:"currentColor"},null,-1),MD=[OD];function FD(t,e,n,i,s,r){return I(),L("svg",E({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),MD,16)}fa.render=FD;var pa={name:"ExclamationTriangleIcon",extends:Ot};const BD=Z4('<g clip-path="url(#clip0_323_12417)"><path d="M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z" fill="currentColor"></path><path d="M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z" fill="currentColor"></path><path d="M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z" fill="currentColor"></path></g><defs><clipPath id="clip0_323_12417"><rect width="14" height="14" fill="white"></rect></clipPath></defs>',2),UD=[BD];function VD(t,e,n,i,s,r){return I(),L("svg",E({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),UD,16)}pa.render=VD;var ma={name:"InfoCircleIcon",extends:Ot};const $D=R("g",{"clip-path":"url(#clip0_408_21102)"},[R("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z",fill:"currentColor"})],-1),HD=R("defs",null,[R("clipPath",{id:"clip0_408_21102"},[R("rect",{width:"14",height:"14",fill:"white"})])],-1),zD=[$D,HD];function jD(t,e,n,i,s,r){return I(),L("svg",E({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),zD,16)}ma.render=jD;var Zr={name:"TimesIcon",extends:Ot};const WD=R("path",{d:"M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z",fill:"currentColor"},null,-1),qD=[WD];function KD(t,e,n,i,s,r){return I(),L("svg",E({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),qD,16)}Zr.render=KD;var ga={name:"TimesCircleIcon",extends:Ot};const GD=R("g",{"clip-path":"url(#clip0_334_13179)"},[R("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z",fill:"currentColor"})],-1),YD=R("defs",null,[R("clipPath",{id:"clip0_334_13179"},[R("rect",{width:"14",height:"14",fill:"white"})])],-1),QD=[GD,YD];function XD(t,e,n,i,s,r){return I(),L("svg",E({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),QD,16)}ga.render=XD;let Fd;function JD(t){t.addEventListener("mousedown",iI)}function ZD(t){t.removeEventListener("mousedown",iI)}function eL(t){let e=document.createElement("span");e.className="p-ink",e.setAttribute("role","presentation"),e.setAttribute("aria-hidden","true"),t.appendChild(e),e.addEventListener("animationend",sI)}function tL(t){let e=rI(t);e&&(ZD(t),e.removeEventListener("animationend",sI),e.remove())}function iI(t){let e=t.currentTarget,n=rI(e);if(!n||getComputedStyle(n,null).display==="none")return;if(Y.removeClass(n,"p-ink-active"),!Y.getHeight(n)&&!Y.getWidth(n)){let o=Math.max(Y.getOuterWidth(e),Y.getOuterHeight(e));n.style.height=o+"px",n.style.width=o+"px"}let i=Y.getOffset(e),s=t.pageX-i.left+document.body.scrollTop-Y.getWidth(n)/2,r=t.pageY-i.top+document.body.scrollLeft-Y.getHeight(n)/2;n.style.top=r+"px",n.style.left=s+"px",Y.addClass(n,"p-ink-active"),Fd=setTimeout(()=>{n&&Y.removeClass(n,"p-ink-active")},401)}function sI(t){Fd&&clearTimeout(Fd),Y.removeClass(t.currentTarget,"p-ink-active")}function rI(t){for(let e=0;e<t.children.length;e++)if(typeof t.children[e].className=="string"&&t.children[e].className.indexOf("p-ink")!==-1)return t.children[e];return null}const zs={mounted(t,e){e.instance.$primevue&&e.instance.$primevue.config&&e.instance.$primevue.config.ripple&&(eL(t),JD(t))},unmounted(t){tL(t)}};var oI={name:"ToastMessage",extends:kt,emits:["close"],props:{message:{type:null,default:null},templates:{type:Object,default:null},closeIcon:{type:String,default:null},infoIcon:{type:String,default:null},warnIcon:{type:String,default:null},errorIcon:{type:String,default:null},successIcon:{type:String,default:null},closeButtonProps:{type:null,default:null}},closeTimeout:null,mounted(){this.message.life&&(this.closeTimeout=setTimeout(()=>{this.close({message:this.message,type:"life-end"})},this.message.life))},beforeUnmount(){this.clearCloseTimeout()},methods:{close(t){this.$emit("close",t)},onCloseClick(){this.clearCloseTimeout(),this.close({message:this.message,type:"close"})},clearCloseTimeout(){this.closeTimeout&&(clearTimeout(this.closeTimeout),this.closeTimeout=null)}},computed:{containerClass(){return["p-toast-message",this.message.styleClass,{"p-toast-message-info":this.message.severity==="info","p-toast-message-warn":this.message.severity==="warn","p-toast-message-error":this.message.severity==="error","p-toast-message-success":this.message.severity==="success"}]},iconComponent(){return{info:!this.infoIcon&&ma,success:!this.successIcon&&fa,warn:!this.warnIcon&&pa,error:!this.errorIcon&&ga}[this.message.severity]},iconClass(){return[{[this.infoIcon]:this.message.severity==="info",[this.warnIcon]:this.message.severity==="warn",[this.errorIcon]:this.message.severity==="error",[this.successIcon]:this.message.severity==="success"}]},closeAriaLabel(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},components:{TimesIcon:Zr,InfoCircleIcon:ma,CheckIcon:fa,ExclamationTriangleIcon:pa,TimesCircleIcon:ga},directives:{ripple:zs}};const nL=["aria-label"];function iL(t,e,n,i,s,r){const o=Qi("ripple");return I(),L("div",E({class:r.containerClass,role:"alert","aria-live":"assertive","aria-atomic":"true"},t.ptm("container")),[R("div",E({class:["p-toast-message-content",n.message.contentStyleClass]},t.ptm("content")),[n.templates.message?(I(),me(ot(n.templates.message),{key:1,message:n.message},null,8,["message"])):(I(),L(He,{key:0},[(I(),me(ot(n.templates.icon?n.templates.icon:r.iconComponent.name?r.iconComponent:"span"),E({class:[r.iconClass,"p-toast-message-icon"]},t.ptm("icon")),null,16,["class"])),R("div",E({class:"p-toast-message-text"},t.ptm("text")),[R("span",E({class:"p-toast-summary"},t.ptm("summary")),ct(n.message.summary),17),R("div",E({class:"p-toast-detail"},t.ptm("detail")),ct(n.message.detail),17)],16)],64)),n.message.closable!==!1?(I(),L("div",zd(E({key:2},t.ptm("buttonContainer"))),[nn((I(),L("button",E({class:"p-toast-icon-close p-link",type:"button","aria-label":r.closeAriaLabel,onClick:e[0]||(e[0]=(...a)=>r.onCloseClick&&r.onCloseClick(...a)),autofocus:""},{...n.closeButtonProps,...t.ptm("button")}),[(I(),me(ot(n.templates.closeicon||"TimesIcon"),E({class:["p-toast-icon-close-icon",n.closeIcon]},t.ptm("buttonIcon")),null,16,["class"]))],16,nL)),[[o]])],16)):fe("",!0)],16)],16)}oI.render=iL;var sL=0,aI={name:"Toast",extends:kt,inheritAttrs:!1,emits:["close","life-end"],props:{group:{type:String,default:null},position:{type:String,default:"top-right"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},breakpoints:{type:Object,default:null},closeIcon:{type:String,default:void 0},infoIcon:{type:String,default:void 0},warnIcon:{type:String,default:void 0},errorIcon:{type:String,default:void 0},successIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null}},data(){return{messages:[]}},styleElement:null,mounted(){ui.on("add",this.onAdd),ui.on("remove-group",this.onRemoveGroup),ui.on("remove-all-groups",this.onRemoveAllGroups),this.breakpoints&&this.createStyle()},beforeUnmount(){this.destroyStyle(),this.$refs.container&&this.autoZIndex&&An.clear(this.$refs.container),ui.off("add",this.onAdd),ui.off("remove-group",this.onRemoveGroup),ui.off("remove-all-groups",this.onRemoveAllGroups)},methods:{add(t){t.id==null&&(t.id=sL++),this.messages=[...this.messages,t]},remove(t){let e=-1;for(let n=0;n<this.messages.length;n++)if(this.messages[n]===t.message){e=n;break}this.messages.splice(e,1),this.$emit(t.type,{message:t.message})},onAdd(t){this.group==t.group&&this.add(t)},onRemoveGroup(t){this.group===t&&(this.messages=[])},onRemoveAllGroups(){this.messages=[]},onEnter(){this.$refs.container.setAttribute(this.attributeSelector,""),this.autoZIndex&&An.set("modal",this.$refs.container,this.baseZIndex||this.$primevue.config.zIndex.modal)},onLeave(){this.$refs.container&&this.autoZIndex&&Xe.isEmpty(this.messages)&&setTimeout(()=>{An.clear(this.$refs.container)},200)},createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let t="";for(let e in this.breakpoints){let n="";for(let i in this.breakpoints[e])n+=i+":"+this.breakpoints[e][i]+"!important;";t+=`
                        @media screen and (max-width: ${e}) {
                            .p-toast[${this.attributeSelector}] {
                                ${n}
                            }
                        }
                    `}this.styleElement.innerHTML=t}},destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)}},computed:{containerClass(){return["p-toast p-component p-toast-"+this.position,{"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},attributeSelector(){return Ai()}},components:{ToastMessage:oI,Portal:Cu}};function rL(t,e,n,i,s,r){const o=ut("ToastMessage"),a=ut("Portal");return I(),me(a,null,{default:lt(()=>[R("div",E({ref:"container",class:r.containerClass},{...t.$attrs,...t.ptm("root")}),[xe(DS,E({name:"p-toast-message",tag:"div",onEnter:r.onEnter,onLeave:r.onLeave},t.ptm("message")),{default:lt(()=>[(I(!0),L(He,null,Xi(s.messages,l=>(I(),me(o,{key:l.id,message:l,templates:t.$slots,closeIcon:n.closeIcon,infoIcon:n.infoIcon,warnIcon:n.warnIcon,errorIcon:n.errorIcon,successIcon:n.successIcon,closeButtonProps:n.closeButtonProps,onClose:e[0]||(e[0]=c=>r.remove(c)),pt:t.pt},null,8,["message","templates","closeIcon","infoIcon","warnIcon","errorIcon","successIcon","closeButtonProps","pt"]))),128))]),_:1},16,["onEnter","onLeave"])],16)]),_:1})}function oL(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",n==="top"&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}}var aL=`
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
`;oL(aL);aI.render=rL;var lI={name:"SpinnerIcon",extends:Ot};const lL=R("g",{"clip-path":"url(#clip0_417_21408)"},[R("path",{d:"M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",fill:"currentColor"})],-1),cL=R("defs",null,[R("clipPath",{id:"clip0_417_21408"},[R("rect",{width:"14",height:"14",fill:"white"})])],-1),uL=[lL,cL];function hL(t,e,n,i,s,r){return I(),L("svg",E({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),uL,16)}lI.render=hL;var Iu={name:"Button",extends:kt,props:{label:{type:String,default:null},icon:{type:String,default:null},iconPos:{type:String,default:"left"},iconClass:{type:String,default:null},badge:{type:String,default:null},badgeClass:{type:String,default:null},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:void 0},link:{type:Boolean,default:!1},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},plain:{type:Boolean,default:!1}},computed:{buttonClass(){return["p-button p-component",{"p-button-icon-only":this.hasIcon&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-disabled":this.$attrs.disabled||this.loading,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.hasIcon&&this.label,"p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text,"p-button-outlined":this.outlined,"p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain}]},iconStyleClass(){return["p-button-icon",this.iconClass,{"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}]},loadingIconStyleClass(){return["p-button-loading-icon pi-spin",this.iconStyleClass]},badgeStyleClass(){return["p-badge p-component",this.badgeClass,{"p-badge-no-gutter":this.badge&&String(this.badge).length===1}]},disabled(){return this.$attrs.disabled||this.loading},defaultAriaLabel(){return this.label?this.label+(this.badge?" "+this.badge:""):this.$attrs["aria-label"]},hasIcon(){return this.icon||this.$slots.icon}},components:{SpinnerIcon:lI},directives:{ripple:zs}};const dL=["aria-label","disabled"];function fL(t,e,n,i,s,r){const o=ut("SpinnerIcon"),a=Qi("ripple");return nn((I(),L("button",E({class:r.buttonClass,type:"button","aria-label":r.defaultAriaLabel,disabled:r.disabled},t.ptm("root")),[ye(t.$slots,"default",{},()=>[n.loading?ye(t.$slots,"loadingicon",{key:0,class:wi(r.loadingIconStyleClass)},()=>[n.loadingIcon?(I(),L("span",E({key:0,class:[r.loadingIconStyleClass,n.loadingIcon]},t.ptm("loadingIcon")),null,16)):(I(),me(o,E({key:1,class:r.loadingIconStyleClass,spin:""},t.ptm("loadingIcon")),null,16,["class"]))]):ye(t.$slots,"icon",{key:1,class:wi(r.iconStyleClass)},()=>[n.icon?(I(),L("span",E({key:0,class:[r.iconStyleClass,n.icon]},t.ptm("icon")),null,16)):fe("",!0)]),R("span",E({class:"p-button-label"},t.ptm("label")),ct(n.label||" "),17),n.badge?(I(),L("span",E({key:2,class:r.badgeStyleClass},t.ptm("badge")),ct(n.badge),17)):fe("",!0)])],16,dL)),[[a]])}Iu.render=fL;var cI={name:"BarsIcon",extends:Ot};const pL=R("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z",fill:"currentColor"},null,-1),mL=[pL];function gL(t,e,n,i,s,r){return I(),L("svg",E({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),mL,16)}cI.render=gL;var uI={name:"AngleDownIcon",extends:Ot};const yL=R("path",{d:"M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z",fill:"currentColor"},null,-1),vL=[yL];function _L(t,e,n,i,s,r){return I(),L("svg",E({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),vL,16)}uI.render=_L;var hI={name:"AngleRightIcon",extends:Ot};const wL=R("path",{d:"M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z",fill:"currentColor"},null,-1),bL=[wL];function CL(t,e,n,i,s,r){return I(),L("svg",E({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),bL,16)}hI.render=CL;var dI={name:"MenubarSub",extends:kt,emits:["item-mouseenter","item-click"],props:{items:{type:Array,default:null},root:{type:Boolean,default:!1},popup:{type:Boolean,default:!1},mobileActive:{type:Boolean,default:!1},templates:{type:Object,default:null},exact:{type:Boolean,default:!0},level:{type:Number,default:0},menuId:{type:String,default:null},focusedItemId:{type:String,default:null},activeItemPath:{type:Object,default:null}},list:null,methods:{getItemId(t){return`${this.menuId}_${t.key}`},getItemKey(t){return this.getItemId(t)},getItemProp(t,e,n){return t&&t.item?Xe.getItemValue(t.item[e],n):void 0},getItemLabel(t){return this.getItemProp(t,"label")},getPTOptions(t,e){return this.ptm(e,{context:{active:this.isItemActive(t),focused:this.isItemFocused(t)}})},isItemActive(t){return this.activeItemPath.some(e=>e.key===t.key)},isItemVisible(t){return this.getItemProp(t,"visible")!==!1},isItemDisabled(t){return this.getItemProp(t,"disabled")},isItemFocused(t){return this.focusedItemId===this.getItemId(t)},isItemGroup(t){return Xe.isNotEmpty(t.items)},onItemClick(t,e){this.getItemProp(e,"command",{originalEvent:t,item:e.item}),this.$emit("item-click",{originalEvent:t,processedItem:e,isFocus:!0})},onItemMouseEnter(t,e){this.$emit("item-mouseenter",{originalEvent:t,processedItem:e})},onItemActionClick(t,e){e&&e(t)},getAriaSetSize(){return this.items.filter(t=>this.isItemVisible(t)&&!this.getItemProp(t,"separator")).length},getAriaPosInset(t){return t-this.items.slice(0,t).filter(e=>this.isItemVisible(e)&&this.getItemProp(e,"separator")).length+1},getItemClass(t){return["p-menuitem",this.getItemProp(t,"class"),{"p-menuitem-active p-highlight":this.isItemActive(t),"p-focus":this.isItemFocused(t),"p-disabled":this.isItemDisabled(t)}]},getItemActionClass(t,e){return["p-menuitem-link",{"router-link-active":e&&e.isActive,"router-link-active-exact":this.exact&&e&&e.isExactActive}]},getItemIconClass(t){return["p-menuitem-icon",this.getItemProp(t,"icon")]},getSeparatorItemClass(t){return["p-menuitem-separator",this.getItemProp(t,"class")]}},computed:{containerClass(){return{"p-submenu-list":!this.root,"p-menubar-root-list":this.root}}},components:{AngleRightIcon:hI,AngleDownIcon:uI},directives:{ripple:zs}};const IL=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-level","aria-setsize","aria-posinset"],EL=["onClick","onMouseenter"],TL=["href","onClick"],SL=["href","target"],AL=["id"];function kL(t,e,n,i,s,r){const o=ut("router-link"),a=ut("MenubarSub",!0),l=Qi("ripple");return I(),L("ul",zd(of(t.ptm("menu"))),[(I(!0),L(He,null,Xi(n.items,(c,d)=>(I(),L(He,{key:r.getItemKey(c)},[r.isItemVisible(c)&&!r.getItemProp(c,"separator")?(I(),L("li",E({key:0,id:r.getItemId(c),style:r.getItemProp(c,"style"),class:r.getItemClass(c),role:"menuitem","aria-label":r.getItemLabel(c),"aria-disabled":r.isItemDisabled(c)||void 0,"aria-expanded":r.isItemGroup(c)?r.isItemActive(c):void 0,"aria-haspopup":r.isItemGroup(c)&&!r.getItemProp(c,"to")?"menu":void 0,"aria-level":n.level+1,"aria-setsize":r.getAriaSetSize(),"aria-posinset":r.getAriaPosInset(d)},r.getPTOptions(c,"menuitem")),[R("div",E({class:"p-menuitem-content",onClick:f=>r.onItemClick(f,c),onMouseenter:f=>r.onItemMouseEnter(f,c)},r.getPTOptions(c,"content")),[n.templates.item?(I(),me(ot(n.templates.item),{key:1,item:c.item},null,8,["item"])):(I(),L(He,{key:0},[r.getItemProp(c,"to")&&!r.isItemDisabled(c)?(I(),me(o,{key:0,to:r.getItemProp(c,"to"),custom:""},{default:lt(({navigate:f,href:m,isActive:y,isExactActive:b})=>[nn((I(),L("a",E({href:m,class:r.getItemActionClass(c,{isActive:y,isExactActive:b}),tabindex:"-1","aria-hidden":"true",onClick:C=>r.onItemActionClick(C,f)},r.getPTOptions(c,"action")),[n.templates.itemicon?(I(),me(ot(n.templates.itemicon),{key:0,item:c.item,class:wi(r.getItemIconClass(c))},null,8,["item","class"])):r.getItemProp(c,"icon")?(I(),L("span",E({key:1,class:r.getItemIconClass(c)},r.getPTOptions(c,"icon")),null,16)):fe("",!0),R("span",E({class:"p-menuitem-text"},r.getPTOptions(c,"label")),ct(r.getItemLabel(c)),17)],16,TL)),[[l]])]),_:2},1032,["to"])):nn((I(),L("a",E({key:1,href:r.getItemProp(c,"url"),class:r.getItemActionClass(c),target:r.getItemProp(c,"target"),tabindex:"-1","aria-hidden":"true"},r.getPTOptions(c,"action")),[n.templates.itemicon?(I(),me(ot(n.templates.itemicon),{key:0,item:c.item,class:wi(r.getItemIconClass(c))},null,8,["item","class"])):r.getItemProp(c,"icon")?(I(),L("span",E({key:1,class:r.getItemIconClass(c)},r.getPTOptions(c,"icon")),null,16)):fe("",!0),R("span",E({class:"p-menuitem-text"},r.getPTOptions(c,"label")),ct(r.getItemLabel(c)),17),r.getItemProp(c,"items")?(I(),L(He,{key:2},[n.templates.submenuicon?(I(),me(ot(n.templates.submenuicon),{key:0,root:n.root,active:r.isItemActive(c),class:"p-submenu-icon"},null,8,["root","active"])):(I(),me(ot(n.root?"AngleDownIcon":"AngleRightIcon"),E({key:1,class:"p-submenu-icon"},r.getPTOptions(c,"submenuIcon")),null,16))],64)):fe("",!0)],16,SL)),[[l]])],64))],16,EL),r.isItemVisible(c)&&r.isItemGroup(c)?(I(),me(a,{key:0,menuId:n.menuId,role:"menu",class:"p-submenu-list",focusedItemId:n.focusedItemId,items:c.items,mobileActive:n.mobileActive,activeItemPath:n.activeItemPath,templates:n.templates,exact:n.exact,level:n.level+1,pt:t.pt,onItemClick:e[0]||(e[0]=f=>t.$emit("item-click",f)),onItemMouseenter:e[1]||(e[1]=f=>t.$emit("item-mouseenter",f))},null,8,["menuId","focusedItemId","items","mobileActive","activeItemPath","templates","exact","level","pt"])):fe("",!0)],16,IL)):fe("",!0),r.isItemVisible(c)&&r.getItemProp(c,"separator")?(I(),L("li",E({key:1,id:r.getItemId(c),style:r.getItemProp(c,"style"),class:r.getSeparatorItemClass(c),role:"separator"},t.ptm("separator")),null,16,AL)):fe("",!0)],64))),128))],16)}dI.render=kL;var fI={name:"Menubar",extends:kt,emits:["focus","blur"],props:{model:{type:Array,default:null},exact:{type:Boolean,default:!0},buttonProps:{type:null,default:null},"aria-labelledby":{type:String,default:null},"aria-label":{type:String,default:null}},data(){return{id:this.$attrs.id,mobileActive:!1,focused:!1,focusedItemInfo:{index:-1,level:0,parentKey:""},activeItemPath:[],dirty:!1}},watch:{"$attrs.id":function(t){this.id=t||Ai()},activeItemPath(t){Xe.isNotEmpty(t)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())}},outsideClickListener:null,container:null,menubar:null,mounted(){this.id=this.id||Ai()},beforeUnmount(){this.mobileActive=!1,this.unbindOutsideClickListener(),this.unbindResizeListener(),this.container&&An.clear(this.container),this.container=null},methods:{getItemProp(t,e){return t?Xe.getItemValue(t[e]):void 0},getItemLabel(t){return this.getItemProp(t,"label")},isItemDisabled(t){return this.getItemProp(t,"disabled")},isItemGroup(t){return Xe.isNotEmpty(this.getItemProp(t,"items"))},isItemSeparator(t){return this.getItemProp(t,"separator")},getProccessedItemLabel(t){return t?this.getItemLabel(t.item):void 0},isProccessedItemGroup(t){return t&&Xe.isNotEmpty(t.items)},toggle(t){this.mobileActive?(this.mobileActive=!1,An.clear(this.menubar),this.hide()):(this.mobileActive=!0,An.set("menu",this.menubar,this.$primevue.config.zIndex.menu),setTimeout(()=>{this.show()},0)),this.bindOutsideClickListener(),t.preventDefault()},show(){this.focusedItemInfo={index:this.findFirstFocusedItemIndex(),level:0,parentKey:""},Y.focus(this.menubar)},hide(t,e){this.mobileActive&&setTimeout(()=>{Y.focus(this.$refs.menubutton)},0),this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""},e&&Y.focus(this.menubar),this.dirty=!1},onFocus(t){this.focused=!0,this.focusedItemInfo=this.focusedItemInfo.index!==-1?this.focusedItemInfo:{index:this.findFirstFocusedItemIndex(),level:0,parentKey:""},this.$emit("focus",t)},onBlur(t){this.focused=!1,this.focusedItemInfo={index:-1,level:0,parentKey:""},this.searchValue="",this.dirty=!1,this.$emit("blur",t)},onKeyDown(t){const e=t.metaKey||t.ctrlKey;switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"ArrowRight":this.onArrowRightKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"Space":this.onSpaceKey(t);break;case"Enter":this.onEnterKey(t);break;case"Escape":this.onEscapeKey(t);break;case"Tab":this.onTabKey(t);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!e&&Xe.isPrintableCharacter(t.key)&&this.searchItems(t,t.key);break}},onItemChange(t){const{processedItem:e,isFocus:n}=t;if(Xe.isEmpty(e))return;const{index:i,key:s,level:r,parentKey:o,items:a}=e,l=Xe.isNotEmpty(a),c=this.activeItemPath.filter(d=>d.parentKey!==o&&d.parentKey!==s);l&&c.push(e),this.focusedItemInfo={index:i,level:r,parentKey:o},this.activeItemPath=c,l&&(this.dirty=!0),n&&Y.focus(this.menubar)},onItemClick(t){const{originalEvent:e,processedItem:n}=t,i=this.isProccessedItemGroup(n),s=Xe.isEmpty(n.parent);if(this.isSelected(n)){const{index:o,key:a,level:l,parentKey:c}=n;this.activeItemPath=this.activeItemPath.filter(d=>a!==d.key&&a.startsWith(d.key)),this.focusedItemInfo={index:o,level:l,parentKey:c},this.dirty=!s,Y.focus(this.menubar)}else if(i)this.onItemChange(t);else{const o=s?n:this.activeItemPath.find(a=>a.parentKey==="");this.hide(e),this.changeFocusedItemIndex(e,o?o.index:-1),this.mobileActive=!1,Y.focus(this.menubar)}},onItemMouseEnter(t){!this.mobileActive&&this.dirty&&this.onItemChange(t)},menuButtonClick(t){this.toggle(t)},menuButtonKeydown(t){(t.code==="Enter"||t.code==="Space")&&this.menuButtonClick(t)},onArrowDownKey(t){const e=this.visibleItems[this.focusedItemInfo.index];if(e?Xe.isEmpty(e.parent):null)this.isProccessedItemGroup(e)&&(this.onItemChange({originalEvent:t,processedItem:e}),this.focusedItemInfo={index:-1,parentKey:e.key},this.onArrowRightKey(t));else{const i=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(t,i),t.preventDefault()}},onArrowUpKey(t){const e=this.visibleItems[this.focusedItemInfo.index];if(Xe.isEmpty(e.parent)){if(this.isProccessedItemGroup(e)){this.onItemChange({originalEvent:t,processedItem:e}),this.focusedItemInfo={index:-1,parentKey:e.key};const s=this.findLastItemIndex();this.changeFocusedItemIndex(t,s)}}else{const i=this.activeItemPath.find(s=>s.key===e.parentKey);if(this.focusedItemInfo.index===0)this.focusedItemInfo={index:-1,parentKey:i?i.parentKey:""},this.searchValue="",this.onArrowLeftKey(t),this.activeItemPath=this.activeItemPath.filter(s=>s.parentKey!==this.focusedItemInfo.parentKey);else{const s=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(t,s)}}t.preventDefault()},onArrowLeftKey(t){const e=this.visibleItems[this.focusedItemInfo.index],n=e?this.activeItemPath.find(i=>i.key===e.parentKey):null;if(n)this.onItemChange({originalEvent:t,processedItem:n}),this.activeItemPath=this.activeItemPath.filter(i=>i.parentKey!==this.focusedItemInfo.parentKey),t.preventDefault();else{const i=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(t,i),t.preventDefault()}},onArrowRightKey(t){const e=this.visibleItems[this.focusedItemInfo.index];if(e?this.activeItemPath.find(i=>i.key===e.parentKey):null)this.isProccessedItemGroup(e)&&(this.onItemChange({originalEvent:t,processedItem:e}),this.focusedItemInfo={index:-1,parentKey:e.key},this.onArrowDownKey(t));else{const i=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(t,i),t.preventDefault()}},onHomeKey(t){this.changeFocusedItemIndex(t,this.findFirstItemIndex()),t.preventDefault()},onEndKey(t){this.changeFocusedItemIndex(t,this.findLastItemIndex()),t.preventDefault()},onEnterKey(t){if(this.focusedItemInfo.index!==-1){const e=Y.findSingle(this.menubar,`li[id="${`${this.focusedItemId}`}"]`),n=e&&Y.findSingle(e,".p-menuitem-link");n?n.click():e&&e.click();const i=this.visibleItems[this.focusedItemInfo.index];!this.isProccessedItemGroup(i)&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex())}t.preventDefault()},onSpaceKey(t){this.onEnterKey(t)},onEscapeKey(t){this.hide(t,!0),this.focusedItemInfo.index=this.findFirstFocusedItemIndex(),t.preventDefault()},onTabKey(t){if(this.focusedItemInfo.index!==-1){const e=this.visibleItems[this.focusedItemInfo.index];!this.isProccessedItemGroup(e)&&this.onItemChange({originalEvent:t,processedItem:e})}this.hide()},bindOutsideClickListener(){this.outsideClickListener||(this.outsideClickListener=t=>{const e=this.menubar!==t.target&&!this.menubar.contains(t.target),n=this.mobileActive&&this.$refs.menubutton!==t.target&&!this.$refs.menubutton.contains(t.target);e&&(n?this.mobileActive=!1:this.hide())},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindResizeListener(){this.resizeListener||(this.resizeListener=t=>{Y.isTouchDevice()||this.hide(t,!0),this.mobileActive=!1},window.addEventListener("resize",this.resizeListener))},unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isItemMatched(t){return this.isValidItem(t)&&this.getProccessedItemLabel(t).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())},isValidItem(t){return!!t&&!this.isItemDisabled(t.item)&&!this.isItemSeparator(t.item)},isValidSelectedItem(t){return this.isValidItem(t)&&this.isSelected(t)},isSelected(t){return this.activeItemPath.some(e=>e.key===t.key)},findFirstItemIndex(){return this.visibleItems.findIndex(t=>this.isValidItem(t))},findLastItemIndex(){return Xe.findLastIndex(this.visibleItems,t=>this.isValidItem(t))},findNextItemIndex(t){const e=t<this.visibleItems.length-1?this.visibleItems.slice(t+1).findIndex(n=>this.isValidItem(n)):-1;return e>-1?e+t+1:t},findPrevItemIndex(t){const e=t>0?Xe.findLastIndex(this.visibleItems.slice(0,t),n=>this.isValidItem(n)):-1;return e>-1?e:t},findSelectedItemIndex(){return this.visibleItems.findIndex(t=>this.isValidSelectedItem(t))},findFirstFocusedItemIndex(){const t=this.findSelectedItemIndex();return t<0?this.findFirstItemIndex():t},findLastFocusedItemIndex(){const t=this.findSelectedItemIndex();return t<0?this.findLastItemIndex():t},searchItems(t,e){this.searchValue=(this.searchValue||"")+e;let n=-1,i=!1;return this.focusedItemInfo.index!==-1?(n=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(s=>this.isItemMatched(s)),n=n===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(s=>this.isItemMatched(s)):n+this.focusedItemInfo.index):n=this.visibleItems.findIndex(s=>this.isItemMatched(s)),n!==-1&&(i=!0),n===-1&&this.focusedItemInfo.index===-1&&(n=this.findFirstFocusedItemIndex()),n!==-1&&this.changeFocusedItemIndex(t,n),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),i},changeFocusedItemIndex(t,e){this.focusedItemInfo.index!==e&&(this.focusedItemInfo.index=e,this.scrollInView())},scrollInView(t=-1){const e=t!==-1?`${this.id}_${t}`:this.focusedItemId,n=Y.findSingle(this.menubar,`li[id="${e}"]`);n&&n.scrollIntoView&&n.scrollIntoView({block:"nearest",inline:"start"})},createProcessedItems(t,e=0,n={},i=""){const s=[];return t&&t.forEach((r,o)=>{const a=(i!==""?i+"_":"")+o,l={item:r,index:o,level:e,key:a,parent:n,parentKey:i};l.items=this.createProcessedItems(r.items,e+1,l,a),s.push(l)}),s},containerRef(t){this.container=t},menubarRef(t){this.menubar=t?t.$el:void 0}},computed:{containerClass(){return["p-menubar p-component",{"p-menubar-mobile-active":this.mobileActive}]},processedItems(){return this.createProcessedItems(this.model||[])},visibleItems(){const t=this.activeItemPath.find(e=>e.key===this.focusedItemInfo.parentKey);return t?t.items:this.processedItems},focusedItemId(){return this.focusedItemInfo.index!==-1?`${this.id}${Xe.isNotEmpty(this.focusedItemInfo.parentKey)?"_"+this.focusedItemInfo.parentKey:""}_${this.focusedItemInfo.index}`:null}},components:{MenubarSub:dI,BarsIcon:cI}};const xL=["aria-haspopup","aria-expanded","aria-controls","aria-label"];function RL(t,e,n,i,s,r){const o=ut("BarsIcon"),a=ut("MenubarSub");return I(),L("div",E({ref:r.containerRef,class:r.containerClass},t.ptm("root")),[t.$slots.start?(I(),L("div",E({key:0,class:"p-menubar-start"},t.ptm("start")),[ye(t.$slots,"start")],16)):fe("",!0),n.model&&n.model.length>0?(I(),L("a",E({key:1,ref:"menubutton",role:"button",tabindex:"0",class:"p-menubar-button","aria-haspopup":!!(n.model.length&&n.model.length>0),"aria-expanded":s.mobileActive,"aria-controls":s.id,"aria-label":t.$primevue.config.locale.aria.navigation,onClick:e[0]||(e[0]=l=>r.menuButtonClick(l)),onKeydown:e[1]||(e[1]=l=>r.menuButtonKeydown(l))},{...n.buttonProps,...t.ptm("button")}),[ye(t.$slots,"popupicon",{},()=>[xe(o,zd(of(t.ptm("popupIcon"))),null,16)])],16,xL)):fe("",!0),xe(a,{ref:r.menubarRef,id:s.id,class:"p-menubar-root-list",role:"menubar",items:r.processedItems,templates:t.$slots,root:!0,mobileActive:s.mobileActive,tabindex:"0","aria-activedescendant":s.focused?r.focusedItemId:void 0,menuId:s.id,focusedItemId:s.focused?r.focusedItemId:void 0,activeItemPath:s.activeItemPath,exact:n.exact,level:0,"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel,pt:t.pt,onFocus:r.onFocus,onBlur:r.onBlur,onKeydown:r.onKeyDown,onItemClick:r.onItemClick,onItemMouseenter:r.onItemMouseEnter},null,8,["id","items","templates","mobileActive","aria-activedescendant","menuId","focusedItemId","activeItemPath","exact","aria-labelledby","aria-label","pt","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter"]),t.$slots.end?(I(),L("div",E({key:2,class:"p-menubar-end"},t.ptm("end")),[ye(t.$slots,"end")],16)):fe("",!0)],16)}function PL(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",n==="top"&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}}var NL=`
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
`;PL(NL);fI.render=RL;const DL={},LL={class:"item"},OL={class:"details"};function ML(t,e){return I(),L("div",LL,[R("i",null,[ye(t.$slots,"icon",{},void 0,!0)]),R("div",OL,[R("h3",null,[ye(t.$slots,"heading",{},void 0,!0)]),ye(t.$slots,"default",{},void 0,!0)])])}const W1=Jr(DL,[["render",ML],["__scopeId","data-v-fd0742eb"]]),FL={},BL={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"17",fill:"currentColor"},UL=R("path",{d:"M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z"},null,-1),VL=[UL];function $L(t,e){return I(),L("svg",BL,VL)}const HL=Jr(FL,[["render",$L]]),zL={},jL={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"iconify iconify--mdi",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},WL=R("path",{d:"M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z",fill:"currentColor"},null,-1),qL=[WL];function KL(t,e){return I(),L("svg",jL,qL)}const GL=Jr(zL,[["render",KL]]),YL=R("a",{href:"https://vuejs.org/",target:"_blank",rel:"noopener"},"proyecto",-1),QL=R("br",null,null,-1),XL=R("a",{href:"88.8.25.170:5010/docs",target:"_blank",rel:"noopener"},"API",-1),JL=R("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank",rel:"noopener"},"Vite",-1),ZL=R("a",{href:"primevue.org/dialog/",target:"_blank",rel:"noopener"},"PrimeVue",-1),eO=R("br",null,null,-1),tO={__name:"TheWelcome",setup(t){return(e,n)=>(I(),L(He,null,[xe(W1,null,{icon:lt(()=>[xe(HL)]),heading:lt(()=>[tn("Documentación")]),default:lt(()=>[tn(" Documentación del "),YL,tn(" mestra los componentes y funciones por si se necesitaran entender y modificar en un futuro. "),QL,tn(" Por otro lado, también se encuentra disponible la documentación de la "),XL,tn(" utilizada para este sistema ")]),_:1}),xe(W1,null,{icon:lt(()=>[xe(GL)]),heading:lt(()=>[tn("Desarrollo")]),default:lt(()=>[tn(" El proyecto ha sido desarrollado y construido con "),JL,tn(" además del uso de Vue 3 y de "),ZL,tn(" para la mayoria de los componentes implementados "),eO]),_:1})],64))}},nO="/volley-lock/assets/volley-lock-icon-noletter-60a808ab.svg";const go=AC(),iO={data(){return{items:[{label:"Home",icon:"pi pi-fw pi-home",to:"/"},{label:"Votación",icon:"pi pi-fw pi-th-large",to:"/tier"},{label:"Resultados",icon:"pi pi-fw pi-sort-amount-up-alt",to:"/results"},{label:"Gráfica",icon:"pi pi-fw pi-chart-line",to:"/graph"},{label:"Youtube",icon:"pi pi-fw pi-youtube",to:"/youtube"}],itemsAux:[],user:null,username:"",logged:!1}},methods:{async initialEnvironment(){this.logged=await this.userLogged(),this.items.length<5&&this.logged&&this.items.push({label:"Perfil",icon:"pi pi-fw pi-user",to:"/profile"}),this.logged||(this.itemsAux=this.items,this.items=[])},async singOutFirebase(){const t=vh(),e=await Ag(t).then(()=>(this.$swal("Cierre de sesión con éxito","","success"),!1)).catch(n=>{this.$swal("ERROR al cerrar sesión",n.toString(),"error")});this.logged=e,this.currentUser=null,this.$router.push("/"),this.items.length==5&&this.items.pop()},getUsername(t){let n=t.displayName.split(" ")[0].toLowerCase();return n.charAt(0).toUpperCase()+n.slice(1)},singOutFirebaseNoSwal(){const t=vh();Ag(t)},async userLogged(){const t=await Wk();return t!=null?(this.user=t,this.username=this.getUsername(t),!0):!1},async refreshVotes(){const t=_1(v1(go,"votes")),n=(await C1(t)).docs[0].data();n.votes={};const i=new Date(n.endDate.toDate()),s=yr(go,"votes",`${i.getDate()}-${i.getMonth()+1}-${i.getFullYear()}`);vr(s,n);const r=_1(v1(go,"users"),S8("email","not-in",["voleylock@gmail.com"]));(await C1(r)).docs.forEach((a,l)=>{const c=a.data(),d=yr(go,"users",c.id).withConverter(Md);c.votes={},c.voted=!1,vr(d,c)})},async googleAuth(){const t=new hi,e=vh();this.userLogged&&this.singOutFirebaseNoSwal();const n=await TA(e,t).then(i=>({user:i.user,logged:!0})).catch(i=>{this.$swal("ERROR en la autenticación",i.toString(),"error")});if(this.userLogged){this.items=this.itemsAux,this.user=n.user,this.logged=n.logged;const i=new Gp(this.user.uid,this.user.displayName,this.user.email,this.user.photoURL),s=yr(go,"users",this.user.uid).withConverter(Md);(await jp(s)).exists()||(this.refreshVotes(),vr(s,i)),this.items.push({label:"Perfil",icon:"pi pi-fw pi-user",to:"/profile"})}}},mounted(){this.initialEnvironment()}},sO={class:"card"},rO=R("img",{alt:"logo",src:nO,height:"40",class:"mr-2"},null,-1),oO={key:0},aO={key:1};function lO(t,e,n,i,s,r){const o=ut("Button"),a=ut("Menubar");return I(),L("div",sO,[xe(a,{model:s.items},{start:lt(()=>[rO]),end:lt(()=>[s.logged?(I(),L("div",aO,[xe(o,{severity:"danger",icon:"pi pi-sign-out","aria-label":"User",onClick:r.singOutFirebase},null,8,["onClick"])])):(I(),L("div",oO,[xe(o,{icon:"pi pi-google",severity:"info","aria-label":"User",label:" Iniciar sesión",onClick:r.googleAuth},null,8,["onClick"])]))]),_:1},8,["model"])])}const cO=Jr(iO,[["render",lO]]);function uO(t,e){const{onFocusIn:n,onFocusOut:i}=e.value||{};t.$_pfocustrap_mutationobserver=new MutationObserver(s=>{s.forEach(r=>{if(r.type==="childList"&&!t.contains(document.activeElement)){const o=a=>{const l=Y.isFocusableElement(a)?a:Y.getFirstFocusableElement(a);return Xe.isNotEmpty(l)?l:o(a.nextSibling)};Y.focus(o(r.nextSibling))}})}),t.$_pfocustrap_mutationobserver.disconnect(),t.$_pfocustrap_mutationobserver.observe(t,{childList:!0}),t.$_pfocustrap_focusinlistener=s=>n&&n(s),t.$_pfocustrap_focusoutlistener=s=>i&&i(s),t.addEventListener("focusin",t.$_pfocustrap_focusinlistener),t.addEventListener("focusout",t.$_pfocustrap_focusoutlistener)}function q1(t){t.$_pfocustrap_mutationobserver&&t.$_pfocustrap_mutationobserver.disconnect(),t.$_pfocustrap_focusinlistener&&t.removeEventListener("focusin",t.$_pfocustrap_focusinlistener)&&(t.$_pfocustrap_focusinlistener=null),t.$_pfocustrap_focusoutlistener&&t.removeEventListener("focusout",t.$_pfocustrap_focusoutlistener)&&(t.$_pfocustrap_focusoutlistener=null)}function hO(t,e){const{autoFocusSelector:n="",firstFocusableSelector:i="",autoFocus:s=!1}=e.value||{};let r=Y.getFirstFocusableElement(t,`[autofocus]:not(.p-hidden-focusable)${n}`);s&&!r&&(r=Y.getFirstFocusableElement(t,`:not(.p-hidden-focusable)${i}`)),Y.focus(r)}function dO(t){const{currentTarget:e,relatedTarget:n}=t,i=n===e.$_pfocustrap_lasthiddenfocusableelement?Y.getFirstFocusableElement(e.parentElement,`:not(.p-hidden-focusable)${e.$_pfocustrap_focusableselector}`):e.$_pfocustrap_lasthiddenfocusableelement;Y.focus(i)}function fO(t){const{currentTarget:e,relatedTarget:n}=t,i=n===e.$_pfocustrap_firsthiddenfocusableelement?Y.getLastFocusableElement(e.parentElement,`:not(.p-hidden-focusable)${e.$_pfocustrap_focusableselector}`):e.$_pfocustrap_firsthiddenfocusableelement;Y.focus(i)}function pO(t,e){const{tabIndex:n=0,firstFocusableSelector:i="",lastFocusableSelector:s=""}=e.value||{},r=l=>{const c=document.createElement("span");return c.classList="p-hidden-accessible p-hidden-focusable",c.tabIndex=n,c.setAttribute("aria-hidden","true"),c.setAttribute("role","presentation"),c.addEventListener("focus",l),c},o=r(dO),a=r(fO);o.$_pfocustrap_lasthiddenfocusableelement=a,o.$_pfocustrap_focusableselector=i,a.$_pfocustrap_firsthiddenfocusableelement=o,a.$_pfocustrap_focusableselector=s,t.prepend(o),t.append(a)}const mO={mounted(t,e){const{disabled:n}=e.value||{};n||(pO(t,e),uO(t,e),hO(t,e))},updated(t,e){const{disabled:n}=e.value||{};n&&q1(t)},unmounted(t){q1(t)}};var pI={name:"WindowMaximizeIcon",extends:Ot};const gO=R("g",{"clip-path":"url(#clip0_414_20927)"},[R("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z",fill:"currentColor"})],-1),yO=R("defs",null,[R("clipPath",{id:"clip0_414_20927"},[R("rect",{width:"14",height:"14",fill:"white"})])],-1),vO=[gO,yO];function _O(t,e,n,i,s,r){return I(),L("svg",E({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),vO,16)}pI.render=_O;var mI={name:"WindowMinimizeIcon",extends:Ot};const wO=R("g",{"clip-path":"url(#clip0_414_20939)"},[R("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z",fill:"currentColor"})],-1),bO=R("defs",null,[R("clipPath",{id:"clip0_414_20939"},[R("rect",{width:"14",height:"14",fill:"white"})])],-1),CO=[wO,bO];function IO(t,e,n,i,s,r){return I(),L("svg",E({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),CO,16)}mI.render=IO;var gI={name:"Dialog",extends:kt,inheritAttrs:!1,emits:["update:visible","show","hide","after-hide","maximize","unmaximize","dragend"],props:{header:{type:null,default:null},footer:{type:null,default:null},visible:{type:Boolean,default:!1},modal:{type:Boolean,default:null},contentStyle:{type:null,default:null},contentClass:{type:String,default:null},contentProps:{type:null,default:null},rtl:{type:Boolean,default:null},maximizable:{type:Boolean,default:!1},dismissableMask:{type:Boolean,default:!1},closable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},position:{type:String,default:"center"},breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0},keepInViewport:{type:Boolean,default:!0},minX:{type:Number,default:0},minY:{type:Number,default:0},appendTo:{type:String,default:"body"},closeIcon:{type:String,default:void 0},maximizeIcon:{type:String,default:void 0},minimizeIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null},_instance:null},provide(){return{dialogRef:Nn(()=>this._instance)}},data(){return{containerVisible:this.visible,maximized:!1,focusableMax:null,focusableClose:null}},documentKeydownListener:null,container:null,mask:null,content:null,headerContainer:null,footerContainer:null,maximizableButton:null,closeButton:null,styleElement:null,dragging:null,documentDragListener:null,documentDragEndListener:null,lastPageX:null,lastPageY:null,updated(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount(){this.unbindDocumentState(),this.unbindGlobalListeners(),this.destroyStyle(),this.mask&&this.autoZIndex&&An.clear(this.mask),this.container=null,this.mask=null},mounted(){this.breakpoints&&this.createStyle()},methods:{close(){this.$emit("update:visible",!1)},onBeforeEnter(t){t.setAttribute(this.attributeSelector,"")},onEnter(){this.$emit("show"),this.focus(),this.enableDocumentSettings(),this.bindGlobalListeners(),this.autoZIndex&&An.set("modal",this.mask,this.baseZIndex+this.$primevue.config.zIndex.modal)},onBeforeLeave(){this.modal&&Y.addClass(this.mask,"p-component-overlay-leave")},onLeave(){this.$emit("hide"),this.focusableClose=null,this.focusableMax=null},onAfterLeave(){this.autoZIndex&&An.clear(this.mask),this.containerVisible=!1,this.unbindDocumentState(),this.unbindGlobalListeners(),this.$emit("after-hide")},onMaskClick(t){this.dismissableMask&&this.modal&&this.mask===t.target&&this.close()},focus(){const t=n=>n.querySelector("[autofocus]");let e=this.$slots.footer&&t(this.footerContainer);e||(e=this.$slots.header&&t(this.headerContainer),e||(e=this.$slots.default&&t(this.content),e||(this.maximizable?(this.focusableMax=!0,e=this.maximizableButton):(this.focusableClose=!0,e=this.closeButton)))),e&&Y.focus(e)},maximize(t){this.maximized?(this.maximized=!1,this.$emit("unmaximize",t)):(this.maximized=!0,this.$emit("maximize",t)),this.modal||(this.maximized?Y.addClass(document.body,"p-overflow-hidden"):Y.removeClass(document.body,"p-overflow-hidden"))},enableDocumentSettings(){(this.modal||this.maximizable&&this.maximized)&&Y.addClass(document.body,"p-overflow-hidden")},unbindDocumentState(){(this.modal||this.maximizable&&this.maximized)&&Y.removeClass(document.body,"p-overflow-hidden")},onKeyDown(t){t.code==="Escape"&&this.closeOnEscape&&this.close()},bindDocumentKeyDownListener(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},getPositionClass(){const e=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(n=>n===this.position);return e?`p-dialog-${e}`:""},containerRef(t){this.container=t},maskRef(t){this.mask=t},contentRef(t){this.content=t},headerContainerRef(t){this.headerContainer=t},footerContainerRef(t){this.footerContainer=t},maximizableRef(t){this.maximizableButton=t},closeButtonRef(t){this.closeButton=t},createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let t="";for(let e in this.breakpoints)t+=`
                        @media screen and (max-width: ${e}) {
                            .p-dialog[${this.attributeSelector}] {
                                width: ${this.breakpoints[e]} !important;
                            }
                        }
                    `;this.styleElement.innerHTML=t}},destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},initDrag(t){Y.hasClass(t.target,"p-dialog-header-icon")||Y.hasClass(t.target.parentElement,"p-dialog-header-icon")||this.draggable&&(this.dragging=!0,this.lastPageX=t.pageX,this.lastPageY=t.pageY,this.container.style.margin="0",Y.addClass(document.body,"p-unselectable-text"))},bindGlobalListeners(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.closeOnEscape&&this.closable&&this.bindDocumentKeyDownListener()},unbindGlobalListeners(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentKeyDownListener()},bindDocumentDragListener(){this.documentDragListener=t=>{if(this.dragging){let e=Y.getOuterWidth(this.container),n=Y.getOuterHeight(this.container),i=t.pageX-this.lastPageX,s=t.pageY-this.lastPageY,r=this.container.getBoundingClientRect(),o=r.left+i,a=r.top+s,l=Y.getViewport();this.container.style.position="fixed",this.keepInViewport?(o>=this.minX&&o+e<l.width&&(this.lastPageX=t.pageX,this.container.style.left=o+"px"),a>=this.minY&&a+n<l.height&&(this.lastPageY=t.pageY,this.container.style.top=a+"px")):(this.lastPageX=t.pageX,this.container.style.left=o+"px",this.lastPageY=t.pageY,this.container.style.top=a+"px")}},window.document.addEventListener("mousemove",this.documentDragListener)},unbindDocumentDragListener(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)},bindDocumentDragEndListener(){this.documentDragEndListener=t=>{this.dragging&&(this.dragging=!1,Y.removeClass(document.body,"p-unselectable-text"),this.$emit("dragend",t))},window.document.addEventListener("mouseup",this.documentDragEndListener)},unbindDocumentDragEndListener(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}},computed:{maskClass(){return["p-dialog-mask",{"p-component-overlay p-component-overlay-enter":this.modal},this.getPositionClass()]},dialogClass(){return["p-dialog p-component",{"p-dialog-rtl":this.rtl,"p-dialog-maximized":this.maximizable&&this.maximized,"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},maximizeIconComponent(){return this.maximized?this.minimizeIcon?"span":"WindowMinimizeIcon":this.maximizeIcon?"span":"WindowMaximizeIcon"},maximizeIconClass(){return`p-dialog-header-maximize-icon ${this.maximized?this.minimizeIcon:this.maximizeIcon}`},ariaId(){return Ai()},ariaLabelledById(){return this.header!=null||this.$attrs["aria-labelledby"]!==null?this.ariaId+"_header":null},closeAriaLabel(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},attributeSelector(){return Ai()},contentStyleClass(){return["p-dialog-content",this.contentClass]}},directives:{ripple:zs,focustrap:mO},components:{Portal:Cu,WindowMinimizeIcon:mI,WindowMaximizeIcon:pI,TimesIcon:Zr}};const EO=["aria-labelledby","aria-modal"],TO=["id"],SO=["autofocus","tabindex"],AO=["autofocus","aria-label"];function kO(t,e,n,i,s,r){const o=ut("Portal"),a=Qi("ripple"),l=Qi("focustrap");return I(),me(o,{appendTo:n.appendTo},{default:lt(()=>[s.containerVisible?(I(),L("div",E({key:0,ref:r.maskRef,class:r.maskClass,onClick:e[3]||(e[3]=(...c)=>r.onMaskClick&&r.onMaskClick(...c))},t.ptm("mask")),[xe(ya,{name:"p-dialog",onBeforeEnter:r.onBeforeEnter,onEnter:r.onEnter,onBeforeLeave:r.onBeforeLeave,onLeave:r.onLeave,onAfterLeave:r.onAfterLeave,appear:""},{default:lt(()=>[n.visible?nn((I(),L("div",E({key:0,ref:r.containerRef,class:r.dialogClass,role:"dialog","aria-labelledby":r.ariaLabelledById,"aria-modal":n.modal},{...t.$attrs,...t.ptm("root")}),[n.showHeader?(I(),L("div",E({key:0,ref:r.headerContainerRef,class:"p-dialog-header",onMousedown:e[2]||(e[2]=(...c)=>r.initDrag&&r.initDrag(...c))},t.ptm("header")),[ye(t.$slots,"header",{},()=>[n.header?(I(),L("span",E({key:0,id:r.ariaLabelledById,class:"p-dialog-title"},t.ptm("headerTitle")),ct(n.header),17,TO)):fe("",!0)]),R("div",E({class:"p-dialog-header-icons"},t.ptm("headerIcons")),[n.maximizable?nn((I(),L("button",E({key:0,ref:r.maximizableRef,autofocus:s.focusableMax,class:"p-dialog-header-icon p-dialog-header-maximize p-link",onClick:e[0]||(e[0]=(...c)=>r.maximize&&r.maximize(...c)),type:"button",tabindex:n.maximizable?"0":"-1"},t.ptm("maximizableButton")),[ye(t.$slots,"maximizeicon",{maximized:s.maximized},()=>[(I(),me(ot(r.maximizeIconComponent),E({class:r.maximizeIconClass},t.ptm("maximizableIcon")),null,16,["class"]))])],16,SO)),[[a]]):fe("",!0),n.closable?nn((I(),L("button",E({key:1,ref:r.closeButtonRef,autofocus:s.focusableClose,class:"p-dialog-header-icon p-dialog-header-close p-link",onClick:e[1]||(e[1]=(...c)=>r.close&&r.close(...c)),"aria-label":r.closeAriaLabel,type:"button"},{...n.closeButtonProps,...t.ptm("closeButton")}),[ye(t.$slots,"closeicon",{},()=>[(I(),me(ot(n.closeIcon?"span":"TimesIcon"),E({class:["p-dialog-header-close-icon",n.closeIcon]},t.ptm("closeButtonIcon")),null,16,["class"]))])],16,AO)),[[a]]):fe("",!0)],16)],16)):fe("",!0),R("div",E({ref:r.contentRef,class:r.contentStyleClass,style:n.contentStyle},{...n.contentProps,...t.ptm("content")}),[ye(t.$slots,"default")],16),n.footer||t.$slots.footer?(I(),L("div",E({key:1,ref:r.footerContainerRef,class:"p-dialog-footer"},t.ptm("footer")),[ye(t.$slots,"footer",{},()=>[tn(ct(n.footer),1)])],16)):fe("",!0)],16,EO)),[[l,{disabled:!n.modal}]]):fe("",!0)]),_:3},8,["onBeforeEnter","onEnter","onBeforeLeave","onLeave","onAfterLeave"])],16)):fe("",!0)]),_:3},8,["appendTo"])}function xO(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",n==="top"&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}}var RO=`
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
`;xO(RO);gI.render=kO;var yI={name:"EyeIcon",extends:Ot};const PO=R("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z",fill:"currentColor"},null,-1),NO=[PO];function DO(t,e,n,i,s,r){return I(),L("svg",E({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),NO,16)}yI.render=DO;var vI={name:"EyeSlashIcon",extends:Ot};const LO=R("g",{"clip-path":"url(#clip0_287_10550)"},[R("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M13.9414 6.74792C13.9437 6.75295 13.9455 6.757 13.9469 6.76003C13.982 6.8394 14.0001 6.9252 14.0001 7.01195C14.0001 7.0987 13.982 7.1845 13.9469 7.26386C13.6004 8.00059 13.1711 8.69549 12.6674 9.33515C12.6115 9.4071 12.54 9.46538 12.4582 9.50556C12.3765 9.54574 12.2866 9.56678 12.1955 9.56707C12.0834 9.56671 11.9737 9.53496 11.8788 9.47541C11.7838 9.41586 11.7074 9.3309 11.6583 9.23015C11.6092 9.12941 11.5893 9.01691 11.6008 8.90543C11.6124 8.79394 11.6549 8.68793 11.7237 8.5994C12.1065 8.09726 12.4437 7.56199 12.7313 6.99995C12.2595 6.08027 10.3402 2.8014 6.99732 2.8014C6.63723 2.80218 6.27816 2.83969 5.92569 2.91336C5.77666 2.93304 5.62568 2.89606 5.50263 2.80972C5.37958 2.72337 5.29344 2.59398 5.26125 2.44714C5.22907 2.30031 5.2532 2.14674 5.32885 2.01685C5.40451 1.88696 5.52618 1.79021 5.66978 1.74576C6.10574 1.64961 6.55089 1.60134 6.99732 1.60181C11.5916 1.60181 13.7864 6.40856 13.9414 6.74792ZM2.20333 1.61685C2.35871 1.61411 2.5091 1.67179 2.6228 1.77774L12.2195 11.3744C12.3318 11.4869 12.3949 11.6393 12.3949 11.7983C12.3949 11.9572 12.3318 12.1097 12.2195 12.2221C12.107 12.3345 11.9546 12.3976 11.7956 12.3976C11.6367 12.3976 11.4842 12.3345 11.3718 12.2221L10.5081 11.3584C9.46549 12.0426 8.24432 12.4042 6.99729 12.3981C2.403 12.3981 0.208197 7.59135 0.0532336 7.25198C0.0509364 7.24694 0.0490875 7.2429 0.0476856 7.23986C0.0162332 7.16518 3.05176e-05 7.08497 3.05176e-05 7.00394C3.05176e-05 6.92291 0.0162332 6.8427 0.0476856 6.76802C0.631261 5.47831 1.46902 4.31959 2.51084 3.36119L1.77509 2.62545C1.66914 2.51175 1.61146 2.36136 1.61421 2.20597C1.61695 2.05059 1.6799 1.90233 1.78979 1.79244C1.89968 1.68254 2.04794 1.6196 2.20333 1.61685ZM7.45314 8.35147L5.68574 6.57609V6.5361C5.5872 6.78938 5.56498 7.06597 5.62183 7.33173C5.67868 7.59749 5.8121 7.84078 6.00563 8.03158C6.19567 8.21043 6.43052 8.33458 6.68533 8.39089C6.94014 8.44721 7.20543 8.43359 7.45314 8.35147ZM1.26327 6.99994C1.7351 7.91163 3.64645 11.1985 6.99729 11.1985C7.9267 11.2048 8.8408 10.9618 9.64438 10.4947L8.35682 9.20718C7.86027 9.51441 7.27449 9.64491 6.69448 9.57752C6.11446 9.51014 5.57421 9.24881 5.16131 8.83592C4.74842 8.42303 4.4871 7.88277 4.41971 7.30276C4.35232 6.72274 4.48282 6.13697 4.79005 5.64041L3.35855 4.2089C2.4954 5.00336 1.78523 5.94935 1.26327 6.99994Z",fill:"currentColor"})],-1),OO=R("defs",null,[R("clipPath",{id:"clip0_287_10550"},[R("rect",{width:"14",height:"14",fill:"white"})])],-1),MO=[LO,OO];function FO(t,e,n,i,s,r){return I(),L("svg",E({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),MO,16)}vI.render=FO;var BO=tI(),_I={name:"Password",extends:kt,emits:["update:modelValue","change","focus","blur","invalid"],props:{modelValue:String,promptLabel:{type:String,default:null},mediumRegex:{type:String,default:"^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"},strongRegex:{type:String,default:"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"},weakLabel:{type:String,default:null},mediumLabel:{type:String,default:null},strongLabel:{type:String,default:null},feedback:{type:Boolean,default:!0},appendTo:{type:String,default:"body"},toggleMask:{type:Boolean,default:!1},hideIcon:{type:String,default:void 0},showIcon:{type:String,default:void 0},disabled:{type:Boolean,default:!1},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},inputProps:{type:null,default:null},panelId:{type:String,default:null},panelClass:{type:[String,Object],default:null},panelStyle:{type:Object,default:null},panelProps:{type:null,default:null},"aria-labelledby":{type:String,default:null},"aria-label":{type:String,default:null}},data(){return{overlayVisible:!1,meter:null,infoText:null,focused:!1,unmasked:!1}},mediumCheckRegExp:null,strongCheckRegExp:null,resizeListener:null,scrollHandler:null,overlay:null,mounted(){this.infoText=this.promptText,this.mediumCheckRegExp=new RegExp(this.mediumRegex),this.strongCheckRegExp=new RegExp(this.strongRegex)},beforeUnmount(){this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(An.clear(this.overlay),this.overlay=null)},methods:{onOverlayEnter(t){An.set("overlay",t,this.$primevue.config.zIndex.overlay),this.alignOverlay(),this.bindScrollListener(),this.bindResizeListener()},onOverlayLeave(){this.unbindScrollListener(),this.unbindResizeListener(),this.overlay=null},onOverlayAfterLeave(t){An.clear(t)},alignOverlay(){this.appendTo==="self"?Y.relativePosition(this.overlay,this.$refs.input.$el):(this.overlay.style.minWidth=Y.getOuterWidth(this.$refs.input.$el)+"px",Y.absolutePosition(this.overlay,this.$refs.input.$el))},testStrength(t){let e=0;return this.strongCheckRegExp.test(t)?e=3:this.mediumCheckRegExp.test(t)?e=2:t.length&&(e=1),e},onInput(t){this.$emit("update:modelValue",t.target.value)},onFocus(t){this.focused=!0,this.feedback&&(this.setPasswordMeter(this.modelValue),this.overlayVisible=!0),this.$emit("focus",t)},onBlur(t){this.focused=!1,this.feedback&&(this.overlayVisible=!1),this.$emit("blur",t)},onKeyUp(t){if(this.feedback){const e=t.target.value,{meter:n,label:i}=this.checkPasswordStrength(e);if(this.meter=n,this.infoText=i,t.code==="Escape"){this.overlayVisible&&(this.overlayVisible=!1);return}this.overlayVisible||(this.overlayVisible=!0)}},setPasswordMeter(){if(!this.modelValue)return;const{meter:t,label:e}=this.checkPasswordStrength(this.modelValue);this.meter=t,this.infoText=e,this.overlayVisible||(this.overlayVisible=!0)},checkPasswordStrength(t){let e=null,n=null;switch(this.testStrength(t)){case 1:e=this.weakText,n={strength:"weak",width:"33.33%"};break;case 2:e=this.mediumText,n={strength:"medium",width:"66.66%"};break;case 3:e=this.strongText,n={strength:"strong",width:"100%"};break;default:e=this.promptText,n=null;break}return{label:e,meter:n}},onInvalid(t){this.$emit("invalid",t)},bindScrollListener(){this.scrollHandler||(this.scrollHandler=new ED(this.$refs.input.$el,()=>{this.overlayVisible&&(this.overlayVisible=!1)})),this.scrollHandler.bindScrollListener()},unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener(){this.resizeListener||(this.resizeListener=()=>{this.overlayVisible&&!Y.isTouchDevice()&&(this.overlayVisible=!1)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},overlayRef(t){this.overlay=t},onMaskToggle(){this.unmasked=!this.unmasked},onOverlayClick(t){BO.emit("overlay-click",{originalEvent:t,target:this.$el})}},computed:{containerClass(){return["p-password p-component p-inputwrapper",{"p-inputwrapper-filled":this.filled,"p-inputwrapper-focus":this.focused,"p-input-icon-right":this.toggleMask}]},inputFieldClass(){return["p-password-input",this.inputClass,{"p-disabled":this.disabled}]},panelStyleClass(){return["p-password-panel p-component",this.panelClass,{"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},strengthClass(){return`p-password-strength ${this.meter?this.meter.strength:""}`},inputType(){return this.unmasked?"text":"password"},filled(){return this.modelValue!=null&&this.modelValue.toString().length>0},weakText(){return this.weakLabel||this.$primevue.config.locale.weak},mediumText(){return this.mediumLabel||this.$primevue.config.locale.medium},strongText(){return this.strongLabel||this.$primevue.config.locale.strong},promptText(){return this.promptLabel||this.$primevue.config.locale.passwordPrompt},panelUniqueId(){return Ai()+"_panel"}},components:{PInputText:Qp,Portal:Cu,EyeSlashIcon:vI,EyeIcon:yI}};const UO=["id"];function VO(t,e,n,i,s,r){const o=ut("PInputText"),a=ut("Portal");return I(),L("div",E({class:r.containerClass},t.ptm("root")),[xe(o,E({ref:"input",id:n.inputId,type:r.inputType,class:r.inputFieldClass,style:n.inputStyle,value:n.modelValue,"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel,"aria-controls":n.panelProps&&n.panelProps.id||n.panelId||r.panelUniqueId,"aria-expanded":s.overlayVisible,"aria-haspopup":!0,placeholder:n.placeholder,required:n.required,onInput:r.onInput,onFocus:r.onFocus,onBlur:r.onBlur,onKeyup:r.onKeyUp,onInvalid:r.onInvalid},{...n.inputProps,...t.ptm("input")}),null,16,["id","type","class","style","value","aria-labelledby","aria-label","aria-controls","aria-expanded","placeholder","required","onInput","onFocus","onBlur","onKeyup","onInvalid"]),n.toggleMask&&s.unmasked?ye(t.$slots,"hideicon",{key:0,onClick:r.onMaskToggle},()=>[(I(),me(ot(n.hideIcon?"i":"EyeSlashIcon"),E({class:n.hideIcon,onClick:r.onMaskToggle},t.ptm("hideIcon")),null,16,["class","onClick"]))]):fe("",!0),n.toggleMask&&!s.unmasked?ye(t.$slots,"showicon",{key:1,onClick:r.onMaskToggle},()=>[(I(),me(ot(n.showIcon?"i":"EyeIcon"),E({class:n.showIcon,onClick:r.onMaskToggle},t.ptm("showIcon")),null,16,["class","onClick"]))]):fe("",!0),R("span",E({class:"p-hidden-accessible","aria-live":"polite"},t.ptm("hiddenAccesible")),ct(s.infoText),17),xe(a,{appendTo:n.appendTo},{default:lt(()=>[xe(ya,{name:"p-connected-overlay",onEnter:r.onOverlayEnter,onLeave:r.onOverlayLeave,onAfterLeave:r.onOverlayAfterLeave},{default:lt(()=>[s.overlayVisible?(I(),L("div",E({key:0,ref:r.overlayRef,id:n.panelId||r.panelUniqueId,class:r.panelStyleClass,style:n.panelStyle,onClick:e[0]||(e[0]=(...l)=>r.onOverlayClick&&r.onOverlayClick(...l))},{...n.panelProps,...t.ptm("panel")}),[ye(t.$slots,"header"),ye(t.$slots,"content",{},()=>[R("div",E({class:"p-password-meter"},t.ptm("meter")),[R("div",E({class:r.strengthClass,style:{width:s.meter?s.meter.width:""}},t.ptm("meterLabel")),null,16)],16),R("div",E({class:"p-password-info"},t.ptm("info")),ct(s.infoText),17)]),ye(t.$slots,"footer")],16,UO)):fe("",!0)]),_:3},8,["onEnter","onLeave","onAfterLeave"])]),_:3},8,["appendTo"])],16)}function $O(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",n==="top"&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}}var HO=`
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
`;$O(HO);_I.render=VO;var wI={name:"PlusIcon",extends:Ot};const zO=R("g",{"clip-path":"url(#clip0_306_11939)"},[R("path",{d:"M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z",fill:"currentColor"})],-1),jO=R("defs",null,[R("clipPath",{id:"clip0_306_11939"},[R("rect",{width:"14",height:"14",fill:"white"})])],-1),WO=[zO,jO];function qO(t,e,n,i,s,r){return I(),L("svg",E({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),WO,16)}wI.render=qO;var bI={name:"UploadIcon",extends:Ot};const KO=R("g",{"clip-path":"url(#clip0_414_21072)"},[R("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.58942 9.82197C6.70165 9.93405 6.85328 9.99793 7.012 10C7.17071 9.99793 7.32234 9.93405 7.43458 9.82197C7.54681 9.7099 7.61079 9.55849 7.61286 9.4V2.04798L9.79204 4.22402C9.84752 4.28011 9.91365 4.32457 9.98657 4.35479C10.0595 4.38502 10.1377 4.40039 10.2167 4.40002C10.2956 4.40039 10.3738 4.38502 10.4467 4.35479C10.5197 4.32457 10.5858 4.28011 10.6413 4.22402C10.7538 4.11152 10.817 3.95902 10.817 3.80002C10.817 3.64102 10.7538 3.48852 10.6413 3.37602L7.45127 0.190618C7.44656 0.185584 7.44176 0.180622 7.43687 0.175736C7.32419 0.063214 7.17136 0 7.012 0C6.85264 0 6.69981 0.063214 6.58712 0.175736C6.58181 0.181045 6.5766 0.186443 6.5715 0.191927L3.38282 3.37602C3.27669 3.48976 3.2189 3.6402 3.22165 3.79564C3.2244 3.95108 3.28746 4.09939 3.39755 4.20932C3.50764 4.31925 3.65616 4.38222 3.81182 4.38496C3.96749 4.3877 4.11814 4.33001 4.23204 4.22402L6.41113 2.04807V9.4C6.41321 9.55849 6.47718 9.7099 6.58942 9.82197ZM11.9952 14H2.02883C1.751 13.9887 1.47813 13.9228 1.22584 13.8061C0.973545 13.6894 0.746779 13.5241 0.558517 13.3197C0.370254 13.1154 0.22419 12.876 0.128681 12.6152C0.0331723 12.3545 -0.00990605 12.0775 0.0019109 11.8V9.40005C0.0019109 9.24092 0.065216 9.08831 0.1779 8.97579C0.290584 8.86326 0.443416 8.80005 0.602775 8.80005C0.762134 8.80005 0.914966 8.86326 1.02765 8.97579C1.14033 9.08831 1.20364 9.24092 1.20364 9.40005V11.8C1.18295 12.0376 1.25463 12.274 1.40379 12.4602C1.55296 12.6463 1.76817 12.7681 2.00479 12.8H11.9952C12.2318 12.7681 12.447 12.6463 12.5962 12.4602C12.7453 12.274 12.817 12.0376 12.7963 11.8V9.40005C12.7963 9.24092 12.8596 9.08831 12.9723 8.97579C13.085 8.86326 13.2378 8.80005 13.3972 8.80005C13.5565 8.80005 13.7094 8.86326 13.8221 8.97579C13.9347 9.08831 13.998 9.24092 13.998 9.40005V11.8C14.022 12.3563 13.8251 12.8996 13.45 13.3116C13.0749 13.7236 12.552 13.971 11.9952 14Z",fill:"currentColor"})],-1),GO=R("defs",null,[R("clipPath",{id:"clip0_414_21072"},[R("rect",{width:"14",height:"14",fill:"white"})])],-1),YO=[KO,GO];function QO(t,e,n,i,s,r){return I(),L("svg",E({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),YO,16)}bI.render=QO;var Xp={name:"Message",extends:kt,emits:["close"],props:{severity:{type:String,default:"info"},closable:{type:Boolean,default:!0},sticky:{type:Boolean,default:!0},life:{type:Number,default:3e3},icon:{type:String,default:void 0},closeIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null}},timeout:null,data(){return{visible:!0}},mounted(){this.sticky||this.closeAfterDelay()},methods:{close(t){this.visible=!1,this.$emit("close",t)},closeAfterDelay(){setTimeout(()=>{this.visible=!1},this.life)}},computed:{containerClass(){return"p-message p-component p-message-"+this.severity},iconComponent(){return{info:ma,success:fa,warn:pa,error:ga}[this.severity]},closeAriaLabel(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{ripple:zs},components:{TimesIcon:Zr,InfoCircleIcon:ma,CheckIcon:fa,ExclamationTriangleIcon:pa,TimesCircleIcon:ga}};const XO=["aria-label"];function JO(t,e,n,i,s,r){const o=ut("TimesIcon"),a=Qi("ripple");return I(),me(ya,{name:"p-message",appear:""},{default:lt(()=>[nn(R("div",E({class:r.containerClass,role:"alert","aria-live":"assertive","aria-atomic":"true"},t.ptm("root")),[R("div",E({class:"p-message-wrapper"},t.ptm("wrapper")),[ye(t.$slots,"messageicon",{class:"p-message-icon"},()=>[(I(),me(ot(n.icon?"span":r.iconComponent),E({class:["p-message-icon",n.icon]},t.ptm("icon")),null,16,["class"]))]),R("div",E({class:"p-message-text"},t.ptm("text")),[ye(t.$slots,"default")],16),n.closable?nn((I(),L("button",E({key:0,class:"p-message-close p-link","aria-label":r.closeAriaLabel,type:"button",onClick:e[0]||(e[0]=l=>r.close(l))},{...n.closeButtonProps,...t.ptm("button")}),[ye(t.$slots,"closeicon",{class:"p-message-close-icon"},()=>[n.closeIcon?(I(),L("i",E({key:0,class:["p-message-close-icon",n.closeIcon]},t.ptm("buttonIcon")),null,16)):(I(),me(o,E({key:1,class:"p-message-close-icon"},t.ptm("buttonIcon")),null,16))])],16,XO)),[[a]]):fe("",!0)],16)],16),[[nv,s.visible]])]),_:3})}function ZO(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",n==="top"&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}}var eM=`
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
`;ZO(eM);Xp.render=JO;var CI={name:"ProgressBar",extends:kt,props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},computed:{containerClass(){return["p-progressbar p-component",{"p-progressbar-determinate":this.determinate,"p-progressbar-indeterminate":this.indeterminate}]},progressStyle(){return{width:this.value+"%",display:"flex"}},indeterminate(){return this.mode==="indeterminate"},determinate(){return this.mode==="determinate"}}};const tM=["aria-valuenow"];function nM(t,e,n,i,s,r){return I(),L("div",E({role:"progressbar",class:r.containerClass,"aria-valuemin":"0","aria-valuenow":n.value,"aria-valuemax":"100"},t.ptm("root")),[r.determinate?(I(),L("div",E({key:0,class:"p-progressbar-value p-progressbar-value-animate",style:r.progressStyle},t.ptm("value")),[n.value!=null&&n.value!==0&&n.showValue?(I(),L("div",E({key:0,class:"p-progressbar-label"},t.ptm("label")),[ye(t.$slots,"default",{},()=>[tn(ct(n.value+"%"),1)])],16)):fe("",!0)],16)):fe("",!0),r.indeterminate?(I(),L("div",E({key:1,class:"p-progressbar-indeterminate-container"},t.ptm("root")),[R("div",E({class:"p-progressbar-value p-progressbar-value-animate"},t.ptm("value")),null,16)],16)):fe("",!0)],16,tM)}function iM(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",n==="top"&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}}var sM=`
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
`;iM(sM);CI.render=nM;var II={name:"Badge",extends:kt,props:{value:{type:[String,Number],default:null},severity:{type:String,default:null},size:{type:String,default:null}},computed:{containerClass(){return this.$slots.default?"p-overlay-badge":this.badgeClass},badgeClass(){return["p-badge p-component",{"p-badge-no-gutter":Xe.isNotEmpty(this.value)&&String(this.value).length===1,"p-badge-dot":Xe.isEmpty(this.value)&&!this.$slots.default,"p-badge-lg":this.size==="large","p-badge-xl":this.size==="xlarge","p-badge-info":this.severity==="info","p-badge-success":this.severity==="success","p-badge-warning":this.severity==="warning","p-badge-danger":this.severity==="danger"}]}}};function rM(t,e,n,i,s,r){return I(),L("span",E({class:r.badgeClass},t.ptm("root")),[ye(t.$slots,"default",{},()=>[tn(ct(n.value),1)])],16)}II.render=rM;var EI={extends:kt,emits:["remove"],props:{files:{type:Array,default:()=>[]},badgeSeverity:{type:String,default:"warning"},badgeValue:{type:String,default:null},previewWidth:{type:Number,default:50},templates:{type:null,default:null}},methods:{formatSize(t){if(t===0)return"0 B";let e=1e3,n=3,i=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],s=Math.floor(Math.log(t)/Math.log(e));return parseFloat((t/Math.pow(e,s)).toFixed(n))+" "+i[s]}},components:{FileUploadButton:Iu,FileUploadBadge:II,TimesIcon:Zr}};const oM=["alt","src","width"];function aM(t,e,n,i,s,r){const o=ut("FileUploadBadge"),a=ut("TimesIcon"),l=ut("FileUploadButton");return I(!0),L(He,null,Xi(n.files,(c,d)=>(I(),L("div",E({key:c.name+c.type+c.size,class:"p-fileupload-file"},t.ptm("file")),[R("img",E({role:"presentation",class:"p-fileupload-file-thumbnail",alt:c.name,src:c.objectURL,width:n.previewWidth},t.ptm("thumbnail")),null,16,oM),R("div",E({class:"p-fileupload-file-details"},t.ptm("details")),[R("div",E({class:"p-fileupload-file-name"},t.ptm("fileName")),ct(c.name),17),R("span",E({class:"p-fileupload-file-size"},t.ptm("fileSize")),ct(r.formatSize(c.size)),17),xe(o,{value:n.badgeValue,class:"p-fileupload-file-badge",severity:n.badgeSeverity,pt:t.ptm("badge")},null,8,["value","severity","pt"])],16),R("div",E({class:"p-fileupload-file-actions"},t.ptm("actions")),[xe(l,{onClick:f=>t.$emit("remove",d),text:"",rounded:"",severity:"danger",class:"p-fileupload-file-remove",pt:t.ptm("removeButton")},{icon:lt(f=>[n.templates.fileremoveicon?(I(),me(ot(n.templates.fileremoveicon),{key:0,class:wi(f.class),file:c,index:d},null,8,["class","file","index"])):(I(),me(a,E({key:1,class:f.class,"aria-hidden":"true"},t.ptm("removeButton").icon),null,16,["class"]))]),_:2},1032,["onClick","pt"])],16)],16))),128)}EI.render=aM;var TI={name:"FileUpload",extends:kt,emits:["select","uploader","before-upload","progress","upload","error","before-send","clear","remove","remove-uploaded-file"],props:{name:{type:String,default:null},url:{type:String,default:null},mode:{type:String,default:"advanced"},multiple:{type:Boolean,default:!1},accept:{type:String,default:null},disabled:{type:Boolean,default:!1},auto:{type:Boolean,default:!1},maxFileSize:{type:Number,default:null},invalidFileSizeMessage:{type:String,default:"{0}: Invalid file size, file size should be smaller than {1}."},invalidFileTypeMessage:{type:String,default:"{0}: Invalid file type, allowed file types: {1}."},fileLimit:{type:Number,default:null},invalidFileLimitMessage:{type:String,default:"Maximum number of files exceeded, limit is {0} at most."},withCredentials:{type:Boolean,default:!1},previewWidth:{type:Number,default:50},chooseLabel:{type:String,default:null},uploadLabel:{type:String,default:null},cancelLabel:{type:String,default:null},customUpload:{type:Boolean,default:!1},showUploadButton:{type:Boolean,default:!0},showCancelButton:{type:Boolean,default:!0},chooseIcon:{type:String,default:void 0},uploadIcon:{type:String,default:void 0},cancelIcon:{type:String,default:void 0},style:null,class:null},duplicateIEEvent:!1,data(){return{uploadedFileCount:0,files:[],messages:[],focused:!1,progress:null,uploadedFiles:[]}},methods:{onFileSelect(t){if(t.type!=="drop"&&this.isIE11()&&this.duplicateIEEvent){this.duplicateIEEvent=!1;return}this.messages=[],this.files=this.files||[];let e=t.dataTransfer?t.dataTransfer.files:t.target.files;for(let n of e)this.isFileSelected(n)||this.validate(n)&&(this.isImage(n)&&(n.objectURL=window.URL.createObjectURL(n)),this.files.push(n));this.$emit("select",{originalEvent:t,files:this.files}),this.fileLimit&&this.checkFileLimit(),this.auto&&this.hasFiles&&!this.isFileLimitExceeded()&&this.upload(),t.type!=="drop"&&this.isIE11()?this.clearIEInput():this.clearInputElement()},choose(){this.$refs.fileInput.click()},upload(){if(this.customUpload)this.fileLimit&&(this.uploadedFileCount+=this.files.length),this.$emit("uploader",{files:this.files}),this.clear();else{let t=new XMLHttpRequest,e=new FormData;this.$emit("before-upload",{xhr:t,formData:e});for(let n of this.files)e.append(this.name,n,n.name);t.upload.addEventListener("progress",n=>{n.lengthComputable&&(this.progress=Math.round(n.loaded*100/n.total)),this.$emit("progress",{originalEvent:n,progress:this.progress})}),t.onreadystatechange=()=>{t.readyState===4&&(this.progress=0,t.status>=200&&t.status<300?(this.fileLimit&&(this.uploadedFileCount+=this.files.length),this.$emit("upload",{xhr:t,files:this.files})):this.$emit("error",{xhr:t,files:this.files}),this.uploadedFiles.push(...this.files),this.clear())},t.open("POST",this.url,!0),this.$emit("before-send",{xhr:t,formData:e}),t.withCredentials=this.withCredentials,t.send(e)}},clear(){this.files=[],this.messages=null,this.$emit("clear"),this.isAdvanced&&this.clearInputElement()},onFocus(){this.focused=!0},onBlur(){this.focused=!1},isFileSelected(t){if(this.files&&this.files.length){for(let e of this.files)if(e.name+e.type+e.size===t.name+t.type+t.size)return!0}return!1},isIE11(){return!!window.MSInputMethodContext&&!!document.documentMode},validate(t){return this.accept&&!this.isFileTypeValid(t)?(this.messages.push(this.invalidFileTypeMessage.replace("{0}",t.name).replace("{1}",this.accept)),!1):this.maxFileSize&&t.size>this.maxFileSize?(this.messages.push(this.invalidFileSizeMessage.replace("{0}",t.name).replace("{1}",this.formatSize(this.maxFileSize))),!1):!0},isFileTypeValid(t){let e=this.accept.split(",").map(n=>n.trim());for(let n of e)if(this.isWildcard(n)?this.getTypeClass(t.type)===this.getTypeClass(n):t.type==n||this.getFileExtension(t).toLowerCase()===n.toLowerCase())return!0;return!1},getTypeClass(t){return t.substring(0,t.indexOf("/"))},isWildcard(t){return t.indexOf("*")!==-1},getFileExtension(t){return"."+t.name.split(".").pop()},isImage(t){return/^image\//.test(t.type)},onDragEnter(t){this.disabled||(t.stopPropagation(),t.preventDefault())},onDragOver(t){this.disabled||(Y.addClass(this.$refs.content,"p-fileupload-highlight"),t.stopPropagation(),t.preventDefault())},onDragLeave(){this.disabled||Y.removeClass(this.$refs.content,"p-fileupload-highlight")},onDrop(t){if(!this.disabled){Y.removeClass(this.$refs.content,"p-fileupload-highlight"),t.stopPropagation(),t.preventDefault();const e=t.dataTransfer?t.dataTransfer.files:t.target.files;(this.multiple||e&&e.length===1)&&this.onFileSelect(t)}},onBasicUploaderClick(){this.hasFiles?this.upload():this.$refs.fileInput.click()},remove(t){this.clearInputElement();let e=this.files.splice(t,1)[0];this.files=[...this.files],this.$emit("remove",{file:e,files:this.files})},removeUploadedFile(t){let e=this.uploadedFiles.splice(t,1)[0];this.uploadedFiles=[...this.uploadedFiles],this.$emit("remove-uploaded-file",{file:e,files:this.uploadedFiles})},clearInputElement(){this.$refs.fileInput.value=""},clearIEInput(){this.$refs.fileInput&&(this.duplicateIEEvent=!0,this.$refs.fileInput.value="")},formatSize(t){if(t===0)return"0 B";let e=1e3,n=3,i=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],s=Math.floor(Math.log(t)/Math.log(e));return parseFloat((t/Math.pow(e,s)).toFixed(n))+" "+i[s]},isFileLimitExceeded(){return this.fileLimit&&this.fileLimit<=this.files.length+this.uploadedFileCount&&this.focused&&(this.focused=!1),this.fileLimit&&this.fileLimit<this.files.length+this.uploadedFileCount},checkFileLimit(){this.isFileLimitExceeded()&&this.messages.push(this.invalidFileLimitMessage.replace("{0}",this.fileLimit.toString()))},onMessageClose(){this.messages=null}},computed:{isAdvanced(){return this.mode==="advanced"},isBasic(){return this.mode==="basic"},advancedChooseButtonClass(){return["p-button p-component p-fileupload-choose",this.class,{"p-disabled":this.disabled,"p-focus":this.focused}]},basicChooseButtonClass(){return["p-button p-component p-fileupload-choose",this.class,{"p-fileupload-choose-selected":this.hasFiles,"p-disabled":this.disabled,"p-focus":this.focused}]},basicChooseButtonLabel(){return this.auto?this.chooseButtonLabel:this.hasFiles?this.files.map(t=>t.name).join(", "):this.chooseButtonLabel},hasFiles(){return this.files&&this.files.length>0},hasUploadedFiles(){return this.uploadedFiles&&this.uploadedFiles.length>0},chooseDisabled(){return this.disabled||this.fileLimit&&this.fileLimit<=this.files.length+this.uploadedFileCount},uploadDisabled(){return this.disabled||!this.hasFiles||this.fileLimit&&this.fileLimit<this.files.length},cancelDisabled(){return this.disabled||!this.hasFiles},chooseButtonLabel(){return this.chooseLabel||this.$primevue.config.locale.choose},uploadButtonLabel(){return this.uploadLabel||this.$primevue.config.locale.upload},cancelButtonLabel(){return this.cancelLabel||this.$primevue.config.locale.cancel},completedLabel(){return this.$primevue.config.locale.completed},pendingLabel(){return this.$primevue.config.locale.pending}},components:{FileUploadButton:Iu,FileUploadProgressBar:CI,FileUploadMessage:Xp,FileContent:EI,PlusIcon:wI,UploadIcon:bI,TimesIcon:Zr},directives:{ripple:zs}};const lM=["multiple","accept","disabled"],cM=["accept","disabled","multiple"];function uM(t,e,n,i,s,r){const o=ut("FileUploadButton"),a=ut("FileUploadProgressBar"),l=ut("FileUploadMessage"),c=ut("FileContent"),d=Qi("ripple");return r.isAdvanced?(I(),L("div",E({key:0,class:"p-fileupload p-fileupload-advanced p-component"},t.ptm("root")),[R("input",E({ref:"fileInput",type:"file",onChange:e[0]||(e[0]=(...f)=>r.onFileSelect&&r.onFileSelect(...f)),multiple:n.multiple,accept:n.accept,disabled:r.chooseDisabled},t.ptm("input")),null,16,lM),R("div",E({class:"p-fileupload-buttonbar"},t.ptm("buttonbar")),[ye(t.$slots,"header",{files:s.files,uploadedFiles:s.uploadedFiles,chooseCallback:r.choose,uploadCallback:r.upload,clearCallback:r.clear},()=>[nn((I(),L("span",E({class:r.advancedChooseButtonClass,style:n.style,onClick:e[1]||(e[1]=(...f)=>r.choose&&r.choose(...f)),onKeydown:e[2]||(e[2]=cg((...f)=>r.choose&&r.choose(...f),["enter"])),onFocus:e[3]||(e[3]=(...f)=>r.onFocus&&r.onFocus(...f)),onBlur:e[4]||(e[4]=(...f)=>r.onBlur&&r.onBlur(...f)),tabindex:"0"},t.ptm("chooseButton")),[ye(t.$slots,"chooseicon",{},()=>[(I(),me(ot(n.chooseIcon?"span":"PlusIcon"),E({class:["p-button-icon p-button-icon-left",n.chooseIcon],"aria-hidden":"true"},t.ptm("chooseIcon")),null,16,["class"]))]),R("span",E({class:"p-button-label"},t.ptm("chooseButtonLabel")),ct(r.chooseButtonLabel),17)],16)),[[d]]),n.showUploadButton?(I(),me(o,{key:0,label:r.uploadButtonLabel,onClick:r.upload,disabled:r.uploadDisabled,pt:t.ptm("uploadButton")},{icon:lt(f=>[ye(t.$slots,"uploadicon",{},()=>[(I(),me(ot(n.uploadIcon?"span":"UploadIcon"),E({class:[f.class,n.uploadIcon],"aria-hidden":"true"},t.ptm("uploadButton").icon),null,16,["class"]))])]),_:3},8,["label","onClick","disabled","pt"])):fe("",!0),n.showCancelButton?(I(),me(o,{key:1,label:r.cancelButtonLabel,onClick:r.clear,disabled:r.cancelDisabled,pt:t.ptm("cancelButton")},{icon:lt(f=>[ye(t.$slots,"cancelicon",{},()=>[(I(),me(ot(n.cancelIcon?"span":"TimesIcon"),E({class:[f.class,n.cancelIcon],"aria-hidden":"true"},t.ptm("cancelButton").icon),null,16,["class"]))])]),_:3},8,["label","onClick","disabled","pt"])):fe("",!0)])],16),R("div",E({ref:"content",class:"p-fileupload-content",onDragenter:e[5]||(e[5]=(...f)=>r.onDragEnter&&r.onDragEnter(...f)),onDragover:e[6]||(e[6]=(...f)=>r.onDragOver&&r.onDragOver(...f)),onDragleave:e[7]||(e[7]=(...f)=>r.onDragLeave&&r.onDragLeave(...f)),onDrop:e[8]||(e[8]=(...f)=>r.onDrop&&r.onDrop(...f))},t.ptm("content")),[ye(t.$slots,"content",{files:s.files,uploadedFiles:s.uploadedFiles,removeUploadedFileCallback:r.removeUploadedFile,removeFileCallback:r.remove,progress:s.progress,messages:s.messages},()=>[r.hasFiles?(I(),me(a,{key:0,value:s.progress,showValue:!1,pt:t.ptm("progressbar")},null,8,["value","pt"])):fe("",!0),(I(!0),L(He,null,Xi(s.messages,f=>(I(),me(l,{key:f,severity:"error",onClose:r.onMessageClose,pt:t.ptm("message")},{default:lt(()=>[tn(ct(f),1)]),_:2},1032,["onClose","pt"]))),128)),r.hasFiles?(I(),me(c,{key:1,files:s.files,onRemove:r.remove,badgeValue:r.pendingLabel,previewWidth:n.previewWidth,templates:t.$slots,pt:t.pt},null,8,["files","onRemove","badgeValue","previewWidth","templates","pt"])):fe("",!0),xe(c,{files:s.uploadedFiles,onRemove:r.removeUploadedFile,badgeValue:r.completedLabel,badgeSeverity:"success",previewWidth:n.previewWidth,templates:t.$slots,pt:t.pt},null,8,["files","onRemove","badgeValue","previewWidth","templates","pt"])]),t.$slots.empty&&!r.hasFiles&&!r.hasUploadedFiles?(I(),L("div",E({key:0,class:"p-fileupload-empty"},t.ptm("empty")),[ye(t.$slots,"empty")],16)):fe("",!0)],16)],16)):r.isBasic?(I(),L("div",E({key:1,class:"p-fileupload p-fileupload-basic p-component"},t.ptm("root")),[(I(!0),L(He,null,Xi(s.messages,f=>(I(),me(l,{key:f,severity:"error",onClose:r.onMessageClose,pt:t.ptm("messages")},{default:lt(()=>[tn(ct(f),1)]),_:2},1032,["onClose","pt"]))),128)),nn((I(),L("span",E({class:r.basicChooseButtonClass,style:n.style,onMouseup:e[12]||(e[12]=(...f)=>r.onBasicUploaderClick&&r.onBasicUploaderClick(...f)),onKeydown:e[13]||(e[13]=cg((...f)=>r.choose&&r.choose(...f),["enter"])),onFocus:e[14]||(e[14]=(...f)=>r.onFocus&&r.onFocus(...f)),onBlur:e[15]||(e[15]=(...f)=>r.onBlur&&r.onBlur(...f)),tabindex:"0"},t.ptm("basicButton")),[!r.hasFiles||n.auto?ye(t.$slots,"uploadicon",{key:0},()=>[(I(),me(ot(n.uploadIcon?"span":"UploadIcon"),E({class:["p-button-icon p-button-icon-left",n.uploadIcon],"aria-hidden":"true"},t.ptm("uploadIcon")),null,16,["class"]))]):ye(t.$slots,"chooseicon",{key:1},()=>[(I(),me(ot(n.chooseIcon?"span":"PlusIcon"),E({class:["p-button-icon p-button-icon-left",n.chooseIcon],"aria-hidden":"true"},t.ptm("chooseIcon")),null,16,["class"]))]),R("span",E({class:"p-button-label"},t.ptm("label")),ct(r.basicChooseButtonLabel),17),r.hasFiles?fe("",!0):(I(),L("input",E({key:2,ref:"fileInput",type:"file",accept:n.accept,disabled:n.disabled,multiple:n.multiple,onChange:e[9]||(e[9]=(...f)=>r.onFileSelect&&r.onFileSelect(...f)),onFocus:e[10]||(e[10]=(...f)=>r.onFocus&&r.onFocus(...f)),onBlur:e[11]||(e[11]=(...f)=>r.onBlur&&r.onBlur(...f))},t.ptm("input")),null,16,cM))],16)),[[d]])],16)):fe("",!0)}function hM(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",n==="top"&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}}var dM=`
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
`;hM(dM);TI.render=uM;var SI={name:"Card",extends:kt};function fM(t,e,n,i,s,r){return I(),L("div",E({class:"p-card p-component"},t.ptm("root")),[t.$slots.header?(I(),L("div",E({key:0,class:"p-card-header"},t.ptm("header")),[ye(t.$slots,"header")],16)):fe("",!0),R("div",E({class:"p-card-body"},t.ptm("body")),[t.$slots.title?(I(),L("div",E({key:0,class:"p-card-title"},t.ptm("title")),[ye(t.$slots,"title")],16)):fe("",!0),t.$slots.subtitle?(I(),L("div",E({key:1,class:"p-card-subtitle"},t.ptm("subtitle")),[ye(t.$slots,"subtitle")],16)):fe("",!0),R("div",E({class:"p-card-content"},t.ptm("content")),[ye(t.$slots,"content")],16),t.$slots.footer?(I(),L("div",E({key:2,class:"p-card-footer"},t.ptm("footer")),[ye(t.$slots,"footer")],16)):fe("",!0)],16)],16)}SI.render=fM;var AI={name:"Textarea",extends:kt,emits:["update:modelValue"],props:{modelValue:null,autoResize:Boolean},mounted(){this.$el.offsetParent&&this.autoResize&&this.resize()},updated(){this.$el.offsetParent&&this.autoResize&&this.resize()},methods:{resize(){const t=window.getComputedStyle(this.$el);this.$el.style.height="auto",this.$el.style.height=`calc(${t.borderTopWidth} + ${t.borderBottomWidth} + ${this.$el.scrollHeight}px)`,parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden"},onInput(t){this.autoResize&&this.resize(),this.$emit("update:modelValue",t.target.value)}},computed:{filled(){return this.modelValue!=null&&this.modelValue.toString().length>0}}};const pM=["value"];function mM(t,e,n,i,s,r){return I(),L("textarea",E({class:["p-inputtextarea p-inputtext p-component",{"p-filled":r.filled,"p-inputtextarea-resizable ":n.autoResize}],value:n.modelValue,onInput:e[0]||(e[0]=(...o)=>r.onInput&&r.onInput(...o))},t.ptm("root")),null,16,pM)}function gM(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",n==="top"&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}}var yM=`
.p-inputtextarea-resizable {
    overflow: hidden;
    resize: none;
}
.p-fluid .p-inputtextarea {
    width: 100%;
}
`;gM(yM);AI.render=mM;var kI={name:"Steps",extends:kt,props:{id:{type:String,default:Ai()},model:{type:Array,default:null},readonly:{type:Boolean,default:!0},exact:{type:Boolean,default:!0}},mounted(){const t=this.findFirstItem();t.tabIndex="0"},methods:{onItemClick(t,e,n){if(this.disabled(e)||this.readonly){t.preventDefault();return}e.command&&e.command({originalEvent:t,item:e}),e.to&&n&&n(t)},onItemKeydown(t,e,n){switch(t.code){case"ArrowRight":{this.navigateToNextItem(t.target),t.preventDefault();break}case"ArrowLeft":{this.navigateToPrevItem(t.target),t.preventDefault();break}case"Home":{this.navigateToFirstItem(t.target),t.preventDefault();break}case"End":{this.navigateToLastItem(t.target),t.preventDefault();break}case"Tab":break;case"Enter":case"Space":{this.onItemClick(t,e,n),t.preventDefault();break}}},navigateToNextItem(t){const e=this.findNextItem(t);e&&this.setFocusToMenuitem(t,e)},navigateToPrevItem(t){const e=this.findPrevItem(t);e&&this.setFocusToMenuitem(t,e)},navigateToFirstItem(t){const e=this.findFirstItem(t);e&&this.setFocusToMenuitem(t,e)},navigateToLastItem(t){const e=this.findLastItem(t);e&&this.setFocusToMenuitem(t,e)},findNextItem(t){const e=t.parentElement.nextElementSibling;return e?e.children[0]:null},findPrevItem(t){const e=t.parentElement.previousElementSibling;return e?e.children[0]:null},findFirstItem(){const t=Y.findSingle(this.$refs.list,".p-steps-item");return t?t.children[0]:null},findLastItem(){const t=Y.find(this.$refs.list,".p-steps-item");return t?t[t.length-1].children[0]:null},setFocusToMenuitem(t,e){t.tabIndex="-1",e.tabIndex="0",e.focus()},isActive(t){return t.to?this.$router.resolve(t.to).path===this.$route.path:!1},getItemClass(t){return["p-steps-item",t.class,{"p-highlight p-steps-current":this.isActive(t),"p-disabled":this.isItemDisabled(t)}]},linkClass(t){return["p-menuitem-link",{"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},isItemDisabled(t){return this.disabled(t)||this.readonly&&!this.isActive(t)},visible(t){return typeof t.visible=="function"?t.visible():t.visible!==!1},disabled(t){return typeof t.disabled=="function"?t.disabled():t.disabled},label(t){return typeof t.label=="function"?t.label():t.label}},computed:{containerClass(){return["p-steps p-component",{"p-readonly":this.readonly}]}}};const vM=["id"],_M=["href","aria-current","onClick","onKeydown"],wM=["onKeydown"];function bM(t,e,n,i,s,r){const o=ut("router-link");return I(),L("nav",E({id:n.id,class:r.containerClass},t.ptm("root")),[R("ol",E({ref:"list",class:"p-steps-list"},t.ptm("menu")),[(I(!0),L(He,null,Xi(n.model,(a,l)=>(I(),L(He,{key:a.to},[r.visible(a)?(I(),L("li",E({key:0,class:r.getItemClass(a),style:a.style},t.ptm("menuitem")),[t.$slots.item?(I(),me(ot(t.$slots.item),{key:1,item:a},null,8,["item"])):(I(),L(He,{key:0},[r.isItemDisabled(a)?(I(),L("span",E({key:1,class:r.linkClass(),onKeydown:c=>r.onItemKeydown(c,a)},t.ptm("action")),[R("span",E({class:"p-steps-number"},t.ptm("step")),ct(l+1),17),R("span",E({class:"p-steps-title"},t.ptm("label")),ct(r.label(a)),17)],16,wM)):(I(),me(o,{key:0,to:a.to,custom:""},{default:lt(({navigate:c,href:d,isActive:f,isExactActive:m})=>[R("a",E({href:d,class:r.linkClass({isActive:f,isExactActive:m}),tabindex:-1,"aria-current":m?"step":void 0,onClick:y=>r.onItemClick(y,a,c),onKeydown:y=>r.onItemKeydown(y,a,c)},t.ptm("action")),[R("span",E({class:"p-steps-number"},t.ptm("step")),ct(l+1),17),R("span",E({class:"p-steps-title"},t.ptm("label")),ct(r.label(a)),17)],16,_M)]),_:2},1032,["to"]))],64))],16)):fe("",!0)],64))),128))],16)],16,vM)}function CM(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",n==="top"&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}}var IM=`
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
`;CM(IM);kI.render=bM;var xI={name:"ChevronLeftIcon",extends:Ot};const EM=R("path",{d:"M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z",fill:"currentColor"},null,-1),TM=[EM];function SM(t,e,n,i,s,r){return I(),L("svg",E({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),TM,16)}xI.render=SM;var RI={name:"ChevronRightIcon",extends:Ot};const AM=R("path",{d:"M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z",fill:"currentColor"},null,-1),kM=[AM];function xM(t,e,n,i,s,r){return I(),L("svg",E({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),kM,16)}RI.render=xM;var PI={name:"TabView",extends:kt,emits:["update:activeIndex","tab-change","tab-click"],props:{activeIndex:{type:Number,default:0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1},previousButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null},prevIcon:{type:String,default:void 0},nextIcon:{type:String,default:void 0}},data(){return{id:this.$attrs.id,d_activeIndex:this.activeIndex,isPrevButtonDisabled:!0,isNextButtonDisabled:!1}},watch:{"$attrs.id":function(t){this.id=t||Ai()},activeIndex(t){this.d_activeIndex=t,this.scrollInView({index:t})}},mounted(){this.id=this.id||Ai(),this.updateInkBar(),this.scrollable&&this.updateButtonState()},updated(){this.updateInkBar()},methods:{isTabPanel(t){return t.type.name==="TabPanel"},isTabActive(t){return this.d_activeIndex===t},getTabProp(t,e){return t.props?t.props[e]:void 0},getKey(t,e){return this.getTabProp(t,"header")||e},getTabHeaderActionId(t){return`${this.id}_${t}_header_action`},getTabContentId(t){return`${this.id}_${t}_content`},getTabPT(t,e){return this.ptmo(this.getTabProp(t,"pt"),e,{props:t.props,parent:{props:this.$props,state:this.$data}})},onScroll(t){this.scrollable&&this.updateButtonState(),t.preventDefault()},onPrevButtonClick(){const t=this.$refs.content,e=Y.getWidth(t),n=t.scrollLeft-e;t.scrollLeft=n<=0?0:n},onNextButtonClick(){const t=this.$refs.content,e=Y.getWidth(t)-this.getVisibleButtonWidths(),n=t.scrollLeft+e,i=t.scrollWidth-e;t.scrollLeft=n>=i?i:n},onTabClick(t,e,n){this.changeActiveIndex(t,e,n),this.$emit("tab-click",{originalEvent:t,index:n})},onTabKeyDown(t,e,n){switch(t.code){case"ArrowLeft":this.onTabArrowLeftKey(t);break;case"ArrowRight":this.onTabArrowRightKey(t);break;case"Home":this.onTabHomeKey(t);break;case"End":this.onTabEndKey(t);break;case"PageDown":this.onPageDownKey(t);break;case"PageUp":this.onPageUpKey(t);break;case"Enter":case"Space":this.onTabEnterKey(t,e,n);break}},onTabArrowRightKey(t){const e=this.findNextHeaderAction(t.target.parentElement);e?this.changeFocusedTab(t,e):this.onTabHomeKey(t),t.preventDefault()},onTabArrowLeftKey(t){const e=this.findPrevHeaderAction(t.target.parentElement);e?this.changeFocusedTab(t,e):this.onTabEndKey(t),t.preventDefault()},onTabHomeKey(t){const e=this.findFirstHeaderAction();this.changeFocusedTab(t,e),t.preventDefault()},onTabEndKey(t){const e=this.findLastHeaderAction();this.changeFocusedTab(t,e),t.preventDefault()},onPageDownKey(t){this.scrollInView({index:this.$refs.nav.children.length-2}),t.preventDefault()},onPageUpKey(t){this.scrollInView({index:0}),t.preventDefault()},onTabEnterKey(t,e,n){this.changeActiveIndex(t,e,n),t.preventDefault()},findNextHeaderAction(t,e=!1){const n=e?t:t.nextElementSibling;return n?Y.hasClass(n,"p-disabled")||Y.hasClass(n,"p-tabview-ink-bar")?this.findNextHeaderAction(n):Y.findSingle(n,".p-tabview-header-action"):null},findPrevHeaderAction(t,e=!1){const n=e?t:t.previousElementSibling;return n?Y.hasClass(n,"p-disabled")||Y.hasClass(n,"p-tabview-ink-bar")?this.findPrevHeaderAction(n):Y.findSingle(n,".p-tabview-header-action"):null},findFirstHeaderAction(){return this.findNextHeaderAction(this.$refs.nav.firstElementChild,!0)},findLastHeaderAction(){return this.findPrevHeaderAction(this.$refs.nav.lastElementChild,!0)},changeActiveIndex(t,e,n){!this.getTabProp(e,"disabled")&&this.d_activeIndex!==n&&(this.d_activeIndex=n,this.$emit("update:activeIndex",n),this.$emit("tab-change",{originalEvent:t,index:n}),this.scrollInView({index:n}))},changeFocusedTab(t,e){if(e&&(Y.focus(e),this.scrollInView({element:e}),this.selectOnFocus)){const n=parseInt(e.parentElement.dataset.index,10),i=this.tabs[n];this.changeActiveIndex(t,i,n)}},scrollInView({element:t,index:e=-1}){const n=t||this.$refs.nav.children[e];n&&n.scrollIntoView&&n.scrollIntoView({block:"nearest"})},updateInkBar(){let t=this.$refs.nav.children[this.d_activeIndex];this.$refs.inkbar.style.width=Y.getWidth(t)+"px",this.$refs.inkbar.style.left=Y.getOffset(t).left-Y.getOffset(this.$refs.nav).left+"px"},updateButtonState(){const t=this.$refs.content,{scrollLeft:e,scrollWidth:n}=t,i=Y.getWidth(t);this.isPrevButtonDisabled=e===0,this.isNextButtonDisabled=parseInt(e)===n-i},getVisibleButtonWidths(){const{prevBtn:t,nextBtn:e}=this.$refs;return[t,e].reduce((n,i)=>i?n+Y.getWidth(i):n,0)},getTabHeaderClass(t,e){return["p-tabview-header",this.getTabProp(t,"headerClass"),{"p-highlight":this.d_activeIndex===e,"p-disabled":this.getTabProp(t,"disabled")}]},getTabContentClass(t){return["p-tabview-panel",this.getTabProp(t,"contentClass")]}},computed:{contentClasses(){return["p-tabview p-component",{"p-tabview-scrollable":this.scrollable}]},tabs(){return this.$slots.default().reduce((t,e)=>(this.isTabPanel(e)?t.push(e):e.children&&e.children instanceof Array&&e.children.forEach(n=>{this.isTabPanel(n)&&t.push(n)}),t),[])},prevButtonAriaLabel(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0}},directives:{ripple:zs},components:{ChevronLeftIcon:xI,ChevronRightIcon:RI}};const RM=["tabindex","aria-label"],PM=["data-index"],NM=["id","tabindex","aria-disabled","aria-selected","aria-controls","onClick","onKeydown"],DM=["tabindex","aria-label"],LM=["aria-labelledby"];function OM(t,e,n,i,s,r){const o=Qi("ripple");return I(),L("div",E({class:r.contentClasses},t.ptm("root")),[R("div",E({class:"p-tabview-nav-container"},t.ptm("navcontainer")),[n.scrollable&&!s.isPrevButtonDisabled?nn((I(),L("button",E({key:0,ref:"prevBtn",type:"button",class:"p-tabview-nav-prev p-tabview-nav-btn p-link",tabindex:n.tabindex,"aria-label":r.prevButtonAriaLabel,onClick:e[0]||(e[0]=(...a)=>r.onPrevButtonClick&&r.onPrevButtonClick(...a))},{...n.previousButtonProps,...t.ptm("prevbutton")}),[ye(t.$slots,"previcon",{},()=>[(I(),me(ot(n.prevIcon?"span":"ChevronLeftIcon"),E({"aria-hidden":"true",class:n.prevIcon},t.ptm("previcon")),null,16,["class"]))])],16,RM)),[[o]]):fe("",!0),R("div",E({ref:"content",class:"p-tabview-nav-content",onScroll:e[1]||(e[1]=(...a)=>r.onScroll&&r.onScroll(...a))},t.ptm("navcontent")),[R("ul",E({ref:"nav",class:"p-tabview-nav",role:"tablist"},t.ptm("nav")),[(I(!0),L(He,null,Xi(r.tabs,(a,l)=>(I(),L("li",E({key:r.getKey(a,l),style:r.getTabProp(a,"headerStyle"),class:r.getTabHeaderClass(a,l),role:"presentation","data-index":l},{...r.getTabProp(a,"headerProps"),...r.getTabPT(a,"root"),...r.getTabPT(a,"header")}),[nn((I(),L("a",E({id:r.getTabHeaderActionId(l),class:"p-tabview-nav-link p-tabview-header-action",tabindex:r.getTabProp(a,"disabled")||!r.isTabActive(l)?-1:n.tabindex,role:"tab","aria-disabled":r.getTabProp(a,"disabled"),"aria-selected":r.isTabActive(l),"aria-controls":r.getTabContentId(l),onClick:c=>r.onTabClick(c,a,l),onKeydown:c=>r.onTabKeyDown(c,a,l)},{...r.getTabProp(a,"headerActionProps"),...r.getTabPT(a,"headeraction")}),[a.props&&a.props.header?(I(),L("span",E({key:0,class:"p-tabview-title"},r.getTabPT(a,"headertitle")),ct(a.props.header),17)):fe("",!0),a.children&&a.children.header?(I(),me(ot(a.children.header),{key:1})):fe("",!0)],16,NM)),[[o]])],16,PM))),128)),R("li",E({ref:"inkbar",class:"p-tabview-ink-bar",role:"presentation","aria-hidden":"true"},t.ptm("inkbar")),null,16)],16)],16),n.scrollable&&!s.isNextButtonDisabled?nn((I(),L("button",E({key:1,ref:"nextBtn",type:"button",class:"p-tabview-nav-next p-tabview-nav-btn p-link",tabindex:n.tabindex,"aria-label":r.nextButtonAriaLabel,onClick:e[2]||(e[2]=(...a)=>r.onNextButtonClick&&r.onNextButtonClick(...a))},{...n.nextButtonProps,...t.ptm("nextbutton")}),[ye(t.$slots,"nexticon",{},()=>[(I(),me(ot(n.nextIcon?"span":"ChevronRightIcon"),E({"aria-hidden":"true",class:n.nextIcon},t.ptm("nexticon")),null,16,["class"]))])],16,DM)),[[o]]):fe("",!0)],16),R("div",E({class:"p-tabview-panels"},t.ptm("panelcontainer")),[(I(!0),L(He,null,Xi(r.tabs,(a,l)=>(I(),L(He,{key:r.getKey(a,l)},[!n.lazy||r.isTabActive(l)?nn((I(),L("div",E({key:0,style:r.getTabProp(a,"contentStyle"),class:r.getTabContentClass(a),role:"tabpanel","aria-labelledby":r.getTabHeaderActionId(l)},{...r.getTabProp(a,"contentProps"),...r.getTabPT(a,"root"),...r.getTabPT(a,"content")}),[(I(),me(ot(a)))],16,LM)),[[nv,n.lazy?!0:r.isTabActive(l)]]):fe("",!0)],64))),128))],16)],16)}function MM(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",n==="top"&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}}var FM=`
.p-tabview-nav-container {
    position: relative;
}
.p-tabview-scrollable .p-tabview-nav-container {
    overflow: hidden;
}
.p-tabview-nav-content {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
    overscroll-behavior: contain auto;
}
.p-tabview-nav {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    flex: 1 1 auto;
}
.p-tabview-header-action {
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    position: relative;
    text-decoration: none;
    overflow: hidden;
}
.p-tabview-ink-bar {
    display: none;
    z-index: 1;
}
.p-tabview-header-action:focus {
    z-index: 1;
}
.p-tabview-title {
    line-height: 1;
    white-space: nowrap;
}
.p-tabview-nav-btn {
    position: absolute;
    top: 0;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.p-tabview-nav-prev {
    left: 0;
}
.p-tabview-nav-next {
    right: 0;
}
.p-tabview-nav-content::-webkit-scrollbar {
    display: none;
}
`;MM(FM);PI.render=OM;var NI={name:"TabPanel",extends:kt,props:{header:null,headerStyle:null,headerClass:null,headerProps:null,headerActionProps:null,contentStyle:null,contentClass:null,contentProps:null,disabled:Boolean}};function BM(t,e,n,i,s,r){return ye(t.$slots,"default")}NI.render=BM;const UM=Symbol();var VM={install:t=>{const e={add:n=>{ui.emit("add",n)},removeGroup:n=>{ui.emit("remove-group",n)},removeAllGroups:()=>{ui.emit("remove-all-groups")}};t.config.globalProperties.$toast=e,t.provide(UM,e)}};const DI=new Gp("admin","admin","voleylock@gmail.com",""),LI=yr(Wp,"users",DI.name).withConverter(Md),$M=yr(Wp,"config","config"),HM=new Date(Yp.votesDateStart),Pl=new Date(Yp.votesDateEnd),OI=yr(Wp,"votes",`${Pl.getDate()}-${Pl.getMonth()+1}-${Pl.getFullYear()}`),zM=await jp(OI),jM=await jp(LI);jM.exists()||(vr(LI,DI),vr($M,Yp));zM.exists()||await vr(OI,{endDate:Pl,initialDate:HM,votes:{}});const mt=$S(pD);mt.use(kD);mt.use(ID);mt.use(VM);mt.use(xD);mt.use(lN,{firebaseApp:Nd,modules:[aN(Nd)]});mt.component("Menubar",fI);mt.component("Button",Iu);mt.component("TheWelcome",tO);mt.component("NavBar",cO);mt.component("Dialog",gI);mt.component("InputText",Qp);mt.component("Password",_I);mt.component("Toast",aI);mt.component("FileUpload",TI);mt.component("Card",SI);mt.component("Textarea",AI);mt.component("Steps",kI);mt.component("Message",Xp);mt.component("TabView",PI);mt.component("TabPanel",NI);mt.mount("#app");export{He as F,AC as P,_1 as R,Gp as U,Jr as _,v1 as a,S8 as b,L as c,C1 as d,R as e,Z4 as f,h4 as g,Wk as h,yr as i,jp as j,Xi as k,xe as l,vr as m,me as n,I as o,u4 as p,yD as q,ut as r,tn as s,ct as t,Md as u,lt as w};
