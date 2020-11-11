const express = require('express');
const router = express.Router();
const AdminServiceController = require('../controller/AdminServiceController');

router.route('/')
      .get(AdminServiceController.getService)
      .post(AdminServiceController.postService);



module.exports = router;