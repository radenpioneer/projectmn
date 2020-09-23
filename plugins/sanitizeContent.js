const sanitizeHtml = require('sanitize-html')

module.exports = (html) => {
    return sanitizeHtml(html, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat([ 'img', 'amp-img' ]),
        allowedAttributes: {
            img: ['src'],
            'amp-img': ['src', 'height', 'width', 'layout']
        },
        transformTags: {
            'img': sanitizeHtml.simpleTransform('amp-img', {
                height: '3',
                width: '4',
                layout: 'responsive'
            })
        },
        exclusiveFilter: function(frame) {
            return frame.tag === 'p' && !frame.text.trim()
        }
    })
}