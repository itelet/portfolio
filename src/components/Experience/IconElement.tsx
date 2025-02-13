import { IconProps } from "./types"

export const IconElement = ({ icon, text, bgColor, textColor }: IconProps) => {
	return (
		<div className={`flex items-center space-x-2 p-2 h-12 rounded-lg bg-[#2B2B2B]`}>
			<img src={icon} alt="IconElement" className={`w-8 h-8 p-1 rounded-lg ${bgColor}`} />
			<div className={`font-[Inconsolata] font-light text-base text-white`}>{text}</div>
		</div>
	)
} 