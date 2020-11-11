//import from Model
const Tags = require('../models/tagModel');

module.exports = {
  getTags: async (req, res, next) => {
    res.send('i am from Tag Route');
  }
}