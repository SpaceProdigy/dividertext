import { Fade, IconButton } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import PauseIcon from "@mui/icons-material/Pause";
import PropTypes from "prop-types";

export const PauseButton = ({ typed, setIsPaused, isPaused }) => {
  return (
    <IconButton
      sx={{ position: "relative" }}
      variant="outlined"
      size="small"
      onClick={() => {
        typed?.toggle();
        setIsPaused((prevState) => !prevState);
      }}
    >
      <Fade in={!isPaused}>
        <PauseIcon fontSize="small" sx={{ position: "absolute" }} />
      </Fade>
      <Fade in={isPaused}>
        <NavigateNextIcon fontSize="small" />
      </Fade>
    </IconButton>
  );
};

PauseButton.propTypes = {
  typed: PropTypes.object,
  setIsPaused: PropTypes.func,
  isPaused: PropTypes.bool,
};
