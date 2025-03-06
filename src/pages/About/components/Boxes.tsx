import React from "react";
import aboutConfig from "../../../config/about";

const Boxes = () => {
  return (
    <div className="text-left grid grid-cols-1 md:grid-cols-2 gap-3 p-4 pt-0">
      {aboutConfig.map((box, index) => (
        <div
          key={index}
          className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-4 flex flex-col"
        >
          <div className="flex items-center">
            <div className="bg-[#131313] rounded-lg p-2 flex items-center justify-center">
              <img src={box.icon} className="max-h-6 max-w-6" />
            </div>
            <h3 className="pl-2 text-2xl font-[Inter] font-semibold text-white">
              {box.title}
            </h3>
          </div>
          <p className="pt-2 text-[#9A9A9A] whitespace-pre-line">
            {box.content}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Boxes;
