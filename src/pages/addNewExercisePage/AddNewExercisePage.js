import React from "react";
import Button from "@mui/material/Button";

export default function AddNewExercisePage({ children }) {
  return (
    <div className="addNewExercisePage">
      <h1>ADD NEW EXERCISE TO LIBRARY</h1>
      <p>check for duplicate exercises</p>
      <p>Categories: bodybuilding, weightlifting and conditioning</p>
      <p>Bodybuilding categories: Core, Upper, Legs</p>
      <p>Click on exercise to go to exercise page</p>
      <Button>Add to library</Button>
      {children}
    </div>
  );
}
