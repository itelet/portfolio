import { IconProps } from "./types"

export const IconElement = ({ icon, text, bgColor, textColor }: IconProps) => {
	return (
		<div className={`flex items-center space-x-2 p-2 h-8 rounded-lg ${bgColor}`}>
			<img src={icon} alt="IconElement" className="w-6 h-6" />
			<div className={`font-[Inconsolata] font-extrabold text-sm ${textColor}`}>{text}</div>
		</div>
	)
} 