import React from "react";
import { Button, Select } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import moment from "moment";
import "./CustomToolbar.css";
const CustomToolbar = ({ date, onNavigate, view, onView }) => {
  return (
    <div className="custom-toolbar">
      <div className="custom-toolbar-left">
        <Button className="today-btn" onClick={() => onNavigate("TODAY")}>
          Today
        </Button>
        <div className="navigation">
          <Button icon={<LeftOutlined />} onClick={() => onNavigate("PREV")} />
          <Button icon={<RightOutlined />} onClick={() => onNavigate("NEXT")} />
          <span className="month-year">{moment(date).format("MMMM YYYY")}</span>
        </div>
      </div>

      <Select
        value={view}
        onChange={onView}
        className="view-selector"
        options={[
          { value: "month", label: "Month" },
          { value: "week", label: "Week" },
          { value: "day", label: "Day" },
        ]}
      />
    </div>
  );
};

export default CustomToolbar;
