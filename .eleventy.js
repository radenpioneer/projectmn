const ampgen = require('@ampproject/eleventy-plugin-amp')
const typeset = require('eleventy-plugin-typeset')

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(require('./plugins'))
    eleventyConfig.addPlugin(ampgen, {
        dir: {
            output: 'dist'
        },
        imageOptimization: {
            urlPath: '/img/o/'
        },
        validation: false
    })
    eleventyConfig.addPlugin(typeset({
        disable: ['ligatures', 'hyphenate']
    }))
    return {
        dir: {
            input: 'src',
            output: 'dist'
        }
    }
}