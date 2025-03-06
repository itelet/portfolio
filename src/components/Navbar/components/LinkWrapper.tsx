const LinkWrapper = ({ children }: { children: JSX.Element[] }) => {
  return (
    <div className="flex items-center h-full">
      <div className="grid grid-cols-3 w-full font-[Inter] font-normal text-gray-400">
				{children}
			</div>
    </div>
  );
};

export default LinkWrapper;