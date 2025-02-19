import React, { useState } from "react";

import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import { Card, Button, List, Avatar } from "antd";
import { VideoCameraOutlined } from "@ant-design/icons";
import { eventsData } from "../datas/dataEX";
import moment from "moment";
import MiniCalendar from "./MiniCalender/Minicalender";
import CustomToolbar from "./CustomToolbar/CustomToolbar";
import "./Calendar.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const CalendarView = () => {
  const [selectedDate, setSelectedDate] = useState(
    moment().format("YYYY-MM-DD")
  );
  const [view, setView] = useState("month");
  const [date, setDate] = useState(new Date());

  const formattedDate = moment(selectedDate).format("dddd, D MMM");

  const events = eventsData.map((event) => ({
    title: event.title,
    start: moment(
      `${event.date} ${event.time.split(" - ")[0]}`,
      "YYYY-MM-DD hh:mm A"
    ).toDate(),
    end: moment(
      `${event.date} ${event.time.split(" - ")[1]}`,
      "YYYY-MM-DD hh:mm A"
    ).toDate(),
    hasClientProfile: !!event.client?.profile_url,
  }));

  const handleDateChange = (newDate) => {
    setSelectedDate(moment(newDate).format("YYYY-MM-DD"));
    setDate(new Date(newDate));
  };

  const OnTap = () => {
    alert("sử dụng navigate trong react-router chuyển trang mới...");
  };

  return (
    <div className="calendar-container">
      {/* Sidebar với MiniCalendar */}
      <div className="sidebar">
        <MiniCalendar
          selectedDate={selectedDate}
          setSelectedDate={(date) => handleDateChange(date)}
        />

        <Card
          title="Upcoming Events"
          extra={<Button type="primary">View All</Button>}
          className="upcoming-events"
        >
          <p className="event-date">{formattedDate}</p>
          <List
            dataSource={eventsData}
            renderItem={(event) => {
              const hasClientProfile = event.client && event.client.profile_url;
              const backgroundColor = hasClientProfile ? "#FFD1DC" : "#FFA500";
              return (
                <List.Item className="event-item">
                  <Card
                    type="inner"
                    title={event.title}
                    className="event-card"
                    style={{ borderLeft: `6px solid #466b94`, backgroundColor }}
                  >
                    <p className="event-time">
                      {event.time} ({event.timezone})
                    </p>

                    {hasClientProfile && (
                      <div className="event-profile">
                        <Avatar src={event.client.avatar} size="small" />
                        <a
                          href={event.client.profile_url}
                          className="client-profile-link"
                        >
                          View Client Profile
                        </a>
                      </div>
                    )}

                    {event.event_url && (
                      <a href={event.event_url}>View Event</a>
                    )}

                    {hasClientProfile && (
                      <div className="icon-wrapper">
                        <VideoCameraOutlined className="event-icon" />
                      </div>
                    )}
                  </Card>
                </List.Item>
              );
            }}
          />
        </Card>
      </div>

      <div className="calendar-view">
        <BigCalendar
          localizer={localizer}
          events={events}
          date={date}
          view={view}
          onNavigate={(newDate) => setDate(newDate)}
          onView={(newView) => setView(newView)}
          selectable
          onSelectSlot={OnTap}
          eventPropGetter={(event) => {
            const backgroundColor = event.hasClientProfile
              ? "#FFD1DC"
              : "#FFA500";
            return {
              style: {
                backgroundColor,
                color: "#fff",
                borderLeft: "4px solid #5684ae",
                borderRadius: "5px",
                marginTop: "2px",
                padding: "4px 8px",
                border: "none",
              },
            };
          }}
          components={{ toolbar: CustomToolbar }}
        />
      </div>
    </div>
  );
};

export default CalendarView;
