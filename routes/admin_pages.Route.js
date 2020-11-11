const express = require('express');
const router = express.Router();
const Pages = require('../models/pageModel');

router.get('/', (req, res, next) => {
	res.render('admin/page/pages', {
		title: 'All List Pages'
	})

})


router.post('/', function (req, res, next) {
	const pages = new Pages({
		title: req.body.title,
		slug: req.body.slug, //.replace(/\s+/g, '-').toLowerCase()
		content: req.body.content
	})
	// if(slug == "" ) slug = title.replace(/\s+/g, '-').toLowerCase();

	pages.save((err, newPage) => {
		res.redirect('/admin/pages')
	});
});



module.exports = router;