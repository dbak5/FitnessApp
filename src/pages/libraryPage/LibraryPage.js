import React from "react";
import ExercisesTable from "../../components/tables/ExercisesTable";
import SearchInput from "../../components/inputs/SearchInput";
import { NavLink } from "react-router-dom";
import TableCard from "../../components/cards/TableCard";
import AddButton from "../../components/buttons/AddButton";

export default function LibraryPage({ children }) {
  return (
    <div className="libraryPage">
      <h1>LIBRARY</h1>
      <SearchInput />
      <TableCard>
        <ExercisesTable />
      </TableCard>
      <AddButton>
        <NavLink to="/addnewexercise">Add New Exercise</NavLink>
      </AddButton>
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
