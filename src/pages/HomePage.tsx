import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { WorkoutCalendarTable } from "./workout/content/WorkoutCalendarTable";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { SearchInputControlledSelect } from "../components/inputs/SearchInputControlledSelect";
import { ListTable } from "../components/tables/ListTable";
import {
  ProgramList,
  ProgramColumns,
  ProgramListSimple,
} from "../assets/dummy/ProgramExample";
import {
  ExerciseData,
  ExerciseColumns,
  ExerciseList as ExerciseListSimple,
} from "../assets/dummy/ExerciseExample";
import { AppModal } from "../components/modals/AppModal";
import { AddProgramOptions } from "./program/content/AddProgramOptions";
import { AddExerciseOptions } from "./exercise/content/AddExerciseOptions";
import { AddButton } from "../components/buttons/AddButton";
import { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

type Props = PropsWithChildren & {};

export const HomePage: FC<Props> = () => {
  return (
    <Box>
      <Typography variant="h1">Workout Calendar</Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker label="Basic date picker" />
        </DemoContainer>
      </LocalizationProvider>
      <WorkoutCalendarTable />
      <Button>
        <NavLink to="/workoutsession">Start Workout</NavLink>
      </Button>
      <Typography variant="body1">
        TO DO: Only show program button if there is no workout in the calendar
      </Typography>
      <AppModal label="Add Exercise">
        <SearchInputControlledSelect
          label="Search"
          options={ExerciseListSimple}
        />
        <ListTable
          data={ExerciseData}
          columns={ExerciseColumns}
          checkboxSelection={true}
        />
        <AddExerciseOptions />
        <AddButton />
      </AppModal>

      <AppModal label="Add Program">
        <SearchInputControlledSelect
          label="Search"
          options={ProgramListSimple}
        />
        <ListTable
          data={ProgramList}
          columns={ProgramColumns}
          checkboxSelection={false}
        />
        <AddProgramOptions />
        <AddButton />
      </AppModal>
    </Box>
  );
};
