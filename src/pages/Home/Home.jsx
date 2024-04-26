import { About } from "../../components/About/About";
import { arrAboutUs } from "../../utility/arrAboutUs";

const Home = () => {
  return (
    <>
      <About arr={arrAboutUs} />
    </>
  );
};

export default Home;
