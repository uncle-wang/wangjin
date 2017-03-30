module.exports = {

	view: function(fileName) {

		return __dirname + '/views/' + fileName + '.html';
	},

	module: function(fileName) {

		return __dirname + '/modules/' + fileName + '.js';
	},

	config: function(fileName) {

		return __dirname + '/config/' + fileName + '.json';
	}
};