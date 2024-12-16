[[简历]](https://rxresu.me/liuchengyg/about-me)

<!DOCTYPE html>

<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>我的简历</title>
  <style>

```
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
}
h1, h2 {
  text-align: center;
  color: #333;
}
section {
  margin-bottom: 20px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  margin: 5px 0;
}
.btn-download {
  display: block;
  width: 150px;
  margin: 20px auto;
  padding: 10px;
  text-align: center;
  background: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}
.btn-download:hover {
  background: #0056b3;
}
```

</style>
</head>
<body>
  <h1>我的简历</h1>

<section>
    <h2>基本信息</h2>
    <ul>
      <li>姓名: Ershi</li>
      <li>邮箱: 1217110612@qq.com</li>
    </ul>
  </section>

<section>
    <h2>技能</h2>
    <ul>
      <li>HTML, CSS, JavaScript, C#, PHP, C, C++, Python</li>
      <li>Unity, Cocos2D</li>
      <li>3dmax, ps</li>
    </ul>
  </section>

<section>
    <h2>工作经历</h2>
    <ul>
      <li>重庆优路科技有限公司 | U3D | 2019.11-2020.12</li>
      <li>广州帝释天 | U3D | 2020.12-2021.8</li>
      <li>深圳一清创新科技有限公司 | U3D | 2021.9-2023.6</li>
      <li>深圳半岛弥音科技有限公司 | U3D | 2024.3-2024.7</li>
    </ul>
  </section>

<section>
    <h2>教育背景</h2>
    <ul>
      <li>重启工程学院 | 数字媒体技术 | 2016-2020</li>
    </ul>
  </section>

<section>
    <h2>参与项目</h2>
  <div class="projects">
    <div class="project-card bg-gray-800 rounded-lg shadow-md overflow-hidden mb-6">
    <!-- 项目信息 -->
  <div class="project-card" style="background-color: #505050;">
  <!-- 宣传图 -->
  <img src="image.png" alt="捡贝" class="project-image w-full h-64 object-cover" />
    <!-- 项目名 -->
    <h3 class="text-2xl font-bold text-white">捡贝</h3>
    <!-- 时间段 -->
    2024.10 - Now
    <!-- 项目概述 -->
    <p class="text-white mb-4">一键同步微信读书所有笔记和划线，在新标签页展示优雅的书摘，提供沉浸式的回顾体验。</p>
    <!-- 技能标签 -->
    <div class="skill-tags">
      <span style="background-color: #e0f7fa; color: #006064; padding: 4px 12px; border-radius: 999px; display: inline-block; text-align: center;">Next</span>
      <span style="background-color: #e0f7fa; color: #006064; padding: 4px 12px; border-radius: 999px; display: inline-block; text-align: center;">Plasmo</span>
      <span style="background-color: #e0f7fa; color: #006064; padding: 4px 12px; border-radius: 999px; display: inline-block; text-align: center;">Typescript</span>
      <span style="background-color: #e0f7fa; color: #006064; padding: 4px 12px; border-radius: 999px; display: inline-block; text-align: center;">Supabase</span>
      <span style="background-color: #e0f7fa; color: #006064; padding: 4px 12px; border-radius: 999px; display: inline-block; text-align: center;">TailwindCSS</span>
    </div>
    <style>
.skill-tags .tag {
    background-color: #e0f7fa; /* 浅蓝色背景 */
    color: #006064; /* 深蓝色文字 */
    font-size: 0.875rem; /* 文字大小 */
    padding: 4px 12px; /* 内边距 */
    border-radius: 999px; /* 圆角背景 */
    display: inline-block;
    text-align: center;
}
</style>

<div class="skill-tags">
    <span class="tag">Next</span>
    <span class="tag">Plasmo</span>
    <span class="tag">Typescript</span>
    <span class="tag">Supabase</span>
    <span class="tag">TailwindCSS</span>
</div>
    <!-- 按钮组 -->
    <div class="project-buttons flex items-center space-x-4">
      <button onclick="playVideo('video1.mp4')" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">
        播放视频1
      </button>
      <a href="https://project1-link.com" target="_blank" class="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg">
        查看项目
      </a>
    </div>
  </div>
</div>
<div class="project-card" style="background-color: #505050;">
      <img src="image.png" alt="Camlife" class="project-image" />
      <h3>Camlife</h3>
      <h3>Camlife</h3>
      <h3>Camlife</h3>
      <h3>Camlife</h3>
      <p>2024.08 - Now</p>
      <p>用影像记录每一个生活瞬间</p>
      <div class="project-buttons">
        <button onclick="playVideo('video2.mp4')">播放视频</button>
        <a href="https://project2-link.com" target="_blank">查看项目</a>
      </div>
    </div>
    <!-- Add more project cards as needed -->
  </div>
</section>

<script>
  function playVideo(videoUrl) {
    // 打开视频播放链接
    window.open(videoUrl, '_blank');
  }
</script>

<style>
  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }
  .project-card {
    background: #fff;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  .project-image {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
  }
  .project-buttons {
    margin-top: 10px;
  }
  .project-buttons button,
  .project-buttons a {
    display: inline-block;
    margin: 5px;
    padding: 8px 12px;
    text-decoration: none;
    color: white;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .project-buttons button:hover,
  .project-buttons a:hover {
    background-color: #0056b3;
  }
</style>

</body>
</html>

