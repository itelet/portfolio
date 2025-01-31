import React, { useState } from "react";
import { GalleryCardElement } from "./GalleryCardElement";
import GalleryCardModal from "./GalleryCardModal";

const GalleryCard = ({ title, images }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <GalleryCardElement 
				setShowModal={setShowModal}
				images={images}
				title={title}
			/>
      <GalleryCardModal 
				showModal={showModal}
				setShowModal={setShowModal}
				images={images}
			/>
    </>
  );
};

export default GalleryCard;
