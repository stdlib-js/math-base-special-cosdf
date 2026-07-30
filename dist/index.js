"use strict";var q=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(s){throw (r=0, s)}};};var t=q(function(C,n){
var i=require('@stdlib/math-base-special-deg2radf/dist'),v=require('@stdlib/math-base-special-kernel-sinf/dist'),u=require('@stdlib/math-base-special-kernel-cosf/dist'),D=require('@stdlib/math-base-special-fmodf/dist'),E=require('@stdlib/math-base-special-absf/dist'),e=require('@stdlib/number-float64-base-to-float32/dist'),G=require('@stdlib/math-base-assert-is-nanf/dist'),_=require('@stdlib/math-base-assert-is-infinitef/dist'),o=e(45),c=e(90),d=e(135),k=e(180),l=e(225),m=e(270),p=e(315),f=e(360);function N(a){var r;return a=e(a),_(a)||G(a)?NaN:(r=E(D(a,f)),r<=o?u(i(r)):r<d?v(i(e(c-r))):r<=l?-u(i(e(k-r))):r<p?v(i(e(r-m))):u(i(e(f-r))))}n.exports=N
});var b=t();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
