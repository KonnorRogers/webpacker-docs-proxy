---
# Feel free to add content and custom Front Matter to this file.

layout: home
---

Welcome to Bridgetown!

{% for doc in site.docs %}
  <h2>
    <a href="{{ doc.permalink }}">
      doc.permalink
    </a>
  </h2>
{% endfor %}
