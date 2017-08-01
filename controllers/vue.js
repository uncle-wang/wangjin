var fp = require('./../filepath');

var route = function(app) {

	app

	// 页面
	.get('/vue/country', function(req, res) {

		res.sendFile(fp.vue('country'));
	})
	.get('/vue/operator', function(req, res) {

		res.sendFile(fp.vue('operator'));
	})

	// 获取用户信息
	.get('/vue/api/getUserInfo', function(req, res) {

		res.send({
			username: '张伟',
			email: 'zhangwei@163.com'
		});
	})

	// 获取国家
	.get('/vue/api/getCountries', function(req, res) {

		var countries = [

			{value: 'CX', name: 'Cris'},
			{value: 'GR', name: 'Greece'},
			{value: 'NL', name: 'Netherlands'},
			{value: 'BE', name: 'Belgium'},
			{value: 'FR', name: 'France'},
			{value: 'AD', name: 'Andorra'},
			{value: 'ES', name: 'Spain'},
			{value: 'HU', name: 'Hungary'},
			{value: 'BA', name: 'BosniaandHerzegovina'},
			{value: 'HR', name: 'Croatia'},
			{value: 'RS', name: 'SerbiaandMontenegro'},
			{value: 'IT', name: 'Italy'},
			{value: 'RO', name: 'Romania'},
			{value: 'CH', name: 'Switzerland'},
			{value: 'CZ', name: 'CzechRepublic'},
			{value: 'SK', name: 'Slovakia'},
			{value: 'AT', name: 'Austria'},
			{value: 'GB', name: 'UnitedKingdom'},
			{value: 'DK', name: 'Denmark'},
			{value: 'SE', name: 'Sweden'},
			{value: 'NO', name: 'Norway'},
			{value: 'FI', name: 'Finland'},
			{value: 'LT', name: 'Lithuania'},
			{value: 'LV', name: 'Latvia'},
			{value: 'EE', name: 'Estonia'},
			{value: 'RU', name: 'Russia'},
			{value: 'UA', name: 'Ukraine'},
			{value: 'BY', name: 'Belarus'},
			{value: 'MD', name: 'Moldova'},
			{value: 'PL', name: 'Poland'},
			{value: 'DE', name: 'Germany'},
			{value: 'GI', name: 'Gibraltar'},
			{value: 'PT', name: 'Portugal'},
			{value: 'LU', name: 'Luxembourg'},
			{value: 'IE', name: 'Ireland'}
		];
		var pageNumber = 0;
		var resCountries = [];
		var reqPage = Number(req.query.page);
		if (reqPage === reqPage && reqPage > 0) {
			pageNumber = reqPage;
		}
		var startPos = pageNumber * 10;
		var endPos = Math.min(startPos + 10, countries.length);
		for (var i = startPos; i < endPos; i ++) {
			resCountries.push(countries[i]);
		}
		res.send({totalPage: 4, list: resCountries});
	})

	// 获取运营商
	.get('/vue/api/getOperators', function(req, res) {

		var operators = [

			{value: '28967', name: 'Aquafon - Aquafon JSC'},
			{value: '28988', name: 'A-Mobile - A-Mobile LLSC'},
			{value: '41201', name: 'AWCC - Afghan Wireless Communication Company'},
			{value: '41220', name: 'Roshan - Telecom Development Company Afghanistan Ltd.'},
			{value: '41240', name: 'MTN - MTN Group Afghanistan'},
			{value: '41250', name: 'Etisalat - Etisalat Afghanistan'},
			{value: '41255', name: 'WASEL - WASEL Afghanistan'},
			{value: '41280', name: 'Salaam - Afghan Telecom'},
			{value: '41288', name: 'Salaam - Afghan Telecom'},
			{value: '27601', name: 'Telekom.al - Telekom Albania'},
			{value: '27602', name: 'Vodafone - Vodafone Albania'},
			{value: '27603', name: 'Eagle Mobile - Albtelecom'},
			{value: '27604', name: 'Plus Communication - Plus Communication'},
			{value: '60302', name: 'Djezzy - Optimum Telecom Alg??rie Spa'},
			{value: '60303', name: 'Ooredoo - Wataniya Telecom Alg??rie'},
			{value: '54411', name: 'Bluesky - Bluesky'},
			{value: '21303', name: 'Mobiland - Servei De Tele. DAndorra'},
			{value: '63102', name: 'UNITEL - UNITEL S.a.r.l.'},
			{value: '63104', name: 'MOVICEL - MOVICEL Telecommunications S.A.'},
			{value: '365010', name: 'Weblinks Limited'},
			{value: '365840', name: 'FLOW - Cable & Wireless'},
			{value: '344030', name: 'APUA - Antigua Public Utilities Authority'},
			{value: '344050', name: 'Digicel - Antigua Wireless Ventures Limited'},
			{value: '344920', name: 'FLOW - Cable & Wireless Caribbean Cellular (Antigua) Limited'},
			{value: '344930', name: 'AT&T Wireless'},
			{value: '722010', name: 'Movistar - Telef?3nica M?3viles Argentina S.A.'},
			{value: '722020', name: 'Nextel - NII Holdings'},
			{value: '722034', name: 'Personal - Telecom Personal S.A.'},
			{value: '722040', name: 'Globalstar - TE.SA.M Argentina S.A.'},
			{value: '722070', name: 'Movistar - Telef?3nica M?3viles Argentina S.A.'},
			{value: '722310', name: 'Claro - AMX Argentina S.A.'},
			{value: '722320', name: 'Claro - AMX Argentina S.A.'},
			{value: '722330', name: 'Claro - AMX Argentina S.A.'},
			{value: '722341', name: 'Personal - Telecom Personal S.A.'},
			{value: '722350', name: 'PORT-HABLE - Hutchison Telecommunications Argentina S.A.'},
			{value: '28301', name: 'Beeline - ArmenTel'},
			{value: '28304', name: 'Karabakh Telecom - Karabakh Telecom'},
			{value: '28305', name: 'VivaCell-MTS - K Telecom CJSC'},
			{value: '28310', name: 'Ucom - Ucom LLC'},
			{value: '36301', name: 'SETAR - Servicio di Telecomunicacion di Aruba'},
			{value: '36302', name: 'Digicel - Digicel Aruba'},
			{value: '50501', name: 'Telstra - Telstra Corporation Limited'},
			{value: '50502', name: 'Optus - Singtel Optus Proprietary Limited'},
			{value: '50503', name: 'Vodafone - Vodafone Hutchison Australia Proprietary Limited'},
			{value: '50504', name: 'Department of Defence'},
			{value: '50505', name: 'Ozitel'},
			{value: '50506', name: '3 - Vodafone Hutchison Australia Proprietary Limited'},
			{value: '50507', name: 'Vodafone - Vodafone Network Pty. Ltd.'},
			{value: '50508', name: 'One.Tel - One.Tel Limited'},
			{value: '50509', name: 'Airnet'},
			{value: '50510', name: 'Norfolk Is. - Norfolk Telecom'},
			{value: '50511', name: 'Telstra - Telstra Corporation Ltd.'},
			{value: '50512', name: '3 - Vodafone Hutchison Australia Proprietary Limited'}
		];
		var pageNumber = 0;
		var resOperators = [];
		var reqPage = Number(req.query.page);
		if (reqPage === reqPage && reqPage > 0) {
			pageNumber = reqPage;
		}
		var startPos = pageNumber * 10;
		var endPos = Math.min(startPos + 10, operators.length);
		for (var i = startPos; i < endPos; i ++) {
			resOperators.push(operators[i]);
		}
		res.send({totalPage: 6, list: resOperators});
	});

	return this;
};

module.exports = {
	
	route: route
};