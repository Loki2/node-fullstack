const { Service } = require("../models/serviceModel"); //Get Service model

module.exports = {
  getService: async (req, res, next) => {
    try {
      const services = await Service.find();
      res.render('admin/service/Service', {
        title: 'Service Operation',
        services: services,
      })
    } catch (error) {
      res.redirect('/admin/service')
    }
    next()
  },

  postService: async (req, res, next) => {
    let { title, desc } = req.body;
    const service = new Service({
        title,
        desc
    }) 
    try {
      const newService = await service.save();
      res.redirect('/admin/service');
    } catch (error) {
      res.render('admin/service/Service', {
        service: service,
        errorMessage: 'Create a new Service had failed...'
      })
    }
    next()
  }

}