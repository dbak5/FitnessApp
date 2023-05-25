import * as React from "react";
import MonthDatePicker from "../../../components/inputs/MonthDatePicker";
import DatePicker from "../../../components/inputs/DatePicker";

export default function AddProgramOptions({ children }) {
  return (
    <div>
      <p>Select start date</p>
      <MonthDatePicker label="Start date" />
      <p>Select days of week to workout</p>
      <DatePicker />
      {children}
    </div>
  );
}
