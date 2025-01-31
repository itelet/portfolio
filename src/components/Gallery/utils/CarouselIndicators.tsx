export const CarouselIndicators = ({ images, currentIndex, setCurrentIndex }) => (
  <div 
    className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2"
    onClick={(e) => e.stopPropagation()}
  >
    {images.map((_, index) => (
      <button
        key={index}
        onClick={(e) => {
          e.stopPropagation();
          setCurrentIndex(index);
        }}
        className={`w-3 h-3 rounded-full transition-colors ${
          index === currentIndex ? 'bg-white' : 'bg-gray-500 hover:bg-gray-400'
        }`}
      />
    ))}
  </div>
);