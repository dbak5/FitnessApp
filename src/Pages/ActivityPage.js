import React from "react";
import DatePicker from "../components/calendar/DatePicker";

export default function ActivityPage({ children }) {
  return (
    <div className="activityPage">
      <DatePicker />
      <h1>ACTIVITY</h1>
      {children}
    </div>
  );
}
