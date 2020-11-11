//import from Models
const Categories = require('../models/categoryModel');

module.exports = {
  getCategories: async (req, res, next) => {
    try {
      const categories = await Categories.find();
      res.render('admin/category/Category', {
        title: 'Category Pages',
        categories: categories
      })
    } catch (error) {
      res.redirect('/admin/cats')
    }
  },

  createCat: async (req, res, next) => {
    res.render('admin/category/Create', {
      title: "Create New Category"
    })
  }
}