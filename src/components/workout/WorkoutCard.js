import React from "react";
import WorkoutTable from "./WorkoutTable";
import TableCard from "../generic/cards/TableCard";

export default function WorkoutCard({ children }) {
  return (
    <div className="workoutCard">
      <TableCard>
        <WorkoutTable />
      </TableCard>
      <p>Programs are added to calendar automatically</p>
      <p>Somehow denote if there is a failed or made lift</p>
      {children}
    </div>
  );
}
