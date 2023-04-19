import React from "react";
import DatePicker from "../components/calendar/DatePicker";

export default function AddPage({ children }) {
  return (
    <div className="addPage">
      <DatePicker />
      {children}
    </div>
  );
}
