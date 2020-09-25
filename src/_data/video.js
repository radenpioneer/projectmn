require('dotenv').config()
const Cache = require('@11ty/eleventy-cache-assets')
const lodash = require('lodash')
const t = require('luxon')

const API_KEY = process.env.YOUTUBE_API_KEY
const CHANNEL_ID = [
    'UCYXdwyAlPn6Mzb10Q7LJ89A', //KAMMI TV
    'UCWzUM4qC27ZFvEjAACByBVQ', //JAYANESIA 2045
    'UCpe5DMmYczX2ao_gMVeyOGw', //KAMMI KALTENG
    'UCG0NLElOpUcEMklRUZQWXZw', //KAMMI KALTIM-KALTARA
    'UCYS38TmzhnFHQoQYDWQjd_w', // KAMMI BANDUNG
    'UCiunTs8OnTC1v-boWZV1sVQ', //KAMMI PAPUA
    'UCqyWgbGhx0b-IudB2_Nakxw' //KAMMI DENPASAR
]

async function getContent(id) {
    let amount = 10
    let minDate = t.DateTime.local().minus({months: 9}).toFormat('yyyy-LL-dd') + 'T00:00:00.0Z'
    let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${id}&publishedAfter=${encodeURIComponent(minDate)}&maxResults=${amount}&order=date&type=video&videoSyndicated=true&videoEmbeddable=true&key=${API_KEY}`
    let data = await Cache(url, {
        duration: '3d',
        type: 'json'
    })
    return data
}

function exportContent () {
    return new Promise((resolve, reject) => {
        const promises = []
        let source = CHANNEL_ID
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