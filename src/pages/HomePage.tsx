import { WorkoutCalendarTable } from "./workout/content/WorkoutCalendarTable";
import { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { MonthDatePicker } from "../components/inputs/MonthDatePicker";
import { StartWorkoutButton } from "../components/buttons/StartWorkoutButton";
import { AddModal } from "../components/modals/AddModal";
import {
  ExerciseData,
  ExerciseColumns,
  ExerciseList as ExerciseListSimple,
} from "../assets/dummy/ExerciseExample";
import {
  ProgramList,
  ProgramColumns,
  ProgramListSimple,
} from "../assets/dummy/ProgramExample";

type Props = PropsWithChildren & {};

//TO DO: Only show program button if there is no workout in the calendar
export const HomePage: FC<Props> = () => {
  return (
    <Box>
      <Typography variant="h1">Workout Calendar</Typography>
      <MonthDatePicker label="Pick date" />
      <WorkoutCalendarTable />
      <StartWorkoutButton />
      <AddModal
        label="Add exercise"
        options={ExerciseListSimple}
        data={ExerciseData}
        columns={ExerciseColumns}
        checkboxSelection={true}
      />
      <AddModal
        label="Add program"
        options={ProgramListSimple}
        data={ProgramList}
        columns={ProgramColumns}
        checkboxSelection={false}
      />
    </Box>
  );
};