const Block = ({ activeTab }: { activeTab: string }) => {
  return (
    <div
      className={`
            absolute top-1 bottom-1 w-1/2 bg-[#FAFAFA] rounded-lg transition-transform duration-300 ease-in-out
            ${activeTab === "Work" ? "translate-x-0" : "translate-x-full"}
          `}
    />
  );
};

export default Block;