import { FC, PropsWithChildren } from "react";
import Button from "@mui/material/Button";

const style = {
  bgcolor: "background.paper",
  "& span": {
    margin: 0,
  },
};

//TODO GET ONCLICK AND MOUSEDOWN WORKING
type Props = PropsWithChildren & {
  icon?: JSX.Element;
  onClick?: () => void;
  onMouseDown?: (event: React.MouseEvent) => void;
  disabled?: boolean;
  label?: string;
};

export const BaseButton: FC<Props> = ({
  children,
  icon,
  onClick,
  onMouseDown,
  disabled,
  label,
}) => {
  return (
    <Button
      sx={style}
      startIcon={icon}
      onClick={onClick}
      onMouseDown={onMouseDown}
      disabled={disabled}
    >
      {label}
      {children}
    </Button>
  );
};
