const Wrapper = ({ children }: { children: JSX.Element[] }) => {
  return (
    <div className="w-full sm:w-full md:w-full lg:w-[90%] xl:w-[75%] justify-start flex flex-col mt-24 md:mt-28 mb-4 p-4">
      {children}
    </div>
  );
};

export default Wrapper;
