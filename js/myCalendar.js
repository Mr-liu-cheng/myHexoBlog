console.log('Calendar start');
commonHandler();
function commonHandler() {
    const calendarEl = document.getElementById('calendar');
    const lunarBirth = [
        { name: "刘老大", month: 12, day: 13 },
        { name: "贾老二", month: 9, day: 3 },
        { name: "燕子", month: 7, day: 18 },
        { name: "刘程", month: 6, day: 14 },
        { name: "兰兰", month: 3, day: 26 },
    ];
    // 将农历生日转换为阳历事件
    const currentYear = new Date().getFullYear();
    const birthdayEvents = lunarBirth.map(birthday => {
        const solar = Lunar.fromYmd(currentYear, birthday.month, birthday.day).getSolar();
        return {
            title: `🎂 ${birthday.name}生日`, // 事件标题
            start: solar.toYmd(),             // 事件日期 (阳历)
            color: 'purple',                  // 事件颜色
            allDay: true                      // 全天事件
        };
    });
    AddAnniversaryDate();
    function AddAnniversaryDate() {
        // 假设你有一个纪念日的对象，包含纪念日的年月日
        const anniversaryDate = { year: 2023, month: 3, day: 26 }; // 纪念日日期 
        // 计算纪念年的周年数
        const currentAnniversary = currentYear - anniversaryDate.year;
        const month = (anniversaryDate.month).toString().padStart(2, '0');  // 保证月份为两位数
        const day = (anniversaryDate.day).toString().padStart(2, '0');      // 保证日期为两位数

        // 创建纪念日事件
        const anniversaryEvent = {
            title: `🎉 第${currentAnniversary}周年纪念`, // 标题为“第几周年”
            start: `${currentYear}-${month}-${day}`, // 纪念日日期 (阳历)
            color: 'red',                          // 纪念日颜色（你可以根据需要修改颜色）
            allDay: true                            // 全天事件
        };
        // 将纪念日事件添加到生日事件列表中
        birthdayEvents.push(anniversaryEvent);
    }

    // 其他事件列表（自定义事件）
    const customEvents = [
        { title: "项目截止日", start: `${currentYear}-11-15`, color: 'red', allDay: true },
        { title: "团队会议", start: `${currentYear}-12-20T10:00:00`, color: 'blue', description: 'Thisisaverylongwordthatexceedscontainerwidthjjjkajndqjnjncjahsdbhefbhqioiwiqwjdkssjkahdwlaahwajjjjhkdnqjwnqjwdkqjnrwlqkrqknr', },
        { title: "masndlk出差卡拉胶速度sdfwecv快垃圾考虑到实际阿拉抗打击了哇较大拉卡鲸打卡溜达鸡啊卡罗卡经纬度考拉几万块拉法基阿瓦会计法垃圾福娃卡拉季开发啦", start: `${currentYear}-12-21`, end: `${currentYear}-11-25`, color: 'green' },
        { title: "masndlk出差卡拉胶速度sdfwecv快垃圾考虑到实际阿拉抗打击了哇较大拉卡鲸打卡溜达鸡啊卡罗卡经纬度考拉几万块拉法基阿瓦会计法垃圾福娃卡拉季开发啦", start: `${currentYear}-12-26`, end: `${currentYear}-11-25`, color: 'green', url: 'https://google.com/' },
        { title: "google", start: `${currentYear}-12-22`, end: `${currentYear}-11-25`, color: 'green', url: 'https://google.com/' },
        { title: "google", start: `${currentYear}-12-22`, end: `${currentYear}-11-25`, color: 'green', url: 'https://google.com/' },
        { title: "google", start: `${currentYear}-12-22`, end: `${currentYear}-11-25`, color: 'green', url: 'https://google.com/' },
        { title: "google", start: `${currentYear}-12-22`, end: `${currentYear}-11-25`, color: 'green', url: 'https://google.com/' },
        { title: "google", start: `${currentYear}-12-22`, end: `${currentYear}-11-25`, color: 'green', url: 'https://google.com/' },
        { title: "google", start: `${currentYear}-12-22`, end: `${currentYear}-11-25`, color: 'green', url: 'https://google.com/' },
        { title: "google", start: `${currentYear}-12-22`, end: `${currentYear}-11-25`, color: 'green', url: 'https://google.com/' },
        { title: "google", start: `${currentYear}-12-22`, end: `${currentYear}-11-25`, color: 'green', url: 'https://google.com/' },
        { title: "google", start: `${currentYear}-12-22`, end: `${currentYear}-11-25`, color: 'green', url: 'https://google.com/' },
        { title: "google", start: `${currentYear}-12-22`, end: `${currentYear}-11-25`, color: 'green', url: 'https://google.com/' },
        { title: "google", start: `${currentYear}-12-22`, end: `${currentYear}-11-25`, color: 'green', url: 'https://google.com/' },
        { title: "google", start: `${currentYear}-12-22`, end: `${currentYear}-11-25`, color: 'green', url: 'https://google.com/' },
        { title: "google", start: `${currentYear}-12-22`, end: `${currentYear}-11-25`, color: 'green', url: 'https://google.com/' },
        { title: "google", start: `${currentYear}-12-22`, end: `${currentYear}-11-25`, color: 'green', url: 'https://google.com/' },
        { title: "google", start: `${currentYear}-12-22`, end: `${currentYear}-11-25`, color: 'green', url: 'https://google.com/' },
        { title: "google", start: `${currentYear}-12-22`, end: `${currentYear}-11-25`, color: 'green', url: 'https://google.com/' },
    ];
    const InternationalFestivals = [
        { title: "情人节", start: "2024-02-14", color: "pink" },
        { title: "愚人节", start: "2024-04-01", color: "orange" },
        { title: "母亲节", start: "2024-05-12", color: "red" },   // 2024年5月12日（5月第二个星期日）
        { title: "父亲节", start: "2024-06-16", color: "blue" },  // 2024年6月16日（6月第三个星期日）
        { title: "618购物节", start: "2024-06-18", color: "red" }, // 中国电商购物节
        { title: "感恩节", start: "2024-11-28", color: "brown" },  // 2024年感恩节（11月第四个星期四）
        { title: "黑色星期五", start: "2024-11-29", color: "black" },
        { title: "双十一购物节", start: "2024-11-11", color: "purple" }, // 光棍节/购物节
        { title: "万圣节", start: "2024-10-31", color: "darkorange" },
        { title: "双十二购物节", start: "2024-12-12", color: "green" },
        { title: "圣诞节", start: "2024-12-25", color: "green" },
        { title: "跨年夜", start: "2024-12-31", color: "blue" },
    ];
    //创建FullCalendar实例
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'zh-cn',
        firstDay: 1,
        dayMaxEvents: 3, //true
        dateClick: function (info) {
            const clickedDate = new Date(info.dateStr);
            updateLunarInfo(clickedDate); // 点击日期时更新底部信息
        },
        datesSet: function (dateInfo) {//处理默认空事件留白
            console.log('Dates set:', dateInfo);  // 打印日期范围
            // 延迟执行，以确保日历完全渲染
            setTimeout(function () {
                var dayCells = document.querySelectorAll('.fc-daygrid-day');  // 获取所有日期格子

                dayCells.forEach(function (dayCell) {
                    var eventsContainer = dayCell.querySelector('.fc-daygrid-day-events');

                    // 如果该日期格子没有事件，隐藏事件容器
                    if (!dayCell.querySelector('.fc-event')) {
                        if (eventsContainer) {
                            eventsContainer.style.display = 'none';  // 隐藏没有事件的容器
                        }
                    }
                });
            }, 100);  // 延迟100ms执行
        },
        eventDidMount: function (info) {
            const eventElement = info.el;
            const title = info.event.title;  // 获取事件标题
            const description = info.event.extendedProps.description || '';  // 获取事件描述，如果没有描述则为空字符串
            // 创建 Tooltip 元素
            const tooltip = document.createElement('div');
            tooltip.classList.add('tooltip');
            // 设置 Tooltip 内容：标题在第一行，描述在第二行（如果有描述）
            tooltip.innerHTML = `<strong>标题:${title}</strong><br>描述：${description ? description : 'null'}`;

            // 设置 Tooltip 样式
            tooltip.style.position = 'absolute';
            tooltip.style.backgroundColor = 'black';  // 黑色背景
            tooltip.style.color = 'white';  // 白色字体
            tooltip.style.border = '1px solid white';  // 白色边框
            tooltip.style.padding = '5px 10px';  // 内边距
            tooltip.style.borderRadius = '4px';  // 边角圆润
            tooltip.style.fontSize = '12px';  // 字体大小

            tooltip.style.maxWidth = '500px';  // 设置最大宽度
            tooltip.style.width = 'auto';      // 宽度自适应内容
            tooltip.style.whiteSpace = 'normal';  // 允许文本换行
            tooltip.style.wordBreak = 'break-word'; // 防止文本溢出

            // 确保 Tooltip 在内容过长时能够滚动显示
            //  tooltip.style.maxWidth = '1000px';
            // tooltip.style.overflow = 'auto'; 

            document.body.appendChild(tooltip);  // 将 tooltip 移动到 body 里 calendarEl
            // 使用 Popper.js 来定位 Tooltip
            const popperInstance = Popper.createPopper(eventElement, tooltip, {
                placement: 'top',  // Tooltip 显示在事件上方
            });

            // Tooltip 初始为不可见，鼠标悬停时显示
            tooltip.style.visibility = 'hidden';
            eventElement.addEventListener('mouseenter', function () {
                tooltip.style.visibility = 'visible';  // 鼠标悬停时显示
                tooltip.style.zIndex = 9999;  // 显示时将 z-index 提升 ,至于最顶层，防止被遮挡
                popperInstance.update();  // 强制更新位置
            });
            eventElement.addEventListener('mouseleave', function () {
                tooltip.style.visibility = 'hidden';  // 鼠标离开时隐藏
            });
        },
        eventMouseEnter: function (info) { info.el.style.borderColor = 'red'; },
        eventMouseLeave: function (info) { info.el.style.borderColor = 'transparent'; },
        height: 'auto',                       // 设置总高度为600px
        contentHeight: 'auto',             // 内容区域高度自动调整
        aspectRatio: 1.5,                 // 设置宽高比为1.5
        rerenderDelay: 300,  // 设定300毫秒的延迟时间
        windowResizeDelay: 200,           // 设置500毫秒的延迟时间，避免频繁渲染
        events: [...birthdayEvents, ...customEvents, ...InternationalFestivals], // 合并农历生日和其他事件
        viewDidMount: function (info) {
            // 每次视图加载完成后，检查所有日期单元格
            removeEmptyEventContainers();
        },
        datesRender: function (info) {
            // 每次视图渲染时都检查日期单元格
            removeEmptyEventContainers();
        },
        headerToolbar: {
            center: 'dayGridMonth,timeGridFourDay,listWeek,dayGridWeek,dayGridDay' // buttons for switching between views
        },
        footerToolbar: {
            center: 'listDay,listMonth,listYear,timeGridDay' // buttons for switching between views
        },
        views: {
            dayGridMonth: {
                dayCellContent(item) {
                    // 转换阳历为农历
                    const solarDate = new Date(item.date);
                    const lunarDate = Lunar.fromDate(solarDate); // 使用 Lunar.js 获取农历信息
                    const lunarDay = lunarDate.getDayInChinese(); // 农历日
                    const lunarMonth = lunarDate.getMonthInChinese(); // 农历月
                    const solar = Solar.fromDate(solarDate);
                    //节假日 节气
                    const holiday = HolidayUtil.getHoliday(solar.toYmd());
                    const jieQi = lunarDate.getJieQi();//节气
                    //传统节日
                    var festivalstr;
                    var festivals = lunarDate.getFestivals();
                    if (festivals.length > 1) {
                        festivalstr = festivals.join('、');
                    } else {
                        festivalstr = festivals.toString();
                    }
                    var otherFestivals = lunarDate.getOtherFestivals();
                    // 返回单元格内容
                    return {
                        html: `
              <div>
                ${item.dayNumberText}<br>
                <span style="color: gray; font-size: 10px;">${lunarMonth}月${lunarDay}</span>
                ${holiday && !holiday.isWork() && holiday.getTarget() == holiday.getDay() ? `<br><span style="color: red; font-size: 10px;">${holiday.getName()}</span>` : ''}
                ${holiday && !holiday.isWork() && holiday.getTarget() != holiday.getDay() ? `<br><span style="color: red; font-size: 10px;">休</span>` : ''}
                ${holiday && holiday.isWork() ? `<br><span style="color: cyan; font-size: 10px;">补</span>` : ''}
                ${jieQi ? `<br><span style="color: yellow; font-size: 10px;">${jieQi}</span>` : ''}
                ${festivals != holiday?.getName() ? `<br><span style="color: orange; font-size: 10px;">${festivalstr}</span>` : ''}
              </div>
            `
                    };
                }
            },
            timeGridFourDay: {
                type: 'timeGrid',
                duration: { days: 7 },
                buttonText: 'weekTime'
            },
            listWeek: {
                type: 'listWeek',
                duration: { days: 10 },
                buttonText: 'next10'
            },
            listDay: {
                type: 'listDay',
                buttonText: 'listDay'
            },
            listMonth: {
                type: 'listMonth',
                buttonText: 'listMonth'
            },
            listYear: {
                type: 'listYear',
                buttonText: 'listYear'
            },
            timeGridDay: {
                type: 'timeGridDay',
                buttonText: 'timeDay',
                nowIndicator: true,
            },
        }
    });
    // 获取当前日期信息
    const today = new Date();
    const dayOfYear = SolarUtil.getDaysInYear(today.getYear(), today.getMonth(), today.getDay()); // 当前日期在今年的第几天
    updateLunarInfo(today); // 初始化显示今天的信息
    function updateLunarInfo(date) {
        const lunarDate = Lunar.fromDate(date);
        const yearZodiac = lunarDate.getYearShengXiao(); // 当前年份的生肖
        // 获取宜忌信息
        const yi = lunarDate.getDayYi().join('、'); // 宜
        const ji = lunarDate.getDayJi().join('、'); // 忌
        // 更新底部信息
        document.getElementById('day-info').innerHTML = `宜：<span style="color:green">${yi || '无'}</span> <br> 忌：<span style="color:red">${ji || '无'}</span>`;
        document.getElementById('zodiac-info').innerHTML = `${date.toLocaleDateString('zh-CN')} - ${lunarDate}  <strong>${yearZodiac}</strong>年`;
    }
    document.getElementById('day-of-year-info').innerHTML = `今年剩余 <strong>${SolarUtil.getDaysOfYear(today.getYear()) - dayOfYear}</strong> 天`;
    setTimeout(function () { calendar.render(); }, 100); // 延迟渲染，确保布局已完成
    console.log('Calendar rendered with Lunar and holidays');


    function removeEmptyEventContainers() {
        // 获取所有日期单元格
        const dayCells = document.querySelectorAll('.fc-daygrid-day');
        // 遍历所有日期单元格
        dayCells.forEach(function (dayCell) {
            const eventContainer = dayCell.querySelector('.fc-daygrid-day-events');
            // 如果该日期单元格没有事件，移除空的事件容器
            if (!dayCell.querySelector('.fc-event') && eventContainer) {
                eventContainer.remove();  // 移除事件容器
            }
        });
    }
}