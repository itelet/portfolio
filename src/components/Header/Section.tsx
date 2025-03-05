import React, { useContext } from "react";

import IconSegment from "./components/IconSegment";
import TextContent from "./components/TextContent";
import HeaderWrapper from "./components/HeaderWrapper";
import GreenLine from "./components/GreenLine";
import ContentWrapper from "./components/ContentWrapper";
import TopWrapper from "../lib/TopWrapper";

const Header = () => {
  return (
		<TopWrapper>
			<HeaderWrapper>
				<GreenLine />
				<ContentWrapper>
					<TextContent />
					<IconSegment />
				</ContentWrapper>
			</HeaderWrapper>
		</TopWrapper>
  );
};

export default Header;
