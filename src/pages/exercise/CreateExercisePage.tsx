import { CreateExerciseForm } from "./content/CreateExerciseForm";
import { FC, PropsWithChildren } from "react";
import Typography from "@mui/material/Typography";

type Props = PropsWithChildren & {};

// TODO: needs to have a property which automatically calculates weight incrememnts and progressive overload based on 1rm

export const CreateExercisePage: FC<Props> = () => {
  return (
    <>
      <Typography variant="h1">CREATE EXERCISE</Typography>
      <CreateExerciseForm />
    </>
  );
};
