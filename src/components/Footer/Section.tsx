import SectionWrapper from "../lib/SectionWrapper";
import TopWrapper from "../lib/TopWrapper";
import ContentWrapper from "./components/ContentWrapper";
import CopyrightText from "./components/CopyrightText";
import CreatedWithText from "./components/CreatedWithText";

const Section = () => {
  const handleWebsiteClick = () => {
    window.open(
      "https://github.com/itelet/portfolio",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <TopWrapper>
      <SectionWrapper className="mt-8 mb-0">
        <ContentWrapper>
          <CopyrightText />
          <div className="flex flex-row items-center">
            <CreatedWithText handleWebsiteClick={handleWebsiteClick} />
            <img
              src={require("../../assets/icons/love.png")}
              className="pl-1.5"
            />
          </div>
        </ContentWrapper>
      </SectionWrapper>
    </TopWrapper>
  );
};

export default Section;
