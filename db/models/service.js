const mongoose = require('mongoose');
const { Schema } = mongoose;

const ServiceSchema = new Schema({
  _id: Schema.Types.Oid,
  name: String
});

module.exports = mongoose.model('Service', ServiceSchema);