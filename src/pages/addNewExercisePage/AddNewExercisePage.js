import React from "react";
import NewExerciseForm from "../../components/forms/NewExerciseForm";

export default function AddNewExercisePage({ children }) {
  return (
    <div className="addNewExercisePage">
      <h1>ADD NEW EXERCISE TO LIBRARY</h1>
      <NewExerciseForm />
      <p>check for duplicate exercises</p>
      {children}
    </div>
  );
}
