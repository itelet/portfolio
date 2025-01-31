import React from "react";

import { getGalleryData } from "./getGalleryData";
import { Title } from "./Title";
import { Content } from "./Content";
import { Carousel } from "react-responsive-carousel";

export const Gallery = () => {
  const [galleryData] = React.useState(getGalleryData());

  return (
    <div className="mt-8 pb-16 h-full w-full flex flex-col items-center bg-[#1E1E1E]">
      <Title text={"GALLERY"} />
      <Content galleryData={galleryData} />
    </div>
  );
};
