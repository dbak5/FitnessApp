import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React, { FC, PropsWithChildren } from "react";

//TODO MADE BUTTON SEPARATE AND NOW MODALS WONT OPEN
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

type Props = PropsWithChildren & {};

export const BaseModal: FC<Props> = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>{children}</Box>
      </Modal>
    </>
  );
};
