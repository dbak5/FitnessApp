import React from "react";
import AddButton from "../generic/buttons/AddButton";
import ExerciseContent from "./ExerciseContent";

export default function ExerciseCard({ children }) {
  return (
    <div className="exerciseCard">
      <ExerciseContent />
      <AddButton>to calendar</AddButton>
      {children}
    </div>
  );
}
