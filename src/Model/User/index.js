const User = require("../schema/shop");

const getUser= async()=>{
    return User.find({
        deleted:false,
    });
};

const getUserById= (id)=>{
    return User.findById(id);
};
const getUserByPhone= (phone)=>{
    return User.findOne({phone});
};
const createUser =async (user)=>{
    return User.create({
        ...user,
        password: await hashPassword(user.password),
    });
};
const updateUser =(id,user)=>{
    return User.findByIdAndUpdate(id,user);
};
const deleteUser =(id)=>{
    return User.findByIdAndUpdate(id, {
        deleted: true,
    });
};
module.exports={
    getUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getUserByPhone
};