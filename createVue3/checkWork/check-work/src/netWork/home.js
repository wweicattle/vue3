import request from "./axios"
// import qs from 'qs';

// 获取生日回访记录
export function getHomeInfo(obj) {
//   let params = {
//     action: "fans",
//     ctrl: "addfeedback",
//     servername: "svr-saletool133",
//     ...obj,
//     typecode: "SRHF"
//     // pagesize:10,
  
// ?action=loadCheckData&loadDate=2021-01-29
var {loadDate}=obj
  let url = "/api"
  return request.get(url+`?action=loadCheckData&loadDate=${loadDate}`)
}
