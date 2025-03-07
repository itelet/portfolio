const Description = ({ description }: { description: string }) => {
  return (
    <span className="font-[Inter] text-[#9A9A9A] text-xs font-normal text-left px-6 mt-2.5 pb-3.5 sm:text-sm">
      {description}
    </span>
  );
};

export default Description;
