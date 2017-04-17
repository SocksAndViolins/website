var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    cssbeautify = require('gulp-cssbeautify');

gulp.task('sass', function() {
  gulp.src('./_sass/*.scss')
    .pipe(sass()).on('error', sass.logError)
    .pipe(concat('style.css'))
    .pipe(cssbeautify({
      indent: ' ',
      openbrace: 'end-of-line',
      autosemicolon: true
    }))
    .pipe(gulp.dest('assets/css/'))
});

gulp.task('default', function(){
  gulp.start('sass');
});
