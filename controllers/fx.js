var path = require('path');

var route = function(app) {

	app

	.get('/fx', function(req, res, next) {

		res.send(path.join(__dirname + 'views/fx.html'));
	});

	return this;
};

module.exports = {
	
	route: route
};