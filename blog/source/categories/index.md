---
title: Categories
date: 2024-12-11
type: "categories"
comments: false
---

<div class="category-list">
  {% for category in site.categories %}
    <div class="category-item">
      <a href="{{ category.path }}" class="category-link">
        {{ category.name }}
      </a>
      <span class="category-count">({{ category.length }})</span>
    </div>
  {% endfor %}
</div>

<style>
.category-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
}
.category-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.category-link {
  font-weight: bold;
  color: #333;
  text-decoration: none;
  transition: all 0.3s;
}
.category-link:hover {
  color: #0078d7;
}
.category-count {
  background-color: #f0f0f0;
  padding: 3px 7px;
  border-radius: 3px;
  font-size: 0.9em;
}
</style>
