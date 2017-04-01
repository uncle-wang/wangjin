var pg = require('pg');

// 解析DATABASE_URL
var databaseUrl = process.env.DATABASE_URL;
var str = databaseUrl.substr(11);
var pos = str.indexOf(':');
var user = str.substring(0, pos);
str = str.substr(pos + 1);
pos = str.indexOf('@');
var password = str.substring(0, pos);
str = str.substr(pos + 1);
pos = str.indexOf(':');
var host = str.substring(0, pos);
str = str.substr(pos + 1);
pos = str.indexOf('/');
var port = Number(str.substring(0, pos));
var database = str.substr(pos + 1);

// 连接数据库配置
var config = {
	user: user,
	database: database,
	password: password,
	host: host,
	port: port,
	max: 10,
	ssl: process.env.DATABASE_SSLTYPE ? false : true,
	idleTimeoutMillis: 30000
};

var pool = new pg.Pool(config);

module.exports = function(querystr, callback) {

	// 连接数据库
	pool.connect(function(err, client, done) {

		if(err) return console.error('error fetching client from pool', err);

		client.query(querystr + ';', function(err, result) {

			// 错误处理
			done(err);

			if(err) {
				callback(err);
				return console.error('error running query', err);
			}

			// 执行回调
			callback(result.rows);
		});
	});

	pool.on('error', function (err, client) {

		console.error('idle client error', err.message, err.stack);
	});
};