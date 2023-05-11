import React from "react";
import CreateExerciseForm from "../../components/forms/CreateExerciseForm";

export default function AddNewExercisePage({ children }) {
  return (
    <div className="addNewExercisePage">
      <h1>ADD NEW EXERCISE TO LIBRARY</h1>
      <CreateExerciseForm />
      <p>check for duplicate exercises</p>
      {children}
    </div>
  );
}
