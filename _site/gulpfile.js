var gulp = require('gulp');

gulp.task('run',function(){
  gulp.src('./assets/src/default.js')
      .pipe(gulp.dest('./assets/dist'))
})
