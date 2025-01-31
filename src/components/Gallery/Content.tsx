import GalleryCard from "./GalleryCard";

export const Content = ({ galleryData }) => {
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
