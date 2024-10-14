const { BadRequest } = require("../Errors");

class BookService{
    constructor(bookRepository,bookHistoryRepository){
        this.bookRepository=bookRepository;
        this.bookHistoryRepository=bookHistoryRepository;
    }
    async getAllBooks(){
        const data=await this.bookRepository.getAllBooks();
        return data;
    }
    async addBook(bookData){
        const data=await this.bookRepository.addBook(bookData);
        return data;
    
    }
    async deleteBook(bookId){
        const data=await this.bookRepository.deleteBook(bookId);
        return data;
    
    }

    async updateBook(bookId, bookData){
        const data = await this.bookRepository.updateBook(bookId, bookData);
        
        return data;
    }
    async borrowBook(userId,bookId){
        const bookData=await this.bookRepository.findBookByBookId(bookId);
        console.log(bookData+" ************ ");
        if(!bookData || bookData.status==='BORROWED'){
            throw new BadRequest('Book is already borrowed');
        }
        const data=await this.bookRepository.borrowUpdate(bookId);
        const borrowData={
            bookId:bookId,
            userId:userId,
            borrowDate:new Date(),
            returnDate:null
        }
        
        await this.bookHistoryRepository.updateBookHistory(bookId,borrowData);
            
        
        
        return data;

        
    }
    async returnBook(userId,bookId){
        const bookData=await this.bookRepository.findBookByBookId(bookId);
        if(!bookData || bookData.status!=='BORROWED'){
            throw new BadRequest('Book is already returned');
        }
        const data=await this.bookRepository.returnUpdate(bookId);
        const borrowData={
            bookId:bookId,
            userId:userId,
            
            returnDate:new Date()
        }
        
        await this.bookHistoryRepository.updateBookHistory(bookId,borrowData);
            
        
        
        return data;

        
    }
    
}
module.exports=BookService;