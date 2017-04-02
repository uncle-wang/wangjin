var fs = require('fs');
var fp = require('./../filepath');
var db = require('./../database');
var dw = require('./../datawrap');

// 数据文件路径
var configFileName = fp.config('fx_data');

// 从文件读取数据
var data = JSON.parse(fs.readFileSync(configFileName, 'utf8'));

// id自增
var _selfIncrease = function(id) {

	var prefix = '';
	var newIdNumber = (Number(id) + 1).toString();
	var prefixLength = 8 - newIdNumber.length;
	while (prefixLength > 0) {
		prefix += '0';
		prefixLength --;
	}
	return prefix + newIdNumber;
};

// 保存文件
var _save = function() {

	fs.writeFileSync(configFileName, JSON.stringify(data), 'utf8');
};

// 查询分类列表
var getCategoryList = function(req, res) {

	db('select * from public.category', function(data) {
		dw.sendData(res, data);
	});
};

// 增加分类
var addCategory = function(req, res) {

	var categoryName = req.query.categoryName;
	var description = req.query.description;
	if (categoryName) {
		var column = 'name';
		var value = '\'' + categoryName + '\'';
		if (description) {
			column += ', description';
			value += ', \'' + description + '\'';
		} 
		db('INSERT INTO public.category(' + column + ') VALUES (' + value + ')', function(data) {
			dw.sendData(res);
		});
	}
	else {
		dw.sendError(res, 'PARAMERROR');
	}
};

// 删除分类
var removeCategory = function(categoryId) {

	// 删除当前category下的所有item
	var itemList = data.itemList;
	var i = 0;
	while (i < itemList.length) {
		if (itemList[i].categoryId === categoryId) {
			itemList.splice(i, 1);
		}
		else {
			i ++;
		}
	}
	// 删除当前category
	var categoryList = data.categoryList;
	for (var j = 0; j < categoryList.length; j ++) {
		if (categoryList[j].id === categoryId) {
			categoryList.splice(j, 1);
			break;
		}
	}
	_save();
};

// 判断分类是否存在
var exsistCategory = function(categoryId) {

	var categoryList = data.categoryList;
	for (var i = 0; i < categoryList.length; i ++) {
		if (categoryList[i].id === categoryId) {
			return true;
		}
	}
	return false;
};

// 查询item列表
var getItemListByCategoryId = function(req, res) {

	var categoryId = req.query.categoryId;
	if (categoryId) {
		db('SELECT * FROM public.item WHERE category_id=' + categoryId, function(data) {
			dw.sendData(res, data);
		});
	}
	else {
		dw.sendError(res, 'PARAMERROR');
	}
};

// 删除item
var removeItem = function(itemId) {

	var itemList = data.itemList;
	for (var i = 0; i < itemList.length; i ++) {
		if (itemList[i].id === itemId) {
			itemList.splice(i, 1);
			break;
		}
	}
	_save();
};

// 判断item是否存在
var exsistItem = function(itemId) {

	var itemList = data.itemList;
	for (var i = 0; i < itemList.length; i ++) {
		if (itemList[i].id === itemId) {
			return true;
		}
	}
	return false;
};

// 增加item
var addItem = function(categoryId, itemName) {

	var itemIndex = data.index.item;
	var itemId = _selfIncrease(itemIndex);
	data.itemList.push({id: itemId, categoryId: categoryId, name: itemName});
	data.index.item = itemId;
	_save();
};

// return
module.exports = {

	addItem: addItem,
	removeItem: removeItem,
	exsistItem: exsistItem,
	addCategory: addCategory,
	removeCategory: removeCategory,
	exsistCategory: exsistCategory,
	getCategoryList: getCategoryList,
	getItemListByCategoryId: getItemListByCategoryId
};