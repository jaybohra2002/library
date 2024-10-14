const express=require('express');
const {bookHistoryController}=require('../../controllers');
const {authenticate,authorizeRole}=require('../../utils/auth.middleware');
const historyRouter=express.Router();
//Mmeber
historyRouter.get('/borrowed',authenticate,bookHistoryController.getCurrentBorrowedBooksDataByUser);
//Librarian
historyRouter.get('/all',authenticate,authorizeRole('LIBRARIAN'),bookHistoryController.getAllBookHistory);
module.exports=historyRouter;