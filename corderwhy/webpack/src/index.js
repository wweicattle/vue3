// import asf from "./index.mjs"
import "./createELement.js"

import( /* webpackChunkName: "wukaixiaochen" */ "jquery").then(da => {
  console.log(da);
})

import( /* webpackChunkName: "wukaixiaochen" */ "lodash").then(da => {
  console.log("lodash");
  console.log(da);
})

import "./index.less"
import "./index.scss"
import "./index.tsx"
import sd from "./dd.png"
// console.log(sd);

import "./vue.js"
 

const jiantou = () => {
  console.log("jiantou");
}
console.log(jiantou);
console.log(process.env_NODE_ENV);


if(process.env_NODE_ENV=="development"){
  console.log(2222);
}
console.log();
