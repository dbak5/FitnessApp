import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import React, { FC, PropsWithChildren } from "react";
import { BaseButton } from "../buttons/BaseButton";

//TODO MAKE BUTTON SEPARATE
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 3,
};

type Props = PropsWithChildren & {
  label: string;
  disabled?: boolean;
  icon?: JSX.Element;
  onClick?: () => void;
};

export const BaseModal: FC<Props> = ({ label, children, disabled, icon }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <BaseButton onClick={handleOpen} disabled={disabled} icon={icon}>
        {label}
      </BaseButton>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>{children}</Box>
      </Modal>
    </Box>
  );
};
