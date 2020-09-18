---
layout: layout/video
tags:
    - video
pagination:
    data: video.kammitv.items
    size: 1
    alias: post
    addAllPagesToCollections: true
eleventyComputed:
    title: "{{ post.snippet.title }}"
    publishDate: "{{ post.snippet.publishedAt }}"
    author: "{{ post.channelTitle }}"
    author_url: "{{ post.snippet.channelId | prepend: 'https://www.youtube.com/channel/' }}"
    image: "{{ post.snippet.thumbnails.high.url }}"
    origin: "{{ post.id.videoId | prepend: 'https://www.youtube.com/watch?v=' }}"
    videoId: "{{ post.id.videoId }}"
permalink: "/video/kammitv/{{ post.id.videoId }}.html"
---