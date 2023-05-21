import React from "react";
import ListTable from "../../components/tables/ListTable";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import {
  ExerciseData,
  ExerciseColumns,
  ExerciseList,
} from "../../assets/dummy/ExerciseExample";
import AddModal from "../../components/modals/AddModal";
import AddExerciseOptions from "./AddExerciseOptions";
import CreateExerciseForm from "./CreateExerciseForm";

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
      <Button>
        <NavLink to="/editexercise">Edit Exercise</NavLink>
      </Button>
      {children}
    </div>
  );
}
