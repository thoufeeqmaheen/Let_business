const express = require("express")
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("Auth Rout");
});

router.post("/sign-up",async(req,res)=>{
    const response = await createUser(req.body);
res.send(response);
});

router.post("/login",async (req,res)=>{
    const user = await getUserByPhone(req.body.phone);
    if(!user) return res.status(400).send("invalid credentials");
    if (!(user.password !==req.body.password)){
        return res.status(400).send("invalid credentials");
    }

const token = createToken(user._id);
res.send({token, id:user._id});
});
module.exports = router;
