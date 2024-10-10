const { InternalServerError, NotFound } = require('../Errors');
const {BookHistory}=require('../models');
class BookHistoryRepository{
    async addBookHistory(historyData){
        try {
            const bookHistory=await new BookHistory(historyData);
            await bookHistory.save();
            return bookHistory; 
        } catch (error) {
            console.error(error);
            throw new InternalServerError(error);
        }
        
    }
    async updateBookHistory(bookId, historyData){
        try {
            const history=await BookHistory.find({bookId});
            if(!history){
                const bookData=await this.addBookHistory(historyData);
                return bookData;
            }
            const bookHistoryData=await BookHistory.findByIdAndUpdate(bookId,historyData);
            return bookHistoryData;

        } catch (error) {
            console.error(error);
            throw new InternalServerError(error);
        }
    }
    async getAllBookHistory(){
        try {
            const data=await BookHistory.find({})
            .populate('bookId','title author publisher')
            .populate('userId','username')
            .exec();
            if(!data){
                throw new NotFound('History',error);
            }
            return data;
        } catch (error) {
            console.error(error);
            throw new InternalServerError(error);
        }
    }
    async getCurrentBorrowedBooksDataByUser(userId){
        try {
            const data=await BookHistory.find({userId,returnDate:null})
            .populate('bookId', 'title author publisher')
            .populate('userId','username')
            .exec();
            if(!data){
                throw new NotFound('History',userId);
            }
            return data;
        } catch (error) {
            console.error(error);
            throw new InternalServerError(error);
        }
    }
    async findBookHistoryByUserId(userId){
        try {
            const data=await BookHistory.find({userId});
            if(!data){
                throw new NotFound('User',userId);
            }
            return data;
        } catch (error) {
            throw new InternalServerError(error);
        }
    }
}
module.exports=new BookHistoryRepository();