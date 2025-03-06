import React from "react";

const Status = ({ status }: { status: string }) => {
  return (
    <>
      <span className="text-[#FAFAFA] text-xl font-semibold pt-3 pb-1">
        Current Status
      </span>
      <span className="text-[#8F8F8F] text-base font-normal pt-2 pb-1">
        {status}
      </span>
    </>
  );
};

export default Status;
