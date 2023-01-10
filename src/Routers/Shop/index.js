const express =require("express");
const router = express.Router();
const { getShops,
    getShopById,
    createShop,
    updateShop,
    deleteShop,
    getProducts,
    addProduct,
    removeProduct,
    updateProduct,
 } = require("../../Model/Shop");



router.get("/",async(req,res)=>{
    const result = await getShops(req.user.id);
    res.send(result)
});

router.get("/:id",async(req,res)=>{
    const result = await getShopById(req.params.id);
    res.send(result)
});

router.post("/",async(req,res)=>{
    const result = await createShop({
    ...req.body,
    user:req.user.id,
});
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

router.get("/product/:id",async(req,res)=>{
    const result = await getProducts(req.params.id);
    res.send(result)
});

router.post("/product/:id",async(req,res)=>{
    const result = await addProduct(req.params.id,req.body);
    res.send(result)
});

router.put("/product/:id",async(req,res)=>{
    const result = await updateProduct(req.params.id,req.body);
    res.send(result)
});

router.delete("/product/:id",async(req,res)=>{
    const result = await removeProduct(req.params.id,{
        _id:req.body.id,
    });
    res.send(result);
});

module.exports = router;