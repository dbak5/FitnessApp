import React from "react";
import ListTable from "../../../components/tables/ListTable";
import {
  ProgramDetailExample,
  ProgramDetailColumns,
} from "../../../assets/dummy/ProgramExample";

export default function ProgramDetailContent({ children }) {
  return (
    <div className="programDetailContent">
      <h1>Program Name: Weightlifting Block 1</h1>
      <ListTable
        data={ProgramDetailExample}
        columns={ProgramDetailColumns}
        checkboxSelection={false}
      />
      <h2>Dates complete:</h2>
      <h3> 20/05/2020</h3>
      <h3> 28/05/2021</h3>
      <h3> 27/05/2022</h3>
      {children}
    </div>
  );
}
