var fp = require('./../filepath');

var route = function(app) {

	app

	.get('/fx', function(req, res) {

		res.sendFile(fp.view('fx'));
	})

	.get('/api/fx', function(req, res) {

		res.send('fx api')
	})

	.get('/fx/getTest', function(req, res) {

		console.log('test');
	});

	return this;
};

module.exports = {
	
	route: route
};