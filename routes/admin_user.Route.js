const express = require('express');
const router = express.Router();
const AdminUserController = require('../controller/AdminUserController');

router.route('/')
      // .get(AdminUserController.getsignIn)
       .get(AdminUserController.getAdmin);

router.route('/register')
      .get(AdminUserController.getsignUp)
      .post(AdminUserController.SignUp)

router.route('/login')
      .get(AdminUserController.getsignIn) //Get Login Form
      .post(AdminUserController.SignIn) //Post Request From Input Form

router.route('/profile')
      .get(AdminUserController.getProfile);

module.exports = router;