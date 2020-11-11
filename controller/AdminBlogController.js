//Import From Model/blogModel
const Blog = require('../models/blogModel');
const Category = require('../models/typeModel');
// const Tag = require('../models/tagModel');
module.exports = {
  getBlogs: async (req, res, next) => {
    try {
     const blogs = await Blog.find();
    //  const categories = await Category.find();
      res.render('admin/blog/Blogs', {
        title: 'Blog Operation',
        // categories: categories,
        blogs: blogs,
      })
    } catch (error) {
      res.redirect("/admin/blogs")
    }
    next();
  },
  
  createBlog: async (req, res, next) => {
    let imageFile = typeof req.files.image !== "undefind" ? req.files.image.name: "";
    let { writter, title, subtitle, desc, category, tag, image, publishDate, privacy } = req.body;
    const blogs = new Blog({
      writter,
      title,
      subtitle,
      desc,
      category,
      tag,
      image,
      publishDate,
      privacy
    })
    // console.log(blogs)
    try {
      const newBlog = await blogs.save();
      res.redirect('/admin/blogs');
    } catch (error) {
      res.render('admin/blog/Blogs');
    }
    next();
  }
}

async function getAllBlog(req, res, next) {
  try {
    const blogs = await Blog.find();
    res.render('admin/blog/Blogs', {
      title: 'List Blogs',
      blogs: blogs
    })
  } catch (error) {
    res.redirect("/admin/blogs");
  }
}

async function createBlog(req, res, next) {
  try {
    const categories = await Category.find({}); //import from category Model for Select the Options
    // const blogs = new Blog();
    res.render('admin/blog/Create', {
      title: 'Create Blogs',
      categories: categories
    })
  } catch (error) {
    res.redirect("/admin/blogs");
  }
}

async function postBlog(req, req, next) {
  let { writter, title, subtitle, desc, category, tag, image, publishDate, privacy } = req.body;
  const blogs = new Blog({
    writter,
    title,
    subtitle,
    desc,
    category,
    tag,
    image,
    publishDate,
    privacy
  })
  console.log(blogs)
  // try {
  //   const newBlog = await blogs.save();
  //   res.redirect('/admin/blogs', {
  //     data: res.json(newBlog)
  //   });
  // } catch (error) {
  //   res.render('admin/blog/Create');
  // }
  // next();
}

module.exports = { getAllBlog, createBlog, postBlog }