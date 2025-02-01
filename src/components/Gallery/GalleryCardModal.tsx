import React from "react";
import { CarouselContent } from "./utils/CarouselContent";
import { CloseButton } from "./utils/CloseButton";
import { GalleryCardModalProps } from "./types";

const GalleryCardModal = ({
  showModal,
  setShowModal,
  images,
  backdropClass = "bg-black/50",
}: GalleryCardModalProps) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!showModal) return;
      if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      }
      if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }
      if (e.key === 'Escape') setShowModal(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showModal, images.length, setShowModal]);

  if (!showModal) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center ${backdropClass}`}
      onClick={() => setShowModal(false)}
    >
      <div className="relative w-full h-full max-h-screen flex flex-col">
        <CloseButton onClick={() => setShowModal(false)} />
        <CarouselContent
          images={images}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
    </div>
  );
};

export default GalleryCardModal;
