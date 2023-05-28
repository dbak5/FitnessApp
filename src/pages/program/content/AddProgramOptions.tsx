import { MonthDatePicker } from "../../../components/inputs/MonthDatePicker";
import { DatePicker } from "../../../components/inputs/DatePicker";
import Box from "@mui/material/Box";
import { FC, PropsWithChildren } from "react";
import Typography from "@mui/material/Typography";

type Props = PropsWithChildren & {};

export const AddProgramOptions: FC<Props> = ({ children }) => {
  return (
    <Box>
      <Typography variant="body1">Select start date</Typography>
      <MonthDatePicker label="Start date" />
      <Typography variant="body1">Select days of week to workout</Typography>
      <DatePicker />
      {children}
    </Box>
  );
};
