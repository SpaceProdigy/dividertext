import ClearIcon from "@mui/icons-material/Clear";
import {
  Box,
  Fade,
  FormControl,
  FormHelperText,
  IconButton,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

export const MultilineInput = ({ text, setText, theme }) => {
  return (
    <Box style={{ width: "100%", position: "relative" }}>
      <FormControl variant="outlined" fullWidth>
        <InputLabel>Text</InputLabel>
        <OutlinedInput
          placeholder="Enter your text"
          rows={10}
          label="Text"
          multiline
          onChange={(e) =>
            setText(() => {
              return e.target.value.slice(0, 100000);
            })
          }
          value={text}
        />
        <FormHelperText
          style={{ height: 20, color: theme.palette.warning.main }}
        >
          {text.length === 100000 && "Max 100 000 characters"}
        </FormHelperText>
      </FormControl>

      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <Typography variant="subtitle2" color={theme.palette.success.main}>
          Total characters:{" "}
          {String(text.length).replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
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
  theme: PropTypes.object,
};
