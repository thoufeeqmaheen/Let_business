const express= require("express");
const path = require("path");
const {getShopList}=require("../../Model/shop");
const router = express.Router();

router.post("/file",(req,res)=>{
   if(!req.files.file){
    return res.send("file not selected");
   }
   req.files.file.mv(path.join(_dirname,"../../Public",req.files.file.name));
    res.send({
        url:`http://localhost:5000/static/$(req.files.file.name)`,

    });
});

router.get("/shop-list",async (req,res)=>{
   const result= await getShopList();
   res.send(result);
 } );
module.exports= router();
