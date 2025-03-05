const Tab = ({
  text,
  textClass,
}: {
  text: string;
  textClass: string;
}) => {
  return (
    <div
      className={`w-1/2 flex items-center justify-center transition-colors duration-300	${textClass}`}
    >
      {text}
    </div>
  );
};

export default Tab;
