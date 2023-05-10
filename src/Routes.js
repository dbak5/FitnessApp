import React from "react";
import { Route, Routes } from "react-router-dom";
import ProgramPage from "./pages/ProgramPage";
import ActivityPage from "./pages/ActivityPage";
import LibraryPage from "./pages/LibraryPage";
import PBPage from "./pages/PBPage";
import HomePage from "./pages/HomePage";
import ExercisePage from "./pages/ExercisePage";
import AddNewExercisePage from "./pages/AddNewExercisePage";

export default function Links() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/program" element={<ProgramPage />} />
        <Route path="/addnewexercise" element={<AddNewExercisePage />} />
        <Route path="/exercise" element={<ExercisePage />} />
        <Route path="/activity" element={<ActivityPage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/pb" element={<PBPage />} />
      </Routes>
    </>
  );
}
