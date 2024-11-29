---
title: testNew
date: 2024-11-24 02:22:02
categories: 随笔
tags:
    -博客记录
    -随笔
description: 简单创建
#用于设置全局默认的封面图片（Cover Image），通常显示在首页、分类页面、标签页面等的顶部区域。
cover: /img/favicon.png
---

![alt text](img/alipay.jpg)


<div id="music-page">
</div>
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/meting@2.0.1/dist/Meting.min.js"></script>

<script>
    var _param = {
         getCustomPlayList: function () {
            const musicPage = document.getElementById("music-page");
            musicPage.innerHTML = `<meting-js 
                    id="509302810"
                    server="netease"
                    type="playlist"
                    autoplay=true
                    mutex="true"
                    preload="auto"
                    order="random"mini=false></meting-js>`;
        }
    };

   _param.getCustomPlayList();

</script>