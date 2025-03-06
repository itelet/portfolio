import SectionWrapper from "../../components/lib/SectionWrapper";
import TopWrapper from "../../components/lib/TopWrapper";
import ProjectElements from "../../components/Projects/components/Elements";

const Projects = () => {
  return (
    <TopWrapper>
      <SectionWrapper className="mt-24 md:mt-32">
				<ProjectElements />
      </SectionWrapper>
    </TopWrapper>
  );
};

export default Projects;
