const {authController}=require('../../controllers');

const express=require('express');
const authRouter=express.Router();
authRouter.post('/login',authController.login);
authRouter.post('/register',authController.register);
module.exports=authRouter;
