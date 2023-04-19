import React, { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const DAYS = [
  {
    key: "sunday",
    label: "S",
  },
  {
    key: "monday",
    label: "M",
  },
  {
    key: "tuesday",
    label: "T",
  },
  {
    key: "wednesday",
    label: "W",
  },
  {
    key: "thursday",
    label: "T",
  },
  {
    key: "friday",
    label: "F",
  },
  {
    key: "saturday",
    label: "S",
  },
];

export default function ToggleDays() {
  const [days, setDays] = useState([0, 2, 3]);
  return (
    <div className="weekDayPicker">
      <ToggleButtonGroup
        size="small"
        arial-label="Days of the week"
        value={days}
        onChange={(event, value) => setDays(value)}
      >
        {DAYS.map((day, index) => (
          <ToggleButton key={day.key} value={index} aria-label={day.key}>
            {day.label}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  );
}
