document.addEventListener("DOMContentLoaded", commonHandler);
document.addEventListener("pjax:complete", commonHandler);
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
    // 其他事件列表（自定义事件）
    const customEvents = [
        { title: "项目截止日", start: `${currentYear}-11-15`, color: 'red', allDay: true },
        { title: "团队会议", start: `${currentYear}-11-20T10:00:00`, color: 'blue' },
        { title: "出差", start: `${currentYear}-11-22`, end: `${currentYear}-11-25`, color: 'green' }
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
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'zh-cn',
        dateClick: function (info) {
            const clickedDate = new Date(info.dateStr);
            updateLunarInfo(clickedDate); // 点击日期时更新底部信息
        },
        height: 'auto', // 根据内容自动调整高度
        aspectRatio: 2, // 宽高比（可选，默认值2）
        events: [...birthdayEvents, ...customEvents, ...InternationalFestivals], // 合并农历生日和其他事件
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
            }
        }
    });
    calendar.render();
    console.log('Calendar rendered with Lunar and holidays');
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
        document.getElementById('zodiac-info').innerHTML = `${today} - ${lunarDate}  生肖年：<strong>${yearZodiac}</strong>`;
    }
    document.getElementById('day-of-year-info').innerHTML = `今年剩余 <strong>${SolarUtil.getDaysOfYear(today.getYear()) - dayOfYear}</strong> 天`;
}