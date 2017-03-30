// 加载express框架
var 
	dw = require('./datawrap'),
	fx = require('./controllers/fx'),
	express = require('express'),
	app = express();

fx.route(app);

app

	// 路径设置
	.use('/resources', express.static('public'))

	.set('views', './views')

	// 路由配置
	.get('/', function (req, res) {

		res.sendFile(__dirname + '/views/home.html');
	})

	.get('/view/3d', function(req, res) {

		res.sendFile(__dirname + '/views/3d.html');
	})

	.get('/view/compass', function(req, res) {

		res.sendFile(__dirname + '/views/compass.html');
	})

	.get('/view/map', function(req, res) {

		res.sendFile(__dirname + '/views/map.html');
	})

	.get('/view/block', function(req, res) {

		res.sendFile(__dirname + '/views/block.html');
	})

	.get('/view/base64', function(req, res) {

		res.sendFile(__dirname + '/views/base64.html');
	})

	.use('/api', function(req, res) {

		dw.sendError(res, 'APINOTFOUND');
	})

	.use('/view', function(req, res) {

		res.sendFile(__dirname + '/views/404.html');
	})

	.listen(process.env.PORT || 3000, function (req, res) {

		console.log('app is running at port 3000');
	});