import React from "react";
import DatePicker from "../components/calendar/DatePicker";

export default function HistoryPage({ children }) {
  return (
    <div className="historyPage">
      <DatePicker />
      {children}
    </div>
  );
}