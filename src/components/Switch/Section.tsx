import React, { useEffect, useState } from "react";
import SectionWrapper from "../lib/SectionWrapper";
import Title from "../lib/Title";
import SwitchComponent from "./components/SwitchComponent";

const Switch = () => {
  const [activeTab, setActiveTab] = useState("Work");

  const handleToggle = (e: any) => {
    e.preventDefault();
    setActiveTab(activeTab === "Work" ? "Education" : "Work");
  };

  return (
    <SectionWrapper className="mt-8 mb-0">
      <Title text={"Experience"} />
      <SwitchComponent activeTab={activeTab} handleToggle={handleToggle} />
    </SectionWrapper>
  );
};

export default Switch;
