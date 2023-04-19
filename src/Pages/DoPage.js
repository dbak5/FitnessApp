import React from "react";
import DatePicker from "../components/calendar/DatePicker";

export default function DoPage({ children }) {
  return (
    <div className="doPage">
      <DatePicker />
      {children}
    </div>
  );
}
