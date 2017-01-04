// 加载express框架
var express = require('express');

var app = express();

// 路径设置
app
	.use('/resources', express.static('public'))
	.set('views', './views');

// 路由配置
app
	.get('/3d', function(req, res) {
		res.sendFile(__dirname + '/views/3d.html');
	})
	.get('/compass', function(req, res) {
		res.sendFile(__dirname + '/views/compass.html');
	})
	.get('/map', function(req, res) {
		res.sendFile(__dirname + '/views/map.html');
	})
	.listen(process.env.PORT || 3000, function (req, res) {
		console.log('app is running at port 3000');
	});