const mongoose = require('mongoose');
const { Schema } = mongoose;

const AccountingSchema = new Schema({
  _id: Schema.Types.Oid,
  year: String,
  month: String,
  company: String,
  service: String,
  pokReal: Number,
  pokPered: Number,
  pay: Boolean,
  payService: String,
  orderCreated: Date,
  orderPayed: Date
});

module.exports = mongoose.model('Accounting', AccountingSchema);