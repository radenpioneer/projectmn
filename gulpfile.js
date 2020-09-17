const gulp = require('gulp')
require('require-dir')('./tasks')

gulp.task('build', gulp.series('eleventy:build'))
gulp.task('serve', gulp.series('clean', 'eleventy:serve'))