import React from "react";
import CreateExerciseModal from "../components/exercise/CreateExerciseModal";
import ListTable from "../components/generic/tables/ListTable";
import { ExerciseData, Columns } from "../assets/dummy/ExerciseExample";

export default function ExercisePage({ children }) {
  return (
    <div className="exercisePage">
      <h1>Exercise Library</h1>
      <ListTable
        data={ExerciseData}
        columns={Columns}
        checkboxSelection={true}
      />
      <p>TO DO: Progressive overload calculations for bodybuilding exercises</p>
      <p>TO DO: filter exercises</p>
      <p>
        TO DO: be able to click on an exercise in list to bring up exercise
        detail
      </p>
      <CreateExerciseModal />
      {children}
    </div>
  );
}
