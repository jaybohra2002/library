const {StatusCodes}=require('http-status-codes');
const {bookRepository,bookHistoryRepository}=require('../repository');
const {BookService}=require('../service');
const bookService=new BookService(bookRepository,bookHistoryRepository);
//Member and Librarian
async function getAllBooks(req,res,next){
    try {
        const data=await bookService.getAllBooks();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully fetched all books',
            error: {},
            data: data
        });
    } catch (error) {
        next(error);
    }
}
//Librarian
async function addBook(req,res,next){
    try {
        const bookData=req.body;
        const data=await bookService(bookData);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'Successfully Added book',
            error: {},
            data: data
        });

    } catch (error) {
        next (error);
    }
}
//Librarian

async function deleteBook(req,res,next){
    try {
        const bookId=req.params.bookId;
        const data=await bookService(bookId);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully Deleted book',
            error: {},
            data: data
        });
    } catch (error) {
        next(error);
    }
    

}
//Librarian
async function updateBook(req,res,next){
    try {
        const bookId=req.params.bookId;
        const bookData=req.body;
        const data=bookService.updateBook(bookId,bookData);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully Updated book',
            error: {},
            data: data
        });

    } catch (error) {
        next(error);
    }
}
//Member
async function borrowBook(req,res,next){
    try {
        const userId=req.user.userId;
        const bookId=req.params.bookId;
        const data=await bookService.borrowBook(userId,bookId);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully borrowed book',
            error: {},
            data: data
        });
    } catch (error) {
        next(error);
    }
}
//Member
async function returnBook(req,res,next){
    try {
        const userId=req.user.userId;
        const bookId=req.params.bookId;
        const data=await bookService.returnBook(userId,bookId);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully returned book',
            error: {},
            data: data
        });
    } catch (error) {
        next(error);
    }
}

module.exports={
    getAllBooks,
    addBook,
    deleteBook,
    updateBook,
    borrowBook,
    returnBook

}
