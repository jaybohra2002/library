const dotenv = require('dotenv');

dotenv.config();
module.exports={
    PORT:process.env.PORT || 5000,
    ATLAS_DB_URL:process.env.ATLAS_DB_URL,
    SALT_ROUNDS:process.env.SALT_ROUNDS,
    JWT_SECRET:process.env.JWT_SECRET,
    JWT_EXPIRES_IN:process.env.JWT_EXPIRES_IN
}