const { InternalServerError, NotFound } = require('../Errors');
const {Book}=require('../models');
class BookRepository{
    //Librarian 
    async addBook(bookData){
        try {
            const book = new Book(bookData);
            await book.save();
            return book;
        } catch (error) {
            console.error(error);
            throw new InternalServerError(error);
        }
        



    }
    // Members
    async getAllBooks(){
        try {
            const books=await Book.find({});
            return books;
        } catch (error) {
            console.error(error);
            throw new InternalServerError(error);
        }
    }
    //Librarian
    async updateBook(bookId,bookData){
        try {

            const book=await Book.findByIdAndUpdate(bookId,bookData,{new:true});
            if(!book){
                throw new NotFound('Book',bookId);
            }
            return book;
        } catch (error) {
            console.error(error);
            throw new InternalServerError(error);
        }
    }
    //Librarian
    async deleteBook(bookId){
        try {
            const book=await Book.findByIdAndDelete(bookId);
            if(!book){
                throw new NotFound('Book', bookId);
            }
            return book;
        } catch (error) {
            console.error(error);
            throw new InternalServerError(error);
        }
    }
    // method for checking the status of book
    async findBookByBookId(bookId){
        try {
            const data=await Book.find({bookId});
            return data;
        } catch (error) {
            console.error(error);
            throw new InternalServerError(error);
        }
        
    }

}
module.exports=new BookRepository();