const mongoose = require('mongoose');
const { ATLAS_DB_URL } = require('./server.config');
async function connectToDB() {
  
    const conn = await mongoose.connect(ATLAS_DB_URL);
    return  conn;
  
}
module.exports = {connectToDB};