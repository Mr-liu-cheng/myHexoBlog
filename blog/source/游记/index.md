---
title: 游记
date: 2024-12-16 17:20:33
---

<!-- <!DOCTYPE html>
<html>
  <head>
    <script src='https://cdn.jsdelivr.net/npm/fullcalendar/index.global.min.js'></script>
    <script>
      document.addEventListener('DOMContentLoaded', function() {
        const calendarEl = document.getElementById('calendar')
        const calendar = new FullCalendar.Calendar(calendarEl, {
          initialView: 'dayGridMonth'
        })
        calendar.render()
      })
    </script>
  </head>
  <body>
    <div id='calendar'></div>
  </body>
</html> -->


<!DOCTYPE html>
<html lang="zh-cn">
<head>
  <meta charset="UTF-8">
  <title>FullCalendar 农历和调休示例</title>
  <!-- FullCalendar CSS -->
  <link href="https://cdn.jsdelivr.net/npm/fullcalendar@6.1.15/main.min.css" rel="stylesheet" />
</head>
<body>
  <div id="calendar"></div> <!-- 容器元素 -->

  <!-- FullCalendar JavaScript -->
  <script src="https://cdn.jsdelivr.net/npm/fullcalendar@5.11.3/main.min.js"></script>
  <!-- 引入农历库 -->
  <script src="https://cdn.jsdelivr.net/npm/lunar-javascript@1.8.0/lunar.min.js"></script> <!-- 使用1.8.0版本 -->
  
  <script>
    document.addEventListener('DOMContentLoaded', function () {
      var calendarEl = document.getElementById('calendar');

      // 定义调休日或节假日
      const holidays = [
        { start: '2024-12-17', title: '示例调休' }, // 示例：2024年12月17日为调休
        { start: '2024-12-25', title: '圣诞节' }    // 示例：2024年12月25日为节日
      ];

      var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth', // 默认视图
        locale: 'zh-cn',             // 显示中文
        events: holidays,            // 事件数据
        dateCellContent: function (info) {
            console.log(info); // 检查 info 是否有 date、dayNumberText 等属性
          // 获取当前日期
          const solarDate = new Date(info.date);
          // 使用 Lunar.js 转换为农历
          const lunar = Lunar1.fromDate(solarDate);

          // 确保 Lunar 对象有效
          if (!lunar) {
            console.error('Lunar conversion failed for date:', solarDate);
            return { html: info.dayNumberText };
          }

          const lunarDay = lunar.getDayInChinese(); // 农历日
          const lunarMonth = lunar.getMonthInChinese(); // 农历月
            console.log('---lunarMonth:'+lunarMonth+" day:"+lunarDay);

          // 检查是否是调休或节假日
          const holiday = holidays.find(event => event.start === info.dateStr);

          // 返回单元格内容
          return {
            html: `
              <div>
                ${info.dayNumberText}-${lunarMonth}-${lunarDay}<br>
                <span style="color: gray; font-size: 10px;">${lunarMonth}${lunarDay}</span>
                ${holiday ? `<br><span style="color: red; font-size: 10px;">${holiday.title}</span>` : ''}
              </div>
            `
          };
        }
      });

      // 渲染日历
      calendar.render();
      calendar.refetchEvents();
      // 调试：查看当前日历是否已经加载
      console.log('Calendar is ready:', calendar);
    });
  </script>
</body>
</html>
