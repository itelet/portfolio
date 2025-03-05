const TabWrapper = ({ children }: { children: React.ReactNode}) => {
  return <div className="relative z-10 flex h-full">{children}</div>;
};

export default TabWrapper;
