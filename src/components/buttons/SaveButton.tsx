import { FC, PropsWithChildren } from "react";
import Button from "@mui/material/Button";

const style = {
  bgcolor: "background.paper",
  "& span": {
    margin: 0,
  },
};

type Props = PropsWithChildren & {};

export const SaveButton: FC<Props> = () => {
  return <Button sx={style}>save</Button>;
};
