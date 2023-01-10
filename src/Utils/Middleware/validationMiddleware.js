const validationMiddleware = Schema=> (req,res,next)=>{
    const {error} = Schema.validate(req.body,{abortEarly:false})
   if (error){
    return res
    .status(400)
    .send(
        error?.map(({message,path})=>({message,path}))
    );
   }
   next();
};
module.exports=validationMiddleware;