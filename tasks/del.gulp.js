const gulp = require('gulp')
const del = require('del')

gulp.task('clean', async function() {
    await del(['dist', 'debug.log'])
})

gulp.task('clean:cache', async function() {
    await del(['.cache'])
})