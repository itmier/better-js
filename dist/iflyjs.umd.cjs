(function(n,i){typeof exports=="object"&&typeof module<"u"?i(exports):typeof define=="function"&&define.amd?define(["exports"],i):(n=typeof globalThis<"u"?globalThis:n||self,i(n.IFlyJS={}))})(this,function(n){"use strict";const i=o=>Object.prototype.toString.call(o).split(" ")[1].slice(0,-1).toLowerCase(),l=(o,t)=>typeof t=="string"?i(o)===t.toLocaleLowerCase():i(o)===t;function m(){const o=typeof window<"u",t=typeof window.WXEnvironment<"u"&&!!window.WXEnvironment.platform,s=t&&window.WXEnvironment.platform.toLowerCase(),e=o&&window.navigator.userAgent.toLowerCase(),r=e&&/msie|trident/.test(e),c=e&&e.indexOf("msie 9.0")>0,d=e&&e.indexOf("edge/")>0,u=e&&e.indexOf("android")>0||s==="android",p=e&&/iphone|ipad|ipod|ios/.test(e)||s==="ios",f=e&&/chrome\/\d+/.test(e)&&!d,w=e&&/safari/.test(e)&&!f&&!u;return{isWeex:t,isIE:r,isIE9:c,isEdge:d,isAndroid:u,isIOS:p,isChrome:f,isSafari:w}}function a(o){const t=document.querySelectorAll(o);if(t.length!==0)return t.length===1?t[0]:t}function g(o){const t=document.querySelector(o);if(t){const{top:s,left:e}=t.getBoundingClientRect(),r=document.documentElement.scrollLeft,c=document.documentElement.scrollTop;return{x:e+r,y:s+c}}}n.$=a,n.getDomPageXY=g,n.getRuntimeEnv=m,n.getValueType=i,n.isCorrectType=l,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});