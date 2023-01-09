const {getUserByPhone} = require("../..)/Model/User");
  const phoneExists = async(req,res,next)=>{
    const user=await getUserByPhone(req.body.phone);
    if(user)
    return res.status(400).send([
        {
            message:"user already exists",
            path:"phone",

        },
    ]);
next();
  };
   

  
  module.exports={
    phoneExists,

  }