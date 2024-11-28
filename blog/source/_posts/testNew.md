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
                    id="379025025"
                    server="netease"
                    type="playlist"
                    autoplay=true
                    mutex="true"
                    preload="auto"
                    order="random"mini=true></meting-js>`;
        }
    };

   _param.getCustomPlayList();

</script>

<div id="player"></div>
<script>
  const ap = new APlayer({
    container: document.getElementById('player'),
    audio: [
      {
        name: '萤火飞光',
        artist: '圈9',
        url: '/musicSource/萤火飞光.mp3', // 音频文件路径
        cover: '/img/yinghuofeiguang.png', // 封面图片路径
        lrc: '/musicSource/萤火飞光.lrc' // 歌词文件路径
      }
    ],
    lrcType: 3 // 歌词模式，3 表示使用外部 LRC 文件
  });
</script>

<!-- <audio id="jp_audio_0" preload="metadata" src="http://lv.sycdn.kuwo.cn/11b98472cf221e766dac04ab606fb3e5/674839b9/resource/30106/trackmedia/M8000023rE2z2peO4v.mp3"></audio> -->

<!-- {% aplayer 萤火飞光 圈9 musicSource/萤火飞光.mp3 img/yinghuofeiguang.png lrc:musicSource/萤火飞光.lrc %} -->
<!-- {% aplayer title:萤火飞光 author:圈9 url:/musicSource/萤火飞光.mp3 cover:/img/yinghuofeiguang.png lrc:/musicSource/萤火飞光.lrc %} -->
