var gulp = require('gulp');
var gutil = require('gutil');
var sass = require('gulp-sass');

gulp.task('scripts', function() {
    var browserify = require('gulp-browserify'),
        reactify = require('reactify'),
        uglify = require('uglifyify');

    return gulp.src('src/app.js')
        .pipe(browserify({
            debug: true,
            extensions: ['.jsx', '.js', '.json'],
            transform: [reactify, uglify]
        }))
        .on('error', function(err) {
            gutil.log(err.message)
        })
        .pipe(gulp.dest('public'))
});

gulp.task('styles', function () {
    gulp.src('src/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public'));
});

gulp.task('watch', ['scripts'], function() {
    gulp.watch('src/**/*.js', ['scripts']);
    gulp.watch('src/**/*.scss', ['styles']);
});

gulp.task('default', ['scripts', 'styles', 'watch']);