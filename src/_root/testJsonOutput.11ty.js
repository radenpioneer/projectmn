exports.data = {
    permalink: '/testJsonOutput.json',
    layout: false
}

exports.render = (data) => {
    const items = data.content.news
    return JSON.stringify(items, null, 2)
}