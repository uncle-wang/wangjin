var express = require('express');
var superagent = require('superagent');
var cheerio = require('cheerio');
var jade = require('jade');
var pg = require('pg');

var app = express();
app.use('/resources', express.static('public'));
app.set('views', './views');
app.set('view engine', 'jade');
app.engine('jade', jade.__express);
app.get('/', function (req, res) {
	var arr = [];
	pg.defaults.ssl = true;
	pg.connect('postgres://encabebhciufqx:og02_xQtWI9cy9Ky9W05wNTV5i@ec2-54-235-125-135.compute-1.amazonaws.com:5432/d9tjjqnpjg5dc7', function(err, client) {
		if (err) throw err;
		console.log('Connected to postgres! Getting schemas...');

		client
		.query('SELECT * FROM n_user;')
		.on('row', function(row) {
			arr.push(row);
		}).on('end', function() {
			app.locals.users = arr;
			res.render('test');
		})
	});
	console.log('end');

/*	var param = req.query.param;
	if (param !== '' && param !== undefined) {
		
		app.locals.title = param;
	}
	res.render('test');

	superagent.get('http://news.qq.com/zt2015/wxghz/index.htm').end(function(err, content) {


		var $ = cheerio.load(content.text);
		var rows = $('.nrC a .title');
		var news = [];
		rows.each(function(index, ele) {

			var $ele = $(ele);
			news.push($ele.text());
			app.locals.news = news;
			news.push({title: $ele.find('.title').html(), des: $ele.find('p').html()});
		});
		res.send(str);
	});
*/});

app.get('/3d', function(req, res) {

	res.sendFile(__dirname + '/views/3d.html');
});

app.listen(process.env.PORT || 3000, function (req, res) {

	console.log('app is running at port 3000');
});