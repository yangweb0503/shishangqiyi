//导入所引用的模块
var gulp = require("gulp");	//基础库
var sass = require("gulp-sass");	// sass/css编译
var uglify = require("gulp-uglify"); //压缩&重命名JS
var browserSync = require('browser-sync').create(); //自动刷新
var autoprefixer = require('gulp-autoprefixer');//自动添加css3浏览器前缀
var changed = require('gulp-changed');//只操作有过修改的文件 对sass文件无效
							
//将所有html文件整理至dist文件夹下
gulp.task('html',function(){
	return gulp.src('src/**/*.html')//指定源文件路径，并进行文件匹配
		.pipe(changed('dist')) // 对比文件是否有过改动（此处填写的路径和输出路径保持一致）
		.pipe(gulp.dest('dist'));//输出路径
});

//css预处理附加css3兼容前缀
gulp.task('sass',function(){
	return gulp.src('src/sass/**/*.scss')
		.pipe(sass({outputStyle:'expanded'}).on('error',sass.logError))
		.pipe(autoprefixer({ 		//自动补全css3属性前缀
				browsers:['last 2 versions','Android >= 4.0'],//主流浏览器的最新两个版本
				cascade:true//是否美化属性值
			})
		)
		//编译后的css排列风格以及报错输出
		.pipe(gulp.dest('dist/css'))//输出到开发路径
		.pipe(gulp.dest('src/css'))//输出到路径
});

//JS压缩&重命名
gulp.task('script',function(){
	return gulp.src('src/js/*.js')//指定源文件路径、进行文件匹配
		.pipe(changed('dist/js')) // 对比文件是否有过改动（此处填写的路径和输出路径保持一致）
		.pipe(uglify({preserveComments:'some'}))//使用uglify进行压缩，并保留部分注释
		.pipe(gulp.dest('dist/js'))//输出路径
});

//启动本地测试服务器并监视文件改动
gulp.task('serve',function(){
	browserSync.init({
		server:"./src"
	});
	gulp.watch("src/js/*.js",['script']).on('change',browserSync.reload);//检测js改动并压缩刷新
	gulp.watch("src/sass/*.scss",['sass']).on('change',browserSync.reload);//检测scss改动并编译刷新
	gulp.watch("src/*.html",['html']).on('change',browserSync.reload);//检测html改动并刷新
});

//默认任务
gulp.task('default',['html','script','sass','serve']);