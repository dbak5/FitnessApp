import React from "react";
import ProgramContent from "./ProgramContent";

export default function ExerciseCard({ children }) {
  return (
    <div className="exerciseCard">
      <ProgramContent />
      {children}
    </div>
  );
}
