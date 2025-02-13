import React, { useContext } from "react";

import IconSegment from "./IconSegment";
import TextContent from "./TextContent";

const Header = () => {
  return (
    <div className="sm:w-full md:w-full lg:w-[90%] xl:w-[70%]  self-center justify-center flex flex-row items-stretch mt-2 mb-4">
      <div className="w-2 bg-[#70C368]" />
      <div className="ml-4 w-[70%] flex flex-col">
        <TextContent />
        <IconSegment />
      </div>
    </div>
  );
};

export default Header;
