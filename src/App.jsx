import { Suspense, lazy, useContext } from "react";
import { Outlet, Route, Routes } from "react-router-dom";

import { Container } from "@mui/material";

import { RootContext } from "./main";

import { Loader } from "./components/Loader/Loader";
import { HeaderBar } from "./components/AppBar/AppBar.jsx";
import { ScrollToTopButton } from "./components/ScrollToTopButton/ScrollToTopButton.jsx";
import { Footer } from "./components/Footer/Footer.jsx";

// ROUTS
const Home = lazy(() => import("./pages/Home/Home.jsx"));
const Divider = lazy(() => import("./pages/Divider/Divider.jsx"));

function App() {
  const { theme, modeTheme, setModeTheme } = useContext(RootContext);

  return (
    <>
      <HeaderBar setModeTheme={setModeTheme} modeTheme={modeTheme} />

      <Container>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/divider" element={<Divider />} />
          </Routes>
          <Outlet />
        </Suspense>
        <ScrollToTopButton theme={theme} />
      </Container>
      <Footer />
    </>
  );
}

export default App;
