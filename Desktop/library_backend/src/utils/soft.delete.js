const { METHOD_FAILURE } = require('http-status-codes');
const {User}=require('../models');
async function softDelete(userId){
    try {
        const user=await User.findById(userId);
        if(!user) return false;
        return await User.findByIdAndUpdate(userId, { isDeleted: true });
    } catch (error) {
        console.error(error);
    }
    
}
module.exports=softDelete;