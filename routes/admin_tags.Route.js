const express = require('express');
const router = express.Router();
const TagsController = require('../controller/AdminTagsController');

router.get('/', TagsController.getTags);


module.exports = router;