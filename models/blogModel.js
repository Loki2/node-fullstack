const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = Schema({
  writter: {
    type: String,
    // required: true
  },
  title: {
      type: String,
      required: true

  },
  subtitle: {
    type:String,
    required: true
  },
  desc: {
      type: String,
      required: true
  },
  category: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Category'
  },
  tag: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  publishDate: {
    type: Date
  },
  privacy: {
    type: Number
  }
}, { timestamps: true })


const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog