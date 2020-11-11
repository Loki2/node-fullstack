const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tagsSchema = Schema({
  title: {
      type:String,
      maxlength:50,
  },
  desc: {
      type: String,
      required: true
  }
}, { timestamps: true })


const Tags = mongoose.model('Tags', tagsSchema);

module.exports = Tags