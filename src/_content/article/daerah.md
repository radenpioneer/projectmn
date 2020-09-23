---
layout: layout/content
tags:
    - berita
    - daerah
pagination:
    data: content.daerah
    size: 1
    alias: post
    addAllPagesToCollections: true
eleventyComputed:
    title: "{{ post.title.rendered }}"
    publishDate: "{{ post.date }}"
    author:
        name: "{{ post._embedded.author[0].url | remove: 'http://' }}"
        url: "{{ post._embedded.author[0].url }}"
    image: "{% if post.featured_media != 0 %}{{ post._embedded['wp:featuredmedia'][0].source_url }}{% else %}{{ false }}{% endif %}"
    excerpt: "{{ post.excerpt.rendered | remove: '[&hellip;]' | strip_html }}"
    origin: "{{ post.link }}"
permalink: "/berita/daerah/{{ post.date | date: '%Y/%m' }}/{{ post.slug | truncate: 100, '' }}.html"
---
{{ post.content.rendered }}