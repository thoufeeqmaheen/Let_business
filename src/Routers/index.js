const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
   res.send("API router");
});
router.use("/shop",require("./Shop"))

module.exports = router;