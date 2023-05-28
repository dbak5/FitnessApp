import { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { SaveButton } from "../../components/buttons/SaveButton";

type Props = PropsWithChildren & {};

export const EditExercisePage: FC<Props> = () => {
  return (
    <Box>
      <Typography variant="h1">Edit Exercise</Typography>
      <SaveButton />
    </Box>
  );
};
