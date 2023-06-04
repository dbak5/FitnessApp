import { NavLink } from "react-router-dom";
import { FC, PropsWithChildren } from "react";
import { BaseLinkButton } from "./BaseLinkButton";

type Props = PropsWithChildren & {
  link: string;
  activity: string;
};

export const EditButton: FC<Props> = ({ link, activity }) => {
  return (
    <BaseLinkButton component={NavLink} link={link}>
      Edit {activity}
    </BaseLinkButton>
  );
};
