const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.port || 3000;

app.get("/", (req, res) => {
  res.send("hello world");
});

// common method for all http request
// app.all("/",(req,res)=>{
//   res.send("")
// })

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
