"use strict";var f=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var c=f(function(z,q){
var o=6;function _(i,r,n){var s,a,u,e;if(s=0,i<=0)return s;if(i===1||n===0)return r[0];if(n===1){if(u=i%o,u>0)for(e=0;e<u;e++)s+=r[e];if(i<o)return s;for(e=u;e<i;e+=o)s+=r[e]+r[e+1]+r[e+2]+r[e+3]+r[e+4]+r[e+5];return s}for(n<0?a=(1-i)*n:a=0,e=0;e<i;e++)s+=r[a],a+=n;return s}q.exports=_
});var y=f(function(A,p){
var v=6;function d(i,r,n,s){var a,u,e,t;if(a=0,i<=0)return a;if(i===1||n===0)return r[s];if(u=s,n===1){if(e=i%v,e>0)for(t=0;t<e;t++)a+=r[u],u+=n;if(i<v)return a;for(t=e;t<i;t+=v)a+=r[u]+r[u+1]+r[u+2]+r[u+3]+r[u+4]+r[u+5],u+=v;return a}for(t=0;t<i;t++)a+=r[u],u+=n;return a}p.exports=d
});var M=f(function(B,l){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=c(),O=y();E(j,"ndarray",O);l.exports=j
});var b=require("path").join,g=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),k=M(),m,R=g(b(__dirname,"./native.js"));h(R)?m=k:m=R;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
