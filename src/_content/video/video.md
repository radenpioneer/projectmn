---
pagination:
    data: video
    size: 1
    alias: contentData
    addAllPagesToCollections: true
eleventyComputed:
    title: "{{ contentData.snippet.title }}"
    publishDate: "{{ contentData.snippet.publishedAt }}"
    author:
        name: "{{ contentData.snippet.channelTitle }}"
        url: "{{ contentData.snippet.channelId | prepend: 'https://www.youtube.com/channel/' }}"
    image: "{{ contentData.snippet.thumbnails.high.url }}"
    origin: "{{ contentData.id.videoId | prepend: 'https://www.youtube.com/watch?v=' }}"
    videoId: "{{ contentData.id.videoId }}"
permalink: "/video/{{ contentData.snippet.channelTitle | slug }}/{{ contentData.id.videoId }}.html"
---
{{ contentData.snippet.description }}