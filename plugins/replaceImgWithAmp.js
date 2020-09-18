const cheerio = require('cheerio')

module.exports = function (content) {
    const $ = cheerio.load(content)
    $('p').find('img').replaceWith(function () {
        return '<amp-img src="' + this.attribs.src + '" width="16" height="9" layout="responsive"></amp-img>'
    })

    content = $.html()
    return content
}