import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateProgramPage from "./pages/createProgramPage/CreateProgramPage";
import ProgramPage from "./pages/programPage/ProgramPage";
import ActivityPage from "./pages/activityPage/ActivityPage";
import LibraryPage from "./pages/libraryPage/LibraryPage";
import PBPage from "./pages/pbPage/PBPage";
import HomePage from "./pages/homePage/HomePage";
import ExercisePage from "./pages/exercisePage/ExercisePage";
import CreateExercisePage from "./pages/createExercisePage/CreateExercisePage";

export default function Links() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/createprogram" element={<CreateProgramPage />} />
        <Route path="/program" element={<ProgramPage />} />
        <Route path="/createexercise" element={<CreateExercisePage />} />
        <Route path="/exercise" element={<ExercisePage />} />
        <Route path="/activity" element={<ActivityPage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/pb" element={<PBPage />} />
      </Routes>
    </>
  );
}
