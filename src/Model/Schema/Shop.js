const mongoose =require("mongoose");
const Product = require("./Product");
const shop = mongoose.Schema({
    name : String,
    phone  : String,
    address : String,
    delete:{ 
        type : Boolean,
        default : false,
    },
    user :{
          type : mongoose.Types.ObjectId,
          ref : "user",
    },
    products : [Product],
});

module.exports = mongoose.model("shop",shop)
