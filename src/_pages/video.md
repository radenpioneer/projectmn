---
title: Videos
layout: layout/videolist
pagination:
    data: collections.video
    size: 10
    alias: posts
    reverse: true
permalink: "/video/{% if pagination.pageNumber > 0 %}/page-{{ pagination.pageNumber | plus: 1 }}.html{% else %}index.html{% endif %}"
---
Kumpulan Video KAMMI se-Indonesia