//+------------------------------------------------------------------+
//|                                                        First.mq4 |
//|                        Copyright 2017, MetaQuotes Software Corp. |
//|                                             https://www.mql5.com |
//+------------------------------------------------------------------+
#property copyright "Copyright 2017, MetaQuotes Software Corp."
#property link      "https://www.mql5.com"
#property version   "1.00"
#property strict

string symbolGroups[][3] = {

	'AUDCAD', 'CADJPY', 'AUDJPY',
	'EURAUD', 'AUDCAD', 'EURCAD',
	'GBPAUD', 'AUDCAD', 'GBPCAD',
	'AUDUSD', 'USDCAD', 'AUDCAD',
	'AUDCHF', 'CHFJPY', 'AUDJPY',
	'EURAUD', 'AUDCHF', 'EURCHF',
	'GBPAUD', 'AUDCHF', 'GBPCHF',
	'AUDUSD', 'USDCHF', 'AUDCHF',
	'AUDCAD', 'CADJPY', 'AUDJPY',
	'AUDCHF', 'CHFJPY', 'AUDJPY',
	'EURAUD', 'AUDJPY', 'EURJPY',
	'GBPAUD', 'AUDJPY', 'GBPJPY',
	'AUDNZD', 'NZDJPY', 'AUDJPY',
	'AUDUSD', 'USDJPY', 'AUDJPY',
	'EURAUD', 'AUDNZD', 'EURNZD',
	'GBPAUD', 'AUDNZD', 'GBPNZD',
	'AUDNZD', 'NZDUSD', 'AUDUSD',
	'EURAUD', 'AUDUSD', 'EURUSD',
	'GBPAUD', 'AUDUSD', 'GBPUSD',
	'AUDUSD', 'USDCAD', 'AUDCAD',
	'AUDUSD', 'USDCHF', 'AUDCHF',
	'AUDUSD', 'USDJPY', 'AUDJPY',
	'AUDCAD', 'CADJPY', 'AUDJPY',
	'EURCAD', 'CADJPY', 'EURJPY',
	'GBPCAD', 'CADJPY', 'GBPJPY',
	'USDCAD', 'CADJPY', 'USDJPY',
	'AUDCHF', 'CHFJPY', 'AUDJPY',
	'EURCHF', 'CHFJPY', 'EURJPY',
	'GBPCHF', 'CHFJPY', 'GBPJPY',
	'EURAUD', 'AUDCAD', 'EURCAD',
	'EURAUD', 'AUDCHF', 'EURCHF',
	'EURAUD', 'AUDJPY', 'EURJPY',
	'EURAUD', 'AUDNZD', 'EURNZD',
	'EURAUD', 'AUDUSD', 'EURUSD',
	'EURGBP', 'GBPAUD', 'EURAUD',
	'EURAUD', 'AUDCAD', 'EURCAD',
	'EURCAD', 'CADJPY', 'EURJPY',
	'EURUSD', 'USDCAD', 'EURCAD',
	'EURAUD', 'AUDCHF', 'EURCHF',
	'EURCHF', 'CHFJPY', 'EURJPY',
	'EURGBP', 'GBPCHF', 'EURCHF',
	'EURUSD', 'USDCHF', 'EURCHF',
	'EURGBP', 'GBPAUD', 'EURAUD',
	'EURGBP', 'GBPCAD', 'EURCAD',
	'EURGBP', 'GBPCHF', 'EURCHF',
	'EURGBP', 'GBPJPY', 'EURJPY',
	'EURGBP', 'GBPNZD', 'EURNZD',
	'EURGBP', 'GBPUSD', 'EURUSD',
	'EURAUD', 'AUDJPY', 'EURJPY',
	'EURCAD', 'CADJPY', 'EURJPY',
	'EURCHF', 'CHFJPY', 'EURJPY',
	'EURGBP', 'GBPJPY', 'EURJPY',
	'EURNZD', 'NZDJPY', 'EURJPY',
	'EURUSD', 'USDJPY', 'EURJPY',
	'EURAUD', 'AUDNZD', 'EURNZD',
	'EURGBP', 'GBPNZD', 'EURNZD',
	'EURNZD', 'NZDJPY', 'EURJPY',
	'EURNZD', 'NZDUSD', 'EURUSD',
	'EURAUD', 'AUDUSD', 'EURUSD',
	'EURNZD', 'NZDUSD', 'EURUSD',
	'EURUSD', 'USDCAD', 'EURCAD',
	'EURUSD', 'USDCHF', 'EURCHF',
	'EURUSD', 'USDJPY', 'EURJPY',
	'GBPAUD', 'AUDCAD', 'GBPCAD',
	'GBPAUD', 'AUDCHF', 'GBPCHF',
	'GBPAUD', 'AUDJPY', 'GBPJPY',
	'GBPAUD', 'AUDNZD', 'GBPNZD',
	'GBPAUD', 'AUDUSD', 'GBPUSD',
	'EURGBP', 'GBPAUD', 'EURAUD',
	'GBPAUD', 'AUDCAD', 'GBPCAD',
	'GBPCAD', 'CADJPY', 'GBPJPY',
	'EURGBP', 'GBPCAD', 'EURCAD',
	'GBPUSD', 'USDCAD', 'GBPCAD',
	'GBPAUD', 'AUDCHF', 'GBPCHF',
	'GBPCHF', 'CHFCHF', 'GBPCHF',
	'EURGBP', 'GBPCHF', 'EURCHF',
	'GBPUSD', 'USDCHF', 'GBPCHF',
	'GBPAUD', 'AUDJPY', 'GBPJPY',
	'GBPCAD', 'CADJPY', 'GBPJPY',
	'GBPCHF', 'CHFJPY', 'GBPJPY',
	'EURGBP', 'GBPJPY', 'EURJPY',
	'GBPNZD', 'NZDJPY', 'GBPJPY',
	'GBPUSD', 'USDJPY', 'GBPJPY',
	'GBPAUD', 'AUDNZD', 'GBPNZD',
	'EURGBP', 'GBPNZD', 'EURNZD',
	'GBPNZD', 'NZDJPY', 'GBPJPY',
	'GBPNZD', 'NZDUSD', 'GBPUSD',
	'GBPAUD', 'AUDUSD', 'GBPUSD',
	'EURGBP', 'GBPUSD', 'EURUSD',
	'GBPNZD', 'NZDUSD', 'GBPUSD',
	'GBPUSD', 'USDCAD', 'GBPCAD',
	'GBPUSD', 'USDCHF', 'GBPCHF',
	'GBPUSD', 'USDJPY', 'GBPJPY',
	'AUDNZD', 'NZDJPY', 'AUDJPY',
	'EURNZD', 'NZDJPY', 'EURJPY',
	'GBPNZD', 'NZDJPY', 'GBPJPY',
	'NZDUSD', 'USDJPY', 'NZDJPY',
	'AUDNZD', 'NZDUSD', 'AUDUSD',
	'EURNZD', 'NZDUSD', 'EURUSD',
	'GBPNZD', 'NZDUSD', 'GBPUSD',
	'NZDUSD', 'USDJPY', 'NZDJPY',
	'AUDUSD', 'USDCAD', 'AUDCAD',
	'USDCAD', 'CADJPY', 'USDJPY',
	'EURUSD', 'USDCAD', 'EURCAD',
	'GBPUSD', 'USDCAD', 'GBPCAD',
	'AUDUSD', 'USDCHF', 'AUDCHF',
	'USDCHF', 'CHFCHF', 'USDCHF',
	'EURUSD', 'USDCHF', 'EURCHF',
	'GBPUSD', 'USDCHF', 'GBPCHF',
	'AUDUSD', 'USDJPY', 'AUDJPY',
	'USDCAD', 'CADJPY', 'USDJPY',
	'USDCHF', 'CHFJPY', 'USDJPY',
	'EURUSD', 'USDJPY', 'EURJPY',
	'GBPUSD', 'USDJPY', 'GBPJPY',
	'NZDUSD', 'USDJPY', 'NZDJPY'
};

