// connect.moongose('mongodb://localhost:27017/middleware')
// .then(() => {
//   console.log('connected to mongoDB');
// })
// .catch((err) =>{
//   console.log('error connecting to mongoDB',err);
// })

// src/config/db.js

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected successfully.');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
