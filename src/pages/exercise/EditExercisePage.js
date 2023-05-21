import * as React from "react";
import Button from "@mui/material/Button";

export default function EditExercisePage({ children }) {
  return (
    <div className="editExercisePage">
      <h1>Edit Exercise</h1>

      <Button>Save</Button>
      {children}
    </div>
  );
}
