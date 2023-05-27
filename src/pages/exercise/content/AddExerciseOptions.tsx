import { MonthDatePicker } from "../../../components/inputs/MonthDatePicker";
import { DatePicker } from "../../../components/inputs/DatePicker";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import React, { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren & {};

export const AddExerciseOptions: FC<Props> = ({ children }) => {
  return (
    <Box>
      <p>Select start date</p>
      <MonthDatePicker label="Start date" />
      <p>Select days of week to workout</p>
      <DatePicker />
      <p>Select number of times to repeat</p>
      <TextField />
      {children}
    </Box>
  );
};
