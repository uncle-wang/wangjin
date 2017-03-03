// 加载express框架
var 
	express = require('express'),
	app = express();

app

	// 路径设置
	.use('/resources', express.static('public'))

	.set('views', './views')

	// 路由配置
	.get('/', function (req, res) {

		res.sendFile(__dirname + '/views/home.html');
	})

	.get('/3d', function(req, res) {

		res.sendFile(__dirname + '/views/3d.html');
	})

	.get('/compass', function(req, res) {

		res.sendFile(__dirname + '/views/compass.html');
	})

	.get('/map', function(req, res) {
		res.sendFile(__dirname + '/views/map.html');
	})

	.get('/block', function(req, res) {

		res.sendFile(__dirname + '/views/block.html');
	})

	.get('/base64', function(req, res) {
		res.sendFile(__dirname + '/views/base64.html');
	})

	.listen(process.env.PORT || 3000, function (req, res) {

		console.log('app is running at port 3000');
	});