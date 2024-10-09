const bookRepository = require("./book.repository");
const userRepository = require("./user.repository");
const bookHistoryRepository=require('./book.history.repository')

module.exports={
    userRepository,
    bookRepository,
    bookHistoryRepository
}