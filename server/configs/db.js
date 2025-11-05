require('dotenv').config();
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const connect = async () => {
    const db = await mongoose.connect(process.env.MONGODB_URI)
    console.log(process.env.MONGODB_URI)
    return db;
};

module.exports = connect;