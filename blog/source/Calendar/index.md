---
title: Calendar
date: 2024-12-17 09:14:26
---

<!DOCTYPE html>

<html lang="zh-cn">

<head>
    <meta charset="UTF-8">
    <title>FullCalendar 农历和调休示例</title>
    <!-- FullCalendar CSS -->
    <link href="https://cdn.jsdelivr.net/npm/fullcalendar@5.11.3/main.min.css" rel="stylesheet" />
</head>

<body>
    <!-- 日历容器 -->
    <div id="calendar"></div>
    <!-- 底部信息容器 -->
    <div id="lunar-info"
        style="margin-top: 20px; padding: 10px; background-color: #000000; border-top: 1px solid #ddd;">
        <p id="day-info">宜忌信息：加载中...</p>
        <p id="zodiac-info">生肖年：加载中...</p>
        <p id="day-of-year-info">当前是今年的第 N 天：加载中...</p>
    </div>
    <!-- FullCalendar JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/fullcalendar@5.11.3/main.min.js"></script>
    <!-- 引入农历库 -->
    <script src="https://cdn.jsdelivr.net/npm/lunar-javascript@latest/lunar.min.js"></script>
    <!-- 本地脚本加载路径需要添加根目录节点-->
    <script src="/myHexoBlog/js/myCalendar.js"></script>
</body>

</html>

[老黄历](https://6tail.cn/calendar/api.html#demo.huangli.html)

[Fullcalendar 官方文档](https://fullcalendar.io/docs)
[Fullcalendar技术文档](https://keenwon.com/143/)
[Fullcalendar一览表](https://blog.csdn.net/ymnets/article/details/78661247)

实现方法：[Lunar](https://6tail.cn/calendar/api.html#solar.new.html) + Fullcalendar