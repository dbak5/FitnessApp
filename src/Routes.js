import React from "react";
import { Route, Routes } from "react-router-dom";
import ProgramPage from "./pages/program/ProgramPage";
import PBPage from "./pages/PBPage";
import HomePage from "./pages/HomePage";
import ExercisePage from "./pages/exercise/ExercisePage";
import CreateExercisePage from "./pages/exercise/CreateExercisePage";
import CreateProgramPage from "./pages/program/CreateProgramPage";
import WorkoutSessionPage from "./pages/workout/WorkoutSessionPage";
import UserInfoPage from "./pages/UserInfoPage";
import EditProgramPage from "./pages/program/EditProgramPage";
import EditExercisePage from "./pages/exercise/EditExercisePage";
import ExerciseDetailContent from "./pages/exercise/content/ExerciseDetailContent";
import ProgramDetailContent from "./pages/program/content/ProgramDetailContent";

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
        <Route path="/editprogram" element={<EditProgramPage />} />
        <Route path="/programdetail" element={<ProgramDetailContent />} />
        <Route path="/editexercise" element={<EditExercisePage />} />
        <Route path="/exercisedetail" element={<ExerciseDetailContent />} />
        <Route path="/user" element={<UserInfoPage />} />
        <Route path="/pb" element={<PBPage />} />
      </Routes>
    </>
  );
}
