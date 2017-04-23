// 是否已存在对冲订单
bool existEaOrder() {

	//
}

// 对冲订单是否符合盈利出场条件
bool canBeClosed() {

	//
}

// 是否存在可盈利的对冲组合
bool eaPriceAvailable() {

	//
}

// 创建对冲订单
void createOrder() {

	//
}

// 关闭对冲订单
void closeOrder() {

	//
}

void tick() {

	if (existEaOrder()) {
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