import SectionWrapper from "../lib/SectionWrapper";
import Title from "../lib/Title";
import TopWrapper from "../lib/TopWrapper";
import Elements from "./components/Elements";

const Section = () => {
	return (
		<TopWrapper>
			<SectionWrapper className="mt-24 md:mt-32">
				<Title text={"Tech Stack"} />
				<Elements />
			</SectionWrapper>
	</TopWrapper>
  );
};

export default Section;
