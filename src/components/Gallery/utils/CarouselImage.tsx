import { CarouselImageProps } from "../types";

export const CarouselImage = ({ image, isActive, index }: CarouselImageProps) => (
  <div
    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
      isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}
  >
    <img
      src={image.src}
      alt={`Slide ${index + 1}`}
      className="max-h-full max-w-full h-auto w-auto object-contain"
      onClick={(e) => e.stopPropagation()}
    />
  </div>
);
