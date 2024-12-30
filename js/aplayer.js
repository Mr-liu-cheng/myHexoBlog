fetch("/music/playlist.json")
  .then(response => response.json())
  .then(data => {
    const ap = new APlayer({
      container: document.getElementById("music-player"),
      fixed: true,
      autoplay: false,
      audio: data,
      lrcType: 3,
    });
    ap.lrc.hide(); // 隐藏歌词
  })
  .catch(error => console.error("Error loading playlist:", error));
