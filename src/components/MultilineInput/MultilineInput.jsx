import { StyledTextField } from "./MultilineInput.styled";
import ClearIcon from "@mui/icons-material/Clear";
import { Box, Fade, IconButton, Typography } from "@mui/material";
import PropTypes from "prop-types";

export const MultilineInput = ({ text, setText }) => {
  return (
    <Box style={{ width: "100%", position: "relative" }}>
      <StyledTextField
        placeholder="Enter your text"
        rows={10}
        variant="outlined"
        label="Text"
        multiline
        fullWidth
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <Typography variant="subtitle2">
          Total characters: {text.length}
        </Typography>
        <Fade in={text.length > 0}>
          <IconButton onClick={() => setText("")}>
            <ClearIcon />
          </IconButton>
        </Fade>
      </Box>
    </Box>
  );
};

MultilineInput.propTypes = {
  text: PropTypes.string.isRequired,
  setText: PropTypes.func.isRequired,
};
