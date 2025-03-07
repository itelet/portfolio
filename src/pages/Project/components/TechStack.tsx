import React from "react";

const TechStack = ({
  techStack,
}: {
  techStack: {
    frontend: string[];
    backend: string[];
    features: string[];
    devTools: string[];
  };
}) => {
  return (
    <>
      <span className="text-[#FAFAFA] text-xl font-semibold pt-3 pb-1">
        Tech Stack
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-3">
        <div className="rounded-lg border border-[#585858] bg-[#1A1A1A] text-sm text-[#8F8F8F] p-2">
					<span className="font-medium text-base text-white">
            Frontend & UI
          </span>
					{ techStack.frontend.map((elem) => { return <><br />{elem}</> }) }
        </div>
        <div className="rounded-lg border border-[#585858] bg-[#1A1A1A] text-sm text-[#8F8F8F] p-2">
          <span className="font-medium text-base text-white">
            Backend & Data
          </span>
					{ techStack.backend.map((elem) => { return <><br />{elem}</> }) }
        </div>
        <div className="rounded-lg border border-[#585858] bg-[#1A1A1A] text-sm text-[#8F8F8F] p-2">
          <span className="font-medium text-base text-white">
            Features & Utilities
          </span>
					{ techStack.features.map((elem) => { return <><br />{elem}</> }) }
        </div>
        <div className="rounded-lg border border-[#585858] bg-[#1A1A1A] text-sm text-[#8F8F8F] p-2">
          <span className="font-medium text-base text-white">
            Testing & Dev Tools
          </span>
					{ techStack.devTools.map((elem) => { return <><br />{elem}</> }) }
        </div>
      </div>
    </>
  );
};

export default TechStack;
