// var gulp = require('gulp');
// var gutil = require('gulp-util');
// var bower = require('bower');
// var concat = require('gulp-concat');
// var sass = require('gulp-sass');
// var minifyCss = require('gulp-minify-css');
// var rename = require('gulp-rename');
// var sh = require('shelljs');
//
// var paths = {
//   sass: ['./scss/**/*.scss']
// };
//
// gulp.task('default', ['sass']);
//
// gulp.task('sass', function(done) {
//   gulp.src('./scss/ionic.app.scss')
//     .pipe(sass())
//     .on('error', sass.logError)
//     .pipe(gulp.dest('./www/css/'))
//     .pipe(minifyCss({
//       keepSpecialComments: 0
//     }))
//     .pipe(rename({ extname: '.min.css' }))
//     .pipe(gulp.dest('./www/css/'))
//     .on('end', done);
// });
//
// gulp.task('watch', function() {
//   gulp.watch(paths.sass, ['sass']);
// });
//
// gulp.task('install', ['git-check'], function() {
//   return bower.commands.install()
//     .on('log', function(data) {
//       gutil.log('bower', gutil.colors.cyan(data.id), data.message);
//     });
// });
//
// gulp.task('git-check', function(done) {
//   if (!sh.which('git')) {
//     console.log(
//       '  ' + gutil.colors.red('Git is not installed.'),
//       '\n  Git, the version control system, is required to download Ionic.',
//       '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
//       '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
//     );
//     process.exit(1);
//   }
//   done();
// });
'use strict';

/**
 * 	gulpfile.js
 * 	===================
 * 	gulp에 관련된 task는 ./gulp 에서 관리
 * 	여기서는 gulp task를 require 함.
 */
/**
 * development, production 모드에 따라 global 변수 변경
 * @type {Boolean} isProd production모드인지 확인 true : production mode / false : development mode
 */
global.isProd = false;

require('./gulp');
