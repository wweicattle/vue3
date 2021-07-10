let express = require("express")

let app = express();

app.get("/name", (req, res) => {
  // res.header("Access-Control-Allow-Origin", req.headers.origin);
  // // res.header("Access-Control-Allow-Origin", '*');
  // res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  // res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.send({
    name: 323,
    sasd: 323
  })
})

app.listen(4444, () => {
  console.log("serve begin");
})
