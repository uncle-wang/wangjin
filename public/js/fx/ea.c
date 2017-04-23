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

	"AUDCAD", "CADJPY", "AUDJPY",
	"AUDCAD", "EURCAD", "EURAUD",
	"AUDCAD", "GBPCAD", "GBPAUD",
	"AUDCAD", "USDCAD", "AUDUSD",
	"AUDCHF", "CHFJPY", "AUDJPY",
	"AUDCHF", "EURCHF", "EURAUD",
	"AUDCHF", "GBPCHF", "GBPAUD",
	"AUDCHF", "USDCHF", "AUDUSD",
	"AUDJPY", "CADJPY", "AUDCAD",
	"AUDJPY", "CHFJPY", "AUDCHF",
	"AUDJPY", "EURJPY", "EURAUD",
	"AUDJPY", "GBPJPY", "GBPAUD",
	"AUDJPY", "NZDJPY", "AUDNZD",
	"AUDJPY", "USDJPY", "AUDUSD",
	"AUDNZD", "EURNZD", "EURAUD",
	"AUDNZD", "GBPNZD", "GBPAUD",
	"AUDNZD", "NZDUSD", "AUDUSD",
	"AUDUSD", "EURUSD", "EURAUD",
	"AUDUSD", "GBPUSD", "GBPAUD",
	"AUDUSD", "USDCAD", "AUDCAD",
	"AUDUSD", "USDCHF", "AUDCHF",
	"AUDUSD", "USDJPY", "AUDJPY",
	"CADJPY", "AUDJPY", "AUDCAD",
	"CADJPY", "EURJPY", "EURCAD",
	"CADJPY", "GBPJPY", "GBPCAD",
	"CADJPY", "USDJPY", "USDCAD",
	"CHFJPY", "AUDJPY", "AUDCHF",
	"CHFJPY", "EURJPY", "EURCHF",
	"CHFJPY", "GBPJPY", "GBPCHF",
	"EURAUD", "AUDCAD", "EURCAD",
	"EURAUD", "AUDCHF", "EURCHF",
	"EURAUD", "AUDJPY", "EURJPY",
	"EURAUD", "AUDNZD", "EURNZD",
	"EURAUD", "AUDUSD", "EURUSD",
	"EURAUD", "GBPAUD", "EURGBP",
	"EURCAD", "AUDCAD", "EURAUD",
	"EURCAD", "CADJPY", "EURJPY",
	"EURCAD", "GBPCAD", "EURCAD",
	"EURCAD", "USDCAD", "EURUSD",
	"EURCHF", "AUDCHF", "EURAUD",
	"EURCHF", "CHFJPY", "EURJPY",
	"EURCHF", "GBPCHF", "EURGBP",
	"EURCHF", "USDCHF", "EURUSD",
	"EURGBP", "GBPAUD", "EURAUD",
	"EURGBP", "GBPCAD", "EURCAD",
	"EURGBP", "GBPCHF", "EURCHF",
	"EURGBP", "GBPJPY", "EURJPY",
	"EURGBP", "GBPNZD", "EURNZD",
	"EURGBP", "GBPUSD", "EURUSD",
	"EURJPY", "AUDJPY", "EURAUD",
	"EURJPY", "CADJPY", "EURCAD",
	"EURJPY", "CHFJPY", "EURCHF",
	"EURJPY", "GBPJPY", "EURGBP",
	"EURJPY", "NZDJPY", "EURNZD",
	"EURJPY", "USDJPY", "EURUSD",
	"EURNZD", "AUDNZD", "EURAUD",
	"EURNZD", "GBPNZD", "EURGBP",
	"EURNZD", "NZDJPY", "EURJPY",
	"EURNZD", "NZDUSD", "EURUSD",
	"EURUSD", "AUDUSD", "EURAUD",
	"EURUSD", "GBPUSD", "GBPUSD",
	"EURUSD", "NZDUSD", "EURNZD",
	"EURUSD", "USDCAD", "EURCAD",
	"EURUSD", "USDCHF", "EURCHF",
	"EURUSD", "USDJPY", "EURJPY",
	"GBPAUD", "AUDCAD", "GBPCAD",
	"GBPAUD", "AUDCHF", "GBPCHF",
	"GBPAUD", "AUDJPY", "GBPJPY",
	"GBPAUD", "AUDNZD", "GBPNZD",
	"GBPAUD", "AUDUSD", "GBPUSD",
	"GBPAUD", "EURAUD", "EURGBP",
	"GBPCAD", "AUDCAD", "GBPAUD",
	"GBPCAD", "CADJPY", "GBPJPY",
	"GBPCAD", "EURCAD", "EURGBP",
	"GBPCAD", "USDCAD", "GBPUSD",
	"GBPCHF", "AUDCHF", "GBPAUD",
	"GBPCHF", "CHFJPY", "GBPCHF",
	"GBPCHF", "EURCHF", "EURGBP",
	"GBPCHF", "USDCHF", "GBPUSD",
	"GBPJPY", "AUDJPY", "GBPAUD",
	"GBPJPY", "CADJPY", "GBPCAD",
	"GBPJPY", "CHFJPY", "GBPCHF",
	"GBPJPY", "EURJPY", "EURGBP",
	"GBPJPY", "NZDJPY", "GBPNZD",
	"GBPJPY", "USDJPY", "GBPUSD",
	"GBPNZD", "AUDNZD", "GBPAUD",
	"GBPNZD", "EURNZD", "EURGBP",
	"GBPNZD", "NZDJPY", "GBPJPY",
	"GBPNZD", "NZDUSD", "GBPUSD",
	"GBPUSD", "AUDUSD", "GBPAUD",
	"GBPUSD", "EURUSD", "EURGBP",
	"GBPUSD", "NZDUSD", "GBPNZD",
	"GBPUSD", "USDCAD", "GBPCAD",
	"GBPUSD", "USDCHF", "GBPCHF",
	"GBPUSD", "USDJPY", "GBPJPY",
	"NZDJPY", "AUDJPY", "AUDNZD",
	"NZDJPY", "EURJPY", "EURNZD",
	"NZDJPY", "GBPJPY", "GBPNZD",
	"NZDJPY", "USDJPY", "NZDUSD",
	"NZDUSD", "AUDUSD", "AUDNZD",
	"NZDUSD", "EURUSD", "EURNZD",
	"NZDUSD", "GBPUSD", "GBPNZD",
	"NZDUSD", "USDJPY", "NZDJPY",
	"USDCAD", "AUDCAD", "AUDUSD",
	"USDCAD", "CADJPY", "USDJPY",
	"USDCAD", "EURCAD", "EURUSD",
	"USDCAD", "GBPCAD", "GBPUSD",
	"USDCHF", "AUDCHF", "AUDUSD",
	"USDCHF", "CHFJPY", "USDCHF",
	"USDCHF", "EURCHF", "EURUSD",
	"USDCHF", "GBPCHF", "GBPUSD",
	"USDJPY", "AUDJPY", "AUDUSD",
	"USDJPY", "CADJPY", "USDCAD",
	"USDJPY", "CHFJPY", "USDCHF",
	"USDJPY", "EURJPY", "EURUSD",
	"USDJPY", "GBPJPY", "GBPUSD",
	"USDJPY", "NZDJPY", "NZDUSD"
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