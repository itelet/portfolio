import React, { useState } from "react";

const IconElement = ({
  href,
  text,
  icon,
}: {
  href: string;
  text: string;
  icon: JSX.Element;
}) => {
  const [displayText, setDisplayText] = useState(text);

  const handleClick = (e: React.MouseEvent) => {
    if (!href) {
      e.preventDefault();
      navigator.clipboard.writeText("szabo.adam.0725@gmail.com").then(() => {
        setDisplayText("Copied!");
        setTimeout(() => setDisplayText(text), 1500);
      });
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={href}
      onClick={handleClick}
      className="h-10 rounded-lg bg-[#1E1E1E] flex flex-row border-[1px] border-[#3A3A3A] transition-all duration-300 hover:scale-105 hover:bg-white text-[#DDDDDD] hover:text-[#1E1E1E] shadow-[0_4px_13.6px_0_rgba(0,0,0,0.25)] mr-3"
    >
      <span className="self-center pl-4 font-[Inter] font-semibold text-lg">
        {displayText}
      </span>
      <div className="p-1.5">{icon}</div>
    </a>
  );
};

export default IconElement;
