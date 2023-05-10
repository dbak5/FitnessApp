import React from "react";
import DatePicker from "../components/calendar/DatePicker";

export default function ProgramPage({ children }) {
  return (
    <div className="programPage">
      <DatePicker />
      <h1>PROGRAM</h1>
      {children}
    </div>
  );
}
