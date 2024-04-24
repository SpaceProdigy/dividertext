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
const NotFound = lazy(() => import("./pages/NotFound/NotFound.jsx"));
const SignIn = lazy(() => import("./pages/auth/SignIn/SignIn.jsx"));
const SignUp = lazy(() => import("./pages/auth/SignUp/SignUp.jsx"));

function App() {
  const { theme, modeTheme, setModeTheme } = useContext(RootContext);

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <header>
        <HeaderBar setModeTheme={setModeTheme} modeTheme={modeTheme} />
      </header>
      <main style={{ flex: 1 }}>
        <Container>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/divider" element={<Divider />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Outlet />
          </Suspense>
          <ScrollToTopButton theme={theme} />
        </Container>
      </main>
      <footer style={{ flexShrink: 0 }}>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
