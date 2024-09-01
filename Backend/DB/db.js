require('dotenv').config()
const mongoose = require('mongoose');

const connectDB = async () => {
  const MONGO_URL = process.env.DB_URL;

  try {
    await mongoose.connect(MONGO_URL, {
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error", err);
    process.exit(1); 
  }
};

module.exports = connectDB;