import * as React from "react";

export default function PBPage({ children }) {
  return (
    <div className="pbPage">
      <h1>PBS</h1>
      <p>Table with date, weight, reps, activity</p>
      <p>PB is automatically calculated using history</p>
      <p>
        Table is for snatch, clean and jerk, deadlift, benchpress, back squat,
        front squat only
      </p>
      {children}
    </div>
  );
}
