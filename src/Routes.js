import React from "react";
import { Route, Routes } from "react-router-dom";

export default function Links() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Add" element={<AddExercisesPage />} />
    </Routes>
  );
}
