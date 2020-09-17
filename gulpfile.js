const gulp = require('gulp')
require('require-dir')('./tasks')

gulp.task('build', gulp.series('generatecss', 'eleventy:build'))
gulp.task('serve', gulp.series('build', gulp.parallel('watchcss', 'eleventy:serve')))