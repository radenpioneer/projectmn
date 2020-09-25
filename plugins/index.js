module.exports = function(eleventyConfig) {
    eleventyConfig.addFilter(
        'dateReadable', require('./dateReadable')
    )
    eleventyConfig.addFilter(
        'extractImgFromP', require('./extractImgFromP')
    )
    eleventyConfig.addFilter(
        'sanitizeContent', require('./sanitizeContent')
    )
}