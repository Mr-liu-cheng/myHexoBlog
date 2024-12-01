---
title: musicPage
date: 2024-12-01 21:47:19
---


<div id="music-page">
</div>
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/meting@2.0.1/dist/Meting.min.js"></script>
<script>
    var userId = "509302810";
    var userServer = "netease";
    var userType = "playlist";
</script>
<script>
    const params = new URLSearchParams(window.location.search);
    var _param = {
         getCustomPlayList: function () {
            const musicPage = document.getElementById("music-page");
            const playlistType = params.get("type") || "playlist";
            if (params.get("id") && params.get("server")) {
                var id = params.get("id");
                var server = params.get("server");
                musicPage.innerHTML = `<meting-js listMaxHeight="600px"id="${id}"server="${server}"type="${playlistType}"mutex="true"preload="auto"order="random"autoplay="true"></meting-js>`;
            } else {
                musicPage.innerHTML = `<meting-js listMaxHeight="600px"id="${userId}"server="${userServer}"type="${userType}"mutex="true"preload="auto"order="random"autoplay=true></meting-js>`;
            }
        }
    };
    _param.getCustomPlayList();
    const vh = window.innerHeight * 1;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener('resize', () => {
        let vh = window.innerHeight * 1;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
</script>


<div id="music-page2">
</div>
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/meting@2.0.1/dist/Meting.min.js"></script>
<script>
    var _param = {
         getCustomPlayList: function () {
            const musicPage = document.getElementById("music-page2");
            musicPage.innerHTML = `<meting-js 
                    id="509302810"
                    server="netease"
                    type="playlist"
                    autoplay=false
                    mutex="true"
                    preload="auto"
                    order="random"mini=false></meting-js>`;
        }
    };
   _param.getCustomPlayList();
</script>


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
          url: '/myHexoBlog/music/萤火飞光 - 圈9.mp3', // 音频文件路径
          cover: '/myHexoBlog/music/萤火飞光.png', // 封面图片路径
          lrc: '/myHexoBlog/music/萤火飞光 - 圈9.lrc' // 歌词文件路径
        }
      ],
      lrcType: 3 // 歌词模式，3 表示使用外部 LRC 文件
    });
  }
  ss();
  document.addEventListener('DOMContentLoaded', ss);
</script>
