
//import from model
const { Admin } = require("../models/adminModel"); //Get AdminUser Model

module.exports = {
  getAdmin: async (req, res, next) => {
    res.render('admin/home', {
      title: 'Super User Controller'
    })
  },

  getsignUp: async (req, res, next) => {
    res.render('admin/admin_user/register', {
      title: 'Super User Register'
    })
  },

  SignUp: async (req, res, next) => {
    //Sign Up Function Start From Here
    //Check If there is a user with the same email
    //Create a new user
    //Generate the Token
    //Response With Token


    res.send('i am from signUp request')
  },

  getsignIn: async (req, res, next) => {
    res.render('admin/admin_user/login', {
      title: 'Super User Login'
    })
  },

  SignIn: async (req, res, next) => {
    //Sign In Function Start From Here
    //Generate Sign In Tokens
    res.send('i am from login request');
  },

  getProfile: async (req, res, next) => {
    res.render('admin/admin_user/admin_profile', {
      title:'Admin User Profile'
    })
  }
}