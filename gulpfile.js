var gulp = require('gulp');
var imageMin = require('gulp-imagemin');
var minifyJs = require('gulp-minify');
var minifycss = require('gulp-minify-css');
var concat = require('gulp-concat');

gulp.task('imgMinify', function() {
    gulp.src('./img/*')
        .pipe(imageMin())
        .pipe(gulp.dest('./img/'));
});

gulp.task('cssmin', function() {
    return gulp.src('./style/**/*.css')
        .pipe(minifycss())
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('./style/min/'));
});


