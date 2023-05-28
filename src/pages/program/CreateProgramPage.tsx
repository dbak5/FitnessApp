import { Box } from "@mui/material";
import { CreateProgramForm } from "./content/CreateProgramForm";
import { FC, PropsWithChildren } from "react";
import Typography from "@mui/material/Typography";
import { AddButton } from "../../components/buttons/AddButton";

type Props = PropsWithChildren & {};

export const CreateProgramPage: FC<Props> = () => {
  return (
    <Box>
      <Typography variant="h1">CREATE PROGRAM</Typography>
      <CreateProgramForm />
    </Box>
  );
};
