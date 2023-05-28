import { MonthDatePicker } from "../../../components/inputs/MonthDatePicker";
import { DatePicker } from "../../../components/inputs/DatePicker";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { FC, PropsWithChildren } from "react";
import Typography from "@mui/material/Typography";

type Props = PropsWithChildren & {};

export const AddExerciseOptions: FC<Props> = () => {
  return (
    <Box>
      <Typography variant="body1">Select start date</Typography>
      <MonthDatePicker label="Start date" />
      <Typography variant="body1">Select days of week to workout</Typography>
      <DatePicker />
      <Typography variant="body1">Select number of times to repeat</Typography>
      <TextField />
    </Box>
  );
};
