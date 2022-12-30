const mongoose = require("mongoose");
const {CONNECTION_STRING} = require("./env");


const connect = async()=>{
    try {
        await mongoose.connect(CONNECTION_STRING)
            console.log("data base connected ")
    } catch(e){
        console.log("bd is not connected")
    };
   
};

module.exports ={
    connect,
}