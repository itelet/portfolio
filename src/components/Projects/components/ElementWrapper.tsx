const ElementWrapper = ({ children, handleClick }: { children: React.ReactNode, handleClick: () => void; }) => {
	return (
		<div
      onClick={handleClick}
      className="
        flex flex-col 
        bg-[#252525] 
        rounded-2xl 
        border 
        border-[#656565] 
        overflow-hidden 
        cursor-pointer 
        transition-all 
        duration-300 
        ease-in-out 
        hover:scale-105 
        hover:shadow-2xl 
        active:scale-100
      "
    >{children}</div>
	)
}

export default ElementWrapper;