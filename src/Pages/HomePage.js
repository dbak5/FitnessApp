import React from "react";
import DatePicker from "../components/calendar/DatePicker";

export default function HomePage({ children }) {
  return (
    <div className="activityPage">
      <DatePicker />
      <h1>Home Page</h1>
      {children}
    </div>
  );
}
