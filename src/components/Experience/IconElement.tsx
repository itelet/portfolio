export const IconElement = ({ icon, text, bgColor, textColor }) => {
	return (
		<div className={`flex items-center space-x-2 p-2 h-8 rounded-lg ${bgColor}`}>
			<img src={icon} alt="My Icon" className="w-6 h-6" />
			<div className={`font-[Inconsolata] font-extrabold text-sm ${textColor}`}>{text}</div>
		</div>
	)
} 