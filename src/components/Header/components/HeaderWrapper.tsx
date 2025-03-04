const HeaderWrapper = ({ children }: { children: JSX.Element[] }) => {
  return (
    <div className="sm:w-full md:w-full lg:w-[90%] xl:w-[75%]  self-center justify-center flex flex-row items-stretch mt-20 md:mt-28 mb-4">
      {children}
    </div>
  );
};

export default HeaderWrapper;