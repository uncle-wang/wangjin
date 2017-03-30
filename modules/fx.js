var fs = require('fs');
var fp = require('./../filepath');

var data = JSON.parse(fs.readFileSync(fp.config('fx_data'), 'utf8'));

var getData = function() {

	return data;
};

var getCategoryList = function() {

	return data.categoryList;
};

var getItemListByCategoryId = function(categoryId) {

	var itemList = [];
	var allItems = data.itemList;
	for (var i = 0; i < allItems.length; i ++) {
		var item = allItems[i];
		if (item.categoryId === categoryId) {
			itemList.push(item);
		}
	}
	return itemList;
};

module.exports = {

	getData: getData,
	getCategoryList: getCategoryList,
	getItemListByCategoryId: getItemListByCategoryId
};