const gulp   = require('gulp'),
		bSync  = require('browser-sync')

gulp.task('browser-sync', function(){
	bSync({
		server: {
			baseDir: 'src'
		},
		notify: false
	});
});

// gulp.task('html', function(){
// 	return gulp.src('src/*.html')
// 		.pipe(bSync.reload({ stream: true }));
// });

// gulp.task('style', function(){
// 	return gulp.src('src/sass/**/*.sass')
// 		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
// 		//.pipe(rename({ suffix: '.min', prefix : '' }))
// 		.pipe(prefix({
// 			browsers: ['last 2 versions'],
// 			cascade: false
// 		}))
// 		.pipe(gulp.dest('src/css/'))
// 		.pipe(bSync.reload({ stream: true }));
// });

gulp.task('js', function(){
	return gulp.src('src/js/**/*.js')
		.pipe(bSync.reload({ stream: true }))
});

gulp.task('watch', function(){
	gulp.watch('src/js/**/*.js', gulp.parallel('js'));
});

gulp.task('start', gulp.parallel('browser-sync',/* 'html', 'style',*/ 'js', 'watch'));

gulp.task('production', function(){
	return gulp.src(['src/css/'],['src/js'], ['src/*.html'])
		.pipe(gulp.dest('dist'))
});