import React, { useState } from "react";
import { GalleryCardElement } from "./GalleryCardElement";
import GalleryCardModal from "./GalleryCardModal";
import { motion } from "framer-motion";
import { GalleryCardProps } from "./types";

const GalleryCard = ({ title, images }: GalleryCardProps) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
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
    </motion.div>
  );
};

export default GalleryCard;
