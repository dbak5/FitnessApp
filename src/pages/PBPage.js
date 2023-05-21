import * as React from "react";
import ListTable from "../components/generic/tables/ListTable";
import { PbData, Columns } from "../assets/dummy/PbExample";

export default function PBPage({ children }) {
  return (
    <div className="pbPage">
      <h1>1 RM PRs</h1>
      <ListTable data={PbData} columns={Columns} checkboxSelection={false} />
      <p>TO DO: Table with date, weight, reps, activity</p>
      <p>TO DO: PB is automatically calculated using history</p>
      <p>TO DO: May want to add aPB manually??</p>
      <p>TO DO: Add goals on to the table</p>
      <p>TO DO: calc sinclair?</p>
      <p>
        TO DO: Table is for snatch, clean and jerk, deadlift, benchpress, back
        squat, front squat only
      </p>
      {children}
    </div>
  );
}
