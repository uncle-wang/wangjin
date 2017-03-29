var fp = require('./../filepath');

var route = function(app) {

	app

	.get('/fx', function(req, res) {

		res.sendFile(fp.view('fx'));
	});

	return this;
};

module.exports = {
	
	route: route
};