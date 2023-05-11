import React from "react";
import AddButton from "../../components/buttons/AddButton";

export default function ExercisePage({ children }) {
  return (
    <div className="exercisePage">
      <h1>Exercise</h1>
      <p>Attributes: sets, reps, weight, equipment, shows last 5 activities</p>
      <p>Category: bodybuilding, weightlifting or conditioning</p>
      <p>Bodybuilding categories: Core, Upper, Legs</p>
      <p>Progressive overload calculations for bodybuilding exercises</p>
      <p>Button to view all historical activities - 2 years??</p>
      <AddButton>to program</AddButton>
      <AddButton>to activity</AddButton>
      {children}
    </div>
  );
}
