import DatePicker from "../components/calendar/DatePicker";
import Button from "@mui/material/Button";
import * as React from "react";

export default function ActivityPage({ children }) {
  return (
    <div className="activityPage">
      <DatePicker />
      <Button variant="outlined">Add Exercise</Button>
      <h1>ACTIVITY</h1>
      <p>Activity is a workout</p>
      <p>Add button to add an extra exercise from the library</p>
      <p>Programs are added to workout automatically</p>
      <p>Comment section against each lift</p>
      <p>Somehow denote if there is a failed or made lift</p>
      {children}
    </div>
  );
}
