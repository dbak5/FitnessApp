import React from "react";
import { Route, Routes } from "react-router-dom";
import ProgramPage from "./pages/ProgramPage";
import PBPage from "./pages/PBPage";
import HomePage from "./pages/HomePage";
import ExercisePage from "./pages/ExercisePage";

export default function Links() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/program" element={<ProgramPage />} />
        <Route path="/exercise" element={<ExercisePage />} />
        <Route path="/pb" element={<PBPage />} />
      </Routes>
    </>
  );
}
