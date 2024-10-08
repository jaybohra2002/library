const mongoose =require('mongoose');
const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true

    },
    publisher:{
        type:String,
        required:true
    },
    status:{
        enum:['BORROWED','AVAILABLE'],
        default:'AVAILABLE',
        required:true
    },
    { timestamps: true }
);
const Book=mongoose.model('Books',bookSchema);
module.exports=Book;