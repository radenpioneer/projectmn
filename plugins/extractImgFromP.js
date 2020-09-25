const cheerio = require('cheerio')

module.exports = (html) => {
    let $ = cheerio.load(html)
    $('p:has(img)').before(function() {
        return $(this).find('img')
    })
    return $.html()
}