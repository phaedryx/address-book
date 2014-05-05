var gulp = require('gulp');

var coffee = require('gulp-coffee');

var paths = {
  source: ['./src/coffeescript/*.coffee'],
  destination: './public/js'
};

gulp.task('compile', function() {
  return gulp.src(paths.source)
    .pipe(coffee())
    .pipe(gulp.dest(paths.destination));
});

gulp.task('watch', function() {
  gulp.watch(paths.source, ['compile']);
});

gulp.task('default', ['compile']);
