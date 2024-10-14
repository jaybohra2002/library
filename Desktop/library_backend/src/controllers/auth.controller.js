const {StatusCodes}=require('http-status-codes');
const {AuthService}=require('../service');
const {userRepository}=require('../repository');
const authService=new AuthService(userRepository);
async function register(req,res,next){
    try {
        const userData=req.body
        const data=await authService.register(userData);
        res.status(StatusCodes.CREATED).json({
            
            success:true,
            message:'User registered successfully',
            error:{},
            data:data,
        })
        
    } catch (error) {
        next(error);
    }
}
async function login(req,res,next){
    try {
        const {email,password}=req.body
        const data=await authService.login({email,password});
        res.status(StatusCodes.OK).json({
            
            success:true,
            message:'User registered successfully',
            error:{},
            data:data,
        })
        
    } catch (error) {
        next(error);
    }
}
module.exports={
    login,
    register
}

