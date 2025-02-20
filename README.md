# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Open [http://localhost:3000]

### Cấu trúc dữ liệu đề xuất:

export const eventsData = [
{
id: 1,
title: "First Session with Alex Stan",
type: "appointment",
date: "2025-02-19",
time: "09:00 - 09:30 AM",
timezone: "GMT+6",
client: { name: "Alex Stan", profile_url: "/clients/alex-stan" },
tatus: true,
point:"event1",
recurring: null
},
{
id: 2,
title: "Webinar: How to cope with trauma in professional life",
type: "event",
date: "2025-02-20",
time: "09:00 - 09:30 AM",
timezone: "GMT+6",
client: null,
tatus: true,
point:"event2",
recurring: {
"frequency": "weekly",
"interval": 1,
"endDate": "2025-06-01"
}
},

trong đó

- type : dùng để phân loại sự kiện
- date,time : dùng để xác định event nằm ở đâu tại big-calender
- tatus: có thể lưu trạng thái khi sự kiện đã qua thì false.
- point: lưu enpoint khi click vào sự kiện có thể sang trang khác dùng point này hoặc id để call API lấy description của event đó
- recurring: lưu sự kiện lập lại:
  - frequency: loại lập lại tuần\tháng
  - interval": tần suất 1,2,3... trong tuần\tháng
  - endDate": ngày kết thúc việc lập lại

###

![Alt text](./images/GiaoDien.png)

### cách sử lí sự kiện lập lại

Xử lý trên Frontend
Khi nhận sự kiện có recurring, sử dụng thư viện như rrule để tự tạo danh sách các ngày xuất hiện.
import { RRule } from "rrule";

const rule = new RRule({
freq: RRule.WEEKLY,
interval: 1,
dtstart: new Date("2025-02-20T09:00:00"),
until: new Date("2025-06-01T09:30:00"),
});

const recurringDates = rule.all();

### Những điều mình học được từ dự án

Cách sử dụng react-big-calendar để hiển thị sự kiện
Cách sử dụng moment / dayjs để xử lý thời gian

### Kế hoạch phát triển tiếp theo

- Thêm tính năng thông báo cho sự kiện sắp diễn ra.
- Thêm bộ lọc sự kiện theo type (event, meeting, v.v.).
- Cung cấp API để thêm/xóa/sửa sự kiện trực tiếp từ UI. và nếu tatus là false thì không upate được.
- Tạo thêm giao diện như Event_des-mô tả sự kiện

## 🙌 Cảm ơn!

Cảm ơn Anh/Chị đã dành thời gian đọc README này!
