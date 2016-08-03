var moduleA = require('./moduleA');
var moduleB = require('./moduleB');

var test = function() {

	console.log(moduleA.demoA() + '\n' + moduleB());	
};

exports.demo = test;