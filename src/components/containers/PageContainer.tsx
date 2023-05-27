import { Box } from "@mui/material";
import React, { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren & {};

export const PageContainer: FC<Props> = ({ children }) => {
  return <Box>{children}</Box>;
};
