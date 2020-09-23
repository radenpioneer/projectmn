const ampgen = require('@ampproject/eleventy-plugin-amp')
const typeset = require('eleventy-plugin-typeset')

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
    eleventyConfig.addCollection('pusat', function(collection) {
        return collection.getFilteredByTag('pusat')
            .sort(function(a, b) {
                return b.data.publishDate - a.data.publishDate
            })
    })
    eleventyConfig.addCollection('daerah', function(collection) {
        return collection.getFilteredByTag('daerah')
            .sort(function(a, b) {
                return b.data.publishDate - a.data.publishDate
            })
    })
    eleventyConfig.addCollection('video', function(collection) {
        return collection.getFilteredByTag('video')
            .sort(function(a, b) {
                return b.data.publishDate - a.data.publishDate
            })
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