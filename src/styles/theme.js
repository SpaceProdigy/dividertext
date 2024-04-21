import { createTheme } from "@mui/material";

const mainTheme = (mode) =>
  createTheme({
    palette: {
      mode,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            transition: "background-color 1s ease, color 1s ease",
          },
        },
      },
    },
  });

export default mainTheme;
