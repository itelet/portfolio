import React from "react";

const Image = ({ imgHighRes, title }: { imgHighRes: any, title: string }) => {
  return (
    <img
      src={imgHighRes}
      alt={title}
      className="w-full rounded-lg"
    />
  );
};

export default Image;
