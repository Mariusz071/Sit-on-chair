const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
const c = require('ansi-colors');
const notifier = require('node-notifier');

//ERROR DISPLAY
function showError(err) {
    notifier.notify(
        {
            title: 'Blad kompilacji',
            message: err.messageFormatted
        },
    );
    console.log(c.red('==================='));
    console.log(c.red(err.messageFormatted));
    console.log(c.red('==================='));
    this.emit('end');

}

//BROWSER SYNC
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

//SASS
gulp.task('sass', function () {
    return gulp.src('./scss/main.scss')
        .pipe(plumber( {
            errorHandler : showError
        }))
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: "expanded" //nested, expanded, compact, compressed
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest('./css')) // sciezka do css
        .pipe(browserSync.stream())
});


//SASS:WATCH
gulp.task('watch', function () {
    gulp.watch('./scss/**/*.scss', ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('default', function () {
    gulp.start(['browser-sync', 'sass', 'watch']);
});
