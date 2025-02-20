"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1997],{65369:function(e,t,n){n.d(t,{h:function(){return i}});var r=n(2265),a=n(14096),s=n(20975);function u(e){let{tagName:t,isContentEditable:n}=e.target;return"INPUT"!==t&&"TEXTAREA"!==t&&!0!==n}function i(e={}){let{ref:t,isDisabled:n,isFocusable:i,clickOnEnter:l=!0,clickOnSpace:o=!0,onMouseDown:d,onMouseUp:c,onClick:f,onKeyDown:b,onKeyUp:h,tabIndex:v,onMouseOver:m,onMouseLeave:p,...N}=e,[E,x]=(0,r.useState)(!0),[y,k]=(0,r.useState)(!1),C=function(){let e=(0,r.useRef)(new Map),t=e.current,n=(0,r.useCallback)((t,n,r,a)=>{e.current.set(r,{type:n,el:t,options:a}),t.addEventListener(n,r,a)},[]),a=(0,r.useCallback)((t,n,r,a)=>{t.removeEventListener(n,r,a),e.current.delete(r)},[]);return(0,r.useEffect)(()=>()=>{t.forEach((e,t)=>{a(e.el,e.type,t,e.options)})},[a,t]),{add:n,remove:a}}(),I=E?v:v||0,T=n&&!i,_=(0,r.useCallback)(e=>{if(n){e.stopPropagation(),e.preventDefault();return}e.currentTarget.focus(),null==f||f(e)},[n,f]),g=(0,r.useCallback)(e=>{y&&u(e)&&(e.preventDefault(),e.stopPropagation(),k(!1),C.remove(document,"keyup",g,!1))},[y,C]),O=(0,r.useCallback)(e=>{if(null==b||b(e),n||e.defaultPrevented||e.metaKey||!u(e.nativeEvent)||E)return;let t=l&&"Enter"===e.key;o&&" "===e.key&&(e.preventDefault(),k(!0)),t&&(e.preventDefault(),e.currentTarget.click()),C.add(document,"keyup",g,!1)},[n,E,b,l,o,C,g]),D=(0,r.useCallback)(e=>{null==h||h(e),!n&&!e.defaultPrevented&&!e.metaKey&&u(e.nativeEvent)&&!E&&o&&" "===e.key&&(e.preventDefault(),k(!1),e.currentTarget.click())},[o,E,n,h]),w=(0,r.useCallback)(e=>{0===e.button&&(k(!1),C.remove(document,"mouseup",w,!1))},[C]),S=(0,r.useCallback)(e=>{if(0===e.button){if(n){e.stopPropagation(),e.preventDefault();return}E||k(!0),e.currentTarget.focus({preventScroll:!0}),C.add(document,"mouseup",w,!1),null==d||d(e)}},[n,E,d,C,w]),P=(0,r.useCallback)(e=>{0===e.button&&(E||k(!1),null==c||c(e))},[c,E]),M=(0,r.useCallback)(e=>{if(n){e.preventDefault();return}null==m||m(e)},[n,m]),A=(0,r.useCallback)(e=>{y&&(e.preventDefault(),k(!1)),null==p||p(e)},[y,p]),j=(0,s.lq)(t,e=>{e&&"BUTTON"!==e.tagName&&x(!1)});return E?{...N,ref:j,type:"button","aria-disabled":T?void 0:n,disabled:T,onClick:_,onMouseDown:d,onMouseUp:c,onKeyUp:h,onKeyDown:b,onMouseOver:m,onMouseLeave:p}:{...N,ref:j,role:"button","data-active":(0,a.PB)(y),"aria-disabled":n?"true":void 0,tabIndex:T?void 0:I,onClick:_,onMouseDown:S,onMouseUp:P,onKeyUp:D,onKeyDown:O,onMouseOver:M,onMouseLeave:A}}},63454:function(e,t,n){n.d(t,{n:function(){return N}});var r=n(2265),a=Object.defineProperty,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t,n)=>(s(e,"symbol"!=typeof t?t+"":t,n),n);function i(e){return e.sort((e,t)=>{let n=e.compareDocumentPosition(t);if(n&Node.DOCUMENT_POSITION_FOLLOWING||n&Node.DOCUMENT_POSITION_CONTAINED_BY)return -1;if(n&Node.DOCUMENT_POSITION_PRECEDING||n&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(!(n&Node.DOCUMENT_POSITION_DISCONNECTED)&&!(n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC))return 0;throw Error("Cannot sort the given nodes.")})}var l=e=>"object"==typeof e&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE;function o(e,t,n){let r=e+1;return n&&r>=t&&(r=0),r}function d(e,t,n){let r=e-1;return n&&r<0&&(r=t),r}var c="undefined"!=typeof window?r.useLayoutEffect:r.useEffect,f=e=>e,b=class{constructor(){u(this,"descendants",new Map),u(this,"register",e=>{if(null!=e)return l(e)?this.registerNode(e):t=>{this.registerNode(t,e)}}),u(this,"unregister",e=>{this.descendants.delete(e);let t=i(Array.from(this.descendants.keys()));this.assignIndex(t)}),u(this,"destroy",()=>{this.descendants.clear()}),u(this,"assignIndex",e=>{this.descendants.forEach(t=>{let n=e.indexOf(t.node);t.index=n,t.node.dataset.index=t.index.toString()})}),u(this,"count",()=>this.descendants.size),u(this,"enabledCount",()=>this.enabledValues().length),u(this,"values",()=>Array.from(this.descendants.values()).sort((e,t)=>e.index-t.index)),u(this,"enabledValues",()=>this.values().filter(e=>!e.disabled)),u(this,"item",e=>{if(0!==this.count())return this.values()[e]}),u(this,"enabledItem",e=>{if(0!==this.enabledCount())return this.enabledValues()[e]}),u(this,"first",()=>this.item(0)),u(this,"firstEnabled",()=>this.enabledItem(0)),u(this,"last",()=>this.item(this.descendants.size-1)),u(this,"lastEnabled",()=>{let e=this.enabledValues().length-1;return this.enabledItem(e)}),u(this,"indexOf",e=>{var t,n;return e&&null!=(n=null==(t=this.descendants.get(e))?void 0:t.index)?n:-1}),u(this,"enabledIndexOf",e=>null==e?-1:this.enabledValues().findIndex(t=>t.node.isSameNode(e))),u(this,"next",(e,t=!0)=>{let n=o(e,this.count(),t);return this.item(n)}),u(this,"nextEnabled",(e,t=!0)=>{let n=this.item(e);if(!n)return;let r=o(this.enabledIndexOf(n.node),this.enabledCount(),t);return this.enabledItem(r)}),u(this,"prev",(e,t=!0)=>{let n=d(e,this.count()-1,t);return this.item(n)}),u(this,"prevEnabled",(e,t=!0)=>{let n=this.item(e);if(!n)return;let r=d(this.enabledIndexOf(n.node),this.enabledCount()-1,t);return this.enabledItem(r)}),u(this,"registerNode",(e,t)=>{if(!e||this.descendants.has(e))return;let n=i(Array.from(this.descendants.keys()).concat(e));(null==t?void 0:t.disabled)&&(t.disabled=!!t.disabled);let r={node:e,index:-1,...t};this.descendants.set(e,r),this.assignIndex(n)})}},h=n(37371),v=n(20975),[m,p]=(0,h.k)({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"});function N(){return[f(m),()=>f(p()),()=>(function(){let e=(0,r.useRef)(new b);return c(()=>()=>e.current.destroy()),e.current})(),e=>(function(e){let t=p(),[n,a]=(0,r.useState)(-1),s=(0,r.useRef)(null);c(()=>()=>{s.current&&t.unregister(s.current)},[]),c(()=>{if(!s.current)return;let e=Number(s.current.dataset.index);n==e||Number.isNaN(e)||a(e)});let u=e?f(t.register(e)):f(t.register);return{descendants:t,index:n,enabledIndex:t.enabledIndexOf(s.current),register:(0,v.lq)(u,s)}})(e)]}},89357:function(e,t,n){n.d(t,{k:function(){return r}});function r(e){let{wasSelected:t,enabled:n,isSelected:r,mode:a="unmount"}=e;return!n||!!r||"keepMounted"===a&&!!t}},1219:function(e,t,n){n.d(t,{W:function(){return a}});var r=n(2265);function a(e){return r.Children.toArray(e).filter(e=>(0,r.isValidElement)(e))}},50425:function(e,t,n){n.d(t,{T:function(){return s}});var r=n(2265),a=n(81387);function s(e){let{value:t,defaultValue:n,onChange:s,shouldUpdate:u=(e,t)=>e!==t}=e,i=(0,a.W)(s),l=(0,a.W)(u),[o,d]=(0,r.useState)(n),c=void 0!==t,f=c?t:o,b=(0,a.W)(e=>{let t="function"==typeof e?e(f):e;l(f,t)&&(c||d(t),i(t))},[c,i,f,l]);return[f,b]}},14393:function(e,t,n){n.d(t,{n:function(){return o}});var r=n(25776),a=n(17652),s=n(14096),u=n(62218),i=n(79230),l=n(57437),o=(0,u.G)(function(e,t){let n=(0,a.bt)(e),u=(0,r.s)();return(0,l.jsx)(i.m.div,{...n,width:"100%",ref:t,className:(0,s.cx)("chakra-tabs__tab-panels",e.className),__css:u.tabpanels})});o.displayName="TabPanels"},52407:function(e,t,n){n.d(t,{x:function(){return o}});var r=n(25776),a=n(17652),s=n(14096),u=n(62218),i=n(79230),l=n(57437),o=(0,u.G)(function(e,t){let n=(0,a.WE)({...e,ref:t}),u=(0,r.s)();return(0,l.jsx)(i.m.div,{outline:"0",...n,className:(0,s.cx)("chakra-tabs__tab-panel",e.className),__css:u.tabpanel})});o.displayName="TabPanel"},17652:function(e,t,n){n.d(t,{WE:function(){return I},X:function(){return p},YE:function(){return m},bt:function(){return C},hp:function(){return E},mE:function(){return f},xD:function(){return x}});var r=n(65369),a=n(63454),s=n(37371),u=n(50425),i=n(1219),l=n(20975),o=n(89357),d=n(14096),c=n(2265),[f,b,h,v]=(0,a.n)();function m(e){var t;let{defaultIndex:n,onChange:r,index:a,isManual:s,isLazy:i,lazyBehavior:l="unmount",orientation:o="horizontal",direction:d="ltr",...f}=e,[b,v]=(0,c.useState)(null!=n?n:0),[m,p]=(0,u.T)({defaultValue:null!=n?n:0,value:a,onChange:r});(0,c.useEffect)(()=>{null!=a&&v(a)},[a]);let N=h(),E=(0,c.useId)(),x=null!=(t=e.id)?t:E;return{id:`tabs-${x}`,selectedIndex:m,focusedIndex:b,setSelectedIndex:p,setFocusedIndex:v,isManual:s,isLazy:i,lazyBehavior:l,orientation:o,descendants:N,direction:d,htmlProps:f}}var[p,N]=(0,s.k)({name:"TabsContext",errorMessage:"useTabsContext: `context` is undefined. Seems you forgot to wrap all tabs components within <Tabs />"});function E(e){let{focusedIndex:t,orientation:n,direction:r}=N(),a=b(),s=(0,c.useCallback)(e=>{let s=()=>{var e;let n=a.nextEnabled(t);n&&(null==(e=n.node)||e.focus())},u=()=>{var e;let n=a.prevEnabled(t);n&&(null==(e=n.node)||e.focus())},i="horizontal"===n,l="vertical"===n,o={["ltr"===r?"ArrowLeft":"ArrowRight"]:()=>i&&u(),["ltr"===r?"ArrowRight":"ArrowLeft"]:()=>i&&s(),ArrowDown:()=>l&&s(),ArrowUp:()=>l&&u(),Home:()=>{var e;let t=a.firstEnabled();t&&(null==(e=t.node)||e.focus())},End:()=>{var e;let t=a.lastEnabled();t&&(null==(e=t.node)||e.focus())}}[e.key];o&&(e.preventDefault(),o(e))},[a,t,n,r]);return{...e,role:"tablist","aria-orientation":n,onKeyDown:(0,d.v0)(e.onKeyDown,s)}}function x(e){let{isDisabled:t,isFocusable:n,...a}=e,{setSelectedIndex:s,isManual:u,id:i,setFocusedIndex:o,selectedIndex:c}=N(),{index:f,register:b}=v({disabled:t&&!n}),h=f===c;return{...(0,r.h)({...a,ref:(0,l.lq)(b,e.ref),isDisabled:t,isFocusable:n,onClick:(0,d.v0)(e.onClick,()=>{s(f)})}),id:T(i,f),role:"tab",tabIndex:h?0:-1,type:"button","aria-selected":h,"aria-controls":_(i,f),onFocus:t?void 0:(0,d.v0)(e.onFocus,()=>{o(f);let e=t&&n;u||e||s(f)})}}var[y,k]=(0,s.k)({});function C(e){let{id:t,selectedIndex:n}=N(),r=(0,i.W)(e.children).map((e,r)=>(0,c.createElement)(y,{key:r,value:{isSelected:r===n,id:_(t,r),tabId:T(t,r),selectedIndex:n}},e));return{...e,children:r}}function I(e){let{children:t,...n}=e,{isLazy:r,lazyBehavior:a}=N(),{isSelected:s,id:u,tabId:i}=k(),l=(0,c.useRef)(!1);s&&(l.current=!0);let d=(0,o.k)({wasSelected:l.current,isSelected:s,enabled:r,mode:a});return{tabIndex:0,...n,children:d?t:null,role:"tabpanel","aria-labelledby":i,hidden:!s,id:u}}function T(e,t){return`${e}--tab-${t}`}function _(e,t){return`${e}--tabpanel-${t}`}},79854:function(e,t,n){n.d(t,{O:function(){return o}});var r=n(25776),a=n(17652),s=n(14096),u=n(62218),i=n(79230),l=n(57437),o=(0,u.G)(function(e,t){let n=(0,r.s)(),u=(0,a.xD)({...e,ref:t}),o={outline:"0",display:"flex",alignItems:"center",justifyContent:"center",...n.tab};return(0,l.jsx)(i.m.button,{...u,className:(0,s.cx)("chakra-tabs__tab",e.className),__css:o})});o.displayName="Tab"},67813:function(e,t,n){n.d(t,{t:function(){return o}});var r=n(25776),a=n(17652),s=n(14096),u=n(62218),i=n(79230),l=n(57437),o=(0,u.G)(function(e,t){let n=(0,a.hp)({...e,ref:t}),u={display:"flex",...(0,r.s)().tablist};return(0,l.jsx)(i.m.div,{...n,className:(0,s.cx)("chakra-tabs__tablist",e.className),__css:u})});o.displayName="TabList"},25776:function(e,t,n){n.d(t,{m:function(){return h},s:function(){return b}});var r=n(17652),a=n(37371),s=n(62218),u=n(24403),i=n(83707),l=n(79230),o=n(14096),d=n(2265),c=n(57437),[f,b]=(0,a.k)({name:"TabsStylesContext",errorMessage:"useTabsStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Tabs />\" "}),h=(0,s.G)(function(e,t){let n=(0,u.jC)("Tabs",e),{children:a,className:s,...b}=(0,i.Lr)(e),{htmlProps:h,descendants:v,...m}=(0,r.YE)(b),p=(0,d.useMemo)(()=>m,[m]),{isFitted:N,...E}=h;return(0,c.jsx)(r.mE,{value:v,children:(0,c.jsx)(r.X,{value:p,children:(0,c.jsx)(f,{value:n,children:(0,c.jsx)(l.m.div,{className:(0,o.cx)("chakra-tabs",s),ref:t,...E,__css:n.root,children:a})})})})});h.displayName="Tabs"}}]);