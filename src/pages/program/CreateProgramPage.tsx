import { CreateProgramForm } from "./content/CreateProgramForm";
import { FC, PropsWithChildren } from "react";
import Typography from "@mui/material/Typography";

type Props = PropsWithChildren & {};

export const CreateProgramPage: FC<Props> = () => {
  return (
    <>
      <Typography variant="h1">CREATE PROGRAM</Typography>
      <CreateProgramForm place="library" />
    </>
  );
};
