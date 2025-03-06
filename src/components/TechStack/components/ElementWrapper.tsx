
const ElementWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-wrap">{children}</div>;
};

export default ElementWrapper;