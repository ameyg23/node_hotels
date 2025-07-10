const mongoose = require('mongoose');
require('dotenv').config();
//const mongoURL= process.env.DB_URL_Local || 'mongodb://localhost:27017/mydatabase'; // Default to local MongoDB if not set
const mongoURL = process.env.DB_URL; // Use environment variable or default to local MongoDB
 // Load environment variables from .env file
mongoose.connect(mongoURL,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
})
  .then(() => console.log("Mongoose connected to MongoDB"))
  .catch(err => console.log("Connection error", err));
const db = mongoose.connection;
db.on('connected', () => {
  console.log('Mongoose connected to MongoDB');
});
db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});
db.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

module.exports = db;
