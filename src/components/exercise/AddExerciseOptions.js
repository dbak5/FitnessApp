import * as React from "react";
import MonthDatePicker from "../generic/inputs/MonthDatePicker";
import DatePicker from "../generic/inputs/DatePicker";
import { TextField } from "@mui/material";

export default function AddExerciseOptions({ children }) {
  return (
    <div>
      <p>Select start date</p>
      <MonthDatePicker label="Start date" />
      <p>Select days of week to workout</p>
      <DatePicker />
      <p>Select number of times to repeat</p>
      <TextField />
      {children}
    </div>
  );
}
