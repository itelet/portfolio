const SectionWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`w-full sm:w-full md:w-full lg:w-[90%] xl:w-[75%] justify-start flex flex-col mb-4 p-4 ${className}`}>
      {children}
    </div>
  );
};

export default SectionWrapper;
