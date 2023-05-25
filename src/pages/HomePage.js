import React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import WorkoutCalendarTable from "./workout/content/WorkoutCalendarTable";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import SearchInputControlledSelect from "../components/inputs/SearchInputControlledSelect";
import ListTable from "../components/tables/ListTable";
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
import AddModal from "../components/modals/AddModal";
import AddProgramOptions from "./program/content/AddProgramOptions";
import AddExerciseOptions from "./exercise/content/AddExerciseOptions";

export default function HomePage({ children }) {
  return (
    <div className="homePage">
      <h1>Workout Calendar</h1>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker label="Basic date picker" />
        </DemoContainer>
      </LocalizationProvider>
      <WorkoutCalendarTable />
      <Button>
        <NavLink to="/workoutsession">Start Workout</NavLink>
      </Button>
      <p>
        TO DO: Only show program button if there is no workout in the calendar
      </p>
      <AddModal label="Add Exercise" options={ExerciseListSimple}>
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
      </AddModal>

      <AddModal label="Add Program" options={ProgramListSimple}>
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
      </AddModal>
      {children}
    </div>
  );
}
