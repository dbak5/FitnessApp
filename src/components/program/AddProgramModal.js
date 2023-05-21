import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import ProgramCard from "./ProgramCard";
import AddButton from "../generic/buttons/AddButton";
import MonthDatePicker from "../generic/inputs/MonthDatePicker";
import DatePicker from "../generic/inputs/DatePicker";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AddProgramModal({ children }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Add Program</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ProgramCard />
          <p>Select start date</p>
          <MonthDatePicker label="Start date" />
          <p>Select days of week to workout</p>
          <DatePicker />
          <AddButton>to calendar</AddButton>
          <p>Table with a program name input.</p>
          <p>
            Select start date and program automatically sets out program in
            calendar
          </p>
          {children}
        </Box>
      </Modal>
    </div>
  );
}
