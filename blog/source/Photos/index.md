---
title: Photos
date: 2024-12-11 18:56:37
---

# 全部文章 - {{ page.posts.length }}

<div class="article-list">

  <!-- 2023年文章 -->
  <div class="year-group">
    <div class="year-header">
      <h2>2023 <span>🐰</span></h2>
    </div>
    <div class="year-articles">
      <!-- Here we loop through the posts from 2023 -->
      {% for post in site.posts %}
        {% if post.date.year == 2023 %}
          <div class="article-card">
            <a href="{{ post.permalink }}" class="article-link">
              <div class="article-title">{{ post.title }}</div>
              <div class="article-meta">
                <span class="article-date">{{ post.date.format('YYYY-MM-DD') }}</span>
              </div>
            </a>
          </div>
        {% endif %}
      {% endfor %}
    </div>
  </div>

  <!-- 2022年文章 -->
  <div class="year-group">
    <div class="year-header">
      <h2>2022 <span>🐛</span></h2>
    </div>
    <div class="year-articles">
      <!-- Here we loop through the posts from 2022 -->
      {% for post in site.posts %}
        {% if post.date.year == 2022 %}
          <div class="article-card">
            <a href="{{ post.permalink }}" class="article-link">
              <div class="article-title">{{ post.title }}</div>
              <div class="article-meta">
                <span class="article-date">{{ post.date.format('YYYY-MM-DD') }}</span>
              </div>
            </a>
          </div>
        {% endif %}
      {% endfor %}
    </div>
  </div>

</div>

<style>
.article-list {
  width: 100%;
  padding: 20px;
}

.year-group {
  margin-bottom: 40px;
}

.year-header {
  background-color: #2d7bf2;
  color: white;
  padding: 10px 20px;
  border-radius: 6px;
  margin-bottom: 20px;
}

.year-header h2 {
  display: inline-block;
  font-size: 24px;
  margin: 0;
}

.year-header span {
  margin-left: 10px;
  font-size: 18px;
}

.year-articles {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.article-card {
  width: 200px;
  background-color: #f5f5f5;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.article-link {
  text-decoration: none;
  color: inherit;
}

.article-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}

.article-meta {
  font-size: 14px;
  color: #777;
}
</style>
