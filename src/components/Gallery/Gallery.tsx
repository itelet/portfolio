import React from "react";

import { getGalleryData } from "./getGalleryData";
import { Title } from "./Title";
import { Content } from "./Content";

export const Gallery = () => {
  const [galleryData] = React.useState(getGalleryData());

  return (
    <div className="mt-4 pb-4 mb-4 w-[95%] sm:w-[95%] md:w-[95%] lg:w-[85%] xl:w-[65%] flex flex-col items-center justify-center bg-[#171717] justify-self-center rounded-lg">
      <Title />
      <Content galleryData={galleryData} />
    </div>
  );
};
