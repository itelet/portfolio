export const CloseButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-4 z-50 text-white bg-black/50 p-2 rounded-full hover:bg-black/70"
  >
    ✕
  </button>
);