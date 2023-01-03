const mongoose = require("mongoose");

const Product = mongoose.Schema(

    {
        name  : String,
        stock : Number,
    },
    {
       timestamps : true,
    }
);
module.exports = Product;