import { Card } from "react-bootstrap";
import ClickIcon from "../../assets/icons/click_icon.png";
import { GalleryCardElementProps } from "./types";

export const GalleryCardElement = ({
  setShowModal,
  images,
  title,
}: GalleryCardElementProps) => {
  return (
    <Card
      className="m-2 w-72 cursor-pointer bg-[#1e1e1e] relative"
      style={{ border: "none" }}
      onClick={() => setShowModal(true)}
    >
      <div className="relative">
        <Card.Img
          variant="top"
          src={images[0].src}
          alt={images[0].description}
          className="border-none w-full h-48 object-cover"
        />
        <div className="absolute bottom-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2">
          <img src={ClickIcon} className="w-10 h-10" />
        </div>
      </div>
      <Card.Body className="bg-[#272727] text-white font-[Inconsolata] font-extrabold text-xl">
        {title}
      </Card.Body>
    </Card>
  );
};
