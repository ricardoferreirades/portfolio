var js = [
    './build/js/*'
];

var css = [
  './build/css/*'  
];

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var cssmin = require('gulp-cssmin');
var concat = require('gulp-concat');
var stripCssComments = require('gulp-strip-Css-Comments');

gulp.task('minify-css', function(){
    gulp.src(css)
    .pipe(concat('main.css'))
    .pipe(stripCssComments({all:true}))
    .pipe(cssmin())
    .pipe(gulp.dest('./view/assets/css/'));
});

gulp.task('minify-js', function(){
    gulp.src(js)
    .pipe(uglify().on('error', function(e) { console.log('\x07',e.message); return this.end(); }))
    .pipe(concat('script.min.js'))
    .pipe(gulp.dest('./view/assets/js/'));
});

gulp.task('default',['minify-js','minify-css']);

gulp.task('watch', function() {
    gulp.watch(js, ['minify-js','minify-css']);
});