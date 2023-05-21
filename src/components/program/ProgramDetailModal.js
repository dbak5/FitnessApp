import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import ListTable from "../generic/tables/ListTable";
import {
  ProgramExample,
  ColumnsProgramExample,
} from "../../assets/dummy/ProgramExample";
import { NavLink } from "react-router-dom";

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

export default function ProgramDetailModal({ children }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>View Program Detail</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ListTable
            data={ProgramExample}
            columns={ColumnsProgramExample}
            checkboxSelection={false}
          />
          <Button>
            <NavLink to="/editprogram">Make changes</NavLink>
          </Button>
          {children}
        </Box>
      </Modal>
    </div>
  );
}
