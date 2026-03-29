"use strict";var s=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var t=s(function(g,n){
var i=require('@stdlib/math-base-special-deg2radf/dist'),v=require('@stdlib/math-base-special-kernel-sinf/dist'),u=require('@stdlib/math-base-special-kernel-cosf/dist'),q=require('@stdlib/math-base-special-fmodf/dist'),D=require('@stdlib/math-base-special-absf/dist'),e=require('@stdlib/number-float64-base-to-float32/dist'),E=require('@stdlib/math-base-assert-is-nanf/dist'),G=require('@stdlib/math-base-assert-is-infinitef/dist'),_=e(45),o=e(90),c=e(135),d=e(180),k=e(225),l=e(270),m=e(315),f=e(360);function p(a){var r;return a=e(a),G(a)||E(a)?NaN:(r=D(q(a,f)),r<=_?u(i(r)):r<c?v(i(e(o-r))):r<=k?-u(i(e(d-r))):r<m?v(i(e(r-l))):u(i(e(f-r))))}n.exports=p
});var N=t();module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
