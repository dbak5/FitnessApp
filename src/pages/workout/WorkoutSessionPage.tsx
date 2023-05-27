import Box from "@mui/material/Box";
import React, { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren & {};

export const WorkoutSessionPage: FC<Props> = ({ children }) => {
  return (
    <Box>
      <p>TO DO: Somehow denote if there is a failed or made lift</p>
      {children}
    </Box>
  );
};
