const mongoose = require('mongoose');
const { Schema } = mongoose;

const AccountingSchema = new Schema({
  _id: Schema.Types.Oid,
  year: String,
  data: Array
});

module.exports = mongoose.model('Accounting', AccountingSchema);