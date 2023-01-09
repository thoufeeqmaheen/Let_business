const express= require("express");
const router = express.Router();
const path = require("path");

router.post("/file",(req,res)=>{
   if(!req.files.file){
    return res.send("file not selected");
   }
   req.files.file.mv(path.join(_dirname,"../../Public",req.files.file.name));
    res.send({
        url:`http://localhost:5000/static/$(req.files.file.name)`,

    });

});
module.exports= router();
