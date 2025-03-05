import SectionWrapper from "../lib/SectionWrapper";
import Title from "../lib/Title";
import Elements from "./components/Elements";

const Section = () => {
	return (
	<SectionWrapper className="mt-24 md:mt-28">
		<Title text={"Tech Stack"} />
		<Elements />
	</SectionWrapper>
  );
};

export default Section;
