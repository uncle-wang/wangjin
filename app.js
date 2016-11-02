var express = require('express');
var eventproxy = require('eventproxy');
var superagent = require('superagent');
var cheerio = require('cheerio');
var jade = require('jade');
var pg = require('pg');
var url = require('url');

var app = express();
app.use('/resources', express.static('public'));
app.set('views', './views');
app.set('view engine', 'jade');
app.engine('jade', jade.__express);
app.get('/', function (req, res) {
/*	var arr = [];
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

	var param = req.query.param;
	if (param !== '' && param !== undefined) {
		
		app.locals.title = param;
	}
	res.render('test');
*/

	var ep = new eventproxy();
	var cnodeUrl = 'https://cnodejs.org/';

	superagent.get(cnodeUrl)
  .end(function (err, sres) {
    if (err) {
      return console.error(err);
    }
    var topicUrls = [];
    var $ = cheerio.load(sres.text);
    // 获取首页所有的链接
    $('#topic_list .topic_title').each(function (idx, element) {
      var $element = $(element);
      // $element.attr('href') 本来的样子是 /topic/542acd7d5d28233425538b04
      // 我们用 url.resolve 来自动推断出完整 url，变成
      // https://cnodejs.org/topic/542acd7d5d28233425538b04 的形式
      var href = url.resolve(cnodeUrl, $element.attr('href'));
      topicUrls.push(href);
    });

		// 命令 ep 重复监听 topicUrls.length 次（在这里也就是 40 次） `topic_html` 事件再行动
		ep.after('topic_html', topicUrls.length, function (topics) {
		  // topics 是个数组，包含了 40 次 ep.emit('topic_html', pair) 中的那 40 个 pair

		  // 开始行动
		  topics = topics.map(function (topicPair) {
		    // 接下来都是 jquery 的用法了
		    var topicUrl = topicPair[0];
		    var topicHtml = topicPair[1];
		    var $ = cheerio.load(topicHtml);
		    return ({
		    	title: $('.topic_full_title').text().trim(),
		    	comment1: $('.reply_content').eq(0).text().trim(),
		    });
		  });

		  res.send(topics);
		});

		topicUrls.forEach(function (topicUrl) {
		  superagent.get(topicUrl)
		    .end(function (err, res) {
		      console.log('fetch ' + topicUrl + ' successful');
		      ep.emit('topic_html', [topicUrl, res.text]);
		    });
		});
  });


/*	// 用 superagent 去抓取 https://cnodejs.org/ 的内容
	superagent.get('https://cnodejs.org/')
	.end(function (err, sres) {
		// 常规的错误处理
		if (err) {
			return next(err);
		}
		// sres.text 里面存储着网页的 html 内容，将它传给 cheerio.load 之后
		// 就可以得到一个实现了 jquery 接口的变量，我们习惯性地将它命名为 `$`
		// 剩下就都是 jquery 的内容了
		var $ = cheerio.load(sres.text);
		var items = [];
		$('#topic_list .topic_title').each(function (idx, element) {
			var $element = $(element);
			items.push({
				title: $element.attr('title'),
				href: $element.attr('href')
			});
		});

		res.send(items);
	});
*/

});

app.get('/3d', function(req, res) {

	res.sendFile(__dirname + '/views/3d.html');
});

app.get('/compass', function(req, res) {

	res.sendFile(__dirname + '/views/compass.html');
});

app.get('/block', function(req, res) {

	res.sendFile(__dirname + '/views/block.html');
});

app.listen(process.env.PORT || 3000, function (req, res) {

	console.log('app is running at port 3000');
});

var pkg = require('./libs/mypkg');
pkg.demo();