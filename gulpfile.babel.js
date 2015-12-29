/**
* To use gulp.babel.js for gulp's file name makes us write gulpfile.js with ES6
*/

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins'

const $ = gulpLoadPlugins();

gulp.task('script', () => {
  gulp.src('src/js/**/*.js')
    .pipe($.babel())
    .pipe(gulp.dest('dist/js'))
});
