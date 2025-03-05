const TopWrapper = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="App flex flex-col justify-center items-center">
      {children}
    </div>
  );
};

export default TopWrapper;
