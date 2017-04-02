var STATUS = {

	SUCCESS: 0,
	APINOTFOUND: 1,
	PARAMERROR: 2,
	SERVERERROR: 3
};

module.exports = {

	sendData: function(res, data) {

		res.send({status: STATUS.SUCCESS, data: data});
	},
	sendError: function(res, error) {

		res.send({status: STATUS[error]});
	}
};