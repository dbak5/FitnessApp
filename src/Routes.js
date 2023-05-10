import React from "react";
import { Route, Routes } from "react-router-dom";
import ProgramPage from "./pages/ProgramPage";
import ActivityPage from "./pages/ActivityPage";
import HistoryPage from "./pages/HistoryPage";
import LibraryPage from "./pages/LibraryPage";
import PBPage from "./pages/PBPage";
import HomePage from "./pages/HomePage";

export default function Links() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/program" element={<ProgramPage />} />
        <Route path="/activity" element={<ActivityPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/pb" element={<PBPage />} />
      </Routes>
    </>
  );
}
