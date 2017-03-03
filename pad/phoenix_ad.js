var TPA = (function() {

	var
		// 轮询间隔时间
		_interval = 1000;

	// 选择器封装
	var _$ = function(selectorStr) {
	
		var wrap = function(selectorStr) {

			this.dom = document.querySelectorAll(selectorStr);
			this.selector = selectorStr;
		};

		wrap.prototype.empty = function() {
			// body...
		};

		var instance = new wrap(selectorStr);
		return instance;

	};

}());