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
	"EURAUD", "AUDCAD", "EURCAD",
	"GBPAUD", "AUDCAD", "GBPCAD",
	"AUDUSD", "USDCAD", "AUDCAD",
	"AUDCHF", "CHFJPY", "AUDJPY",
	"EURAUD", "AUDCHF", "EURCHF",
	"GBPAUD", "AUDCHF", "GBPCHF",
	"AUDUSD", "USDCHF", "AUDCHF",
	"AUDCAD", "CADJPY", "AUDJPY",
	"AUDCHF", "CHFJPY", "AUDJPY",
	"EURAUD", "AUDJPY", "EURJPY",
	"GBPAUD", "AUDJPY", "GBPJPY",
	"AUDNZD", "NZDJPY", "AUDJPY",
	"AUDUSD", "USDJPY", "AUDJPY",
	"EURAUD", "AUDNZD", "EURNZD",
	"GBPAUD", "AUDNZD", "GBPNZD",
	"AUDNZD", "NZDUSD", "AUDUSD",
	"EURAUD", "AUDUSD", "EURUSD",
	"GBPAUD", "AUDUSD", "GBPUSD",
	"AUDUSD", "USDCAD", "AUDCAD",
	"AUDUSD", "USDCHF", "AUDCHF",
	"AUDUSD", "USDJPY", "AUDJPY",
	"AUDCAD", "CADJPY", "AUDJPY",
	"EURCAD", "CADJPY", "EURJPY",
	"GBPCAD", "CADJPY", "GBPJPY",
	"USDCAD", "CADJPY", "USDJPY",
	"AUDCHF", "CHFJPY", "AUDJPY",
	"EURCHF", "CHFJPY", "EURJPY",
	"GBPCHF", "CHFJPY", "GBPJPY",
	"EURAUD", "AUDCAD", "EURCAD",
	"EURAUD", "AUDCHF", "EURCHF",
	"EURAUD", "AUDJPY", "EURJPY",
	"EURAUD", "AUDNZD", "EURNZD",
	"EURAUD", "AUDUSD", "EURUSD",
	"EURGBP", "GBPAUD", "EURAUD",
	"EURAUD", "AUDCAD", "EURCAD",
	"EURCAD", "CADJPY", "EURJPY",
	"EURUSD", "USDCAD", "EURCAD",
	"EURAUD", "AUDCHF", "EURCHF",
	"EURCHF", "CHFJPY", "EURJPY",
	"EURGBP", "GBPCHF", "EURCHF",
	"EURUSD", "USDCHF", "EURCHF",
	"EURGBP", "GBPAUD", "EURAUD",
	"EURGBP", "GBPCAD", "EURCAD",
	"EURGBP", "GBPCHF", "EURCHF",
	"EURGBP", "GBPJPY", "EURJPY",
	"EURGBP", "GBPNZD", "EURNZD",
	"EURGBP", "GBPUSD", "EURUSD",
	"EURAUD", "AUDJPY", "EURJPY",
	"EURCAD", "CADJPY", "EURJPY",
	"EURCHF", "CHFJPY", "EURJPY",
	"EURGBP", "GBPJPY", "EURJPY",
	"EURNZD", "NZDJPY", "EURJPY",
	"EURUSD", "USDJPY", "EURJPY",
	"EURAUD", "AUDNZD", "EURNZD",
	"EURGBP", "GBPNZD", "EURNZD",
	"EURNZD", "NZDJPY", "EURJPY",
	"EURNZD", "NZDUSD", "EURUSD",
	"EURAUD", "AUDUSD", "EURUSD",
	"EURNZD", "NZDUSD", "EURUSD",
	"EURUSD", "USDCAD", "EURCAD",
	"EURUSD", "USDCHF", "EURCHF",
	"EURUSD", "USDJPY", "EURJPY",
	"GBPAUD", "AUDCAD", "GBPCAD",
	"GBPAUD", "AUDCHF", "GBPCHF",
	"GBPAUD", "AUDJPY", "GBPJPY",
	"GBPAUD", "AUDNZD", "GBPNZD",
	"GBPAUD", "AUDUSD", "GBPUSD",
	"EURGBP", "GBPAUD", "EURAUD",
	"GBPAUD", "AUDCAD", "GBPCAD",
	"GBPCAD", "CADJPY", "GBPJPY",
	"EURGBP", "GBPCAD", "EURCAD",
	"GBPUSD", "USDCAD", "GBPCAD",
	"GBPAUD", "AUDCHF", "GBPCHF",
	"EURGBP", "GBPCHF", "EURCHF",
	"GBPUSD", "USDCHF", "GBPCHF",
	"GBPAUD", "AUDJPY", "GBPJPY",
	"GBPCAD", "CADJPY", "GBPJPY",
	"GBPCHF", "CHFJPY", "GBPJPY",
	"EURGBP", "GBPJPY", "EURJPY",
	"GBPNZD", "NZDJPY", "GBPJPY",
	"GBPUSD", "USDJPY", "GBPJPY",
	"GBPAUD", "AUDNZD", "GBPNZD",
	"EURGBP", "GBPNZD", "EURNZD",
	"GBPNZD", "NZDJPY", "GBPJPY",
	"GBPNZD", "NZDUSD", "GBPUSD",
	"GBPAUD", "AUDUSD", "GBPUSD",
	"EURGBP", "GBPUSD", "EURUSD",
	"GBPNZD", "NZDUSD", "GBPUSD",
	"GBPUSD", "USDCAD", "GBPCAD",
	"GBPUSD", "USDCHF", "GBPCHF",
	"GBPUSD", "USDJPY", "GBPJPY",
	"AUDNZD", "NZDJPY", "AUDJPY",
	"EURNZD", "NZDJPY", "EURJPY",
	"GBPNZD", "NZDJPY", "GBPJPY",
	"NZDUSD", "USDJPY", "NZDJPY",
	"AUDNZD", "NZDUSD", "AUDUSD",
	"EURNZD", "NZDUSD", "EURUSD",
	"GBPNZD", "NZDUSD", "GBPUSD",
	"NZDUSD", "USDJPY", "NZDJPY",
	"AUDUSD", "USDCAD", "AUDCAD",
	"USDCAD", "CADJPY", "USDJPY",
	"EURUSD", "USDCAD", "EURCAD",
	"GBPUSD", "USDCAD", "GBPCAD",
	"AUDUSD", "USDCHF", "AUDCHF",
	"EURUSD", "USDCHF", "EURCHF",
	"GBPUSD", "USDCHF", "GBPCHF",
	"AUDUSD", "USDJPY", "AUDJPY",
	"USDCAD", "CADJPY", "USDJPY",
	"USDCHF", "CHFJPY", "USDJPY",
	"EURUSD", "USDJPY", "EURJPY",
	"GBPUSD", "USDJPY", "GBPJPY",
	"NZDUSD", "USDJPY", "NZDJPY"
};

