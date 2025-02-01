import GalleryCard from "./GalleryCard";
import { ContentProps } from "./types";

export const Content = ({ galleryData }: ContentProps) => {
  return (
    <div className="container mt-4 d-flex flex-wrap justify-content-center">
      {galleryData.map((gallery, index) => (
        <GalleryCard
          key={index}
          title={gallery.title}
          images={gallery.images}
        />
      ))}
    </div>
  );
};
