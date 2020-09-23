require('dotenv').config()
const Cache = require('@11ty/eleventy-cache-assets')
const lodash = require('lodash')

const API_KEY = process.env.RAPID_API_KEY
const SRC = 'https://google-news.p.rapidapi.com/v1/search?country=ID&lang=id&q=kammi'

module.exports = async function() {
    let data = await Cache(SRC, {
        duration: '1d',
        type: 'json',
        fetchOptions: {
            method: 'GET',
            headers: {
                "x-rapidapi-host": "google-news.p.rapidapi.com",
		        "x-rapidapi-key": API_KEY
            }
        }
    }).then(async function (d) {
        return await lodash.get(d, 'articles')
    })
    return data
}