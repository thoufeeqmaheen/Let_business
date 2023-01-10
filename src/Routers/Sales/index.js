const express = require("express");
const{createSale,getSale,getSaleById} = require("../../Model/Sales");
const router = express.Router();

router.post("/",async (req,res)=>{
    const result = await createSale({
        ...req.body

    });
    res.send(result);
});

router.get("/",async (req,res)=>{
    const result = await getSale();
    const data = result.map((d)=>({
        ...d._doc,
        price:d._doc.productsList.reduce(
        (a,p)=>a+p.quantity*p.pricePerQuantuty,
        0
        ),
    }));
    res.send(data);
});

router.get("/:id",async (req,res)=>{
     const result = await getSaleById(req.params.id);
     const data ={
        ...result._doc,
            price:result.productsList.reduce(
            (a,p)=>a+p.quantity*p.pricePerQuantuty,
            0
            ),
        };
        res.send(data);
    });





module.exports = router;