// 是否已存在对冲订单
bool existEaOrder = false;

// 对冲订单是否符合盈利出场条件
bool canBeClosed() {

	//
	return false;
}

// 是否存在可盈利的对冲组合
bool eaPriceAvailable() {

	//
	return false;
}

// 创建对冲订单
void createOrder() {

	//
}

// 关闭对冲订单
void closeOrder() {

	//
}

//+------------------------------------------------------------------+
//| Expert initialization function                                   |
//+------------------------------------------------------------------+
int OnInit() {

	for (int i = 0; i < ArrayRange(symbolGroups, 0); i ++) {
		for (int j = 0; j < ArrayRange(symbolGroups, 1); j ++) {
			string symbol = symbolGroups[i][j];
			double price = MarketInfo(symbol, MODE_BID);
			if (price == 0) {
				Print(symbol, "-", MarketInfo(symbolGroups[i][j], MODE_BID));
			}
		}
	}
	//--- create timer
	EventSetTimer(60);
	//---
	return(INIT_SUCCEEDED);
}

//+------------------------------------------------------------------+
//| Expert deinitialization function                                 |
//+------------------------------------------------------------------+
void OnDeinit(const int reason) {
	//--- destroy timer
	EventKillTimer();
}

//+------------------------------------------------------------------+
//| Expert tick function                                             |
//+------------------------------------------------------------------+
void OnTick() {

	if (existEaOrder) {
		if (canBeClosed()) {
			closeOrder();
		}
	}
	else {
		if (eaPriceAvailable()) {
			createOrder();
		}
	}
}

//+------------------------------------------------------------------+
//| Tester function                                                  |
//+------------------------------------------------------------------+
double OnTester() {
	//---
	double ret=0.0;
	//---
	return(ret);
}
//+------------------------------------------------------------------+