//import from Models
const Types = require('../models/typeModel');

module.exports = {
  getTypes: async (req, res, next) => {
    res.send('i am from get Type Route');
  }
}