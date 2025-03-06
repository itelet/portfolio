const ContentElement = ({
  img,
  fromTo,
  company,
  position,
  description,
}: {
  img: any;
  fromTo: string;
  company: string;
  position: string;
  description: string;
}) => {
  return (
    <div className="flex flex-row mb-6">
      <div className="w-[15%]">
        <img src={img} className="max-h-20 ml-auto p-1" />
      </div>
      <div className="w-[80%] text-left ml-4 flex flex-col">
        <span className="font-[Inter] font-normal text-sm sm:text-base text-[#9A9A9A]">
          {fromTo}
        </span>
        <span className="font-[Inter] pt-1 font-bold text-xl sm:text-2xl text-[#FFFFFF]">
          {company}
        </span>
        <span className="font-[Inter] pt-1 font-medium text-sm sm:text-base text-[#9A9A9A]">
          {position}
        </span>
        <span className="font-[Inter] pt-2 font-normal text-sm sm:text-base text-[#FFFFFF]">
          {description}
        </span>
      </div>
    </div>
  );
};

export default ContentElement;