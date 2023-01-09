const express = require("express");
const router = express.Router();


router.use("/auth",authMiddleware, require("./Auth"));
router.use("/shop",authMiddleware,require("./Shop"));
router.use("/user",authMiddleware,require("./User"));
router.use("/sales",authMiddleware,require("./Sales"));
router.use("/util",require("./Util"));


module.exports = router;