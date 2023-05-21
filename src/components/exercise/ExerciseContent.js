import React from "react";
import ExerciseListTable from "./ExerciseListTable";
import TableCard from "../generic/cards/TableCard";

export default function ExerciseContent({ children }) {
  return (
    <div className="exerciseContent">
      <TableCard>
        <ExerciseListTable />
      </TableCard>
      {children}
    </div>
  );
}
