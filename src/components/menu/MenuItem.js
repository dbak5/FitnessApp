import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppMenuItem({ component, to, children }) {
  return (
    <BrowserRouter>
      <MenuItem to={to} component={component}>
        {children}
      </MenuItem>
    </BrowserRouter>
  );
}
