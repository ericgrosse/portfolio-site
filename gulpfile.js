"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); //Runs a local dev server
var open = require('gulp-open'); //Open a URL in a web browser
var source = require('vinyl-source-stream'); // Use conventional text streams with Gulp
var concat = require('gulp-concat'); //Concatenates files
var lint = require('gulp-eslint'); //Lint JS files, including JSX
var clean = require('gulp-clean');
var responsive = require('gulp-responsive');
var sass = require('gulp-sass');

var config = {
	port: 9005,
	devBaseUrl: 'http://localhost',
	paths: {
		html: './src/*.html',
		js: './src/*.js',
		images: './src/images/*',
		css: './src/*.scss',
		vendorCSS: [
      		'node_modules/bootstrap/dist/css/bootstrap.min.css',
      		'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
      		'node_modules/toastr/toastr.css',
      		'./src/vendor-css/*'
    	],
		dest: './dest'
	}
}

//Start a local development server
gulp.task('connect', function() {
	connect.server({
		root: ['dest'],
		port: config.port,
		base: config.devBaseUrl,
		livereload: true
	});
});

gulp.task('open', ['connect'], function() {
	gulp.src('dest/index.html')
		.pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/'}));
});

gulp.task('html', function() {
	gulp.src(config.paths.html)
		.pipe(gulp.dest(config.paths.dest))
		.pipe(connect.reload());
});

gulp.task('js', function() {
	gulp.src(config.paths.js)
		.pipe(gulp.dest(config.paths.dest))
		.pipe(connect.reload());
});

gulp.task('vendor-css', function() {
	gulp.src(config.paths.vendorCSS)
	.pipe(concat('vendor.css'))
	.pipe(gulp.dest(config.paths.dest));
});

gulp.task('css', function() {
  gulp.src(config.paths.css)
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('styles.css'))
    .pipe(gulp.dest(config.paths.dest))
    .pipe(connect.reload());
});

gulp.task('images', function () {
    gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.dest + '/images'))
        .pipe(connect.reload());

    gulp.src('./src/favicon.ico')
        .pipe(gulp.dest(config.paths.dest));
});

/*gulp.task('lint', function() {
	return gulp.src(config.paths.js)
		.pipe(lint({config: 'eslint.config.json'}))
		.pipe(lint.format());
});*/

gulp.task('watch', function() {
	gulp.watch(config.paths.html, ['html']);
	gulp.watch(config.paths.js, ['js']); // Can also include lint
	gulp.watch(config.paths.css, ['css']);
});

gulp.task('default', ['html', 'js', 'vendor-css', 'css', 'images', 'open', 'watch']); // Can also include lint

gulp.task('clean', function() {
	return gulp.src(config.paths.dest + '/*', {read: false})
	.pipe(clean());
});

gulp.task('resize-images', function() {
	return gulp.src('./src/images_raw/*.{jpg,jpeg,png}')
	.pipe(responsive({
		'*': {
			width: 1000,
			height: 1000
		}
	}, {
		quality: 100, progressive: true, withMetadata: false
	}))
	.pipe(gulp.dest('./src/images'));
});