import GalleryCard from "./GalleryCard";

import ST1 from "../../assets/images/gallery/solidtaste/1.png";
import ST2 from "../../assets/images/gallery/solidtaste/2.png";
import ST3 from "../../assets/images/gallery/solidtaste/3.png";
import ST4 from "../../assets/images/gallery/solidtaste/4.png";
import ST5 from "../../assets/images/gallery/solidtaste/5.png";
import ST6 from "../../assets/images/gallery/solidtaste/6.png";
import ST7 from "../../assets/images/gallery/solidtaste/7.png";
import ST8 from "../../assets/images/gallery/solidtaste/8.png";
import ST9 from "../../assets/images/gallery/solidtaste/9.png";

import GD1 from "../../assets/images/gallery/gd/1.jpg";
import GD2 from "../../assets/images/gallery/gd/2.jpg";
import GD3 from "../../assets/images/gallery/gd/3.jpg";
import GD4 from "../../assets/images/gallery/gd/4.jpg";

export const Gallery = () => {
  const galleryData = [
    {
      title: "Solid Taste",
      images: [
        {
          src: ST1,
          description: "Recipes screen",
        },
        {
          src: ST2,
          description: "Single recipe screen",
        },
        {
          src: ST3,
          description: "Meal planner screen",
        },
        {
          src: ST4,
          description: "Cooking mode screen",
        },
        {
          src: ST5,
          description: "Shopping list screen",
        },
        {
          src: ST6,
          description: "Shopping list details",
        },
        {
          src: ST7,
          description: "Settings screen",
        },
        {
          src: ST8,
          description: "Dark mode recipes screen",
        },
        {
          src: ST9,
          description: "Dark mode search screen",
        },
      ],
    },
    {
      title: "Gamma Digital Kft.",
      images: [
        {
          src: GD1,
          description: "Crane warehouse structure",
        },
        {
          src: GD2,
          description: "Crane warehouse structure",
        },
        {
          src: GD3,
          description: "AGV (Automated Guided Vehicle)",
        },
        {
          src: GD4,
          description: "AGV in action",
        },
      ],
    },
  ];

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
