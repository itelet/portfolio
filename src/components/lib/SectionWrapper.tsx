const SectionWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`w-full sm:w-full md:w-full lg:w-[80%] xl:w-[65%] 2xl:w-[50%] justify-start flex flex-col p-4 pb-0 ${className}`}>
      {children}
    </div>
  );
};

export default SectionWrapper;
