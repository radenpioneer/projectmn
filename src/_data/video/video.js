require('dotenv').config()
const Cache = require('@11ty/eleventy-cache-assets')
const lodash = require('lodash')
const luxon = require('luxon')

const API_KEY = process.env.YOUTUBE_API_KEY
const SRC = [
    'UCYXdwyAlPn6Mzb10Q7LJ89A', //KAMMI TV
    'UCWzUM4qC27ZFvEjAACByBVQ', //JAYANESIA 2045
    'UCpe5DMmYczX2ao_gMVeyOGw' //KAMMI KALTENG
]

async function getContent(id) {
    let amount = 10
    let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${id}&maxResults=${amount}&order=date&type=video&key=${API_KEY}`
    let data = await Cache(url, {
        duration: '3d',
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
                getContent(e)
                .then((result) => {
                    result = lodash.get(result, 'items')
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