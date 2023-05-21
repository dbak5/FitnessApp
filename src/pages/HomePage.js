import React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import AddExerciseModal from "../components/exercise/AddExerciseModal";
import AddProgramModal from "../components/program/AddProgramModal";
import WorkoutCalendarTable from "../components/workout/WorkoutCalendarTable";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

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
      <AddExerciseModal />
      <AddProgramModal />
      {children}
    </div>
  );
}
