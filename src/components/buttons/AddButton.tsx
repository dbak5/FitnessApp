import { FC, PropsWithChildren } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

type Props = PropsWithChildren & {};

export const AddButton: FC<Props> = ({ children }) => {
  return (
    <Button startIcon={<AddIcon />} variant="outlined">
      {children}
    </Button>
  );
};
