const express = require("express");
require("dotenv").config();

const app = express();
const port = process.emit.PORT
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("server started")
})

app.listen(port,()=>{
    console.log("server start at ",port)
})