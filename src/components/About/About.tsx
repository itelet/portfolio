import { Content } from "./Content";
import { Title } from "./Title";

export const About = () => {
	return (
		<div className="mt-4 w-[95%] sm:w-[95%] md:w-[95%] lg:w-[85%] xl:w-[65%] flex flex-col items-center justify-center bg-[#171717] justify-self-center rounded-lg">
			<Title />
			<Content />
		</div>
	);
};