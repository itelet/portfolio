import StackIcon from "tech-stack-icons";
import techStackElements from "../../../config/techStackElements";

const Elements = () => {
  return (
    <ElementWrapper>
      {techStackElements.map((elem) => {
        return <Element title={elem.title} selector={elem.selector} />;
      })}
    </ElementWrapper>
  );
};

const ElementWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-wrap">{children}</div>;
};

const Element = ({
  title,
  selector,
}: {
  title?: string;
  selector?: string;
}) => {
  return (
    <div className="bg-[#363636] rounded-lg items-center flex flex-row mr-2 mb-1.5">
      <div className="h-10">
        <StackIcon name={selector} className="h-10 p-1.5" />
      </div>
      <span className="pl-1.5 pr-2 font-[Inter] text-white font-thin text-base">
        {title}
      </span>
    </div>
  );
};

export default Elements;
