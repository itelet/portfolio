import { CarouselContentProps } from "../types";
import { CarouselImage } from "./CarouselImage";
import { CarouselIndicators } from "./CarouselIndicators";
import { ImageDescription } from "./ImageDescription";
import { IndicatorIcon } from "./IndicatorIcon";

export const CarouselContent = ({
  images,
  currentIndex,
  setCurrentIndex,
}: CarouselContentProps) => {
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative flex-1 w-full h-full">
      <div className="absolute inset-0 flex items-center justify-center">
        {images.map((image, index) => (
          <CarouselImage
            key={index}
            image={image}
            isActive={index === currentIndex}
            index={index}
          />
        ))}
      </div>

      <IndicatorIcon onClick={prevSlide} className="left-4">
        ‹
      </IndicatorIcon>
      <IndicatorIcon onClick={nextSlide} className="right-4">
        ›
      </IndicatorIcon>

      <CarouselIndicators
        images={images}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />

      {images[currentIndex]?.description && (
        <ImageDescription description={images[currentIndex].description} />
      )}
    </div>
  );
};
