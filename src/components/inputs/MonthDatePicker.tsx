import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React, { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  label: string;
};

export const MonthDatePicker: FC<Props> = ({ label }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker label={label} />
      </DemoContainer>
    </LocalizationProvider>
  );
};
