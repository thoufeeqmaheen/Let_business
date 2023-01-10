const {hashPassword}= require("../../Utils/Generators/bcrypt");
const User = require("../schema/User");

const getUser= async()=>{
    return User.find({
        deleted:false,
    });
};

const getUserById= (id)=>{
    return User.findById(
        id,
        {
            name:1,
            phone:1,
        });
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
const updateUser =async (id,user)=>{
    await User.findByIdAndUpdate(id,user);
    return getUserById(id);
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