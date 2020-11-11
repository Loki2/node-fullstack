const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const typesSchema = Schema({
  title: {
      type:String,
      maxlength:50,
  },
  desc: {
      type: String,
      required: true
  }
}, { timestamps: true })


const Types = mongoose.model('Types', typesSchema);

module.exports = Types