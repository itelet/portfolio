import SectionWrapper from "../../../../components/lib/SectionWrapper";
import Title from "../../../../components/lib/Title";
import TopWrapper from "../../../../components/lib/TopWrapper";
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
