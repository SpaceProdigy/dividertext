import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import PropTypes, { number, string } from "prop-types";

export const QuantityInput = ({ divide = 0, setDivide, text, theme }) => {
  return (
    <FormControl variant="outlined">
      <InputLabel>Quantity divide</InputLabel>
      <OutlinedInput
        label="Quantity divide"
        placeholder="Enter quantity"
        value={divide}
        onChange={(e) => {
          let value = e.target.value.replace(/\D/g, "");

          if (value === "") {
            setDivide("");
          } else {
            const newDivide = Math.min(Number(value), 10000);

            setDivide(() => {
              if (Math.ceil(text.length / 100) > newDivide) {
                return Math.ceil(text.length / 100);
              }

              return newDivide;
            });
          }
        }}
      />
      <FormHelperText style={{ height: 20, color: theme.palette.warning.main }}>
        {divide === 10000 && "Max 10000"}
        {Math.ceil(text.length / 100) === divide && "Max 100 parts"}
      </FormHelperText>
    </FormControl>
  );
};

QuantityInput.propTypes = {
  divide: PropTypes.oneOfType([number, string]),
  setDivide: PropTypes.func.isRequired,
  text: PropTypes.string,
  theme: PropTypes.object,
};
