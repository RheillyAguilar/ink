var InkAPI=(()=>{var X=Object.create;var b=Object.defineProperty;var Z=Object.getOwnPropertyDescriptor;var ee=Object.getOwnPropertyNames;var te=Object.getPrototypeOf,re=Object.prototype.hasOwnProperty;var l=(r,t)=>()=>(t||r((t={exports:{}}).exports,t),t.exports),ne=(r,t)=>{for(var n in t)b(r,n,{get:t[n],enumerable:!0})},R=(r,t,n,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of ee(t))!re.call(r,i)&&i!==n&&b(r,i,{get:()=>t[i],enumerable:!(s=Z(t,i))||s.enumerable});return r};var W=(r,t,n)=>(n=r!=null?X(te(r)):{},R(t||!r||!r.__esModule?b(n,"default",{value:r,enumerable:!0}):n,r)),se=r=>R(b({},"__esModule",{value:!0}),r);var E=l(T=>{"use strict";Object.defineProperty(T,"__esModule",{value:!0});var k=class extends Error{static for(t,...n){return n.forEach(function(s){t=t.replace("%s",s)}),new this(t)}static forErrorsFound(t){let n=new this("Invalid Parameters");return n.errors=t,n}static require(t,n,...s){if(!t){for(let i of s)n=n.replace("%s",i);throw new this(n)}}constructor(t,n=500){super(),this.errors={},this.start=0,this.end=0,this.message=t,this.name=this.constructor.name,this.code=n}withCode(t){return this.code=t,this}withPosition(t,n){return this.start=t,this.end=n,this}toJSON(){return{error:!0,code:this.code,message:this.message}}};T.default=k});var j=l(w=>{"use strict";Object.defineProperty(w,"__esModule",{value:!0});var v=class{get length(){return this._elements.size}constructor(t=[]){this._elements=new Set,t.forEach(n=>this._elements.add(n))}add(t){this._elements.add(t)}toArray(){return Array.from(this._elements)}toString(){return Array.from(this._elements).filter(Boolean).map(t=>t.toString()).join("")}};w.default=v});var u=l(I=>{"use strict";Object.defineProperty(I,"__esModule",{value:!0});var ae=new Map;I.default=ae});var P=l(O=>{"use strict";Object.defineProperty(O,"__esModule",{value:!0});var D=class{get value(){return this._escape?this._value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):this._value}constructor(t,n=!1){this._escape=n,this._value=t}toString(){return this.value}};O.default=D});var q=l(f=>{"use strict";var ie=f&&f.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(f,"__esModule",{value:!0});var le=ie(j()),ce=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"],M=class{get attributes(){return this._attributes}get children(){return this._children}get name(){return this._name}get props(){return this._props}constructor(t,n={},s="",i=[]){this._attributes={},this._name=t,this._attributes=n,this._props=s,this._children=new le.default(i)}toString(){let t=Object.entries(this._attributes),n=t.length>0?" "+t.map(([i,o])=>{if(typeof o=="string"&&!/["<>\n]/.test(o))return`${i}="${o}"`;if(typeof o=="boolean")return o?i:""}).join(" "):"";if(ce.includes(this._name))return`<${this._name}${n} />`;let s=this._children.toString();return`<${this._name}${n}>${s}</${this._name}>`}};f.default=M});var $=l(h=>{"use strict";var z=h&&h.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(h,"__esModule",{value:!0});var oe=z(P()),J=z(q()),S=class{static render(t){return t.filter(Boolean).map(n=>n.toString()).join("")}static registry(t,n=new Set){return t.forEach(s=>{s instanceof J.default&&(["html","head","body"].includes(s.name)||n.add(s),s.name!=="head"&&s.children.length>0&&this.registry(s.children.toArray(),n))}),n}static createElement(t,n,s,i=[]){return new J.default(t,n,s,i)}static createText(t,n=!0){return new oe.default(t,n)}};h.default=S});var F=l(p=>{"use strict";var C=p&&p.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(p,"__esModule",{value:!0});var ue=C(E()),A=C(u()),L=C($()),B=class{bindings(){let t=L.default.registry(this.template());return`{ ${Array.from(t.values()).map((s,i)=>s.props!=="{ }"?`'${i}': ${s.props}`:"").filter(s=>s!=="").join(", ")} }`}render(t={}){A.default.set("props",t||{}),A.default.set("env",Object.assign(Object.assign({},process.env||{}),{BUILD_ID:this.id(),APP_DATA:btoa(JSON.stringify(Object.assign(Object.assign({},Object.fromEntries(A.default.entries())),{env:Object.assign(Object.assign({},Object.fromEntries(Object.entries(process.env||{}).filter(i=>i[0].startsWith("PUBLIC_")))),{BUILD_ID:this.id()})})))}));let n=this.template(),s=L.default.render(n).trim();if(!s.toLowerCase().startsWith("<html"))throw ue.default.for("Document must start with an <html> tag.");return`<!DOCTYPE html>
${s}`}_toNodeList(t){return typeof t=="object"&&typeof t.nodeType=="number"?[t]:Array.isArray(t)&&t.every(n=>typeof n=="object"&&typeof n.nodeType=="number")?t:[L.default.createText(String(t))]}};p.default=B});var V=l(m=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});m.InkEmitter=void 0;var x=class{emit(t,n){return this}on(t,n){return this}once(t,n){return this}unbind(t,n){return this}};m.InkEmitter=x;var fe=new x;m.default=fe});var U=l(d=>{"use strict";var he=d&&d.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(d,"__esModule",{value:!0});var pe=he(u());function me(r){let t=pe.default.get("env")||{};return r?t[r]||null:t}d.default=me});var Y=l(_=>{"use strict";var de=_&&_.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(_,"__esModule",{value:!0});_.default=ge;var _e=de(u());function ge(){return _e.default.get("props")||{}}});var H=l(a=>{"use strict";var be=a&&a.__createBinding||(Object.create?function(r,t,n,s){s===void 0&&(s=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(r,s,i)}:function(r,t,n,s){s===void 0&&(s=n),r[s]=t[n]}),xe=a&&a.__setModuleDefault||(Object.create?function(r,t){Object.defineProperty(r,"default",{enumerable:!0,value:t})}:function(r,t){r.default=t}),ye=a&&a.__importStar||function(r){if(r&&r.__esModule)return r;var t={};if(r!=null)for(var n in r)n!=="default"&&Object.prototype.hasOwnProperty.call(r,n)&&be(t,r,n);return xe(t,r),t},c=a&&a.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(a,"__esModule",{value:!0});a.InkText=a.InkException=a.InkEmitter=a.InkElement=a.InkRegistry=a.InkDocument=a.InkCollection=a.props=a.emitter=a.env=a.data=void 0;var ke=c(E());a.InkException=ke.default;var Te=c(j());a.InkCollection=Te.default;var Ee=c(F());a.InkDocument=Ee.default;var ve=c($());a.InkRegistry=ve.default;var we=c(q());a.InkElement=we.default;var G=ye(V());a.emitter=G.default;Object.defineProperty(a,"InkEmitter",{enumerable:!0,get:function(){return G.InkEmitter}});var je=c(P());a.InkText=je.default;var Ie=c(u());a.data=Ie.default;var De=c(U());a.env=De.default;var Oe=c(Y());a.props=Oe.default});var Q=l((ze,K)=>{K.exports={...H()}});var Me={};ne(Me,{default:()=>y});var e=W(Q()),g=W(U());var N=function(r,...t){let n=Pe(r);for(let s=0;s<t.length;s++)n=n.replace("%s",String(t[s]));return n},Pe=function(r){return r};var y=class extends e.InkDocument{id(){return"e2ed1d881a734c4684b9"}styles(){return`@ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;`}template(){let t="/ink/panel.html",n=N("Ink UI - Web Components Meets Atomic Styles."),s=N("Ink UI atomically generates CSS styles and provides out of box web components."),i=()=>{document.querySelector("panel-layout").toggle("left")};return[e.InkRegistry.createText(`
`,!1),e.InkRegistry.createElement("html",{},"{ }",[e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("head",{},"{ }",[e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{charset:"utf-8"},"{ 'charset': `utf-8` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"},"{ 'name': `viewport`, 'content': `width=device-width, initial-scale=1` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("title",{},"{ }",[...this._toNodeList(n)]),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"description",content:s},"{ 'name': `description`, 'content': description }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{property:"og:title",content:n},"{ 'property': `og:title`, 'content': title }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{property:"og:description",content:s},"{ 'property': `og:description`, 'content': description }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{property:"og:image",content:"https://stackpress.github.io/ink/ink-logo.png"},"{ 'property': `og:image`, 'content': `https://stackpress.github.io/ink/ink-logo.png` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{property:"og:url",content:`https://stackpress.github.io/ink${t}`},"{ 'property': `og:url`, 'content': `https://stackpress.github.io/ink${url}` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{property:"og:type",content:"website"},"{ 'property': `og:type`, 'content': `website` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:card",content:"summary"},"{ 'name': `twitter:card`, 'content': `summary` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:site",content:"@stackpress"},"{ 'name': `twitter:site`, 'content': `@stackpress` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:title",content:n},"{ 'name': `twitter:title`, 'content': title }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:description",content:s},"{ 'name': `twitter:description`, 'content': description }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:image",content:"https://stackpress.github.io/ink/ink-logo.png"},"{ 'name': `twitter:image`, 'content': `https://stackpress.github.io/ink/ink-logo.png` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"favicon",href:"/ink/favicon.ico"},"{ 'rel': `favicon`, 'href': `/ink/favicon.ico` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"shortcut icon",type:"image/png",href:"/ink/favicon.png"},"{ 'rel': `shortcut icon`, 'type': `image/png`, 'href': `/ink/favicon.png` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"},"{ 'rel': `stylesheet`, 'type': `text/css`, 'href': `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"stylesheet",media:"(prefers-color-scheme:light)",href:"https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/cdn/themes/light.css"},"{ 'rel': `stylesheet`, 'media': `(prefers-color-scheme:light)`, 'href': `https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/cdn/themes/light.css` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"stylesheet",media:"(prefers-color-scheme:dark)",href:"https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/cdn/themes/dark.css"},"{ 'rel': `stylesheet`, 'media': `(prefers-color-scheme:dark)`, 'href': `https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/cdn/themes/dark.css` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"stylesheet",type:"text/css",href:"/ink/styles/global.css"},"{ 'rel': `stylesheet`, 'type': `text/css`, 'href': `/ink/styles/global.css` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"stylesheet",type:"text/css",href:`/ink/build/client/${(0,g.default)("BUILD_ID")}.css`},"{ 'rel': `stylesheet`, 'type': `text/css`, 'href': `/ink/build/client/${env('BUILD_ID')}.css` }"),e.InkRegistry.createText(`
  
  `,!1),e.InkRegistry.createElement("script",{"data-app":(0,g.default)("APP_DATA"),src:`/ink/build/client/${(0,g.default)("BUILD_ID")}.js`},"{ 'data-app': env('APP_DATA'), 'src': `/ink/build/client/${env('BUILD_ID')}.js` }"),e.InkRegistry.createText(`
  `,!1),...(0,g.default)("NODE_ENV")==="development"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("script",{src:"/dev.js"},"{ 'src': `/dev.js` }"),e.InkRegistry.createText(`
  `,!1)]:[],e.InkRegistry.createText(`
`,!1)]),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("body",{class:"light sl-theme-dark bg-t-0 tx-t-1 tx-arial"},"{ 'class': `light sl-theme-dark bg-t-0 tx-t-1 tx-arial` }",[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("panel-layout",{},"{ }",[e.InkRegistry.createText(`
      `,!1),e.InkRegistry.createElement("header",{},"{ }",[e.InkRegistry.createElement("menu",{class:"flex flex-center-y px-20 py-15 m-0 bg-t-1"},"{ 'class': `flex flex-center-y px-20 py-15 m-0 bg-t-1` }",[e.InkRegistry.createText(`
  `,!1),...t!=="/ink/index.html"&&t!=="/ink/500.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("i",{class:"fas fa-fw fa-bars cursor-pointer py-5 pr-10 none md-inline-block tx-t-1",click:i},"{ 'class': `fas fa-fw fa-bars cursor-pointer py-5 pr-10 none md-inline-block tx-t-1`, 'click': toggle }",[]),e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("div",{class:"flex-grow"},"{ 'class': `flex-grow` }",[]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{href:"/ink"},"{ 'href': `/ink` }",[e.InkRegistry.createText(`
      `,!1),e.InkRegistry.createElement("img",{alt:"Ink Logo",class:"h-26 mr-10",src:"/ink/ink-icon.png"},"{ 'alt': `Ink Logo`, 'class': `h-26 mr-10`, 'src': `/ink/ink-icon.png` }"),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("nav",{class:"flex flex-center-y"},"{ 'class': `flex flex-center-y` }",[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"tx-primary",href:"/ink/docs/index.html"},"{ 'class': `tx-primary`, 'href': `/ink/docs/index.html` }",[e.InkRegistry.createText("Docs",!1)]),e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"tx-t-1 tx-5xl ml-10",href:"https://github.com/stackpress/ink",target:"_blank"},"{ 'class': `tx-t-1 tx-5xl ml-10`, 'href': `https://github.com/stackpress/ink`, 'target': `_blank` }",[e.InkRegistry.createText(`
      `,!1),e.InkRegistry.createElement("i",{class:"fab fa-github"},"{ 'class': `fab fa-github` }",[]),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"bg-h-cb3837 pill tx-t-1 tx-lg ml-5 p-5 tx-center",href:"https://www.npmjs.com/package/@stackpress/ink",target:"_blank"},"{ 'class': `bg-h-cb3837 pill tx-t-1 tx-lg ml-5 p-5 tx-center`, 'href': `https://www.npmjs.com/package/@stackpress/ink`, 'target': `_blank` }",[e.InkRegistry.createText(`
      `,!1),e.InkRegistry.createElement("i",{class:"fab fa-npm tx-white"},"{ 'class': `fab fa-npm tx-white` }",[]),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
`,!1)])]),e.InkRegistry.createText(`
      `,!1),e.InkRegistry.createElement("main",{class:"p-20"},"{ 'class': `p-20` }",[e.InkRegistry.createText(`
        `,!1),e.InkRegistry.createElement("h1",{},"{ }",[e.InkRegistry.createText("Sandbox",!1)]),e.InkRegistry.createText(`
        `,!1),e.InkRegistry.createElement("field-input",{name:"first",placeholder:"Enter your first name",error:!0},"{ 'name': `first`, 'placeholder': `Enter your first name`, 'error': true }"),e.InkRegistry.createText(`
      `,!1)]),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
`,!1)])]}};return se(Me);})();
