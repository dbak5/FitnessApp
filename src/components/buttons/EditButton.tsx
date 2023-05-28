import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  link: string;
  activity: string;
};

export const EditButton: FC<Props> = ({ link, activity }) => {
  return (
    <Button component={NavLink} to={link}>
      Edit {activity}
    </Button>
  );
};
