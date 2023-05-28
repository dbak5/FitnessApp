import { FC, PropsWithChildren } from "react";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";

const style = {
  bgcolor: "background.paper",
  "& span": {
    margin: 0,
  },
};

type Props = PropsWithChildren & {};

export const SaveIconButton: FC<Props> = () => {
  return <Button sx={style} startIcon={<SaveIcon />} />;
};
