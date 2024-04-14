import { Box, Fade, IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import PropTypes from "prop-types";

export const ThemeButton = ({ setModeTheme, modeTheme }) => {
  return (
    <>
      <IconButton
        onClick={() =>
          setModeTheme((prevMode) => (prevMode === "light" ? "dark" : "light"))
        }
      >
        <Fade in={modeTheme === "dark"} timeout={{ enter: 1000 }}>
          <Box sx={{ position: "absolute" }}>
            <LightModeIcon />
          </Box>
        </Fade>
        <Fade in={modeTheme === "light"} timeout={{ enter: 1000 }}>
          <ModeNightIcon />
        </Fade>
      </IconButton>
    </>
  );
};

ThemeButton.propTypes = {
  setModeTheme: PropTypes.func.isRequired,
  modeTheme: PropTypes.oneOf(["light", "dark"]).isRequired,
};
