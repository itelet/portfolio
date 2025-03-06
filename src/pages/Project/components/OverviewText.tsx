import React from "react";

const OverviewText = ({ overviewText }: { overviewText: string }) => {
  return (
    <>
      <span className="text-[#FAFAFA] text-xl font-semibold pt-3 pb-1">
        Overview
      </span>
      <span className="text-[#8F8F8F] text-base font-normal pt-2 pb-1 whitespace-pre-line">
        {overviewText}
      </span>
    </>
  );
};

export default OverviewText;
