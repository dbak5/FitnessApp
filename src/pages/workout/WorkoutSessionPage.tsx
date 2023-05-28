import Box from "@mui/material/Box";
import { FC, PropsWithChildren } from "react";
import Typography from "@mui/material/Typography";

type Props = PropsWithChildren & {};

export const WorkoutSessionPage: FC<Props> = ({ children }) => {
  return (
    <Box>
      <Typography variant="body1">
        TO DO: Somehow denote if there is a failed or made lift
      </Typography>
      {children}
    </Box>
  );
};
