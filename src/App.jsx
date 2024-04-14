import { Suspense, lazy, useContext } from "react";
import { Outlet, Route, Routes } from "react-router-dom";

import { Box, Container } from "@mui/material";

import { RootContext } from "./main";

import { Loader } from "./components/Loader/Loader";
import { HeaderBar } from "./components/AppBar/AppBar.jsx";

// ROUTS
const Home = lazy(() => import("./pages/Home/Home.jsx"));
const Divider = lazy(() => import("./pages/Divider/Divider.jsx"));

function App() {
  const { modeTheme, setModeTheme } = useContext(RootContext);

  return (
    <>
      <HeaderBar setModeTheme={setModeTheme} modeTheme={modeTheme} />

      <Container>
        <Box
          sx={
            {
              // display: "flex",
              // flexDirection: "column",
              // alignItems: "center",
              // gap: 3,
              // margin: "20px 0 40px",
            }
          }
        ></Box>

        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/divider" element={<Divider />} />
          </Routes>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
}

export default App;
