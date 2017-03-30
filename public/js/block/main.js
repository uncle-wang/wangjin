var setBox = function() {

	var
		body = $('body'),
		box = $('#ui_box');
	box
		.attr('width', body.width())
		.attr('height', body.height() - 4);
};

var CONFIG = {

	stepUnit: 20,
	scoreUnit: 10,
	colors: ['red', 'yellow', 'green', 'orange', 'blue', 'purple', 'light'],
	shapes: [
		[[1, 1, 1, 1]],
		[[1, 1], [1, 1]],
		[[0, 1, 0], [1, 1, 1]],
		[[1, 1, 0], [0, 1, 1]],
		[[0, 1, 1], [1, 1, 0]],
		[[1, 1, 1], [1, 0, 0]],
		[[1, 1, 1], [0, 0, 1]]
	]
};

(function() {

	setBox();
}());