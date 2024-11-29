const fs = require('fs');
const path = require('path');

// 音乐文件夹路径
const musicFolderPath = './source/music'; // 修改为你实际的音乐文件夹路径

// 获取音乐文件夹中的所有文件
fs.readdir(musicFolderPath, (err, files) => {
  if (err) {
    console.error('无法读取文件夹:', err);
    return;
  }

  // 筛选出所有音频文件
  const audioFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ext === '.mp3'; // 支持 mp3 文件
  });

  // 创建歌单数组
  const playlist = audioFiles.map(file => {
    const pubilcMusicPath = './music'; // pubilc
    // 使用正则表达式提取歌名和歌手
    const match = file.match(/^(.+?) - (.+?)\.(mp3)$/);
    if (match) {
      const songName = match[1]; // 歌名
      const artistName = match[2]; // 歌手名
      // 替换为正斜杠 '/'
      const fixPath = (filePath) => filePath.replace(/\\/g, '/');
      return {
        name: songName, // 歌曲名称（歌名）
        artist: artistName, // 歌手
        url: fixPath(path.join(pubilcMusicPath, file)), // 音乐文件的路径
        cover:  fixPath(path.join(pubilcMusicPath, `${songName}.png`)), // 封面使用歌名
        lrc:  fixPath(path.join(pubilcMusicPath, `${songName}.lrc`)), // 歌词使用歌名
      };
    }
    // 如果文件名格式不符合预期，返回一个默认值
    return {
      name: file, // 歌曲名称为文件名
      artist: '未知艺术家', // 默认艺术家
      url: path.join(pubilcMusicPath, file), // 音乐文件的路径
      cover: 'default-cover.png', // 默认封面
      lrc: '', // 默认没有歌词
    };
  });

  // 将歌单数组保存为 JSON 文件
  const playlistJson = JSON.stringify(playlist, null, 2);
  fs.writeFileSync('./source/music/playlist.json', playlistJson, 'utf-8');
  console.log('歌单生成完毕！');
});
