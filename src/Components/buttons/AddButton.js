import React from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

export default function AddButton({ children }) {
  return (
    <Button startIcon={<AddIcon />} variant="outlined">
      {children}
    </Button>
  );
}
