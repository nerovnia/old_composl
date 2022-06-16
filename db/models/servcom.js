const mongoose = require('mongoose');
const { Schema } = mongoose;

const ServComSchema = new Schema({
  _id: Schema.Types.Oid,
  name: String
});

module.exports = mongoose.model('ServCom', ServComSchema);