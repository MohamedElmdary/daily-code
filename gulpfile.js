const DAY = 'day_001';
const gulp = require('gulp');
const ejs = require('gulp-ejs');
const rename = require('gulp-rename');
const sass = require('gulp-sass');

gulp.task('ejs', async () => {
  const DATA = require(`./${DAY}/data/data.js`);
  return gulp
    .src(`${DAY}/index.ejs`)
    .pipe(ejs(DATA, { async: true }))
    .pipe(rename({ extname: '.html' }))
    .pipe(gulp.dest('dist'));
});

gulp.task('sass', async () => {
  return gulp
    .src(`${DAY}/scss/**/*.*`)
    .pipe(sass().on('error', sass.logError))
    .pipe(rename({ extname: '.css' }))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('js', async () => {
  return gulp.src(`${DAY}/js/*`).pipe(gulp.dest('dist/js'));
});

gulp.task('watch', async () => {
  return gulp.watch(`${DAY}/**/*.*`, gulp.series('ejs', 'sass', 'js'));
});

gulp.task('build', gulp.series('ejs', 'sass', 'js'));
