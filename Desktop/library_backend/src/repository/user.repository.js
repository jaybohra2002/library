const { InternalServerError, NotFound } = require('../Errors');
const {User}=require('../models');
const softDelete = require('../utils/soft.delete');
class UserRepository{
    //For Librarian
    async getAllUsers(){
        try {
            const users=User.find({});
            return users;
        } catch (error) {
            console.error(error);
            throw new InternalServerError(error);
        }
    }
    //For Librarian to get single user
    async getUserById(userId){
        try {
            const data=await User.findById(userId);
            if(!data){
                throw new NotFound('User', userId);
            }
            return data;
        } catch (error) {
            console.error(error);
            throw new InternalServerError(error);
        }
    }
    async updateUser(userId,userData){
        try {
            const updatedUser = await User.findByIdAndUpdate(userId, userData, { new: true });
            if(!updatedUser){
                throw new NotFound('User',userId);
            }
            return updatedUser;
        } catch (error) {
            console.error(error);
            throw new InternalServerError(error);
        }
    }
    //For Librarian and Member
    async deleteUser(userId){
        try {
            const user=softDelete(userId);
            if(user===false) return new NotFound('User',userId);
            return user;
        } catch (error) {
            console.error(error);
            throw new InternalServerError(error);
        }
    }
    //For Librarian and Member (For registration purpose)
    async createUser(userData){
        try {
            const user=new User(userData);
            return await user.save();
        } catch (error) {
            throw new InternalServerError(error);
        }
    }
    async reactivateUser(userId,userData) {

        return await User.findByIdAndUpdate(userId, userData, { new: true });
    }
    async getUserByEmail(email){
        try {
            const user=await User.findOne({email});
        
            return user;
        } catch (error) {
            throw new InternalServerError(error);
        }
    }

}
module.exports=new UserRepository();