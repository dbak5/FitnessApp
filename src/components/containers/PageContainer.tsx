import { Box } from "@mui/material";
import { FC, PropsWithChildren } from "react";

const style = {
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

type Props = PropsWithChildren & {};

export const PageContainer: FC<Props> = ({ children }) => {
  return <Box sx={style}>{children}</Box>;
};
