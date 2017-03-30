var gulp = require('gulp');
var less = require('gulp-less');
var cleancss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var fs = require('fs');

var lessFiles = './resources/public/less/**/*.less';
var cssDirectory  = './resources/public/css/';
var jspDirectory = './WEB-INF/views/webstore/';
var jsFiles = ['./resources/webstore/js_dev/**/*.js', '!./resources/webstore/js_dev/home/*.js'];
var jsHome = './resources/webstore/js_dev/home/*.js';
var jsDirectory = './resources/webstore/js';

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
// 压缩、合并home文件夹下的js文件
gulp.task('concathome', function() {

	gulp
		.src(jsHome)
		.pipe(uglify())
		.pipe(concat('home.js'))
		.pipe(gulp.dest(jsDirectory + '/home/'));
});
// 监测js文件变化
gulp.task('watchjs', function() {

	gulp.watch(jsFiles, ['uglifyjs']);
	gulp.watch(jsHome, ['concathome']);
});

// 生成新的静态资源版本号
gulp.task('rev', function() {

	fs.readdir(jspDirectory, function(err, files) {

		if (err) throw err;
		var reg = new RegExp('\\?v=[0-9]+', 'g');
		var newVersion = '?v=' + Date.now().toString();
		files.forEach(function(fileName) {
			fs.readFile(jspDirectory + fileName, 'utf8', function(err, fileContent) {
				if (err) throw err;
				var newContent = fileContent.replace(reg, newVersion);
				fs.writeFile(jspDirectory + fileName, newContent, 'utf8', function(err) {
					if (err) throw err;
					console.log(fileName + ' ok');
				});
			});
		});
	});
});

gulp.task('default', ['watchless', 'watchjs']);