---
layout: layout/page
pagination:
    data: collections.ppkammi
    size: 6
    alias: posts
permalink: "/berita/ppkammi/{% if pagination.pageNumber > 0 %}/page-{{ pagination.pageNumber | plus: 1 }}.html{% else %}index.html{% endif %}"
---