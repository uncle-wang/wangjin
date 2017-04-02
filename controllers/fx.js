var fp = require('./../filepath');
var fx = require(fp.module('fx'));
var dw = require('./../datawrap');

var route = function(app) {

	app

	.get('/view/fx', function(req, res) {

		res.sendFile(fp.view('fx'));
	})

	.get('/api/fx/getCategoryList', function(req, res) {

		fx.getCategoryList(req, res);
	})

	.get('/api/fx/addCategory', function(req, res) {

		fx.addCategory(req, res);
	})

	.get('/api/fx/removeCategory', function(req, res) {

		var categoryId = req.query.categoryId;
		if (categoryId && fx.exsistCategory(categoryId)) {
			fx.removeCategory(categoryId);
			dw.sendData(res);
		}
		else {
			dw.sendError(res, 'PARAMERROR');
		}
	})

	.get('/api/fx/addItem', function(req, res) {

		fx.addItem(req, res);
	})

	.get('/api/fx/removeItem', function(req, res) {

		var itemId = req.query.itemId;
		if (itemId && fx.exsistItem(itemId)) {
			fx.removeItem(itemId);
			dw.sendData(res);
		}
		else {
			dw.sendError(res, 'PARAMERROR');
		}
	})

	.get('/api/fx/getItemListByCategoryId', function(req, res) {

		fx.getItemListByCategoryId(req, res);
	});

	return this;
};

module.exports = {
	
	route: route
};