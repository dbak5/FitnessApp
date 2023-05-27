import { Box } from "@mui/material";
import { CreateProgramForm } from "./content/CreateProgramForm";
import React, { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren & {};

export const CreateProgramPage: FC<Props> = ({ children }) => {
  return (
    <Box>
      <h1>CREATE PROGRAM</h1>
      <CreateProgramForm />
      {children}
    </Box>
  );
};
