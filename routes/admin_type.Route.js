const express = require('express');
const router = express.Router();
const TypesController = require('../controller/AdminTypeController');

router.get('/', TypesController.getTypes);


module.exports = router;