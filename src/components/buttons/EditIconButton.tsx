import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { FC, PropsWithChildren } from "react";
import EditIcon from "@mui/icons-material/Edit";

type Props = PropsWithChildren & {
  link: string;
};

export const EditIconButton: FC<Props> = ({ link }) => {
  return <Button component={NavLink} to={link} startIcon={<EditIcon />} />;
};
