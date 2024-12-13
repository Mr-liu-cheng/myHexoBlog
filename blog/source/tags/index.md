---
title: Tags
date: 2024-12-11
type: "tags"
comments: false
---

<div class="tag-list">
  {% for tag in site.tags %}
    <a href="{{ tag.path }}" class="tag-link">
      {{ tag.name }} ({{ tag.length }})
    </a>
  {% endfor %}
</div>

<style>
.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 20px;
}
.tag-link {
  background-color: #f0f0f0;
  padding: 5px 10px;
  border-radius: 5px;
  color: #333;
  text-decoration: none;
  transition: all 0.3s;
}
.tag-link:hover {
  background-color: #0078d7;
  color: #fff;
}
</style>
