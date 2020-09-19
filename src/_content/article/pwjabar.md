---
layout: layout/content
tags:
    - berita
    - nusantara
    - jabar
pagination:
    data: content.pwjabar
    size: 1
    alias: post
    addAllPagesToCollections: true
eleventyComputed:
    title: "{{ post.title.rendered }}"
    publishDate: "{{ post.date }}"
    author:
        name: "{{ 'KAMMI JABAR' }}"
        url: "{{ post._embedded.author[0].url }}"
    image: "{% if post.featured_media != 0 %}{{ post._embedded['wp:featuredmedia'][0].source_url }}{% else %}{{ false }}{% endif %}"
    excerpt: "{{ post.excerpt.rendered | remove: '[&hellip;]' }}"
    origin: "{{ post.link }}"
permalink: "/berita/nusantara/jabar/{{ post.date | date: '%Y/%m' }}/{{ post.slug }}.html"
---
{{ post.content.rendered | replaceImgWithAmp }}