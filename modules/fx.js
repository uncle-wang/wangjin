var db = require('./../database');
var dw = require('./../datawrap');

// 查询分类列表
var getCategoryList = function(req, res) {

	db('select * from public.category', res);
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
		db('INSERT INTO public.category(' + column + ') VALUES (' + value + ')', res);
	}
	else {
		dw.sendError(res, 'PARAMERROR');
	}
};

// 删除分类
var removeCategory = function(req, res) {

	var categoryId = req.query.categoryId;
	if (categoryId) {
		db('DELETE FROM public.item WHERE category_id=' + categoryId, res, function(data) {
			db('DELETE FROM public.category WHERE id=' + categoryId, res);
		});
	}
	else {
		dw.sendError(res, 'PARAMERROR');
	}
};

// 查询item列表
var getItemListByCategoryId = function(req, res) {

	var categoryId = req.query.categoryId;
	if (categoryId) {
		db('SELECT * FROM public.item WHERE category_id=' + categoryId, res);
	}
	else {
		dw.sendError(res, 'PARAMERROR');
	}
};

// 删除item
var removeItem = function(req, res) {

	var itemId = req.query.itemId;
	if (itemId) {
		db('DELETE FROM public.item WHERE id=' + itemId, res);
	}
	else {
		dw.sendError(res, 'PARAMERROR');
	}
};

// 增加item
var addItem = function(req, res) {

	var categoryId = req.query.categoryId;
	var itemName = req.query.itemName;
	var notes = req.query.notes;
	var description = req.query.description;
	if (categoryId && itemName) {
		var column = 'name, category_id';
		var value = '\'' + itemName + '\', ' + categoryId;
		if (description) {
			column += ', description';
			value += ', \'' + description + '\'';
		}
		if (notes) {
			notes = notes.replace('[', '{');
			notes = notes.replace(']', '}');
			column += ', notes';
			value += ', \'' + notes + '\'';
		}
		db('INSERT INTO public.item(' + column + ') VALUES (' + value + ')', res);
	}
	else {
		dw.sendError(res, 'PARAMERROR');
	}
};

// return
module.exports = {

	addItem: addItem,
	removeItem: removeItem,
	addCategory: addCategory,
	removeCategory: removeCategory,
	getCategoryList: getCategoryList,
	getItemListByCategoryId: getItemListByCategoryId
};