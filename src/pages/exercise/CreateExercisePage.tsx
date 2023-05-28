import { Box } from "@mui/material";
import { CreateExerciseForm } from "./content/CreateExerciseForm";
import { FC, PropsWithChildren } from "react";
import Typography from "@mui/material/Typography";

type Props = PropsWithChildren & {};

export const CreateExercisePage: FC<Props> = ({ children }) => {
  return (
    <Box>
      <Typography variant="h1">CREATE EXERCISE</Typography>
      <CreateExerciseForm />
      <Typography variant="body1">
        TODO: needs to have a property which automatically calculates weight
        incrememnts and progressive overload based on 1rm
      </Typography>
      {children}
    </Box>
  );
};
