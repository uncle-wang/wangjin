var 
	express = require('express'),
	app = express();

app

	.use('/resources', express.static('public'))

	.set('views', './views')

	// .set('view engine', 'jade')

	// .engine('jade', jade.__express)

	.get('/', function (req, res) {

		res.send('go die');
	})

	.get('/3d', function(req, res) {

		res.sendFile(__dirname + '/views/3d.html');
	})

	.get('/compass', function(req, res) {

		res.sendFile(__dirname + '/views/compass.html');
	})

	.get('/block', function(req, res) {

		res.sendFile(__dirname + '/views/block.html');
	})

	.listen(process.env.PORT || 3000, function (req, res) {

		console.log('app is running at port 3000');
	});
