import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./pages/App";
import AddPage from "./pages/AddPage";
import DoPage from "./pages/DoPage";
import HistoryPage from "./pages/HistoryPage";
import LibraryPage from "./pages/LibraryPage";
import PBPage from "./pages/PBPage";

export default function Links() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/add" element={<AddPage />} />
      <Route path="/do" element={<DoPage />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/library" element={<LibraryPage />} />
      <Route path="/pb" element={<PBPage />} />
    </Routes>
  );
}
