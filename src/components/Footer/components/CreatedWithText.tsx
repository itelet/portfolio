const CreatedWithText = ({
  handleWebsiteClick,
}: {
  handleWebsiteClick: () => void;
}) => {
  return (
    <span>
      <span
        onClick={handleWebsiteClick}
        className="
                text-[#7DA6FF] 
                underline 
                cursor-pointer 
                hover:text-[#6494e3] 
                transition-colors 
                duration-300
              "
        title="https://github.com/itelet/portfolio"
      >
        Website
      </span>{" "}
      was created with React
    </span>
  );
};

export default CreatedWithText;
