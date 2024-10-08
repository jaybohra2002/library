const express=require('express');
const { PORT } = require('./config/server.config.js');
const { connectToDB } = require('./config/db.config.js');
const errorHandler=require('./utils/error.handler.js');
const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/ping', (req, res) => {
    res.json({ message: "Service is working" });
});
app.use(errorHandler);
app.listen(PORT, async () => {
    console.log(`Server started listening on port ${PORT}`);
    
    
});