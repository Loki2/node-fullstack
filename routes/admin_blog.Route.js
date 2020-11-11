const express = require('express');
const router = express.Router();


//import From Controller
const BlogController = require('../controller/AdminBlogController');
router.route('/')
      .get(BlogController.getAllBlog);
router.route('/create')
      .get(BlogController.createBlog);
router.route('/')
      .post(BlogController.createBlog);

module.exports = router;