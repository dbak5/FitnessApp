import React from "react";
import { TextField } from "@mui/material";

export default function TextInput({ children, label }) {
  return (
    <TextField id="outlined-basic" label={label} variant="outlined">
      {children}
    </TextField>
  );
}
