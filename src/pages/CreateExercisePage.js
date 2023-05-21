import React from "react";
import CreateExerciseForm from "../components/exercise/CreateExerciseForm";

export default function CreateExercisePage({ children }) {
  return (
    <div className="createExercisePage">
      <h1>CREATE EXERCISE</h1>
      <CreateExerciseForm />
      <p>
        TO DO: needs to have a property which automatically calculates weight
        incrememnts and progressive overload based on 1rm
      </p>
      {children}
    </div>
  );
}
