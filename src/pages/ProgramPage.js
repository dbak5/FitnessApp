import React from "react";
import ProgramContent from "../components/program/ProgramContent";
import CreateProgramModal from "../components/program/CreateProgramModal";

export default function ProgramPage({ children }) {
  return (
    <div className="programPage">
      <h1>PROGRAM LIST</h1>
      <ProgramContent />
      <p>
        to do: be able to select program from table to add to calendar, select
        days of the week to workout/frequency
      </p>
      <p>to do: be able to select program from table and edit/add exercises</p>
      <CreateProgramModal />
      {children}
    </div>
  );
}
