import React, { useEffect, useState } from "react";
import SectionWrapper from "../lib/SectionWrapper";
import Title from "../lib/Title";
import Elements from "./components/Elements";
import TopWrapper from "../lib/TopWrapper";

const Switch = () => {
  return (
		<TopWrapper>
			<SectionWrapper className="mt-12 mb-0">
				<Title text={"Projects"} />
				<Elements />
			</SectionWrapper>
		</TopWrapper>
  );
};

export default Switch;
