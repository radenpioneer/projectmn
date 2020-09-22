const Cache = require('@11ty/eleventy-cache-assets')

const SRC = 'http://www.kammi.id/wp-json/wp/v2/posts?per_page=50&_embed'

module.exports = async function() {
    let data = await Cache(SRC, {
        duration: '1d',
        type: 'json'
    })
    return data
}