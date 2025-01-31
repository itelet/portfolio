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

import FL1 from "../../assets/images/gallery/freelance/1.png";
import FL2 from "../../assets/images/gallery/freelance/2.png";
import FL3 from "../../assets/images/gallery/freelance/3.png";
import FL4 from "../../assets/images/gallery/freelance/4.png";
import FL5 from "../../assets/images/gallery/freelance/5.png";

export const getGalleryData = () => {
  return [
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
    {
      title: "Freelance",
      images: [
        {
          src: FL1,
          description: "Complex calculator 1",
        },
        {
          src: FL2,
          description: "Email summary",
        },
        {
          src: FL3,
          description: "Complex calculator 2",
        },
        {
          src: FL4,
          description: "Web summary of requirements",
        },
        {
          src: FL5,
          description: "Email summary",
        },
      ],
    },
  ];
};
