import axios from "axios";
let url="/api";

axios.get(url+"?id=14").then(da=>{
    console.log(da);
})