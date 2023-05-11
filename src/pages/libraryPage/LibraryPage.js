import React from "react";
import ExercisesTable from "../../components/tables/ExercisesTable";
import Button from "@mui/material/Button";
import SearchInput from "../../components/inputs/SearchInput";
import { NavLink } from "react-router-dom";
import TableCard from "../../components/cards/TableCard";

export default function LibraryPage({ children }) {
  return (
    <div className="libraryPage">
      <h1>LIBRARY</h1>
      <SearchInput />
      <TableCard>
        <ExercisesTable />
      </TableCard>
      <Button>
        <NavLink to="/addnewexercise">Add New Exercise</NavLink>
      </Button>
      <p>filter exercises</p>
      <p>
        When check boxes selected butto nto appear to add to program or activity
      </p>
      <p>Contains all workout activities and the dates</p>
      <p>Table of activities by exercise</p>
      <p>Click on exercise to go to exercise page</p>
      {children}
    </div>
  );
}
