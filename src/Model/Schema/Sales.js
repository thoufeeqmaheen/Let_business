const mongoose = require("mongoose");

const sales = mongoose.Schema(
    {
        label: String,
        delete:{ 
            type : Boolean,
            default : false,
        },
        productList:[SalesProduct],
        user:{
            type:mongoose.Types.ObjectId,
            ref:"user",
        },
        shop:{
            type:mongoose.Types.ObjectId,
            ref:"shop",
        },
    
    
        timestamps : true,
    },


);
module.exports = mongoose.model("sales",sales)