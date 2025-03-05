import React, { useEffect, useState } from "react";
import SectionWrapper from "../lib/SectionWrapper";
import Title from "../lib/Title";
import Elements from "./components/Elements";

const Switch = () => {
  return (
    <SectionWrapper className="mt-8 mb-0">
      <Title text={"Projects"} />
			<Elements />
    </SectionWrapper>
  );
};

export default Switch;
