const RelativeSwitchWrapper = ({
  children,
  activeTab,
  handleToggle,
}: {
  children: React.ReactNode;
  activeTab: string;
  handleToggle: any;
}) => {
  return (
    <a
      href="#"
      className="relative w-full h-12 bg-[#1E1E1E] rounded-xl overflow-hidden font-[Inter] text-xl font-normal block"
      onClick={handleToggle}
      role="switch"
      aria-checked={activeTab === "Work"}
    >
      {children}
    </a>
  );
};

export default RelativeSwitchWrapper;
