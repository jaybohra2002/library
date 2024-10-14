const express=require('express');
const bookRouter=express.Router();
const {authenticate,authorizeRole}=require('../../utils/auth.middleware');
const {bookController}=require('../../controllers');
//Member
bookRouter.get('/',authenticate,bookController.getAllBooks);
//Librarian
bookRouter.post('/create',authenticate,authorizeRole('LIBRARIAN'),bookController.addBook);
//Librarian
bookRouter.put('/:bookId',authenticate,authorizeRole('LIBRARIAN'),bookController.updateBook);
//Librarian
bookRouter.delete('/:bookId',authenticate,authorizeRole('LIBRARIAN'),bookController.deleteBook);
//Member
bookRouter.put('/borrow/:bookId',authenticate,authorizeRole('MEMBER'),bookController.borrowBook);
//Member
bookRouter.put('/return/:bookId',authenticate,bookController.returnBook);
module.exports=bookRouter;