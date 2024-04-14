import { createTheme } from "@mui/material";

export const mainTheme = (mode) =>
  createTheme({
    palette: {
      mode,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            transition: "background-color 1s ease",
          },
        },
      },
    },
  });
