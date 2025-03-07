import Line from "../../components/utils/Line";
import Projects from "../../components/Projects/Section";
import Home from "./components/Home";

const Section = () => {
  return (
    <Home>
      <Home.Header />
      <Line />
      <Home.TechStack />
      <Home.Experiences />
      <Projects />
    </Home>
  );
};

export default Section;
