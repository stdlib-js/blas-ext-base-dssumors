// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(e){"use strict";var r,t="function"==typeof Object.defineProperty?Object.defineProperty:null,o=Object.defineProperty,n=Object.prototype,i=n.toString,u=n.__defineGetter__,a=n.__defineSetter__,f=n.__lookupGetter__,l=n.__lookupSetter__;function c(e,r,t){var o,n,i,u;if(o=0,e<=0)return o;if(1===e||0===t)return r[0];if(1===t){if((i=e%6)>0)for(u=0;u<i;u++)o+=r[u];if(e<6)return o;for(u=i;u<e;u+=6)o+=r[u]+r[u+1]+r[u+2]+r[u+3]+r[u+4]+r[u+5];return o}for(n=t<0?(1-e)*t:0,u=0;u<e;u++)o+=r[n],n+=t;return o}function _(e,r,t,o){var n,i,u,a;if(n=0,e<=0)return n;if(1===e||0===t)return r[o];if(i=o,1===t){if((u=e%6)>0)for(a=0;a<u;a++)n+=r[i],i+=t;if(e<6)return n;for(a=u;a<e;a+=6)n+=r[i]+r[i+1]+r[i+2]+r[i+3]+r[i+4]+r[i+5],i+=6;return n}for(a=0;a<e;a++)n+=r[i],i+=t;return n}r=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?o:function(e,r,t){var o,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(f.call(e,r)||l.call(e,r)?(o=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=o):e[r]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&u&&u.call(e,r,t.get),p&&a&&a.call(e,r,t.set),e},r(c,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:_}),e.default=c,e.ndarray=_,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).dssumors={});
//# sourceMappingURL=browser.js.map
