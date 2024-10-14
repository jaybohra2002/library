const express = require('express');
const {userController}=require('../../controllers');
const {authenticate,authorizeRole}=require('../../utils/auth.middleware');
const userRouter = express.Router();
//Librarian
userRouter.get('/',authenticate,authorizeRole('LIBRARIAN'),userController.getAllUsers);
//Librarian
userRouter.get('/getuser',authenticate,authorizeRole('LIBRARIAN'),userController.getUserById);
//Librarian
userRouter.put('/update',authenticate,authorizeRole('LIBRARIAN'),userController.updateUser);
//Librarian and Member
userRouter.delete('/delete',authenticate,authorizeRole('LIBRARIAN','MEMBER'),userController.deleteUser);
//Librarian
userRouter.post('/create',authenticate,authorizeRole('LIBRARIAN'),userController.createUser);
module.exports=userRouter;