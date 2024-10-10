class BookHistoryService{
    constructor(bookHistoryRepository){
        this.bookHistoryRepository=bookHistoryRepository;
    }
    //Members
    async getCurrentBorrowedBooksDataByUser(userId){
        const data=await this.bookHistoryRepository.getCurrentBorrowedBooksDataByUser(userId);
        return data;
    }
    //Librarian
    async getAllBookHistory(){
        const data=await this.bookHistoryRepository.getAllBookHistory();
        return data;
    }
}
module.exports=BookHistoryService;