import { useContext } from "react";
import { RootContext } from "../../main";
import { About } from "../../components/About/About";

const Home = () => {
  const { theme } = useContext(RootContext);
  return (
    <>
      <About theme={theme} />
    </>
  );
};

export default Home;
