import React from "react";
import ListTable from "../components/generic/tables/ListTable";
import {
  ExerciseData,
  ExerciseColumns,
  ExerciseList,
} from "../assets/dummy/ExerciseExample";
import AddModal from "../components/generic/modals/AddModal";
import AddExerciseOptions from "../components/exercise/AddExerciseOptions";
import CreateExerciseForm from "../components/exercise/CreateExerciseForm";

export default function ExercisePage({ children }) {
  return (
    <div className="exercisePage">
      <h1>Exercise Library</h1>
      <ListTable
        data={ExerciseData}
        columns={ExerciseColumns}
        checkboxSelection={true}
      />
      <p>TO DO: Progressive overload calculations for bodybuilding exercises</p>
      <p>TO DO: filter exercises</p>
      <p>TO DO: add exercises by frequency</p>
      <p>
        TO DO: be able to click on an exercise in list to bring up exercise
        detail
      </p>
      <AddModal label="Create new">
        <CreateExerciseForm />
      </AddModal>
      <AddModal label="Add to calendar" options={ExerciseList}>
        <AddExerciseOptions />
      </AddModal>
      {children}
    </div>
  );
}
