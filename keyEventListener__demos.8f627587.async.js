"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[4334],{41621:function(C,d,e){e.r(d);var t=e(75271),l=e(27382),v=e(52676);d.default=function(){return(0,v.jsx)(l.Z,{onKeyDown:function(E){console.log("onkeyDown",E)},children:(0,v.jsx)("div",{children:"\u5C1D\u8BD5\u6309\u4E0B\u4EFB\u610F\u952E\u76D8\uFF0C\u770B\u770B\u63A7\u5236\u53F0\u6253\u5370\u7ED3\u679C"})})}},60966:function(C,d,e){e.r(d);var t=e(75271),l=e(27382),v=e(52676),f=l.Z.KeyCombiner;d.default=function(){return(0,v.jsx)(f,{onTrigger:function(m){m.preventDefault(),console.log("command+shift+f action")},keyMap:{70:!0,91:!0,16:!0},children:(0,v.jsx)("div",{children:"\u5C1D\u8BD5\u6309\u4E0B command+shift+f \u770B\u770B\u63A7\u5236\u53F0\u662F\u5426\u76D1\u542C\u4E86\u952E\u76D8\u4E8B\u4EF6"})})}},27382:function(C,d,e){e.d(d,{Z:function(){return k}});var t=e(75271),l=e(82092),v=e.n(l),f=e(48305),E=e.n(f),m=e(52676),A=function(y){var o=y.onTrigger,n=y.keyMap,s=y.children,K=(0,t.useState)({}),D=E()(K,2),c=D[0],a=D[1],i=(0,t.useRef)(c);(0,t.useEffect)(function(){var r=function(L){return R(L)};return h(r),function(){T(r)}},[]),(0,t.useEffect)(function(){i.current=c},[c]);var h=function(u){addEventListener("keydown",u,!1),addEventListener("keyup",u,!1)},T=function(u){removeEventListener("keydown",u,!1),removeEventListener("keyup",u,!1),a({})},R=(0,t.useCallback)(function(r){var u=r.keyCode||r.code,L=r.type==="keydown";if(!L){a({});return}if((n==null?void 0:n[u])===!0){var M=Object.assign(i.current,v()({},u,L));a(M);var P=!0;for(var j in n)if(!M[j]){P=!1;break}P&&(o==null||o(r))}},[o,n]);return(0,m.jsx)("span",{children:s})},O=function(o){var n=o.onKeyDown,s=o.onKeyUp,K=o.children;(0,t.useEffect)(function(){return D(),function(){c()}},[]);var D=function(){addEventListener("keydown",a,!1),addEventListener("keyup",a,!1)},c=function(){removeEventListener("keydown",a,!1),removeEventListener("keyup",a,!1)},a=(0,t.useCallback)(function(i){var h=i.type==="keydown";h?n==null||n(i):s==null||s(i)},[n,s]);return K},B=O;B.KeyCombiner=A;var k=B}}]);
