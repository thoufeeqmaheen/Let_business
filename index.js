const express = require("express");
const {PORT} = require("./src/config/env");
const {API_ROUTER} = require("./src/config/env");
const ApiRouter = require("./src/Routers");
const db = require("./src/config/db");
const shop = require("./src/Model/Schema/Shop");

const app = express();
db.connect();


app.use(express.json())

app.get("/",(req,res)=>{
    res.send("server started"); 
})



app.post("/test",(req,res)=>{
    shop.create(req.body);
    res.send("route test"); 
})





app.use(API_ROUTER,ApiRouter);

app.listen(PORT,()=>{
    console.log("server start at ", PORT)
})