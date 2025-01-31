import React from 'react';
import GalleryCard from "./GalleryCard";

import { getGalleryData } from "./GalleryData";

export const Gallery = () => {
  const [galleryData] = React.useState(getGalleryData());

  return (
    <div className="mt-8 pb-8 h-full w-full flex flex-col items-center bg-[#1E1E1E]">
      <div className="mt-4 mb-3">
        <p className="text-[#70C368] font-[Inconsolata] font-extrabold text-3xl">
          GALLERY
        </p>
      </div>
      <div className="container mt-4 d-flex flex-wrap justify-content-center">
        {galleryData.map((gallery, index) => (
          <GalleryCard
            key={index}
            title={gallery.title}
            images={gallery.images}
          />
        ))}
      </div>
    </div>
  );
};
