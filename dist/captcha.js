parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"8sSU":[function(require,module,exports) {
function t(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ABCDEFGHIKLMNOPQRSTVXYZ123456789",n="",r=0;r<t;r++)n+=o.charAt(Math.random()*o.length|0);return n}function o(t){var o=Math.floor(256*Math.random()),n=Math.floor(256*Math.random()),r=Math.floor(256*Math.random());return t||"rgb(".concat(o,",").concat(n,",").concat(r,")")}function n(t,n,r,a,e){for(var h=0;h<n.length;h++){var c=n.charAt(h);t.fillStyle=o(r),t.fillText(c,a,e),a+=t.measureText(c).width}}function r(o){var r=o.nbChars,a=o.charPool,e=o.charsColor,h=void 0===e?"":e,c=o.cnvsWidth,i=void 0===c?130:c,d=o.cnvsHeight,l=void 0===d?30:d,v=o.textFont,f=void 0===v?"18px Arial":v,s=o.textPosX,u=void 0===s?30:s,g=o.textPosY,m=void 0===g?30:g,x=t(r,a),M=document.createElement("canvas"),A=M.getContext("2d");return M.width=i,M.height=l,A.font=f,n(A,x,h,u,m),{canvas:M,rndStr:x}}module.exports=r;
},{}]},{},["8sSU"], null)
//# sourceMappingURL=/captcha.js.map