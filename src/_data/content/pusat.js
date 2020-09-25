const Cache = require('@11ty/eleventy-cache-assets')
const lodash = require('lodash')
const t = require('luxon')

const SRC = [
    'http://kammi.id', //PP KAMMI
    'http://muslimnegarawanwakaf.org/' // BWMN
]

async function getContent(url) {
    let maxAmount = 50 
    let minDate = t.DateTime.local().minus({year: 1}).toFormat('yyyy-LL-dd') + 'T00:00:00.0Z'
    let fullUrl = url + `/wp-json/wp/v2/posts?after=${encodeURIComponent(minDate)}&per_page=${maxAmount}&_embed`
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