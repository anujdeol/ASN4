const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const invoiceSchema = new Schema({
  invoiceID: String,
  branch: String,
  city: String,
  customerType: String,
  productLine: String,
  name: String,
  image: String,
  unitPrice: Number,
  quantity: Number,
  tax5Percent: Number,
  total: Number,
  date: String, // Consider using Date type for dates
  time: String,
  payment: String,
  cogs: Number,
  grossIncome: Number,
  rating: Number,
});

//creating collection and its schma
module.exports = mongoose.model('Invoices', invoiceSchema);
