const mongoose =require("mongoose");
const shop = mongoose.Schema({
    name : String,
    phone  : String,
    address : String
});

module.exports = mongoose.model("shop",shop)
