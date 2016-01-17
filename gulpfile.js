var gulp = require('gulp');
var flatten = require('gulp-flatten');
var notify = require('gulp-notify');
var webserver = require('gulp-webserver');
var concat = require('gulp-concat');

// Task for moving index.html 
// and html templates to the dist folder
gulp.task('move', function(){

	//	Set the source
	gulp.src(['./src/index.html'])
	//	Pipe it and store it in the dist folder
	.pipe(gulp.dest('./dist'))
	//	Notify the user
	.pipe(notify('Moved index.html'));


	// Set the source. You can exclude files with !
	gulp.src(['!./src/index.html', './src/**/*.html'])
	// Remove any relative folders, subfolders
	.pipe(flatten())
	.pipe(gulp.dest('./dist/templates'))
	.pipe(notify('Moved templates'));

});

//	Task for concating and moving all js files
gulp.task('scripts', function(){

	gulp.src(['./src/app.js', './src/**/*.js'])
	// Concat all the js files into a single all.js file
	.pipe(concat('all.js'))
	.pipe(gulp.dest('./dist/js'))
	.pipe(notify('Generated all.js'));

});
// Task for moving css files
gulp.task('stylesheets', function(){

	gulp.src(['./src/app.css', './src/**/*.css'])
	// Concat all the css files into a single all.css file
	.pipe(concat('all.css'))
	.pipe(gulp.dest('./dist/css'))
	.pipe(notify('Generated all.css'));
});
// Task for moving images
gulp.task('images', function(){

	gulp.src(['./src/images/**'])
	.pipe(gulp.dest('./dist/img'))
	.pipe(notify('Images moved'));
});
//	Task for running a webserver
gulp.task('serve', function(){

	gulp.src('.')
	// Start a webserver with livereload on localhost:48080
	.pipe(webserver({
		port: 48080,
		livereload: true
		// open: 'http://localhost:48080/dist/'
	}));

});

//	Task for running watchers. When watch is called
//	the serve task will be called as well
gulp.task('watch', ['serve'], function(){

	//	Run tasks on start
	gulp.start(['scripts', 'move', 'stylesheets', 'images']);

	//	Create a watcher that will run the scripts task
	//	anytime a .js file changes
	gulp.watch(['./src/**/*.js'], ['scripts']);
	gulp.watch(['./src/**/*.html'], ['move']);
	gulp.watch(['./src/**/*.css'], ['stylesheets']);
	gulp.watch(['./src/images/**'], ['images']);
});






 