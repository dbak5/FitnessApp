import { ListTable } from "../../../components/tables/ListTable";
import {
  ExerciseDetailData,
  ExerciseDetailColumns,
} from "../../../assets/dummy/ExerciseExample";
import { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

type Props = PropsWithChildren & {};

export const ExerciseDetailContent: FC<Props> = () => {
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography variant="h4">Exercise:</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h4">Front Squat</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="h4">1RM PB:</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h4">70kg</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h4">PB date: </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h4">20/05/2020</Typography>
        </Grid>
        <Grid item xs={12}>
          <ListTable
            data={ExerciseDetailData}
            columns={ExerciseDetailColumns}
            checkboxSelection={false}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
