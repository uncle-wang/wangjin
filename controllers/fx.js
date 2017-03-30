var fp = require('./../filepath');
var fx = require(fp.module('fx'));
var dw = require('./../datawrap');

var route = function(app) {

	app

	.get('/view/fx', function(req, res) {

		res.sendFile(fp.view('fx'));
	})

	.get('/api/fx/getCategoryList', function(req, res) {

		dw.sendData(res, fx.getCategoryList());
	})

	.get('/api/fx/getItemListByCategoryId', function(req, res) {

		var categoryId = req.query.categoryId;
		if (categoryId) {
			dw.sendData(res, fx.getItemListByCategoryId(categoryId));
		}
		else {
			dw.sendError(res, 'PARAMERROR');
		}
	});

	return this;
};

module.exports = {
	
	route: route
};