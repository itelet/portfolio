import Block from "./Block";
import Content from "./Content";
import RelativeSwitchWrapper from "./RelativeSwitchWrapper";
import SwitchComponentWrapper from "./SwitchComponentWrapper";
import Tab from "./Tab";
import TabWrapper from "./TabWrapper";

// TODO check event arg type
const SwitchComponent = ({
  activeTab,
  handleToggle,
}: {
  activeTab: string;
  handleToggle: (e: any) => void;
}) => {
  return (
    <SwitchComponentWrapper>
      <RelativeSwitchWrapper activeTab={activeTab} handleToggle={handleToggle}>
        <Block activeTab={activeTab} />
        <TabWrapper>
          <Tab
            text={"Work"}
            textClass={
              activeTab === "Work" ? "text-[#272727]" : "text-[#9A9A9A]"
            }
          />
          <Tab
            text={"Education"}
            textClass={
              activeTab === "Education" ? "text-[#272727]" : "text-[#9A9A9A]"
            }
          />
        </TabWrapper>
      </RelativeSwitchWrapper>
			<Content activeTab={activeTab} />
    </SwitchComponentWrapper>
  );
};

export default SwitchComponent;
