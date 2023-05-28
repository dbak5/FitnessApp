import Button from "@mui/material/Button";
import { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

type Props = PropsWithChildren & {};

export const EditExercisePage: FC<Props> = ({ children }) => {
  return (
    <Box>
      <Typography variant="h1">Edit Exercise</Typography>
      <Button>Save</Button>
      {children}
    </Box>
  );
};
