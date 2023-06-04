import { FC, PropsWithChildren } from "react";
import Button from "@mui/material/Button";
import { NavLinkProps } from "react-router-dom";

const style = {
  bgcolor: "background.paper",
  "& span": {
    margin: 0,
  },
};

type Props = PropsWithChildren & {
  component: React.ForwardRefExoticComponent<
    NavLinkProps & React.RefAttributes<HTMLAnchorElement>
  >;
  link: string;
};

export const BaseLinkButton: FC<Props> = ({ children, component, link }) => {
  return (
    <Button sx={style} component={component} to={link}>
      {children}
    </Button>
  );
};
