import React, { createContext, useMemo, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { mainTheme } from "./styles/theme";
import { BrowserRouter } from "react-router-dom";

export const RootContext = createContext();

const Root = () => {
  const [modeTheme, setModeTheme] = useState(
    localStorage.getItem("theme") ?? "dark"
  );

  const theme = useMemo(() => {
    localStorage.setItem("theme", modeTheme);
    return mainTheme(modeTheme);
  }, [modeTheme]);

  return (
    <React.StrictMode>
      <BrowserRouter basename="/helper">
        <RootContext.Provider value={{ theme, modeTheme, setModeTheme }}>
          <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme={true}>
              <App />
            </CssBaseline>
          </ThemeProvider>
        </RootContext.Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
