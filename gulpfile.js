var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    plumber = require('gulp-plumber');
    browserSync = require('browser-sync').create();
    reload = browserSync.reload;

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});



// Scripts
gulp.task('scripts', function(){
    gulp.src('js/*.js')
    .pipe(plumber())
    // .pipe(uglify())
    .pipe(gulp.dest('js'));
});

//styles
gulp.task('styles', function(){
    gulp.src('css/app/main.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('css/'));

});



//Watch Task
gulp.task('watch', function(){

    gulp.watch("*.html").on("change", reload);
    gulp.watch('js/*.js', ['scripts']).on("change", reload),
    gulp.watch('css/**/*.scss', ['styles']).on("change", reload);

});

 gulp.task('default', ['scripts', 'styles', 'watch','browser-sync']);
