const Title = ({ title }: { title: string }) => {
  return (
    <span className="font-[Inter] text-white text-xl sm:text-2xl font-normal truncate max-w-[60%]">
      {title}
    </span>
  );
};

export default Title;
