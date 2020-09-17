const fetch = require('node-fetch')

const SRC = 'http://www.kammi.id/wp-json/wp/v2/posts?per_page=50&_embed'

module.exports = function() {
    return new Promise((resolve, reject) => {
        fetch(SRC)
          .then(response => response.json())
          .then(data => resolve(data))
          .catch(e => reject(e))
    })
}