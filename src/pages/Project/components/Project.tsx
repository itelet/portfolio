import DemoSourceCode from "./DemoSourceCode";
import Features from "./Features";
import Image from "./Image";
import LastUpdated from "./LastUpdated";
import LongDescription from "./LongDescription";
import OverviewText from "./OverviewText";
import Status from "./Status";
import Title from "./Title";
import TechStack from './TechStack';

const Project = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[800px] text-left font-[Inter] rounded-xl flex flex-col bg-[#131313] p-4">
      {children}
    </div>
  );
};

Project.DemoSourceCode = DemoSourceCode;
Project.Features = Features;
Project.Image = Image;
Project.LastUpdated = LastUpdated;
Project.LongDescription = LongDescription;
Project.OverviewText = OverviewText;
Project.Status = Status;
Project.Title = Title;
Project.TechStack = TechStack;

export default Project;
