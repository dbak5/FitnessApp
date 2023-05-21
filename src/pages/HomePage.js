import React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import WorkoutCard from "../components/workout/WorkoutCard";
import AddExerciseModal from "../components/exercise/AddExerciseModal";
import AddProgramModal from "../components/program/AddProgramModal";

export default function HomePage({ children }) {
  return (
    <div className="homePage">
      <h1>Home Page</h1>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker label="Basic date picker" />
        </DemoContainer>
      </LocalizationProvider>
      <WorkoutCard />
      <AddExerciseModal />
      <AddProgramModal />
      {children}
    </div>
  );
}
