import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { FC, PropsWithChildren } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { SearchInputControlledSelect } from "../../../components/inputs/SearchInputControlledSelect";
import {
  EquipmentList,
  ExerciseList,
} from "../../../assets/dummy/ExerciseExample";

type Props = PropsWithChildren & {};

export const AddWorkoutOptions: FC<Props> = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="body1">Exercise</Typography>
        </Grid>
        <Grid item xs={6}>
          <SearchInputControlledSelect label="Search" options={ExerciseList} />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">Sets</Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">Reps</Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">Equipment</Typography>
        </Grid>
        <Grid item xs={6}>
          <SearchInputControlledSelect label="Search" options={EquipmentList} />
        </Grid>
      </Grid>
    </Box>
  );
};
