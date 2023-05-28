import { MonthDatePicker } from "../../../components/inputs/MonthDatePicker";
import { DatePicker } from "../../../components/inputs/DatePicker";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { FC, PropsWithChildren } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

type Props = PropsWithChildren & {};

export const AddExerciseOptions: FC<Props> = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="body1">Select start date</Typography>
        </Grid>
        <Grid item xs={6}>
          <MonthDatePicker label="Start date" />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">
            Select days of week to workout
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <DatePicker />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">
            Select number of times to repeat
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField />
        </Grid>
      </Grid>
    </Box>
  );
};
