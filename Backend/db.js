// db.js

const mongoose = require('mongoose');

const DB_URI = 'mongodb://localhost:27017/jobportal'; // Replace with your MongoDB URI

// Connect to the MongoDB database
const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};
// Log the connection message outside the function
connectToDatabase()
  .then(() => {
    console.log('Connected to MongoDB');
  });

// Export the Mongoose connection and the connect function
module.exports = { mongoose, connectToDatabase };
