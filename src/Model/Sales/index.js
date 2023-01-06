const Sales = require("../Schema/Sales");

const createSale = (data)=>{
    return Sales.create(data);
};

const getSale = ()=>{
    return Sales.find().populate("user", "name phone").populate("shop","name");
};

const getSaleById =()=>{
    return Sales.findById(id)
    .populate("user","name phone")
    .populate("shop","name");
};
module.exports = {
    createSale,
    getSale,
};