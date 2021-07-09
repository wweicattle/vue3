
import "./createELement.js"
if (module.hot) {
  module.hot.accept("./createELement.js", () => {
    console.log("alredy update！");
  })
}
// import  "jquery"
// import "lodash"
console.log(434);
// import( /* webpackChunkName: "wukaixiaochen" */ "jquery").then(da => {
//   console.log(da);
// })

// import( /* webpackChunkName: "wukaixiaochen" */ "lodash").then(da => {
//   console.log("lodash");
//   console.log(da);
// })

import "./index.less"
import "./index.scss"
import "./index.tsx"
import sd from "./dd.png"
import  "./axios.js"
// console.log(sd);

import "./vue.js"


const jiantou = () => {
  console.log("eee");
}
console.log(jiantou);
// if(process.env_NODE_ENV=="development"){
//   console.log(323233333333);
// }
