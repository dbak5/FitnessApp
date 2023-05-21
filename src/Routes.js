import React from "react";
import { Route, Routes } from "react-router-dom";
import ProgramPage from "./pages/ProgramPage";
import PBPage from "./pages/PBPage";
import HomePage from "./pages/HomePage";
import ExercisePage from "./pages/ExercisePage";
import CreateExercisePage from "./pages/CreateExercisePage";
import CreateProgramPage from "./pages/CreateProgramPage";
import WorkoutSessionPage from "./pages/WorkoutSessionPage";
import UserInfoPage from "./pages/UserInfoPage";

export default function Links() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/program" element={<ProgramPage />} />
        <Route path="/exercise" element={<ExercisePage />} />
        <Route path="/createexercise" element={<CreateExercisePage />} />
        <Route path="/createprogram" element={<CreateProgramPage />} />
        <Route path="/workoutsession" element={<WorkoutSessionPage />} />
        <Route path="/user" element={<UserInfoPage />} />
        <Route path="/pb" element={<PBPage />} />
      </Routes>
    </>
  );
}
