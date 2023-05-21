import React from "react";
import CreateExerciseModal from "../components/exercise/CreateExerciseModal";
import ExerciseContent from "../components/exercise/ExerciseContent";

export default function ExercisePage({ children }) {
  return (
    <div className="exercisePage">
      <h1>Exercise</h1>
      <ExerciseContent />
      <p>Progressive overload calculations for bodybuilding exercises</p>
      <p>filter exercises</p>
      <CreateExerciseModal />
      {children}
    </div>
  );
}
