var express = require('express');
var superagent = require('superagent');
var cheerio = require('cheerio');
var jade = require('jade');

var app = express();
app.use('/resources', express.static('public'));
app.set('views', './views');
app.set('view engine', 'jade');
app.engine('jade', jade.__express);
app.get('/', function (req, res) {

	superagent.get('http://news.qq.com/zt2015/wxghz/index.htm').end(function(err, content) {

		var $ = cheerio.load(content.text);
		var rows = $('.nrC a .title');
		var news = [];
		rows.each(function(index, ele) {

			var $ele = $(ele);
			news.push($ele.text());
			app.locals.news = news;
//			news.push({title: $ele.find('.title').html(), des: $ele.find('p').html()});
		});
		res.render('test');
	});
});

app.listen(process.env.PORT || 3000, function (req, res) {

	console.log('app is running at port 3000');
});