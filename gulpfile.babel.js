/**
* To use gulp.babel.js for gulp's file name makes us write gulpfile.js with ES6
*/
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import webpackConfig from './webpack.config.js';


const $ = gulpLoadPlugins();

gulp.task('default', () => {
  gulp.src('./src/jsx/**/*.jsx')
    .pipe($.webpack(webpackConfig))
    .pipe(gulp.dest('./dist/jsx/'));
});

// gulp.task('default', () => {
//   gulp.src('./src/js/**/*.js')
//   .pipe($.webpack(webpackConfig))
//   .pipe(gulp.dest('./dist/js/'));
// });

// gulp.task('default', () => {
//   gulp.src('src/js/**/*.js')
//     .pipe($.babel())
//     .pipe(gulp.dest('dist/js'));
// });
