---
layout: layout/content
tags:
    - berita
    - pp kammi
pagination:
    data: content.ppkammi
    size: 1
    alias: post
    addAllPagesToCollections: true
eleventyComputed:
    title: "{{ post.title.rendered }}"
    date: "{{ post.date }}"
    image: "{{ post._embedded['wp:featuredmedia'][0].source_url }}"
    excerpt: "{{ post.excerpt.rendered | remove: '[&hellip;]' }}"
    url_canonical: "{{ post.url }}"
permalink: "/berita/ppkammi/{{ post.title.rendered | truncate: 25, '' | slug | url_encode }}.html"
---
{{ post.content.rendered }}