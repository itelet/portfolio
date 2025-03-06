import Header from "../components/Header/Section";
import Line from "../components/utils/Line";
import TechStack from "../components/TechStack/Section";
import Experiences from "../components/Switch/Section";
import Projects from "../components/Projects/Section";

const Home = () => {
  return (
    <>
      <Header />
      <Line />
      <TechStack />
      <Experiences />
      <Projects />
    </>
  );
};

export default Home;
