var pg = require('pg');
var dw = require('./datawrap');

// 解析DATABASE_URL
var databaseUrl = process.env.DATABASE_URL || 'postgres://postgres:root@localhost:5433/postgres';
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

module.exports = function(querystr, res, callback) {

	// 连接数据库
	pool.connect(function(err, client, done) {

		if(err) return console.error('error fetching client from pool', err);

		client.query(querystr + ';', function(err, result) {

			// 错误处理
			done(err);

			if(err) {
				dw.sendError(res, 'SERVERERROR');
				console.error('error running query', err);
			}
			else {
				if (callback) {
					callback(result.rows);
				}
				else {
					dw.sendData(res, result.rows);
				}
			}
		});
	});

	pool.on('error', function (err, client) {

		dw.sendError(res, 'SERVERERROR');
		console.error('idle client error', err.message, err.stack);
	});
};