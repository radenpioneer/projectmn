require('dotenv').config()
const Cache = require('@11ty/eleventy-cache-assets')

const API_KEY = process.env.YOUTUBE_API_KEY
const SRC = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCWzUM4qC27ZFvEjAACByBVQ&maxResults=20&order=date&type=video&key=${API_KEY}`

module.exports = async function() {
    let data = await Cache(SRC, {
        duration: '1d',
        type: 'json'
    })
    return data
}