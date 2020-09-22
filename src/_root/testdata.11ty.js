exports.data = {
    permalink: '/test.json',
    layout: false
}

exports.render = (data) => {
    const items = data.video.video
    return JSON.stringify(items, null, 2)
}