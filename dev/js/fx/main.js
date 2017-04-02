// ajax
var ajax = function(configs) {

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

var showCateogries = function() {

	ajax({

		api: 'getCategoryList',
		success: function(data) {
			$('.content>*').hide();
			$('#category_list').show();
			$('#content_title').text('项目类别');
			var categoryList = $('#category');
			categoryList.empty();
			for (var i = 0; i < data.length; i ++) {
				var item = $('<li class="item"><div class="item-name">' + data[i].name + '</div></li>');
				categoryList.append(item);
			}
			categoryList.children('li').click(function() {
				var categoryId = data[$(this).index()].id;
				showItems(categoryId);
			});
		}
	});
};

var showItems = function(categoryId) {

	ajax({

		api: 'getItemListByCategoryId',
		data: {categoryId: categoryId},
		success: function(data) {
			$('.content>*').hide();
			$('#item_list').show();
			$('#content_title').text('项目列表');
			var itemList = $('#item');
			itemList.empty();
			for (var i = 0; i < data.length; i ++) {
				var item = $('<li class="item"><div class="item-name">' + data[i].name + '</div></li>');
				itemList.append(item);
			}
			itemList.children('li').click(function() {
				var itemId = data[$(this).index()].id;
				showItem(itemId);
			});
		}
	});
};

var showItem = function(itemId) {

	ajax({

		api: 'getItem',
		data: {itemId: itemId},
		success: function(data) {
			$('.content>*').hide();
			console.log(data);
			$('#content_title').text('项目列表');
		}
	});
};

// 初始化时间
var initCopyright = function() {

	var toYear = $('#toyear');
	var dateTime = new Date();
	toYear.text(dateTime.getFullYear());
};

(function() {

	showCateogries();
	initCopyright();
}());