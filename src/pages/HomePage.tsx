import { WorkoutCalendarTable } from "./workout/content/WorkoutCalendarTable";
import { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { MonthDatePicker } from "../components/inputs/MonthDatePicker";
import { StartWorkoutButton } from "../components/buttons/StartWorkoutButton";
import { AddModal } from "../components/modals/AddModal";
import {
  ExerciseData,
  ExerciseList,
  AddExerciseColumns,
} from "../assets/dummy/ExerciseExample";
import {
  ProgramList,
  ProgramColumns,
  ProgramListSimple,
} from "../assets/dummy/ProgramExample";
import { AddProgramOptions } from "./program/content/AddProgramOptions";
import { AddExerciseOptions } from "./exercise/content/AddExerciseOptions";

type Props = PropsWithChildren & {};

export const HomePage: FC<Props> = () => {
  return (
    <Box>
      <Typography variant="h1">Workout Calendar</Typography>
      <MonthDatePicker label="Pick date" />
      <WorkoutCalendarTable />
      <StartWorkoutButton />
      <AddModal
        label="Add exercise"
        options={ExerciseList}
        data={ExerciseData}
        columns={AddExerciseColumns}
        checkboxSelection={false}
        place="calendar"
      >
        <AddExerciseOptions />
      </AddModal>
      <AddModal
        label="Add program"
        options={ProgramListSimple}
        data={ProgramList}
        columns={ProgramColumns}
        checkboxSelection={false}
        place="calendar"
      >
        <AddProgramOptions />
      </AddModal>
    </Box>
  );
};
