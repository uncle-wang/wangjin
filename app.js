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
	var str = '';
	pg.defaults.ssl = true;
	pg.connect(process.env.DATABASE_URL, function(err, client) {
		if (err) throw err;
		console.log('Connected to postgres! Getting schemas...');

		client
		.query('SELECT * FROM n_user;')
		.on('row', function(row) {
			str += JSON.stringify(row);
		});
		res.send(str);
	});

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

app.listen(process.env.PORT || 3000, function (req, res) {

	console.log('app is running at port 3000');
});