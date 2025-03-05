import React from "react";

import projectsConfig from "../../../config/projects";

const Elements = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
      {projectsConfig.map((elem) => {
        const { img, title, description } = elem;
        return (
          <Element
            key={description}
            img={img}
            title={title}
            description={description}
          />
        );
      })}
    </div>
  );
};

const Element = ({
  img,
  title,
  description,
}: {
  img: string;
  title: string;
  description: string;
}) => {
  // const navigate = useNavigate();

  const handleClick = () => {
    // Replace with your actual navigation logic
    // For example:
    // navigate(`/project/${title.toLowerCase().replace(/\s+/g, '-')}`);
    console.log(`Clicked on project: ${title}`);
  };

  return (
    <div
      onClick={handleClick}
      className="
        flex flex-col 
        bg-[#252525] 
        rounded-2xl 
        border 
        border-[#656565] 
        overflow-hidden 
        cursor-pointer 
        transition-all 
        duration-300 
        ease-in-out 
        hover:scale-105 
        hover:shadow-2xl 
        active:scale-100
      "
    >
      {/* image */}
      <div className="w-full aspect-video">
        <img
          src={img}
          className="w-full h-full object-cover rounded-t-2xl"
          alt={title}
        />
      </div>
      <div className="flex flex-row items-center justify-between mt-4 px-6">
        <span className="font-[Inter] text-white text-xl sm:text-2xl font-normal truncate max-w-[60%]">
          {title}
        </span>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="
            font-[Inter] 
            bg-[#1E1E1E] 
            text-[#DDDDDD] 
            text-xs 
            sm:text-sm 
            font-bold 
            px-3 
            py-1 
            rounded-md 
            border 
            border-[#3A3A3A] 
            shadow-[0_4px_13.6px_0_rgba(0,0,0,0.25)]
            cursor-pointer
            hover:bg-[#2A2A2A]
            active:scale-95
          "
        >
          Discover
        </div>
      </div>
      <span className="font-[Inter] text-[#9A9A9A] text-xs font-normal text-left px-6 mt-2.5 pb-3.5">
        {description}
      </span>
    </div>
  );
};

export default Elements;
