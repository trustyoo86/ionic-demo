'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var gulpif = require('gulp-if');
var autoprefixer = require('gulp-autoprefixer');
//config
var styleConfig = require('../config/styleConfig');

gulp.task('compile-sass', function () {
  // gulp.src(styleConfig.vendor.src)
  //   .pipe(concat(styleConfig.vendor.concat))
  //   .pipe(gulp.dest(styleConfig.vendor.dest));

  gulp.src(styleConfig.dev.src)
    .pipe(sass())
    .pipe(concat(styleConfig.dev.concat))
    .pipe(autoprefixer("last 2 versions", "> 1%", "ie 9"))
    .pipe(gulp.dest(styleConfig.dev.dest));
});
