import React from "react";
import { Route, Routes } from "react-router-dom";
import ProgramPage from "./pages/programPage/ProgramPage";
import ActivityPage from "./pages/activityPage/ActivityPage";
import LibraryPage from "./pages/libraryPage/LibraryPage";
import PBPage from "./pages/pbPage/PBPage";
import HomePage from "./pages/homePage/HomePage";
import ExercisePage from "./pages/exercisePage/ExercisePage";
import AddNewExercisePage from "./pages/addNewExercisePage/AddNewExercisePage";

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
