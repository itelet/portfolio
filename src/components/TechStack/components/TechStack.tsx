import Elements from "./Elements";
import Wrapper from "./Wrapper";
import Title from "./Title";

const TechStack = ({ children }: { children: JSX.Element }) => {
  return <>{children}</>;
};

TechStack.Wrapper = Wrapper;
TechStack.Title = Title;
TechStack.Elements = Elements;

export default TechStack;
