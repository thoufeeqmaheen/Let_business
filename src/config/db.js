const mongoose = require("mongoose");
const {CONNECTION_STRING} = require("./env");


const connect = async()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/Let_business")
            console.log("data base connected ")
    } catch(e){
        console.log("bd is not connected")
    };
   
};

module.exports ={
    connect,
}