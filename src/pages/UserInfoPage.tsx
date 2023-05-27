import Box from "@mui/material/Box";
import React, { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren & {};

export const UserInfoPage: FC<Props> = ({ children }) => {
  return (
    <Box>
      <p>Age, weight, sex, goals</p>
      {children}
    </Box>
  );
};
