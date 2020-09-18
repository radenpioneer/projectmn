module.exports = function(eleventyConfig) {
    eleventyConfig.addFilter(
        'dateReadable', require('./dateReadable')
    )
    eleventyConfig.addFilter(
        'replaceImgwithAmp', require('./replaceImgWithAmp')
    )
}