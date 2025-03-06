import Boxes from './Boxes';
import TextWithImage from './TextWithImage';

const About = ({ children }: { children: React.ReactNode }) => {
	return <div className="bg-[#131313] rounded-xl shadow-md">{children}</div>
}

About.Boxes = Boxes;
About.TextWithImage = TextWithImage;

export default About;