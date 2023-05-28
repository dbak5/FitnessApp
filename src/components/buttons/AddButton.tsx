import { FC, PropsWithChildren } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const style = {
  bgcolor: "background.paper",
  "& span": {
    margin: 0,
  },
};

type Props = PropsWithChildren & {};

export const AddButton: FC<Props> = ({ children }) => {
  return (
    <Button sx={style} startIcon={<AddIcon />} variant="outlined">
      {children}
    </Button>
  );
};
