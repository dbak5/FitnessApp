import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { FC, PropsWithChildren, useState } from "react";
import { DAYS } from "../../assets/dummy/Days";

type Props = PropsWithChildren & {};

export const DatePicker: FC<Props> = () => {
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
};
