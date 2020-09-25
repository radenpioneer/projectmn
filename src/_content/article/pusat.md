---
layout: layout/content
tags:
    - berita
    - pusat
pagination:
    data: content.pusat
    size: 1
    alias: post
    addAllPagesToCollections: true
eleventyComputed:
    title: "{{ post.title.rendered }}"
    date: "{{ post.date }}"
    publishDate: "{{ post.date }}"
    author:
        name: "{{ 'PP KAMMI' }}"
        url: "{{ post._embedded.author[0].url }}"
    image: "{% if post.featured_media != 0 %}{{ post._embedded['wp:featuredmedia'][0].source_url }}{% else %}{{ false }}{% endif %}"
    excerpt: "{{ post.excerpt.rendered | remove: '[&hellip;]' | strip_html }}"
    origin: "{{ post.link }}"
permalink: "/berita/pusat/{{ post.date | date: '%Y/%m' }}/{{ post._embedded.author[0].url | remove: 'https:' | remove: 'http:' | replace: '.', '-' | slug }}-{{ post.slug | truncate: 100, '' }}.html"
---
{{ post.content.rendered }}