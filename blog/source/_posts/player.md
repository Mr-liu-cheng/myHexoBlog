---
title: player
date: 2024-11-28 19:55:56
tags:
---
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
<div id="player"></div>
<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>
<script>
  function ss () {
    const ap = new APlayer({
      container: document.getElementById('player'),
      audio: [
        {
          name: '萤火飞光',
          artist: '圈9',
          url: '萤火飞光.mp3', // 音频文件路径
          cover: 'musicSource/yinghuofeiguang.png', // 封面图片路径
          lrc: 'musicSource/yhfg.lrc' // 歌词文件路径
        }
      ],
      lrcType: 3 // 歌词模式，3 表示使用外部 LRC 文件
    });
  }
  ss();
  document.addEventListener('DOMContentLoaded', ss);
</script>


