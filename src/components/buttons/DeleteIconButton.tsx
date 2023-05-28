import { FC, PropsWithChildren } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const style = {
  bgcolor: "background.paper",
  "& span": {
    margin: 0,
  },
};

type Props = PropsWithChildren & {};

export const DeleteIconButton: FC<Props> = () => {
  return <Button sx={style} startIcon={<DeleteIcon />} />;
};
