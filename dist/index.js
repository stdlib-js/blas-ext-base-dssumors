"use strict";var o=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var v=o(function(A,q){
var n=6;function R(i,r,a,l){var u,e,t,s;if(u=0,i<=0)return u;if(e=l,a===0)return i*r[e];if(a===1){if(t=i%n,t>0)for(s=0;s<t;s++)u+=r[e],e+=a;if(i<n)return u;for(s=t;s<i;s+=n)u+=r[e]+r[e+1]+r[e+2]+r[e+3]+r[e+4]+r[e+5],e+=n;return u}for(s=0;s<i;s++)u+=r[e],e+=a;return u}q.exports=R
});var c=o(function(B,m){
var _=require('@stdlib/strided-base-stride2offset/dist'),E=v();function M(i,r,a){return E(i,r,a,_(i,a))}m.exports=M
});var y=o(function(C,p){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=c(),b=v();O(d,"ndarray",b);p.exports=d
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),k=require('@stdlib/assert-is-error/dist'),w=y(),f,j=h(g(__dirname,"./native.js"));k(j)?f=w:f=j;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
