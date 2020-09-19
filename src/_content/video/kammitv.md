---
pagination:
    data: video.kammitv.items
    size: 1
    alias: post
    addAllPagesToCollections: true
eleventyComputed:
    title: "{{ post.snippet.title }}"
    publishDate: "{{ post.snippet.publishedAt }}"
    author:
        name: "{{ post.channelTitle }}"
        url: "{{ post.snippet.channelId | prepend: 'https://www.youtube.com/channel/' }}"
    image: "{{ post.snippet.thumbnails.high.url }}"
    origin: "{{ post.id.videoId | prepend: 'https://www.youtube.com/watch?v=' }}"
    videoId: "{{ post.id.videoId }}"
permalink: "/video/kammitv/{{ post.id.videoId }}.html"
---