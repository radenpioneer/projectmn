---
layout: layout/layout
permalink: index.html
---
{% for post in collections.berita %}
![{{ post.data.title }}]({{ post.data.image }})
# [{{ post.data.title }}]({{ post.url }})
{{ post.data.excerpt }}
{% endfor %}