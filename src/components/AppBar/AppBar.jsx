import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import PropTypes from "prop-types";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeButton } from "./../ThemeButton/ThemeButton";
import DrawerMenu from "../DrawerMenu/DrawerMenu";
import { useState } from "react";

export const HeaderBar = ({ setModeTheme, modeTheme }) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Helper
          </Typography>
          <DrawerMenu toggleDrawer={toggleDrawer} open={open} />
          <ThemeButton setModeTheme={setModeTheme} modeTheme={modeTheme} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

HeaderBar.propTypes = {
  setModeTheme: PropTypes.func.isRequired,
  modeTheme: PropTypes.oneOf(["light", "dark"]).isRequired,
};
