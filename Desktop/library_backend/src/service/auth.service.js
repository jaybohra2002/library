const {JWT_SECRET,JWT_EXPIRES_IN}=require('../config/server.config');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const { NotFound, BadRequest } = require('../Errors');
class AuthService{
    constructor(userRepository){
        this.userRepository=userRepository;
    }
    async register(userData){
        console.log(userData);
        const existingUser=await this.userRepository.getUserByEmail(userData.email);
        
        if(existingUser){
            console.log("Here");
            userData.isDeleted=false;
            const userId=existingUser._id;
            
            if((existingUser.isDeleted )){
                userData.password=await bcrypt.hash(userData.password,10);
                const user=await this.userRepository.reactivateUser(userId,userData);
                return user;
            
            }

        }
        
        const hashedPassword=await bcrypt.hash(userData.password,10);
        
        userData.password=hashedPassword;
        
        const data=await this.userRepository.createUser(userData);
        return data;

    }
    async login({email,password}){
        const user=await this.userRepository.getUserByEmail(email);
        
        if(!user || user.isDeleted){
            throw new NotFound('User',email);
        }
        const isMatch = await bcrypt.compare(password, user.password);
        
        if (!isMatch) {
            throw new BadRequest("Login");
        }
        const token = await jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, {
            expiresIn: JWT_EXPIRES_IN,
        });
        
        return { token, userId: user._id };
    }
}
module.exports=AuthService;