import TechStack from "./components/TechStack";

const Section = () => {
  return (
    <TechStack>
      <TechStack.Wrapper>
        <TechStack.Title text={"Tech Stack"} />
        <TechStack.Elements />
      </TechStack.Wrapper>
    </TechStack>
  );
};

export default Section;
