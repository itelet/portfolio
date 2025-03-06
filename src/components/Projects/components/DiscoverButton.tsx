const DiscoverButton = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        handleClick();
      }}
      className="
            font-[Inter] 
            bg-[#1E1E1E] 
            text-[#DDDDDD] 
            text-xs 
            sm:text-sm 
            font-bold 
            px-3 
            py-1 
            rounded-md 
            border 
            border-[#3A3A3A] 
            shadow-[0_4px_13.6px_0_rgba(0,0,0,0.25)]
            cursor-pointer
            hover:bg-[#2A2A2A]
            active:scale-95
          "
    >
      Discover
    </div>
  );
};

export default DiscoverButton;
