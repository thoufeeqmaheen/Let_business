const express = require("express");
const { getUserById } = require("../../Model/Shop");

const router = express.Router();

router.get("/",async(req,res)=>{
    const result = await getUserById(req.user.id);
    res.send(result);
});

router.put("/",validationMiddleware(UseUpdateSchema),async(req,res)=>{
    const result = await updateUser(req.user.id,req.body);
    res.send(result)
});

router.delete("/",async(req,res)=>{
    const result = await deleteUser(req.user.id);
    res.send(result)

});

module.exports = router;
