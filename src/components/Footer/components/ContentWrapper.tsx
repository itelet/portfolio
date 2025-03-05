const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="
        flex 
        flex-col 
        sm:flex-row 
        justify-between 
        w-full 
        bg-[#131313] 
        p-4 
        px-6 
        text-[#9A9A9A] 
        font-[Inter] 
        font-light 
        rounded-t-lg 
        items-center 
        sm:items-center 
        gap-2 
        sm:gap-0
      "
    >
      {children}
    </div>
  );
};

export default ContentWrapper;
