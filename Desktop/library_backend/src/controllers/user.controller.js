const {userRepository}=require('../repository');
const {UserService}=require('../service');
const { StatusCodes } = require('http-status-codes');
const userService=new UserService(userRepository);
//Librarian
async function getUserById(req,res,next){
    try {
        const userId = req.user.userId;
        const data=await userService.getUserById(userId);
        return res.status(StatusCodes.OK).json({
        success: true,
        message: 'Successfully fetched user',
        error: {},
        data: data
    }); 
    } catch (error) {
        next(error);
    }
    
}
//Librarian
async function getAllUsers(req,res,next){
    try {
        const data=await userService.getAllUsers();
        return res.status(StatusCodes.OK).json({
            success: true,
        message: 'Successfully fetched all users',
        error: {},
        data: data
        })
    } catch (error) {
        next (error);
    }

}
//Librarian
async function updateUser(req,res,next){
    try {
        const data=req.body;
        const userId=req.body.userId;
        const updatedUserData=await userService.updateUser(userId,data);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully Updated user',
            error: {},
            data: updatedUserData
        });
    } catch (error) {
        next (error);
    }

}
//Librarian and Member


async function deleteUser(req,res,next){
    try {
        const userId=req.body.userId;
        const data=await userService.deleteUser(userId);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully Deleted user',
            error: {},
            data: data
        });
        
    } catch (error) {
        next(error);
    }
}
//Librarian 
async function createUser(req,res,next){
    try {
        const userData=req.body;
        const data=await userService.createUser(userData);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'Successfully Created user',
            error: {},
            data: data
        });
    } catch (error) {
        next(error);
    }
}
module.exports={
    getUserById,
    getAllUsers,
    updateUser,
    deleteUser,
    createUser


};