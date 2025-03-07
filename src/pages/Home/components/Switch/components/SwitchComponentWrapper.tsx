const SwitchComponentWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="w-full bg-[#343434] rounded-xl justify-items-center">{children}</div>;
};

export default SwitchComponentWrapper;
