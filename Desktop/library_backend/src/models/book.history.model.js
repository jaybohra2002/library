const mongoose =require('mongoose');
const bookHistrory=new mongoose.Schema({
    bookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        required: true
      },
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      borrowDate: {
        type: Date,
        required: true
      },
      returnDate: {
        type: Date,
        default: null
      }
    }, { timestamps: true }
);
const BookHistory=new mongoose.model('History',bookHistrory);
module.exports=BookHistory;