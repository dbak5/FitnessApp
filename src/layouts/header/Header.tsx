import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import { NavLink } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import React, { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren & {};

export const Header: FC<Props> = ({}) => {
  const [auth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  // const [auth, setAuth] = React.useState(true);
  // const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };
  // React.MouseEventHandler<HTMLButtonElement>;

  const handleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
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
            <Box>
              <IconButton onClick={handleMenu}>
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
                  <MenuItem onClick={handleClose} component={NavLink} to="/">
                    Home
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    component={NavLink}
                    to="/exercise"
                  >
                    Exercise
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    component={NavLink}
                    to="/createexercise"
                  >
                    + Exercise
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    component={NavLink}
                    to="/program"
                  >
                    Programs
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    component={NavLink}
                    to="/createprogram"
                  >
                    + Program
                  </MenuItem>
                  <MenuItem onClick={handleClose} component={NavLink} to="/pb">
                    PBs
                  </MenuItem>
                </Menu>
              </>
            </Box>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Fitness App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
