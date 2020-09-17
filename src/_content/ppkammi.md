---
layout: layout/content
tags:
    - berita
    - ppkammi
pagination:
    data: content.ppkammi
    size: 1
    alias: post
    addAllPagesToCollections: true
eleventyComputed:
    title: "{{ post.title.rendered }}"
    date: "{{ post.date }}"
    author: "{{ post._embedded.author[0].name }}"
    author_url: "{{ post._embedded.author[0].url }}"
    image: "{{ post._embedded['wp:featuredmedia'][0].source_url }}"
    excerpt: "{{ post.excerpt.rendered | remove: '[&hellip;]' }}"
    origin: "{{ post.link }}"
permalink: "/berita/ppkammi/{{ post.date | date: '%Y/%m' }}/{{ post.title.rendered | url_encode | slug }}.html"
---
{{ post.content.rendered }}