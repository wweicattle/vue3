import request from "./axios"
// import qs from 'qs';
let nowEnviroment = process.env.NODE_ENV;
let api;
api = nowEnviroment == "development" ? "/api" : "http://tm.lilanz.com/oa/api/checkOutCore.ashx"
// 获取生日回访记录
export function getHomeInfo(obj) {
  var {
    loadDate
  } = obj
  return request.get(api + `?action=loadCheckData&loadDate=${loadDate}`)
}
