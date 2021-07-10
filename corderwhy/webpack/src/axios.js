import axios from "axios";
axios.get("/wuwei").then(da=>{
    console.log(da);
})
// axios.get("http://127.0.0.1:4444/name").then(da=>{
//     console.log(da);
// })
axios.get("/ss/?id=14").then(da=>{
    console.log(da);
})