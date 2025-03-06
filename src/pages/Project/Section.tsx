import React from "react";
import projectsConfig from "../../config/projects";
import TopWrapper from "../../components/lib/TopWrapper";
import SectionWrapper from "../../components/lib/SectionWrapper";
import Project from "./components/Project";

interface IProjectState {
  img: any;
  title: string;
  description: string;
  link: string;
  additional: {
    imgHighRes: any;
    longDescription: string;
    overviewText: string;
    status: string;
    lastUpdate: string;
    features: string[];
    techStack: {
      frontend: string[];
      features: string[];
      backend: string[];
      devTools: string[];
    };
  };
}

const Section = ({ params }: { params: { name: string } }) => {
  const [projectState, setProjectState] = React.useState<null | IProjectState>(
    null
  );

  React.useEffect(() => {
    const isFound = projectsConfig.find((elem) => elem.link === params.name);

    if (isFound && isFound?.additional?.longDescription) {
      setProjectState(isFound);
    }
  }, []);

  React.useEffect(() => {
    console.log("projectState", projectState);
  }, [projectState]);

  if (!projectState) {
    return <></>;
  }

  return (
    <TopWrapper>
      <SectionWrapper className="mt-24">
        <div className="flex justify-center items-center w-full">
          <Project>
            <Project.Title title={projectState.title} />
						<Project.LongDescription longDescription={projectState.additional.longDescription} />
						<Project.LastUpdated lastUpdate={projectState.additional.lastUpdate} />
						<Project.Image imgHighRes={projectState.additional.imgHighRes} title={projectState.title} />
						<Project.DemoSourceCode />
						<Project.OverviewText overviewText={projectState.additional.overviewText} />
						<Project.Features features={projectState.additional.features} />
						<Project.Status status={projectState.additional.status} />
            <Project.TechStack techStack={projectState.additional.techStack} />
          </Project>
        </div>
      </SectionWrapper>
    </TopWrapper>
  );
};

export default Section;
