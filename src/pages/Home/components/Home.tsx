import Header from "./Header/Section";
import TechStack from './TechStack/Section';
import Experiences from './Switch/Section';

const Home = ({ children }: { children: React.ReactNode }) => {
	return <div>{children}</div>
}

Home.Header = Header;
Home.TechStack = TechStack;
Home.Experiences = Experiences;

export default Home;