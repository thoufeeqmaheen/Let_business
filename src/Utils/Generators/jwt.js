const jwt = require ("jsonwebtoken");
 const{JWT_SECRET} = require("../../Config/env");

 const createToken = (id) => {
   const token = jwt.sign({id,},JWT_SECRET);
   return token;
};

const verifyToken =(token) => {
    const decoded = jwt.verify(token,JWT_SECRET);
    return decoded;

};

module.exports = {
    createToken,
    verifyToken,
};