// 是否已存在对冲订单
bool existEaOrder = false;
// 订单货币对
string symbols[] = {};
// 订单号
int orderTicket[] = {};
// 订单类型：AAB/BBA
string orderType = "";
// pips
double pips = 0;
// 手数
double lots = 0.1;

// 是否可以以AAB模式开仓
bool _aabAvailable(string& group[], double spreadCost, double digitsNumb) {

	// 开仓价格
	double priceA = MarketInfo(group[0], MODE_ASK);
	double priceB = MarketInfo(group[1], MODE_ASK);
	double priceC = MarketInfo(group[2], MODE_BID);
	if ((priceC - priceA * priceB) * digitsNumb - 0.5 * spreadCost >= pips) {
		return true;
	}
	return false;
}

// 是否可以以BBA模式开仓
bool _bbaAvailable(string& group[], double spreadCost, double digitsNumb) {

	// 开仓价格
	double priceA = MarketInfo(group[0], MODE_BID);
	double priceB = MarketInfo(group[1], MODE_BID);
	double priceC = MarketInfo(group[2], MODE_ASK);
	if ((priceA * priceB - priceC) * digitsNumb - 0.5 * spreadCost >= pips) {
		return true;
	}
	return false;
}

// 对冲订单是否符合盈利出场条件
bool canBeClosed() {

	// 点差
	double spreadA = MarketInfo(symbols[0], MODE_SPREAD);
	double spreadB = MarketInfo(symbols[1], MODE_SPREAD);
	double spreadC = MarketInfo(symbols[2], MODE_SPREAD);
	double spreadCost = spreadA + spreadB + spreadC;
	// 当前平仓价格
	double priceA = 0;
	double priceB = 0;
	double priceC = 0;
	// AAB/BBA两种情况
	if (orderType == "AAB") {
		priceA = MarketInfo(symbols[0], MODE_BID);
		priceB = MarketInfo(symbols[1], MODE_BID);
		priceC = MarketInfo(symbols[2], MODE_ASK);
		if (priceC - priceA * priceB >= 0.5 * spreadCost) {
			return true;
		}
	}
	else {
		priceA = MarketInfo(symbols[0], MODE_ASK);
		priceB = MarketInfo(symbols[1], MODE_ASK);
		priceC = MarketInfo(symbols[2], MODE_BID);
		if (priceA * priceB - priceC >= 0.5 * spreadCost) {
			return true;
		}
	}
	return false;
}

