var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var browserSync = require('browser-sync').create();

gulp.task('default', ['watch', 'style', 'script']);

gulp.task('watch', function() {
    browserSync.init({
        notify: false,
        server: {
            baseDir: "docs"
        }
    });
    gulp.watch('docs/index.html', function(){
        browserSync.reload();
    });
    gulp.watch('docs/assets/scss/*.scss', ['style']);
    gulp.watch('docs/assets/js/main.js', ['script']);
});

gulp.task('style', function() {
    return gulp.src('docs/assets/scss/style.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer('last 3 versions'))
        .pipe(gulp.dest('docs/dist/css'))
        .pipe(browserSync.stream());
});

gulp.task('script', function() {
    return gulp.src('docs/assets/js/main.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('docs/dist/js'))
        .pipe(browserSync.stream());
});