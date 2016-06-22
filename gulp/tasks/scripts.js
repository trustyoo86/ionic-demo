var gulp = require('gulp');
var gulpif = require('gulp-if');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var stripDebug = require('gulp-strip-debug');
var sourcemaps = require('gulp-sourcemaps');

//config file
var bowerConfig = require('../config/bowerConfig');
var scriptConfig = require('../config/scriptConfig');
/**
 * @name combine-js
 * @description javascript file을 하나로 합치고 압축한다.
 */
gulp.task('combine-js', function () {
  //bower plugin file들을 build한다.
  gulp.src(bowerConfig.src)
    .pipe(gulpif(global.isProd, uglify()))
    .pipe(concat(bowerConfig.concat))
    .pipe(gulp.dest(bowerConfig.dest));
  //개발용 script file을 build한다.
  gulp.src(scriptConfig.src)
    .pipe(gulpif(global.isProd, stripDebug()))
    .pipe(gulpif(global.isProd, uglify()))
    .pipe(jshint())
    .pipe(gulpif(!global.isProd, sourcemaps.init()))
    .pipe(concat(scriptConfig.concat))
    .pipe(gulpif(!global.isProd, sourcemaps.write()))
    .pipe(gulp.dest(scriptConfig.dest));
});
