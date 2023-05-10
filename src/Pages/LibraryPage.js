import React from "react";
import ExercisesTable from "../components/tables/ExercisesTable";
import Button from "@mui/material/Button";
import SearchInput from "../components/inputs/SearchInput";

export default function LibraryPage({ children }) {
  return (
    <div className="libraryPage">
      <h1>LIBRARY</h1>
      <SearchInput />
      <ExercisesTable />
      <Button>Add New Exercise</Button>
      <p>Search for exercise</p>
      <p>Categories: bodybuilding, weightlifting and conditioning</p>
      <p>Bodybuilding categories: Core, Upper, Legs</p>
      <p>Contains all workout activities and the dates</p>
      <p>Table of activities by exercise</p>
      <p>Click on exercise to go to exercise page</p>
      {children}
    </div>
  );
}
