import { FC, PropsWithChildren } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const style = {
  bgcolor: "background.paper",
  "& span": {
    margin: 0,
  },
};

type Props = PropsWithChildren & {
  activity: string;
};

export const AddButton: FC<Props> = ({ activity }) => {
  return (
    <Button sx={style} startIcon={<AddIcon />} variant="outlined">
      new {activity}
    </Button>
  );
};
