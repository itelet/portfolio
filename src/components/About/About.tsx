import { Content } from "./Content";
import { Title } from "./Title";

export const About = () => {
	return (
		<div className="mt-8 bg-[#1E1E1E] h-full w-full flex flex-col items-center">
			<Title />
			<Content />
		</div>
	);
};