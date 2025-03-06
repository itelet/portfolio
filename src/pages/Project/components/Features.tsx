import React from "react";

const Features = ({ features }: { features: string[] }) => {
  return (
    <>
      <span className="text-[#FAFAFA] text-xl font-semibold pt-3 pb-1">
        Features
      </span>
      <span className="text-[#8F8F8F] text-base font-normal pt-2 pb-1 pl-2">
        {features.map((feature) => {
          return (
            <>
              <span className="text-[#585858]">•</span> {feature}
              <br />
            </>
          );
        })}
      </span>
    </>
  );
};

export default Features;
