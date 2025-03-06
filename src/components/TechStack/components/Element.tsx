import StackIcon from "tech-stack-icons";

const Element = ({
  title,
  selector,
}: {
  title?: string;
  selector?: string;
}) => {
  return (
    <div className="bg-[#363636] rounded-lg items-center flex flex-row mr-2 mb-1.5">
      <div className="h-8 sm:h-10">
        <StackIcon name={selector} className="h-8 sm:h-10 p-1.5" />
      </div>
      <span className="pl-1.5 pr-2 font-[Inter] text-white font-thin text-sm sm:text-lg">
        {title}
      </span>
    </div>
  );
};

export default Element;