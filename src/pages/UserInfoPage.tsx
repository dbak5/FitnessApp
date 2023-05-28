import Box from "@mui/material/Box";
import { FC, PropsWithChildren } from "react";
import Typography from "@mui/material/Typography";

type Props = PropsWithChildren & {};

export const UserInfoPage: FC<Props> = () => {
  return (
    <Box>
      <Typography variant="h1">User Page</Typography>
      <Typography variant="body1">Age, weight, sex, goals</Typography>
    </Box>
  );
};
