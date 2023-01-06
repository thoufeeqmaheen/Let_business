const express =require("express");
const router = express.Router();
const { getShops,
    getShopById,
    createShop,
    updateShop,
    deleteShop,
    addProduct,
    removeProduct,
    getProducts} = require("../../Model/Shop");

router.post("/",async(req,res)=>{
    const result = await createShop(req.body);
    res.send(result)
});

router.get("/:id",async(req,res)=>{
    const result = await getShopById(req.params.id);
    res.send(result)
});
router.put("/:id",async(req,res)=>{
    const result = await updateShop(req.params.id,req.body);
    res.send(result)
});
router.delete("/:id",async(req,res)=>{
    const result = await deleteShop(req.params.id);
    res.send(result)

});

module.exports = router;