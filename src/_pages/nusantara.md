---
title: KAMMI Se-Indonesia
layout: layout/contentlist
pagination:
    data: collections.nusantara
    size: 10
    alias: posts
permalink: "/berita/nusantara/{% if pagination.pageNumber > 0 %}/page-{{ pagination.pageNumber | plus: 1 }}.html{% else %}index.html{% endif %}"
---