const Cache = require('@11ty/eleventy-cache-assets')
const lodash = require('lodash')

const SRC = [
    'http://kammijabar.com',
    'http://kammikaltimkaltara.com',
    'http://kammijatim.org'
]

async function getContent(url) {
    let amount = 10 
    let fullUrl = url + `/wp-json/wp/v2/posts?per_page=${amount}&_embed`
    let data = await Cache(fullUrl, {
        duration: '1d',
        type: 'json'
    })
    return data
}

function exportContent () {
    return new Promise((resolve, reject) => {
        const promises = []
        let source = SRC
        let contentData = []
        source.forEach(function (e) {
            promises.push(new Promise((resolve, reject) => {
                getContent(e).then((result) => {
                    contentData.push(result)
                    resolve()
                })
                .catch(reject)
            }))
        })
        Promise.all(promises)
        .then(() => {
            contentData = lodash.flattenDeep(contentData)
        })
        .then(() => {
            resolve(contentData)
        }).catch(reject)
    })
}

module.exports = exportContent().then((result) => {
    return result
}).catch(console.error)