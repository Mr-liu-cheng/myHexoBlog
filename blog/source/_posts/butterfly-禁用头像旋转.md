---
title: butterfly 禁用头像旋转
date: 2024-12-16 21:20:06
tags: butterfly
---
当鼠标移到侧边栏头像上时，头像会播放旋转动效，要想禁用可以找到
themes\butterfly\source\css\_layout\aside.styl文件并按照如下对transform: unset修改即可完成动效屏蔽。
``` css
.avatar-img
  overflow: hidden
  margin: 0 auto
  width: 110px
  height: 110px
  border-radius: 70px

  img
    width: 100%
    height: 100%
    transition: filter 375ms ease-in .2s, transform .3s
    object-fit: cover

    &:hover
      transform: unset
```