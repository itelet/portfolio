import SectionWrapper from "../../components/lib/SectionWrapper";
import TopWrapper from "../../components/lib/TopWrapper";

import About from "./components/About";

const Section = () => {
  return (
    <TopWrapper>
      <SectionWrapper className="mt-24 md:mt-32">
        <About>
					<About.TextWithImage />
					<About.Boxes />
				</About>
      </SectionWrapper>
    </TopWrapper>
  );
};

export default Section;
