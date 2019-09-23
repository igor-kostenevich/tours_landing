const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const del = require('del');
const browsersSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
//const sass = require('gulp-sass');
const less = require('gulp-less');
const imagemin = require('gulp-imagemin');

const styleFiles = [
        './src/css/main.less',
        './src/css/media.less'
 ]

const scriptsFiles = [
    './src/js/main.js',
    './src/js/validate.js'
]

gulp.task('styles', () => {
    return gulp.src(styleFiles)
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(concat('style.css'))
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false
    }))
    .pipe(cleanCSS({
        level: 2
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./build/css'))
    .pipe(browsersSync.stream());
});

gulp.task('scripts', () => {
    return gulp.src(scriptsFiles)
    // .pipe(concat('script.js'))
    //uglify
    .pipe(uglify({
        toplevel: true
    }))
    .pipe(gulp.dest('./build/js'))
    .pipe(browsersSync.stream());
});

gulp.task('del', () => {
    return del(['build/*'])
});

gulp.task('img-compress', () => {
    return gulp.src('./src/img/**')
    .pipe(imagemin({
        proggressive: true
    }))
    .pipe(gulp.dest('./build/img/'))
})

gulp.task('watch', () => {
    browsersSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('./src/img/**', gulp.series('img-compress'))
    gulp.watch('./src/css/**/*.less', gulp.series('styles'))
    gulp.watch('./src/js/**/*.js', gulp.series('scripts'))
    gulp.watch("./*.html").on('change', browsersSync.reload);
});

gulp.task('default', gulp.series('del', gulp.parallel('styles', 'scripts', 'img-compress'), 'watch'));