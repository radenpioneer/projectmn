---
title: PP KAMMI
layout: layout/contentlist
pagination:
    data: collections.pusat
    size: 10
    alias: posts
permalink: "/berita/pusat/{% if pagination.pageNumber > 0 %}/page-{{ pagination.pageNumber | plus: 1 }}.html{% else %}index.html{% endif %}"
---