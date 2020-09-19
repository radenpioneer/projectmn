const ampgen = require('@ampproject/eleventy-plugin-amp')

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(require('./plugins'))
    eleventyConfig.addPlugin(ampgen, {
        dir: {
            output: 'dist'
        },
        imageOptimization: {
            urlPath: '/img/optimized/'
        },
        validation: false
    })
    /*
    eleventyConfig.addCollection('ppkammi', function(collection) {
        return collection.getFilteredByTag('ppkammi')
                .sort(function(a, b) {
                    return b.data.publishDate - a.data.publishDate
                })
    })
    */
   eleventyConfig.addCollection('video', function(collection) {
    return collection.getFilteredByTag('video')
            .sort(function(a, b) {
                return b.data.publishDate - a.data.publishDate
            })
    })
    return {
        dir: {
            input: 'src',
            output: 'dist'
        }
    }
}