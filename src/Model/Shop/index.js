const Product = require("../Schema/Product");
const Shop = require("../Schema/Shop");
const shop = require("../Schema/Shop");

const getShops = (id)=>{
return Shop.find({
    deleted : false,
    user : id 
}).populate("user");
};
const getShopById = (id)=>{
    return Shop.findById(id).populate("user");
};

const createShop = (id)=>{
    return Shop.create(shop);
};
const updateShop = (id)=>{
    return Shop.findById(id,shop)
};

const deleteShop = (id)=>{
    return Shop.findById(id,{deleted : true});
};
const addProduct = (id,products)=>{
    return Shop.findById(id,{
        $push: {products: product},
    });
};
const removeProduct = (id,products)=>{
    return Shop.findById(id,{
        $pull: {products:product}
    });
};
const getProducts = async (id)=>{
    const shop = await Shop.findById(id);
    return shop.products;
    
};

module.exports = {
    getShops,
    getShopById,
    createShop,
    updateShop,
    deleteShop,
    addProduct,
    removeProduct,
    getProducts

};