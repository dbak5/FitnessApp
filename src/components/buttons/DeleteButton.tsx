import { FC, PropsWithChildren } from "react";
import Button from "@mui/material/Button";

const style = {
  bgcolor: "background.paper",
  "& span": {
    margin: 0,
  },
};

type Props = PropsWithChildren & {};

export const DeleteButton: FC<Props> = () => {
  return <Button sx={style}>Delete</Button>;
};
