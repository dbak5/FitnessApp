import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import { NavLink } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";

export default function Header() {
  const [auth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  // const [auth, setAuth] = React.useState(true);
  // const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <>
                <Menu
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>
                    <NavLink to="/">Home </NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <NavLink to="/exercise">Exercise</NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <NavLink to="/createexercise">+ Exercise</NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <NavLink to="/program">Programs</NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <NavLink to="/createprogram">+ Program</NavLink>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <NavLink to="/pb">PBs</NavLink>
                  </MenuItem>
                </Menu>
              </>
            </div>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Fitness App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
