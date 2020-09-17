exports.data = {
    permalink: '/testJsonOutput.json',
    layout: false
}

exports.render = (data) => {
    const items = data.content.ppkammi
    return JSON.stringify(items, null, 2)
}