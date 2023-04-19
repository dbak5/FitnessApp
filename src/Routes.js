import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddPage from "./pages/AddPage";
import DoPage from "./pages/DoPage";
import HistoryPage from "./pages/HistoryPage";
import LibraryPage from "./pages/LibraryPage";
import PBPage from "./pages/PBPage";

export default function Links() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/add" element={<AddPage />} />
        <Route path="/do" element={<DoPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/pb" element={<PBPage />} />
      </Routes>
    </BrowserRouter>
  );
}
