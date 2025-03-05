import React, { useContext } from "react";

import IconSegment from "./components/IconSegment";
import TextContent from "./components/TextContent";
import HeaderWrapper from "./components/HeaderWrapper";
import GreenLine from "./components/GreenLine";
import ContentWrapper from "./components/ContentWrapper";

const Header = () => {
  return (
    <HeaderWrapper>
      <GreenLine />
      <ContentWrapper>
        <TextContent />
        <IconSegment />
      </ContentWrapper>
    </HeaderWrapper>
  );
};

export default Header;
