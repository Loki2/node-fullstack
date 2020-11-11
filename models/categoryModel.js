const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoriesSchema = Schema({
  title: {
      type:String,
      maxlength:50,
  },
  desc: {
      type: String,
      required: true
  }
}, { timestamps: true })


const Categories = mongoose.model('Categories', categoriesSchema);

module.exports = Categories

