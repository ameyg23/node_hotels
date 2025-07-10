const mongoose = require('mongoose');
const mongoURL= 'mongodb://localhost:27017/hotels';

mongoose.connect('mongodb://localhost:27017/hotels')
  .then(() => console.log("Mongoose connected to MongoDB"))
  .catch(err => console.log("Connection error", err));
const db = mongoose.connection;
db.on('connected', () => {
  console.log('Mongoose connected to ' + mongoURL);
});
db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});
db.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

module.exports = db;
