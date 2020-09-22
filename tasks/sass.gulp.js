require('dotenv').config()
const gulp = require('gulp')
const replace = require('gulp-replace')
const pipeline = require('readable-stream').pipeline
const changed = require('gulp-changed')
const purge = require('gulp-purgecss')
const gulpif = require('gulp-if')

//compiler for sass files
const sass = require('gulp-sass')
sass.compiler = require('sass')

//PostCSS
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const importcss = require('postcss-import-url')

const SRC = './src/_sass/style.scss'
const DEST = './src/_includes/partials/style/'
const WATCH = './src/_sass/*.scss'

gulp.task('generatecss', function() {
    let processors = [
        autoprefixer,
        importcss
    ]
    return pipeline(
        gulp.src(SRC),
        changed(DEST),
        sass(),
        postcss(processors),
        replace(' !important', ''),
        gulpif(process.env.ELEVENTY_ENV === 'prod', purge({
            content: ['src/**/*.html']
        })),
        gulp.dest(DEST)
    )
})

gulp.task('watchcss', function() {
    gulp.watch(WATCH, gulp.parallel('generatecss'))
})