const {StatusCodes}=require('http-status-codes');
const {bookHistoryRepository}=require('../repository');
const {BookHistoryService}=require('../service');
const bookHistoryService=new BookHistoryService(bookHistoryRepository);
async function getCurrentBorrowedBooksDataByUser(req,res,next){
    try {
        const userId=req.user.userId;
    const data=await bookHistoryService.getCurrentBorrowedBooksDataByUser(userId);
    return res.status(StatusCodes.OK).json({
        success: true,
        message: 'Successfully fetched all borrowed books',
        error: {},
        data: data
    });
    } catch (error) {
        next(error);

    }

}

async function getAllBookHistory(req,res,next){
    try {
        const data=await bookHistoryService.getAllBookHistory();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully fetched all books history',
            error: {},
            data: data
        });
    } catch (error) {
        next(error);
    }
}
module.exports={
    getCurrentBorrowedBooksDataByUser,
    getAllBookHistory

}