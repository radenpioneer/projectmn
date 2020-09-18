exports.data = {
    permalink: '/testJsonOutput.json',
    layout: false
}

exports.render = (data) => {
    const items = data.video.kammitv
    return JSON.stringify(items, null, 2)
}