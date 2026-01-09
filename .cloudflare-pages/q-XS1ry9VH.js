import{s as ve,j as v,f as je,g as Le,F as V,h as Ae,c as F,i as k,u as oe,k as ae,l as Ne,d as P,b as w,m as Re,n as Ie,S as Oe,o as Be,p as be,q as B,r as Te,t as Z,w as $,x as Me,y as Qe,z as E,A as Ue,B as ye,C as He,D as ce,E as Ge,G as T}from"./q-DwMdM6sh.js";const ue={manifestHash:"h0b87r",core:"q-Dd7p1qqb.js",preloader:"q-BKZ00VYc.js",qwikLoader:"q-naDMFAHy.js",bundleGraphAsset:"assets/OwSWDXJg-bundle-graph.json",injections:[{tag:"link",location:"head",attributes:{rel:"stylesheet",href:"/assets/CDHRIBUL-style.css"}}],mapping:{s_q05XoBoPwdM:"q-CxVkNUE4.js",s_U494pq5A3AE:"q-BG4kOPZn.js",s_bVDyXlGBExg:"q-DGSw0A_4.js",s_0kth9k2Wm2c:"q-BpltvemG.js",s_1WH0Oti3Pkg:"q-DwuCQVb4.js",s_4KKtTa0ZEkc:"q-B575sB5T.js",s_5NAcqoYUfh4:"q-Dc8K8FS5.js",s_BOeBTc4d5Co:"q-BYdvZMHw.js",s_FTk4LSKVSOw:"q-K3SaI9SQ.js",s_JMoqXr5BpSc:"q-CZTg_vL4.js",s_P7eq3fnkqa4:"q-Bb8kT9O-.js",s_Sb3DZDSaR0w:"q-DWFpqcea.js",s_WO9YzPudymM:"q-CxVkNUE4.js",s_X4xLXSGRzUw:"q-DzdAbPSA.js",s_X5avGziVgHI:"q-y1TmMnVA.js",s_X9T9b0H1WYc:"q-CO-a46iL.js",s_YdQGD2ZVz0o:"q-DVJaDVKN.js",s_eXj9WwIm9DQ:"q-B6yZD_h0.js",s_khlJwwp8xO0:"q-C6JTZH9O.js",s_lOVycnpG2qM:"q-DbJhMcyW.js",s_mZyY7po0aBw:"q-DGSw0A_4.js",s_zraoQGYzmkc:"q-B41uWBCM.js",s_CA5H3fobOHM:"q-CxVkNUE4.js",s_4703jmgakKY:"q-Yfqya97e.js",s_QhQGMJ7amCk:"q-DyWSIats.js",s_Txlrypi0ea0:"q-Bndw753L.js",s_uaXK9rbkuig:"q-B6NBR-ab.js",s_0GGTH0PJJgw:"q-DGSw0A_4.js",s_0JxZQhgvE7w:"q-DGSw0A_4.js",s_4JuJ7u55WFc:"q-y1TmMnVA.js",s_AOLd03z5fNM:"q-CxVkNUE4.js",s_MRVRz304uBk:"q-CZTg_vL4.js",s_NsV581xLUCk:"q-CZTg_vL4.js",s_O7qqy6cOVtk:"q-DGSw0A_4.js",s_eG00GPLLc8E:"q-CO-a46iL.js",s_fa3uvNmbbZY:"q-CxVkNUE4.js"}};/**
 * @license
 * @builder.io/qwik/server 1.17.2
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/QwikDev/qwik/blob/main/LICENSE
 */var Ve=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),Fe="<sync>";function ge(e,t){const n=t?.mapper,s=e.symbolMapper?e.symbolMapper:(o,i,a)=>{if(n){const l=U(o),c=n[l];if(!c){if(l===Fe)return[l,""];if(globalThis.__qwik_reg_symbols?.has(l))return[o,"_"];if(a)return[o,`${a}?qrl=${o}`];console.error("Cannot resolve symbol",o,"in",n,a)}return c}};return{isServer:!0,async importSymbol(o,i,a){const l=U(a),c=globalThis.__qwik_reg_symbols?.get(l);if(c)return c;let f=String(i);f.endsWith(".js")||(f+=".js");const u=Ve(f);if(!(a in u))throw new Error(`Q-ERROR: missing symbol '${a}' in module '${f}'.`);return u[a]},raf:()=>(console.error("server can not rerender"),Promise.resolve()),nextTick:o=>new Promise(i=>{setTimeout(()=>{i(o())})}),chunkForSymbol(o,i,a){return s(o,n,a)}}}async function We(e,t){const n=ge(e,t);ve(n)}var U=e=>{const t=e.lastIndexOf("_");return t>-1?e.slice(t+1):e},ze="q:instance",X={$DEBUG$:!1,$invPreloadProbability$:.65},Je=Date.now(),Ye=/\.[mc]?js$/,qe=0,Ze=1,Ke=2,Xe=3,ee,te,et=(e,t)=>({$name$:e,$state$:Ye.test(e)?qe:Xe,$deps$:we?t?.map(n=>({...n,$factor$:1})):t,$inverseProbability$:1,$createdTs$:Date.now(),$waitedMs$:0,$loadedMs$:0}),tt=e=>{const t=new Map;let n=0;for(;n<e.length;){const s=e[n++],r=[];let o,i=1;for(;o=e[n],typeof o=="number";)o<0?i=-o/10:r.push({$name$:e[o],$importProbability$:i,$factor$:1}),n++;t.set(s,r)}return t},_e=e=>{let t=ne.get(e);if(!t){let n;if(te){if(n=te.get(e),!n)return;n.length||(n=void 0)}t=et(e,n),ne.set(e,t)}return t},nt=(e,t)=>{t&&("debug"in t&&(X.$DEBUG$=!!t.debug),typeof t.preloadProbability=="number"&&(X.$invPreloadProbability$=1-t.preloadProbability)),!(ee!=null||!e)&&(ee="",te=tt(e))},ne=new Map,we,H,Se=0,R=[],rt=(...e)=>{console.log(`Preloader ${Date.now()-Je}ms ${Se}/${R.length} queued>`,...e)},st=()=>{ne.clear(),H=!1,we=!0,Se=0,R.length=0},ot=()=>{H&&(R.sort((e,t)=>e.$inverseProbability$-t.$inverseProbability$),H=!1)},at=()=>{ot();let e=.4;const t=[];for(const n of R){const s=Math.round((1-n.$inverseProbability$)*10);s!==e&&(e=s,t.push(e)),t.push(n.$name$)}return t},$e=(e,t,n)=>{if(n?.has(e))return;const s=e.$inverseProbability$;if(e.$inverseProbability$=t,!(s-e.$inverseProbability$<.01)&&(ee!=null&&e.$state$<Ke&&(e.$state$===qe&&(e.$state$=Ze,R.push(e),X.$DEBUG$&&rt(`queued ${Math.round((1-e.$inverseProbability$)*100)}%`,e.$name$)),H=!0),e.$deps$)){n||(n=new Set),n.add(e);const r=1-e.$inverseProbability$;for(const o of e.$deps$){const i=_e(o.$name$);if(i.$inverseProbability$===0)continue;let a;if(r===1||r>=.99&&re<100)re++,a=Math.min(.01,1-o.$importProbability$);else{const l=1-o.$importProbability$*r,c=o.$factor$,f=l/c;a=Math.max(.02,i.$inverseProbability$*f),o.$factor$=f}$e(i,a,n)}}},fe=(e,t)=>{const n=_e(e);n&&n.$inverseProbability$>t&&$e(n,t)},re,it=(e,t)=>{if(!e?.length)return;re=0;let n=t?1-t:.4;if(Array.isArray(e))for(let s=e.length-1;s>=0;s--){const r=e[s];typeof r=="number"?n=1-r/10:fe(r,n)}else fe(e,n)};function lt(e){const t=[],n=s=>{if(s)for(const r of s)t.includes(r.url)||(t.push(r.url),r.imports&&n(r.imports))};return n(e),t}var ct=e=>{const t=Ae();return e?.qrls?.map(n=>{const s=n.$refSymbol$||n.$symbol$,r=n.$chunk$,o=t.chunkForSymbol(s,r,n.dev?.file);return o?o[1]:r}).filter(Boolean)};function ut(e,t,n){const s=t.prefetchStrategy;if(s===null)return[];if(!n?.manifest.bundleGraph)return ct(e);if(typeof s?.symbolsToPrefetch=="function")try{const o=s.symbolsToPrefetch({manifest:n.manifest});return lt(o)}catch(o){console.error("getPrefetchUrls, symbolsToPrefetch()",o)}const r=new Set;for(const o of e?.qrls||[]){const i=U(o.$refSymbol$||o.$symbol$);i&&i.length>=10&&r.add(i)}return[...r]}var ft=(e,t)=>{if(!t?.manifest.bundleGraph)return[...new Set(e)];st();let n=.99;for(const s of e.slice(0,15))it(s,n),n*=.85;return at()},se=(e,t)=>{if(t==null)return null;const n=`${e}${t}`.split("/"),s=[];for(const r of n)r===".."&&s.length>0?s.pop():s.push(r);return s.join("/")},dt=(e,t,n,s,r)=>{const o=se(e,t?.manifest?.preloader),i="/"+t?.manifest.bundleGraphAsset;if(o&&i&&n!==!1){const l=typeof n=="object"?{debug:n.debug,preloadProbability:n.ssrPreloadProbability}:void 0;nt(t?.manifest.bundleGraph,l);const c=[];n?.debug&&c.push("d:1"),n?.maxIdlePreloads&&c.push(`P:${n.maxIdlePreloads}`),n?.preloadProbability&&c.push(`Q:${n.preloadProbability}`);const f=c.length?`,{${c.join(",")}}`:"",u=`let b=fetch("${i}");import("${o}").then(({l})=>l(${JSON.stringify(e)},b${f}));`;s.push(v("link",{rel:"modulepreload",href:o,nonce:r}),v("link",{rel:"preload",href:i,as:"fetch",crossorigin:"anonymous",nonce:r}),v("script",{type:"module",async:!0,dangerouslySetInnerHTML:u,nonce:r}))}const a=se(e,t?.manifest.core);a&&s.push(v("link",{rel:"modulepreload",href:a,nonce:r}))},mt=(e,t,n,s,r)=>{if(s.length===0||n===!1)return null;const{ssrPreloads:o,ssrPreloadProbability:i}=ht(typeof n=="boolean"?void 0:n);let a=o;const l=[],c=[],f=t?.manifest.manifestHash;if(a){const d=t?.manifest.preloader,p=t?.manifest.core,g=ft(s,t);let _=4;const j=i*10;for(const h of g)if(typeof h=="string"){if(_<j)break;if(h===d||h===p)continue;if(c.push(h),--a===0)break}else _=h}const u=se(e,f&&t?.manifest.preloader);let y=c.length?`${JSON.stringify(c)}.map((l,e)=>{e=document.createElement('link');e.rel='modulepreload';e.href=${JSON.stringify(e)}+l;document.head.appendChild(e)});`:"";return u&&(y+=`window.addEventListener('load',f=>{f=_=>import("${u}").then(({p})=>p(${JSON.stringify(s)}));try{requestIdleCallback(f,{timeout:2000})}catch(e){setTimeout(f,200)}})`),y&&l.push(v("script",{type:"module","q:type":"preload",async:!0,dangerouslySetInnerHTML:y,nonce:r})),l.length>0?v(V,{children:l}):null},pt=(e,t,n,s,r)=>{if(n.preloader!==!1){const o=ut(t,n,s);if(o.length>0){const i=mt(e,s,n.preloader,o,n.serverData?.nonce);i&&r.push(i)}}};function ht(e){return{...vt,...e}}var vt={ssrPreloads:7,ssrPreloadProbability:.5,debug:!1,maxIdlePreloads:25,preloadProbability:.35},bt='const t=document,e=window,n=new Set,o=new Set([t]);let r;const s=(t,e)=>Array.from(t.querySelectorAll(e)),a=t=>{const e=[];return o.forEach(n=>e.push(...s(n,t))),e},i=t=>{w(t),s(t,"[q\\\\:shadowroot]").forEach(t=>{const e=t.shadowRoot;e&&i(e)})},c=t=>t&&"function"==typeof t.then,l=(t,e,n=e.type)=>{a("[on"+t+"\\\\:"+n+"]").forEach(o=>{b(o,t,e,n)})},f=e=>{if(void 0===e._qwikjson_){let n=(e===t.documentElement?t.body:e).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===n.getAttribute("type")){e._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/gi,"<$1"));break}n=n.previousElementSibling}}},p=(t,e)=>new CustomEvent(t,{detail:e}),b=async(e,n,o,r=o.type)=>{const s="on"+n+":"+r;e.hasAttribute("preventdefault:"+r)&&o.preventDefault(),e.hasAttribute("stoppropagation:"+r)&&o.stopPropagation();const a=e._qc_,i=a&&a.li.filter(t=>t[0]===s);if(i&&i.length>0){for(const t of i){const n=t[1].getFn([e,o],()=>e.isConnected)(o,e),r=o.cancelBubble;c(n)&&await n,r&&o.stopPropagation()}return}const l=e.getAttribute(s);if(l){const n=e.closest("[q\\\\:container]"),r=n.getAttribute("q:base"),s=n.getAttribute("q:version")||"unknown",a=n.getAttribute("q:manifest-hash")||"dev",i=new URL(r,t.baseURI);for(const p of l.split("\\n")){const l=new URL(p,i),b=l.href,h=l.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",q=performance.now();let _,d,y;const w=p.startsWith("#"),g={qBase:r,qManifest:a,qVersion:s,href:b,symbol:h,element:e,reqTime:q};if(w){const e=n.getAttribute("q:instance");_=(t["qFuncs_"+e]||[])[Number.parseInt(h)],_||(d="sync",y=Error("sym:"+h))}else{u("qsymbol",g);const t=l.href.split("#")[0];try{const e=import(t);f(n),_=(await e)[h],_||(d="no-symbol",y=Error(`${h} not in ${t}`))}catch(t){d||(d="async"),y=t}}if(!_){u("qerror",{importError:d,error:y,...g}),console.error(y);break}const m=t.__q_context__;if(e.isConnected)try{t.__q_context__=[e,o,l];const n=_(o,e);c(n)&&await n}catch(t){u("qerror",{error:t,...g})}finally{t.__q_context__=m}}}},u=(e,n)=>{t.dispatchEvent(p(e,n))},h=t=>t.replace(/([A-Z])/g,t=>"-"+t.toLowerCase()),q=async t=>{let e=h(t.type),n=t.target;for(l("-document",t,e);n&&n.getAttribute;){const o=b(n,"",t,e);let r=t.cancelBubble;c(o)&&await o,r||(r=r||t.cancelBubble||n.hasAttribute("stoppropagation:"+t.type)),n=t.bubbles&&!0!==r?n.parentElement:null}},_=t=>{l("-window",t,h(t.type))},d=()=>{const s=t.readyState;if(!r&&("interactive"==s||"complete"==s)&&(o.forEach(i),r=1,u("qinit"),(e.requestIdleCallback??e.setTimeout).bind(e)(()=>u("qidle")),n.has("qvisible"))){const t=a("[on\\\\:qvisible]"),e=new IntersectionObserver(t=>{for(const n of t)n.isIntersecting&&(e.unobserve(n.target),b(n.target,"",p("qvisible",n)))});t.forEach(t=>e.observe(t))}},y=(t,e,n,o=!1)=>{t.addEventListener(e,n,{capture:o,passive:!1})},w=(...t)=>{for(const r of t)"string"==typeof r?n.has(r)||(o.forEach(t=>y(t,r,q,!0)),y(e,r,_,!0),n.add(r)):o.has(r)||(n.forEach(t=>y(r,t,q,!0)),o.add(r))};if(!("__q_context__"in t)){t.__q_context__=0;const r=e.qwikevents;r&&(Array.isArray(r)?w(...r):w("click","input")),e.qwikevents={events:n,roots:o,push:w},y(t,"readystatechange",d),d()}',yt=`const doc = document;
const win = window;
const events = /* @__PURE__ */ new Set();
const roots = /* @__PURE__ */ new Set([doc]);
let hasInitialized;
const nativeQuerySelectorAll = (root, selector) => Array.from(root.querySelectorAll(selector));
const querySelectorAll = (query) => {
  const elements = [];
  roots.forEach((root) => elements.push(...nativeQuerySelectorAll(root, query)));
  return elements;
};
const findShadowRoots = (fragment) => {
  processEventOrNode(fragment);
  nativeQuerySelectorAll(fragment, "[q\\\\:shadowroot]").forEach((parent) => {
    const shadowRoot = parent.shadowRoot;
    shadowRoot && findShadowRoots(shadowRoot);
  });
};
const isPromise = (promise) => promise && typeof promise.then === "function";
const broadcast = (infix, ev, type = ev.type) => {
  querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((el) => {
    dispatch(el, infix, ev, type);
  });
};
const resolveContainer = (containerEl) => {
  if (containerEl._qwikjson_ === void 0) {
    const parentJSON = containerEl === doc.documentElement ? doc.body : containerEl;
    let script = parentJSON.lastElementChild;
    while (script) {
      if (script.tagName === "SCRIPT" && script.getAttribute("type") === "qwik/json") {
        containerEl._qwikjson_ = JSON.parse(
          script.textContent.replace(/\\\\x3C(\\/?script)/gi, "<$1")
        );
        break;
      }
      script = script.previousElementSibling;
    }
  }
};
const createEvent = (eventName, detail) => new CustomEvent(eventName, {
  detail
});
const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
  const attrName = "on" + onPrefix + ":" + eventName;
  if (element.hasAttribute("preventdefault:" + eventName)) {
    ev.preventDefault();
  }
  if (element.hasAttribute("stoppropagation:" + eventName)) {
    ev.stopPropagation();
  }
  const ctx = element._qc_;
  const relevantListeners = ctx && ctx.li.filter((li) => li[0] === attrName);
  if (relevantListeners && relevantListeners.length > 0) {
    for (const listener of relevantListeners) {
      const results = listener[1].getFn([element, ev], () => element.isConnected)(ev, element);
      const cancelBubble = ev.cancelBubble;
      if (isPromise(results)) {
        await results;
      }
      if (cancelBubble) {
        ev.stopPropagation();
      }
    }
    return;
  }
  const attrValue = element.getAttribute(attrName);
  if (attrValue) {
    const container = element.closest("[q\\\\:container]");
    const qBase = container.getAttribute("q:base");
    const qVersion = container.getAttribute("q:version") || "unknown";
    const qManifest = container.getAttribute("q:manifest-hash") || "dev";
    const base = new URL(qBase, doc.baseURI);
    for (const qrl of attrValue.split("\\n")) {
      const url = new URL(qrl, base);
      const href = url.href;
      const symbol = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
      const reqTime = performance.now();
      let handler;
      let importError;
      let error;
      const isSync = qrl.startsWith("#");
      const eventData = {
        qBase,
        qManifest,
        qVersion,
        href,
        symbol,
        element,
        reqTime
      };
      if (isSync) {
        const hash = container.getAttribute("q:instance");
        handler = (doc["qFuncs_" + hash] || [])[Number.parseInt(symbol)];
        if (!handler) {
          importError = "sync";
          error = new Error("sym:" + symbol);
        }
      } else {
        emitEvent("qsymbol", eventData);
        const uri = url.href.split("#")[0];
        try {
          const module = import(
                        uri
          );
          resolveContainer(container);
          handler = (await module)[symbol];
          if (!handler) {
            importError = "no-symbol";
            error = new Error(\`\${symbol} not in \${uri}\`);
          }
        } catch (err) {
          importError || (importError = "async");
          error = err;
        }
      }
      if (!handler) {
        emitEvent("qerror", {
          importError,
          error,
          ...eventData
        });
        console.error(error);
        break;
      }
      const previousCtx = doc.__q_context__;
      if (element.isConnected) {
        try {
          doc.__q_context__ = [element, ev, url];
          const results = handler(ev, element);
          if (isPromise(results)) {
            await results;
          }
        } catch (error2) {
          emitEvent("qerror", { error: error2, ...eventData });
        } finally {
          doc.__q_context__ = previousCtx;
        }
      }
    }
  }
};
const emitEvent = (eventName, detail) => {
  doc.dispatchEvent(createEvent(eventName, detail));
};
const camelToKebab = (str) => str.replace(/([A-Z])/g, (a) => "-" + a.toLowerCase());
const processDocumentEvent = async (ev) => {
  let type = camelToKebab(ev.type);
  let element = ev.target;
  broadcast("-document", ev, type);
  while (element && element.getAttribute) {
    const results = dispatch(element, "", ev, type);
    let cancelBubble = ev.cancelBubble;
    if (isPromise(results)) {
      await results;
    }
    cancelBubble || (cancelBubble = cancelBubble || ev.cancelBubble || element.hasAttribute("stoppropagation:" + ev.type));
    element = ev.bubbles && cancelBubble !== true ? element.parentElement : null;
  }
};
const processWindowEvent = (ev) => {
  broadcast("-window", ev, camelToKebab(ev.type));
};
const processReadyStateChange = () => {
  const readyState = doc.readyState;
  if (!hasInitialized && (readyState == "interactive" || readyState == "complete")) {
    roots.forEach(findShadowRoots);
    hasInitialized = 1;
    emitEvent("qinit");
    const riC = win.requestIdleCallback ?? win.setTimeout;
    riC.bind(win)(() => emitEvent("qidle"));
    if (events.has("qvisible")) {
      const results = querySelectorAll("[on\\\\:qvisible]");
      const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            observer.unobserve(entry.target);
            dispatch(entry.target, "", createEvent("qvisible", entry));
          }
        }
      });
      results.forEach((el) => observer.observe(el));
    }
  }
};
const addEventListener = (el, eventName, handler, capture = false) => {
  el.addEventListener(eventName, handler, { capture, passive: false });
};
const processEventOrNode = (...eventNames) => {
  for (const eventNameOrNode of eventNames) {
    if (typeof eventNameOrNode === "string") {
      if (!events.has(eventNameOrNode)) {
        roots.forEach(
          (root) => addEventListener(root, eventNameOrNode, processDocumentEvent, true)
        );
        addEventListener(win, eventNameOrNode, processWindowEvent, true);
        events.add(eventNameOrNode);
      }
    } else {
      if (!roots.has(eventNameOrNode)) {
        events.forEach(
          (eventName) => addEventListener(eventNameOrNode, eventName, processDocumentEvent, true)
        );
        roots.add(eventNameOrNode);
      }
    }
  }
};
if (!("__q_context__" in doc)) {
  doc.__q_context__ = 0;
  const qwikevents = win.qwikevents;
  if (qwikevents) {
    if (Array.isArray(qwikevents)) {
      processEventOrNode(...qwikevents);
    } else {
      processEventOrNode("click", "input");
    }
  }
  win.qwikevents = {
    events,
    roots,
    push: processEventOrNode
  };
  addEventListener(doc, "readystatechange", processReadyStateChange);
  processReadyStateChange();
}`;function gt(e={}){return e.debug?yt:bt}function K(){if(typeof performance>"u")return()=>0;const e=performance.now();return()=>(performance.now()-e)/1e6}function qt(e){let t=e.base;return typeof e.base=="function"&&(t=e.base(e)),typeof t=="string"?(t.endsWith("/")||(t+="/"),t):"/build/"}var _t="<!DOCTYPE html>";async function wt(e,t){let n=t.stream,s=0,r=0,o=0,i=0,a="",l;const c=t.streaming?.inOrder??{strategy:"auto",maximunInitialChunk:5e4,maximunChunk:3e4},f=t.containerTagName??"html",u=t.containerAttributes??{},b=n,y=K(),d=qt(t),p=ke(t.manifest),g=t.serverData?.nonce;function _(){a&&(b.write(a),a="",s=0,o++,o===1&&(i=y()))}function j(m){const q=m.length;s+=q,r+=q,a+=m}switch(c.strategy){case"disabled":n={write:j};break;case"direct":n=b;break;case"auto":let m=0,q=!1;const ie=c.maximunChunk??0,Y=c.maximunInitialChunk??0;n={write(L){L==="<!--qkssr-f-->"?q||(q=!0):L==="<!--qkssr-pu-->"?m++:L==="<!--qkssr-po-->"?m--:j(L),m===0&&(q||s>=(o===0?Y:ie))&&(q=!1,_())}};break}f==="html"?n.write(_t):n.write("<!--cq-->"),p||console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build."),await We(t,p);const h=p?.manifest.injections,C=h?h.map(m=>v(m.tag,m.attributes??{})):[];let S=t.qwikLoader?typeof t.qwikLoader=="object"?t.qwikLoader.include==="never"?2:0:t.qwikLoader==="inline"?1:t.qwikLoader==="never"?2:0:0;const I=p?.manifest.qwikLoader;if(S===0&&!I&&(S=1),S===0)C.unshift(v("link",{rel:"modulepreload",href:`${d}${I}`,nonce:g}),v("script",{type:"module",async:!0,src:`${d}${I}`,nonce:g}));else if(S===1){const m=gt({debug:t.debug});C.unshift(v("script",{id:"qwikloader",type:"module",async:!0,nonce:g,dangerouslySetInnerHTML:m}))}dt(d,p,t.preloader,C,g);const W=K(),z=[];let O=0,x=0;await je(e,{stream:n,containerTagName:f,containerAttributes:u,serverData:t.serverData,base:d,beforeContent:C,beforeClose:async(m,q,ie,Y)=>{O=W();const L=K();l=await Le(m,q,void 0,Y);const A=[];pt(d,l,t,p,A);const De=JSON.stringify(l.state,void 0,void 0);if(A.push(v("script",{type:"qwik/json",dangerouslySetInnerHTML:$t(De),nonce:g})),l.funcs.length>0){const N=u[ze];A.push(v("script",{"q:func":"qwik/json",dangerouslySetInnerHTML:Et(N,l.funcs),nonce:g}))}const le=Array.from(q.$events$,N=>JSON.stringify(N));if(le.length>0){const N=`(window.qwikevents||(window.qwikevents=[])).push(${le.join(",")})`;A.push(v("script",{dangerouslySetInnerHTML:N,nonce:g}))}return kt(z,m),x=L(),v(V,{children:A})},manifestHash:p?.manifest.manifestHash||"dev"+St()}),f!=="html"&&n.write("<!--/cq-->"),_();const J=l.resources.some(m=>m._cache!==1/0);return{prefetchResources:void 0,snapshotResult:l,flushes:o,manifest:p?.manifest,size:r,isStatic:!J,timing:{render:O,snapshot:x,firstFlush:i}}}function St(){return Math.random().toString(36).slice(2)}function ke(e){const t=e?{...ue,...e}:ue;if(!t||"mapper"in t)return t;if(t.mapping){const n={};return Object.entries(t.mapping).forEach(([s,r])=>{n[U(s)]=[s,r]}),{mapper:n,manifest:t,injections:t.injections||[]}}}var $t=e=>e.replace(/<(\/?script)/gi,"\\x3C$1");function kt(e,t){for(const n of t){const s=n.$componentQrl$?.getSymbol();s&&!e.includes(s)&&e.push(s)}}var Pt='document["qFuncs_HASH"]=';function Et(e,t){return Pt.replace("HASH",e)+`[${t.join(`,
`)}]`}async function tn(e){const t=ge({},ke(e));ve(t)}const Ct=E("qc-s"),xt=E("qc-c"),Pe=E("qc-ic"),Ee=E("qc-h"),Ce=E("qc-l"),Dt=E("qc-n"),jt=E("qc-a"),Lt=E("qc-p"),At=Ie(Ue("s_uaXK9rbkuig")),Nt=()=>{if(!ae("containerAttributes"))throw new Error("PrefetchServiceWorker component must be rendered on the server.");Ne();const t=oe(Pe);if(t.value&&t.value.length>0){const n=t.value.length;let s=null;for(let r=n-1;r>=0;r--)t.value[r].default&&(s=P(t.value[r].default,{children:s},1,"Kt_0"));return P(V,{children:[s,w("script",{"document:onQCInit$":At,"document:onQInit$":Re(()=>{((r,o)=>{if(!r._qcs&&o.scrollRestoration==="manual"){r._qcs=!0;const i=o.state?._qCityScroll;i&&r.scrollTo(i.x,i.y),document.dispatchEvent(new Event("qcinit"))}})(window,history)},'()=>{((w,h)=>{if(!w._qcs&&h.scrollRestoration==="manual"){w._qcs=true;const s=h.state?._qCityScroll;if(s){w.scrollTo(s.x,s.y);}document.dispatchEvent(new Event("qcinit"));}})(window,history);}')},null,null,2,"Kt_1")]},1,"Kt_2")}return Oe},Rt=F(k(Nt,"s_Sb3DZDSaR0w")),It=(e,t)=>new URL(e,t.href),de=(e,t)=>e.origin===t.origin,me=e=>e.endsWith("/")?e:e+"/",Ot=({pathname:e},{pathname:t})=>{const n=Math.abs(e.length-t.length);return n===0?e===t:n===1&&me(e)===me(t)},Bt=(e,t)=>e.search===t.search,G=(e,t)=>Bt(e,t)&&Ot(e,t),Tt=e=>e&&typeof e.then=="function",Mt=(e,t,n,s)=>{const r=xe(),i={head:r,withLocale:a=>ce(s,a),resolveValue:a=>{const l=a.__id;if(a.__brand==="server_loader"&&!(l in e.loaders))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");const c=e.loaders[l];if(Tt(c))throw new Error("Loaders returning a promise can not be resolved for the head function.");return c},...t};for(let a=n.length-1;a>=0;a--){const l=n[a]&&n[a].head;l&&(typeof l=="function"?pe(r,ce(s,()=>l(i))):typeof l=="object"&&pe(r,l))}return i.head},pe=(e,t)=>{typeof t.title=="string"&&(e.title=t.title),M(e.meta,t.meta),M(e.links,t.links),M(e.styles,t.styles),M(e.scripts,t.scripts),Object.assign(e.frontmatter,t.frontmatter)},M=(e,t)=>{if(Array.isArray(t))for(const n of t){if(typeof n.key=="string"){const s=e.findIndex(r=>r.key===n.key);if(s>-1){e[s]=n;continue}}e.push(n)}},xe=()=>({title:"",meta:[],links:[],styles:[],scripts:[],frontmatter:{}}),Qt=()=>oe(Ee),Ut=()=>oe(Ce),Ht=()=>be(ae("qwikcity")),he={},Q={navCount:0},Gt=":root{view-transition-name:none}",Vt=e=>{},Ft=async(e,t)=>{const[n,s,r,o]=ye(),{type:i="link",forceReload:a=e===void 0,replaceState:l=!1,scroll:c=!0}=typeof t=="object"?t:{forceReload:t};Q.navCount++;const f=r.value.dest,u=e===void 0?f:typeof e=="number"?e:It(e,o.url);if(he.$cbs$&&(a||typeof u=="number"||!G(u,f)||!de(u,f))){const b=Q.navCount,y=await Promise.all([...he.$cbs$.values()].map(d=>d(u)));if(b!==Q.navCount||y.some(Boolean)){b===Q.navCount&&i==="popstate"&&history.pushState(null,"",f);return}}if(typeof u!="number"&&de(u,f)&&!(!a&&G(u,f)))return r.value={type:i,dest:u,forceReload:a,replaceState:l,scroll:c},n.value=void 0,o.isNavigating=!0,new Promise(b=>{s.r=b})},Wt=({track:e})=>{const[t,n,s,r,o,i,a,l,c,f,u]=ye();async function b(){const d=e(f),p=e(t),g=He(""),_=u.url,j=p?"form":d.type;d.replaceState;let h,C,S=null;if(h=new URL(d.dest,u.url),S=o.loadedRoute,C=o.response,S){const[I,W,z,O]=S,x=z,J=x[x.length-1];d.dest.search&&G(h,_)&&(h.search=d.dest.search),G(h,_)||(u.prevUrl=_),u.url=h,u.params={...W},f.untrackedValue={type:j,dest:h};const D=Mt(C,u,x,g);n.headings=J.headings,n.menu=O,s.value=be(x),r.links=D.links,r.meta=D.meta,r.styles=D.styles,r.scripts=D.scripts,r.title=D.title,r.frontmatter=D.frontmatter}}return b()},zt=e=>{Be(k(Gt,"s_CA5H3fobOHM"));const t=Ht();if(!t?.params)throw new Error("Missing Qwik City Env Data for help visit https://github.com/QwikDev/qwik/issues/6237");const n=ae("url");if(!n)throw new Error("Missing Qwik URL Env Data");if(t.ev.originalUrl.pathname!==t.ev.url.pathname)throw new Error('enableRequestRewrite is an experimental feature and is not enabled. Please enable the feature flag by adding `experimental: ["enableRequestRewrite"]` to your qwikVite plugin options.');const s=new URL(n),r=B({url:s,params:t.params,isNavigating:!1,prevUrl:void 0},{deep:!1}),o={},i=Te(B(t.response.loaders,{deep:!1})),a=Z({type:"initial",dest:s,forceReload:!1,replaceState:!1,scroll:!0}),l=B(xe),c=B({headings:void 0,menu:void 0}),f=Z(),u=t.response.action,b=u?t.response.loaders[u]:void 0,y=Z(b?{id:u,data:t.response.formData,output:{result:b,status:t.response.status}}:void 0),d=k(Vt,"s_AOLd03z5fNM"),p=k(Ft,"s_fa3uvNmbbZY",[y,o,a,r]);return $(xt,c),$(Pe,f),$(Ee,l),$(Ce,r),$(Dt,p),$(Ct,i),$(jt,y),$(Lt,d),Me(k(Wt,"s_q05XoBoPwdM",[y,c,f,l,t,p,i,o,e,a,r])),P(Qe,null,3,"Kt_3")},Jt=F(k(zt,"s_WO9YzPudymM")),Yt=()=>{const e=Qt(),t=Ut();return P(V,{children:[w("title",null,null,e.title,1,null),w("link",null,{rel:"canonical",href:Ge(n=>n.url.href,[t],"p0.url.href")},null,3,null),w("meta",null,{name:"viewport",content:"width=device-width, initial-scale=1.0"},null,3,null),w("link",null,{rel:"icon",type:"image/svg+xml",href:"/favicon.svg"},null,3,null),e.meta.map(n=>T("meta",{...n},null,0,n.key)),e.links.map(n=>T("link",{...n},null,0,n.key)),e.styles.map(n=>T("style",{...n.props,...n.props?.dangerouslySetInnerHTML?{}:{dangerouslySetInnerHTML:n.style}},null,0,n.key)),e.scripts.map(n=>T("script",{...n.props,...n.props?.dangerouslySetInnerHTML?{}:{dangerouslySetInnerHTML:n.script}},null,0,n.key))]},1,"Mp_0")},Zt=F(k(Yt,"s_eXj9WwIm9DQ")),Kt=()=>P(Jt,{children:[w("head",null,null,[w("meta",null,{charset:"utf-8"},null,3,null),w("link",null,{rel:"manifest",href:"/manifest.json"},null,3,"Ym_0"),P(Zt,null,3,"Ym_1")],1,null),w("body",null,{lang:"en"},P(Rt,null,3,"Ym_2"),1,null)]},1,"Ym_3"),Xt=F(k(Kt,"s_lOVycnpG2qM"));function nn(e){return wt(P(Xt,null,3,"i4_0"),{...e,containerAttributes:{lang:"en-us",...e.containerAttributes},serverData:{...e.serverData}})}export{ue as m,nn as r,tn as s};
