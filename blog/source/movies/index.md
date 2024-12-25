---
title: movies
date: 2024-12-05 14:38:39
toc: true # 开启目录
---

<video controls width="100%">
    <source src="/mr-liu-cheng.github.io/movies/犬夜叉.mp4" type="video/mp4">
    您的浏览器不支持 video 标签。
</video>

不要使用qq的录屏工具了，编码是不支持。一般放到vscode就可以预览的才是支持的，推荐使用Windows自带的录屏软件：


```
打开Xbox Game Bar:
快捷键: 直接按下键盘上的Win+G组合键。
开始菜单搜索: 在开始菜单中搜索“Xbox Game Bar”并打开。
开始录制:
打开想要录制的窗口或游戏。
按下Win+Alt+R组合键开始录制。
再次按下Win+Alt+R组合键停止录制。
```
<span style="color: red;">注意提交文件不要超过100M.</span>  

# hexo播放本地视频的方式有哪些

最简单的方法：直接使用 `<video>` 标签播放本地视频。
更强大的播放器：使用第三方播放器如 DPlayer 或 Video.js 提供更高级的功能，如自定义皮肤、播放列表、弹幕等。
Hexo 插件：使用 hexo-tag-video 或 hexo-tag-dplayer 插件来快速集成视频播放器。

以下是对这三种方法的详细讲解和使用步骤，最后附带表格统计优缺点。

## 1. 使用 `<video>` 标签** HTML 的 `<video>` 标签是内置的简单播放器，支持播放本地或远程视频文件。**使用方法**

```html
<video controls width="600">
  <source src="example.mp4" type="video/mp4">
  您的浏览器不支持 HTML5 视频标签。
</video>
```

**特点**

- 简单易用，无需额外配置。
- 支持基本功能，如播放、暂停、音量调节等。
- 兼容性高，大多数现代浏览器都支持。
  **适用场景**
  适合无需复杂功能的视频嵌入，比如展示简单的本地视频。

---

## **2. 使用第三方播放器 (DPlayer / Video.js)** **DPlayer**

DPlayer 是一个优雅的 HTML5 弹幕视频播放器，支持弹幕、播放列表等高级功能。
**安装**

1. 引入 DPlayer 的 CSS 和 JS：

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/dplayer/dist/DPlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/dplayer/dist/DPlayer.min.js"></script>
```

2. 添加播放器容器：

```html
<div id="dplayer"></div>
```

3. 初始化播放器：

```html
<script>
    const dp = new DPlayer({
        container: document.getElementById('dplayer'),
        video: {
            url: 'example.mp4',
        },
        danmaku: {
            id: 'example',
            api: 'https://api.prprpr.me/dplayer/',
        }
    });
</script>
```

**Video.js**
Video.js 是一个功能强大的 HTML5 视频播放器，支持插件扩展和自定义皮肤。
**安装**

1. 引入 Video.js 的 CSS 和 JS：

```html
<link href="https://vjs.zencdn.net/7.20.3/video-js.css" rel="stylesheet">
<script src="https://vjs.zencdn.net/7.20.3/video.min.js"></script>
```

2. 添加播放器标签：

```html
<video id="my-video" class="video-js" controls preload="auto" width="640" height="360">
    <source src="example.mp4" type="video/mp4">
    您的浏览器不支持 HTML5 视频。
</video>
```

3. 初始化播放器（可选）：

```html
<script>
    var player = videojs('my-video');
</script>
```

**特点**

- 支持多种格式、弹幕和播放列表。
- 提供丰富的皮肤和插件选择。
- 功能强大，但需要额外加载资源。
  **适用场景**
  适合需要高级功能或个性化需求的视频播放，比如互动视频或视频网站。

---

## **3. Hexo 插件**

使用 Hexo 插件可以更方便地在博客中集成视频播放器。
**hexo-tag-video**

1. 安装插件：

```bash
npm install hexo-tag-video --save
```

2. 在 Markdown 文件中使用：

```markdown
{% video https://example.com/video.mp4 %}
```

**hexo-tag-dplayer**

1. 安装插件：

```bash
npm install hexo-tag-dplayer --save
```

2. 在 Markdown 文件中使用：

```markdown
{% dplayer "https://example.com/video.mp4" %}
```

**特点**

- 与 Hexo 集成，支持便捷的 Markdown 标签语法。
- 自动生成播放器，无需手动添加 HTML。
  **适用场景**
  适合 Hexo 博客用户，尤其是需要频繁嵌入视频的情况。

---

**优缺点对比表** 
| 方法 | 优点 | 缺点 | 适用场景 | 
| --- | --- | --- | --- | 
| `<video>` 标签 | 简单易用，支持常见功能，加载速度快 | 无高级功能，样式有限 | 基础视频展示 | 
| DPlayer | 支持弹幕、播放列表、优雅界面，功能丰富 | 需要引入额外资源，设置相对复杂 | 需要高级功能或互动的视频播放 | 
| Video.js | 插件支持丰富，皮肤自定义灵活 | 初次配置稍复杂，需要额外加载资源 | 定制化需求多的视频播放 | 
| Hexo 插件 | 集成方便，适合博客嵌入，支持 Markdown 语法简化 | 仅限 Hexo 环境，功能依赖插件支持 | Hexo 博客用户 | 