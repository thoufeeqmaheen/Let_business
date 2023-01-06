const{verifyToken}= require("../Generators/jwt");
const authMiddleware = (req,res,next) =>{
    if(!req.headers.authorization)
    return res.status(400).send("Permission Denied");
try{
    const decoded = verifyToken(req.headers.authorization.split(" ")[1]);
    req.user = decoded;
    return next();
}
catch (e){
    return res.status(400).send ("Permission Denied");   
    }
};
module.exports = authMiddleware;