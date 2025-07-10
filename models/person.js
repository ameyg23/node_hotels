const { uniq } = require('lodash');
const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: {type: String, required: true},
  age: {type: Number, required: true},
  email: {type: String, required: true, unique: true},
  address: {  type: String },
  mobile: { type: String, required: true },
  work: { type: String , enum: ['manager', 'Chef', 'Waiter'],require},
  salary: { type: Number, required: true }})

  const Person = mongoose.model('Person', personSchema);

  module.exports = Person;
    