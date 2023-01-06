const mongoose = require("mongoose");

const SalesProduct = mongoose.Schema(

    {
        name  : String,
        quantity: Number,
        pricePerQuantity: Number,
    },
    {
       timestamps : true,
    }
);
module.exports = SalesProduct;