// 创建对冲订单
void createOrder(string type, string& group[]) {

	int orderA, orderB, orderC;
	string symbolA = group[0], symbolB = group[1], symbolC = group[2];
	double buyPriceA = MarketInfo(symbolA, MODE_ASK);
	double buyPriceB = MarketInfo(symbolB, MODE_ASK);
	double buyPriceC = MarketInfo(symbolC, MODE_ASK);
	double selPriceA = MarketInfo(symbolA, MODE_BID);
	double selPriceB = MarketInfo(symbolB, MODE_BID);
	double selPriceC = MarketInfo(symbolC, MODE_BID);
	if (type == "AAB") {
		orderA = OrderSend(symbolA, OP_BUY, lots, buyPriceA, 20, buyPriceA - 300, buyPriceA + 300, "", 1001, 0, CLR_NONE);
		if (orderA < 0) {
			Print("Error: ", GetLastError());
		}
		orderB = OrderSend(symbolB, OP_BUY, lots, buyPriceB, 20, buyPriceB - 300, buyPriceB + 300, "", 1002, 0, CLR_NONE);
		if (orderB < 0) {
			Print("Error: ", GetLastError());
		}
		orderC = OrderSend(symbolC, OP_SELL, lots, selPriceC, 20, selPriceC + 300, selPriceC - 300, "", 1003, 0, CLR_NONE);
		if (orderC < 0) {
			Print("Error: ", GetLastError());
		}
		return;
	}
	else if (type == "BBA") {
		orderA = OrderSend(symbolA, OP_SELL, lots, selPriceA, 20, selPriceA + 300, selPriceA - 300, "", 2001, 0, CLR_NONE);
		if (orderA < 0) {
			Print("Error: ", GetLastError());
		}
		orderB = OrderSend(symbolB, OP_SELL, lots, selPriceB, 20, selPriceB + 300, selPriceB - 300, "", 2002, 0, CLR_NONE);
		if (orderB < 0) {
			Print("Error: ", GetLastError());
		}
		orderC = OrderSend(symbolC, OP_BUY, lots, buyPriceC, 20, buyPriceC - 300, buyPriceC + 300, "", 2003, 0, CLR_NONE);
		if (orderC < 0) {
			Print("Error: ", GetLastError());
		}
		return;
	}
}

// 是否存在可盈利的对冲组合
void eaPriceAvailable() {

	for (int i = 0; i < ArrayRange(symbolGroups, 0); i ++) {
		string group[3] = {};
		group[0] = symbolGroups[i][0];
		group[1] = symbolGroups[i][1];
		group[2] = symbolGroups[i][2];
		// 点差
		double spreadA = MarketInfo(group[0], MODE_SPREAD);
		double spreadB = MarketInfo(group[1], MODE_SPREAD);
		double spreadC = MarketInfo(group[2], MODE_SPREAD);
		double spreadCost = spreadA + spreadB + spreadC;
		// 价格小数点位
		double digitsNumb = MathPow(10, MarketInfo(group[2], MODE_DIGITS));
		if (_aabAvailable(group, spreadCost, digitsNumb)) {
			createOrder("AAB", group);
			return;
		}
		else if (_bbaAvailable(group, spreadCost, digitsNumb)) {
			createOrder("BBA", group);
			return;
		}
	}
	return;
}

// 关闭对冲订单
void closeOrder() {

	// 手数
	double lotsA = 0;
	double lotsB = 0;
	double lotsC = 0;
	// 平仓价格
	double priceA = 0;
	double priceB = 0;
	double priceC = 0;

	if (OrderSelect(orderTicket[0], SELECT_BY_TICKET) == true) {
		lotsA = OrderLots();
	}
	if (OrderSelect(orderTicket[1], SELECT_BY_TICKET) == true) {
		lotsB = OrderLots();
	}
	if (OrderSelect(orderTicket[2], SELECT_BY_TICKET) == true) {
		lotsC = OrderLots();
	}
	// AAB/BBA两种情况
	if (orderType == "AAB") {
		priceA = MarketInfo(symbols[0], MODE_BID);
		priceB = MarketInfo(symbols[1], MODE_BID);
		priceC = MarketInfo(symbols[2], MODE_ASK);
	}
	else {
		priceA = MarketInfo(symbols[0], MODE_ASK);
		priceB = MarketInfo(symbols[1], MODE_ASK);
		priceC = MarketInfo(symbols[2], MODE_BID);
	}

	// 平仓
	if (!OrderClose(orderTicket[0], lotsA, priceA, 5, CLR_NONE)) {
		Print(GetLastError());
	}
	if (!OrderClose(orderTicket[1], lotsB, priceB, 5, CLR_NONE)) {
		Print(GetLastError());
	}
	if (!OrderClose(orderTicket[2], lotsC, priceC, 5, CLR_NONE)) {
		Print(GetLastError());
	}
}

//+------------------------------------------------------------------+
//| Expert initialization function                                   |
//+------------------------------------------------------------------+
int OnInit() {

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

	if (existEaOrder == true) {
		if (canBeClosed()) {
			closeOrder();
		}
	}
	else {
		eaPriceAvailable();
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