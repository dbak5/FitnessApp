import { ListTable } from "../../components/tables/ListTable";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import {
  ExerciseData,
  ExerciseColumns,
} from "../../assets/dummy/ExerciseExample";
import { AppModal } from "../../components/modals/AppModal";
import { AddExerciseOptions } from "./content/AddExerciseOptions";
import { CreateExerciseForm } from "./content/CreateExerciseForm";
import { ExerciseDetailContent } from "./content/ExerciseDetailContent";
import { AddButton } from "../../components/buttons/AddButton";
import React, { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";

type Props = PropsWithChildren & {};

export const ExercisePage: FC<Props> = ({ children }) => {
  return (
    <Box>
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
      <AppModal label="Create new">
        <CreateExerciseForm />
      </AppModal>
      <AppModal label="Add to calendar">
        <AddExerciseOptions />
        <AddButton />
      </AppModal>
      <Button>
        <NavLink to="/editexercise">Edit Exercise</NavLink>
      </Button>
      <AppModal label="View exercise detail">
        <ExerciseDetailContent />
        <AddButton />
      </AppModal>
      {children}
    </Box>
  );
};
