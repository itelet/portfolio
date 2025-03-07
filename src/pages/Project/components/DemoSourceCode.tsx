import React from "react";

const DemoSourceCode = ({
  demo,
  sourceCode,
}: {
  demo: null | string;
  sourceCode: null | string;
}) => {
  return (
    <div className="w-full grid grid-cols-2 mt-2 gap-2 text-center">
      <a
        href={demo ?? undefined}
        target={demo ? "_blank" : undefined}
        rel={demo ? "noopener noreferrer" : undefined}
        aria-disabled={demo ? undefined : "true"}
        className={`p-1 rounded-md bg-[#1A1A1A] border border-[#585858] text-white ${
          demo ? "hover:bg-[#2A2A2A]" : "opacity-50 cursor-not-allowed pointer-events-none select-none"
        }`}
      >
        Demo
      </a>
      <a
        href={sourceCode ?? undefined}
        target={sourceCode ? "_blank" : undefined}
        rel={sourceCode ? "noopener noreferrer" : undefined}
        aria-disabled={sourceCode ? undefined : "true"}
        className={`p-1 rounded-md bg-[#1A1A1A] border border-[#585858] text-white ${
          sourceCode ? "hover:bg-[#2A2A2A]" : "opacity-50 cursor-not-allowed pointer-events-none select-none"
        }`}
      >
        Source code
      </a>
    </div>
  );
};

export default DemoSourceCode;
