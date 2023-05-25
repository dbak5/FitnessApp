import React from "react";
import ListTable from "../../../components/tables/ListTable";
import {
  ExerciseDetailData,
  ExerciseDetailColumns,
} from "../../../assets/dummy/ExerciseExample";

export default function ExerciseDetailContent({ children }) {
  return (
    <div className="exerciseDetailContent">
      <h1>Exercise: Front Squat</h1>
      <h2>1RM PB: 70kg</h2>
      <h2>PB date: 20/05/2020</h2>

      <p>Equipment: Barbell</p>

      <ListTable
        data={ExerciseDetailData}
        columns={ExerciseDetailColumns}
        checkboxSelection={false}
      />
      {children}
    </div>
  );
}
