const mongoose = require("mongoose");

const user = mongoose.Schema(
    {
        name : String,
        phone : Number,
        password : String,
        delete:{ 
            type : Boolean,
            default : false,
        },
    },
    {
        timestamps : true
    }
);
module.exports = mongoose.model("user",user)