import { Box } from "@mui/material";
import { CreateExerciseForm } from "./content/CreateExerciseForm";
import React, { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren & {};

export const CreateExercisePage: FC<Props> = ({ children }) => {
  return (
    <Box>
      <h1>CREATE EXERCISE</h1>
      <CreateExerciseForm />
      <p>
        TO DO: needs to have a property which automatically calculates weight
        incrememnts and progressive overload based on 1rm
      </p>
      {children}
    </Box>
  );
};
