import { TextField } from "@mui/material";
import PropTypes from "prop-types";

export const QuantityInput = ({ divide, setDivide }) => {
  return (
    <TextField
      variant="outlined"
      placeholder="Enter quantity"
      label="Quantity divide"
      value={divide}
      onChange={(e) => {
        let value = e.target.value.replace(/\D/g, "");
        value = Math.min(Number(value), 10000);
        setDivide(value);
      }}
    />
  );
};

QuantityInput.propTypes = {
  divide: PropTypes.number.isRequired,
  setDivide: PropTypes.func.isRequired,
};
