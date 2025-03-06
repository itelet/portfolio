import React from "react";

const Title = ({ title }: { title: string }) => {
  return (
    <span className="text-white text-4xl font-bold">{title}</span>
  );
};

export default Title;
