import React from "react";

const LongDescription = ({ longDescription }: { longDescription: string }) => {
  return (
    <span className="text-[#8F8F8F] text-base font-normal pt-4">
      {longDescription}
    </span>
  );
};

export default LongDescription;
