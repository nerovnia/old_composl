const mongoose = require('mongoose');
const { Schema } = mongoose;

const MonthSchema = new Schema({
  _id: Schema.Types.Oid,
  name: String
});

module.exports = mongoose.model('Month', MonthSchema);