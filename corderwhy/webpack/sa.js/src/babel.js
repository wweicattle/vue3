"use strict";

require("@babel/polyfill");

// a();
var arr = [32, 32, 3, 2, 32323];
// // console.log(...arr);
// console.log(Array.isArray(arr))
// const a = () => {
//   console.log(323)
// }
console.log(Object.assign([], arr));
// var promise = new Promise(val => {
//   setTimeout(() => {
//     val(100)
//   }, 3000);
// })
// promise.then(da => {
//   console.log(da);
// })
// console.log(new Set([32,3,23,,2,3232323]))