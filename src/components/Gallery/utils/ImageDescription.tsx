export const ImageDescription = ({ description }) => (
  <div 
    className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center"
    onClick={(e) => e.stopPropagation()}
  >
    <div className="bg-black/50 px-4 py-2 rounded text-white">
      <p>{description}</p>
    </div>
  </div>
);