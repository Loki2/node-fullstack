const express = require('express');
const router = express.Router();

//import from controller
const CategoriesController = require('../controller/AdminCatsController');

router.get('/', CategoriesController.getCategories);
router.get('/create', CategoriesController.createCat);


module.exports = router;