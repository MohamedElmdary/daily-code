const DAY = 'DAY_NAME';
const gulp = require('gulp');
const ejs = require('gulp-ejs');
const rename = require('gulp-rename');
const sass = require('gulp-sass');

gulp.task('ejs', async () => {
  return gulp
    .src(`${DAY}/index.ejs`)
    .pipe(ejs(require(`${DAY}/data.json`), { async: true }))
    .pipe(rename({ extname: '.html' }))
    .pipe(gulp.dest('dist'));
});

gulp.task('sass', async () => {
  return gulp
    .src('src/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename({ extname: '.css' }))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', async () => {
  return gulp.watch(`${DAY}/**/*.*`, gulp.series('ejs', 'sass'));
});
