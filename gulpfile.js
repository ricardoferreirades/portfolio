var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');

var js = [
    './src/js/*'
];

var pluginsjs = [
  './src/js/plugins/*'  
];

var css = [
    './src/css/*'
];

gulp.task('scripts', function(){
    gulp.src(js)
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});


gulp.task('styles', function(){
    gulp.src(css)
    .pipe(concat('style.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('default',['scripts','styles']);

gulp.task('watch', function() {
    gulp.watch([js,css],['scripts','styles']);
});