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
        type:String,
        enum:['BORROWED','AVAILABLE'],
        default:'AVAILABLE',
        required:true
    }},
    { timestamps: true },
);
const Book=mongoose.model('Book',bookSchema);
module.exports=Book;