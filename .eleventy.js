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
    return {
        dir: {
            input: 'src',
            output: 'dist'
        }
    }
}