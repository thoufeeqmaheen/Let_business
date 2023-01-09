const Product = require("../Schema/Product");
const Shop = require("../Schema/Shop");
const shop = require("../Schema/Shop");

const shopFilter = {name : 1,
    phone : 1,
    address : 1

};

const getShopList = ()=>{
    return Shop.find({
        deleted : false,
        user : id 
    },
    shopFilter
    ).populate("user");
    };

const getShops = (id)=>{
return Shop.find({
    deleted : false,
    user : id 
},
shopFilter
).populate("user");
};

const getShopById = (id)=>{
    return Shop.findById(id).populate("user");
};

const createShop = (shop)=>{
    return Shop.create(shop);
};
const updateShop = (id,shop)=>{
    return Shop.findByIdAndUpdate(id,shop)
};

const deleteShop = (id)=>{
    return Shop.findByIdAndUpdate(id,{deleted : true});
};
const addProduct = async(id,product)=>{
    await Shop.findByIdAndUpdate(id,{
        $push: {products: product},
    });
    return getProducts(id);
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
    getProducts,
    getShopList,

};