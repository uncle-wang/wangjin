// ajax
var _ajax = function(configs) {

	var config = {

		url: '/api/fx/' + configs.api,
		data: configs.data || {}
	};

	if (configs.success) {
		config.success = function(res) {
			if (res.status === 0) {
				configs.success(res.data);
			}
		};
	}

	$.ajax(config);
};

// 视图切换
var _pagePanel = (function() {

	var _hideAll = function() {
		$('.content>*').hide();
	};
	return {

		showCategoryList: function() {
			_hideAll();
			$('#content_title').text('项目类别');
			$('#category_list').show();
		},
		showItemList: function() {
			_hideAll();
			$('#content_title').text('项目列表');
			$('#item_list').show();
		},
		showItemDetail: function() {
			_hideAll();
			$('#content_title').text('项目详情');
			$('#item_detail').show();
		}
	};
}());

// category
var category = (function() {

	var showCacheList = function() {

		_pagePanel.showCategoryList();
	};

	var showList = function() {

		_ajax({
			api: 'getCategoryList',
			success: function(data) {
				var categoryList = $('#category');
				categoryList.empty();
				for (var i = 0; i < data.length; i ++) {
					var item = $('<li class="item" id="category_' + data[i].id + '"><div class="item-name">' + data[i].name + '</div></li>');
					categoryList.append(item);
				}
				categoryList.children('li').click(function() {
					var categoryId = $(this).attr('id').substr(9);
					Item.showList(categoryId);
				});
				_pagePanel.showCategoryList();
			}
		});
	};

	return {

		showCacheList: showCacheList,
		showList: showList
	};
}());

// item
var Item = (function() {

	var items = [];

	var _getItem = function(itemId) {

		for (var i = 0; i < items.length; i ++) {
			var item = items[i];
			if (item.id === parseInt(itemId)) {
				return item;
				break;
			}
		}
		return null;
	};

	var showCacheList = function() {

		_pagePanel.showItemList();
	};

	var showList = function(categoryId) {

		var self = this;
		_ajax({
			api: 'getItemListByCategoryId',
			data: {categoryId: categoryId},
			success: function(data) {
				var itemList = $('#item');
				itemList.empty();
				items = data;
				for (var i = 0; i < data.length; i ++) {
					var item = $('<li class="item" id="item_' + data[i].id + '"><div class="item-name">' + data[i].name + '</div></li>');
					itemList.append(item);
				}
				itemList.children('li').click(function() {
					var itemId = $(this).attr('id').substr(5);
					var item = _getItem(itemId);
					alert(JSON.stringify(item));
				});
				_pagePanel.showItemList();
			}
		});
	};

	return {

		showCacheList: showCacheList,
		showList: showList
	};
}());

// 初始化时间
var initCopyright = function() {

	var toYear = $('#toyear');
	var dateTime = new Date();
	toYear.text(dateTime.getFullYear());
};

(function() {

	$('#item_list .btn-close').click(function() {

		category.showCacheList();
	});

	category.showList();
	initCopyright();
}());