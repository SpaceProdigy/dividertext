import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import PropTypes from "prop-types";

export const QuantityInput = ({ divide, setDivide }) => {
  return (
    <FormControl variant="outlined">
      <InputLabel>Quantity divide</InputLabel>
      <OutlinedInput
        label="Quantity divide"
        placeholder="Enter quantity"
        value={divide}
        onChange={(e) => {
          let value = e.target.value.replace(/\D/g, "");
          value = Math.min(Number(value), 10000);
          setDivide(value);
        }}
      />
      <FormHelperText style={{ height: 20, color: "#0B6BCB" }}>
        {divide === 10000 && "Max 10000"}
      </FormHelperText>
    </FormControl>
  );
};

QuantityInput.propTypes = {
  divide: PropTypes.number.isRequired,
  setDivide: PropTypes.func.isRequired,
};
