import React from "react";
import Button from "@mui/material/Button";

export default function ExercisePage({ children }) {
  return (
    <div className="exercisePage">
      <h1 className="exerciseName">{children}</h1>
      <p>Attributes: sets, reps, weight, equipment, shows last 5 activities</p>
      <p>Category: bodybuilding, weightlifting or conditioning</p>
      <p>Bodybuilding categories: Core, Upper, Legs</p>
      <p>Progressive overload calculations for bodybuilding exercises</p>
      <p>Button to view all historical activities - 2 years??</p>
      <Button variant="outlined">Add to program</Button>
      <Button variant="outlined">Add to activity</Button>
      {children}
    </div>
  );
}
