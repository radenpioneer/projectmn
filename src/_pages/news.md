---
title: Lansiran Media KAMMI
layout: layout/layout
pagination:
    data: content.news
    size: 10
    alias: news
permalink: "/berita/media/{% if pagination.pageNumber > 0 %}/page-{{ pagination.pageNumber | plus: 1 }}.html{% else %}index.html{% endif %}"
---
{% for item in news %}
[{{ item.title }}]({{ item.link }})
{% endfor %}