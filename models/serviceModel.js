const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = Schema({
  title: {
      type:String,
      maxlength:50,
  },
  desc: {
      type: String,
      required: true
  },
  filePath : {
      type: String,
  },
  thumb: {
      type: String
  }
}, { timestamps: true })


const Service = mongoose.model('Service', serviceSchema);

module.exports = { Service }