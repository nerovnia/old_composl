const mongoose = require('mongoose');
const { Schema } = mongoose;

const CompanySchema = new Schema({
  _id: Schema.Types.Oid,
  name: String,
  or: String,
  edrpou: String,
  iban: String,
  services: Array
});

module.exports = mongoose.model('Company', CompanySchema);