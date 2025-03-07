const ContentWrapper = ({ children }: { children: JSX.Element[] }) => {
  return <div className="ml-4 w-[70%] flex flex-col">{children}</div>;
};

export default ContentWrapper;
