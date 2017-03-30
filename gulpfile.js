var gulp = require('gulp');
var less = require('gulp-less');
var cleancss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var fs = require('fs');

var lessFiles = './dev/less/**/**/*.less';
var cssDirectory  = './public/css/';
var viewDirectory = './views/';
var jsDevFiles = './dev/js/**/**/*.js';
var jsDirectory = './public/js';

// 编译less文件
gulp.task('compileLess', function() {

	gulp
		.src(lessFiles)
		.pipe(less())
		.pipe(cleancss())
		.pipe(gulp.dest(cssDirectory));
});
// 监测less文件变化
gulp.task('watchless', function() {

	gulp.watch(lessFiles, ['compileLess']);
});

// 压缩js文件
gulp.task('uglifyjs', function() {

	gulp
		.src(jsFiles)
		.pipe(uglify())
		.pipe(gulp.dest(jsDirectory));
});
// 监测js文件变化
gulp.task('watchjs', function() {

	gulp.watch(jsDevFiles, ['uglifyjs']);
});

// // 生成新的静态资源版本号
// gulp.task('rev', function() {

// 	fs.readdir(viewDirectory, function(err, files) {

// 		if (err) throw err;
// 		var reg = new RegExp('\\?v=[0-9]+', 'g');
// 		var newVersion = '?v=' + Date.now().toString();
// 		files.forEach(function(fileName) {
// 			fs.readFile(viewDirectory + fileName, 'utf8', function(err, fileContent) {
// 				if (err) throw err;
// 				var newContent = fileContent.replace(reg, newVersion);
// 				fs.writeFile(viewDirectory + fileName, newContent, 'utf8', function(err) {
// 					if (err) throw err;
// 					console.log(fileName + ' ok');
// 				});
// 			});
// 		});
// 	});
// });

gulp.task('default', ['watchless', 'watchjs']);