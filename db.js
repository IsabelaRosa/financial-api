const mongoose = require('mongoose');

const connectDB = async () => { 
  try {
    await mongoose.connect('mongodb://localhost:27017/investments', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Connection error: ', error);
    process.exit(1);
  }
}

module.exports = connectDB;