import Button from "@mui/material/Button";
import React, { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";

type Props = PropsWithChildren & {};

export const EditExercisePage: FC<Props> = ({ children }) => {
  return (
    <Box>
      <h1>Edit Exercise</h1>

      <Button>Save</Button>
      {children}
    </Box>
  );
};
