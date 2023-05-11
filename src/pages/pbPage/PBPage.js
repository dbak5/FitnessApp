import * as React from "react";
import TableCard from "../../components/cards/TableCard";
import PBTable from "../../components/tables/PBTable";

export default function PBPage({ children }) {
  return (
    <div className="pbPage">
      <h1>PBS</h1>
      <TableCard>
        <PBTable />
      </TableCard>
      <p>Table with date, weight, reps, activity</p>
      <p>PB is automatically calculated using history</p>
      <p>
        Table is for snatch, clean and jerk, deadlift, benchpress, back squat,
        front squat only
      </p>
      {children}
    </div>
  );
}
