import React, { useEffect, useState } from "react";
import { Calendar } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import "./Minicalender.css";

const MiniCalendar = ({ selectedDate, setSelectedDate }) => {
  const [currentDate, setCurrentDate] = useState(dayjs());

  useEffect(() => {
    if (selectedDate) {
      setCurrentDate(dayjs(selectedDate));
    }
  }, [selectedDate]);

  const onPrev = () => setCurrentDate(currentDate.subtract(1, "month"));
  const onNext = () => setCurrentDate(currentDate.add(1, "month"));

  return (
    <Calendar
      fullscreen={false}
      value={currentDate}
      onSelect={(date) => setSelectedDate(date.format("YYYY-MM-DD"))}
      headerRender={() => (
        <div className="custom-calendar-header">
          <LeftOutlined className="nav-icon" onClick={onPrev} />
          <span className="month-year">{currentDate.format("MMM YYYY")}</span>
          <RightOutlined className="nav-icon" onClick={onNext} />
        </div>
      )}
    />
  );
};

export default MiniCalendar;
